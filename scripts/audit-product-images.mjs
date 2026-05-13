#!/usr/bin/env node
/**
 * Audituoja statinius `/images/...` kelius duomenų failuose:
 * - ar failas egzistuoja po `public/`
 * - ar kelias nėra akivaizdus placeholder (pvz. „ChatGPT“ pavadinime)
 * - ar paveikslėlio kelias bent iš dalies sutampa su produkto `href` slug (heuristika)
 *
 * Paleidimas:
 *   npm run audit:images
 *   npm run audit:images:warn   (visada exit 0 — tik ataskaita)
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const PUBLIC = path.join(ROOT, "public");

const SCAN_GLOBS_DIRS = [path.join(ROOT, "data"), path.join(ROOT, "lib")];

/** Žodžiai slug dalyje, kurių neimame kaip signalo į failo vardą (per dažni / bendri). */
const SLUG_STOPWORDS = new Set([
  "sistema",
  "sistemos",
  "hi",
  "n",
  "e",
  "md",
  "standard",
  "weiss",
  "web",
  "official",
]);

const IMAGE_EXT = /\.(png|jpe?g|webp|gif|svg|avif)$/i;

function walkTsFiles(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const name of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, name.name);
    if (name.isDirectory()) walkTsFiles(full, out);
    else if (name.isFile() && name.name.endsWith(".ts")) out.push(full);
  }
  return out;
}

function collectFiles() {
  const set = new Set();
  for (const d of SCAN_GLOBS_DIRS) {
    for (const f of walkTsFiles(d)) set.add(f);
  }
  return [...set].sort();
}

function slugFromProductHref(href) {
  const h = href.replace(/\/+$/, "");
  const parts = h.split("/").filter(Boolean);
  if (parts.length < 2) return null;
  return parts[parts.length - 1];
}

function isTrackedProductHref(href) {
  if (!href.startsWith("/") || href.includes("#")) return false;
  const prefixes = [
    "/langai/",
    "/durys/",
    "/stiklinimas/",
    "/stumdomos-sistemos/",
    "/aliuminio-sprendimai/",
    "/ziemos-sodai/",
  ];
  return prefixes.some((p) => href.startsWith(p)) && href.split("/").filter(Boolean).length >= 2;
}

function slugTokens(slug) {
  if (!slug) return [];
  return slug
    .split("-")
    .map((t) => t.toLowerCase().trim())
    .filter((t) => t.length >= 2 && !SLUG_STOPWORDS.has(t));
}

function imagePathMatchesSlug(imagePath, slug) {
  const base = path.basename(imagePath).replace(IMAGE_EXT, "").toLowerCase();
  const dir = imagePath.toLowerCase();
  const hay = `${dir}/${base}`.replace(/\\/g, "/");
  const tokens = slugTokens(slug);
  if (tokens.length === 0) return true;
  let hits = 0;
  for (const t of tokens) {
    if (hay.includes(t)) hits++;
  }
  const slugCompact = slug.replace(/-/g, "").toLowerCase();
  if (slugCompact.length >= 6 && hay.includes(slugCompact)) return true;
  return hits >= Math.min(2, Math.max(1, Math.ceil(tokens.length / 2)));
}

/** Randa dabartinio objekto pradžią: po ankstesnio `};` / `  },` arba ties `export const ... = {` / `  {`. */
function findLocalBlockStart(lines, hrefLineIndex) {
  for (let k = hrefLineIndex - 1; k >= 0; k--) {
    if (/^\s*\};\s*$/.test(lines[k])) return k + 1;
    if (/^\s*\},\s*$/.test(lines[k])) return k + 1;
  }
  for (let k = hrefLineIndex - 1; k >= 0; k--) {
    if (/^export const\s.+\{\s*$/.test(lines[k])) return k;
  }
  for (let k = hrefLineIndex - 1; k >= 0; k--) {
    if (/^\s*\{\s*$/.test(lines[k])) return k;
  }
  for (let k = hrefLineIndex - 1; k >= 0; k--) {
    if (/^export const\s/.test(lines[k])) return k;
  }
  return Math.max(0, hrefLineIndex - 90);
}

function extractHrefImagePairs(content, fileRel) {
  const lines = content.split(/\r?\n/);
  const pairs = [];

  for (let i = 0; i < lines.length; i++) {
    const hrefLine = lines[i].match(/href:\s*"([^"]+)"/);
    if (!hrefLine) continue;
    const href = hrefLine[1];
    if (!isTrackedProductHref(href)) continue;

    const slug = slugFromProductHref(href);
    const windowStart = findLocalBlockStart(lines, i);
    const before = lines.slice(windowStart, i + 1);

    const images = new Set();
    for (const line of before) {
      const im = line.match(/^\s*image:\s*["']([^"']+)["']/);
      if (im?.[1]?.startsWith("/images/")) images.add(im[1]);
      const gal1 = line.match(/gallery:\s*\[\s*"([^"]+)"\s*\]/);
      if (gal1?.[1]?.startsWith("/images/")) images.add(gal1[1]);
      const galMulti = line.match(/gallery:\s*\[([^\]]+)\]/);
      if (galMulti?.[1]) {
        let gm;
        const sub = /\/images\/[^"'\s,]+\.(?:png|jpe?g|webp|gif|svg|avif)/gi;
        while ((gm = sub.exec(galMulti[1])) !== null) images.add(gm[0]);
      }
    }

    for (const imagePath of images) {
      pairs.push({ href, slug, imagePath, fileRel, line: i + 1 });
    }
  }
  return pairs;
}

function allImageStringsInFile(content) {
  const found = new Set();
  const re = /["'](\/images\/[^"']+\.(?:png|jpe?g|webp|gif|svg|avif))["']/gi;
  let m;
  while ((m = re.exec(content)) !== null) found.add(m[1]);
  return [...found];
}

function existsPublic(rel) {
  const local = path.join(PUBLIC, rel.replace(/^\//, ""));
  return fs.existsSync(local);
}

function main() {
  const noFail = process.argv.includes("--no-fail");

  const files = collectFiles();
  const missing = [];
  const chatgpt = [];
  const slugMismatch = [];
  const seenPair = new Set();

  for (const abs of files) {
    const relFile = path.relative(ROOT, abs);
    const content = fs.readFileSync(abs, "utf8");

    for (const img of allImageStringsInFile(content)) {
      if (!IMAGE_EXT.test(img)) continue;
      if (!existsPublic(img)) {
        missing.push({ file: relFile, image: img });
      }
      if (/ChatGPT/i.test(img) || /May \d+, \d{4}/i.test(img)) {
        chatgpt.push({ file: relFile, image: img });
      }
    }

    for (const row of extractHrefImagePairs(content, relFile)) {
      const key = `${row.href}|${row.imagePath}`;
      if (seenPair.has(key)) continue;
      seenPair.add(key);
      if (!row.slug || !row.imagePath.startsWith("/images/")) continue;
      if (/ChatGPT/i.test(row.imagePath)) continue;
      if (!imagePathMatchesSlug(row.imagePath, row.slug)) {
        slugMismatch.push({
          file: relFile,
          line: row.line,
          href: row.href,
          slug: row.slug,
          image: row.imagePath,
        });
      }
    }
  }

  const fmt = (rows, title) => {
    if (rows.length === 0) {
      console.log(`\n✓ ${title}: problemų nėra.`);
      return;
    }
    console.log(`\n⚠ ${title} (${rows.length}):`);
    for (const r of rows) {
      if (r.line) console.log(`  - ${r.file}:${r.line}\n    href: ${r.href}\n    ${r.image ? `image: ${r.image}` : ""}${r.slug ? `\n    slug: ${r.slug}` : ""}`);
      else console.log(`  - ${r.file}\n    image: ${r.image}`);
    }
  };

  console.log("Langana — paveikslėlių kelių auditas");
  console.log("Skenuojama:", SCAN_GLOBS_DIRS.map((d) => path.relative(ROOT, d)).join(", "));

  fmt(missing, "Trūkstami failai (nuoroda į /images/..., bet nėra public/)");
  fmt(chatgpt, "Placeholder / generuoti pavadinimai (ChatGPT / data faile)");
  fmt(slugMismatch, "Heuristika: slug ir failo kelias silpnai sutampa (verta peržiūrėti ranka)");

  const exitBad = missing.length > 0 ? 1 : 0;
  process.exitCode = noFail ? 0 : exitBad;

  console.log(
    "\nPastaba: „slug neatitinka“ gali klaidingai signalizuoti, jei naudojate bendrą katalogo nuotrauką — vis tiek patikrinkite ar vizualiai tinka produktui.",
  );
}

main();

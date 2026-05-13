#!/usr/bin/env node
/**
 * Ištraukia produktų pavadinimus / kategorijas iš `data/*.ts` ir sugeneruoja
 * paieškos nuorodas (Google Images, DuckDuckgo, bendra paieška) su užklausomis,
 * orientuotomis į oficialius gamintojų katalogus, technines PDF, 3D / CAD / render vaizdus.
 *
 * Automatiškai NEparsisiunčia ir NEkopijuoja failų iš interneto — tik nuorodos rankiniam darbui
 * su teisiškai tinkamais šaltiniais (gamintojo spauda, sutartys, stock su licencija).
 *
 * Paleidimas:
 *   node scripts/product-media-research.mjs
 *   node scripts/product-media-research.mjs --out reports/product-media-research.md
 *   npm run research:product-media
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const DATA = path.join(ROOT, "data");

const PRODUCT_HREF =
  /^\s*href:\s*"(\/(?:langai|durys|stiklinimas|stumdomos-sistemos|aliuminio-sprendimai|ziemos-sodai)\/[a-z0-9/-]+)"\s*,?\s*$/;

/** Katalogo šaknys, kur ne produkto kortelė (filtruojame). */
const CATEGORY_SLUGS = new Set([
  "langai",
  "durys",
  "stiklinimas",
  "stumdomos-sistemos",
  "aliuminio-sprendimai",
  "ziemos-sodai",
  "plastikiniai-langai",
  "aliuminio-langai",
  "balkonu-stiklinimas",
  "terasu-stiklinimas",
  "aliuminio-fasadai",
  "aliuminio-pertvaros",
  "aliumines-stumdomos-sistemos",
  "plastikines-stumdomos-sistemos",
]);

function walkTsFiles(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const name of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, name.name);
    if (name.isDirectory()) {
      if (name.name === "product-inner") continue;
      walkTsFiles(full, out);
    } else if (name.isFile() && name.name.endsWith(".ts")) out.push(full);
  }
  return out;
}

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

function parseBlock(lines, start, endIncl) {
  const slice = lines.slice(start, endIncl + 1).join("\n");
  const title = slice.match(/title:\s*"([^"]+)"/)?.[1] ?? null;
  const categoryLabel = slice.match(/categoryLabel:\s*"([^"]+)"/)?.[1] ?? null;
  return { title, categoryLabel };
}

function isLeafProductHref(href) {
  const parts = href.replace(/\/+$/, "").split("/").filter(Boolean);
  if (parts.length < 2) return false;
  const leaf = parts[parts.length - 1];
  if (CATEGORY_SLUGS.has(leaf)) return false;
  return true;
}

function manufacturerHint(title, href) {
  const t = `${title} ${href}`.toLowerCase();
  if (t.includes("kommerling") || t.includes("kömm")) return "Profine / Kömmerling (Vokietija) — ieškoti gamintojo PDF, „Proline“ katalogų, presse nuotraukų.";
  if (t.includes("wital")) return "Wital (Lenkija) — oficialūs katalogai, produktų vizualai.";
  if (t.includes("veka")) return "VEKA — oficialūs rinkodariniai / techniniai leidiniai.";
  if (t.includes("yawal") || /tm-|dp-|fa-|pbi-|pi-|l-50|harmonic/.test(t))
    return "Yawal (PL) — DP / TM / FA / PBI / PI sistemos: techniniai katalogai, BIM / CAD, architektų renderiai.";
  return "Ieškoti pagal tikslų sistemos pavadinimą gamintojo svetainėje arba oficialių platintojų medijos rinkinių.";
}

function enc(q) {
  return encodeURIComponent(q);
}

function searchUrls(queries) {
  const out = [];
  for (const q of queries) {
    out.push({
      label: q,
      googleImages: `https://www.google.com/search?tbm=isch&q=${enc(q)}`,
      duckImages: `https://duckduckgo.com/?q=${enc(q)}&iax=images&ia=images`,
      web: `https://www.google.com/search?q=${enc(q)}`,
    });
  }
  return out;
}

function buildQueries(title, categoryLabel, href) {
  const slug = href.split("/").filter(Boolean).pop() ?? "";
  const cat = (categoryLabel ?? "").toLowerCase();
  const baseLt = `${title} ${categoryLabel ?? ""}`.trim();

  const visualHint =
    cat.includes("fasad")
      ? "fasadas 3D render architektūra"
      : cat.includes("pertvar")
        ? "pertvara vitrina 3D render"
        : cat.includes("durys") || href.includes("/durys/")
          ? "durys 3D render produktas"
          : cat.includes("stumdom") || href.includes("stumdomos")
            ? "stumdomos durys terasa 3D render"
            : cat.includes("stiklin")
              ? "stiklinimas balkonas 3D vizualizacija"
              : "langas 3D renderis profilis";

  const q = [];
  q.push(`${baseLt} ${visualHint}`);
  q.push(`${title} CAD BIM product visualization`);
  q.push(`${title} official catalog PDF`);
  if (/tm-|dp-|fa-|pbi|pi-|l-50|harmonic/i.test(title + href)) {
    q.push(`site:yawal.com ${title.replace(/\s*sistema\s*$/i, "").trim()} brochure`);
    q.push(`Yawal ${title.replace(/\s*sistema\s*$/i, "").trim()} technical drawings`);
  }
  if (/kommerling|kömm/i.test(title)) {
    q.push(`Kömmerling ${title} Profiline catalog images`);
  }
  if (/wital/i.test(title)) {
    q.push(`Wital ${title} catalog product render`);
  }
  if (/veka/i.test(title)) {
    q.push(`VEKA Softline catalog 3D`);
  }
  q.push(`${slug.replace(/-/g, " ")} system architectural render`);
  return [...new Set(q)].slice(0, 6);
}

function extractAllProducts() {
  const files = walkTsFiles(DATA);
  const byHref = new Map();

  for (const abs of files) {
    const rel = path.relative(ROOT, abs);
    const lines = fs.readFileSync(abs, "utf8").split(/\r?\n/);
    for (let i = 0; i < lines.length; i++) {
      const m = lines[i].match(PRODUCT_HREF);
      if (!m) continue;
      const href = m[1];
      if (!isLeafProductHref(href)) continue;
      const start = findLocalBlockStart(lines, i);
      const { title, categoryLabel } = parseBlock(lines, start, i);
      if (!title) continue;
      byHref.set(href, {
        href,
        title,
        categoryLabel: categoryLabel ?? "",
        file: rel,
        line: i + 1,
      });
    }
  }
  return [...byHref.values()].sort((a, b) => a.href.localeCompare(b.href));
}

function markdownReport(products) {
  const lines = [];
  lines.push("# Produktų medijos paieška (nuorodos rankiniam darbui)");
  lines.push("");
  lines.push(
    "> **Teisės:** naudokite tik mediją, kuriai turite teises (gamintojo sutartis, stock su licencija, savo renderiai). " +
      "Šis dokumentas **neautomatiškai** neparsisiunčia failų ir nepažeidžia trečiųjų šalių autorių teisių.",
  );
  lines.push(
    "> **3D / renderiai:** dažniausiai randami gamintojo **techniniuose kataloguose**, **BIMobject** ar panašiose **CAD bibliotekose**, " +
      "arba užsakomuose vizualizacijos projektuose — žemiau užklausos suformuotos ta kryptimi.",
  );
  lines.push("");
  lines.push(`**Produktų iš duomenų failų:** ${products.length}`);
  lines.push("");
  lines.push("---");
  lines.push("");

  for (const p of products) {
    const queries = buildQueries(p.title, p.categoryLabel, p.href);
    const urls = searchUrls(queries);
    const hint = manufacturerHint(p.title, p.href);

    lines.push(`## ${p.title}`);
    lines.push("");
    lines.push(`- **Puslapis:** \`${p.href}\``);
    lines.push(`- **Kategorija:** ${p.categoryLabel || "—"}`);
    lines.push(`- **Šaltinis duomenyse:** \`${p.file}\` (eil. ${p.line})`);
    lines.push(`- **Gamintojas / kryptis:** ${hint}`);
    lines.push("");
    lines.push("### Siūlomos paieškos (paspauskite nuorodą)");
    lines.push("");
    let qi = 1;
    for (const u of urls.slice(0, 5)) {
      lines.push(`${qi}. **${u.label}**`);
      lines.push(`   - [Google vaizdai](${u.googleImages})`);
      lines.push(`   - [DuckDuckGo vaizdai](${u.duckImages})`);
      lines.push(`   - [Bendra paieška](${u.web})`);
      lines.push("");
      qi++;
    }
    lines.push("---");
    lines.push("");
  }

  lines.push("## Pastaba dėl „kaip languose“ renderių");
  lines.push("");
  lines.push(
    "Tikslūs 3D pjūviai (profilio skerspjūvis, varčių konstrukcija) beveik visada ateina iš **gamintojo CAD** arba **vizualizacijos partnerių**. " +
      "Svetainės hero dažnai naudoja **bendresnį architektūrinį renderį** + ant jo tekstą — tai normalu, jei vizualiai atitinka parduodamą sistemą.",
  );
  lines.push("");

  return lines.join("\n");
}

function main() {
  const outArg = process.argv.find((a) => a.startsWith("--out="));
  const outPath = outArg ? outArg.slice(6) : process.argv.includes("--out") ? process.argv[process.argv.indexOf("--out") + 1] : null;

  const products = extractAllProducts();
  const md = markdownReport(products);

  if (outPath) {
    const abs = path.isAbsolute(outPath) ? outPath : path.join(ROOT, outPath);
    fs.mkdirSync(path.dirname(abs), { recursive: true });
    fs.writeFileSync(abs, md, "utf8");
    console.log(`Parašyta: ${path.relative(ROOT, abs)} (${products.length} produktų)`);
  } else {
    console.log(md);
  }
}

main();

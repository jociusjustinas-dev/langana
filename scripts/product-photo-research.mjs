#!/usr/bin/env node
/**
 * Konkrečių Yawal sistemų „foto medžioklės“ pagalbininkas: nuskaito žinomus
 * oficialius puslapius, iš HTML ištraukia gamintojo vaizdų URL (products/images,
 * cross-sections), juos surūšiuoja pagal failo pavadinimo atitikmenis modeliui,
 * ir sugeneruoja Markdown ataskaitą su Google / Duck vaizdų paieškos nuorodomis.
 *
 * Numatyta NEPARSISIUNČIA failų. Pasirinktinai `--download` (tik su aiškiu teisių
 * patvirtinimu) įrašo kandidatus į katalogą ir `manifest.json`.
 *
 * Paleidimas:
 *   node scripts/product-photo-research.mjs
 *   node scripts/product-photo-research.mjs --out reports/product-photo-research.md
 *   node scripts/product-photo-research.mjs --no-fetch   # tik nuorodos, be HTTP
 *   node scripts/product-photo-research.mjs --download --download-dir reports/yawal-product-images
 *   node scripts/product-photo-research.mjs --download --i-confirm-download-rights
 *   LANGANA_PRODUCT_PHOTO_DOWNLOAD_OK=1 node scripts/product-photo-research.mjs --download
 *   npm run research:product-photos
 */

import fs from "node:fs";
import path from "node:path";
import { stdin as stdinStream, stdout as stdoutStream } from "node:process";
import { createInterface } from "node:readline/promises";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");

const UA =
  "Mozilla/5.0 (compatible; LanganaProductPhotoResearch/1.0; +https://example.local)";

/** @typedef {{ key: string, title: string, notes?: string, yawalUrls: string[], matchTokens: string[], imageQueries: string[] }} ProductSpec */

/** @type {ProductSpec[]} */
const PRODUCTS = [
  {
    key: "tm-102hi-sistema",
    title: "TM 102HI sistema",
    yawalUrls: ["https://www.yawal.com/en/tm-102hi-system.html"],
    matchTokens: ["tm102hi", "tm_102_hi", "tm-102hi", "render_tm_102hi"],
    imageQueries: ["Yawal TM 102HI system render", "Yawal TM 102HI window"],
  },
  {
    key: "tm-77hi-sistema",
    title: "TM 77HI sistema",
    notes:
      "EN svetainėje atskiro „TM 77HI system“ puslapio nėra — naudojamas „TM 77HI Vent system“ produktinis puslapis (ta pati 77HI profilių eilė).",
    yawalUrls: ["https://www.yawal.com/en/tm-77hi-vent-system.html"],
    matchTokens: ["tm77hi", "tm_77hi", "77hi", "render_tm_77hi", "vent", "tm-77hi"],
    imageQueries: ["Yawal TM 77HI system", "Yawal TM 77HI vent system render"],
  },
  {
    key: "tm-74hi-sistema",
    title: "TM 74HI sistema",
    notes:
      "Dedikuoto EN produktinio URL nerasta Yawal struktūroje — žemiau straipsnis PL ir bendra paieška.",
    yawalUrls: ["https://www.yawal.com/modernizacja-systemu-drzwiowego-tm-74hi.html"],
    matchTokens: ["tm74hi", "tm_74_hi", "74hi", "render_tm_74"],
    imageQueries: ["Yawal TM 74HI system", "Yawal TM 74HI doors render"],
  },
  {
    key: "tm-62hi-sistema",
    title: "TM 62HI sistema",
    yawalUrls: ["https://www.yawal.com/en/tm-62hi-system.html"],
    matchTokens: ["tm62hi", "tm_62_hi", "62hi", "render_tm_62hi"],
    imageQueries: ["Yawal TM 62HI system", "Yawal TM 62HI window"],
  },
  {
    key: "tm-62-sistema",
    title: "TM 62 sistema",
    notes:
      "Atskiro „TM 62“ (ne HI) EN puslapio sitemap nerasta — ieškoti techninių PDF / archyvinės medžiagos; nenuorodyti į TM 62EI kaip į tą pačią sistemą.",
    yawalUrls: [],
    matchTokens: ["tm62", "tm_62", "render_tm_62"],
    imageQueries: ["Yawal TM 62 system aluminium windows", "Yawal TM 62 not HI"],
  },
  {
    key: "pi-50n-sistema",
    title: "PI 50N sistema",
    notes:
      "PI 50N produktinis puslapis EN nerastas; Yawal turi PL pranešimą apie pasiūlos nutraukimą — gali neturėti hero renderio.",
    yawalUrls: ["https://www.yawal.com/wycofanie-systemu-pi-50n-z-oferty.html"],
    matchTokens: ["pi50n", "pi_50n", "pi-50n"],
    imageQueries: ["Yawal PI 50N system", "Yawal PI 50N partition"],
  },
  {
    key: "dp-180-sistema",
    title: "DP 180 sistema",
    notes: "Oficialus pavadinimas svetainėje: „DP 180 Primeview system“.",
    yawalUrls: ["https://www.yawal.com/en/dp-180-primeview-system.html"],
    matchTokens: ["dp180", "dp-180", "dp_180", "primeview"],
    imageQueries: ["Yawal DP 180 Primeview sliding", "Yawal DP 180 render"],
  },
  {
    key: "dp-150t-sistema",
    title: "DP 150T sistema",
    notes: "Dedikuoto produktinio EN URL nėra — naudojamas naujienų straipsnis apie DP 150T.",
    yawalUrls: [
      "https://www.yawal.com/en/new-economical-solution-within-the-dp-150t-system-from-yawal.html",
    ],
    matchTokens: ["dp150t", "dp-150t", "150t", "dp150"],
    imageQueries: ["Yawal DP 150T sliding system", "Yawal DP 150T Primeview"],
  },
  {
    key: "dp-100-sistema",
    title: "DP 100 sistema",
    notes: "Atskiro DP 100 puslapio Yawal sitemap nerasta — tik paieška ir katalogai.",
    yawalUrls: [],
    matchTokens: ["dp100", "dp-100", "dp_100"],
    imageQueries: ["Yawal DP 100 sliding system", "Yawal DP 100 door"],
  },
  {
    key: "l-50-sistema",
    title: "L 50 sistema",
    yawalUrls: ["https://www.yawal.com/en/l-50-system.html"],
    matchTokens: ["l50", "l-50", "l_50", "l50b", "l50s"],
    imageQueries: ["Yawal L 50 system sliding", "Yawal L 50 balcony"],
  },
  {
    key: "sulankstomos-sistemos-harmonic",
    title: "Sulankstomos sistemos (Harmonic)",
    notes:
      "Kataloge „Harmonic“ atitinka Yawal TM 77 Bifold (išorinės harmoningos / accordion durys).",
    yawalUrls: ["https://www.yawal.com/en/tm-77-bifold-system.html"],
    matchTokens: ["bifold", "tm77", "tm_77", "harmonic", "accordion"],
    imageQueries: ["Yawal TM 77 Bifold system", "Yawal Harmonic folding door"],
  },
  {
    key: "fa-50n-sistema",
    title: "FA 50N sistema",
    yawalUrls: ["https://www.yawal.com/en/fa-50n-system.html"],
    matchTokens: ["fa50n", "fa-50n", "fa_50n", "render_fa"],
    imageQueries: ["Yawal FA 50N facade system", "Yawal FA 50N curtain wall"],
  },
  {
    key: "fa-50n-hi-sistema",
    title: "FA 50N HI sistema",
    yawalUrls: ["https://www.yawal.com/en/fa-50n-hi-system.html"],
    matchTokens: ["fa50nhi", "fa-50n-hi", "fa_50n_hi", "50nhi"],
    imageQueries: ["Yawal FA 50N HI facade", "Yawal FA 50N HI render"],
  },
  {
    key: "pbi-50n-sistema",
    title: "PBI 50N sistema",
    yawalUrls: ["https://www.yawal.com/en/pbi-50n-system.html"],
    matchTokens: ["pbi50n", "pbi-50n", "pbi_50n"],
    imageQueries: ["Yawal PBI 50N partition", "Yawal PBI 50N interior"],
  },
  {
    key: "pbi-40e-sistema",
    title: "PBI 40E sistema",
    notes:
      "Dedikuoto produktinio puslapio nerasta viešame sitemap — ieškoti PDF kataloge / Constructor dokumentacijoje.",
    yawalUrls: [],
    matchTokens: ["pbi40e", "pbi-40e", "pbi_40e", "40e"],
    imageQueries: ["Yawal PBI 40E system", "Yawal PBI 40E partition"],
  },
];

const IMAGE_URL_RE =
  /https:\/\/www\.yawal\.com\/extensions\/module\/products\/(?:images|cross-sections)\/[^"'>\s]+/gi;

const NOISE_SUBSTR = [
  "favicon",
  "android-icon",
  "apple-icon",
  "ms-icon",
  "/fb-logo",
  "favicon-",
];

function parseArgs(argv) {
  let out = path.join(ROOT, "reports", "product-photo-research.md");
  let noFetch = false;
  let download = false;
  let downloadDir = path.join(ROOT, "reports", "yawal-product-images");
  let downloadLimit = 10;
  let rightsFlag = false;
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--out" && argv[i + 1]) {
      out = path.resolve(ROOT, argv[++i]);
    } else if (a === "--no-fetch") noFetch = true;
    else if (a === "--download") download = true;
    else if (a === "--download-dir" && argv[i + 1]) {
      downloadDir = path.resolve(ROOT, argv[++i]);
    } else if (a === "--download-limit" && argv[i + 1]) {
      const n = Number.parseInt(argv[++i], 10);
      if (Number.isFinite(n) && n > 0) downloadLimit = Math.min(n, 50);
    } else if (a === "--i-confirm-download-rights") rightsFlag = true;
    else if (a.startsWith("--download-limit=")) {
      const n = Number.parseInt(a.split("=")[1], 10);
      if (Number.isFinite(n) && n > 0) downloadLimit = Math.min(n, 50);
    }
  }
  return { out, noFetch, download, downloadDir, downloadLimit, rightsFlag };
}

function enc(q) {
  return encodeURIComponent(q);
}

function searchBlock(queries) {
  const lines = [];
  for (const q of queries) {
    lines.push(`- **${q}**`);
    lines.push(`  - [Google Images](https://www.google.com/search?tbm=isch&q=${enc(q)})`);
    lines.push(
      `  - [DuckDuckGo Images](https://duckduckgo.com/?q=${enc(q)}&iax=images&ia=images)`,
    );
    lines.push(`  - [Google Web](https://www.google.com/search?q=${enc(q)})`);
  }
  return lines.join("\n");
}

function isNoiseUrl(u) {
  const x = u.toLowerCase();
  return NOISE_SUBSTR.some((s) => x.includes(s));
}

function normalizeUrl(u) {
  try {
    const o = new URL(u);
    o.search = "";
    return o.href;
  } catch {
    return u.split("?")[0];
  }
}

function scoreImageUrl(url, tokens) {
  const u = url.toLowerCase();
  let s = 0;
  for (const t of tokens) {
    if (!t) continue;
    if (u.includes(t.toLowerCase())) s += 18;
  }
  if (u.includes("/products/images/")) s += 4;
  if (u.includes("render")) s += 8;
  if (u.includes("cross-sections")) s += 3;
  if (/-320x320\.|-160x160\./.test(u)) s -= 6;
  if (/-640x640\./.test(u)) s -= 2;
  if (/\.(jpg|jpeg|png)(\?|$)/i.test(u)) s += 3;
  if (/\.webp(\?|$)/i.test(u)) s += 1;
  return s;
}

function extractOgImage(html, baseUrl) {
  const m =
    html.match(/property=["']og:image["']\s+content=["']([^"']+)["']/i) ??
    html.match(/content=["']([^"']+)["']\s+property=["']og:image["']/i);
  if (!m) return null;
  try {
    return new URL(m[1], baseUrl).href;
  } catch {
    return m[1];
  }
}

function extractYawalProductImages(html) {
  const set = new Set();
  let m;
  const re = new RegExp(IMAGE_URL_RE.source, "gi");
  while ((m = re.exec(html)) !== null) {
    const raw = m[0].replace(/&amp;/g, "&");
    if (!isNoiseUrl(raw)) set.add(raw);
  }
  return [...set];
}

async function fetchText(url, timeoutMs = 20000) {
  const ctrl = new AbortController();
  const id = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const res = await fetch(url, {
      signal: ctrl.signal,
      headers: { "User-Agent": UA, Accept: "text/html,application/xhtml+xml" },
      redirect: "follow",
    });
    if (!res.ok) return { ok: false, status: res.status, html: "" };
    const html = await res.text();
    return { ok: true, status: res.status, html };
  } catch (e) {
    return { ok: false, status: 0, error: String(e?.message ?? e), html: "" };
  } finally {
    clearTimeout(id);
  }
}

async function confirmDownloadRights(rightsFlag) {
  if (process.env.LANGANA_PRODUCT_PHOTO_DOWNLOAD_OK === "1") {
    console.log(
      "Naudojamas LANGANA_PRODUCT_PHOTO_DOWNLOAD_OK=1 — laikoma, kad teisėtai galite atsisiųsti ir naudoti šiuos failus.\n",
    );
    return true;
  }
  if (rightsFlag) {
    console.log(
      "Naudojamas --i-confirm-download-rights — patvirtinate, kad turite teisę naudoti atsisiunčiamą medžiagą (sutartis, leidimas, gamintojo rinkinys ir pan.).\n",
    );
    return true;
  }
  if (!stdinStream.isTTY) {
    console.error(
      "Neinteraktyvi aplinka: nustatykite LANGANA_PRODUCT_PHOTO_DOWNLOAD_OK=1 arba pridėkite --i-confirm-download-rights.",
    );
    return false;
  }
  const rl = createInterface({ input: stdinStream, output: stdoutStream });
  console.log(
    "\n━━━ TEISĖS / ATSAKOMYBĖ ━━━\n" +
      "Atsisiunčiami failai iš yawal.com gali būti saugomi autorių teisių ir naudojimo sąlygų.\n" +
      "Tęskite TIK jei turite teisę juos kopijuoti ir naudoti (pvz. gamintojo sutartis, media rinkinys, raštiškas leidimas).\n" +
      "Įveskite tiksliai: TAIP\n",
  );
  const ans = (await rl.question("> ")).trim();
  await rl.close();
  return ans === "TAIP";
}

function guessExtension(url, contentType) {
  const u = url.toLowerCase();
  if (u.endsWith(".jpg") || u.endsWith(".jpeg")) return ".jpg";
  if (u.endsWith(".png")) return ".png";
  if (u.endsWith(".webp")) return ".webp";
  const ct = (contentType ?? "").toLowerCase();
  if (ct.includes("jpeg")) return ".jpg";
  if (ct.includes("png")) return ".png";
  if (ct.includes("webp")) return ".webp";
  return ".bin";
}

function safeBasenameFromUrl(url) {
  try {
    const u = new URL(url);
    let base = path.basename(u.pathname) || "image";
    base = base.replace(/[^a-zA-Z0-9._-]+/g, "_");
    if (base.length > 140) base = base.slice(-140);
    return base || "image.bin";
  } catch {
    return "image.bin";
  }
}

function uniqueDestPath(dir, baseName) {
  let dest = path.join(dir, baseName);
  if (!fs.existsSync(dest)) return dest;
  const ext = path.extname(baseName) || "";
  const stem = ext ? baseName.slice(0, -ext.length) : baseName;
  let i = 1;
  while (fs.existsSync(path.join(dir, `${stem}-${i}${ext}`))) i += 1;
  return path.join(dir, `${stem}-${i}${ext}`);
}

async function fetchBinary(url, timeoutMs = 45000) {
  const ctrl = new AbortController();
  const id = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const res = await fetch(url, {
      signal: ctrl.signal,
      headers: { "User-Agent": UA, Accept: "image/*,*/*" },
      redirect: "follow",
    });
    if (!res.ok) return { ok: false, status: res.status, buffer: null, contentType: null };
    const buf = Buffer.from(await res.arrayBuffer());
    const contentType = res.headers.get("content-type");
    return { ok: true, status: res.status, buffer: buf, contentType };
  } catch (e) {
    return { ok: false, status: 0, buffer: null, contentType: null, error: String(e?.message ?? e) };
  } finally {
    clearTimeout(id);
  }
}

/**
 * @param {{ spec: ProductSpec, ranked: { href: string, score: number }[] }[]} results
 */
async function downloadRankedImages(results, downloadDir, downloadLimit) {
  fs.mkdirSync(downloadDir, { recursive: true });
  const manifest = {
    downloadedAt: new Date().toISOString(),
    notice:
      "Techninė kopija kandidatams — teisė naudoti medžiaga turi būti aiškiai įgyta; šis manifestas neįrodo licencijos.",
    downloadLimit,
    products: [],
  };

  for (const { spec, ranked } of results) {
    const productDir = path.join(downloadDir, spec.key);
    fs.mkdirSync(productDir, { recursive: true });
    const take = ranked.slice(0, downloadLimit);
    const files = [];
    for (const { href, score } of take) {
      const bin = await fetchBinary(href);
      if (!bin.ok || !bin.buffer) {
        files.push({ url: href, score, ok: false, error: bin.error ?? `HTTP ${bin.status}` });
        continue;
      }
      let base = safeBasenameFromUrl(href);
      if (!path.extname(base)) base += guessExtension(href, bin.contentType);
      const dest = uniqueDestPath(productDir, base);
      fs.writeFileSync(dest, bin.buffer);
      files.push({
        url: href,
        score,
        ok: true,
        path: path.relative(downloadDir, dest),
        bytes: bin.buffer.length,
      });
    }
    manifest.products.push({ key: spec.key, title: spec.title, files });
  }

  const manifestPath = path.join(downloadDir, "manifest.json");
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), "utf8");
  let ok = 0;
  let fail = 0;
  for (const p of manifest.products) {
    for (const f of p.files) {
      if (f.ok) ok += 1;
      else fail += 1;
    }
  }
  return { manifestPath, downloadDir, okCount: ok, failCount: fail };
}

function rankImages(urls, tokens) {
  const byNorm = new Map();
  for (const u of urls) {
    const n = normalizeUrl(u);
    const sc = scoreImageUrl(u, tokens);
    const prev = byNorm.get(n);
    if (prev == null || sc > prev) byNorm.set(n, sc);
  }
  return [...byNorm.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([href, score]) => ({ href, score }));
}

async function researchProduct(spec, noFetch) {
  const allImages = [];
  const pageResults = [];
  let ogImage = null;

  if (!noFetch) {
    for (const pageUrl of spec.yawalUrls) {
      const r = await fetchText(pageUrl);
      if (!r.ok) {
        pageResults.push({ pageUrl, ok: false, status: r.status, error: r.error });
        continue;
      }
      const og = extractOgImage(r.html, pageUrl);
      if (og && !og.toLowerCase().includes("fb-logo")) ogImage = og;
      const imgs = extractYawalProductImages(r.html);
      pageResults.push({ pageUrl, ok: true, status: r.status, imageCount: imgs.length });
      allImages.push(...imgs);
    }
  }

  let ranked = rankImages(allImages, spec.matchTokens);
  const tokenHit = (href) =>
    spec.matchTokens.some((t) => t && href.toLowerCase().includes(String(t).toLowerCase()));
  let weakFallback = false;
  let filtered = ranked.filter((r) => tokenHit(r.href));
  if (!filtered.length && ranked.length) {
    filtered = ranked.slice(0, 8);
    weakFallback = true;
  }
  ranked = filtered;

  return { spec, pageResults, ogImage, ranked, weakFallback, allImageCount: allImages.length };
}

async function main() {
  const { out, noFetch, download, downloadDir, downloadLimit, rightsFlag } = parseArgs(process.argv);

  if (download && noFetch) {
    console.error("Klaida: --download negalimas kartu su --no-fetch.");
    process.exit(1);
  }

  const lines = [];
  lines.push("# Produktų nuotraukų „medžioklės“ ataskaita (Yawal sistemos)");
  lines.push("");
  lines.push(
    "Ši ataskaita sugeneruota skriptu `scripts/product-photo-research.mjs`. Numatyta ji **tik aprašo nuorodas**; teisė naudoti gamintojo medžią turi būti įgyta atskirai (sutartis, media rinkinys ir pan.).",
  );
  lines.push("");
  if (noFetch) {
    lines.push("> **Režimas `--no-fetch`:** tik statinės nuorodos, be HTTP užklausų.");
    lines.push("");
  }

  const results = [];
  for (const p of PRODUCTS) {
    results.push(await researchProduct(p, noFetch));
  }

  for (const { spec, pageResults, ogImage, ranked, weakFallback } of results) {
    lines.push(`## ${spec.title}`);
    lines.push("");
    lines.push(`- **id:** \`${spec.key}\``);
    if (spec.notes) {
      lines.push(`- **Pastaba:** ${spec.notes}`);
    }
    lines.push("");

    lines.push("### Oficialūs Yawal puslapiai");
    lines.push("");
    if (spec.yawalUrls.length === 0) lines.push("- *(nenurodyta — žr. paiešką žemiau)*");
    else {
      for (const u of spec.yawalUrls) lines.push(`- [${u}](${u})`);
    }
    lines.push("");

    if (pageResults.length) {
      lines.push("### HTTP santrauka");
      lines.push("");
      for (const pr of pageResults) {
        if (pr.ok) lines.push(`- \`${pr.pageUrl}\` → **${pr.status}**, rasta ~**${pr.imageCount}** unikalių produktinių URL fragmente`);
        else
          lines.push(
            `- \`${pr.pageUrl}\` → **${pr.status || "klaida"}**${pr.error ? ` (${pr.error})` : ""}`,
          );
      }
      lines.push("");
    }

    if (ogImage) {
      lines.push("### Open Graph vaizdas (jei ne „fb-logo“)");
      lines.push("");
      lines.push(`- [og:image](${ogImage})`);
      lines.push("");
    }

    lines.push("### Automatiškai iš HTML ištraukti gamintojo vaizdai (kandidatai pagal pavadinimą)");
    lines.push("");
    if (weakFallback) {
      lines.push(
        "> **Pastaba:** failo pavadinime neaptikta aiškaus modelio žymos iš `matchTokens` — rodomi aukščiausiai įvertinti bendri puslapio vaizdai (patikrinkite ranka).",
      );
      lines.push("");
    }
    if (ranked.length === 0) {
      lines.push(
        "- *(tuščia — puslapis nepasiekiamas, arba HTML neturi `extensions/module/products/` vaizdų; naudokite paiešką.)*",
      );
    } else {
      const top = ranked.slice(0, 15);
      for (const { href, score } of top) {
        const label = score > 0 ? `+${score}` : `${score}`;
        lines.push(`- **${label}** [peržiūrėti](${href})`);
      }
    }
    lines.push("");

    lines.push("### Rankinė paieška (vaizdai / PDF / spauda)");
    lines.push("");
    lines.push(searchBlock(spec.imageQueries));
    lines.push("");
    lines.push("---");
    lines.push("");
  }

  let downloadPerformed = false;
  if (download) {
    lines.push("## Atsisiuntimas (failai į diską)");
    lines.push("");
    const rightsOk = await confirmDownloadRights(rightsFlag);
    if (!rightsOk) {
      lines.push("**Būsena:** atšaukta — vietinių kopijų **nekurta**.");
      lines.push("");
    } else {
      const { manifestPath, downloadDir: dd, okCount, failCount } = await downloadRankedImages(
        results,
        downloadDir,
        downloadLimit,
      );
      downloadPerformed = true;
      lines.push("**Būsena:** įrašyta po teisių patvirtinimo.");
      lines.push("");
      lines.push(`- **Katalogas:** \`${path.relative(ROOT, dd)}\``);
      lines.push(`- **Manifestas:** \`${path.relative(ROOT, manifestPath)}\``);
      lines.push(`- **Pavyko:** ${okCount} failų · **Nepavyko:** ${failCount}`);
      lines.push("");
      lines.push(
        "Manifestas ir failai yra techninė pagalba atrankai — **neįrodo** licencijos naudoti svetainėje ar spaudoje.",
      );
      lines.push("");
    }
  }

  const dir = path.dirname(out);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(out, lines.join("\n"), "utf8");
  console.log(`Wrote ${path.relative(ROOT, out)}`);
  if (download) {
    console.log(
      downloadPerformed
        ? `Atsisiuntimas: ${path.relative(ROOT, downloadDir)} (manifest.json)`
        : "Atsisiuntimas: atšaukta.",
    );
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

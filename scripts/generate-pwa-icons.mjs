/**
 * Generuoja PWA / Apple Touch piktogramas iš public/langana-logo.svg.
 * Paleisk: node scripts/generate-pwa-icons.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const publicDir = path.join(root, "public");
const svgPath = path.join(publicDir, "langana-logo.svg");

const BRAND = "#263cd0";

function whiteLogoSvg() {
  let svg = fs.readFileSync(svgPath, "utf8");
  svg = svg.replace(/fill="var\(--fill-0, #263CD0\)"/gi, 'fill="#ffffff"');
  svg = svg.replace(/#263CD0/gi, "#ffffff");
  return svg;
}

async function makeIcon(size, fileName) {
  const padding = Math.round(size * 0.18);
  const maxInner = size - padding * 2;

  const logoRaster = await sharp(Buffer.from(whiteLogoSvg()), { density: 360 })
    .resize(maxInner, maxInner, { fit: "inside", withoutEnlargement: true })
    .png()
    .toBuffer();

  await sharp({
    create: {
      width: size,
      height: size,
      channels: 3,
      background: BRAND,
    },
  })
    .composite([{ input: logoRaster, gravity: "center" }])
    .png({ compressionLevel: 9 })
    .toFile(path.join(publicDir, fileName));

  const stat = fs.statSync(path.join(publicDir, fileName));
  console.log(`${fileName}\t${size}×${size}\t${(stat.size / 1024).toFixed(1)} KB`);
}

await makeIcon(180, "apple-touch-icon.png");
await makeIcon(192, "android-chrome-192x192.png");
await makeIcon(512, "android-chrome-512x512.png");

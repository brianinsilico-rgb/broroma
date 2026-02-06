/**
 * One-off script: make black background transparent in blind flange image.
 * Run: node scripts/remove-blind-bg.mjs
 */
import sharp from "sharp";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const inputPath = join(root, "public/flanges/blind.png");
const outputPath = join(root, "public/flanges/blind.png");

// Threshold: pixels with R,G,B all below this become transparent
const BLACK_THRESHOLD = 45;

const { data, info } = await sharp(inputPath)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const channels = info.channels; // 4 for RGBA
const len = data.length;

for (let i = 0; i < len; i += channels) {
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];
  if (r <= BLACK_THRESHOLD && g <= BLACK_THRESHOLD && b <= BLACK_THRESHOLD) {
    data[i + 3] = 0; // set alpha to 0
  }
}

await sharp(data, {
  raw: {
    width: info.width,
    height: info.height,
    channels: 4,
  },
})
  .png()
  .toFile(outputPath);

console.log("Done: blind.png black background made transparent.");

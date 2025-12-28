/**
 * Script to download Twemoji SVG files for the animals game
 * Run with: node scripts/downloadTwemojiSvgs.js
 */

const https = require("https");
const fs = require("fs");
const path = require("path");

// Base URL for Twemoji SVGs on jsDelivr CDN (newer version)
const TWEMOJI_BASE_URL =
  "https://cdn.jsdelivr.net/gh/jdecked/twemoji@latest/assets/svg/";

// Emoji to codepoint mapping for all emojis needed
const EMOJI_CODEPOINTS = {
  // Animal emojis (60)
  "🐕": "1f415",
  "🐈": "1f408",
  "🦁": "1f981",
  "🐘": "1f418",
  "🦒": "1f992",
  "🐒": "1f412",
  "🐧": "1f427",
  "🦓": "1f993",
  "🐅": "1f405",
  "🐰": "1f430",
  "🐓": "1f413",
  "🐔": "1f414",
  "🐄": "1f404",
  "🐴": "1f434",
  "🐦": "1f426",
  "🐺": "1f43a",
  "🪿": "1fabf",
  "🫏": "1facf",
  "🐻": "1f43b",
  "🦈": "1f988",
  "🐢": "1f422",
  "🐙": "1f419",
  "🦀": "1f980",
  "🐋": "1f40b",
  "🐬": "1f42c",
  "🐌": "1f40c",
  "🐜": "1f41c",
  "🐞": "1f41e",
  "🐊": "1f40a",
  "🦇": "1f987",
  "🦜": "1f99c",
  "🦌": "1f98c",
  "🦙": "1f999",
  "🐃": "1f403",
  "🦃": "1f983",
  "🦚": "1f99a",
  "🦢": "1f9a2",
  "🐝": "1f41d",
  "🐛": "1f41b",
  "🦂": "1f982",
  "🦞": "1f99e",
  "🦭": "1f9ad",
  "🦝": "1f99d",
  "🦡": "1f9a1",
  "🐗": "1f417",
  "🐪": "1f42a",
  "🦎": "1f98e",
  "🦩": "1f9a9",
  "🦍": "1f98d",
  "🦘": "1f998",
  "🐆": "1f406",
  "🐑": "1f411",
  "🐥": "1f425",
  "🐖": "1f416",
  "🐐": "1f410",
  "🐂": "1f402",
  "🦆": "1f986",
  "🐍": "1f40d",
  "🦅": "1f985",
  "🦉": "1f989",
  "🐦‍⬛": "1f426-200d-2b1b",
  "🐏": "1f40f",
  "🦊": "1f98a",
  "🐿️": "1f43f",
  "🦔": "1f994",
  "🦦": "1f9a6",
  "🐼": "1f43c",
  "🐨": "1f428",
  "🦛": "1f99b",
  "🦏": "1f98f",
  "🐵": "1f435",
  "🪶": "1fab6",
  "🕊️": "1f54a",
  "⭐": "2b50",
  "🪼": "1fabc",
  "🐠": "1f420",
  "🐸": "1f438",
  "🦋": "1f98b",
  "🦗": "1f997",
  "🕷️": "1f577",
  "🦟": "1f99f",
  "🐭": "1f42d",
  "🦥": "1f9a5",
  "🪱": "1fab1",
  "🪰": "1fab0",
  "🪲": "1fab2",
  "🦨": "1f9a8",
  "🦫": "1f9ab",
  "🪳": "1fab3",

  // UI emojis
  "🎉": "1f389",
  "🔊": "1f50a",
  "🔉": "1f509",
  "🔇": "1f507",
  "📝": "1f4dd",
  "🖼️": "1f5bc",
  "🏠": "1f3e0",
  "✕": "2715",
  "🎮": "1f3ae",
  "🌐": "1f310",
  "🎥": "1f3a5",
  "📄": "1f4c4",
  "💬": "1f4ac",
  "◀": "25c0",
  "▶": "25b6",
  "📦": "1f4e6",
  "🎯": "1f3af",
};

const OUTPUT_DIR = path.join(__dirname, "..", "assets", "emojis");

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  console.log(`Created directory: ${OUTPUT_DIR}`);
}

// Download a single SVG file
function downloadSvg(codepoint, emoji) {
  return new Promise((resolve, reject) => {
    const url = `${TWEMOJI_BASE_URL}${codepoint}.svg`;
    const outputPath = path.join(OUTPUT_DIR, `${codepoint}.svg`);

    // Skip if file already exists
    if (fs.existsSync(outputPath)) {
      console.log(`✓ ${emoji} (${codepoint}.svg) - already exists`);
      resolve();
      return;
    }

    https
      .get(url, (response) => {
        if (response.statusCode !== 200) {
          reject(
            new Error(
              `Failed to download ${emoji} (${codepoint}): HTTP ${response.statusCode}`
            )
          );
          return;
        }

        const fileStream = fs.createWriteStream(outputPath);
        response.pipe(fileStream);

        fileStream.on("finish", () => {
          fileStream.close();
          console.log(`✓ Downloaded ${emoji} (${codepoint}.svg)`);
          resolve();
        });

        fileStream.on("error", (err) => {
          fs.unlink(outputPath, () => {});
          reject(err);
        });
      })
      .on("error", (err) => {
        reject(err);
      });
  });
}

// Download all SVGs with rate limiting
async function downloadAll() {
  console.log(
    `Starting download of ${
      Object.keys(EMOJI_CODEPOINTS).length
    } Twemoji SVG files...\n`
  );

  const emojis = Object.entries(EMOJI_CODEPOINTS);
  let downloaded = 0;
  let skipped = 0;
  let failed = 0;

  for (const [emoji, codepoint] of emojis) {
    try {
      await downloadSvg(codepoint, emoji);
      if (fs.existsSync(path.join(OUTPUT_DIR, `${codepoint}.svg`))) {
        const stats = fs.statSync(path.join(OUTPUT_DIR, `${codepoint}.svg`));
        if (stats.size > 0) {
          downloaded++;
        } else {
          skipped++;
        }
      }
      // Small delay to avoid rate limiting
      await new Promise((resolve) => setTimeout(resolve, 100));
    } catch (error) {
      console.error(
        `✗ Failed to download ${emoji} (${codepoint}): ${error.message}`
      );
      failed++;
    }
  }

  console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
  console.log(`Download Summary:`);
  console.log(`✓ Downloaded: ${downloaded}`);
  console.log(`→ Skipped (already exist): ${skipped}`);
  console.log(`✗ Failed: ${failed}`);
  console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`);

  if (failed > 0) {
    console.error(
      `⚠️  Some files failed to download. Please check the errors above.`
    );
    process.exit(1);
  } else {
    console.log(`✅ All SVG files downloaded successfully to ${OUTPUT_DIR}`);
  }
}

// Run the download
downloadAll().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});

const fs = require("fs");
const path = require("path");
const https = require("https");
const http = require("http");

// Animal data - extracted from animals.ts
const animals = [
  {
    id: 1,
    name: "Dog",
    soundUrl: "https://assets.mixkit.co/active_storage/sfx/1/1-preview.mp3",
  },
  {
    id: 2,
    name: "Cat",
    soundUrl: "https://assets.mixkit.co/active_storage/sfx/93/93-preview.mp3",
  },
  {
    id: 3,
    name: "Lion",
    soundUrl: "https://assets.mixkit.co/active_storage/sfx/6/6-preview.mp3",
  },
  {
    id: 4,
    name: "Elephant",
    soundUrl:
      "https://freeanimalsounds.org/wp-content/uploads/2017/07/Elefant.mp3",
  },
  {
    id: 6,
    name: "Monkey",
    soundUrl: "https://assets.mixkit.co/active_storage/sfx/108/108-preview.mp3",
  },
  {
    id: 9,
    name: "Tiger",
    soundUrl:
      "https://freeanimalsounds.org/wp-content/uploads/2017/07/Tiger.mp3",
  },
  {
    id: 11,
    name: "Rooster",
    soundUrl:
      "https://assets.mixkit.co/active_storage/sfx/2462/2462-preview.mp3",
  },
  {
    id: 12,
    name: "Cow",
    soundUrl:
      "https://assets.mixkit.co/active_storage/sfx/1751/1751-preview.mp3",
  },
  {
    id: 13,
    name: "Horse",
    soundUrl: "https://assets.mixkit.co/active_storage/sfx/85/85-preview.mp3",
  },
  {
    id: 14,
    name: "Bird",
    soundUrl: "https://assets.mixkit.co/active_storage/sfx/17/17-preview.mp3",
  },
  {
    id: 15,
    name: "Wolf",
    soundUrl:
      "https://assets.mixkit.co/active_storage/sfx/1775/1775-preview.mp3",
  },
  {
    id: 16,
    name: "Goose",
    soundUrl: "https://assets.mixkit.co/active_storage/sfx/20/20-preview.mp3",
  },
  {
    id: 17,
    name: "Donkey",
    soundUrl:
      "https://assets.mixkit.co/active_storage/sfx/1770/1770-preview.mp3",
  },
  {
    id: 18,
    name: "Bear",
    soundUrl: "https://assets.mixkit.co/active_storage/sfx/309/309-preview.mp3",
  },
  {
    id: 30,
    name: "Parrot",
    soundUrl:
      "https://freeanimalsounds.org/wp-content/uploads/2017/07/RedParot.mp3",
  },
  {
    id: 33,
    name: "Buffalo",
    soundUrl:
      "https://freeanimalsounds.org/wp-content/uploads/2017/07/bison.mp3",
  },
  {
    id: 34,
    name: "Turkey",
    soundUrl:
      "https://freeanimalsounds.org/wp-content/uploads/2017/07/truthahn.mp3",
  },
  {
    id: 35,
    name: "Peacock",
    soundUrl:
      "https://freeanimalsounds.org/wp-content/uploads/2017/08/peacock.mp3",
  },
  {
    id: 37,
    name: "Bee",
    soundUrl: "https://freeanimalsounds.org/wp-content/uploads/2017/07/bee.mp3",
  },
  {
    id: 48,
    name: "Gorilla",
    soundUrl:
      "https://freeanimalsounds.org/wp-content/uploads/2017/07/Gorilla.mp3",
  },
  {
    id: 50,
    name: "Leopard",
    soundUrl:
      "https://freeanimalsounds.org/wp-content/uploads/2017/07/Leopard.mp3",
  },
  {
    id: 51,
    name: "Sheep",
    soundUrl:
      "https://freeanimalsounds.org/wp-content/uploads/2017/07/schafe.mp3",
  },
  {
    id: 52,
    name: "Chicken",
    soundUrl:
      "https://freeanimalsounds.org/wp-content/uploads/2017/07/huehner.mp3",
  },
  {
    id: 53,
    name: "Pig",
    soundUrl:
      "https://freeanimalsounds.org/wp-content/uploads/2017/07/schwein.mp3",
  },
  {
    id: 54,
    name: "Goat",
    soundUrl:
      "https://freeanimalsounds.org/wp-content/uploads/2017/07/Ziege.mp3",
  },
  {
    id: 55,
    name: "Bull",
    soundUrl:
      "https://freeanimalsounds.org/wp-content/uploads/2017/07/ochse.mp3",
  },
  {
    id: 56,
    name: "Duck",
    soundUrl:
      "https://freeanimalsounds.org/wp-content/uploads/2017/07/Ente_quackt.mp3",
  },
  {
    id: 58,
    name: "Snake",
    soundUrl:
      "https://freeanimalsounds.org/wp-content/uploads/2017/07/rattlesnake.mp3",
  },
  {
    id: 59,
    name: "Raven",
    soundUrl:
      "https://freeanimalsounds.org/wp-content/uploads/2017/07/rabe.mp3",
  },
  {
    id: 60,
    name: "Owl",
    soundUrl: "https://freeanimalsounds.org/wp-content/uploads/2017/07/owl.mp3",
  },
];

// Output directory for animal sounds
const outputDir = path.join(__dirname, "..", "assets", "music", "animals");

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
  console.log(`Created directory: ${outputDir}`);
}

// Function to download a file
function downloadFile(url, outputPath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith("https") ? https : http;

    const file = fs.createWriteStream(outputPath);

    protocol
      .get(url, (response) => {
        // Handle redirects
        if (response.statusCode === 301 || response.statusCode === 302) {
          file.close();
          fs.unlinkSync(outputPath);
          return downloadFile(response.headers.location, outputPath)
            .then(resolve)
            .catch(reject);
        }

        if (response.statusCode !== 200) {
          file.close();
          fs.unlinkSync(outputPath);
          reject(new Error(`Failed to download: ${response.statusCode}`));
          return;
        }

        response.pipe(file);

        file.on("finish", () => {
          file.close();
          resolve();
        });
      })
      .on("error", (err) => {
        fs.unlinkSync(outputPath);
        reject(err);
      });

    file.on("error", (err) => {
      fs.unlinkSync(outputPath);
      reject(err);
    });
  });
}

// Main download function
async function downloadAllSounds() {
  console.log(`Starting download of ${animals.length} animal sounds...\n`);

  let successCount = 0;
  let failCount = 0;

  for (const animal of animals) {
    if (!animal.soundUrl) continue;

    const fileName = `${animal.name}.mp3`;
    const outputPath = path.join(outputDir, fileName);

    try {
      console.log(`Downloading ${animal.name}...`);
      await downloadFile(animal.soundUrl, outputPath);
      console.log(`✓ Saved: ${fileName}`);
      successCount++;
    } catch (error) {
      console.error(`✗ Failed to download ${animal.name}: ${error.message}`);
      failCount++;
    }
  }

  console.log(`\n=== Download Complete ===`);
  console.log(`Success: ${successCount}`);
  console.log(`Failed: ${failCount}`);
  console.log(`Output directory: ${outputDir}`);
}

// Run the script
downloadAllSounds().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

const MODELS_DIR = path.join(__dirname, 'models');

// Model URLs - using correct model names
const MODELS = [
  {
    name: 'Ukrainian (medium quality)',
    files: [
      {
        url: 'https://huggingface.co/rhasspy/piper-voices/resolve/main/uk/uk_UA/ukrainian_tts/medium/uk_UA-ukrainian_tts-medium.onnx',
        filename: 'uk_UA-ukrainian_tts-medium.onnx'
      },
      {
        url: 'https://huggingface.co/rhasspy/piper-voices/resolve/main/uk/uk_UA/ukrainian_tts/medium/uk_UA-ukrainian_tts-medium.onnx.json',
        filename: 'uk_UA-ukrainian_tts-medium.onnx.json'
      }
    ]
  },
  {
    name: 'Russian (medium quality)',
    files: [
      {
        url: 'https://huggingface.co/rhasspy/piper-voices/resolve/main/ru/ru_RU/dmitri/medium/ru_RU-dmitri-medium.onnx',
        filename: 'ru_RU-dmitri-medium.onnx'
      },
      {
        url: 'https://huggingface.co/rhasspy/piper-voices/resolve/main/ru/ru_RU/dmitri/medium/ru_RU-dmitri-medium.onnx.json',
        filename: 'ru_RU-dmitri-medium.onnx.json'
      }
    ]
  }
];

// Create models directory if it doesn't exist
if (!fs.existsSync(MODELS_DIR)) {
  fs.mkdirSync(MODELS_DIR, { recursive: true });
}

function downloadFile(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);

    // Parse URL to determine protocol
    const urlObj = new URL(url);
    const protocol = urlObj.protocol === 'https:' ? https : http;

    protocol.get(url, (response) => {
      // Follow redirects (301, 302, 307, 308)
      if (response.statusCode === 301 || response.statusCode === 302 ||
          response.statusCode === 307 || response.statusCode === 308) {
        file.close();
        if (fs.existsSync(filepath)) {
          fs.unlinkSync(filepath);
        }
        // Resolve relative redirect URLs
        const redirectUrl = new URL(response.headers.location, url).href;
        return downloadFile(redirectUrl, filepath)
          .then(resolve)
          .catch(reject);
      }

      if (response.statusCode !== 200) {
        file.close();
        if (fs.existsSync(filepath)) {
          fs.unlinkSync(filepath);
        }
        return reject(new Error(`Failed to download: ${response.statusCode}`));
      }

      const totalSize = parseInt(response.headers['content-length'], 10);
      let downloadedSize = 0;

      response.on('data', (chunk) => {
        downloadedSize += chunk.length;
        const progress = ((downloadedSize / totalSize) * 100).toFixed(1);
        process.stdout.write(`\r  Progress: ${progress}% (${(downloadedSize / 1024 / 1024).toFixed(1)}MB / ${(totalSize / 1024 / 1024).toFixed(1)}MB)`);
      });

      response.pipe(file);

      file.on('finish', () => {
        file.close();
        console.log('');
        resolve();
      });
    }).on('error', (err) => {
      file.close();
      if (fs.existsSync(filepath)) {
        fs.unlinkSync(filepath);
      }
      reject(err);
    });
  });
}

async function main() {
  console.log('🚀 Downloading Piper TTS Models\n');
  console.log('═'.repeat(60));

  for (const model of MODELS) {
    console.log(`\n📥 Downloading ${model.name}...`);

    for (const file of model.files) {
      const filepath = path.join(MODELS_DIR, file.filename);

      // Skip if file already exists
      if (fs.existsSync(filepath)) {
        console.log(`  ✓ ${file.filename} already exists, skipping`);
        continue;
      }

      console.log(`  Downloading ${file.filename}...`);
      try {
        await downloadFile(file.url, filepath);
        console.log(`  ✓ Downloaded ${file.filename}`);
      } catch (error) {
        console.error(`  ✗ Failed to download ${file.filename}:`, error.message);
        process.exit(1);
      }
    }
  }

  console.log('\n' + '═'.repeat(60));
  console.log('✅ All models downloaded successfully!');
  console.log('═'.repeat(60));
  console.log('\nNext steps:');
  console.log('  1. cd ../..  (return to project root)');
  console.log('  2. cd scripts/tts-generator');
  console.log('  3. docker-compose up -d');
  console.log('  4. cd ../..  (return to project root again)');
  console.log('  5. node scripts/generateTTSAudio.js');
}

main().catch(console.error);

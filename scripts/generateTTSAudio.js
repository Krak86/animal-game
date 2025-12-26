const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Paths
const PROJECT_ROOT = path.join(__dirname, '..');
const ASSETS_AUDIO_DIR = path.join(PROJECT_ROOT, 'assets', 'audio');
const TRANSLATIONS_FILE = path.join(PROJECT_ROOT, 'src', 'constants', 'translations.ts');
const OUTPUT_FILE = path.join(PROJECT_ROOT, 'src', 'constants', 'audioFiles.ts');
const TEMP_DIR = path.join(__dirname, 'tts-generator', 'output');

// Edge TTS Voice Names
const VOICES = {
  uk: 'uk-UA-PolinaNeural',
  ru: 'ru-RU-SvetlanaNeural',
};

// UI phrases to generate
const UI_PHRASES = {
  uk: {
    findThe: 'Знайди:',
    whoSaysThis: 'Хто так каже?',
  },
  ru: {
    findThe: 'Найди:',
    whoSaysThis: 'Кто так говорит?',
  },
};

/**
 * Extract translations from translations.ts file
 */
function extractTranslations() {
  console.log('📖 Reading translations from translations.ts...');
  const content = fs.readFileSync(TRANSLATIONS_FILE, 'utf8');

  // Extract animal translations for UK and RU
  // This is a simplified extraction - adjust regex based on your actual file structure
  const translations = { uk: {}, ru: {} };

  // Extract Ukrainian animals
  const ukAnimalsMatch = content.match(/uk:\s*\{[\s\S]*?animals:\s*\{([\s\S]*?)\}/);
  if (ukAnimalsMatch) {
    const animalsBlock = ukAnimalsMatch[1];
    const animalMatches = animalsBlock.matchAll(/(\w+):\s*["']([^"']+)["']/g);
    for (const match of animalMatches) {
      translations.uk[match[1]] = match[2];
    }
  }

  // Extract Russian animals
  const ruAnimalsMatch = content.match(/ru:\s*\{[\s\S]*?animals:\s*\{([\s\S]*?)\}/);
  if (ruAnimalsMatch) {
    const animalsBlock = ruAnimalsMatch[1];
    const animalMatches = animalsBlock.matchAll(/(\w+):\s*["']([^"']+)["']/g);
    for (const match of animalMatches) {
      translations.ru[match[1]] = match[2];
    }
  }

  console.log(`✓ Found ${Object.keys(translations.uk).length} Ukrainian animals`);
  console.log(`✓ Found ${Object.keys(translations.ru).length} Russian animals`);

  return translations;
}

/**
 * Sanitize filename for file system
 */
function sanitizeFilename(text) {
  return text
    .toLowerCase()
    .replace(/\s+/g, '_')
    .replace(/[^\w\-]/g, '')
    .replace(/_{2,}/g, '_');
}

/**
 * Generate audio file using Microsoft Edge TTS
 */
async function generateAudio(text, language, outputFilename) {
  const voice = VOICES[language];
  const mp3File = path.join(TEMP_DIR, `${outputFilename}.mp3`);

  try {
    // Write text to temporary file to handle Cyrillic characters properly
    const tempTextFile = path.join(TEMP_DIR, `${outputFilename}.txt`);
    fs.writeFileSync(tempTextFile, text, 'utf8');

    // Copy text file to Docker container
    execSync(`docker cp "${tempTextFile}" animals-tts-generator:/tmp/${outputFilename}.txt`, { stdio: 'pipe' });

    // Generate audio using Edge TTS via Docker
    // Edge TTS outputs directly to MP3 format
    // Use MSYS_NO_PATHCONV to prevent Git Bash path translation on Windows
    const edgeTtsCmd = `docker exec animals-tts-generator sh -c "edge-tts --voice '${voice}' --file /tmp/${outputFilename}.txt --write-media /output/${outputFilename}_raw.mp3"`;
    execSync(edgeTtsCmd, { stdio: 'pipe', env: { ...process.env, MSYS_NO_PATHCONV: '1' } });

    // Convert to optimized MP3 using ffmpeg (16kbps, mono, 44.1kHz for smaller file size)
    const ffmpegCmd = `docker exec animals-tts-generator ffmpeg -i /output/${outputFilename}_raw.mp3 -b:a 16k -ac 1 -ar 44100 -y /output/${outputFilename}.mp3`;
    execSync(ffmpegCmd, { stdio: 'pipe', env: { ...process.env, MSYS_NO_PATHCONV: '1' } });

    // Clean up temp files (inside Docker container and locally)
    execSync(`docker exec animals-tts-generator rm /tmp/${outputFilename}.txt /output/${outputFilename}_raw.mp3`, { stdio: 'pipe' });
    fs.unlinkSync(tempTextFile);

    return mp3File;
  } catch (error) {
    console.error(`✗ Failed to generate audio for "${text}":`, error.message);
    throw error;
  }
}

/**
 * Generate all animal audio files
 */
async function generateAnimalAudios(translations) {
  const results = { uk: {}, ru: {} };

  for (const language of ['uk', 'ru']) {
    const animals = translations[language];
    const animalNames = Object.keys(animals);
    const outputDir = path.join(ASSETS_AUDIO_DIR, 'animals', language);

    // Create output directory
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    console.log(`\n🎵 Generating ${language.toUpperCase()} animal audio files (${animalNames.length} total)...`);

    let count = 0;
    for (const animalKey of animalNames) {
      const animalText = animals[animalKey];
      // Use English animal key as filename instead of translated text (avoids Cyrillic issues)
      const filename = sanitizeFilename(animalKey);

      try {
        const mp3File = await generateAudio(animalText, language, filename);
        const targetFile = path.join(outputDir, `${filename}.mp3`);

        // Move file to assets directory
        fs.renameSync(mp3File, targetFile);

        results[language][animalKey] = `${filename}.mp3`;
        count++;

        process.stdout.write(`\r  Progress: ${count}/${animalNames.length} (${Math.round((count / animalNames.length) * 100)}%)`);
      } catch (error) {
        console.error(`\n  ✗ Error generating ${animalKey}: ${error.message}`);
      }
    }

    console.log(`\n  ✓ Generated ${count}/${animalNames.length} ${language.toUpperCase()} animal audio files`);
  }

  return results;
}

/**
 * Generate UI phrase audio files
 */
async function generateUIAudios() {
  const results = { uk: {}, ru: {} };

  for (const language of ['uk', 'ru']) {
    const phrases = UI_PHRASES[language];
    const phraseKeys = Object.keys(phrases);
    const outputDir = path.join(ASSETS_AUDIO_DIR, 'ui', language);

    // Create output directory
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    console.log(`\n🔊 Generating ${language.toUpperCase()} UI phrase audio files (${phraseKeys.length} total)...`);

    let count = 0;
    for (const phraseKey of phraseKeys) {
      const phraseText = phrases[phraseKey];
      const filename = sanitizeFilename(phraseKey);

      try {
        const mp3File = await generateAudio(phraseText, language, filename);
        const targetFile = path.join(outputDir, `${filename}.mp3`);

        // Move file to assets directory
        fs.renameSync(mp3File, targetFile);

        results[language][phraseKey] = `${filename}.mp3`;
        count++;

        process.stdout.write(`\r  Progress: ${count}/${phraseKeys.length}`);
      } catch (error) {
        console.error(`\n  ✗ Error generating ${phraseKey}: ${error.message}`);
      }
    }

    console.log(`\n  ✓ Generated ${count}/${phraseKeys.length} ${language.toUpperCase()} UI phrase files`);
  }

  return results;
}

/**
 * Generate audioFiles.ts TypeScript file
 */
function generateAudioFilesTS(animalResults, uiResults) {
  console.log('\n📝 Generating audioFiles.ts mapping file...');

  let content = `// Auto-generated by scripts/generateTTSAudio.js
// Do not edit manually

import { Language } from "@/types";

/**
 * Prerecorded animal audio file mappings for Ukrainian and Russian
 */
export const PRERECORDED_ANIMAL_AUDIO: Record<string, Record<"uk" | "ru", any>> = {
`;

  // Get all animal keys (should be same for both languages)
  const animalKeys = Object.keys(animalResults.uk);

  for (const animalKey of animalKeys) {
    const ukFile = animalResults.uk[animalKey];
    const ruFile = animalResults.ru[animalKey];

    if (ukFile && ruFile) {
      content += `  ${animalKey}: {\n`;
      content += `    uk: require("@assets/audio/animals/uk/${ukFile}"),\n`;
      content += `    ru: require("@assets/audio/animals/ru/${ruFile}"),\n`;
      content += `  },\n`;
    }
  }

  content += `};

/**
 * Prerecorded UI phrase audio file mappings
 */
export const PRERECORDED_UI_AUDIO: Record<"findThe" | "whoSaysThis", Record<"uk" | "ru", any>> = {
`;

  for (const phraseKey of Object.keys(uiResults.uk)) {
    const ukFile = uiResults.uk[phraseKey];
    const ruFile = uiResults.ru[phraseKey];

    if (ukFile && ruFile) {
      content += `  ${phraseKey}: {\n`;
      content += `    uk: require("@assets/audio/ui/uk/${ukFile}"),\n`;
      content += `    ru: require("@assets/audio/ui/ru/${ruFile}"),\n`;
      content += `  },\n`;
    }
  }

  content += `};

/**
 * Check if prerecorded audio exists for given language
 */
export const hasPrerecordedAudio = (language: Language): boolean => {
  return language === "uk" || language === "ru";
};
`;

  fs.writeFileSync(OUTPUT_FILE, content, 'utf8');
  console.log(`  ✓ Generated ${OUTPUT_FILE}`);
}

/**
 * Main execution
 */
async function main() {
  console.log('🚀 Starting TTS Audio Generation with Microsoft Edge TTS\n');
  console.log('═'.repeat(60));

  try {
    // Check if Docker container is running
    try {
      execSync('docker ps | grep animals-tts-generator', { stdio: 'pipe' });
      console.log('✓ Docker container is running (Edge TTS)\n');
    } catch (error) {
      console.error('✗ Docker container "animals-tts-generator" is not running!');
      console.error('  Please start it first: cd scripts/tts-generator && docker-compose up -d');
      process.exit(1);
    }

    // Extract translations
    const translations = extractTranslations();

    // Generate animal audios
    const animalResults = await generateAnimalAudios(translations);

    // Generate UI phrase audios
    const uiResults = await generateUIAudios();

    // Generate TypeScript mapping file
    generateAudioFilesTS(animalResults, uiResults);

    // Summary
    const totalAnimalFiles = Object.keys(animalResults.uk).length + Object.keys(animalResults.ru).length;
    const totalUIFiles = Object.keys(uiResults.uk).length + Object.keys(uiResults.ru).length;
    const totalFiles = totalAnimalFiles + totalUIFiles;

    console.log('\n' + '═'.repeat(60));
    console.log('✅ GENERATION COMPLETE');
    console.log('═'.repeat(60));
    console.log(`Total audio files generated: ${totalFiles}`);
    console.log(`  - Animal names: ${totalAnimalFiles} files`);
    console.log(`  - UI phrases: ${totalUIFiles} files`);

    // Calculate approximate size
    const assetsAudioDir = path.join(PROJECT_ROOT, 'assets', 'audio');
    let totalSize = 0;
    const getAllFiles = (dir) => {
      if (!fs.existsSync(dir)) return [];
      const files = fs.readdirSync(dir);
      let allFiles = [];
      files.forEach((file) => {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
          allFiles = allFiles.concat(getAllFiles(filePath));
        } else if (file.endsWith('.mp3')) {
          allFiles.push(filePath);
          totalSize += fs.statSync(filePath).size;
        }
      });
      return allFiles;
    };

    getAllFiles(assetsAudioDir);
    const totalSizeMB = (totalSize / (1024 * 1024)).toFixed(2);

    console.log(`Total size: ~${totalSizeMB} MB`);
    console.log('\nNext steps:');
    console.log('  1. Review generated audio files in assets/audio/');
    console.log('  2. Test a few samples to verify quality');
    console.log('  3. Continue with app integration (see plan)');

  } catch (error) {
    console.error('\n❌ Generation failed:', error.message);
    process.exit(1);
  }
}

// Run main function
main();

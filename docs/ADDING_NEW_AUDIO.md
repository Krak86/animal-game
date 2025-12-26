# Adding New Audio Files (Animals & UI Phrases)

This guide explains how to add new animal names or UI phrases and generate their corresponding audio files for Ukrainian and Russian languages using our local TTS system.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [System Overview](#system-overview)
3. [Adding New Animals](#adding-new-animals)
4. [Adding New UI Phrases](#adding-new-ui-phrases)
5. [Docker Setup](#docker-setup)
6. [Generating Audio Files](#generating-audio-files)
7. [Troubleshooting](#troubleshooting)

---

## Prerequisites

Before you begin, ensure you have:

- **Docker Desktop** installed and running
- **Node.js** (v16 or higher)
- **Git Bash** (on Windows) or standard terminal (on macOS/Linux)
- At least **500MB** of free disk space

---

## System Overview

### Technology Stack

- **TTS Engine:** Microsoft Edge TTS (cloud-based, high quality)
- **Voices:**
  - Ukrainian: `uk-UA-PolinaNeural` (female)
  - Russian: `ru-RU-SvetlanaNeural` (female)
- **Audio Format:** 16kbps MP3, mono, 44.1kHz
- **Container:** Docker (for Edge TTS environment)

### File Structure

```
animals-game/
├── assets/
│   └── audio/
│       ├── animals/
│       │   ├── uk/          # Ukrainian animal names (60 files)
│       │   └── ru/          # Russian animal names (60 files)
│       └── ui/
│           ├── uk/          # Ukrainian UI phrases (2 files)
│           └── ru/          # Russian UI phrases (2 files)
├── scripts/
│   ├── generateTTSAudio.js  # Main generation script
│   └── tts-generator/
│       ├── Dockerfile       # Edge TTS container
│       ├── docker-compose.yml
│       └── output/          # Temporary output directory
└── src/
    ├── constants/
    │   ├── translations.ts  # Source of animal names
    │   └── audioFiles.ts    # Auto-generated audio mappings
    └── utils/
        └── speech.ts        # Audio playback logic
```

---

## Adding New Animals

Follow these steps to add a new animal to the game with audio support.

### Step 1: Add Translations

**File:** `src/constants/translations.ts`

Add the animal name in all three languages (English, Ukrainian, Russian):

```typescript
export const TRANSLATIONS: Record<Language, Translation> = {
  en: {
    animals: {
      // ... existing animals ...
      Fox: "Fox",           // Add English name
    },
  },
  uk: {
    animals: {
      // ... existing animals ...
      Fox: "Лисиця",        // Add Ukrainian translation
    },
  },
  ru: {
    animals: {
      // ... existing animals ...
      Fox: "Лиса",          // Add Russian translation
    },
  },
};
```

**Important Notes:**
- Use **English animal name** as the key (e.g., `Fox`, not `Лисиця`)
- Follow **PascalCase** naming (capitalize first letter)
- Keep the same key across all three language sections

### Step 2: Add Animal Data

**File:** `src/constants/animals.ts`

Add the animal data with image and optional sound:

```typescript
import foxImage from "@assets/images/animals/fox.png";
import foxSound from "@assets/sounds/fox.mp3"; // Optional

export const ANIMALS_DATA: AnimalData[] = [
  // ... existing animals ...
  {
    name: "Fox",
    category: "forest",
    imageUrl: foxImage,
    soundUrl: foxSound, // Optional: animal sound effect
  },
];
```

### Step 3: Add Animal Assets

1. **Image:** Add animal image to `assets/images/animals/fox.png`
2. **Sound (Optional):** Add animal sound effect to `assets/sounds/fox.mp3`

### Step 4: Generate Audio Files

Now generate the TTS audio files for Ukrainian and Russian:

```bash
# 1. Navigate to TTS generator directory
cd scripts/tts-generator

# 2. Start Docker container (if not already running)
docker-compose up -d

# 3. Return to project root
cd ../..

# 4. Run audio generation script
node scripts/generateTTSAudio.js
```

**Expected Output:**
```
🚀 Starting TTS Audio Generation with Microsoft Edge TTS

════════════════════════════════════════════════════════════
✓ Docker container is running (Edge TTS)

📖 Reading translations from translations.ts...
✓ Found 60 Ukrainian animals
✓ Found 60 Russian animals

🎵 Generating UK animal audio files (60 total)...
  Progress: 60/60 (100%)
  ✓ Generated 60/60 UK animal audio files

🎵 Generating RU animal audio files (60 total)...
  Progress: 60/60 (100%)
  ✓ Generated 60/60 RU animal audio files

🔊 Generating UK UI phrase audio files (2 total)...
  Progress: 2/2
  ✓ Generated 2/2 UK UI phrase files

🔊 Generating RU UI phrase audio files (2 total)...
  Progress: 2/2
  ✓ Generated 2/2 RU UI phrase files

📝 Generating audioFiles.ts mapping file...
  ✓ Generated src/constants/audioFiles.ts

════════════════════════════════════════════════════════════
✅ GENERATION COMPLETE
════════════════════════════════════════════════════════════
Total audio files generated: 124
  - Animal names: 120 files
  - UI phrases: 4 files
Total size: ~0.85 MB
```

### Step 5: Verify Generated Files

Check that the following files were created:

```bash
# Ukrainian audio
ls assets/audio/animals/uk/fox.mp3

# Russian audio
ls assets/audio/animals/ru/fox.mp3

# Auto-generated TypeScript mapping
cat src/constants/audioFiles.ts | grep "Fox"
```

**Expected in `audioFiles.ts`:**
```typescript
Fox: {
  uk: require("@assets/audio/animals/uk/fox.mp3"),
  ru: require("@assets/audio/animals/ru/fox.mp3"),
},
```

### Step 6: Test the New Animal

Run the app and verify:

1. The new animal appears in the game
2. Clicking the animal plays the correct audio in Ukrainian
3. Switching to Russian plays the correct audio
4. English still uses live TTS (no pre-recorded file)

```bash
npm start
```

---

## Adding New UI Phrases

To add new UI phrases (like "Find the:" or "Who says this?"), follow these steps.

### Step 1: Update Generation Script

**File:** `scripts/generateTTSAudio.js`

Add the new phrase to the `UI_PHRASES` object:

```javascript
const UI_PHRASES = {
  uk: {
    findThe: 'Знайди:',
    whoSaysThis: 'Хто так каже?',
    wellDone: 'Молодець!',        // NEW: Add Ukrainian phrase
  },
  ru: {
    findThe: 'Найди:',
    whoSaysThis: 'Кто так говорит?',
    wellDone: 'Молодец!',          // NEW: Add Russian phrase
  },
};
```

### Step 2: Update Audio Mappings Type

**File:** `src/constants/audioFiles.ts` (manually update the type)

Update the TypeScript type definition to include the new phrase:

```typescript
export const PRERECORDED_UI_AUDIO: Record<
  "findThe" | "whoSaysThis" | "wellDone",  // Add "wellDone"
  Record<"uk" | "ru", any>
> = {
  // ... existing phrases ...
  // Script will auto-generate the new entry
};
```

### Step 3: Generate Audio Files

Run the generation script:

```bash
# 1. Ensure Docker is running
cd scripts/tts-generator
docker-compose up -d

# 2. Generate audio
cd ../..
node scripts/generateTTSAudio.js
```

### Step 4: Use the New Phrase

**File:** `src/utils/speech.ts` or wherever you need it

```typescript
import { PRERECORDED_UI_AUDIO } from "@/constants/audioFiles";

// Play the new phrase
await playPrerecordedAudio(
  PRERECORDED_UI_AUDIO.wellDone[language],
  backgroundMusic,
  () => console.log("Done!")
);
```

---

## Docker Setup

### Initial Setup (First Time Only)

#### 1. Install Docker Desktop

- **Windows:** Download from [docker.com](https://www.docker.com/products/docker-desktop)
- **macOS:** Download from [docker.com](https://www.docker.com/products/docker-desktop)
- **Linux:** Install Docker Engine and Docker Compose

#### 2. Build the Docker Container

```bash
cd scripts/tts-generator
docker-compose build
```

**This will:**
- Pull Python 3.11 slim base image
- Install Edge TTS (`edge-tts` Python package)
- Install ffmpeg (for audio conversion)
- Create a persistent container

**Build time:** ~2-3 minutes (first time only)

#### 3. Start the Container

```bash
docker-compose up -d
```

The `-d` flag runs the container in detached mode (background).

### Daily Usage

#### Start Container

```bash
cd scripts/tts-generator
docker-compose up -d
```

#### Check if Container is Running

```bash
docker ps | grep animals-tts-generator
```

**Expected output:**
```
CONTAINER ID   IMAGE                    STATUS         PORTS     NAMES
abc123def456   tts-generator-edge-tts   Up 2 minutes             animals-tts-generator
```

#### Stop Container

```bash
docker-compose down
```

#### View Container Logs

```bash
docker logs animals-tts-generator
```

#### Access Container Shell (for debugging)

```bash
docker exec -it animals-tts-generator sh
```

### Manual Audio Generation (Testing)

You can manually generate a single audio file to test the voices:

```bash
# Start container
cd scripts/tts-generator
docker-compose up -d

# Test Ukrainian voice
docker exec animals-tts-generator edge-tts \
  --voice "uk-UA-PolinaNeural" \
  --text "Лисиця" \
  --write-media /output/test_uk.mp3

# Test Russian voice
docker exec animals-tts-generator edge-tts \
  --voice "ru-RU-SvetlanaNeural" \
  --text "Лиса" \
  --write-media /output/test_ru.mp3

# Check generated files
ls output/
```

### Cleaning Up Docker

#### Remove Container (keep image)

```bash
cd scripts/tts-generator
docker-compose down
```

#### Remove Container and Image

```bash
docker-compose down --rmi all
```

#### Remove All Unused Docker Resources

```bash
docker system prune -a
```

---

## Generating Audio Files

### Full Regeneration (All Animals + UI)

This regenerates **all 124 audio files** from scratch:

```bash
# 1. Ensure Docker container is running
cd scripts/tts-generator
docker-compose up -d

# 2. Return to project root
cd ../..

# 3. Run full generation
node scripts/generateTTSAudio.js
```

**Time:** ~5-10 minutes for all 124 files

### Partial Regeneration (Single Animal)

To regenerate audio for just one animal, you can temporarily modify the script:

**File:** `scripts/generateTTSAudio.js` (temporary change)

```javascript
// Find the generateAnimalAudios function
async function generateAnimalAudios(translations) {
  const results = { uk: {}, ru: {} };

  for (const language of ['uk', 'ru']) {
    const animals = translations[language];
    const animalNames = Object.keys(animals);

    // TEMPORARY: Filter to only one animal
    const filteredNames = animalNames.filter(name => name === "Fox");

    // ... rest of the function
  }
}
```

Then run the script as normal. **Remember to revert this change afterwards!**

### Understanding the Generation Process

The script performs these steps for each audio file:

1. **Extract text** from `src/constants/translations.ts`
2. **Write to temp file** (handles Cyrillic characters properly)
3. **Copy to Docker container**
4. **Generate raw MP3** using Edge TTS
5. **Optimize with ffmpeg** (16kbps, mono, 44.1kHz)
6. **Move to assets directory**
7. **Update `audioFiles.ts`** with require() statements
8. **Cleanup temporary files**

---

## Troubleshooting

### Docker Container Not Running

**Error:**
```
✗ Docker container "animals-tts-generator" is not running!
```

**Solution:**
```bash
cd scripts/tts-generator
docker-compose up -d

# Verify it's running
docker ps | grep animals-tts-generator
```

### Docker Build Fails

**Error:**
```
ERROR [internal] load metadata for docker.io/library/python:3.11-slim
```

**Solution:**
1. Check your internet connection
2. Restart Docker Desktop
3. Try building again:
```bash
docker-compose build --no-cache
```

### Audio Generation Fails for Cyrillic Text

**Error:**
```
✗ Failed to generate audio for "Лисиця": Command failed
```

**Solution:**
This is usually a character encoding issue. The script already handles this by:
1. Writing text to a UTF-8 temp file
2. Copying the file to Docker (preserves encoding)
3. Using the file as input to Edge TTS

If it still fails, check:
- Your terminal supports UTF-8
- The text in `translations.ts` is properly encoded

### Git Bash Path Translation Issues (Windows)

**Error:**
```
/c/path/to/project: No such file or directory
```

**Solution:**
The script sets `MSYS_NO_PATHCONV=1` to prevent Git Bash from translating Windows paths. If you still have issues:

```bash
# Use CMD or PowerShell instead
cmd
node scripts/generateTTSAudio.js

# Or use Windows-style paths
set MSYS_NO_PATHCONV=1
node scripts/generateTTSAudio.js
```

### Audio Files Not Playing in App

**Possible Causes:**
1. **Files not generated** - Check `assets/audio/animals/uk/` directory
2. **audioFiles.ts not updated** - Check if `require()` statements exist
3. **Metro bundler cache** - Clear cache and restart:

```bash
# Clear Metro cache
npm start -- --reset-cache

# Or manually clear cache
rm -rf node_modules/.cache
rm -rf $TMPDIR/metro-*
```

### TypeScript Errors in audioFiles.ts

**Error:**
```
Cannot find module '@assets/audio/animals/uk/fox.mp3'
```

**Solution:**
1. Ensure the MP3 file actually exists at that path
2. Restart TypeScript server in your IDE
3. Rebuild the project:
```bash
npm run build
```

### Audio Quality Issues

If generated audio sounds distorted or unclear:

**Check bitrate settings in generateTTSAudio.js:**
```javascript
// Current: 16kbps (very small files, acceptable quality)
const ffmpegCmd = `... -b:a 16k -ac 1 -ar 44100 ...`;

// Higher quality: 32kbps (double file size, better quality)
const ffmpegCmd = `... -b:a 32k -ac 1 -ar 44100 ...`;

// Maximum quality: 64kbps (4x file size, excellent quality)
const ffmpegCmd = `... -b:a 64k -ac 1 -ar 44100 ...`;
```

### Running Out of Disk Space

The Docker container and generated files use:
- **Docker image:** ~300MB
- **Container:** ~50MB
- **Generated audio:** ~0.85MB (all 124 files)
- **Temporary files during generation:** ~5-10MB

**To free up space:**
```bash
# Remove old audio files
rm -rf assets/audio/animals/uk/*.mp3
rm -rf assets/audio/animals/ru/*.mp3

# Regenerate only what you need
node scripts/generateTTSAudio.js

# Clean Docker
docker system prune -a
```

---

## Available Edge TTS Voices

If you want to change the voices used, here are some alternatives:

### Ukrainian Voices

- `uk-UA-PolinaNeural` (female) - **Currently used**
- `uk-UA-OstapNeural` (male)

### Russian Voices

- `ru-RU-SvetlanaNeural` (female) - **Currently used**
- `ru-RU-DmitryNeural` (male)

**To change voices:**

Edit `scripts/generateTTSAudio.js`:

```javascript
const VOICES = {
  uk: 'uk-UA-OstapNeural',      // Change to male
  ru: 'ru-RU-DmitryNeural',     // Change to male
};
```

Then regenerate all audio files.

---

## Quick Reference Commands

### Common Tasks

```bash
# Start Docker container
cd scripts/tts-generator && docker-compose up -d

# Generate all audio files
node scripts/generateTTSAudio.js

# Check Docker status
docker ps | grep animals-tts-generator

# Stop Docker container
cd scripts/tts-generator && docker-compose down

# Clear app cache and restart
npm start -- --reset-cache

# Test a single voice manually
docker exec animals-tts-generator edge-tts \
  --voice "uk-UA-PolinaNeural" \
  --text "Тест" \
  --write-media /output/test.mp3
```

### File Locations

```bash
# Animal translations (source)
src/constants/translations.ts

# Auto-generated audio mappings
src/constants/audioFiles.ts

# Ukrainian audio files
assets/audio/animals/uk/

# Russian audio files
assets/audio/animals/ru/

# UI phrase audio
assets/audio/ui/uk/
assets/audio/ui/ru/

# Generation script
scripts/generateTTSAudio.js

# Docker configuration
scripts/tts-generator/docker-compose.yml
scripts/tts-generator/Dockerfile
```

---

## Summary Checklist

### Adding a New Animal

- [ ] Add animal name to `translations.ts` (all 3 languages)
- [ ] Add animal data to `animals.ts`
- [ ] Add animal image to `assets/images/animals/`
- [ ] (Optional) Add animal sound to `assets/sounds/`
- [ ] Start Docker container
- [ ] Run `node scripts/generateTTSAudio.js`
- [ ] Verify audio files generated in `assets/audio/`
- [ ] Test in app (Ukrainian, Russian, English)

### Adding a New UI Phrase

- [ ] Add phrase to `UI_PHRASES` in `generateTTSAudio.js`
- [ ] Update TypeScript type in `audioFiles.ts`
- [ ] Run generation script
- [ ] Import and use in your code

---

## Need Help?

If you encounter issues not covered in this guide:

1. Check Docker logs: `docker logs animals-tts-generator`
2. Check the generation script output for error messages
3. Verify Docker Desktop is running
4. Try rebuilding the Docker container: `docker-compose build --no-cache`
5. Clear all caches and restart: `npm start -- --reset-cache`

For more information about the audio system architecture, see the main project README.

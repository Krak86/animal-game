# Audio Generation Quick Reference

Quick commands and workflows for managing TTS audio files.

## Quick Start

```bash
# 1. Start Docker container
cd scripts/tts-generator && docker-compose up -d

# 2. Generate all audio
cd ../.. && node scripts/generateTTSAudio.js

# 3. Test in app
npm start
```

---

## Add New Animal (5 Steps)

### 1. Update Translations
**File:** `src/constants/translations.ts`
```typescript
animals: {
  Fox: "Fox",      // English
  Fox: "Лисиця",   // Ukrainian
  Fox: "Лиса",     // Russian
}
```

### 2. Generate Audio
```bash
cd scripts/tts-generator && docker-compose up -d
cd ../.. && node scripts/generateTTSAudio.js
```

### 3. Verify Files
```bash
ls assets/audio/animals/uk/fox.mp3
ls assets/audio/animals/ru/fox.mp3
```

### 4. Check Mapping
```bash
grep "Fox" src/constants/audioFiles.ts
```

### 5. Test
```bash
npm start -- --reset-cache
```

---

## Add New UI Phrase (3 Steps)

### 1. Update Script
**File:** `scripts/generateTTSAudio.js`
```javascript
const UI_PHRASES = {
  uk: { newPhrase: 'Новий текст' },
  ru: { newPhrase: 'Новый текст' },
};
```

### 2. Generate
```bash
node scripts/generateTTSAudio.js
```

### 3. Use in Code
```typescript
import { PRERECORDED_UI_AUDIO } from "@/constants/audioFiles";

await playPrerecordedAudio(
  PRERECORDED_UI_AUDIO.newPhrase[language],
  backgroundMusic
);
```

---

## Docker Commands

```bash
# Start container (background)
cd scripts/tts-generator && docker-compose up -d

# Check if running
docker ps | grep animals-tts-generator

# View logs
docker logs animals-tts-generator

# Stop container
docker-compose down

# Rebuild container
docker-compose build --no-cache

# Access container shell
docker exec -it animals-tts-generator sh

# Remove everything
docker-compose down --rmi all
```

---

## Test Single Voice

```bash
# Ukrainian test
docker exec animals-tts-generator edge-tts \
  --voice "uk-UA-PolinaNeural" \
  --text "Лисиця" \
  --write-media /output/test_uk.mp3

# Russian test
docker exec animals-tts-generator edge-tts \
  --voice "ru-RU-SvetlanaNeural" \
  --text "Лиса" \
  --write-media /output/test_ru.mp3

# Check output
ls scripts/tts-generator/output/
```

---

## Troubleshooting

### Container not running
```bash
cd scripts/tts-generator
docker-compose up -d
```

### Audio not playing
```bash
# Clear cache and restart
npm start -- --reset-cache
```

### Generation fails
```bash
# Rebuild Docker
cd scripts/tts-generator
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

### Path issues (Windows Git Bash)
```bash
# Use CMD instead
cmd
node scripts/generateTTSAudio.js
```

---

## File Locations

| What | Where |
|------|-------|
| Animal names (source) | `src/constants/translations.ts` |
| Generated mappings | `src/constants/audioFiles.ts` |
| Ukrainian audio | `assets/audio/animals/uk/*.mp3` |
| Russian audio | `assets/audio/animals/ru/*.mp3` |
| UI audio | `assets/audio/ui/{uk,ru}/*.mp3` |
| Generation script | `scripts/generateTTSAudio.js` |
| Docker config | `scripts/tts-generator/` |

---

## Change Voice Quality

**File:** `scripts/generateTTSAudio.js`

```javascript
// Current: 16kbps (~6-9KB per file)
const ffmpegCmd = `... -b:a 16k -ac 1 -ar 44100 ...`;

// Better: 32kbps (~12-18KB per file)
const ffmpegCmd = `... -b:a 32k -ac 1 -ar 44100 ...`;

// Best: 64kbps (~24-36KB per file)
const ffmpegCmd = `... -b:a 64k -ac 1 -ar 44100 ...`;
```

Then regenerate all files.

---

## Change Voice Gender

**File:** `scripts/generateTTSAudio.js`

```javascript
const VOICES = {
  // Current (female voices)
  uk: 'uk-UA-PolinaNeural',
  ru: 'ru-RU-SvetlanaNeural',

  // Alternative (male voices)
  uk: 'uk-UA-OstapNeural',
  ru: 'ru-RU-DmitryNeural',
};
```

Then regenerate all files.

---

## Stats

- **Total files:** 124 (60 animals × 2 langs + 2 UI × 2 langs)
- **Total size:** ~0.85 MB
- **Generation time:** ~5-10 minutes
- **Docker image:** ~300 MB
- **Per file:** ~6-9 KB (16kbps)

---

## For Full Documentation

See [ADDING_NEW_AUDIO.md](./ADDING_NEW_AUDIO.md) for detailed instructions, troubleshooting, and examples.

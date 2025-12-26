# TTS Audio Generator

This Docker container uses Piper TTS to generate high-quality audio files for Ukrainian and Russian animal names and UI phrases.

## Prerequisites

- Docker and Docker Compose installed
- ~100MB disk space for models

## Setup

1. Build the Docker image:
   ```bash
   cd scripts/tts-generator
   docker-compose build
   ```

2. Download models (first time only):

   **All platforms (Recommended):**
   ```bash
   node download-models.js
   ```

   **Linux/Mac (Alternative):**
   ```bash
   docker-compose run --rm --entrypoint "" piper-tts bash /app/download-models.sh
   ```

   This downloads ~100MB of Piper TTS models:
   - Ukrainian: `uk_UA-ukrainian_tts-medium` (female voice)
   - Russian: `ru_RU-dmitri-medium` (male voice)

3. Start the container:
   ```bash
   docker-compose up -d
   ```

**Note:** Models are stored in `./models` directory and persist across container restarts.

## Verification

Test the Ukrainian and Russian voices:

```bash
# Test Ukrainian voice
echo "Тест" | docker exec -i animals-tts-generator piper \
  --model /models/uk_UA-lada-medium.onnx \
  --output_file /output/test_uk.wav

# Test Russian voice
echo "Тест" | docker exec -i animals-tts-generator piper \
  --model /models/ru_RU-dmitri-medium.onnx \
  --output_file /output/test_ru.wav
```

Check the `output/` directory for generated WAV files.

## Models Included

- **Ukrainian:** `uk_UA-lada-medium` (female voice)
- **Russian:** `ru_RU-dmitri-medium` (male voice, check for female alternative)

## Usage

The container is used by the `generateTTSAudio.js` script to automatically generate all audio files.

Run from project root:
```bash
node scripts/generateTTSAudio.js
```

## Cleanup

Stop and remove the container:
```bash
docker-compose down
```

## Troubleshooting

**Build fails:** Ensure you have internet connection for downloading models from Hugging Face

**Container won't start:** Check Docker logs: `docker logs animals-tts-generator`

**No audio output:** Verify models downloaded correctly in `models/` directory

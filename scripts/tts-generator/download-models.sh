#!/bin/bash

# Download Piper TTS models for Ukrainian and Russian
# This script downloads models on-demand if they don't exist

MODEL_DIR="/models"

# Ukrainian model
UK_MODEL="$MODEL_DIR/uk_UA-ukrainian_tts-medium.onnx"
UK_CONFIG="$MODEL_DIR/uk_UA-ukrainian_tts-medium.onnx.json"

# Russian model
RU_MODEL="$MODEL_DIR/ru_RU-dmitri-medium.onnx"
RU_CONFIG="$MODEL_DIR/ru_RU-dmitri-medium.onnx.json"

echo "Checking Piper TTS models..."

# Download Ukrainian models if missing
if [ ! -f "$UK_MODEL" ] || [ ! -f "$UK_CONFIG" ]; then
    echo "Downloading Ukrainian model (uk_UA-ukrainian_tts-medium)..."
    wget -q --show-progress -O "$UK_MODEL" \
        "https://huggingface.co/rhasspy/piper-voices/resolve/main/uk/uk_UA/ukrainian_tts/medium/uk_UA-ukrainian_tts-medium.onnx" || \
        (echo "Failed to download Ukrainian model" && exit 1)

    wget -q --show-progress -O "$UK_CONFIG" \
        "https://huggingface.co/rhasspy/piper-voices/resolve/main/uk/uk_UA/ukrainian_tts/medium/uk_UA-ukrainian_tts-medium.onnx.json" || \
        (echo "Failed to download Ukrainian model config" && exit 1)

    echo "✓ Ukrainian model downloaded"
else
    echo "✓ Ukrainian model already exists"
fi

# Download Russian models if missing
if [ ! -f "$RU_MODEL" ] || [ ! -f "$RU_CONFIG" ]; then
    echo "Downloading Russian model (ru_RU-dmitri-medium)..."
    wget -q --show-progress -O "$RU_MODEL" \
        "https://huggingface.co/rhasspy/piper-voices/resolve/main/ru/ru_RU/dmitri/medium/ru_RU-dmitri-medium.onnx" || \
        (echo "Failed to download Russian model" && exit 1)

    wget -q --show-progress -O "$RU_CONFIG" \
        "https://huggingface.co/rhasspy/piper-voices/resolve/main/ru/ru_RU/dmitri/medium/ru_RU-dmitri-medium.onnx.json" || \
        (echo "Failed to download Russian model config" && exit 1)

    echo "✓ Russian model downloaded"
else
    echo "✓ Russian model already exists"
fi

echo "All models ready!"

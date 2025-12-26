FROM python:3.11-slim

WORKDIR /app

# Install Edge TTS and dependencies
RUN apt-get update && \
    apt-get install -y ffmpeg curl && \
    pip install edge-tts && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

VOLUME ["/output"]

# Keep container running
CMD ["tail", "-f", "/dev/null"]

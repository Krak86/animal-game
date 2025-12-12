# Docker Setup Guide

This project uses separate `node_modules` for Windows (local development) and Docker (Android builds) to avoid compatibility issues with native binaries.

## Architecture

- **Windows node_modules**: For web development and local testing
- **Docker node_modules**: Stored in a Docker volume for Linux compatibility
- **Shared**: Source code, `package.json`, `yarn.lock`

## Quick Start

### Initial Setup

```bash
# Build Docker image (first time or after Dockerfile changes)
npm run docker:build:no-cache

# Start Docker container
npm run docker:up

# Install dependencies inside Docker
npm run docker:install
```

### For Web Development (Windows)

```bash
# Install dependencies locally
npm install

# Run web version
npm run web
```

### For Android Development (Docker)

```bash
# Make sure container is running
npm run docker:up

# Enter container shell
npm run docker:exec

# Inside container:
yarn install  # If not done already
yarn build:android:release
```

The APK will be at: `android/app/build/outputs/apk/release/app-release.apk`

## Available Scripts

### Docker Management
- `npm run docker:build` - Build Docker image
- `npm run docker:build:no-cache` - Rebuild Docker image from scratch
- `npm run docker:up` - Start container in background
- `npm run docker:down` - Stop container
- `npm run docker:exec` - Enter container shell
- `npm run docker:install` - Install dependencies inside container
- `npm run docker:clean` - Stop container and remove volumes (clean slate)

### Android Builds (run inside Docker)
- `yarn build:android:debug` - Build debug APK
- `yarn build:android:release` - Build release APK
- `yarn build:android:clean` - Clean build artifacts

### Local Development
- `npm run web` - Start web version (Windows)
- `npm run start` - Start Expo dev server

## Important Notes

### Do NOT Share node_modules

- **Windows** and **Docker** have separate `node_modules`
- The `.dockerignore` file prevents Windows `node_modules` from being copied to Docker
- Docker volume `node_modules` stores Linux-compatible packages
- Gradle cache is also stored in a separate Docker volume for faster builds

### When to Rebuild

Rebuild Docker image when:
- Updating Node.js version in Dockerfile
- Updating Android SDK packages in Dockerfile
- Major dependency changes

```bash
npm run docker:build:no-cache
npm run docker:up
npm run docker:install
```

### Troubleshooting

**Problem**: Dependencies not found in Docker
```bash
# Enter container and manually install
npm run docker:exec
yarn install
```

**Problem**: Build failures after dependency changes
```bash
# Clean everything and start fresh
npm run docker:clean
npm run docker:build:no-cache
npm run docker:up
npm run docker:install
```

**Problem**: Port 8081 already in use
```bash
# Stop the container
npm run docker:down

# Or find and kill the process using port 8081
```

## Folder Structure

```
animals-game/
├── node_modules/          # Windows dependencies (gitignored)
├── android/
│   └── app/build/outputs/apk/  # Built APKs
├── src/                   # Source code (shared)
├── package.json           # Dependencies (shared)
├── dockerfile             # Docker image definition
├── docker-compose.yml     # Docker service configuration
└── .dockerignore          # Files excluded from Docker
```

## Testing Landscape/Portrait

The app now supports both orientations:

1. Build APK in Docker: `yarn build:android:release`
2. Install APK on Android device
3. Rotate device to test landscape/portrait modes
4. UI should automatically adapt with responsive sizing

For quick testing, use web version:
```bash
npm install  # On Windows
npm run web
```
Then resize browser window or use device emulation in Chrome DevTools.

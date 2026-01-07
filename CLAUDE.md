# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

React Native educational game (Expo ~54) for children to learn animal names and sounds in three languages (English, Ukrainian, Russian). Features four game modes: By Name, By Sound, Animal Pairs (memory matching), and Exhibition mode. Built with TypeScript, drawer navigation, and custom hooks for game logic.

## Development Commands

### Local Development
```bash
npm install              # Install dependencies
npm start                # Start Expo dev server
npm run web              # Run web version
npm run android          # Run on Android device/emulator
npm run ios              # Run on iOS (macOS only)
```

### Docker (Android Builds)
```bash
npm run docker:build           # Build Docker image
npm run docker:up              # Start container
npm run docker:install         # Install dependencies in container
npm run docker:exec            # Enter container shell

# Inside container:
yarn build:android:release     # Build release APK
yarn build:android:debug       # Build debug APK
```

**Important**: Windows and Docker use separate `node_modules` (Docker volume). Never share `node_modules` between them due to native binary incompatibilities.

### Web Deployment (GitHub Pages)
```bash
npm run build:web        # Build for web (runs expo export + post-processing)
npm run open:web         # Preview locally with http-server
```

Deployment: Push to `web` branch triggers GitHub Actions workflow that deploys to `https://krak86.github.io/animal-game/`

### Scripts
```bash
node scripts/downloadTwemojiSvgs.js    # Download emoji SVG assets
node scripts/generateTTSAudio.js       # Generate TTS audio (requires Docker)
```

## Architecture Patterns

### Centralized Game Logic via Custom Hooks

Game state and logic are managed by specialized hooks that return a consistent interface:

- **`useGameLogic`** ([src/hooks/useGameLogic.ts](src/hooks/useGameLogic.ts)) - Handles "By Name" and "By Sound" modes
  - Manages current question, score, animations, audio
  - Returns: `currentAnimal`, `animals`, `score`, `handleAnimalPress`, `animations`, `resetGame`, `playQuestionSound`

- **`usePairsGameLogic`** ([src/hooks/usePairsGameLogic.ts](src/hooks/usePairsGameLogic.ts)) - Handles "Animal Pairs" memory matching mode
  - Two-click selection pattern with `matchedPairIds` tracking
  - Returns same interface as `useGameLogic` but with pairs-specific logic

Both hooks share the same return type signature, allowing conditional usage in [App.tsx](App.tsx):

```typescript
const gameLogic = gameMode === "animalPairs"
  ? usePairsGameLogic(...)
  : useGameLogic(...);
```

### Path Aliases (tsconfig.json)

Use these aliases consistently:

```typescript
import { Component } from "@/components";        // src/*
import icon from "@assets/imgs/icon.png";        // assets/*
```

### Drawer Navigation Structure

- Main navigation: `@react-navigation/drawer` v7.x
- Custom drawer content: [src/components/CustomDrawerContent.tsx](src/components/CustomDrawerContent.tsx)
- Hamburger button: [src/components/HamburgerButton.tsx](src/components/HamburgerButton.tsx)
- Game modes switch via drawer menu

### Audio System Architecture

**Three-tier audio system:**

1. **Background music** ([src/utils/audio.ts](src/utils/audio.ts))
   - Loops at 0.2 volume (normal) or 0.05 (ducked during TTS/sounds)
   - Global toggle with state persistence

2. **Animal sounds**
   - MP3 files in `assets/music/animals/`
   - Loaded on-demand from `soundUrl` in animal data
   - Prevents overlapping with reference tracking

3. **Text-to-Speech (TTS)** ([src/utils/speech.ts](src/utils/speech.ts))
   - **English**: Live TTS via `expo-speech` (en-GB voice)
   - **Ukrainian/Russian**: Pre-recorded MP3 files (Edge TTS, female voices)
   - Fallback: If pre-recorded missing, falls back to live TTS
   - Pre-recorded audio mappings: [src/constants/audioFiles.ts](src/constants/audioFiles.ts) (auto-generated)

**Generating TTS Audio:**

```bash
# 1. Start TTS generator Docker container
cd scripts/tts-generator && docker-compose up -d

# 2. Generate audio from translations.ts
cd ../.. && node scripts/generateTTSAudio.js

# 3. Auto-generates:
#    - assets/audio/animals/uk/*.mp3 (60 files)
#    - assets/audio/animals/ru/*.mp3 (60 files)
#    - assets/audio/ui/uk/*.mp3 (2 files)
#    - assets/audio/ui/ru/*.mp3 (2 files)
#    - src/constants/audioFiles.ts (mappings)
```

See [docs/ADDING_NEW_AUDIO.md](docs/ADDING_NEW_AUDIO.md) for detailed TTS workflow.

### SVG Emoji System

**All emojis render as SVG** for cross-platform consistency:

- Component: [src/components/EmojiSvg.tsx](src/components/EmojiSvg.tsx)
- Mapping: [src/constants/emojiMap.ts](src/constants/emojiMap.ts) (emoji char → SVG file)
- Assets: `assets/emojis/*.svg` (Twemoji library + custom SVGs)

**Downloading Twemoji SVGs:**

```bash
node scripts/downloadTwemojiSvgs.js  # Downloads 71 SVG files
```

**For custom emojis** (not in Twemoji):
1. Create custom SVG file (e.g., `donkey.svg`)
2. Place in `assets/emojis/`
3. Add mapping to `emojiMap.ts`:
   ```typescript
   "🫏": require("@assets/emojis/donkey.svg")
   ```
4. Clear Metro cache: `npx expo start --clear`

### Animation System

Uses `react-native-reanimated` v4.1.1 with utility functions in [src/utils/animations.ts](src/utils/animations.ts):

- `animateCardsEntrance` - Staggered card entrance
- `createWiggleAnimation` - Continuous subtle wiggle
- `animateSuccessShow/Hide` - Success overlay fade/scale
- `animateQuestionShow/Hide` - Question bounce effect
- `shakeCard` - Error feedback shake

### Language System

- **Detection**: [src/hooks/useLanguageInitialization.ts](src/hooks/useLanguageInitialization.ts)
  - Auto-detects from device locale
  - Persists to AsyncStorage

- **Translations**: [src/constants/translations.ts](src/constants/translations.ts) (656 lines)
  - Complete en/uk/ru translations
  - Includes animal names and descriptions

- **UI Pattern**:
  - Start screen: Horizontal 3-button layout ([LanguageSwitcher.tsx](src/components/LanguageSwitcher.tsx))
  - During gameplay: Compact dropdown ([LanguageDropdown.tsx](src/components/LanguageDropdown.tsx))

## Key Files and Their Roles

### Data Constants

- [src/constants/animals.ts](src/constants/animals.ts) - 86 animals with Unsplash images, YouTube videos, Wikipedia links, sounds
- [src/constants/translations.ts](src/constants/translations.ts) - All UI text and animal names in en/uk/ru
- [src/constants/gameSettings.ts](src/constants/gameSettings.ts) - `ANIMALS_PER_SCREEN = 6`, `TILES_PER_SCREEN = 6` for Animal Pairs
- [src/constants/audioFiles.ts](src/constants/audioFiles.ts) - Auto-generated TTS audio mappings (DO NOT EDIT MANUALLY)
- [src/constants/emojiMap.ts](src/constants/emojiMap.ts) - Emoji character to SVG file mappings

### Core Components

- [App.tsx](App.tsx) - Main app, drawer navigation, conditional hook usage, font loading
- [src/components/AnimalCard.tsx](src/components/AnimalCard.tsx) - Individual animal tile with wiggle animation
- [src/components/PairsAnimalCard.tsx](src/components/PairsAnimalCard.tsx) - Memory card with gold/red borders, faded matched state
- [src/components/QuestionDisplay.tsx](src/components/QuestionDisplay.tsx) - Shows question with name or sound replay
- [src/components/SuccessOverlay.tsx](src/components/SuccessOverlay.tsx) - Full-screen celebration on correct answer
- [src/components/StartScreen.tsx](src/components/StartScreen.tsx) - Game mode selection
- [src/components/AnimalsListView.tsx](src/components/AnimalsListView.tsx) - Exhibition mode with FlashList
- [src/components/AnimalDetailView.tsx](src/components/AnimalDetailView.tsx) - Detailed animal info with galleries

## Adding New Animals

1. **Update translations** in [src/constants/translations.ts](src/constants/translations.ts):
   ```typescript
   en: { animals: { Fox: "Fox" } },
   uk: { animals: { Fox: "Лисиця" } },
   ru: { animals: { Fox: "Лиса" } }
   ```

2. **Add animal data** in [src/constants/animals.ts](src/constants/animals.ts):
   ```typescript
   {
     id: 87,
     name: "Fox",
     emoji: "🦊",
     image: require("@assets/imgs/bg/bg1.jpg"),
     images: ["https://images.unsplash.com/..."], // 6-7 URLs
     videos: ["https://www.youtube.com/watch?v=..."], // 3 URLs
     wikiUrl: { en: "...", uk: "...", ru: "..." },
     soundUrl: require("@assets/music/animals/fox.mp3"),
     modes: ["byName", "bySound", "showAll", "animalPairs"]
   }
   ```

3. **Add emoji mapping** in [src/constants/emojiMap.ts](src/constants/emojiMap.ts):
   ```typescript
   "🦊": require("@assets/emojis/1f98a.svg")
   ```

4. **Generate TTS audio**:
   ```bash
   cd scripts/tts-generator && docker-compose up -d
   cd ../.. && node scripts/generateTTSAudio.js
   ```

5. **Add assets**:
   - Animal sound: `assets/music/animals/fox.mp3`
   - Emoji SVG: `assets/emojis/1f98a.svg` (or run `node scripts/downloadTwemojiSvgs.js`)

## Common Workflows

### TypeScript Check
```bash
npx tsc --noEmit
```

### Clear Metro Cache
```bash
npx expo start --clear
```

### Build Web for Production
```bash
npm run build:web  # Runs expo export + fix-base-path.js post-processing
```

The [scripts/fix-base-path.js](scripts/fix-base-path.js) script:
- Adds `<base href="/animal-game/">` to `index.html`
- Adds Open Graph meta tags
- Fixes asset paths for GitHub Pages deployment

### Android Full Screen Mode

App automatically enters full screen on Android startup via `expo-navigation-bar`:

```typescript
await NavigationBar.setVisibilityAsync("hidden");
await NavigationBar.setBehaviorAsync("overlay-swipe");
```

## Important Patterns to Follow

### When Modifying Game Logic

- **By Name/By Sound modes**: Edit [src/hooks/useGameLogic.ts](src/hooks/useGameLogic.ts)
- **Animal Pairs mode**: Edit [src/hooks/usePairsGameLogic.ts](src/hooks/usePairsGameLogic.ts)
- Both hooks must maintain the same return type signature

### When Adding UI Audio (like "Find the:")

1. Edit [scripts/generateTTSAudio.js](scripts/generateTTSAudio.js) - add to `UI_PHRASES` object
2. Run `node scripts/generateTTSAudio.js`
3. Use via `PRERECORDED_UI_AUDIO` from [src/constants/audioFiles.ts](src/constants/audioFiles.ts)

### When Changing Fonts

Fonts are loaded in [App.tsx:46-51](App.tsx#L46-L51) via `useFonts` hook. Splash screen stays visible until fonts load. Font constants in [src/constants/fonts.ts](src/constants/fonts.ts).

### Responsive Design

Use [src/hooks/useResponsiveDimensions.ts](src/hooks/useResponsiveDimensions.ts) for screen size and orientation handling:

```typescript
const { screenWidth, screenHeight, isPortrait } = useResponsiveDimensions();
```

## Docker Environment

### For Android Development

The Dockerfile creates an Android build environment with:
- Node.js (for Expo)
- Android SDK with platform-tools
- Gradle cache volume for faster builds

**Never share `node_modules` between Windows and Docker** - they use different platforms and will have incompatible native binaries.

### For TTS Audio Generation

Separate Docker container in `scripts/tts-generator/`:
- Edge TTS Python package
- Generates high-quality Ukrainian/Russian audio
- See [docs/AUDIO_QUICK_REFERENCE.md](docs/AUDIO_QUICK_REFERENCE.md)

## File Paths Convention

- Use TypeScript path aliases (`@/` and `@assets/`) consistently
- For file references in documentation/code: use forward slashes (cross-platform)
- Images from Unsplash: Full URLs in `images` array
- Local images: `require("@assets/...")` syntax
- Audio files: `require("@assets/music/...")` or `require("@assets/audio/...")`

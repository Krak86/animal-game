# Animal Explorer 🐕🐈🦁

An interactive React Native educational game for children to learn animal names and sounds in three languages (English, Ukrainian, Russian). Features three distinct game modes including an exhibition mode for browsing all animals. Built with TypeScript, Expo, drawer navigation, and featuring image galleries, YouTube videos, Wikipedia integration, custom fonts, background music, and engaging animations.

## Features

- 🎮 **Three Game Modes**:
  - **By Name**: Match animal names to images
  - **By Sound**: Identify animals by their sounds
  - **Exhibition Mode**: Browse all animals with detailed information
- 🦁 **48 Animals**: Comprehensive collection of farm animals, wild animals, birds, marine life, and insects
- 🖼️ **Image Galleries**: 6-7 high-quality Unsplash photos per animal with carousel and pinch-to-zoom
- 🎬 **Video Galleries**: 3 YouTube videos per animal with integrated player
- 📚 **Wikipedia Integration**: Language-specific Wikipedia links for in-depth learning
- 🎨 **3D Model Viewer**: Interactive 3D models (coming soon)
- 🧭 **Drawer Navigation**: Easy access to all game modes and settings via hamburger menu
- 🌍 **Trilingual Support**: Complete English, Ukrainian, and Russian translations
- 🌐 **Smart Language Switcher**: Horizontal buttons on start screen, compact dropdown during gameplay
- 🗣️ **Text-to-Speech**: Pronounces animal names in all three languages
- 🎵 **Background Music**: Optional music with toggle control
- 🎨 **Smooth Animations**: High-performance animations using React Native Reanimated
- 🔊 **Animal Sounds**: Authentic MP3 audio files for all 48 animals
- 📱 **Responsive Design**: Adaptive layouts for all screen sizes and orientations
- ✅ **Visual Feedback**: Red borders for wrong answers, celebration overlay for correct ones
- 📊 **Score Tracking**: Keep track of your progress during gameplay
- 🔤 **Custom Fonts**: Professional Montserrat typography
- 🎭 **SVG Emoji Rendering**: Consistent cross-platform emoji appearance using Twemoji
- 💾 **Language Persistence**: Automatic language detection with AsyncStorage
- 🏠 **Reset Functionality**: Return to start screen anytime

## Project Structure

```
/
├── App.tsx                          # Main app component with drawer navigation
├── index.ts                         # React Native entry point
├── package.json                     # Dependencies and scripts
├── app.json                         # Expo configuration
├── tsconfig.json                    # TypeScript configuration with path aliases
├── babel.config.js                  # Babel preset for Expo
├── metro.config.js                  # Metro bundler config (SVG transformer)
├── eas.json                         # EAS Build profiles (Android/iOS)
├── Dockerfile                       # Docker build environment
├── docker-compose.yml               # Docker compose configuration
├── declarations.d.ts                # TypeScript declarations for SVG imports
├── README.md                        # This file
│
├── assets/                          # Static assets
│   ├── fonts/                       # Montserrat font family (4 .ttf files)
│   │   ├── Montserrat-Regular.ttf
│   │   ├── Montserrat-Medium.ttf
│   │   ├── Montserrat-SemiBold.ttf
│   │   └── Montserrat-Bold.ttf
│   ├── imgs/bg/                     # Background images (10 JPG files)
│   ├── music/                       # Audio files
│   │   ├── animals/                 # 48 animal sound MP3 files
│   │   ├── kid-366901.mp3           # Background music
│   │   ├── success.mp3              # Success sound effect
│   │   └── wrong.mp3                # Error sound effect
│   ├── emojis/                      # SVG emoji files (70 files: 60 Twemoji + 2 custom + 8 UI)
│   ├── icon.png                     # App icon
│   ├── splash-icon.png              # Splash screen
│   ├── adaptive-icon.png            # Android adaptive icon
│   └── favicon.png                  # Web favicon
│
├── scripts/                         # Build and setup scripts
│   └── downloadTwemojiSvgs.js       # Download Twemoji SVG assets
│
└── src/                             # Source code
    ├── components/                  # React components (17 files)
    │   ├── AnimalCard.tsx           # Individual animal tile with wiggle animation
    │   ├── QuestionDisplay.tsx      # Question display with name or sound replay
    │   ├── StartScreen.tsx          # Game mode selection screen
    │   ├── SuccessOverlay.tsx       # Celebration overlay on correct answer
    │   ├── AnimalsListView.tsx      # Browse all animals (Exhibition mode)
    │   ├── AnimalDetailView.tsx     # Detailed animal info with galleries
    │   ├── ImageGalleryModal.tsx    # Image carousel with pinch-to-zoom
    │   ├── VideoGalleryModal.tsx    # YouTube video player modal
    │   ├── Model3DModal.tsx         # 3D model viewer (coming soon)
    │   ├── ZoomableImage.tsx        # Pinch-to-zoom image component
    │   ├── CustomDrawerContent.tsx  # Drawer menu content
    │   ├── HamburgerButton.tsx      # Hamburger menu button
    │   ├── LanguageSwitcher.tsx     # Horizontal 3-button language toggle
    │   ├── LanguageDropdown.tsx     # Compact dropdown language selector
    │   ├── SoundToggle.tsx          # Music on/off toggle
    │   ├── EmojiSvg.tsx             # SVG emoji rendering component
    │   └── index.ts                 # Components barrel export
    │
    ├── constants/                   # App constants and data (6 files)
    │   ├── animals.ts               # 48 animals with images, videos, Wikipedia (1,442 lines)
    │   ├── translations.ts          # Complete i18n for en/uk/ru (656 lines)
    │   ├── sounds.ts                # Sound effect URLs
    │   ├── fonts.ts                 # Font family constants
    │   ├── gameSettings.ts          # Game configuration (ANIMALS_PER_SCREEN = 6)
    │   └── emojiMap.ts              # Emoji to SVG file mappings
    │
    ├── hooks/                       # Custom React hooks (3 files)
    │   ├── useGameLogic.ts          # Core game state and logic management
    │   ├── useLanguageInitialization.ts  # Language detection & persistence
    │   └── useResponsiveDimensions.ts    # Screen size & orientation handling
    │
    ├── utils/                       # Utility functions (6 files)
    │   ├── audio.ts                 # Audio loading and playback
    │   ├── speech.ts                # Text-to-speech utilities
    │   ├── helpers.ts               # General helpers (shuffle, random)
    │   ├── animations.ts            # Animation utility functions
    │   ├── languageDetection.ts     # Device language detection
    │   └── linking.ts               # External link handling (Wikipedia, etc.)
    │
    ├── styles/                      # Styling (3 files)
    │   ├── colors.ts                # Color palette definitions
    │   ├── appStyles.ts             # Container, scroll, grid layouts
    │   └── componentStyles.ts       # Component-specific styles
    │
    └── types/                       # TypeScript type definitions (1 file)
        └── index.ts                 # Animal, Language, GameMode, Translations, etc.
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Expo CLI
- For iOS: macOS with Xcode
- For Android: Android Studio with emulator or physical device

### Installation

```bash
npm install
```

### Running the App

```bash
# Start the development server
npm start

# Run on web
npm run web

# Run on Android
npm run android

# Run on iOS (macOS only)
npm run ios
```

The app will load fonts on first launch before displaying the splash screen.

## Code Organization

### Components (`src/components/`)

#### Game Components

- **AnimalCard.tsx**: Displays individual animal with wiggle animation and emoji
- **QuestionDisplay.tsx**: Shows animal name or sound replay button
- **StartScreen.tsx**: Game mode selection screen with animations
- **SuccessOverlay.tsx**: Full-screen celebration overlay on correct answer

#### Exhibition Mode Components

- **AnimalsListView.tsx**: Browse all 48 animals with search and filter functionality
- **AnimalDetailView.tsx**: Full-screen detailed animal information view
- **ImageGalleryModal.tsx**: Image carousel with swipe navigation and pinch-to-zoom
- **VideoGalleryModal.tsx**: YouTube video player modal
- **Model3DModal.tsx**: 3D model viewer modal (coming soon)
- **ZoomableImage.tsx**: Pinch-to-zoom image component using gestures

#### Navigation & UI Components

- **CustomDrawerContent.tsx**: Custom drawer menu with mode selection
- **HamburgerButton.tsx**: Hamburger menu button for drawer navigation
- **LanguageSwitcher.tsx**: Horizontal 3-button language toggle (EN/УКР/РУ) for start screen
- **LanguageDropdown.tsx**: Compact dropdown language selector for gameplay
- **SoundToggle.tsx**: Toggle background music on/off
- **EmojiSvg.tsx**: SVG-based emoji rendering component (Twemoji)

### Constants (`src/constants/`)

- **animals.ts**: 48 animals with images (Unsplash), videos (YouTube), Wikipedia URLs, sounds, and descriptions (1,442 lines)
- **translations.ts**: Complete English, Ukrainian, and Russian translations including animal descriptions (656 lines)
- **sounds.ts**: Sound effect URLs for success and error feedback
- **fonts.ts**: Montserrat font family constants
- **gameSettings.ts**: Game configuration (ANIMALS_PER_SCREEN = 6)
- **emojiMap.ts**: Mapping of emoji characters to SVG file paths (70 emojis)

### Hooks (`src/hooks/`)

- **useGameLogic.ts**: Core custom hook managing all game state, logic, animations, and audio
- **useLanguageInitialization.ts**: Language detection from device settings and AsyncStorage persistence
- **useResponsiveDimensions.ts**: Screen size and orientation handling for responsive layouts

### Styles (`src/styles/`)

- **appStyles.ts**: Main app container styles
- **colors.ts**: Color palette definitions
- **componentStyles.ts**: Component-specific styles with Montserrat fonts

### Types (`src/types/`)

- **index.ts**: TypeScript interfaces and types (Animal, Language, GameMode, Translations)

### Utils (`src/utils/`)

- **animations.ts**: Animation helper functions for React Native Animated API
- **audio.ts**: Sound loading, playback, and background music functions
- **speech.ts**: Text-to-speech utilities using expo-speech with language support
- **helpers.ts**: General utility functions (shuffle, random selection, etc.)
- **languageDetection.ts**: Device language detection from system settings
- **linking.ts**: External URL handling for Wikipedia and other links

## Customization

### Adding More Animals

Edit `src/constants/animals.ts`:

```typescript
export const ANIMALS: Animal[] = [
  // Add your animal here
  {
    id: 49,
    name: "Bear",
    emoji: "🐻",
    image: require("@assets/imgs/bg/bg1.jpg"),
    images: [
      "https://images.unsplash.com/photo-1...",
      "https://images.unsplash.com/photo-2...",
      // Add 6-7 Unsplash URLs
    ],
    videos: [
      "https://www.youtube.com/watch?v=...",
      "https://www.youtube.com/watch?v=...",
      "https://www.youtube.com/watch?v=...",
    ],
    wikiUrl: {
      en: "https://en.wikipedia.org/wiki/Bear",
      uk: "https://uk.wikipedia.org/wiki/Ведмідь",
      ru: "https://ru.wikipedia.org/wiki/Медведь",
    },
    soundUrl: require("@assets/music/animals/bear.mp3"),
    modes: ["byName", "bySound", "showAll"],
  },
];
```

Then add translations in `src/constants/translations.ts`:

```typescript
export const TRANSLATIONS = {
  en: {
    animals: {
      // ... other animals
      Bear: "Bear",
    },
    descriptions: {
      Bear: "Large mammal with thick fur...",
    },
  },
  uk: {
    animals: {
      // ... other animals
      Bear: "Ведмідь",
    },
    descriptions: {
      Bear: "Великий ссавець з густим хутром...",
    },
  },
  ru: {
    animals: {
      // ... other animals
      Bear: "Медведь",
    },
    descriptions: {
      Bear: "Крупное млекопитающее с густым мехом...",
    },
  },
};
```

Add emoji mapping in `src/constants/emojiMap.ts`:

```typescript
export const EMOJI_SVG_MAP: Record<string, any> = {
  // ... other emojis
  "🐻": require("@assets/emojis/1f43b.svg"),
};
```

Download or create the emoji SVG file and place it in `assets/emojis/`.

### Changing Colors

Edit `src/styles/colors.ts` to customize the color scheme.

### Custom Sounds

Replace URLs in `src/constants/sounds.ts` with your own sound files for success/error feedback.

### Adding New Fonts

1. Place `.ttf` files in `assets/fonts/`
2. Update `src/constants/fonts.ts`
3. Load fonts in [App.tsx:46-51](App.tsx#L46-L51) using `useFonts` hook
4. Use font families in styles

### Downloading Emoji SVG Assets

The app uses SVG versions of emojis (from Twitter's Twemoji library) for consistent cross-platform rendering. These SVG files need to be downloaded before building the app.

#### What the Script Does

The `scripts/downloadTwemojiSvgs.js` script:

- Downloads 68 Twemoji SVG files (60 animal emojis + 8 UI emojis)
- Saves them to `assets/emojis/` directory
- Skips files that already exist (safe to re-run)
- Shows progress and summary of downloads

#### When to Use

Run this script:

- **First time setup**: After cloning the repository
- **Adding new emojis**: After adding new animals to `animals.ts`
- **Missing assets**: If emoji SVG files are missing from `assets/emojis/`

#### How to Run

```bash
# Download all Twemoji SVG files
node scripts/downloadTwemojiSvgs.js
```

#### Expected Output

```
Starting download of 68 Twemoji SVG files...

✓ Downloaded 🐕 (1f415.svg)
✓ Downloaded 🐈 (1f408.svg)
✓ 🦁 (1f981.svg) - already exists
...

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Download Summary:
✓ Downloaded: 64
→ Skipped (already exist): 4
✗ Failed: 0
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ All SVG files downloaded successfully to assets/emojis
```

#### Custom Emoji SVGs

For emojis not available in Twemoji (like newer Unicode 15.0+ emojis), you can:

1. Create custom SVG files (e.g., `donkey.svg`, `goose.svg`)
2. Place them in `assets/emojis/` directory
3. Update `src/constants/emojiMap.ts` to reference your custom SVG:

```typescript
export const EMOJI_SVG_MAP: Record<string, any> = {
  "🫏": require("@assets/emojis/donkey.svg"), // Custom SVG
  "🪿": require("@assets/emojis/goose.svg"), // Custom SVG
  // ... other emojis
};
```

4. Clear Metro cache: `npx expo start --clear`

#### Troubleshooting

**Failed downloads**: Some newer emojis (Unicode 15.0+) may not exist in Twemoji. Create custom SVG files for these.

**Metro bundler errors**: Clear cache with `npx expo start --clear` after adding new SVG files.

**SVG not rendering**: Verify the emoji character in `animals.ts` matches the mapping in `emojiMap.ts`.

## Game Modes Explained

### By Name Mode

1. Animal name appears at top of screen
2. Text-to-speech pronounces the name
3. Player taps the matching animal from 6 options
4. Red border flashes on wrong answer
5. Celebration overlay on correct answer
6. Score increases, new question appears

### By Sound Mode

1. Animal sound plays automatically
2. Player taps the animal that makes that sound
3. Replay button available to hear sound again
4. Same visual feedback as "By Name" mode
5. All 48 animals include sound files

### Exhibition Mode

1. Browse all 48 animals in a scrollable grid
2. Search and filter animals by name in current language
3. Tap any animal card to view detailed information
4. Animal detail view includes:
   - Large emoji display
   - Animal name and translated description
   - **Image Gallery**: View 6-7 high-quality Unsplash photos
     - Swipe through images with carousel
     - Pinch-to-zoom for detailed viewing
   - **Video Gallery**: Watch 3 curated YouTube videos
     - Full video playback controls
     - HD quality streaming
   - **Wikipedia**: Learn more via language-specific Wikipedia link
   - **Play Sound**: Listen to the animal's sound
5. Navigate back to browse more animals
6. Access via drawer menu (hamburger button)

## Technologies

- **React Native 0.81.5** with **Expo ~54.0.29**
- **TypeScript 5.9.3** for type safety
- **@react-navigation/drawer** (v7.x) and **@react-navigation/native** (v7.x) for drawer navigation system
- **react-native-reanimated** (v3.x) for high-performance animations
- **react-native-reanimated-carousel** for image gallery carousel
- **expo-av** for audio playback and background music
- **expo-speech** for text-to-speech in all three languages
- **expo-font** for custom Montserrat typography
- **@react-native-async-storage** for language persistence
- **react-native-svg** (v15.12.1) for SVG rendering
- **react-native-svg-transformer** for importing SVG as React components
- **Twitter Twemoji** SVG library for consistent cross-platform emoji rendering
- **Custom hooks** for centralized state management
- **Path aliases** (`@/` for src, `@assets/` for assets) for clean imports
- **Unsplash** for high-quality animal images
- **YouTube** for educational animal videos
- **Wikipedia** for comprehensive animal information

## License

ISC

## Building and Deployment

### Development Build

```bash
# Install EAS CLI
npm install -g eas-cli

# Login to Expo
eas login

# Configure project (first time)
eas build:configure
```

### Development Build (Docker)

```bash
# Rebuild the Docker image
docker-compose build
docker-compose build --no-cache

# Start the container
docker-compose up -d
#
npm run docker:install

# Enter the container
docker-compose exec animals-game-builder bash

# Inside the container, install dependencies and build:
yarn install (or npm run docker:install)
# Build android folder (gradle, jar etc.)
npx expo run:android --variant release
# Or use EAS build locally (AAB)
eas build --platform android --local
# Or use EAS build locally (APK)
eas build --platform android --profile preview --local
# Or use EAS build locally for arm64 (APK)
eas build --platform android --profile production-arm64 --local

# Build with Gradle
"build:android:debug": "cd android && ./gradlew assembleDebug",
"build:android:release": "cd android && ./gradlew assembleRelease",
"build:android:clean": "cd android && ./gradlew clean"
```

### Android

```bash
# For testing (APK)
eas build --platform android --profile preview

# For production (AAB - required for Play Store)
eas build --platform android --profile production

# Publish to Play Store
eas submit -p android --profile production
```

### iOS

```bash
# For testing
eas build --platform ios --profile preview

# For production (App Store)
eas build --platform ios --profile production

# Publish to App Store
eas submit -p ios --profile production
```

## Key Implementation Details

### Font Loading Flow

The app uses expo-splash-screen to keep the splash screen visible until Montserrat fonts are fully loaded, ensuring a smooth visual experience.

### Audio Management

- **Background music**: Loops with adjustable volume (0.2 normal, 0.05 ducked)
- **Animal sounds**: Loaded on-demand from external URLs at maximum volume (1.0)
- **Sound effects**: Success/error sounds at 0.8 volume
- **Sound tracking**: Prevents overlapping animal sounds with reference tracking
- **Global sound toggle**: Affects all audio simultaneously with state persistence
- **Smart ducking**: Auto-reduces background music during TTS and sound effects
- **Cleanup**: Proper audio cleanup when returning to start screen or toggling sound off

### TTS (Text-to-Speech) System

- **Language support**: English (en-GB) and Ukrainian (uk-UA)
- **Voice detection**: Checks for available TTS voices on device
- **Error handling**: Gracefully handles unsupported languages (critical for Android)
- **Callback reliability**: Ensures game flow continues even when TTS fails
- **bySound mode**: Animal sounds play regardless of TTS availability on device

### Emoji Rendering (SVG-Based System)

**Complete migration from native emoji text to SVG-based Twemoji rendering:**

- **EmojiSvg Component**: Renders emoji characters as SVG components

  - Extracts size from fontSize style property
  - Looks up emoji in emojiMap to find corresponding SVG
  - Handles module default exports from svg-transformer
  - Centers SVG in View wrapper with explicit opacity

- **Twemoji Integration**: 68 SVG files from Twitter's Twemoji library

  - 60 animal emojis + 8 UI emojis
  - Downloaded via `scripts/downloadTwemojiSvgs.js`
  - Consistent appearance across iOS, Android, and Web
  - Perfect scaling (vector graphics)

- **Custom SVG Support**: For emojis not in Twemoji (Unicode 15.0+)

  - Custom donkey.svg and goose.svg for 🫏 and 🪿
  - Place custom SVGs in `assets/emojis/`
  - Reference in `src/constants/emojiMap.ts`

- **Centering Fixes**:

  - Flexbox centering on imageContainer and Animated.View wrapper
  - Explicit opacity: 1 to ensure full visibility
  - Removed unused text-specific styles

- **Animation Preservation**: EmojiSvg wrapped in Animated.View to maintain wiggle effects
- **Cross-platform consistency**: No dependency on device Unicode support or emoji fonts

### Animation System

- Staggered card entrance animations for visual appeal
- Bounce effect on question display
- Continuous subtle wiggle on animal cards
- Smooth success overlay with scale and fade effects

### State Management Pattern

All game logic centralized in `useGameLogic` custom hook:

- Game state (score, current animal, animations)
- Audio control (music, sounds, text-to-speech)
- User interactions (animal selection, mode switching)
- Visual feedback (success overlay, error borders)

### Language Switching UX

Two different UI patterns for language selection:

- **Start Screen**: Horizontal 3-button layout (EN / УКР / РУ) for easy visibility
- **During Gameplay**: Compact dropdown menu to save screen space
  - Shows only current language with dropdown arrow
  - Expands to show all options when clicked
  - Modal overlay for click-outside-to-close functionality
  - Smooth animations (fade, scale, arrow rotation)

## Contributing

Contributions are welcome! Please ensure:

- TypeScript types are properly defined
- Both English and Ukrainian translations are provided
- Code follows existing patterns and structure
- Components are properly typed with interfaces

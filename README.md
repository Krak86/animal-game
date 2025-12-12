# Animals Game 🐕🐈🦁

An interactive React Native educational game for children to learn animal names and sounds in English and Ukrainian. Built with TypeScript, Expo, and featuring custom fonts, background music, and engaging animations.

## Features

- 🎮 **Two Game Modes**:
  - **By Name**: Match animal names to images
  - **By Sound**: Identify animals by their sounds
- 🌍 **Fully Bilingual**: Complete English and Ukrainian translations
- 🗣️ **Text-to-Speech**: Pronounces animal names in selected language
- 🎵 **Background Music**: Optional music with toggle control
- 🎨 **Smooth Animations**: Wiggle effects, entrance animations, and transitions
- 🔊 **Animal Sounds**: Authentic audio for select animals
- 📱 **Responsive Design**: Works on all screen sizes with vertical scrolling
- ✅ **Visual Feedback**: Red borders for wrong answers, celebration overlay for correct ones
- 📊 **Score Tracking**: Keep track of your progress
- 🔤 **Custom Fonts**: Professional Montserrat typography
- 🏠 **Reset Functionality**: Return to start screen anytime

## Project Structure

```
/
├── App.tsx                  # Main app component
├── index.ts                 # Application entry point
├── package.json
├── app.json
├── tsconfig.json            # TypeScript configuration
├── assets/
│   ├── fonts/               # Montserrat font family (.ttf)
│   ├── music/               # Background music files
│   │   └── kid-366901.mp3
│   ├── icon.png
│   ├── splash-icon.png
│   └── adaptive-icon.png
└── src/
    ├── components/          # React components (TypeScript)
    │   ├── AnimalCard.tsx
    │   ├── LanguageSwitcher.tsx
    │   ├── QuestionDisplay.tsx
    │   ├── StartScreen.tsx
    │   ├── SuccessOverlay.tsx
    │   ├── SoundToggle.tsx
    │   └── index.ts
    ├── constants/           # App constants and data
    │   ├── animals.ts
    │   ├── sounds.ts
    │   ├── translations.ts
    │   ├── fonts.ts
    │   └── gameSettings.ts
    ├── hooks/               # Custom React hooks
    │   └── useGameLogic.ts
    ├── styles/              # Style definitions
    │   ├── appStyles.ts
    │   ├── colors.ts
    │   └── componentStyles.ts
    ├── types/               # TypeScript type definitions
    │   └── index.ts
    └── utils/               # Utility functions
        ├── animations.ts
        ├── audio.ts
        ├── speech.ts
        └── helpers.ts
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

- **AnimalCard.tsx**: Displays individual animal with wiggle animation and emoji
- **LanguageSwitcher.tsx**: Toggle between EN/UK languages
- **QuestionDisplay.tsx**: Shows animal name or sound replay button
- **StartScreen.tsx**: Game mode selection screen with animations
- **SuccessOverlay.tsx**: Full-screen celebration overlay on correct answer
- **SoundToggle.tsx**: Toggle background music on/off

### Constants (`src/constants/`)

- **animals.ts**: Animal data with name, emoji, image URL, sound URL, and game modes
- **sounds.ts**: Sound effect URLs for success and error feedback
- **translations.ts**: Complete English and Ukrainian translations
- **fonts.ts**: Montserrat font family constants
- **gameSettings.ts**: Game configuration (grid size, animation timings)

### Hooks (`src/hooks/`)

- **useGameLogic.ts**: Core custom hook managing all game state, logic, animations, and audio

### Styles (`src/styles/`)

- **appStyles.ts**: Main app container styles
- **colors.ts**: Color palette definitions
- **componentStyles.ts**: Component-specific styles with Montserrat fonts

### Types (`src/types/`)

- **index.ts**: TypeScript interfaces and types (Animal, Language, GameMode, Translations)

### Utils (`src/utils/`)

- **animations.ts**: Animation helper functions for React Native Animated API
- **audio.ts**: Sound loading, playback, and background music functions
- **speech.ts**: Text-to-speech utilities using expo-speech
- **helpers.ts**: General utility functions (shuffle, random selection, etc.)

## Customization

### Adding More Animals

Edit `src/constants/animals.ts`:

```typescript
export const ANIMALS: Animal[] = [
  // Add your animal here
  {
    id: 100,
    name: "Bear",
    emoji: "🐻",
    image: "https://example.com/bear.jpg",
    soundUrl: "https://example.com/bear-sound.mp3", // Optional
    modes: ["byName", "bySound"], // Or just ["byName"]
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
  },
  uk: {
    animals: {
      // ... other animals
      Bear: "Ведмідь",
    },
  },
};
```

### Changing Colors

Edit `src/styles/colors.ts` to customize the color scheme.

### Custom Sounds

Replace URLs in `src/constants/sounds.ts` with your own sound files for success/error feedback.

### Adding New Fonts

1. Place `.ttf` files in `assets/fonts/`
2. Update `src/constants/fonts.ts`
3. Load fonts in [App.tsx:46-51](App.tsx#L46-L51) using `useFonts` hook
4. Use font families in styles

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
5. Only includes animals with sound files

## Technologies

- **React Native 0.81.5** with **Expo ~54.0**
- **TypeScript 5.9.3** for type safety
- **expo-av** for audio playback and background music
- **expo-speech** for text-to-speech
- **expo-font** for custom Montserrat typography
- **React Native Animated API** for smooth animations
- **Custom hooks** for centralized state management
- **Path aliases** (`@/`) for clean imports

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

# Enter the container
docker-compose exec animals-game-builder bash

# Inside the container, install dependencies and build:
yarn install
# Build android folder (gradle, jar etc.)
npx expo run:android --variant release
# Or use EAS build locally (AAB)
eas build --platform android --local
# Or use EAS build locally (AAB)
eas build --platform android --profile preview --local

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

### Emoji Rendering (Android Optimization)

- **Container sizing**: 110x110px containers to accommodate larger Unicode emojis
- **Android-specific properties**: Uses `textAlignVertical`, `includeFontPadding: false`
- **Line height**: Proper vertical spacing (65px) for emoji baseline handling
- **Unicode 15.0+ support**: Fixes display issues with newer emojis (Goose 🪿, Donkey 🫏)
- **Cross-platform**: iOS compatibility maintained while fixing Android clipping

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

## Contributing

Contributions are welcome! Please ensure:

- TypeScript types are properly defined
- Both English and Ukrainian translations are provided
- Code follows existing patterns and structure
- Components are properly typed with interfaces

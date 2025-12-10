# Animals Game - Project Context

## Project Overview
A React Native educational game built with Expo where children can learn animal names and sounds in English and Ukrainian.

## Tech Stack
- **Framework**: React Native 0.81.5 with Expo ~54.0
- **Language**: TypeScript 5.9.3
- **Audio**: expo-av (v16.0.8) for sound playback
- **Speech**: expo-speech (v14.0.8) for text-to-speech
- **React**: 19.1.0

## Game Modes
1. **By Name**: Players see animal names and must find the correct animal image
2. **By Sound**: Players hear animal sounds and must identify which animal makes that sound

## Supported Languages
- English (en)
- Ukrainian (uk)

Language switching is available throughout the game.

## Project Structure
```
src/
├── components/          # React components
│   ├── AnimalCard.tsx
│   ├── QuestionDisplay.tsx
│   ├── StartScreen.tsx
│   ├── SuccessOverlay.tsx
│   ├── LanguageSwitcher.tsx
│   └── SoundToggle.tsx
├── constants/          # Game data and configuration
│   ├── animals.ts      # Animal data with images and sounds
│   ├── translations.ts # i18n for en/uk
│   ├── sounds.ts       # Sound file mappings
│   └── gameSettings.ts # Game configuration
├── hooks/
│   └── useGameLogic.ts # Main game state management
├── utils/             # Helper functions
│   ├── audio.ts       # Audio playback utilities
│   ├── speech.ts      # Text-to-speech utilities
│   ├── helpers.ts     # General helpers
│   └── animations.ts  # Animation utilities
├── styles/           # Styling
│   ├── colors.ts
│   ├── appStyles.ts
│   └── componentStyles.ts
└── types/           # TypeScript type definitions
    └── index.ts
```

## Key Features
- 60+ animals with translations
- Sound playback for animal sounds
- Text-to-speech for animal names
- Visual feedback on correct answers
- Score tracking
- Animated transitions
- Sound toggle functionality
- Bilingual support (English/Ukrainian)

## Animals Included
Farm animals, wild animals, birds, marine animals, insects, and more. Full list available in `src/constants/animals.ts` and `src/constants/translations.ts`.

## Development Commands
- `npm start` - Start Expo dev server
- `npm run android` - Run on Android
- `npm run ios` - Run on iOS
- `npm run web` - Run on web

## Important Notes
- Animal sounds are stored in `assets/sounds/` directory
- Animal images use emoji representations
- Game state is managed through the `useGameLogic` hook
- All user-facing text must be added to translations.ts for both languages

## Recent Changes
- Added animal sounds and "By Sound" game mode
- Animated start screen
- Extended animal collection
- Sound fixes and fallback handling

# Animals Game - Project Context

## Project Overview
An interactive React Native educational game built with Expo where children can learn animal names and sounds in English and Ukrainian. Features two distinct game modes, bilingual support, custom fonts, background music, and engaging animations.

## Tech Stack
- **Framework**: React Native 0.81.5 with Expo ~54.0.27
- **Language**: TypeScript 5.9.3
- **Audio**: expo-av (v16.0.8) for sound playback and background music
- **Speech**: expo-speech (v14.0.8) for text-to-speech pronunciation
- **Fonts**: expo-font (v14.0.10) with Montserrat font family
- **React**: 19.1.0
- **Path Aliases**: Using `@/` for src imports

## Game Modes
1. **By Name** (`byName`):
   - Players see an animal name displayed at the top
   - Must tap the correct animal emoji/image from a grid
   - Includes text-to-speech pronunciation of animal names

2. **By Sound** (`bySound`):
   - Players hear an animal sound
   - Must identify which animal makes that sound from the grid
   - Includes replay button to hear the sound again
   - Only animals with sound files are included

## Supported Languages
- English (`en`)
- Ukrainian (`uk`)

Language switching is available on the start screen and during gameplay. All UI text, animal names, and game instructions are fully translated.

## Project Structure
```
/
├── App.tsx                # Main application component
├── index.ts               # Application entry point
├── assets/
│   ├── fonts/             # Montserrat font files (.ttf)
│   │   ├── Montserrat-Regular.ttf
│   │   ├── Montserrat-Medium.ttf
│   │   ├── Montserrat-SemiBold.ttf
│   │   └── Montserrat-Bold.ttf
│   ├── music/             # Background music
│   │   └── kid-366901.mp3
│   ├── icon.png
│   ├── splash-icon.png
│   └── adaptive-icon.png
└── src/
    ├── components/          # React components
    │   ├── AnimalCard.tsx          # Individual animal tile with wiggle animation
    │   ├── QuestionDisplay.tsx     # Shows question with name or sound replay
    │   ├── StartScreen.tsx         # Mode selection screen with animations
    │   ├── SuccessOverlay.tsx      # Celebration overlay on correct answer
    │   ├── LanguageSwitcher.tsx    # EN/UK language toggle button
    │   ├── SoundToggle.tsx         # Music on/off toggle
    │   └── index.ts                # Components barrel export
    ├── constants/          # Game data and configuration
    │   ├── animals.ts      # Animal data with emojis, names, sound URLs
    │   ├── translations.ts # Complete i18n for en/uk
    │   ├── sounds.ts       # Sound effect URLs (success, error)
    │   ├── fonts.ts        # Font family constants
    │   └── gameSettings.ts # Game configuration (grid size, timing)
    ├── hooks/
    │   └── useGameLogic.ts # Core game state and logic management
    ├── utils/              # Helper functions
    │   ├── audio.ts        # Audio loading and playback utilities
    │   ├── speech.ts       # Text-to-speech utilities
    │   ├── helpers.ts      # General helpers (shuffle, random selection)
    │   └── animations.ts   # Animation utility functions
    ├── styles/             # Styling
    │   ├── colors.ts       # Color palette definitions
    │   ├── appStyles.ts    # Main app container styles
    │   └── componentStyles.ts # Component-specific styles
    └── types/              # TypeScript type definitions
        └── index.ts        # Animal, Language, GameMode, etc.
```

## Key Features
- **60+ Animals**: Diverse collection including farm animals, wild animals, birds, marine life, insects
- **Dual Game Modes**: Name recognition and sound identification
- **Animal Sounds**: Audio files for select animals with external URLs
- **Text-to-Speech**: Pronounces animal names using expo-speech
- **Background Music**: Optional background music that can be toggled
- **Custom Typography**: Montserrat font family (Regular, Medium, SemiBold, Bold)
- **Visual Feedback**:
  - Red border flash on wrong answer
  - Full-screen celebration overlay on correct answer
  - Wiggle animations on animal cards
- **Score Tracking**: Persistent score display during gameplay
- **Smooth Animations**: React Native Animated API for all transitions
- **Responsive Design**: ScrollView with vertical scrolling for all screen sizes
- **Sound Controls**: Toggle for background music
- **Start Screen**: Animated mode selection with language switcher
- **Reset Functionality**: Return to start screen at any time

## Game Flow
1. **Start Screen**: Choose game mode (By Name or By Sound) and language
2. **Game Play**:
   - See/hear the question
   - Select from 6 animals displayed in a grid
   - Get instant feedback (success overlay or red border)
   - Score increments on correct answer
   - New question automatically loads
3. **Reset**: Return to start screen via home button

## Animals Data Structure
Each animal in `src/constants/animals.ts` includes:
- `id`: Unique identifier
- `name`: English name
- `emoji`: Emoji representation
- `image`: Image URL (currently using placeholder URLs)
- `soundUrl`: URL to animal sound file (optional)
- `modes`: Array of game modes where animal appears (`["byName"]` or `["byName", "bySound"]`)

## Development Commands
```bash
npm install          # Install dependencies
npm start            # Start Expo dev server
npm run android      # Run on Android device/emulator
npm run ios          # Run on iOS simulator (macOS only)
npm run web          # Run in web browser
```

## Important Implementation Details

### Font Loading
- Uses `expo-font` with `useFonts` hook
- Splash screen remains visible until fonts load
- Montserrat family loaded from local `.ttf` files

### Audio System
- Background music: Looping music file with volume control
- Animal sounds: External URLs loaded on-demand
- Sound effects: Success and error sounds
- Global sound toggle affects all audio

### Animation System
- Card entrance animations: Staggered fade-in with scale
- Question animations: Bounce effect on question display
- Wiggle animations: Subtle animal card movement
- Success overlay: Scale and opacity animations

### State Management
- Centralized in `useGameLogic` custom hook
- Manages game state, animations, audio, and user interactions
- Exposes methods for starting game, handling presses, toggling sound

### Type Safety
- Full TypeScript implementation
- Custom types for Animal, Language, GameMode, Translations
- Strongly typed component props and hooks

## Configuration Files
- `package.json`: Dependencies and scripts
- `app.json`: Expo configuration
- `tsconfig.json`: TypeScript compiler options
- `.gitignore`: Git exclusions

## Assets Requirements
- Animal sound files: External URLs (mixkit.co, freeanimalsounds.org)
- Background music: Local file in `assets/music/`
- Fonts: Local `.ttf` files in `assets/fonts/`
- Icons: PNG files for app icon, splash, and adaptive icon

## Translation Guidelines
When adding new UI text:
1. Add key to both `en` and `uk` objects in `src/constants/translations.ts`
2. Use the translation key in components via `t.keyName`
3. Maintain consistency between language versions

## Adding New Animals
1. Add entry to `ANIMALS` array in `src/constants/animals.ts`
2. Include `soundUrl` if animal will appear in "By Sound" mode
3. Add translations to `src/constants/translations.ts` for both languages
4. Specify `modes` array: `["byName"]` or `["byName", "bySound"]`

## Performance Considerations
- Lazy loading of sound files
- Memoized components where appropriate
- Efficient re-renders using React hooks
- Optimized animations with native driver where possible

## Recent Changes
- Custom Montserrat font integration
- Background music system with toggle
- Two-mode game system (By Name and By Sound)
- Animated start screen with mode selection
- Sound replay functionality for "By Sound" mode
- Enhanced visual feedback and animations
- Reset to start screen functionality

# Animal Explorer - Project Context

## Project Overview

An interactive React Native educational game built with Expo where children can learn animal names and sounds in English, Ukrainian, and Russian. Features four distinct game modes (name recognition, sound identification, memory matching pairs, and exhibition browsing), drawer-based navigation, custom fonts, background music, and engaging animations. Includes image galleries, YouTube video integration, and Wikipedia links for comprehensive learning.

## Tech Stack

- **Framework**: React Native 0.81.5 with Expo ~54.0.30
- **Language**: TypeScript 5.9.3
- **Navigation**: @react-navigation/drawer (v7.x), @react-navigation/native (v7.x)
- **List Rendering**: @shopify/flash-list (v2.0.2) for high-performance scrolling in Exhibition mode
- **Audio**: expo-av (v16.0.8) for sound playback and background music
- **Speech**: expo-speech (v14.0.8) for text-to-speech pronunciation
- **Fonts**: expo-font (v14.0.10) with Montserrat font family
- **SVG Rendering**: react-native-svg (v15.12.1) for SVG support
- **SVG Transformer**: react-native-svg-transformer for importing SVG as components
- **Emoji Assets**: Twitter Twemoji SVG library
- **Animations**: react-native-reanimated (v4.1.1) for high-performance animations
- **Image Carousel**: react-native-reanimated-carousel for image galleries
- **React**: 19.1.0
- **Storage**: @react-native-async-storage for language persistence
- **Path Aliases**: Using `@/` for src imports and `@assets/` for assets

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

3. **Animal Pairs** (`animalPairs`):

   - Memory matching game with 6 face-up tiles (3 pairs of animals)
   - Players click two identical animal tiles sequentially
   - First click selects (silent), second click checks for match
   - Correct match: Success sound, tiles fade (opacity 0.3), score +1
   - Wrong match: Error sound, red borders flash on both tiles
   - All tiles visible from start (no flip animation)
   - After all 3 pairs matched: Success overlay, then new round with different animals
   - Matched pairs become non-interactive
   - Same grid layout as By Name mode
   - Visual feedback: Gold border for selected, red border for wrong, faded for matched

4. **Exhibition Mode** (`showAll`):
   - Browse all 86 animals in a scrollable list
   - Search and filter animals by name
   - Tap any animal to view detailed information
   - Animal detail view includes:
     - Large emoji display
     - Animal name and description
     - Image gallery (6-7 photos from Unsplash) with pinch-to-zoom
     - Video gallery (3 YouTube videos)
     - Wikipedia link (language-specific)
     - Play animal sound button
     - 3D model viewer (coming soon)

## Supported Languages

- English (`en`)
- Ukrainian (`uk`)
- Russian (`ru`)

Language switching is available on the start screen and during gameplay. All UI text, animal names, animal descriptions, and game instructions are fully translated. Language detection on first launch with AsyncStorage persistence.

**Language Switcher UI:**

- **Start Screen**: Horizontal 3-button layout (EN / УКР / РУ) for easy language selection
- **Game Modes (By Name/By Sound)**: Compact dropdown menu that shows only the current language, expands when clicked to show all options, and closes on selection or outside click

## Project Structure

```
/
├── App.tsx                          # Main application component (drawer navigation)
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
├── README.md                        # Project documentation
├── PrivacyPolicy.EN.md              # Privacy policy (English)
├── PrivacyPolicy.UK.md              # Privacy policy (Ukrainian)
├── PrivacyPolicy.RU.md              # Privacy policy (Russian)
├── DOCKER_SETUP.md                  # Docker setup documentation
├── docs/                            # Additional documentation
│   ├── ADDING_NEW_AUDIO.md          # Guide for adding new animals/UI audio
│   └── AUDIO_QUICK_REFERENCE.md     # Quick reference for TTS audio generation
│
├── assets/                          # Static assets
│   ├── fonts/                       # Montserrat TTF fonts (4 files)
│   │   ├── Montserrat-Regular.ttf
│   │   ├── Montserrat-Medium.ttf
│   │   ├── Montserrat-SemiBold.ttf
│   │   └── Montserrat-Bold.ttf
│   ├── imgs/bg/                     # Background images (10 JPG files)
│   │   ├── bg1.jpg
│   │   ├── bg2.jpg
│   │   └── ...                      # bg3.jpg - bg10.jpg
│   ├── audio/                       # TTS audio files (prerecorded)
│   │   ├── animals/                 # Animal names (UK/RU)
│   │   │   ├── uk/                  # 60 Ukrainian MP3 files
│   │   │   │   ├── dog.mp3, cat.mp3, ...
│   │   │   └── ru/                  # 60 Russian MP3 files
│   │   │       ├── dog.mp3, cat.mp3, ...
│   │   └── ui/                      # UI phrases (UK/RU)
│   │       ├── uk/                  # 2 Ukrainian UI phrases
│   │       │   ├── findthe.mp3, whosaysthis.mp3
│   │       └── ru/                  # 2 Russian UI phrases
│   │           ├── findthe.mp3, whosaysthis.mp3
│   ├── music/                       # Audio files (sound effects)
│   │   ├── animals/                 # 48 animal sound files (MP3)
│   │   │   ├── bear.mp3
│   │   │   ├── cat.mp3
│   │   │   └── ...                  # All animal sounds
│   │   ├── kid-366901.mp3           # Background music
│   │   ├── success.mp3              # Success sound effect
│   │   └── wrong.mp3                # Error sound effect
│   ├── emojis/                      # SVG emoji files (97 files)
│   │   ├── 1f415.svg                # Dog emoji (Twemoji)
│   │   ├── 1f3af.svg                # Target emoji 🎯 (Twemoji)
│   │   ├── donkey.svg               # Custom donkey emoji
│   │   ├── goose.svg                # Custom goose emoji
│   │   └── ...                      # All other animal and UI emojis
│   ├── icon.png                     # App icon
│   ├── adaptive-icon.png            # Android adaptive icon
│   ├── splash-icon.png              # Splash screen
│   └── favicon.png                  # Web favicon
│
├── scripts/                         # Build and setup scripts
│   ├── downloadTwemojiSvgs.js       # Download Twemoji SVG assets
│   ├── downloadAnimalSounds.js      # Download animal sound files
│   ├── generateTTSAudio.js          # Generate TTS audio files for UK/RU (Edge TTS)
│   ├── tts-generator/               # Docker TTS generation environment
│   │   ├── Dockerfile               # Edge TTS container config
│   │   ├── docker-compose.yml       # Container orchestration
│   │   └── output/                  # Temporary audio generation output
│   └── fix-base-path.js             # Post-build script for GitHub Pages deployment
│
├── .github/                         # GitHub Actions workflows
│   └── workflows/
│       └── deploy-gh-pages.yml      # Automated GitHub Pages deployment
│
├── dist/                            # Web build output (generated by expo export)
├── public/                          # Web public assets
│   └── fonts/                       # Web-accessible fonts
│
├── src/                             # Source code directory
│   ├── components/                  # React components (18 files)
│   │   ├── AnimalCard.tsx           # Individual animal tile with wiggle animation
│   │   ├── PairsAnimalCard.tsx      # Memory matching card (matched/selected/wrong states)
│   │   ├── QuestionDisplay.tsx      # Shows question with name or sound replay
│   │   ├── StartScreen.tsx          # Game mode selection screen with animations
│   │   ├── SuccessOverlay.tsx       # Celebration overlay on correct answer
│   │   ├── AnimalsListView.tsx      # Browse all animals (Exhibition mode)
│   │   ├── AnimalDetailView.tsx     # Detailed animal info with galleries
│   │   ├── ImageGalleryModal.tsx    # Image carousel with pinch-to-zoom
│   │   ├── VideoGalleryModal.tsx    # YouTube video player modal
│   │   ├── Model3DModal.tsx         # 3D model viewer (coming soon)
│   │   ├── ZoomableImage.tsx        # Pinch-to-zoom image component
│   │   ├── CustomDrawerContent.tsx  # Drawer menu content
│   │   ├── HamburgerButton.tsx      # Hamburger menu button
│   │   ├── LanguageSwitcher.tsx     # Horizontal 3-button language toggle (start screen)
│   │   ├── LanguageDropdown.tsx     # Compact dropdown language selector (gameplay)
│   │   ├── SoundToggle.tsx          # Music on/off toggle
│   │   ├── EmojiSvg.tsx             # SVG emoji rendering component
│   │   └── index.ts                 # Components barrel export
│   │
│   ├── constants/                   # App constants and data (7 files)
│   │   ├── animals.ts               # 86 animals with images, videos, Wikipedia URLs, sounds
│   │   ├── translations.ts          # Complete i18n for en/uk/ru (656 lines)
│   │   ├── audioFiles.ts            # Auto-generated TTS audio mappings (UK/RU)
│   │   ├── sounds.ts                # Sound effect URLs (success, wrong)
│   │   ├── fonts.ts                 # Font family constants
│   │   ├── gameSettings.ts          # Game configuration (ANIMALS_PER_SCREEN = 6, PAIRS_PER_SCREEN = 3)
│   │   └── emojiMap.ts              # Emoji to SVG file mappings (97 emojis including 🎯)
│   │
│   ├── hooks/                       # Custom React hooks (4 files)
│   │   ├── useGameLogic.ts          # Core game state and logic management
│   │   ├── usePairsGameLogic.ts     # Memory matching pairs game logic (353 lines)
│   │   ├── useLanguageInitialization.ts  # Language detection & persistence
│   │   └── useResponsiveDimensions.ts    # Screen size & orientation handling
│   │
│   ├── utils/                       # Utility functions (6 files)
│   │   ├── audio.ts                 # Audio loading and playback utilities
│   │   ├── speech.ts                # Text-to-speech utilities
│   │   ├── helpers.ts               # General helpers (shuffle, random selection)
│   │   ├── animations.ts            # Animation utility functions
│   │   ├── languageDetection.ts     # Device language detection
│   │   └── linking.ts               # External link handling (Wikipedia, etc.)
│   │
│   ├── styles/                      # Styling (3 files)
│   │   ├── colors.ts                # Color palette definitions (includes pink #E91E63)
│   │   ├── appStyles.ts             # Container, scroll, grid layouts, gameModeText
│   │   └── componentStyles.ts       # Component-specific styles with Montserrat fonts
│   │
│   └── types/                       # TypeScript type definitions (1 file)
│       └── index.ts                 # Animal, Language, GameMode, Translations, etc.
│
├── android/                         # Android-specific code
│   ├── app/                         # Android app module
│   └── gradle/                      # Gradle wrapper
│
├── web/                             # Web-specific files
├── public/fonts/                    # Web public assets
└── node_modules/                    # Dependencies
```

## Key Features

- **86 Animals**: Comprehensive collection including farm animals, wild animals, birds, marine life, reptiles, amphibians, insects
- **Four Game Modes**: Name recognition, sound identification, memory matching pairs, and exhibition browsing
- **Memory Matching Game**: Animal Pairs mode with face-up tiles, sequential selection, and instant feedback
- **Exhibition Mode**: Browse all animals with search/filter, detailed views, and galleries
- **Drawer Navigation**: Easy access to game modes and settings via hamburger menu
- **Image Galleries**: 6-7 Unsplash photos per animal with carousel and pinch-to-zoom
- **Video Galleries**: 3 YouTube videos per animal with integrated player
- **Wikipedia Integration**: Language-specific Wikipedia links for comprehensive learning
- **3D Model Viewer**: Interactive 3D models (coming soon)
- **Animal Sounds**: 48 MP3 audio files for all animals
- **Text-to-Speech**: Pronounces animal names using expo-speech in all 3 languages
- **Background Music**: Optional background music that can be toggled
- **Custom Typography**: Montserrat font family (Regular, Medium, SemiBold, Bold)
- **SVG Emoji Rendering**: Twemoji-based consistent cross-platform emoji display
- **Visual Feedback**:
  - Red border flash on wrong answer
  - Full-screen celebration overlay on correct answer
  - Wiggle animations on animal cards
  - Smooth entrance animations
- **Score Tracking**: Persistent score display during gameplay
- **Smooth Animations**: React Native Reanimated for high-performance transitions
- **Responsive Design**: Adaptive layouts for all screen sizes and orientations
- **Language Detection**: Automatic detection on first launch with AsyncStorage persistence
- **Sound Controls**: Toggle for background music
- **Start Screen**: Animated mode selection with language switcher
- **Reset Functionality**: Return to start screen at any time

## Game Flow

1. **Start Screen**: Choose game mode (By Name, By Sound, Animal Pairs, or Exhibition) and language
2. **Game Play** (By Name/By Sound modes):
   - See/hear the question
   - Select from 6 animals displayed in a grid
   - Get instant feedback (success overlay or red border)
   - Score increments on correct answer
   - New question automatically loads
3. **Animal Pairs Mode**:
   - See 6 face-up tiles (3 pairs of animals)
   - Click first tile (silent selection, gold border)
   - Click second tile (checks for match)
   - Match: Success sound, tiles fade, score +1
   - No match: Wrong sound, red borders flash
   - After all 3 pairs matched: Success overlay, new round starts
4. **Exhibition Mode**:
   - Browse all 86 animals in scrollable list
   - Search/filter by animal name
   - Tap animal to view detail screen
   - Explore galleries, videos, and Wikipedia
4. **Navigation**: Access drawer menu via hamburger button for mode switching
5. **Reset**: Return to start screen via home button

## Animals Data Structure

Each animal in `src/constants/animals.ts` includes:

- `id`: Unique identifier (1-86)
- `name`: English name
- `emoji`: Emoji representation (rendered as SVG via Twemoji)
- `image`: Local background image URL from `assets/imgs/bg/`
- `images`: Array of 6-7 Unsplash photo URLs for image gallery
- `videos`: Array of 3 YouTube video URLs
- `wikiUrl`: Object with Wikipedia URLs for each language (`en`, `uk`, `ru`)
- `soundUrl`: URL to animal sound MP3 file in `assets/music/animals/`
- `modes`: Array of game modes where animal appears (`["byName", "bySound", "showAll"]`)
- `description`: Animal description (referenced in translations.ts)

## Development Commands

```bash
npm install          # Install dependencies
npm start            # Start Expo dev server
npm run android      # Run on Android device/emulator
npm run ios          # Run on iOS simulator (macOS only)
npm run web          # Run in web browser
npm run build:web    # Build for web (expo export --platform web)
npm run open:web     # Preview web build locally
```

## Deployment

### GitHub Pages (Web)

The app is automatically deployed to GitHub Pages via GitHub Actions:

- **Live URL**: `https://krak86.github.io/animal-game/`
- **Trigger**: Push to `web` branch
- **Workflow**: `.github/workflows/deploy-gh-pages.yml`
- **Build Process**:
  1. Runs `expo export --platform web` to build the app
  2. Executes `scripts/fix-base-path.js` to add `<base href="/animal-game/">` tag to index.html
  3. Uploads `dist/` directory to GitHub Pages
- **Configuration**:
  - `app.json`: `expo.web.output` set to `"single"` for single-page app
  - `metro.config.js`: Configured with SVG transformer and publicPath support
  - Base path is injected via post-build script to ensure assets load from correct subdirectory

## Important Implementation Details

### Font Loading

- Uses `expo-font` with `useFonts` hook
- Splash screen remains visible until fonts load
- Montserrat family loaded from local `.ttf` files

### Audio System

- **Background music**: Looping music file with volume control (0.2 normal, 0.05 ducked)
- **Animal sounds**: External URLs loaded on-demand (1.0 volume)
- **Sound effects**: Success and error sounds (0.8 volume)
- **TTS (Text-to-Speech)**:
  - **English**: Live TTS using expo-speech (device TTS engine)
  - **Ukrainian & Russian**: Pre-recorded high-quality MP3 files
    - Generated using Microsoft Edge TTS (cloud-based)
    - 124 total files (60 animals × 2 langs + 2 UI × 2 langs)
    - Format: 16kbps MP3, mono, 44.1kHz (~0.85 MB total)
    - Voices: uk-UA-PolinaNeural (Ukrainian female), ru-RU-SvetlanaNeural (Russian female)
  - **Audio ducking**: Background music volume reduces during speech
  - **Fallback**: Uses live TTS if prerecorded files missing
- **Global sound toggle**: Affects all audio with state persistence
- **Prerecorded audio generation**: Docker-based TTS system
  - See `docs/ADDING_NEW_AUDIO.md` for complete guide
  - See `docs/AUDIO_QUICK_REFERENCE.md` for quick commands

### Animation System

- Card entrance animations: Staggered fade-in with scale
- Question animations: Bounce effect on question display
- Wiggle animations: Subtle animal card movement
- Success overlay: Scale and opacity animations

### State Management

- **By Name/By Sound modes**: `useGameLogic` custom hook
- **Animal Pairs mode**: `usePairsGameLogic` custom hook with two-click selection pattern
- Both hooks manage game state, animations, audio, and user interactions
- Expose methods for starting game, handling presses, toggling sound
- Conditional hook usage in App.tsx based on current game mode

### Type Safety

- Full TypeScript implementation
- Custom types for Animal, Language, GameMode, Translations
- Strongly typed component props and hooks

### Navigation Architecture

- **Drawer Navigation**: React Navigation drawer-based system
- **CustomDrawerContent**: Custom drawer menu with mode selection
- **HamburgerButton**: Positioned in top-left corner during gameplay
- **Screens**:
  - StartScreen (initial)
  - Game screens (By Name, By Sound)
  - AnimalsListView (Exhibition mode)
  - AnimalDetailView (modal/screen for animal details)

### Exhibition Mode Implementation

- **AnimalsListView.tsx**: Main browse screen with search functionality
- **Search/Filter**: Real-time filtering by animal name in current language
- **Animal Cards**: Grid layout with emoji, name, and tap interaction
- **AnimalDetailView.tsx**: Full-screen detail view with:
  - Large emoji display
  - Animal name and description (translated)
  - Action buttons (gallery, videos, Wikipedia, sound)
  - Modal triggers for galleries

### Image Gallery System

- **ImageGalleryModal.tsx**: Full-screen modal with carousel
- **react-native-reanimated-carousel**: Smooth swipe-based navigation
- **ZoomableImage.tsx**: Pinch-to-zoom functionality using gestures
- **Image Sources**: Unsplash URLs (6-7 high-quality photos per animal)
- **Performance**: Lazy loading, optimized rendering

### YouTube Video Integration

- **VideoGalleryModal.tsx**: Full-screen modal with YouTube player
- **Video Sources**: 3 curated YouTube videos per animal
- **WebView-based**: Uses React Native WebView for embedded player
- **Features**: Full playback controls, HD quality

### Wikipedia Integration

- **linking.ts utility**: Handles external URL opening
- **Language-specific URLs**: Each animal has Wikipedia URLs for en, uk, ru
- **Deep linking**: Opens Wikipedia in browser or Wikipedia app if installed

## Configuration Files

- `package.json`: Dependencies and scripts
- `app.json`: Expo configuration
- `tsconfig.json`: TypeScript compiler options
- `.gitignore`: Git exclusions

## Assets Requirements

- **Animal sound files**: 86 MP3 files in `assets/music/animals/`
- **Background music**: Local file `kid-366901.mp3` in `assets/music/`
- **Sound effects**: `success.mp3` and `wrong.mp3` in `assets/music/`
- **Background images**: 10 JPG files (bg1.jpg - bg10.jpg) in `assets/imgs/bg/`
- **Emoji SVGs**: 97 SVG files (86 animal Twemoji + 2 custom + 9 UI) in `assets/emojis/`
- **Fonts**: 4 Montserrat `.ttf` files in `assets/fonts/`
- **Icons**: PNG files (icon.png, adaptive-icon.png, splash-icon.png, favicon.png)
- **Animal images**: ~602 Unsplash URLs (6-7 per animal, referenced in animals.ts)
- **Animal videos**: ~258 YouTube URLs (3 per animal, referenced in animals.ts)

## Translation Guidelines

When adding new UI text:

1. Add key to all three language objects (`en`, `uk`, `ru`) in `src/constants/translations.ts`
2. Use the translation key in components via `t.keyName`
3. Maintain consistency across all language versions
4. Add animal descriptions to the `descriptions` object for all languages

## Adding New Animals

1. Add entry to `ANIMALS` array in `src/constants/animals.ts` with:
   - Unique `id` (next available number)
   - English `name`
   - `emoji` character
   - `image` URL for background (from `assets/imgs/bg/`)
   - `images` array with 6-7 Unsplash photo URLs
   - `videos` array with 3 YouTube video URLs
   - `wikiUrl` object with Wikipedia URLs for `en`, `uk`, `ru`
   - `soundUrl` MP3 file path in `assets/music/animals/`
   - `modes` array: `["byName", "bySound", "showAll"]`
2. Add translations to `src/constants/translations.ts` for all three languages (en, uk, ru)
3. Add animal description to `descriptions` object in translations.ts
4. Add emoji to SVG mapping in `src/constants/emojiMap.ts`
5. Download or create emoji SVG file and place in `assets/emojis/`

## Performance Considerations

- Lazy loading of sound files
- Memoized components where appropriate
- Efficient re-renders using React hooks
- Optimized animations with native driver where possible

## Recent Changes

### Animal Pairs Memory Matching Game Mode (Latest - December 2025)

Implemented a new "Animal Pairs" game mode - a memory matching game where players find matching pairs of animals by clicking identical tiles sequentially.

**Game Mechanics**:
- **6 face-up tiles** (3 pairs of animals) displayed in same grid layout as By Name mode
- **Two-click selection pattern**: First click selects (silent), second click checks for match
- **Visual feedback**: Gold border (#FFD700) for selected tiles, red border (#FF4757) for wrong matches
- **Sound behavior**: Sounds play ONLY on pair completion (success/wrong), NOT on first click
- **Matched pairs**: Fade to opacity 0.3, become non-interactive, wiggle animation stops
- **Round completion**: After all 3 pairs matched, show success overlay and start new round with different animals
- **Scoring**: +1 point per correctly matched pair added to global score

**Implementation Details**:

**New Files Created** (3 files):
1. **`src/hooks/usePairsGameLogic.ts`** (353 lines):
   - Core game logic hook following pattern from useGameLogic.ts
   - State: `pairAnimals`, `firstSelection`, `secondSelection`, `matchedPairIds`, `wrongTileIndices`, `isProcessing`
   - `handleAnimalPress`: Two-click pattern with match/mismatch detection
   - `startNewRound`: Picks 3 random animals, duplicates each, shuffles to create 6 tiles
   - Animation timing fix: Reset cardAnimations and animalWiggles to 0 before setting new animals
   - Restart animations after 50ms delay to ensure proper timing between state updates
   - Silent mode: No TTS or animal sounds, only match/mismatch feedback

2. **`src/components/PairsAnimalCard.tsx`** (281 lines):
   - Specialized card component for pairs mode based on AnimalCard.tsx
   - Props: `isMatched`, `isSelected`, `isWrong` for state-specific styling
   - Gold border for selected cards, red border for wrong matches
   - Matched cards: opacity 0.3, animations stopped, non-interactive
   - Uses `styles.wrapper` for consistent grid layout with regular mode
   - No label text (just emoji display)

3. **`assets/emojis/1f3af.svg`**:
   - Target emoji 🎯 downloaded from Twemoji CDN
   - Used for Animal Pairs mode button

**Files Modified** (10 files):
1. **`src/types/index.ts`**:
   - Added `"animalPairs"` to `GameMode` union type
   - Created `UsePairsGameLogicReturn` interface with wrongTileIndices property
   - Added `animalPairs`, `animalPairsDescription`, `findThePairs` to translation interfaces

2. **`src/styles/colors.ts`**:
   - Added `pink: '#E91E63'` for Animal Pairs button

3. **`src/constants/gameSettings.ts`**:
   - Added `PAIRS_PER_SCREEN = 3` (changed from initial 6 pairs after user feedback)
   - Added `TILES_PER_SCREEN = PAIRS_PER_SCREEN * 2` (6 tiles total)

4. **`src/constants/translations.ts`**:
   - Added translations for all 3 languages (en, uk, ru):
     - `animalPairs`: "Animal Pairs" / "Пари тварин" / "Пары животных"
     - `animalPairsDescription`: "Find matching pairs!" / "Знайди пари!" / "Найди пары!"
     - `findThePairs`: "Find the pairs!" / "Знайди пари!" / "Найди пары!"

5. **`src/constants/emojiMap.ts`**:
   - Added `"🎯": require("@assets/emojis/1f3af.svg")` mapping
   - Updated total emoji count from 70 to 71

6. **`src/components/QuestionDisplay.tsx`**:
   - Added conditional rendering for animalPairs mode
   - Displays "Find the pairs!" instruction text

7. **`src/components/StartScreen.tsx`**:
   - Added `borderAnim5` animation value for pink button border animation
   - Created pink 🎯 button with animated border cycling through pink shades
   - Added `animalPairsButton` style with pink background (#E91E63)

8. **`src/components/CustomDrawerContent.tsx`**:
   - Added "Animal Pairs" option to drawer menu
   - Positioned after "By Sound" button with 🎯 emoji

9. **`src/styles/appStyles.ts`**:
   - Added `gameModeText` style for displaying game mode name below score
   - Responsive font sizing (12-14px) with gray color

10. **`App.tsx`**:
    - Imported `PairsAnimalCard` and `usePairsGameLogic`
    - Conditional hook initialization: `useGameLogic` for byName/bySound, `usePairsGameLogic` for animalPairs
    - Destructured shared properties from appropriate hook based on game mode
    - Added game mode name display below score
    - Conditional rendering: `PairsAnimalCard` for animalPairs mode, `AnimalCard` for other modes
    - Unique keys for duplicate animals: `${animal.id}-${index}`
    - Props passed: `isMatched`, `isSelected`, `isWrong` calculated from game state

11. **`src/components/index.ts`**:
    - Exported `PairsAnimalCard` component

**Fixes Applied**:
- **Empty screen bug**: Reset card animations to 0 before setting new animals, add 50ms delay before entrance animation
- **Missing wiggles bug**: Reset wiggle animations to 0 and restart `startAnimalAnimations()` every round
- **Layout consistency**: Added `styles.wrapper` to PairsAnimalCard for identical sizing with regular mode

**User-Driven Refinements**:
1. Reduced from 12 tiles (6 pairs) to 6 tiles (3 pairs) for better gameplay
2. Downloaded 🎯 emoji SVG and added to emoji map
3. Added red border feedback when wrong tiles selected using `wrongTileIndices` state
4. Verified same grid layout as "by name" mode
5. Added game mode name text below score display

**Technical Architecture**:
- **Two-click selection pattern**: Track first and second selections with both animal and tileIndex
- **Unique tile identification**: Combine animal.id with index for React keys (`${animal.id}-${index}`)
- **Animation arrays**: 6 Animated.Value arrays (matching TILES_PER_SCREEN)
- **Processing state**: Prevents rapid clicks during match checking
- **Sound timing**: Only play sounds in second selection branch when checking for match
- **Animation lifecycle**: Reset → Set animals → Delay 50ms → Animate entrance + wiggles

### UI/UX Improvements (December 2025)

- **Full Screen Mode on Startup**: App now automatically enables full screen mode on Android when launched
  - Uses `expo-navigation-bar` to hide Android navigation bar on startup
  - Full screen state initialized to `true` in [App.tsx](App.tsx#L78)
  - Drawer menu reflects correct state ("Exit Full Screen" shown initially)
  - useEffect hook at [App.tsx:129-143](App.tsx#L129-L143) enables full screen on mount
- **Exit App Button**: Added to drawer menu with confirmation dialog
  - Positioned at bottom of drawer menu in [CustomDrawerContent.tsx](src/components/CustomDrawerContent.tsx)
  - Shows confirmation alert with translations for all 3 languages
  - Uses `BackHandler.exitApp()` for clean app termination
  - Includes haptic feedback (`Haptics.impactAsync`) on button press
  - Styled with crimson red color (#DC143C) for destructive action visibility
- **Platform-Specific UI Elements**:
  - "Exit Full Screen" and "Exit App" buttons hidden on web platform
  - Visible only on Android and iOS using `Platform.OS !== 'web'` conditional rendering
  - Improves web experience by removing mobile-only controls
  - Implemented in [CustomDrawerContent.tsx:205](src/components/CustomDrawerContent.tsx#L205) and [CustomDrawerContent.tsx:242](src/components/CustomDrawerContent.tsx#L242)
- **Privacy Policy Text Display**:
  - Long translations (like Russian "Политика конфиденциальности") now wrap to 2 lines
  - Uses `numberOfLines={2}` instead of single-line truncation with ellipsis
  - Text wraps naturally within button using `flex: 1` styling
  - Improves readability for long button labels across all languages
- **FlashList Performance Optimization**:
  - Migrated from FlatList to `@shopify/flash-list` (v2.0.2) in AnimalsListView
  - Significantly improved scrolling performance and memory usage for 48-animal list
  - Maintains row-based multi-column layout with proper scroll position restoration
  - Dynamic row height calculation based on card size, font scale, and padding
  - Viewability tracking for scroll position persistence across navigation

### Exhibition Mode & Navigation

- **Exhibition Mode ("showAll")**: Complete browsing experience for all 48 animals
- **Drawer Navigation**: Implemented React Navigation drawer with CustomDrawerContent
- **AnimalsListView**: Browse screen with search/filter functionality using FlashList
- **AnimalDetailView**: Full-screen detail view with comprehensive animal information
- **Image Galleries**: 6-7 Unsplash photos per animal with carousel and pinch-to-zoom
- **Video Galleries**: YouTube video player integration (3 videos per animal)
- **Wikipedia Integration**: Language-specific Wikipedia links (en, uk, ru)
- **3D Model Viewer**: Modal infrastructure (coming soon)
- **Language Persistence**: AsyncStorage-based language detection and persistence
- **Responsive Dimensions**: Adaptive layouts for all screen sizes and orientations
- **Comprehensive Animal Data**: 48 animals with images, videos, sounds, descriptions, Wikipedia URLs

### Core Game Features

- Custom Montserrat font integration
- Background music system with toggle
- Three-mode game system (By Name, By Sound, and Exhibition)
- Animated start screen with mode selection
- Sound replay functionality for "By Sound" mode
- Enhanced visual feedback and animations
- Reset to start screen functionality

### Audio System Improvements

- **Animal sound tracking**: Prevents overlapping sounds when replay button clicked multiple times
- **Sound volume hierarchy**: Animal sounds at maximum volume (1.0), sound effects at 0.8, background music at 0.2
- **Sound toggle persistence**: Sound state persists across game resets and mode changes
- **Proper cleanup**: All sounds (TTS, animal sounds, music) stop when returning to start screen
- **Background music ducking**: Automatically reduces volume during TTS and sound effects
- **Smart restoration**: Background music only restores if currently playing (respects pause state)

### TTS Error Handling (Android Fix)

- **Callback reliability**: `onDone` callback now fires even when TTS fails or language unsupported
- **bySound mode fix**: Animal sounds play on Android tablets regardless of TTS language support
- **Graceful degradation**: Game continues normally when TTS encounters errors
- **Error paths covered**: Empty text, TTS errors, and exceptions all trigger callback

### Emoji Display Fix (Android Tablets)

- **Larger container**: Increased from 100x100 to 110x110 pixels for newer emojis
- **Android-specific properties**: Added `textAlignVertical`, `includeFontPadding: false`, `lineHeight`
- **Font size adjustment**: Increased from 50 to 52 with proper line height (65)
- **Fixes Unicode 15.0+ emojis**: Goose 🪿 and Donkey 🫏 now display completely without clipping

### Language Dropdown Implementation

- **Dual UI Pattern**: Different language switcher components for different contexts
  - `LanguageSwitcher`: Horizontal 3-button layout (EN / УКР / РУ) on start screen for maximum visibility
  - `LanguageDropdown`: Compact dropdown menu during gameplay to conserve screen space
- **Dropdown Features**:
  - Shows only current language with downward arrow (▼) indicator
  - Expands via Modal with transparent overlay for click-outside detection
  - Smooth animations using React Native Animated API (opacity, scale, translateY, arrow rotation)
  - Positioned absolutely below the button, responsive to portrait/landscape modes
  - Auto-closes on language selection or outside click
- **Styling Consistency**: Uses same color palette (COLORS.primary teal for active states), shadows, and fonts as other components
- **Files Modified**:
  - Created `src/components/LanguageDropdown.tsx` with Modal-based dropdown
  - Added `getLanguageDropdownStyles()` to `src/styles/componentStyles.ts`
  - Updated `App.tsx` to use LanguageDropdown in gameplay topBar
  - StartScreen continues using LanguageSwitcher (no changes)

### SVG Emoji Rendering System (Complete Migration)

**Background**: Migrated from native emoji text rendering to SVG-based Twemoji for consistent cross-platform appearance and better quality on Android devices.

**Implementation**:

- **EmojiSvg Component** (`src/components/EmojiSvg.tsx`):

  - Accepts emoji character and style props
  - Extracts fontSize from style and uses it as SVG size
  - Looks up emoji in EMOJI_SVG_MAP to get corresponding SVG component
  - Handles module default exports from svg-transformer
  - Renders SVG in centered View wrapper with explicit opacity: 1

- **Emoji Mapping** (`src/constants/emojiMap.ts`):

  - Maps all 68 emoji characters to their SVG file paths
  - 60 animal emojis + 8 UI emojis (🎉, 🔊, 🔇, 📝, 🖼️, 🏠, ✕)
  - Uses `require()` for SVG assets via react-native-svg-transformer
  - Supports custom SVG files for Unicode 15.0+ emojis not in Twemoji

- **Metro Bundler Configuration** (`metro.config.js`):

  - Configured react-native-svg-transformer as babel transformer
  - SVG files treated as source files, not assets
  - SVG extension removed from assetExts, added to sourceExts

- **TypeScript Declarations** (`declarations.d.ts`):
  - Declares SVG modules as React.FC<SvgProps>
  - Enables TypeScript support for `.svg` imports

**Components Updated** (7 total):

1. `AnimalCard.tsx` - Main animal emoji in cards
2. `AnimalDetailView.tsx` - Large emoji + action button icons
3. `SuccessOverlay.tsx` - Party emoji 🎉
4. `StartScreen.tsx` - 4 animated animals + 3 button icons
5. `AnimalsListView.tsx` - Home 🏠 and clear ✕ icons
6. `SoundToggle.tsx` - Sound on/off icons
7. `App.tsx` - Home button icon

**Pattern Used**:

- Wrapped EmojiSvg in Animated.View to preserve wiggle animations
- Removed Animated.Text emoji rendering
- Maintained all existing animation transforms

**Custom Emoji SVGs**:

- `donkey.svg` - Custom SVG for 🫏 (Unicode 15.1, not in Twemoji)
- `goose.svg` - Custom SVG for 🪿 (Unicode 15.0, not in Twemoji)
- Placed in `assets/emojis/` directory
- Referenced in emojiMap.ts alongside Twemoji files

**Download Script** (`scripts/downloadTwemojiSvgs.js`):

- Downloads all 68 Twemoji SVG files from GitHub
- Skips already-downloaded files (safe to re-run)
- Usage: `node scripts/downloadTwemojiSvgs.js`
- Required for first-time setup or when adding new emojis

**Emoji Centering Fixes**:

- Added `alignItems: "center"` to imageContainer style
- Added flexbox centering to Animated.View wrapper (justifyContent, alignItems, width: "100%", height: "100%")
- Removed unused text-specific styles (lineHeight, textAlign, textAlignVertical, includeFontPadding)
- Set explicit `opacity: 1` on Animated.View and emojiImage to ensure full opacity

**Benefits**:

- Consistent emoji appearance across iOS, Android, and Web
- Higher quality rendering (SVG scales perfectly)
- No Unicode version dependencies
- Custom emojis for newer Unicode characters
- Centered positioning in cards
- Better Android compatibility

### Animal Collection Expansion (December 2025)

**Added 8 New Animals** to expand the collection from 78 to 86 total animals:

1. **Mouse 🐭** (ID 78)
2. **Sloth 🦥** (ID 79)
3. **Worm 🪱** (ID 80)
4. **Fly 🪰** (ID 81)
5. **Beetle 🪲** (ID 82)
6. **Skunk 🦨** (ID 83)
7. **Beaver 🦫** (ID 84)
8. **Cockroach 🪳** (ID 85)

**Implementation Details:**

- **Emoji Assets**: Downloaded 8 new Twemoji SVG files and added to `assets/emojis/`
- **Emoji Mapping**: Updated `src/constants/emojiMap.ts` to include all 8 new emojis (total: 97 emojis)
- **Animal Data**: Added complete animal entries to `src/constants/animals.ts` with:
  - Unique IDs (78-85)
  - Background images from BG_IMAGES array
  - Placeholder sound imports (empty strings for future audio files)
  - Wikipedia URLs for all 3 languages (en, uk, ru)
  - All game modes enabled: `["byName", "bySound", "showAll", "animalPairs"]`
- **Translations**: Added names and descriptions in all 3 languages to `src/constants/translations.ts`:
  - English names and comprehensive descriptions
  - Ukrainian translations (Миша, Лінивець, Хробак, Муха, Жук, Скунс, Бобер, Таргани)
  - Russian translations (Мышь, Ленивец, Червь, Муха, Жук, Скунс, Бобр, Таракан)
- **Type Definitions**: Added description type keys to `src/types/index.ts` for TypeScript support

**Download Script Updates:**
- Updated `scripts/downloadTwemojiSvgs.js` to include all 8 new emoji codepoints
- Script successfully downloaded all SVG files from Twemoji CDN

### Sound Icon Display Logic (December 2025)

**Updated AnimalDetailView Component** to show sound icons conditionally based on language:

**For English (EN):**
- **🔊 Pronunciation Icon**: Always shown when sound is enabled - displays/pronounces animal name via TTS
- **🔉 Animal Sound Icon**: Only shown if `soundUrl` exists - plays the animal's natural sound

**For Other Languages (UK, RU):**
- **Both Icons**: Only shown if `soundUrl` exists (indicates pronunciation audio is available)
- Assumes pronunciation sounds are only available for animals with natural sound files

**Implementation** ([AnimalDetailView.tsx:264-275](src/components/AnimalDetailView.tsx#L264-L275)):
```typescript
const showTTSButton = language === "en"
  ? isSoundEnabled
  : isSoundEnabled && hasSoundUrl;

const showSoundButton = isSoundEnabled && hasSoundUrl;

const showPronunciationIcon = showTTSButton;
const showAnimalSoundIcon = showSoundButton;
```

**Benefits:**
- English users can always hear animal name pronunciation via TTS
- Non-English users see icons only when actual sound files are available
- Prevents confusion from non-functional buttons
- Better UX for languages with limited audio coverage

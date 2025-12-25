# Animal Explorer - Project Context

## Project Overview

An interactive React Native educational game built with Expo where children can learn animal names and sounds in English, Ukrainian, and Russian. Features three distinct game modes (name recognition, sound identification, and exhibition browsing), drawer-based navigation, custom fonts, background music, and engaging animations. Includes image galleries, YouTube video integration, and Wikipedia links for comprehensive learning.

## Tech Stack

- **Framework**: React Native 0.81.5 with Expo ~54.0.29
- **Language**: TypeScript 5.9.3
- **Navigation**: @react-navigation/drawer (v7.x), @react-navigation/native (v7.x)
- **Audio**: expo-av (v16.0.8) for sound playback and background music
- **Speech**: expo-speech (v14.0.8) for text-to-speech pronunciation
- **Fonts**: expo-font (v14.0.10) with Montserrat font family
- **SVG Rendering**: react-native-svg (v15.12.1) for SVG support
- **SVG Transformer**: react-native-svg-transformer for importing SVG as components
- **Emoji Assets**: Twitter Twemoji SVG library
- **Animations**: react-native-reanimated (v3.x) for high-performance animations
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

3. **Exhibition Mode** (`showAll`):
   - Browse all 48 animals in a scrollable list
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
│   ├── music/                       # Audio files
│   │   ├── animals/                 # 48 animal sound files (MP3)
│   │   │   ├── bear.mp3
│   │   │   ├── cat.mp3
│   │   │   └── ...                  # All animal sounds
│   │   ├── kid-366901.mp3           # Background music
│   │   ├── success.mp3              # Success sound effect
│   │   └── wrong.mp3                # Error sound effect
│   ├── emojis/                      # SVG emoji files (70 files)
│   │   ├── 1f415.svg                # Dog emoji (Twemoji)
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
│   ├── components/                  # React components (17 files)
│   │   ├── AnimalCard.tsx           # Individual animal tile with wiggle animation
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
│   ├── constants/                   # App constants and data (6 files)
│   │   ├── animals.ts               # 48 animals with images, videos, Wikipedia URLs (1,442 lines)
│   │   ├── translations.ts          # Complete i18n for en/uk/ru (656 lines)
│   │   ├── sounds.ts                # Sound effect URLs (success, wrong)
│   │   ├── fonts.ts                 # Font family constants
│   │   ├── gameSettings.ts          # Game configuration (ANIMALS_PER_SCREEN = 6)
│   │   └── emojiMap.ts              # Emoji to SVG file mappings
│   │
│   ├── hooks/                       # Custom React hooks (3 files)
│   │   ├── useGameLogic.ts          # Core game state and logic management
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
│   │   ├── colors.ts                # Color palette definitions
│   │   ├── appStyles.ts             # Container, scroll, grid layouts
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

- **48 Animals**: Comprehensive collection including farm animals, wild animals, birds, marine life, insects
- **Three Game Modes**: Name recognition, sound identification, and exhibition browsing
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

1. **Start Screen**: Choose game mode (By Name, By Sound, or Exhibition) and language
2. **Game Play** (By Name/By Sound modes):
   - See/hear the question
   - Select from 6 animals displayed in a grid
   - Get instant feedback (success overlay or red border)
   - Score increments on correct answer
   - New question automatically loads
3. **Exhibition Mode**:
   - Browse all 48 animals in scrollable list
   - Search/filter by animal name
   - Tap animal to view detail screen
   - Explore galleries, videos, and Wikipedia
4. **Navigation**: Access drawer menu via hamburger button for mode switching
5. **Reset**: Return to start screen via home button

## Animals Data Structure

Each animal in `src/constants/animals.ts` includes:

- `id`: Unique identifier (1-48)
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

- **Animal sound files**: 48 MP3 files in `assets/music/animals/`
- **Background music**: Local file `kid-366901.mp3` in `assets/music/`
- **Sound effects**: `success.mp3` and `wrong.mp3` in `assets/music/`
- **Background images**: 10 JPG files (bg1.jpg - bg10.jpg) in `assets/imgs/bg/`
- **Emoji SVGs**: 70 SVG files (60 Twemoji + 2 custom + 8 UI) in `assets/emojis/`
- **Fonts**: 4 Montserrat `.ttf` files in `assets/fonts/`
- **Icons**: PNG files (icon.png, adaptive-icon.png, splash-icon.png, favicon.png)
- **Animal images**: ~336 Unsplash URLs (6-7 per animal, referenced in animals.ts)
- **Animal videos**: ~144 YouTube URLs (3 per animal, referenced in animals.ts)

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

### Exhibition Mode & Navigation (Latest)

- **Exhibition Mode ("showAll")**: Complete browsing experience for all 48 animals
- **Drawer Navigation**: Implemented React Navigation drawer with CustomDrawerContent
- **AnimalsListView**: Browse screen with search/filter functionality
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

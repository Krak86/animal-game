# Animals Game 🐕🐈🦁

A fun, interactive React Native game for children to learn animal names in English and Ukrainian.

## Features

- 🎮 **Interactive Gameplay**: Tap the correct animal that matches the displayed name
- 🌍 **Bilingual**: Switch between English and Ukrainian
- 🎨 **Animated**: Living animal animations with wiggle effects
- 🔊 **Sound Effects**: Success and error sounds for feedback
- 📱 **Responsive**: Works on all screen sizes with vertical scrolling
- ✅ **Visual Feedback**: Red border for wrong answers, celebration overlay for correct ones
- 📊 **Score Tracking**: Keep track of your progress

## Project Structure

```
/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── AnimalCard.js
│   │   ├── LanguageSwitcher.js
│   │   ├── QuestionDisplay.js
│   │   ├── SuccessOverlay.js
│   │   └── index.js
│   ├── constants/           # App constants and data
│   │   ├── animals.js
│   │   ├── sounds.js
│   │   └── translations.js
│   ├── hooks/               # Custom React hooks
│   │   └── useGameLogic.js
│   ├── styles/              # Style definitions
│   │   ├── appStyles.js
│   │   ├── colors.js
│   │   └── componentStyles.js
│   └── utils/               # Utility functions
│       ├── animations.js
│       ├── audio.js
│       └── helpers.js
├── App.js                   # Main app component
├── package.json
└── app.json

```

## Getting Started

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

## Code Organization

### Components (`src/components/`)
- **AnimalCard**: Displays individual animal with wiggle animation
- **LanguageSwitcher**: Toggle between EN/UK languages
- **QuestionDisplay**: Shows the animal name to find
- **SuccessOverlay**: Celebration overlay on correct answer

### Constants (`src/constants/`)
- **animals.js**: Animal data (name, emoji, image URL)
- **sounds.js**: Sound effect URLs
- **translations.js**: English and Ukrainian translations

### Hooks (`src/hooks/`)
- **useGameLogic**: Custom hook managing all game state and logic

### Styles (`src/styles/`)
- **appStyles.js**: Main app container styles
- **colors.js**: Color palette definitions
- **componentStyles.js**: Component-specific styles

### Utils (`src/utils/`)
- **animations.js**: Animation helper functions
- **audio.js**: Sound loading and playback functions
- **helpers.js**: General utility functions (shuffle, random, etc.)

## Customization

### Adding More Animals

Edit `src/constants/animals.js`:

```javascript
export const ANIMALS = [
  // Add your animal here
  { id: 11, name: 'Bear', emoji: '🐻', image: 'your-image-url' },
];
```

Don't forget to add translations in `src/constants/translations.js`.

### Changing Colors

Edit `src/styles/colors.js` to customize the color scheme.

### Custom Sounds

Replace URLs in `src/constants/sounds.js` with your own sound files.

## Technologies

- **React Native** with **Expo**
- **expo-av** for audio playback
- Native **Animated** API for smooth animations
- Custom hooks for state management

## License

ISC

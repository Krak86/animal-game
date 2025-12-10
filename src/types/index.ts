import { Animated } from 'react-native';
import { Audio } from 'expo-av';

/**
 * Core types for the Animals Game
 */

// Language type
export type Language = 'en' | 'uk';

// Game mode type
export type GameMode = 'byName' | 'bySound';

// Animal definition
export interface Animal {
  id: number;
  name: string;
  emoji: string;
  image: string;
  soundUrl?: string;        // Optional: animal sound URL
  modes: GameMode[];        // Which modes this animal appears in
}

// Translation structure
export interface AnimalTranslations {
  [key: string]: string;
}

export interface ScreenTranslations {
  title: string;
  subtitle: string;
  byName: string;           // "By Name" button
  bySound: string;          // "By Sound" button
}

export interface Translations {
  startScreen: ScreenTranslations;
  score: string;
  findThe: string;
  greatJob: string;
  youFoundIt: string;
  startFromBeginning: string;
  whoSaysThis: string;      // "Who says so?" for By Sound mode
  replaySound: string;      // "Play Again" button text
  animals: AnimalTranslations;
}

export interface TranslationMap {
  en: Translations;
  uk: Translations;
}

// Sound objects
export interface SoundObjects {
  successSound: Audio.Sound | null;
  wrongSound: Audio.Sound | null;
}

// Hook return type
export interface UseGameLogicReturn {
  // State
  shuffledAnimals: Animal[];
  currentAnimal: Animal | null;
  showSuccess: boolean;
  score: number;
  wrongTileId: number | null;
  gameStarted: boolean;
  isSoundEnabled: boolean;
  gameMode: GameMode;
  // Animation values
  successScale: Animated.Value;
  successOpacity: Animated.Value;
  cardAnimations: Animated.Value[];
  questionAnimation: Animated.Value;
  animalWiggles: Animated.Value[];
  // Functions
  handleAnimalPress: (animal: Animal) => void;
  startGame: () => Promise<void>;
  toggleSound: () => void;
  resetGame: () => Promise<void>;
  replaySound: () => void;  // New function for By Sound mode
}

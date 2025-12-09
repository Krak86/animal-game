import { Animated } from 'react-native';
import { Audio } from 'expo-av';

/**
 * Core types for the Animals Game
 */

// Language type
export type Language = 'en' | 'uk';

// Animal definition
export interface Animal {
  id: number;
  name: string;
  emoji: string;
  image: string;
}

// Translation structure
export interface AnimalTranslations {
  [key: string]: string;
}

export interface ScreenTranslations {
  title: string;
  subtitle: string;
  start: string;
}

export interface Translations {
  startScreen: ScreenTranslations;
  score: string;
  findThe: string;
  greatJob: string;
  youFoundIt: string;
  startFromBeginning: string;
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
}

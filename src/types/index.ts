import { Animated } from "react-native";
import { Audio } from "expo-av";

/**
 * Core types for the Animals Game
 */

// Language type
export type Language = "en" | "uk" | "ru";

// Game mode type
export type GameMode = "byName" | "bySound" | "showAll";

// Animal definition
export interface Animal {
  id: number;
  name: string;
  emoji: string;
  image: any; // Local image require() result (React Native)
  soundUrl?: string | number; // Optional: animal sound (URL string or local require() number)
  modes: GameMode[]; // Which modes this animal appears in
  // Optional fields for future exhibition features
  images?: string[]; // Multiple images for gallery
  videos?: string[]; // Video URLs
  extraSounds?: string[]; // Additional sounds
  description?: string; // Animal description/facts
  wikipediaUrls?: string[]; // Links to Wikipedia
  otherUrls?: string[]; // Other reference URLs
}

// Translation structure
export interface AnimalTranslations {
  [key: string]: string;
}

export interface ScreenTranslations {
  title: string;
  subtitle: string;
  byName: string; // "By Name" button
  bySound: string; // "By Sound" button
  showAll: string; // "Show All" button
}

export interface Translations {
  startScreen: ScreenTranslations;
  score: string;
  findThe: string;
  greatJob: string;
  youFoundIt: string;
  startFromBeginning: string;
  whoSaysThis: string; // "Who says so?" for By Sound mode
  replaySound: string; // "Play Again" button text
  showAllTitle: string; // "All Animals" title
  backToList: string; // "Back to all animals" button
  speakName: string; // "Speak Name" TTS button
  playSound: string; // "Play Sound" button
  searchPlaceholder: string; // "Search animals..." placeholder
  noResults: string; // "No animals found" message
  menu: string; // "Menu" drawer header
  sound: string; // "Sound" drawer section label
  language: string; // "Language" drawer section label
  animals: AnimalTranslations;
}

export interface TranslationMap {
  en: Translations;
  uk: Translations;
  ru: Translations;
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
  isAnimalSoundPlaying: boolean;
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
  replaySound: () => Promise<void>; // New function for By Sound mode
}

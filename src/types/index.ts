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
  soundUrl: string | number; // Optional: animal sound (URL string or local require() number)
  modes: GameMode[]; // Which modes this animal appears in
  // Optional fields for future exhibition features
  images: string[]; // Multiple images for gallery
  videos: string[]; // Video URLs
  extraSounds?: string[]; // Additional sounds
  description: string; // Animal description/facts
  wikipediaUrls: {
    en?: string;
    uk?: string;
    ru?: string;
  }; // Language-specific Wikipedia links
  otherUrls?: string[]; // Other reference URLs
  glbUrl?: string | number; // 3D model (.glb file - URL string or local require() number)
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
  gameMode: string; // "Game Mode" drawer section label
  enterFullScreen: string; // "Enter Full Screen" button text
  exitFullScreen: string; // "Exit Full Screen" button text
  privacyPolicy: string; // "Privacy Policy" button text
  viewImages: string; // "View Images" button
  viewVideos: string; // "View Videos" button
  view3DModel: string; // "3D Model" button
  viewWikipedia: string; // "Wikipedia" button
  leavingAppMessage: string; // "You are leaving the app. Continue?"
  comingSoon: string; // "Coming Soon" for 3D modal
  close: string; // "Close" button
  externalLink: string; // "External Link" alert title
  cancel: string; // "Cancel" button
  continue: string; // "Continue" button
  exitApp: string; // "Exit Game" alert title
  exitAppMessage: string; // "Are you sure you want to exit?" message
  error: string; // "Error" alert title
  browserNotInstalledError: string; // Browser not installed error message
  animalDescriptions: {
    dogDescription: string;
    catDescription: string;
    lionDescription: string;
    elephantDescription: string;
    giraffeDescription: string;
    monkeyDescription: string;
    penguinDescription: string;
    zebraDescription: string;
    tigerDescription: string;
    rabbitDescription: string;
    roosterDescription: string;
    cowDescription: string;
    horseDescription: string;
    birdDescription: string;
    wolfDescription: string;
    gooseDescription: string;
    donkeyDescription: string;
    bearDescription: string;
    sharkDescription: string;
    turtleDescription: string;
    octopusDescription: string;
    crabDescription: string;
    whaleDescription: string;
    dolphinDescription: string;
    snailDescription: string;
    antDescription: string;
    ladybugDescription: string;
    crocodileDescription: string;
    batDescription: string;
    parrotDescription: string;
    mooseDescription: string;
    llamaDescription: string;
    buffaloDescription: string;
    turkeyDescription: string;
    peacockDescription: string;
    swanDescription: string;
    beeDescription: string;
    caterpillarDescription: string;
    scorpionDescription: string;
    lobsterDescription: string;
    sealDescription: string;
    raccoonDescription: string;
    badgerDescription: string;
    boarDescription: string;
    camelDescription: string;
    chameleonDescription: string;
    flamingoDescription: string;
    gorillaDescription: string;
    kangarooDescription: string;
    leopardDescription: string;
    sheepDescription: string;
    chickenDescription: string;
    pigDescription: string;
    goatDescription: string;
    bullDescription: string;
    duckDescription: string;
    snakeDescription: string;
    ravenDescription: string;
    owlDescription: string;
  };
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
  milestoneSound: Audio.Sound | null;
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
  resetGameState: () => Promise<void>; // Reset game state without stopping background music
  replaySound: () => Promise<void>; // New function for By Sound mode
}

import { Animated } from "react-native";
import { Audio } from "expo-av";

/**
 * Core types for the Animals Game
 */

// Language type
export type Language = "en" | "uk" | "ru";

// Game mode type
export type GameMode =
  | "byName"
  | "bySound"
  | "showAll"
  | "secret"
  | "animalPairs";

// Animal definition
export interface Animal {
  id: number;
  name: string;
  emoji: string;
  image: any; // Local image require() result (React Native)
  soundUrl?: string | number; // Optional: animal sound (URL string or local require() number)
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
  secret: string; // "Secret Animal" button
  secretDescription: string; // "Discover a mystery animal!" description
  animalPairs: string; // "Animal Pairs" button
  animalPairsDescription: string; // "Find matching pairs!" description
}

export interface Translations {
  startScreen: ScreenTranslations;
  score: string;
  findThe: string;
  findThePairs: string; // "Find the pairs!" for Animal Pairs mode
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
  music: string; // "Music" drawer section label
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
  offlineBannerTitle: string; // "No Internet Connection" offline banner title
  offlineBannerMessage: string; // "Some content may be unavailable" offline banner message
  requiresInternet: string; // "Requires internet" hint for disabled buttons
  cachedContent: string; // "Cached" indicator for cached content
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
    alpacaDescription: string;
    muleDescription: string;
    ramDescription: string;
    henDescription: string;
    calfDescription: string;
    foalDescription: string;
    foxDescription: string;
    deerDescription: string;
    squirrelDescription: string;
    hedgehogDescription: string;
    otterDescription: string;
    pandaDescription: string;
    koalaDescription: string;
    hippopotamusDescription: string;
    rhinocerosDescription: string;
    chimpanzeeDescription: string;
    eagleDescription: string;
    woodpeckerDescription: string;
    seagullDescription: string;
    crowDescription: string;
    vultureDescription: string;
    hummingbirdDescription: string;
    ostrichDescription: string;
    pelicanDescription: string;
    walrusDescription: string;
    seaLionDescription: string;
    starfishDescription: string;
    seahorseDescription: string;
    jellyfishDescription: string;
    clownfishDescription: string;
    frogDescription: string;
    toadDescription: string;
    lizardDescription: string;
    iguanaDescription: string;
    salamanderDescription: string;
    butterflyDescription: string;
    grasshopperDescription: string;
    dragonflyDescription: string;
    spiderDescription: string;
    mosquitoDescription: string;
    mouseDescription: string;
    slothDescription: string;
    wormDescription: string;
    flyDescription: string;
    beetleDescription: string;
    skunkDescription: string;
    beaverDescription: string;
    cockroachDescription: string;
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
  resetGame: () => Promise<void>;
  resetGameState: () => Promise<void>; // Reset game state without stopping background music
  replaySound: () => Promise<void>; // New function for By Sound mode
}

// Pairs game hook return type
export interface UsePairsGameLogicReturn {
  // State
  pairAnimals: Animal[]; // 6 tiles (3 pairs)
  firstSelection: { animal: Animal; tileIndex: number } | null;
  secondSelection: { animal: Animal; tileIndex: number } | null;
  matchedPairIds: number[];
  wrongTileIndices: number[];
  showSuccess: boolean;
  gameStarted: boolean;
  milestoneSound: Audio.Sound | null;
  // Animation values
  successScale: Animated.Value;
  successOpacity: Animated.Value;
  cardAnimations: Animated.Value[];
  questionAnimation: Animated.Value;
  animalWiggles: Animated.Value[];
  // Functions
  handleAnimalPress: (animal: Animal, tileIndex: number) => void;
  startGame: () => Promise<void>;
  resetGame: () => Promise<void>;
  resetGameState: () => Promise<void>;
}

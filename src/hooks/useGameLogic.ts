import { useState, useEffect, useRef } from "react";
import { Animated } from "react-native";
import { Audio } from "expo-av";

import { ANIMALS } from "@/constants/animals";
import { shuffleArray, getRandomItem } from "@/utils/helpers";
import {
  loadSounds,
  playSound,
  unloadSounds,
  loadBackgroundMusic,
  pauseBackgroundMusic,
  resumeBackgroundMusic,
} from "@/utils/audio";
import {
  createWiggleAnimation,
  shakeCard,
  animateSuccessShow,
  animateSuccessHide,
  animateQuestionShow,
  animateQuestionHide,
  animateCardsEntrance,
} from "@/utils/animations";
import { speakQuestion, stopSpeech, logAvailableVoices } from "@/utils/speech";
import { Animal, Language, Translations, UseGameLogicReturn } from "@/types";

/**
 * Custom hook to manage game logic and state
 * @param language - Current language ('en' or 'uk')
 * @param translations - Translation object for current language
 */
export const useGameLogic = (
  language: Language,
  translations: Translations
): UseGameLogicReturn => {
  const [shuffledAnimals, setShuffledAnimals] = useState<Animal[]>([]);
  const [currentAnimal, setCurrentAnimal] = useState<Animal | null>(null);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [wrongTileId, setWrongTileId] = useState<number | null>(null);
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [isSoundEnabled, setIsSoundEnabled] = useState<boolean>(true);

  // Animation values
  const successScale = useRef(new Animated.Value(0)).current;
  const successOpacity = useRef(new Animated.Value(0)).current;
  const cardAnimations = useRef(
    ANIMALS.map(() => new Animated.Value(1))
  ).current;
  const questionAnimation = useRef(new Animated.Value(1)).current;
  const animalWiggles = useRef(
    ANIMALS.map(() => new Animated.Value(0))
  ).current;

  // Sound objects
  const successSound = useRef<Audio.Sound | null>(null);
  const wrongSound = useRef<Audio.Sound | null>(null);
  const backgroundMusic = useRef<Audio.Sound | null>(null);

  useEffect(() => {
    loadGameSounds();

    return () => {
      const soundsToUnload = [
        successSound.current,
        wrongSound.current,
        backgroundMusic.current,
      ].filter(Boolean) as Audio.Sound[];
      if (soundsToUnload.length > 0) {
        unloadSounds(soundsToUnload);
      }
    };
  }, []);

  const loadGameSounds = async (): Promise<void> => {
    // Preload sound effects (but don't play them yet)
    const sounds = await loadSounds();
    successSound.current = sounds.successSound;
    wrongSound.current = sounds.wrongSound;
  };

  const startGame = async (): Promise<void> => {
    if (!gameStarted) {
      setGameStarted(true);

      // Debug: Log available voices for troubleshooting
      logAvailableVoices();

      // Start background music (requires user interaction)
      backgroundMusic.current = await loadBackgroundMusic();

      startNewRound();
      startAnimalAnimations();
    }
  };

  const startAnimalAnimations = (): void => {
    animalWiggles.forEach((wiggle, index) => {
      createWiggleAnimation(wiggle, index);
    });
  };

  const startNewRound = (): void => {
    setWrongTileId(null);

    // Set animals immediately so they render
    const shuffled = shuffleArray(ANIMALS);
    setShuffledAnimals(shuffled);
    const randomAnimal = getRandomItem(shuffled);
    setCurrentAnimal(randomAnimal);

    // Then do animations
    animateQuestionHide(questionAnimation, () => {
      animateCardsEntrance(cardAnimations);
      animateQuestionShow(questionAnimation);

      // Speak the question after animations start (if sound is enabled)
      if (
        isSoundEnabled &&
        backgroundMusic.current &&
        translations &&
        randomAnimal
      ) {
        const animalName = translations.animals[randomAnimal.name];
        speakQuestion(
          translations.findThe,
          animalName,
          language,
          backgroundMusic.current
        );
      }
    });
  };

  const handleAnimalPress = (animal: Animal): void => {
    // Speak the animal name when clicked (if sound is enabled)
    if (isSoundEnabled && backgroundMusic.current && translations) {
      const animalName = translations.animals[animal.name];
      speakQuestion("", animalName, language, backgroundMusic.current);
    }

    if (animal.id === currentAnimal?.id) {
      handleCorrectAnswer();
    } else {
      handleWrongAnswer(animal);
    }
  };

  const handleCorrectAnswer = (): void => {
    setScore(score + 1);
    if (isSoundEnabled) {
      playSound(successSound.current, backgroundMusic.current);
    }
    showSuccessAnimation();
  };

  const handleWrongAnswer = (animal: Animal): void => {
    const cardIndex = shuffledAnimals.findIndex((a) => a.id === animal.id);
    shakeCard(cardAnimations[cardIndex]);
    if (isSoundEnabled) {
      playSound(wrongSound.current, backgroundMusic.current);
    }

    setWrongTileId(animal.id);
    setTimeout(() => {
      setWrongTileId(null);
    }, 2000);
  };

  const toggleSound = (): void => {
    setIsSoundEnabled(!isSoundEnabled);
    if (isSoundEnabled && backgroundMusic.current) {
      pauseBackgroundMusic(backgroundMusic.current);
    } else if (!isSoundEnabled && backgroundMusic.current) {
      resumeBackgroundMusic(backgroundMusic.current);
    }
  };

  const resetGame = async (): Promise<void> => {
    // Stop any ongoing speech
    await stopSpeech();

    // Stop background music
    if (backgroundMusic.current) {
      await backgroundMusic.current.stopAsync();
      await backgroundMusic.current.unloadAsync();
      backgroundMusic.current = null;
    }

    // Reset all state
    setGameStarted(false);
    setScore(0);
    setShuffledAnimals([]);
    setCurrentAnimal(null);
    setShowSuccess(false);
    setWrongTileId(null);

    // Reset animation values
    successScale.setValue(0);
    successOpacity.setValue(0);
    cardAnimations.forEach((anim) => anim.setValue(1));
    questionAnimation.setValue(1);
    animalWiggles.forEach((anim) => anim.setValue(0));
  };

  const showSuccessAnimation = (): void => {
    setShowSuccess(true);

    // Pause background music during success animation
    pauseBackgroundMusic(backgroundMusic.current);

    animateSuccessShow(successScale, successOpacity, () => {
      setTimeout(() => {
        animateSuccessHide(successScale, successOpacity, () => {
          setShowSuccess(false);
          successScale.setValue(0);
          successOpacity.setValue(0);

          // Resume background music after success animation
          resumeBackgroundMusic(backgroundMusic.current);

          startNewRound();
        });
      }, 1500);
    });
  };

  return {
    // State
    shuffledAnimals,
    currentAnimal,
    showSuccess,
    score,
    wrongTileId,
    gameStarted,
    isSoundEnabled,
    // Animation values
    successScale,
    successOpacity,
    cardAnimations,
    questionAnimation,
    animalWiggles,
    // Functions
    handleAnimalPress,
    startGame,
    toggleSound,
    resetGame,
  };
};

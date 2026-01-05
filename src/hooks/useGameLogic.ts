import { useState, useEffect, useRef, useMemo } from "react";
import { Animated } from "react-native";
import { Audio } from "expo-av";
import * as Haptics from "expo-haptics";

import { getAnimalsByMode } from "@/constants/animals";
import { ANIMALS_PER_SCREEN } from "@/constants/gameSettings";
import { shuffleArray, getRandomItem } from "@/utils/helpers";
import {
  loadSounds,
  playSound,
  unloadSounds,
  loadBackgroundMusic,
  pauseBackgroundMusic,
  resumeBackgroundMusic,
  playAnimalSound,
  stopAnimalSound,
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
import {
  speakQuestion,
  speakText,
  speakAnimalName,
  stopSpeech,
  logAvailableVoices,
  playPrerecordedAudio,
} from "@/utils/speech";
import {
  PRERECORDED_UI_AUDIO,
  hasPrerecordedAudio,
} from "@/constants/audioFiles";
import {
  Animal,
  Language,
  Translations,
  UseGameLogicReturn,
  GameMode,
} from "@/types";

/**
 * Custom hook to manage game logic and state
 * @param language - Current language ('en' or 'uk')
 * @param translations - Translation object for current language
 * @param gameMode - Game mode ('byName' or 'bySound')
 */
export const useGameLogic = (
  language: Language,
  translations: Translations,
  gameMode: GameMode,
  sessionScore: number,
  onScoreChange: (newScore: number) => void,
  isSoundEnabled: boolean,
  isMusicEnabled: boolean
): UseGameLogicReturn => {
  // Filter animals based on game mode
  const modeAnimals = useMemo(() => getAnimalsByMode(gameMode), [gameMode]);

  const [shuffledAnimals, setShuffledAnimals] = useState<Animal[]>([]);
  const [currentAnimal, setCurrentAnimal] = useState<Animal | null>(null);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [wrongTileId, setWrongTileId] = useState<number | null>(null);
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [isAnimalSoundPlaying, setIsAnimalSoundPlaying] =
    useState<boolean>(false);

  // Animation values
  const successScale = useRef(new Animated.Value(0)).current;
  const successOpacity = useRef(new Animated.Value(0)).current;
  const questionAnimation = useRef(new Animated.Value(1)).current;

  // Animation arrays for fixed number of animals per screen
  const cardAnimations = useMemo(
    () =>
      Array.from({ length: ANIMALS_PER_SCREEN }, () => new Animated.Value(1)),
    []
  );
  const animalWiggles = useMemo(
    () =>
      Array.from({ length: ANIMALS_PER_SCREEN }, () => new Animated.Value(0)),
    []
  );

  // Sound objects
  const successSound = useRef<Audio.Sound | null>(null);
  const wrongSound = useRef<Audio.Sound | null>(null);
  const milestoneSound = useRef<Audio.Sound | null>(null);
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

  // Watch for music toggle changes
  useEffect(() => {
    if (!backgroundMusic.current) return;

    // Master switch: if sound is OFF, music is ignored
    if (!isSoundEnabled) {
      pauseBackgroundMusic(backgroundMusic.current);
      return;
    }

    // Sound is ON, respect music toggle
    if (isMusicEnabled) {
      resumeBackgroundMusic(backgroundMusic.current);
    } else {
      pauseBackgroundMusic(backgroundMusic.current);
    }
  }, [isMusicEnabled, isSoundEnabled, gameStarted]);

  const loadGameSounds = async (): Promise<void> => {
    // Preload sound effects (but don't play them yet)
    const sounds = await loadSounds();
    successSound.current = sounds.successSound;
    wrongSound.current = sounds.wrongSound;
    milestoneSound.current = sounds.milestoneSound;
  };

  const startGame = async (): Promise<void> => {
    if (!gameStarted) {
      // Debug: Log available voices for troubleshooting
      logAvailableVoices();

      // Load background music FIRST
      backgroundMusic.current = await loadBackgroundMusic(isSoundEnabled);

      // If sound is disabled, pause music immediately
      if (!isSoundEnabled && backgroundMusic.current) {
        await pauseBackgroundMusic(backgroundMusic.current);
      }

      // Ensure background music is fully loaded before proceeding
      if (backgroundMusic.current) {
        try {
          const status = await backgroundMusic.current.getStatusAsync();
          if (!status.isLoaded) {
            console.warn("Background music not fully loaded, waiting...");
            // Small delay to ensure audio is ready
            await new Promise((resolve) => setTimeout(resolve, 100));
          }
        } catch (error) {
          console.warn("Error checking background music status:", error);
        }
      }

      // NOW set gameStarted to trigger useEffect with music already loaded
      setGameStarted(true);

      startNewRound();
      startAnimalAnimations();
    }
  };

  const startAnimalAnimations = (): void => {
    animalWiggles.forEach((wiggle, index) => {
      createWiggleAnimation(wiggle, index);
    });
  };

  const startNewRound = async (): Promise<void> => {
    // Stop any playing animal sound from previous round
    await stopAnimalSound(backgroundMusic.current);

    setWrongTileId(null);
    setIsAnimalSoundPlaying(false);

    // Reset card and wiggle animations before setting new animals
    cardAnimations.forEach((anim) => anim.setValue(0));
    animalWiggles.forEach((wiggle) => wiggle.setValue(0));

    // Pick target animal first
    const targetAnimal = getRandomItem(modeAnimals);
    setCurrentAnimal(targetAnimal);

    // Pick remaining animals (exclude target)
    const remainingAnimals = modeAnimals.filter(
      (a) => a.id !== targetAnimal.id
    );
    const shuffledRemaining = shuffleArray(remainingAnimals);
    const otherAnimals = shuffledRemaining.slice(0, ANIMALS_PER_SCREEN - 1);

    // Combine target with other animals and shuffle
    const animalsToShow = shuffleArray([targetAnimal, ...otherAnimals]);
    setShuffledAnimals(animalsToShow);

    // Then do animations
    animateQuestionHide(questionAnimation, () => {
      // Wait for state to update before animating (fixes web animation issue)
      setTimeout(() => {
        animateCardsEntrance(cardAnimations);
        startAnimalAnimations(); // Restart wiggle animations for new round
      }, 50);
      animateQuestionShow(questionAnimation);

      // Mode-specific behavior after animations start (if sound is enabled)
      if (
        isSoundEnabled &&
        backgroundMusic.current &&
        translations &&
        targetAnimal
      ) {
        if (gameMode === "byName") {
          // Speak "Find the [animal name]"
          // Pass English animal name - speakQuestion will handle prerecorded audio
          speakQuestion(
            translations.findThe,
            targetAnimal.name,
            language,
            backgroundMusic.current
          );
        } else if (gameMode === "bySound") {
          // First speak "Who says so?", then play animal sound
          // Use prerecorded audio for UK/RU
          if (hasPrerecordedAudio(language)) {
            // Narrow language to only ones with prerecorded audio
            const preLang = language as "uk" | "ru";
            const whoSaysAudio = PRERECORDED_UI_AUDIO.whoSaysThis[preLang];

            if (whoSaysAudio) {
              playPrerecordedAudio(
                whoSaysAudio,
                backgroundMusic.current,
                async () => {
                  // After speaking, play the animal sound
                  if (targetAnimal.soundUrl) {
                    try {
                      setIsAnimalSoundPlaying(true);
                      await playAnimalSound(
                        targetAnimal.soundUrl,
                        backgroundMusic.current
                      );
                    } finally {
                      setIsAnimalSoundPlaying(false);
                    }
                  }
                }
              );
            } else {
              // Fall back to live TTS for English
              speakText(
                translations.whoSaysThis,
                language,
                backgroundMusic.current,
                async () => {
                  // After speaking, play the animal sound
                  if (targetAnimal.soundUrl) {
                    try {
                      setIsAnimalSoundPlaying(true);
                      await playAnimalSound(
                        targetAnimal.soundUrl,
                        backgroundMusic.current
                      );
                    } finally {
                      setIsAnimalSoundPlaying(false);
                    }
                  }
                }
              );
            }
          } else {
            // Fall back to live TTS for English
            speakText(
              translations.whoSaysThis,
              language,
              backgroundMusic.current,
              async () => {
                // After speaking, play the animal sound
                if (targetAnimal.soundUrl) {
                  try {
                    setIsAnimalSoundPlaying(true);
                    await playAnimalSound(
                      targetAnimal.soundUrl,
                      backgroundMusic.current
                    );
                  } finally {
                    setIsAnimalSoundPlaying(false);
                  }
                }
              }
            );
          }
        }
      }
    });
  };

  const handleAnimalPress = (animal: Animal): void => {
    // Speak the animal name when clicked (if sound is enabled)
    if (isSoundEnabled && backgroundMusic.current && translations) {
      // Use new speakAnimalName function to play prerecorded audio for UK/RU
      speakAnimalName(animal.name, language, backgroundMusic.current, () => {});
    }

    if (animal.id === currentAnimal?.id) {
      handleCorrectAnswer();
    } else {
      handleWrongAnswer(animal);
    }
  };

  const handleCorrectAnswer = async (): Promise<void> => {
    // Stop any playing animal sound
    await stopAnimalSound(backgroundMusic.current);

    // Haptic feedback for success
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);

    onScoreChange(sessionScore + 1);
    if (isSoundEnabled) {
      playSound(successSound.current, backgroundMusic.current);
    }
    showSuccessAnimation();
  };

  const handleWrongAnswer = (animal: Animal): void => {
    const cardIndex = shuffledAnimals.findIndex((a) => a.id === animal.id);
    shakeCard(cardAnimations[cardIndex]);

    // Haptic feedback for error
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);

    if (isSoundEnabled) {
      playSound(wrongSound.current, backgroundMusic.current);
    }

    setWrongTileId(animal.id);
    setTimeout(() => {
      setWrongTileId(null);
    }, 2000);
  };


  const resetGame = async (): Promise<void> => {
    // Stop any ongoing speech
    await stopSpeech();

    // Stop any playing animal sound
    await stopAnimalSound();

    // Stop background music
    if (backgroundMusic.current) {
      await backgroundMusic.current.stopAsync();
      await backgroundMusic.current.unloadAsync();
      backgroundMusic.current = null;
    }

    // Reset all state (preserve sessionScore for persistence)
    setGameStarted(false);
    setShuffledAnimals([]);
    setCurrentAnimal(null);
    setShowSuccess(false);
    setWrongTileId(null);
    setIsAnimalSoundPlaying(false);

    // Reset animation values
    successScale.setValue(0);
    successOpacity.setValue(0);
    cardAnimations.forEach((anim) => anim.setValue(1));
    questionAnimation.setValue(1);
    animalWiggles.forEach((anim) => anim.setValue(0));
  };

  const resetGameState = async (): Promise<void> => {
    // Stop any ongoing speech
    await stopSpeech();

    // Stop any playing animal sound (but preserve background music)
    await stopAnimalSound(backgroundMusic.current);

    // Reset all game state (preserve sessionScore for persistence)
    setGameStarted(false); // Allow startGame to reinitialize on mode switch
    setShuffledAnimals([]);
    setCurrentAnimal(null);
    setShowSuccess(false);
    setWrongTileId(null);
    setIsAnimalSoundPlaying(false);

    // Reset animation values
    successScale.setValue(0);
    successOpacity.setValue(0);
    cardAnimations.forEach((anim) => anim.setValue(1));
    questionAnimation.setValue(1);
    animalWiggles.forEach((anim) => anim.setValue(0));

    // Note: backgroundMusic is NOT stopped or unloaded
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

          // Resume background music after success animation (check BOTH flags)
          if (isSoundEnabled && isMusicEnabled) {
            resumeBackgroundMusic(backgroundMusic.current);
          }

          startNewRound();
        });
      }, 500);
    });
  };

  const replaySound = async (): Promise<void> => {
    if (
      !isSoundEnabled ||
      gameMode !== "bySound" ||
      !currentAnimal?.soundUrl ||
      !backgroundMusic.current ||
      isAnimalSoundPlaying
    ) {
      return;
    }

    try {
      setIsAnimalSoundPlaying(true);
      await playAnimalSound(currentAnimal.soundUrl, backgroundMusic.current);
    } finally {
      setIsAnimalSoundPlaying(false);
    }
  };

  return {
    // State
    shuffledAnimals,
    currentAnimal,
    showSuccess,
    score: sessionScore,
    wrongTileId,
    gameStarted,
    isAnimalSoundPlaying,
    gameMode,
    milestoneSound: milestoneSound.current,
    // Animation values
    successScale,
    successOpacity,
    cardAnimations,
    questionAnimation,
    animalWiggles,
    // Functions
    handleAnimalPress,
    startGame,
    resetGame,
    resetGameState,
    replaySound,
  };
};

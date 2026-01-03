import { useState, useEffect, useRef, useMemo } from "react";
import { Animated } from "react-native";
import { Audio } from "expo-av";
import * as Haptics from "expo-haptics";

import { getAnimalsByMode } from "@/constants/animals";
import { TILES_PER_SCREEN } from "@/constants/gameSettings";
import { shuffleArray, getRandomItem } from "@/utils/helpers";
import {
  loadSounds,
  playSound,
  unloadSounds,
  loadBackgroundMusic,
  pauseBackgroundMusic,
  resumeBackgroundMusic,
  stopAnimalSound,
} from "@/utils/audio";
import {
  createWiggleAnimation,
  animateSuccessShow,
  animateSuccessHide,
  animateCardsEntrance,
} from "@/utils/animations";
import { stopSpeech } from "@/utils/speech";
import {
  Animal,
  Language,
  Translations,
  UsePairsGameLogicReturn,
} from "@/types";

/**
 * Custom hook to manage Animal Pairs memory matching game logic
 * @param language - Current language ('en', 'uk', or 'ru')
 * @param translations - Translation object for current language
 * @param sessionScore - Current session score
 * @param onScoreChange - Callback to update session score
 */
export const usePairsGameLogic = (
  language: Language,
  translations: Translations,
  sessionScore: number,
  onScoreChange: (newScore: number) => void
): UsePairsGameLogicReturn => {
  // Get animals for animalPairs mode (only animals configured for pairs game)
  const modeAnimals = useMemo(() => getAnimalsByMode("animalPairs"), []);

  const [pairAnimals, setPairAnimals] = useState<Animal[]>([]);
  const [firstSelection, setFirstSelection] = useState<{
    animal: Animal;
    tileIndex: number;
  } | null>(null);
  const [secondSelection, setSecondSelection] = useState<{
    animal: Animal;
    tileIndex: number;
  } | null>(null);
  const [matchedPairIds, setMatchedPairIds] = useState<number[]>([]);
  const [wrongTileIndices, setWrongTileIndices] = useState<number[]>([]);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [isSoundEnabled, setIsSoundEnabled] = useState<boolean>(true);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  // Animation values
  const successScale = useRef(new Animated.Value(0)).current;
  const successOpacity = useRef(new Animated.Value(0)).current;
  const questionAnimation = useRef(new Animated.Value(1)).current;

  // Animation arrays for 12 tiles (not 6!)
  const cardAnimations = useMemo(
    () =>
      Array.from({ length: TILES_PER_SCREEN }, () => new Animated.Value(1)),
    []
  );
  const animalWiggles = useMemo(
    () =>
      Array.from({ length: TILES_PER_SCREEN }, () => new Animated.Value(0)),
    []
  );

  // Sound objects
  const successSound = useRef<Audio.Sound | null>(null);
  const wrongSound = useRef<Audio.Sound | null>(null);
  const milestoneSound = useRef<Audio.Sound | null>(null);
  const backgroundMusic = useRef<Audio.Sound | null>(null);

  // Processing timeout ref to allow cancelling when starting new selection
  const processingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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
    const sounds = await loadSounds();
    successSound.current = sounds.successSound;
    wrongSound.current = sounds.wrongSound;
    milestoneSound.current = sounds.milestoneSound;
  };

  const startGame = async (): Promise<void> => {
    if (!gameStarted) {
      setGameStarted(true);

      // Load background music
      backgroundMusic.current = await loadBackgroundMusic(isSoundEnabled);

      // If sound is disabled, pause music immediately
      if (!isSoundEnabled && backgroundMusic.current) {
        await pauseBackgroundMusic(backgroundMusic.current);
      }

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
    // Reset selections and processing state
    setFirstSelection(null);
    setSecondSelection(null);
    setIsProcessing(false);
    setMatchedPairIds([]);
    setWrongTileIndices([]);

    // Reset card and wiggle animations before setting new animals
    cardAnimations.forEach((anim) => anim.setValue(0));
    animalWiggles.forEach((wiggle) => wiggle.setValue(0));

    // Pick 3 random animals
    const shuffledModeAnimals = shuffleArray([...modeAnimals]);
    const selectedAnimals = shuffledModeAnimals.slice(0, 3);

    // Create pairs by duplicating each animal
    const pairedAnimals = [...selectedAnimals, ...selectedAnimals];

    // Shuffle the 6 tiles
    const shuffledPairs = shuffleArray(pairedAnimals);
    setPairAnimals(shuffledPairs);

    // Wait for state to update before animating
    setTimeout(() => {
      animateCardsEntrance(cardAnimations);
      startAnimalAnimations(); // Restart wiggle animations for new round
    }, 50);

    // NO TTS or animal sounds in pairs mode - silent except for match/mismatch feedback
  };

  const handleAnimalPress = (animal: Animal, tileIndex: number): void => {
    // Prevent interaction with already matched tiles
    if (matchedPairIds.includes(animal.id)) {
      return;
    }

    // Haptic feedback for selection
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);

    // If we're currently processing a pair, allow starting a new selection immediately
    if (isProcessing) {
      // Clear the existing timeout to prevent it from clearing our new selection
      if (processingTimeoutRef.current) {
        clearTimeout(processingTimeoutRef.current);
        processingTimeoutRef.current = null;
      }

      // Reset processing state immediately
      setIsProcessing(false);
      setSecondSelection(null);
      setWrongTileIndices([]);

      // Start new selection
      setFirstSelection({ animal, tileIndex });
      return;
    }

    if (!firstSelection) {
      // First click - just select, NO sound
      setFirstSelection({ animal, tileIndex });
    } else if (firstSelection.tileIndex !== tileIndex) {
      // Second click - different tile
      setSecondSelection({ animal, tileIndex });
      setIsProcessing(true);

      // Check for match
      if (firstSelection.animal.id === animal.id) {
        // MATCH - play success sound
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);

        if (isSoundEnabled) {
          playSound(successSound.current, backgroundMusic.current);
        }

        // Add to matched pairs
        setMatchedPairIds((prev) => [...prev, animal.id]);

        // Increment score
        onScoreChange(sessionScore + 1);

        // Reset selections after short delay
        processingTimeoutRef.current = setTimeout(() => {
          setFirstSelection(null);
          setSecondSelection(null);
          setIsProcessing(false);
          processingTimeoutRef.current = null;

          // Check if all pairs matched (3 pairs = game complete)
          if (matchedPairIds.length + 1 === 3) {
            showSuccessAnimation();
          }
        }, 600);
      } else {
        // NO MATCH - play wrong sound and show red borders
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);

        if (isSoundEnabled) {
          playSound(wrongSound.current, backgroundMusic.current);
        }

        // Show red borders on both wrong tiles
        setWrongTileIndices([firstSelection.tileIndex, tileIndex]);

        // Reset after longer delay to show wrong selection
        processingTimeoutRef.current = setTimeout(() => {
          setFirstSelection(null);
          setSecondSelection(null);
          setWrongTileIndices([]);
          setIsProcessing(false);
          processingTimeoutRef.current = null;
        }, 800);
      }
    }
    // If clicking the same tile again, ignore it
  };

  const showSuccessAnimation = (): void => {
    setShowSuccess(true);

    // Pause background music during celebration
    if (backgroundMusic.current) {
      pauseBackgroundMusic(backgroundMusic.current);
    }

    // Show animation
    animateSuccessShow(successScale, successOpacity);

    setTimeout(() => {
      // Hide animation
      animateSuccessHide(successScale, successOpacity, () => {
        setShowSuccess(false);

        // Resume background music after celebration
        if (backgroundMusic.current && isSoundEnabled) {
          resumeBackgroundMusic(backgroundMusic.current);
        }

        // Start new round
        startNewRound();
      });
    }, 1500);
  };

  const toggleSound = (): void => {
    const newSoundState = !isSoundEnabled;
    setIsSoundEnabled(newSoundState);

    if (backgroundMusic.current) {
      if (newSoundState) {
        // Sound is now enabled, resume music
        resumeBackgroundMusic(backgroundMusic.current);
      } else {
        // Sound is now disabled, stop all sounds
        pauseBackgroundMusic(backgroundMusic.current);
        stopSpeech();
        stopAnimalSound(backgroundMusic.current);
      }
    }
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

    // Reset all state
    setGameStarted(false);
    setPairAnimals([]);
    setFirstSelection(null);
    setSecondSelection(null);
    setMatchedPairIds([]);
    setWrongTileIndices([]);
    setShowSuccess(false);
    setIsProcessing(false);

    // Reset animation values
    successScale.setValue(0);
    successOpacity.setValue(0);
    cardAnimations.forEach((anim) => anim.setValue(1));
    questionAnimation.setValue(1);
    animalWiggles.forEach((anim) => anim.setValue(0));
  };

  const resetGameState = async (): Promise<void> => {
    // Reset game state without stopping background music
    await stopSpeech();
    await stopAnimalSound();

    setGameStarted(false);
    setPairAnimals([]);
    setFirstSelection(null);
    setSecondSelection(null);
    setMatchedPairIds([]);
    setWrongTileIndices([]);
    setShowSuccess(false);
    setIsProcessing(false);

    // Reset animations
    successScale.setValue(0);
    successOpacity.setValue(0);
    cardAnimations.forEach((anim) => anim.setValue(1));
    questionAnimation.setValue(1);
    animalWiggles.forEach((anim) => anim.setValue(0));
  };

  return {
    // State
    pairAnimals,
    firstSelection,
    secondSelection,
    matchedPairIds,
    wrongTileIndices,
    showSuccess,
    gameStarted,
    isSoundEnabled,
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
    toggleSound,
    resetGame,
    resetGameState,
  };
};

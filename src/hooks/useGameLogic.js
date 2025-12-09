import { useState, useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import { ANIMALS } from '../constants/animals';
import { shuffleArray, getRandomItem } from '../utils/helpers';
import {
  loadSounds,
  playSound,
  unloadSounds,
  loadBackgroundMusic,
  pauseBackgroundMusic,
  resumeBackgroundMusic
} from '../utils/audio';
import {
  createWiggleAnimation,
  shakeCard,
  animateSuccessShow,
  animateSuccessHide,
  animateQuestionShow,
  animateQuestionHide,
  animateCardsEntrance,
} from '../utils/animations';
import { speakQuestion, stopSpeech, logAvailableVoices } from '../utils/speech';

/**
 * Custom hook to manage game logic and state
 * @param {string} language - Current language ('en' or 'uk')
 * @param {Object} translations - Translation object for current language
 */
export const useGameLogic = (language, translations) => {
  const [shuffledAnimals, setShuffledAnimals] = useState([]);
  const [currentAnimal, setCurrentAnimal] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [score, setScore] = useState(0);
  const [wrongTileId, setWrongTileId] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);

  // Animation values
  const successScale = useRef(new Animated.Value(0)).current;
  const successOpacity = useRef(new Animated.Value(0)).current;
  const cardAnimations = useRef(ANIMALS.map(() => new Animated.Value(1))).current;
  const questionAnimation = useRef(new Animated.Value(1)).current;
  const animalWiggles = useRef(ANIMALS.map(() => new Animated.Value(0))).current;

  // Sound objects
  const successSound = useRef(null);
  const wrongSound = useRef(null);
  const backgroundMusic = useRef(null);

  useEffect(() => {
    loadGameSounds();

    return () => {
      const soundsToUnload = [successSound.current, wrongSound.current, backgroundMusic.current].filter(Boolean);
      if (soundsToUnload.length > 0) {
        unloadSounds(soundsToUnload);
      }
    };
  }, []);

  const loadGameSounds = async () => {
    // Preload sound effects (but don't play them yet)
    const sounds = await loadSounds();
    successSound.current = sounds.successSound;
    wrongSound.current = sounds.wrongSound;
  };

  const startGame = async () => {
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

  const startAnimalAnimations = () => {
    animalWiggles.forEach((wiggle, index) => {
      createWiggleAnimation(wiggle, index);
    });
  };

  const startNewRound = () => {
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
      if (isSoundEnabled && backgroundMusic.current && translations && randomAnimal) {
        const animalName = translations.animals[randomAnimal.name];
        speakQuestion(translations.findThe, animalName, language, backgroundMusic.current);
      }
    });
  };

  const handleAnimalPress = (animal) => {
    // Speak the animal name when clicked (if sound is enabled)
    if (isSoundEnabled && backgroundMusic.current && translations) {
      const animalName = translations.animals[animal.name];
      speakQuestion('', animalName, language, backgroundMusic.current);
    }

    if (animal.id === currentAnimal.id) {
      handleCorrectAnswer();
    } else {
      handleWrongAnswer(animal);
    }
  };

  const handleCorrectAnswer = () => {
    setScore(score + 1);
    if (isSoundEnabled) {
      playSound(successSound.current, backgroundMusic.current);
    }
    showSuccessAnimation();
  };

  const handleWrongAnswer = (animal) => {
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

  const toggleSound = () => {
    setIsSoundEnabled(!isSoundEnabled);
    if (isSoundEnabled && backgroundMusic.current) {
      pauseBackgroundMusic(backgroundMusic.current);
    } else if (!isSoundEnabled && backgroundMusic.current) {
      resumeBackgroundMusic(backgroundMusic.current);
    }
  };

  const resetGame = async () => {
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
    cardAnimations.forEach(anim => anim.setValue(1));
    questionAnimation.setValue(1);
    animalWiggles.forEach(anim => anim.setValue(0));
  };

  const showSuccessAnimation = () => {
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

import { Animated } from 'react-native';

/**
 * Creates a shake animation for a card
 * @param {Animated.Value} animation - Animation value to use
 */
export const shakeCard = (animation) => {
  Animated.sequence([
    Animated.timing(animation, {
      toValue: 1.1,
      duration: 100,
      useNativeDriver: true,
    }),
    Animated.timing(animation, {
      toValue: 0.9,
      duration: 100,
      useNativeDriver: true,
    }),
    Animated.timing(animation, {
      toValue: 1.05,
      duration: 100,
      useNativeDriver: true,
    }),
    Animated.timing(animation, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }),
  ]).start();
};

/**
 * Creates a continuous wiggle animation for animals
 * @param {Animated.Value} wiggle - Animation value
 * @param {number} index - Index for stagger delay
 */
export const createWiggleAnimation = (wiggle, index) => {
  const duration = 1000 + Math.random() * 1000;
  const delay = index * 100;

  Animated.sequence([
    Animated.delay(delay),
    Animated.loop(
      Animated.sequence([
        Animated.timing(wiggle, {
          toValue: 1,
          duration: duration,
          useNativeDriver: true,
        }),
        Animated.timing(wiggle, {
          toValue: -1,
          duration: duration,
          useNativeDriver: true,
        }),
        Animated.timing(wiggle, {
          toValue: 0,
          duration: duration / 2,
          useNativeDriver: true,
        }),
      ])
    ),
  ]).start();
};

/**
 * Animates success overlay appearance
 * @param {Animated.Value} scale - Scale animation value
 * @param {Animated.Value} opacity - Opacity animation value
 * @param {Function} onComplete - Callback when animation completes
 */
export const animateSuccessShow = (scale, opacity, onComplete) => {
  Animated.parallel([
    Animated.spring(scale, {
      toValue: 1,
      friction: 8,
      tension: 40,
      useNativeDriver: true,
    }),
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }),
  ]).start(onComplete);
};

/**
 * Animates success overlay disappearance
 * @param {Animated.Value} scale - Scale animation value
 * @param {Animated.Value} opacity - Opacity animation value
 * @param {Function} onComplete - Callback when animation completes
 */
export const animateSuccessHide = (scale, opacity, onComplete) => {
  Animated.parallel([
    Animated.timing(scale, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }),
    Animated.timing(opacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }),
  ]).start(onComplete);
};

/**
 * Animates question text appearance
 * @param {Animated.Value} animation - Animation value
 */
export const animateQuestionShow = (animation) => {
  Animated.timing(animation, {
    toValue: 1,
    duration: 500,
    useNativeDriver: true,
  }).start();
};

/**
 * Animates question text disappearance
 * @param {Animated.Value} animation - Animation value
 * @param {Function} onComplete - Callback when animation completes
 */
export const animateQuestionHide = (animation, onComplete) => {
  Animated.timing(animation, {
    toValue: 0,
    duration: 300,
    useNativeDriver: true,
  }).start(onComplete);
};

/**
 * Animates cards entrance with stagger effect
 * @param {Array<Animated.Value>} cardAnimations - Array of card animation values
 */
export const animateCardsEntrance = (cardAnimations) => {
  cardAnimations.forEach((anim) => anim.setValue(0));

  Animated.stagger(
    50,
    cardAnimations.map((anim) =>
      Animated.spring(anim, {
        toValue: 1,
        friction: 8,
        tension: 40,
        useNativeDriver: true,
      })
    )
  ).start();
};

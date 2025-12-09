import { Animated } from 'react-native';

/**
 * Creates a shake animation for a card
 * @param animation - Animation value to use
 */
export const shakeCard = (animation: Animated.Value): void => {
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
 * @param wiggle - Animation value
 * @param index - Index for stagger delay
 */
export const createWiggleAnimation = (wiggle: Animated.Value, index: number): void => {
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
 * @param scale - Scale animation value
 * @param opacity - Opacity animation value
 * @param onComplete - Callback when animation completes
 */
export const animateSuccessShow = (
  scale: Animated.Value,
  opacity: Animated.Value,
  onComplete?: () => void
): void => {
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
 * @param scale - Scale animation value
 * @param opacity - Opacity animation value
 * @param onComplete - Callback when animation completes
 */
export const animateSuccessHide = (
  scale: Animated.Value,
  opacity: Animated.Value,
  onComplete?: () => void
): void => {
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
 * @param animation - Animation value
 */
export const animateQuestionShow = (animation: Animated.Value): void => {
  Animated.timing(animation, {
    toValue: 1,
    duration: 500,
    useNativeDriver: true,
  }).start();
};

/**
 * Animates question text disappearance
 * @param animation - Animation value
 * @param onComplete - Callback when animation completes
 */
export const animateQuestionHide = (animation: Animated.Value, onComplete?: () => void): void => {
  Animated.timing(animation, {
    toValue: 0,
    duration: 300,
    useNativeDriver: true,
  }).start(onComplete);
};

/**
 * Animates cards entrance with stagger effect
 * @param cardAnimations - Array of card animation values
 */
export const animateCardsEntrance = (cardAnimations: Animated.Value[]): void => {
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

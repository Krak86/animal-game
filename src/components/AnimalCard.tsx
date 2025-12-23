import { TouchableOpacity, View, Image, Animated } from "react-native";
import { useEffect, useRef } from "react";
import * as Haptics from "expo-haptics";

import { getAnimalCardStyles } from "@/styles/componentStyles";
import { useResponsiveDimensions } from "@/hooks/useResponsiveDimensions";
import { Animal, Translations } from "@/types";
import { EmojiSvg } from "@/components/EmojiSvg";

interface Props {
  animal: Animal;
  isWrong: boolean;
  wiggleAnimation?: Animated.Value;
  cardAnimation?: Animated.Value;
  translations: Translations;
  onPress: () => void;
  index?: number;
}

export const AnimalCard: React.FC<Props> = ({
  animal,
  isWrong,
  wiggleAnimation: externalWiggle,
  cardAnimation: externalCard,
  translations,
  onPress,
  index = 0,
}) => {
  const responsive = useResponsiveDimensions();
  const styles = getAnimalCardStyles(responsive);

  // Internal animations - used when external animations are not provided
  const internalCardAnim = useRef(new Animated.Value(0)).current;
  const internalWiggleAnim = useRef(new Animated.Value(0)).current;

  // Effect animations for shimmer, shine, and pulse
  const shimmerAnim = useRef(new Animated.Value(0)).current;
  const shineAnim = useRef(new Animated.Value(0)).current;
  const pulseAnim = useRef(new Animated.Value(0)).current;

  // Use external animations if provided, otherwise use internal ones
  const cardAnimation = externalCard || internalCardAnim;
  const wiggleAnimation = externalWiggle || internalWiggleAnim;

  // Calculate staggered delays based on animal ID or index
  const cardDelay = (animal.id % 12) * 80; // Stagger up to 12 different timings, 80ms apart
  const shimmerDelay = cardDelay;
  const shineDelay = cardDelay + 200;
  const pulseDelay = cardDelay + 400;

  // Initialize animations only if using internal animations
  useEffect(() => {
    if (!externalCard && !externalWiggle) {
      // Entrance animation
      Animated.spring(internalCardAnim, {
        toValue: 1,
        useNativeDriver: true,
        tension: 50,
        friction: 7,
      }).start();

      // Wiggle animation loop
      const createWiggle = () => {
        return Animated.loop(
          Animated.sequence([
            Animated.delay(Math.random() * 1000), // Random initial delay
            Animated.timing(internalWiggleAnim, {
              toValue: 1,
              duration: 200,
              useNativeDriver: true,
            }),
            Animated.timing(internalWiggleAnim, {
              toValue: -1,
              duration: 400,
              useNativeDriver: true,
            }),
            Animated.timing(internalWiggleAnim, {
              toValue: 0,
              duration: 200,
              useNativeDriver: true,
            }),
            Animated.delay(1500),
          ])
        );
      };

      const wiggleLoop = createWiggle();
      wiggleLoop.start();

      // Cleanup
      return () => {
        internalCardAnim.stopAnimation();
        wiggleLoop.stop();
        internalWiggleAnim.setValue(0);
      };
    }
  }, [externalCard, externalWiggle, internalCardAnim, internalWiggleAnim]);

  // Shimmer effect (moving light band) - 2.2s cycle
  useEffect(() => {
    const shimmerLoop = Animated.loop(
      Animated.sequence([
        Animated.delay(shimmerDelay),
        Animated.timing(shimmerAnim, {
          toValue: 1,
          duration: 2200,
          useNativeDriver: true,
        }),
        Animated.timing(shimmerAnim, {
          toValue: 0,
          duration: 0,
          useNativeDriver: true,
        }),
      ])
    );
    shimmerLoop.start();
    return () => shimmerLoop.stop();
  }, [shimmerAnim, shimmerDelay]);

  // Shine sweep effect (glossy diagonal sweep) - 2.8s cycle
  useEffect(() => {
    const shineLoop = Animated.loop(
      Animated.sequence([
        Animated.delay(shineDelay),
        Animated.timing(shineAnim, {
          toValue: 1,
          duration: 2800,
          useNativeDriver: true,
        }),
        Animated.timing(shineAnim, {
          toValue: 0,
          duration: 0,
          useNativeDriver: true,
        }),
      ])
    );
    shineLoop.start();
    return () => shineLoop.stop();
  }, [shineAnim, shineDelay]);

  // Pulse/Flash effect (scale + glow) - 2.4s cycle
  useEffect(() => {
    const pulseLoop = Animated.loop(
      Animated.sequence([
        Animated.delay(pulseDelay),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 2400,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 0,
          duration: 0,
          useNativeDriver: true,
        }),
      ])
    );
    pulseLoop.start();
    return () => pulseLoop.stop();
  }, [pulseAnim, pulseDelay]);

  return (
    <Animated.View
      style={[
        styles.wrapper,
        {
          opacity: cardAnimation,
          transform: [
            {
              scale: cardAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [0.3, 1],
              }),
            },
            {
              scale: pulseAnim.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: [1, 1.02, 1],
              }),
            },
          ],
        },
      ]}
    >
      <TouchableOpacity
        style={[styles.card, isWrong && styles.cardWrong]}
        onPress={() => {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
          onPress();
        }}
        activeOpacity={0.7}
      >
        <View style={styles.imageContainer}>
          {animal.image && (
            <Image source={animal.image} style={styles.backgroundImage} />
          )}

          {/* Shimmer effect overlay */}
          <Animated.View
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 1,
              backgroundColor: shimmerAnim.interpolate({
                inputRange: [0, 0.3, 0.5, 0.7, 1],
                outputRange: [
                  "rgba(255, 255, 255, 0)",
                  "rgba(255, 255, 255, 0.08)",
                  "rgba(255, 255, 255, 0.15)",
                  "rgba(255, 255, 255, 0.04)",
                  "rgba(255, 255, 255, 0)",
                ],
              }),
              pointerEvents: "none",
            }}
          />

          {/* Shine effect overlay */}
          <Animated.View
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 1,
              backgroundColor: shineAnim.interpolate({
                inputRange: [0, 0.45, 0.55, 1],
                outputRange: [
                  "rgba(52, 199, 89, 0)",
                  "rgba(52, 199, 89, 0.1)",
                  "rgba(52, 199, 89, 0.05)",
                  "rgba(52, 199, 89, 0)",
                ],
              }),
              pointerEvents: "none",
            }}
          />

          {/* Pulse/Flash effect overlay */}
          <Animated.View
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 1,
              backgroundColor: pulseAnim.interpolate({
                inputRange: [0, 0.35, 0.42, 0.6, 1],
                outputRange: [
                  "rgba(255, 159, 10, 0)",
                  "rgba(255, 159, 10, 0)",
                  "rgba(255, 159, 10, 0.12)",
                  "rgba(255, 159, 10, 0.04)",
                  "rgba(255, 159, 10, 0)",
                ],
              }),
              pointerEvents: "none",
            }}
          />

          <Animated.View
            style={[
              {
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
                opacity: 1,
                zIndex: 2,
              },
              {
                transform: [
                  {
                    rotate: wiggleAnimation.interpolate({
                      inputRange: [-1, 1],
                      outputRange: ["-8deg", "8deg"],
                    }),
                  },
                  {
                    translateY: wiggleAnimation.interpolate({
                      inputRange: [-1, 0, 1],
                      outputRange: [-3, 0, -3],
                    }),
                  },
                ],
              },
            ]}
          >
            <EmojiSvg emoji={animal.emoji} style={styles.emojiImage} />
          </Animated.View>
        </View>

        <Animated.Text style={styles.label}>
          {translations.animals[animal.name]}
        </Animated.Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

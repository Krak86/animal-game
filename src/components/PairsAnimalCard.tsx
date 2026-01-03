import { TouchableOpacity, View, Image, Animated } from "react-native";
import { useEffect, useRef } from "react";
import * as Haptics from "expo-haptics";

import { getAnimalCardStyles } from "@/styles/componentStyles";
import { useResponsiveDimensions } from "@/hooks/useResponsiveDimensions";
import { Animal, Translations } from "@/types";
import { EmojiSvg } from "@/components/EmojiSvg";

interface Props {
  animal: Animal;
  tileIndex: number; // Unique index 0-5
  isMatched: boolean;
  isSelected: boolean;
  isWrong: boolean;
  wiggleAnimation?: Animated.Value;
  cardAnimation?: Animated.Value;
  cardAnimations: Animated.Value[];
  translations: Translations;
  onPress: (animal: Animal, tileIndex: number) => void;
  index?: number;
}

export const PairsAnimalCard: React.FC<Props> = ({
  animal,
  tileIndex,
  isMatched,
  isSelected,
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

  // Calculate staggered delays based on tileIndex
  const cardDelay = tileIndex * 80;
  const shimmerDelay = cardDelay;
  const shineDelay = cardDelay + 200;
  const pulseDelay = cardDelay + 400;

  // Shimmer effect (moving light band) - 2.2s cycle
  useEffect(() => {
    if (isMatched) return; // Stop shimmer for matched cards

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
  }, [shimmerAnim, shimmerDelay, isMatched]);

  // Shine sweep effect (glossy diagonal sweep) - 2.8s cycle
  useEffect(() => {
    if (isMatched) return; // Stop shine for matched cards

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
  }, [shineAnim, shineDelay, isMatched]);

  // Pulse/Flash effect (scale + glow) - 2.4s cycle
  useEffect(() => {
    if (isMatched) return; // Stop pulse for matched cards

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
  }, [pulseAnim, pulseDelay, isMatched]);

  return (
    <Animated.View
      style={[
        styles.wrapper,
        {
          opacity: isMatched ? 0.3 : cardAnimation, // Fade out matched cards or use card animation
          transform: [
            {
              scale: cardAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [0.95, 1],
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
        style={[
          styles.card,
          isSelected && {
            borderColor: "#FFD700", // Gold highlight for selected
            borderWidth: 4,
          },
          isWrong && {
            borderColor: "#FF4757", // Red highlight for wrong
            borderWidth: 4,
          },
        ]}
        onPress={() => {
          if (!isMatched) {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            onPress(animal, tileIndex);
          }
        }}
        disabled={isMatched}
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
              !isMatched && {
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

        {/* No label text for pairs mode - just emojis */}
      </TouchableOpacity>
    </Animated.View>
  );
};

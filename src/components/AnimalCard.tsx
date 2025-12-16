import { TouchableOpacity, View, Image, Animated } from "react-native";
import { useEffect, useRef } from "react";

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
}

export const AnimalCard: React.FC<Props> = ({
  animal,
  isWrong,
  wiggleAnimation: externalWiggle,
  cardAnimation: externalCard,
  translations,
  onPress,
}) => {
  const responsive = useResponsiveDimensions();
  const styles = getAnimalCardStyles(responsive);

  // Internal animations - used when external animations are not provided
  const internalCardAnim = useRef(new Animated.Value(0)).current;
  const internalWiggleAnim = useRef(new Animated.Value(0)).current;

  // Use external animations if provided, otherwise use internal ones
  const cardAnimation = externalCard || internalCardAnim;
  const wiggleAnimation = externalWiggle || internalWiggleAnim;

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
          ],
        },
      ]}
    >
      <TouchableOpacity
        style={[styles.card, isWrong && styles.cardWrong]}
        onPress={onPress}
        activeOpacity={0.7}
      >
        <View style={styles.imageContainer}>
          {animal.image && (
            <Image source={animal.image} style={styles.backgroundImage} />
          )}

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

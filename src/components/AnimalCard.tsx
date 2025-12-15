import { TouchableOpacity, View, Image, Animated } from "react-native";

import { getAnimalCardStyles } from "@/styles/componentStyles";
import { useResponsiveDimensions } from "@/hooks/useResponsiveDimensions";
import { Animal, Translations } from "@/types";

interface Props {
  animal: Animal;
  isWrong: boolean;
  wiggleAnimation: Animated.Value;
  cardAnimation: Animated.Value;
  translations: Translations;
  onPress: () => void;
}

export const AnimalCard: React.FC<Props> = ({
  animal,
  isWrong,
  wiggleAnimation,
  cardAnimation,
  translations,
  onPress,
}) => {
  const responsive = useResponsiveDimensions();
  const styles = getAnimalCardStyles(responsive);

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
          <Animated.Text
            style={[
              styles.emojiImage,
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
            {animal.emoji}
          </Animated.Text>

          {animal.image && (
            <Image
              source={animal.image}
              style={styles.backgroundImage}
            />
          )}
        </View>
        <Animated.Text style={styles.label}>
          {translations.animals[animal.name]}
        </Animated.Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

import { Animated, Text, View, TouchableOpacity, StyleSheet } from "react-native";

import { getAppStyles } from "@/styles/appStyles";
import { COLORS } from "@/styles/colors";
import { FONTS } from "@/constants/fonts";
import { Animal, Translations, GameMode } from "@/types";
import { useResponsiveDimensions } from "@/hooks/useResponsiveDimensions";

interface Props {
  currentAnimal: Animal | null;
  translations: Translations;
  questionAnimation: Animated.Value;
  gameMode: GameMode;
  onReplaySound?: () => void;
}

export const QuestionDisplay: React.FC<Props> = ({
  currentAnimal,
  translations,
  questionAnimation,
  gameMode,
  onReplaySound,
}) => {
  const responsive = useResponsiveDimensions();
  const appStyles = getAppStyles(responsive);
  const styles = getQuestionDisplayStyles(responsive);

  if (!currentAnimal) return null;

  const animalName = translations.animals[currentAnimal.name];

  return (
    <Animated.View
      style={[
        appStyles.questionContainer,
        {
          opacity: questionAnimation,
          transform: [
            {
              scale: questionAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [0.8, 1],
              }),
            },
          ],
        },
      ]}
    >
      {gameMode === 'byName' ? (
        <>
          <Text style={appStyles.questionText}>{translations.findThe}</Text>
          <Text style={appStyles.animalNameText}>{animalName}</Text>
        </>
      ) : (
        <View style={styles.soundModeContainer}>
          <Text style={appStyles.questionText}>{translations.whoSaysThis}</Text>
          {onReplaySound && (
            <TouchableOpacity
              style={styles.replayButton}
              onPress={onReplaySound}
              activeOpacity={0.7}
            >
              <Text style={styles.replayButtonText}>{translations.replaySound}</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </Animated.View>
  );
};

const getQuestionDisplayStyles = (responsive: any) =>
  StyleSheet.create({
    soundModeContainer: {
      alignItems: "center",
      gap: responsive.spacing.md,
    },
    replayButton: {
      backgroundColor: COLORS.accent,
      paddingHorizontal: 20 * responsive.fontScale,
      paddingVertical: 10 * responsive.fontScale,
      borderRadius: 15,
      shadowColor: COLORS.black,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 3,
    },
    replayButtonText: {
      fontSize: 16 * responsive.fontScale,
      fontFamily: FONTS.semiBold,
      color: COLORS.white,
    },
  });

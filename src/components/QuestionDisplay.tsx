import { Animated, Text, View, TouchableOpacity, StyleSheet } from "react-native";

import { appStyles } from "@/styles/appStyles";
import { COLORS } from "@/styles/colors";
import { FONTS } from "@/constants/fonts";
import { Animal, Translations, GameMode } from "@/types";

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

const styles = StyleSheet.create({
  soundModeContainer: {
    alignItems: "center",
    gap: 15,
  },
  replayButton: {
    backgroundColor: COLORS.accent,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 15,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  replayButtonText: {
    fontSize: 16,
    fontFamily: FONTS.semiBold,
    color: COLORS.white,
  },
});

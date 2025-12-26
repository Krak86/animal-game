import {
  Animated,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useEffect, useRef } from "react";

import { getAppStyles } from "@/styles/appStyles";
import { COLORS } from "@/styles/colors";
import { FONTS } from "@/constants/fonts";
import { Animal, Translations, GameMode } from "@/types";
import { useResponsiveDimensions } from "@/hooks/useResponsiveDimensions";
import { EmojiSvg } from "@/components/EmojiSvg";

interface Props {
  currentAnimal: Animal | null;
  translations: Translations;
  questionAnimation: Animated.Value;
  gameMode: GameMode;
  onReplaySound?: () => void;
  isReplayingSound?: boolean;
}

export const QuestionDisplay: React.FC<Props> = ({
  currentAnimal,
  translations,
  questionAnimation,
  gameMode,
  onReplaySound,
  isReplayingSound,
}) => {
  const responsive = useResponsiveDimensions();
  const appStyles = getAppStyles(responsive);
  const styles = getQuestionDisplayStyles(responsive);

  // Animation for speaking/playing sound effect
  const speakingAnim = useRef(new Animated.Value(1)).current;

  // Pulse animation when sound is playing
  useEffect(() => {
    if (isReplayingSound) {
      const pulse = Animated.loop(
        Animated.sequence([
          Animated.timing(speakingAnim, {
            toValue: 1.4,
            duration: 400,
            useNativeDriver: true,
          }),
          Animated.timing(speakingAnim, {
            toValue: 1,
            duration: 400,
            useNativeDriver: true,
          }),
        ])
      );
      pulse.start();
      return () => pulse.stop();
    } else {
      speakingAnim.setValue(1);
    }
  }, [isReplayingSound, speakingAnim]);

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
      {gameMode === "byName" ? (
        <View style={styles.byNameContainer}>
          <Text style={appStyles.questionText}>{translations.findThe} </Text>
          <Text style={appStyles.animalNameText}>{animalName}</Text>
        </View>
      ) : (
        onReplaySound && (
          <View style={styles.soundModeContainer}>
            <Animated.View
              style={{
                transform: [{ scale: speakingAnim }],
              }}
            >
              <EmojiSvg emoji="🔊" style={styles.soundIcon} />
            </Animated.View>
            <TouchableOpacity
              style={[
                styles.replayButton,
                isReplayingSound && styles.replayButtonDisabled,
              ]}
              onPress={onReplaySound}
              activeOpacity={0.7}
              disabled={isReplayingSound}
            >
              <Text
                style={[
                  styles.replayButtonText,
                  isReplayingSound && styles.replayButtonTextDisabled,
                ]}
              >
                {translations.whoSaysThis}
              </Text>
            </TouchableOpacity>
          </View>
        )
      )}
    </Animated.View>
  );
};

const getQuestionDisplayStyles = (responsive: any) =>
  StyleSheet.create({
    byNameContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
    },
    soundModeContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: responsive.spacing.sm,
    },
    soundIcon: {
      fontSize: responsive.isLandscape
        ? 24 * responsive.fontScale
        : 32 * responsive.fontScale,
    },
    replayButton: {
      backgroundColor: COLORS.accent,
      paddingHorizontal: responsive.isLandscape
        ? 15 * responsive.fontScale
        : 20 * responsive.fontScale,
      paddingVertical: responsive.isLandscape
        ? 10 * responsive.fontScale
        : 12 * responsive.fontScale,
      borderRadius: 15,
      shadowColor: COLORS.black,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 3,
      alignItems: "center",
      gap: responsive.spacing.xs,
    },
    replayButtonText: {
      fontSize: responsive.isLandscape
        ? 14 * responsive.fontScale
        : 16 * responsive.fontScale,
      fontFamily: FONTS.semiBold,
      color: COLORS.white,
    },
    replayButtonDisabled: {
      opacity: 0.5,
      backgroundColor: COLORS.lightGray,
    },
    replayButtonTextDisabled: {
      opacity: 0.5,
    },
  });

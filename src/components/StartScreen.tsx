import { useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";

import { COLORS } from "@/styles/colors";
import { FONTS } from "@/constants/fonts";
import { TRANSLATIONS } from "@/constants/translations";
import { LanguageSwitcher } from "@/components";
import { Language, GameMode } from "@/types";

interface Props {
  onStart: (mode: GameMode) => void;
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export const StartScreen: React.FC<Props> = ({
  onStart,
  language,
  onLanguageChange,
}) => {
  const t = TRANSLATIONS[language]?.startScreen || TRANSLATIONS.uk.startScreen;

  // Animation values for individual emoji wiggles
  const wiggle1 = useRef(new Animated.Value(0)).current;
  const wiggle2 = useRef(new Animated.Value(0)).current;
  const wiggle3 = useRef(new Animated.Value(0)).current;
  const wiggle4 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Create wiggle animation for each emoji
    const createWiggle = (anim: Animated.Value, delay: number) => {
      return Animated.loop(
        Animated.sequence([
          Animated.delay(delay),
          Animated.timing(anim, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
          }),
          Animated.timing(anim, {
            toValue: -1,
            duration: 400,
            useNativeDriver: true,
          }),
          Animated.timing(anim, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
          }),
          Animated.delay(1000),
        ])
      );
    };

    // Start wiggle animations with staggered delays
    createWiggle(wiggle1, 0).start();
    createWiggle(wiggle2, 200).start();
    createWiggle(wiggle3, 400).start();
    createWiggle(wiggle4, 600).start();
  }, [wiggle1, wiggle2, wiggle3, wiggle4]);

  return (
    <View style={styles.container}>
      <LanguageSwitcher
        language={language}
        onLanguageChange={onLanguageChange}
      />

      <View style={styles.emojiContainer}>
        <Animated.Text
          style={[
            styles.emoji,
            {
              transform: [
                {
                  rotate: wiggle1.interpolate({
                    inputRange: [-1, 1],
                    outputRange: ["-8deg", "8deg"],
                  }),
                },
                {
                  translateY: wiggle1.interpolate({
                    inputRange: [-1, 0, 1],
                    outputRange: [-3, 0, -3],
                  }),
                },
              ],
            },
          ]}
        >
          🐕
        </Animated.Text>
        <Animated.Text
          style={[
            styles.emoji,
            {
              transform: [
                {
                  rotate: wiggle2.interpolate({
                    inputRange: [-1, 1],
                    outputRange: ["-8deg", "8deg"],
                  }),
                },
                {
                  translateY: wiggle2.interpolate({
                    inputRange: [-1, 0, 1],
                    outputRange: [-3, 0, -3],
                  }),
                },
              ],
            },
          ]}
        >
          🐈
        </Animated.Text>
        <Animated.Text
          style={[
            styles.emoji,
            {
              transform: [
                {
                  rotate: wiggle3.interpolate({
                    inputRange: [-1, 1],
                    outputRange: ["-8deg", "8deg"],
                  }),
                },
                {
                  translateY: wiggle3.interpolate({
                    inputRange: [-1, 0, 1],
                    outputRange: [-3, 0, -3],
                  }),
                },
              ],
            },
          ]}
        >
          🦁
        </Animated.Text>
        <Animated.Text
          style={[
            styles.emoji,
            {
              transform: [
                {
                  rotate: wiggle4.interpolate({
                    inputRange: [-1, 1],
                    outputRange: ["-8deg", "8deg"],
                  }),
                },
                {
                  translateY: wiggle4.interpolate({
                    inputRange: [-1, 0, 1],
                    outputRange: [-3, 0, -3],
                  }),
                },
              ],
            },
          ]}
        >
          🐘
        </Animated.Text>
      </View>
      <Text style={styles.title}>{t.title}</Text>
      <Text style={styles.subtitle}>{t.subtitle}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.modeButton, styles.byNameButton]}
          onPress={() => onStart("byName")}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonEmoji}>📝</Text>
          <Text style={styles.modeButtonText}>{t.byName}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.modeButton, styles.bySoundButton]}
          onPress={() => onStart("bySound")}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonEmoji}>🔊</Text>
          <Text style={styles.modeButtonText}>{t.bySound}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.background,
    padding: 20,
  },
  emojiContainer: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 20,
  },
  emoji: {
    fontSize: 60,
  },
  title: {
    fontSize: 48,
    fontFamily: FONTS.bold,
    color: COLORS.accent,
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 24,
    fontFamily: FONTS.medium,
    color: COLORS.dark,
    marginBottom: 50,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 20,
    marginTop: 20,
  },
  modeButton: {
    paddingHorizontal: 30,
    paddingVertical: 25,
    borderRadius: 20,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
    minWidth: 150,
    alignItems: "center",
  },
  byNameButton: {
    backgroundColor: COLORS.primary,
  },
  bySoundButton: {
    backgroundColor: "#FF6B6B",
  },
  buttonEmoji: {
    fontSize: 50,
    marginBottom: 8,
  },
  modeButtonText: {
    fontSize: 22,
    fontFamily: FONTS.bold,
    color: COLORS.white,
    textAlign: "center",
  },
  modeDescription: {
    fontSize: 12,
    fontFamily: FONTS.regular,
    color: COLORS.white,
    textAlign: "center",
    opacity: 0.9,
  },
});

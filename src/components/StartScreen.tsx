import { useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  ScrollView,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { COLORS } from "@/styles/colors";
import { FONTS } from "@/constants/fonts";
import { TRANSLATIONS } from "@/constants/translations";
import { LanguageSwitcher } from "@/components";
import {
  useResponsiveDimensions,
  ResponsiveDimensions,
} from "@/hooks/useResponsiveDimensions";
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
  const responsive = useResponsiveDimensions();
  const styles = getStartScreenStyles(responsive);
  const insets = useSafeAreaInsets();

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
    <View style={styles.outerContainer}>
      <ScrollView
        contentContainerStyle={[
          styles.scrollContent,
          { paddingTop: insets.top },
        ]}
        showsVerticalScrollIndicator={false}
        bounces={true}
      >
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
          {/* First row: By Name and By Sound buttons */}
          <View style={styles.buttonRow}>
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

            <TouchableOpacity
              style={[styles.modeButton, styles.showAllButton]}
              onPress={() => onStart("showAll")}
              activeOpacity={0.8}
            >
              <Text style={styles.buttonEmoji}>🖼️</Text>
              <Text style={styles.modeButtonText}>{t.showAll}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const getStartScreenStyles = (responsive: ResponsiveDimensions) =>
  StyleSheet.create({
    outerContainer: {
      flex: 1,
      backgroundColor: COLORS.background,
    },
    scrollContent: {
      flexGrow: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: COLORS.background,
      padding: responsive.isLandscape
        ? responsive.spacing.sm
        : responsive.spacing.lg,
      paddingBottom: responsive.spacing.lg,
    },
    emojiContainer: {
      flexDirection: "row",
      gap: responsive.spacing.sm,
      marginBottom: responsive.isLandscape
        ? responsive.spacing.xs
        : responsive.spacing.lg,
      flexWrap: "wrap",
      justifyContent: "center",
    },
    emoji: {
      fontSize: responsive.isLandscape
        ? 32 * responsive.compactnessFactor
        : 60 * responsive.fontScale,
    },
    title: {
      fontSize: responsive.isLandscape
        ? 24 * responsive.compactnessFactor
        : 48 * responsive.fontScale,
      fontFamily: FONTS.bold,
      color: COLORS.accent,
      marginBottom: responsive.spacing.sm,
      textAlign: "center",
    },
    subtitle: {
      fontSize: responsive.isLandscape
        ? 14 * responsive.compactnessFactor
        : 24 * responsive.fontScale,
      fontFamily: FONTS.medium,
      color: COLORS.dark,
      marginBottom: responsive.isLandscape
        ? responsive.spacing.sm
        : responsive.spacing.xl * 1.5,
      textAlign: "center",
    },
    buttonContainer: {
      flexDirection: "column",
      gap: responsive.isLandscape
        ? responsive.spacing.sm
        : responsive.spacing.md,
      marginTop: responsive.isLandscape
        ? responsive.spacing.xs
        : responsive.spacing.lg,
      alignItems: "center",
    },
    buttonRow: {
      flexDirection: "row",
      gap: responsive.isLandscape
        ? responsive.spacing.sm
        : responsive.spacing.lg,
      justifyContent: "center",
      flexWrap: "wrap",
    },
    modeButton: {
      paddingHorizontal: responsive.isLandscape
        ? 15 * responsive.compactnessFactor
        : 30,
      paddingVertical: responsive.isLandscape
        ? 12 * responsive.compactnessFactor
        : 25,
      borderRadius: 20,
      shadowColor: COLORS.black,
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.3,
      shadowRadius: 10,
      elevation: 5,
      // minWidth: responsive.isLandscape ? 110 : 150,
      maxWidth: responsive.isLandscape ? 160 : 200,
      /* width: responsive.isLandscape
        ? Math.min(160, responsive.width * 0.25)
        : Math.min(200, responsive.width * 0.4), */
      alignItems: "center",
    },
    byNameButton: {
      backgroundColor: COLORS.primary,
    },
    bySoundButton: {
      backgroundColor: "#FF6B6B",
    },
    showAllButton: {
      backgroundColor: "#9B59B6",
    },
    buttonEmoji: {
      fontSize: responsive.isLandscape
        ? 28 * responsive.compactnessFactor
        : 50 * responsive.fontScale,
      marginBottom: responsive.spacing.xs,
    },
    modeButtonText: {
      fontSize: responsive.isLandscape
        ? 14 * responsive.compactnessFactor
        : 22 * responsive.fontScale,
      fontFamily: FONTS.bold,
      color: COLORS.white,
      textAlign: "center",
    },
    modeDescription: {
      fontSize: responsive.isLandscape
        ? 10 * responsive.fontScale
        : 12 * responsive.fontScale,
      fontFamily: FONTS.regular,
      color: COLORS.white,
      textAlign: "center",
      opacity: 0.9,
    },
  });

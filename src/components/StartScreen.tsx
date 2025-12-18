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
import { HamburgerButton } from "@/components/HamburgerButton";
import {
  useResponsiveDimensions,
  ResponsiveDimensions,
} from "@/hooks/useResponsiveDimensions";
import { GameMode, Translations } from "@/types";
import { EmojiSvg } from "@/components/EmojiSvg";

interface Props {
  onStart: (mode: GameMode) => void;
  translations: Translations;
}

export const StartScreen: React.FC<Props> = ({ onStart, translations }) => {
  const t = translations.startScreen;
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
      <HamburgerButton />
      <ScrollView
        contentContainerStyle={[
          styles.scrollContent,
          { paddingTop: insets.top },
        ]}
        showsVerticalScrollIndicator={false}
        bounces={true}
      >
        <View style={styles.emojiContainer}>
          <Animated.View
            style={{
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
            }}
          >
            <EmojiSvg emoji="🐕" style={styles.emoji} />
          </Animated.View>
          <Animated.View
            style={{
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
            }}
          >
            <EmojiSvg emoji="🐈" style={styles.emoji} />
          </Animated.View>
          <Animated.View
            style={{
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
            }}
          >
            <EmojiSvg emoji="🦁" style={styles.emoji} />
          </Animated.View>
          <Animated.View
            style={{
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
            }}
          >
            <EmojiSvg emoji="🐘" style={styles.emoji} />
          </Animated.View>
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
              <EmojiSvg emoji="📝" style={styles.buttonEmoji} />
              <Text style={styles.modeButtonText}>{t.byName}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.modeButton, styles.bySoundButton]}
              onPress={() => onStart("bySound")}
              activeOpacity={0.8}
            >
              <EmojiSvg emoji="🔊" style={styles.buttonEmoji} />
              <Text style={styles.modeButtonText}>{t.bySound}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.modeButton, styles.showAllButton]}
              onPress={() => onStart("showAll")}
              activeOpacity={0.8}
            >
              <EmojiSvg emoji="🖼️" style={styles.buttonEmoji} />
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
      padding: responsive.spacing.lg,
      paddingBottom: responsive.spacing.lg,
    },
    emojiContainer: {
      flexDirection: "row",
      gap: responsive.spacing.sm,
      marginBottom: responsive.spacing.sm,
      flexWrap: "wrap",
      justifyContent: "center",
    },
    emoji: {
      fontSize: 45 * responsive.fontScale,
    },
    title: {
      fontSize: 36 * responsive.fontScale,
      fontFamily: FONTS.bold,
      color: COLORS.accent,
      marginBottom: responsive.spacing.xs,
      textAlign: "center",
    },
    subtitle: {
      fontSize: 18 * responsive.fontScale,
      fontFamily: FONTS.medium,
      color: COLORS.dark,
      marginBottom: responsive.spacing.lg,
      textAlign: "center",
    },
    buttonContainer: {
      flexDirection: "column",
      gap: responsive.spacing.sm,
      marginTop: 0,
      alignItems: "center",
    },
    buttonRow: {
      flexDirection: "row",
      gap: responsive.spacing.md,
      justifyContent: "center",
      flexWrap: "wrap",
    },
    modeButton: {
      paddingHorizontal: 20,
      paddingVertical: 16,
      borderRadius: 20,
      shadowColor: COLORS.black,
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.3,
      shadowRadius: 10,
      elevation: 5,
      maxWidth: 160,
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
      fontSize: 40 * responsive.fontScale,
      marginBottom: responsive.spacing.xs,
    },
    modeButtonText: {
      fontSize: 18 * responsive.fontScale,
      fontFamily: FONTS.bold,
      color: COLORS.white,
      textAlign: "center",
    },
    modeDescription: {
      fontSize: 12 * responsive.fontScale,
      fontFamily: FONTS.regular,
      color: COLORS.white,
      textAlign: "center",
      opacity: 0.9,
    },
  });

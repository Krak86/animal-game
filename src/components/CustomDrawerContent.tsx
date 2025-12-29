import { View, Text, TouchableOpacity, StyleSheet, Alert, BackHandler, Platform } from "react-native";
import {
  DrawerContentScrollView,
  DrawerContentComponentProps,
} from "@react-navigation/drawer";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useState } from "react";
import * as Haptics from "expo-haptics";

import { SoundToggle } from "./SoundToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { EmojiSvg } from "./EmojiSvg";
import { PrivacyPolicyModal } from "./PrivacyPolicyModal";
import { COLORS } from "@/styles/colors";
import { FONTS } from "@/constants/fonts";
import {
  useResponsiveDimensions,
  ResponsiveDimensions,
} from "@/hooks/useResponsiveDimensions";
import { Language, Translations, GameMode } from "@/types";

interface CustomDrawerProps extends DrawerContentComponentProps {
  isSoundEnabled: boolean;
  onToggleSound: () => void;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onHomePress: () => Promise<void>;
  onModeSwitch: (mode: GameMode) => Promise<void>;
  currentGameMode: GameMode | null;
  isFullScreen: boolean;
  onToggleFullScreen: () => void;
  translations: Translations;
}

export const CustomDrawerContent: React.FC<CustomDrawerProps> = ({
  isSoundEnabled,
  onToggleSound,
  language,
  onLanguageChange,
  onHomePress,
  onModeSwitch,
  currentGameMode,
  isFullScreen,
  onToggleFullScreen,
  translations,
  navigation,
}) => {
  const responsive = useResponsiveDimensions();
  const insets = useSafeAreaInsets();
  const styles = getDrawerStyles(responsive);
  const [isPrivacyPolicyVisible, setIsPrivacyPolicyVisible] = useState(false);

  const handleHomePress = async () => {
    await onHomePress();
    navigation.closeDrawer();
  };

  const handleModeSwitch = async (mode: GameMode) => {
    await onModeSwitch(mode);
    navigation.closeDrawer();
  };

  const handleExitApp = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    Alert.alert(
      translations.exitApp,
      translations.exitAppMessage,
      [
        {
          text: translations.cancel,
          style: "cancel",
        },
        {
          text: translations.continue,
          style: "destructive",
          onPress: () => BackHandler.exitApp(),
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <DrawerContentScrollView
      style={styles.container}
      contentContainerStyle={[
        styles.contentContainer,
        { paddingTop: insets.top },
      ]}
    >
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{translations.menu}</Text>
      </View>

      {/* Menu Items */}
      <View style={styles.menuSection}>
        {/* Home Button */}
        <TouchableOpacity
          style={styles.menuItem}
          onPress={handleHomePress}
          activeOpacity={0.7}
        >
          <View style={styles.menuItemContent}>
            <EmojiSvg emoji="🏠" style={styles.menuItemEmoji} />
            <Text style={styles.menuItemText}>
              {translations.startFromBeginning}
            </Text>
          </View>
        </TouchableOpacity>

        {/* Font Test Button - Development only */}
        {/* {__DEV__ && (
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              navigation.navigate("FontTest");
              navigation.closeDrawer();
            }}
            activeOpacity={0.7}
          >
            <View style={styles.menuItemContent}>
              <Text style={styles.menuItemText}>Font Test (Dev Only)</Text>
            </View>
          </TouchableOpacity>
        )}
 */}
        {/* Game Mode Section */}
        <View style={styles.gameModeSection}>
          <Text style={styles.sectionLabel}>
            {translations.gameMode || "Game Mode"}
          </Text>

          {/* By Name Button */}
          <TouchableOpacity
            style={[
              styles.menuItemContent,
              styles.gameModeButton,
              currentGameMode === "byName" && styles.activeGameMode,
            ]}
            onPress={() => handleModeSwitch("byName")}
            activeOpacity={0.7}
          >
            <EmojiSvg emoji="📝" style={styles.menuItemEmoji} />
            <Text style={styles.menuItemText}>
              {translations.startScreen.byName}
            </Text>
          </TouchableOpacity>

          {/* By Sound Button */}
          <TouchableOpacity
            style={[
              styles.menuItemContent,
              styles.gameModeButton,
              currentGameMode === "bySound" && styles.activeGameMode,
            ]}
            onPress={() => handleModeSwitch("bySound")}
            activeOpacity={0.7}
          >
            <EmojiSvg emoji="🔊" style={styles.menuItemEmoji} />
            <Text style={styles.menuItemText}>
              {translations.startScreen.bySound}
            </Text>
          </TouchableOpacity>

          {/* Animal Pairs Button */}
          <TouchableOpacity
            style={[
              styles.menuItemContent,
              styles.gameModeButton,
              currentGameMode === "animalPairs" && styles.activeGameMode,
            ]}
            onPress={() => handleModeSwitch("animalPairs")}
            activeOpacity={0.7}
          >
            <EmojiSvg emoji="🎯" style={styles.menuItemEmoji} />
            <Text style={styles.menuItemText}>
              {translations.startScreen.animalPairs}
            </Text>
          </TouchableOpacity>

          {/* Show All Button */}
          <TouchableOpacity
            style={[
              styles.menuItemContent,
              styles.gameModeButton,
              currentGameMode === "showAll" && styles.activeGameMode,
            ]}
            onPress={() => handleModeSwitch("showAll")}
            activeOpacity={0.7}
          >
            <EmojiSvg emoji="🖼️" style={styles.menuItemEmoji} />
            <Text style={styles.menuItemText}>
              {translations.startScreen.showAll}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Sound Toggle Section */}
        <View style={styles.menuItem}>
          <Text style={styles.sectionLabel}>{translations.sound}</Text>
          <View style={styles.soundToggleContainer}>
            <SoundToggle
              isSoundEnabled={isSoundEnabled}
              onToggle={onToggleSound}
              variant="inline"
            />
          </View>
        </View>

        {/* Language Switcher Section */}
        <View style={styles.menuItem}>
          <Text style={styles.sectionLabel}>{translations.language}</Text>
          <LanguageSwitcher
            language={language}
            onLanguageChange={onLanguageChange}
          />
        </View>

        {/* Full Screen Toggle Section */}
        {Platform.OS !== 'web' && (
          <View style={styles.menuItem}>
            <TouchableOpacity
              style={[
                styles.menuItemContent,
                styles.fullScreenButton,
                isFullScreen && styles.fullScreenActive,
              ]}
              onPress={onToggleFullScreen}
              activeOpacity={0.7}
            >
              <Text style={styles.menuItemEmoji}>⛶</Text>

              <Text style={styles.menuItemText}>
                {isFullScreen
                  ? translations.exitFullScreen
                  : translations.enterFullScreen}
              </Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Privacy Policy Button */}
        <View style={styles.menuItem}>
          <TouchableOpacity
            style={[styles.menuItemContent, styles.privacyButton]}
            onPress={() => setIsPrivacyPolicyVisible(true)}
            activeOpacity={0.7}
          >
            <EmojiSvg emoji="📄" style={styles.menuItemEmoji} />
            <Text style={styles.menuItemText} numberOfLines={2}>
              {translations.privacyPolicy}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Exit App Button */}
        {Platform.OS !== 'web' && (
          <View style={styles.menuItem}>
            <TouchableOpacity
              style={[styles.menuItemContent, styles.exitButton]}
              onPress={handleExitApp}
              activeOpacity={0.7}
            >
              <Text style={styles.menuItemEmoji}>🚪</Text>
              <Text style={styles.menuItemText}>{translations.exitApp}</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      {/* Privacy Policy Modal */}
      <PrivacyPolicyModal
        visible={isPrivacyPolicyVisible}
        onClose={() => setIsPrivacyPolicyVisible(false)}
        language={language}
      />
    </DrawerContentScrollView>
  );
};

const getDrawerStyles = (responsive: ResponsiveDimensions) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.background,
    },
    contentContainer: {
      flexGrow: 1,
      paddingHorizontal: responsive.spacing.md,
    },
    header: {
      alignItems: "center",
      paddingVertical: 10,
      borderBottomWidth: 2,
      borderBottomColor: COLORS.lightGray,
      marginBottom: 10,
    },
    headerEmoji: {
      fontSize: 48 * responsive.fontScale,
      marginBottom: responsive.spacing.sm,
    },
    headerTitle: {
      fontSize: 24 * responsive.fontScale,
      fontFamily: FONTS.bold,
      color: COLORS.dark,
    },
    menuSection: {
      flex: 1,
      gap: 10,
    },
    menuItem: {
      paddingVertical: 1, // responsive.spacing.sm,
    },
    menuItemContent: {
      flexDirection: "row",
      alignItems: "center",
      gap: responsive.spacing.sm,
      backgroundColor: COLORS.secondary,
      paddingHorizontal: 20,
      paddingVertical: 12,
      borderRadius: 20,
      shadowColor: COLORS.black,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 2,
    },
    menuItemEmoji: {
      fontSize: 20 * responsive.fontScale,
    },
    menuItemText: {
      fontSize: 16 * responsive.fontScale,
      fontFamily: FONTS.semiBold,
      color: COLORS.dark,
      flex: 1,
    },
    sectionLabel: {
      fontSize: 14 * responsive.fontScale,
      fontFamily: FONTS.semiBold,
      color: COLORS.gray,
      marginBottom: responsive.spacing.sm,
    },
    soundToggleContainer: {
      alignItems: "flex-start",
    },
    gameModeSection: {
      gap: responsive.spacing.sm,
      paddingBottom: responsive.spacing.md,
      borderBottomWidth: 1,
      borderBottomColor: COLORS.lightGray,
      marginBottom: responsive.spacing.md,
    },
    gameModeButton: {
      paddingVertical: 10,
    },
    activeGameMode: {
      backgroundColor: COLORS.primary,
      borderWidth: 2,
      borderColor: COLORS.accent,
    },
    fullScreenButton: {
      backgroundColor: "#FF8C00",
      paddingHorizontal: 16,
      paddingVertical: 10,
      borderRadius: 24,
      borderWidth: 2,
      borderColor: "#FF8C00",
      shadowColor: COLORS.black,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 6,
      elevation: 4,
    },
    fullScreenActive: {
      backgroundColor: "#32CD32",
      borderColor: "#228B22",
    },
    privacyButton: {
      backgroundColor: "#9370DB",
      borderWidth: 2,
      borderColor: "#8A2BE2",
    },
    exitButton: {
      backgroundColor: "#DC143C",
      borderColor: "#B22222",
      borderWidth: 2,
    },
  });

import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import { COLORS } from "../styles/colors";
import { TRANSLATIONS } from "../constants/translations";
import { LanguageSwitcher } from "../components";

export const StartScreen = ({ onStart, language, onLanguageChange }) => {
  const t = TRANSLATIONS[language]?.startScreen || TRANSLATIONS.uk.startScreen;

  return (
    <View style={styles.container}>
      <LanguageSwitcher
        language={language}
        onLanguageChange={onLanguageChange}
      />

      <Text style={styles.emoji}>🐕🐈🦁🐘</Text>
      <Text style={styles.title}>{t.title}</Text>
      <Text style={styles.subtitle}>{t.subtitle}</Text>

      <TouchableOpacity
        style={styles.startButton}
        onPress={onStart}
        activeOpacity={0.8}
      >
        <Text style={styles.startButtonText}>{t.start}</Text>
      </TouchableOpacity>
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
  emoji: {
    fontSize: 60,
    marginBottom: 20,
  },
  title: {
    fontSize: 48,
    fontWeight: "bold",
    color: COLORS.accent,
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 24,
    color: COLORS.dark,
    marginBottom: 50,
    textAlign: "center",
  },
  startButton: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 50,
    paddingVertical: 20,
    borderRadius: 30,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  startButtonText: {
    fontSize: 28,
    fontWeight: "bold",
    color: COLORS.white,
    textAlign: "center",
  },
});

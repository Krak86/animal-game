import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import { COLORS } from "@/styles/colors";
import { TRANSLATIONS } from "@/constants/translations";
import { LanguageSwitcher } from "@/components";
import { Language, GameMode } from "@/types";

interface Props {
  onStart: (mode: GameMode) => void;
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export const StartScreen: React.FC<Props> = ({ onStart, language, onLanguageChange }) => {
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

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.modeButton, styles.byNameButton]}
          onPress={() => onStart('byName')}
          activeOpacity={0.8}
        >
          <Text style={styles.modeButtonText}>{t.byName}</Text>
          <Text style={styles.modeDescription}>Find by name</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.modeButton, styles.bySoundButton]}
          onPress={() => onStart('bySound')}
          activeOpacity={0.8}
        >
          <Text style={styles.modeButtonText}>{t.bySound}</Text>
          <Text style={styles.modeDescription}>Find by sound</Text>
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
  modeButtonText: {
    fontSize: 22,
    fontWeight: "bold",
    color: COLORS.white,
    textAlign: "center",
    marginBottom: 5,
  },
  modeDescription: {
    fontSize: 12,
    color: COLORS.white,
    textAlign: "center",
    opacity: 0.9,
  },
});

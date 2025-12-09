import { View, TouchableOpacity, Text } from "react-native";
import { languageSwitcherStyles as styles } from "../styles/componentStyles";

export const LanguageSwitcher = ({ language, onLanguageChange }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, language === "en" && styles.buttonActive]}
        onPress={() => onLanguageChange("en")}
      >
        <Text style={styles.flagEmoji}>🇬🇧</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, language === "uk" && styles.buttonActive]}
        onPress={() => onLanguageChange("uk")}
      >
        <Text style={styles.flagEmoji}>🇺🇦</Text>
      </TouchableOpacity>
    </View>
  );
};

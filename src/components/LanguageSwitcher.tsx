import { View, TouchableOpacity, Text } from "react-native";

import { getLanguageSwitcherStyles } from "@/styles/componentStyles";
import { useResponsiveDimensions } from "@/hooks/useResponsiveDimensions";
import { Language } from "@/types";

interface Props {
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export const LanguageSwitcher: React.FC<Props> = ({
  language,
  onLanguageChange,
}) => {
  const responsive = useResponsiveDimensions();
  const styles = getLanguageSwitcherStyles(responsive);

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

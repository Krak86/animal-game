import { View, TouchableOpacity, Text, Animated } from "react-native";

import { getLanguageSwitcherStyles } from "@/styles/componentStyles";
import { useResponsiveDimensions } from "@/hooks/useResponsiveDimensions";
import { Language } from "@/types";
import { useHoverEffect } from "@/hooks/useHoverEffect";
import { COLORS } from "@/styles/colors";

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

  const hoverEN = useHoverEffect({
    baseColor: language === "en" ? COLORS.primaryLight : COLORS.white,
  });

  const hoverUK = useHoverEffect({
    baseColor: language === "uk" ? COLORS.primaryLight : COLORS.white,
  });

  const hoverRU = useHoverEffect({
    baseColor: language === "ru" ? COLORS.primaryLight : COLORS.white,
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.button, language === "en" && styles.buttonActive, { backgroundColor: hoverEN.backgroundColor }, hoverEN.cursorStyle]}>
        <TouchableOpacity
          style={styles.buttonInner}
          onPress={() => onLanguageChange("en")}
          {...hoverEN.handlers}
        >
          <Text style={styles.languageText}>EN</Text>
        </TouchableOpacity>
      </Animated.View>

      <Animated.View style={[styles.button, language === "uk" && styles.buttonActive, { backgroundColor: hoverUK.backgroundColor }, hoverUK.cursorStyle]}>
        <TouchableOpacity
          style={styles.buttonInner}
          onPress={() => onLanguageChange("uk")}
          {...hoverUK.handlers}
        >
          <Text style={styles.languageText}>УКР</Text>
        </TouchableOpacity>
      </Animated.View>

      <Animated.View style={[styles.button, language === "ru" && styles.buttonActive, { backgroundColor: hoverRU.backgroundColor }, hoverRU.cursorStyle]}>
        <TouchableOpacity
          style={styles.buttonInner}
          onPress={() => onLanguageChange("ru")}
          {...hoverRU.handlers}
        >
          <Text style={styles.languageText}>РУ</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

import { TouchableOpacity, Text, StyleSheet } from "react-native";

import { COLORS } from "@/styles/colors";
import { useResponsiveDimensions, ResponsiveDimensions } from "@/hooks/useResponsiveDimensions";
import { EmojiSvg } from "@/components/EmojiSvg";

interface Props {
  isSoundEnabled: boolean;
  onToggle: () => void;
}

export const SoundToggle: React.FC<Props> = ({ isSoundEnabled, onToggle }) => {
  const responsive = useResponsiveDimensions();
  const styles = getSoundToggleStyles(responsive);

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onToggle}
      activeOpacity={0.7}
    >
      <EmojiSvg emoji={isSoundEnabled ? "🔊" : "🔇"} style={styles.icon} />
    </TouchableOpacity>
  );
};

const getSoundToggleStyles = (responsive: ResponsiveDimensions) => {
  const buttonSize = Math.max(45, Math.min(60, responsive.width * 0.12));

  return StyleSheet.create({
    button: {
      position: "absolute",
      top: responsive.spacing.lg,
      right: responsive.spacing.lg,
      backgroundColor: COLORS.white,
      borderRadius: buttonSize / 2,
      width: buttonSize,
      height: buttonSize,
      justifyContent: "center",
      alignItems: "center",
      shadowColor: COLORS.black,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 3,
      zIndex: 100,
    },
    icon: {
      fontSize: 24 * responsive.fontScale,
    },
  });
};

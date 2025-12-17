import { TouchableOpacity, Text, StyleSheet } from "react-native";

import { COLORS } from "@/styles/colors";
import { useResponsiveDimensions, ResponsiveDimensions } from "@/hooks/useResponsiveDimensions";
import { EmojiSvg } from "@/components/EmojiSvg";

interface Props {
  isSoundEnabled: boolean;
  onToggle: () => void;
  variant?: 'floating' | 'inline';
}

export const SoundToggle: React.FC<Props> = ({ isSoundEnabled, onToggle, variant = 'floating' }) => {
  const responsive = useResponsiveDimensions();
  const styles = getSoundToggleStyles(responsive, variant);

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

const getSoundToggleStyles = (responsive: ResponsiveDimensions, variant: 'floating' | 'inline') => {
  const buttonSize = Math.max(45, Math.min(60, responsive.width * 0.12));

  const baseButtonStyles = {
    backgroundColor: COLORS.white,
    borderRadius: buttonSize / 2,
    width: buttonSize,
    height: buttonSize,
    justifyContent: "center" as const,
    alignItems: "center" as const,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  };

  const floatingStyles = variant === 'floating' ? {
    position: "absolute" as const,
    top: responsive.spacing.lg,
    right: responsive.spacing.lg,
    zIndex: 100,
  } : {};

  return StyleSheet.create({
    button: {
      ...baseButtonStyles,
      ...floatingStyles,
    },
    icon: {
      fontSize: 24 * responsive.fontScale,
    },
  });
};

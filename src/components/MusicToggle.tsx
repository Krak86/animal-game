import { TouchableOpacity, StyleSheet } from "react-native";

import { COLORS } from "@/styles/colors";
import { useResponsiveDimensions, ResponsiveDimensions } from "@/hooks/useResponsiveDimensions";
import { EmojiSvg } from "@/components/EmojiSvg";

interface Props {
  isMusicEnabled: boolean;
  onToggle: () => void;
  variant?: 'floating' | 'inline';
  isDisabled?: boolean;
}

export const MusicToggle: React.FC<Props> = ({ isMusicEnabled, onToggle, variant = 'floating', isDisabled = false }) => {
  const responsive = useResponsiveDimensions();
  const styles = getMusicToggleStyles(responsive, variant, isDisabled);

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onToggle}
      activeOpacity={isDisabled ? 1 : 0.7}
      disabled={isDisabled}
    >
      <EmojiSvg emoji={isMusicEnabled ? "🎵" : "🔇"} style={styles.icon} />
    </TouchableOpacity>
  );
};

const getMusicToggleStyles = (responsive: ResponsiveDimensions, variant: 'floating' | 'inline', isDisabled: boolean = false) => {
  const buttonSize = Math.max(45, Math.min(60, responsive.width * 0.12));

  const baseButtonStyles = {
    backgroundColor: isDisabled ? COLORS.lightGray : COLORS.white,
    borderRadius: buttonSize / 2,
    width: buttonSize,
    height: buttonSize,
    justifyContent: "center" as const,
    alignItems: "center" as const,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: isDisabled ? 0.05 : 0.2,
    shadowRadius: 4,
    elevation: isDisabled ? 0 : 3,
    opacity: isDisabled ? 0.6 : 1,
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
      opacity: isDisabled ? 0.5 : 1,
    },
  });
};

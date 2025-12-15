import { Animated, Text } from "react-native";

import { getSuccessOverlayStyles } from "@/styles/componentStyles";
import { useResponsiveDimensions } from "@/hooks/useResponsiveDimensions";
import { Translations } from "@/types";
import { EmojiSvg } from "@/components/EmojiSvg";

interface Props {
  visible: boolean;
  translations: Translations;
  successScale: Animated.Value;
  successOpacity: Animated.Value;
}

export const SuccessOverlay: React.FC<Props> = ({
  visible,
  translations,
  successScale,
  successOpacity,
}) => {
  const responsive = useResponsiveDimensions();
  const styles = getSuccessOverlayStyles(responsive);

  if (!visible) return null;

  return (
    <Animated.View
      style={[
        styles.overlay,
        {
          opacity: successOpacity,
        },
      ]}
    >
      <Animated.View
        style={[
          styles.box,
          {
            transform: [{ scale: successScale }],
          },
        ]}
      >
        <EmojiSvg emoji="🎉" style={styles.emoji} />
        <Text style={styles.text}>{translations.greatJob}</Text>
        <Text style={styles.subtext}>{translations.youFoundIt}</Text>
      </Animated.View>
    </Animated.View>
  );
};

import { Animated, Text } from "react-native";

import { successOverlayStyles as styles } from "@/styles/componentStyles";
import { Translations } from "@/types";

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
        <Text style={styles.emoji}>🎉</Text>
        <Text style={styles.text}>{translations.greatJob}</Text>
        <Text style={styles.subtext}>{translations.youFoundIt}</Text>
      </Animated.View>
    </Animated.View>
  );
};

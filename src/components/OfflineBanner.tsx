import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";
import { EmojiSvg } from "@/components/EmojiSvg";
import { COLORS } from "@/styles/colors";
import { useResponsiveDimensions } from "@/hooks/useResponsiveDimensions";
import { useHoverEffect } from "@/hooks/useHoverEffect";
import { Translations } from "@/types";

interface OfflineBannerProps {
  translations?: Translations;
}

export const OfflineBanner: React.FC<OfflineBannerProps> = ({
  translations,
}) => {
  const message = translations?.offlineBannerTitle;
  const subMessage = translations?.offlineBannerMessage;
  const [isDismissed, setIsDismissed] = useState(false);
  const responsive = useResponsiveDimensions();

  const hoverClose = useHoverEffect({
    baseColor: "transparent",
    hoverColor: "rgba(0, 0, 0, 0.1)",
    duration: 150,
  });

  if (isDismissed) {
    return null;
  }

  return (
    <View style={[styles.container, { padding: responsive.spacing.md }]}>
      <View style={styles.contentContainer}>
        <EmojiSvg emoji="📡" style={styles.icon} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{message}</Text>
          <Text style={styles.subtitle}>{subMessage}</Text>
        </View>
        <Animated.View
          style={[
            { backgroundColor: hoverClose.backgroundColor },
            hoverClose.cursorStyle,
          ]}
        >
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setIsDismissed(true)}
            activeOpacity={0.7}
            {...hoverClose.handlers}
          >
            <Text style={styles.closeText}>✕</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFC107", // Amber warning color
    borderRadius: 8,
    marginBottom: 12,
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    fontSize: 24,
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.black,
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 12,
    color: COLORS.black,
    opacity: 0.8,
  },
  closeButton: {
    padding: 8,
    marginLeft: 8,
  },
  closeText: {
    fontSize: 20,
    color: COLORS.black,
    fontWeight: "600",
  },
});

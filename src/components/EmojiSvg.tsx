import React from "react";
import { View, StyleSheet, StyleProp, TextStyle } from "react-native";
import { getEmojiSvg } from "@/constants/emojiMap";

interface EmojiSvgProps {
  emoji: string;
  style?: StyleProp<TextStyle>; // Accept Text styles for compatibility
}

/**
 * EmojiSvg Component
 *
 * Renders emoji as SVG using Twemoji assets for consistent cross-platform appearance
 *
 * @param emoji - The emoji character to render (e.g., "🐕")
 * @param style - Style object (uses fontSize for sizing)
 *
 * @example
 * <EmojiSvg emoji="🐕" style={{ fontSize: 48 }} />
 *
 * @example with animation wrapper
 * <Animated.View style={{ transform: [...] }}>
 *   <EmojiSvg emoji={animal.emoji} style={styles.emoji} />
 * </Animated.View>
 */
export const EmojiSvg: React.FC<EmojiSvgProps> = ({ emoji, style }) => {
  // Flatten style to extract fontSize
  const flatStyle = StyleSheet.flatten(style || {});
  const size = flatStyle.fontSize || 24;

  // Get SVG module from mapping (with svg-transformer, require() returns a module object)
  const SvgModule = getEmojiSvg(emoji);
  // Handle both default export and direct export
  const SvgComponent = SvgModule?.default || SvgModule;

  if (!SvgComponent) {
    // Fallback: render nothing if SVG not found
    console.warn(`No SVG found for emoji: ${emoji}`);
    return null;
  }

  return (
    <View
      style={{
        width: size,
        height: size,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SvgComponent width={size} height={size} />
    </View>
  );
};

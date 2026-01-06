import { useState, useRef, useEffect } from 'react';
import { Platform, Animated } from 'react-native';

export interface HoverEffectConfig {
  baseColor: string;
  hoverColor?: string; // If not provided, auto-darken baseColor
  duration?: number;   // Animation duration (default: 150ms)
  disabled?: boolean;  // Disable hover when button is disabled
}

export function useHoverEffect(config: HoverEffectConfig) {
  const { baseColor, hoverColor, duration = 150, disabled = false } = config;

  const [isHovered, setIsHovered] = useState(false);
  const hoverAnim = useRef(new Animated.Value(0)).current;

  // Calculate hover color if not provided (darken by 10%)
  const calculatedHoverColor = hoverColor || darkenColor(baseColor, 0.1);

  // Animate on hover state change
  useEffect(() => {
    if (Platform.OS !== 'web' || disabled) return;

    Animated.timing(hoverAnim, {
      toValue: isHovered ? 1 : 0,
      duration,
      useNativeDriver: false, // Can't use native driver for backgroundColor
    }).start();
  }, [isHovered, disabled, duration, hoverAnim]);

  // Interpolate background color
  const backgroundColor = hoverAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [baseColor, calculatedHoverColor],
  });

  // Mouse event handlers (only for web)
  const handlers = Platform.OS === 'web' ? {
    onMouseEnter: () => !disabled && setIsHovered(true),
    onMouseLeave: () => !disabled && setIsHovered(false),
  } : {};

  // Cursor style (only for web)
  const cursorStyle = Platform.OS === 'web' && !disabled ? {
    cursor: 'pointer' as const,
  } : {};

  return {
    backgroundColor,
    handlers,
    cursorStyle,
    isHovered,
  };
}

// Utility: Darken a hex color by a percentage
function darkenColor(color: string, percent: number): string {
  // Remove # if present
  let hex = color.replace('#', '');

  // Expand 3-character hex to 6-character hex (e.g., 'fff' -> 'ffffff')
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }

  // Parse RGB
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Darken each channel
  const newR = Math.max(0, Math.floor(r * (1 - percent)));
  const newG = Math.max(0, Math.floor(g * (1 - percent)));
  const newB = Math.max(0, Math.floor(b * (1 - percent)));

  // Convert back to hex
  const toHex = (n: number) => n.toString(16).padStart(2, '0');
  return `#${toHex(newR)}${toHex(newG)}${toHex(newB)}`;
}

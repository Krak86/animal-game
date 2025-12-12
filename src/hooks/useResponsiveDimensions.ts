import { useWindowDimensions } from 'react-native';

export interface ResponsiveDimensions {
  width: number;
  height: number;
  isPortrait: boolean;
  isLandscape: boolean;
  columnCount: number;
  cardSize: number;
  fontScale: number;
  spacing: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
}

const HORIZONTAL_PADDING = 10;
const CARD_GAP = 10;
const BASE_SCREEN_WIDTH = 375; // iPhone SE reference

export const useResponsiveDimensions = (): ResponsiveDimensions => {
  const { width, height } = useWindowDimensions();

  const isPortrait = height > width;
  const isLandscape = width > height;

  // Determine number of columns based on orientation and screen width
  const columnCount = (() => {
    if (isPortrait) {
      return width < 360 ? 2 : 3; // 2 columns for very small screens, 3 for normal
    } else {
      // Landscape mode
      if (width < 600) return 3;      // Small phones in landscape
      if (width < 900) return 4;      // Larger phones/small tablets
      return 5;                        // Tablets in landscape
    }
  })();

  // Calculate card size based on available space
  const totalHorizontalPadding = HORIZONTAL_PADDING * 2;
  const totalGaps = CARD_GAP * (columnCount - 1);
  const availableWidth = width - totalHorizontalPadding - totalGaps;
  const cardSize = Math.floor(availableWidth / columnCount);

  // Font scaling based on screen width (relative to base width)
  const fontScale = Math.max(0.85, Math.min(1.3, width / BASE_SCREEN_WIDTH));

  // Responsive spacing values
  const spacing = {
    xs: Math.round(4 * fontScale),
    sm: Math.round(8 * fontScale),
    md: Math.round(16 * fontScale),
    lg: Math.round(24 * fontScale),
    xl: Math.round(32 * fontScale),
  };

  return {
    width,
    height,
    isPortrait,
    isLandscape,
    columnCount,
    cardSize,
    fontScale,
    spacing,
  };
};

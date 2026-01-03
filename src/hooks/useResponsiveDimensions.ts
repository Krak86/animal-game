import { useWindowDimensions } from "react-native";

export interface ResponsiveDimensions {
  width: number;
  height: number;
  isPortrait: boolean;
  isLandscape: boolean;
  columnCount: number;
  cardSize: number;
  fontScale: number;
  heightScale: number;
  compactnessFactor: number;
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
const BASE_SCREEN_HEIGHT = 667; // iPhone SE height reference

export const useResponsiveDimensions = (): ResponsiveDimensions => {
  const { width, height } = useWindowDimensions();

  const isPortrait = height > width;
  const isLandscape = width > height;

  // Effective content width (limited by max-width: 1440px)
  const effectiveWidth = Math.min(width, 1440);

  // Determine number of columns based on orientation and effective content width
  // Maximum 3 columns to maintain better visibility
  const columnCount = (() => {
    if (isPortrait) {
      return effectiveWidth < 500 ? 2 : 3; // 2 columns for very small screens, 3 for normal
    } else {
      // Landscape mode - capped at 3 columns maximum
      if (effectiveWidth < 600) return 3; // Small phones in landscape
      return 3; // All other landscape screens (max 3 columns)
    }
  })();

  // Calculate card size based on available space (using effective width)
  const totalHorizontalPadding = HORIZONTAL_PADDING * 2;
  const totalGaps = CARD_GAP * (columnCount - 1);
  const availableWidth = effectiveWidth - totalHorizontalPadding - totalGaps;
  const cardSize = Math.floor(availableWidth / columnCount);

  // Font scaling based on screen width (relative to base width)
  const fontScale = Math.max(0.85, Math.min(1.3, width / BASE_SCREEN_WIDTH));

  // Height scaling based on vertical space (relative to base height)
  const heightScale = Math.max(0.7, Math.min(1.2, height / BASE_SCREEN_HEIGHT));

  // Compactness factor: more aggressive scaling when both dimensions are constrained
  // This helps fit content on small landscape screens
  const compactnessFactor = (() => {
    // Very constrained (small phone landscape)
    if (height < 400) return 0.65;
    if (height < 500) return 0.75;
    if (height < 600) return 0.85;

    // Use normal scaling
    return Math.min(fontScale, heightScale);
  })();

  // Responsive spacing values (use compactnessFactor in landscape for tighter spacing)
  const spacing = {
    xs: Math.round(4 * (isLandscape ? compactnessFactor : fontScale)),
    sm: Math.round(8 * (isLandscape ? compactnessFactor : fontScale)),
    md: Math.round(16 * (isLandscape ? compactnessFactor : fontScale)),
    lg: Math.round(24 * (isLandscape ? compactnessFactor : fontScale)),
    xl: Math.round(32 * (isLandscape ? compactnessFactor : fontScale)),
  };

  return {
    width,
    height,
    isPortrait,
    isLandscape,
    columnCount,
    cardSize,
    fontScale,
    heightScale,
    compactnessFactor,
    spacing,
  };
};

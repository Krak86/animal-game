import React, { useState, useEffect } from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

interface ZoomableImageProps {
  uri: string;
  width: number;
  height: number;
  accessibilityLabel?: string;
}

export const ZoomableImage: React.FC<ZoomableImageProps> = ({
  uri,
  width,
  height,
  accessibilityLabel,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const scale = useSharedValue(1);
  const savedScale = useSharedValue(1);

  // Reset loading state when URI changes
  useEffect(() => {
    setIsLoading(true);
    setHasError(false);
  }, [uri]);

  const pinchGesture = Gesture.Pinch()
    .onUpdate((e) => {
      scale.value = savedScale.value * e.scale;
    })
    .onEnd(() => {
      if (scale.value < 1) {
        scale.value = withTiming(1);
        savedScale.value = 1;
      } else {
        savedScale.value = scale.value;
      }
    });

  const doubleTapGesture = Gesture.Tap()
    .numberOfTaps(2)
    .onEnd(() => {
      if (scale.value > 1.5) {
        // If already zoomed, reset to 1x
        scale.value = withTiming(1);
        savedScale.value = 1;
      } else {
        // Zoom to 2x
        scale.value = withTiming(2);
        savedScale.value = 2;
      }
    });

  const composedGesture = Gesture.Simultaneous(pinchGesture, doubleTapGesture);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <View style={[styles.container, { width, height }]}>
      {isLoading && !hasError && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#FF6B35" />
        </View>
      )}
      {hasError && (
        <View style={styles.errorContainer}>
          <ActivityIndicator size="large" color="#999" />
        </View>
      )}
      <GestureDetector gesture={composedGesture}>
        <Animated.Image
          source={{ uri }}
          style={[{ width, height }, animatedStyle, hasError && styles.hidden]}
          resizeMode="contain"
          accessibilityLabel={accessibilityLabel}
          onLoad={() => {
            setIsLoading(false);
            setHasError(false);
          }}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
        />
      </GestureDetector>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  loadingContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  errorContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    zIndex: 1,
  },
  hidden: {
    opacity: 0,
  },
});

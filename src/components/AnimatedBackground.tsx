import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Animated, Platform } from "react-native";
import { useResponsiveDimensions } from "@/hooks/useResponsiveDimensions";

export const AnimatedBackground: React.FC = () => {
  const responsive = useResponsiveDimensions();

  const blob1 = useRef(new Animated.Value(0)).current;
  const blob2 = useRef(new Animated.Value(0)).current;
  const blob3 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const nativeDriver = Platform.OS !== "web";

    const loopBlob = (
      anim: Animated.Value,
      duration: number,
      delay: number
    ) => {
      return Animated.loop(
        Animated.sequence([
          Animated.delay(delay),
          Animated.timing(anim, {
            toValue: 1,
            duration,
            useNativeDriver: nativeDriver,
          }),
          Animated.timing(anim, {
            toValue: 0,
            duration,
            useNativeDriver: nativeDriver,
          }),
        ])
      );
    };

    loopBlob(blob1, 11000, 0).start();
    loopBlob(blob2, 13000, 600).start();
    loopBlob(blob3, 15000, 1200).start();
  }, [blob1, blob2, blob3]);

  const blob1Style = {
    transform: [
      {
        translateX: blob1.interpolate({
          inputRange: [0, 1],
          outputRange: [-responsive.width * 0.06, responsive.width * 0.06],
        }),
      },
      {
        translateY: blob1.interpolate({
          inputRange: [0, 1],
          outputRange: [-responsive.height * 0.03, responsive.height * 0.03],
        }),
      },
      {
        scale: blob1.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 1.08],
        }),
      },
    ],
    opacity: blob1.interpolate({
      inputRange: [0, 1],
      outputRange: [0.22, 0.32],
    }),
  } as any;

  const blob2Style = {
    transform: [
      {
        translateX: blob2.interpolate({
          inputRange: [0, 1],
          outputRange: [responsive.width * 0.05, -responsive.width * 0.05],
        }),
      },
      {
        translateY: blob2.interpolate({
          inputRange: [0, 1],
          outputRange: [responsive.height * 0.04, -responsive.height * 0.04],
        }),
      },
      {
        scale: blob2.interpolate({ inputRange: [0, 1], outputRange: [1, 1.1] }),
      },
    ],
    opacity: blob2.interpolate({
      inputRange: [0, 1],
      outputRange: [0.18, 0.28],
    }),
  } as any;

  const blob3Style = {
    transform: [
      {
        translateX: blob3.interpolate({
          inputRange: [0, 1],
          outputRange: [-responsive.width * 0.04, responsive.width * 0.04],
        }),
      },
      {
        translateY: blob3.interpolate({
          inputRange: [0, 1],
          outputRange: [responsive.height * 0.02, -responsive.height * 0.02],
        }),
      },
      {
        scale: blob3.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 1.06],
        }),
      },
    ],
    opacity: blob3.interpolate({
      inputRange: [0, 1],
      outputRange: [0.12, 0.22],
    }),
  } as any;

  const styles = getAnimatedBackgroundStyles(responsive);

  return (
    <View style={styles.backgroundLayer} pointerEvents="none">
      <Animated.View style={[styles.blob, styles.blob1, blob1Style]} />
      <Animated.View style={[styles.blob, styles.blob2, blob2Style]} />
      <Animated.View style={[styles.blob, styles.blob3, blob3Style]} />
    </View>
  );
};

const getAnimatedBackgroundStyles = (responsive: any) =>
  StyleSheet.create({
    backgroundLayer: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      overflow: "hidden",
      zIndex: 0,
    },
    blob: {
      position: "absolute",
      borderRadius: 9999,
    },
    blob1: {
      width: responsive.width * 0.9,
      height: responsive.width * 0.9,
      backgroundColor: "rgba(248, 48, 48, 0.64)",
      top: -responsive.width * 0.25,
      left: -responsive.width * 0.25,
    },
    blob2: {
      width: responsive.width * 0.75,
      height: responsive.width * 0.75,
      backgroundColor: "rgba(202, 67, 255, 0.85)",
      bottom: -responsive.width * 0.22,
      right: -responsive.width * 0.3,
    },
    blob3: {
      width: responsive.width * 0.8,
      height: responsive.width * 0.8,
      backgroundColor: "rgba(72, 121, 253, 0.8)",
      top: responsive.height * 0.22,
      right: -responsive.width * 0.12,
    },
  });

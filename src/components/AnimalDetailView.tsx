import React, { useState, useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, Animated } from "react-native";
import { Audio } from "expo-av";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { getAnimalDetailViewStyles } from "@/styles/componentStyles";
import { useResponsiveDimensions } from "@/hooks/useResponsiveDimensions";
import { Animal, Translations } from "@/types";
import { speakText, stopSpeech } from "@/utils/speech";
import { playAnimalSound, stopAnimalSound } from "@/utils/audio";
import { EmojiSvg } from "@/components/EmojiSvg";

interface AnimalDetailViewProps {
  animal: Animal;
  translations: Translations;
  onBackPress: () => void;
  isSoundEnabled: boolean;
  backgroundMusic: Audio.Sound | null;
}

export const AnimalDetailView: React.FC<AnimalDetailViewProps> = ({
  animal,
  translations,
  onBackPress,
  isSoundEnabled,
  backgroundMusic,
}) => {
  const responsive = useResponsiveDimensions();
  const styles = getAnimalDetailViewStyles(responsive);
  const insets = useSafeAreaInsets();

  const [isPlayingSound, setIsPlayingSound] = useState(false);

  // Animation value for emoji wiggle
  const wiggleAnim = useRef(new Animated.Value(0)).current;

  // Continuous wiggle animation for emoji
  useEffect(() => {
    const wiggle = Animated.loop(
      Animated.sequence([
        Animated.timing(wiggleAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(wiggleAnim, {
          toValue: -1,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.timing(wiggleAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.delay(1200),
      ])
    );

    wiggle.start();

    return () => {
      wiggle.stop();
    };
  }, [wiggleAnim]);

  const handleSpeakName = async () => {
    if (!isSoundEnabled) return;

    const animalName = translations.animals[animal.name];
    // Default to English for TTS
    speakText(animalName, "en", backgroundMusic, () => {});
  };

  const handlePlaySound = async () => {
    if (!isSoundEnabled || !animal.soundUrl || isPlayingSound) return;

    try {
      setIsPlayingSound(true);
      // Play animal sound with background music ducking
      await playAnimalSound(animal.soundUrl, backgroundMusic);
    } finally {
      setIsPlayingSound(false);
    }
  };

  const handleBackPress = async () => {
    // Stop any ongoing TTS speech
    await stopSpeech();

    // Stop any playing animal sound and restore background music volume
    await stopAnimalSound(backgroundMusic);

    // Navigate back to list
    onBackPress();
  };

  const animalName = translations.animals[animal.name];
  const showTTSButton = isSoundEnabled;
  const showSoundButton = animal.soundUrl && isSoundEnabled;

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={handleBackPress}
          activeOpacity={0.7}
        >
          <Text style={styles.backButtonText}>← {translations.backToList}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        <Animated.View
          style={{
            transform: [
              {
                rotate: wiggleAnim.interpolate({
                  inputRange: [-1, 1],
                  outputRange: ["-8deg", "8deg"],
                }),
              },
              {
                translateY: wiggleAnim.interpolate({
                  inputRange: [-1, 0, 1],
                  outputRange: [-3, 0, -3],
                }),
              },
            ],
          }}
        >
          <EmojiSvg emoji={animal.emoji} style={styles.emoji} />
        </Animated.View>
        <Text style={styles.animalName}>{animalName}</Text>

        <View style={styles.buttonContainer} id="animal-detail-view">
          {showTTSButton && (
            <TouchableOpacity
              style={styles.actionButton}
              onPress={handleSpeakName}
              activeOpacity={0.7}
            >
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
              >
                <EmojiSvg emoji="🔊" style={{ fontSize: 20 }} />
                <Text style={styles.actionButtonText}>
                  {translations.speakName}
                </Text>
              </View>
            </TouchableOpacity>
          )}

          {showSoundButton && (
            <TouchableOpacity
              style={[
                styles.actionButton,
                isPlayingSound && styles.actionButtonDisabled,
              ]}
              onPress={handlePlaySound}
              activeOpacity={0.7}
              disabled={isPlayingSound}
            >
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
              >
                <EmojiSvg emoji="🔉" style={{ fontSize: 20 }} />
                <Text
                  style={[
                    styles.actionButtonText,
                    isPlayingSound && styles.actionButtonTextDisabled,
                  ]}
                >
                  {translations.playSound}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

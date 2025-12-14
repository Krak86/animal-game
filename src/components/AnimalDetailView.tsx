import React, { useState, useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, Animated } from "react-native";
import { Audio } from "expo-av";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { getAnimalDetailViewStyles } from "@/styles/componentStyles";
import { useResponsiveDimensions } from "@/hooks/useResponsiveDimensions";
import { Animal, Language, Translations } from "@/types";
import { LanguageDropdown } from "@/components/LanguageDropdown";
import { speakText, stopSpeech, isLanguageAvailable } from "@/utils/speech";
import { playAnimalSound, stopAnimalSound } from "@/utils/audio";

interface AnimalDetailViewProps {
  animal: Animal;
  translations: Translations;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onBackPress: () => void;
  isSoundEnabled: boolean;
  backgroundMusic: Audio.Sound | null;
}

export const AnimalDetailView: React.FC<AnimalDetailViewProps> = ({
  animal,
  translations,
  language,
  onLanguageChange,
  onBackPress,
  isSoundEnabled,
  backgroundMusic,
}) => {
  const responsive = useResponsiveDimensions();
  const styles = getAnimalDetailViewStyles(responsive);
  const insets = useSafeAreaInsets();

  const [ttsAvailable, setTtsAvailable] = useState(false);

  // Animation value for emoji wiggle
  const wiggleAnim = useRef(new Animated.Value(0)).current;

  // Check TTS availability for current language
  useEffect(() => {
    const checkTTSAvailability = async () => {
      try {
        // Map language to language code
        let languageCode: string;
        if (language === "uk") {
          languageCode = "uk-UA";
        } else if (language === "ru") {
          languageCode = "ru-RU";
        } else {
          languageCode = "en-GB";
        }

        // Check if voice is available for this specific language
        const available = await isLanguageAvailable(languageCode);
        setTtsAvailable(available);
      } catch (error) {
        setTtsAvailable(false);
      }
    };

    checkTTSAvailability();
  }, [language]); // Re-check when language changes

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
    if (!isSoundEnabled || !ttsAvailable) return;

    const animalName = translations.animals[animal.name];
    speakText(animalName, language, backgroundMusic, () => {});
  };

  const handlePlaySound = async () => {
    if (!isSoundEnabled || !animal.soundUrl) return;

    // Play animal sound with background music ducking
    await playAnimalSound(animal.soundUrl, backgroundMusic);
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
  const showTTSButton = ttsAvailable && isSoundEnabled;
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

        <LanguageDropdown
          language={language}
          onLanguageChange={onLanguageChange}
        />
      </View>

      <View style={styles.contentContainer}>
        <Animated.Text
          style={[
            styles.emoji,
            {
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
            },
          ]}
        >
          {animal.emoji}
        </Animated.Text>
        <Text style={styles.animalName}>{animalName}</Text>

        <View style={styles.buttonContainer} id="animal-detail-view">
          {showTTSButton && (
            <TouchableOpacity
              style={styles.actionButton}
              onPress={handleSpeakName}
              activeOpacity={0.7}
            >
              <Text style={styles.actionButtonText}>
                🔊 {translations.speakName}
              </Text>
            </TouchableOpacity>
          )}

          {showSoundButton && (
            <TouchableOpacity
              style={styles.actionButton}
              onPress={handlePlaySound}
              activeOpacity={0.7}
            >
              <Text style={styles.actionButtonText}>
                🔉 {translations.playSound}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

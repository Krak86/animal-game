import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  ScrollView,
} from "react-native";
import { Audio } from "expo-av";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { getAnimalDetailViewStyles } from "@/styles/componentStyles";
import { useResponsiveDimensions } from "@/hooks/useResponsiveDimensions";
import { Animal, Language, Translations } from "@/types";
import { speakText, stopSpeech } from "@/utils/speech";
import { playAnimalSound, stopAnimalSound } from "@/utils/audio";
import { openExternalLink } from "@/utils/linking";
import { EmojiSvg } from "@/components/EmojiSvg";
import { ImageGalleryModal } from "@/components/ImageGalleryModal";
import { VideoGalleryModal } from "@/components/VideoGalleryModal";
import { Model3DModal } from "@/components/Model3DModal";

interface AnimalDetailViewProps {
  animal: Animal;
  translations: Translations;
  onBackPress: () => void;
  isSoundEnabled: boolean;
  backgroundMusic: Audio.Sound | null;
  language: Language;
}

export const AnimalDetailView: React.FC<AnimalDetailViewProps> = ({
  animal,
  translations,
  onBackPress,
  isSoundEnabled,
  backgroundMusic,
  language,
}) => {
  const responsive = useResponsiveDimensions();
  const styles = getAnimalDetailViewStyles(responsive);
  const insets = useSafeAreaInsets();

  const [isPlayingSound, setIsPlayingSound] = useState(false);
  const [showImageGallery, setShowImageGallery] = useState(false);
  const [showVideoGallery, setShowVideoGallery] = useState(false);
  const [show3DModel, setShow3DModel] = useState(false);

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

      <ScrollView style={styles.scrollContainer}>
        {/* TOP SECTION - Existing content (emoji, name, TTS/voice buttons) */}
        <View style={styles.topSection}>
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

          <View style={styles.buttonContainer}>
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

        {/* DESCRIPTION SECTION */}
        {animal.description && (
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>
              {
                translations.animalDescriptions[
                  animal.description as keyof typeof translations.animalDescriptions
                ]
              }
            </Text>
          </View>
        )}

        {/* MEDIA BUTTONS SECTION */}
        <View style={styles.mediaButtonsContainer}>
          {animal.images && animal.images.length > 0 && (
            <TouchableOpacity
              style={styles.mediaButton}
              onPress={() => setShowImageGallery(true)}
              activeOpacity={0.7}
            >
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
              >
                <EmojiSvg emoji="🖼️" style={{ fontSize: 20 }} />
                <Text style={styles.mediaButtonText}>
                  {translations.viewImages}
                </Text>
              </View>
            </TouchableOpacity>
          )}

          {animal.videos && animal.videos.length > 0 && (
            <TouchableOpacity
              style={styles.mediaButton}
              onPress={() => setShowVideoGallery(true)}
              activeOpacity={0.7}
            >
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
              >
                <EmojiSvg emoji="🎥" style={{ fontSize: 20 }} />
                <Text style={styles.mediaButtonText}>
                  {translations.viewVideos}
                </Text>
              </View>
            </TouchableOpacity>
          )}

          {animal.glbUrl && (
            <TouchableOpacity
              style={styles.mediaButton}
              onPress={() => setShow3DModel(true)}
              activeOpacity={0.7}
            >
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
              >
                <EmojiSvg emoji="🎮" style={{ fontSize: 20 }} />
                <Text style={styles.mediaButtonText}>
                  {translations.view3DModel}
                </Text>
              </View>
            </TouchableOpacity>
          )}

          {animal.wikipediaUrls && (
            <TouchableOpacity
              style={styles.mediaButton}
              onPress={() => {
                // Get language-specific URL with fallback chain
                const url =
                  animal.wikipediaUrls![language] ||
                  animal.wikipediaUrls!.en ||
                  Object.values(animal.wikipediaUrls!)[0];

                if (url) {
                  openExternalLink(url, translations.leavingAppMessage);
                }
              }}
              activeOpacity={0.7}
            >
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
              >
                <EmojiSvg emoji="🌐" style={{ fontSize: 20 }} />
                <Text style={styles.mediaButtonText}>
                  {translations.viewWikipedia}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>

      {/* MODALS - Only render when visible to prevent z-index issues */}
      {showImageGallery && (
        <ImageGalleryModal
          visible={showImageGallery}
          images={animal.images || []}
          onClose={() => setShowImageGallery(false)}
          animalName={animalName}
        />
      )}
      {showVideoGallery && (
        <VideoGalleryModal
          visible={showVideoGallery}
          videoUrls={animal.videos || []}
          onClose={() => setShowVideoGallery(false)}
          animalName={animalName}
        />
      )}
      {show3DModel && (
        <Model3DModal
          visible={show3DModel}
          glbUrl={animal.glbUrl}
          onClose={() => setShow3DModel(false)}
          animalName={animalName}
          translations={translations}
        />
      )}
    </View>
  );
};

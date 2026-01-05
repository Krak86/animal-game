import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  ScrollView,
  Platform,
} from "react-native";
import { Audio } from "expo-av";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import * as Haptics from "expo-haptics";

import { getAnimalDetailViewStyles } from "@/styles/componentStyles";
import { useResponsiveDimensions } from "@/hooks/useResponsiveDimensions";
import { Animal, Language, Translations } from "@/types";
import { speakAnimalName, stopSpeech } from "@/utils/speech";
import { playAnimalSound, stopAnimalSound } from "@/utils/audio";
import { openLinkDirect, openExternalLink } from "@/utils/linking";
import { EmojiSvg } from "@/components/EmojiSvg";
import { ImageGalleryModal } from "@/components/ImageGalleryModal";
import { VideoGalleryModal } from "@/components/VideoGalleryModal";
import { Model3DModal } from "@/components/Model3DModal";
import { OfflineBanner } from "@/components/OfflineBanner";
import { PRERECORDED_ANIMAL_AUDIO, hasPrerecordedAudio } from "@/constants/audioFiles";
import { useNetwork } from "@/contexts/NetworkContext";

interface AnimalDetailViewProps {
  animal: Animal;
  animals: Animal[]; // Full list of animals for navigation
  currentIndex: number; // Current animal index in the list
  onAnimalChange: (animal: Animal, newIndex: number) => void; // Callback when swiping to new animal
  translations: Translations;
  onBackPress: () => void;
  isSoundEnabled: boolean;
  backgroundMusic: Audio.Sound | null;
  language: Language;
}

export const AnimalDetailView: React.FC<AnimalDetailViewProps> = ({
  animal,
  animals,
  currentIndex,
  onAnimalChange,
  translations,
  onBackPress,
  isSoundEnabled,
  backgroundMusic,
  language,
}) => {
  const responsive = useResponsiveDimensions();
  const styles = getAnimalDetailViewStyles(responsive);
  const insets = useSafeAreaInsets();
  const { isConnected } = useNetwork();

  const [isPlayingSound, setIsPlayingSound] = useState(false);
  const [showImageGallery, setShowImageGallery] = useState(false);
  const [showVideoGallery, setShowVideoGallery] = useState(false);
  const [show3DModel, setShow3DModel] = useState(false);

  // Animation value for emoji wiggle
  const wiggleAnim = useRef(new Animated.Value(0)).current;
  const soundIconAnim = useRef(new Animated.Value(1)).current;
  const speakIconAnim = useRef(new Animated.Value(1)).current;
  const speakingIndicatorAnim = useRef(new Animated.Value(1)).current;

  // Card transition animation when animal changes
  const cardScaleAnim = useRef(new Animated.Value(1)).current;
  const cardOpacityAnim = useRef(new Animated.Value(1)).current;

  // Swipe navigation handlers
  const handleSwipeLeft = async () => {
    // Swipe left = previous animal
    const newIndex = currentIndex === 0 ? animals.length - 1 : currentIndex - 1;
    const newAnimal = animals[newIndex];

    // Stop any ongoing sounds/speech
    await stopSpeech();
    await stopAnimalSound(backgroundMusic);
    setIsPlayingSound(false);

    // Haptic feedback
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);

    // Notify parent of change
    onAnimalChange(newAnimal, newIndex);
  };

  const handleSwipeRight = async () => {
    // Swipe right = next animal
    const newIndex = currentIndex === animals.length - 1 ? 0 : currentIndex + 1;
    const newAnimal = animals[newIndex];

    // Stop any ongoing sounds/speech
    await stopSpeech();
    await stopAnimalSound(backgroundMusic);
    setIsPlayingSound(false);

    // Haptic feedback
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);

    // Notify parent of change
    onAnimalChange(newAnimal, newIndex);
  };

  // Card transition animation when animal changes
  useEffect(() => {
    // Sequence: fade out (100ms) -> update content -> fade in (300ms)
    cardOpacityAnim.setValue(1);
    cardScaleAnim.setValue(1);

    // Quick fade out
    Animated.timing(cardOpacityAnim, {
      toValue: 0,
      duration: 400,
      useNativeDriver: true,
    }).start(() => {
      // Then scale down while disappearing
      cardScaleAnim.setValue(0.9);

      // Fade and scale back in
      Animated.parallel([
        Animated.timing(cardOpacityAnim, {
          toValue: 1,
          duration: 350,
          useNativeDriver: true,
        }),
        Animated.timing(cardScaleAnim, {
          toValue: 1,
          duration: 350,
          useNativeDriver: true,
        }),
      ]).start();
    });
  }, [animal.id, cardScaleAnim, cardOpacityAnim]);

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

  // Zoom animation for sound emoji icons
  useEffect(() => {
    const zoomSound = Animated.loop(
      Animated.sequence([
        Animated.timing(soundIconAnim, {
          toValue: 1.3,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(soundIconAnim, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
      ])
    );

    const zoomSpeak = Animated.loop(
      Animated.sequence([
        Animated.timing(speakIconAnim, {
          toValue: 1.3,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(speakIconAnim, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
      ])
    );

    zoomSound.start();
    zoomSpeak.start();

    return () => {
      zoomSound.stop();
      zoomSpeak.stop();
    };
  }, [soundIconAnim, speakIconAnim]);

  // Speaking indicator animation
  useEffect(() => {
    if (isPlayingSound) {
      const pulse = Animated.loop(
        Animated.sequence([
          Animated.timing(speakingIndicatorAnim, {
            toValue: 1.4,
            duration: 400,
            useNativeDriver: true,
          }),
          Animated.timing(speakingIndicatorAnim, {
            toValue: 1,
            duration: 400,
            useNativeDriver: true,
          }),
        ])
      );
      pulse.start();
      return () => pulse.stop();
    }
  }, [isPlayingSound, speakingIndicatorAnim]);

  const handleSpeakName = async () => {
    if (!isSoundEnabled) return;

    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    // Use speakAnimalName to support prerecorded audio for UK/RU
    speakAnimalName(animal.name, language, backgroundMusic, () => {});
  };

  const handlePlaySound = async () => {
    if (!isSoundEnabled || !animal.soundUrl || isPlayingSound) return;

    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    try {
      setIsPlayingSound(true);
      // Play animal sound with background music ducking
      await playAnimalSound(animal.soundUrl, backgroundMusic);
    } finally {
      setIsPlayingSound(false);
    }
  };

  const handleBackPress = async () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);

    // Stop any ongoing TTS speech
    await stopSpeech();

    // Stop any playing animal sound and restore background music volume
    await stopAnimalSound(backgroundMusic);

    // Navigate back to list
    onBackPress();
  };

  const animalName = translations.animals[animal.name];

  const hasSoundUrl = !!animal.soundUrl;

  // Check if prerecorded pronunciation audio exists for this animal in the current language
  const hasPrerecordedPronunciation =
    hasPrerecordedAudio(language) &&
    PRERECORDED_ANIMAL_AUDIO[animal.name] &&
    language in PRERECORDED_ANIMAL_AUDIO[animal.name];

  // For English: always show pronunciation icon (🔊), show sound icon (🔉) only if soundUrl exists
  // For UK/RU languages: show pronunciation icon if prerecorded audio exists
  const showTTSButton = language === "en"
    ? isSoundEnabled
    : isSoundEnabled && hasPrerecordedPronunciation;

  const showSoundButton = isSoundEnabled && hasSoundUrl;

  // Show pronunciation icon (🔊) based on showTTSButton
  // Show animal sound icon (🔉) based on showSoundButton
  const showPronunciationIcon = showTTSButton;
  const showAnimalSoundIcon = showSoundButton;

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

      {/* Swipe navigation indicators */}
      <TouchableOpacity
        style={[styles.swipeIndicator, styles.swipeIndicatorLeft]}
        onPress={handleSwipeLeft}
        activeOpacity={0.5}
      ></TouchableOpacity>

      <TouchableOpacity
        style={[styles.swipeIndicator, styles.swipeIndicatorRight]}
        onPress={handleSwipeRight}
        activeOpacity={0.5}
      ></TouchableOpacity>

      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* OFFLINE BANNER */}
        {!isConnected && <OfflineBanner />}

        {/* TOP SECTION - Existing content (emoji, name, TTS/voice buttons) */}
        <Animated.View
          style={{
            opacity: cardOpacityAnim,
            transform: [{ scale: cardScaleAnim }],
          }}
        >
          <View style={styles.topSection}>
            <TouchableOpacity
              onPress={handlePlaySound}
              activeOpacity={0.7}
              disabled={!showSoundButton || isPlayingSound}
              hitSlop={{ top: 20, bottom: 20, left: 50, right: 20 }}
            >
              <View style={{ position: "relative" }}>
                <Animated.View
                  style={{
                    opacity: isPlayingSound ? 0.3 : 1,
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
                {isPlayingSound && (
                  <Animated.View
                    pointerEvents="none"
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: [
                        { translateX: -15 },
                        { translateY: -15 },
                        { scale: speakingIndicatorAnim },
                      ],
                    }}
                  >
                    <EmojiSvg emoji="💬" style={{ fontSize: 30 }} />
                  </Animated.View>
                )}
                {showAnimalSoundIcon && (
                  <Animated.View
                    pointerEvents="none"
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "-20%",
                      transform: [
                        { translateX: -10 },
                        { translateY: -10 },
                        { scale: soundIconAnim },
                      ],
                      opacity: 0.7,
                    }}
                  >
                    <EmojiSvg emoji="🔉" style={{ fontSize: 20 }} />
                  </Animated.View>
                )}
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleSpeakName}
              activeOpacity={0.7}
              disabled={!showTTSButton}
              hitSlop={{ top: 20, bottom: 20, left: 50, right: 20 }}
            >
              <View style={{ position: "relative" }}>
                <Text style={styles.animalName}>{animalName}</Text>
                {showPronunciationIcon && (
                  <Animated.View
                    pointerEvents="none"
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "-20%",
                      transform: [
                        { translateX: -10 },
                        { translateY: -10 },
                        { scale: speakIconAnim },
                      ],
                      opacity: 0.7,
                    }}
                  >
                    <EmojiSvg emoji="🔊" style={{ fontSize: 20 }} />
                  </Animated.View>
                )}
              </View>
            </TouchableOpacity>

            {/* Buttons hidden - click emoji for sound, name for pronunciation */}
          </View>
        </Animated.View>

        {/* DESCRIPTION SECTION */}
        <Animated.View
          style={{
            opacity: cardOpacityAnim,
            transform: [{ scale: cardScaleAnim }],
          }}
        >
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
        </Animated.View>

        {/* MEDIA BUTTONS SECTION */}
        <Animated.View
          style={{
            opacity: cardOpacityAnim,
            transform: [{ scale: cardScaleAnim }],
          }}
        >
          <View style={styles.mediaButtonsContainer}>
            {animal.images && animal.images.length > 0 ? (
              <TouchableOpacity
                style={[
                  styles.mediaButton,
                  !isConnected && styles.mediaButtonDisabled,
                ]}
                onPress={() => setShowImageGallery(true)}
                disabled={!isConnected}
                activeOpacity={!isConnected ? 1 : 0.7}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <EmojiSvg
                    emoji="🖼️"
                    style={{ fontSize: 20, opacity: !isConnected ? 0.5 : 1 }}
                  />
                  <Text
                    style={[
                      styles.mediaButtonText,
                      !isConnected && styles.mediaButtonTextDisabled,
                    ]}
                  >
                    {translations.viewImages}
                  </Text>
                </View>
                {!isConnected && (
                  <Text style={styles.offlineHint}>
                    📡 {translations.requiresInternet}
                  </Text>
                )}
              </TouchableOpacity>
            ) : null}

            {animal.videos && animal.videos.length > 0 ? (
              <TouchableOpacity
                style={[
                  styles.mediaButton,
                  !isConnected && styles.mediaButtonDisabled,
                ]}
                onPress={() => setShowVideoGallery(true)}
                disabled={!isConnected}
                activeOpacity={!isConnected ? 1 : 0.7}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <EmojiSvg
                    emoji="🎥"
                    style={{ fontSize: 20, opacity: !isConnected ? 0.5 : 1 }}
                  />
                  <Text
                    style={[
                      styles.mediaButtonText,
                      !isConnected && styles.mediaButtonTextDisabled,
                    ]}
                  >
                    {translations.viewVideos}
                  </Text>
                </View>
                {!isConnected && (
                  <Text style={styles.offlineHint}>
                    📡 {translations.requiresInternet}
                  </Text>
                )}
              </TouchableOpacity>
            ) : null}

            {animal.glbUrl ? (
              <TouchableOpacity
                style={styles.mediaButton}
                onPress={() => setShow3DModel(true)}
                activeOpacity={0.7}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <EmojiSvg emoji="🎮" style={{ fontSize: 20 }} />
                  <Text style={styles.mediaButtonText}>
                    {translations.view3DModel}
                  </Text>
                </View>
              </TouchableOpacity>
            ) : null}

            {animal.wikipediaUrls ? (
              <TouchableOpacity
                style={[
                  styles.mediaButton,
                  !isConnected && styles.mediaButtonDisabled,
                ]}
                onPress={() => {
                  // Get language-specific URL with fallback chain
                  const url =
                    animal.wikipediaUrls![language] ||
                    animal.wikipediaUrls!.en ||
                    Object.values(animal.wikipediaUrls!)[0];

                  if (url) {
                    // Use different handlers for web vs native
                    if (Platform.OS === "web") {
                      openLinkDirect(url);
                    } else {
                      openExternalLink(url, translations);
                    }
                  }
                }}
                disabled={!isConnected}
                activeOpacity={!isConnected ? 1 : 0.7}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <EmojiSvg
                    emoji="🌐"
                    style={{ fontSize: 20, opacity: !isConnected ? 0.5 : 1 }}
                  />
                  <Text
                    style={[
                      styles.mediaButtonText,
                      !isConnected && styles.mediaButtonTextDisabled,
                    ]}
                  >
                    {translations.viewWikipedia}
                  </Text>
                </View>
                {!isConnected && (
                  <Text style={styles.offlineHint}>
                    📡 {translations.requiresInternet}
                  </Text>
                )}
              </TouchableOpacity>
            ) : null}
          </View>
        </Animated.View>
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

import React, { useRef, useEffect } from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Animated,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { getAnimalsListViewStyles } from "@/styles/componentStyles";
import { useResponsiveDimensions } from "@/hooks/useResponsiveDimensions";
import { Animal, Language, Translations } from "@/types";
import { LanguageDropdown } from "./LanguageDropdown";
import { AnimalCard } from "./AnimalCard";

interface AnimalsListViewProps {
  animals: Animal[];
  translations: Translations;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onAnimalPress: (animal: Animal) => void;
  onBackPress: () => void;
  isSoundEnabled: boolean;
}

export const AnimalsListView: React.FC<AnimalsListViewProps> = ({
  animals,
  translations,
  language,
  onLanguageChange,
  onAnimalPress,
  onBackPress,
  isSoundEnabled,
}) => {
  const responsive = useResponsiveDimensions();
  const styles = getAnimalsListViewStyles(responsive);
  const insets = useSafeAreaInsets();

  // Create static animation values for cards (no wiggle in exhibition mode)
  const cardAnimations = useRef<Animated.Value[]>(
    animals.map(() => new Animated.Value(1))
  ).current;
  const cardWiggles = useRef<Animated.Value[]>(
    animals.map(() => new Animated.Value(0))
  ).current;

  // Entrance animations for cards
  useEffect(() => {
    const animations = cardAnimations.map((anim, index) => {
      return Animated.sequence([
        Animated.delay(index * 30), // Stagger the animations
        Animated.spring(anim, {
          toValue: 1,
          useNativeDriver: true,
          tension: 50,
          friction: 7,
        }),
      ]);
    });

    Animated.parallel(animations).start();
  }, [cardAnimations]);

  // Continuous wiggle animations for cards
  useEffect(() => {
    const createWiggle = (anim: Animated.Value, delay: number) => {
      return Animated.loop(
        Animated.sequence([
          Animated.delay(delay),
          Animated.timing(anim, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
          }),
          Animated.timing(anim, {
            toValue: -1,
            duration: 400,
            useNativeDriver: true,
          }),
          Animated.timing(anim, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
          }),
          Animated.delay(1500),
        ])
      );
    };

    // Start wiggle animations with staggered delays for each card
    const wiggleAnimations = cardWiggles.map((wiggle, index) => {
      return createWiggle(wiggle, index * 100);
    });

    wiggleAnimations.forEach((anim) => anim.start());

    // Cleanup
    return () => {
      wiggleAnimations.forEach((anim) => anim.stop());
    };
  }, [cardWiggles]);

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={onBackPress}
          activeOpacity={0.7}
        >
          <Text style={styles.backButtonText}>
            🏠 {translations.startFromBeginning}
          </Text>
        </TouchableOpacity>

        <LanguageDropdown
          language={language}
          onLanguageChange={onLanguageChange}
        />
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>{translations.showAllTitle}</Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.gridContainer}>
          {animals.map((animal, index) => (
            <AnimalCard
              key={animal.id}
              animal={animal}
              isWrong={false}
              wiggleAnimation={cardWiggles[index]}
              cardAnimation={cardAnimations[index]}
              translations={translations}
              onPress={() => onAnimalPress(animal)}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

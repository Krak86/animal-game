import React, { useEffect, useState, useMemo } from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Animated,
  TextInput,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { getAnimalsListViewStyles } from "@/styles/componentStyles";
import { useResponsiveDimensions } from "@/hooks/useResponsiveDimensions";
import { Animal, Language, Translations } from "@/types";
import { LanguageDropdown } from "@/components/LanguageDropdown";
import { debounce } from "@/utils/helpers";
import { AnimalCard } from "@/components/AnimalCard";

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
}) => {
  const responsive = useResponsiveDimensions();
  const styles = getAnimalsListViewStyles(responsive);
  const insets = useSafeAreaInsets();

  // Search state
  const [searchText, setSearchText] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // Debounce search input
  const debouncedSetSearch = useMemo(
    () =>
      debounce((text: string) => {
        setDebouncedSearch(text);
      }, 300),
    []
  );

  // Handle search text change
  const handleSearchChange = (text: string) => {
    setSearchText(text);
    debouncedSetSearch(text);
  };

  // Clear search when component unmounts or when going back
  useEffect(() => {
    return () => {
      setSearchText("");
      setDebouncedSearch("");
      debouncedSetSearch.cancel();
    };
  }, [debouncedSetSearch]);

  // Filter animals based on debounced search
  const filteredAnimals = useMemo(() => {
    if (!debouncedSearch.trim()) {
      return animals;
    }

    const searchLower = debouncedSearch.toLowerCase();
    return animals.filter((animal) => {
      const animalName = translations.animals[animal.name].toLowerCase();
      return animalName.includes(searchLower);
    });
  }, [animals, debouncedSearch, translations]);

  // Create animation values for cards - memoized to recreate when filtered list changes
  const cardAnimations = useMemo(
    () => filteredAnimals.map(() => new Animated.Value(0)),
    [filteredAnimals.length]
  );

  const cardWiggles = useMemo(
    () => filteredAnimals.map(() => new Animated.Value(0)),
    [filteredAnimals.length]
  );

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

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder={translations.searchPlaceholder || "Search animals..."}
          placeholderTextColor="#999"
          value={searchText}
          onChangeText={handleSearchChange}
          autoCapitalize="none"
          autoCorrect={false}
        />
        {searchText.length > 0 && (
          <TouchableOpacity
            style={styles.clearButton}
            onPress={() => handleSearchChange("")}
            activeOpacity={0.7}
          >
            <Text style={styles.clearButtonText}>✕</Text>
          </TouchableOpacity>
        )}
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.gridContainer}>
          {filteredAnimals.length > 0 ? (
            filteredAnimals.map((animal, index) => (
              <AnimalCard
                key={animal.id}
                animal={animal}
                isWrong={false}
                wiggleAnimation={cardWiggles[index]}
                cardAnimation={cardAnimations[index]}
                translations={translations}
                onPress={() => onAnimalPress(animal)}
              />
            ))
          ) : (
            <View style={styles.noResultsContainer}>
              <Text style={styles.noResultsText}>
                {translations.noResults || "No animals found"}
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

import React, { useEffect, useState, useMemo, useCallback } from "react";
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { getAnimalsListViewStyles } from "@/styles/componentStyles";
import { useResponsiveDimensions } from "@/hooks/useResponsiveDimensions";
import { Animal, Translations } from "@/types";
import { debounce } from "@/utils/helpers";
import { AnimalCard } from "@/components/AnimalCard";
import { EmojiSvg } from "@/components/EmojiSvg";

interface AnimalsListViewProps {
  animals: Animal[];
  translations: Translations;
  onAnimalPress: (animal: Animal) => void;
  isSoundEnabled: boolean;
}

export const AnimalsListView: React.FC<AnimalsListViewProps> = ({
  animals,
  translations,
  onAnimalPress,
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

  // Render individual animal card
  const renderItem = useCallback(
    ({ item }: { item: Animal; index: number }) => (
      <AnimalCard
        animal={item}
        isWrong={false}
        translations={translations}
        onPress={() => onAnimalPress(item)}
      />
    ),
    [translations, onAnimalPress]
  );

  // Key extractor for FlatList
  const keyExtractor = useCallback((item: Animal) => item.id.toString(), []);

  // Empty list component
  const renderEmpty = useCallback(
    () => (
      <View style={styles.noResultsContainer}>
        <Text style={styles.noResultsText}>
          {translations.noResults || "No animals found"}
        </Text>
      </View>
    ),
    [translations, styles]
  );

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
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
            <EmojiSvg emoji="✕" style={styles.clearButtonText} />
          </TouchableOpacity>
        )}
      </View>

      <FlatList
        key={responsive.columnCount}
        data={filteredAnimals}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        numColumns={responsive.columnCount}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        removeClippedSubviews={true}
        initialNumToRender={12}
        maxToRenderPerBatch={6}
        windowSize={3}
        ListEmptyComponent={renderEmpty}
      />
    </View>
  );
};

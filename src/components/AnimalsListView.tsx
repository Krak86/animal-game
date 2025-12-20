import React, {
  useEffect,
  useState,
  useMemo,
  useCallback,
  useRef,
} from "react";
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
  onAnimalPress: (
    animal: Animal,
    scrollIndex: number,
    searchText: string
  ) => void;
  isSoundEnabled: boolean;
  scrollToIndex?: number;
  onScrollIndexChange?: (index: number) => void;
  onSearchChange?: (searchText: string) => void;
}

export const AnimalsListView: React.FC<AnimalsListViewProps> = ({
  animals,
  translations,
  onAnimalPress,
  scrollToIndex,
  onScrollIndexChange,
  onSearchChange,
}) => {
  const responsive = useResponsiveDimensions();
  const styles = getAnimalsListViewStyles(responsive);
  const insets = useSafeAreaInsets();

  // Refs for scroll position management
  const flatListRef = useRef<FlatList<Animal>>(null);
  const hasScrolledToInitialPosition = useRef<boolean>(false);
  const filteredAnimalsRef = useRef<Animal[]>([]);

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
    // Reset scroll position flag on search to prevent out-of-bounds scroll attempts
    hasScrolledToInitialPosition.current = false;
    // Notify parent of search change (will reset scroll to top)
    if (onSearchChange) {
      onSearchChange(text);
    }
  };

  // Clear search when component unmounts or when going back
  useEffect(() => {
    return () => {
      setSearchText("");
      setDebouncedSearch("");
      debouncedSetSearch.cancel();
      hasScrolledToInitialPosition.current = false;
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

  // Keep ref in sync with current filtered animals
  filteredAnimalsRef.current = filteredAnimals;

  // Restore scroll position when component mounts
  useEffect(() => {
    if (
      scrollToIndex !== undefined &&
      scrollToIndex > 0 &&
      filteredAnimals.length > 0 &&
      !hasScrolledToInitialPosition.current
    ) {
      const timer = setTimeout(() => {
        const currentLength = filteredAnimalsRef.current.length;
        if (currentLength > 0) {
          const safeIndex = Math.min(scrollToIndex, currentLength - 1);

          // Check if the index is within the initially rendered range
          // FlatList typically renders initialNumToRender (12) items initially
          const initiallyRendered = 12;

          if (safeIndex < initiallyRendered && safeIndex < currentLength) {
            // Safe to use scrollToIndex for small indices
            flatListRef.current?.scrollToIndex({
              index: safeIndex,
              animated: false,
              viewPosition: 0,
            });
          } else if (safeIndex < currentLength) {
            // For larger indices, estimate the offset to avoid out-of-range error
            // Use a rough estimate of item height (adjust based on your actual card height)
            const estimatedItemHeight = 150; // Adjust this based on your AnimalCard height
            const estimatedOffset = safeIndex * estimatedItemHeight;
            flatListRef.current?.scrollToOffset({
              offset: estimatedOffset,
              animated: false,
            });
          }
        }
        hasScrolledToInitialPosition.current = true;
      }, 150);

      return () => clearTimeout(timer);
    }
  }, [scrollToIndex, filteredAnimals.length]);

  // Track visible items to save scroll position
  const handleViewableItemsChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0 && onScrollIndexChange) {
      const firstVisibleIndex = viewableItems[0].index;
      if (firstVisibleIndex !== null && firstVisibleIndex !== undefined) {
        onScrollIndexChange(firstVisibleIndex);
      }
    }
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
    minimumViewTime: 100,
  }).current;

  // Render individual animal card
  const renderItem = useCallback(
    ({ item, index }: { item: Animal; index: number }) => (
      <AnimalCard
        animal={item}
        isWrong={false}
        translations={translations}
        onPress={() => onAnimalPress(item, index, searchText)}
      />
    ),
    [translations, onAnimalPress, searchText]
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
        ref={flatListRef}
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
        onViewableItemsChanged={handleViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        onScrollToIndexFailed={(info) => {
          const wait = new Promise((resolve) => setTimeout(resolve, 150));
          wait.then(() => {
            // Use ref to get current filtered animals length
            const currentLength = filteredAnimalsRef.current.length;
            if (currentLength > 0) {
              // Calculate a safe index that's within bounds
              const safeIndex = Math.min(info.index, currentLength - 1);
              // Double-check bounds before scrolling
              if (safeIndex >= 0 && safeIndex < currentLength) {
                flatListRef.current?.scrollToIndex({
                  index: safeIndex,
                  animated: false,
                  viewPosition: 0,
                });
              } else {
                // If still out of bounds, scroll to offset instead
                flatListRef.current?.scrollToOffset({
                  offset: info.averageItemLength * safeIndex,
                  animated: false,
                });
              }
            }
          });
        }}
      />
    </View>
  );
};

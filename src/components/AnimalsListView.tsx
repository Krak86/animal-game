import React, {
  useEffect,
  useState,
  useMemo,
  useCallback,
  useRef,
} from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from "react-native";
import { FlashList } from "@shopify/flash-list";
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
  const flatListRef = useRef<any>(null); // FlashList ref for row-based rendering
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

    // Reset scroll to top when searching to avoid out-of-bounds
    if (flatListRef.current) {
      flatListRef.current.scrollToOffset({ offset: 0, animated: false });
    }

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

  // Get window dimensions for FlashList estimatedListSize
  const { height, width } = Dimensions.get("window");

  // Convert flat list to rows for multi-column layout (FlashList doesn't support numColumns)
  const getAnimalRows = useCallback(
    (animals: Animal[], columns: number): Animal[][] => {
      const rows: Animal[][] = [];
      for (let i = 0; i < animals.length; i += columns) {
        rows.push(animals.slice(i, i + columns));
      }
      return rows;
    },
    [] // Pure function, no dependencies needed
  );

  // Transform filtered animals into rows
  const animalRows = useMemo(
    () => getAnimalRows(filteredAnimals, responsive.columnCount),
    [filteredAnimals, responsive.columnCount, getAnimalRows]
  );

  // Calculate dynamic estimated row height based on content
  const estimatedRowHeight = useMemo(() => {
    const cardHeight = responsive.cardSize;
    const labelHeight = 14 * responsive.fontScale * 1.2; // Line height
    const maxLabelLines = 2; // Max 2 lines due to numberOfLines={2}
    const padding = 10 * 2; // Card padding top and bottom
    const margin = responsive.spacing.md;

    return cardHeight + labelHeight * maxLabelLines + padding + margin;
  }, [responsive.cardSize, responsive.fontScale, responsive.spacing.md]);

  // Restore scroll position when component mounts (row-based with sub-row offset)
  useEffect(() => {
    if (
      scrollToIndex !== undefined &&
      scrollToIndex > 0 &&
      animalRows.length > 0 &&
      !hasScrolledToInitialPosition.current
    ) {
      const timer = setTimeout(() => {
        // Convert item index to row index
        const rowIndex = Math.floor(scrollToIndex / responsive.columnCount);
        const safeRowIndex = Math.min(rowIndex, animalRows.length - 1);

        if (safeRowIndex >= 0 && flatListRef.current) {
          // Calculate sub-row offset for more accurate positioning
          const columnOffset = scrollToIndex % responsive.columnCount;
          const viewOffset = columnOffset / responsive.columnCount;

          flatListRef.current.scrollToIndex({
            index: safeRowIndex,
            animated: false,
            viewOffset: viewOffset, // FlashList supports viewOffset for precise positioning
          });
        }
        hasScrolledToInitialPosition.current = true;
      }, 150);

      return () => clearTimeout(timer);
    }
  }, [
    scrollToIndex,
    animalRows.length,
    responsive.columnCount,
    filteredAnimals.length,
  ]);

  // Track visible items to save scroll position (convert row index to item index)
  const handleViewableItemsChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0 && onScrollIndexChange) {
      const firstVisibleRowIndex = viewableItems[0].index;
      if (firstVisibleRowIndex !== null && firstVisibleRowIndex !== undefined) {
        // Convert row index to item index for parent component
        const firstVisibleItemIndex =
          firstVisibleRowIndex * responsive.columnCount;
        onScrollIndexChange(firstVisibleItemIndex);
      }
    }
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
    minimumViewTime: 100,
  }).current;

  // Render row of animal cards for multi-column layout
  const renderRow = useCallback(
    ({ item: row, index: rowIndex }: { item: Animal[]; index: number }) => (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          paddingHorizontal: responsive.spacing.md,
        }}
      >
        {row.map((animal, colIndex) => {
          const itemIndex = rowIndex * responsive.columnCount + colIndex;
          return (
            <AnimalCard
              key={animal.id}
              animal={animal}
              isWrong={false}
              translations={translations}
              onPress={() => onAnimalPress(animal, itemIndex, searchText)}
              index={itemIndex}
            />
          );
        })}
        {/* Fill empty spaces if last row isn't full */}
        {row.length < responsive.columnCount &&
          Array.from({ length: responsive.columnCount - row.length }).map(
            (_, i) => (
              <View
                key={`empty-${i}`}
                style={{
                  width: responsive.cardSize,
                  marginBottom: responsive.spacing.md,
                  opacity: 0,
                  pointerEvents: "none",
                }}
              />
            )
          )}
      </View>
    ),
    [
      translations,
      onAnimalPress,
      searchText,
      responsive.columnCount,
      responsive.cardSize,
      responsive.spacing.md,
    ]
  );

  // Key extractor for FlashList with proper empty row handling
  const keyExtractor = useCallback((row: Animal[], index: number) => {
    if (row.length === 0) return `row-empty-${index}`;
    return `row-${index}-${row.map((a) => a.id).join("-")}`;
  }, []);

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

      <FlashList
        ref={flatListRef}
        data={animalRows}
        renderItem={renderRow as any}
        keyExtractor={keyExtractor}
        // @ts-expect-error - FlashList prop type definitions issue
        estimatedItemSize={estimatedRowHeight}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={renderEmpty}
        onViewableItemsChanged={handleViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        drawDistance={height * 0.5}
      />
    </View>
  );
};

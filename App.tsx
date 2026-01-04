import { StatusBar } from "expo-status-bar";
import * as NavigationBar from "expo-navigation-bar";
import * as Haptics from "expo-haptics";
import { useKeepAwake } from "expo-keep-awake";
import { useState, useEffect, useRef, useCallback } from "react";
import {
  View,
  ScrollView,
  Text,
  Platform,
  Alert,
  BackHandler,
  Animated,
} from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

// Components
import {
  QuestionDisplay,
  AnimalCard,
  PairsAnimalCard,
  SuccessOverlay,
  StartScreen,
  AnimalsListView,
  AnimalDetailView,
  CustomDrawerContent,
  HamburgerButton,
  FontTestComponent,
  AnimatedBackground,
} from "@/components";
// Constants
import { TRANSLATIONS } from "@/constants/translations";
import { getAnimalsByMode } from "@/constants/animals";
// Styles
import { getAppStyles } from "@/styles/appStyles";
// Custom hooks
import { useGameLogic } from "@/hooks/useGameLogic";
import { usePairsGameLogic } from "@/hooks/usePairsGameLogic";
import { useResponsiveDimensions } from "@/hooks/useResponsiveDimensions";
import { useLanguageInitialization } from "@/hooks/useLanguageInitialization";
import { useMilestoneDetection } from "@/hooks/useMilestoneDetection";
// Audio utilities
import {
  loadBackgroundMusic,
  pauseBackgroundMusic,
  resumeBackgroundMusic,
  playSound,
} from "@/utils/audio";
import { Audio } from "expo-av";
// Animations
import { animateMilestoneScore } from "@/utils/animations";
// Types
import { GameMode, Animal } from "@/types";

// Keep splash screen visible while loading fonts
SplashScreen.preventAutoHideAsync();

// Create Drawer Navigator
type RootDrawerParamList = {
  Main: undefined;
  FontTest: undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParamList>();

export default function App() {
  // Keep screen awake on native devices (Android/iOS)
  // On web, this hook is a no-op
  useKeepAwake();

  const {
    language,
    isLoading: isLanguageLoading,
    setLanguage,
  } = useLanguageInitialization();
  const [gameMode, setGameMode] = useState<GameMode | null>(null);
  const shouldStartGame = useRef<boolean>(false);
  const [selectedAnimal, setSelectedAnimal] = useState<Animal | null>(null);
  const [currentAnimalIndex, setCurrentAnimalIndex] = useState<number>(0);
  const [showAnimalDetail, setShowAnimalDetail] = useState<boolean>(false);
  const [isFullScreen, setIsFullScreen] = useState<boolean>(true);
  const [listScrollIndex, setListScrollIndex] = useState<number>(0);
  const [lastSearchText, setLastSearchText] = useState<string>("");
  const [sessionScore, setSessionScore] = useState<number>(0);
  const t = TRANSLATIONS[language];

  // Milestone animation
  const milestoneScale = useRef(new Animated.Value(1)).current;

  // Background music for exhibition mode
  const exhibitionBackgroundMusic = useRef<Audio.Sound | null>(null);

  // Responsive dimensions
  const responsive = useResponsiveDimensions();
  const appStyles = getAppStyles(responsive);

  // Load Montserrat fonts
  // NOTE: Font files must be actual TrueType (.ttf) files, not HTML pages
  // If fonts aren't loading, verify with: file assets/fonts/Montserrat-Regular.ttf
  // Expected output: "TrueType Font data" (NOT "HTML document")
  const [fontsLoaded, fontError] = useFonts({
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
    "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
    "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
  });

  // Debug font loading
  useEffect(() => {
    /*     console.log("=== FONT LOADING DEBUG ===");
    console.log("Platform:", Platform.OS);
    console.log("Fonts loaded:", fontsLoaded);
    console.log("Font error:", fontError);    console.log("=== FONT LOADING DEBUG ===");
    console.log("Platform:", Platform.OS);
    console.log("Fonts loaded:", fontsLoaded);
    console.log("Font error:", fontError); */

    if (fontError) {
      console.error("Font loading error details:", fontError);
      Alert.alert(
        "Font Loading Error",
        `Failed to load fonts: ${fontError.message}\n\nThe app will use system fonts instead.`,
        [{ text: "OK" }]
      );
    }

    if (fontsLoaded) {
      // console.log("✅ All Montserrat fonts loaded successfully");
    }
  }, [fontsLoaded, fontError]);

  // Set full screen mode on app startup
  useEffect(() => {
    const enableFullScreen = async () => {
      try {
        if (Platform.OS === "android") {
          await NavigationBar.setVisibilityAsync("hidden");
          await NavigationBar.setBehaviorAsync("overlay-swipe");
        }
      } catch (error) {
        console.error("Failed to enable full screen on startup:", error);
      }
    };

    enableFullScreen();
  }, []);

  const gameLogic = useGameLogic(
    language,
    t,
    gameMode &&
      gameMode !== "animalPairs" &&
      gameMode !== "showAll" &&
      gameMode !== "secret"
      ? gameMode
      : "byName",
    sessionScore,
    setSessionScore
  );

  const pairsLogic = usePairsGameLogic(
    language,
    t,
    sessionScore,
    setSessionScore
  );

  // Destructure shared properties
  const {
    showSuccess,
    gameStarted,
    isSoundEnabled,
    successScale,
    successOpacity,
    cardAnimations,
    questionAnimation,
    animalWiggles,
    startGame,
    toggleSound,
    resetGame,
    milestoneSound,
  } = gameMode === "animalPairs" ? pairsLogic : gameLogic;

  // Mode-specific properties
  const shuffledAnimals =
    gameMode === "animalPairs" ? [] : gameLogic.shuffledAnimals;
  const pairAnimals = gameMode === "animalPairs" ? pairsLogic.pairAnimals : [];
  const currentAnimal =
    gameMode === "animalPairs" ? null : gameLogic.currentAnimal;
  const score = gameMode === "animalPairs" ? 0 : gameLogic.score;
  const wrongTileId = gameMode === "animalPairs" ? null : gameLogic.wrongTileId;
  const isAnimalSoundPlaying =
    gameMode === "animalPairs" ? false : gameLogic.isAnimalSoundPlaying;
  const replaySound =
    gameMode === "animalPairs" ? () => {} : gameLogic.replaySound;
  const handleAnimalPress =
    gameMode === "animalPairs"
      ? pairsLogic.handleAnimalPress
      : gameLogic.handleAnimalPress;
  const firstSelection =
    gameMode === "animalPairs" ? pairsLogic.firstSelection : null;
  const secondSelection =
    gameMode === "animalPairs" ? pairsLogic.secondSelection : null;
  const matchedPairIds =
    gameMode === "animalPairs" ? pairsLogic.matchedPairIds : [];
  const wrongTileIndices =
    gameMode === "animalPairs" ? pairsLogic.wrongTileIndices : [];

  // Milestone detection
  const {
    milestoneReached,
    currentMilestone,
    celebratingMilestone,
    resetCelebration,
  } = useMilestoneDetection(sessionScore);

  // Start game when mode is selected
  useEffect(() => {
    if (gameMode !== null && shouldStartGame.current) {
      shouldStartGame.current = false;
      startGame();
    }
  }, [gameMode, startGame]);

  // Manage exhibition mode background music
  useEffect(() => {
    const loadExhibitionMusic = async () => {
      if (gameMode === "showAll" || gameMode === "secret") {
        // Load and start background music for exhibition mode and secret mode
        const music = await loadBackgroundMusic(isSoundEnabled);
        exhibitionBackgroundMusic.current = music;
      } else {
        // Stop and unload music when leaving exhibition/secret mode
        if (exhibitionBackgroundMusic.current) {
          await exhibitionBackgroundMusic.current.unloadAsync();
          exhibitionBackgroundMusic.current = null;
        }
      }
    };

    loadExhibitionMusic();

    // Cleanup on unmount
    return () => {
      if (exhibitionBackgroundMusic.current) {
        exhibitionBackgroundMusic.current.unloadAsync();
      }
    };
  }, [gameMode, isSoundEnabled]);

  // Handle sound toggle for exhibition mode and secret mode
  useEffect(() => {
    if (gameMode === "showAll" || gameMode === "secret") {
      if (isSoundEnabled) {
        resumeBackgroundMusic(exhibitionBackgroundMusic.current);
      } else {
        pauseBackgroundMusic(exhibitionBackgroundMusic.current);
      }
    }
  }, [isSoundEnabled, gameMode]);

  // Celebrate milestone achievements
  useEffect(() => {
    if (
      celebratingMilestone &&
      gameMode &&
      gameMode !== "showAll" &&
      gameMode !== "secret"
    ) {
      // Reset celebration flag immediately to prevent double-triggering
      resetCelebration();

      // Play milestone sound
      if (milestoneSound && isSoundEnabled) {
        playSound(milestoneSound, exhibitionBackgroundMusic.current);
      }

      // Trigger score animation
      animateMilestoneScore(milestoneScale);
    }
  }, [
    celebratingMilestone,
    gameMode,
    isSoundEnabled,
    milestoneSound,
    milestoneScale,
    resetCelebration,
  ]);

  // Hide splash screen when fonts are loaded
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  const handleStartGame = (mode: GameMode): void => {
    if (mode === "secret") {
      // Secret mode - pick random animal from animals configured for secret mode
      const secretAnimals = getAnimalsByMode("secret");
      const randomIndex = Math.floor(Math.random() * secretAnimals.length);
      const randomAnimal = secretAnimals[randomIndex];

      setSelectedAnimal(randomAnimal);
      // Set index based on the filtered secret animals list
      setCurrentAnimalIndex(randomIndex);
      setShowAnimalDetail(true);
      setGameMode(mode);
    } else if (mode === "showAll") {
      // Exhibition mode: just set mode, skip game logic
      setGameMode(mode);
    } else {
      // Game modes: use existing logic
      shouldStartGame.current = true;
      setGameMode(mode);
    }
  };

  const handleResetGame = async (): Promise<void> => {
    if (gameMode === "showAll") {
      // Exhibition mode: simple reset, no game cleanup
      handleBackToStart();
    } else {
      // Game modes: use existing cleanup
      await resetGame();
      setGameMode(null);
    }
  };

  // Exhibition mode event handlers
  const handleAnimalSelect = (
    animal: Animal,
    scrollIndex: number,
    searchText: string
  ): void => {
    setListScrollIndex(scrollIndex);
    setLastSearchText(searchText);

    // Find the animal's index in the filtered showAll animals list
    const showAllAnimals = getAnimalsByMode("showAll");
    const animalIndex = showAllAnimals.findIndex((a) => a.id === animal.id);
    setCurrentAnimalIndex(animalIndex >= 0 ? animalIndex : 0);

    setSelectedAnimal(animal);
    setShowAnimalDetail(true);
  };

  // Handle animal change from swipe gesture
  const handleAnimalChange = (animal: Animal, newIndex: number): void => {
    setSelectedAnimal(animal);
    setCurrentAnimalIndex(newIndex);
    // Update the list scroll index to match the new animal's position in filtered list
    // Note: This works best when not searching; with search active, position may differ
  };

  const handleBackToList = (): void => {
    setShowAnimalDetail(false);
    setSelectedAnimal(null);
    // For both showAll and secret modes, stays in AnimalsListView
    // Keep listScrollIndex and lastSearchText for restoration
  };

  const handleSearchChange = (newSearchText: string): void => {
    if (newSearchText !== lastSearchText) {
      setListScrollIndex(0); // Reset scroll when search changes
      setLastSearchText(newSearchText);
    }
  };

  const handleBackToStart = (): void => {
    setGameMode(null);
    setShowAnimalDetail(false);
    setSelectedAnimal(null);
  };

  // Handle Android hardware back button
  useEffect(() => {
    const handleBackPress = (): boolean => {
      // Priority 1: Exit animal detail view -> return to list (or start for secret mode)
      if (
        (gameMode === "showAll" || gameMode === "secret") &&
        showAnimalDetail
      ) {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        handleBackToList();
        return true; // Prevent default (app exit)
      }

      // Priority 2: Exit any game mode or exhibition list -> return to start
      if (gameMode !== null) {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        // Clean up game state for game modes
        if (gameMode === "byName" || gameMode === "bySound") {
          resetGame();
        }
        handleBackToStart();
        return true; // Prevent default (app exit)
      }

      // Priority 3: On StartScreen -> show exit confirmation
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      Alert.alert(
        t.exitApp,
        t.exitAppMessage,
        [
          {
            text: t.cancel,
            style: "cancel",
          },
          {
            text: t.continue,
            style: "destructive",
            onPress: () => BackHandler.exitApp(),
          },
        ],
        { cancelable: true }
      );
      return true; // Prevent default behavior
    };

    // Add the back button listener
    const subscription = BackHandler.addEventListener(
      "hardwareBackPress",
      handleBackPress
    );

    // Cleanup function - removes listener when component unmounts or dependencies change
    return () => {
      subscription.remove();
    };
  }, [
    gameMode,
    showAnimalDetail,
    handleBackToList,
    handleBackToStart,
    resetGame,
  ]);

  const handleModeSwitch = async (newMode: GameMode): Promise<void> => {
    // If already in this mode, do nothing
    if (gameMode === newMode) {
      return;
    }

    // For ALL mode switches: use full reset to prevent music overlap
    await resetGame();

    // Then start the new mode
    if (newMode === "showAll") {
      setGameMode(newMode);
    } else {
      shouldStartGame.current = true;
      setGameMode(newMode);
    }
  };

  const handleToggleFullScreen = async (): Promise<void> => {
    try {
      const newFullScreenState = !isFullScreen;
      setIsFullScreen(newFullScreenState);

      // Hide/show navigation bar on Android
      if (Platform.OS === "android") {
        if (newFullScreenState) {
          await NavigationBar.setVisibilityAsync("hidden");
          await NavigationBar.setBehaviorAsync("overlay-swipe");
        } else {
          await NavigationBar.setVisibilityAsync("visible");
        }
      }
    } catch (error) {
      console.error("Failed to toggle full screen:", error);
    }
  };

  // Don't render app until fonts and language are loaded
  if ((!fontsLoaded && !fontError) || isLanguageLoading) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={(props) => (
            <CustomDrawerContent
              {...props}
              isSoundEnabled={isSoundEnabled}
              onToggleSound={toggleSound}
              language={language}
              onLanguageChange={setLanguage}
              onHomePress={handleResetGame}
              onModeSwitch={handleModeSwitch}
              currentGameMode={gameMode}
              isFullScreen={isFullScreen}
              onToggleFullScreen={handleToggleFullScreen}
              translations={t}
            />
          )}
          screenOptions={{
            headerShown: false,
            drawerType: "front",
            drawerStyle: {
              width: responsive.isPortrait
                ? Math.min(280, responsive.width * 0.75)
                : Math.min(320, responsive.width * 0.4),
              backgroundColor: "#FFF5E6",
            },
            overlayColor: "rgba(0, 0, 0, 0.5)",
            swipeEdgeWidth: 50,
          }}
        >
          <Drawer.Screen name="Main">
            {() => (
              <View style={appStyles.container} onLayout={onLayoutRootView}>
                <AnimatedBackground />
                <StatusBar
                  style={isFullScreen ? "light" : "auto"}
                  hidden={isFullScreen}
                />

                {/* Show HamburgerButton on all screens */}
                <HamburgerButton />

                {/* Content wrapper with max-width */}
                <View style={appStyles.contentWrapper}>
                  {!gameStarted &&
                  gameMode !== "showAll" &&
                  gameMode !== "secret" ? (
                    <StartScreen onStart={handleStartGame} translations={t} />
                  ) : gameMode === "showAll" || gameMode === "secret" ? (
                    showAnimalDetail ? (
                      <AnimalDetailView
                        animal={selectedAnimal!}
                        animals={getAnimalsByMode(gameMode)}
                        currentIndex={currentAnimalIndex}
                        onAnimalChange={handleAnimalChange}
                        translations={t}
                        onBackPress={handleBackToList}
                        isSoundEnabled={isSoundEnabled}
                        backgroundMusic={exhibitionBackgroundMusic.current}
                        language={language}
                      />
                    ) : (
                      <AnimalsListView
                        animals={getAnimalsByMode("showAll")}
                        translations={t}
                        onAnimalPress={handleAnimalSelect}
                        isSoundEnabled={isSoundEnabled}
                        scrollToIndex={listScrollIndex}
                        onScrollIndexChange={setListScrollIndex}
                        onSearchChange={handleSearchChange}
                      />
                    )
                  ) : (
                    <>
                      <ScrollView
                        contentContainerStyle={appStyles.scrollContent}
                        showsVerticalScrollIndicator={false}
                      >
                      <Animated.View
                        style={[
                          appStyles.scoreContainer,
                          {
                            transform: [{ scale: milestoneScale }],
                          },
                        ]}
                      >
                        <Text style={appStyles.scoreText}>
                          {t.score}: {sessionScore}
                        </Text>
                      </Animated.View>

                      <QuestionDisplay
                        currentAnimal={currentAnimal}
                        translations={t}
                        questionAnimation={questionAnimation}
                        gameMode={gameMode || "byName"}
                        onReplaySound={
                          gameMode === "bySound" ? replaySound : undefined
                        }
                        isReplayingSound={isAnimalSoundPlaying}
                      />

                      <View style={appStyles.gridContainer}>
                        {gameMode === "animalPairs"
                          ? // Pairs mode - 6 tiles
                            pairAnimals.map((animal, index) => {
                              const isMatched = matchedPairIds.includes(
                                animal.id
                              );
                              const isSelected =
                                firstSelection?.tileIndex === index ||
                                secondSelection?.tileIndex === index;
                              const isWrong = wrongTileIndices.includes(index);

                              return (
                                <PairsAnimalCard
                                  key={`${animal.id}-${index}`}
                                  animal={animal}
                                  tileIndex={index}
                                  isMatched={isMatched}
                                  isSelected={isSelected}
                                  isWrong={isWrong}
                                  wiggleAnimation={animalWiggles[index]}
                                  cardAnimation={cardAnimations[index]}
                                  cardAnimations={cardAnimations}
                                  translations={t}
                                  onPress={handleAnimalPress}
                                  index={index}
                                />
                              );
                            })
                          : // Regular modes - 6 tiles
                            shuffledAnimals.map((animal, index) => {
                              const isWrong = wrongTileId === animal.id;

                              return (
                                <AnimalCard
                                  key={animal.id}
                                  animal={animal}
                                  isWrong={isWrong}
                                  wiggleAnimation={animalWiggles[index]}
                                  cardAnimation={cardAnimations[index]}
                                  translations={t}
                                  onPress={() =>
                                    handleAnimalPress(animal, index)
                                  }
                                />
                              );
                            })}
                      </View>
                    </ScrollView>

                      <SuccessOverlay
                        visible={showSuccess}
                        translations={t}
                        successScale={successScale}
                        successOpacity={successOpacity}
                      />
                    </>
                  )}
                </View>
              </View>
            )}
          </Drawer.Screen>

          {/* Font Test Screen - Development only */}
          <Drawer.Screen name="FontTest">
            {() => <FontTestComponent />}
          </Drawer.Screen>
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

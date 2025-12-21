import { StatusBar } from "expo-status-bar";
import * as NavigationBar from "expo-navigation-bar";
import { useState, useEffect, useRef, useCallback } from "react";
import { View, ScrollView, Text, Platform, Alert } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

// Components
import {
  QuestionDisplay,
  AnimalCard,
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
import { ANIMALS } from "@/constants/animals";
// Styles
import { getAppStyles } from "@/styles/appStyles";
// Custom hooks
import { useGameLogic } from "@/hooks/useGameLogic";
import { useResponsiveDimensions } from "@/hooks/useResponsiveDimensions";
import { useLanguageInitialization } from "@/hooks/useLanguageInitialization";
// Audio utilities
import {
  loadBackgroundMusic,
  pauseBackgroundMusic,
  resumeBackgroundMusic,
} from "@/utils/audio";
import { Audio } from "expo-av";
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
  const {
    language,
    isLoading: isLanguageLoading,
    setLanguage,
  } = useLanguageInitialization();
  const [gameMode, setGameMode] = useState<GameMode | null>(null);
  const shouldStartGame = useRef<boolean>(false);
  const [selectedAnimal, setSelectedAnimal] = useState<Animal | null>(null);
  const [showAnimalDetail, setShowAnimalDetail] = useState<boolean>(false);
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
  const [listScrollIndex, setListScrollIndex] = useState<number>(0);
  const [lastSearchText, setLastSearchText] = useState<string>("");
  const t = TRANSLATIONS[language];

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
    console.log("=== FONT LOADING DEBUG ===");
    console.log("Platform:", Platform.OS);
    console.log("Fonts loaded:", fontsLoaded);
    console.log("Font error:", fontError);

    if (fontError) {
      console.error("Font loading error details:", fontError);
      Alert.alert(
        "Font Loading Error",
        `Failed to load fonts: ${fontError.message}\n\nThe app will use system fonts instead.`,
        [{ text: "OK" }]
      );
    }

    if (fontsLoaded) {
      console.log("✅ All Montserrat fonts loaded successfully");
    }
  }, [fontsLoaded, fontError]);

  const {
    shuffledAnimals,
    currentAnimal,
    showSuccess,
    score,
    wrongTileId,
    gameStarted,
    isSoundEnabled,
    isAnimalSoundPlaying,
    successScale,
    successOpacity,
    cardAnimations,
    questionAnimation,
    animalWiggles,
    handleAnimalPress,
    startGame,
    toggleSound,
    resetGame,
    replaySound,
  } = useGameLogic(language, t, gameMode || "byName");

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
      if (gameMode === "showAll") {
        // Load and start background music for exhibition mode
        const music = await loadBackgroundMusic(isSoundEnabled);
        exhibitionBackgroundMusic.current = music;
      } else {
        // Stop and unload music when leaving exhibition mode
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

  // Handle sound toggle for exhibition mode
  useEffect(() => {
    if (gameMode === "showAll") {
      if (isSoundEnabled) {
        resumeBackgroundMusic(exhibitionBackgroundMusic.current);
      } else {
        pauseBackgroundMusic(exhibitionBackgroundMusic.current);
      }
    }
  }, [isSoundEnabled, gameMode]);

  // Hide splash screen when fonts are loaded
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  const handleStartGame = (mode: GameMode): void => {
    if (mode === "showAll") {
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
    setSelectedAnimal(animal);
    setShowAnimalDetail(true);
  };

  const handleBackToList = (): void => {
    setShowAnimalDetail(false);
    setSelectedAnimal(null);
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

                {!gameStarted && gameMode !== "showAll" ? (
                  <StartScreen onStart={handleStartGame} translations={t} />
                ) : gameMode === "showAll" ? (
                  showAnimalDetail ? (
                    <AnimalDetailView
                      animal={selectedAnimal!}
                      translations={t}
                      onBackPress={handleBackToList}
                      isSoundEnabled={isSoundEnabled}
                      backgroundMusic={exhibitionBackgroundMusic.current}
                      language={language}
                    />
                  ) : (
                    <AnimalsListView
                      animals={ANIMALS}
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
                      <View style={appStyles.scoreContainer}>
                        <Text style={appStyles.scoreText}>
                          {t.score}: {score}
                        </Text>
                      </View>

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
                        {shuffledAnimals.map((animal, index) => {
                          const isWrong = wrongTileId === animal.id;

                          return (
                            <AnimalCard
                              key={animal.id}
                              animal={animal}
                              isWrong={isWrong}
                              wiggleAnimation={animalWiggles[index]}
                              cardAnimation={cardAnimations[index]}
                              translations={t}
                              onPress={() => handleAnimalPress(animal)}
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

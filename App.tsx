import { StatusBar } from "expo-status-bar";
import { useState, useEffect, useRef, useCallback } from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { SafeAreaProvider } from "react-native-safe-area-context";

// Components
import {
  LanguageSwitcher,
  LanguageDropdown,
  QuestionDisplay,
  AnimalCard,
  SuccessOverlay,
  StartScreen,
  SoundToggle,
  AnimalsListView,
  AnimalDetailView,
} from "@/components";

// Constants
import { TRANSLATIONS } from "@/constants/translations";
import { FONTS } from "@/constants/fonts";
import { ANIMALS } from "@/constants/animals";

// Styles
import { getAppStyles } from "@/styles/appStyles";

// Custom hooks
import { useGameLogic } from "@/hooks/useGameLogic";
import {
  useResponsiveDimensions,
  ResponsiveDimensions,
} from "@/hooks/useResponsiveDimensions";
import { useLanguageInitialization } from "@/hooks/useLanguageInitialization";

// Audio utilities
import { loadBackgroundMusic, pauseBackgroundMusic, resumeBackgroundMusic } from "@/utils/audio";
import { Audio } from "expo-av";

// Types
import { Language, GameMode, Animal } from "@/types";

// Keep splash screen visible while loading fonts
SplashScreen.preventAutoHideAsync();

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
  const t = TRANSLATIONS[language];

  // Background music for exhibition mode
  const exhibitionBackgroundMusic = useRef<Audio.Sound | null>(null);

  // Responsive dimensions
  const responsive = useResponsiveDimensions();
  const appStyles = getAppStyles(responsive);
  const styles = getLocalStyles(responsive);

  // Load Montserrat fonts
  const [fontsLoaded, fontError] = useFonts({
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
    "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
    "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
  });

  const {
    shuffledAnimals,
    currentAnimal,
    showSuccess,
    score,
    wrongTileId,
    gameStarted,
    isSoundEnabled,
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
      if (gameMode === 'showAll') {
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
    if (gameMode === 'showAll') {
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
    if (mode === 'showAll') {
      // Exhibition mode: just set mode, skip game logic
      setGameMode(mode);
    } else {
      // Game modes: use existing logic
      shouldStartGame.current = true;
      setGameMode(mode);
    }
  };

  const handleResetGame = async (): Promise<void> => {
    if (gameMode === 'showAll') {
      // Exhibition mode: simple reset, no game cleanup
      handleBackToStart();
    } else {
      // Game modes: use existing cleanup
      await resetGame();
      setGameMode(null);
    }
  };

  // Exhibition mode event handlers
  const handleAnimalSelect = (animal: Animal): void => {
    setSelectedAnimal(animal);
    setShowAnimalDetail(true);
  };

  const handleBackToList = (): void => {
    setShowAnimalDetail(false);
    setSelectedAnimal(null);
  };

  const handleBackToStart = (): void => {
    setGameMode(null);
    setShowAnimalDetail(false);
    setSelectedAnimal(null);
  };

  // Don't render app until fonts and language are loaded
  if ((!fontsLoaded && !fontError) || isLanguageLoading) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <View style={appStyles.container} onLayout={onLayoutRootView}>
        <StatusBar style="auto" />

      {/* Show SoundToggle for all modes except start screen */}
      {(gameStarted || gameMode === 'showAll') && (
        <SoundToggle isSoundEnabled={isSoundEnabled} onToggle={toggleSound} />
      )}

      {!gameStarted && gameMode !== 'showAll' ? (
        <StartScreen
          onStart={handleStartGame}
          language={language}
          onLanguageChange={setLanguage}
        />
      ) : gameMode === 'showAll' ? (
        showAnimalDetail ? (
          <AnimalDetailView
            animal={selectedAnimal!}
            translations={t}
            language={language}
            onLanguageChange={setLanguage}
            onBackPress={handleBackToList}
            isSoundEnabled={isSoundEnabled}
            backgroundMusic={exhibitionBackgroundMusic.current}
          />
        ) : (
          <AnimalsListView
            animals={ANIMALS}
            translations={t}
            language={language}
            onLanguageChange={setLanguage}
            onAnimalPress={handleAnimalSelect}
            onBackPress={handleBackToStart}
            isSoundEnabled={isSoundEnabled}
          />
        )
      ) : (
        <>
          <ScrollView
            contentContainerStyle={appStyles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.topBar}>
              <TouchableOpacity
                style={styles.resetButton}
                onPress={handleResetGame}
                activeOpacity={0.7}
                id="return-to-home-page"
              >
                <Text style={styles.resetButtonText}>
                  🏠 {t.startFromBeginning}
                </Text>
              </TouchableOpacity>

              <LanguageDropdown
                language={language}
                onLanguageChange={setLanguage}
              />
            </View>

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
              onReplaySound={gameMode === "bySound" ? replaySound : undefined}
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
    </SafeAreaProvider>
  );
}

const getLocalStyles = (responsive: ResponsiveDimensions) =>
  StyleSheet.create({
    topBar: {
      flexDirection: responsive.isLandscape ? "row" : "column",
      justifyContent: "flex-start",
      gap: responsive.spacing.sm,
      alignItems: responsive.isLandscape ? "center" : "stretch",
      paddingHorizontal: responsive.spacing.sm,
    },
    resetButton: {
      paddingHorizontal: 15,
      paddingVertical: 8,
      backgroundColor: "#FFE66D",
      borderRadius: 20,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 2,
    },
    resetButtonText: {
      fontSize: 14 * responsive.fontScale,
      fontFamily: FONTS.semiBold,
      color: "#333",
    },
  });

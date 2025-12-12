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

// Components
import {
  LanguageSwitcher,
  QuestionDisplay,
  AnimalCard,
  SuccessOverlay,
  StartScreen,
  SoundToggle,
} from "@/components";

// Constants
import { TRANSLATIONS } from "@/constants/translations";
import { FONTS } from "@/constants/fonts";

// Styles
import { getAppStyles } from "@/styles/appStyles";

// Custom hooks
import { useGameLogic } from "@/hooks/useGameLogic";
import {
  useResponsiveDimensions,
  ResponsiveDimensions,
} from "@/hooks/useResponsiveDimensions";

// Types
import { Language, GameMode } from "@/types";

// Keep splash screen visible while loading fonts
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [language, setLanguage] = useState<Language>("uk");
  const [gameMode, setGameMode] = useState<GameMode | null>(null);
  const shouldStartGame = useRef<boolean>(false);
  const t = TRANSLATIONS[language];

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

  // Hide splash screen when fonts are loaded
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  const handleStartGame = (mode: GameMode): void => {
    shouldStartGame.current = true;
    setGameMode(mode);
  };

  const handleResetGame = async (): Promise<void> => {
    await resetGame();
    setGameMode(null);
  };

  // Don't render app until fonts are loaded
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={appStyles.container} onLayout={onLayoutRootView}>
      <StatusBar style="auto" />

      <SoundToggle isSoundEnabled={isSoundEnabled} onToggle={toggleSound} />

      {!gameStarted ? (
        <StartScreen
          onStart={handleStartGame}
          language={language}
          onLanguageChange={setLanguage}
        />
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
              >
                <Text style={styles.resetButtonText}>
                  🏠 {t.startFromBeginning}
                </Text>
              </TouchableOpacity>

              <LanguageSwitcher
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
  );
}

const getLocalStyles = (responsive: ResponsiveDimensions) =>
  StyleSheet.create({
    topBar: {
      flexDirection: "row",
      justifyContent: "flex-start",
      gap: responsive.spacing.sm,
      alignItems: "center",
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

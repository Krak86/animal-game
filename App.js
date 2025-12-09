import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

// Components
import {
  LanguageSwitcher,
  QuestionDisplay,
  AnimalCard,
  SuccessOverlay,
  StartScreen,
  SoundToggle,
} from "./src/components";

// Constants
import { ANIMALS } from "./src/constants/animals";
import { TRANSLATIONS } from "./src/constants/translations";

// Styles
import { appStyles } from "./src/styles/appStyles";

// Custom hook
import { useGameLogic } from "./src/hooks/useGameLogic";

export default function App() {
  const [language, setLanguage] = useState("uk");
  const t = TRANSLATIONS[language];

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
  } = useGameLogic(language, t);

  return (
    <View style={appStyles.container}>
      <StatusBar style="auto" />

      <SoundToggle isSoundEnabled={isSoundEnabled} onToggle={toggleSound} />

      {!gameStarted ? (
        <StartScreen
          onStart={startGame}
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
                onPress={resetGame}
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
            />

            <View style={appStyles.gridContainer}>
              {shuffledAnimals.map((animal, index) => {
                const isWrong = wrongTileId === animal.id;
                const wiggleIndex = ANIMALS.findIndex(
                  (a) => a.id === animal.id
                );

                return (
                  <AnimalCard
                    key={animal.id}
                    animal={animal}
                    isWrong={isWrong}
                    wiggleAnimation={animalWiggles[wiggleIndex]}
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

const styles = StyleSheet.create({
  topBar: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 10,
    alignItems: "center",
    paddingHorizontal: 10,
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
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },
});

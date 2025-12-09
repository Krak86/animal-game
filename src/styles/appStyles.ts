import { StyleSheet } from "react-native";

import { COLORS } from "@/styles/colors";

export const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContent: {
    paddingTop: 30,
    paddingHorizontal: 10,
    paddingBottom: 20,
    flexGrow: 1,
  },
  scoreContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  scoreText: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.accent,
  },
  questionContainer: {
    alignItems: "center",
    marginBottom: 20,
    padding: 20,
    backgroundColor: COLORS.secondary,
    borderRadius: 20,
    marginHorizontal: 20,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  questionText: {
    fontSize: 24,
    fontWeight: "600",
    color: COLORS.dark,
  },
  animalNameText: {
    fontSize: 36,
    fontWeight: "bold",
    color: COLORS.accent,
    marginTop: 5,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingHorizontal: 5,
  },
});

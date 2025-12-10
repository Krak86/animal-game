import { StyleSheet, Dimensions } from "react-native";

import { COLORS } from "@/styles/colors";
import { FONTS } from "@/constants/fonts";

const { width } = Dimensions.get("window");

export const languageSwitcherStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
    gap: 10,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: COLORS.white,
    borderWidth: 2,
    borderColor: COLORS.lightGray,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  buttonActive: {
    borderColor: COLORS.primary,
    backgroundColor: COLORS.primaryLight,
  },
  flagEmoji: {
    fontSize: 14,
  },
  text: {
    fontSize: 14,
    fontFamily: FONTS.semiBold,
    color: COLORS.gray,
  },
  textActive: {
    color: COLORS.primary,
  },
});

export const animalCardStyles = StyleSheet.create({
  wrapper: {
    width: width * 0.28,
    marginBottom: 15,
  },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 15,
    padding: 10,
    alignItems: "center",
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 3,
    borderColor: COLORS.primary,
  },
  cardWrong: {
    borderColor: COLORS.error,
    borderWidth: 4,
  },
  imageContainer: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  emojiImage: {
    fontSize: 50,
    zIndex: 2,
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 10,
    opacity: 0.2,
    zIndex: 1,
  },
  label: {
    marginTop: 8,
    fontSize: 14,
    fontFamily: FONTS.semiBold,
    color: COLORS.dark,
    textAlign: "center",
  },
});

export const successOverlayStyles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  box: {
    backgroundColor: COLORS.primary,
    borderRadius: 30,
    padding: 40,
    alignItems: "center",
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  emoji: {
    fontSize: 80,
    marginBottom: 20,
  },
  text: {
    fontSize: 36,
    fontFamily: FONTS.bold,
    color: COLORS.white,
    marginBottom: 10,
  },
  subtext: {
    fontSize: 20,
    color: COLORS.white,
    fontFamily: FONTS.semiBold,
  },
});

import { StyleSheet } from "react-native";

import { COLORS } from "@/styles/colors";
import { FONTS } from "@/constants/fonts";
import { ResponsiveDimensions } from "@/hooks/useResponsiveDimensions";

export const getLanguageSwitcherStyles = (responsive: ResponsiveDimensions) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "center",
      marginBottom: responsive.spacing.sm,
      gap: responsive.spacing.sm,
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
    languageText: {
      fontSize: 13 * responsive.fontScale,
      fontFamily: FONTS.bold,
      color: COLORS.dark,
    },
    text: {
      fontSize: 14 * responsive.fontScale,
      fontFamily: FONTS.semiBold,
      color: COLORS.gray,
    },
    textActive: {
      color: COLORS.primary,
    },
  });

export const getAnimalCardStyles = (responsive: ResponsiveDimensions) => {
  const imageSize = responsive.cardSize - 20; // Subtract padding

  return StyleSheet.create({
    wrapper: {
      width: responsive.cardSize,
      marginBottom: responsive.spacing.md,
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
      width: imageSize,
      height: imageSize,
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
    },
    emojiImage: {
      fontSize: Math.round(imageSize * 0.47), // Proportional to image size (converted to size by EmojiSvg)
      zIndex: 2,
      opacity: 1,
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
      marginTop: responsive.spacing.xs,
      fontSize: 14 * responsive.fontScale,
      fontFamily: FONTS.semiBold,
      color: COLORS.dark,
      textAlign: "center",
    },
  });
};

export const getLanguageDropdownStyles = (responsive: ResponsiveDimensions) =>
  StyleSheet.create({
    container: {
      position: "relative",
      zIndex: 1000,
    },
    selectedButton: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 15,
      paddingVertical: 8,
      borderRadius: 20,
      backgroundColor: COLORS.primaryLight,
      borderWidth: 2,
      borderColor: COLORS.primary,
      shadowColor: COLORS.black,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 2,
      minWidth: 80,
      justifyContent: "space-between",
      gap: 8,
    },
    selectedText: {
      fontSize: 13 * responsive.fontScale,
      fontFamily: FONTS.bold,
      color: COLORS.dark,
    },
    arrowIcon: {
      fontSize: 10 * responsive.fontScale,
      color: COLORS.gray,
    },
    modalOverlay: {
      flex: 1,
      backgroundColor: "rgba(0, 0, 0, 0.3)",
    },
    dropdownContainer: {
      position: "absolute",
      backgroundColor: COLORS.white,
      borderRadius: 15,
      borderWidth: 2,
      borderColor: COLORS.lightGray,
      shadowColor: COLORS.black,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 5,
      overflow: "hidden",
      minWidth: 100,
    },
    optionButton: {
      paddingHorizontal: 20,
      paddingVertical: 12,
      borderBottomWidth: 1,
      borderBottomColor: COLORS.lightGray,
    },
    optionButtonLast: {
      borderBottomWidth: 0,
    },
    optionButtonActive: {
      backgroundColor: COLORS.primaryLight,
    },
    optionText: {
      fontSize: 13 * responsive.fontScale,
      fontFamily: FONTS.semiBold,
      color: COLORS.dark,
      textAlign: "center",
    },
    optionTextActive: {
      fontFamily: FONTS.bold,
      color: COLORS.primary,
    },
  });

export const getSuccessOverlayStyles = (responsive: ResponsiveDimensions) =>
  StyleSheet.create({
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
      padding: responsive.spacing.xl,
      alignItems: "center",
      shadowColor: COLORS.black,
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 0.3,
      shadowRadius: 20,
      elevation: 10,
      maxWidth: responsive.width * 0.8,
    },
    emoji: {
      fontSize: 80 * responsive.fontScale,
      marginBottom: responsive.spacing.lg,
    },
    text: {
      fontSize: 36 * responsive.fontScale,
      fontFamily: FONTS.bold,
      color: COLORS.white,
      marginBottom: responsive.spacing.sm,
      textAlign: "center",
    },
    subtext: {
      fontSize: 20 * responsive.fontScale,
      color: COLORS.white,
      fontFamily: FONTS.semiBold,
    },
  });

export const getAnimalsListViewStyles = (responsive: ResponsiveDimensions) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.background,
    },
    header: {
      flexDirection: responsive.isLandscape ? "row" : "column",
      justifyContent: "space-between",
      alignItems: responsive.isLandscape ? "center" : "stretch",
      paddingHorizontal: responsive.spacing.sm,
      paddingVertical: responsive.spacing.sm,
      gap: responsive.spacing.sm,
    },
    backButton: {
      paddingHorizontal: 15,
      paddingVertical: 8,
      backgroundColor: COLORS.secondary,
      borderRadius: 20,
      shadowColor: COLORS.black,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 2,
    },
    backButtonText: {
      fontSize: 14 * responsive.fontScale,
      fontFamily: FONTS.semiBold,
      color: COLORS.dark,
    },
    titleContainer: {
      alignItems: "center",
      paddingVertical: responsive.spacing.md,
    },
    title: {
      fontSize: responsive.isLandscape
        ? 24 * responsive.fontScale
        : 32 * responsive.fontScale,
      fontFamily: FONTS.bold,
      color: COLORS.accent,
    },
    gridContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-around",
      paddingHorizontal: responsive.spacing.sm,
      paddingBottom: responsive.spacing.lg,
    },
    scrollContent: {
      flexGrow: 1,
      paddingHorizontal: responsive.spacing.sm,
      paddingBottom: responsive.spacing.lg,
    },
    searchContainer: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: responsive.spacing.md,
      paddingBottom: responsive.spacing.sm,
      position: "relative",
    },
    searchInput: {
      flex: 1,
      height: 45,
      backgroundColor: COLORS.white,
      borderRadius: 25,
      paddingHorizontal: 20,
      paddingRight: 50,
      fontSize: 16 * responsive.fontScale,
      fontFamily: FONTS.regular,
      color: COLORS.dark,
      shadowColor: COLORS.black,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    clearButton: {
      position: "absolute",
      right: responsive.spacing.md + 15,
      width: 30,
      height: 30,
      borderRadius: 15,
      backgroundColor: COLORS.lightGray,
      justifyContent: "center",
      alignItems: "center",
    },
    clearButtonText: {
      fontSize: 18 * responsive.fontScale,
      color: COLORS.dark,
      fontFamily: FONTS.semiBold,
    },
    noResultsContainer: {
      width: "100%",
      paddingVertical: responsive.spacing.xl * 2,
      alignItems: "center",
    },
    noResultsText: {
      fontSize: 18 * responsive.fontScale,
      fontFamily: FONTS.medium,
      color: COLORS.dark,
      opacity: 0.6,
    },
  });

export const getAnimalDetailViewStyles = (responsive: ResponsiveDimensions) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.background,
    },
    header: {
      flexDirection: responsive.isLandscape ? "row" : "column",
      justifyContent: "space-between",
      alignItems: responsive.isLandscape ? "center" : "stretch",
      paddingHorizontal: responsive.spacing.sm,
      paddingVertical: responsive.spacing.sm,
      gap: responsive.spacing.sm,
    },
    backButton: {
      paddingHorizontal: 15,
      paddingVertical: 8,
      backgroundColor: COLORS.secondary,
      borderRadius: 20,
      shadowColor: COLORS.black,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 2,
    },
    backButtonText: {
      fontSize: 14 * responsive.fontScale,
      fontFamily: FONTS.semiBold,
      color: COLORS.dark,
    },
    contentContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: responsive.spacing.lg,
    },
    emoji: {
      fontSize: responsive.isLandscape
        ? 100 * responsive.fontScale
        : 140 * responsive.fontScale,
      marginBottom: responsive.spacing.lg,
    },
    animalName: {
      fontSize: responsive.isLandscape
        ? 32 * responsive.fontScale
        : 42 * responsive.fontScale,
      fontFamily: FONTS.bold,
      color: COLORS.accent,
      marginBottom: responsive.spacing.xl,
      textAlign: "center",
    },
    buttonContainer: {
      flexDirection: "row",
      gap: responsive.spacing.md,
      marginTop: responsive.spacing.lg,
      flexWrap: "wrap",
      justifyContent: "center",
    },
    actionButton: {
      paddingHorizontal: 25,
      paddingVertical: 15,
      borderRadius: 20,
      backgroundColor: COLORS.primary,
      shadowColor: COLORS.black,
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.2,
      shadowRadius: 5,
      elevation: 3,
      minWidth: 130,
      alignItems: "center",
    },
    actionButtonText: {
      fontSize: 16 * responsive.fontScale,
      fontFamily: FONTS.semiBold,
      color: COLORS.white,
      textAlign: "center",
    },
    actionButtonDisabled: {
      opacity: 0.5,
      backgroundColor: COLORS.lightGray,
    },
    actionButtonTextDisabled: {
      opacity: 0.5,
    },
  });

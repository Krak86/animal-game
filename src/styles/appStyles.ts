import { StyleSheet } from "react-native";

import { COLORS } from "@/styles/colors";
import { FONTS } from "@/constants/fonts";
import { ResponsiveDimensions } from "@/hooks/useResponsiveDimensions";

export const getAppStyles = (responsive: ResponsiveDimensions) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.background,
    },
    scrollContent: {
      paddingTop: responsive.spacing.lg,
      paddingHorizontal: responsive.spacing.sm,
      paddingBottom: responsive.spacing.lg,
      flexGrow: 1,
    },
    scoreContainer: {
      alignItems: "center",
      marginBottom: responsive.spacing.sm,
    },
    scoreText: {
      fontSize: 24 * responsive.fontScale,
      fontFamily: FONTS.bold,
      color: COLORS.accent,
    },
    questionContainer: {
      alignItems: "center",
      marginBottom: responsive.spacing.lg,
      padding: responsive.spacing.lg,
      backgroundColor: COLORS.secondary,
      borderRadius: 20,
      marginHorizontal: responsive.spacing.lg,
      shadowColor: COLORS.black,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 8,
      elevation: 5,
    },
    questionText: {
      fontSize: 24 * responsive.fontScale,
      fontFamily: FONTS.semiBold,
      color: COLORS.dark,
    },
    animalNameText: {
      fontSize: 36 * responsive.fontScale,
      fontFamily: FONTS.bold,
      color: COLORS.accent,
      marginTop: 5,
    },
    gridContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-around",
      paddingHorizontal: responsive.spacing.xs,
    },
  });

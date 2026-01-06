import { TouchableOpacity, StyleSheet, Text, Animated } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { COLORS } from "@/styles/colors";
import {
  useResponsiveDimensions,
  ResponsiveDimensions,
} from "@/hooks/useResponsiveDimensions";
import { useHoverEffect } from "@/hooks/useHoverEffect";

type RootDrawerParamList = {
  Main: undefined;
};

export const HamburgerButton: React.FC = () => {
  const navigation = useNavigation<DrawerNavigationProp<RootDrawerParamList>>();
  const responsive = useResponsiveDimensions();
  const insets = useSafeAreaInsets();
  const styles = getHamburgerStyles(responsive, insets);

  const hover = useHoverEffect({
    baseColor: COLORS.white,
  });

  return (
    <Animated.View style={[styles.button, { backgroundColor: hover.backgroundColor }, hover.cursorStyle]}>
      <TouchableOpacity
        style={styles.buttonInner}
        onPress={() => navigation.openDrawer()}
        activeOpacity={0.7}
        {...hover.handlers}
      >
        <Text style={styles.icon}>☰</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const getHamburgerStyles = (
  responsive: ResponsiveDimensions,
  insets: { top: number; left: number }
) => {
  const buttonSize = Math.max(45, Math.min(60, responsive.width * 0.12));

  return StyleSheet.create({
    button: {
      position: "absolute",
      top: insets.top + responsive.spacing.xs,
      left: insets.left + responsive.spacing.xs,
      borderRadius: 10,
      width: buttonSize,
      height: buttonSize,
      shadowColor: COLORS.black,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 3,
      zIndex: 100,
    },
    buttonInner: {
      width: "100%",
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
    icon: {
      fontSize: 24 * responsive.fontScale,
      color: COLORS.dark,
    },
  });
};

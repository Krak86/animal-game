import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { COLORS } from "@/styles/colors";
import {
  useResponsiveDimensions,
  ResponsiveDimensions,
} from "@/hooks/useResponsiveDimensions";

type RootDrawerParamList = {
  Main: undefined;
};

export const HamburgerButton: React.FC = () => {
  const navigation = useNavigation<DrawerNavigationProp<RootDrawerParamList>>();
  const responsive = useResponsiveDimensions();
  const insets = useSafeAreaInsets();
  const styles = getHamburgerStyles(responsive, insets);

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.openDrawer()}
      activeOpacity={0.7}
    >
      <Text style={styles.icon}>☰</Text>
    </TouchableOpacity>
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
      backgroundColor: COLORS.white,
      borderRadius: 10,
      width: buttonSize,
      height: buttonSize,
      justifyContent: "center",
      alignItems: "center",
      shadowColor: COLORS.black,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 3,
      zIndex: 100,
    },
    icon: {
      fontSize: 24 * responsive.fontScale,
      color: COLORS.dark,
    },
  });
};

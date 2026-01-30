import React from "react";
import { Modal, View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Animal3DViewer } from "./Animal3DViewer";
import { getModel3DModalStyles } from "@/styles/componentStyles";
import { useResponsiveDimensions } from "@/hooks/useResponsiveDimensions";
import { EmojiSvg } from "@/components/EmojiSvg";
import { Translations } from "@/types";

interface Model3DModalProps {
  visible: boolean;
  glbUrl?: string | number;
  onClose: () => void;
  animalName: string;
  translations: Translations;
}

export const Model3DModal: React.FC<Model3DModalProps> = ({
  visible,
  glbUrl,
  onClose,
  translations,
}) => {
  const responsive = useResponsiveDimensions();
  const styles = getModel3DModalStyles(responsive);

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
      statusBarTranslucent
    >
      <View style={styles.modalOverlay}>
        <TouchableOpacity
          style={[styles.closeButton, { zIndex: 10 }]}
          onPress={onClose}
          activeOpacity={0.7}
        >
          <EmojiSvg emoji="✕" style={styles.closeButtonText} />
        </TouchableOpacity>

        <View style={localStyles.container}>
          {glbUrl ? (
            <Animal3DViewer source={glbUrl} backgroundColor="rgba(0,0,0,0.8)" />
          ) : (
            <View style={styles.contentContainer}>
              <EmojiSvg emoji="🎮" style={styles.emoji} />
              <Text style={styles.comingSoonText}>
                {translations.view3DModel}
                {"\n"}
                {translations.comingSoon}!
              </Text>
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
});

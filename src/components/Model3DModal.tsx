import React from "react";
import { Modal, View, TouchableOpacity, Text } from "react-native";

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
  animalName,
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
        {/* Close button */}
        <TouchableOpacity
          style={styles.closeButton}
          onPress={onClose}
          activeOpacity={0.7}
        >
          <EmojiSvg emoji="✕" style={styles.closeButtonText} />
        </TouchableOpacity>

        {/* Coming Soon content */}
        <View style={styles.contentContainer}>
          <EmojiSvg emoji="🎮" style={styles.emoji} />
          <Text style={styles.comingSoonText}>
            {translations.view3DModel}
            {"\n"}
            {translations.comingSoon}!
          </Text>
        </View>
      </View>
    </Modal>
  );
};

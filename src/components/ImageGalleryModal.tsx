import React, { useState, useRef } from "react";
import { Modal, View, TouchableOpacity } from "react-native";
import Carousel from "react-native-reanimated-carousel";

import { getImageGalleryModalStyles } from "@/styles/componentStyles";
import { useResponsiveDimensions } from "@/hooks/useResponsiveDimensions";
import { EmojiSvg } from "@/components/EmojiSvg";
import { ZoomableImage } from "@/components/ZoomableImage";

interface ImageGalleryModalProps {
  visible: boolean;
  images: string[];
  onClose: () => void;
  animalName: string;
}

export const ImageGalleryModal: React.FC<ImageGalleryModalProps> = ({
  visible,
  images,
  onClose,
  animalName,
}) => {
  const responsive = useResponsiveDimensions();
  const styles = getImageGalleryModalStyles(responsive);
  const windowWidth = responsive.width;
  const windowHeight = responsive.height;

  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<any>(null);

  const renderItem = ({ item, index }: { item: string; index: number }) => (
    <View style={styles.imageContainer}>
      <ZoomableImage
        uri={item}
        width={windowWidth}
        height={windowHeight * 0.7}
        accessibilityLabel={`${animalName} image ${index + 1} of ${images.length}`}
      />
    </View>
  );

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

        {/* Carousel */}
        <View style={styles.carouselContainer}>
          <Carousel
            ref={carouselRef}
            loop={true}
            width={windowWidth}
            height={windowHeight * 0.7}
            data={images}
            renderItem={renderItem}
            onSnapToItem={(index) => setCurrentIndex(index)}
            pagingEnabled={true}
            enabled={true}
          />
        </View>
      </View>
    </Modal>
  );
};

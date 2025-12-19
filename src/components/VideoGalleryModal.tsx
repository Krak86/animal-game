import React, { useState, useRef, useEffect } from "react";
import { Modal, View, TouchableOpacity, ActivityIndicator } from "react-native";
import { Video, ResizeMode, AVPlaybackStatus } from "expo-av";
import { getVideoGalleryModalStyles } from "@/styles/componentStyles";
import { useResponsiveDimensions } from "@/hooks/useResponsiveDimensions";
import { EmojiSvg } from "@/components/EmojiSvg";
import { COLORS } from "@/styles/colors";

interface VideoGalleryModalProps {
  visible: boolean;
  videoUrls: string[];
  onClose: () => void;
  animalName: string;
}

export const VideoGalleryModal: React.FC<VideoGalleryModalProps> = ({
  visible,
  videoUrls,
  onClose,
  animalName,
}) => {
  const responsive = useResponsiveDimensions();
  const styles = getVideoGalleryModalStyles(responsive);
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<Video>(null);

  // Extract YouTube video ID from URL
  const getYouTubeVideoId = (url: string): string | null => {
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match && match[1]) {
        return match[1];
      }
    }
    return null;
  };

  // Convert YouTube URL to embeddable format
  const getVideoUri = (url: string): string => {
    const videoId = getYouTubeVideoId(url);
    if (videoId) {
      // For YouTube videos, we'll use the direct URL
      // Note: expo-av Video doesn't directly support YouTube embeds
      // We'll use the original URL and let the native player handle it
      return url;
    }
    return url;
  };

  const handlePlaybackStatusUpdate = (status: AVPlaybackStatus) => {
    if (status.isLoaded) {
      setIsLoading(false);
    }
  };

  const handleClose = async () => {
    // Pause video before closing
    if (videoRef.current) {
      await videoRef.current.pauseAsync();
    }
    setIsLoading(true);
    onClose();
  };

  // Reset loading state when modal opens
  useEffect(() => {
    if (visible) {
      setIsLoading(true);
    }
  }, [visible]);

  if (videoUrls.length === 0) return null;

  // For now, show only the first video
  const videoUri = getVideoUri(videoUrls[0]);

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={handleClose}
      statusBarTranslucent
    >
      <View style={styles.modalOverlay}>
        {/* Close button */}
        <TouchableOpacity
          style={styles.closeButton}
          onPress={handleClose}
          activeOpacity={0.7}
        >
          <EmojiSvg emoji="✕" style={styles.closeButtonText} />
        </TouchableOpacity>

        {/* Video player */}
        <View style={styles.videoContainer}>
          {isLoading && (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color={COLORS.primary} />
            </View>
          )}
          <Video
            ref={videoRef}
            source={{ uri: videoUri }}
            style={styles.video}
            useNativeControls
            resizeMode={ResizeMode.CONTAIN}
            onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
            shouldPlay={false}
            accessibilityLabel={`${animalName} video`}
          />
        </View>
      </View>
    </Modal>
  );
};

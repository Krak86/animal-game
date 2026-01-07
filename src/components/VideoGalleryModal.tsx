import React, { useState } from "react";
import { Modal, View, TouchableOpacity, ScrollView } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import { getVideoGalleryModalStyles } from "@/styles/componentStyles";
import { useResponsiveDimensions } from "@/hooks/useResponsiveDimensions";
import { EmojiSvg } from "@/components/EmojiSvg";

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
  const windowWidth = responsive.width;
  const windowHeight = responsive.height;

  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  // Calculate responsive video dimensions based on device type
  const getVideoDimensions = () => {
    const width = windowWidth;

    // Mobile: width < 768px
    if (width < 768) {
      const videoWidth = width * 0.9; // 90% of screen width
      const videoHeight = videoWidth * (9 / 16); // 16:9 aspect ratio
      return {
        width: videoWidth,
        height: Math.min(videoHeight, windowHeight * 0.35),
      };
    }

    // Tablet: 768px <= width < 1024px
    if (width < 1024) {
      const videoWidth = width * 0.85; // 85% of screen width
      const videoHeight = videoWidth * (9 / 16); // 16:9 aspect ratio
      return {
        width: videoWidth,
        height: Math.min(videoHeight, windowHeight * 0.4),
      };
    }

    // Desktop: width >= 1024px
    const videoWidth = Math.min(width * 0.7, 1280); // Max 1280px or 70% of width
    const videoHeight = videoWidth * (9 / 16); // 16:9 aspect ratio
    return { width: videoWidth, height: videoHeight };
  };

  const videoDimensions = getVideoDimensions();

  // Extract YouTube video ID from URL
  const getYouTubeVideoId = (url: string): string | null => {
    if (!url) return null;

    // Match youtube.com/watch?v=VIDEO_ID
    const match1 = url.match(/[?&]v=([^&]+)/);
    if (match1) return match1[1];

    // Match youtu.be/VIDEO_ID
    const match2 = url.match(/youtu\.be\/([^?]+)/);
    if (match2) return match2[1];

    // Match youtube.com/embed/VIDEO_ID
    const match3 = url.match(/embed\/([^?]+)/);
    if (match3) return match3[1];

    return null;
  };

  const handleClose = () => {
    // Pause all videos by resetting playingVideoId
    setPlayingVideoId(null);
    onClose();
  };

  if (videoUrls.length === 0) return null;

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

        {/* Scrollable video list */}
        <ScrollView style={styles.scrollContainer}>
          {videoUrls.map((url, index) => {
            const videoId = getYouTubeVideoId(url);
            if (!videoId) return null;

            return (
              <View key={videoId} style={styles.videoContainer}>
                <YoutubePlayer
                  height={videoDimensions.height}
                  width={videoDimensions.width}
                  videoId={videoId}
                  play={playingVideoId === videoId}
                  onChangeState={(state: string) => {
                    if (state === "playing") {
                      setPlayingVideoId(videoId);
                    } else if (state === "paused" || state === "ended") {
                      if (playingVideoId === videoId) {
                        setPlayingVideoId(null);
                      }
                    }
                  }}
                  webViewProps={{
                    androidLayerType: "software",
                  }}
                />
              </View>
            );
          })}
        </ScrollView>
      </View>
    </Modal>
  );
};

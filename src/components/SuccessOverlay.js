import { Animated, Text } from 'react-native';
import { successOverlayStyles as styles } from '../styles/componentStyles';

export const SuccessOverlay = ({ visible, translations, successScale, successOpacity }) => {
  if (!visible) return null;

  return (
    <Animated.View
      style={[
        styles.overlay,
        {
          opacity: successOpacity,
        },
      ]}
    >
      <Animated.View
        style={[
          styles.box,
          {
            transform: [{ scale: successScale }],
          },
        ]}
      >
        <Text style={styles.emoji}>🎉</Text>
        <Text style={styles.text}>{translations.greatJob}</Text>
        <Text style={styles.subtext}>{translations.youFoundIt}</Text>
      </Animated.View>
    </Animated.View>
  );
};

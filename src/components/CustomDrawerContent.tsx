import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerContentComponentProps } from '@react-navigation/drawer';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { SoundToggle } from './SoundToggle';
import { LanguageSwitcher } from './LanguageSwitcher';
import { EmojiSvg } from './EmojiSvg';
import { COLORS } from '@/styles/colors';
import { FONTS } from '@/constants/fonts';
import { useResponsiveDimensions, ResponsiveDimensions } from '@/hooks/useResponsiveDimensions';
import { Language, Translations } from '@/types';

interface CustomDrawerProps extends DrawerContentComponentProps {
  isSoundEnabled: boolean;
  onToggleSound: () => void;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onHomePress: () => Promise<void>;
  translations: Translations;
}

export const CustomDrawerContent: React.FC<CustomDrawerProps> = ({
  isSoundEnabled,
  onToggleSound,
  language,
  onLanguageChange,
  onHomePress,
  translations,
  navigation,
}) => {
  const responsive = useResponsiveDimensions();
  const insets = useSafeAreaInsets();
  const styles = getDrawerStyles(responsive);

  const handleHomePress = async () => {
    await onHomePress();
    navigation.closeDrawer();
  };

  return (
    <DrawerContentScrollView
      style={styles.container}
      contentContainerStyle={[
        styles.contentContainer,
        { paddingTop: insets.top }
      ]}
    >
      {/* Header Section */}
      <View style={styles.header}>
        <EmojiSvg emoji="🐾" style={styles.headerEmoji} />
        <Text style={styles.headerTitle}>{translations.menu}</Text>
      </View>

      {/* Menu Items */}
      <View style={styles.menuSection}>
        {/* Home Button */}
        <TouchableOpacity
          style={styles.menuItem}
          onPress={handleHomePress}
          activeOpacity={0.7}
        >
          <View style={styles.menuItemContent}>
            <EmojiSvg emoji="🏠" style={styles.menuItemEmoji} />
            <Text style={styles.menuItemText}>{translations.startFromBeginning}</Text>
          </View>
        </TouchableOpacity>

        {/* Sound Toggle Section */}
        <View style={styles.menuItem}>
          <Text style={styles.sectionLabel}>{translations.sound}</Text>
          <View style={styles.soundToggleContainer}>
            <SoundToggle
              isSoundEnabled={isSoundEnabled}
              onToggle={onToggleSound}
              variant="inline"
            />
          </View>
        </View>

        {/* Language Switcher Section */}
        <View style={styles.menuItem}>
          <Text style={styles.sectionLabel}>{translations.language}</Text>
          <LanguageSwitcher
            language={language}
            onLanguageChange={onLanguageChange}
          />
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

const getDrawerStyles = (responsive: ResponsiveDimensions) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: responsive.spacing.md,
  },
  header: {
    alignItems: 'center',
    paddingVertical: responsive.spacing.xl,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.lightGray,
    marginBottom: responsive.spacing.lg,
  },
  headerEmoji: {
    fontSize: 48 * responsive.fontScale,
    marginBottom: responsive.spacing.sm,
  },
  headerTitle: {
    fontSize: 24 * responsive.fontScale,
    fontFamily: FONTS.bold,
    color: COLORS.dark,
  },
  menuSection: {
    flex: 1,
    gap: responsive.spacing.lg,
  },
  menuItem: {
    paddingVertical: responsive.spacing.sm,
  },
  menuItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsive.spacing.sm,
    backgroundColor: COLORS.secondary,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 20,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  menuItemEmoji: {
    fontSize: 20 * responsive.fontScale,
  },
  menuItemText: {
    fontSize: 16 * responsive.fontScale,
    fontFamily: FONTS.semiBold,
    color: COLORS.dark,
  },
  sectionLabel: {
    fontSize: 14 * responsive.fontScale,
    fontFamily: FONTS.semiBold,
    color: COLORS.gray,
    marginBottom: responsive.spacing.sm,
  },
  soundToggleContainer: {
    alignItems: 'flex-start',
  },
});

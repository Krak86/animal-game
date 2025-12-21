import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { FONTS } from '@/constants/fonts';
import { COLORS } from '@/styles/colors';

/**
 * Font Test Component - Visual verification for Montserrat fonts
 * This component displays all 4 font weights side-by-side to verify
 * that Montserrat fonts are loading correctly.
 *
 * Only visible in development mode via drawer menu.
 */
export const FontTestComponent: React.FC = () => {
  const testText = "Montserrat Typography Test - AaBbCcDdEeFf 123";

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Font Test Screen</Text>
      <Text style={styles.subtitle}>
        If Montserrat is working, each line below should look distinctly different
      </Text>

      <View style={styles.testSection}>
        <Text style={styles.label}>Regular (400):</Text>
        <Text style={[styles.testText, { fontFamily: FONTS.regular }]}>
          {testText}
        </Text>
      </View>

      <View style={styles.testSection}>
        <Text style={styles.label}>Medium (500):</Text>
        <Text style={[styles.testText, { fontFamily: FONTS.medium }]}>
          {testText}
        </Text>
      </View>

      <View style={styles.testSection}>
        <Text style={styles.label}>SemiBold (600):</Text>
        <Text style={[styles.testText, { fontFamily: FONTS.semiBold }]}>
          {testText}
        </Text>
      </View>

      <View style={styles.testSection}>
        <Text style={styles.label}>Bold (700):</Text>
        <Text style={[styles.testText, { fontFamily: FONTS.bold }]}>
          {testText}
        </Text>
      </View>

      <View style={styles.comparisonSection}>
        <Text style={styles.label}>System Default (no fontFamily):</Text>
        <Text style={styles.testText}>{testText}</Text>
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.infoTitle}>What to Look For:</Text>
        <Text style={styles.infoText}>
          • Each weight should look progressively bolder
        </Text>
        <Text style={styles.infoText}>
          • Montserrat has geometric, clean letterforms
        </Text>
        <Text style={styles.infoText}>
          • The 'a' and 'g' characters are distinctive
        </Text>
        <Text style={styles.infoText}>
          • System default should look noticeably different
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontFamily: FONTS.bold,
    color: COLORS.accent,
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    fontFamily: FONTS.regular,
    color: COLORS.dark,
    marginBottom: 30,
    textAlign: 'center',
    opacity: 0.7,
  },
  testSection: {
    marginBottom: 25,
    padding: 15,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.lightGray,
  },
  comparisonSection: {
    marginBottom: 25,
    padding: 15,
    backgroundColor: '#FFF9E6',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: COLORS.accent,
  },
  label: {
    fontSize: 12,
    fontFamily: FONTS.semiBold,
    color: COLORS.gray,
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  testText: {
    fontSize: 18,
    color: COLORS.dark,
    lineHeight: 28,
  },
  infoSection: {
    marginTop: 20,
    marginBottom: 40,
    padding: 20,
    backgroundColor: '#E8F4F8',
    borderRadius: 10,
  },
  infoTitle: {
    fontSize: 16,
    fontFamily: FONTS.bold,
    color: COLORS.dark,
    marginBottom: 12,
  },
  infoText: {
    fontSize: 14,
    fontFamily: FONTS.regular,
    color: COLORS.dark,
    marginBottom: 6,
    paddingLeft: 5,
  },
});

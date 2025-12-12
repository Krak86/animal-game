import * as Localization from "expo-localization";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Language } from "@/types";

const LANGUAGE_STORAGE_KEY = "@animals_game:language";
const DEFAULT_LANGUAGE: Language = "uk";

const LOCALE_MAP: Record<string, Language> = {
  en: "en",
  uk: "uk",
  ru: "ru",
};

/**
 * Maps a locale code to a supported language
 * @param locale - Locale code (e.g., "en-US", "uk-UA", "fr-FR")
 * @returns Supported language or null if not supported
 */
export function mapLocaleToLanguage(locale: string): Language | null {
  if (!locale) return null;

  const normalizedLocale = locale.toLowerCase();

  // Try exact match first
  if (normalizedLocale in LOCALE_MAP) {
    return LOCALE_MAP[normalizedLocale];
  }

  // Try language code only (en-US → en)
  const langCode = normalizedLocale.split("-")[0];
  if (langCode in LOCALE_MAP) {
    return LOCALE_MAP[langCode];
  }

  return null; // No match, use fallback
}

/**
 * Detects device locale using expo-localization
 * @returns Detected language or null if not supported
 */
export function detectDeviceLocale(): Language | null {
  try {
    const deviceLocales = Localization.getLocales();

    // Try each locale in order of preference
    for (const locale of deviceLocales) {
      if (locale.languageCode) {
        const mappedLanguage = mapLocaleToLanguage(locale.languageCode);
        if (mappedLanguage) {
          return mappedLanguage;
        }
      }
    }

    return null;
  } catch (error) {
    console.warn("Error detecting device locale:", error);
    return null;
  }
}

/**
 * Gets saved language preference from AsyncStorage
 * @returns Saved language or null if not found
 */
export async function getSavedLanguage(): Promise<Language | null> {
  try {
    const saved = await AsyncStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (saved && (saved === "en" || saved === "uk" || saved === "ru")) {
      return saved as Language;
    }
    return null;
  } catch (error) {
    console.warn("Error reading saved language:", error);
    return null;
  }
}

/**
 * Saves language preference to AsyncStorage
 * @param language - Language to save
 */
export async function saveLanguage(language: Language): Promise<void> {
  try {
    await AsyncStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  } catch (error) {
    console.error("Error saving language:", error);
  }
}

/**
 * Gets initial language using fallback rules:
 * 1. User's saved preference (highest priority)
 * 2. Device locale
 * 3. Default fallback ("uk")
 * @returns Initial language to use
 */
export async function getInitialLanguage(): Promise<Language> {
  // 1. Check saved preference
  const savedLanguage = await getSavedLanguage();
  if (savedLanguage) {
    console.log("Using saved language:", savedLanguage);
    return savedLanguage;
  }

  // 2. Check device locale
  const deviceLanguage = detectDeviceLocale();
  if (deviceLanguage) {
    console.log("Using device locale:", deviceLanguage);
    // Save it for next time
    await saveLanguage(deviceLanguage);
    return deviceLanguage;
  }

  // 3. Use default fallback
  console.log("Using default language:", DEFAULT_LANGUAGE);
  await saveLanguage(DEFAULT_LANGUAGE);
  return DEFAULT_LANGUAGE;
}

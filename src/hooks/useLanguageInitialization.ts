import { useState, useEffect, useCallback } from "react";

import { Language } from "@/types";
import { getInitialLanguage, saveLanguage } from "@/utils/languageDetection";

interface UseLanguageInitializationReturn {
  language: Language;
  isLoading: boolean;
  setLanguage: (lang: Language) => void;
}

/**
 * Custom hook for language initialization with automatic detection and persistence
 *
 * Fallback priority:
 * 1. User's saved preference (AsyncStorage)
 * 2. Device locale (expo-localization)
 * 3. Default fallback ("en")
 *
 * @returns Object with language, isLoading state, and setLanguage function
 */
export function useLanguageInitialization(): UseLanguageInitializationReturn {
  const [language, setLanguageState] = useState<Language>("en");
  const [isLoading, setIsLoading] = useState(true);

  // Initialize language on mount
  useEffect(() => {
    const initializeLanguage = async () => {
      try {
        const initialLanguage = await getInitialLanguage();
        setLanguageState(initialLanguage);
      } catch (error) {
        console.error("Error initializing language:", error);
        // Use default on error
        setLanguageState("en");
      } finally {
        setIsLoading(false);
      }
    };

    initializeLanguage();
  }, []);

  // Wrapped setLanguage that also persists to storage
  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    saveLanguage(lang).catch((error) => {
      console.error("Error saving language:", error);
    });
  }, []);

  return {
    language,
    isLoading,
    setLanguage,
  };
}

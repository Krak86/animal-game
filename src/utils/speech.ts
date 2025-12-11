import * as Speech from "expo-speech";
import { Audio } from "expo-av";

import { Language } from "@/types";

/**
 * Speech utility for text-to-speech with background music ducking
 */

// Track if speech is currently active
let isSpeaking = false;

// Cache available voices
let availableVoices: Speech.Voice[] | null = null;

/**
 * Get available voices on the device
 */
const getAvailableVoices = async (): Promise<Speech.Voice[]> => {
  if (availableVoices) {
    return availableVoices;
  }

  try {
    availableVoices = await Speech.getAvailableVoicesAsync();
    console.log("Available TTS voices:", availableVoices.length);
    return availableVoices;
  } catch (error) {
    console.warn("Could not get available voices:", error);
    return [];
  }
};

/**
 * Check if a specific language is available
 * @param languageCode - Language code to check (e.g., 'uk-UA', 'uk')
 */
const isLanguageAvailable = async (languageCode: string): Promise<boolean> => {
  const voices = await getAvailableVoices();
  const shortCode = languageCode.split("-")[0]; // Get 'uk' from 'uk-UA'

  return voices.some((voice) =>
    voice.language.toLowerCase().startsWith(shortCode.toLowerCase())
  );
};

/**
 * Get the appropriate voice language code based on current language
 * @param language - Current language ('en' or 'uk')
 * @returns Voice language code
 */
export const getVoiceLanguage = async (language: Language): Promise<string> => {
  if (language === "uk") {
    // Use Ukrainian voice
    const hasUkrainian = await isLanguageAvailable("uk-UA");
    if (hasUkrainian) {
      console.log("Using Ukrainian voice (uk-UA)");
      return "uk-UA";
    }

    // Try alternative Ukrainian code
    const hasUkAlt = await isLanguageAvailable("uk");
    if (hasUkAlt) {
      console.log("Using Ukrainian voice (uk)");
      return "uk";
    }

    // If not available, still request Ukrainian (TTS will handle gracefully)
    console.log("Ukrainian voice not available, requesting uk-UA anyway");
    return "uk-UA";
  }

  // For English
  return "en-GB";
};

/**
 * Speaks text with background music ducking
 * @param text - Text to speak
 * @param language - Current language ('en' or 'uk')
 * @param backgroundMusic - Background music sound object from expo-av
 * @param onDone - Optional callback when speech finishes
 */
export const speakText = async (
  text: string,
  language: Language,
  backgroundMusic: Audio.Sound | null,
  onDone?: () => void
): Promise<void> => {
  if (isSpeaking) {
    // Stop any ongoing speech first
    await Speech.stop();
  }

  if (!text || text.trim() === "") {
    console.warn("No text to speak");
    // Call onDone callback even if there's no text to speak
    if (onDone) {
      onDone();
    }
    return;
  }

  try {
    // Duck (reduce) background music volume
    if (backgroundMusic) {
      await backgroundMusic.setVolumeAsync(0.05); // Very quiet during speech
    }

    isSpeaking = true;

    // Get the appropriate voice language (now async)
    const voiceLanguage = await getVoiceLanguage(language);

    console.log(
      `Speaking: "${text}" in language: ${voiceLanguage || "default"}`
    );

    // Speak with appropriate language
    Speech.speak(text, {
      language: voiceLanguage,
      pitch: 1.0, // Normal pitch
      rate: 0.85, // Slightly slower for clarity (especially for kids)
      onDone: () => {
        console.log("Speech completed");
        isSpeaking = false;
        // Restore background music volume
        if (backgroundMusic) {
          backgroundMusic.setVolumeAsync(0.2); // Normal background volume
        }
        if (onDone) {
          onDone();
        }
      },
      onStopped: () => {
        console.log("Speech stopped");
        isSpeaking = false;
        // Restore background music volume
        if (backgroundMusic) {
          backgroundMusic.setVolumeAsync(0.2);
        }
      },
      onError: (error: Error) => {
        console.warn("Speech error:", error);
        isSpeaking = false;
        // Restore background music volume even on error
        if (backgroundMusic) {
          backgroundMusic.setVolumeAsync(0.2);
        }
        // Call onDone callback even when TTS fails
        if (onDone) {
          onDone();
        }
      },
    });
  } catch (error) {
    console.error("Failed to speak:", error);
    isSpeaking = false;
    // Restore background music volume
    if (backgroundMusic) {
      await backgroundMusic.setVolumeAsync(0.2);
    }
    // Call onDone callback even when exception occurs
    if (onDone) {
      onDone();
    }
  }
};

/**
 * Speaks the question phrase "Find the: [animal name]"
 * @param findTheText - "Find the:" translation
 * @param animalName - Animal name translation
 * @param language - Current language
 * @param backgroundMusic - Background music sound object
 */
export const speakQuestion = (
  findTheText: string,
  animalName: string,
  language: Language,
  backgroundMusic: Audio.Sound | null
): void => {
  const questionText = `${findTheText} ${animalName}`;
  speakText(questionText, language, backgroundMusic);
};

/**
 * Stops any ongoing speech
 */
export const stopSpeech = async (): Promise<void> => {
  if (isSpeaking) {
    await Speech.stop();
    isSpeaking = false;
  }
};

/**
 * Check if speech is currently active
 */
export const getIsSpeaking = (): boolean => isSpeaking;

/**
 * Debug utility: Log all available voices on the device
 * Call this from your app to see what voices are available
 */
export const logAvailableVoices = async (): Promise<void> => {
  const voices = await getAvailableVoices();
  console.log("=== Available TTS Voices ===");
  console.log(`Total voices: ${voices.length}`);

  // Group by language
  const byLanguage: Record<string, string[]> = {};
  voices.forEach((voice) => {
    const lang = voice.language;
    if (!byLanguage[lang]) {
      byLanguage[lang] = [];
    }
    byLanguage[lang].push(voice.name || voice.identifier);
  });

  Object.keys(byLanguage)
    .sort()
    .forEach((lang) => {
      console.log(`${lang}: ${byLanguage[lang].join(", ")}`);
    });

  // Check for Ukrainian and Russian specifically
  const hasUkrainian = voices.some((v) =>
    v.language.toLowerCase().startsWith("uk")
  );
  const hasRussian = voices.some((v) =>
    v.language.toLowerCase().startsWith("ru")
  );

  console.log(`\nUkrainian available: ${hasUkrainian}`);
  console.log(`Russian available: ${hasRussian}`);
  console.log("===========================");
};

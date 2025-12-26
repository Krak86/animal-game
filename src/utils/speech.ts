import * as Speech from "expo-speech";
import { Audio } from "expo-av";

import { Language } from "@/types";
import { PRERECORDED_ANIMAL_AUDIO, PRERECORDED_UI_AUDIO, hasPrerecordedAudio } from "@/constants/audioFiles";
import { TRANSLATIONS } from "@/constants/translations";

/**
 * Speech utility for text-to-speech with background music ducking
 */

// Track if speech is currently active
let isSpeaking = false;
let speakingTimeout: NodeJS.Timeout | null = null;

// Track currently playing sounds for cleanup
let currentSounds: Audio.Sound[] = [];
let currentSafetyTimeout: NodeJS.Timeout | null = null;

/**
 * Stop and cleanup all currently playing audio
 */
const stopAllAudio = async () => {
  // Clear any safety timeouts
  if (currentSafetyTimeout) {
    clearTimeout(currentSafetyTimeout);
    currentSafetyTimeout = null;
  }

  // Unload all current sounds
  for (const sound of currentSounds) {
    try {
      await sound.stopAsync();
      await sound.unloadAsync();
    } catch (error) {
      // Ignore errors during cleanup
    }
  }
  currentSounds = [];

  // Reset the speaking flag immediately
  resetSpeaking(true);
};

/**
 * Reset speaking flag with safety timeout
 */
const resetSpeaking = (immediate: boolean = false) => {
  if (speakingTimeout) {
    clearTimeout(speakingTimeout);
    speakingTimeout = null;
  }

  if (immediate) {
    isSpeaking = false;
  } else {
    // Add a small delay to prevent rapid re-triggering
    speakingTimeout = setTimeout(() => {
      isSpeaking = false;
      speakingTimeout = null;
    }, 100);
  }
};

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
export const isLanguageAvailable = async (languageCode: string): Promise<boolean> => {
  const voices = await getAvailableVoices();
  const shortCode = languageCode.split("-")[0]; // Get 'uk' from 'uk-UA'

  return voices.some((voice) =>
    voice.language.toLowerCase().startsWith(shortCode.toLowerCase())
  );
};

/**
 * Get the appropriate voice language code based on current language
 * @param language - Current language ('en', 'uk', or 'ru')
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

    const hasUkrainianAlt = await isLanguageAvailable("ua");
    if (hasUkrainianAlt) {
      console.log("Using Ukrainian voice (ua)");
      return "ua";
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

  if (language === "ru") {
    // Use Russian voice
    const hasRussian = await isLanguageAvailable("ru-RU");
    if (hasRussian) {
      console.log("Using Russian voice (ru-RU)");
      return "ru-RU";
    }

    // Try alternative Russian code
    const hasRuAlt = await isLanguageAvailable("ru");
    if (hasRuAlt) {
      console.log("Using Russian voice (ru)");
      return "ru";
    }

    // If not available, still request Russian (TTS will handle gracefully)
    console.log("Russian voice not available, requesting ru-RU anyway");
    return "ru-RU";
  }

  // For English
  return "en-GB";
};

/**
 * Speaks text with background music ducking
 * @param text - Text to speak
 * @param language - Current language ('en', 'uk', or 'ru')
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
      const status = await backgroundMusic.getStatusAsync();
      if (status.isLoaded) {
        await backgroundMusic.setVolumeAsync(0.05); // Very quiet during speech
      }
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
        resetSpeaking();
        // Restore background music volume
        if (backgroundMusic) {
          backgroundMusic.getStatusAsync().then((status) => {
            if (status.isLoaded) {
              backgroundMusic.setVolumeAsync(0.2); // Normal background volume
            }
          });
        }
        if (onDone) {
          onDone();
        }
      },
      onStopped: () => {
        console.log("Speech stopped");
        resetSpeaking(true);
        // Restore background music volume
        if (backgroundMusic) {
          backgroundMusic.getStatusAsync().then((status) => {
            if (status.isLoaded) {
              backgroundMusic.setVolumeAsync(0.2);
            }
          });
        }
      },
      onError: (error: Error) => {
        console.warn("Speech error:", error);
        resetSpeaking(true);
        // Restore background music volume even on error
        if (backgroundMusic) {
          backgroundMusic.getStatusAsync().then((status) => {
            if (status.isLoaded) {
              backgroundMusic.setVolumeAsync(0.2);
            }
          });
        }
        // Call onDone callback even when TTS fails
        if (onDone) {
          onDone();
        }
      },
    });
  } catch (error) {
    console.error("Failed to speak:", error);
    resetSpeaking(true);
    // Restore background music volume
    if (backgroundMusic) {
      const status = await backgroundMusic.getStatusAsync();
      if (status.isLoaded) {
        await backgroundMusic.setVolumeAsync(0.2);
      }
    }
    // Call onDone callback even when exception occurs
    if (onDone) {
      onDone();
    }
  }
};

/**
 * Play prerecorded audio file with background music ducking
 * @param audioSource - Audio file source (from require())
 * @param backgroundMusic - Background music sound object
 * @param onDone - Optional callback when audio finishes
 */
export const playPrerecordedAudio = async (
  audioSource: any,
  backgroundMusic: Audio.Sound | null,
  onDone?: () => void
): Promise<void> => {
  // Stop any currently playing audio first (this also resets isSpeaking flag)
  await stopAllAudio();

  isSpeaking = true;
  let soundInstance: Audio.Sound | null = null;

  // Safety timeout to prevent stuck state (5 seconds max)
  currentSafetyTimeout = setTimeout(() => {
    console.warn("Audio playback timeout - forcing reset");
    resetSpeaking(true);
    if (soundInstance) {
      soundInstance.unloadAsync().catch(console.error);
    }
    // Remove from tracking
    currentSounds = currentSounds.filter(s => s !== soundInstance);
    if (onDone) onDone();
  }, 5000);

  try {
    // Duck background music
    if (backgroundMusic) {
      const status = await backgroundMusic.getStatusAsync();
      if (status.isLoaded) {
        await backgroundMusic.setVolumeAsync(0.05); // Very quiet during speech
      }
    }

    // Create and play audio
    const { sound } = await Audio.Sound.createAsync(audioSource, {
      volume: 1.0,
      shouldPlay: false // Don't auto-play yet
    });
    soundInstance = sound;
    currentSounds.push(sound); // Track for cleanup

    // Start playback
    await sound.playAsync();

    // Listen for playback completion
    sound.setOnPlaybackStatusUpdate((status) => {
      if (status.isLoaded && status.didJustFinish) {
        if (currentSafetyTimeout) clearTimeout(currentSafetyTimeout);
        resetSpeaking();

        // Restore background music volume
        if (backgroundMusic) {
          backgroundMusic.getStatusAsync().then((bgStatus) => {
            if (bgStatus.isLoaded) {
              backgroundMusic.setVolumeAsync(0.2).catch(console.error);
            }
          });
        }

        // Cleanup
        sound.unloadAsync().catch(console.error);
        // Remove from tracking
        currentSounds = currentSounds.filter(s => s !== soundInstance);

        // Callback
        if (onDone) {
          onDone();
        }
      }
    });
  } catch (error) {
    console.error("Error playing prerecorded audio:", error);
    if (currentSafetyTimeout) clearTimeout(currentSafetyTimeout);
    resetSpeaking(true);

    // Restore background music on error
    if (backgroundMusic) {
      backgroundMusic.getStatusAsync().then((status) => {
        if (status.isLoaded) {
          backgroundMusic.setVolumeAsync(0.2).catch(console.error);
        }
      });
    }

    // Cleanup sound on error
    if (soundInstance) {
      soundInstance.unloadAsync().catch(console.error);
      // Remove from tracking
      currentSounds = currentSounds.filter(s => s !== soundInstance);
    }

    // Always call callback on error
    if (onDone) {
      onDone();
    }
  }
};

/**
 * Play two prerecorded audio files in sequence with minimal delay
 * @param firstAudioSource - First audio file source
 * @param secondAudioSource - Second audio file source
 * @param backgroundMusic - Background music sound object
 * @param onDone - Optional callback when both audios finish
 */
const playSequentialAudio = async (
  firstAudioSource: any,
  secondAudioSource: any,
  backgroundMusic: Audio.Sound | null,
  onDone?: () => void
): Promise<void> => {
  // Stop any currently playing audio first (this also resets isSpeaking flag)
  await stopAllAudio();

  isSpeaking = true;
  let firstSound: Audio.Sound | null = null;
  let secondSound: Audio.Sound | null = null;

  // Safety timeout (10 seconds for both audios)
  currentSafetyTimeout = setTimeout(() => {
    console.warn("Sequential audio timeout - forcing reset");
    resetSpeaking(true);
    if (firstSound) firstSound.unloadAsync().catch(console.error);
    if (secondSound) secondSound.unloadAsync().catch(console.error);
    // Remove from tracking
    currentSounds = currentSounds.filter(s => s !== firstSound && s !== secondSound);
    if (onDone) onDone();
  }, 10000);

  try {
    // Duck background music
    if (backgroundMusic) {
      const status = await backgroundMusic.getStatusAsync();
      if (status.isLoaded) {
        await backgroundMusic.setVolumeAsync(0.05);
      }
    }

    // Pre-load both audio files
    const [first, second] = await Promise.all([
      Audio.Sound.createAsync(firstAudioSource, { volume: 1.0, shouldPlay: false }),
      Audio.Sound.createAsync(secondAudioSource, { volume: 1.0, shouldPlay: false })
    ]);

    firstSound = first.sound;
    secondSound = second.sound;
    currentSounds.push(firstSound, secondSound); // Track for cleanup

    // Play first audio
    await firstSound.playAsync();

    // Listen for first audio to finish, then play second with small gap
    firstSound.setOnPlaybackStatusUpdate((status) => {
      if (status.isLoaded && status.didJustFinish) {
        // First audio finished, start second after small delay (150ms gap)
        setTimeout(async () => {
          try {
            if (secondSound) {
              await secondSound.playAsync();

              // Listen for second audio completion
              secondSound.setOnPlaybackStatusUpdate((secondStatus) => {
                if (secondStatus.isLoaded && secondStatus.didJustFinish) {
                  if (currentSafetyTimeout) clearTimeout(currentSafetyTimeout);
                  resetSpeaking();

                  // Restore background music
                  if (backgroundMusic) {
                    backgroundMusic.getStatusAsync().then((bgStatus) => {
                      if (bgStatus.isLoaded) {
                        backgroundMusic.setVolumeAsync(0.2).catch(console.error);
                      }
                    });
                  }

                  // Cleanup both sounds
                  if (firstSound) firstSound.unloadAsync().catch(console.error);
                  if (secondSound) secondSound.unloadAsync().catch(console.error);
                  // Remove from tracking
                  currentSounds = currentSounds.filter(s => s !== firstSound && s !== secondSound);

                  // Callback
                  if (onDone) onDone();
                }
              });
            }
          } catch (error) {
            console.error("Error playing second audio:", error);
            if (currentSafetyTimeout) clearTimeout(currentSafetyTimeout);
            resetSpeaking(true);
            if (firstSound) firstSound.unloadAsync().catch(console.error);
            if (secondSound) secondSound.unloadAsync().catch(console.error);
            // Remove from tracking
            currentSounds = currentSounds.filter(s => s !== firstSound && s !== secondSound);
            if (onDone) onDone();
          }
        }, 150); // 150ms gap between first and second audio
      }
    });

  } catch (error) {
    console.error("Error in sequential audio playback:", error);
    if (currentSafetyTimeout) clearTimeout(currentSafetyTimeout);
    resetSpeaking(true);

    // Restore background music
    if (backgroundMusic) {
      backgroundMusic.getStatusAsync().then((status) => {
        if (status.isLoaded) {
          backgroundMusic.setVolumeAsync(0.2).catch(console.error);
        }
      });
    }

    // Cleanup
    if (firstSound) firstSound.unloadAsync().catch(console.error);
    if (secondSound) secondSound.unloadAsync().catch(console.error);
    // Remove from tracking
    currentSounds = currentSounds.filter(s => s !== firstSound && s !== secondSound);

    if (onDone) onDone();
  }
};

/**
 * Speak animal name - uses prerecorded audio for UK/RU, live TTS for EN
 * @param animalName - English animal name (e.g., "Dog")
 * @param language - Current language
 * @param backgroundMusic - Background music sound object
 * @param onDone - Optional callback when speech finishes
 */
export const speakAnimalName = async (
  animalName: string,
  language: Language,
  backgroundMusic: Audio.Sound | null,
  onDone?: () => void
): Promise<void> => {
  // Use prerecorded audio for Ukrainian/Russian
  const animalAudio = PRERECORDED_ANIMAL_AUDIO[animalName];
  if (hasPrerecordedAudio(language) && animalAudio && language in animalAudio) {
    console.log(`Playing prerecorded audio for ${animalName} in ${language}`);
    await playPrerecordedAudio(
      animalAudio[language as keyof typeof animalAudio],
      backgroundMusic,
      onDone
    );
    return;
  }

  // Fall back to live TTS for English or missing files
  console.log(`Using live TTS for ${animalName} in ${language}`);
  const translations = TRANSLATIONS[language];
  const translatedName = translations.animals[animalName] || animalName;
  await speakText(translatedName, language, backgroundMusic, onDone);
};

/**
 * Speaks the question phrase "Find the: [animal name]"
 * @param findTheText - "Find the:" translation
 * @param animalName - English animal name (e.g., "Dog")
 * @param language - Current language
 * @param backgroundMusic - Background music sound object
 */
export const speakQuestion = async (
  findTheText: string,
  animalName: string,
  language: Language,
  backgroundMusic: Audio.Sound | null
): Promise<void> => {
  // Use prerecorded "Find the:" + animal name for UK/RU with minimal delay
  if (hasPrerecordedAudio(language) && language in PRERECORDED_UI_AUDIO.findThe) {
    const animalAudio = PRERECORDED_ANIMAL_AUDIO[animalName];

    if (animalAudio && language in animalAudio) {
      console.log(`Playing sequential audio: "Find the:" + "${animalName}" in ${language}`);

      // Play both audios in sequence with minimal delay
      await playSequentialAudio(
        PRERECORDED_UI_AUDIO.findThe[language as keyof typeof PRERECORDED_UI_AUDIO.findThe],
        animalAudio[language as keyof typeof animalAudio],
        backgroundMusic
      );
      return;
    }
  }

  // Fall back to live TTS for English or missing files
  const translations = TRANSLATIONS[language];
  const translatedAnimalName = translations.animals[animalName] || animalName;
  const questionText = `${findTheText} ${translatedAnimalName}`;
  await speakText(questionText, language, backgroundMusic);
};

/**
 * Stops any ongoing speech
 */
export const stopSpeech = async (): Promise<void> => {
  if (isSpeaking) {
    await Speech.stop();
    resetSpeaking(true); // Immediately reset the flag
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

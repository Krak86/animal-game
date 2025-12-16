import { Audio } from "expo-av";

import {
  SUCCESS_SOUND_URL,
  WRONG_SOUND_URL,
  BACKGROUND_MUSIC,
} from "@/constants/sounds";

// Volume levels
const BACKGROUND_VOLUME_NORMAL = 0.2; // Quieter background music
const BACKGROUND_VOLUME_DUCKED = 0.05; // Very quiet when sound effects play
const SOUND_EFFECT_VOLUME = 0.8; // Loud sound effects
const ANIMAL_SOUND_VOLUME = 1.0; // Maximum volume for animal sounds

// Track currently playing animal sound to prevent overlaps
let currentAnimalSound: Audio.Sound | null = null;

/**
 * Return type for loadSounds function
 */
interface LoadSoundsReturn {
  successSound: Audio.Sound | null;
  wrongSound: Audio.Sound | null;
}

/**
 * Loads and initializes audio sounds
 * @returns Promise with success and wrong sounds
 */
export const loadSounds = async (): Promise<LoadSoundsReturn> => {
  try {
    await Audio.setAudioModeAsync({
      playsInSilentModeIOS: true,
      staysActiveInBackground: false,
    });

    const { sound: success } = await Audio.Sound.createAsync(
      { uri: SUCCESS_SOUND_URL },
      { shouldPlay: false, volume: SOUND_EFFECT_VOLUME }
    );

    const { sound: wrong } = await Audio.Sound.createAsync(
      { uri: WRONG_SOUND_URL },
      { shouldPlay: false, volume: SOUND_EFFECT_VOLUME }
    );

    return { successSound: success, wrongSound: wrong };
  } catch (error) {
    console.log("Error loading sounds:", error);
    return { successSound: null, wrongSound: null };
  }
};

/**
 * Temporarily reduces background music volume (ducking)
 * @param music - Background music to duck
 */
const duckBackgroundMusic = async (
  music: Audio.Sound | null
): Promise<void> => {
  try {
    if (music) {
      const status = await music.getStatusAsync();
      if (status.isLoaded) {
        await music.setVolumeAsync(BACKGROUND_VOLUME_DUCKED);
      }
    }
  } catch (error) {
    console.log("Error ducking background music:", error);
  }
};

/**
 * Restores background music to normal volume
 * Only restores if music is currently playing (respects paused state)
 * @param music - Background music to restore
 */
const restoreBackgroundMusic = async (
  music: Audio.Sound | null
): Promise<void> => {
  try {
    if (music) {
      const status = await music.getStatusAsync();
      // Only restore volume if music is currently playing
      // If it's paused (user disabled sound), respect that state
      if (status.isLoaded && status.isPlaying) {
        await music.setVolumeAsync(BACKGROUND_VOLUME_NORMAL);
      }
    }
  } catch (error) {
    console.log("Error restoring background music:", error);
  }
};

/**
 * Plays a sound with optional background music ducking
 * @param sound - Sound to play
 * @param backgroundMusic - Background music to duck (optional)
 */
export const playSound = async (
  sound: Audio.Sound | null,
  backgroundMusic: Audio.Sound | null = null
): Promise<void> => {
  try {
    if (sound) {
      // Duck background music if provided
      if (backgroundMusic) {
        await duckBackgroundMusic(backgroundMusic);
      }

      await sound.replayAsync();

      // Restore background music volume after sound effect plays
      if (backgroundMusic) {
        const status = await sound.getStatusAsync();
        if (status.isLoaded) {
          const duration = status.durationMillis || 500;
          setTimeout(() => {
            restoreBackgroundMusic(backgroundMusic);
          }, duration);
        }
      }
    }
  } catch (error) {
    console.log("Error playing sound:", error);
  }
};

/**
 * Unloads sounds to free memory
 * @param sounds - Array of sounds to unload
 */
export const unloadSounds = async (
  sounds: (Audio.Sound | null)[]
): Promise<void> => {
  for (const sound of sounds) {
    if (sound) {
      await sound.unloadAsync();
    }
  }
};

/**
 * Loads and starts background music
 * @param shouldPlay - Whether to start playing immediately
 * @returns Background music sound object
 */
export const loadBackgroundMusic = async (
  shouldPlay: boolean = true
): Promise<Audio.Sound | null> => {
  try {
    const { sound } = await Audio.Sound.createAsync(BACKGROUND_MUSIC, {
      shouldPlay,
      isLooping: true,
      volume: BACKGROUND_VOLUME_NORMAL,
    });
    return sound;
  } catch (error) {
    console.log("Error loading background music:", error);
    return null;
  }
};

/**
 * Pauses background music
 * @param music - Background music to pause
 */
export const pauseBackgroundMusic = async (
  music: Audio.Sound | null
): Promise<void> => {
  try {
    if (music) {
      const status = await music.getStatusAsync();
      if (status.isLoaded && status.isPlaying) {
        await music.pauseAsync();
      }
    }
  } catch (error) {
    console.log("Error pausing background music:", error);
  }
};

/**
 * Resumes background music
 * @param music - Background music to resume
 */
export const resumeBackgroundMusic = async (
  music: Audio.Sound | null
): Promise<void> => {
  try {
    if (music) {
      const status = await music.getStatusAsync();
      if (status.isLoaded && !status.isPlaying) {
        await music.playAsync();
      }
    }
  } catch (error) {
    console.log("Error resuming background music:", error);
  }
};

/**
 * Stops the currently playing animal sound if any
 * @param backgroundMusic - Background music to restore volume
 */
export const stopAnimalSound = async (
  backgroundMusic: Audio.Sound | null = null
): Promise<void> => {
  try {
    if (currentAnimalSound) {
      const status = await currentAnimalSound.getStatusAsync();
      if (status.isLoaded) {
        await currentAnimalSound.stopAsync();
        await currentAnimalSound.unloadAsync();
      }
      currentAnimalSound = null;

      // Restore background music volume
      if (backgroundMusic) {
        await restoreBackgroundMusic(backgroundMusic);
      }
    }
  } catch (error) {
    console.error("Error stopping animal sound:", error);
    currentAnimalSound = null;
  }
};

/**
 * Plays an animal sound from a URL or local file with background music ducking
 * @param soundUrl - URL string or local require() number of the animal sound to play
 * @param backgroundMusic - Background music to duck during playback
 */
export const playAnimalSound = async (
  soundUrl: string | number,
  backgroundMusic: Audio.Sound | null
): Promise<void> => {
  try {
    // Stop any currently playing animal sound first
    await stopAnimalSound(backgroundMusic);

    // Duck background music
    if (backgroundMusic) {
      await duckBackgroundMusic(backgroundMusic);
    }

    // Load and play animal sound at maximum volume
    const { sound } = await Audio.Sound.createAsync(
      soundUrl,
      { volume: ANIMAL_SOUND_VOLUME }
    );

    // Store reference to current sound
    currentAnimalSound = sound;

    await sound.playAsync();

    // Wait for sound to finish, then restore background music
    await new Promise<void>((resolve) => {
      sound.setOnPlaybackStatusUpdate((status) => {
        if (status.isLoaded && status.didJustFinish) {
          sound.unloadAsync();
          currentAnimalSound = null;
          if (backgroundMusic) {
            restoreBackgroundMusic(backgroundMusic);
          }
          resolve();
        }
      });
    });
  } catch (error) {
    console.error("Error playing animal sound:", error);
    currentAnimalSound = null;
    // Restore background music even on error
    if (backgroundMusic) {
      await restoreBackgroundMusic(backgroundMusic);
    }
  }
};

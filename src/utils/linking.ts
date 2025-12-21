import { Alert } from "react-native";
import * as WebBrowser from "expo-web-browser";
import { Translations } from "@/types";

/**
 * Opens an external URL with user confirmation using expo-web-browser
 * Shows an alert dialog asking the user to confirm before opening the link
 * Uses Chrome Custom Tabs on Android for better UX and reliability
 *
 * @param url - The URL to open
 * @param translations - The translations object for the current language
 */
export const openExternalLink = async (
  url: string,
  translations: Translations
): Promise<void> => {
  console.log(`[WebBrowser] Attempting to open URL: ${url}`);

  Alert.alert(translations.externalLink, translations.leavingAppMessage, [
    { text: translations.cancel, style: "cancel" },
    {
      text: translations.continue,
      onPress: async () => {
        try {
          console.log(`[WebBrowser] Opening URL with expo-web-browser...`);

          const result = await WebBrowser.openBrowserAsync(url, {
            // Show title bar on Android
            showTitle: true,
            // Enable browser toolbar on Android
            enableBarCollapsing: false,
            // Use Chrome Custom Tabs on Android if available
            toolbarColor: '#4A90E2',
            controlsColor: '#ffffff',
            // Dismiss button style
            dismissButtonStyle: 'close',
          });

          console.log(`[WebBrowser] Browser result:`, result);

          if (result.type === 'cancel') {
            console.log(`[WebBrowser] User cancelled browser`);
          } else if (result.type === 'dismiss') {
            console.log(`[WebBrowser] User dismissed browser`);
          }
        } catch (error) {
          console.error("[WebBrowser] Error opening link:", error);
          const errorMessage =
            error instanceof Error ? error.message : "Unknown error";
          Alert.alert(
            translations.error,
            translations.browserNotInstalledError.replace("{error}", errorMessage)
          );
        }
      },
    },
  ]);
};

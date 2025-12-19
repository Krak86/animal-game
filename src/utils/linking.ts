import { Linking, Alert } from "react-native";

/**
 * Opens an external URL with user confirmation
 * Shows an alert dialog asking the user to confirm before opening the link
 *
 * @param url - The URL to open
 * @param confirmMessage - The message to show in the confirmation dialog
 */
export const openExternalLink = async (
  url: string,
  confirmMessage: string
): Promise<void> => {
  Alert.alert("External Link", confirmMessage, [
    { text: "Cancel", style: "cancel" },
    {
      text: "Continue",
      onPress: async () => {
        try {
          const canOpen = await Linking.canOpenURL(url);
          if (canOpen) {
            await Linking.openURL(url);
          } else {
            Alert.alert("Error", "Cannot open this link");
          }
        } catch (error) {
          console.error("Error opening link:", error);
          Alert.alert("Error", "Failed to open link");
        }
      },
    },
  ]);
};

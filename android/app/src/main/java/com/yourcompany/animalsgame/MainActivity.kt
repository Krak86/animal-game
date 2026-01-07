package com.yourcompany.animalsgame
import expo.modules.splashscreen.SplashScreenManager

import android.os.Build
import android.os.Bundle
import android.view.WindowManager
import android.view.View

import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate

import expo.modules.ReactActivityDelegateWrapper

class MainActivity : ReactActivity() {
  override fun onCreate(savedInstanceState: Bundle?) {
    // Set the theme to AppTheme BEFORE onCreate to support
    // coloring the background, status bar, and navigation bar.
    // This is required for expo-splash-screen.
    // setTheme(R.style.AppTheme);
    // @generated begin expo-splashscreen - expo prebuild (DO NOT MODIFY) sync-f3ff59a738c56c9a6119210cb55f0b613eb8b6af
    SplashScreenManager.registerOnActivity(this)
    // @generated end expo-splashscreen
    super.onCreate(null)

    // Force allow screenshots on all devices (especially Edge 50 Fusion / Android 14+)
    enableScreenshots()
  }

  override fun onResume() {
    super.onResume()
    // Re-enable screenshots in case system re-applied restrictions
    enableScreenshots()
  }

  override fun onWindowFocusChanged(hasFocus: Boolean) {
    super.onWindowFocusChanged(hasFocus)
    if (hasFocus) {
      // Re-enable screenshots when window gains focus
      enableScreenshots()
    }
  }

  private fun enableScreenshots() {
    try {
      val flagsBefore = window.attributes.flags
      val hasSecureFlagBefore = (flagsBefore and WindowManager.LayoutParams.FLAG_SECURE) != 0

      // Log diagnostic info
      android.util.Log.d("MainActivity", "=== Screenshot Diagnostic ===")
      android.util.Log.d("MainActivity", "Device: ${Build.MANUFACTURER} ${Build.MODEL}")
      android.util.Log.d("MainActivity", "Android: ${Build.VERSION.SDK_INT} (${Build.VERSION.RELEASE})")
      android.util.Log.d("MainActivity", "FLAG_SECURE before: $hasSecureFlagBefore")

      // Method 1: Clear FLAG_SECURE (primary method)
      window.clearFlags(WindowManager.LayoutParams.FLAG_SECURE)

      // Method 2: For Android 14+ - explicitly disable secure content via window attributes
      if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.UPSIDE_DOWN_CAKE) {
        val layoutParams = window.attributes
        layoutParams.flags = layoutParams.flags and WindowManager.LayoutParams.FLAG_SECURE.inv()
        window.attributes = layoutParams
        android.util.Log.d("MainActivity", "Applied Android 14+ screenshot fix")
      }

      // Method 3: Clear any system UI flags that might interfere
      window.decorView.systemUiVisibility = window.decorView.systemUiVisibility and
        View.SYSTEM_UI_FLAG_HIDE_NAVIGATION.inv()

      // Verify the fix worked
      val flagsAfter = window.attributes.flags
      val hasSecureFlagAfter = (flagsAfter and WindowManager.LayoutParams.FLAG_SECURE) != 0
      android.util.Log.d("MainActivity", "FLAG_SECURE after: $hasSecureFlagAfter")

      if (!hasSecureFlagAfter) {
        android.util.Log.d("MainActivity", "✓ Screenshots successfully enabled")
      } else {
        android.util.Log.w("MainActivity", "⚠ FLAG_SECURE still set! Manufacturer may be enforcing it.")
      }
    } catch (e: Exception) {
      android.util.Log.e("MainActivity", "Failed to enable screenshots: ${e.message}", e)
    }
  }

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  override fun getMainComponentName(): String = "main"

  /**
   * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
   * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
   */
  override fun createReactActivityDelegate(): ReactActivityDelegate {
    return ReactActivityDelegateWrapper(
          this,
          BuildConfig.IS_NEW_ARCHITECTURE_ENABLED,
          object : DefaultReactActivityDelegate(
              this,
              mainComponentName,
              fabricEnabled
          ){})
  }

  /**
    * Align the back button behavior with Android S
    * where moving root activities to background instead of finishing activities.
    * @see <a href="https://developer.android.com/reference/android/app/Activity#onBackPressed()">onBackPressed</a>
    */
  override fun invokeDefaultOnBackPressed() {
      if (Build.VERSION.SDK_INT <= Build.VERSION_CODES.R) {
          if (!moveTaskToBack(false)) {
              // For non-root activities, use the default implementation to finish them.
              super.invokeDefaultOnBackPressed()
          }
          return
      }

      // Use the default back button implementation on Android S
      // because it's doing more than [Activity.moveTaskToBack] in fact.
      super.invokeDefaultOnBackPressed()
  }
}

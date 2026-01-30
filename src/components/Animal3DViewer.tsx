import React, { useEffect, useState } from "react";
import { View, StyleSheet, ActivityIndicator, Text } from "react-native";
import { WebView, WebViewMessageEvent } from "react-native-webview";
import { Asset } from "expo-asset";
import * as FileSystem from "expo-file-system/legacy";

interface Animal3DViewerProps {
  source: number | string;
  backgroundColor?: string;
}

export const Animal3DViewer: React.FC<Animal3DViewerProps> = ({
  source,
  backgroundColor = "#222222",
}) => {
  const [viewerUrl, setViewerUrl] = useState<string | null>(null);
  const [isModelLoaded, setIsModelLoaded] = useState(false);
  const [status, setStatus] = useState<string>("Initializing...");

  useEffect(() => {
    let isMounted = true;
    setIsModelLoaded(false);
    setViewerUrl(null);

    const setupFiles = async () => {
      try {
        if (!source) return;

        const baseDir = FileSystem.documentDirectory;
        if (!baseDir) throw new Error("No access to document directory");

        const workDir = `${baseDir}mv_v3_${Date.now()}/`;
        await FileSystem.makeDirectoryAsync(workDir, { intermediates: true });

        if (isMounted) setStatus("Loading model...");

        const asset = Asset.fromModule(source);
        await asset.downloadAsync();

        if (!asset.localUri) throw new Error("Failed to load asset URI");

        await FileSystem.copyAsync({
          from: asset.localUri,
          to: `${workDir}model.glb`,
        });

        const htmlContent = `
          <!DOCTYPE html>
          <html>
            <head>
              <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
              <script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.4.0/model-viewer.min.js"></script>
              <style>
                body { margin: 0; background-color: ${backgroundColor}; height: 100vh; overflow: hidden; }
                model-viewer { width: 100%; height: 100%; --poster-color: transparent; }
              </style>
            </head>
            <body>
              <model-viewer
                id="viewer"
                camera-controls
                auto-rotate
                rotation-per-second="30deg"
                shadow-intensity="1" 
                shadow-softness="0.5"
                exposure="1.0"
                tone-mapping="aces"
                environment-image="neutral"
                loading="eager"
              >
              </model-viewer>

              <script>
                const viewer = document.getElementById('viewer');

                viewer.addEventListener('load', () => {
                  if(window.ReactNativeWebView) {
                    window.ReactNativeWebView.postMessage("MODEL_LOADED");
                  }
                });

                const xhr = new XMLHttpRequest();
                xhr.open('GET', 'model.glb', true);
                xhr.responseType = 'blob';
                
                xhr.onload = function() {
                    if (this.status === 200 || this.status === 0) {
                        const blob = new Blob([this.response], { type: 'model/gltf-binary' });
                        viewer.src = URL.createObjectURL(blob);
                    }
                };
                
                xhr.send();
              </script>
            </body>
          </html>
        `;

        const htmlPath = `${workDir}index.html`;
        await FileSystem.writeAsStringAsync(htmlPath, htmlContent);

        if (isMounted) {
          const finalUri = htmlPath.startsWith("file://")
            ? htmlPath
            : `file://${htmlPath}`;

          setStatus("Rendering...");
          setViewerUrl(finalUri);
        }
      } catch (e: unknown) {
        const errorMessage = e instanceof Error ? e.message : String(e);
        if (isMounted) setStatus("Error: " + errorMessage);
      }
    };

    setupFiles();
    return () => {
      isMounted = false;
    };
  }, [source]);

  const handleWebViewMessage = (event: WebViewMessageEvent) => {
    if (event.nativeEvent.data === "MODEL_LOADED") {
      setIsModelLoaded(true);
    }
  };

  return (
    <View style={styles.container}>
      {viewerUrl && (
        <WebView
          originWhitelist={["*"]}
          source={{ uri: viewerUrl }}
          allowFileAccess={true}
          allowFileAccessFromFileURLs={true}
          allowUniversalAccessFromFileURLs={true}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          androidLayerType="hardware"
          style={{ backgroundColor: backgroundColor, flex: 1 }}
          onMessage={handleWebViewMessage}
        />
      )}
      {(!viewerUrl || !isModelLoaded) && (
        <View style={[styles.loadingOverlay, { backgroundColor }]}>
          <ActivityIndicator size="large" color="white" />
          <Text style={styles.statusText}>{status}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    position: "relative",
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
  statusText: {
    color: "white",
    marginTop: 10,
    fontSize: 14,
    opacity: 0.8,
  },
});

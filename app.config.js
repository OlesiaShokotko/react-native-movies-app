export default {
  expo: {
    name: "rn-movie-app",
    slug: "rn-movie-app",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/logo.png",
    scheme: "myapp",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.olesiashokotko.rnmovieapp",
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/logo.png",
        backgroundColor: "#ffffff",
      },
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/images/logo.png",
    },
    updates: {
      url: "https://u.expo.dev/4de46994-9a41-41ad-9deb-d5cc2f599a4a",
    },
    runtimeVersion: {
      policy: "appVersion",
    },

    plugins: [
      "expo-router",
      [
        "expo-splash-screen",
        {
          image: "./assets/images/logo.png",
          imageWidth: 200,
          resizeMode: "contain",
          backgroundColor: "#ffffff",
        },
      ],
    ],
    experiments: {
      typedRoutes: true,
    },
    extra: {
      EXPO_PUBLIC_MOVIE_API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
      EXPO_PUBLIC_APPWRITE_DATABASE_ID:
        process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID,
      EXPO_PUBLIC_APPWRITE_COLLECTION_ID:
        process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID,
      EXPO_PUBLIC_APPWRITE_PROJECT_ID:
        process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
      eas: {
        projectId: "4de46994-9a41-41ad-9deb-d5cc2f599a4a",
      },
    },
  },
};

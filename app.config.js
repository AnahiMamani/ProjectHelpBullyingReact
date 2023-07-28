import "dotenv/config";

export default
{
  "expo": {
    "name": "SullerHelp",
    "slug": "my-project",
    "version": "1.0.2",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#7D40E7"
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.rocketseat.suller"
    },
    "android": {
      "versionCode": 2,
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#B0C4DE"
      },
      "package": "com.rocketseat.suller"
    },
    "extra": {
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
      appId: process.env.APP_ID,
      "eas": {
        "projectId": "28af2401-ad4a-46aa-b6c0-9be9e79b9a47"
      }
    }
  }
}

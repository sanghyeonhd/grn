
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.6e35d58787a8419a89a79efbabb24ee6',
  appName: 'photo-page-genius',
  webDir: 'dist',
  server: {
    url: 'https://6e35d587-87a8-419a-89a7-9efbabb24ee6.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  ios: {
    contentInset: 'always',
  },
  android: {
    backgroundColor: "#FFFFFF"
  },
  plugins: {
    Camera: {
      ios: {
        publicPhotosAccessLevel: "add"
      }
    }
  }
};

export default config;

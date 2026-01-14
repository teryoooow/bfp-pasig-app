import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.388f5555f23c413fa1aeacaba6f775fa',
  appName: 'BFP Connect',
  webDir: 'dist',
  
  // Development server configuration for hot-reload
  server: {
    url: 'https://388f5555-f23c-413f-a1ae-acaba6f775fa.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },

  // iOS-specific configuration
  ios: {
    contentInset: 'automatic',
    preferredContentMode: 'mobile',
    scheme: 'BFP Connect',
    backgroundColor: '#1a1a2e',
    allowsLinkPreview: true,
    scrollEnabled: true,
    limitsNavigationsToAppBoundDomains: true,
    handleApplicationNotifications: true
  },

  // Android-specific configuration
  android: {
    backgroundColor: '#1a1a2e',
    allowMixedContent: false,
    captureInput: true,
    webContentsDebuggingEnabled: false,
    loggingBehavior: 'production',
    initialFocus: true,
    buildOptions: {
      keystorePath: undefined,
      keystorePassword: undefined,
      keystoreAlias: undefined,
      keystoreAliasPassword: undefined,
      signingType: 'apksigner'
    }
  },

  // Plugins configuration
  plugins: {
    // Splash Screen configuration
    SplashScreen: {
      launchShowDuration: 2000,
      launchAutoHide: true,
      launchFadeOutDuration: 500,
      backgroundColor: '#1a1a2e',
      androidSplashResourceName: 'splash',
      androidScaleType: 'CENTER_CROP',
      showSpinner: true,
      androidSpinnerStyle: 'large',
      iosSpinnerStyle: 'large',
      spinnerColor: '#ea580c',
      splashFullScreen: true,
      splashImmersive: true
    },

    // Push Notifications configuration
    PushNotifications: {
      presentationOptions: ['badge', 'sound', 'alert']
    },

    // Local Notifications configuration
    LocalNotifications: {
      smallIcon: 'ic_stat_icon_config_sample',
      iconColor: '#ea580c',
      sound: 'beep.wav'
    },

    // Keyboard configuration
    Keyboard: {
      resize: 'body',
      style: 'dark',
      resizeOnFullScreen: true
    },

    // Status Bar configuration
    StatusBar: {
      style: 'dark',
      backgroundColor: '#1a1a2e',
      overlaysWebView: false
    },

    // Haptics configuration (enabled by default through plugin)
    Haptics: {
      // Haptics work out of the box
    },

    // App configuration
    App: {
      // Deep linking configuration
    },

    // Browser configuration for external links
    Browser: {
      // Opens external links in system browser
    },

    // Share functionality
    Share: {
      // Native share sheet integration
    },

    // Clipboard access
    Clipboard: {
      // Copy/paste functionality
    },

    // Device information
    Device: {
      // Access device info
    },

    // Network status
    Network: {
      // Monitor connectivity
    },

    // Geolocation for emergency services
    Geolocation: {
      // Location access for emergency features
    },

    // Camera access for incident reporting
    Camera: {
      // Photo capture capability
    },

    // Filesystem for caching
    Filesystem: {
      // Local file storage
    },

    // Preferences (secure storage)
    Preferences: {
      // App settings storage
    },

    // App Badge
    Badge: {
      // Notification badge count
    },

    // Screen Reader accessibility
    ScreenReader: {
      // Accessibility support
    },

    // Toast messages
    Toast: {
      // Native toast notifications
    }
  }
};

export default config;

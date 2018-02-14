export default {
  // This configuration object is used as a basis for all integrations. Keys can be overridden by adapter configurations.
  globalConfig: {
    // Same options as other integrations (see example adapter below).
  },
  // List any integrations you would like to use in this object.
  integrations: {
    // Example adapter (don't use).
    example: {
      enabled: true,
      allowedMethods: ['identify', 'track', 'group'],
      allowedEvents: ['Click Button', 'Post Comment'],
      allowedUserProperties: ['email', 'address'],
      settings: {
        // Adapter-specific configuration.
      }
    },
    // Segment.
    segment: {
      settings: {
        writeKey: 'SEGMENT_WRITE_KEY',
        options: {}
      }
    },
    // Segment (server implementation).
    segmentServer: {
      settings: {
        writeKey: 'SEGMENT_WRITE_KEY',
        options: {}
      }
    },
    // Google Analytics.
    googleAnalytics: {
      settings: {
        trackerName: 'GA_TRACKER_NAME',
        trackingId: 'GA_TRACKING_ID',
        currency: 'EUR',
        searchEventName: 'search'
      }
    },
    // Google Tag Manager.
    googleTagManager: {
      settings: {
        containerId: 'GTM_CONTAINER_ID',
        trackingId: 'GA_TRACKING_ID',
        pageEventName: 'page_view'
      }
    },
    // Intercom.
    intercom: {
      settings: {
        appId: 'INTERCOM_APP_ID',
        searchEventName: 'search',
        goalEventName: 'goal'
      }
    },
    // Keen.
    keen: {
      settings: {
        projectId: 'KEEN_PROJECT_ID',
        writeKey: 'KEEN_WRITE_KEY',
        cookieName: 'KEEN_COOKIE_NAME',
        pageEventName: 'pageview',
        searchEventName: 'search',
        goalEventName: 'goal'
      }
    },
    // Matomo.
    matomo: {
      settings: {
        url: 'MATOMO_URL',
        siteId: 'MATOMO_SITE_ID'
      }
    }
  },
  // Enable debugging (some console logs).
  debug: true
}

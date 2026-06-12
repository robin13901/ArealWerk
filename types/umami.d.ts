/**
 * Type augmentation for the global Umami tracker.
 * Loaded via <Script> in components/UmamiAnalytics.tsx.
 */
export {};

declare global {
  interface Window {
    umami?: {
      track: (
        eventName: string,
        eventData?: Record<string, string | number | boolean>
      ) => void;
    };
  }
}

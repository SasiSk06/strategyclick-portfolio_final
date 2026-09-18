/**
 * Vercel Speed Insights Initialization
 * This script initializes Vercel Speed Insights for the static site.
 * Documentation: https://vercel.com/docs/speed-insights
 */
import { injectSpeedInsights } from './vendor/speed-insights.mjs';

// Initialize Speed Insights with default configuration
injectSpeedInsights({
  // Enable debug mode in development
  debug: true,
  // Optional: Set sample rate (1 = 100% of events)
  sampleRate: 1,
});

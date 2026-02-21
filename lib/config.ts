// Site configuration for ads and analytics

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://babynamescout.com'

export const siteConfig = {
  // Site URL for canonical links and sitemaps
  url: SITE_URL,

  // Google Analytics ID
  googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID || 'G-C58ZYHVTJX',

  // AdSense Client ID (optional)
  adSenseClientId: process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || 'ca-pub-2504139269985873',
}


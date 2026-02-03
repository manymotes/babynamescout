'use client'

import Script from 'next/script'
import { siteConfig } from '@/lib/config'

export function Analytics() {
  const GA_ID = siteConfig.googleAnalyticsId

  if (!GA_ID) return null

  return (
    <>
      {/* Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>

      {/* Google AdSense */}
      {siteConfig.adSenseClientId && (
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${siteConfig.adSenseClientId}`}
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
      )}
    </>
  )
}

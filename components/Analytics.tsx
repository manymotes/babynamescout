import Script from 'next/script'

export function Analytics() {
  // Google Analytics 4 Measurement ID
  // From: https://analytics.google.com/ (littlethinkers property)
  const GA_ID = 'G-FMJNSZHR04'

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  )
}

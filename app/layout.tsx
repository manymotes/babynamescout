import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Analytics } from '@/components/Analytics'
import { DynamicClientComponents } from '@/components/DynamicClientComponents'
import { siteConfig, SITE_URL } from '@/lib/config'

// WebSite schema for Sitelinks Search Box
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}#website`,
  name: 'BabyNameScout',
  url: SITE_URL,
  description: 'Discover thousands of baby names by origin, meaning, and popularity. Find the perfect name for your baby.',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
  publisher: {
    '@id': `${SITE_URL}#organization`,
  },
}

// Organization schema
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}#organization`,
  name: 'BabyNameScout',
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/logo.png`,
    width: 512,
    height: 512,
  },
  description: 'BabyNameScout helps parents discover the perfect name for their baby with meanings, origins, and popularity data.',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
})

export const metadata: Metadata = {
  title: {
    default: 'BabyNameScout - Discover the Perfect Name for Your Baby',
    template: '%s | BabyNameScout',
  },
  description: 'Explore thousands of baby names by origin, meaning, and letter. Find unique girl names, boy names, and unisex names with our comprehensive baby name database.',
  keywords: ['baby names', 'girl names', 'boy names', 'name meanings', 'baby name scout', 'unique names'],
  authors: [{ name: 'BabyNameScout' }],
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'BabyNameScout',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    // AdSense verification code - get from https://adsense.google.com → Sites → babynamescout.com
    // Copy the content value from the meta tag: <meta name="google-adsense-verification" content="CODE_HERE" />
    google: process.env.NEXT_PUBLIC_ADSENSE_VERIFICATION || '',
  },
  other: {
    'google-adsense-account': 'ca-pub-6061225328031066',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Resource hints for third-party domains - reduces connection time */}
        {/* dns-prefetch: resolves DNS early (low cost, good for all resources) */}
        {/* preconnect: DNS + TCP + TLS handshake (use for critical resources) */}

        {/* Google Analytics & Tag Manager - critical for tracking */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* Google Analytics data endpoint */}
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* Google AdSense - defer connection until needed */}
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://googleads.g.doubleclick.net" />
        <link rel="dns-prefetch" href="https://tpc.googlesyndication.com" />

        {/* Adsterra ad network */}
        <link rel="dns-prefetch" href="https://pl28758900.effectivegatecpm.com" />

        {/* Google Fonts (used by next/font but good to have dns-prefetch) */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body className={`${inter.variable} font-sans min-h-screen flex flex-col`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Analytics />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <DynamicClientComponents adClassName="max-w-4xl mx-auto px-4 my-8" includeFooter={true} />
      </body>
    </html>
  )
}

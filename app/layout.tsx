import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Analytics } from '@/components/Analytics'

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
  metadataBase: new URL('https://babynamescout.com'),
  alternates: {
    canonical: 'https://babynamescout.com',
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
      <body className={`${inter.variable} font-sans min-h-screen flex flex-col`}>
        <Analytics />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

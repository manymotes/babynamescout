import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Analytics } from '@/components/Analytics'

export const metadata: Metadata = {
  title: {
    default: 'BabyNameScout - Discover the Perfect Name for Your Baby',
    template: '%s | BabyNameScout',
  },
  description: 'Explore thousands of baby names by origin, meaning, and letter. Find unique girl names, boy names, and unisex names with our comprehensive baby name database.',
  keywords: ['baby names', 'girl names', 'boy names', 'name meanings', 'baby name scout', 'unique names'],
  authors: [{ name: 'BabyNameScout' }],
  metadataBase: new URL('https://babynamescout.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'BabyNameScout',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    // Google Search Console verification - will be added after deployment
    // Site needs to be live before Google can generate verification code
    google: '',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
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

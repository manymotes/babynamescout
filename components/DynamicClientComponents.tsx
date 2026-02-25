'use client'

import dynamic from 'next/dynamic'

// Dynamic imports for non-critical client components
// These components load asynchronously after initial hydration to improve:
// - First Input Delay (FID)
// - Time to Interactive (TTI)
// - Largest Contentful Paint (LCP)
// - Initial JavaScript bundle size

const QuickActions = dynamic(() => import('@/components/QuickActions'), {
  ssr: false,
})

const ReadingProgress = dynamic(() => import('@/components/ReadingProgress'), {
  ssr: false,
})

const BackToTop = dynamic(() => import('@/components/BackToTop'), {
  ssr: false,
})

const AdsterraAd = dynamic(() => import('@/components/AdsterraAd'), {
  ssr: false,
})

// Footer is below-the-fold and can be lazy loaded for better initial page performance
const Footer = dynamic(() => import('@/components/Footer').then(mod => ({ default: mod.Footer })), {
  ssr: false,
})

interface DynamicClientComponentsProps {
  adClassName?: string
  includeFooter?: boolean
}

export function DynamicClientComponents({ adClassName, includeFooter = false }: DynamicClientComponentsProps) {
  return (
    <>
      <ReadingProgress />
      <QuickActions variant="sticky" />
      <AdsterraAd className={adClassName} />
      <BackToTop />
      {includeFooter && <Footer />}
    </>
  )
}

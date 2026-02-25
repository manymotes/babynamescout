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

interface DynamicClientComponentsProps {
  adClassName?: string
}

export function DynamicClientComponents({ adClassName }: DynamicClientComponentsProps) {
  return (
    <>
      <ReadingProgress />
      <QuickActions variant="sticky" />
      <AdsterraAd className={adClassName} />
      <BackToTop />
    </>
  )
}

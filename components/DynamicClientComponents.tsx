'use client'

import dynamic from 'next/dynamic'
import { memo } from 'react'

// Dynamic imports for non-critical client components
// These components load asynchronously after initial hydration to improve:
// - First Input Delay (FID)
// - Time to Interactive (TTI)
// - Largest Contentful Paint (LCP)
// - Initial JavaScript bundle size

// Loading skeleton for dynamic components to prevent CLS
const LoadingSkeleton = () => (
  <div className="skeleton min-h-[50px] rounded" aria-hidden="true" />
)

const QuickActions = dynamic(() => import('@/components/QuickActions'), {
  ssr: false,
  loading: LoadingSkeleton,
})

const ReadingProgress = dynamic(() => import('@/components/ReadingProgress'), {
  ssr: false,
  // Reading progress bar is small, no skeleton needed
})

const BackToTop = dynamic(() => import('@/components/BackToTop'), {
  ssr: false,
  // Back to top is hidden by default, no skeleton needed
})

const AdsterraAd = dynamic(() => import('@/components/AdsterraAd'), {
  ssr: false,
  loading: () => (
    <div className="adsterra-container skeleton min-h-[100px] rounded" aria-hidden="true" />
  ),
})

// Footer is below-the-fold and can be lazy loaded for better initial page performance
const Footer = dynamic(() => import('@/components/Footer').then(mod => ({ default: mod.Footer })), {
  ssr: false,
  loading: () => (
    <footer className="bg-gray-50 border-t border-gray-100 mt-auto min-h-[320px] skeleton" aria-hidden="true" />
  ),
})

interface DynamicClientComponentsProps {
  adClassName?: string
  includeFooter?: boolean
}

// Memoized to prevent re-renders from parent state changes
function DynamicClientComponentsBase({ adClassName, includeFooter = false }: DynamicClientComponentsProps) {
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

export const DynamicClientComponents = memo(DynamicClientComponentsBase)

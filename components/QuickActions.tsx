'use client'

import Link from 'next/link'
import { memo, useMemo } from 'react'

interface QuickActionsProps {
  variant?: 'sticky' | 'inline'
}

// Memoized QuickActions to prevent re-renders
function QuickActionsComponent({ variant = 'inline' }: QuickActionsProps) {
  // Memoize actions array to prevent recreation on each render
  const actions = useMemo(() => [
    { emoji: '👧', label: 'Girl Names', href: '/names/girl/' },
    { emoji: '👦', label: 'Boy Names', href: '/names/boy/' },
    { emoji: '✨', label: 'Quiz', href: '/quiz/naming-style/' },
    { emoji: '🌍', label: 'Origins', href: '/origins/' },
  ], [])

  if (variant === 'sticky') {
    return (
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40 md:hidden">
        <div className="bg-white/95 backdrop-blur-sm shadow-lg rounded-full px-2 py-1 border border-gray-200">
          <div className="flex items-center gap-1">
            {actions.map((action) => (
              <Link
                key={action.href}
                href={action.href}
                className="flex flex-col items-center px-3 py-2 text-gray-600 hover:text-primary-600 transition-colors"
              >
                <span className="text-lg">{action.emoji}</span>
                <span className="text-[10px] font-medium">{action.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-wrap justify-center gap-2 my-6">
      {actions.map((action) => (
        <Link
          key={action.href}
          href={action.href}
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-primary-50 rounded-full text-sm text-gray-700 hover:text-primary-700 transition-colors"
        >
          <span>{action.emoji}</span>
          <span>{action.label}</span>
        </Link>
      ))}
    </div>
  )
}

// Export memoized component
export default memo(QuickActionsComponent)

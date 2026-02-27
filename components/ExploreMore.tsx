'use client'

import Link from 'next/link'
import { memo, useMemo } from 'react'

interface ExploreItem {
  title: string
  description: string
  href: string
  emoji: string
  color: string
}

// Define default items outside component to prevent recreation
const DEFAULT_ITEMS: ExploreItem[] = [
  {
    title: "Girl Names",
    description: "Browse beautiful girl names",
    href: "/names/girl/",
    emoji: "👧",
    color: "from-pink-50 to-rose-100 border-pink-200"
  },
  {
    title: "Boy Names",
    description: "Explore strong boy names",
    href: "/names/boy/",
    emoji: "👦",
    color: "from-blue-50 to-indigo-100 border-blue-200"
  },
  {
    title: "Take the Quiz",
    description: "Find your naming style",
    href: "/quiz/naming-style/",
    emoji: "✨",
    color: "from-purple-50 to-pink-100 border-purple-200"
  },
  {
    title: "Browse Origins",
    description: "Names by cultural origin",
    href: "/origins/",
    emoji: "🌍",
    color: "from-green-50 to-teal-100 border-green-200"
  }
]

interface ExploreMoreProps {
  title?: string
  items?: ExploreItem[]
  variant?: 'grid' | 'row'
}

function ExploreMoreComponent({
  title = "Explore More Names",
  items = DEFAULT_ITEMS,
  variant = 'grid'
}: ExploreMoreProps) {
  // Memoize items to prevent unnecessary re-renders
  const displayItems = useMemo(() => items, [items])
  if (variant === 'row') {
    return (
      <div className="py-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
        <div className="flex overflow-x-auto gap-3 pb-2 -mx-4 px-4 scrollbar-hide">
          {displayItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`flex-shrink-0 w-44 p-4 rounded-xl bg-gradient-to-br ${item.color} border hover:shadow-md transition-all group category-card`}
            >
              <span className="text-2xl mb-2 block">{item.emoji}</span>
              <h4 className="font-medium text-gray-900 text-sm group-hover:text-primary-600 transition-colors">{item.title}</h4>
              <p className="text-xs text-gray-600 mt-1">{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gray-50 rounded-xl p-6 my-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <Link href="/" className="text-sm text-primary-600 hover:text-primary-700 font-medium">
          View all →
        </Link>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {displayItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={`p-4 rounded-lg bg-gradient-to-br ${item.color} border hover:shadow-md transition-all group category-card`}
          >
            <span className="text-2xl mb-2 block">{item.emoji}</span>
            <h4 className="font-medium text-gray-900 text-sm group-hover:text-primary-600 transition-colors">{item.title}</h4>
            <p className="text-xs text-gray-600 mt-1">{item.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

// Export memoized component
export default memo(ExploreMoreComponent)

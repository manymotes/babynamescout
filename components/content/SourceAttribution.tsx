import Link from 'next/link'
import { memo } from 'react'

interface SourceAttributionProps {
  sourceName?: string
  sourceUrl?: string
  sourceDescription?: string
  lastUpdated?: Date
  showMethodology?: boolean
}

// Memoized SourceAttribution for performance
export const SourceAttribution = memo(function SourceAttribution({
  sourceName = 'Social Security Administration',
  sourceUrl = 'https://www.ssa.gov/oact/babynames/',
  sourceDescription = 'Official U.S. government baby name popularity data',
  lastUpdated,
  showMethodology = true,
}: SourceAttributionProps) {
  return (
    <div className="bg-pink-50 border border-pink-200 rounded-lg p-4 my-6">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0">
          <svg
            className="h-5 w-5 text-pink-600 mt-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </div>
        <div className="flex-1">
          <h4 className="text-sm font-semibold text-pink-900 mb-1">
            Data Source
          </h4>
          <p className="text-sm text-pink-800">
            Name popularity data sourced from{' '}
            <a
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline hover:text-pink-900"
            >
              {sourceName}
            </a>
            {sourceDescription && ` — ${sourceDescription}`}.
          </p>
          {lastUpdated && (
            <p className="text-xs text-pink-700 mt-1">
              Last updated: {lastUpdated.toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              })}
            </p>
          )}
          {showMethodology && (
            <p className="text-xs text-pink-700 mt-2">
              <Link href="/about#methodology" className="underline hover:text-pink-900">
                Learn about our data sources
              </Link>
            </p>
          )}
        </div>
      </div>
    </div>
  )
})

export const SourceBadge = memo(function SourceBadge({
  sourceName = 'SSA Baby Names',
  sourceUrl = 'https://www.ssa.gov/oact/babynames/',
}: {
  sourceName?: string
  sourceUrl?: string
}) {
  return (
    <a
      href={sourceUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full text-xs font-medium text-gray-700 transition-colors"
    >
      <svg
        className="h-3.5 w-3.5 text-gray-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      Source: {sourceName}
    </a>
  )
})

interface DisclaimerProps {
  className?: string
}

export function Disclaimer({ className = '' }: DisclaimerProps) {
  return (
    <div className={`bg-gray-50 border border-gray-200 rounded-lg p-4 my-6 ${className}`}>
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0">
          <svg
            className="h-5 w-5 text-gray-600 mt-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div className="flex-1">
          <h4 className="text-sm font-semibold text-gray-900 mb-1">
            About Our Data
          </h4>
          <p className="text-sm text-gray-700">
            Name meanings and origins are compiled from historical records, cultural references, and linguistic research. Popularity rankings are based on Social Security Administration data. Name interpretations can vary by culture and source.
          </p>
        </div>
      </div>
    </div>
  )
}

export function FooterDisclaimer() {
  return (
    <p className="text-xs text-gray-500">
      Popularity data from Social Security Administration.
    </p>
  )
}

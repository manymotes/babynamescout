import { Metadata } from 'next'
import Link from 'next/link'
import { getPopularComparisons, getAllComparisons } from '@/lib/comparisons-data'
import { getNameBySlug } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Compare Baby Names - Side by Side Name Comparisons | BabyNameScout',
  description: 'Compare popular baby names side-by-side. See meanings, origins, popularity trends, and differences between your favorite names to make the perfect choice.',
  alternates: {
    canonical: 'https://babynamescout.com/compare/',
  },
  openGraph: {
    title: 'Compare Baby Names - Find the Perfect Name',
    description: 'Compare meanings, origins, and popularity of baby names side-by-side to make your decision easier.',
    url: 'https://babynamescout.com/compare/',
  }
}

export default function ComparePage() {
  const popularComparisons = getPopularComparisons(50)
  const allComparisons = getAllComparisons()

  // Get stats
  const girlComparisons = allComparisons.filter(c => c.gender === 'girl').length
  const boyComparisons = allComparisons.filter(c => c.gender === 'boy').length
  const mixedComparisons = allComparisons.filter(c => c.gender === 'mixed').length

  // Organize popular comparisons by category
  const topGirlComparisons = popularComparisons
    .filter(c => c.gender === 'girl')
    .slice(0, 12)

  const topBoyComparisons = popularComparisons
    .filter(c => c.gender === 'boy')
    .slice(0, 12)

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Compare Baby Names
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Compare {allComparisons.length.toLocaleString()}+ baby name combinations side-by-side.
          See meanings, origins, popularity trends, and key differences to help you choose the perfect name.
        </p>

        {/* Stats */}
        <div className="flex justify-center gap-8 text-center">
          <div className="bg-primary-50 rounded-xl p-4 min-w-[140px]">
            <div className="text-3xl font-bold text-primary-600">{girlComparisons.toLocaleString()}</div>
            <div className="text-sm text-gray-600 mt-1">Girl Name Comparisons</div>
          </div>
          <div className="bg-secondary-50 rounded-xl p-4 min-w-[140px]">
            <div className="text-3xl font-bold text-secondary-600">{boyComparisons.toLocaleString()}</div>
            <div className="text-sm text-gray-600 mt-1">Boy Name Comparisons</div>
          </div>
          <div className="bg-purple-50 rounded-xl p-4 min-w-[140px]">
            <div className="text-3xl font-bold text-purple-600">{mixedComparisons.toLocaleString()}</div>
            <div className="text-sm text-gray-600 mt-1">Mixed Comparisons</div>
          </div>
        </div>
      </div>

      {/* Popular Girl Name Comparisons */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Popular Girl Name Comparisons</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {topGirlComparisons.map(comparison => {
            const name1 = getNameBySlug(comparison.slug1)
            const name2 = getNameBySlug(comparison.slug2)

            if (!name1 || !name2) return null

            return (
              <Link
                key={comparison.comparisonSlug}
                href={`/compare/${comparison.comparisonSlug}/`}
                className="block bg-white border-2 border-primary-200 rounded-xl p-5 hover:border-primary-400 hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-lg font-bold text-primary-600">{name1.name}</span>
                  <span className="text-gray-400 font-bold">vs</span>
                  <span className="text-lg font-bold text-primary-600">{name2.name}</span>
                </div>
                <div className="flex gap-2 text-xs text-gray-500">
                  <span className="bg-gray-100 px-2 py-1 rounded">{name1.origin}</span>
                  <span className="bg-gray-100 px-2 py-1 rounded">{name2.origin}</span>
                </div>
                {name1.popularity && name2.popularity && (
                  <div className="mt-2 text-xs text-gray-500">
                    Rankings: #{name1.popularity} vs #{name2.popularity}
                  </div>
                )}
              </Link>
            )
          })}
        </div>
        <div className="text-center mt-6">
          <Link
            href="/compare/?gender=girl"
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            View all girl name comparisons &rarr;
          </Link>
        </div>
      </section>

      {/* Popular Boy Name Comparisons */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Popular Boy Name Comparisons</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {topBoyComparisons.map(comparison => {
            const name1 = getNameBySlug(comparison.slug1)
            const name2 = getNameBySlug(comparison.slug2)

            if (!name1 || !name2) return null

            return (
              <Link
                key={comparison.comparisonSlug}
                href={`/compare/${comparison.comparisonSlug}/`}
                className="block bg-white border-2 border-secondary-200 rounded-xl p-5 hover:border-secondary-400 hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-lg font-bold text-secondary-600">{name1.name}</span>
                  <span className="text-gray-400 font-bold">vs</span>
                  <span className="text-lg font-bold text-secondary-600">{name2.name}</span>
                </div>
                <div className="flex gap-2 text-xs text-gray-500">
                  <span className="bg-gray-100 px-2 py-1 rounded">{name1.origin}</span>
                  <span className="bg-gray-100 px-2 py-1 rounded">{name2.origin}</span>
                </div>
                {name1.popularity && name2.popularity && (
                  <div className="mt-2 text-xs text-gray-500">
                    Rankings: #{name1.popularity} vs #{name2.popularity}
                  </div>
                )}
              </Link>
            )
          })}
        </div>
        <div className="text-center mt-6">
          <Link
            href="/compare/?gender=boy"
            className="text-secondary-600 hover:text-secondary-700 font-medium"
          >
            View all boy name comparisons &rarr;
          </Link>
        </div>
      </section>

      {/* Why Compare Names Section */}
      <section className="bg-gray-50 rounded-xl p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Compare Baby Names?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Make Informed Decisions</h3>
            <p className="text-gray-600">
              Comparing names side-by-side helps you understand the subtle differences in meaning,
              origin, and cultural significance between your top choices.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">See Popularity Trends</h3>
            <p className="text-gray-600">
              Visualize how each name has trended over the years and which is more popular in
              different regions to help gauge uniqueness.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Understand Origins</h3>
            <p className="text-gray-600">
              Learn about the cultural heritage and etymological background of each name to
              find one that resonates with your family story.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Weigh Pros and Cons</h3>
            <p className="text-gray-600">
              Review the advantages and considerations for each name, from pronunciation ease
              to nickname options, to find the perfect fit.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">How Name Comparison Works</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary-600">1</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Choose Names</h3>
            <p className="text-gray-600 text-sm">
              Browse our popular comparisons or search for specific names you want to compare
            </p>
          </div>
          <div className="text-center">
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary-600">2</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Review Side-by-Side</h3>
            <p className="text-gray-600 text-sm">
              See detailed comparisons of meanings, origins, popularity, and trends
            </p>
          </div>
          <div className="text-center">
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary-600">3</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Make Your Choice</h3>
            <p className="text-gray-600 text-sm">
              Use the insights to confidently choose the perfect name for your baby
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white border border-gray-200 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">How many name comparisons are available?</h3>
            <p className="text-gray-600">
              We currently have {allComparisons.length.toLocaleString()} name comparisons available, including
              comparisons between the top 100 most popular girl and boy names, as well as names with
              similar sounds, origins, and meanings.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">What information is included in each comparison?</h3>
            <p className="text-gray-600">
              Each comparison includes side-by-side stats like popularity rankings, meanings, origins,
              popularity trend charts over time, state-by-state preferences, similar name suggestions,
              and a pros/cons analysis for each name.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Can I compare more than two names at once?</h3>
            <p className="text-gray-600">
              Currently, our comparison tool focuses on side-by-side comparisons of two names to provide
              the most detailed insights. However, you can compare multiple pairs to narrow down your choices.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Where does the popularity data come from?</h3>
            <p className="text-gray-600">
              Our popularity rankings are based on Social Security Administration data for baby names in
              the United States, updated annually to reflect the most current trends.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

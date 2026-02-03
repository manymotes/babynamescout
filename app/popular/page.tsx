import Link from 'next/link'
import type { Metadata } from 'next'
import { getAllNames } from '@/lib/data'
import { NameGrid } from '@/components/NameCard'

export const metadata: Metadata = {
  title: 'Popular Baby Names | Top 100 Most Popular Names',
  description: 'Discover the most popular baby names. Browse the top 100 girl and boy names parents are choosing this year, complete with meanings and origins.',
  openGraph: {
    title: 'Most Popular Baby Names',
    description: 'The top baby names parents are choosing this year',
  },
}

export default function PopularPage() {
  const allNames = getAllNames()

  // Get most popular names (low popularity number = more popular)
  const popularGirlNames = allNames
    .filter(n => n.gender === 'girl' && n.popularity)
    .sort((a, b) => (a.popularity || 999) - (b.popularity || 999))
    .slice(0, 50)

  const popularBoyNames = allNames
    .filter(n => n.gender === 'boy' && n.popularity)
    .sort((a, b) => (a.popularity || 999) - (b.popularity || 999))
    .slice(0, 50)

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero */}
      <div className="text-center mb-12">
        <span className="text-5xl mb-4 block">⭐</span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Most Popular Baby Names
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover the most-loved baby names. These are the top names parents are choosing
          for their little ones, ranked by popularity.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-6 text-center">
          <div className="text-4xl font-bold text-primary-600 mb-2">Top 50</div>
          <div className="text-gray-700">Most Popular Girl Names</div>
        </div>
        <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-xl p-6 text-center">
          <div className="text-4xl font-bold text-secondary-600 mb-2">Top 50</div>
          <div className="text-gray-700">Most Popular Boy Names</div>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center">
          <div className="text-4xl font-bold text-purple-600 mb-2">2026</div>
          <div className="text-gray-700">Current Year Rankings</div>
        </div>
      </div>

      {/* Why Popular Names */}
      <section className="mb-16 bg-blue-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose a Popular Name?</h2>
        <div className="grid md:grid-cols-2 gap-6 text-gray-600">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">✓ Timeless Appeal</h3>
            <p className="text-sm">Popular names have stood the test of time and are loved by many for good reason.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">✓ Easy to Pronounce</h3>
            <p className="text-sm">Common names are familiar, reducing spelling and pronunciation issues.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">✓ Professional</h3>
            <p className="text-sm">Well-known names are often seen as professional and trustworthy.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">✓ Beautiful Meanings</h3>
            <p className="text-sm">Popular names often have lovely meanings and rich cultural histories.</p>
          </div>
        </div>
      </section>

      {/* Popular Girl Names */}
      <section className="mb-16">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-primary-600 mb-2">Top 50 Girl Names</h2>
          <p className="text-gray-600">The most popular names for girls</p>
        </div>
        <NameGrid names={popularGirlNames} />
        <div className="text-center mt-6">
          <Link
            href="/names/girl/"
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            Browse All Girl Names →
          </Link>
        </div>
      </section>

      {/* Popular Boy Names */}
      <section className="mb-16">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-secondary-600 mb-2">Top 50 Boy Names</h2>
          <p className="text-gray-600">The most popular names for boys</p>
        </div>
        <NameGrid names={popularBoyNames} />
        <div className="text-center mt-6">
          <Link
            href="/names/boy/"
            className="text-secondary-600 hover:text-secondary-700 font-medium"
          >
            Browse All Boy Names →
          </Link>
        </div>
      </section>

      {/* Related Links */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Explore More Name Categories</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/trends/2026/" className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 hover:shadow-lg transition">
            <h3 className="font-bold text-blue-900 mb-2">Trending Names 2026</h3>
            <p className="text-blue-700 text-sm">See which names are rising in popularity this year</p>
          </Link>
          <Link href="/unique/" className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-6 hover:shadow-lg transition">
            <h3 className="font-bold text-amber-900 mb-2">Unique & Rare Names</h3>
            <p className="text-amber-700 text-sm">Stand out with an uncommon name</p>
          </Link>
          <Link href="/vintage/" className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 hover:shadow-lg transition">
            <h3 className="font-bold text-purple-900 mb-2">Vintage Names</h3>
            <p className="text-purple-700 text-sm">Classic names making a comeback</p>
          </Link>
        </div>
      </section>

      {/* SEO Content */}
      <section className="bg-gray-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Baby Name Popularity</h2>
        <div className="prose prose-gray max-w-none text-gray-600 space-y-4">
          <p>
            Popular baby names become beloved for many reasons: beautiful sounds, meaningful origins,
            cultural significance, and timeless appeal. While some parents worry about their child sharing
            a name with classmates, popular names offer familiarity and ease of use that can be valuable
            throughout life.
          </p>
          <p>
            The most popular names often reflect current cultural trends while maintaining classic appeal.
            Names like Olivia, Emma, Liam, and Noah have dominated popularity charts because they balance
            tradition with contemporary style. These names work well across different ages, from cute for
            babies to professional for adults.
          </p>
          <p>
            When considering a popular name, think about its staying power. Will it still feel fresh in 10
            or 20 years? Many parents find that popular names have proven their longevity, remaining beloved
            across generations. You can also make a popular name unique through creative middle name pairings
            or meaningful family connections.
          </p>
          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Popular Names by Origin</h3>
          <p>
            The most popular names come from diverse origins. Latin names (Olivia, Julia), Hebrew names
            (Noah, Elijah), Greek names (Sophia, Alexander), and Germanic names (Emma, William) consistently
            rank high. Explore names by <Link href="/origins/" className="text-primary-600 hover:text-primary-700">origin</Link> to
            find popular choices from your preferred cultural background.
          </p>
        </div>
      </section>
    </div>
  )
}

import Link from 'next/link'
import type { Metadata } from 'next'
import { getAllNames } from '@/lib/data'
import { NameGrid } from '@/components/NameCard'

export const metadata: Metadata = {
  title: 'Trending Baby Names 2026 | Popular Name Trends',
  description: 'Discover the hottest baby name trends for 2026. See which names are rising in popularity, emerging trends, and the most popular names for boys and girls.',
  openGraph: {
    title: 'Trending Baby Names 2026',
    description: 'The most popular and trending baby names for 2026',
  },
}

export default function Trends2026Page() {
  const allNames = getAllNames()

  // Get top trending names (low popularity number = more popular)
  const trendingGirlNames = allNames
    .filter(n => n.gender === 'girl')
    .sort((a, b) => (a.popularity || 999) - (b.popularity || 999))
    .slice(0, 24)

  const trendingBoyNames = allNames
    .filter(n => n.gender === 'boy')
    .sort((a, b) => (a.popularity || 999) - (b.popularity || 999))
    .slice(0, 24)

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero */}
      <div className="text-center mb-12">
        <span className="text-5xl mb-4 block">📈</span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Trending Baby Names 2026
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover the hottest baby name trends for 2026. These are the names rising in popularity
          and capturing parents&apos; hearts this year.
        </p>
      </div>

      {/* Trending Categories */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">2026 Naming Trends</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
            <h3 className="font-bold text-purple-900 mb-2">Nature-Inspired Names</h3>
            <p className="text-purple-700 text-sm mb-3">
              Names like Luna, Willow, River, and Sage continue to rise as parents seek connection to the natural world.
            </p>
            <Link href="/meaning/nature/" className="text-purple-600 hover:text-purple-800 text-sm font-medium">
              Explore Nature Names →
            </Link>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
            <h3 className="font-bold text-blue-900 mb-2">Vintage Revivals</h3>
            <p className="text-blue-700 text-sm mb-3">
              Classic names from the 1920s-1950s are making a comeback: Theodore, Evelyn, Arthur, and Hazel.
            </p>
            <Link href="/vintage/" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              Explore Vintage Names →
            </Link>
          </div>

          <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-6">
            <h3 className="font-bold text-pink-900 mb-2">Short & Sweet</h3>
            <p className="text-pink-700 text-sm mb-3">
              Three and four-letter names are trending: Mia, Leo, Ava, Max, Zoe, and Kai are all on the rise.
            </p>
            <Link href="/short-names/" className="text-pink-600 hover:text-pink-800 text-sm font-medium">
              Explore Short Names →
            </Link>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
            <h3 className="font-bold text-green-900 mb-2">Gender-Neutral Names</h3>
            <p className="text-green-700 text-sm mb-3">
              Unisex names continue to grow: Riley, Avery, Quinn, and Jordan are popular for all babies.
            </p>
            <Link href="/unisex/" className="text-green-600 hover:text-green-800 text-sm font-medium">
              Explore Unisex Names →
            </Link>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-6">
            <h3 className="font-bold text-amber-900 mb-2">International Flair</h3>
            <p className="text-amber-700 text-sm mb-3">
              Parents are embracing names from diverse cultures: Mateo, Amara, Enzo, and Aria.
            </p>
            <Link href="/origins/" className="text-amber-600 hover:text-amber-800 text-sm font-medium">
              Browse by Origin →
            </Link>
          </div>

          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-6">
            <h3 className="font-bold text-indigo-900 mb-2">Mythology & Literature</h3>
            <p className="text-indigo-700 text-sm mb-3">
              Names from myths and books are trending: Athena, Apollo, Ophelia, and Atticus.
            </p>
            <Link href="/meaning/strong/" className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
              Explore Powerful Names →
            </Link>
          </div>
        </div>
      </section>

      {/* Trending Girl Names */}
      <section className="mb-16">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-primary-600 mb-2">Trending Girl Names 2026</h2>
          <p className="text-gray-600">The most popular girl names this year</p>
        </div>
        <NameGrid names={trendingGirlNames} />
        <div className="text-center mt-6">
          <Link
            href="/names/girl/"
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            View All Girl Names →
          </Link>
        </div>
      </section>

      {/* Trending Boy Names */}
      <section className="mb-16">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-secondary-600 mb-2">Trending Boy Names 2026</h2>
          <p className="text-gray-600">The most popular boy names this year</p>
        </div>
        <NameGrid names={trendingBoyNames} />
        <div className="text-center mt-6">
          <Link
            href="/names/boy/"
            className="text-secondary-600 hover:text-secondary-700 font-medium"
          >
            View All Boy Names →
          </Link>
        </div>
      </section>

      {/* SEO Content */}
      <section className="bg-gray-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Makes a Name Trending in 2026?</h2>
        <div className="prose prose-gray max-w-none text-gray-600 space-y-4">
          <p>
            Baby name trends for 2026 reflect broader cultural shifts and parental values. This year,
            we&apos;re seeing a strong preference for names that connect to nature, honor heritage,
            and embrace gender neutrality. Many parents are moving away from overly popular names,
            seeking something meaningful yet distinctive.
          </p>
          <p>
            The rise of vintage names shows parents looking to the past for inspiration, reviving
            classic names that feel fresh again after decades out of the spotlight. Names like Theodore,
            Eleanor, and Arthur are climbing the charts as parents appreciate their timeless elegance
            and rich history.
          </p>
          <p>
            International names are more popular than ever, reflecting our increasingly connected world.
            Names like Mateo (Spanish), Amara (Igbo/Sanskrit), and Kai (Hawaiian) show parents
            embracing diverse cultural traditions and global perspectives.
          </p>
          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Fastest Rising Names</h3>
          <p>
            Keep an eye on these names showing the biggest increases in popularity: Maeve, Atlas,
            Juniper, Silas, Nova, and Felix. These names combine modern appeal with meaningful origins
            and are predicted to continue rising throughout 2026.
          </p>
          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">How to Choose a Trending Name</h3>
          <p>
            While trending names are popular for good reason, consider how the name will age and whether
            you&apos;re comfortable with your child sharing their name with classmates. Many parents find
            success by taking a trending name and choosing a unique spelling or finding a similar but less
            common alternative.
          </p>
        </div>
      </section>
    </div>
  )
}

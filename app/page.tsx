import Link from 'next/link'
import { getAllNames, getNamesByGender, getOrigins } from '@/lib/data'

const websiteUrl = 'https://babynamescout.com'

// WebSite Schema
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'BabyNameScout',
  description: 'Find the perfect baby name with meanings, origins, and popularity trends',
  url: websiteUrl,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${websiteUrl}/search?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
}

// Organization Schema
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'BabyNameScout',
  url: websiteUrl,
  description: 'Find the perfect baby name with meanings, origins, and popularity trends. Browse thousands of names from various cultures and origins.',
  sameAs: [],
}

export default function HomePage() {
  const allNames = getAllNames()
  const girlNames = getNamesByGender('girl')
  const boyNames = getNamesByGender('boy')
  const origins = getOrigins()
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Find the Perfect Baby Name
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Explore {allNames.length.toLocaleString()}+ beautiful baby names with meanings,
          origins, and popularity trends. Your baby&apos;s perfect name is waiting.
        </p>

        {/* Quick Stats */}
        <div className="flex justify-center gap-8 mb-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600">{girlNames.length.toLocaleString()}+</div>
            <div className="text-gray-500">Girl Names</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary-600">{boyNames.length.toLocaleString()}+</div>
            <div className="text-gray-500">Boy Names</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600">{origins.length}</div>
            <div className="text-gray-500">Origins</div>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <Link
            href="/names/girl/"
            className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            Browse Girl Names
          </Link>
          <Link
            href="/names/boy/"
            className="bg-secondary-500 hover:bg-secondary-600 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            Browse Boy Names
          </Link>
        </div>
      </section>

      {/* Browse by Letter */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Browse Names by Letter</h2>

        <div className="mb-8">
          <h3 className="text-lg font-semibold text-primary-600 mb-3">Girl Names</h3>
          <div className="flex flex-wrap gap-2">
            {letters.map(letter => (
              <Link
                key={`girl-${letter}`}
                href={`/names/girl/${letter.toLowerCase()}/`}
                className="w-10 h-10 flex items-center justify-center bg-primary-50 hover:bg-primary-100 text-primary-700 rounded-lg font-medium transition"
              >
                {letter}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-secondary-600 mb-3">Boy Names</h3>
          <div className="flex flex-wrap gap-2">
            {letters.map(letter => (
              <Link
                key={`boy-${letter}`}
                href={`/names/boy/${letter.toLowerCase()}/`}
                className="w-10 h-10 flex items-center justify-center bg-secondary-50 hover:bg-secondary-100 text-secondary-700 rounded-lg font-medium transition"
              >
                {letter}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Browse by Origin */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Browse Names by Origin</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {origins.slice(0, 18).map(origin => (
            <Link
              key={origin}
              href={`/origin/${origin.toLowerCase().replace(/\s+/g, '-')}/`}
              className="bg-white border border-gray-200 hover:border-primary-300 hover:bg-primary-50 rounded-lg p-3 text-center transition"
            >
              <span className="text-gray-700 font-medium">{origin}</span>
            </Link>
          ))}
        </div>
        <div className="text-center mt-4">
          <Link href="/origins/" className="text-primary-600 hover:text-primary-700 font-medium">
            View all origins &rarr;
          </Link>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Popular Name Categories</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/meaning/strong/" className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 hover:shadow-lg transition">
            <h3 className="font-bold text-purple-900 mb-2">Names Meaning &quot;Strong&quot;</h3>
            <p className="text-purple-700 text-sm">Powerful names for your little warrior</p>
          </Link>
          <Link href="/meaning/love/" className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-6 hover:shadow-lg transition">
            <h3 className="font-bold text-pink-900 mb-2">Names Meaning &quot;Love&quot;</h3>
            <p className="text-pink-700 text-sm">Beautiful names full of love</p>
          </Link>
          <Link href="/meaning/nature/" className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 hover:shadow-lg transition">
            <h3 className="font-bold text-green-900 mb-2">Nature-Inspired Names</h3>
            <p className="text-green-700 text-sm">Names inspired by the natural world</p>
          </Link>
          <Link href="/trends/2026/" className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 hover:shadow-lg transition">
            <h3 className="font-bold text-blue-900 mb-2">Trending Names 2026</h3>
            <p className="text-blue-700 text-sm">The hottest baby name trends this year</p>
          </Link>
          <Link href="/unique/" className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-6 hover:shadow-lg transition">
            <h3 className="font-bold text-amber-900 mb-2">Unique & Rare Names</h3>
            <p className="text-amber-700 text-sm">Stand-out names for your special one</p>
          </Link>
          <Link href="/generator/" className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-6 hover:shadow-lg transition">
            <h3 className="font-bold text-indigo-900 mb-2">Name Generator</h3>
            <p className="text-indigo-700 text-sm">Get personalized name suggestions</p>
          </Link>
        </div>
      </section>

      {/* SEO Content */}
      <section className="bg-gray-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Choose the Perfect Baby Name</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">
            Choosing a baby name is one of the most exciting decisions you&apos;ll make as a parent.
            Whether you&apos;re looking for a traditional name, something unique, or a name with
            special meaning, our comprehensive database helps you explore thousands of options.
          </p>
          <p className="text-gray-600 mb-4">
            Consider factors like the name&apos;s origin and meaning, how it sounds with your last name,
            potential nicknames, and current popularity trends. Many parents also look at names
            that honor family heritage or reflect their cultural background.
          </p>
          <p className="text-gray-600">
            Browse our collection of girl names, boy names, and gender-neutral options.
            Filter by first letter, origin, or meaning to find names that resonate with you.
          </p>
        </div>
      </section>
    </div>
    </>
  )
}

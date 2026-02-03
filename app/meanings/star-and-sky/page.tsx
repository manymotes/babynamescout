import { Metadata } from 'next'
import Link from 'next/link'
import { getAllNames } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Names Meaning Star and Sky - Celestial Baby Names',
  description: 'Discover 150+ baby names meaning star, sky, heaven, celestial, and cosmos. Find astronomical names inspired by the heavens.',
}

export default function StarAndSkyPage() {
  const allNames = getAllNames()

  const starKeywords = [
    'star', 'stars', 'stellar', 'sky', 'heaven', 'heavenly', 'celestial',
    'cosmos', 'cosmic', 'moon', 'sun', 'constellation', 'galaxy',
    'astral', 'nebula', 'comet', 'meteor', 'aurora', 'twilight',
    'dawn', 'dusk', 'cloud', 'air'
  ]

  const starNames = allNames.filter(name => {
    const meaningLower = name.meaning.toLowerCase()
    return starKeywords.some(keyword => meaningLower.includes(keyword))
  }).sort((a, b) => (a.popularity || 999) - (b.popularity || 999))

  const girlNames = starNames.filter(n => n.gender === 'girl').slice(0, 75)
  const boyNames = starNames.filter(n => n.gender === 'boy').slice(0, 75)

  const websiteUrl = 'https://babynamescout.com'

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: websiteUrl },
      { '@type': 'ListItem', position: 2, name: 'Meanings', item: `${websiteUrl}/meanings/` },
      { '@type': 'ListItem', position: 3, name: 'Star and Sky', item: `${websiteUrl}/meanings/star-and-sky/` }
    ]
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <nav className="text-sm mb-8">
          <Link href="/" className="text-gray-500 hover:text-gray-700">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href="/meanings/" className="text-gray-500 hover:text-gray-700">Meanings</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-900">Star and Sky</span>
        </nav>

        <div className="text-center mb-12">
          <div className="text-6xl mb-4">⭐</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Names Meaning Star and Sky</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Explore celestial names inspired by stars, sky, moon, and heavens. These astronomical names celebrate the cosmic wonder above us.
          </p>
          <p className="text-lg font-medium text-blue-600">{starNames.length} celestial names found</p>
        </div>

        <section className="mb-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Etymology and Cultural Significance</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Latin Astronomy</h3>
              <p className="text-gray-700 text-sm">
                Stella and Celeste derive from Latin words for star and heavenly. Romans associated celestial bodies with divinity and eternal beauty.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Greek Mythology</h3>
              <p className="text-gray-700 text-sm">
                Astra means star in Greek. Greek mythology populated the night sky with heroic figures transformed into constellations.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Persian Night</h3>
              <p className="text-gray-700 text-sm">
                Esther means star in Persian. Ancient Persians were skilled astronomers who studied celestial patterns for navigation and timekeeping.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Japanese Cosmos</h3>
              <p className="text-gray-700 text-sm">
                Hoshi (star) and Sora (sky) reflect Japanese appreciation for celestial beauty and the transient nature of cosmic phenomena.
              </p>
            </div>
          </div>
        </section>

        {girlNames.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Girl Names Meaning Star and Sky ({girlNames.length})</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {girlNames.map(name => (
                <Link key={name.slug} href={`/name/${name.slug}/`}
                  className="bg-white border border-gray-200 hover:border-blue-300 hover:shadow-md rounded-lg p-4 transition">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-gray-900">{name.name}</h3>
                    {name.popularity && name.popularity <= 100 && (
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">#{name.popularity}</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{name.meaning}</p>
                  <span className="text-xs text-gray-500">{name.origin}</span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {boyNames.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Boy Names Meaning Star and Sky ({boyNames.length})</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {boyNames.map(name => (
                <Link key={name.slug} href={`/name/${name.slug}/`}
                  className="bg-white border border-gray-200 hover:border-indigo-300 hover:shadow-md rounded-lg p-4 transition">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-gray-900">{name.name}</h3>
                    {name.popularity && name.popularity <= 100 && (
                      <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded">#{name.popularity}</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{name.meaning}</p>
                  <span className="text-xs text-gray-500">{name.origin}</span>
                </Link>
              ))}
            </div>
          </section>
        )}

        <section className="bg-gray-50 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About Star and Sky Names</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-4">
              Celestial names connect us to the vast universe beyond our world. Throughout history, humans have looked to the stars with wonder, using them for navigation, timekeeping, and storytelling.
            </p>
            <p className="text-gray-600">
              Parents choose star and sky names to celebrate the infinite possibilities and wonder their child represents, connecting them to the eternal beauty of the cosmos.
            </p>
          </div>
        </section>

        <section className="bg-white border border-gray-200 rounded-xl p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Explore More Name Meanings</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/meanings/beauty-and-light/" className="text-primary-600 hover:text-primary-700 font-medium">✨ Beauty Names →</Link>
            <Link href="/meanings/nature-and-earth/" className="text-primary-600 hover:text-primary-700 font-medium">🌍 Nature Names →</Link>
            <Link href="/meanings/water-and-ocean/" className="text-primary-600 hover:text-primary-700 font-medium">🌊 Water Names →</Link>
            <Link href="/meanings/" className="text-primary-600 hover:text-primary-700 font-medium">📝 All Meanings →</Link>
          </div>
        </section>
      </div>
    </>
  )
}

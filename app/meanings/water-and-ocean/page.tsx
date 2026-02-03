import { Metadata } from 'next'
import Link from 'next/link'
import { getAllNames } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Names Meaning Water and Ocean - Aquatic Baby Names',
  description: 'Discover 150+ baby names meaning water, ocean, sea, river, and wave. Find aquatic names inspired by water elements.',
}

export default function WaterAndOceanPage() {
  const allNames = getAllNames()

  const waterKeywords = [
    'water', 'ocean', 'sea', 'river', 'stream', 'lake', 'wave',
    'tide', 'rain', 'mist', 'dew', 'spring', 'brook', 'cascade',
    'marine', 'aqua', 'nautical', 'maritime', 'pearl', 'coral'
  ]

  const waterNames = allNames.filter(name => {
    const meaningLower = name.meaning.toLowerCase()
    return waterKeywords.some(keyword => meaningLower.includes(keyword))
  }).sort((a, b) => (a.popularity || 999) - (b.popularity || 999))

  const girlNames = waterNames.filter(n => n.gender === 'girl').slice(0, 75)
  const boyNames = waterNames.filter(n => n.gender === 'boy').slice(0, 75)

  const websiteUrl = 'https://babynamescout.com'

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: websiteUrl },
      { '@type': 'ListItem', position: 2, name: 'Meanings', item: `${websiteUrl}/meanings/` },
      { '@type': 'ListItem', position: 3, name: 'Water and Ocean', item: `${websiteUrl}/meanings/water-and-ocean/` }
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
          <span className="text-gray-900">Water and Ocean</span>
        </nav>

        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🌊</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Names Meaning Water and Ocean</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Explore aquatic names inspired by water, ocean, rivers, and seas. These names celebrate the flowing beauty of water elements.
          </p>
          <p className="text-lg font-medium text-cyan-600">{waterNames.length} water names found</p>
        </div>

        <section className="mb-12 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Etymology and Cultural Significance</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-cyan-900 mb-2">Celtic Rivers</h3>
              <p className="text-gray-700 text-sm">
                Shannon (wise river) and Douglas (dark water) connect to Celtic reverence for rivers as sacred life-giving forces in the landscape.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-cyan-900 mb-2">Greek Maritime</h3>
              <p className="text-gray-700 text-sm">
                Marina means of the sea in Greek. Ancient Greeks were seafarers who saw the ocean as both provider and powerful deity.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-cyan-900 mb-2">Hebrew Rain</h3>
              <p className="text-gray-700 text-sm">
                Tal means dew or rain in Hebrew. Water was precious in arid Middle Eastern climates, symbolizing divine blessing and life itself.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-cyan-900 mb-2">Japanese Flow</h3>
              <p className="text-gray-700 text-sm">
                Nami (wave) and Kai (ocean) reflect Japanese island culture's deep connection to the sea and appreciation for water's beauty.
              </p>
            </div>
          </div>
        </section>

        {girlNames.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Girl Names Meaning Water and Ocean ({girlNames.length})</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {girlNames.map(name => (
                <Link key={name.slug} href={`/name/${name.slug}/`}
                  className="bg-white border border-gray-200 hover:border-cyan-300 hover:shadow-md rounded-lg p-4 transition">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-gray-900">{name.name}</h3>
                    {name.popularity && name.popularity <= 100 && (
                      <span className="text-xs bg-cyan-100 text-cyan-700 px-2 py-1 rounded">#{name.popularity}</span>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Boy Names Meaning Water and Ocean ({boyNames.length})</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {boyNames.map(name => (
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

        <section className="bg-gray-50 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About Water and Ocean Names</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-4">
              Water names celebrate one of life's essential elements. From mighty oceans to gentle streams, water symbolizes flow, adaptability, purity, and the continuous cycle of renewal.
            </p>
            <p className="text-gray-600">
              Parents choose water names to evoke qualities of fluidity, depth, and life-giving power, hoping their children will adapt gracefully to life's changes like water flowing around obstacles.
            </p>
          </div>
        </section>

        <section className="bg-white border border-gray-200 rounded-xl p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Explore More Name Meanings</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/meanings/nature-and-earth/" className="text-primary-600 hover:text-primary-700 font-medium">🌍 Nature Names →</Link>
            <Link href="/meanings/star-and-sky/" className="text-primary-600 hover:text-primary-700 font-medium">⭐ Star Names →</Link>
            <Link href="/meanings/beauty-and-light/" className="text-primary-600 hover:text-primary-700 font-medium">✨ Beauty Names →</Link>
            <Link href="/meanings/" className="text-primary-600 hover:text-primary-700 font-medium">📝 All Meanings →</Link>
          </div>
        </section>
      </div>
    </>
  )
}

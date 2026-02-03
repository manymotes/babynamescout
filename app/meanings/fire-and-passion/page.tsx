import { Metadata } from 'next'
import Link from 'next/link'
import { getAllNames } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Names Meaning Fire and Passion - Fiery Baby Names',
  description: 'Discover 150+ baby names meaning fire, flame, passion, ardent, and blazing. Find names celebrating fiery spirit and enthusiasm.',
}

export default function FireAndPassionPage() {
  const allNames = getAllNames()

  const fireKeywords = [
    'fire', 'flame', 'blaze', 'spark', 'ember', 'inferno', 'ardent',
    'passion', 'passionate', 'fervent', 'zealous', 'fiery', 'burning',
    'heat', 'warm', 'glow', 'radiant', 'phoenix', 'sun'
  ]

  const fireNames = allNames.filter(name => {
    const meaningLower = name.meaning.toLowerCase()
    return fireKeywords.some(keyword => meaningLower.includes(keyword))
  }).sort((a, b) => (a.popularity || 999) - (b.popularity || 999))

  const girlNames = fireNames.filter(n => n.gender === 'girl').slice(0, 75)
  const boyNames = fireNames.filter(n => n.gender === 'boy').slice(0, 75)

  const websiteUrl = 'https://babynamescout.com'

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: websiteUrl },
      { '@type': 'ListItem', position: 2, name: 'Meanings', item: `${websiteUrl}/meanings/` },
      { '@type': 'ListItem', position: 3, name: 'Fire and Passion', item: `${websiteUrl}/meanings/fire-and-passion/` }
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
          <span className="text-gray-900">Fire and Passion</span>
        </nav>

        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🔥</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Names Meaning Fire and Passion</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Explore fiery names meaning fire, flame, passion, and blazing. These names celebrate enthusiasm, energy, and burning spirit.
          </p>
          <p className="text-lg font-medium text-orange-600">{fireNames.length} fiery names found</p>
        </div>

        <section className="mb-12 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Etymology and Cultural Significance</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-orange-900 mb-2">Greek Elements</h3>
              <p className="text-gray-700 text-sm">
                Aidan means little fire in Irish. Fire was one of the four classical elements, representing transformation, energy, and the divine spark.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-orange-900 mb-2">Phoenix Rebirth</h3>
              <p className="text-gray-700 text-sm">
                Phoenix symbolizes renewal through fire. The mythical bird burns and rises from ashes, representing transformation and eternal life.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-orange-900 mb-2">Solar Names</h3>
              <p className="text-gray-700 text-sm">
                Names connecting to the sun like Cyrus (sun, lord) celebrate fire's life-giving warmth and light essential to all existence.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-orange-900 mb-2">Passion and Fervor</h3>
              <p className="text-gray-700 text-sm">
                Fire metaphorically represents passion, enthusiasm, and the burning desire to pursue dreams and live life fully with intensity.
              </p>
            </div>
          </div>
        </section>

        {girlNames.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Girl Names Meaning Fire and Passion ({girlNames.length})</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {girlNames.map(name => (
                <Link key={name.slug} href={`/name/${name.slug}/`}
                  className="bg-white border border-gray-200 hover:border-orange-300 hover:shadow-md rounded-lg p-4 transition">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-gray-900">{name.name}</h3>
                    {name.popularity && name.popularity <= 100 && (
                      <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">#{name.popularity}</span>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Boy Names Meaning Fire and Passion ({boyNames.length})</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {boyNames.map(name => (
                <Link key={name.slug} href={`/name/${name.slug}/`}
                  className="bg-white border border-gray-200 hover:border-red-300 hover:shadow-md rounded-lg p-4 transition">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-gray-900">{name.name}</h3>
                    {name.popularity && name.popularity <= 100 && (
                      <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">#{name.popularity}</span>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About Fire and Passion Names</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-4">
              Fire names celebrate one of nature's most powerful forces - transformative, warming, illuminating, and energizing. Fire represents passion, enthusiasm, and the burning desire to make a difference in the world.
            </p>
            <p className="text-gray-600">
              Parents choose fire names to inspire energy, passion, and a spirited approach to life, hoping their children will burn brightly with enthusiasm and purpose.
            </p>
          </div>
        </section>

        <section className="bg-white border border-gray-200 rounded-xl p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Explore More Name Meanings</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/meanings/strength-and-power/" className="text-primary-600 hover:text-primary-700 font-medium">💪 Strength Names →</Link>
            <Link href="/meanings/beauty-and-light/" className="text-primary-600 hover:text-primary-700 font-medium">✨ Beauty Names →</Link>
            <Link href="/meanings/nature-and-earth/" className="text-primary-600 hover:text-primary-700 font-medium">🌍 Nature Names →</Link>
            <Link href="/meanings/" className="text-primary-600 hover:text-primary-700 font-medium">📝 All Meanings →</Link>
          </div>
        </section>
      </div>
    </>
  )
}

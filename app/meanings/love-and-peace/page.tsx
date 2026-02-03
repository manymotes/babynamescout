import { Metadata } from 'next'
import Link from 'next/link'
import { getAllNames } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Names Meaning Love and Peace - Peaceful Baby Names',
  description: 'Discover 150+ baby names meaning love, peace, harmony, and serenity. Find names that celebrate compassion and tranquility.',
}

export default function LoveAndPeacePage() {
  const allNames = getAllNames()

  const loveKeywords = [
    'love', 'loved', 'beloved', 'dear', 'precious', 'cherished',
    'peace', 'peaceful', 'serene', 'calm', 'tranquil', 'harmony',
    'gentle', 'kind', 'tender', 'affection', 'devotion', 'amity',
    'concord', 'serenity', 'stillness', 'quiet'
  ]

  const loveNames = allNames.filter(name => {
    const meaningLower = name.meaning.toLowerCase()
    return loveKeywords.some(keyword => meaningLower.includes(keyword))
  }).sort((a, b) => (a.popularity || 999) - (b.popularity || 999))

  const girlNames = loveNames.filter(n => n.gender === 'girl').slice(0, 75)
  const boyNames = loveNames.filter(n => n.gender === 'boy').slice(0, 75)
  const unisexNames = loveNames.filter(n => n.gender === 'unisex').slice(0, 20)

  const websiteUrl = 'https://babynamescout.com'

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: websiteUrl },
      { '@type': 'ListItem', position: 2, name: 'Meanings', item: `${websiteUrl}/meanings/` },
      { '@type': 'ListItem', position: 3, name: 'Love and Peace', item: `${websiteUrl}/meanings/love-and-peace/` }
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
          <span className="text-gray-900">Love and Peace</span>
        </nav>

        <div className="text-center mb-12">
          <div className="text-6xl mb-4">❤️</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Names Meaning Love and Peace</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Explore names celebrating love, peace, harmony, and serenity. These names embody compassion, affection, and tranquility.
          </p>
          <p className="text-lg font-medium text-rose-600">{loveNames.length} loving names found</p>
        </div>

        <section className="mb-12 bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Etymology and Cultural Significance</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-rose-900 mb-2">Latin Amor</h3>
              <p className="text-gray-700 text-sm">
                Amara, Amy, and Amadeus derive from Latin "amor" (love). Roman culture celebrated love as a divine force connecting all beings.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-rose-900 mb-2">Hebrew Peace</h3>
              <p className="text-gray-700 text-sm">
                Solomon and Shalom mean peace in Hebrew. David means beloved, expressing God's love and favor in Jewish tradition.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-rose-900 mb-2">Greek Harmony</h3>
              <p className="text-gray-700 text-sm">
                Irene means peace in Greek. Philomena means lover of strength, combining affection with power in classical Greek thought.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-rose-900 mb-2">Asian Serenity</h3>
              <p className="text-gray-700 text-sm">
                Asian names often blend love with other virtues like Ren (lotus/love) and Heiwa (peace), emphasizing spiritual harmony.
              </p>
            </div>
          </div>
        </section>

        {girlNames.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Girl Names Meaning Love and Peace ({girlNames.length})
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {girlNames.map(name => (
                <Link key={name.slug} href={`/name/${name.slug}/`}
                  className="bg-white border border-gray-200 hover:border-rose-300 hover:shadow-md rounded-lg p-4 transition">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-gray-900">{name.name}</h3>
                    {name.popularity && name.popularity <= 100 && (
                      <span className="text-xs bg-rose-100 text-rose-700 px-2 py-1 rounded">#{name.popularity}</span>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Boy Names Meaning Love and Peace ({boyNames.length})
            </h2>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About Love and Peace Names</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-4">
              Names meaning love and peace express humanity's highest aspirations for harmony, compassion, and connection. These names celebrate affection, serenity, and the bonds that unite us.
            </p>
            <p className="text-gray-600">
              Parents choose love and peace names to inspire kindness, empathy, and tranquility in their children, hoping they will bring harmony to the world around them.
            </p>
          </div>
        </section>

        <section className="bg-white border border-gray-200 rounded-xl p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Explore More Name Meanings</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/meanings/joy-and-happiness/" className="text-primary-600 hover:text-primary-700 font-medium">😊 Joy Names →</Link>
            <Link href="/meanings/beauty-and-light/" className="text-primary-600 hover:text-primary-700 font-medium">✨ Beauty Names →</Link>
            <Link href="/meanings/faith-and-spirit/" className="text-primary-600 hover:text-primary-700 font-medium">🙏 Faith Names →</Link>
            <Link href="/meanings/" className="text-primary-600 hover:text-primary-700 font-medium">📝 All Meanings →</Link>
          </div>
        </section>
      </div>
    </>
  )
}

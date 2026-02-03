import { Metadata } from 'next'
import Link from 'next/link'
import { getAllNames } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Names Meaning Beauty and Light - Beautiful Baby Names',
  description: 'Discover 150+ baby names meaning beauty, beautiful, light, radiant, and bright. Find lovely names from various cultures celebrating aesthetics and illumination.',
}

export default function BeautyAndLightPage() {
  const allNames = getAllNames()

  const beautyKeywords = [
    'beautiful', 'beauty', 'lovely', 'fair', 'pretty', 'handsome',
    'light', 'bright', 'radiant', 'luminous', 'shining', 'brilliant',
    'glow', 'gleam', 'shine', 'sparkle', 'dawn', 'sunrise',
    'illuminated', 'elegant', 'graceful', 'gorgeous', 'splendid'
  ]

  const beautyNames = allNames.filter(name => {
    const meaningLower = name.meaning.toLowerCase()
    return beautyKeywords.some(keyword => meaningLower.includes(keyword))
  }).sort((a, b) => (a.popularity || 999) - (b.popularity || 999))

  const girlNames = beautyNames.filter(n => n.gender === 'girl').slice(0, 75)
  const boyNames = beautyNames.filter(n => n.gender === 'boy').slice(0, 75)
  const unisexNames = beautyNames.filter(n => n.gender === 'unisex').slice(0, 20)

  const websiteUrl = 'https://babynamescout.com'

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: websiteUrl
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Meanings',
        item: `${websiteUrl}/meanings/`
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Beauty and Light',
        item: `${websiteUrl}/meanings/beauty-and-light/`
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <nav className="text-sm mb-8">
          <Link href="/" className="text-gray-500 hover:text-gray-700">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href="/meanings/" className="text-gray-500 hover:text-gray-700">Meanings</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-900">Beauty and Light</span>
        </nav>

        <div className="text-center mb-12">
          <div className="text-6xl mb-4">✨</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Names Meaning Beauty and Light
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Discover names that celebrate beauty, radiance, and illumination. These names embody aesthetic grace and luminous qualities.
          </p>
          <p className="text-lg font-medium text-pink-600">
            {beautyNames.length} beautiful names found
          </p>
        </div>

        <section className="mb-12 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Etymology and Cultural Significance</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-pink-900 mb-2">Latin Aesthetics</h3>
              <p className="text-gray-700 text-sm">
                Bella and Belle derive from Latin "bellus" meaning beautiful. Clara means bright and clear, emphasizing both physical and spiritual radiance.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-pink-900 mb-2">Hebrew Light</h3>
              <p className="text-gray-700 text-sm">
                Nora and Eleanor mean light in Hebrew tradition. Uri and Uriel connect to divine light and God's illumination, representing spiritual enlightenment.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-pink-900 mb-2">Greek Radiance</h3>
              <p className="text-gray-700 text-sm">
                Helen means bright, shining light in Greek. Phoebe connects to brightness and purity, while Callista means most beautiful in ancient Greek.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-pink-900 mb-2">Asian Elegance</h3>
              <p className="text-gray-700 text-sm">
                Asian names often combine beauty with virtues like Mei (beautiful), Hikari (light), and Ananya (unique, beautiful), emphasizing inner and outer beauty.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12 bg-yellow-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Famous People with Beauty and Light Names</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900">Bella Hadid</h3>
              <p className="text-sm text-gray-600">International supermodel</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900">Helen Mirren</h3>
              <p className="text-sm text-gray-600">Award-winning actress</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900">Clara Bow</h3>
              <p className="text-sm text-gray-600">Silent film star icon</p>
            </div>
          </div>
        </section>

        {girlNames.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Girl Names Meaning Beauty and Light ({girlNames.length})
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {girlNames.map(name => (
                <Link
                  key={name.slug}
                  href={`/name/${name.slug}/`}
                  className="bg-white border border-gray-200 hover:border-pink-300 hover:shadow-md rounded-lg p-4 transition"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-gray-900">{name.name}</h3>
                    {name.popularity && name.popularity <= 100 && (
                      <span className="text-xs bg-pink-100 text-pink-700 px-2 py-1 rounded">
                        #{name.popularity}
                      </span>
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
              Boy Names Meaning Beauty and Light ({boyNames.length})
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {boyNames.map(name => (
                <Link
                  key={name.slug}
                  href={`/name/${name.slug}/`}
                  className="bg-white border border-gray-200 hover:border-blue-300 hover:shadow-md rounded-lg p-4 transition"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-gray-900">{name.name}</h3>
                    {name.popularity && name.popularity <= 100 && (
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                        #{name.popularity}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{name.meaning}</p>
                  <span className="text-xs text-gray-500">{name.origin}</span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {unisexNames.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Unisex Names Meaning Beauty and Light ({unisexNames.length})
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {unisexNames.map(name => (
                <Link
                  key={name.slug}
                  href={`/name/${name.slug}/`}
                  className="bg-white border border-gray-200 hover:border-purple-300 hover:shadow-md rounded-lg p-4 transition"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-gray-900">{name.name}</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{name.meaning}</p>
                  <span className="text-xs text-gray-500">{name.origin}</span>
                </Link>
              ))}
            </div>
          </section>
        )}

        <section className="bg-gray-50 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About Beauty and Light Names</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-4">
              Names meaning beauty and light have been cherished across all cultures as expressions of aesthetic appreciation and spiritual illumination. These names often symbolize not just physical attractiveness but inner radiance, grace, and enlightenment.
            </p>
            <p className="text-gray-600 mb-4">
              Latin names like Bella directly translate to beautiful, while Hebrew names like Eleanor emphasize light as spiritual guidance. Greek names connect beauty to classical ideals of harmony and proportion. Each tradition offers unique perspectives on what makes something truly beautiful.
            </p>
            <p className="text-gray-600">
              Parents choose beauty and light names to celebrate the wonder and brightness their child brings to their lives. These names carry positive associations with joy, hope, and the illuminating presence of a new soul in the world.
            </p>
          </div>
        </section>

        <section className="bg-white border border-gray-200 rounded-xl p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Explore More Name Meanings
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/meanings/joy-and-happiness/" className="text-primary-600 hover:text-primary-700 font-medium">
              😊 Joy Names →
            </Link>
            <Link href="/meanings/love-and-peace/" className="text-primary-600 hover:text-primary-700 font-medium">
              ❤️ Love Names →
            </Link>
            <Link href="/meanings/nature-and-earth/" className="text-primary-600 hover:text-primary-700 font-medium">
              🌍 Nature Names →
            </Link>
            <Link href="/meanings/star-and-sky/" className="text-primary-600 hover:text-primary-700 font-medium">
              ⭐ Star Names →
            </Link>
            <Link href="/meanings/royalty-and-nobility/" className="text-primary-600 hover:text-primary-700 font-medium">
              👑 Royal Names →
            </Link>
            <Link href="/meanings/" className="text-primary-600 hover:text-primary-700 font-medium">
              📝 All Meanings →
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}

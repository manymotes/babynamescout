import { Metadata } from 'next'
import Link from 'next/link'
import { getAllNames } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Names Meaning Joy and Happiness - Happy Baby Names',
  description: 'Discover 150+ baby names meaning joy, happiness, blessed, cheerful, and delight. Find joyful names that celebrate life and positivity.',
}

export default function JoyAndHappinessPage() {
  const allNames = getAllNames()

  const joyKeywords = [
    'joy', 'joyful', 'happy', 'happiness', 'cheerful', 'merry', 'glad',
    'blessed', 'blessing', 'delight', 'delighted', 'bliss', 'blissful',
    'felicity', 'jubilant', 'exultant', 'rejoice', 'celebrate', 'festive',
    'content', 'pleased', 'gleeful', 'elated', 'euphoric', 'jovial'
  ]

  const joyNames = allNames.filter(name => {
    const meaningLower = name.meaning.toLowerCase()
    return joyKeywords.some(keyword => meaningLower.includes(keyword))
  }).sort((a, b) => (a.popularity || 999) - (b.popularity || 999))

  const girlNames = joyNames.filter(n => n.gender === 'girl').slice(0, 75)
  const boyNames = joyNames.filter(n => n.gender === 'boy').slice(0, 75)
  const unisexNames = joyNames.filter(n => n.gender === 'unisex').slice(0, 20)

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
        name: 'Joy and Happiness',
        item: `${websiteUrl}/meanings/joy-and-happiness/`
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
          <span className="text-gray-900">Joy and Happiness</span>
        </nav>

        <div className="text-center mb-12">
          <div className="text-6xl mb-4">😊</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Names Meaning Joy and Happiness
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Discover names that celebrate joy, happiness, and blessings. These cheerful names embody positivity, delight, and the celebration of life.
          </p>
          <p className="text-lg font-medium text-yellow-600">
            {joyNames.length} joyful names found
          </p>
        </div>

        <section className="mb-12 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Etymology and Cultural Significance</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-yellow-900 mb-2">Latin Joy</h3>
              <p className="text-gray-700 text-sm">
                Felix and Felicity derive from Latin "felix" meaning happy and fortunate. Beatrice means bringer of joy, spreading happiness wherever she goes.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-yellow-900 mb-2">Hebrew Blessings</h3>
              <p className="text-gray-700 text-sm">
                Asher means happy and blessed in Hebrew. Isaac means laughter, celebrating the joy and delight that children bring to families.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-yellow-900 mb-2">English Virtue</h3>
              <p className="text-gray-700 text-sm">
                Joy is a straightforward virtue name celebrating happiness. Bliss and Merry directly express states of contentment and celebration.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-yellow-900 mb-2">Cross-Cultural Celebration</h3>
              <p className="text-gray-700 text-sm">
                Names meaning joy appear in every culture, from Allegra (Italian) to Keiko (Japanese), showing universal human appreciation for happiness.
              </p>
            </div>
          </div>
        </section>

        {girlNames.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Girl Names Meaning Joy and Happiness ({girlNames.length})
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {girlNames.map(name => (
                <Link
                  key={name.slug}
                  href={`/name/${name.slug}/`}
                  className="bg-white border border-gray-200 hover:border-yellow-300 hover:shadow-md rounded-lg p-4 transition"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-gray-900">{name.name}</h3>
                    {name.popularity && name.popularity <= 100 && (
                      <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">
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
              Boy Names Meaning Joy and Happiness ({boyNames.length})
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
              Unisex Names Meaning Joy and Happiness ({unisexNames.length})
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About Joy and Happiness Names</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-4">
              Names meaning joy and happiness express the profound delight that children bring to their families. These names celebrate life's positive emotions, from quiet contentment to exuberant celebration.
            </p>
            <p className="text-gray-600 mb-4">
              Across cultures, joy names reflect universal human experiences of happiness. Whether through Latin felicity, Hebrew blessings, or simple English virtue names, these names carry wishes for a life filled with gladness and positive spirit.
            </p>
            <p className="text-gray-600">
              Parents choose joy names to express gratitude for their child and to inspire an optimistic, cheerful outlook on life. These names serve as daily reminders to find delight in the world around us.
            </p>
          </div>
        </section>

        <section className="bg-white border border-gray-200 rounded-xl p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Explore More Name Meanings
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/meanings/love-and-peace/" className="text-primary-600 hover:text-primary-700 font-medium">
              ❤️ Love Names →
            </Link>
            <Link href="/meanings/beauty-and-light/" className="text-primary-600 hover:text-primary-700 font-medium">
              ✨ Beauty Names →
            </Link>
            <Link href="/meanings/new-beginnings/" className="text-primary-600 hover:text-primary-700 font-medium">
              🌱 New Beginnings →
            </Link>
            <Link href="/meanings/nature-and-earth/" className="text-primary-600 hover:text-primary-700 font-medium">
              🌍 Nature Names →
            </Link>
            <Link href="/meanings/star-and-sky/" className="text-primary-600 hover:text-primary-700 font-medium">
              ⭐ Star Names →
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

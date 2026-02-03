import { Metadata } from 'next'
import Link from 'next/link'
import { getAllNames } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Names Meaning Royalty and Nobility - Royal Baby Names',
  description: 'Discover 150+ baby names meaning king, queen, prince, princess, noble, and royal. Find regal names from various cultures.',
}

export default function RoyaltyAndNobilityPage() {
  const allNames = getAllNames()

  const royalKeywords = [
    'king', 'queen', 'prince', 'princess', 'royal', 'regal',
    'noble', 'nobility', 'aristocrat', 'lord', 'lady', 'duke',
    'duchess', 'emperor', 'empress', 'sovereign', 'monarch',
    'crown', 'throne', 'majestic', 'imperial', 'ruler'
  ]

  const royalNames = allNames.filter(name => {
    const meaningLower = name.meaning.toLowerCase()
    return royalKeywords.some(keyword => meaningLower.includes(keyword))
  }).sort((a, b) => (a.popularity || 999) - (b.popularity || 999))

  const girlNames = royalNames.filter(n => n.gender === 'girl').slice(0, 75)
  const boyNames = royalNames.filter(n => n.gender === 'boy').slice(0, 75)

  const websiteUrl = 'https://babynamescout.com'

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: websiteUrl },
      { '@type': 'ListItem', position: 2, name: 'Meanings', item: `${websiteUrl}/meanings/` },
      { '@type': 'ListItem', position: 3, name: 'Royalty and Nobility', item: `${websiteUrl}/meanings/royalty-and-nobility/` }
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
          <span className="text-gray-900">Royalty and Nobility</span>
        </nav>

        <div className="text-center mb-12">
          <div className="text-6xl mb-4">👑</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Names Meaning Royalty and Nobility</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Discover regal names meaning king, queen, prince, princess, and noble. These majestic names convey dignity and aristocratic heritage.
          </p>
          <p className="text-lg font-medium text-purple-600">{royalNames.length} royal names found</p>
        </div>

        <section className="mb-12 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Etymology and Cultural Significance</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-purple-900 mb-2">Germanic Nobility</h3>
              <p className="text-gray-700 text-sm">
                Names like Henry (estate ruler), Richard (brave ruler), and Adelaide (noble) reflect Germanic aristocratic traditions and feudal systems.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-purple-900 mb-2">Latin Regality</h3>
              <p className="text-gray-700 text-sm">
                Rex and Regina directly mean king and queen in Latin. These names embodied Roman imperial authority and divine right to rule.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-purple-900 mb-2">Celtic Kings</h3>
              <p className="text-gray-700 text-sm">
                Ryan (little king) and Brendan (prince) celebrate Celtic royal lineages. Names connect to ancient Irish and Welsh nobility.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-purple-900 mb-2">Persian Royalty</h3>
              <p className="text-gray-700 text-sm">
                Cyrus (king, sun) and Darius (kingly) represent Persian imperial power, connecting to ancient Achaemenid dynasty traditions.
              </p>
            </div>
          </div>
        </section>

        {girlNames.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Girl Names Meaning Royalty and Nobility ({girlNames.length})</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {girlNames.map(name => (
                <Link key={name.slug} href={`/name/${name.slug}/`}
                  className="bg-white border border-gray-200 hover:border-purple-300 hover:shadow-md rounded-lg p-4 transition">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-gray-900">{name.name}</h3>
                    {name.popularity && name.popularity <= 100 && (
                      <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">#{name.popularity}</span>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Boy Names Meaning Royalty and Nobility ({boyNames.length})</h2>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About Royalty and Nobility Names</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-4">
              Royal names carry centuries of aristocratic tradition, connecting to monarchs, nobility, and ruling classes across cultures. These names embody dignity, authority, and leadership qualities valued throughout history.
            </p>
            <p className="text-gray-600">
              Parents choose royal names to inspire confidence, grace, and a sense of noble character in their children, regardless of actual aristocratic heritage.
            </p>
          </div>
        </section>

        <section className="bg-white border border-gray-200 rounded-xl p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Explore More Name Meanings</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/meanings/strength-and-power/" className="text-primary-600 hover:text-primary-700 font-medium">💪 Strength Names →</Link>
            <Link href="/meanings/victory-and-success/" className="text-primary-600 hover:text-primary-700 font-medium">🏆 Victory Names →</Link>
            <Link href="/meanings/wisdom-and-intelligence/" className="text-primary-600 hover:text-primary-700 font-medium">📚 Wisdom Names →</Link>
            <Link href="/meanings/" className="text-primary-600 hover:text-primary-700 font-medium">📝 All Meanings →</Link>
          </div>
        </section>
      </div>
    </>
  )
}

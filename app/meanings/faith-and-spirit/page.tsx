import { Metadata } from 'next'
import Link from 'next/link'
import { getAllNames } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Names Meaning Faith and Spirit - Spiritual Baby Names',
  description: 'Discover 150+ baby names meaning faith, spirit, soul, divine, and blessed. Find spiritual names from various religious traditions.',
}

export default function FaithAndSpiritPage() {
  const allNames = getAllNames()

  const faithKeywords = [
    'faith', 'faithful', 'belief', 'believer', 'spirit', 'spiritual',
    'soul', 'divine', 'god', 'blessed', 'holy', 'sacred', 'prayer',
    'devotion', 'pious', 'righteous', 'angel', 'heaven', 'grace'
  ]

  const faithNames = allNames.filter(name => {
    const meaningLower = name.meaning.toLowerCase()
    return faithKeywords.some(keyword => meaningLower.includes(keyword))
  }).sort((a, b) => (a.popularity || 999) - (b.popularity || 999))

  const girlNames = faithNames.filter(n => n.gender === 'girl').slice(0, 75)
  const boyNames = faithNames.filter(n => n.gender === 'boy').slice(0, 75)

  const websiteUrl = 'https://babynamescout.com'

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: websiteUrl },
      { '@type': 'ListItem', position: 2, name: 'Meanings', item: `${websiteUrl}/meanings/` },
      { '@type': 'ListItem', position: 3, name: 'Faith and Spirit', item: `${websiteUrl}/meanings/faith-and-spirit/` }
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
          <span className="text-gray-900">Faith and Spirit</span>
        </nav>

        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🙏</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Names Meaning Faith and Spirit</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Explore spiritual names meaning faith, divine, blessed, and soul. These names celebrate religious devotion and spiritual connection.
          </p>
          <p className="text-lg font-medium text-indigo-600">{faithNames.length} spiritual names found</p>
        </div>

        <section className="mb-12 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Etymology and Cultural Significance</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-indigo-900 mb-2">Hebrew Faith</h3>
              <p className="text-gray-700 text-sm">
                Names like Emmanuel (God with us), Michael (who is like God), and Gabriel (God is my strength) express deep faith in divine presence and protection.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-indigo-900 mb-2">Christian Grace</h3>
              <p className="text-gray-700 text-sm">
                Grace, Faith, and Hope represent theological virtues. These virtue names became popular among English Puritans as expressions of Christian devotion.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-indigo-900 mb-2">Islamic Devotion</h3>
              <p className="text-gray-700 text-sm">
                Names like Iman (faith), Nasir (helper of God), and Abdul (servant of God) emphasize submission to divine will and faithful service.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-indigo-900 mb-2">Sanskrit Spirit</h3>
              <p className="text-gray-700 text-sm">
                Names like Deva (divine), Atma (soul), and Dharma (righteousness) connect to Hindu and Buddhist spiritual concepts and enlightenment.
              </p>
            </div>
          </div>
        </section>

        {girlNames.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Girl Names Meaning Faith and Spirit ({girlNames.length})</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {girlNames.map(name => (
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

        {boyNames.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Boy Names Meaning Faith and Spirit ({boyNames.length})</h2>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About Faith and Spirit Names</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-4">
              Faith and spirit names connect to religious traditions, spiritual devotion, and divine connection across world religions. These names express beliefs about the sacred, eternal, and transcendent aspects of human existence.
            </p>
            <p className="text-gray-600">
              Parents choose spiritual names to honor religious heritage, express faith, and inspire moral and spiritual development in their children.
            </p>
          </div>
        </section>

        <section className="bg-white border border-gray-200 rounded-xl p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Explore More Name Meanings</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/meanings/love-and-peace/" className="text-primary-600 hover:text-primary-700 font-medium">❤️ Love Names →</Link>
            <Link href="/meanings/wisdom-and-intelligence/" className="text-primary-600 hover:text-primary-700 font-medium">📚 Wisdom Names →</Link>
            <Link href="/meanings/beauty-and-light/" className="text-primary-600 hover:text-primary-700 font-medium">✨ Beauty Names →</Link>
            <Link href="/meanings/" className="text-primary-600 hover:text-primary-700 font-medium">📝 All Meanings →</Link>
          </div>
        </section>
      </div>
    </>
  )
}

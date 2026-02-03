import { Metadata } from 'next'
import Link from 'next/link'
import { getAllNames } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Names Meaning New Beginnings - Fresh Start Baby Names',
  description: 'Discover 150+ baby names meaning new, beginning, dawn, birth, and renewal. Find names celebrating fresh starts and new life.',
}

export default function NewBeginningsPage() {
  const allNames = getAllNames()

  const newKeywords = [
    'new', 'beginning', 'start', 'birth', 'born', 'dawn', 'sunrise',
    'morning', 'spring', 'renewal', 'fresh', 'young', 'first',
    'origin', 'genesis', 'advent', 'arrival', 'emerge', 'bud', 'bloom'
  ]

  const newNames = allNames.filter(name => {
    const meaningLower = name.meaning.toLowerCase()
    return newKeywords.some(keyword => meaningLower.includes(keyword))
  }).sort((a, b) => (a.popularity || 999) - (b.popularity || 999))

  const girlNames = newNames.filter(n => n.gender === 'girl').slice(0, 75)
  const boyNames = newNames.filter(n => n.gender === 'boy').slice(0, 75)

  const websiteUrl = 'https://babynamescout.com'

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: websiteUrl },
      { '@type': 'ListItem', position: 2, name: 'Meanings', item: `${websiteUrl}/meanings/` },
      { '@type': 'ListItem', position: 3, name: 'New Beginnings', item: `${websiteUrl}/meanings/new-beginnings/` }
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
          <span className="text-gray-900">New Beginnings</span>
        </nav>

        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🌱</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Names Meaning New Beginnings</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Explore names celebrating new beginnings, fresh starts, dawn, and birth. These names embody renewal, hope, and the promise of new life.
          </p>
          <p className="text-lg font-medium text-emerald-600">{newNames.length} fresh start names found</p>
        </div>

        <section className="mb-12 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Etymology and Cultural Significance</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-emerald-900 mb-2">Dawn Names</h3>
              <p className="text-gray-700 text-sm">
                Aurora (dawn), Zora (dawn), and Roxana (dawn) celebrate the daily miracle of sunrise, symbolizing hope, fresh starts, and new opportunities.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-emerald-900 mb-2">Birth and Origin</h3>
              <p className="text-gray-700 text-sm">
                Names like Natalie (born on Christmas), Genesis (beginning), and Nova (new) directly celebrate birth and the start of something precious.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-emerald-900 mb-2">Spring Renewal</h3>
              <p className="text-gray-700 text-sm">
                Primrose (first rose) and names meaning spring celebrate seasonal renewal when nature awakens from winter's sleep with fresh growth.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-emerald-900 mb-2">Youth and Freshness</h3>
              <p className="text-gray-700 text-sm">
                Names emphasizing youth like Juvenal (youthful) celebrate the fresh innocence and unlimited potential of a new life beginning.
              </p>
            </div>
          </div>
        </section>

        {girlNames.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Girl Names Meaning New Beginnings ({girlNames.length})</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {girlNames.map(name => (
                <Link key={name.slug} href={`/name/${name.slug}/`}
                  className="bg-white border border-gray-200 hover:border-emerald-300 hover:shadow-md rounded-lg p-4 transition">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-gray-900">{name.name}</h3>
                    {name.popularity && name.popularity <= 100 && (
                      <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded">#{name.popularity}</span>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Boy Names Meaning New Beginnings ({boyNames.length})</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {boyNames.map(name => (
                <Link key={name.slug} href={`/name/${name.slug}/`}
                  className="bg-white border border-gray-200 hover:border-teal-300 hover:shadow-md rounded-lg p-4 transition">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-gray-900">{name.name}</h3>
                    {name.popularity && name.popularity <= 100 && (
                      <span className="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded">#{name.popularity}</span>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About New Beginnings Names</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-4">
              New beginning names celebrate the miracle of birth and the fresh start each child represents. These names embody hope, potential, and the promise that comes with every new dawn and every new life.
            </p>
            <p className="text-gray-600">
              Parents choose new beginning names to mark the transformative moment when their child enters the world, bringing renewed hope and infinite possibilities for the future.
            </p>
          </div>
        </section>

        <section className="bg-white border border-gray-200 rounded-xl p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Explore More Name Meanings</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/meanings/joy-and-happiness/" className="text-primary-600 hover:text-primary-700 font-medium">😊 Joy Names →</Link>
            <Link href="/meanings/beauty-and-light/" className="text-primary-600 hover:text-primary-700 font-medium">✨ Beauty Names →</Link>
            <Link href="/meanings/nature-and-earth/" className="text-primary-600 hover:text-primary-700 font-medium">🌍 Nature Names →</Link>
            <Link href="/meanings/" className="text-primary-600 hover:text-primary-700 font-medium">📝 All Meanings →</Link>
          </div>
        </section>
      </div>
    </>
  )
}

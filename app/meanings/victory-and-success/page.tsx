import { Metadata } from 'next'
import Link from 'next/link'
import { getAllNames } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Names Meaning Victory and Success - Triumphant Baby Names',
  description: 'Discover 150+ baby names meaning victory, success, triumph, winner, and champion. Find names celebrating achievement.',
}

export default function VictoryAndSuccessPage() {
  const allNames = getAllNames()

  const victoryKeywords = [
    'victory', 'victor', 'victorious', 'triumph', 'triumphant', 'winner',
    'champion', 'success', 'successful', 'conqueror', 'glory', 'glorious',
    'achievement', 'accomplish', 'prevail', 'excel', 'prosper'
  ]

  const victoryNames = allNames.filter(name => {
    const meaningLower = name.meaning.toLowerCase()
    return victoryKeywords.some(keyword => meaningLower.includes(keyword))
  }).sort((a, b) => (a.popularity || 999) - (b.popularity || 999))

  const girlNames = victoryNames.filter(n => n.gender === 'girl').slice(0, 75)
  const boyNames = victoryNames.filter(n => n.gender === 'boy').slice(0, 75)

  const websiteUrl = 'https://babynamescout.com'

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: websiteUrl },
      { '@type': 'ListItem', position: 2, name: 'Meanings', item: `${websiteUrl}/meanings/` },
      { '@type': 'ListItem', position: 3, name: 'Victory and Success', item: `${websiteUrl}/meanings/victory-and-success/` }
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
          <span className="text-gray-900">Victory and Success</span>
        </nav>

        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🏆</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Names Meaning Victory and Success</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Discover triumphant names meaning victory, success, champion, and triumph. These names celebrate achievement and winning spirit.
          </p>
          <p className="text-lg font-medium text-amber-600">{victoryNames.length} victorious names found</p>
        </div>

        <section className="mb-12 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Etymology and Cultural Significance</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-amber-900 mb-2">Greek Victory</h3>
              <p className="text-gray-700 text-sm">
                Nike means victory in Greek, the goddess who personified triumph. Nicholas (victory of the people) celebrates collective achievement.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-amber-900 mb-2">Latin Triumph</h3>
              <p className="text-gray-700 text-sm">
                Victoria means victory in Latin. Roman triumph ceremonies celebrated military victories with grand processions through the city.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-amber-900 mb-2">Celtic Champions</h3>
              <p className="text-gray-700 text-sm">
                Names like Cade (battle) and Cadell (battle) connect to Celtic warrior traditions where victory in combat brought honor and status.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-amber-900 mb-2">Sanskrit Success</h3>
              <p className="text-gray-700 text-sm">
                Jaya means victory in Sanskrit. Hindu tradition celebrates victory of good over evil, wisdom over ignorance, light over darkness.
              </p>
            </div>
          </div>
        </section>

        {girlNames.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Girl Names Meaning Victory and Success ({girlNames.length})</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {girlNames.map(name => (
                <Link key={name.slug} href={`/name/${name.slug}/`}
                  className="bg-white border border-gray-200 hover:border-amber-300 hover:shadow-md rounded-lg p-4 transition">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-gray-900">{name.name}</h3>
                    {name.popularity && name.popularity <= 100 && (
                      <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded">#{name.popularity}</span>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Boy Names Meaning Victory and Success ({boyNames.length})</h2>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About Victory and Success Names</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-4">
              Victory names celebrate human achievement, perseverance, and the triumphant spirit. These names inspire ambition, determination, and the drive to overcome obstacles and reach goals.
            </p>
            <p className="text-gray-600">
              Parents choose victory names hoping to inspire a winning mindset and resilient character that helps their children succeed in life's challenges.
            </p>
          </div>
        </section>

        <section className="bg-white border border-gray-200 rounded-xl p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Explore More Name Meanings</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/meanings/strength-and-power/" className="text-primary-600 hover:text-primary-700 font-medium">💪 Strength Names →</Link>
            <Link href="/meanings/courage-and-bravery/" className="text-primary-600 hover:text-primary-700 font-medium">🦁 Courage Names →</Link>
            <Link href="/meanings/royalty-and-nobility/" className="text-primary-600 hover:text-primary-700 font-medium">👑 Royal Names →</Link>
            <Link href="/meanings/" className="text-primary-600 hover:text-primary-700 font-medium">📝 All Meanings →</Link>
          </div>
        </section>
      </div>
    </>
  )
}

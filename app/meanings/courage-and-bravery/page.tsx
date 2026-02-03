import { Metadata } from 'next'
import Link from 'next/link'
import { getAllNames } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Names Meaning Courage and Bravery - Brave Baby Names',
  description: 'Discover 150+ baby names meaning courage, brave, fearless, bold, and valiant. Find heroic names celebrating bravery.',
}

export default function CourageAndBraveryPage() {
  const allNames = getAllNames()

  const courageKeywords = [
    'brave', 'courage', 'courageous', 'bold', 'fearless', 'valiant',
    'hero', 'heroic', 'gallant', 'daring', 'audacious', 'intrepid',
    'dauntless', 'lion', 'warrior', 'defender', 'protector'
  ]

  const courageNames = allNames.filter(name => {
    const meaningLower = name.meaning.toLowerCase()
    return courageKeywords.some(keyword => meaningLower.includes(keyword))
  }).sort((a, b) => (a.popularity || 999) - (b.popularity || 999))

  const girlNames = courageNames.filter(n => n.gender === 'girl').slice(0, 75)
  const boyNames = courageNames.filter(n => n.gender === 'boy').slice(0, 75)

  const websiteUrl = 'https://babynamescout.com'

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: websiteUrl },
      { '@type': 'ListItem', position: 2, name: 'Meanings', item: `${websiteUrl}/meanings/` },
      { '@type': 'ListItem', position: 3, name: 'Courage and Bravery', item: `${websiteUrl}/meanings/courage-and-bravery/` }
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
          <span className="text-gray-900">Courage and Bravery</span>
        </nav>

        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🦁</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Names Meaning Courage and Bravery</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Discover heroic names meaning courage, bravery, fearless, and bold. These names celebrate valor and fearless spirit.
          </p>
          <p className="text-lg font-medium text-amber-600">{courageNames.length} brave names found</p>
        </div>

        <section className="mb-12 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Etymology and Cultural Significance</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-amber-900 mb-2">Germanic Valor</h3>
              <p className="text-gray-700 text-sm">
                Names like Bernard (brave bear), Leonard (lion-hearted), and Baldwin (bold friend) celebrate Germanic warrior culture and fearless leadership.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-amber-900 mb-2">Celtic Heroes</h3>
              <p className="text-gray-700 text-sm">
                Brendan (brave prince) and Nolan (champion) honor Celtic heroic traditions. Courage was essential to Celtic warrior identity and honor codes.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-amber-900 mb-2">Latin Fortitude</h3>
              <p className="text-gray-700 text-sm">
                Valeria and Valentina mean brave and strong, connecting to Roman military virtues. Roman culture celebrated courage as civic duty.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-amber-900 mb-2">English Virtue</h3>
              <p className="text-gray-700 text-sm">
                English names like Andrew (manly, brave) directly celebrate courage as a moral virtue essential to character development.
              </p>
            </div>
          </div>
        </section>

        {girlNames.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Girl Names Meaning Courage and Bravery ({girlNames.length})</h2>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Boy Names Meaning Courage and Bravery ({boyNames.length})</h2>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About Courage and Bravery Names</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-4">
              Courage and bravery names celebrate the human capacity to face fear and overcome challenges. These names have been valued across warrior cultures and continue to inspire strength of character today.
            </p>
            <p className="text-gray-600">
              Parents choose courage names to inspire confidence, resilience, and the willingness to stand up for what's right, hoping their children will face life's challenges with boldness.
            </p>
          </div>
        </section>

        <section className="bg-white border border-gray-200 rounded-xl p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Explore More Name Meanings</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/meanings/strength-and-power/" className="text-primary-600 hover:text-primary-700 font-medium">💪 Strength Names →</Link>
            <Link href="/meanings/victory-and-success/" className="text-primary-600 hover:text-primary-700 font-medium">🏆 Victory Names →</Link>
            <Link href="/meanings/royalty-and-nobility/" className="text-primary-600 hover:text-primary-700 font-medium">👑 Royal Names →</Link>
            <Link href="/meanings/" className="text-primary-600 hover:text-primary-700 font-medium">📝 All Meanings →</Link>
          </div>
        </section>
      </div>
    </>
  )
}

import { Metadata } from 'next'
import Link from 'next/link'
import { getAllNames } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Rare and Unique Name Meanings - Unusual Baby Name Meanings',
  description: 'Discover 150+ baby names with rare and unique meanings including uncommon concepts, mystical themes, and distinctive symbolism.',
}

export default function RareUniqueMeaningsPage() {
  const allNames = getAllNames()

  const rareKeywords = [
    'rare', 'unique', 'unusual', 'exotic', 'mystical', 'magical', 'enchant',
    'mystery', 'legendary', 'mythical', 'ancient', 'forgotten', 'secret',
    'treasure', 'precious', 'gemstone', 'jewel', 'diamond', 'ruby',
    'sapphire', 'pearl', 'jade', 'amber', 'rainbow', 'miracle'
  ]

  const rareNames = allNames.filter(name => {
    const meaningLower = name.meaning.toLowerCase()
    const nameLower = name.name.toLowerCase()
    // Include names with rare keywords OR names that are genuinely uncommon (popularity > 500 or no popularity)
    const hasRareKeyword = rareKeywords.some(keyword => meaningLower.includes(keyword))
    const isUncommon = !name.popularity || name.popularity > 500
    return hasRareKeyword || (isUncommon && name.meaning.length > 15)
  }).sort((a, b) => (a.popularity || 999) - (b.popularity || 999))

  const girlNames = rareNames.filter(n => n.gender === 'girl').slice(0, 75)
  const boyNames = rareNames.filter(n => n.gender === 'boy').slice(0, 75)

  const websiteUrl = 'https://babynamescout.com'

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: websiteUrl },
      { '@type': 'ListItem', position: 2, name: 'Meanings', item: `${websiteUrl}/meanings/` },
      { '@type': 'ListItem', position: 3, name: 'Rare and Unique Meanings', item: `${websiteUrl}/meanings/rare-unique-meanings/` }
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
          <span className="text-gray-900">Rare and Unique Meanings</span>
        </nav>

        <div className="text-center mb-12">
          <div className="text-6xl mb-4">💎</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Rare and Unique Name Meanings</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Discover names with rare, unique, and unusual meanings. From mystical concepts to precious gems, these names offer distinctive symbolism.
          </p>
          <p className="text-lg font-medium text-violet-600">{rareNames.length} unique names found</p>
        </div>

        <section className="mb-12 bg-gradient-to-r from-violet-50 to-purple-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Etymology and Cultural Significance</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-violet-900 mb-2">Gemstone Names</h3>
              <p className="text-gray-700 text-sm">
                Ruby, Jade, Pearl, and Sapphire names celebrate precious stones, each with unique properties and symbolic meanings across cultures worldwide.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-violet-900 mb-2">Mythical Meanings</h3>
              <p className="text-gray-700 text-sm">
                Names connected to legends, mythical creatures, and ancient stories carry mystical associations and connections to timeless tales.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-violet-900 mb-2">Rare Concepts</h3>
              <p className="text-gray-700 text-sm">
                Names meaning rainbow, miracle, enchantment, or other uncommon concepts offer parents distinctive options beyond traditional meanings.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-violet-900 mb-2">Cultural Treasures</h3>
              <p className="text-gray-700 text-sm">
                Lesser-known names from various cultures often carry rich meanings that haven't become mainstream, offering authentic uniqueness.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12 bg-amber-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Categories of Rare Meanings</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4">
              <div className="text-3xl mb-2">💎</div>
              <h3 className="font-semibold text-gray-900 mb-1">Gemstones</h3>
              <p className="text-sm text-gray-600">Ruby, Jade, Pearl, Opal</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="text-3xl mb-2">🌈</div>
              <h3 className="font-semibold text-gray-900 mb-1">Natural Wonders</h3>
              <p className="text-sm text-gray-600">Rainbow, Aurora, Eclipse</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="text-3xl mb-2">🔮</div>
              <h3 className="font-semibold text-gray-900 mb-1">Mystical</h3>
              <p className="text-sm text-gray-600">Enchanted, Magical, Mystical</p>
            </div>
          </div>
        </section>

        {girlNames.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Girl Names with Rare Meanings ({girlNames.length})</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {girlNames.map(name => (
                <Link key={name.slug} href={`/name/${name.slug}/`}
                  className="bg-white border border-gray-200 hover:border-violet-300 hover:shadow-md rounded-lg p-4 transition">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-gray-900">{name.name}</h3>
                    {name.popularity && name.popularity <= 100 && (
                      <span className="text-xs bg-violet-100 text-violet-700 px-2 py-1 rounded">#{name.popularity}</span>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Boy Names with Rare Meanings ({boyNames.length})</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {boyNames.map(name => (
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

        <section className="bg-gray-50 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About Rare and Unique Name Meanings</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-4">
              Names with rare and unique meanings offer parents the opportunity to choose something truly distinctive for their child. These names often carry fascinating stories, unusual symbolism, or connections to lesser-known cultural traditions.
            </p>
            <p className="text-gray-600 mb-4">
              From gemstone names celebrating precious minerals to mystical names evoking magic and wonder, rare meaning names provide options beyond conventional categories. These names stand out not just in sound but in the uncommon concepts they represent.
            </p>
            <p className="text-gray-600">
              Parents seeking truly unique names appreciate the distinctive symbolism and storytelling potential of names with rare meanings, giving their child a name as special and one-of-a-kind as they are.
            </p>
          </div>
        </section>

        <section className="bg-white border border-gray-200 rounded-xl p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Explore More Name Meanings</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/meanings/beauty-and-light/" className="text-primary-600 hover:text-primary-700 font-medium">✨ Beauty Names →</Link>
            <Link href="/meanings/star-and-sky/" className="text-primary-600 hover:text-primary-700 font-medium">⭐ Star Names →</Link>
            <Link href="/meanings/nature-and-earth/" className="text-primary-600 hover:text-primary-700 font-medium">🌍 Nature Names →</Link>
            <Link href="/meanings/fire-and-passion/" className="text-primary-600 hover:text-primary-700 font-medium">🔥 Fire Names →</Link>
            <Link href="/meanings/water-and-ocean/" className="text-primary-600 hover:text-primary-700 font-medium">🌊 Water Names →</Link>
            <Link href="/meanings/" className="text-primary-600 hover:text-primary-700 font-medium">📝 All Meanings →</Link>
          </div>
        </section>
      </div>
    </>
  )
}

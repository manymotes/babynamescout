import { Metadata } from 'next'
import Link from 'next/link'
import { getAllNames } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Names Meaning Nature and Earth - Natural Baby Names',
  description: 'Discover 150+ baby names inspired by nature, earth, flowers, trees, and the natural world. Find organic, earthy names from various cultures.',
}

export default function NatureAndEarthPage() {
  const allNames = getAllNames()

  const natureKeywords = [
    'flower', 'rose', 'lily', 'violet', 'jasmine', 'daisy', 'iris',
    'tree', 'willow', 'oak', 'ash', 'forest', 'woods', 'garden',
    'earth', 'nature', 'leaf', 'meadow', 'river', 'mountain',
    'field', 'valley', 'grove', 'bloom', 'blossom', 'plant',
    'stone', 'rock', 'clay', 'green', 'natural'
  ]

  const natureNames = allNames.filter(name => {
    const meaningLower = name.meaning.toLowerCase()
    return natureKeywords.some(keyword => meaningLower.includes(keyword))
  }).sort((a, b) => (a.popularity || 999) - (b.popularity || 999))

  const girlNames = natureNames.filter(n => n.gender === 'girl').slice(0, 75)
  const boyNames = natureNames.filter(n => n.gender === 'boy').slice(0, 75)
  const unisexNames = natureNames.filter(n => n.gender === 'unisex').slice(0, 20)

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
        name: 'Nature and Earth',
        item: `${websiteUrl}/meanings/nature-and-earth/`
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
          <span className="text-gray-900">Nature and Earth</span>
        </nav>

        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🌍</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Names Meaning Nature and Earth
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Explore names inspired by the natural world including flowers, trees, earth, and landscapes. Celebrate the beauty of nature with organic names.
          </p>
          <p className="text-lg font-medium text-green-600">
            {natureNames.length} nature names found
          </p>
        </div>

        <section className="mb-12 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Etymology and Cultural Significance</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-green-900 mb-2">Floral Names</h3>
              <p className="text-gray-700 text-sm">
                Rose, Lily, Violet, and Jasmine celebrate botanical beauty. Victorian flower language assigned meanings to blooms, making floral names rich with symbolism.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-green-900 mb-2">Tree Names</h3>
              <p className="text-gray-700 text-sm">
                Willow, Rowan, and Aspen connect to strength and longevity. Trees symbolize rootedness, growth, and endurance across cultures worldwide.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-green-900 mb-2">Earth Elements</h3>
              <p className="text-gray-700 text-sm">
                Clay, Stone, and Terra ground us to the physical world. Earth names emphasize stability, foundation, and connection to our planet.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-green-900 mb-2">Landscape Names</h3>
              <p className="text-gray-700 text-sm">
                River, Forest, and Meadow evoke natural settings. These names celebrate specific places in nature that hold spiritual or emotional significance.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12 bg-amber-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Famous People with Nature Names</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900">Lily Collins</h3>
              <p className="text-sm text-gray-600">Actress and model</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900">River Phoenix</h3>
              <p className="text-sm text-gray-600">Legendary actor</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900">Willow Smith</h3>
              <p className="text-sm text-gray-600">Singer and actress</p>
            </div>
          </div>
        </section>

        {girlNames.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Girl Names Meaning Nature and Earth ({girlNames.length})
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {girlNames.map(name => (
                <Link
                  key={name.slug}
                  href={`/name/${name.slug}/`}
                  className="bg-white border border-gray-200 hover:border-green-300 hover:shadow-md rounded-lg p-4 transition"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-gray-900">{name.name}</h3>
                    {name.popularity && name.popularity <= 100 && (
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
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
              Boy Names Meaning Nature and Earth ({boyNames.length})
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
              Unisex Names Meaning Nature and Earth ({unisexNames.length})
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About Nature and Earth Names</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-4">
              Nature and earth names connect us to the natural world and its cycles of growth, renewal, and beauty. From delicate flowers to mighty trees, from flowing rivers to solid mountains, these names celebrate the diverse expressions of nature that surround us.
            </p>
            <p className="text-gray-600 mb-4">
              Botanical names like Rose and Lily have been popular for centuries, valued for their beauty and the virtues associated with specific flowers. Tree names symbolize strength and endurance, while landscape names evoke feelings of peace and natural wonder.
            </p>
            <p className="text-gray-600">
              Modern parents increasingly choose nature names as expressions of environmental consciousness and desire to keep their children connected to the natural world. These names offer timeless appeal with contemporary relevance.
            </p>
          </div>
        </section>

        <section className="bg-white border border-gray-200 rounded-xl p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Explore More Name Meanings
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/meanings/water-and-ocean/" className="text-primary-600 hover:text-primary-700 font-medium">
              🌊 Water Names →
            </Link>
            <Link href="/meanings/star-and-sky/" className="text-primary-600 hover:text-primary-700 font-medium">
              ⭐ Sky Names →
            </Link>
            <Link href="/meanings/beauty-and-light/" className="text-primary-600 hover:text-primary-700 font-medium">
              ✨ Beauty Names →
            </Link>
            <Link href="/meanings/new-beginnings/" className="text-primary-600 hover:text-primary-700 font-medium">
              🌱 New Beginnings →
            </Link>
            <Link href="/meanings/joy-and-happiness/" className="text-primary-600 hover:text-primary-700 font-medium">
              😊 Joy Names →
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

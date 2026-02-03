import { Metadata } from 'next'
import Link from 'next/link'
import { getAllNames } from '@/lib/data'
import type { BabyName } from '@/types/name'

export const metadata: Metadata = {
  title: 'Nature Baby Names - Names Meaning Flowers, Trees, Animals & Nature',
  description: 'Discover 100+ beautiful nature-inspired baby names. Find names meaning flowers, trees, animals, sky, earth, and natural elements for your baby.',
}

interface NameWithDetails extends BabyName {
  details?: string
}

export default function NatureNamesPage() {
  const allNames = getAllNames()

  // Curated list of nature-related names with their meanings
  const natureKeywords = [
    'flower', 'tree', 'rose', 'lily', 'iris', 'violet', 'daisy', 'jasmine',
    'olive', 'willow', 'hazel', 'oak', 'cedar', 'ash', 'pine',
    'lion', 'wolf', 'bear', 'eagle', 'raven', 'dove', 'robin', 'wren',
    'sky', 'star', 'moon', 'sun', 'aurora', 'dawn', 'river', 'ocean', 'sea',
    'mountain', 'forest', 'meadow', 'garden', 'earth', 'stone', 'pearl',
    'ivy', 'sage', 'bay', 'fern', 'heather', 'holly'
  ]

  const natureNames = allNames.filter(name => {
    const meaningLower = name.meaning.toLowerCase()
    const nameLower = name.name.toLowerCase()
    return natureKeywords.some(keyword =>
      meaningLower.includes(keyword) || nameLower.includes(keyword)
    )
  }).sort((a, b) => (a.popularity || 999) - (b.popularity || 999))

  const girlNames = natureNames.filter(n => n.gender === 'girl')
  const boyNames = natureNames.filter(n => n.gender === 'boy')

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
        name: 'Nature Names',
        item: `${websiteUrl}/meanings/nature-names/`
      }
    ]
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What are nature baby names?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nature baby names are names inspired by the natural world, including flowers, trees, animals, celestial bodies, and natural elements. Popular examples include Lily, Rose, River, Forest, Luna, and Sage.'
        }
      },
      {
        '@type': 'Question',
        name: 'What are popular flower names for girls?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Popular flower names for girls include Lily, Rose, Violet, Daisy, Iris, Jasmine, Poppy, Dahlia, and Azalea. These names connect to the beauty and delicacy of flowers.'
        }
      },
      {
        '@type': 'Question',
        name: 'Are nature names unisex?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Many nature names work well as unisex options, such as River, Sky, Sage, Robin, Wren, Phoenix, and Storm. Nature provides a rich source of gender-neutral naming inspiration.'
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm mb-8">
          <Link href="/" className="text-gray-500 hover:text-gray-700">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href="/meanings/" className="text-gray-500 hover:text-gray-700">Meanings</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-900">Nature Names</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🌸</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Nature Baby Names
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Discover beautiful names inspired by flowers, trees, animals, and the natural world.
            These nature-inspired names connect your child to the earth&apos;s beauty and wonder.
          </p>
          <p className="text-lg font-medium text-green-600">
            {natureNames.length} nature names found
          </p>
        </div>

        {/* Category Highlights */}
        <section className="mb-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Nature Name Categories</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">🌺</div>
              <h3 className="font-semibold text-gray-900">Flower Names</h3>
              <p className="text-sm text-gray-600">Lily, Rose, Violet, Daisy</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">🌳</div>
              <h3 className="font-semibold text-gray-900">Tree Names</h3>
              <p className="text-sm text-gray-600">Willow, Hazel, Ash, Oak</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">🦁</div>
              <h3 className="font-semibold text-gray-900">Animal Names</h3>
              <p className="text-sm text-gray-600">Leo, Phoenix, Robin, Raven</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">🌙</div>
              <h3 className="font-semibold text-gray-900">Celestial Names</h3>
              <p className="text-sm text-gray-600">Luna, Aurora, Sky, Star</p>
            </div>
          </div>
        </section>

        {/* Girl Names */}
        {girlNames.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Nature Names for Girls ({girlNames.length})
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

        {/* Boy Names */}
        {boyNames.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Nature Names for Boys ({boyNames.length})
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

        {/* SEO Content */}
        <section className="bg-gray-50 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About Nature Baby Names</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-4">
              Nature-inspired baby names have become increasingly popular as parents seek meaningful connections to the natural world. These names evoke the beauty, strength, and tranquility found in nature, from delicate flowers to mighty trees, from gentle creatures to powerful celestial bodies.
            </p>
            <p className="text-gray-600 mb-4">
              Flower names like Lily, Rose, and Violet have long been favorites for girls, symbolizing beauty, purity, and grace. Tree names such as Willow, Hazel, and Oak convey strength, wisdom, and endurance. Animal-inspired names like Leo, Phoenix, and Robin bring qualities of courage, rebirth, and joy.
            </p>
            <p className="text-gray-600">
              Whether you&apos;re drawn to botanical names, celestial names, or names inspired by landscapes and elements, nature provides an endless source of beautiful and meaningful baby name options. Each name carries its own unique symbolism and connection to the natural world.
            </p>
          </div>
        </section>

        {/* Related Collections */}
        <section className="bg-white border border-gray-200 rounded-xl p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Explore Other Meaning Collections
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/meanings/strong-names/" className="text-primary-600 hover:text-primary-700 font-medium">
              ⚔️ Strong Names →
            </Link>
            <Link href="/meanings/beautiful-names/" className="text-primary-600 hover:text-primary-700 font-medium">
              ✨ Beautiful Names →
            </Link>
            <Link href="/meanings/wise-names/" className="text-primary-600 hover:text-primary-700 font-medium">
              📚 Wise Names →
            </Link>
            <Link href="/meanings/royal-names/" className="text-primary-600 hover:text-primary-700 font-medium">
              👑 Royal Names →
            </Link>
            <Link href="/meanings/happy-names/" className="text-primary-600 hover:text-primary-700 font-medium">
              😊 Happy Names →
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

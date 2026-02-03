import { Metadata } from 'next'
import Link from 'next/link'
import { getAllNames } from '@/lib/data'
import type { BabyName } from '@/types/name'

export const metadata: Metadata = {
  title: 'Happy Baby Names - Names Meaning Joy, Happiness, Blessed & Cheerful',
  description: 'Discover 100+ joyful baby names meaning happy, joy, happiness, blessed, cheerful, and fortunate. Find the perfect joyful name for your baby.',
}

export default function HappyNamesPage() {
  const allNames = getAllNames()

  // Curated list of happiness-related names
  const happyKeywords = [
    'happy', 'happiness', 'joy', 'joyful', 'joyous', 'cheerful', 'merry', 'glad',
    'blessed', 'blessing', 'fortunate', 'lucky', 'prosperous', 'bliss', 'blissful',
    'delight', 'delightful', 'pleasure', 'content', 'satisfied', 'jubilant',
    'celebrate', 'celebration', 'festive', 'sunny', 'bright', 'radiant',
    'smile', 'laugh', 'laughter', 'felicity', 'beatitude', 'elated'
  ]

  const happyNames = allNames.filter(name => {
    const meaningLower = name.meaning.toLowerCase()
    return happyKeywords.some(keyword => meaningLower.includes(keyword))
  }).sort((a, b) => (a.popularity || 999) - (b.popularity || 999))

  const girlNames = happyNames.filter(n => n.gender === 'girl')
  const boyNames = happyNames.filter(n => n.gender === 'boy')

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
        name: 'Happy Names',
        item: `${websiteUrl}/meanings/happy-names/`
      }
    ]
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What baby names mean happy or joy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Baby names meaning happy or joy include Asher (happy, blessed), Felix (happy, fortunate), Joy, Felicity (happiness), Beatrice (bringer of joy), and Isaac (laughter).'
        }
      },
      {
        '@type': 'Question',
        name: 'What girl names mean blessed or fortunate?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Girl names meaning blessed or fortunate include Beatrice (blessed), Felicity (happiness), Asher (happy, blessed), Gwyneth (blessed), and Benedicta (blessed).'
        }
      },
      {
        '@type': 'Question',
        name: 'What boy names mean joyful or cheerful?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Boy names meaning joyful or cheerful include Asher (happy, blessed), Felix (happy, fortunate), Isaac (laughter), Gideon (great warrior/joyous), and Bennett (blessed).'
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
          <span className="text-gray-900">Happy Names</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">😊</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Happy Baby Names
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Discover joyful names meaning happy, joy, blessed, and cheerful.
            These uplifting names celebrate happiness, positivity, and good fortune for your baby.
          </p>
          <p className="text-lg font-medium text-yellow-600">
            {happyNames.length} happy names found
          </p>
        </div>

        {/* Category Highlights */}
        <section className="mb-12 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Types of Happy Names</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">🌟</div>
              <h3 className="font-semibold text-gray-900">Joy Names</h3>
              <p className="text-sm text-gray-600">Joy, Alegria, Gioia</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">🍀</div>
              <h3 className="font-semibold text-gray-900">Blessed Names</h3>
              <p className="text-sm text-gray-600">Asher, Beatrice, Benedict</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">☀️</div>
              <h3 className="font-semibold text-gray-900">Cheerful Names</h3>
              <p className="text-sm text-gray-600">Felix, Felicity, Hilary</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">🎉</div>
              <h3 className="font-semibold text-gray-900">Fortunate Names</h3>
              <p className="text-sm text-gray-600">Faustina, Ventura, Prosper</p>
            </div>
          </div>
        </section>

        {/* Girl Names */}
        {girlNames.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Happy Names for Girls ({girlNames.length})
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

        {/* Boy Names */}
        {boyNames.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Happy Names for Boys ({boyNames.length})
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About Happy Baby Names</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-4">
              Happy baby names celebrate joy, positivity, and good fortune. These uplifting names carry meanings related to happiness, blessings, cheerfulness, and prosperity. From names that directly translate to joy or happy to those suggesting good fortune and celebration, these names reflect the delight parents feel welcoming their new baby.
            </p>
            <p className="text-gray-600 mb-4">
              Names like Asher, meaning happy or blessed, have biblical roots and timeless appeal. Felix and Felicity, both derived from the Latin word for happiness, bring a sense of good fortune. Joy itself is a pure expression of happiness, while names like Beatrice mean bringer of joy or blessed. Isaac, meaning laughter, captures the delight children bring to families.
            </p>
            <p className="text-gray-600">
              Whether you&apos;re drawn to names that directly mean happy, names suggesting blessings and good fortune, or names associated with laughter and celebration, this collection offers joyful options for parents who want to express their happiness and hopes for their child. These positive names inspire optimism and cheerfulness.
            </p>
          </div>
        </section>

        {/* Related Collections */}
        <section className="bg-white border border-gray-200 rounded-xl p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Explore Other Meaning Collections
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/meanings/nature-names/" className="text-primary-600 hover:text-primary-700 font-medium">
              🌸 Nature Names →
            </Link>
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
            <Link href="/meanings/" className="text-primary-600 hover:text-primary-700 font-medium">
              📝 All Meanings →
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}

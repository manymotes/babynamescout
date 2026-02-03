import { Metadata } from 'next'
import Link from 'next/link'
import { getAllNames } from '@/lib/data'
import type { BabyName } from '@/types/name'

export const metadata: Metadata = {
  title: 'Beautiful Baby Names - Names Meaning Beautiful, Pretty, Lovely & Fair',
  description: 'Discover 100+ beautiful baby names meaning pretty, lovely, fair, gorgeous, and beautiful. Find the perfect elegant name for your baby.',
}

export default function BeautifulNamesPage() {
  const allNames = getAllNames()

  // Curated list of beauty-related names
  const beautifulKeywords = [
    'beautiful', 'beauty', 'pretty', 'lovely', 'fair', 'handsome', 'gorgeous',
    'elegant', 'graceful', 'grace', 'charm', 'charming', 'attractive', 'radiant',
    'bright', 'shining', 'brilliant', 'splendid', 'magnificent', 'exquisite',
    'adorable', 'delicate', 'refined', 'precious', 'jewel', 'gem', 'pearl',
    'light', 'luminous', 'gleaming', 'glowing', 'dazzling', 'stunning'
  ]

  const beautifulNames = allNames.filter(name => {
    const meaningLower = name.meaning.toLowerCase()
    return beautifulKeywords.some(keyword => meaningLower.includes(keyword))
  }).sort((a, b) => (a.popularity || 999) - (b.popularity || 999))

  const girlNames = beautifulNames.filter(n => n.gender === 'girl')
  const boyNames = beautifulNames.filter(n => n.gender === 'boy')

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
        name: 'Beautiful Names',
        item: `${websiteUrl}/meanings/beautiful-names/`
      }
    ]
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What baby names mean beautiful?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Baby names meaning beautiful include Bella, Belle, Bonnie, Calista, Venus, Jolie, Nava, and Yaffa. These names directly translate to beautiful or lovely in various languages.'
        }
      },
      {
        '@type': 'Question',
        name: 'What girl names mean pretty or lovely?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Girl names meaning pretty or lovely include Linda (pretty), Bella (beautiful), Bonnie (pretty, attractive), Jolie (pretty), and Nava (beautiful, pleasant).'
        }
      },
      {
        '@type': 'Question',
        name: 'What names mean light or bright?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Names meaning light or bright include Eleanor (bright, shining one), Clara (bright, clear), Lucy (light), Phoebe (bright, radiant), and Robert (bright fame).'
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
          <span className="text-gray-900">Beautiful Names</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">✨</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Beautiful Baby Names
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Discover elegant names meaning beautiful, pretty, lovely, and fair.
            These names celebrate beauty, grace, and radiance for your baby.
          </p>
          <p className="text-lg font-medium text-pink-600">
            {beautifulNames.length} beautiful names found
          </p>
        </div>

        {/* Category Highlights */}
        <section className="mb-12 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Types of Beautiful Names</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">💖</div>
              <h3 className="font-semibold text-gray-900">Beautiful Names</h3>
              <p className="text-sm text-gray-600">Bella, Belle, Calista</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">🌟</div>
              <h3 className="font-semibold text-gray-900">Bright Names</h3>
              <p className="text-sm text-gray-600">Eleanor, Clara, Lucy</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">💎</div>
              <h3 className="font-semibold text-gray-900">Precious Names</h3>
              <p className="text-sm text-gray-600">Gemma, Pearl, Ruby</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">🦢</div>
              <h3 className="font-semibold text-gray-900">Graceful Names</h3>
              <p className="text-sm text-gray-600">Grace, Hannah, Zara</p>
            </div>
          </div>
        </section>

        {/* Girl Names */}
        {girlNames.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Beautiful Names for Girls ({girlNames.length})
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {girlNames.map(name => (
                <Link
                  key={name.slug}
                  href={`/name/${name.slug}/`}
                  className="bg-white border border-gray-200 hover:border-pink-300 hover:shadow-md rounded-lg p-4 transition"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-gray-900">{name.name}</h3>
                    {name.popularity && name.popularity <= 100 && (
                      <span className="text-xs bg-pink-100 text-pink-700 px-2 py-1 rounded">
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
              Beautiful Names for Boys ({boyNames.length})
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About Beautiful Baby Names</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-4">
              Beautiful baby names celebrate aesthetic qualities, grace, and radiance. These names have been treasured across cultures for their associations with beauty, elegance, and charm. From names that directly mean beautiful to those that evoke light, brightness, and precious gems, these names carry positive connotations of loveliness and appeal.
            </p>
            <p className="text-gray-600 mb-4">
              Names like Bella and Belle literally translate to beautiful in Italian and French, making them timeless choices for parents seeking beauty in meaning. Names meaning bright or shining, such as Eleanor and Clara, suggest inner and outer radiance. Precious gem names like Pearl and Ruby evoke beauty through valuable natural treasures.
            </p>
            <p className="text-gray-600">
              Whether you prefer names that directly mean beautiful, names that suggest grace and elegance, or names that evoke light and radiance, this collection offers meaningful options that celebrate the beauty you see in your child. These names work wonderfully for both traditional and modern naming styles.
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

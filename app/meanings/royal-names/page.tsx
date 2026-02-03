import { Metadata } from 'next'
import Link from 'next/link'
import { getAllNames } from '@/lib/data'
import type { BabyName } from '@/types/name'

export const metadata: Metadata = {
  title: 'Royal Baby Names - Names Meaning King, Queen, Prince, Princess & Noble',
  description: 'Discover 100+ royal baby names meaning king, queen, prince, princess, noble, and regal. Find the perfect majestic name for your baby.',
}

export default function RoyalNamesPage() {
  const allNames = getAllNames()

  // Curated list of royal-related names
  const royalKeywords = [
    'king', 'queen', 'prince', 'princess', 'royal', 'regal', 'noble', 'nobility',
    'ruler', 'reign', 'crown', 'crowned', 'emperor', 'empress', 'monarch',
    'sovereign', 'duke', 'duchess', 'lord', 'lady', 'baron', 'earl',
    'majestic', 'majesty', 'imperial', 'kingly', 'queenly', 'princely',
    'aristocrat', 'aristocratic', 'highborn', 'chief', 'chieftain',
    'leader', 'commander', 'master', 'mistress'
  ]

  const royalNames = allNames.filter(name => {
    const meaningLower = name.meaning.toLowerCase()
    return royalKeywords.some(keyword => meaningLower.includes(keyword))
  }).sort((a, b) => (a.popularity || 999) - (b.popularity || 999))

  const girlNames = royalNames.filter(n => n.gender === 'girl')
  const boyNames = royalNames.filter(n => n.gender === 'boy')

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
        name: 'Royal Names',
        item: `${websiteUrl}/meanings/royal-names/`
      }
    ]
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What baby names mean royal or noble?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Baby names meaning royal or noble include Basil (kingly), Regina (queen), Malik (king), Sarah (princess), Duke, Earl, and Adeline (noble).'
        }
      },
      {
        '@type': 'Question',
        name: 'What girl names mean princess or queen?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Girl names meaning princess or queen include Sarah and Sara (princess), Regina (queen), Malka (queen), Reina (queen), and Sadie (princess).'
        }
      },
      {
        '@type': 'Question',
        name: 'What boy names mean king or prince?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Boy names meaning king or prince include Malik (king), Rex (king), Basil (kingly), Ryan (little king), and Leroy (the king).'
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
          <span className="text-gray-900">Royal Names</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">👑</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Royal Baby Names
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Discover majestic names meaning king, queen, prince, princess, and noble.
            These regal names convey nobility, leadership, and grandeur for your baby.
          </p>
          <p className="text-lg font-medium text-purple-600">
            {royalNames.length} royal names found
          </p>
        </div>

        {/* Category Highlights */}
        <section className="mb-12 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Types of Royal Names</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">👑</div>
              <h3 className="font-semibold text-gray-900">King Names</h3>
              <p className="text-sm text-gray-600">Malik, Rex, Basil, Ryan</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">👸</div>
              <h3 className="font-semibold text-gray-900">Queen Names</h3>
              <p className="text-sm text-gray-600">Regina, Reina, Malka</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">🤴</div>
              <h3 className="font-semibold text-gray-900">Prince Names</h3>
              <p className="text-sm text-gray-600">Amir, Emir, Prince</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">💎</div>
              <h3 className="font-semibold text-gray-900">Noble Names</h3>
              <p className="text-sm text-gray-600">Adeline, Duke, Earl, Alice</p>
            </div>
          </div>
        </section>

        {/* Girl Names */}
        {girlNames.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Royal Names for Girls ({girlNames.length})
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {girlNames.map(name => (
                <Link
                  key={name.slug}
                  href={`/name/${name.slug}/`}
                  className="bg-white border border-gray-200 hover:border-purple-300 hover:shadow-md rounded-lg p-4 transition"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-gray-900">{name.name}</h3>
                    {name.popularity && name.popularity <= 100 && (
                      <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">
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
              Royal Names for Boys ({boyNames.length})
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About Royal Baby Names</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-4">
              Royal baby names carry an air of nobility, grandeur, and regality. These names have been associated with monarchs, rulers, and aristocracy throughout history, conveying leadership, power, and distinction. From names that directly translate to king or queen to those suggesting noble birth and high status, royal names make a bold and majestic statement.
            </p>
            <p className="text-gray-600 mb-4">
              Names like Sarah, meaning princess, have been beloved for centuries across cultures. Malik and Rex, both meaning king, bring masculine strength and authority. Regina, the Latin word for queen, exudes feminine power and grace. Noble names like Duke, Earl, and Adeline reference aristocratic titles and highborn status.
            </p>
            <p className="text-gray-600">
              Whether you&apos;re drawn to names that directly reference royalty, names suggesting noble lineage, or names associated with leadership and sovereignty, this collection offers majestic options for parents seeking names with regal significance. These names work beautifully for children you want to raise with confidence and dignity.
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

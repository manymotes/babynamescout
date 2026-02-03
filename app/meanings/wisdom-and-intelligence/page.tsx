import { Metadata } from 'next'
import Link from 'next/link'
import { getAllNames } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Names Meaning Wisdom and Intelligence - Smart Baby Names',
  description: 'Discover 150+ baby names meaning wisdom, intelligence, smart, and learned. Find wise names from various cultures with etymology and famous scholars.',
}

export default function WisdomAndIntelligencePage() {
  const allNames = getAllNames()

  const wisdomKeywords = [
    'wise', 'wisdom', 'intelligent', 'intelligence', 'smart', 'sage',
    'learned', 'scholar', 'knowledge', 'knowing', 'bright', 'clever',
    'prudent', 'judicious', 'astute', 'enlightened', 'savvy', 'sharp',
    'keen', 'brilliant', 'genius', 'philosopher', 'teacher', 'mentor'
  ]

  const wisdomNames = allNames.filter(name => {
    const meaningLower = name.meaning.toLowerCase()
    return wisdomKeywords.some(keyword => meaningLower.includes(keyword))
  }).sort((a, b) => (a.popularity || 999) - (b.popularity || 999))

  const girlNames = wisdomNames.filter(n => n.gender === 'girl').slice(0, 75)
  const boyNames = wisdomNames.filter(n => n.gender === 'boy').slice(0, 75)
  const unisexNames = wisdomNames.filter(n => n.gender === 'unisex').slice(0, 20)

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
        name: 'Wisdom and Intelligence',
        item: `${websiteUrl}/meanings/wisdom-and-intelligence/`
      }
    ]
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What names mean wisdom or intelligence?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Names meaning wisdom include Sophia (wisdom), Raymond (wise protector), Sage (wise one), and Minerva (intellect). These names span Greek, Germanic, English, and Roman origins.'
        }
      },
      {
        '@type': 'Question',
        name: 'What girl names mean smart?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Girl names meaning smart or wise include Sophia and Sophie (wisdom), Cassidy (clever), Athena (goddess of wisdom), and Prudence (careful, wise). These names emphasize intelligence and good judgment.'
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
        <nav className="text-sm mb-8">
          <Link href="/" className="text-gray-500 hover:text-gray-700">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href="/meanings/" className="text-gray-500 hover:text-gray-700">Meanings</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-900">Wisdom and Intelligence</span>
        </nav>

        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🧠</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Names Meaning Wisdom and Intelligence
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Explore names that embody wisdom, intelligence, and knowledge. These names celebrate mental acuity, scholarly pursuits, and enlightened thinking.
          </p>
          <p className="text-lg font-medium text-indigo-600">
            {wisdomNames.length} wise names found
          </p>
        </div>

        <section className="mb-12 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Etymology and Cultural Significance</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-indigo-900 mb-2">Greek Philosophy</h3>
              <p className="text-gray-700 text-sm">
                Sophia means wisdom in Greek, deeply tied to philosophical tradition. Athena, goddess of wisdom, represents strategic thinking and intelligence in Greek mythology.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-indigo-900 mb-2">Germanic Counsel</h3>
              <p className="text-gray-700 text-sm">
                Raymond (wise protector) and Conrad (brave counsel) combine wisdom with protection and bravery, showing that intelligence guides strength in Germanic culture.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-indigo-900 mb-2">English Virtue</h3>
              <p className="text-gray-700 text-sm">
                Sage means wise one in English, representing both the herb used for wisdom and the wise person. Prudence emphasizes careful judgment and foresight.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-indigo-900 mb-2">Asian Learning</h3>
              <p className="text-gray-700 text-sm">
                Asian names often emphasize scholarly pursuit and intellectual achievement, with names connecting wisdom to moral virtue and social harmony.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12 bg-purple-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Famous People with Wisdom Names</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900">Sophia Loren</h3>
              <p className="text-sm text-gray-600">Legendary actress and cultural icon</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900">Raymond Carver</h3>
              <p className="text-sm text-gray-600">Influential short story writer</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900">Athena Karkanis</h3>
              <p className="text-sm text-gray-600">Acclaimed actress and producer</p>
            </div>
          </div>
        </section>

        {girlNames.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Girl Names Meaning Wisdom and Intelligence ({girlNames.length})
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {girlNames.map(name => (
                <Link
                  key={name.slug}
                  href={`/name/${name.slug}/`}
                  className="bg-white border border-gray-200 hover:border-indigo-300 hover:shadow-md rounded-lg p-4 transition"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-gray-900">{name.name}</h3>
                    {name.popularity && name.popularity <= 100 && (
                      <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded">
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
              Boy Names Meaning Wisdom and Intelligence ({boyNames.length})
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
              Unisex Names Meaning Wisdom and Intelligence ({unisexNames.length})
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About Wisdom and Intelligence Names</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-4">
              Names meaning wisdom and intelligence have been treasured across cultures as symbols of enlightenment, learning, and good judgment. These names often connect to philosophical traditions, scholarly pursuits, and the human quest for knowledge and understanding.
            </p>
            <p className="text-gray-600 mb-4">
              Greek names like Sophia directly translate to wisdom, while Germanic names like Raymond combine wisdom with protection. English virtue names like Prudence and Sage emphasize practical wisdom and sound judgment. Each cultural tradition offers unique insights into what it means to be wise.
            </p>
            <p className="text-gray-600">
              Parents choose wisdom names to inspire intellectual curiosity, critical thinking, and lifelong learning in their children. Whether classical like Athena or modern like Sage, these names carry timeless associations with knowledge and enlightenment.
            </p>
          </div>
        </section>

        <section className="bg-white border border-gray-200 rounded-xl p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Explore More Name Meanings
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/meanings/strength-and-power/" className="text-primary-600 hover:text-primary-700 font-medium">
              💪 Strength Names →
            </Link>
            <Link href="/meanings/courage-and-bravery/" className="text-primary-600 hover:text-primary-700 font-medium">
              🦁 Courage Names →
            </Link>
            <Link href="/meanings/beauty-and-light/" className="text-primary-600 hover:text-primary-700 font-medium">
              ✨ Beauty Names →
            </Link>
            <Link href="/meanings/royalty-and-nobility/" className="text-primary-600 hover:text-primary-700 font-medium">
              👑 Royal Names →
            </Link>
            <Link href="/meanings/nature-and-earth/" className="text-primary-600 hover:text-primary-700 font-medium">
              🌍 Nature Names →
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

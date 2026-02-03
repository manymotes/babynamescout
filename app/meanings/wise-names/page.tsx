import { Metadata } from 'next'
import Link from 'next/link'
import { getAllNames } from '@/lib/data'
import type { BabyName } from '@/types/name'

export const metadata: Metadata = {
  title: 'Wise Baby Names - Names Meaning Wise, Intelligent, Smart & Learned',
  description: 'Discover 100+ wise baby names meaning intelligent, smart, learned, sage, and knowledgeable. Find the perfect wise name for your baby.',
}

export default function WiseNamesPage() {
  const allNames = getAllNames()

  // Curated list of wisdom-related names
  const wiseKeywords = [
    'wise', 'wisdom', 'intelligent', 'smart', 'clever', 'sage', 'learned',
    'scholar', 'knowledge', 'knowing', 'prudent', 'thoughtful', 'discerning',
    'understanding', 'insightful', 'enlightened', 'genius', 'bright', 'brilliant',
    'astute', 'keen', 'sharp', 'perceptive', 'sensible', 'judicious',
    'teacher', 'mentor', 'philosopher', 'counselor', 'advisor'
  ]

  const wiseNames = allNames.filter(name => {
    const meaningLower = name.meaning.toLowerCase()
    return wiseKeywords.some(keyword => meaningLower.includes(keyword))
  }).sort((a, b) => (a.popularity || 999) - (b.popularity || 999))

  const girlNames = wiseNames.filter(n => n.gender === 'girl')
  const boyNames = wiseNames.filter(n => n.gender === 'boy')

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
        name: 'Wise Names',
        item: `${websiteUrl}/meanings/wise-names/`
      }
    ]
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What baby names mean wise?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Baby names meaning wise include Sophia (wisdom), Raymond (wise protector), Conrad (wise counsel), Sage (wise one), and Minerva (goddess of wisdom).'
        }
      },
      {
        '@type': 'Question',
        name: 'What girl names mean wisdom or intelligent?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Girl names meaning wisdom or intelligent include Sophia and Sofia (wisdom), Athena (goddess of wisdom), Sage (wise one), Minerva (wisdom), and Cassidy (clever).'
        }
      },
      {
        '@type': 'Question',
        name: 'What boy names mean wise or smart?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Boy names meaning wise or smart include Raymond (wise protector), Conrad (wise counsel), Hakim (wise), Alfred (wise counselor), and Alden (wise friend).'
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
          <span className="text-gray-900">Wise Names</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">📚</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Wise Baby Names
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Discover thoughtful names meaning wise, intelligent, smart, and learned.
            These names celebrate knowledge, wisdom, and intellectual strength for your baby.
          </p>
          <p className="text-lg font-medium text-indigo-600">
            {wiseNames.length} wise names found
          </p>
        </div>

        {/* Category Highlights */}
        <section className="mb-12 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Types of Wise Names</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">🦉</div>
              <h3 className="font-semibold text-gray-900">Wisdom Names</h3>
              <p className="text-sm text-gray-600">Sophia, Sofia, Raymond</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">💡</div>
              <h3 className="font-semibold text-gray-900">Intelligent Names</h3>
              <p className="text-sm text-gray-600">Alfred, Cassidy, Hakim</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">📖</div>
              <h3 className="font-semibold text-gray-900">Scholar Names</h3>
              <p className="text-sm text-gray-600">Sage, Conrad, Minerva</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">🎓</div>
              <h3 className="font-semibold text-gray-900">Learned Names</h3>
              <p className="text-sm text-gray-600">Athena, Alden, Hugo</p>
            </div>
          </div>
        </section>

        {/* Girl Names */}
        {girlNames.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Wise Names for Girls ({girlNames.length})
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

        {/* Boy Names */}
        {boyNames.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Wise Names for Boys ({boyNames.length})
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About Wise Baby Names</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-4">
              Wise baby names honor the values of intelligence, knowledge, and discernment. Throughout history, wisdom has been celebrated as one of the highest human virtues, and names reflecting these qualities carry deep significance. From ancient philosophers to modern scholars, wise names connect children to a legacy of learning and understanding.
            </p>
            <p className="text-gray-600 mb-4">
              The name Sophia, meaning wisdom in Greek, has been a timeless favorite across cultures. Names like Raymond (wise protector) and Conrad (wise counsel) combine wisdom with other positive attributes. Mythological names such as Athena and Minerva reference goddesses of wisdom, while names like Sage directly translate to wise one.
            </p>
            <p className="text-gray-600">
              Whether you&apos;re drawn to names that directly mean wise, names suggesting intelligence and learning, or names associated with scholars and counselors, this collection offers meaningful options for parents who value knowledge and wisdom. These names inspire curiosity, thoughtfulness, and a love of learning.
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

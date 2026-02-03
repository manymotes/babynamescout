import { Metadata } from 'next'
import Link from 'next/link'
import { getAllNames } from '@/lib/data'
import type { BabyName } from '@/types/name'

export const metadata: Metadata = {
  title: 'Strong Baby Names - Names Meaning Strong, Brave, Warrior & Powerful',
  description: 'Discover 100+ powerful baby names meaning strong, brave, warrior, protector, and courageous. Find the perfect strong name for your baby.',
}

export default function StrongNamesPage() {
  const allNames = getAllNames()

  // Curated list of strength-related names
  const strongKeywords = [
    'strong', 'strength', 'brave', 'warrior', 'fighter', 'battle', 'defender',
    'protector', 'guard', 'power', 'powerful', 'mighty', 'courage', 'courageous',
    'bold', 'valiant', 'hero', 'champion', 'conquer', 'victory', 'victor',
    'fierce', 'steadfast', 'firm', 'resolute', 'fortitude', 'vigorous',
    'shield', 'spear', 'sword', 'armor', 'hardy', 'tough', 'stalwart'
  ]

  const strongNames = allNames.filter(name => {
    const meaningLower = name.meaning.toLowerCase()
    return strongKeywords.some(keyword => meaningLower.includes(keyword))
  }).sort((a, b) => (a.popularity || 999) - (b.popularity || 999))

  const girlNames = strongNames.filter(n => n.gender === 'girl')
  const boyNames = strongNames.filter(n => n.gender === 'boy')

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
        name: 'Strong Names',
        item: `${websiteUrl}/meanings/strong-names/`
      }
    ]
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What are strong baby names?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Strong baby names are names with meanings related to strength, bravery, warriors, protectors, and power. Examples include Ethan (strong), Liam (warrior), Alexander (defender), and Matilda (battle-mighty).'
        }
      },
      {
        '@type': 'Question',
        name: 'What girl names mean strong or brave?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Girl names meaning strong or brave include Bridget (strength), Matilda (battle-mighty), Valencia (brave), Audrey (noble strength), and Andrea (strong and courageous).'
        }
      },
      {
        '@type': 'Question',
        name: 'What boy names mean warrior?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Boy names meaning warrior include Liam (strong-willed warrior), Marcus (warlike), Dustin (brave warrior), Duncan (dark warrior), and Owen (young warrior).'
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
          <span className="text-gray-900">Strong Names</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">⚔️</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Strong Baby Names
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Discover powerful names meaning strong, brave, warrior, and protector.
            These names convey strength, courage, and resilience for your baby.
          </p>
          <p className="text-lg font-medium text-red-600">
            {strongNames.length} strong names found
          </p>
        </div>

        {/* Category Highlights */}
        <section className="mb-12 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Types of Strong Names</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">💪</div>
              <h3 className="font-semibold text-gray-900">Strength Names</h3>
              <p className="text-sm text-gray-600">Ethan, Bridget, Valencia</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">🛡️</div>
              <h3 className="font-semibold text-gray-900">Warrior Names</h3>
              <p className="text-sm text-gray-600">Liam, Owen, Marcus</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">🦁</div>
              <h3 className="font-semibold text-gray-900">Brave Names</h3>
              <p className="text-sm text-gray-600">Andrew, Audrey, Bernard</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">👑</div>
              <h3 className="font-semibold text-gray-900">Protector Names</h3>
              <p className="text-sm text-gray-600">Alexander, William, Raymond</p>
            </div>
          </div>
        </section>

        {/* Girl Names */}
        {girlNames.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Strong Names for Girls ({girlNames.length})
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {girlNames.map(name => (
                <Link
                  key={name.slug}
                  href={`/name/${name.slug}/`}
                  className="bg-white border border-gray-200 hover:border-red-300 hover:shadow-md rounded-lg p-4 transition"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-gray-900">{name.name}</h3>
                    {name.popularity && name.popularity <= 100 && (
                      <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">
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
              Strong Names for Boys ({boyNames.length})
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About Strong Baby Names</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-4">
              Strong baby names carry powerful meanings related to strength, courage, bravery, and protection. These names have been cherished throughout history, often given to children as a way to bestow qualities of resilience, determination, and fortitude. From ancient warriors to modern heroes, strong names represent the values of courage and power.
            </p>
            <p className="text-gray-600 mb-4">
              Names meaning warrior, like Liam and Owen, evoke images of brave fighters and protectors. Names meaning strong, such as Ethan and Bridget, directly convey physical and moral strength. Protector names like Alexander and William suggest guardianship and defense of others. Each of these names carries a legacy of strength and valor.
            </p>
            <p className="text-gray-600">
              Whether you&apos;re looking for a name that means brave, powerful, mighty, or courageous, our collection of strong baby names offers meaningful options for parents who want to inspire strength and confidence in their child. These names work beautifully for both boys and girls, with many having rich historical and cultural significance.
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

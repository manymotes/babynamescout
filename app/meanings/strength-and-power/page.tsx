import { Metadata } from 'next'
import Link from 'next/link'
import { getAllNames } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Names Meaning Strength and Power - Strong Baby Names for Boys & Girls',
  description: 'Discover 150+ baby names meaning strength, power, mighty, and fortitude. Find powerful names from various cultures with rich etymology and famous bearers.',
}

export default function StrengthAndPowerPage() {
  const allNames = getAllNames()

  const strengthKeywords = [
    'strong', 'strength', 'power', 'powerful', 'mighty', 'vigorous',
    'fortitude', 'hardy', 'tough', 'stalwart', 'firm', 'resolute',
    'steadfast', 'force', 'robust', 'sturdy', 'solid', 'iron',
    'oak', 'rock', 'titan', 'atlas', 'hercules'
  ]

  const strengthNames = allNames.filter(name => {
    const meaningLower = name.meaning.toLowerCase()
    return strengthKeywords.some(keyword => meaningLower.includes(keyword))
  }).sort((a, b) => (a.popularity || 999) - (b.popularity || 999))

  const girlNames = strengthNames.filter(n => n.gender === 'girl').slice(0, 75)
  const boyNames = strengthNames.filter(n => n.gender === 'boy').slice(0, 75)
  const unisexNames = strengthNames.filter(n => n.gender === 'unisex').slice(0, 20)

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
        name: 'Strength and Power',
        item: `${websiteUrl}/meanings/strength-and-power/`
      }
    ]
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What names mean strength or power?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Names meaning strength or power include Ethan (strong, firm), Valentina (strong, vigorous), Brian (strong, virtuous), and Matilda (battle-mighty). These names come from various cultures including Hebrew, Latin, Celtic, and Germanic origins.'
        }
      },
      {
        '@type': 'Question',
        name: 'What girl names mean powerful?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Girl names meaning powerful include Bridget (strength, power), Valencia (brave, strong), Audrey (noble strength), Briana (strong, noble), and Keren (strength, power). These names convey resilience and fortitude.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is the origin of strength names?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Strength names come from many cultures. Hebrew names like Ethan emphasize firmness, Latin names like Valentine focus on vigor, Celtic names like Brian highlight virtue and strength, while Germanic names like Matilda combine battle and might.'
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
          <span className="text-gray-900">Strength and Power</span>
        </nav>

        <div className="text-center mb-12">
          <div className="text-6xl mb-4">💪</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Names Meaning Strength and Power
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Discover names that embody strength, power, and fortitude. These names carry meanings of resilience, vigor, and mighty force across cultures.
          </p>
          <p className="text-lg font-medium text-orange-600">
            {strengthNames.length} powerful names found
          </p>
        </div>

        <section className="mb-12 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Etymology and Cultural Significance</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-orange-900 mb-2">Hebrew Origins</h3>
              <p className="text-gray-700 text-sm">
                Names like Ethan (firm, strong) and Gabriel (God is my strength) emphasize steadfastness and divine power. Hebrew tradition values inner fortitude and moral strength.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-orange-900 mb-2">Latin Power</h3>
              <p className="text-gray-700 text-sm">
                Valentine and Valentina derive from Latin "valens" meaning strong and vigorous. Roman culture celebrated physical strength and military might.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-orange-900 mb-2">Celtic Strength</h3>
              <p className="text-gray-700 text-sm">
                Brian and Bridget come from Celtic roots meaning high, noble, and strong. Celtic warriors valued both physical prowess and spiritual strength.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-orange-900 mb-2">Germanic Might</h3>
              <p className="text-gray-700 text-sm">
                Names like Matilda (battle-mighty) and Arnold (eagle power) reflect Germanic warrior culture that prized battle strength and leadership.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12 bg-blue-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Famous People with Strength Names</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900">Ethan Hawke</h3>
              <p className="text-sm text-gray-600">Academy Award-nominated actor and writer</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900">Valentina Tereshkova</h3>
              <p className="text-sm text-gray-600">First woman in space</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900">Brian Cox</h3>
              <p className="text-sm text-gray-600">Renowned physicist and science communicator</p>
            </div>
          </div>
        </section>

        {girlNames.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Girl Names Meaning Strength and Power ({girlNames.length})
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

        {boyNames.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Boy Names Meaning Strength and Power ({boyNames.length})
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
              Unisex Names Meaning Strength and Power ({unisexNames.length})
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About Strength and Power Names</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-4">
              Names meaning strength and power have been valued throughout human history. These names often derive from words denoting physical might, fortitude, resilience, and vigor. Parents choose strength names to inspire confidence, determination, and an indomitable spirit in their children.
            </p>
            <p className="text-gray-600 mb-4">
              The etymology of strength names reveals fascinating cultural values. Hebrew names emphasize moral and spiritual strength, Latin names focus on physical vigor, Celtic names combine nobility with power, and Germanic names often relate to battle prowess. Each tradition offers unique perspectives on what it means to be strong.
            </p>
            <p className="text-gray-600">
              Modern parents appreciate strength names for their timeless appeal and positive associations. Whether you prefer classic names like Ethan and Audrey or more unique choices like Valentina and Oswald, strength names convey enduring qualities that transcend trends.
            </p>
          </div>
        </section>

        <section className="bg-white border border-gray-200 rounded-xl p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Explore More Name Meanings
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/meanings/courage-and-bravery/" className="text-primary-600 hover:text-primary-700 font-medium">
              🦁 Courage Names →
            </Link>
            <Link href="/meanings/victory-and-success/" className="text-primary-600 hover:text-primary-700 font-medium">
              🏆 Victory Names →
            </Link>
            <Link href="/meanings/royalty-and-nobility/" className="text-primary-600 hover:text-primary-700 font-medium">
              👑 Royal Names →
            </Link>
            <Link href="/meanings/wisdom-and-intelligence/" className="text-primary-600 hover:text-primary-700 font-medium">
              📚 Wisdom Names →
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

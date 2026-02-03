import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllComparisons, getComparisonBySlug } from '@/lib/comparisons-data'
import { getNameBySlug, getNamesByOrigin, getNamesByGender } from '@/lib/data'
import {
  compareNames,
  getComparisonInsights,
  getStatePreferences,
  getTrendData,
  getNamePros,
  getNameCons
} from '@/lib/comparison-helpers'
import { NameGrid } from '@/components/NameCard'
import AdSense from '@/components/AdSense'

interface PageProps {
  params: Promise<{ comparison: string }>
}

export async function generateStaticParams() {
  const comparisons = getAllComparisons()
  return comparisons.map(comparison => ({
    comparison: comparison.comparisonSlug
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { comparison: comparisonSlug } = await params
  const comparison = getComparisonBySlug(comparisonSlug)

  if (!comparison) {
    return { title: 'Comparison Not Found' }
  }

  const name1 = getNameBySlug(comparison.slug1)
  const name2 = getNameBySlug(comparison.slug2)

  if (!name1 || !name2) {
    return { title: 'Comparison Not Found' }
  }

  const canonicalUrl = `https://babynamescout.com/compare/${comparisonSlug}/`
  const insights = getComparisonInsights(compareNames(name1, name2))

  return {
    title: `${name1.name} vs ${name2.name} - Baby Name Comparison | BabyNameScout`,
    description: `Compare ${name1.name} and ${name2.name}: meanings, origins, popularity trends, and key differences. ${insights.description}`,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${name1.name} vs ${name2.name} - Name Comparison`,
      description: insights.description,
      url: canonicalUrl,
    }
  }
}

export default async function ComparisonPage({ params }: PageProps) {
  const { comparison: comparisonSlug } = await params
  const comparison = getComparisonBySlug(comparisonSlug)

  if (!comparison) {
    notFound()
  }

  const name1 = getNameBySlug(comparison.slug1)
  const name2 = getNameBySlug(comparison.slug2)

  if (!name1 || !name2) {
    notFound()
  }

  const comparisonData = compareNames(name1, name2)
  const insights = getComparisonInsights(comparisonData)
  const statePrefs = getStatePreferences(name1, name2)
  const trendData = getTrendData(name1, name2)
  const name1Pros = getNamePros(name1)
  const name2Pros = getNamePros(name2)
  const name1Cons = getNameCons(name1)
  const name2Cons = getNameCons(name2)

  // Get similar names for each
  const name1Similar = getNamesByGender(name1.gender)
    .filter(n => n.slug !== name1.slug && n.slug !== name2.slug)
    .filter((n, i, arr) => arr.findIndex(x => x.name === n.name) === i)
    .slice(0, 6)

  const name2Similar = getNamesByGender(name2.gender)
    .filter(n => n.slug !== name2.slug && n.slug !== name1.slug)
    .filter((n, i, arr) => arr.findIndex(x => x.name === n.name) === i)
    .slice(0, 6)

  const genderLabel1 = name1.gender === 'girl' ? 'Girl' : name1.gender === 'boy' ? 'Boy' : 'Unisex'
  const genderLabel2 = name2.gender === 'girl' ? 'Girl' : name2.gender === 'boy' ? 'Boy' : 'Unisex'

  const colorClasses1 = {
    girl: { bg: 'bg-primary-500', light: 'bg-primary-50', text: 'text-primary-600', border: 'border-primary-200' },
    boy: { bg: 'bg-secondary-500', light: 'bg-secondary-50', text: 'text-secondary-600', border: 'border-secondary-200' },
    unisex: { bg: 'bg-purple-500', light: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200' }
  }

  const colors1 = colorClasses1[name1.gender]
  const colors2 = colorClasses1[name2.gender]

  // Breadcrumb Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://babynamescout.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Compare Names',
        item: 'https://babynamescout.com/compare/'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: `${name1.name} vs ${name2.name}`,
        item: `https://babynamescout.com/compare/${comparisonSlug}/`
      }
    ]
  }

  // FAQ Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `What is the difference between ${name1.name} and ${name2.name}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${name1.name} means "${name1.meaning}" and is of ${name1.origin} origin, while ${name2.name} means "${name2.meaning}" and is of ${name2.origin} origin.`
        }
      },
      {
        '@type': 'Question',
        name: `Which is more popular: ${name1.name} or ${name2.name}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: name1.popularity && name2.popularity
            ? name1.popularity < name2.popularity
              ? `${name1.name} is more popular, ranked #${name1.popularity} compared to ${name2.name} at #${name2.popularity}.`
              : `${name2.name} is more popular, ranked #${name2.popularity} compared to ${name1.name} at #${name1.popularity}.`
            : `Both names have unique appeal with different levels of popularity.`
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
          <Link href="/compare/" className="text-gray-500 hover:text-gray-700">Compare Names</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-900">{name1.name} vs {name2.name}</span>
        </nav>

        {/* Hero Comparison */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {name1.name} vs {name2.name}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {insights.description}
          </p>
        </div>

        {/* Side-by-Side Stats */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Name 1 Card */}
          <div className={`bg-white border-2 ${colors1.border} rounded-2xl p-8`}>
            <div className="text-center mb-6">
              <h2 className="text-4xl font-bold text-gray-900 mb-3">{name1.name}</h2>
              <div className="flex justify-center gap-2 mb-4">
                <span className={`px-3 py-1 ${colors1.light} ${colors1.text} rounded-full text-sm font-medium`}>
                  {genderLabel1}
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
                  {name1.origin}
                </span>
              </div>
              {name1.popularity && (
                <div className="inline-block bg-amber-100 text-amber-700 px-4 py-2 rounded-full font-semibold">
                  Ranked #{name1.popularity}
                </div>
              )}
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-700 text-sm mb-1">Meaning</h3>
                <p className="text-lg text-gray-900">&ldquo;{name1.meaning}&rdquo;</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 text-sm mb-1">Origin</h3>
                <p className="text-gray-900">{name1.origin}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 text-sm mb-1">Length</h3>
                <p className="text-gray-900">{name1.name.length} letters</p>
              </div>
              {name1.pronunciation && (
                <div>
                  <h3 className="font-semibold text-gray-700 text-sm mb-1">Pronunciation</h3>
                  <p className="text-gray-900 font-mono">{name1.pronunciation}</p>
                </div>
              )}
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <Link
                href={`/name/${name1.slug}/`}
                className={`${colors1.text} hover:underline font-medium text-sm`}
              >
                View full profile for {name1.name} &rarr;
              </Link>
            </div>
          </div>

          {/* Name 2 Card */}
          <div className={`bg-white border-2 ${colors2.border} rounded-2xl p-8`}>
            <div className="text-center mb-6">
              <h2 className="text-4xl font-bold text-gray-900 mb-3">{name2.name}</h2>
              <div className="flex justify-center gap-2 mb-4">
                <span className={`px-3 py-1 ${colors2.light} ${colors2.text} rounded-full text-sm font-medium`}>
                  {genderLabel2}
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
                  {name2.origin}
                </span>
              </div>
              {name2.popularity && (
                <div className="inline-block bg-amber-100 text-amber-700 px-4 py-2 rounded-full font-semibold">
                  Ranked #{name2.popularity}
                </div>
              )}
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-700 text-sm mb-1">Meaning</h3>
                <p className="text-lg text-gray-900">&ldquo;{name2.meaning}&rdquo;</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 text-sm mb-1">Origin</h3>
                <p className="text-gray-900">{name2.origin}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 text-sm mb-1">Length</h3>
                <p className="text-gray-900">{name2.name.length} letters</p>
              </div>
              {name2.pronunciation && (
                <div>
                  <h3 className="font-semibold text-gray-700 text-sm mb-1">Pronunciation</h3>
                  <p className="text-gray-900 font-mono">{name2.pronunciation}</p>
                </div>
              )}
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <Link
                href={`/name/${name2.slug}/`}
                className={`${colors2.text} hover:underline font-medium text-sm`}
              >
                View full profile for {name2.name} &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* Ad Zone */}
        <div className="my-8">
          <AdSense adSlot="1234567890" adFormat="auto" className="text-center" />
        </div>

        {/* Popularity Trend Chart */}
        <section className="bg-white border border-gray-200 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Popularity Trends Over Time</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="mb-4 flex justify-center gap-6">
              <div className="flex items-center gap-2">
                <div className={`w-4 h-4 rounded ${colors1.bg}`}></div>
                <span className="text-sm font-medium text-gray-700">{name1.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className={`w-4 h-4 rounded ${colors2.bg}`}></div>
                <span className="text-sm font-medium text-gray-700">{name2.name}</span>
              </div>
            </div>
            <div className="space-y-3">
              {trendData.years.map((year, i) => (
                <div key={year} className="flex items-center gap-3">
                  <span className="text-sm text-gray-600 w-12">{year}</span>
                  <div className="flex-1 flex gap-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-8 relative overflow-hidden">
                      <div
                        className={`${colors1.bg} h-full rounded-full flex items-center justify-end pr-2`}
                        style={{ width: `${Math.min(100, (1000 - trendData.name1Data[i]) / 10)}%` }}
                      >
                        <span className="text-xs text-white font-medium">#{Math.round(trendData.name1Data[i])}</span>
                      </div>
                    </div>
                    <div className="flex-1 bg-gray-200 rounded-full h-8 relative overflow-hidden">
                      <div
                        className={`${colors2.bg} h-full rounded-full flex items-center justify-end pr-2`}
                        style={{ width: `${Math.min(100, (1000 - trendData.name2Data[i]) / 10)}%` }}
                      >
                        <span className="text-xs text-white font-medium">#{Math.round(trendData.name2Data[i])}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-4 text-center">
            Lower numbers indicate higher popularity ranking
          </p>
        </section>

        {/* Commonalities & Differences */}
        <section className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Commonalities */}
          {comparisonData.commonalities.length > 0 && (
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-green-600">✓</span>
                What They Have in Common
              </h3>
              <ul className="space-y-2">
                {comparisonData.commonalities.map((item, i) => (
                  <li key={i} className="text-gray-700 flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Differences */}
          {comparisonData.differences.length > 0 && (
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-blue-600">⇄</span>
                Key Differences
              </h3>
              <ul className="space-y-2">
                {comparisonData.differences.map((item, i) => (
                  <li key={i} className="text-gray-700 flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>

        {/* State Preferences */}
        <section className="bg-white border border-gray-200 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Regional Popularity</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className={`font-semibold ${colors1.text} mb-3`}>States Where {name1.name} is More Popular</h3>
              <div className="flex flex-wrap gap-2">
                {statePrefs.name1States.map(state => (
                  <span key={state} className={`px-3 py-1 ${colors1.light} text-gray-700 rounded-full text-sm`}>
                    {state}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className={`font-semibold ${colors2.text} mb-3`}>States Where {name2.name} is More Popular</h3>
              <div className="flex flex-wrap gap-2">
                {statePrefs.name2States.map(state => (
                  <span key={state} className={`px-3 py-1 ${colors2.light} text-gray-700 rounded-full text-sm`}>
                    {state}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-6 text-center">
            Regional preferences based on state-level Social Security Administration data
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Name 1 Pros/Cons */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">{name1.name} - Pros & Considerations</h3>
            <div className="mb-6">
              <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-2">
                <span>✓</span> Advantages
              </h4>
              <ul className="space-y-1">
                {name1Pros.map((pro, i) => (
                  <li key={i} className="text-gray-600 text-sm flex items-start gap-2">
                    <span className="text-green-600">•</span>
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-amber-700 mb-2 flex items-center gap-2">
                <span>!</span> Considerations
              </h4>
              <ul className="space-y-1">
                {name1Cons.map((con, i) => (
                  <li key={i} className="text-gray-600 text-sm flex items-start gap-2">
                    <span className="text-amber-600">•</span>
                    <span>{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Name 2 Pros/Cons */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">{name2.name} - Pros & Considerations</h3>
            <div className="mb-6">
              <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-2">
                <span>✓</span> Advantages
              </h4>
              <ul className="space-y-1">
                {name2Pros.map((pro, i) => (
                  <li key={i} className="text-gray-600 text-sm flex items-start gap-2">
                    <span className="text-green-600">•</span>
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-amber-700 mb-2 flex items-center gap-2">
                <span>!</span> Considerations
              </h4>
              <ul className="space-y-1">
                {name2Cons.map((con, i) => (
                  <li key={i} className="text-gray-600 text-sm flex items-start gap-2">
                    <span className="text-amber-600">•</span>
                    <span>{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Similar Names */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Similar Name Alternatives</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className={`text-lg font-semibold ${colors1.text} mb-4`}>
                Similar to {name1.name}
              </h3>
              <NameGrid names={name1Similar} showGender={false} />
            </div>
            <div>
              <h3 className={`text-lg font-semibold ${colors2.text} mb-4`}>
                Similar to {name2.name}
              </h3>
              <NameGrid names={name2Similar} showGender={false} />
            </div>
          </div>
        </section>

        {/* Poll Section (Static for now) */}
        <section className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Which Name Do You Prefer?</h2>
          <p className="text-gray-600 text-center mb-6">Help other parents by sharing your preference</p>
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <button className={`${colors1.light} ${colors1.text} border-2 ${colors1.border} rounded-xl p-6 font-bold text-xl hover:shadow-lg transition-all`}>
              {name1.name}
            </button>
            <button className={`${colors2.light} ${colors2.text} border-2 ${colors2.border} rounded-xl p-6 font-bold text-xl hover:shadow-lg transition-all`}>
              {name2.name}
            </button>
          </div>
          <p className="text-sm text-gray-500 text-center mt-4">
            Poll results coming soon
          </p>
        </section>

        {/* FAQ */}
        <section className="bg-white border border-gray-200 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                What is the main difference between {name1.name} and {name2.name}?
              </h3>
              <p className="text-gray-600">
                The primary differences are in their origins and meanings. {name1.name} is a {name1.origin} name
                meaning &ldquo;{name1.meaning}&rdquo;, while {name2.name} is a {name2.origin} name meaning
                &ldquo;{name2.meaning}&rdquo;.
                {name1.popularity && name2.popularity && (
                  <> Additionally, {name1.popularity < name2.popularity ? name1.name : name2.name} is currently more
                  popular, ranked #{Math.min(name1.popularity, name2.popularity)} compared to #{Math.max(name1.popularity, name2.popularity)}.</>
                )}
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Which name is more popular: {name1.name} or {name2.name}?
              </h3>
              <p className="text-gray-600">
                {name1.popularity && name2.popularity ? (
                  name1.popularity < name2.popularity ? (
                    <>{name1.name} is more popular, currently ranked #{name1.popularity} compared to {name2.name} at #{name2.popularity}. This makes {name1.name} the more common choice among recent parents.</>
                  ) : name2.popularity < name1.popularity ? (
                    <>{name2.name} is more popular, currently ranked #{name2.popularity} compared to {name1.name} at #{name1.popularity}. This makes {name2.name} the more common choice among recent parents.</>
                  ) : (
                    <>Both {name1.name} and {name2.name} are equally popular, both ranked #{name1.popularity}.</>
                  )
                ) : (
                  <>Both names have their own unique appeal with different levels of mainstream popularity.</>
                )}
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Can these names work as middle names?
              </h3>
              <p className="text-gray-600">
                Yes, both {name1.name} and {name2.name} work beautifully as middle names. {name1.name.length <= 6 ? `${name1.name}'s shorter length makes it especially versatile as a middle name.` : ''} {name2.name.length <= 6 ? `${name2.name}'s shorter length makes it especially versatile as a middle name.` : ''} Consider how each flows with your chosen first name when making your decision.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Which name is better for my baby?
              </h3>
              <p className="text-gray-600">
                The best name depends on your personal preferences, family heritage, and what resonates with you. Consider factors like meaning, cultural significance, how it sounds with your last name, potential nicknames, and whether you prefer a more popular or unique choice. Both {name1.name} and {name2.name} are wonderful options.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

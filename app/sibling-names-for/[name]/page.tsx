import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllNames, getNameBySlug } from '@/lib/data'
import { generateSiblingMatches, categorizeSiblingMatches, getSiblingPairDescription } from '@/lib/sibling-matcher'
import { NameGrid } from '@/components/NameCard'
import AdSense from '@/components/AdSense'

interface PageProps {
  params: Promise<{ name: string }>
}

export async function generateStaticParams() {
  const names = getAllNames()

  // Generate for top 450 most popular names (limited for Cloudflare Pages 20K file limit)
  const topNames = names
    .filter(n => n.popularity && n.popularity <= 450)
    .filter((n, i, arr) => arr.findIndex(x => x.slug === n.slug) === i) // Deduplicate by slug
    .slice(0, 450)

  return topNames.map(name => ({ name: name.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { name: nameSlug } = await params
  const name = getNameBySlug(nameSlug)

  if (!name) {
    return { title: 'Name Not Found' }
  }

  const genderLabel = name.gender === 'girl' ? 'Girl' : name.gender === 'boy' ? 'Boy' : 'Unisex'
  const canonicalUrl = `https://babynamescout.com/sibling-names-for/${nameSlug}/`

  return {
    title: `Sibling Names for ${name.name} | ${genderLabel} Baby Name Pairings`,
    description: `Find perfect sibling name combinations for ${name.name}. Browse ${name.origin} names, opposite gender pairings, and names with similar style that complement ${name.name} beautifully.`,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `Sibling Names for ${name.name} - Perfect Name Pairings`,
      description: `Discover beautiful sibling name combinations that pair perfectly with ${name.name}`,
      url: canonicalUrl,
    }
  }
}

export default async function SiblingNamesForPage({ params }: PageProps) {
  const { name: nameSlug } = await params
  const name = getNameBySlug(nameSlug)

  if (!name) {
    notFound()
  }

  const genderLabel = name.gender === 'girl' ? 'Girl' : name.gender === 'boy' ? 'Boy' : 'Unisex'
  const allNames = getAllNames()

  // Generate sibling matches
  const siblingMatches = generateSiblingMatches(name, allNames, 75)
  const categorized = categorizeSiblingMatches(name, siblingMatches)

  // Get a few example pairings with descriptions
  const examplePairings = siblingMatches.slice(0, 6)

  const colorClasses = {
    girl: { bg: 'bg-primary-500', light: 'bg-primary-50', text: 'text-primary-600', border: 'border-primary-200' },
    boy: { bg: 'bg-secondary-500', light: 'bg-secondary-50', text: 'text-secondary-600', border: 'border-secondary-200' },
    unisex: { bg: 'bg-purple-500', light: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200' }
  }

  const colors = colorClasses[name.gender]

  // JSON-LD Schemas
  const websiteUrl = 'https://babynamescout.com'

  // Breadcrumb Schema
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
        name: 'Sibling Names',
        item: `${websiteUrl}/sibling-names/`
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: `Sibling Names for ${name.name}`,
        item: `${websiteUrl}/sibling-names-for/${name.slug}/`
      }
    ]
  }

  // Article Schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `Sibling Name Combinations for ${name.name}`,
    description: `Perfect sibling name pairings that complement ${name.name}, including ${name.origin} names and style-matched options.`,
    author: {
      '@type': 'Organization',
      name: 'BabyNameScout',
      url: websiteUrl
    },
    publisher: {
      '@type': 'Organization',
      name: 'BabyNameScout',
      url: websiteUrl
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${websiteUrl}/sibling-names-for/${name.slug}/`
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm mb-8">
          <Link href="/" className="text-gray-500 hover:text-gray-700">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href="/sibling-names/" className="text-gray-500 hover:text-gray-700">
            Sibling Names
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-900">Sibling Names for {name.name}</span>
        </nav>

        {/* Hero Section */}
        <div className={`bg-gradient-to-br from-${name.gender === 'girl' ? 'pink' : name.gender === 'boy' ? 'blue' : 'purple'}-50 to-${name.gender === 'girl' ? 'purple' : name.gender === 'boy' ? 'indigo' : 'indigo'}-100 rounded-2xl p-8 md:p-12 mb-12`}>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Link
                href={`/name/${name.slug}/`}
                className={`text-4xl md:text-5xl font-bold text-gray-900 hover:underline`}
              >
                {name.name}
              </Link>
              <span className={`px-3 py-1 ${colors.light} ${colors.text} rounded-full text-sm font-medium`}>
                {genderLabel}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perfect Sibling Name Combinations
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Discover {siblingMatches.length}+ beautiful names that pair perfectly with {name.name}.
              We have carefully matched names based on origin, style, sound, and meaning to help you
              find the ideal sibling name.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              <div className="bg-white/90 backdrop-blur rounded-lg px-4 py-2">
                <span className="font-semibold text-gray-900">Origin:</span>{' '}
                <span className="text-gray-700">{name.origin}</span>
              </div>
              <div className="bg-white/90 backdrop-blur rounded-lg px-4 py-2">
                <span className="font-semibold text-gray-900">Meaning:</span>{' '}
                <span className="text-gray-700">{name.meaning}</span>
              </div>
              {name.popularity && (
                <div className="bg-white/90 backdrop-blur rounded-lg px-4 py-2">
                  <span className="font-semibold text-gray-900">Popularity:</span>{' '}
                  <span className="text-gray-700">#{name.popularity}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="bg-white border-2 border-gray-200 rounded-xl p-6 mb-12">
          <h2 className="font-bold text-gray-900 mb-4">Jump to Section:</h2>
          <div className="flex flex-wrap gap-3">
            <a href="#all-matches" className="text-primary-600 hover:text-primary-700 font-medium text-sm">
              All Matches ({siblingMatches.length})
            </a>
            {categorized.oppositeGender.length > 0 && (
              <a href="#opposite-gender" className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                {name.gender === 'girl' ? 'Brother' : 'Sister'} Names ({categorized.oppositeGender.length})
              </a>
            )}
            {categorized.sameGender.length > 0 && (
              <a href="#same-gender" className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                {name.gender === 'girl' ? 'Sister' : 'Brother'} Names ({categorized.sameGender.length})
              </a>
            )}
            {categorized.sameOrigin.length > 0 && (
              <a href="#same-origin" className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                {name.origin} Names ({categorized.sameOrigin.length})
              </a>
            )}
          </div>
        </div>

        {/* Featured Pairings */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Sibling Pairings</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {examplePairings.map((sibling) => (
              <div key={sibling.slug} className="bg-white border-2 border-gray-200 hover:border-primary-300 rounded-xl p-6 transition">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{name.name} & {sibling.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className={`text-xs px-2 py-1 ${colors.light} ${colors.text} rounded-full`}>
                        {name.name}
                      </span>
                      <span className="text-gray-400">&</span>
                      <span className={`text-xs px-2 py-1 ${sibling.gender === 'girl' ? 'bg-primary-50 text-primary-600' : sibling.gender === 'boy' ? 'bg-secondary-50 text-secondary-600' : 'bg-purple-50 text-purple-600'} rounded-full`}>
                        {sibling.name}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  {getSiblingPairDescription(name, sibling)}
                </p>
                <Link
                  href={`/name/${sibling.slug}/`}
                  className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                >
                  Learn more about {sibling.name} &rarr;
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Ad Zone */}
        <div className="my-12">
          <AdSense adSlot="1234567890" adFormat="auto" className="text-center" />
        </div>

        {/* Opposite Gender Section */}
        {categorized.oppositeGender.length > 0 && (
          <section id="opposite-gender" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {name.gender === 'girl' ? 'Brother' : 'Sister'} Names for {name.name}
            </h2>
            <p className="text-gray-600 mb-6">
              Perfect {name.gender === 'girl' ? 'boy' : 'girl'} names that complement {name.name} beautifully.
              These names share similar style and cultural heritage while maintaining their own unique identity.
            </p>
            <NameGrid names={categorized.oppositeGender} showGender={true} />
          </section>
        )}

        {/* Same Gender Section */}
        {categorized.sameGender.length > 0 && (
          <section id="same-gender" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {name.gender === 'girl' ? 'Sister' : name.gender === 'boy' ? 'Brother' : 'Sibling'} Names for {name.name}
            </h2>
            <p className="text-gray-600 mb-6">
              Beautiful names that work perfectly for {name.gender === 'girl' ? 'two sisters' : name.gender === 'boy' ? 'two brothers' : 'siblings'}.
              These pairings create a harmonious sibling set while preserving individual distinctiveness.
            </p>
            <NameGrid names={categorized.sameGender} showGender={true} />
          </section>
        )}

        {/* Same Origin Section */}
        {categorized.sameOrigin.length > 0 && (
          <section id="same-origin" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {name.origin} Names Like {name.name}
            </h2>
            <p className="text-gray-600 mb-6">
              Keep your family&apos;s {name.origin} heritage strong with these beautiful names from the same cultural background.
            </p>
            <NameGrid names={categorized.sameOrigin} showGender={true} />
            <div className="text-center mt-6">
              <Link
                href={`/origin/${name.origin.toLowerCase().replace(/\s+/g, '-')}/`}
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                View all {name.origin} names &rarr;
              </Link>
            </div>
          </section>
        )}

        {/* All Matches Section */}
        <section id="all-matches" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            All Sibling Name Matches for {name.name}
          </h2>
          <p className="text-gray-600 mb-6">
            Browse our complete collection of {siblingMatches.length} carefully curated sibling name suggestions.
            Each name has been algorithmically matched based on origin, style, sound patterns, and popularity balance.
          </p>
          <NameGrid names={siblingMatches} showGender={true} />
        </section>

        {/* SEO Content Section */}
        <section className="bg-gray-50 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Choosing a Sibling Name for {name.name}
          </h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 mb-4">
              When choosing a sibling name to pair with {name.name}, consider how the names sound together.
              {name.name} is a {name.origin} {genderLabel.toLowerCase()} name meaning &ldquo;{name.meaning}&rdquo;,
              which gives it {name.popularity && name.popularity <= 50 ? 'a popular and well-loved' : 'a distinctive and memorable'} quality.
            </p>
            <p className="text-gray-700 mb-4">
              The best sibling names for {name.name} will complement its style without being too matchy.
              We recommend considering {name.origin} names to maintain cultural consistency, or choosing names
              with similar syllable patterns and style aesthetics. Avoid names that rhyme with {name.name} or
              share the exact same ending sound, as this can make the names feel too similar.
            </p>
            <p className="text-gray-700">
              Whether you&apos;re looking for a brother name, sister name, or gender-neutral option, our carefully
              curated suggestions balance popularity, uniqueness, and style to help you find the perfect match
              for your growing family.
            </p>
          </div>
        </section>

        {/* Tips Section */}
        <section className="bg-white border-2 border-gray-200 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Tips for Naming {name.name}&apos;s Sibling
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🎯</span>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Maintain Style Consistency</h3>
                <p className="text-gray-600 text-sm">
                  {name.name} has a {name.popularity && name.popularity <= 100 ? 'popular' : 'unique'} style.
                  Choose sibling names that match this aesthetic for a cohesive family feel.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🌍</span>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Consider Cultural Heritage</h3>
                <p className="text-gray-600 text-sm">
                  {name.name} is a {name.origin} name. Other {name.origin} names can create a beautiful cultural connection.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🎵</span>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Test the Sound Together</h3>
                <p className="text-gray-600 text-sm">
                  Say &ldquo;{name.name} and [sibling name]&rdquo; out loud. The names should flow well together without rhyming.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">👤</span>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Preserve Individuality</h3>
                <p className="text-gray-600 text-sm">
                  Avoid names that are too similar to {name.name}. Each child deserves their own distinct identity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="bg-white border-2 border-gray-200 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Resources</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <Link
              href={`/name/${name.slug}/`}
              className={`${colors.light} hover:${colors.bg} hover:text-white rounded-lg p-4 text-center transition`}
            >
              <span className="font-medium">About {name.name} &rarr;</span>
            </Link>
            <Link
              href={`/origin/${name.origin.toLowerCase().replace(/\s+/g, '-')}/`}
              className="bg-blue-50 hover:bg-blue-500 hover:text-white rounded-lg p-4 text-center transition"
            >
              <span className="font-medium">{name.origin} Names &rarr;</span>
            </Link>
            <Link
              href="/sibling-names/"
              className="bg-purple-50 hover:bg-purple-500 hover:text-white rounded-lg p-4 text-center transition"
            >
              <span className="font-medium">Sibling Name Guide &rarr;</span>
            </Link>
            <Link
              href="/middle-names/"
              className="bg-green-50 hover:bg-green-500 hover:text-white rounded-lg p-4 text-center transition"
            >
              <span className="font-medium">Middle Names &rarr;</span>
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}

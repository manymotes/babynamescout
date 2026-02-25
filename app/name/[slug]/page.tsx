import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllNames, getNameBySlug, getNamesByOrigin, getNamesByGender } from '@/lib/data'
import { NameGrid } from '@/components/NameCard'
import AdSense from '@/components/AdSense'
import { getNameContent } from '@/lib/name-content'
import { SITE_URL } from '@/lib/config'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const names = getAllNames()
  // Generate for top 1500 names to fit within Cloudflare Pages file limit
  const topNames = names
    .filter(n => n.popularity && n.popularity <= 1500)
    .slice(0, 1500)
  return topNames.map(name => ({ slug: name.slug }))
}

// Custom SEO overrides for high-priority striking distance pages
// These pages are ranking positions 10-25 and need optimized titles/descriptions
const customSEO: Record<string, { title?: string; description?: string }> = {
  'aliana': {
    title: 'Aliana Name Meaning, Origin & Popularity 2026',
    description: 'Aliana means "My God has answered" - a beautiful Hebrew girl name. Ranked #385. Discover Aliana\'s origin, popularity trends, nicknames & famous namesakes.'
  },
  'elise': {
    title: 'Elise Name Meaning, Origin & Popularity 2026',
    description: 'Elise means "Pledged to God" - an elegant French girl name. Ranked #245. Discover Elise\'s origin, pronunciation, nicknames & famous namesakes.'
  },
  'ines': {
    title: 'Ines Name Meaning, Origin & Popularity 2026',
    description: 'Ines means "Pure, holy" - a lovely Spanish girl name. Ranked #485. Discover Ines\'s origin, pronunciation, popularity trends & famous namesakes.'
  },
  'reign': {
    title: 'Reign Name Meaning - Is Reign a Unisex Name? 2026',
    description: 'Reign means "Royal rule" - a bold unisex/gender-neutral name. Ranked #345. Learn if Reign is a boy or girl name, its origin & popularity.'
  },
  'navy': {
    title: 'Navy Name Meaning - Is Navy a Unisex Name? 2026',
    description: 'Navy means "Fleet of ships" - a unique unisex/gender-neutral name. Ranked #485. Learn if Navy is a boy or girl name, its origin & rising popularity.'
  },
  'palmer': {
    title: 'Palmer Name Meaning, Origin & Popularity 2026',
    description: 'Palmer means "Pilgrim" - a distinctive English name for girls. Ranked #428. Discover Palmer\'s origin, popularity trends & famous namesakes.'
  },
  'palmer-unisex': {
    title: 'Palmer Name Meaning - Is Palmer a Unisex Name? 2026',
    description: 'Palmer means "Pilgrim" - a versatile unisex English name. Ranked #385. Learn if Palmer is a boy or girl name, its origin & popularity trends.'
  },
  'anders': {
    title: 'Anders Name Meaning, Origin & Popularity 2026',
    description: 'Anders means "Strong, manly" - a handsome Scandinavian boy name. Ranked #525. Discover Anders\'s origin, pronunciation & famous namesakes.'
  },
  'alanna': {
    title: 'Alanna Name Meaning, Origin & Popularity 2026',
    description: 'Alanna means "Harmony, peace" - a beautiful Irish girl name. Ranked #428. Discover Alanna\'s origin, pronunciation, nicknames & famous namesakes.'
  },
  'dani': {
    title: 'Dani Name Meaning, Origin & Popularity 2026',
    description: 'Dani means "God is my judge" - a sweet Hebrew girl name. Ranked #485. Discover Dani\'s origin, if it\'s a nickname, and famous namesakes.'
  },
  'poppy': {
    title: 'Poppy Name Meaning, Origin & Popularity 2026',
    description: 'Poppy means "Red flower" - a cheerful Latin girl name. Ranked #285. Discover Poppy\'s origin, popularity trends, nicknames & famous namesakes.'
  },
  'shane': {
    title: 'Shane Name Meaning, Origin & Popularity 2026',
    description: 'Shane means "God is gracious" - a classic Irish boy name. Ranked #298. Discover Shane\'s origin, pronunciation & famous namesakes.'
  },
  'noemi': {
    title: 'Noemi Name Meaning, Origin & Popularity 2026',
    description: 'Noemi means "Pleasantness" - an elegant Hebrew girl name. Ranked #345. Discover Noemi\'s origin, pronunciation & how it differs from Naomi.'
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const name = getNameBySlug(slug)

  if (!name) {
    return { title: 'Name Not Found' }
  }

  const genderLabel = name.gender === 'girl' ? 'Girl' : name.gender === 'boy' ? 'Boy' : 'Unisex'
  const canonicalUrl = `${SITE_URL}/name/${slug}/`

  // Check for custom SEO overrides for high-priority pages
  const customMeta = customSEO[slug]

  // Optimized title format - front-loads the name, includes key terms, under 60 chars
  // Format: "[Name] Name Meaning, Origin & Popularity 2026" matches search intent
  // Falls back to shorter format for longer names to stay under 60 chars
  let title: string
  if (customMeta?.title) {
    title = customMeta.title
  } else {
    const primaryTitle = `${name.name} Name Meaning, Origin & Popularity 2026`
    const shortTitle = `${name.name}: Meaning, Origin & Popularity (2026)`
    title = primaryTitle.length <= 60 ? primaryTitle : shortTitle
  }

  // Build optimized meta description (aim for 150-160 chars)
  // Includes: meaning, origin, gender/unisex status, popularity when available
  let description: string
  if (customMeta?.description) {
    description = customMeta.description
  } else {
    const popularityText = name.popularity
      ? `Ranked #${name.popularity}. `
      : ''
    const genderText = name.gender === 'unisex'
      ? 'gender-neutral'
      : genderLabel.toLowerCase()
    description = `${name.name} means "${name.meaning}" - a ${name.origin} ${genderText} name. ${popularityText}Discover origin, popularity trends, nicknames & famous namesakes.`
  }

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${name.name} - Baby Name Meaning & Origin 2026`,
      description: `Discover the meaning of ${name.name}: "${name.meaning}" - ${name.origin} origin`,
      url: canonicalUrl,
      type: 'article',
      siteName: 'BabyNameScout',
      images: [
        {
          url: `${SITE_URL}/og/name/${slug}.png`,
          width: 1200,
          height: 630,
          alt: `${name.name} - ${genderLabel} baby name meaning ${name.meaning}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${name.name} - Baby Name Meaning & Origin 2026`,
      description: `Discover the meaning of ${name.name}: "${name.meaning}" - ${name.origin} origin`,
      images: [`${SITE_URL}/og/name/${slug}.png`],
    }
  }
}

export default async function NamePage({ params }: PageProps) {
  const { slug } = await params
  const name = getNameBySlug(slug)

  if (!name) {
    notFound()
  }

  const genderLabel = name.gender === 'girl' ? 'Girl' : name.gender === 'boy' ? 'Boy' : 'Unisex'
  const relatedByOrigin = getNamesByOrigin(name.origin)
    .filter(n => n.slug !== name.slug)
    .filter((n, i, arr) => arr.findIndex(x => x.name === n.name) === i) // Deduplicate by name
    .slice(0, 8)
  const relatedByGender = getNamesByGender(name.gender)
    .filter(n => n.slug !== name.slug && n.name[0] === name.name[0])
    .filter((n, i, arr) => arr.findIndex(x => x.name === n.name) === i) // Deduplicate by name
    .slice(0, 4)
  const nameContent = getNameContent(name.slug)

  const colorClasses = {
    girl: { bg: 'bg-primary-500', light: 'bg-primary-50', text: 'text-primary-600', border: 'border-primary-200' },
    boy: { bg: 'bg-secondary-500', light: 'bg-secondary-50', text: 'text-secondary-600', border: 'border-secondary-200' },
    unisex: { bg: 'bg-purple-500', light: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200' }
  }

  const colors = colorClasses[name.gender]

  // JSON-LD Schemas
  const websiteUrl = SITE_URL

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
        name: `${genderLabel} Names`,
        item: `${websiteUrl}/names/${name.gender}/`
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: `Letter ${name.name[0]}`,
        item: `${websiteUrl}/names/${name.gender}/${name.name[0].toLowerCase()}/`
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: name.name,
        item: `${websiteUrl}/name/${name.slug}/`
      }
    ]
  }

  // FAQ Schema for rich results
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `What does the name ${name.name} mean?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `The name ${name.name} means "${name.meaning}". It is of ${name.origin} origin.`
        }
      },
      {
        '@type': 'Question',
        name: `What is the origin of the name ${name.name}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${name.name} is a ${genderLabel.toLowerCase()} name of ${name.origin} origin.`
        }
      },
      {
        '@type': 'Question',
        name: `How popular is the name ${name.name}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: name.popularity
            ? `${name.name} is ranked #${name.popularity} in popularity for ${genderLabel.toLowerCase()} names in the United States.`
            : `${name.name} is a unique name that stands out from more common choices.`
        }
      },
      {
        '@type': 'Question',
        name: `Is ${name.name} a ${genderLabel.toLowerCase()} name?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: name.gender === 'unisex'
            ? `${name.name} is a unisex name, suitable for both boys and girls.`
            : `Yes, ${name.name} is traditionally a ${genderLabel.toLowerCase()} name.`
        }
      }
    ]
  }

  // Article Schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${name.name} - Baby Name Meaning, Origin & Popularity`,
    description: `${name.name} is a ${name.origin} ${genderLabel.toLowerCase()} name meaning "${name.meaning}".`,
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
      '@id': `${websiteUrl}/name/${name.slug}/`
    },
    about: {
      '@type': 'Thing',
      name: name.name,
      description: `${genderLabel} baby name of ${name.origin} origin meaning "${name.meaning}"`
    }
  }

  // Thing Schema for the baby name entity
  const thingSchema = {
    '@context': 'https://schema.org',
    '@type': 'Thing',
    name: name.name,
    description: `${name.name} is a ${genderLabel.toLowerCase()} baby name of ${name.origin} origin meaning "${name.meaning}".`,
    identifier: name.slug,
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'gender',
        value: genderLabel
      },
      {
        '@type': 'PropertyValue',
        name: 'origin',
        value: name.origin
      },
      {
        '@type': 'PropertyValue',
        name: 'meaning',
        value: name.meaning
      },
      ...(name.popularity ? [{
        '@type': 'PropertyValue',
        name: 'popularity',
        value: `#${name.popularity} in United States (2025)`
      }] : [])
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(thingSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm mb-8">
          <Link href="/" className="text-gray-500 hover:text-gray-700">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href={`/names/${name.gender}/`} className="text-gray-500 hover:text-gray-700">
            {genderLabel} Names
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link
            href={`/names/${name.gender}/${name.name[0].toLowerCase()}/`}
            className="text-gray-500 hover:text-gray-700"
          >
            Letter {name.name[0]}
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-900">{name.name}</span>
        </nav>

        {/* Main Card */}
        <div className={`bg-white border-2 ${colors.border} rounded-2xl p-8 mb-8`}>
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-2">{name.name}</h1>
              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 ${colors.light} ${colors.text} rounded-full text-sm font-medium`}>
                  {genderLabel}
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
                  {name.origin}
                </span>
                {name.popularity && (
                  <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">
                    #{name.popularity} in 2025
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Meaning */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Meaning</h2>
            <p className="text-2xl text-gray-900">&ldquo;{name.meaning}&rdquo;</p>
          </div>

          {/* Details Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className={`${colors.light} rounded-xl p-5`}>
              <h3 className="font-semibold text-gray-700 mb-2">Origin</h3>
              <p className="text-gray-900">{name.origin}</p>
              <Link
                href={`/origin/${name.origin.toLowerCase().replace(/\s+/g, '-')}/`}
                className={`${colors.text} text-sm hover:underline mt-2 inline-block`}
              >
                See all {name.origin} names &rarr;
              </Link>
            </div>

            <div className={`${colors.light} rounded-xl p-5`}>
              <h3 className="font-semibold text-gray-700 mb-2">Gender</h3>
              <p className="text-gray-900">{genderLabel}</p>
              <Link
                href={`/names/${name.gender}/`}
                className={`${colors.text} text-sm hover:underline mt-2 inline-block`}
              >
                Browse all {genderLabel.toLowerCase()} names &rarr;
              </Link>
            </div>

            {name.popularity && (
              <div className="bg-amber-50 rounded-xl p-5">
                <h3 className="font-semibold text-gray-700 mb-2">Popularity</h3>
                <p className="text-gray-900">Ranked #{name.popularity} for {genderLabel.toLowerCase()}s in 2025</p>
                <p className="text-gray-500 text-sm mt-1">Based on Social Security Administration data</p>
              </div>
            )}

            {name.pronunciation && (
              <div className="bg-gray-50 rounded-xl p-5">
                <h3 className="font-semibold text-gray-700 mb-2">Pronunciation</h3>
                <p className="text-gray-900 font-mono">{name.pronunciation}</p>
              </div>
            )}
          </div>
        </div>

        {/* Ad Zone 1 - After Main Content */}
        <div className="my-8">
          <AdSense adSlot="1234567890" adFormat="auto" className="text-center" />
        </div>

        {/* Similar Names by Starting Letter */}
        {relatedByGender.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Similar {genderLabel} Names Starting with {name.name[0]}
            </h2>
            <NameGrid names={relatedByGender} showGender={false} />
          </section>
        )}

        {/* Names from Same Origin */}
        {relatedByOrigin.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              More {name.origin} Names
            </h2>
            <NameGrid names={relatedByOrigin} />
            <div className="text-center mt-4">
              <Link
                href={`/origin/${name.origin.toLowerCase().replace(/\s+/g, '-')}/`}
                className={`${colors.text} hover:underline font-medium`}
              >
                View all {name.origin} names &rarr;
              </Link>
            </div>
          </section>
        )}

        {/* SEO Content */}
        <section className="bg-gray-50 rounded-xl p-8 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">About the Name {name.name}</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-4">
              {name.name} is a beautiful {name.origin} {genderLabel.toLowerCase()} name that means
              &ldquo;{name.meaning}&rdquo;. This name has {name.popularity && name.popularity <= 50 ? 'been consistently popular' : 'a timeless appeal'}
              {' '}among parents looking for {name.gender === 'girl' ? 'a name for their daughter' : name.gender === 'boy' ? 'a name for their son' : 'a gender-neutral option'}.
            </p>
            <p className="text-gray-600">
              {nameContent.history}
            </p>
          </div>
        </section>

        {/* Personality Section */}
        <section className="bg-white border border-gray-200 rounded-xl p-8 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Personality Traits Associated with {name.name}</h2>
          <p className="text-gray-600">{nameContent.personality}</p>
        </section>

        {/* Famous People */}
        {nameContent.famousPeople.length > 0 && (
          <section className="bg-white border border-gray-200 rounded-xl p-8 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Famous People Named {name.name}</h2>
            <ul className="space-y-2">
              {nameContent.famousPeople.map((person, index) => (
                <li key={index} className="text-gray-600 flex items-start gap-2">
                  <span className="text-primary-600">•</span>
                  {person}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Nicknames */}
        {nameContent.nicknames.length > 0 && (
          <section className="bg-white border border-gray-200 rounded-xl p-8 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Nicknames for {name.name}</h2>
            <div className="flex flex-wrap gap-2">
              {nameContent.nicknames.map((nickname, index) => (
                <span key={index} className={`px-3 py-1 ${colors.light} ${colors.text} rounded-full text-sm font-medium`}>
                  {nickname}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Cultural Significance */}
        <section className="bg-white border border-gray-200 rounded-xl p-8 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Cultural Significance of {name.name}</h2>
          <p className="text-gray-600">{nameContent.culturalSignificance}</p>
        </section>

        {/* FAQ Section */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Frequently Asked Questions About {name.name}</h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">What does the name {name.name} mean?</h3>
              <p className="text-gray-600">
                The name {name.name} means &ldquo;{name.meaning}&rdquo;. It is of {name.origin} origin and is traditionally
                used as a {genderLabel.toLowerCase()} name.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">How popular is the name {name.name}?</h3>
              <p className="text-gray-600">
                {name.popularity
                  ? `${name.name} is ranked #${name.popularity} in popularity for ${genderLabel.toLowerCase()} names in the United States. ${name.popularity <= 10 ? 'It is one of the most popular names currently.' : name.popularity <= 50 ? 'It remains a very popular choice for parents.' : name.popularity <= 100 ? 'It is a moderately popular name.' : 'It is a less common but distinctive choice.'}`
                  : `${name.name} is a unique name that stands out from more common choices. Its rarity makes it a distinctive option for parents seeking something special.`
                }
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Is {name.name} a boy or girl name?</h3>
              <p className="text-gray-600">
                {name.gender === 'unisex'
                  ? `${name.name} is a unisex name, meaning it is used for both boys and girls. It's a great choice for parents who prefer gender-neutral options.`
                  : `${name.name} is traditionally a ${genderLabel.toLowerCase()} name. While names can be used for any gender, ${name.name} is most commonly given to ${genderLabel.toLowerCase()}s.`
                }
              </p>
            </div>

            {nameContent.nicknames.length > 0 && (
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">What are common nicknames for {name.name}?</h3>
                <p className="text-gray-600">
                  Common nicknames for {name.name} include {nameContent.nicknames.slice(0, 3).join(', ')}{nameContent.nicknames.length > 3 ? `, and ${nameContent.nicknames[3]}` : ''}. These shortened forms provide casual alternatives while maintaining the essence of the full name.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Sibling Name Finder Callout */}
        <section className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl border-2 border-purple-200 p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Looking for a Sibling Name?</h2>
          <p className="text-gray-700 text-sm mb-4">
            Find the perfect sibling name to pair with {name.name}. We have curated 50+ suggestions based on
            origin, style, sound patterns, and popularity to help you create the ideal sibling combination.
          </p>
          <Link
            href={`/sibling-names-for/${name.slug}/`}
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            View Sibling Names for {name.name} →
          </Link>
        </section>

        {/* Pregnancy Resources - Cross-site Link */}
        <section className="bg-blue-50 rounded-xl border border-blue-200 p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Pregnancy Resources</h2>
          <p className="text-gray-700 text-sm mb-3">
            Track your pregnancy week-by-week and learn what to expect at each stage of your journey:
          </p>
          <a
            href="https://mypregnancyweek.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center gap-1 text-sm"
          >
            Pregnancy week-by-week guide →
          </a>
        </section>
      </div>
    </>
  )
}

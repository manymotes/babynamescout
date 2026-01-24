import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllNames, getNameBySlug, getNamesByOrigin, getNamesByGender } from '@/lib/data'
import { NameGrid } from '@/components/NameCard'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const names = getAllNames()
  return names.map(name => ({ slug: name.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const name = getNameBySlug(slug)

  if (!name) {
    return { title: 'Name Not Found' }
  }

  const genderLabel = name.gender === 'girl' ? 'Girl' : name.gender === 'boy' ? 'Boy' : 'Unisex'

  return {
    title: `${name.name} - Meaning, Origin & Popularity | ${genderLabel} Baby Name`,
    description: `${name.name} is a ${name.origin} ${genderLabel.toLowerCase()} name meaning "${name.meaning}". Learn about the name ${name.name}, its history, popularity, and famous namesakes.`,
    openGraph: {
      title: `${name.name} - Baby Name Meaning & Origin`,
      description: `Discover the meaning of ${name.name}: ${name.meaning}`,
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
    .slice(0, 8)
  const relatedByGender = getNamesByGender(name.gender)
    .filter(n => n.slug !== name.slug && n.name[0] === name.name[0])
    .slice(0, 4)

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
        <section className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">About the Name {name.name}</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-4">
              {name.name} is a beautiful {name.origin} {genderLabel.toLowerCase()} name that means
              &ldquo;{name.meaning}&rdquo;. This name has {name.popularity && name.popularity <= 50 ? 'been consistently popular' : 'a timeless appeal'}
              {' '}among parents looking for {name.gender === 'girl' ? 'a name for their daughter' : name.gender === 'boy' ? 'a name for their son' : 'a gender-neutral option'}.
            </p>
            <p className="text-gray-600">
              The name {name.name} carries a rich heritage from {name.origin} tradition.
              {name.popularity && ` Currently ranked #${name.popularity} in the United States, it remains a beloved choice for new parents.`}
            </p>
          </div>
        </section>
      </div>
    </>
  )
}

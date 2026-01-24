import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getNamesByOrigin, getOriginData } from '@/lib/data'
import { NameGrid } from '@/components/NameCard'

interface PageProps {
  params: Promise<{ origin: string }>
}

export async function generateStaticParams() {
  const origins = getOriginData()
  return origins.map(origin => ({
    origin: origin.slug
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { origin: originSlug } = await params
  const origins = getOriginData()
  const origin = origins.find(o => o.slug === originSlug)

  if (!origin) {
    return { title: 'Origin Not Found' }
  }

  const names = getNamesByOrigin(origin.name)

  return {
    title: `${origin.name} Baby Names - ${names.length} Beautiful Names with Meanings`,
    description: `Discover ${names.length} beautiful ${origin.name} baby names. ${origin.description}. Find the perfect name with origins and meanings.`,
    openGraph: {
      title: `${origin.name} Baby Names | BabyNameFinder`,
      description: `Browse ${names.length} ${origin.name} names with meanings`,
    }
  }
}

export default async function OriginPage({ params }: PageProps) {
  const { origin: originSlug } = await params
  const origins = getOriginData()
  const origin = origins.find(o => o.slug === originSlug)

  if (!origin) {
    notFound()
  }

  const names = getNamesByOrigin(origin.name)
  const girlNames = names.filter(n => n.gender === 'girl')
  const boyNames = names.filter(n => n.gender === 'boy')
  const unisexNames = names.filter(n => n.gender === 'unisex')

  // FAQ Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `What are popular ${origin.name} baby names?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Popular ${origin.name} baby names include ${names.slice(0, 5).map(n => n.name).join(', ')}.`
        }
      },
      {
        '@type': 'Question',
        name: `How many ${origin.name} names are there?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Our database includes ${names.length} ${origin.name} baby names with meanings and origins.`
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm mb-8">
          <Link href="/" className="text-gray-500 hover:text-gray-700">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href="/origins/" className="text-gray-500 hover:text-gray-700">Origins</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-900">{origin.name}</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {origin.name} Baby Names
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4">
            {origin.description}
          </p>
          <p className="text-lg font-medium text-primary-600">
            {names.length} names to explore
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto mb-12">
          <div className="bg-primary-50 rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-primary-600">{girlNames.length}</div>
            <div className="text-gray-600 text-sm">Girl Names</div>
          </div>
          <div className="bg-secondary-50 rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-secondary-600">{boyNames.length}</div>
            <div className="text-gray-600 text-sm">Boy Names</div>
          </div>
          <div className="bg-purple-50 rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-purple-600">{unisexNames.length}</div>
            <div className="text-gray-600 text-sm">Unisex Names</div>
          </div>
        </div>

        {/* Girl Names */}
        {girlNames.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {origin.name} Girl Names
            </h2>
            <NameGrid names={girlNames} showGender={false} />
          </section>
        )}

        {/* Boy Names */}
        {boyNames.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {origin.name} Boy Names
            </h2>
            <NameGrid names={boyNames} showGender={false} />
          </section>
        )}

        {/* Unisex Names */}
        {unisexNames.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {origin.name} Unisex Names
            </h2>
            <NameGrid names={unisexNames} showGender={false} />
          </section>
        )}

        {/* SEO Content */}
        <section className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            About {origin.name} Names
          </h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-4">
              {origin.name} names carry rich cultural heritage and beautiful meanings.
              {origin.description} These names often reflect important values, nature elements,
              or historical significance from {origin.name} tradition.
            </p>
            <p className="text-gray-600">
              Our collection includes {girlNames.length} girl names, {boyNames.length} boy names,
              and {unisexNames.length} unisex options from {origin.name} origin. Each name includes
              its meaning and popularity ranking to help you find the perfect choice.
            </p>
          </div>
        </section>
      </div>
    </>
  )
}

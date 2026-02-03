import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getNamesByLetter, getAvailableLetters } from '@/lib/data'
import { NameGrid } from '@/components/NameCard'

type Gender = 'girl' | 'boy' | 'unisex'

interface PageProps {
  params: Promise<{ gender: string; letter: string }>
}

const genderLabels: Record<Gender, string> = {
  girl: 'Girl',
  boy: 'Boy',
  unisex: 'Unisex'
}

export async function generateStaticParams() {
  const params: { gender: string; letter: string }[] = []
  const genders: Gender[] = ['girl', 'boy', 'unisex']
  const letters = 'abcdefghijklmnopqrstuvwxyz'.split('')

  for (const gender of genders) {
    const availableLetters = getAvailableLetters(gender)
    for (const letter of availableLetters) {
      params.push({ gender, letter })
    }
  }

  return params
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { gender, letter } = await params

  if (!['girl', 'boy', 'unisex'].includes(gender)) {
    return { title: 'Not Found' }
  }

  const upperLetter = letter.toUpperCase()
  const genderLabel = genderLabels[gender as Gender]
  const names = getNamesByLetter(letter, gender as Gender)
  const canonicalUrl = `https://babynamescout.com/names/${gender}/${letter}/`

  return {
    title: `${genderLabel} Names Starting with ${upperLetter} - ${names.length} Beautiful Names`,
    description: `Discover ${names.length} beautiful ${genderLabel.toLowerCase()} baby names starting with the letter ${upperLetter}. Find the perfect name with meanings, origins, and popularity rankings.`,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${genderLabel} Baby Names Starting with ${upperLetter}`,
      description: `Browse ${names.length} ${genderLabel.toLowerCase()} names beginning with ${upperLetter}`,
      url: canonicalUrl,
    }
  }
}

export default async function LetterNamesPage({ params }: PageProps) {
  const { gender, letter } = await params

  if (!['girl', 'boy', 'unisex'].includes(gender)) {
    notFound()
  }

  const genderType = gender as Gender
  const genderLabel = genderLabels[genderType]
  const names = getNamesByLetter(letter, genderType)
  const upperLetter = letter.toUpperCase()
  const availableLetters = getAvailableLetters(genderType)

  if (names.length === 0) {
    notFound()
  }

  const colorClasses = {
    girl: { bg: 'bg-primary-500', text: 'text-primary-600', light: 'bg-primary-50' },
    boy: { bg: 'bg-secondary-500', text: 'text-secondary-600', light: 'bg-secondary-50' },
    unisex: { bg: 'bg-purple-500', text: 'text-purple-600', light: 'bg-purple-50' }
  }

  const colors = colorClasses[genderType]

  // FAQ Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `What are popular ${genderLabel.toLowerCase()} names starting with ${upperLetter}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Popular ${genderLabel.toLowerCase()} names starting with ${upperLetter} include ${names.slice(0, 5).map(n => n.name).join(', ')}.`
        }
      },
      {
        '@type': 'Question',
        name: `How many ${genderLabel.toLowerCase()} names start with ${upperLetter}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `There are ${names.length} ${genderLabel.toLowerCase()} names starting with ${upperLetter} in our database.`
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
          <Link href={`/names/${gender}/`} className="text-gray-500 hover:text-gray-700">
            {genderLabel} Names
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-900">Letter {upperLetter}</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <div className={`inline-flex items-center justify-center w-20 h-20 ${colors.bg} text-white text-4xl font-bold rounded-2xl mb-4`}>
            {upperLetter}
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {genderLabel} Names Starting with {upperLetter}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover {names.length} beautiful {genderLabel.toLowerCase()} baby names beginning
            with the letter {upperLetter}, complete with meanings and origins.
          </p>
        </div>

        {/* Letter Navigation */}
        <div className="mb-12">
          <h2 className="text-sm font-medium text-gray-500 mb-3">Browse other letters:</h2>
          <div className="flex flex-wrap gap-2">
            {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(l => {
              const isActive = l.toLowerCase() === letter.toLowerCase()
              const hasNames = availableLetters.includes(l.toLowerCase())

              if (!hasNames) {
                return (
                  <span
                    key={l}
                    className="w-9 h-9 flex items-center justify-center bg-gray-100 text-gray-400 rounded text-sm cursor-not-allowed"
                  >
                    {l}
                  </span>
                )
              }

              return (
                <Link
                  key={l}
                  href={`/names/${gender}/${l.toLowerCase()}/`}
                  className={`w-9 h-9 flex items-center justify-center rounded text-sm font-medium transition ${
                    isActive
                      ? `${colors.bg} text-white`
                      : `${colors.light} ${colors.text} hover:opacity-80`
                  }`}
                >
                  {l}
                </Link>
              )
            })}
          </div>
        </div>

        {/* Names Grid */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            All {genderLabel} Names Starting with {upperLetter}
          </h2>
          <NameGrid names={names} showGender={false} />
        </section>

        {/* SEO Content */}
        <section className={`${colors.light} rounded-xl p-8`}>
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            About {genderLabel} Names Starting with {upperLetter}
          </h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-4">
              The letter {upperLetter} offers a wonderful variety of {genderLabel.toLowerCase()} baby names,
              from classic choices to modern favorites. Whether you&apos;re looking for something
              traditional or unique, names starting with {upperLetter} provide beautiful options
              for your baby {gender === 'girl' ? 'girl' : gender === 'boy' ? 'boy' : ''}.
            </p>
            <p className="text-gray-600">
              Browse our collection of {names.length} {genderLabel.toLowerCase()} names beginning
              with {upperLetter}. Each name includes its meaning, origin, and current popularity
              to help you find the perfect name for your little one.
            </p>
          </div>
        </section>
      </div>
    </>
  )
}

import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getNamesByGender, getAvailableLetters, getPopularNames } from '@/lib/data'
import { NameGrid } from '@/components/NameCard'

type Gender = 'girl' | 'boy' | 'unisex'

interface PageProps {
  params: Promise<{ gender: string }>
}

const genderConfig = {
  girl: {
    title: 'Girl Names',
    description: 'Explore our beautiful collection of girl baby names. Find the perfect name for your daughter with meanings, origins, and popularity rankings.',
    color: 'primary',
    emoji: '👧'
  },
  boy: {
    title: 'Boy Names',
    description: 'Discover strong and meaningful boy baby names. Browse names for your son with origins, meanings, and current popularity.',
    color: 'secondary',
    emoji: '👦'
  },
  unisex: {
    title: 'Unisex Names',
    description: 'Find versatile gender-neutral baby names that work beautifully for any child. Browse our collection of unisex names.',
    color: 'purple',
    emoji: '👶'
  }
}

export async function generateStaticParams() {
  return [
    { gender: 'girl' },
    { gender: 'boy' },
    { gender: 'unisex' }
  ]
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { gender } = await params

  if (!['girl', 'boy', 'unisex'].includes(gender)) {
    return { title: 'Not Found' }
  }

  const config = genderConfig[gender as Gender]
  const canonicalUrl = `https://babynamescout.com/names/${gender}/`

  return {
    title: `${config.title} - Beautiful Baby Names with Meanings`,
    description: config.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${config.title} | BabyNameScout`,
      description: config.description,
      url: canonicalUrl,
    }
  }
}

export default async function GenderNamesPage({ params }: PageProps) {
  const { gender } = await params

  if (!['girl', 'boy', 'unisex'].includes(gender)) {
    notFound()
  }

  const genderType = gender as Gender
  const config = genderConfig[genderType]
  const names = getNamesByGender(genderType)
  const letters = getAvailableLetters(genderType)
  const popularNames = getPopularNames(genderType, 12)

  const colorClasses = {
    primary: {
      bg: 'bg-primary-50',
      text: 'text-primary-600',
      hover: 'hover:bg-primary-100',
      border: 'border-primary-200'
    },
    secondary: {
      bg: 'bg-secondary-50',
      text: 'text-secondary-600',
      hover: 'hover:bg-secondary-100',
      border: 'border-secondary-200'
    },
    purple: {
      bg: 'bg-purple-50',
      text: 'text-purple-600',
      hover: 'hover:bg-purple-100',
      border: 'border-purple-200'
    }
  }

  const colors = colorClasses[config.color as keyof typeof colorClasses]

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <span className="text-5xl mb-4 block">{config.emoji}</span>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{config.title}</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          {config.description}
        </p>
        <p className={`mt-4 text-lg font-medium ${colors.text}`}>
          {names.length.toLocaleString()} names to explore
        </p>
      </div>

      {/* Browse by Letter */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by Letter</h2>
        <div className="flex flex-wrap gap-2">
          {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter => {
            const hasNames = letters.includes(letter.toLowerCase())
            return hasNames ? (
              <Link
                key={letter}
                href={`/names/${gender}/${letter.toLowerCase()}/`}
                className={`w-12 h-12 flex items-center justify-center ${colors.bg} ${colors.hover} ${colors.text} rounded-lg font-bold transition`}
              >
                {letter}
              </Link>
            ) : (
              <span
                key={letter}
                className="w-12 h-12 flex items-center justify-center bg-gray-100 text-gray-400 rounded-lg font-bold cursor-not-allowed"
              >
                {letter}
              </span>
            )
          })}
        </div>
      </section>

      {/* Popular Names */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Most Popular {config.title}
        </h2>
        <NameGrid names={popularNames} showGender={false} />
      </section>

      {/* All Names by Letter */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">All {config.title}</h2>
        {letters.map(letter => {
          const letterNames = names.filter(n => n.name[0].toLowerCase() === letter).slice(0, 8)
          return (
            <div key={letter} className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className={`text-xl font-bold ${colors.text}`}>
                  {letter.toUpperCase()}
                </h3>
                <Link
                  href={`/names/${gender}/${letter}/`}
                  className={`text-sm ${colors.text} hover:underline`}
                >
                  See all {letter.toUpperCase()} names &rarr;
                </Link>
              </div>
              <NameGrid names={letterNames} showGender={false} />
            </div>
          )
        })}
      </section>
    </div>
  )
}

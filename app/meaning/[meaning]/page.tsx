import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getNamesByMeaning, getMeaningCategories } from '@/lib/data'
import { NameGrid } from '@/components/NameCard'

interface PageProps {
  params: Promise<{ meaning: string }>
}

export async function generateStaticParams() {
  const categories = getMeaningCategories()
  return categories.map(cat => ({
    meaning: cat.slug
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { meaning } = await params
  const categories = getMeaningCategories()
  const category = categories.find(c => c.slug === meaning)

  if (!category) {
    return { title: 'Category Not Found' }
  }

  const names = getNamesByMeaning(meaning)

  return {
    title: `Baby Names Meaning "${category.name}" - ${names.length} Beautiful Names`,
    description: `Discover ${names.length} baby names meaning ${category.name.toLowerCase()}. ${category.description}. Find the perfect meaningful name for your baby.`,
    openGraph: {
      title: `Baby Names Meaning ${category.name}`,
      description: category.description,
    }
  }
}

export default async function MeaningPage({ params }: PageProps) {
  const { meaning } = await params
  const categories = getMeaningCategories()
  const category = categories.find(c => c.slug === meaning)

  if (!category) {
    notFound()
  }

  const names = getNamesByMeaning(meaning)
  const girlNames = names.filter(n => n.gender === 'girl')
  const boyNames = names.filter(n => n.gender === 'boy')

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm mb-8">
        <Link href="/" className="text-gray-500 hover:text-gray-700">Home</Link>
        <span className="mx-2 text-gray-400">/</span>
        <Link href="/meanings/" className="text-gray-500 hover:text-gray-700">Meanings</Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-900">{category.name}</span>
      </nav>

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Baby Names Meaning &ldquo;{category.name}&rdquo;
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4">
          {category.description}
        </p>
        <p className="text-lg font-medium text-primary-600">
          {names.length} names found
        </p>
      </div>

      {/* Girl Names */}
      {girlNames.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Girl Names Meaning {category.name}
          </h2>
          <NameGrid names={girlNames} showGender={false} />
        </section>
      )}

      {/* Boy Names */}
      {boyNames.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Boy Names Meaning {category.name}
          </h2>
          <NameGrid names={boyNames} showGender={false} />
        </section>
      )}

      {/* Other Meanings */}
      <section className="bg-gray-50 rounded-xl p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Explore Other Meanings
        </h2>
        <div className="flex flex-wrap gap-3">
          {categories
            .filter(c => c.slug !== meaning && c.count > 0)
            .slice(0, 10)
            .map(cat => (
              <Link
                key={cat.slug}
                href={`/meaning/${cat.slug}/`}
                className="bg-white border border-gray-200 hover:border-primary-300 px-4 py-2 rounded-lg text-gray-700 hover:text-primary-600 transition"
              >
                {cat.name}
              </Link>
            ))}
        </div>
      </section>
    </div>
  )
}

import { Metadata } from 'next'
import Link from 'next/link'
import { getMeaningCategories } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Baby Names by Meaning - Find Names with Special Significance',
  description: 'Explore baby names by their meaning. Find names that mean strong, love, light, noble, grace, wisdom, joy, and more.',
}

export default function MeaningsPage() {
  const categories = getMeaningCategories().filter(c => c.count > 0)

  const icons: Record<string, string> = {
    strong: '💪',
    love: '❤️',
    nature: '🌿',
    light: '✨',
    noble: '👑',
    grace: '🦢',
    wisdom: '🦉',
    joy: '😊',
    gift: '🎁',
    peace: '🕊️',
    victory: '🏆',
    life: '🌱',
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Baby Names by Meaning
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Choose a name with special significance. Explore names that carry
          beautiful meanings like strength, love, wisdom, and more.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map(category => (
          <Link
            key={category.slug}
            href={`/meaning/${category.slug}/`}
            className="bg-white border border-gray-200 hover:border-primary-300 hover:shadow-lg rounded-xl p-6 transition"
          >
            <span className="text-3xl mb-3 block">{icons[category.slug] || '📝'}</span>
            <h2 className="text-xl font-bold text-gray-900 mb-2">{category.name}</h2>
            <p className="text-gray-600 text-sm mb-4">{category.description}</p>
            <span className="text-primary-600 font-medium">
              {category.count} names &rarr;
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}

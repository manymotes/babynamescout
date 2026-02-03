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

  const featuredCollections = [
    { name: 'Nature Names', slug: 'nature-names', icon: '🌸', description: 'Names inspired by flowers, trees, animals, and the natural world' },
    { name: 'Strong Names', slug: 'strong-names', icon: '⚔️', description: 'Names meaning strong, brave, warrior, and powerful' },
    { name: 'Beautiful Names', slug: 'beautiful-names', icon: '✨', description: 'Names meaning beautiful, pretty, lovely, and fair' },
    { name: 'Wise Names', slug: 'wise-names', icon: '📚', description: 'Names meaning wise, intelligent, smart, and learned' },
    { name: 'Royal Names', slug: 'royal-names', icon: '👑', description: 'Names meaning king, queen, prince, princess, and noble' },
    { name: 'Happy Names', slug: 'happy-names', icon: '😊', description: 'Names meaning joy, happiness, blessed, and cheerful' },
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Baby Names by Meaning
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
          Choose a name with special significance. Explore names that carry
          beautiful meanings like strength, love, wisdom, and more.
        </p>
        <p className="text-gray-500">
          Browse by popular meaning categories or explore our curated collections below
        </p>
      </div>

      {/* Featured Collections */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Featured Meaning Collections</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCollections.map(collection => (
            <Link
              key={collection.slug}
              href={`/meanings/${collection.slug}/`}
              className="bg-gradient-to-br from-primary-50 to-secondary-50 border-2 border-primary-200 hover:border-primary-400 hover:shadow-xl rounded-xl p-6 transition group"
            >
              <span className="text-4xl mb-3 block group-hover:scale-110 transition-transform">{collection.icon}</span>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{collection.name}</h3>
              <p className="text-gray-600 text-sm">{collection.description}</p>
              <span className="text-primary-600 font-medium mt-4 inline-block">
                Explore collection &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* All Meaning Categories */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">All Meaning Categories</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(category => (
            <Link
              key={category.slug}
              href={`/meaning/${category.slug}/`}
              className="bg-white border border-gray-200 hover:border-primary-300 hover:shadow-lg rounded-xl p-6 transition"
            >
              <span className="text-3xl mb-3 block">{icons[category.slug] || '📝'}</span>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{category.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{category.description}</p>
              <span className="text-primary-600 font-medium">
                {category.count} names &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* SEO Content */}
      <section className="mt-16 bg-gray-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Name Meanings Matter</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">
            The meaning behind a baby name can add depth and significance to your choice. Many parents seek names that reflect their values, hopes, and dreams for their child. Whether you want a name that conveys strength, beauty, wisdom, or joy, exploring names by meaning helps you find options that resonate on a deeper level.
          </p>
          <p className="text-gray-600 mb-4">
            Our name meaning categories organize thousands of names by their symbolic significance. From nature-inspired names to royal titles, from virtues to emotions, you can discover names that carry the perfect message for your baby.
          </p>
          <p className="text-gray-600">
            Each name in our database includes its origin, meaning, and popularity ranking, helping you make an informed decision. Browse our featured collections for curated lists of names in popular meaning categories, or explore specific meaning keywords to find exactly what you&apos;re looking for.
          </p>
        </div>
      </section>
    </div>
  )
}

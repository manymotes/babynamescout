import Link from 'next/link'
import type { Metadata } from 'next'
import { getAllNames } from '@/lib/data'
import { NameGrid } from '@/components/NameCard'

export const metadata: Metadata = {
  title: 'Unique Baby Names | Rare & Uncommon Names',
  description: 'Find unique and rare baby names that stand out. Browse our collection of uncommon names with beautiful meanings from diverse cultures and origins.',
  openGraph: {
    title: 'Unique & Rare Baby Names',
    description: 'Discover distinctive baby names that are beautifully uncommon',
  },
}

export default function UniquePage() {
  const allNames = getAllNames()

  // Get less common names (higher popularity numbers indicate less common)
  const uniqueGirlNames = allNames
    .filter(n => n.gender === 'girl' && n.popularity && n.popularity > 100)
    .sort((a, b) => (b.popularity || 0) - (a.popularity || 0))
    .slice(0, 24)

  const uniqueBoyNames = allNames
    .filter(n => n.gender === 'boy' && n.popularity && n.popularity > 100)
    .sort((a, b) => (b.popularity || 0) - (a.popularity || 0))
    .slice(0, 24)

  const uniqueUnisexNames = allNames
    .filter(n => n.gender === 'unisex')
    .slice(0, 12)

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero */}
      <div className="text-center mb-12">
        <span className="text-5xl mb-4 block">✨</span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Unique & Rare Baby Names
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Stand out with a distinctive name. Explore our collection of uncommon baby names
          with beautiful meanings that your child won&apos;t share with everyone in their class.
        </p>
      </div>

      {/* Categories */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Types of Unique Names</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-violet-50 to-violet-100 rounded-xl p-6">
            <h3 className="font-bold text-violet-900 mb-2">Rare Vintage</h3>
            <p className="text-violet-700 text-sm">
              Forgotten classics from bygone eras that are ready for revival: Cordelia, Barnaby, Millicent, and Percival.
            </p>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-6">
            <h3 className="font-bold text-teal-900 mb-2">International Gems</h3>
            <p className="text-teal-700 text-sm">
              Beautiful names from around the world that are uncommon in English-speaking countries.
            </p>
          </div>

          <div className="bg-gradient-to-br from-rose-50 to-rose-100 rounded-xl p-6">
            <h3 className="font-bold text-rose-900 mb-2">Nature-Inspired</h3>
            <p className="text-rose-700 text-sm">
              Distinctive names from the natural world: Wren, Sage, Canyon, Meadow, and Indigo.
            </p>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-6">
            <h3 className="font-bold text-amber-900 mb-2">Literary Names</h3>
            <p className="text-amber-700 text-sm">
              Uncommon names from literature and mythology that carry rich stories and meanings.
            </p>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl p-6">
            <h3 className="font-bold text-cyan-900 mb-2">Modern Inventions</h3>
            <p className="text-cyan-700 text-sm">
              Contemporary creations that blend traditional sounds in fresh, unique ways.
            </p>
          </div>

          <div className="bg-gradient-to-br from-fuchsia-50 to-fuchsia-100 rounded-xl p-6">
            <h3 className="font-bold text-fuchsia-900 mb-2">Surname Names</h3>
            <p className="text-fuchsia-700 text-sm">
              Last names as first names that are distinctive yet familiar: Sutton, Dashiell, and Marlowe.
            </p>
          </div>
        </div>
      </section>

      {/* Unique Girl Names */}
      <section className="mb-16">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-primary-600 mb-2">Unique Girl Names</h2>
          <p className="text-gray-600">Rare and distinctive names for girls</p>
        </div>
        <NameGrid names={uniqueGirlNames} />
        <div className="text-center mt-6">
          <Link
            href="/names/girl/"
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            Browse All Girl Names →
          </Link>
        </div>
      </section>

      {/* Unique Boy Names */}
      <section className="mb-16">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-secondary-600 mb-2">Unique Boy Names</h2>
          <p className="text-gray-600">Rare and distinctive names for boys</p>
        </div>
        <NameGrid names={uniqueBoyNames} />
        <div className="text-center mt-6">
          <Link
            href="/names/boy/"
            className="text-secondary-600 hover:text-secondary-700 font-medium"
          >
            Browse All Boy Names →
          </Link>
        </div>
      </section>

      {/* Unique Unisex Names */}
      {uniqueUnisexNames.length > 0 && (
        <section className="mb-16">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-purple-600 mb-2">Unique Unisex Names</h2>
            <p className="text-gray-600">Gender-neutral names that are beautifully uncommon</p>
          </div>
          <NameGrid names={uniqueUnisexNames} />
          <div className="text-center mt-6">
            <Link
              href="/unisex/"
              className="text-purple-600 hover:text-purple-700 font-medium"
            >
              Browse All Unisex Names →
            </Link>
          </div>
        </section>
      )}

      {/* Tips Section */}
      <section className="mb-16 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Tips for Choosing a Unique Name</h2>
        <div className="space-y-4 text-gray-600">
          <div className="flex items-start gap-3">
            <span className="text-2xl">📝</span>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Consider Pronunciation</h3>
              <p>Make sure your unique name isn&apos;t too difficult to pronounce or spell. Your child will have to explain it their whole life!</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">🎭</span>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Think Long-Term</h3>
              <p>Consider how the name will work for both a baby and an adult professional. Unique doesn&apos;t have to mean childish.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">🌍</span>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Respect Cultural Origins</h3>
              <p>If choosing a name from another culture, research its meaning and significance to use it respectfully.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">💡</span>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Test It Out</h3>
              <p>Say the full name out loud many times. How does it sound with your last name? What are the potential nicknames?</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="bg-gray-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose a Unique Baby Name?</h2>
        <div className="prose prose-gray max-w-none text-gray-600 space-y-4">
          <p>
            Choosing a unique baby name gives your child a distinctive identity from the start. While popular
            names have their appeal, unique names ensure your child won&apos;t be one of several with the same
            name in their classroom. A rare name can be a conversation starter and a point of pride.
          </p>
          <p>
            Unique names often have fascinating origins and meanings. Whether drawn from mythology, nature,
            literature, or international cultures, uncommon names carry rich stories and significance. Many
            parents find that unique names better reflect their family&apos;s values, heritage, or hopes for
            their child&apos;s future.
          </p>
          <p>
            When selecting a unique name, balance distinctiveness with usability. The best unique names are
            memorable and meaningful without being difficult to pronounce or spell. Consider how the name will
            serve your child throughout their life, from the playground to the boardroom.
          </p>
          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Finding the Perfect Unique Name</h3>
          <p>
            Browse names by origin to discover gems from cultures around the world. Look at names with meanings
            that resonate with you, or explore names starting with specific letters. Our name generator can also
            help you find unique combinations based on your preferences.
          </p>
        </div>
      </section>
    </div>
  )
}

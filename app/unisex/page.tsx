import Link from 'next/link'
import type { Metadata } from 'next'
import { getAllNames } from '@/lib/data'
import { NameGrid } from '@/components/NameCard'
import type { BabyName } from '@/types/name'

export const metadata: Metadata = {
  title: 'Unisex Baby Names | Gender-Neutral Names for Boys & Girls',
  description: 'Discover beautiful gender-neutral baby names perfect for any child. Browse our collection of unisex names with meanings and origins.',
  openGraph: {
    title: 'Unisex & Gender-Neutral Baby Names',
    description: 'Beautiful names that work for any child',
  },
}

export default function UnisexPage() {
  const allNames = getAllNames()

  // Get unisex names
  const unisexNames = allNames.filter(n => n.gender === 'unisex').slice(0, 50)

  // If we don't have enough unisex names, include some that work for both genders
  const additionalUnisexNames: BabyName[] = [
    { name: 'Riley', slug: 'riley', gender: 'unisex' as const, origin: 'Irish', meaning: 'Valiant' },
    { name: 'Avery', slug: 'avery', gender: 'unisex' as const, origin: 'English', meaning: 'Ruler of elves' },
    { name: 'Quinn', slug: 'quinn', gender: 'unisex' as const, origin: 'Irish', meaning: 'Descendant of Conn' },
    { name: 'Jordan', slug: 'jordan', gender: 'unisex' as const, origin: 'Hebrew', meaning: 'To flow down' },
    { name: 'Taylor', slug: 'taylor', gender: 'unisex' as const, origin: 'English', meaning: 'Tailor' },
    { name: 'Morgan', slug: 'morgan', gender: 'unisex' as const, origin: 'Welsh', meaning: 'Sea circle' },
    { name: 'Parker', slug: 'parker', gender: 'unisex' as const, origin: 'English', meaning: 'Park keeper' },
    { name: 'Rowan', slug: 'rowan', gender: 'unisex' as const, origin: 'Irish', meaning: 'Little redhead' },
    { name: 'Sage', slug: 'sage', gender: 'unisex' as const, origin: 'Latin', meaning: 'Wise' },
    { name: 'Charlie', slug: 'charlie', gender: 'unisex' as const, origin: 'English', meaning: 'Free man' },
    { name: 'River', slug: 'river', gender: 'unisex' as const, origin: 'English', meaning: 'Flowing water' },
    { name: 'Phoenix', slug: 'phoenix', gender: 'unisex' as const, origin: 'Greek', meaning: 'Dark red' },
    { name: 'Hayden', slug: 'hayden', gender: 'unisex' as const, origin: 'English', meaning: 'Fire' },
    { name: 'Finley', slug: 'finley', gender: 'unisex' as const, origin: 'Scottish', meaning: 'Fair warrior' },
    { name: 'Skyler', slug: 'skyler', gender: 'unisex' as const, origin: 'Dutch', meaning: 'Scholar' },
    { name: 'Dakota', slug: 'dakota', gender: 'unisex' as const, origin: 'Native American', meaning: 'Friend' },
    { name: 'Emerson', slug: 'emerson', gender: 'unisex' as const, origin: 'English', meaning: 'Son of Emery' },
    { name: 'Reese', slug: 'reese', gender: 'unisex' as const, origin: 'Welsh', meaning: 'Enthusiasm' },
    { name: 'Kai', slug: 'kai', gender: 'unisex' as const, origin: 'Hawaiian', meaning: 'Sea' },
    { name: 'Elliot', slug: 'elliot', gender: 'unisex' as const, origin: 'English', meaning: 'The Lord is my God' },
  ]

  const displayNames = unisexNames.length > 0 ? unisexNames : additionalUnisexNames

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero */}
      <div className="text-center mb-12">
        <span className="text-5xl mb-4 block">🌈</span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Unisex Baby Names
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover beautiful gender-neutral names perfect for any child. These versatile names
          work wonderfully for boys, girls, or anyone who prefers a non-binary option.
        </p>
      </div>

      {/* Why Choose Unisex */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Choose a Gender-Neutral Name?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
            <span className="text-3xl mb-2 block">🎯</span>
            <h3 className="font-bold text-purple-900 mb-2">Modern & Progressive</h3>
            <p className="text-purple-700 text-sm">
              Gender-neutral names reflect contemporary values of equality and individuality.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
            <span className="text-3xl mb-2 block">💼</span>
            <h3 className="font-bold text-blue-900 mb-2">Professional Advantage</h3>
            <p className="text-blue-700 text-sm">
              Unisex names can help reduce unconscious bias in professional settings.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
            <span className="text-3xl mb-2 block">🌟</span>
            <h3 className="font-bold text-green-900 mb-2">Unique & Trendy</h3>
            <p className="text-green-700 text-sm">
              Many gender-neutral names are fresh, modern, and stand out from traditional choices.
            </p>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-6">
            <span className="text-3xl mb-2 block">💫</span>
            <h3 className="font-bold text-amber-900 mb-2">Flexible Identity</h3>
            <p className="text-amber-700 text-sm">
              Allows children to define their own identity without name-based assumptions.
            </p>
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Types of Gender-Neutral Names</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-6">
            <h3 className="font-bold text-indigo-900 mb-2">Nature Names</h3>
            <p className="text-indigo-700 text-sm mb-3">
              River, Sage, Rowan, Phoenix, Sky, Ocean, Canyon, and Wren.
            </p>
            <Link href="/meaning/nature/" className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
              Explore Nature Names →
            </Link>
          </div>

          <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-6">
            <h3 className="font-bold text-pink-900 mb-2">Surname Names</h3>
            <p className="text-pink-700 text-sm mb-3">
              Parker, Taylor, Morgan, Riley, Quinn, Jordan, and Avery.
            </p>
            <Link href="/origins/" className="text-pink-600 hover:text-pink-800 text-sm font-medium">
              Browse by Origin →
            </Link>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-6">
            <h3 className="font-bold text-teal-900 mb-2">Short & Modern</h3>
            <p className="text-teal-700 text-sm mb-3">
              Kai, Sam, Alex, Max, Ray, Drew, Blair, and Reese.
            </p>
            <Link href="/short-names/" className="text-teal-600 hover:text-teal-800 text-sm font-medium">
              See Short Names →
            </Link>
          </div>
        </div>
      </section>

      {/* Unisex Names Grid */}
      <section className="mb-16">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-purple-600 mb-2">Gender-Neutral Names</h2>
          <p className="text-gray-600">Beautiful names that work for any child</p>
        </div>
        <NameGrid names={displayNames} />
      </section>

      {/* Popular Unisex Names by Category */}
      <section className="mb-16 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Unisex Names by Style</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-gray-900 mb-3">Classic Unisex</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Alex - Defender of the people</li>
              <li>• Sam - Told by God</li>
              <li>• Charlie - Free man/woman</li>
              <li>• Jordan - To flow down</li>
              <li>• Taylor - Tailor</li>
              <li>• Casey - Brave in battle</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-3">Modern Unisex</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Sage - Wise one</li>
              <li>• River - Flowing water</li>
              <li>• Phoenix - Mythical bird</li>
              <li>• Rowan - Little redhead</li>
              <li>• Quinn - Wisdom, intelligence</li>
              <li>• Kai - Sea, ocean</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-3">Trendy Unisex</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Riley - Valiant</li>
              <li>• Avery - Ruler of elves</li>
              <li>• Parker - Park keeper</li>
              <li>• Finley - Fair warrior</li>
              <li>• Emerson - Son/child of Emery</li>
              <li>• Reese - Enthusiasm</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="mb-16 bg-blue-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Tips for Choosing a Unisex Name</h2>
        <div className="space-y-4 text-gray-600">
          <div className="flex items-start gap-3">
            <span className="text-2xl">✓</span>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Consider Middle Names</h3>
              <p>Pair with a more traditionally gendered middle name if you want to provide options.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">✓</span>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Check Pronunciation</h3>
              <p>Make sure the name is easy to pronounce and spell to avoid confusion.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">✓</span>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Think Long-Term</h3>
              <p>Consider how the name will work across all stages of life, from childhood to adulthood.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">✓</span>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Test It Out</h3>
              <p>Say it aloud with your last name and consider potential nicknames.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="bg-gray-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Rise of Gender-Neutral Baby Names</h2>
        <div className="prose prose-gray max-w-none text-gray-600 space-y-4">
          <p>
            Gender-neutral baby names have grown tremendously in popularity over the past decade, reflecting
            broader cultural shifts toward gender equality and individual expression. These versatile names
            work beautifully for children of any gender and often carry modern, progressive associations that
            many parents find appealing.
          </p>
          <p>
            Unisex names come from various sources: nature (River, Sage), surnames turned first names (Parker,
            Riley), shortened forms of traditional names (Alex, Charlie), and modern inventions (Avery, Quinn).
            What they share is flexibility and a contemporary feel that resonates with today&apos;s families.
          </p>
          <p>
            Research suggests that gender-neutral names may offer professional advantages, as they don&apos;t
            immediately signal gender on resumes or applications. This can help reduce unconscious bias in hiring
            and other professional contexts. Beyond practical benefits, many parents simply love the fresh,
            modern sound of unisex names.
          </p>
          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Choosing the Right Unisex Name</h3>
          <p>
            When selecting a gender-neutral name, consider how it pairs with your surname and whether it offers
            good nickname options. Think about the name&apos;s meaning and origin, and whether it aligns with your
            family&apos;s values. Many parents also consider pairing a unisex first name with a more traditionally
            gendered middle name to provide options as their child grows.
          </p>
        </div>
      </section>
    </div>
  )
}

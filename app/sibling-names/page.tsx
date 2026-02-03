import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sibling Name Combinations | Baby Names That Go Together',
  description: 'Find perfect sibling name combinations for brothers, sisters, and mixed families. Browse coordinating names by style, origin, and theme.',
  openGraph: {
    title: 'Sibling Name Combinations - Names That Go Together',
    description: 'Discover beautiful name combinations for siblings that complement each other perfectly',
  },
}

export default function SiblingNamesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero */}
      <div className="text-center mb-12">
        <span className="text-5xl mb-4 block">👶👧👦</span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Sibling Name Combinations
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Find the perfect names for your growing family. Explore coordinated sibling names
          that complement each other while celebrating each child's unique identity.
        </p>
      </div>

      {/* Popular Categories */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by Sibling Type</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/sibling-names/brother-sister-pairs/" className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 hover:shadow-lg transition">
            <span className="text-3xl mb-2 block">👦👧</span>
            <h3 className="font-bold text-purple-900 mb-2">Brother & Sister Pairs</h3>
            <p className="text-purple-700 text-sm">Perfect name combinations for a boy and girl sibling duo</p>
          </Link>

          <Link href="/sibling-names/two-sisters/" className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-6 hover:shadow-lg transition">
            <span className="text-3xl mb-2 block">👧👧</span>
            <h3 className="font-bold text-pink-900 mb-2">Two Sisters</h3>
            <p className="text-pink-700 text-sm">Beautiful name pairs for two girls in the family</p>
          </Link>

          <Link href="/sibling-names/two-brothers/" className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 hover:shadow-lg transition">
            <span className="text-3xl mb-2 block">👦👦</span>
            <h3 className="font-bold text-blue-900 mb-2">Two Brothers</h3>
            <p className="text-blue-700 text-sm">Strong name combinations for two boys</p>
          </Link>

          <Link href="/sibling-names/twin-boys/" className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-6 hover:shadow-lg transition">
            <span className="text-3xl mb-2 block">👶👶</span>
            <h3 className="font-bold text-indigo-900 mb-2">Twin Boys</h3>
            <p className="text-indigo-700 text-sm">Coordinating names perfect for twin brothers</p>
          </Link>

          <Link href="/sibling-names/twin-girls/" className="bg-gradient-to-br from-rose-50 to-rose-100 rounded-xl p-6 hover:shadow-lg transition">
            <span className="text-3xl mb-2 block">👶👶</span>
            <h3 className="font-bold text-rose-900 mb-2">Twin Girls</h3>
            <p className="text-rose-700 text-sm">Matching name pairs for twin sisters</p>
          </Link>

          <Link href="/sibling-names/boy-girl-twins/" className="bg-gradient-to-br from-violet-50 to-violet-100 rounded-xl p-6 hover:shadow-lg transition">
            <span className="text-3xl mb-2 block">👶👶</span>
            <h3 className="font-bold text-violet-900 mb-2">Boy-Girl Twins</h3>
            <p className="text-violet-700 text-sm">Complementary names for fraternal twins</p>
          </Link>

          <Link href="/sibling-names/three-kids/" className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-6 hover:shadow-lg transition">
            <span className="text-3xl mb-2 block">👧👦👧</span>
            <h3 className="font-bold text-emerald-900 mb-2">Three Kids</h3>
            <p className="text-emerald-700 text-sm">Name sets for families with three children</p>
          </Link>

          <Link href="/sibling-names/four-kids/" className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-6 hover:shadow-lg transition">
            <span className="text-3xl mb-2 block">👶👧👦👧</span>
            <h3 className="font-bold text-teal-900 mb-2">Four Kids</h3>
            <p className="text-teal-700 text-sm">Coordinated names for larger families</p>
          </Link>

          <Link href="/sibling-names/avoid-mistakes/" className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-6 hover:shadow-lg transition">
            <span className="text-3xl mb-2 block">⚠️</span>
            <h3 className="font-bold text-amber-900 mb-2">Mistakes to Avoid</h3>
            <p className="text-amber-700 text-sm">Common pitfalls when naming siblings</p>
          </Link>
        </div>
      </section>

      {/* Browse by Theme */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by Theme</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/sibling-names/matching-first-letters/" className="bg-white border-2 border-blue-200 hover:border-blue-400 rounded-xl p-6 transition">
            <h3 className="font-bold text-blue-900 mb-2">Matching First Letters</h3>
            <p className="text-blue-700 text-sm">Siblings with names starting with the same letter</p>
          </Link>

          <Link href="/sibling-names/rhyming-names/" className="bg-white border-2 border-purple-200 hover:border-purple-400 rounded-xl p-6 transition">
            <h3 className="font-bold text-purple-900 mb-2">Rhyming Names</h3>
            <p className="text-purple-700 text-sm">Names with similar sounds and endings</p>
          </Link>

          <Link href="/sibling-names/same-origin/" className="bg-white border-2 border-green-200 hover:border-green-400 rounded-xl p-6 transition">
            <h3 className="font-bold text-green-900 mb-2">Same Origin</h3>
            <p className="text-green-700 text-sm">Names from shared cultural backgrounds</p>
          </Link>

          <Link href="/sibling-names/same-meaning/" className="bg-white border-2 border-indigo-200 hover:border-indigo-400 rounded-xl p-6 transition">
            <h3 className="font-bold text-indigo-900 mb-2">Same Meaning</h3>
            <p className="text-indigo-700 text-sm">Names with related or complementary meanings</p>
          </Link>

          <Link href="/sibling-names/vintage-pairs/" className="bg-white border-2 border-amber-200 hover:border-amber-400 rounded-xl p-6 transition">
            <h3 className="font-bold text-amber-900 mb-2">Vintage Pairs</h3>
            <p className="text-amber-700 text-sm">Classic, old-fashioned sibling names</p>
          </Link>

          <Link href="/sibling-names/modern-pairs/" className="bg-white border-2 border-cyan-200 hover:border-cyan-400 rounded-xl p-6 transition">
            <h3 className="font-bold text-cyan-900 mb-2">Modern Pairs</h3>
            <p className="text-cyan-700 text-sm">Contemporary and trendy name combinations</p>
          </Link>

          <Link href="/sibling-names/nature-themed/" className="bg-white border-2 border-emerald-200 hover:border-emerald-400 rounded-xl p-6 transition">
            <h3 className="font-bold text-emerald-900 mb-2">Nature-Themed</h3>
            <p className="text-emerald-700 text-sm">Names inspired by nature and the outdoors</p>
          </Link>

          <Link href="/sibling-names/royal-names/" className="bg-white border-2 border-purple-200 hover:border-purple-400 rounded-xl p-6 transition">
            <h3 className="font-bold text-purple-900 mb-2">Royal Names</h3>
            <p className="text-purple-700 text-sm">Regal and noble sibling combinations</p>
          </Link>

          <Link href="/sibling-names/biblical-siblings/" className="bg-white border-2 border-rose-200 hover:border-rose-400 rounded-xl p-6 transition">
            <h3 className="font-bold text-rose-900 mb-2">Biblical Siblings</h3>
            <p className="text-rose-700 text-sm">Names from scripture and religious tradition</p>
          </Link>

          <Link href="/sibling-names/literary-inspired/" className="bg-white border-2 border-violet-200 hover:border-violet-400 rounded-xl p-6 transition">
            <h3 className="font-bold text-violet-900 mb-2">Literary-Inspired</h3>
            <p className="text-violet-700 text-sm">Names from classic and modern literature</p>
          </Link>
        </div>
      </section>

      {/* Naming Philosophy */}
      <section className="mb-16 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Sibling Naming Philosophy</h2>
        <div className="space-y-4 text-gray-700">
          <p>
            Choosing names for siblings is both an art and a science. While you want names that sound good together,
            each child deserves their own distinct identity.
          </p>
          <p>
            Our curated combinations strike the perfect balance: names that complement each other without being
            too matchy, that share a common style or theme while remaining unique, and that will grow with your
            children from infancy through adulthood.
          </p>
        </div>
      </section>

      {/* Tips Section */}
      <section className="mb-16 bg-gray-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Tips for Choosing Sibling Names</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex items-start gap-3">
            <span className="text-2xl">🎯</span>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Consider Flow</h3>
              <p className="text-gray-600 text-sm">Say all your children's names together. Do they sound harmonious? Test different orders.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">⚖️</span>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Balance Popularity</h3>
              <p className="text-gray-600 text-sm">Mix popular and unique names, or keep them all at similar popularity levels.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">🎨</span>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Maintain Style Consistency</h3>
              <p className="text-gray-600 text-sm">If you choose a vintage name for your first child, consider staying in that era for siblings.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">👤</span>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Preserve Individuality</h3>
              <p className="text-gray-600 text-sm">Avoid names that are too similar or rhyme heavily. Each child should feel special.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">📏</span>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Think About Length</h3>
              <p className="text-gray-600 text-sm">Names of similar length often sound more balanced together.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">🔮</span>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Plan Ahead</h3>
              <p className="text-gray-600 text-sm">If you plan on more children, choose names that allow for future additions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="bg-white border-2 border-gray-200 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Resources</h2>
        <div className="grid md:grid-cols-4 gap-4">
          <Link href="/twin-names/" className="bg-pink-50 hover:bg-pink-100 rounded-lg p-4 text-center transition">
            <span className="font-medium text-pink-700">Twin Names →</span>
          </Link>
          <Link href="/middle-names/" className="bg-blue-50 hover:bg-blue-100 rounded-lg p-4 text-center transition">
            <span className="font-medium text-blue-700">Middle Names →</span>
          </Link>
          <Link href="/generator/" className="bg-purple-50 hover:bg-purple-100 rounded-lg p-4 text-center transition">
            <span className="font-medium text-purple-700">Name Generator →</span>
          </Link>
          <Link href="/compare/" className="bg-green-50 hover:bg-green-100 rounded-lg p-4 text-center transition">
            <span className="font-medium text-green-700">Compare Names →</span>
          </Link>
        </div>
      </section>
    </div>
  )
}

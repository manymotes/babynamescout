import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Twin Baby Names | Perfect Name Pairs for Twins',
  description: 'Find perfect name pairs for your twins. Browse coordinating names for boy/boy, girl/girl, and boy/girl twins that sound great together.',
  openGraph: {
    title: 'Twin Baby Names - Coordinating Name Pairs',
    description: 'Beautiful name combinations perfect for twins',
  },
}

export default function TwinNamesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero */}
      <div className="text-center mb-12">
        <span className="text-5xl mb-4 block">👶👶</span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Twin Baby Names
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover perfect name pairs for your twins. Find coordinating names that complement
          each other without being too matchy, giving each twin their own identity.
        </p>
      </div>

      {/* Naming Strategies */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Twin Naming Strategies</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
            <h3 className="font-bold text-blue-900 mb-2">Same Starting Letter</h3>
            <p className="text-blue-700 text-sm mb-3">
              Names that begin with the same letter: Emma & Ethan, Lily & Lucas, Mason & Madison.
            </p>
            <p className="text-blue-600 text-xs">Creates a subtle connection without being too obvious.</p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
            <h3 className="font-bold text-purple-900 mb-2">Same Length</h3>
            <p className="text-purple-700 text-sm mb-3">
              Names with the same number of letters or syllables: Alex & Ryan, Sophia & Nathan.
            </p>
            <p className="text-purple-600 text-xs">Balanced and harmonious without matching exactly.</p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
            <h3 className="font-bold text-green-900 mb-2">Same Origin</h3>
            <p className="text-green-700 text-sm mb-3">
              Names from the same cultural origin: Isabella & Leonardo, Ava & Liam (Irish).
            </p>
            <p className="text-green-600 text-xs">Honors shared heritage while maintaining individuality.</p>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-6">
            <h3 className="font-bold text-amber-900 mb-2">Complementary Meanings</h3>
            <p className="text-amber-700 text-sm mb-3">
              Names with related meanings: Luna (moon) & Stella (star), River & Ocean.
            </p>
            <p className="text-amber-600 text-xs">Meaningful connection through shared themes.</p>
          </div>

          <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-6">
            <h3 className="font-bold text-pink-900 mb-2">Similar Style</h3>
            <p className="text-pink-700 text-sm mb-3">
              Names with the same vibe: both vintage, both modern, both nature-inspired.
            </p>
            <p className="text-pink-600 text-xs">Cohesive without being identical.</p>
          </div>

          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-6">
            <h3 className="font-bold text-indigo-900 mb-2">Completely Different</h3>
            <p className="text-indigo-700 text-sm mb-3">
              Distinct names that celebrate each twin&apos;s individuality: Olivia & Charlotte.
            </p>
            <p className="text-indigo-600 text-xs">Emphasizes that each twin is unique.</p>
          </div>
        </div>
      </section>

      {/* Boy/Boy Twin Names */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-secondary-600 mb-6">Boy/Boy Twin Names</h2>
        <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-xl p-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-secondary-900 mb-3">Classic Pairs</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Oliver & Oscar</li>
                <li>• William & Benjamin</li>
                <li>• Alexander & Theodore</li>
                <li>• Henry & Harry</li>
                <li>• James & John</li>
                <li>• Samuel & Sebastian</li>
                <li>• Daniel & David</li>
                <li>• Matthew & Michael</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-secondary-900 mb-3">Modern Pairs</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Mason & Logan</li>
                <li>• Liam & Noah</li>
                <li>• Ethan & Evan</li>
                <li>• Aiden & Austin</li>
                <li>• Carter & Cooper</li>
                <li>• Jackson & Jaxon</li>
                <li>• Hunter & Hudson</li>
                <li>• Chase & Cole</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-secondary-900 mb-3">Unique Pairs</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Felix & Jasper</li>
                <li>• Atlas & Orion</li>
                <li>• River & Forest</li>
                <li>• Phoenix & Arrow</li>
                <li>• Finn & Flynn</li>
                <li>• Sage & Reed</li>
                <li>• Dash & Knox</li>
                <li>• Wolf & Bear</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Girl/Girl Twin Names */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-primary-600 mb-6">Girl/Girl Twin Names</h2>
        <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-primary-900 mb-3">Classic Pairs</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Emma & Ella</li>
                <li>• Olivia & Sophia</li>
                <li>• Isabella & Gabriella</li>
                <li>• Charlotte & Caroline</li>
                <li>• Grace & Faith</li>
                <li>• Rose & Lily</li>
                <li>• Anna & Ava</li>
                <li>• Elizabeth & Catherine</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-primary-900 mb-3">Modern Pairs</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Harper & Piper</li>
                <li>• Madison & Addison</li>
                <li>• Aria & Mia</li>
                <li>• Luna & Nova</li>
                <li>• Riley & Kylie</li>
                <li>• Chloe & Zoe</li>
                <li>• Paisley & Kinsley</li>
                <li>• Aubrey & Audrey</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-primary-900 mb-3">Unique Pairs</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Willow & Sage</li>
                <li>• Hazel & Violet</li>
                <li>• Luna & Stella</li>
                <li>• Ivy & Iris</li>
                <li>• Aurora & Celeste</li>
                <li>• Wren & Dove</li>
                <li>• Pearl & Ruby</li>
                <li>• Juniper & Clover</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Boy/Girl Twin Names */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-purple-600 mb-6">Boy/Girl Twin Names</h2>
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-purple-900 mb-3">Classic Pairs</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• William & Elizabeth</li>
                <li>• Oliver & Olivia</li>
                <li>• Alexander & Alexandra</li>
                <li>• Benjamin & Abigail</li>
                <li>• Henry & Eleanor</li>
                <li>• James & Jane</li>
                <li>• Samuel & Sarah</li>
                <li>• Daniel & Emily</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-purple-900 mb-3">Modern Pairs</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Liam & Emma</li>
                <li>• Noah & Ava</li>
                <li>• Ethan & Sophia</li>
                <li>• Mason & Madison</li>
                <li>• Logan & Luna</li>
                <li>• Jackson & Harper</li>
                <li>• Carter & Charlotte</li>
                <li>• Hudson & Hazel</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-purple-900 mb-3">Unique Pairs</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• River & Willow</li>
                <li>• Phoenix & Aurora</li>
                <li>• Atlas & Luna</li>
                <li>• Fox & Sage</li>
                <li>• Rowan & Hazel</li>
                <li>• Kai & Isla</li>
                <li>• Finn & Wren</li>
                <li>• Grey & Violet</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="mb-16 bg-blue-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Tips for Naming Twins</h2>
        <div className="space-y-4 text-gray-600">
          <div className="flex items-start gap-3">
            <span className="text-2xl">👤</span>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Celebrate Individuality</h3>
              <p>While coordination is nice, remember each twin is their own person. Avoid names that are too matchy (like Anna & Hannah or matching rhymes).</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">📝</span>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Test Both Names Together</h3>
              <p>Say both names out loud repeatedly. Do they sound good together? Is one significantly harder to pronounce than the other?</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">⚖️</span>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Balance Popularity</h3>
              <p>If one name is very popular, consider whether the other should also be popular or more unique to balance attention.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">🎭</span>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Think Long-Term</h3>
              <p>Consider how the names will work when your twins are adults, not just as babies. Will they still sound good together?</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">🔤</span>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Check Initials</h3>
              <p>Make sure the initials don&apos;t create unfortunate combinations, especially if you have the same last name.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Avoid */}
      <section className="mb-16 bg-amber-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Avoid When Naming Twins</h2>
        <ul className="space-y-3 text-gray-600">
          <li className="flex items-start gap-2">
            <span className="text-amber-600">⚠️</span>
            <span><strong>Rhyming names:</strong> Madison & Addison, Hayden & Brayden - can be confusing</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600">⚠️</span>
            <span><strong>Too-similar sounds:</strong> Mary & Carrie, Dennis & Denise - easily mixed up</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600">⚠️</span>
            <span><strong>Theme names:</strong> Romeo & Juliet, Heaven & Nevaeh - can feel gimmicky</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600">⚠️</span>
            <span><strong>Drastically different styles:</strong> Nevaeh & Elizabeth - one twin may feel their name is &quot;less than&quot;</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600">⚠️</span>
            <span><strong>One common, one very unusual:</strong> Can create feelings of favoritism or unfairness</span>
          </li>
        </ul>
      </section>

      {/* Related Links */}
      <section className="bg-gray-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore More Names</h2>
        <div className="grid md:grid-cols-4 gap-4">
          <Link href="/names/girl/" className="bg-white hover:bg-primary-50 border rounded-lg p-4 text-center transition">
            <span className="font-medium text-primary-600">Girl Names →</span>
          </Link>
          <Link href="/names/boy/" className="bg-white hover:bg-secondary-50 border rounded-lg p-4 text-center transition">
            <span className="font-medium text-secondary-600">Boy Names →</span>
          </Link>
          <Link href="/unisex/" className="bg-white hover:bg-purple-50 border rounded-lg p-4 text-center transition">
            <span className="font-medium text-purple-600">Unisex Names →</span>
          </Link>
          <Link href="/generator/" className="bg-white hover:bg-blue-50 border rounded-lg p-4 text-center transition">
            <span className="font-medium text-blue-600">Name Generator →</span>
          </Link>
        </div>
      </section>
    </div>
  )
}

'use client'

import Link from 'next/link'
import { useState } from 'react'

interface NamePair {
  name1: string
  name2: string
  reason: string
  rhymeType: string
}

const namePairs: NamePair[] = [
  { name1: "Aiden", name2: "Brayden", reason: "-ayden ending creates perfect rhyme", rhymeType: "Perfect Rhyme" },
  { name1: "Kayden", name2: "Jayden", reason: "Popular -ayden names with different starting sounds", rhymeType: "Perfect Rhyme" },
  { name1: "Mason", name2: "Jason", reason: "Classic -ason rhyming pair", rhymeType: "Perfect Rhyme" },
  { name1: "Emma", name2: "Gemma", reason: "-emma ending with distinct beginnings", rhymeType: "Perfect Rhyme" },
  { name1: "Bella", name2: "Stella", reason: "-ella names with vintage appeal", rhymeType: "Perfect Rhyme" },
  { name1: "Ella", name2: "Bella", reason: "Short, sweet -ella rhyme", rhymeType: "Perfect Rhyme" },
  { name1: "Nora", name2: "Cora", reason: "-ora ending, vintage charm", rhymeType: "Perfect Rhyme" },
  { name1: "Anna", name2: "Hannah", reason: "Palindrome names with -anna sound", rhymeType: "Near Rhyme" },
  { name1: "Liam", name2: "William", reason: "Short form rhymes with full name", rhymeType: "Near Rhyme" },
  { name1: "Mia", name2: "Lia", reason: "Short -ia rhyming names", rhymeType: "Perfect Rhyme" },
  { name1: "Zoe", name2: "Chloe", reason: "-oe ending with Greek origins", rhymeType: "Perfect Rhyme" },
  { name1: "Brayden", name2: "Grayson", reason: "Similar -ay- sounds with modern feel", rhymeType: "Near Rhyme" },
  { name1: "Riley", name2: "Kylie", reason: "-iley/-ylie rhyming patterns", rhymeType: "Perfect Rhyme" },
  { name1: "Hailey", name2: "Bailey", reason: "Popular -ailey names", rhymeType: "Perfect Rhyme" },
  { name1: "Addison", name2: "Madison", reason: "Trendy -ison/-adison names", rhymeType: "Near Rhyme" },
  { name1: "Peyton", name2: "Clayton", reason: "-ayton/-ton rhyme with different vibes", rhymeType: "Near Rhyme" },
  { name1: "Sawyer", name2: "Taylor", reason: "Surname names with -er/-or endings", rhymeType: "Near Rhyme" },
  { name1: "Carter", name2: "Harper", reason: "Occupational -er names", rhymeType: "Perfect Rhyme" },
  { name1: "Parker", name2: "Tucker", reason: "-er ending surname names", rhymeType: "Perfect Rhyme" },
  { name1: "Piper", name2: "Skyler", reason: "-er ending with different syllable counts", rhymeType: "Perfect Rhyme" },
  { name1: "Cole", name2: "Joel", reason: "-ole/-oel one-syllable rhyme", rhymeType: "Perfect Rhyme" },
  { name1: "Kate", name2: "Tate", reason: "Short -ate names", rhymeType: "Perfect Rhyme" },
  { name1: "Blake", name2: "Jake", reason: "One-syllable -ake rhyme", rhymeType: "Perfect Rhyme" },
  { name1: "Chase", name2: "Grace", reason: "-ace ending with different feels", rhymeType: "Perfect Rhyme" },
  { name1: "Brynn", name2: "Quinn", reason: "Short -ynn/-inn names", rhymeType: "Perfect Rhyme" },
  { name1: "Finn", name2: "Wynn", reason: "Celtic-inspired -inn names", rhymeType: "Perfect Rhyme" },
  { name1: "Sage", name2: "Paige", reason: "-age ending with nature/virtue feel", rhymeType: "Perfect Rhyme" },
  { name1: "Rose", name2: "Jos", reason: "Short -ose rhyme", rhymeType: "Perfect Rhyme" },
  { name1: "May", name2: "Fay", reason: "Vintage one-syllable -ay names", rhymeType: "Perfect Rhyme" },
  { name1: "Ray", name2: "Jay", reason: "Short -ay names for boys", rhymeType: "Perfect Rhyme" },
  { name1: "Mila", name2: "Lila", reason: "-ila ending with soft sounds", rhymeType: "Perfect Rhyme" },
  { name1: "Isla", name2: "Layla", reason: "Similar -la sounds", rhymeType: "Near Rhyme" },
  { name1: "Luna", name2: "Juna", reason: "-una celestial rhyme", rhymeType: "Perfect Rhyme" },
  { name1: "Ava", name2: "Eva", reason: "Nearly identical with pronunciation difference", rhymeType: "Near Rhyme" },
  { name1: "Levi", name2: "Remy", reason: "-evi/-emy ending sounds", rhymeType: "Near Rhyme" },
  { name1: "Eli", name2: "Ellie", reason: "Similar -li/-lie sounds", rhymeType: "Perfect Rhyme" },
  { name1: "Henry", name2: "Emery", reason: "-ry ending with vintage feel", rhymeType: "Perfect Rhyme" },
  { name1: "Avery", name2: "Emery", reason: "-ery ending unisex names", rhymeType: "Perfect Rhyme" },
  { name1: "Dakota", name2: "Kota", reason: "Full name and short form", rhymeType: "Near Rhyme" },
  { name1: "Luca", name2: "Luka", reason: "Spelling variations of same sound", rhymeType: "Perfect Rhyme" },
  { name1: "Roman", name2: "Rowan", reason: "Ro- beginning with -an/-wan endings", rhymeType: "Near Rhyme" },
  { name1: "Asher", name2: "Fisher", reason: "-sher ending names", rhymeType: "Perfect Rhyme" },
  { name1: "Jasper", name2: "Casper", reason: "-asper perfect rhyme", rhymeType: "Perfect Rhyme" },
  { name1: "Violet", name2: "Juliet", reason: "-et ending with romance", rhymeType: "Perfect Rhyme" },
  { name1: "Charlotte", name2: "Scarlett", reason: "-lotte/-lett feminine rhyme", rhymeType: "Near Rhyme" },
  { name1: "Willow", name2: "Marlowe", reason: "-low/-lowe nature-inspired", rhymeType: "Perfect Rhyme" },
  { name1: "Theo", name2: "Leo", reason: "Short -eo rhyme", rhymeType: "Perfect Rhyme" },
  { name1: "Milo", name2: "Shilo", reason: "-ilo ending rhyme", rhymeType: "Perfect Rhyme" },
  { name1: "Nico", name2: "Rico", reason: "-ico ending names", rhymeType: "Perfect Rhyme" },
  { name1: "Marco", name2: "Arlo", reason: "-rco/-rlo similar endings", rhymeType: "Near Rhyme" },
]

export default function RhymingNamesPage() {
  const [favorites, setFavorites] = useState<Set<string>>(new Set())
  const [filterType, setFilterType] = useState<string>('All')

  const types = ['All', 'Perfect Rhyme', 'Near Rhyme']

  const filteredPairs = filterType === 'All'
    ? namePairs
    : namePairs.filter(p => p.rhymeType === filterType)

  const toggleFavorite = (name1: string, name2: string) => {
    const key = `${name1}-${name2}`
    const newFavorites = new Set(favorites)
    if (newFavorites.has(key)) {
      newFavorites.delete(key)
    } else {
      newFavorites.add(key)
    }
    setFavorites(newFavorites)
  }

  const isFavorite = (name1: string, name2: string) => {
    return favorites.has(`${name1}-${name2}`)
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero */}
      <div className="text-center mb-12">
        <Link href="/sibling-names/" className="text-purple-600 hover:text-purple-700 text-sm font-medium mb-4 inline-block">
          ← Back to Sibling Names
        </Link>
        <span className="text-5xl mb-4 block">🎵</span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Rhyming Sibling Names
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {namePairs.length} rhyming sibling name combinations. These names share similar sounds and endings
          for a playful, melodic pairing. Use with caution for a cute but not too matchy feel.
        </p>
      </div>

      {/* Filter */}
      <div className="mb-8 flex flex-wrap gap-2 justify-center">
        {types.map(type => (
          <button
            key={type}
            onClick={() => setFilterType(type)}
            className={`px-4 py-2 rounded-full font-medium transition ${
              filterType === type
                ? 'bg-purple-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Favorites Counter */}
      {favorites.size > 0 && (
        <div className="mb-8 text-center">
          <div className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full">
            ❤️ {favorites.size} {favorites.size === 1 ? 'favorite' : 'favorites'} saved
          </div>
        </div>
      )}

      {/* Name Pairs Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {filteredPairs.map((pair, index) => (
          <div
            key={index}
            className={`bg-white border-2 rounded-xl p-6 transition ${
              isFavorite(pair.name1, pair.name2)
                ? 'border-purple-400 bg-purple-50'
                : 'border-gray-200 hover:border-purple-300'
            }`}
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl font-bold text-purple-600">{pair.name1}</span>
                  <span className="text-gray-400">&</span>
                  <span className="text-2xl font-bold text-purple-600">{pair.name2}</span>
                </div>
                <span className="inline-block text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">
                  {pair.rhymeType}
                </span>
              </div>
              <button
                onClick={() => toggleFavorite(pair.name1, pair.name2)}
                className="text-2xl hover:scale-110 transition"
              >
                {isFavorite(pair.name1, pair.name2) ? '❤️' : '🤍'}
              </button>
            </div>
            <p className="text-gray-600 text-sm">{pair.reason}</p>
          </div>
        ))}
      </div>

      {/* Warning Section */}
      <section className="mb-12 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-8 border-2 border-amber-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <span>⚠️</span> A Word of Caution About Rhyming Names
        </h2>
        <div className="space-y-3 text-gray-700">
          <p>
            While rhyming names can be cute and playful, they're one of the more controversial sibling naming
            choices. Many experts advise against them because they can:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Make it difficult for children to establish individual identities</li>
            <li>Cause confusion when names are called out loud</li>
            <li>Feel overly "matchy" as children grow into adults</li>
            <li>Lead to teasing or feeling like a "set" rather than individuals</li>
          </ul>
          <p>
            If you love rhyming names, consider using them with these guidelines:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Choose near-rhymes rather than perfect rhymes (Roman and Rowan vs. Mason and Jason)</li>
            <li>Make sure the names have distinctly different beginnings</li>
            <li>Ensure each name sounds strong on its own</li>
            <li>Consider how they'll sound in professional settings</li>
          </ul>
        </div>
      </section>

      {/* Why Some Work */}
      <section className="mb-12 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">When Rhyming Names Can Work</h2>
        <div className="space-y-3 text-gray-700">
          <p>
            Despite the cautions, some rhyming combinations work beautifully. The key is subtlety and
            ensuring each name maintains its own identity.
          </p>
          <p>
            Near-rhymes like Charlotte and Scarlett share an ending sound but have completely different feels.
            Similarly, names like Grace and Chase rhyme but have distinct personalities.
          </p>
          <p>
            If you're set on rhyming names, test them out loud extensively. Say them together, separately,
            with your last name, and imagine them in various life scenarios before committing.
          </p>
        </div>
      </section>

      {/* Related Links */}
      <section className="bg-gray-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore Safer Alternatives</h2>
        <div className="grid md:grid-cols-4 gap-4">
          <Link href="/sibling-names/matching-first-letters/" className="bg-white hover:bg-blue-50 border rounded-lg p-4 text-center transition">
            <span className="font-medium text-blue-600">Same Letter →</span>
          </Link>
          <Link href="/sibling-names/same-origin/" className="bg-white hover:bg-green-50 border rounded-lg p-4 text-center transition">
            <span className="font-medium text-green-600">Same Origin →</span>
          </Link>
          <Link href="/sibling-names/same-meaning/" className="bg-white hover:bg-indigo-50 border rounded-lg p-4 text-center transition">
            <span className="font-medium text-indigo-600">Same Meaning →</span>
          </Link>
          <Link href="/sibling-names/avoid-mistakes/" className="bg-white hover:bg-amber-50 border rounded-lg p-4 text-center transition">
            <span className="font-medium text-amber-600">Naming Mistakes →</span>
          </Link>
        </div>
      </section>
    </div>
  )
}

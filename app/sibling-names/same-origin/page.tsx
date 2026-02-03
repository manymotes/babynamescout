'use client'

import Link from 'next/link'
import { useState } from 'react'

interface NamePair {
  name1: string
  name2: string
  origin: string
  reason: string
}

const namePairs: NamePair[] = [
  // Irish/Celtic
  { name1: "Aiden", name2: "Fiona", origin: "Irish", reason: "Classic Irish names with warm, friendly feel" },
  { name1: "Connor", name2: "Maeve", origin: "Irish", reason: "Strong Irish heritage with royal connections" },
  { name1: "Declan", name2: "Nora", origin: "Irish", reason: "Traditional Irish names with modern appeal" },
  { name1: "Finn", name2: "Isla", origin: "Celtic", reason: "Breezy Celtic names with island charm" },
  { name1: "Rowan", name2: "Brynn", origin: "Celtic", reason: "Nature-inspired Celtic names" },

  // Hebrew/Biblical
  { name1: "Jacob", name2: "Rachel", origin: "Hebrew", reason: "Biblical couple from the same story" },
  { name1: "Isaac", name2: "Rebecca", origin: "Hebrew", reason: "Connected biblical figures" },
  { name1: "Elijah", name2: "Naomi", origin: "Hebrew", reason: "Biblical names with gentle sophistication" },
  { name1: "Samuel", name2: "Hannah", origin: "Hebrew", reason: "Mother and son from biblical narrative" },
  { name1: "Daniel", name2: "Leah", origin: "Hebrew", reason: "Classic Hebrew names with enduring appeal" },

  // Greek
  { name1: "Alexander", name2: "Sophia", origin: "Greek", reason: "Grand Greek names with philosophical roots" },
  { name1: "Theodore", name2: "Chloe", origin: "Greek", reason: "Greek names meaning God's gift and blooming" },
  { name1: "Nicholas", name2: "Penelope", origin: "Greek", reason: "Classic Greek names with mythological ties" },
  { name1: "Philip", name2: "Daphne", origin: "Greek", reason: "Greek names with nature and nobility" },
  { name1: "Christopher", name2: "Athena", origin: "Greek", reason: "Greek names with strength and wisdom" },

  // Latin/Roman
  { name1: "Julian", name2: "Julia", origin: "Latin", reason: "Roman family names in masculine and feminine" },
  { name1: "Marcus", name2: "Lucia", origin: "Latin", reason: "Strong Roman names with meaning" },
  { name1: "Vincent", name2: "Vivienne", origin: "Latin", reason: "Latin names both meaning to live/conquer" },
  { name1: "Adrian", name2: "Adriana", origin: "Latin", reason: "Roman names with elegant symmetry" },
  { name1: "Felix", name2: "Beatrice", origin: "Latin", reason: "Latin names meaning happy and blessed" },

  // Italian
  { name1: "Marco", name2: "Lucia", origin: "Italian", reason: "Classic Italian names with warmth" },
  { name1: "Enzo", name2: "Elena", origin: "Italian", reason: "Modern Italian favorites" },
  { name1: "Leonardo", name2: "Francesca", origin: "Italian", reason: "Artistic Italian names with history" },
  { name1: "Matteo", name2: "Isabella", origin: "Italian", reason: "Romantic Italian names" },
  { name1: "Giovanni", name2: "Gianna", origin: "Italian", reason: "Italian forms of John and Jane" },

  // Spanish
  { name1: "Diego", name2: "Sofia", origin: "Spanish", reason: "Spanish names with international appeal" },
  { name1: "Santiago", name2: "Valentina", origin: "Spanish", reason: "Romantic Spanish names" },
  { name1: "Carlos", name2: "Carmen", origin: "Spanish", reason: "Traditional Spanish names" },
  { name1: "Rafael", name2: "Rosa", origin: "Spanish", reason: "Spanish names with artistic flair" },
  { name1: "Xavier", name2: "Ximena", origin: "Spanish", reason: "Distinctive Spanish X-names" },

  // French
  { name1: "Louis", name2: "Louise", origin: "French", reason: "Royal French names in both forms" },
  { name1: "Henri", name2: "Margot", origin: "French", reason: "Chic French names with style" },
  { name1: "Jules", name2: "Josephine", origin: "French", reason: "Vintage French names" },
  { name1: "Laurent", name2: "Colette", origin: "French", reason: "Classic French names with elegance" },
  { name1: "Antoine", name2: "Genevieve", origin: "French", reason: "Sophisticated French names" },

  // German
  { name1: "Otto", name2: "Frieda", origin: "German", reason: "Vintage German names making comeback" },
  { name1: "Felix", name2: "Greta", origin: "German", reason: "German names with international appeal" },
  { name1: "August", name2: "Liesel", origin: "German", reason: "Germanic names with charm" },
  { name1: "Karl", name2: "Ingrid", origin: "German", reason: "Strong German heritage names" },
  { name1: "Bruno", name2: "Heidi", origin: "German", reason: "Classic German names" },

  // English
  { name1: "William", name2: "Charlotte", origin: "English", reason: "Royal British names with tradition" },
  { name1: "Henry", name2: "Alice", origin: "English", reason: "English names with literary connections" },
  { name1: "James", name2: "Rose", origin: "English", reason: "Classic simple English names" },
  { name1: "George", name2: "Grace", origin: "English", reason: "Traditional English names" },
  { name1: "Edward", name2: "Eleanor", origin: "English", reason: "Royal English names" },

  // Scottish
  { name1: "Callum", name2: "Isla", origin: "Scottish", reason: "Modern Scottish favorites" },
  { name1: "Duncan", name2: "Fiona", origin: "Scottish", reason: "Traditional Scottish names" },
  { name1: "Lachlan", name2: "Eilidh", origin: "Scottish", reason: "Authentic Scottish names" },
  { name1: "Fraser", name2: "Blair", origin: "Scottish", reason: "Scottish surname names" },
  { name1: "Malcolm", name2: "Moira", origin: "Scottish", reason: "Classic Scottish heritage" },

  // Arabic
  { name1: "Omar", name2: "Layla", origin: "Arabic", reason: "Popular Arabic names with poetic meaning" },
  { name1: "Amir", name2: "Amira", origin: "Arabic", reason: "Arabic names meaning prince and princess" },
  { name1: "Zayn", name2: "Zara", origin: "Arabic", reason: "Modern Arabic names" },
  { name1: "Ali", name2: "Aaliyah", origin: "Arabic", reason: "Arabic names meaning elevated" },
  { name1: "Hassan", name2: "Jasmine", origin: "Arabic", reason: "Arabic names with beauty" },
]

export default function SameOriginPage() {
  const [favorites, setFavorites] = useState<Set<string>>(new Set())
  const [filterOrigin, setFilterOrigin] = useState<string>('All')

  const origins = ['All', ...Array.from(new Set(namePairs.map(p => p.origin))).sort()]

  const filteredPairs = filterOrigin === 'All'
    ? namePairs
    : namePairs.filter(p => p.origin === filterOrigin)

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
        <Link href="/sibling-names/" className="text-green-600 hover:text-green-700 text-sm font-medium mb-4 inline-block">
          ← Back to Sibling Names
        </Link>
        <span className="text-5xl mb-4 block">🌍</span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Sibling Names from the Same Origin
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {namePairs.length} sibling name combinations that share cultural heritage. Honor your family's
          roots or celebrate a culture you love with names from the same origin.
        </p>
      </div>

      {/* Filter */}
      <div className="mb-8 flex flex-wrap gap-2 justify-center">
        {origins.map(origin => (
          <button
            key={origin}
            onClick={() => setFilterOrigin(origin)}
            className={`px-4 py-2 rounded-full font-medium transition ${
              filterOrigin === origin
                ? 'bg-green-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {origin}
          </button>
        ))}
      </div>

      {/* Favorites Counter */}
      {favorites.size > 0 && (
        <div className="mb-8 text-center">
          <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full">
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
                ? 'border-green-400 bg-green-50'
                : 'border-gray-200 hover:border-green-300'
            }`}
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl font-bold text-green-600">{pair.name1}</span>
                  <span className="text-gray-400">&</span>
                  <span className="text-2xl font-bold text-green-600">{pair.name2}</span>
                </div>
                <span className="inline-block text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                  {pair.origin}
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

      {/* Why These Work */}
      <section className="mb-12 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Same-Origin Names Work Beautifully</h2>
        <div className="space-y-3 text-gray-700">
          <p>
            Choosing sibling names from the same cultural origin is one of the most natural ways to create
            cohesion while maintaining individuality. Names from the same culture tend to share similar
            sounds, rhythms, and feels without being overly matchy.
          </p>
          <p>
            This approach is especially meaningful for families wanting to honor their heritage. Whether you're
            choosing Irish names to celebrate your ancestry or Italian names because you love the culture,
            shared origin creates an authentic connection.
          </p>
          <p>
            Names from the same origin also tend to age well together. They'll feel balanced whether your
            children are toddlers or adults, as they share the same cultural context and historical weight.
          </p>
        </div>
      </section>

      {/* Related Links */}
      <section className="bg-gray-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore More Naming Themes</h2>
        <div className="grid md:grid-cols-4 gap-4">
          <Link href="/sibling-names/same-meaning/" className="bg-white hover:bg-indigo-50 border rounded-lg p-4 text-center transition">
            <span className="font-medium text-indigo-600">Same Meaning →</span>
          </Link>
          <Link href="/sibling-names/biblical-siblings/" className="bg-white hover:bg-rose-50 border rounded-lg p-4 text-center transition">
            <span className="font-medium text-rose-600">Biblical Names →</span>
          </Link>
          <Link href="/sibling-names/vintage-pairs/" className="bg-white hover:bg-amber-50 border rounded-lg p-4 text-center transition">
            <span className="font-medium text-amber-600">Vintage Pairs →</span>
          </Link>
          <Link href="/sibling-names/modern-pairs/" className="bg-white hover:bg-cyan-50 border rounded-lg p-4 text-center transition">
            <span className="font-medium text-cyan-600">Modern Pairs →</span>
          </Link>
        </div>
      </section>
    </div>
  )
}

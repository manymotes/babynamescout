'use client'

import Link from 'next/link'
import { useState } from 'react'

interface NameSet {
  names: string[]
  reason: string
  style: string
}

const nameSets: NameSet[] = [
  { names: ["Oliver", "Charlotte", "Henry"], reason: "Classic British royal names with timeless charm", style: "Royal" },
  { names: ["Emma", "Liam", "Ava"], reason: "Top trending names that flow beautifully together", style: "Modern" },
  { names: ["Benjamin", "Eleanor", "Theodore"], reason: "Vintage names with sophisticated nicknames", style: "Vintage" },
  { names: ["Grace", "Faith", "Hope"], reason: "Classic virtue names with spiritual meaning", style: "Virtue" },
  { names: ["Lily", "Rose", "Violet"], reason: "Beautiful flower names with feminine charm", style: "Nature" },
  { names: ["Jacob", "Joshua", "Joseph"], reason: "Biblical J-names with strong heritage", style: "Biblical" },
  { names: ["Alexander", "Isabella", "Sebastian"], reason: "Grand classical names with romantic flow", style: "Classic" },
  { names: ["Mason", "Harper", "Carter"], reason: "Modern surname names with contemporary appeal", style: "Modern" },
  { names: ["Sophia", "Lucas", "Mia"], reason: "International favorites with soft sounds", style: "Modern" },
  { names: ["William", "Elizabeth", "James"], reason: "Timeless royal names that never go out of style", style: "Royal" },
  { names: ["Samuel", "Abigail", "Hannah"], reason: "Biblical names with gentle, classic appeal", style: "Biblical" },
  { names: ["Felix", "Hazel", "Jasper"], reason: "Vintage gems with quirky charm", style: "Vintage" },
  { names: ["River", "Willow", "Sage"], reason: "Nature names with peaceful, earthy vibes", style: "Nature" },
  { names: ["Finn", "Isla", "Maeve"], reason: "Celtic names with breezy, romantic feel", style: "Celtic" },
  { names: ["Noah", "Emma", "Ethan"], reason: "Perfect balance of popular and timeless", style: "Modern" },
  { names: ["Luna", "Leo", "Stella"], reason: "Celestial names with cosmic connection", style: "Modern" },
  { names: ["Elijah", "Naomi", "Caleb"], reason: "Biblical names with modern popularity", style: "Biblical" },
  { names: ["Arthur", "Pearl", "Oscar"], reason: "Turn-of-century names making comeback", style: "Vintage" },
  { names: ["Aurora", "Phoenix", "Atlas"], reason: "Mythological names with grand presence", style: "Modern" },
  { names: ["Daniel", "Sarah", "Matthew"], reason: "Classic biblical names, simple and strong", style: "Biblical" },
  { names: ["Cooper", "Piper", "Parker"], reason: "Occupational surname names with energy", style: "Modern" },
  { names: ["Amelia", "Owen", "Claire"], reason: "Elegant mix of vintage and modern", style: "Classic" },
  { names: ["Ivy", "Holly", "Poppy"], reason: "Botanical names with vintage charm", style: "Nature" },
  { names: ["Logan", "Madison", "Riley"], reason: "Unisex-leaning modern favorites", style: "Modern" },
  { names: ["Gabriel", "Gabriella", "Michael"], reason: "Angelic names with biblical roots", style: "Biblical" },
  { names: ["Alice", "Edmund", "Lucy"], reason: "Literary names from Narnia with British charm", style: "Literary" },
  { names: ["Atticus", "Scout", "Harper"], reason: "Literary names honoring great authors", style: "Literary" },
  { names: ["George", "Charlotte", "Louis"], reason: "Current British royal siblings", style: "Royal" },
  { names: ["Nora", "Cora", "Dora"], reason: "-ora ending vintage names", style: "Vintage" },
  { names: ["Jack", "Max", "Rex"], reason: "Short, punchy one-syllable names", style: "Modern" },
  { names: ["Isabella", "Sophia", "Olivia"], reason: "Flowing -ia ending feminine names", style: "Classic" },
  { names: ["Aiden", "Connor", "Declan"], reason: "Irish names with strong cultural identity", style: "Celtic" },
  { names: ["Daisy", "Iris", "Hazel"], reason: "Vintage floral and nature names", style: "Nature" },
  { names: ["Miles", "Chloe", "Zoe"], reason: "Modern classics with international flair", style: "Modern" },
  { names: ["Julian", "Julia", "Julius"], reason: "Roman family names with shared heritage", style: "Classic" },
  { names: ["Silas", "Ezra", "Asher"], reason: "Biblical names with vintage cool", style: "Biblical" },
  { names: ["Scarlett", "Wyatt", "Sawyer"], reason: "Southern and Western charm combined", style: "Modern" },
  { names: ["Penelope", "Theodore", "Josephine"], reason: "Long vintage names with nickname potential", style: "Vintage" },
  { names: ["Milo", "Nico", "Leo"], reason: "Short -o ending international names", style: "Modern" },
  { names: ["Freya", "Thea", "Daphne"], reason: "Greek and Norse goddess names", style: "Classic" },
  { names: ["Xavier", "Ximena", "Xander"], reason: "Bold X-names with modern edge", style: "Modern" },
  { names: ["Isaac", "Rebecca", "Rachel"], reason: "Connected biblical figures", style: "Biblical" },
  { names: ["Autumn", "River", "Forest"], reason: "Nature names with different elements", style: "Nature" },
  { names: ["Blake", "Quinn", "Sage"], reason: "Unisex names with modern sophistication", style: "Modern" },
  { names: ["Catherine", "Caroline", "Charlotte"], reason: "Classic C-names with royal heritage", style: "Royal" },
  { names: ["Enzo", "Elena", "Lucia"], reason: "Italian names with melodic flow", style: "Modern" },
  { names: ["Grayson", "Addison", "Madison"], reason: "-son ending trendy names", style: "Modern" },
  { names: ["Violet", "Ruby", "Pearl"], reason: "Vintage gem and color names", style: "Vintage" },
  { names: ["Rowan", "Ash", "Briar"], reason: "Botanical names with earthy feel", style: "Nature" },
  { names: ["Mateo", "Sofia", "Valentina"], reason: "Spanish names with romantic appeal", style: "Modern" },
]

export default function ThreeKidsPage() {
  const [favorites, setFavorites] = useState<Set<string>>(new Set())
  const [filterStyle, setFilterStyle] = useState<string>('All')

  const styles = ['All', ...Array.from(new Set(nameSets.map(s => s.style)))]

  const filteredSets = filterStyle === 'All'
    ? nameSets
    : nameSets.filter(s => s.style === filterStyle)

  const toggleFavorite = (names: string[]) => {
    const key = names.join('-')
    const newFavorites = new Set(favorites)
    if (newFavorites.has(key)) {
      newFavorites.delete(key)
    } else {
      newFavorites.add(key)
    }
    setFavorites(newFavorites)
  }

  const isFavorite = (names: string[]) => {
    return favorites.has(names.join('-'))
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero */}
      <div className="text-center mb-12">
        <Link href="/sibling-names/" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium mb-4 inline-block">
          ← Back to Sibling Names
        </Link>
        <span className="text-5xl mb-4 block">👧👦👧</span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Names for Three Kids
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {nameSets.length} coordinated name sets for families with three children. These combinations
          create harmony while preserving each child's individual identity.
        </p>
      </div>

      {/* Filter */}
      <div className="mb-8 flex flex-wrap gap-2 justify-center">
        {styles.map(style => (
          <button
            key={style}
            onClick={() => setFilterStyle(style)}
            className={`px-4 py-2 rounded-full font-medium transition ${
              filterStyle === style
                ? 'bg-emerald-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {style}
          </button>
        ))}
      </div>

      {/* Favorites Counter */}
      {favorites.size > 0 && (
        <div className="mb-8 text-center">
          <div className="inline-block bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full">
            ❤️ {favorites.size} {favorites.size === 1 ? 'favorite' : 'favorites'} saved
          </div>
        </div>
      )}

      {/* Name Sets Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {filteredSets.map((set, index) => (
          <div
            key={index}
            className={`bg-white border-2 rounded-xl p-6 transition ${
              isFavorite(set.names)
                ? 'border-emerald-400 bg-emerald-50'
                : 'border-gray-200 hover:border-emerald-300'
            }`}
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex-1">
                <div className="mb-2">
                  {set.names.map((name, i) => (
                    <span key={i} className="text-lg font-bold text-emerald-600">
                      {name}{i < set.names.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                </div>
                <span className="inline-block text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded">
                  {set.style}
                </span>
              </div>
              <button
                onClick={() => toggleFavorite(set.names)}
                className="text-2xl hover:scale-110 transition"
              >
                {isFavorite(set.names) ? '❤️' : '🤍'}
              </button>
            </div>
            <p className="text-gray-600 text-sm">{set.reason}</p>
          </div>
        ))}
      </div>

      {/* Why These Work */}
      <section className="mb-12 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Naming Three Children: Creating Balance</h2>
        <div className="space-y-3 text-gray-700">
          <p>
            With three children, you have more flexibility to create interesting patterns and themes while
            still maintaining individuality. The key is ensuring all three names work together without any
            one feeling out of place.
          </p>
          <p>
            Consider how the names sound in different combinations: Child 1 and 2, Child 1 and 3, Child 2 and 3,
            and all three together. Each pairing should feel natural.
          </p>
          <p>
            Three is also a good number for subtle themes. You can have three flower names, three biblical names,
            or three vintage names without it feeling too gimmicky.
          </p>
        </div>
      </section>

      {/* Related Links */}
      <section className="bg-gray-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore More Combinations</h2>
        <div className="grid md:grid-cols-4 gap-4">
          <Link href="/sibling-names/four-kids/" className="bg-white hover:bg-teal-50 border rounded-lg p-4 text-center transition">
            <span className="font-medium text-teal-600">Four Kids →</span>
          </Link>
          <Link href="/sibling-names/two-brothers/" className="bg-white hover:bg-blue-50 border rounded-lg p-4 text-center transition">
            <span className="font-medium text-blue-600">Two Brothers →</span>
          </Link>
          <Link href="/sibling-names/two-sisters/" className="bg-white hover:bg-pink-50 border rounded-lg p-4 text-center transition">
            <span className="font-medium text-pink-600">Two Sisters →</span>
          </Link>
          <Link href="/sibling-names/same-origin/" className="bg-white hover:bg-green-50 border rounded-lg p-4 text-center transition">
            <span className="font-medium text-green-600">Same Origin →</span>
          </Link>
        </div>
      </section>
    </div>
  )
}

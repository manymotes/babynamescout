'use client'

import Link from 'next/link'
import { useState } from 'react'

interface NamePair {
  names: string[]
  style: string
  vibe: string
}

const modernPairs: NamePair[] = [
  { names: ["Aiden", "Madison"], style: "Trendy surname-style names", vibe: "Contemporary" },
  { names: ["Harper", "Mason"], style: "Unisex occupational names", vibe: "Modern" },
  { names: ["Aria", "Asher"], style: "Musical and blessed meanings", vibe: "Artistic" },
  { names: ["Luna", "Leo"], style: "Celestial names with Latin roots", vibe: "Cosmic" },
  { names: ["Zara", "Zane"], style: "Z-names with edgy appeal", vibe: "Bold" },
  { names: ["Nova", "Knox"], style: "Strong single-syllable feel", vibe: "Powerful" },
  { names: ["Kai", "Kaia"], style: "Short Hawaiian-inspired names", vibe: "Breezy" },
  { names: ["Axel", "Ivy"], style: "Rock and nature combo", vibe: "Edgy" },
  { names: ["Phoenix", "Skylar"], style: "Nature meets sky", vibe: "Free-spirited" },
  { names: ["Jaxon", "Paisley"], style: "Modern spelling variations", vibe: "Trendy" },
  { names: ["River", "Rain"], style: "Water-themed nature names", vibe: "Flowing" },
  { names: ["Atlas", "Aurora"], style: "Mythological powerhouses", vibe: "Majestic" },
  { names: ["Milo", "Maya"], style: "International appeal, easy to pronounce", vibe: "Global" },
  { names: ["Ezra", "Eloise"], style: "Vintage with modern twist", vibe: "Sophisticated" },
  { names: ["Finn", "Freya"], style: "Norse mythology cool", vibe: "Mystical" },
  { names: ["Jasper", "Juniper"], style: "Nature names starting with J", vibe: "Earthy" },
  { names: ["Bodhi", "Sage"], style: "Spiritual and wise", vibe: "Zen" },
  { names: ["Silas", "Stella"], style: "S-names with star power", vibe: "Bright" },
  { names: ["Wyatt", "Willow"], style: "W-names with Western flair", vibe: "Rustic" },
  { names: ["Rowan", "Remi"], style: "Unisex names with French feel", vibe: "Chic" },
  { names: ["Levi", "Lyra"], style: "Short L-names with punch", vibe: "Snappy" },
  { names: ["Beckett", "Brynn"], style: "Surname-style B-names", vibe: "Strong" },
  { names: ["Theo", "Thea"], style: "Greek god-inspired", vibe: "Divine" },
  { names: ["Miles", "Marley"], style: "Musical and free-spirited", vibe: "Groovy" },
  { names: ["Cash", "Crew"], style: "Word names with modern edge", vibe: "Cool" },
  { names: ["Arlo", "Aria"], style: "Melodic A-names", vibe: "Harmonious" },
  { names: ["Grayson", "Hazel"], style: "Color-inspired names", vibe: "Subtle" },
  { names: ["Declan", "Delaney"], style: "Irish with modern American appeal", vibe: "Celtic-cool" },
  { names: ["Jude", "June"], style: "Four-letter vintage-modern", vibe: "Timeless" },
  { names: ["Emmett", "Emma"], style: "Classic with current popularity", vibe: "Beloved" },
  { names: ["Sawyer", "Piper"], style: "Occupational surnames", vibe: "Adventurous" },
  { names: ["Hudson", "Harper"], style: "H-names with literary vibe", vibe: "Literary" },
  { names: ["Archer", "Avery"], style: "A-names with archer imagery", vibe: "Precise" },
  { names: ["Ryder", "Riley"], style: "R-names with sporty feel", vibe: "Athletic" },
  { names: ["Carter", "Kennedy"], style: "Presidential surnames", vibe: "Distinguished" },
  { names: ["Colton", "Kinley"], style: "Southern charm meets modern", vibe: "Sweet" },
  { names: ["Bentley", "Bentlee"], style: "Luxury car-inspired", vibe: "Upscale" },
  { names: ["Maverick", "McKenna"], style: "Independent spirit names", vibe: "Rebellious" },
  { names: ["Sterling", "Sloane"], style: "Sophisticated S-names", vibe: "Classy" },
  { names: ["Hendrix", "Harlow"], style: "Rock star cool", vibe: "Iconic" },
  { names: ["Caspian", "Calliope"], style: "Dramatic C-names", vibe: "Grand" },
  { names: ["Atticus", "Amara"], style: "Literary meets exotic", vibe: "Cultured" },
  { names: ["Cassius", "Cleo"], style: "Ancient names made modern", vibe: "Historic-cool" },
  { names: ["Orion", "Ophelia"], style: "O-names with drama", vibe: "Theatrical" },
  { names: ["Felix", "Fiona"], style: "F-names meaning happy/fair", vibe: "Joyful" },
  { names: ["Oscar", "Olive"], style: "Vintage O-names trending", vibe: "Retro-chic" },
  { names: ["Dashiell", "Delilah"], style: "D-names with sass", vibe: "Spirited" },
  { names: ["Sullivan", "Sutton"], style: "Surname names with style", vibe: "Polished" },
  { names: ["Holden", "Haven"], style: "H-names meaning refuge", vibe: "Safe" },
  { names: ["August", "Autumn"], style: "Seasonal time names", vibe: "Natural" },
  { names: ["Forrest", "Fern"], style: "Nature F-names", vibe: "Outdoorsy" },
  { names: ["Callum", "Cora"], style: "Celtic meets vintage", vibe: "Charming" },
  { names: ["Everett", "Everly"], style: "Ever- names on trend", vibe: "Eternal" },
  { names: ["Paxton", "Presley"], style: "Place and surname names", vibe: "Southern-modern" },
  { names: ["Lennon", "Lennox"], style: "Unisex rock-inspired", vibe: "Musical" },
  { names: ["Rhys", "Reese"], style: "Welsh names, different spellings", vibe: "International" },
  { names: ["Soren", "Sage"], style: "Scandinavian meets American", vibe: "Worldly" },
  { names: ["Malachi", "Magnolia"], style: "Biblical meets Southern belle", vibe: "Contrast" },
  { names: ["Zephyr", "Zinnia"], style: "Z-names with nature tie", vibe: "Unique" },
  { names: ["Brooks", "Blair"], style: "B-surnames with one syllable feel", vibe: "Crisp" },
]

export default function ModernPairsPage() {
  const [favorites, setFavorites] = useState<Set<string>>(new Set())
  const [filterVibe, setFilterVibe] = useState<string>('All')

  const vibes = ['All', ...Array.from(new Set(modernPairs.map(p => p.vibe)))]

  const filteredPairs = filterVibe === 'All'
    ? modernPairs
    : modernPairs.filter(p => p.vibe === filterVibe)

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
        <Link href="/sibling-names/" className="text-purple-600 hover:text-purple-700 text-sm font-medium mb-4 inline-block">
          ← Back to Sibling Names
        </Link>
        <span className="text-5xl mb-4 block">✨</span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Modern Sibling Name Pairs
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {modernPairs.length} contemporary sibling name combinations that feel fresh, stylish, and
          on-trend. Perfect for parents who want names that are current but not fleeting.
        </p>
      </div>

      {/* Filter */}
      <div className="mb-8 flex flex-wrap gap-2 justify-center">
        {vibes.slice(0, 12).map(vibe => (
          <button
            key={vibe}
            onClick={() => setFilterVibe(vibe)}
            className={`px-4 py-2 rounded-full font-medium transition ${
              filterVibe === vibe
                ? 'bg-purple-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {vibe}
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
              isFavorite(pair.names)
                ? 'border-purple-400 bg-purple-50'
                : 'border-gray-200 hover:border-purple-300'
            }`}
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  {pair.names.map((name, i) => (
                    <span key={i}>
                      <span className="text-xl font-bold text-teal-700">{name}</span>
                      {i < pair.names.length - 1 && <span className="text-gray-400 ml-2">&</span>}
                    </span>
                  ))}
                </div>
                <span className="inline-block text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded">
                  {pair.vibe}
                </span>
              </div>
              <button
                onClick={() => toggleFavorite(pair.names)}
                className="text-2xl hover:scale-110 transition"
              >
                {isFavorite(pair.names) ? '❤️' : '🤍'}
              </button>
            </div>
            <p className="text-gray-600 text-sm">{pair.style}</p>
          </div>
        ))}
      </div>

      {/* Why These Work */}
      <section className="mb-12 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Modern Pairs Are Popular</h2>
        <div className="space-y-3 text-gray-700">
          <p>
            Modern sibling names reflect current trends while maintaining timeless appeal. They often
            draw from nature, mythology, surnames, and international sources to create fresh
            combinations that feel distinctive without being too unusual.
          </p>
          <p>
            These names work well together because they share contemporary sensibilities - whether
            that's a preference for unisex appeal, nature connections, or sophisticated surname styles.
            They sound current but won't feel dated in ten years.
          </p>
          <p>
            Many modern pairs also have the advantage of easy spelling and pronunciation across different
            languages and cultures, making them practical choices for our increasingly global world.
          </p>
        </div>
      </section>

      {/* Related Links */}
      <section className="bg-gray-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore More Sibling Names</h2>
        <div className="grid md:grid-cols-4 gap-4">
          <Link href="/sibling-names/vintage-pairs/" className="bg-white hover:bg-rose-50 border rounded-lg p-4 text-center transition">
            <span className="font-medium text-rose-600">Vintage Pairs →</span>
          </Link>
          <Link href="/sibling-names/nature-themed/" className="bg-white hover:bg-green-50 border rounded-lg p-4 text-center transition">
            <span className="font-medium text-green-600">Nature Names →</span>
          </Link>
          <Link href="/sibling-names/matching-first-letters/" className="bg-white hover:bg-purple-50 border rounded-lg p-4 text-center transition">
            <span className="font-medium text-purple-600">Same Letter →</span>
          </Link>
          <Link href="/sibling-names/rhyming-names/" className="bg-white hover:bg-blue-50 border rounded-lg p-4 text-center transition">
            <span className="font-medium text-blue-600">Rhyming Names →</span>
          </Link>
        </div>
      </section>
    </div>
  )
}

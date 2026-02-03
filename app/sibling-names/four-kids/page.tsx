'use client'

import Link from 'next/link'
import { useState } from 'react'

interface NameSet {
  names: string[]
  reason: string
  style: string
}

const nameSets: NameSet[] = [
  { names: ["Emma", "Liam", "Olivia", "Noah"], reason: "Top trending names that all rank in Top 10", style: "Modern" },
  { names: ["Benjamin", "Charlotte", "Theodore", "Eleanor"], reason: "Vintage royal names with sophisticated charm", style: "Royal" },
  { names: ["Grace", "Hope", "Faith", "Joy"], reason: "Classic virtue names with spiritual meaning", style: "Virtue" },
  { names: ["Lily", "Rose", "Violet", "Iris"], reason: "Beautiful flower names creating a garden", style: "Nature" },
  { names: ["Jacob", "Joshua", "Joseph", "James"], reason: "Biblical J-names with strong heritage", style: "Biblical" },
  { names: ["Oliver", "Henry", "Charlotte", "Amelia"], reason: "British royal favorites with timeless appeal", style: "Royal" },
  { names: ["Mason", "Harper", "Carter", "Piper"], reason: "Modern surname names with energy", style: "Modern" },
  { names: ["Alexander", "Sebastian", "Isabella", "Gabriella"], reason: "Grand classical names with flowing sounds", style: "Classic" },
  { names: ["Daniel", "Sarah", "Matthew", "Hannah"], reason: "Timeless biblical names, simple and strong", style: "Biblical" },
  { names: ["Felix", "Jasper", "Hazel", "Pearl"], reason: "Vintage gems with quirky charm", style: "Vintage" },
  { names: ["River", "Willow", "Sage", "Rowan"], reason: "Nature names with peaceful earthiness", style: "Nature" },
  { names: ["Finn", "Declan", "Maeve", "Fiona"], reason: "Celtic names with Irish heritage", style: "Celtic" },
  { names: ["Luna", "Stella", "Leo", "Atlas"], reason: "Celestial and mythological names", style: "Modern" },
  { names: ["Ethan", "Evan", "Emma", "Eva"], reason: "Similar E-sounds creating cohesion", style: "Modern" },
  { names: ["Samuel", "Abigail", "Elijah", "Naomi"], reason: "Biblical names with gentle sophistication", style: "Biblical" },
  { names: ["Arthur", "Oscar", "Alice", "Beatrice"], reason: "Vintage names making strong comeback", style: "Vintage" },
  { names: ["William", "Elizabeth", "George", "Catherine"], reason: "Ultimate British royal name set", style: "Royal" },
  { names: ["Cooper", "Parker", "Piper", "Harper"], reason: "Occupational -er ending names", style: "Modern" },
  { names: ["Lucas", "Logan", "Luna", "Layla"], reason: "Alliterative L-names with flow", style: "Modern" },
  { names: ["Gabriel", "Michael", "Raphael", "Ariel"], reason: "Archangel names with divine connection", style: "Biblical" },
  { names: ["Amelia", "Sophia", "Olivia", "Isabella"], reason: "Flowing -ia ending feminine classics", style: "Classic" },
  { names: ["Aiden", "Connor", "Nora", "Fiona"], reason: "Irish-origin names with modern appeal", style: "Celtic" },
  { names: ["Jack", "Max", "Kate", "Mae"], reason: "Short punchy one-syllable names", style: "Modern" },
  { names: ["Ivy", "Holly", "Poppy", "Daisy"], reason: "British botanical names with charm", style: "Nature" },
  { names: ["Isaac", "Rebecca", "Rachel", "Leah"], reason: "Connected biblical family names", style: "Biblical" },
  { names: ["Miles", "Milo", "Mia", "Maya"], reason: "M-name family with international flair", style: "Modern" },
  { names: ["Theodore", "Josephine", "Penelope", "Augustus"], reason: "Long vintage names with nickname options", style: "Vintage" },
  { names: ["Phoenix", "Atlas", "Aurora", "Athena"], reason: "Mythological names with grand presence", style: "Modern" },
  { names: ["Silas", "Ezra", "Asher", "Levi"], reason: "Biblical names with vintage cool", style: "Biblical" },
  { names: ["Scarlett", "Violet", "Ruby", "Hazel"], reason: "Colorful vintage names", style: "Vintage" },
  { names: ["Rowan", "Ash", "Briar", "Sage"], reason: "Botanical names with unisex appeal", style: "Nature" },
  { names: ["Julian", "Adrian", "Julia", "Adriana"], reason: "Roman names in masculine and feminine", style: "Classic" },
  { names: ["Enzo", "Marco", "Elena", "Lucia"], reason: "Italian names with melodic flow", style: "Modern" },
  { names: ["Grayson", "Hudson", "Addison", "Madison"], reason: "Trendy -son ending names", style: "Modern" },
  { names: ["Blake", "Quinn", "Sage", "Riley"], reason: "Unisex names with modern edge", style: "Modern" },
  { names: ["Xavier", "Xander", "Ximena", "Xiomara"], reason: "Bold X-name family", style: "Modern" },
  { names: ["Peter", "Paul", "Mary", "Martha"], reason: "Biblical saints with classic appeal", style: "Biblical" },
  { names: ["Autumn", "Summer", "River", "Forest"], reason: "Nature names from different elements", style: "Nature" },
  { names: ["Nora", "Cora", "Dora", "Flora"], reason: "Vintage -ora ending names", style: "Vintage" },
  { names: ["Catherine", "Caroline", "Charlotte", "Clara"], reason: "Elegant C-name sisters", style: "Classic" },
]

export default function FourKidsPage() {
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
        <Link href="/sibling-names/" className="text-teal-600 hover:text-teal-700 text-sm font-medium mb-4 inline-block">
          ← Back to Sibling Names
        </Link>
        <span className="text-5xl mb-4 block">👶👧👦👧</span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Names for Four Kids
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {nameSets.length} coordinated name sets for larger families with four children. These combinations
          create a cohesive family unit while celebrating each child's unique identity.
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
                ? 'bg-teal-600 text-white'
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
          <div className="inline-block bg-teal-100 text-teal-800 px-4 py-2 rounded-full">
            ❤️ {favorites.size} {favorites.size === 1 ? 'favorite' : 'favorites'} saved
          </div>
        </div>
      )}

      {/* Name Sets Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {filteredSets.map((set, index) => (
          <div
            key={index}
            className={`bg-white border-2 rounded-xl p-6 transition ${
              isFavorite(set.names)
                ? 'border-teal-400 bg-teal-50'
                : 'border-gray-200 hover:border-teal-300'
            }`}
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex-1">
                <div className="mb-2 flex flex-wrap gap-1">
                  {set.names.map((name, i) => (
                    <span key={i} className="text-base font-bold text-teal-600">
                      {name}{i < set.names.length - 1 ? ',' : ''}
                    </span>
                  ))}
                </div>
                <span className="inline-block text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded">
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
      <section className="mb-12 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Naming Four Children: The Art of Harmony</h2>
        <div className="space-y-3 text-gray-700">
          <p>
            Four children give you the opportunity to create beautiful naming patterns while maintaining
            individuality. At this family size, a subtle theme or consistent style becomes even more important
            to create cohesion.
          </p>
          <p>
            With four names, you need to ensure all possible combinations work well together: each pair, each
            trio, and all four as a set. Names that sound good with one sibling but clash with another should
            be reconsidered.
          </p>
          <p>
            Four is also the sweet spot for themed names. A set like Lily, Rose, Violet, and Iris (all flowers)
            feels intentional and beautiful without being too gimmicky. The pattern is clear and creates a
            lovely family identity.
          </p>
        </div>
      </section>

      {/* Related Links */}
      <section className="bg-gray-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore More Combinations</h2>
        <div className="grid md:grid-cols-4 gap-4">
          <Link href="/sibling-names/three-kids/" className="bg-white hover:bg-emerald-50 border rounded-lg p-4 text-center transition">
            <span className="font-medium text-emerald-600">Three Kids →</span>
          </Link>
          <Link href="/sibling-names/same-origin/" className="bg-white hover:bg-green-50 border rounded-lg p-4 text-center transition">
            <span className="font-medium text-green-600">Same Origin →</span>
          </Link>
          <Link href="/sibling-names/same-meaning/" className="bg-white hover:bg-indigo-50 border rounded-lg p-4 text-center transition">
            <span className="font-medium text-indigo-600">Same Meaning →</span>
          </Link>
          <Link href="/sibling-names/avoid-mistakes/" className="bg-white hover:bg-amber-50 border rounded-lg p-4 text-center transition">
            <span className="font-medium text-amber-600">Avoid Mistakes →</span>
          </Link>
        </div>
      </section>
    </div>
  )
}

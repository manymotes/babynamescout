'use client'

import Link from 'next/link'
import { useState } from 'react'

interface NameSet {
  names: string[]
  letter: string
  reason: string
  style: string
}

const nameSets: NameSet[] = [
  { names: ["Amelia", "Ava"], letter: "A", reason: "Soft, feminine A-names with modern appeal", style: "Modern" },
  { names: ["Alexander", "Andrew"], letter: "A", reason: "Classic strong A-names for boys", style: "Classic" },
  { names: ["Alice", "Arthur"], letter: "A", reason: "Vintage A-names making a comeback", style: "Vintage" },
  { names: ["Benjamin", "Beatrice"], letter: "B", reason: "Classic B-names with timeless charm", style: "Classic" },
  { names: ["Blake", "Brooklyn"], letter: "B", reason: "Modern place and surname B-names", style: "Modern" },
  { names: ["Charlotte", "Caroline"], letter: "C", reason: "Elegant royal C-names", style: "Royal" },
  { names: ["Caleb", "Connor"], letter: "C", reason: "Strong biblical and Celtic C-names", style: "Biblical" },
  { names: ["Clara", "Cora"], letter: "C", reason: "Vintage C-names with soft sounds", style: "Vintage" },
  { names: ["Daniel", "David"], letter: "D", reason: "Biblical D-names with enduring appeal", style: "Biblical" },
  { names: ["Daisy", "Dahlia"], letter: "D", reason: "Floral D-names with vintage charm", style: "Nature" },
  { names: ["Eleanor", "Elizabeth"], letter: "E", reason: "Regal E-names with sophistication", style: "Royal" },
  { names: ["Ethan", "Evan"], letter: "E", reason: "Modern E-names with strong meanings", style: "Modern" },
  { names: ["Emma", "Emily"], letter: "E", reason: "Timeless popular E-names", style: "Classic" },
  { names: ["Felix", "Finn"], letter: "F", reason: "Charming vintage F-names", style: "Vintage" },
  { names: ["Fiona", "Freya"], letter: "F", reason: "Celtic goddess F-names", style: "Celtic" },
  { names: ["Grace", "Gabriel"], letter: "G", reason: "Virtue and angelic G-names", style: "Biblical" },
  { names: ["Georgia", "Gemma"], letter: "G", reason: "Sweet vintage G-names for girls", style: "Vintage" },
  { names: ["Henry", "Harper"], letter: "H", reason: "Royal and modern H-names", style: "Modern" },
  { names: ["Hazel", "Holly"], letter: "H", reason: "Nature-inspired H-names", style: "Nature" },
  { names: ["Isaac", "Isaiah"], letter: "I", reason: "Biblical I-names with lyrical quality", style: "Biblical" },
  { names: ["Isla", "Iris"], letter: "I", reason: "Feminine I-names with elegance", style: "Modern" },
  { names: ["James", "Jack"], letter: "J", reason: "Classic strong J-names for boys", style: "Classic" },
  { names: ["Julia", "Josephine"], letter: "J", reason: "Vintage feminine J-names", style: "Vintage" },
  { names: ["Jacob", "Joshua"], letter: "J", reason: "Popular biblical J-names", style: "Biblical" },
  { names: ["Leo", "Liam"], letter: "L", reason: "Short, punchy L-names for boys", style: "Modern" },
  { names: ["Lily", "Luna"], letter: "L", reason: "Nature and celestial L-names", style: "Nature" },
  { names: ["Lucy", "Louisa"], letter: "L", reason: "Vintage L-names with sweetness", style: "Vintage" },
  { names: ["Matthew", "Michael"], letter: "M", reason: "Classic biblical M-names", style: "Biblical" },
  { names: ["Mia", "Maya"], letter: "M", reason: "Short international M-names", style: "Modern" },
  { names: ["Madeline", "Margaret"], letter: "M", reason: "Traditional M-names with elegance", style: "Classic" },
  { names: ["Noah", "Nathan"], letter: "N", reason: "Biblical N-names with modern appeal", style: "Biblical" },
  { names: ["Nora", "Natalie"], letter: "N", reason: "Classic feminine N-names", style: "Classic" },
  { names: ["Oliver", "Oscar"], letter: "O", reason: "Vintage O-names for boys", style: "Vintage" },
  { names: ["Olivia", "Ophelia"], letter: "O", reason: "Romantic O-names for girls", style: "Classic" },
  { names: ["Peter", "Paul"], letter: "P", reason: "Biblical apostle P-names", style: "Biblical" },
  { names: ["Penelope", "Piper"], letter: "P", reason: "Modern popular P-names for girls", style: "Modern" },
  { names: ["Quinn", "Quincy"], letter: "Q", reason: "Unisex Q-names with modern edge", style: "Modern" },
  { names: ["Rose", "Ruby"], letter: "R", reason: "Vintage gem and flower R-names", style: "Vintage" },
  { names: ["Ryan", "Riley"], letter: "R", reason: "Irish surname R-names", style: "Modern" },
  { names: ["Samuel", "Sebastian"], letter: "S", reason: "Classic formal S-names", style: "Classic" },
  { names: ["Sophia", "Stella"], letter: "S", reason: "Elegant S-names with meaning", style: "Modern" },
  { names: ["Sadie", "Silas"], letter: "S", reason: "Vintage S-names with charm", style: "Vintage" },
  { names: ["Theodore", "Thomas"], letter: "T", reason: "Traditional T-names with gravitas", style: "Classic" },
  { names: ["Tabitha", "Thea"], letter: "T", reason: "Biblical and mythological T-names", style: "Classic" },
  { names: ["Violet", "Victoria"], letter: "V", reason: "Vintage royal V-names", style: "Royal" },
  { names: ["Vincent", "Victor"], letter: "V", reason: "Strong Latin V-names for boys", style: "Classic" },
  { names: ["William", "Wesley"], letter: "W", reason: "Classic W-names with nickname options", style: "Classic" },
  { names: ["Willow", "Wren"], letter: "W", reason: "Nature-inspired W-names", style: "Nature" },
  { names: ["Xavier", "Xander"], letter: "X", reason: "Bold X-names with modern appeal", style: "Modern" },
  { names: ["Zachary", "Zoe"], letter: "Z", reason: "Energetic Z-names with life", style: "Modern" },
  { names: ["Zara", "Zuri"], letter: "Z", reason: "International Z-names for girls", style: "Modern" },
]

export default function MatchingFirstLettersPage() {
  const [favorites, setFavorites] = useState<Set<string>>(new Set())
  const [filterLetter, setFilterLetter] = useState<string>('All')

  const letters = ['All', ...Array.from(new Set(nameSets.map(s => s.letter))).sort()]

  const filteredSets = filterLetter === 'All'
    ? nameSets
    : nameSets.filter(s => s.letter === filterLetter)

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
        <Link href="/sibling-names/" className="text-blue-600 hover:text-blue-700 text-sm font-medium mb-4 inline-block">
          ← Back to Sibling Names
        </Link>
        <span className="text-5xl mb-4 block">🔤</span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Sibling Names with Matching First Letters
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {nameSets.length} coordinated sibling name combinations that start with the same letter.
          A subtle way to connect siblings while maintaining individuality.
        </p>
      </div>

      {/* Filter */}
      <div className="mb-8 flex flex-wrap gap-2 justify-center">
        {letters.map(letter => (
          <button
            key={letter}
            onClick={() => setFilterLetter(letter)}
            className={`px-4 py-2 rounded-full font-medium transition ${
              filterLetter === letter
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {letter}
          </button>
        ))}
      </div>

      {/* Favorites Counter */}
      {favorites.size > 0 && (
        <div className="mb-8 text-center">
          <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
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
                ? 'border-blue-400 bg-blue-50'
                : 'border-gray-200 hover:border-blue-300'
            }`}
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-3xl font-bold text-blue-600">{set.letter}</span>
                  <div className="flex flex-wrap gap-1">
                    {set.names.map((name, i) => (
                      <span key={i} className="text-lg font-semibold text-gray-800">
                        {name}{i < set.names.length - 1 ? ',' : ''}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="inline-block text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
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
      <section className="mb-12 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Matching First Letters Work</h2>
        <div className="space-y-3 text-gray-700">
          <p>
            Matching first letters is a popular choice for siblings because it creates a subtle connection
            without being too matchy. The alliteration is pleasing to the ear and creates a sense of cohesion.
          </p>
          <p>
            However, be careful not to choose names that are too similar in sound. Madeline and Madison might
            both start with M, but they could be confusing when called out loud. Aim for names that share the
            first letter but have distinctly different sounds and rhythms.
          </p>
          <p>
            Also consider the future. If you plan on having more children, will you feel obligated to continue
            the pattern? Make sure you have enough names you love that start with your chosen letter.
          </p>
        </div>
      </section>

      {/* Related Links */}
      <section className="bg-gray-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore More Naming Themes</h2>
        <div className="grid md:grid-cols-4 gap-4">
          <Link href="/sibling-names/rhyming-names/" className="bg-white hover:bg-purple-50 border rounded-lg p-4 text-center transition">
            <span className="font-medium text-purple-600">Rhyming Names →</span>
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

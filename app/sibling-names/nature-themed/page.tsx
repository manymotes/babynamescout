'use client'

import Link from 'next/link'
import { useState } from 'react'

interface NaturePair {
  names: string[]
  theme: string
  meaning: string
}

const naturePairs: NaturePair[] = [
  { names: ["River", "Willow"], theme: "Water & Trees", meaning: "Flowing water and graceful tree" },
  { names: ["Sky", "Ocean"], theme: "Elements", meaning: "Above and below the horizon" },
  { names: ["Forest", "Fern"], theme: "Woods", meaning: "Dense trees and woodland plant" },
  { names: ["Jasper", "Jade"], theme: "Gemstones", meaning: "Precious stones from the earth" },
  { names: ["Aspen", "Oak"], theme: "Trees", meaning: "Quaking tree and mighty tree" },
  { names: ["Wren", "Robin"], theme: "Birds", meaning: "Small songbirds" },
  { names: ["Fox", "Wolf"], theme: "Animals", meaning: "Clever and loyal wild animals" },
  { names: ["Sage", "Basil"], theme: "Herbs", meaning: "Aromatic cooking herbs" },
  { names: ["Rose", "Lily"], theme: "Flowers", meaning: "Classic beautiful flowers" },
  { names: ["Iris", "Violet"], theme: "Flowers", meaning: "Purple flower beauties" },
  { names: ["Daisy", "Poppy"], theme: "Wildflowers", meaning: "Cheerful field flowers" },
  { names: ["Hazel", "Olive"], theme: "Trees", meaning: "Nut tree and Mediterranean tree" },
  { names: ["Aurora", "Dawn"], theme: "Light", meaning: "Morning light phenomena" },
  { names: ["Phoenix", "Ember"], theme: "Fire", meaning: "Mythical bird and glowing coal" },
  { names: ["Storm", "Rain"], theme: "Weather", meaning: "Powerful and gentle precipitation" },
  { names: ["Summer", "Winter"], theme: "Seasons", meaning: "Warmest and coldest seasons" },
  { names: ["Autumn", "Spring"], theme: "Seasons", meaning: "Harvest and renewal seasons" },
  { names: ["Luna", "Stella"], theme: "Celestial", meaning: "Moon and star" },
  { names: ["Solar", "Nova"], theme: "Space", meaning: "Sun and exploding star" },
  { names: ["Orion", "Lyra"], theme: "Constellations", meaning: "Hunter and lyre constellations" },
  { names: ["Reef", "Coral"], theme: "Ocean", meaning: "Underwater structures" },
  { names: ["Marina", "Sailor"], theme: "Sea", meaning: "Harbor and seafarer" },
  { names: ["Bay", "Harbor"], theme: "Coast", meaning: "Coastal water features" },
  { names: ["Brooks", "Creek"], theme: "Waterways", meaning: "Small flowing streams" },
  { names: ["Lake", "Ford"], theme: "Water", meaning: "Still water and shallow crossing" },
  { names: ["Canyon", "Ridge"], theme: "Mountains", meaning: "Deep valley and mountain top" },
  { names: ["Summit", "Vale"], theme: "Terrain", meaning: "Mountain peak and valley" },
  { names: ["Stone", "Flint"], theme: "Rocks", meaning: "Solid rock and spark-making stone" },
  { names: ["Cliff", "Crag"], theme: "Formations", meaning: "Steep rock faces" },
  { names: ["Meadow", "Prairie"], theme: "Grasslands", meaning: "Grassy open lands" },
  { names: ["Heath", "Moor"], theme: "Landscapes", meaning: "Open uncultivated lands" },
  { names: ["Glen", "Dell"], theme: "Valleys", meaning: "Narrow valleys" },
  { names: ["Birch", "Rowan"], theme: "Trees", meaning: "White bark tree and mountain ash" },
  { names: ["Cedar", "Pine"], theme: "Evergreens", meaning: "Aromatic conifer trees" },
  { names: ["Maple", "Ash"], theme: "Deciduous Trees", meaning: "Syrup tree and strong wood tree" },
  { names: ["Ivy", "Holly"], theme: "Vines & Shrubs", meaning: "Climbing plant and spiky shrub" },
  { names: ["Clover", "Heather"], theme: "Ground Cover", meaning: "Lucky plant and moorland plant" },
  { names: ["Magnolia", "Azalea"], theme: "Flowering Trees", meaning: "Southern flowering beauties" },
  { names: ["Dahlia", "Zinnia"], theme: "Garden Flowers", meaning: "Colorful garden favorites" },
  { names: ["Marigold", "Primrose"], theme: "Bright Flowers", meaning: "Golden and early blooming flowers" },
  { names: ["Lavender", "Jasmine"], theme: "Fragrant Flowers", meaning: "Sweet-smelling blooms" },
  { names: ["Blaze", "Spark"], theme: "Fire", meaning: "Bright flame and igniting element" },
  { names: ["Ash", "Cinder"], theme: "Fire Remnants", meaning: "What remains after fire" },
  { names: ["Blaze", "Flame"], theme: "Fire", meaning: "Bright burning fire" },
  { names: ["Breeze", "Gale"], theme: "Wind", meaning: "Gentle and strong winds" },
  { names: ["Tempest", "Zephyr"], theme: "Wind", meaning: "Storm and gentle west wind" },
  { names: ["Thunder", "Lightning"], theme: "Storm", meaning: "Sound and flash of storm" },
  { names: ["Cloud", "Mist"], theme: "Atmosphere", meaning: "Water vapor formations" },
  { names: ["Frost", "Snow"], theme: "Winter", meaning: "Ice crystals and frozen precipitation" },
  { names: ["Solstice", "Equinox"], theme: "Astronomy", meaning: "Solar events marking seasons" },
  { names: ["Eclipse", "Lunar"], theme: "Celestial Events", meaning: "Astronomical phenomena" },
  { names: ["Cosmos", "Galaxy"], theme: "Universe", meaning: "Order of universe and star system" },
  { names: ["Atlas", "Terra"], theme: "Earth", meaning: "World bearer and earth itself" },
  { names: ["Bear", "Fox"], theme: "Forest Animals", meaning: "Powerful and clever creatures" },
  { names: ["Hawk", "Falcon"], theme: "Birds of Prey", meaning: "Sharp-eyed hunting birds" },
  { names: ["Lark", "Finch"], theme: "Songbirds", meaning: "Musical birds" },
  { names: ["Raven", "Crow"], theme: "Dark Birds", meaning: "Intelligent black birds" },
  { names: ["Swan", "Dove"], theme: "Graceful Birds", meaning: "Elegant and peaceful birds" },
  { names: ["Sparrow", "Wren"], theme: "Small Birds", meaning: "Tiny common birds" },
  { names: ["Drake", "Heron"], theme: "Water Birds", meaning: "Male duck and wading bird" },
]

export default function NatureThemedPage() {
  const [favorites, setFavorites] = useState<Set<string>>(new Set())
  const [filterTheme, setFilterTheme] = useState<string>('All')

  const themes = ['All', ...Array.from(new Set(naturePairs.map(p => p.theme)))]

  const filteredPairs = filterTheme === 'All'
    ? naturePairs
    : naturePairs.filter(p => p.theme === filterTheme)

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
        <span className="text-5xl mb-4 block">🌿</span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Nature-Themed Sibling Names
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {naturePairs.length} beautiful sibling name combinations inspired by the natural world.
          From flowers to forests, stars to storms, find names that celebrate nature's wonder.
        </p>
      </div>

      {/* Filter */}
      <div className="mb-8 flex flex-wrap gap-2 justify-center">
        {themes.slice(0, 15).map(theme => (
          <button
            key={theme}
            onClick={() => setFilterTheme(theme)}
            className={`px-4 py-2 rounded-full font-medium transition ${
              filterTheme === theme
                ? 'bg-green-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {theme}
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
              isFavorite(pair.names)
                ? 'border-green-400 bg-green-50'
                : 'border-gray-200 hover:border-green-300'
            }`}
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  {pair.names.map((name, i) => (
                    <span key={i}>
                      <span className="text-xl font-bold text-green-700">{name}</span>
                      {i < pair.names.length - 1 && <span className="text-gray-400 ml-2">&</span>}
                    </span>
                  ))}
                </div>
                <span className="inline-block text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                  {pair.theme}
                </span>
              </div>
              <button
                onClick={() => toggleFavorite(pair.names)}
                className="text-2xl hover:scale-110 transition"
              >
                {isFavorite(pair.names) ? '❤️' : '🤍'}
              </button>
            </div>
            <p className="text-gray-600 text-sm">{pair.meaning}</p>
          </div>
        ))}
      </div>

      {/* Why These Work */}
      <section className="mb-12 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Nature Names Are Perfect for Siblings</h2>
        <div className="space-y-3 text-gray-700">
          <p>
            Nature-inspired names have surged in popularity because they evoke peace, beauty, and
            connection to the natural world. When used for siblings, they create a harmonious set
            that reflects parents' love for the outdoors and environmental consciousness.
          </p>
          <p>
            These names work wonderfully together because they all draw from the same source - the
            earth, sky, plants, and animals around us. Whether you choose complementary elements like
            River and Willow, or contrasting forces like Storm and Calm, nature names naturally pair well.
          </p>
          <p>
            Many nature names are also gender-neutral or easily adaptable, giving you flexibility while
            maintaining the organic connection between your children's names. They're timeless, meaningful,
            and increasingly mainstream.
          </p>
        </div>
      </section>

      {/* Related Links */}
      <section className="bg-gray-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore More Sibling Names</h2>
        <div className="grid md:grid-cols-4 gap-4">
          <Link href="/sibling-names/modern-pairs/" className="bg-white hover:bg-teal-50 border rounded-lg p-4 text-center transition">
            <span className="font-medium text-teal-600">Modern Pairs →</span>
          </Link>
          <Link href="/sibling-names/vintage-pairs/" className="bg-white hover:bg-rose-50 border rounded-lg p-4 text-center transition">
            <span className="font-medium text-rose-600">Vintage Pairs →</span>
          </Link>
          <Link href="/sibling-names/same-meaning/" className="bg-white hover:bg-purple-50 border rounded-lg p-4 text-center transition">
            <span className="font-medium text-purple-600">Same Meaning →</span>
          </Link>
          <Link href="/sibling-names/same-origin/" className="bg-white hover:bg-blue-50 border rounded-lg p-4 text-center transition">
            <span className="font-medium text-blue-600">Same Origin →</span>
          </Link>
        </div>
      </section>
    </div>
  )
}

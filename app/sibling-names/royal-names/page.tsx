'use client'

import Link from 'next/link'
import { useState } from 'react'

interface RoyalPair {
  names: string[]
  origin: string
  meaning: string
  era: string
}

const royalPairs: RoyalPair[] = [
  { names: ["William", "Catherine"], origin: "England", meaning: "Strong protector and pure", era: "Modern" },
  { names: ["Harry", "Meghan"], origin: "England", meaning: "Estate ruler and pearl", era: "Modern" },
  { names: ["George", "Charlotte"], origin: "England", meaning: "Farmer and free man", era: "Traditional" },
  { names: ["Louis", "Anne"], origin: "France/England", meaning: "Famous warrior and grace", era: "Classic" },
  { names: ["Charles", "Diana"], origin: "England", meaning: "Free man and divine", era: "20th Century" },
  { names: ["Philip", "Elizabeth"], origin: "Greece/England", meaning: "Horse lover and God's oath", era: "20th Century" },
  { names: ["Edward", "Sophie"], origin: "England", meaning: "Wealthy guardian and wisdom", era: "Modern" },
  { names: ["Andrew", "Sarah"], origin: "England", meaning: "Strong and manly, princess", era: "20th Century" },
  { names: ["Beatrice", "Eugenie"], origin: "England", meaning: "She who brings happiness and well-born", era: "Modern" },
  { names: ["Victoria", "Albert"], origin: "England", meaning: "Victory and noble", era: "Victorian" },
  { names: ["Mary", "Frederick"], origin: "Denmark", meaning: "Beloved and peaceful ruler", era: "Modern" },
  { names: ["Christian", "Isabella"], origin: "Denmark", meaning: "Follower of Christ and devoted to God", era: "Modern" },
  { names: ["Carl", "Sofia"], origin: "Sweden", meaning: "Free man and wisdom", era: "Modern" },
  { names: ["Victoria", "Daniel"], origin: "Sweden", meaning: "Victory and God is my judge", era: "Modern" },
  { names: ["Estelle", "Oscar"], origin: "Sweden", meaning: "Star and divine spear", era: "Modern" },
  { names: ["Madeleine", "Leonore"], origin: "Sweden", meaning: "High tower and light", era: "Modern" },
  { names: ["Willem", "Maxima"], origin: "Netherlands", meaning: "Strong protector and greatest", era: "Modern" },
  { names: ["Amalia", "Alexia"], origin: "Netherlands", meaning: "Work and defender", era: "Modern" },
  { names: ["Felipe", "Letizia"], origin: "Spain", meaning: "Horse lover and joy", era: "Modern" },
  { names: ["Leonor", "Sofia"], origin: "Spain", meaning: "Light and wisdom", era: "Modern" },
  { names: ["Philippe", "Mathilde"], origin: "Belgium", meaning: "Horse lover and mighty battle", era: "Modern" },
  { names: ["Elisabeth", "Gabriel"], origin: "Belgium", meaning: "God's oath and God's strength", era: "Modern" },
  { names: ["Harald", "Sonja"], origin: "Norway", meaning: "Army ruler and wisdom", era: "20th Century" },
  { names: ["Haakon", "Mette"], origin: "Norway", meaning: "High son and pearl", era: "Modern" },
  { names: ["Ingrid", "Magnus"], origin: "Norway", meaning: "Beautiful and great", era: "Modern" },
  { names: ["Gustaf", "Silvia"], origin: "Sweden", meaning: "Staff of the Goths and forest", era: "20th Century" },
  { names: ["Madeleine", "Christopher"], origin: "Sweden", meaning: "High tower and Christ bearer", era: "Modern" },
  { names: ["Alexander", "Catherine"], origin: "Russia", meaning: "Defender and pure", era: "Imperial" },
  { names: ["Nicholas", "Alexandra"], origin: "Russia", meaning: "Victory and defender", era: "Imperial" },
  { names: ["Peter", "Catherine"], origin: "Russia", meaning: "Rock and pure", era: "Imperial" },
  { names: ["Ivan", "Anastasia"], origin: "Russia", meaning: "God is gracious and resurrection", era: "Imperial" },
  { names: ["Leopold", "Astrid"], origin: "Belgium", meaning: "Bold people and divine strength", era: "20th Century" },
  { names: ["Baudouin", "Fabiola"], origin: "Belgium", meaning: "Bold friend and bean grower", era: "20th Century" },
  { names: ["Rainier", "Grace"], origin: "Monaco", meaning: "Wise army and grace", era: "20th Century" },
  { names: ["Albert", "Charlene"], origin: "Monaco", meaning: "Noble and free man", era: "Modern" },
  { names: ["Jacques", "Gabriella"], origin: "Monaco", meaning: "Supplanter and God's strength", era: "Modern" },
  { names: ["Constantine", "Anne"], origin: "Greece", meaning: "Constant and grace", era: "20th Century" },
  { names: ["Pavlos", "Marie"], origin: "Greece", meaning: "Small and beloved", era: "Modern" },
  { names: ["Friedrich", "Victoria"], origin: "Germany", meaning: "Peaceful ruler and victory", era: "Imperial" },
  { names: ["Wilhelm", "Augusta"], origin: "Germany", meaning: "Strong protector and great", era: "Imperial" },
  { names: ["Franz", "Elisabeth"], origin: "Austria", meaning: "Free man and God's oath", era: "Imperial" },
  { names: ["Karl", "Zita"], origin: "Austria", meaning: "Free man and little girl", era: "Imperial" },
  { names: ["Maximilian", "Maria"], origin: "Austria", meaning: "Greatest and beloved", era: "Imperial" },
  { names: ["Henry", "Eleanor"], origin: "England", meaning: "Estate ruler and light", era: "Medieval" },
  { names: ["Richard", "Berengaria"], origin: "England", meaning: "Powerful ruler and bear spear", era: "Medieval" },
  { names: ["Arthur", "Guinevere"], origin: "Britain", meaning: "Bear and white fair", era: "Legendary" },
  { names: ["Lancelot", "Guinevere"], origin: "Britain", meaning: "Servant and white fair", era: "Legendary" },
  { names: ["Louis", "Marie"], origin: "France", meaning: "Famous warrior and beloved", era: "Bourbon" },
  { names: ["Philippe", "Henrietta"], origin: "France", meaning: "Horse lover and estate ruler", era: "Bourbon" },
  { names: ["Napoleon", "Josephine"], origin: "France", meaning: "Lion of the valley and God increases", era: "Imperial" },
  { names: ["Ferdinand", "Isabella"], origin: "Spain", meaning: "Bold voyager and devoted to God", era: "Medieval" },
  { names: ["Alfonso", "Ena"], origin: "Spain", meaning: "Noble and ready and fire", era: "20th Century" },
  { names: ["Juan", "Sofia"], origin: "Spain", meaning: "God is gracious and wisdom", era: "20th Century" },
  { names: ["Umberto", "Margherita"], origin: "Italy", meaning: "Bright warrior and pearl", era: "20th Century" },
  { names: ["Vittorio", "Elena"], origin: "Italy", meaning: "Victor and light", era: "20th Century" },
  { names: ["Gustav", "Margaret"], origin: "Sweden", meaning: "Staff of the Goths and pearl", era: "20th Century" },
  { names: ["Olav", "Martha"], origin: "Norway", meaning: "Ancestor and lady", era: "20th Century" },
  { names: ["Christian", "Alexandra"], origin: "Denmark", meaning: "Follower of Christ and defender", era: "20th Century" },
  { names: ["Frederick", "Ingrid"], origin: "Denmark", meaning: "Peaceful ruler and beautiful", era: "20th Century" },
  { names: ["Margrethe", "Henrik"], origin: "Denmark", meaning: "Pearl and home ruler", era: "Modern" },
]

export default function RoyalNamesPage() {
  const [favorites, setFavorites] = useState<Set<string>>(new Set())
  const [filterEra, setFilterEra] = useState<string>('All')

  const eras = ['All', ...Array.from(new Set(royalPairs.map(p => p.era)))]

  const filteredPairs = filterEra === 'All'
    ? royalPairs
    : royalPairs.filter(p => p.era === filterEra)

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
        <span className="text-5xl mb-4 block">👑</span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Royal Sibling Names
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {royalPairs.length} regal sibling name combinations inspired by kings, queens, princes,
          and princesses throughout history. Give your children names with noble heritage.
        </p>
      </div>

      {/* Filter */}
      <div className="mb-8 flex flex-wrap gap-2 justify-center">
        {eras.map(era => (
          <button
            key={era}
            onClick={() => setFilterEra(era)}
            className={`px-4 py-2 rounded-full font-medium transition ${
              filterEra === era
                ? 'bg-purple-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {era}
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
      <div className="grid md:grid-cols-2 gap-6 mb-12">
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
                      <span className="text-xl font-bold text-purple-700">{name}</span>
                      {i < pair.names.length - 1 && <span className="text-gray-400 ml-2">&</span>}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-block text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">
                    {pair.origin}
                  </span>
                  <span className="inline-block text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded">
                    {pair.era}
                  </span>
                </div>
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
      <section className="mb-12 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Royal Names Are Timeless</h2>
        <div className="space-y-3 text-gray-700">
          <p>
            Royal names carry centuries of history, elegance, and sophistication. When used for
            siblings, they create an air of dignity and timelessness that never goes out of style.
            These names have been tested through generations and proven their staying power.
          </p>
          <p>
            From the contemporary British royal family to historic European dynasties, royal names
            offer a rich tapestry of options. They often have multiple variations across different
            languages and cultures, giving you flexibility while maintaining their regal character.
          </p>
          <p>
            Many royal names are also surprisingly accessible and easy to pronounce, making them
            practical choices that work well in modern society while still carrying their noble
            heritage and historical significance.
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
          <Link href="/sibling-names/biblical-siblings/" className="bg-white hover:bg-blue-50 border rounded-lg p-4 text-center transition">
            <span className="font-medium text-blue-600">Biblical Names →</span>
          </Link>
          <Link href="/sibling-names/literary-inspired/" className="bg-white hover:bg-amber-50 border rounded-lg p-4 text-center transition">
            <span className="font-medium text-amber-600">Literary Names →</span>
          </Link>
          <Link href="/sibling-names/same-origin/" className="bg-white hover:bg-emerald-50 border rounded-lg p-4 text-center transition">
            <span className="font-medium text-emerald-600">Same Origin →</span>
          </Link>
        </div>
      </section>
    </div>
  )
}

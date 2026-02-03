'use client'

import Link from 'next/link'
import { useState } from 'react'

interface NamePair {
  name1: string
  name2: string
  meaning: string
  reason: string
}

const namePairs: NamePair[] = [
  { name1: "Lucy", name2: "Claire", meaning: "Light", reason: "Both names mean light in different languages" },
  { name1: "Zoe", name2: "Eva", meaning: "Life", reason: "Greek and Hebrew names both meaning life" },
  { name1: "Theodore", name2: "Jonathan", meaning: "Gift from God", reason: "Different cultures, same beautiful meaning" },
  { name1: "Sophia", name2: "Sage", meaning: "Wisdom", reason: "Greek and English names for wisdom" },
  { name1: "Felix", name2: "Beatrice", meaning: "Happy/Blessed", reason: "Latin names celebrating joy" },
  { name1: "Aria", name2: "Melody", meaning: "Music/Song", reason: "Musical names for artistic families" },
  { name1: "Luna", name2: "Selene", meaning: "Moon", reason: "Different moon goddesses" },
  { name1: "Leo", name2: "Lionel", meaning: "Lion", reason: "Bold lion-themed names" },
  { name1: "Alexander", name2: "Andrew", meaning: "Defender", reason: "Greek names meaning protector" },
  { name1: "Iris", name2: "Rainbow", meaning: "Rainbow", reason: "Same meaning, different vibes" },
  { name1: "Stella", name2: "Estelle", meaning: "Star", reason: "Celestial star names" },
  { name1: "Lily", name2: "Susan", meaning: "Lily flower", reason: "Same flower, different names" },
  { name1: "Pearl", name2: "Margaret", meaning: "Pearl", reason: "Gem meaning in English and Greek" },
  { name1: "Victor", name2: "Vincent", meaning: "Conqueror", reason: "Latin victory names" },
  { name1: "Dara", name2: "Darian", meaning: "Wise", reason: "Names celebrating intelligence" },
  { name1: "Nora", name2: "Eleanor", meaning: "Light/Honor", reason: "Related names with noble meaning" },
  { name1: "Gabriel", name2: "Gabriella", meaning: "God's strength", reason: "Angelic names in both genders" },
  { name1: "Kira", name2: "Chiara", meaning: "Light/Bright", reason: "International light names" },
  { name1: "Caleb", name2: "Kalev", meaning: "Faithful", reason: "Hebrew names for devotion" },
  { name1: "Vera", name2: "Alethea", meaning: "Truth", reason: "Names meaning truth" },
  { name1: "Adelaide", name2: "Heidi", meaning: "Noble", reason: "Germanic noble names" },
  { name1: "Asher", name2: "Felix", meaning: "Happy", reason: "Hebrew and Latin joy" },
  { name1: "Ethan", name2: "Kenan", meaning: "Strong", reason: "Names celebrating strength" },
  { name1: "Amara", name2: "Mabel", meaning: "Beloved", reason: "Names meaning loved" },
  { name1: "Penelope", name2: "Ulysses", meaning: "Weaver/Traveler", reason: "Connected mythological pair" },
  { name1: "Phoenix", name2: "Renee", meaning: "Rebirth", reason: "Names symbolizing renewal" },
  { name1: "Dominic", name2: "Cyril", meaning: "Lord", reason: "Names meaning lordly" },
  { name1: "Philip", name2: "Philippa", meaning: "Lover of horses", reason: "Greek names for equestrians" },
  { name1: "Irene", name2: "Salome", meaning: "Peace", reason: "Names celebrating peace" },
  { name1: "Rose", name2: "Rhoda", meaning: "Rose", reason: "English and Greek rose names" },
  { name1: "Chloe", name2: "Phoebe", meaning: "Green/Radiant", reason: "Greek nature names" },
  { name1: "Matthew", name2: "Nathaniel", meaning: "Gift", reason: "Hebrew gift names" },
  { name1: "Ava", name2: "Chava", meaning: "Life", reason: "Modern and traditional life names" },
  { name1: "Diana", name2: "Artemis", meaning: "Divine/Hunter", reason: "Roman and Greek hunter goddesses" },
  { name1: "Timothy", name2: "Timotheus", meaning: "Honoring God", reason: "Name in different forms" },
  { name1: "Katherine", name2: "Purity", meaning: "Pure", reason: "Names meaning purity" },
  { name1: "Serena", name2: "Galene", meaning: "Calm/Peaceful", reason: "Peaceful nature names" },
  { name1: "Darius", name2: "Rex", meaning: "King", reason: "Royal names from different cultures" },
  { name1: "Agnes", name2: "Hannah", meaning: "Pure/Grace", reason: "Names with spiritual meaning" },
  { name1: "Malcolm", name2: "Columba", meaning: "Dove", reason: "Scottish peace names" },
  { name1: "Isaac", name2: "Yitzchak", meaning: "Laughter", reason: "Hebrew joy names" },
  { name1: "Daphne", name2: "Laura", meaning: "Laurel", reason: "Greek and Latin laurel names" },
  { name1: "Paloma", name2: "Jonah", meaning: "Dove", reason: "Peace names in different languages" },
  { name1: "Abel", name2: "Cain", meaning: "Breath/Spear", reason: "Biblical brothers (use with caution!)" },
  { name1: "Dante", name2: "Emmanuel", meaning: "Enduring/God with us", reason: "Names with spiritual depth" },
  { name1: "Honor", name2: "Timothy", meaning: "Honor", reason: "Virtue and Greek honor" },
  { name1: "Zara", name2: "Flora", meaning: "Flower/Bloom", reason: "Names celebrating nature" },
  { name1: "Uma", name2: "Lina", meaning: "Light/Tender", reason: "Short international names" },
  { name1: "Christopher", name2: "Christina", meaning: "Christ-bearer", reason: "Christian heritage names" },
  { name1: "Miles", name2: "Emilio", meaning: "Soldier", reason: "Warrior names from different origins" },
]

export default function SameMeaningPage() {
  const [favorites, setFavorites] = useState<Set<string>>(new Set())

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
        <Link href="/sibling-names/" className="text-indigo-600 hover:text-indigo-700 text-sm font-medium mb-4 inline-block">
          ← Back to Sibling Names
        </Link>
        <span className="text-5xl mb-4 block">✨</span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Sibling Names with the Same Meaning
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {namePairs.length} sibling name combinations that share the same or similar meanings. A beautiful
          way to connect your children through shared symbolism while maintaining unique names.
        </p>
      </div>

      {/* Favorites Counter */}
      {favorites.size > 0 && (
        <div className="mb-8 text-center">
          <div className="inline-block bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full">
            ❤️ {favorites.size} {favorites.size === 1 ? 'favorite' : 'favorites'} saved
          </div>
        </div>
      )}

      {/* Name Pairs Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {namePairs.map((pair, index) => (
          <div
            key={index}
            className={`bg-white border-2 rounded-xl p-6 transition ${
              isFavorite(pair.name1, pair.name2)
                ? 'border-indigo-400 bg-indigo-50'
                : 'border-gray-200 hover:border-indigo-300'
            }`}
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl font-bold text-indigo-600">{pair.name1}</span>
                  <span className="text-gray-400">&</span>
                  <span className="text-2xl font-bold text-indigo-600">{pair.name2}</span>
                </div>
                <span className="inline-block text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded mb-2">
                  Meaning: {pair.meaning}
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
      <section className="mb-12 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Power of Shared Meaning</h2>
        <div className="space-y-3 text-gray-700">
          <p>
            Names with the same meaning create a beautiful, subtle connection between siblings. While the names
            themselves are completely different, they share an underlying symbolism that ties your children together.
          </p>
          <p>
            This approach is perfect for parents who love the idea of themed names but want to avoid being too obvious.
            Lucy and Claire both mean "light," but they sound completely different and give each child a distinct identity.
          </p>
          <p>
            Shared meanings can also reflect your family's values. Names meaning "wisdom," "strength," or "beloved"
            can represent the qualities you hope to instill in all your children.
          </p>
        </div>
      </section>

      {/* Related Links */}
      <section className="bg-gray-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore More Naming Themes</h2>
        <div className="grid md:grid-cols-4 gap-4">
          <Link href="/sibling-names/same-origin/" className="bg-white hover:bg-green-50 border rounded-lg p-4 text-center transition">
            <span className="font-medium text-green-600">Same Origin →</span>
          </Link>
          <Link href="/sibling-names/biblical-siblings/" className="bg-white hover:bg-rose-50 border rounded-lg p-4 text-center transition">
            <span className="font-medium text-rose-600">Biblical Names →</span>
          </Link>
          <Link href="/sibling-names/nature-themed/" className="bg-white hover:bg-emerald-50 border rounded-lg p-4 text-center transition">
            <span className="font-medium text-emerald-600">Nature-Themed →</span>
          </Link>
          <Link href="/sibling-names/royal-names/" className="bg-white hover:bg-purple-50 border rounded-lg p-4 text-center transition">
            <span className="font-medium text-purple-600">Royal Names →</span>
          </Link>
        </div>
      </section>
    </div>
  )
}

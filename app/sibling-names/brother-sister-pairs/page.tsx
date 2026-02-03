'use client'

import Link from 'next/link'
import { useState } from 'react'

interface NamePair {
  boy: string
  girl: string
  reason: string
  style: string
}

const namePairs: NamePair[] = [
  { boy: "Oliver", girl: "Olivia", reason: "Classic complementary names with shared origin", style: "Classic" },
  { boy: "Alexander", girl: "Alexandra", reason: "Elegant masculine and feminine forms of the same name", style: "Classic" },
  { boy: "Benjamin", girl: "Charlotte", reason: "Timeless names with vintage charm", style: "Vintage" },
  { boy: "Theodore", girl: "Eleanor", reason: "Distinguished old-fashioned names both ending in -or/-nor", style: "Vintage" },
  { boy: "Henry", girl: "Grace", reason: "Short, strong names with royal heritage", style: "Royal" },
  { boy: "William", girl: "Elizabeth", reason: "Regal British names with rich history", style: "Royal" },
  { boy: "James", girl: "Emma", reason: "Consistently popular, simple yet sophisticated", style: "Classic" },
  { boy: "Noah", girl: "Ava", reason: "Short, modern names that flow beautifully together", style: "Modern" },
  { boy: "Liam", girl: "Sophia", reason: "Top trending names with international appeal", style: "Modern" },
  { boy: "Ethan", girl: "Mia", reason: "Contemporary favorites with simple elegance", style: "Modern" },
  { boy: "Mason", girl: "Harper", reason: "Modern surname-style names", style: "Modern" },
  { boy: "Logan", girl: "Madison", reason: "Strong, gender-neutral feeling names", style: "Modern" },
  { boy: "Jackson", girl: "Addison", reason: "Trendy -son ending creates subtle connection", style: "Modern" },
  { boy: "Lucas", girl: "Luna", reason: "Both start with 'L' and have celestial connections", style: "Modern" },
  { boy: "Sebastian", girl: "Isabella", reason: "Romantic, flowing names with Latin roots", style: "Classic" },
  { boy: "Samuel", girl: "Abigail", reason: "Biblical names with strong traditional values", style: "Biblical" },
  { boy: "Daniel", girl: "Sarah", reason: "Timeless biblical names, simple and strong", style: "Biblical" },
  { boy: "Gabriel", girl: "Gabriella", reason: "Angelic names in masculine and feminine forms", style: "Biblical" },
  { boy: "Isaac", girl: "Rebecca", reason: "Connected biblical names from the same story", style: "Biblical" },
  { boy: "Joshua", girl: "Hannah", reason: "Strong biblical heritage with soft sounds", style: "Biblical" },
  { boy: "Matthew", girl: "Naomi", reason: "Biblical names with gentle, melodic qualities", style: "Biblical" },
  { boy: "Elijah", girl: "Eliana", reason: "Both begin with 'Eli', sharing Hebrew roots", style: "Biblical" },
  { boy: "Felix", girl: "Hazel", reason: "Vintage names with nature and happiness themes", style: "Vintage" },
  { boy: "Arthur", girl: "Pearl", reason: "Old-fashioned gems making a comeback", style: "Vintage" },
  { boy: "Oscar", girl: "Violet", reason: "Turn-of-century names with modern appeal", style: "Vintage" },
  { boy: "Jasper", girl: "Alice", reason: "Charming vintage names with literary connections", style: "Vintage" },
  { boy: "Leo", girl: "Rose", reason: "Short, classic names with timeless appeal", style: "Vintage" },
  { boy: "River", girl: "Willow", reason: "Nature names with gentle, flowing quality", style: "Nature" },
  { boy: "Fox", girl: "Wren", reason: "Bold animal names with spirit and character", style: "Nature" },
  { boy: "Rowan", girl: "Sage", reason: "Unisex nature names with earthy vibes", style: "Nature" },
  { boy: "Phoenix", girl: "Aurora", reason: "Powerful mythological and celestial names", style: "Nature" },
  { boy: "Atlas", girl: "Stella", reason: "Strong celestial and mythological pairing", style: "Modern" },
  { boy: "Finn", girl: "Isla", reason: "Celtic names with breezy, island charm", style: "Celtic" },
  { boy: "Declan", girl: "Maeve", reason: "Irish names with strong cultural identity", style: "Celtic" },
  { boy: "Aiden", girl: "Nora", reason: "Irish-origin names that sound fresh and modern", style: "Celtic" },
  { boy: "Connor", girl: "Fiona", reason: "Classic Irish names with warm, friendly feel", style: "Celtic" },
  { boy: "Callum", girl: "Freya", reason: "Scottish and Norse names with mystical quality", style: "Celtic" },
  { boy: "Miles", girl: "Chloe", reason: "Names of similar popularity and modern classic status", style: "Modern" },
  { boy: "Cooper", girl: "Piper", reason: "Occupational surname names with upbeat energy", style: "Modern" },
  { boy: "Carter", girl: "Avery", reason: "Surname names with unisex appeal", style: "Modern" },
  { boy: "Hudson", girl: "Riley", reason: "Modern surname-style with contemporary edge", style: "Modern" },
  { boy: "Grayson", girl: "Paisley", reason: "Trendy names with distinctive sounds", style: "Modern" },
  { boy: "Wyatt", girl: "Scarlett", reason: "Western-meets-Southern charm", style: "Modern" },
  { boy: "Sawyer", girl: "Quinn", reason: "Strong unisex-leaning names", style: "Modern" },
  { boy: "Colton", girl: "Brooklyn", reason: "Contemporary place and surname names", style: "Modern" },
  { boy: "Zachary", girl: "Zoe", reason: "Both start with 'Z', energetic and lively", style: "Modern" },
  { boy: "Nicholas", girl: "Natalie", reason: "Both start with 'N', classic sophistication", style: "Classic" },
  { boy: "Christopher", girl: "Catherine", reason: "Traditional formal names with royal roots", style: "Classic" },
  { boy: "Michael", girl: "Michelle", reason: "Complementary masculine and feminine forms", style: "Classic" },
  { boy: "Anthony", girl: "Anastasia", reason: "Both start with 'A', romantic European feel", style: "Classic" },
  { boy: "Vincent", girl: "Vivienne", reason: "Both start with 'V', artistic and sophisticated", style: "Classic" },
  { boy: "Dominic", girl: "Delilah", reason: "Strong 'D' names with passionate energy", style: "Modern" },
  { boy: "Patrick", girl: "Patricia", reason: "Classic Irish names in both forms", style: "Classic" },
  { boy: "Maximus", girl: "Maxine", reason: "Strong names sharing 'Max' root", style: "Modern" },
  { boy: "Julian", girl: "Julia", reason: "Timeless Roman names with shared heritage", style: "Classic" },
  { boy: "Adrian", girl: "Adriana", reason: "Elegant Latin names with similar rhythm", style: "Classic" },
  { boy: "Rafael", girl: "Raphael", reason: "Archangel names with artistic connections", style: "Biblical" },
  { boy: "Simon", girl: "Simone", reason: "Classic European names in both genders", style: "Classic" },
  { boy: "August", girl: "Augusta", reason: "Regal names meaning 'great' and 'venerable'", style: "Vintage" },
  { boy: "George", girl: "Georgia", reason: "Royal English names with shared root", style: "Royal" },
  { boy: "Charles", girl: "Charlotte", reason: "Royal British names, Charles and feminine form", style: "Royal" },
  { boy: "Frederick", girl: "Frederica", reason: "Germanic royal names with power and grace", style: "Royal" },
  { boy: "Louis", girl: "Louise", reason: "French royal names with elegant simplicity", style: "Royal" },
  { boy: "Philip", girl: "Philippa", reason: "Greek royal names meaning 'lover of horses'", style: "Royal" },
  { boy: "Edward", girl: "Edith", reason: "Anglo-Saxon names with 'Ed' beginning", style: "Vintage" },
  { boy: "Peter", girl: "Petra", reason: "Biblical names meaning 'rock' in both forms", style: "Biblical" },
  { boy: "Andre", girl: "Andrea", reason: "International names with artistic flair", style: "Modern" },
  { boy: "Ryan", girl: "Rylee", reason: "Irish surname names with modern twist", style: "Modern" },
  { boy: "Blake", girl: "Blair", reason: "Unisex Scottish surname names", style: "Modern" },
  { boy: "Jordan", girl: "Jordana", reason: "Biblical place name in both forms", style: "Modern" },
  { boy: "Cameron", girl: "Camryn", reason: "Scottish surname with modern spelling variations", style: "Modern" },
  { boy: "Tyler", girl: "Taylor", reason: "Occupational surname names with similar style", style: "Modern" },
  { boy: "Jesse", girl: "Jessie", reason: "Biblical name adapted for both genders", style: "Biblical" },
  { boy: "Morgan", girl: "Meredith", reason: "Welsh names with mystical connections", style: "Celtic" },
  { boy: "Tristan", girl: "Isolde", reason: "Legendary lovers from Arthurian romance", style: "Literary" },
  { boy: "Romeo", girl: "Juliet", reason: "Shakespeare's iconic tragic lovers", style: "Literary" },
  { boy: "Atticus", girl: "Scout", reason: "Father and daughter from 'To Kill a Mockingbird'", style: "Literary" },
  { boy: "Holden", girl: "Phoebe", reason: "Siblings from 'The Catcher in the Rye'", style: "Literary" },
  { boy: "Edmund", girl: "Lucy", reason: "Narnia siblings with classic British charm", style: "Literary" },
  { boy: "Dante", girl: "Beatrice", reason: "Poet and muse from Divine Comedy", style: "Literary" },
  { boy: "Heathcliff", girl: "Catherine", reason: "Passionate duo from 'Wuthering Heights'", style: "Literary" },
  { boy: "Darcy", girl: "Elizabeth", reason: "Pride and Prejudice romantic leads", style: "Literary" },
  { boy: "Rhett", girl: "Scarlett", reason: "Gone with the Wind's tempestuous pair", style: "Literary" },
  { boy: "Gatsby", girl: "Daisy", reason: "The Great Gatsby's central characters", style: "Literary" },
  { boy: "Orlando", girl: "Rosalind", reason: "Shakespeare's 'As You Like It' lovers", style: "Literary" },
  { boy: "Phineas", girl: "Josephine", reason: "Classic literary names with vintage appeal", style: "Literary" },
  { boy: "Griffin", girl: "Gwendolyn", reason: "Mythical and Welsh names with 'G' start", style: "Celtic" },
  { boy: "Bodhi", girl: "Aria", reason: "Spiritual and musical names with modern appeal", style: "Modern" },
  { boy: "Caspian", girl: "Seraphina", reason: "Romantic, adventurous names with grandeur", style: "Literary" },
  { boy: "Magnus", girl: "Magnolia", reason: "Both mean 'great', strong and floral", style: "Vintage" },
  { boy: "Otto", girl: "Octavia", reason: "Vintage names with 'O' beginning and strong sound", style: "Vintage" },
  { boy: "Bruno", girl: "Bianca", reason: "Italian names with 'B' start, bold and bright", style: "Modern" },
  { boy: "Enzo", girl: "Elena", reason: "Italian names with romantic Mediterranean feel", style: "Modern" },
  { boy: "Marco", girl: "Maria", reason: "Classic Italian names with timeless appeal", style: "Classic" },
  { boy: "Diego", girl: "Lucia", reason: "Spanish names with warm, welcoming sounds", style: "Modern" },
  { boy: "Santiago", girl: "Sofia", reason: "Spanish names with international popularity", style: "Modern" },
  { boy: "Rafael", girl: "Rosa", reason: "Spanish names with artistic and natural elements", style: "Modern" },
  { boy: "Xavier", girl: "Ximena", reason: "Distinctive 'X' names with Spanish roots", style: "Modern" },
  { boy: "Mateo", girl: "Valentina", reason: "Romance language names with lovely flow", style: "Modern" },
]

export default function BrotherSisterPairsPage() {
  const [favorites, setFavorites] = useState<Set<string>>(new Set())
  const [filterStyle, setFilterStyle] = useState<string>('All')

  const styles = ['All', ...Array.from(new Set(namePairs.map(p => p.style)))]

  const filteredPairs = filterStyle === 'All'
    ? namePairs
    : namePairs.filter(p => p.style === filterStyle)

  const toggleFavorite = (boy: string, girl: string) => {
    const key = `${boy}-${girl}`
    const newFavorites = new Set(favorites)
    if (newFavorites.has(key)) {
      newFavorites.delete(key)
    } else {
      newFavorites.add(key)
    }
    setFavorites(newFavorites)
  }

  const isFavorite = (boy: string, girl: string) => {
    return favorites.has(`${boy}-${girl}`)
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero */}
      <div className="text-center mb-12">
        <Link href="/sibling-names/" className="text-purple-600 hover:text-purple-700 text-sm font-medium mb-4 inline-block">
          ← Back to Sibling Names
        </Link>
        <span className="text-5xl mb-4 block">👦👧</span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Brother & Sister Name Pairs
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {namePairs.length} perfect name combinations for a boy and girl sibling duo. These pairs complement
          each other beautifully while giving each child their own distinct identity.
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
                ? 'bg-purple-600 text-white'
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
              isFavorite(pair.boy, pair.girl)
                ? 'border-purple-400 bg-purple-50'
                : 'border-gray-200 hover:border-purple-300'
            }`}
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl font-bold text-secondary-600">{pair.boy}</span>
                  <span className="text-gray-400">&</span>
                  <span className="text-2xl font-bold text-primary-600">{pair.girl}</span>
                </div>
                <span className="inline-block text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">
                  {pair.style}
                </span>
              </div>
              <button
                onClick={() => toggleFavorite(pair.boy, pair.girl)}
                className="text-2xl hover:scale-110 transition"
              >
                {isFavorite(pair.boy, pair.girl) ? '❤️' : '🤍'}
              </button>
            </div>
            <p className="text-gray-600 text-sm">{pair.reason}</p>
          </div>
        ))}
      </div>

      {/* Why These Work */}
      <section className="mb-12 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Brother-Sister Pairs Are Special</h2>
        <div className="space-y-3 text-gray-700">
          <p>
            Naming a brother and sister allows for wonderful creative freedom. Unlike same-gender siblings,
            you can explore both masculine and feminine naming traditions without worrying about one name
            overshadowing the other.
          </p>
          <p>
            The best brother-sister combinations share a common thread - whether it's origin, style, or meaning -
            while celebrating the distinct identities of both children. They sound harmonious when said together
            but never feel like a forced "set."
          </p>
        </div>
      </section>

      {/* Related Links */}
      <section className="bg-gray-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore More Sibling Names</h2>
        <div className="grid md:grid-cols-4 gap-4">
          <Link href="/sibling-names/two-sisters/" className="bg-white hover:bg-pink-50 border rounded-lg p-4 text-center transition">
            <span className="font-medium text-pink-600">Two Sisters →</span>
          </Link>
          <Link href="/sibling-names/two-brothers/" className="bg-white hover:bg-blue-50 border rounded-lg p-4 text-center transition">
            <span className="font-medium text-blue-600">Two Brothers →</span>
          </Link>
          <Link href="/sibling-names/three-kids/" className="bg-white hover:bg-emerald-50 border rounded-lg p-4 text-center transition">
            <span className="font-medium text-emerald-600">Three Kids →</span>
          </Link>
          <Link href="/sibling-names/matching-first-letters/" className="bg-white hover:bg-purple-50 border rounded-lg p-4 text-center transition">
            <span className="font-medium text-purple-600">Same Letter →</span>
          </Link>
        </div>
      </section>
    </div>
  )
}

'use client'

import Link from 'next/link'
import { useState } from 'react'

interface TwinPair {
  boy: string
  girl: string
  reason: string
  style: string
}

const twinPairs: TwinPair[] = [
  { boy: "Alexander", girl: "Alexandra", reason: "Perfect masculine and feminine forms of the same name", style: "Classic" },
  { boy: "Gabriel", girl: "Gabriella", reason: "Angelic names in matching forms", style: "Biblical" },
  { boy: "Julian", girl: "Julia", reason: "Roman names with shared heritage", style: "Classic" },
  { boy: "Daniel", girl: "Danielle", reason: "Biblical names in both genders", style: "Biblical" },
  { boy: "Adrian", girl: "Adriana", reason: "Latin names with elegant flow", style: "Classic" },
  { boy: "Oliver", girl: "Olivia", reason: "Most popular complementary names", style: "Modern" },
  { boy: "Noah", girl: "Emma", reason: "Top trending names that sound harmonious", style: "Modern" },
  { boy: "Ethan", girl: "Ava", reason: "Strong modern names with simple elegance", style: "Modern" },
  { boy: "Liam", girl: "Sophia", reason: "International favorites with global appeal", style: "Modern" },
  { boy: "Lucas", girl: "Luna", reason: "Both start with L, celestial connection", style: "Modern" },
  { boy: "Benjamin", girl: "Charlotte", reason: "Classic vintage names with royal charm", style: "Vintage" },
  { boy: "Theodore", girl: "Eleanor", reason: "Vintage names both ending in -or/-nor", style: "Vintage" },
  { boy: "Henry", girl: "Grace", reason: "Short regal names with timeless quality", style: "Royal" },
  { boy: "William", girl: "Elizabeth", reason: "British royal names with rich history", style: "Royal" },
  { boy: "James", girl: "Rose", reason: "Classic simple names, timeless pairing", style: "Classic" },
  { boy: "Samuel", girl: "Abigail", reason: "Biblical names with traditional values", style: "Biblical" },
  { boy: "Isaac", girl: "Rebecca", reason: "Biblical couple from the same story", style: "Biblical" },
  { boy: "Elijah", girl: "Eliana", reason: "Both begin with Eli, Hebrew roots", style: "Biblical" },
  { boy: "Joshua", girl: "Hannah", reason: "Strong biblical heritage, soft sounds", style: "Biblical" },
  { boy: "Matthew", girl: "Naomi", reason: "Biblical names with gentle quality", style: "Biblical" },
  { boy: "Sebastian", girl: "Isabella", reason: "Romantic flowing names with Latin roots", style: "Classic" },
  { boy: "Mason", girl: "Harper", reason: "Modern surname-style names", style: "Modern" },
  { boy: "Logan", girl: "Madison", reason: "Contemporary names with gender-neutral vibe", style: "Modern" },
  { boy: "Jackson", girl: "Addison", reason: "Trendy -son ending creates connection", style: "Modern" },
  { boy: "Carter", girl: "Avery", reason: "Unisex surname names with modern edge", style: "Modern" },
  { boy: "Hudson", girl: "Riley", reason: "Surname names with contemporary feel", style: "Modern" },
  { boy: "Felix", girl: "Hazel", reason: "Vintage names with nature and happiness", style: "Vintage" },
  { boy: "Arthur", girl: "Pearl", reason: "Old-fashioned gems making comeback", style: "Vintage" },
  { boy: "Oscar", girl: "Violet", reason: "Turn-of-century names with modern appeal", style: "Vintage" },
  { boy: "Jasper", girl: "Alice", reason: "Charming vintage names with literary ties", style: "Vintage" },
  { boy: "Leo", girl: "Lily", reason: "Short nature-inspired names", style: "Nature" },
  { boy: "River", girl: "Willow", reason: "Flowing nature names with gentle quality", style: "Nature" },
  { boy: "Fox", girl: "Wren", reason: "Bold animal names with character", style: "Nature" },
  { boy: "Rowan", girl: "Sage", reason: "Unisex nature names with earthy vibes", style: "Nature" },
  { boy: "Phoenix", girl: "Aurora", reason: "Mythological and celestial names", style: "Modern" },
  { boy: "Atlas", girl: "Stella", reason: "Strong celestial and mythological pairing", style: "Modern" },
  { boy: "Finn", girl: "Isla", reason: "Celtic names with breezy island charm", style: "Celtic" },
  { boy: "Declan", girl: "Maeve", reason: "Irish names with strong cultural identity", style: "Celtic" },
  { boy: "Aiden", girl: "Nora", reason: "Irish-origin names, fresh and modern", style: "Celtic" },
  { boy: "Connor", girl: "Fiona", reason: "Classic Irish names with warmth", style: "Celtic" },
  { boy: "Miles", girl: "Chloe", reason: "Names of similar popularity and style", style: "Modern" },
  { boy: "Cooper", girl: "Piper", reason: "Occupational surnames with energy", style: "Modern" },
  { boy: "Grayson", girl: "Paisley", reason: "Trendy names with distinctive sounds", style: "Modern" },
  { boy: "Wyatt", girl: "Scarlett", reason: "Western-meets-Southern charm", style: "Modern" },
  { boy: "Nicholas", girl: "Natalie", reason: "Both start with N, classic sophistication", style: "Classic" },
  { boy: "Christopher", girl: "Catherine", reason: "Traditional formal names with royal roots", style: "Classic" },
  { boy: "Michael", girl: "Michelle", reason: "Classic masculine and feminine forms", style: "Classic" },
  { boy: "Anthony", girl: "Anastasia", reason: "Both start with A, romantic European feel", style: "Classic" },
  { boy: "Vincent", girl: "Vivienne", reason: "Both start with V, artistic sophistication", style: "Classic" },
  { boy: "Dominic", girl: "Delilah", reason: "Strong D-names with passionate energy", style: "Modern" },
  { boy: "Maximus", girl: "Maxine", reason: "Strong names sharing Max root", style: "Modern" },
  { boy: "George", girl: "Georgia", reason: "Royal English names with shared root", style: "Royal" },
  { boy: "Charles", girl: "Charlotte", reason: "British royal names in both forms", style: "Royal" },
  { boy: "Louis", girl: "Louise", reason: "French royal names with elegance", style: "Royal" },
  { boy: "Philip", girl: "Philippa", reason: "Greek royal names meaning lover of horses", style: "Royal" },
  { boy: "Edward", girl: "Edith", reason: "Anglo-Saxon names with Ed beginning", style: "Vintage" },
  { boy: "Peter", girl: "Petra", reason: "Biblical names meaning rock in both forms", style: "Biblical" },
  { boy: "Blake", girl: "Blair", reason: "Unisex Scottish surname names", style: "Modern" },
  { boy: "Jordan", girl: "Jordana", reason: "Biblical place name in both forms", style: "Modern" },
  { boy: "Cameron", girl: "Camryn", reason: "Scottish surname with spelling variations", style: "Modern" },
  { boy: "Tyler", girl: "Taylor", reason: "Occupational surnames with similar style", style: "Modern" },
  { boy: "Tristan", girl: "Isolde", reason: "Legendary lovers from Arthurian romance", style: "Literary" },
  { boy: "Romeo", girl: "Juliet", reason: "Shakespeare's iconic tragic lovers", style: "Literary" },
  { boy: "Atticus", girl: "Scout", reason: "Father and daughter from To Kill a Mockingbird", style: "Literary" },
  { boy: "Edmund", girl: "Lucy", reason: "Narnia siblings with British charm", style: "Literary" },
  { boy: "Dante", girl: "Beatrice", reason: "Poet and muse from Divine Comedy", style: "Literary" },
  { boy: "Darcy", girl: "Elizabeth", reason: "Pride and Prejudice romantic leads", style: "Literary" },
  { boy: "Bodhi", girl: "Aria", reason: "Spiritual and musical names with modern appeal", style: "Modern" },
  { boy: "Enzo", girl: "Elena", reason: "Italian names with romantic Mediterranean feel", style: "Modern" },
  { boy: "Marco", girl: "Maria", reason: "Classic Italian names with timeless appeal", style: "Classic" },
  { boy: "Diego", girl: "Lucia", reason: "Spanish names with warm, welcoming sounds", style: "Modern" },
  { boy: "Santiago", girl: "Sofia", reason: "Spanish names with international popularity", style: "Modern" },
  { boy: "Rafael", girl: "Rosa", reason: "Spanish names with artistic and natural elements", style: "Modern" },
  { boy: "Xavier", girl: "Ximena", reason: "Distinctive X-names with Spanish roots", style: "Modern" },
  { boy: "Mateo", girl: "Valentina", reason: "Romance language names with lovely flow", style: "Modern" },
  { boy: "Silas", girl: "Sadie", reason: "Vintage S-names with charm", style: "Vintage" },
  { boy: "Ezra", girl: "Esther", reason: "Biblical E-names with vintage appeal", style: "Biblical" },
  { boy: "Caleb", girl: "Claire", reason: "Biblical and French names starting with C", style: "Modern" },
  { boy: "August", girl: "Augusta", reason: "Regal names meaning great and venerable", style: "Vintage" },
  { boy: "Otto", girl: "Octavia", reason: "Vintage O-names with strong sound", style: "Vintage" },
  { boy: "Bruno", girl: "Bianca", reason: "Italian B-names, bold and bright", style: "Modern" },
  { boy: "Griffin", girl: "Gwendolyn", reason: "Mythical and Welsh names with G start", style: "Celtic" },
  { boy: "Magnus", girl: "Magnolia", reason: "Both mean great, strong and floral", style: "Vintage" },
  { boy: "Caspian", girl: "Seraphina", reason: "Romantic, adventurous names with grandeur", style: "Literary" },
  { boy: "Orion", girl: "Aurora", reason: "Celestial names from mythology", style: "Modern" },
  { boy: "Ashton", girl: "Aspen", reason: "Nature-inspired A-names with modern feel", style: "Modern" },
  { boy: "Sawyer", girl: "Quinn", reason: "Strong unisex-leaning names", style: "Modern" },
  { boy: "Colton", girl: "Brooklyn", reason: "Contemporary place and surname names", style: "Modern" },
  { boy: "Zachary", girl: "Zoe", reason: "Both start with Z, energetic and lively", style: "Modern" },
  { boy: "Reed", girl: "Jade", reason: "Nature-inspired monosyllabic names", style: "Nature" },
  { boy: "Ash", girl: "Ivy", reason: "Short botanical names with strength", style: "Nature" },
  { boy: "Levi", girl: "Lydia", reason: "Biblical L-names with elegance", style: "Biblical" },
  { boy: "Jonah", girl: "Joanna", reason: "Biblical Jo-names with grace", style: "Biblical" },
  { boy: "Simon", girl: "Simone", reason: "Classic European names in both genders", style: "Classic" },
  { boy: "Paul", girl: "Paula", reason: "Simple classic names with Latin roots", style: "Classic" },
  { boy: "Leon", girl: "Leona", reason: "Lion-themed names in both forms", style: "Classic" },
  { boy: "Morgan", girl: "Meredith", reason: "Welsh unisex names with mystical quality", style: "Celtic" },
]

export default function BoyGirlTwinsPage() {
  const [favorites, setFavorites] = useState<Set<string>>(new Set())
  const [filterStyle, setFilterStyle] = useState<string>('All')

  const styles = ['All', ...Array.from(new Set(twinPairs.map(p => p.style)))]

  const filteredPairs = filterStyle === 'All'
    ? twinPairs
    : twinPairs.filter(p => p.style === filterStyle)

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
        <Link href="/sibling-names/" className="text-violet-600 hover:text-violet-700 text-sm font-medium mb-4 inline-block">
          ← Back to Sibling Names
        </Link>
        <span className="text-5xl mb-4 block">👶👶</span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Boy-Girl Twin Names
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {twinPairs.length} perfect name combinations for fraternal twins. These pairs complement
          each other beautifully while celebrating both masculine and feminine naming traditions.
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
                ? 'bg-violet-600 text-white'
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
          <div className="inline-block bg-violet-100 text-violet-800 px-4 py-2 rounded-full">
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
                ? 'border-violet-400 bg-violet-50'
                : 'border-gray-200 hover:border-violet-300'
            }`}
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl font-bold text-secondary-600">{pair.boy}</span>
                  <span className="text-gray-400">&</span>
                  <span className="text-2xl font-bold text-primary-600">{pair.girl}</span>
                </div>
                <span className="inline-block text-xs bg-violet-100 text-violet-700 px-2 py-1 rounded">
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
      <section className="mb-12 bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Naming Boy-Girl Twins: The Best of Both Worlds</h2>
        <div className="space-y-3 text-gray-700">
          <p>
            Boy-girl twins offer unique naming opportunities. You can explore both masculine and feminine
            naming traditions while finding names that create a harmonious pair without being overly matched.
          </p>
          <p>
            The best boy-girl twin combinations share a common element - whether origin, style, meaning, or
            sound - while honoring the distinct identities of each child. Names like Alexander and Alexandra
            are clearly connected, while Oliver and Olivia share roots but feel more independent.
          </p>
          <p>
            Consider how the names will grow with your children. Will they still feel appropriate and balanced
            when your twins are adults?
          </p>
        </div>
      </section>

      {/* Related Links */}
      <section className="bg-gray-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore More Twin Names</h2>
        <div className="grid md:grid-cols-4 gap-4">
          <Link href="/sibling-names/twin-boys/" className="bg-white hover:bg-indigo-50 border rounded-lg p-4 text-center transition">
            <span className="font-medium text-indigo-600">Twin Boys →</span>
          </Link>
          <Link href="/sibling-names/twin-girls/" className="bg-white hover:bg-rose-50 border rounded-lg p-4 text-center transition">
            <span className="font-medium text-rose-600">Twin Girls →</span>
          </Link>
          <Link href="/sibling-names/brother-sister-pairs/" className="bg-white hover:bg-purple-50 border rounded-lg p-4 text-center transition">
            <span className="font-medium text-purple-600">Brother-Sister Pairs →</span>
          </Link>
          <Link href="/sibling-names/same-origin/" className="bg-white hover:bg-emerald-50 border rounded-lg p-4 text-center transition">
            <span className="font-medium text-emerald-600">Same Origin →</span>
          </Link>
        </div>
      </section>
    </div>
  )
}

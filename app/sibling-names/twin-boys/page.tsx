'use client'

import Link from 'next/link'
import { useState } from 'react'

interface TwinPair {
  name1: string
  name2: string
  reason: string
  style: string
}

const twinPairs: TwinPair[] = [
  { name1: "Ethan", name2: "Evan", reason: "Similar sounds with distinct identities, both mean strong", style: "Modern" },
  { name1: "Jacob", name2: "Joshua", reason: "Classic biblical J-names with timeless appeal", style: "Biblical" },
  { name1: "Matthew", name2: "Michael", reason: "Traditional biblical M-names, both mean gift from God", style: "Biblical" },
  { name1: "Alexander", name2: "Sebastian", reason: "Grand classical names with royal heritage", style: "Classic" },
  { name1: "Oliver", name2: "Oscar", reason: "Vintage O-names making a strong comeback", style: "Vintage" },
  { name1: "Noah", name2: "Liam", reason: "Top trending short names with international appeal", style: "Modern" },
  { name1: "Benjamin", name2: "William", reason: "Timeless names with great nickname options", style: "Classic" },
  { name1: "Henry", name2: "Charlie", reason: "British royal names with friendly charm", style: "Royal" },
  { name1: "James", name2: "John", reason: "Classic one-syllable names with strength", style: "Classic" },
  { name1: "Daniel", name2: "David", reason: "Biblical D-names with enduring popularity", style: "Biblical" },
  { name1: "Samuel", name2: "Nathan", reason: "Hebrew names with gentle sophistication", style: "Biblical" },
  { name1: "Isaac", name2: "Isaiah", reason: "Biblical I-names with lyrical quality", style: "Biblical" },
  { name1: "Elijah", name2: "Elias", reason: "Variations of the same biblical name", style: "Biblical" },
  { name1: "Gabriel", name2: "Raphael", reason: "Archangel names with divine connection", style: "Biblical" },
  { name1: "Caleb", name2: "Levi", reason: "Biblical names with modern edge", style: "Biblical" },
  { name1: "Lucas", name2: "Logan", reason: "Modern L-names with strong presence", style: "Modern" },
  { name1: "Mason", name2: "Landon", reason: "Contemporary surname names", style: "Modern" },
  { name1: "Carter", name2: "Cooper", reason: "Occupational surname names with energy", style: "Modern" },
  { name1: "Hudson", name2: "Harrison", reason: "Surname names with distinguished feel", style: "Modern" },
  { name1: "Jackson", name2: "Grayson", reason: "Trendy -son ending names", style: "Modern" },
  { name1: "Wyatt", name2: "Weston", reason: "Western-inspired W-names", style: "Modern" },
  { name1: "Sawyer", name2: "Hunter", reason: "Rugged occupational names", style: "Modern" },
  { name1: "Theodore", name2: "Thaddeus", reason: "Vintage Th-names with sophistication", style: "Vintage" },
  { name1: "Arthur", name2: "Alfred", reason: "Old English names with noble heritage", style: "Vintage" },
  { name1: "Felix", name2: "Jasper", reason: "Vintage names with quirky charm", style: "Vintage" },
  { name1: "Leo", name2: "Max", reason: "Short, punchy vintage names", style: "Vintage" },
  { name1: "August", name2: "Otto", reason: "Vintage Germanic names gaining popularity", style: "Vintage" },
  { name1: "Finn", name2: "Flynn", reason: "Irish names with adventurous spirit", style: "Celtic" },
  { name1: "Declan", name2: "Kieran", reason: "Classic Irish names with strength", style: "Celtic" },
  { name1: "Aiden", name2: "Caden", reason: "Modern Irish-origin names with -den ending", style: "Celtic" },
  { name1: "Connor", name2: "Collin", reason: "Irish C-names with friendly appeal", style: "Celtic" },
  { name1: "Rowan", name2: "Ronan", reason: "Celtic nature-inspired names", style: "Celtic" },
  { name1: "River", name2: "Ridge", reason: "Nature names with rugged masculinity", style: "Nature" },
  { name1: "Forest", name2: "Fox", reason: "Bold nature names with character", style: "Nature" },
  { name1: "Sage", name2: "Stone", reason: "Earthy nature names with strength", style: "Nature" },
  { name1: "Phoenix", name2: "Atlas", reason: "Mythological names with power", style: "Modern" },
  { name1: "Orion", name2: "Apollo", reason: "Celestial and mythological pairing", style: "Classic" },
  { name1: "Miles", name2: "Milo", reason: "Vintage names with similar sounds", style: "Vintage" },
  { name1: "Silas", name2: "Simon", reason: "Biblical Si-names with classic appeal", style: "Biblical" },
  { name1: "Dominic", name2: "Damian", reason: "Strong D-names with Latin roots", style: "Classic" },
  { name1: "Vincent", name2: "Victor", reason: "Latin V-names meaning conqueror", style: "Classic" },
  { name1: "Adrian", name2: "Julian", reason: "Roman names with sophisticated sound", style: "Classic" },
  { name1: "Marcus", name2: "Martin", reason: "Strong Roman/Latin M-names", style: "Classic" },
  { name1: "Patrick", name2: "Pierce", reason: "Irish P-names with distinction", style: "Celtic" },
  { name1: "Xavier", name2: "Xander", reason: "X-names with modern edge", style: "Modern" },
  { name1: "Zachary", name2: "Zane", reason: "Z-names with energetic vibe", style: "Modern" },
  { name1: "Nicholas", name2: "Nathaniel", reason: "Classic N-names with nickname versatility", style: "Classic" },
  { name1: "Christopher", name2: "Christian", reason: "Christ-bearing names with meaning", style: "Classic" },
  { name1: "Andrew", name2: "Anthony", reason: "Classic A-names with timeless appeal", style: "Classic" },
  { name1: "Ryan", name2: "Riley", reason: "Irish surname names with modern feel", style: "Modern" },
  { name1: "Blake", name2: "Bryce", reason: "Modern B-names with strength", style: "Modern" },
  { name1: "Cole", name2: "Cash", reason: "Short, strong modern names", style: "Modern" },
  { name1: "Grant", name2: "Graham", reason: "Scottish surname names", style: "Celtic" },
  { name1: "Brooks", name2: "Banks", reason: "Nature-inspired surname names", style: "Modern" },
  { name1: "Preston", name2: "Parker", reason: "Preppy surname names", style: "Modern" },
  { name1: "Bentley", name2: "Brantley", reason: "Modern B-names with style", style: "Modern" },
  { name1: "Camden", name2: "Carson", reason: "Contemporary C-names with edge", style: "Modern" },
  { name1: "Austin", name2: "Ashton", reason: "Place and surname names with A-start", style: "Modern" },
  { name1: "Tyler", name2: "Taylor", reason: "Occupational surname names", style: "Modern" },
  { name1: "Jordan", name2: "Justin", reason: "J-names with 90s comeback appeal", style: "Modern" },
  { name1: "Derek", name2: "Eric", reason: "Classic -ric ending names", style: "Classic" },
  { name1: "Peter", name2: "Paul", reason: "Biblical apostle names, simple and strong", style: "Biblical" },
  { name1: "Philip", name2: "Timothy", reason: "Biblical names with gentlemanly quality", style: "Biblical" },
  { name1: "Thomas", name2: "Tobias", reason: "Biblical T-names with classic appeal", style: "Biblical" },
  { name1: "Jonah", name2: "Micah", reason: "Biblical names ending in -ah", style: "Biblical" },
  { name1: "Asher", name2: "Gideon", reason: "Biblical names with modern popularity", style: "Biblical" },
  { name1: "Ezra", name2: "Emmett", reason: "Vintage E-names with strength", style: "Vintage" },
  { name1: "Luca", name2: "Nico", reason: "Italian names with Mediterranean charm", style: "Modern" },
  { name1: "Marco", name2: "Matteo", reason: "Italian M-names with style", style: "Modern" },
  { name1: "Leonardo", name2: "Lorenzo", reason: "Italian names with artistic flair", style: "Classic" },
  { name1: "Giovanni", name2: "Giuseppe", reason: "Traditional Italian names", style: "Classic" },
  { name1: "Romeo", name2: "Rocco", reason: "Italian R-names with passion", style: "Modern" },
  { name1: "Diego", name2: "Santiago", reason: "Spanish names with strength", style: "Modern" },
  { name1: "Carlos", name2: "Luis", reason: "Classic Spanish names", style: "Classic" },
  { name1: "Miguel", name2: "Manuel", reason: "Traditional Spanish M-names", style: "Classic" },
  { name1: "Rafael", name2: "Rodrigo", reason: "Spanish R-names with flair", style: "Modern" },
  { name1: "Mateo", name2: "Maximus", reason: "Spanish and Roman names with Max connection", style: "Modern" },
  { name1: "Kingston", name2: "Princeton", reason: "Regal place names", style: "Modern" },
  { name1: "Ace", name2: "Rex", reason: "Short, powerful names meaning number one and king", style: "Modern" },
  { name1: "Jett", name2: "Cruz", reason: "Edgy modern names with attitude", style: "Modern" },
  { name1: "Knox", name2: "Kane", reason: "Strong K-names with impact", style: "Modern" },
  { name1: "Dash", name2: "Duke", reason: "Spirited names with vintage charm", style: "Modern" },
  { name1: "Griffin", name2: "Gavin", reason: "Celtic G-names with strength", style: "Celtic" },
  { name1: "Tristan", name2: "Lancelot", reason: "Knights of the Round Table", style: "Literary" },
  { name1: "Atticus", name2: "Augustus", reason: "Roman names with literary connections", style: "Literary" },
  { name1: "Holden", name2: "Huck", reason: "Literary American heroes", style: "Literary" },
  { name1: "Darcy", name2: "Gatsby", reason: "Classic literary leading men", style: "Literary" },
  { name1: "Edmund", name2: "Peter", reason: "Narnia kings with nobility", style: "Literary" },
  { name1: "Dante", name2: "Dorian", reason: "Literary D-names with depth", style: "Literary" },
  { name1: "Byron", name2: "Keats", reason: "Poet surnames for literary parents", style: "Literary" },
  { name1: "George", name2: "Edward", reason: "British royal names with tradition", style: "Royal" },
  { name1: "Charles", name2: "Louis", reason: "European royal names", style: "Royal" },
  { name1: "Frederick", name2: "Wilhelm", reason: "Germanic royal names", style: "Royal" },
  { name1: "Albert", name2: "Ernest", reason: "Victorian royal names", style: "Royal" },
  { name1: "Magnus", name2: "Maximus", reason: "Names meaning great and greatest", style: "Classic" },
  { name1: "Bodhi", name2: "Zen", reason: "Spiritual names with peaceful meaning", style: "Modern" },
  { name1: "Kai", name2: "Cruz", reason: "International short names with ocean connections", style: "Modern" },
  { name1: "Enzo", name2: "Bruno", reason: "Italian names with strong sounds", style: "Modern" },
]

export default function TwinBoysPage() {
  const [favorites, setFavorites] = useState<Set<string>>(new Set())
  const [filterStyle, setFilterStyle] = useState<string>('All')

  const styles = ['All', ...Array.from(new Set(twinPairs.map(p => p.style)))]

  const filteredPairs = filterStyle === 'All'
    ? twinPairs
    : twinPairs.filter(p => p.style === filterStyle)

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
        <span className="text-5xl mb-4 block">👶👶</span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Twin Boy Names
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {twinPairs.length} strong name pairs perfect for twin brothers. These combinations coordinate
          beautifully while giving each boy his own distinct identity.
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
                ? 'bg-indigo-600 text-white'
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
          <div className="inline-block bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full">
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
                ? 'border-indigo-400 bg-indigo-50'
                : 'border-gray-200 hover:border-indigo-300'
            }`}
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl font-bold text-secondary-600">{pair.name1}</span>
                  <span className="text-gray-400">&</span>
                  <span className="text-2xl font-bold text-secondary-600">{pair.name2}</span>
                </div>
                <span className="inline-block text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded">
                  {pair.style}
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
      <section className="mb-12 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Naming Twin Boys: Strength and Individuality</h2>
        <div className="space-y-3 text-gray-700">
          <p>
            Twin boy names should be strong and coordinated without being too matchy. The best combinations
            share a common heritage, style, or sound while ensuring each boy has his own distinct name.
          </p>
          <p>
            Consider how the names will sound in various contexts: on the sports field, in the classroom, and
            in professional settings. Names that work well together in childhood should also carry dignity
            into adulthood.
          </p>
          <p>
            Think about nickname options too. Theodore and Thaddeus are lovely together, but Theo and Thad
            have very different vibes from Ted and Tad.
          </p>
        </div>
      </section>

      {/* Related Links */}
      <section className="bg-gray-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore More Twin Names</h2>
        <div className="grid md:grid-cols-4 gap-4">
          <Link href="/sibling-names/twin-girls/" className="bg-white hover:bg-rose-50 border rounded-lg p-4 text-center transition">
            <span className="font-medium text-rose-600">Twin Girls →</span>
          </Link>
          <Link href="/sibling-names/boy-girl-twins/" className="bg-white hover:bg-purple-50 border rounded-lg p-4 text-center transition">
            <span className="font-medium text-purple-600">Boy-Girl Twins →</span>
          </Link>
          <Link href="/sibling-names/two-brothers/" className="bg-white hover:bg-blue-50 border rounded-lg p-4 text-center transition">
            <span className="font-medium text-blue-600">Two Brothers →</span>
          </Link>
          <Link href="/sibling-names/matching-first-letters/" className="bg-white hover:bg-emerald-50 border rounded-lg p-4 text-center transition">
            <span className="font-medium text-emerald-600">Same Letter →</span>
          </Link>
        </div>
      </section>
    </div>
  )
}

'use client'

import Link from 'next/link'
import { useState } from 'react'

interface NamePair {
  name1: string
  name2: string
  reason: string
  style: string
}

const namePairs: NamePair[] = [
  { name1: "Oliver", name2: "Oscar", reason: "Classic 'O' names with vintage appeal", style: "Vintage" },
  { name1: "William", name2: "Benjamin", reason: "Timeless British names with royal history", style: "Classic" },
  { name1: "Alexander", name2: "Theodore", reason: "Distinguished names with strong meanings", style: "Classic" },
  { name1: "Henry", name2: "Harry", reason: "Related names, Harry is diminutive of Henry", style: "Royal" },
  { name1: "James", name2: "John", reason: "Classic biblical names, simple and strong", style: "Biblical" },
  { name1: "Samuel", name2: "Sebastian", reason: "Both start with 'S', classic elegance", style: "Classic" },
  { name1: "Daniel", name2: "David", reason: "Biblical 'D' names with enduring appeal", style: "Biblical" },
  { name1: "Matthew", name2: "Michael", reason: "Biblical names starting with 'M'", style: "Biblical" },
  { name1: "Mason", name2: "Logan", reason: "Modern surname names with strong sounds", style: "Modern" },
  { name1: "Liam", name2: "Noah", reason: "Top trending names, short and powerful", style: "Modern" },
  { name1: "Ethan", name2: "Evan", reason: "Both start with 'E', similar style and era", style: "Modern" },
  { name1: "Aiden", name2: "Austin", reason: "Contemporary 'A' names with energy", style: "Modern" },
  { name1: "Carter", name2: "Cooper", reason: "Occupational surname names", style: "Modern" },
  { name1: "Jackson", name2: "Jaxon", reason: "Spelling variations of same name style", style: "Modern" },
  { name1: "Hunter", name2: "Hudson", reason: "Strong 'H' surname names", style: "Modern" },
  { name1: "Chase", name2: "Cole", reason: "Short, punchy modern names", style: "Modern" },
  { name1: "Felix", name2: "Jasper", reason: "Vintage names with cheerful meanings", style: "Vintage" },
  { name1: "Atlas", name2: "Orion", reason: "Mythological names with cosmic power", style: "Modern" },
  { name1: "River", name2: "Forest", reason: "Nature names with outdoor spirit", style: "Nature" },
  { name1: "Phoenix", name2: "Arrow", reason: "Bold, unique nature-inspired names", style: "Nature" },
  { name1: "Finn", name2: "Flynn", reason: "Irish names with similar sounds", style: "Celtic" },
  { name1: "Sage", name2: "Reed", reason: "Nature names with unisex appeal", style: "Nature" },
  { name1: "Dash", name2: "Knox", reason: "Short, punchy modern names", style: "Modern" },
  { name1: "Wolf", name2: "Bear", reason: "Bold animal names with wild spirit", style: "Nature" },
  { name1: "Wyatt", name2: "Wesley", reason: "Western-style 'W' names", style: "Modern" },
  { name1: "Maxwell", name2: "Marcus", reason: "Strong 'M' names with character", style: "Classic" },
  { name1: "Leo", name2: "Luca", reason: "Short 'L' names with international flair", style: "Modern" },
  { name1: "Arthur", name2: "Alfred", reason: "Vintage British names with 'A' start", style: "Vintage" },
  { name1: "Elijah", name2: "Ezra", reason: "Biblical names beginning with 'E'", style: "Biblical" },
  { name1: "Isaac", name2: "Isaiah", reason: "Biblical 'I' names with strong heritage", style: "Biblical" },
  { name1: "Joshua", name2: "Jonah", reason: "Biblical 'J' names with friendly vibes", style: "Biblical" },
  { name1: "Caleb", name2: "Colton", reason: "Strong 'C' names with modern appeal", style: "Modern" },
  { name1: "Nathan", name2: "Nathaniel", reason: "Full name and short form pairing", style: "Biblical" },
  { name1: "Gabriel", name2: "Raphael", reason: "Archangel names with divine meaning", style: "Biblical" },
  { name1: "Declan", name2: "Kieran", reason: "Irish names with strong heritage", style: "Celtic" },
  { name1: "Connor", name2: "Callum", reason: "Celtic names with warm sounds", style: "Celtic" },
  { name1: "Patrick", name2: "Sean", reason: "Classic Irish names", style: "Celtic" },
  { name1: "Rowan", name2: "Rory", reason: "Celtic names starting with 'R'", style: "Celtic" },
  { name1: "Miles", name2: "Milo", reason: "Similar vintage names with charm", style: "Vintage" },
  { name1: "Silas", name2: "Cyrus", reason: "Biblical names with vintage revival", style: "Biblical" },
  { name1: "Asher", name2: "Archer", reason: "Both start with 'A', modern yet classic", style: "Modern" },
  { name1: "Grayson", name2: "Greyson", reason: "Color-inspired surname names", style: "Modern" },
  { name1: "Lincoln", name2: "Landon", reason: "Presidential and place names with 'L'", style: "Modern" },
  { name1: "Sawyer", name2: "Spencer", reason: "Occupational surname names", style: "Modern" },
  { name1: "Beckett", name2: "Barrett", reason: "Literary surname names with 'B'", style: "Modern" },
  { name1: "Griffin", name2: "Graham", reason: "Strong 'G' names with character", style: "Modern" },
  { name1: "Elliot", name2: "Emmett", reason: "Vintage names with double letters", style: "Vintage" },
  { name1: "Lucas", name2: "Levi", reason: "Biblical 'L' names with modern appeal", style: "Biblical" },
  { name1: "Dominic", name2: "Damian", reason: "Strong 'D' names with Latin roots", style: "Classic" },
  { name1: "Vincent", name2: "Victor", reason: "Classic 'V' names meaning conquering", style: "Classic" },
  { name1: "Xavier", name2: "Xander", reason: "Distinctive 'X' names with power", style: "Modern" },
  { name1: "Zachary", name2: "Zane", reason: "Biblical and modern 'Z' names", style: "Modern" },
  { name1: "Bodhi", name2: "Kai", reason: "Short spiritual names with meaning", style: "Modern" },
  { name1: "Casper", name2: "Cassius", reason: "Vintage names starting with 'Cas'", style: "Vintage" },
  { name1: "Desmond", name2: "Duncan", reason: "Irish and Scottish 'D' names", style: "Celtic" },
  { name1: "Enzo", name2: "Marco", reason: "Italian names with Mediterranean flair", style: "Modern" },
  { name1: "Theo", name2: "Teo", reason: "Spelling variations with Greek roots", style: "Modern" },
  { name1: "Rhys", name2: "Reese", reason: "Welsh names with different spellings", style: "Celtic" },
  { name1: "Jude", name2: "Joel", reason: "Short biblical names with 'J'", style: "Biblical" },
  { name1: "Ace", name2: "Axel", reason: "Edgy 'A' names with attitude", style: "Modern" },
  { name1: "Blake", name2: "Brooks", reason: "One-syllable nature-inspired surnames", style: "Modern" },
  { name1: "Cash", name2: "Cruz", reason: "Short, punchy modern names", style: "Modern" },
  { name1: "Dante", name2: "Diego", reason: "Italian and Spanish 'D' names", style: "Modern" },
  { name1: "Eli", name2: "Enzo", reason: "Short 'E' names with international appeal", style: "Modern" },
  { name1: "Fox", name2: "Hawk", reason: "Bold animal names", style: "Nature" },
  { name1: "Gage", name2: "Grant", reason: "Single-syllable 'G' surnames", style: "Modern" },
  { name1: "Heath", name2: "Hayes", reason: "Nature-inspired 'H' surnames", style: "Modern" },
  { name1: "Ivan", name2: "Igor", reason: "Russian names with strong sounds", style: "Classic" },
  { name1: "Jesse", name2: "Jordan", reason: "Biblical unisex names", style: "Biblical" },
  { name1: "Kade", name2: "Kane", reason: "Short, strong 'K' names", style: "Modern" },
  { name1: "Leon", name2: "Louis", reason: "Classic European 'L' names", style: "Classic" },
  { name1: "Micah", name2: "Malachi", reason: "Biblical prophet names", style: "Biblical" },
  { name1: "Nash", name2: "Nolan", reason: "Irish surname names with 'N'", style: "Modern" },
  { name1: "Otto", name2: "Otis", reason: "Vintage 'O' names making comeback", style: "Vintage" },
  { name1: "Pierce", name2: "Preston", reason: "Sophisticated 'P' surname names", style: "Modern" },
  { name1: "Quinn", name2: "Quincy", reason: "Irish names with 'Q' start", style: "Celtic" },
  { name1: "Roman", name2: "Rafael", reason: "Strong 'R' names with history", style: "Classic" },
  { name1: "Sterling", name2: "Sullivan", reason: "Distinctive surname names", style: "Modern" },
  { name1: "Tristan", name2: "Trevor", reason: "Celtic 'T' names", style: "Celtic" },
  { name1: "Uriah", name2: "Ulysses", reason: "Rare biblical and mythological names", style: "Biblical" },
  { name1: "Vaughn", name2: "Vernon", reason: "Vintage 'V' names", style: "Vintage" },
  { name1: "Wade", name2: "Wells", reason: "Water-inspired 'W' names", style: "Nature" },
  { name1: "York", name2: "Yale", reason: "Place names with sophistication", style: "Modern" },
  { name1: "Zeke", name2: "Zion", reason: "Biblical 'Z' names with energy", style: "Biblical" },
  { name1: "August", name2: "Atticus", reason: "Vintage literary names with 'A'", style: "Literary" },
  { name1: "Brooks", name2: "Bennett", reason: "Preppy surname names with 'B'", style: "Modern" },
  { name1: "Camden", name2: "Clayton", reason: "Place-inspired surname names", style: "Modern" },
  { name1: "Deacon", name2: "Duke", reason: "Title and occupation names", style: "Modern" },
  { name1: "Edison", name2: "Emerson", reason: "Inventor and poet surname names", style: "Modern" },
  { name1: "Fletcher", name2: "Foster", reason: "Occupational 'F' surname names", style: "Modern" },
  { name1: "Gunner", name2: "Gideon", reason: "Strong 'G' warrior names", style: "Modern" },
  { name1: "Harvey", name2: "Hugo", reason: "Vintage 'H' names reviving", style: "Vintage" },
  { name1: "Jasper", name2: "Julian", reason: "Vintage 'J' names with class", style: "Vintage" },
  { name1: "Kingston", name2: "Knox", reason: "Strong 'K' place names", style: "Modern" },
  { name1: "Lionel", name2: "Lawrence", reason: "Classic 'L' names with dignity", style: "Classic" },
  { name1: "Magnus", name2: "Maximus", reason: "Powerful Latin names meaning great", style: "Classic" },
]

export default function TwoBrothersPage() {
  const [favorites, setFavorites] = useState<Set<string>>(new Set())
  const [filterStyle, setFilterStyle] = useState<string>('All')

  const styles = ['All', ...Array.from(new Set(namePairs.map(p => p.style)))]

  const filteredPairs = filterStyle === 'All'
    ? namePairs
    : namePairs.filter(p => p.style === filterStyle)

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
        <Link href="/sibling-names/" className="text-blue-600 hover:text-blue-700 text-sm font-medium mb-4 inline-block">
          ← Back to Sibling Names
        </Link>
        <span className="text-5xl mb-4 block">👦👦</span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Two Brothers Name Combinations
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {namePairs.length} strong name pairs perfect for brothers. Find names that sound great together
          while giving each boy his own distinct identity.
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
                ? 'bg-blue-600 text-white'
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
          <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
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
                ? 'border-blue-400 bg-blue-50'
                : 'border-gray-200 hover:border-blue-300'
            }`}
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl font-bold text-secondary-600">{pair.name1}</span>
                  <span className="text-gray-400">&</span>
                  <span className="text-2xl font-bold text-secondary-600">{pair.name2}</span>
                </div>
                <span className="inline-block text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
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

      {/* Tips Section */}
      <section className="mb-12 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Naming Two Brothers</h2>
        <div className="space-y-3 text-gray-700">
          <p>
            Brother names should have strength and character while maintaining individual identity.
            Consider names that share a common origin, start with the same letter, or have similar
            syllable counts for natural harmony.
          </p>
          <p>
            The best brother pairings balance coordination with distinctiveness, ensuring neither
            name overshadows the other while creating a cohesive family sound.
          </p>
        </div>
      </section>

      {/* Related Links */}
      <section className="bg-gray-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore More Sibling Names</h2>
        <div className="grid md:grid-cols-4 gap-4">
          <Link href="/sibling-names/brother-sister-pairs/" className="bg-white hover:bg-purple-50 border rounded-lg p-4 text-center transition">
            <span className="font-medium text-purple-600">Brother & Sister →</span>
          </Link>
          <Link href="/sibling-names/two-sisters/" className="bg-white hover:bg-pink-50 border rounded-lg p-4 text-center transition">
            <span className="font-medium text-pink-600">Two Sisters →</span>
          </Link>
          <Link href="/sibling-names/twin-boys/" className="bg-white hover:bg-indigo-50 border rounded-lg p-4 text-center transition">
            <span className="font-medium text-indigo-600">Twin Boys →</span>
          </Link>
          <Link href="/sibling-names/biblical-siblings/" className="bg-white hover:bg-green-50 border rounded-lg p-4 text-center transition">
            <span className="font-medium text-green-600">Biblical Names →</span>
          </Link>
        </div>
      </section>
    </div>
  )
}

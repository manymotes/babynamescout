'use client'

import Link from 'next/link'
import { useState } from 'react'

interface VintagePair {
  names: string[]
  decade: string
  style: string
}

const vintagePairs: VintagePair[] = [
  { names: ["Theodore", "Eleanor"], decade: "1900s", style: "Presidential" },
  { names: ["Arthur", "Pearl"], decade: "1900s", style: "Victorian" },
  { names: ["Oscar", "Violet"], decade: "1900s", style: "Floral & Literary" },
  { names: ["Felix", "Hazel"], decade: "1910s", style: "Nature & Happy" },
  { names: ["Walter", "Dorothy"], decade: "1920s", style: "Classic American" },
  { names: ["Ernest", "Lillian"], decade: "1920s", style: "Earnest & Floral" },
  { names: ["Harold", "Mildred"], decade: "1920s", style: "Genteel" },
  { names: ["Ralph", "Evelyn"], decade: "1920s", style: "Sophisticated" },
  { names: ["Raymond", "Helen"], decade: "1920s", style: "Bright & Light" },
  { names: ["Leonard", "Gladys"], decade: "1920s", style: "Noble & Sword" },
  { names: ["Howard", "Doris"], decade: "1930s", style: "High Guardian & Gift" },
  { names: ["Albert", "Mabel"], decade: "1930s", style: "Noble & Lovable" },
  { names: ["Eugene", "Lorraine"], decade: "1930s", style: "Well-born & French" },
  { names: ["Norman", "Shirley"], decade: "1930s", style: "North & Bright Meadow" },
  { names: ["Roy", "Norma"], decade: "1930s", style: "King & Pattern" },
  { names: ["Chester", "Edna"], decade: "1940s", style: "Camp & Pleasure" },
  { names: ["Floyd", "Joyce"], decade: "1940s", style: "Gray & Joyous" },
  { names: ["Vernon", "Betty"], decade: "1940s", style: "Spring & God's Oath" },
  { names: ["Stanley", "Barbara"], decade: "1940s", style: "Stony & Foreign" },
  { names: ["Warren", "Carol"], decade: "1950s", style: "Park Keeper & Song" },
  { names: ["Roger", "Linda"], decade: "1950s", style: "Fame & Pretty" },
  { names: ["Dennis", "Sandra"], decade: "1950s", style: "Follower & Defender" },
  { names: ["Gary", "Deborah"], decade: "1950s", style: "Spear & Bee" },
  { names: ["Larry", "Nancy"], decade: "1950s", style: "Laurel & Grace" },
  { names: ["Terry", "Susan"], decade: "1950s", style: "Ruler & Lily" },
  { names: ["Kenneth", "Karen"], decade: "1960s", style: "Handsome & Pure" },
  { names: ["Ronald", "Donna"], decade: "1960s", style: "Ruler & Lady" },
  { names: ["Mark", "Lisa"], decade: "1960s", style: "Warlike & God's Oath" },
  { names: ["Steven", "Michelle"], decade: "1960s", style: "Crown & God-like" },
  { names: ["Henry", "Grace"], decade: "1900s", style: "Royal Heritage" },
  { names: ["Jasper", "Alice"], decade: "1910s", style: "Gemstone & Noble" },
  { names: ["Leo", "Rose"], decade: "1910s", style: "Lion & Flower" },
  { names: ["Milo", "Ruby"], decade: "1920s", style: "Soldier & Precious Stone" },
  { names: ["Silas", "Clara"], decade: "1920s", style: "Forest & Bright" },
  { names: ["Ezra", "Ada"], decade: "1920s", style: "Helper & Noble" },
  { names: ["Amos", "Cora"], decade: "1920s", style: "Burden & Maiden" },
  { names: ["Otto", "Ida"], decade: "1920s", style: "Wealthy & Industrious" },
  { names: ["Hugo", "Vera"], decade: "1920s", style: "Mind & Truth" },
  { names: ["Clyde", "Bessie"], decade: "1930s", style: "Scottish & God's Oath" },
  { names: ["Lester", "Ethel"], decade: "1930s", style: "Camp & Noble" },
  { names: ["Rufus", "Alma"], decade: "1930s", style: "Red & Nurturing" },
  { names: ["Otis", "Opal"], decade: "1930s", style: "Wealthy & Gemstone" },
  { names: ["Homer", "Harriet"], decade: "1930s", style: "Pledge & Home Ruler" },
  { names: ["Elmer", "Elsie"], decade: "1940s", style: "Noble & God's Oath" },
  { names: ["Wilbur", "Winifred"], decade: "1940s", style: "Bright Will & Peace" },
  { names: ["Harvey", "Hilda"], decade: "1940s", style: "Battle Worthy" },
  { names: ["Dale", "Dawn"], decade: "1950s", style: "Valley & Morning" },
  { names: ["Bruce", "Brenda"], decade: "1950s", style: "Brush & Sword" },
  { names: ["Glen", "Gloria"], decade: "1950s", style: "Valley & Glory" },
  { names: ["Archie", "Agnes"], decade: "1910s", style: "Bold & Pure" },
  { names: ["Cecil", "Constance"], decade: "1910s", style: "Blind & Steadfast" },
  { names: ["Clarence", "Beatrice"], decade: "1920s", style: "Clear & Bringer of Joy" },
  { names: ["Willis", "Wilma"], decade: "1920s", style: "Resolute & Protection" },
  { names: ["Lyle", "Lucille"], decade: "1920s", style: "Island & Light" },
  { names: ["Marvin", "Marjorie"], decade: "1930s", style: "Sea Friend & Pearl" },
  { names: ["Milton", "Maxine"], decade: "1930s", style: "Mill Town & Greatest" },
  { names: ["Curtis", "Carolyn"], decade: "1940s", style: "Courteous & Free" },
  { names: ["Clifford", "Claudia"], decade: "1940s", style: "Ford by Cliff & Lame" },
  { names: ["Edmund", "Edith"], decade: "1900s", style: "Wealthy Protector & Prosperous" },
]

export default function VintagePairsPage() {
  const [favorites, setFavorites] = useState<Set<string>>(new Set())
  const [filterDecade, setFilterDecade] = useState<string>('All')

  const decades = ['All', ...Array.from(new Set(vintagePairs.map(p => p.decade)))]

  const filteredPairs = filterDecade === 'All'
    ? vintagePairs
    : vintagePairs.filter(p => p.decade === filterDecade)

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
        <span className="text-5xl mb-4 block">🎩</span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Vintage Sibling Name Pairs
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {vintagePairs.length} charming sibling name combinations from the 1900s-1960s. Classic
          names making a comeback with timeless appeal and nostalgic charm.
        </p>
      </div>

      {/* Filter */}
      <div className="mb-8 flex flex-wrap gap-2 justify-center">
        {decades.map(decade => (
          <button
            key={decade}
            onClick={() => setFilterDecade(decade)}
            className={`px-4 py-2 rounded-full font-medium transition ${
              filterDecade === decade
                ? 'bg-rose-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {decade}
          </button>
        ))}
      </div>

      {/* Favorites Counter */}
      {favorites.size > 0 && (
        <div className="mb-8 text-center">
          <div className="inline-block bg-rose-100 text-rose-800 px-4 py-2 rounded-full">
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
                ? 'border-rose-400 bg-rose-50'
                : 'border-gray-200 hover:border-rose-300'
            }`}
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  {pair.names.map((name, i) => (
                    <span key={i}>
                      <span className="text-xl font-bold text-rose-700">{name}</span>
                      {i < pair.names.length - 1 && <span className="text-gray-400 ml-2">&</span>}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-block text-xs bg-rose-100 text-rose-700 px-2 py-1 rounded">
                    {pair.decade}
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
            <p className="text-gray-600 text-sm">{pair.style}</p>
          </div>
        ))}
      </div>

      {/* Why These Work */}
      <section className="mb-12 bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Vintage Names Are Coming Back</h2>
        <div className="space-y-3 text-gray-700">
          <p>
            Vintage names are experiencing a major renaissance as parents seek names with history,
            substance, and character. These aren't your parents' names - they're your great-grandparents'
            names, and that generational distance makes them feel fresh again.
          </p>
          <p>
            From the turn of the century through the mid-20th century, naming trends evolved dramatically.
            Each decade had its favorites, and many of these names are now being rediscovered by modern
            parents who appreciate their classic sound and nostalgic charm.
          </p>
          <p>
            Vintage sibling pairs work beautifully together because they share the same era's sensibilities.
            Names like Theodore and Eleanor or Jasper and Alice feel cohesive while giving each child a
            distinctive identity rooted in timeless elegance.
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
          <Link href="/sibling-names/royal-names/" className="bg-white hover:bg-purple-50 border rounded-lg p-4 text-center transition">
            <span className="font-medium text-purple-600">Royal Names →</span>
          </Link>
          <Link href="/sibling-names/biblical-siblings/" className="bg-white hover:bg-blue-50 border rounded-lg p-4 text-center transition">
            <span className="font-medium text-blue-600">Biblical Names →</span>
          </Link>
          <Link href="/sibling-names/literary-inspired/" className="bg-white hover:bg-amber-50 border rounded-lg p-4 text-center transition">
            <span className="font-medium text-amber-600">Literary Names →</span>
          </Link>
        </div>
      </section>
    </div>
  )
}

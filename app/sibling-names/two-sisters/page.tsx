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
  { name1: "Emma", name2: "Ella", reason: "Similar sounds with 'E' start, classic and sweet", style: "Classic" },
  { name1: "Olivia", name2: "Sophia", reason: "Top-tier popular names with elegant endings", style: "Classic" },
  { name1: "Charlotte", name2: "Caroline", reason: "Both royal names with sophisticated charm", style: "Royal" },
  { name1: "Isabella", name2: "Gabriella", reason: "Romantic '-ella' endings with Italian flair", style: "Classic" },
  { name1: "Ava", name2: "Mia", reason: "Short, powerful three-letter names", style: "Modern" },
  { name1: "Grace", name2: "Faith", reason: "Virtue names with spiritual meaning", style: "Virtue" },
  { name1: "Rose", name2: "Lily", reason: "Classic floral names with timeless appeal", style: "Nature" },
  { name1: "Anna", name2: "Eva", reason: "Short biblical names with European charm", style: "Biblical" },
  { name1: "Elizabeth", name2: "Catherine", reason: "Royal British names with regal history", style: "Royal" },
  { name1: "Harper", name2: "Piper", reason: "Modern occupational names with '-er' endings", style: "Modern" },
  { name1: "Madison", name2: "Addison", reason: "Trendy '-son' surname names", style: "Modern" },
  { name1: "Aria", name2: "Lyra", reason: "Musical and celestial names", style: "Modern" },
  { name1: "Luna", name2: "Stella", reason: "Moon and star - celestial sisters", style: "Nature" },
  { name1: "Riley", name2: "Kylie", reason: "Modern names with '-ley' endings", style: "Modern" },
  { name1: "Chloe", name2: "Zoe", reason: "Greek names ending in the same sound", style: "Classic" },
  { name1: "Paisley", name2: "Kinsley", reason: "Trendy contemporary names with '-ley' pattern", style: "Modern" },
  { name1: "Aubrey", name2: "Audrey", reason: "Vintage names starting with 'Au'", style: "Vintage" },
  { name1: "Willow", name2: "Sage", reason: "Gentle nature names with earthy vibes", style: "Nature" },
  { name1: "Hazel", name2: "Violet", reason: "Vintage botanical names making a comeback", style: "Vintage" },
  { name1: "Luna", name2: "Nova", reason: "Celestial names with cosmic energy", style: "Modern" },
  { name1: "Ivy", name2: "Iris", reason: "Short botanical names with 'I' beginning", style: "Nature" },
  { name1: "Aurora", name2: "Celeste", reason: "Ethereal names meaning dawn and heavenly", style: "Modern" },
  { name1: "Wren", name2: "Dove", reason: "Delicate bird names with peaceful meanings", style: "Nature" },
  { name1: "Pearl", name2: "Ruby", reason: "Precious gemstone names", style: "Vintage" },
  { name1: "Juniper", name2: "Clover", reason: "Whimsical botanical names", style: "Nature" },
  { name1: "Alice", name2: "Clara", reason: "Victorian-era names with literary charm", style: "Vintage" },
  { name1: "Beatrice", name2: "Florence", reason: "Classic British names with vintage appeal", style: "Vintage" },
  { name1: "Penelope", name2: "Phoebe", reason: "Greek mythological names starting with 'P'", style: "Classic" },
  { name1: "Eleanor", name2: "Evelyn", reason: "Elegant vintage names with 'E' beginning", style: "Vintage" },
  { name1: "Amelia", name2: "Emilia", reason: "Classic names with slight spelling variations", style: "Classic" },
  { name1: "Natalie", name2: "Nicole", reason: "French-origin names starting with 'N'", style: "Classic" },
  { name1: "Scarlett", name2: "Savannah", reason: "Southern belle names with strong sounds", style: "Modern" },
  { name1: "Brooklyn", name2: "Kennedy", reason: "Place and surname names with modern edge", style: "Modern" },
  { name1: "Autumn", name2: "Summer", reason: "Seasonal sisters with nature connections", style: "Nature" },
  { name1: "Iris", name2: "Ivy", reason: "Short botanical 'I' names", style: "Nature" },
  { name1: "Maeve", name2: "Nora", reason: "Irish names with strong, simple elegance", style: "Celtic" },
  { name1: "Isla", name2: "Skye", reason: "Scottish island names with breezy feel", style: "Celtic" },
  { name1: "Fiona", name2: "Sienna", reason: "Names ending in '-na' with warm tones", style: "Modern" },
  { name1: "Quinn", name2: "Blair", reason: "Strong unisex Scottish surname names", style: "Modern" },
  { name1: "Rowan", name2: "Morgan", reason: "Celtic unisex names with mystical quality", style: "Celtic" },
  { name1: "Delilah", name2: "Dinah", reason: "Biblical names with similar sounds", style: "Biblical" },
  { name1: "Sarah", name2: "Hannah", reason: "Classic biblical names, palindrome Hannah", style: "Biblical" },
  { name1: "Leah", name2: "Rachel", reason: "Biblical sisters from Genesis", style: "Biblical" },
  { name1: "Ruth", name2: "Esther", reason: "Strong Old Testament heroines", style: "Biblical" },
  { name1: "Abigail", name2: "Naomi", reason: "Biblical names with gentle sounds", style: "Biblical" },
  { name1: "Miriam", name2: "Deborah", reason: "Strong female biblical leaders", style: "Biblical" },
  { name1: "Eden", name2: "Zion", reason: "Biblical place names with significance", style: "Biblical" },
  { name1: "Victoria", name2: "Alexandria", reason: "Grand historical names with regal bearing", style: "Royal" },
  { name1: "Margaret", name2: "Josephine", reason: "Classic royal names with vintage charm", style: "Royal" },
  { name1: "Diana", name2: "Camilla", reason: "British royal family names", style: "Royal" },
  { name1: "Anastasia", name2: "Tatiana", reason: "Russian imperial names with romance", style: "Royal" },
  { name1: "Adelaide", name2: "Matilda", reason: "Germanic royal names with vintage appeal", style: "Royal" },
  { name1: "Genevieve", name2: "Evangeline", reason: "French names with elegant '-ine' endings", style: "Classic" },
  { name1: "Juliette", name2: "Colette", reason: "French diminutives with '-ette' endings", style: "Classic" },
  { name1: "Margot", name2: "Simone", reason: "Chic French names with sophistication", style: "Classic" },
  { name1: "Celine", name2: "Nadine", reason: "French names ending in '-ine'", style: "Classic" },
  { name1: "Eloise", name2: "Louise", reason: "French names with '-ise' endings", style: "Classic" },
  { name1: "Seraphina", name2: "Josephina", reason: "Elaborate names with '-ina' endings", style: "Classic" },
  { name1: "Magnolia", name2: "Azalea", reason: "Southern botanical names with grandeur", style: "Nature" },
  { name1: "Dahlia", name2: "Zinnia", reason: "Uncommon flower names with uniqueness", style: "Nature" },
  { name1: "Poppy", name2: "Daisy", reason: "Cheerful flower names with vintage charm", style: "Nature" },
  { name1: "Jasmine", name2: "Violet", reason: "Fragrant floral names", style: "Nature" },
  { name1: "Lila", name2: "Layla", reason: "Similar spelling variations with Middle Eastern roots", style: "Modern" },
  { name1: "Maya", name2: "Mila", reason: "Short international names with 'M' beginning", style: "Modern" },
  { name1: "Elena", name2: "Eliana", reason: "Elegant names with 'El' beginning", style: "Modern" },
  { name1: "Lucia", name2: "Liana", reason: "Lyrical names with 'L' start and '-ia' endings", style: "Modern" },
  { name1: "Valentina", name2: "Francesca", reason: "Italian names with romantic flair", style: "Modern" },
  { name1: "Bianca", name2: "Chiara", reason: "Italian names meaning white and bright", style: "Modern" },
  { name1: "Ophelia", name2: "Cordelia", reason: "Shakespearean names with '-elia' endings", style: "Literary" },
  { name1: "Juliet", name2: "Rosalind", reason: "Shakespearean heroines with grace", style: "Literary" },
  { name1: "Hermione", name2: "Minerva", reason: "Literary and mythological wisdom names", style: "Literary" },
  { name1: "Scout", name2: "Atticus", reason: "Strong literary names from classic novels", style: "Literary" },
  { name1: "Lydia", name2: "Catherine", reason: "Pride and Prejudice Bennett sisters", style: "Literary" },
  { name1: "Matilda", name2: "Roald", reason: "Inspired by beloved children's author", style: "Literary" },
  { name1: "Jane", name2: "Bronte", reason: "Literary author-inspired pairing", style: "Literary" },
  { name1: "Avery", name2: "Riley", reason: "Unisex-leaning modern names", style: "Modern" },
  { name1: "Parker", name2: "Peyton", reason: "Surname names with 'P' beginning", style: "Modern" },
  { name1: "Sawyer", name2: "Spencer", reason: "Strong surname names with modern appeal", style: "Modern" },
  { name1: "Blake", name2: "Brooks", reason: "One-syllable surname names", style: "Modern" },
  { name1: "Reese", name2: "Ryan", reason: "Welsh surname names with unisex appeal", style: "Modern" },
  { name1: "Marlowe", name2: "Monroe", reason: "Sophisticated surname names", style: "Modern" },
  { name1: "Harlow", name2: "Hendrix", reason: "Hollywood and music-inspired surnames", style: "Modern" },
  { name1: "River", name2: "Rain", reason: "Nature names with water themes", style: "Nature" },
  { name1: "Sky", name2: "Star", reason: "Celestial nature names", style: "Nature" },
  { name1: "Ocean", name2: "Bay", reason: "Water-inspired nature names", style: "Nature" },
  { name1: "Meadow", name2: "Prairie", reason: "Landscape-inspired nature names", style: "Nature" },
  { name1: "Maple", name2: "Birch", reason: "Tree names with woodland charm", style: "Nature" },
  { name1: "Flora", name2: "Fauna", reason: "Latin nature names meaning flowers and animals", style: "Nature" },
  { name1: "Briar", name2: "Fern", reason: "Wild plant names with natural beauty", style: "Nature" },
  { name1: "Haven", name2: "Hope", reason: "Aspirational virtue names with 'H' start", style: "Virtue" },
  { name1: "Joy", name2: "Peace", reason: "Short, powerful virtue names", style: "Virtue" },
  { name1: "Mercy", name2: "Justice", reason: "Strong virtue names with meaning", style: "Virtue" },
  { name1: "Charity", name2: "Verity", reason: "Traditional virtue names", style: "Virtue" },
  { name1: "Harmony", name2: "Melody", reason: "Musical virtue names", style: "Virtue" },
  { name1: "Serenity", name2: "Trinity", reason: "Spiritual names ending in '-ity'", style: "Virtue" },
  { name1: "Genesis", name2: "Destiny", reason: "Modern spiritual concept names", style: "Modern" },
  { name1: "Phoenix", name2: "Ember", reason: "Fire-inspired mythological names", style: "Modern" },
]

export default function TwoSistersPage() {
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
        <Link href="/sibling-names/" className="text-pink-600 hover:text-pink-700 text-sm font-medium mb-4 inline-block">
          ← Back to Sibling Names
        </Link>
        <span className="text-5xl mb-4 block">👧👧</span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Two Sisters Name Combinations
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {namePairs.length} beautiful name pairs perfect for sisters. Find names that complement
          each other while celebrating each girl's unique personality.
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
                ? 'bg-pink-600 text-white'
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
          <div className="inline-block bg-pink-100 text-pink-800 px-4 py-2 rounded-full">
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
                ? 'border-pink-400 bg-pink-50'
                : 'border-gray-200 hover:border-pink-300'
            }`}
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl font-bold text-primary-600">{pair.name1}</span>
                  <span className="text-gray-400">&</span>
                  <span className="text-2xl font-bold text-primary-600">{pair.name2}</span>
                </div>
                <span className="inline-block text-xs bg-pink-100 text-pink-700 px-2 py-1 rounded">
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
      <section className="mb-12 bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Naming Two Sisters</h2>
        <div className="space-y-3 text-gray-700">
          <p>
            Sister names have a special bond - they should sound beautiful together while allowing each
            girl to shine individually. Avoid names that are too matchy or rhyme too heavily.
          </p>
          <p>
            Consider choosing names from the same style era (both vintage or both modern), with similar
            popularity levels, or sharing a cultural heritage. The goal is harmony without losing individuality.
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
          <Link href="/sibling-names/two-brothers/" className="bg-white hover:bg-blue-50 border rounded-lg p-4 text-center transition">
            <span className="font-medium text-blue-600">Two Brothers →</span>
          </Link>
          <Link href="/sibling-names/twin-girls/" className="bg-white hover:bg-rose-50 border rounded-lg p-4 text-center transition">
            <span className="font-medium text-rose-600">Twin Girls →</span>
          </Link>
          <Link href="/sibling-names/nature-themed/" className="bg-white hover:bg-green-50 border rounded-lg p-4 text-center transition">
            <span className="font-medium text-green-600">Nature Names →</span>
          </Link>
        </div>
      </section>
    </div>
  )
}

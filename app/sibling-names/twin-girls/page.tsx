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
  { name1: "Emma", name2: "Ella", reason: "Similar sounds with distinct identities, classic elegance", style: "Classic" },
  { name1: "Olivia", name2: "Sophia", reason: "Top trending names with timeless appeal", style: "Modern" },
  { name1: "Isabella", name2: "Gabriella", reason: "Flowing Italian names with -ella endings", style: "Classic" },
  { name1: "Ava", name2: "Eva", reason: "Nearly identical but distinctly different pronunciation", style: "Modern" },
  { name1: "Lily", name2: "Rose", reason: "Beautiful flower names, short and sweet", style: "Nature" },
  { name1: "Violet", name2: "Iris", reason: "Vintage floral names making a comeback", style: "Nature" },
  { name1: "Willow", name2: "Hazel", reason: "Nature-inspired with earthy sophistication", style: "Nature" },
  { name1: "Luna", name2: "Stella", reason: "Celestial names meaning moon and star", style: "Modern" },
  { name1: "Aurora", name2: "Celeste", reason: "Heavenly names with dreamy quality", style: "Modern" },
  { name1: "Grace", name2: "Faith", reason: "Classic virtue names with spiritual meaning", style: "Virtue" },
  { name1: "Hope", name2: "Joy", reason: "Simple, uplifting virtue names", style: "Virtue" },
  { name1: "Charlotte", name2: "Scarlett", reason: "Elegant names ending in -lotte/-lett", style: "Classic" },
  { name1: "Eleanor", name2: "Evelyn", reason: "Vintage names with noble sophistication", style: "Vintage" },
  { name1: "Amelia", name2: "Emilia", reason: "Nearly matching names with different origins", style: "Classic" },
  { name1: "Madison", name2: "Addison", reason: "Modern surname names with -son ending", style: "Modern" },
  { name1: "Harper", name2: "Piper", reason: "Occupational surname names with spunk", style: "Modern" },
  { name1: "Aria", name2: "Lyra", reason: "Musical and melodic names", style: "Modern" },
  { name1: "Maya", name2: "Mia", reason: "Short, international names starting with M", style: "Modern" },
  { name1: "Zoe", name2: "Chloe", reason: "Greek names with vibrant energy", style: "Classic" },
  { name1: "Ruby", name2: "Pearl", reason: "Precious gemstone names with vintage charm", style: "Vintage" },
  { name1: "Jade", name2: "Opal", reason: "Gemstone names with unique character", style: "Modern" },
  { name1: "Claire", name2: "Lucy", reason: "Both mean 'light', simple elegance", style: "Classic" },
  { name1: "Hannah", name2: "Anna", reason: "Classic palindrome names with biblical roots", style: "Biblical" },
  { name1: "Sarah", name2: "Leah", reason: "Timeless biblical names, sisters in scripture", style: "Biblical" },
  { name1: "Rebecca", name2: "Rachel", reason: "Biblical sisters with lasting popularity", style: "Biblical" },
  { name1: "Naomi", name2: "Ruth", reason: "Connected biblical figures with beautiful meanings", style: "Biblical" },
  { name1: "Abigail", name2: "Elizabeth", reason: "Classic biblical names with royal feel", style: "Biblical" },
  { name1: "Alice", name2: "Beatrice", reason: "Vintage literary names with whimsy", style: "Vintage" },
  { name1: "Hazel", name2: "Pearl", reason: "Old-fashioned nature and gem combination", style: "Vintage" },
  { name1: "Daisy", name2: "Poppy", reason: "Cheerful flower names with vintage appeal", style: "Nature" },
  { name1: "Ivy", name2: "Holly", reason: "Plant names with festive associations", style: "Nature" },
  { name1: "Autumn", name2: "Summer", reason: "Season names with warm, natural vibes", style: "Nature" },
  { name1: "Sage", name2: "Willow", reason: "Earthy botanical names with peaceful quality", style: "Nature" },
  { name1: "River", name2: "Rain", reason: "Water-inspired nature names", style: "Nature" },
  { name1: "Skye", name2: "Storm", reason: "Weather-inspired names with power", style: "Nature" },
  { name1: "Sophie", name2: "Sadie", reason: "Sweet S-names with vintage-modern blend", style: "Modern" },
  { name1: "Nora", name2: "Cora", reason: "Short, vintage names with -ora ending", style: "Vintage" },
  { name1: "Isla", name2: "Nola", reason: "Trendy island-inspired names", style: "Modern" },
  { name1: "Stella", name2: "Bella", reason: "Italian-origin names ending in -ella", style: "Modern" },
  { name1: "Victoria", name2: "Valentina", reason: "Regal V-names with romantic flair", style: "Royal" },
  { name1: "Catherine", name2: "Caroline", reason: "Royal C-names with timeless elegance", style: "Royal" },
  { name1: "Alexandra", name2: "Anastasia", reason: "Grand Russian royal names", style: "Royal" },
  { name1: "Arabella", name2: "Annabella", reason: "Elaborate -bella names with princess quality", style: "Classic" },
  { name1: "Penelope", name2: "Persephone", reason: "Greek mythological names with charm", style: "Classic" },
  { name1: "Athena", name2: "Diana", reason: "Powerful goddess names from different pantheons", style: "Classic" },
  { name1: "Juliet", name2: "Rosalind", reason: "Shakespearean heroines with romance", style: "Literary" },
  { name1: "Jane", name2: "Emily", reason: "Literary names honoring famous authors", style: "Literary" },
  { name1: "Scout", name2: "Harper", reason: "Literary and author-inspired modern names", style: "Literary" },
  { name1: "Bronte", name2: "Austen", reason: "Author surname names for literary parents", style: "Literary" },
  { name1: "Matilda", name2: "Ramona", reason: "Spirited literary heroines", style: "Literary" },
  { name1: "Maeve", name2: "Fiona", reason: "Irish names with Celtic charm", style: "Celtic" },
  { name1: "Sienna", name2: "Siena", reason: "Italian place name with slight spelling variation", style: "Modern" },
  { name1: "Brooklyn", name2: "London", reason: "Trendy city names", style: "Modern" },
  { name1: "Georgia", name2: "Florence", reason: "Place names with vintage sophistication", style: "Vintage" },
  { name1: "Adelaide", name2: "Josephine", reason: "Vintage formal names with nickname potential", style: "Vintage" },
  { name1: "Genevieve", name2: "Vivienne", reason: "French names with elegance and style", style: "Classic" },
  { name1: "Margot", name2: "Eloise", reason: "Chic French names with modern appeal", style: "Modern" },
  { name1: "Camille", name2: "Gabrielle", reason: "Classic French names ending in -lle", style: "Classic" },
  { name1: "Adeline", name2: "Madeline", reason: "French-origin names with -line ending", style: "Classic" },
  { name1: "Quinn", name2: "Wren", reason: "Short, unisex-leaning nature names", style: "Modern" },
  { name1: "Riley", name2: "Avery", reason: "Unisex surname names with modern edge", style: "Modern" },
  { name1: "Taylor", name2: "Morgan", reason: "Classic unisex names with broad appeal", style: "Modern" },
  { name1: "Peyton", name2: "Parker", reason: "Sporty surname names with energy", style: "Modern" },
  { name1: "Teagan", name2: "Reagan", reason: "Irish-origin names with -gan ending", style: "Modern" },
  { name1: "Phoebe", name2: "Daphne", reason: "Greek mythological names with whimsy", style: "Classic" },
  { name1: "Freya", name2: "Thea", reason: "Goddess names from Norse and Greek mythology", style: "Modern" },
  { name1: "Nova", name2: "Lux", reason: "Modern names meaning new and light", style: "Modern" },
  { name1: "Seraphina", name2: "Angelina", reason: "Angelic names with elaborate beauty", style: "Classic" },
  { name1: "Clementine", name2: "Evangeline", reason: "Vintage names with -line/-ine endings", style: "Vintage" },
  { name1: "Magnolia", name2: "Azalea", reason: "Southern floral names with grandeur", style: "Nature" },
  { name1: "Laurel", name2: "Rowan", reason: "Botanical names with earthy sophistication", style: "Nature" },
  { name1: "Briar", name2: "Fern", reason: "Nature names with rustic charm", style: "Nature" },
  { name1: "Meadow", name2: "Prairie", reason: "Nature landscape names", style: "Nature" },
  { name1: "Marina", name2: "Coral", reason: "Ocean-inspired names", style: "Nature" },
  { name1: "Sierra", name2: "Dakota", reason: "Geographic names with adventurous spirit", style: "Modern" },
  { name1: "Savannah", name2: "Sienna", reason: "S-names with Southern and artistic flair", style: "Modern" },
  { name1: "Natalie", name2: "Noelle", reason: "Holiday-themed N-names", style: "Classic" },
  { name1: "Esme", name2: "Imogen", reason: "Distinctive British names with elegance", style: "Classic" },
  { name1: "Ophelia", name2: "Cordelia", reason: "Shakespearean names with tragic beauty", style: "Literary" },
  { name1: "Eliza", name2: "Louisa", reason: "Vintage names with literary connections", style: "Vintage" },
  { name1: "Mabel", name2: "Ethel", reason: "Old-fashioned names ready for revival", style: "Vintage" },
  { name1: "Nell", name2: "Bess", reason: "Vintage nickname-style names", style: "Vintage" },
  { name1: "Clara", name2: "Cora", reason: "Simple vintage names with soft sounds", style: "Vintage" },
  { name1: "Willa", name2: "Della", reason: "Vintage -lla names with spunk", style: "Vintage" },
  { name1: "Elsie", name2: "Millie", reason: "Vintage diminutive names with sweetness", style: "Vintage" },
  { name1: "Rosie", name2: "Josie", reason: "Friendly -ie ending names", style: "Vintage" },
  { name1: "Bonnie", name2: "Winnie", reason: "Scottish and English vintage nicknames", style: "Vintage" },
  { name1: "Sadie", name2: "Birdie", reason: "Vintage nickname names with charm", style: "Vintage" },
  { name1: "Flora", name2: "Fauna", reason: "Nature twins from Sleeping Beauty", style: "Nature" },
  { name1: "Bianca", name2: "Chiara", reason: "Italian names both meaning white/bright", style: "Modern" },
  { name1: "Lucia", name2: "Elena", reason: "Italian names with melodic flow", style: "Modern" },
  { name1: "Valentina", name2: "Viviana", reason: "Italian V-names with vivacious energy", style: "Modern" },
  { name1: "Carmen", name2: "Paloma", reason: "Spanish names with artistic flair", style: "Modern" },
  { name1: "Lola", name2: "Luna", reason: "Spanish L-names with modern appeal", style: "Modern" },
  { name1: "Catalina", name2: "Isabella", reason: "Spanish regal names with elegance", style: "Classic" },
  { name1: "Esmeralda", name2: "Esperanza", reason: "Spanish names with hope and beauty", style: "Classic" },
  { name1: "Gianna", name2: "Giulia", reason: "Italian forms of classic names", style: "Modern" },
  { name1: "Francesca", name2: "Alessandra", reason: "Italian names with sophistication", style: "Classic" },
  { name1: "Siena", name2: "Roma", reason: "Italian city names", style: "Modern" },
  { name1: "Cosette", name2: "Colette", reason: "French names with vintage appeal", style: "Vintage" },
  { name1: "Amelie", name2: "Celeste", reason: "French names with whimsical charm", style: "Modern" },
  { name1: "Juliette", name2: "Nicolette", reason: "French -ette names with elegance", style: "Classic" },
  { name1: "Estelle", name2: "Giselle", reason: "French names ending in -elle", style: "Classic" },
]

export default function TwinGirlsPage() {
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
        <Link href="/sibling-names/" className="text-rose-600 hover:text-rose-700 text-sm font-medium mb-4 inline-block">
          ← Back to Sibling Names
        </Link>
        <span className="text-5xl mb-4 block">👶👶</span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Twin Girl Names
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {twinPairs.length} beautiful name pairs perfect for twin sisters. These combinations coordinate
          beautifully while giving each girl her own distinct identity.
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
                ? 'bg-rose-600 text-white'
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
              isFavorite(pair.name1, pair.name2)
                ? 'border-rose-400 bg-rose-50'
                : 'border-gray-200 hover:border-rose-300'
            }`}
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl font-bold text-primary-600">{pair.name1}</span>
                  <span className="text-gray-400">&</span>
                  <span className="text-2xl font-bold text-primary-600">{pair.name2}</span>
                </div>
                <span className="inline-block text-xs bg-rose-100 text-rose-700 px-2 py-1 rounded">
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
      <section className="mb-12 bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Naming Twin Girls: Finding the Perfect Balance</h2>
        <div className="space-y-3 text-gray-700">
          <p>
            Twin girl names should complement each other without being too matchy. The best combinations share a
            common style, origin, or theme while maintaining distinct identities for each twin.
          </p>
          <p>
            Avoid names that are too similar or rhyme heavily, as twins already share so much. Instead, look for
            names that sound harmonious together but give each girl her own unique name that can stand on its own.
          </p>
          <p>
            Consider the nickname potential too. Names like Charlotte and Scarlett might seem perfect, but Charlie
            and Scar are quite different in style.
          </p>
        </div>
      </section>

      {/* Related Links */}
      <section className="bg-gray-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore More Twin Names</h2>
        <div className="grid md:grid-cols-4 gap-4">
          <Link href="/sibling-names/twin-boys/" className="bg-white hover:bg-blue-50 border rounded-lg p-4 text-center transition">
            <span className="font-medium text-blue-600">Twin Boys →</span>
          </Link>
          <Link href="/sibling-names/boy-girl-twins/" className="bg-white hover:bg-purple-50 border rounded-lg p-4 text-center transition">
            <span className="font-medium text-purple-600">Boy-Girl Twins →</span>
          </Link>
          <Link href="/sibling-names/two-sisters/" className="bg-white hover:bg-pink-50 border rounded-lg p-4 text-center transition">
            <span className="font-medium text-pink-600">Two Sisters →</span>
          </Link>
          <Link href="/sibling-names/matching-first-letters/" className="bg-white hover:bg-emerald-50 border rounded-lg p-4 text-center transition">
            <span className="font-medium text-emerald-600">Same Letter →</span>
          </Link>
        </div>
      </section>
    </div>
  )
}

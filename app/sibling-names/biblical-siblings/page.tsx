'use client'

import Link from 'next/link'
import { useState } from 'react'

interface SiblingGroup {
  names: string[]
  meaning: string
  origin: string
}

const biblicalSiblings: SiblingGroup[] = [
  { names: ["Cain", "Abel"], meaning: "First brothers in the Bible", origin: "Genesis" },
  { names: ["Jacob", "Esau"], meaning: "Twin brothers with contrasting personalities", origin: "Genesis" },
  { names: ["Rachel", "Leah"], meaning: "Sisters who married Jacob", origin: "Genesis" },
  { names: ["Moses", "Aaron", "Miriam"], meaning: "Prophetic siblings who led Israel", origin: "Exodus" },
  { names: ["Peter", "Andrew"], meaning: "Brothers who became disciples", origin: "Gospels" },
  { names: ["James", "John"], meaning: "Sons of Zebedee, apostles", origin: "Gospels" },
  { names: ["Martha", "Mary", "Lazarus"], meaning: "Siblings Jesus loved and visited", origin: "Gospels" },
  { names: ["Isaac", "Ishmael"], meaning: "Abraham's sons from different mothers", origin: "Genesis" },
  { names: ["Joseph", "Benjamin"], meaning: "Full brothers, sons of Rachel", origin: "Genesis" },
  { names: ["Samuel", "Hannah"], meaning: "Son dedicated to God and his mother", origin: "1 Samuel" },
  { names: ["David", "Jonathan"], meaning: "Not biological but covenant brothers", origin: "1 Samuel" },
  { names: ["Solomon", "Nathan"], meaning: "Sons of David", origin: "2 Samuel" },
  { names: ["Ruth", "Naomi"], meaning: "Daughter-in-law and mother-in-law like sisters", origin: "Ruth" },
  { names: ["Timothy", "Eunice"], meaning: "Son and mother in faith", origin: "2 Timothy" },
  { names: ["Simeon", "Levi"], meaning: "Brothers who defended their sister Dinah", origin: "Genesis" },
  { names: ["Judah", "Joseph"], meaning: "Brothers from the twelve tribes", origin: "Genesis" },
  { names: ["Reuben", "Simeon"], meaning: "First and second sons of Jacob", origin: "Genesis" },
  { names: ["Ephraim", "Manasseh"], meaning: "Joseph's sons blessed by Jacob", origin: "Genesis" },
  { names: ["Lot", "Abraham"], meaning: "Nephew and uncle close as brothers", origin: "Genesis" },
  { names: ["Sarah", "Abraham"], meaning: "Half-siblings who married", origin: "Genesis" },
  { names: ["Noah", "Shem", "Ham", "Japheth"], meaning: "Father and three sons", origin: "Genesis" },
  { names: ["Job", "Eliphaz"], meaning: "Friends as close as brothers", origin: "Job" },
  { names: ["Daniel", "Shadrach", "Meshach", "Abednego"], meaning: "Brothers in faith in Babylon", origin: "Daniel" },
  { names: ["Eli", "Samuel"], meaning: "Mentor and student like father and son", origin: "1 Samuel" },
  { names: ["Joshua", "Caleb"], meaning: "Faithful spies who entered the promised land", origin: "Numbers" },
  { names: ["Paul", "Silas"], meaning: "Missionary brothers in Christ", origin: "Acts" },
  { names: ["Priscilla", "Aquila"], meaning: "Wife and husband ministry partners", origin: "Acts" },
  { names: ["Barnabas", "Mark"], meaning: "Uncle and nephew ministry team", origin: "Acts" },
  { names: ["Luke", "Theophilus"], meaning: "Writer and recipient, brothers in faith", origin: "Luke" },
  { names: ["Philip", "Nathanael"], meaning: "Friends who became disciples together", origin: "John" },
  { names: ["Thomas", "Matthew"], meaning: "Apostles who followed Jesus", origin: "Gospels" },
  { names: ["Elizabeth", "Mary"], meaning: "Cousins pregnant with John and Jesus", origin: "Luke" },
  { names: ["Zechariah", "Elizabeth"], meaning: "Faithful couple, parents of John", origin: "Luke" },
  { names: ["Gabriel", "Michael"], meaning: "Archangels mentioned in scripture", origin: "Daniel/Revelation" },
  { names: ["Adam", "Eve"], meaning: "First man and woman", origin: "Genesis" },
  { names: ["Seth", "Enosh"], meaning: "Third son of Adam and his son", origin: "Genesis" },
  { names: ["Enoch", "Methuselah"], meaning: "Father who walked with God and long-lived son", origin: "Genesis" },
  { names: ["Lamech", "Noah"], meaning: "Father who prophesied and righteous son", origin: "Genesis" },
  { names: ["Terah", "Abraham"], meaning: "Father who started the journey", origin: "Genesis" },
  { names: ["Sarah", "Isaac"], meaning: "Mother of promise and miracle son", origin: "Genesis" },
  { names: ["Rebecca", "Jacob"], meaning: "Mother who guided her favored son", origin: "Genesis" },
  { names: ["Rachel", "Joseph"], meaning: "Beloved mother and favored son", origin: "Genesis" },
  { names: ["Leah", "Judah"], meaning: "Unloved wife and son of blessing", origin: "Genesis" },
  { names: ["Zipporah", "Moses"], meaning: "Wife who saved husband's life", origin: "Exodus" },
  { names: ["Jochebed", "Moses"], meaning: "Mother who saved baby in basket", origin: "Exodus" },
  { names: ["Hannah", "Samuel"], meaning: "Praying mother and dedicated son", origin: "1 Samuel" },
  { names: ["Jesse", "David"], meaning: "Father of shepherd king", origin: "1 Samuel" },
  { names: ["Bathsheba", "Solomon"], meaning: "Mother and wise son", origin: "2 Samuel" },
  { names: ["Elijah", "Elisha"], meaning: "Prophet and faithful successor", origin: "1 Kings" },
  { names: ["Hezekiah", "Isaiah"], meaning: "King and prophet during crisis", origin: "2 Kings" },
  { names: ["Josiah", "Jeremiah"], meaning: "Reformer king and weeping prophet", origin: "2 Kings/Jeremiah" },
  { names: ["Ezra", "Nehemiah"], meaning: "Scribe and builder who rebuilt Jerusalem", origin: "Ezra/Nehemiah" },
  { names: ["Esther", "Mordecai"], meaning: "Queen and cousin who saved the Jews", origin: "Esther" },
  { names: ["Mary", "Jesus"], meaning: "Mother and son, Savior", origin: "Gospels" },
  { names: ["Joseph", "Jesus"], meaning: "Earthly father and son", origin: "Gospels" },
  { names: ["Zacharias", "John"], meaning: "Priest father and Baptist son", origin: "Luke" },
  { names: ["Mary", "Martha"], meaning: "Sisters who hosted Jesus", origin: "John" },
  { names: ["Lydia", "Timothy"], meaning: "Faithful believers from different cities", origin: "Acts" },
  { names: ["Phoebe", "Paul"], meaning: "Deaconess and apostle", origin: "Romans" },
  { names: ["Lois", "Eunice", "Timothy"], meaning: "Grandmother, mother, son in faith", origin: "2 Timothy" },
]

export default function BiblicalSiblingsPage() {
  const [favorites, setFavorites] = useState<Set<string>>(new Set())
  const [filterCount, setFilterCount] = useState<string>('All')

  const counts = ['All', '2 Names', '3 Names', '4+ Names']

  const getNameCount = (names: string[]) => {
    if (names.length === 2) return '2 Names'
    if (names.length === 3) return '3 Names'
    return '4+ Names'
  }

  const filteredGroups = filterCount === 'All'
    ? biblicalSiblings
    : biblicalSiblings.filter(g => getNameCount(g.names) === filterCount)

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
        <span className="text-5xl mb-4 block">📖</span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Biblical Sibling Names
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {biblicalSiblings.length} sibling name combinations inspired by brothers, sisters, and close relationships
          from the Bible. Choose names with deep spiritual meaning and timeless heritage.
        </p>
      </div>

      {/* Filter */}
      <div className="mb-8 flex flex-wrap gap-2 justify-center">
        {counts.map(count => (
          <button
            key={count}
            onClick={() => setFilterCount(count)}
            className={`px-4 py-2 rounded-full font-medium transition ${
              filterCount === count
                ? 'bg-purple-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {count}
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

      {/* Name Groups Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {filteredGroups.map((group, index) => (
          <div
            key={index}
            className={`bg-white border-2 rounded-xl p-6 transition ${
              isFavorite(group.names)
                ? 'border-purple-400 bg-purple-50'
                : 'border-gray-200 hover:border-purple-300'
            }`}
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  {group.names.map((name, i) => (
                    <span key={i}>
                      <span className="text-xl font-bold text-purple-700">{name}</span>
                      {i < group.names.length - 1 && <span className="text-gray-400 ml-2">&</span>}
                    </span>
                  ))}
                </div>
                <span className="inline-block text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                  {group.origin}
                </span>
              </div>
              <button
                onClick={() => toggleFavorite(group.names)}
                className="text-2xl hover:scale-110 transition"
              >
                {isFavorite(group.names) ? '❤️' : '🤍'}
              </button>
            </div>
            <p className="text-gray-600 text-sm">{group.meaning}</p>
          </div>
        ))}
      </div>

      {/* Why These Work */}
      <section className="mb-12 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Biblical Sibling Names Are Timeless</h2>
        <div className="space-y-3 text-gray-700">
          <p>
            Biblical names carry centuries of meaning and tradition. When used for siblings, they create
            connections to powerful stories of faith, courage, and family bonds that have inspired
            generations.
          </p>
          <p>
            Many biblical siblings had profound relationships that shaped history. From Moses, Aaron, and
            Miriam leading their people, to Mary and Martha hosting Jesus, these names represent not just
            individuals but the power of family working together in faith.
          </p>
          <p>
            These names work beautifully across cultures and languages, often having variations in many
            countries while maintaining their spiritual significance and timeless appeal.
          </p>
        </div>
      </section>

      {/* Related Links */}
      <section className="bg-gray-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore More Sibling Names</h2>
        <div className="grid md:grid-cols-4 gap-4">
          <Link href="/sibling-names/literary-inspired/" className="bg-white hover:bg-amber-50 border rounded-lg p-4 text-center transition">
            <span className="font-medium text-amber-600">Literary Names →</span>
          </Link>
          <Link href="/sibling-names/royal-names/" className="bg-white hover:bg-purple-50 border rounded-lg p-4 text-center transition">
            <span className="font-medium text-purple-600">Royal Names →</span>
          </Link>
          <Link href="/sibling-names/vintage-pairs/" className="bg-white hover:bg-rose-50 border rounded-lg p-4 text-center transition">
            <span className="font-medium text-rose-600">Vintage Pairs →</span>
          </Link>
          <Link href="/sibling-names/same-meaning/" className="bg-white hover:bg-emerald-50 border rounded-lg p-4 text-center transition">
            <span className="font-medium text-emerald-600">Same Meaning →</span>
          </Link>
        </div>
      </section>
    </div>
  )
}

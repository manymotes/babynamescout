'use client'

import Link from 'next/link'
import { useState } from 'react'

interface LiteraryPair {
  names: string[]
  source: string
  relationship: string
  author: string
}

const literaryPairs: LiteraryPair[] = [
  { names: ["Atticus", "Scout"], source: "To Kill a Mockingbird", relationship: "Father and daughter", author: "Harper Lee" },
  { names: ["Holden", "Phoebe"], source: "The Catcher in the Rye", relationship: "Brother and sister", author: "J.D. Salinger" },
  { names: ["Edmund", "Lucy"], source: "Chronicles of Narnia", relationship: "Brother and sister", author: "C.S. Lewis" },
  { names: ["Peter", "Susan"], source: "Chronicles of Narnia", relationship: "Brother and sister", author: "C.S. Lewis" },
  { names: ["Romeo", "Juliet"], source: "Romeo and Juliet", relationship: "Star-crossed lovers", author: "Shakespeare" },
  { names: ["Tristan", "Isolde"], source: "Tristan and Isolde", relationship: "Legendary lovers", author: "Medieval Romance" },
  { names: ["Heathcliff", "Catherine"], source: "Wuthering Heights", relationship: "Passionate lovers", author: "Emily Brontë" },
  { names: ["Darcy", "Elizabeth"], source: "Pride and Prejudice", relationship: "Romantic leads", author: "Jane Austen" },
  { names: ["Jane", "Rochester"], source: "Jane Eyre", relationship: "Lovers", author: "Charlotte Brontë" },
  { names: ["Rhett", "Scarlett"], source: "Gone with the Wind", relationship: "Tempestuous couple", author: "Margaret Mitchell" },
  { names: ["Gatsby", "Daisy"], source: "The Great Gatsby", relationship: "Doomed lovers", author: "F. Scott Fitzgerald" },
  { names: ["Orlando", "Rosalind"], source: "As You Like It", relationship: "Lovers in disguise", author: "Shakespeare" },
  { names: ["Beatrice", "Benedick"], source: "Much Ado About Nothing", relationship: "Witty rivals to lovers", author: "Shakespeare" },
  { names: ["Ophelia", "Hamlet"], source: "Hamlet", relationship: "Tragic lovers", author: "Shakespeare" },
  { names: ["Desdemona", "Othello"], source: "Othello", relationship: "Tragic couple", author: "Shakespeare" },
  { names: ["Sebastian", "Viola"], source: "Twelfth Night", relationship: "Twin siblings", author: "Shakespeare" },
  { names: ["Lysander", "Hermia"], source: "A Midsummer Night's Dream", relationship: "Young lovers", author: "Shakespeare" },
  { names: ["Phineas", "Josephine"], source: "Various Literature", relationship: "Classic vintage names", author: "Various" },
  { names: ["Griffin", "Gwendolyn"], source: "Various Literature", relationship: "Literary favorites", author: "Various" },
  { names: ["Caspian", "Seraphina"], source: "Narnia & Various", relationship: "Adventurous names", author: "C.S. Lewis" },
  { names: ["Aslan", "Lucy"], source: "Chronicles of Narnia", relationship: "Lion king and faithful girl", author: "C.S. Lewis" },
  { names: ["Harry", "Hermione"], source: "Harry Potter", relationship: "Best friends", author: "J.K. Rowling" },
  { names: ["Ron", "Ginny"], source: "Harry Potter", relationship: "Brother and sister", author: "J.K. Rowling" },
  { names: ["Fred", "George"], source: "Harry Potter", relationship: "Twin brothers", author: "J.K. Rowling" },
  { names: ["Albus", "Minerva"], source: "Harry Potter", relationship: "Headmasters", author: "J.K. Rowling" },
  { names: ["Sirius", "Remus"], source: "Harry Potter", relationship: "Best friends", author: "J.K. Rowling" },
  { names: ["Katniss", "Prim"], source: "The Hunger Games", relationship: "Sisters", author: "Suzanne Collins" },
  { names: ["Peeta", "Katniss"], source: "The Hunger Games", relationship: "Star-crossed lovers", author: "Suzanne Collins" },
  { names: ["Jem", "Scout"], source: "To Kill a Mockingbird", relationship: "Brother and sister", author: "Harper Lee" },
  { names: ["Boo", "Scout"], source: "To Kill a Mockingbird", relationship: "Protector and protected", author: "Harper Lee" },
  { names: ["Meg", "Jo"], source: "Little Women", relationship: "Sisters", author: "Louisa May Alcott" },
  { names: ["Beth", "Amy"], source: "Little Women", relationship: "Sisters", author: "Louisa May Alcott" },
  { names: ["Laurie", "Jo"], source: "Little Women", relationship: "Best friends", author: "Louisa May Alcott" },
  { names: ["Anne", "Diana"], source: "Anne of Green Gables", relationship: "Kindred spirits", author: "L.M. Montgomery" },
  { names: ["Anne", "Gilbert"], source: "Anne of Green Gables", relationship: "Rivals to lovers", author: "L.M. Montgomery" },
  { names: ["Wendy", "Peter"], source: "Peter Pan", relationship: "Mother figure and boy", author: "J.M. Barrie" },
  { names: ["Alice", "Jasper"], source: "Twilight", relationship: "Vampire siblings", author: "Stephenie Meyer" },
  { names: ["Edward", "Bella"], source: "Twilight", relationship: "Vampire and human", author: "Stephenie Meyer" },
  { names: ["Tris", "Caleb"], source: "Divergent", relationship: "Brother and sister", author: "Veronica Roth" },
  { names: ["Four", "Tris"], source: "Divergent", relationship: "Lovers", author: "Veronica Roth" },
  { names: ["Jonas", "Gabriel"], source: "The Giver", relationship: "Brothers by choice", author: "Lois Lowry" },
  { names: ["Percy", "Annabeth"], source: "Percy Jackson", relationship: "Demigod couple", author: "Rick Riordan" },
  { names: ["Hazel", "Augustus"], source: "The Fault in Our Stars", relationship: "Star-crossed lovers", author: "John Green" },
  { names: ["Liesel", "Rudy"], source: "The Book Thief", relationship: "Best friends", author: "Markus Zusak" },
  { names: ["Matilda", "Miss Honey"], source: "Matilda", relationship: "Student and teacher like family", author: "Roald Dahl" },
  { names: ["Charlie", "Willy"], source: "Charlie and the Chocolate Factory", relationship: "Boy and factory owner", author: "Roald Dahl" },
  { names: ["James", "Lily"], source: "James and the Giant Peach", relationship: "Boy and ladybug", author: "Roald Dahl" },
  { names: ["Wilbur", "Charlotte"], source: "Charlotte's Web", relationship: "Pig and spider friends", author: "E.B. White" },
  { names: ["Fern", "Wilbur"], source: "Charlotte's Web", relationship: "Girl and pig", author: "E.B. White" },
  { names: ["Dorothy", "Toto"], source: "The Wizard of Oz", relationship: "Girl and dog", author: "L. Frank Baum" },
  { names: ["Pip", "Estella"], source: "Great Expectations", relationship: "Boy and his love", author: "Charles Dickens" },
  { names: ["Oliver", "Nancy"], source: "Oliver Twist", relationship: "Boy and protector", author: "Charles Dickens" },
  { names: ["David", "Agnes"], source: "David Copperfield", relationship: "Protagonist and love", author: "Charles Dickens" },
  { names: ["Ebenezer", "Belle"], source: "A Christmas Carol", relationship: "Scrooge and lost love", author: "Charles Dickens" },
  { names: ["Sydney", "Lucie"], source: "A Tale of Two Cities", relationship: "Unrequited love", author: "Charles Dickens" },
  { names: ["Huckleberry", "Tom"], source: "Tom Sawyer", relationship: "Best friends", author: "Mark Twain" },
  { names: ["Becky", "Tom"], source: "Tom Sawyer", relationship: "Childhood sweethearts", author: "Mark Twain" },
  { names: ["Sherlock", "Watson"], source: "Sherlock Holmes", relationship: "Detective duo", author: "Arthur Conan Doyle" },
  { names: ["Jekyll", "Hyde"], source: "Dr. Jekyll and Mr. Hyde", relationship: "Two sides of one man", author: "Robert Louis Stevenson" },
  { names: ["Ishmael", "Queequeg"], source: "Moby Dick", relationship: "Friends at sea", author: "Herman Melville" },
]

export default function LiteraryInspiredPage() {
  const [favorites, setFavorites] = useState<Set<string>>(new Set())
  const [searchTerm, setSearchTerm] = useState('')

  const filteredPairs = searchTerm
    ? literaryPairs.filter(p =>
        p.names.some(n => n.toLowerCase().includes(searchTerm.toLowerCase())) ||
        p.source.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.author.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : literaryPairs

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
        <span className="text-5xl mb-4 block">📚</span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Literary-Inspired Sibling Names
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {literaryPairs.length} sibling name combinations inspired by beloved characters from classic
          and contemporary literature. Give your children names that tell a story.
        </p>
      </div>

      {/* Search */}
      <div className="mb-8 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Search by name, book, or author..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        />
      </div>

      {/* Favorites Counter */}
      {favorites.size > 0 && (
        <div className="mb-8 text-center">
          <div className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full">
            ❤️ {favorites.size} {favorites.size === 1 ? 'favorite' : 'favorites'} saved
          </div>
        </div>
      )}

      {/* Results Count */}
      <div className="mb-6 text-center text-gray-600">
        Showing {filteredPairs.length} {filteredPairs.length === 1 ? 'combination' : 'combinations'}
      </div>

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
                      <span className="text-xl font-bold text-amber-700">{name}</span>
                      {i < pair.names.length - 1 && <span className="text-gray-400 ml-2">&</span>}
                    </span>
                  ))}
                </div>
                <div className="space-y-1">
                  <span className="inline-block text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded mr-2">
                    {pair.source}
                  </span>
                  <div className="text-xs text-gray-500 italic">by {pair.author}</div>
                </div>
              </div>
              <button
                onClick={() => toggleFavorite(pair.names)}
                className="text-2xl hover:scale-110 transition"
              >
                {isFavorite(pair.names) ? '❤️' : '🤍'}
              </button>
            </div>
            <p className="text-gray-600 text-sm">{pair.relationship}</p>
          </div>
        ))}
      </div>

      {/* Why These Work */}
      <section className="mb-12 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Literary Names Are Special</h2>
        <div className="space-y-3 text-gray-700">
          <p>
            Literary names carry the weight of beloved stories and unforgettable characters. When you
            name siblings after literary figures, you give them names with depth, meaning, and
            conversation starters for a lifetime.
          </p>
          <p>
            From Shakespeare's timeless lovers to modern young adult heroes, these names span centuries
            of storytelling. They work beautifully together because they share the same narrative world,
            creating an instant connection between your children's names.
          </p>
          <p>
            Many literary names have become classics in their own right, moving beyond their source
            material to become beloved choices for parents who value culture, creativity, and the
            written word.
          </p>
        </div>
      </section>

      {/* Related Links */}
      <section className="bg-gray-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore More Sibling Names</h2>
        <div className="grid md:grid-cols-4 gap-4">
          <Link href="/sibling-names/biblical-siblings/" className="bg-white hover:bg-blue-50 border rounded-lg p-4 text-center transition">
            <span className="font-medium text-blue-600">Biblical Names →</span>
          </Link>
          <Link href="/sibling-names/royal-names/" className="bg-white hover:bg-purple-50 border rounded-lg p-4 text-center transition">
            <span className="font-medium text-purple-600">Royal Names →</span>
          </Link>
          <Link href="/sibling-names/vintage-pairs/" className="bg-white hover:bg-rose-50 border rounded-lg p-4 text-center transition">
            <span className="font-medium text-rose-600">Vintage Pairs →</span>
          </Link>
          <Link href="/sibling-names/modern-pairs/" className="bg-white hover:bg-teal-50 border rounded-lg p-4 text-center transition">
            <span className="font-medium text-teal-600">Modern Pairs →</span>
          </Link>
        </div>
      </section>
    </div>
  )
}

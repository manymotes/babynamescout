import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Middle Names Guide | Choosing the Perfect Middle Name',
  description: 'Complete guide to choosing baby middle names. Learn tips, trends, and browse hundreds of middle name ideas for boys and girls.',
  openGraph: {
    title: 'Middle Names Guide - How to Choose',
    description: 'Expert tips for choosing the perfect middle name',
  },
}

export default function MiddleNamesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Hero */}
      <div className="text-center mb-12">
        <span className="text-5xl mb-4 block">🎯</span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Middle Names Guide
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover how to choose the perfect middle name for your baby. Learn tips, explore trends,
          and find the ideal name combination that flows beautifully.
        </p>
      </div>

      {/* Why Middle Names Matter */}
      <section className="mb-16 bg-blue-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Middle Names Matter</h2>
        <div className="space-y-4 text-gray-600">
          <div className="flex items-start gap-3">
            <span className="text-2xl">👨‍👩‍👧</span>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Family Honors</h3>
              <p>Middle names provide an opportunity to honor family members without committing to a full first name.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">🎵</span>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Name Flow</h3>
              <p>A well-chosen middle name creates rhythm and balance in the full name.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">🔄</span>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Options</h3>
              <p>Your child can choose to go by their middle name if they prefer it to their first name.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">🎨</span>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Creative Expression</h3>
              <p>Middle names let you be more adventurous since they&apos;re used less frequently.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tips for Choosing */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Tips for Choosing a Middle Name</h2>
        <div className="space-y-6">
          <div className="bg-white border-l-4 border-primary-500 p-6 rounded-r-lg">
            <h3 className="font-bold text-gray-900 mb-2">1. Consider the Flow</h3>
            <p className="text-gray-600">
              Say the full name out loud multiple times. The first, middle, and last names should flow
              smoothly together. Avoid combinations where the ending of one name and the beginning of
              the next create awkward sounds.
            </p>
          </div>

          <div className="bg-white border-l-4 border-secondary-500 p-6 rounded-r-lg">
            <h3 className="font-bold text-gray-900 mb-2">2. Balance the Lengths</h3>
            <p className="text-gray-600">
              If the first name is short, consider a longer middle name, and vice versa. For example:
              Emma Catherine, Maximilian James. This creates pleasing rhythm and balance.
            </p>
          </div>

          <div className="bg-white border-l-4 border-purple-500 p-6 rounded-r-lg">
            <h3 className="font-bold text-gray-900 mb-2">3. Mind the Initials</h3>
            <p className="text-gray-600">
              Check what initials the full name creates. Avoid unfortunate acronyms or combinations
              that might cause embarrassment.
            </p>
          </div>

          <div className="bg-white border-l-4 border-green-500 p-6 rounded-r-lg">
            <h3 className="font-bold text-gray-900 mb-2">4. Honor Family Heritage</h3>
            <p className="text-gray-600">
              Middle names are perfect for honoring grandparents, cultural heritage, or family traditions.
              Consider using a maiden name or a name that reflects your cultural background.
            </p>
          </div>

          <div className="bg-white border-l-4 border-amber-500 p-6 rounded-r-lg">
            <h3 className="font-bold text-gray-900 mb-2">5. Match or Contrast Styles</h3>
            <p className="text-gray-600">
              Decide if you want the middle name to match the style of the first name (both modern,
              both vintage) or provide contrast (classic first name, trendy middle name).
            </p>
          </div>

          <div className="bg-white border-l-4 border-pink-500 p-6 rounded-r-lg">
            <h3 className="font-bold text-gray-900 mb-2">6. Consider Meaning</h3>
            <p className="text-gray-600">
              Choose a middle name with a meaning that complements the first name or represents
              qualities you hope your child will embody.
            </p>
          </div>
        </div>
      </section>

      {/* Middle Name Ideas */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Middle Name Ideas</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-6">
            <h3 className="font-bold text-primary-900 mb-4">For Girls</h3>
            <div className="space-y-3 text-gray-700">
              <div>
                <h4 className="font-semibold text-primary-800">Classic Choices</h4>
                <p className="text-sm">Rose, Grace, Marie, Elizabeth, Jane, Anne, Louise, Mae</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary-800">Modern Picks</h4>
                <p className="text-sm">Quinn, Sage, Blake, Blair, Jade, Luna, Nova, Wren</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary-800">Elegant Options</h4>
                <p className="text-sm">Catherine, Victoria, Isabelle, Charlotte, Juliet, Sophia</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-xl p-6">
            <h3 className="font-bold text-secondary-900 mb-4">For Boys</h3>
            <div className="space-y-3 text-gray-700">
              <div>
                <h4 className="font-semibold text-secondary-800">Classic Choices</h4>
                <p className="text-sm">James, Michael, John, William, Thomas, Alexander, David</p>
              </div>
              <div>
                <h4 className="font-semibold text-secondary-800">Modern Picks</h4>
                <p className="text-sm">Cash, Fox, Cruz, Jax, Phoenix, Grey, Kai, Reed</p>
              </div>
              <div>
                <h4 className="font-semibold text-secondary-800">Strong Options</h4>
                <p className="text-sm">Theodore, Benjamin, Christopher, Sebastian, Nathaniel</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Middle Name Combinations */}
      <section className="mb-16 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Beautiful Name Combinations</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold text-gray-900 mb-3">Girl Combinations</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Olivia Grace</li>
              <li>• Emma Rose</li>
              <li>• Ava Marie</li>
              <li>• Charlotte Elizabeth</li>
              <li>• Sophia Quinn</li>
              <li>• Isabella Jane</li>
              <li>• Amelia Catherine</li>
              <li>• Harper Mae</li>
              <li>• Luna Jade</li>
              <li>• Mia Louise</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-3">Boy Combinations</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Oliver James</li>
              <li>• Noah Alexander</li>
              <li>• Liam Michael</li>
              <li>• Elijah Thomas</li>
              <li>• William Grey</li>
              <li>• Benjamin Kai</li>
              <li>• Lucas Reed</li>
              <li>• Henry Fox</li>
              <li>• Theodore James</li>
              <li>• Sebastian Cruz</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Trends */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Middle Name Trends</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-violet-50 to-violet-100 rounded-xl p-6">
            <h3 className="font-bold text-violet-900 mb-2">One-Syllable Names</h3>
            <p className="text-violet-700 text-sm">
              Short, punchy middle names like Rose, Grace, James, and Lee are increasingly popular.
            </p>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-6">
            <h3 className="font-bold text-teal-900 mb-2">Nature Names</h3>
            <p className="text-teal-700 text-sm">
              Sage, River, Wren, Fox, and other nature-inspired middle names are trending.
            </p>
          </div>

          <div className="bg-gradient-to-br from-rose-50 to-rose-100 rounded-xl p-6">
            <h3 className="font-bold text-rose-900 mb-2">Honor Names</h3>
            <p className="text-rose-700 text-sm">
              Using family surnames or grandparent names as middle names is a growing tradition.
            </p>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="bg-gray-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Find the Perfect First Name</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link
            href="/names/girl/"
            className="bg-white hover:bg-primary-50 border border-gray-200 rounded-lg p-4 text-center transition"
          >
            <span className="font-medium text-primary-600">Browse Girl Names →</span>
          </Link>
          <Link
            href="/names/boy/"
            className="bg-white hover:bg-secondary-50 border border-gray-200 rounded-lg p-4 text-center transition"
          >
            <span className="font-medium text-secondary-600">Browse Boy Names →</span>
          </Link>
          <Link
            href="/generator/"
            className="bg-white hover:bg-purple-50 border border-gray-200 rounded-lg p-4 text-center transition"
          >
            <span className="font-medium text-purple-600">Name Generator →</span>
          </Link>
        </div>
      </section>
    </div>
  )
}

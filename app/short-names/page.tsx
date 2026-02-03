import Link from 'next/link'
import type { Metadata } from 'next'
import { getAllNames } from '@/lib/data'
import { NameGrid } from '@/components/NameCard'

export const metadata: Metadata = {
  title: 'Short Baby Names | 3-4 Letter Names for Boys & Girls',
  description: 'Discover beautiful short baby names with 3-4 letters. Browse our collection of concise, memorable names perfect for modern families.',
  openGraph: {
    title: 'Short Baby Names - 3 & 4 Letter Names',
    description: 'Concise, memorable names that make a big impact',
  },
}

export default function ShortNamesPage() {
  const allNames = getAllNames()

  // Get short names (3-4 letters)
  const shortGirlNames = allNames
    .filter(n => n.gender === 'girl' && n.name.length >= 3 && n.name.length <= 4)
    .slice(0, 30)

  const shortBoyNames = allNames
    .filter(n => n.gender === 'boy' && n.name.length >= 3 && n.name.length <= 4)
    .slice(0, 30)

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero */}
      <div className="text-center mb-12">
        <span className="text-5xl mb-4 block">✂️</span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Short Baby Names
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover beautiful short baby names with 3-4 letters. These concise, memorable names
          pack a lot of personality into a small package and work perfectly for modern families.
        </p>
      </div>

      {/* Why Short Names */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Choose a Short Name?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
            <span className="text-3xl mb-2 block">⚡</span>
            <h3 className="font-bold text-blue-900 mb-2">Quick & Memorable</h3>
            <p className="text-blue-700 text-sm">
              Short names are easy to remember, spell, and pronounce - perfect for busy modern life.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
            <span className="text-3xl mb-2 block">💪</span>
            <h3 className="font-bold text-green-900 mb-2">Strong Impact</h3>
            <p className="text-green-700 text-sm">
              Brief names often sound bold and confident, making a powerful first impression.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
            <span className="text-3xl mb-2 block">📝</span>
            <h3 className="font-bold text-purple-900 mb-2">Easy to Write</h3>
            <p className="text-purple-700 text-sm">
              Kids can learn to write their names quickly, and short names fit easily on forms.
            </p>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-6">
            <span className="text-3xl mb-2 block">🎯</span>
            <h3 className="font-bold text-amber-900 mb-2">Modern & Stylish</h3>
            <p className="text-amber-700 text-sm">
              Short names have a contemporary, minimalist appeal that fits current trends.
            </p>
          </div>
        </div>
      </section>

      {/* Name Length Categories */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Short Names by Length</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-6">
            <h3 className="font-bold text-pink-900 mb-3">3-Letter Names</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <h4 className="font-semibold text-pink-800 mb-1">Girls</h4>
                <p className="text-pink-700">Ava, Mia, Zoe, Ivy, Eve, Amy, Ada, Mae</p>
              </div>
              <div>
                <h4 className="font-semibold text-pink-800 mb-1">Boys</h4>
                <p className="text-pink-700">Leo, Max, Ian, Kai, Ben, Sam, Eli, Rex</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-6">
            <h3 className="font-bold text-indigo-900 mb-3">4-Letter Names</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <h4 className="font-semibold text-indigo-800 mb-1">Girls</h4>
                <p className="text-indigo-700">Emma, Luna, Nora, Ruby, Rose, Ella, Lily, Sara</p>
              </div>
              <div>
                <h4 className="font-semibold text-indigo-800 mb-1">Boys</h4>
                <p className="text-indigo-700">Liam, Noah, Jack, Owen, Luke, Ryan, Cole, Ezra</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Short Girl Names */}
      <section className="mb-16">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-primary-600 mb-2">Short Girl Names</h2>
          <p className="text-gray-600">3-4 letter names for girls that are sweet and strong</p>
        </div>
        <NameGrid names={shortGirlNames} />
        <div className="text-center mt-6">
          <Link
            href="/names/girl/"
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            Browse All Girl Names →
          </Link>
        </div>
      </section>

      {/* Short Boy Names */}
      <section className="mb-16">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-secondary-600 mb-2">Short Boy Names</h2>
          <p className="text-gray-600">3-4 letter names for boys that are bold and classic</p>
        </div>
        <NameGrid names={shortBoyNames} />
        <div className="text-center mt-6">
          <Link
            href="/names/boy/"
            className="text-secondary-600 hover:text-secondary-700 font-medium"
          >
            Browse All Boy Names →
          </Link>
        </div>
      </section>

      {/* Popular Short Names by Origin */}
      <section className="mb-16 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Short Names by Origin</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-gray-900 mb-3">Latin & Greek</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Ava - Life, bird</li>
              <li>• Mia - Mine, beloved</li>
              <li>• Leo - Lion</li>
              <li>• Zoe - Life</li>
              <li>• Max - Greatest</li>
              <li>• Theo - Gift of God</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-3">Hebrew</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Noah - Rest, comfort</li>
              <li>• Eli - Ascended, uplifted</li>
              <li>• Ezra - Help</li>
              <li>• Anna - Grace</li>
              <li>• Eve - Life</li>
              <li>• Adam - Man, earth</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-3">English & Irish</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Jack - God is gracious</li>
              <li>• Emma - Universal</li>
              <li>• Liam - Strong-willed</li>
              <li>• Ruby - Red gemstone</li>
              <li>• Ryan - Little king</li>
              <li>• Kate - Pure</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="mb-16 bg-green-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Tips for Choosing a Short Name</h2>
        <div className="space-y-4 text-gray-600">
          <div className="flex items-start gap-3">
            <span className="text-2xl">💡</span>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Consider Middle Names</h3>
              <p>A longer middle name can balance out a very short first name beautifully.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">👂</span>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Say It With Your Last Name</h3>
              <p>Make sure the short first name flows well with your surname - avoid awkward combinations.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">✏️</span>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Check Spelling</h3>
              <p>Even short names can have alternate spellings - choose the version you prefer.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">🌍</span>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Research the Meaning</h3>
              <p>Short names often have powerful meanings - find one that resonates with you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="bg-gray-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Appeal of Short Baby Names</h2>
        <div className="prose prose-gray max-w-none text-gray-600 space-y-4">
          <p>
            Short baby names with just 3-4 letters have surged in popularity, reflecting a modern preference
            for simplicity and efficiency. These compact names are easy to spell, quick to say, and make a
            memorable impact. In our fast-paced world, a short name can be a practical advantage throughout
            life - from the playground to the boardroom.
          </p>
          <p>
            Despite their brevity, short names often carry profound meanings and rich histories. Names like
            Ava (meaning life), Leo (meaning lion), and Mia (meaning mine or beloved) pack significant
            meaning into just a few letters. Many short names are derived from longer traditional names,
            offering a fresh, modern take on classic choices.
          </p>
          <p>
            Short names also pair beautifully with longer middle or last names, creating a balanced full name.
            Parents appreciate that these names are easy for young children to learn to spell and write, and
            they fit comfortably on forms, name tags, and all the paperwork that comes with modern life.
          </p>
          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Trending Short Names</h3>
          <p>
            Some of the most popular baby names today are short and sweet: Emma, Liam, Ava, Noah, Mia, and
            Zoe consistently rank at the top of name charts. These names prove that you don&apos;t need many
            letters to make a lasting impression. Browse our collection to find the perfect short name for
            your little one.
          </p>
        </div>
      </section>
    </div>
  )
}

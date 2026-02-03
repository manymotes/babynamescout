import Link from 'next/link'
import type { Metadata } from 'next'
import { getAllNames } from '@/lib/data'
import { NameGrid } from '@/components/NameCard'

export const metadata: Metadata = {
  title: 'Biblical Baby Names | Christian Names from the Bible',
  description: 'Discover beautiful biblical baby names from the Old and New Testament. Browse traditional Christian names with deep spiritual meanings.',
  openGraph: {
    title: 'Biblical Baby Names from Scripture',
    description: 'Timeless names with spiritual significance',
  },
}

export default function BiblicalPage() {
  const allNames = getAllNames()

  // Get Hebrew origin names (most biblical names are Hebrew)
  const biblicalGirlNames = allNames
    .filter(n => n.gender === 'girl' && n.origin === 'Hebrew')
    .slice(0, 30)

  const biblicalBoyNames = allNames
    .filter(n => n.gender === 'boy' && n.origin === 'Hebrew')
    .slice(0, 30)

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero */}
      <div className="text-center mb-12">
        <span className="text-5xl mb-4 block">📖</span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Biblical Baby Names
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover timeless biblical names from the Old and New Testament. These meaningful names
          carry deep spiritual significance and have been cherished for thousands of years.
        </p>
      </div>

      {/* Categories */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Biblical Name Categories</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
            <h3 className="font-bold text-blue-900 mb-2">Old Testament</h3>
            <p className="text-blue-700 text-sm mb-2">
              Classic names from Genesis through Malachi: Noah, Elijah, Sarah, Rebecca, David, Ruth.
            </p>
            <p className="text-blue-600 text-xs">Names from ancient Israel with rich historical meanings.</p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
            <h3 className="font-bold text-purple-900 mb-2">New Testament</h3>
            <p className="text-purple-700 text-sm mb-2">
              Names from the Gospels and Acts: Matthew, Luke, Mary, Elizabeth, Timothy, John.
            </p>
            <p className="text-purple-600 text-xs">Names of disciples, apostles, and early Christians.</p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
            <h3 className="font-bold text-green-900 mb-2">Prophets & Kings</h3>
            <p className="text-green-700 text-sm mb-2">
              Powerful names of biblical leaders: Samuel, Daniel, Solomon, Isaiah, Ezekiel, Esther.
            </p>
            <p className="text-green-600 text-xs">Names representing leadership and divine calling.</p>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-6">
            <h3 className="font-bold text-amber-900 mb-2">Virtuous Names</h3>
            <p className="text-amber-700 text-sm mb-2">
              Names with meanings of faith and character: Grace, Faith, Hope, Charity, Emmanuel.
            </p>
            <p className="text-amber-600 text-xs">Names reflecting Christian virtues and values.</p>
          </div>

          <div className="bg-gradient-to-br from-rose-50 to-rose-100 rounded-xl p-6">
            <h3 className="font-bold text-rose-900 mb-2">Angels & Saints</h3>
            <p className="text-rose-700 text-sm mb-2">
              Heavenly names: Gabriel, Michael, Raphael, Angelica, Seraphina.
            </p>
            <p className="text-rose-600 text-xs">Names of divine messengers and holy figures.</p>
          </div>

          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-6">
            <h3 className="font-bold text-indigo-900 mb-2">Modern Biblical</h3>
            <p className="text-indigo-700 text-sm mb-2">
              Contemporary takes on scripture: Ezra, Micah, Abigail, Hannah, Caleb, Naomi.
            </p>
            <p className="text-indigo-600 text-xs">Biblical names that feel fresh and current.</p>
          </div>
        </div>
      </section>

      {/* Biblical Girl Names */}
      <section className="mb-16">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-primary-600 mb-2">Biblical Girl Names</h2>
          <p className="text-gray-600">Beautiful names from scripture for girls</p>
        </div>
        <NameGrid names={biblicalGirlNames} />
        <div className="text-center mt-6">
          <Link
            href="/origin/hebrew/"
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            View All Hebrew Names →
          </Link>
        </div>
      </section>

      {/* Biblical Boy Names */}
      <section className="mb-16">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-secondary-600 mb-2">Biblical Boy Names</h2>
          <p className="text-gray-600">Strong names from scripture for boys</p>
        </div>
        <NameGrid names={biblicalBoyNames} />
        <div className="text-center mt-6">
          <Link
            href="/origin/hebrew/"
            className="text-secondary-600 hover:text-secondary-700 font-medium"
          >
            View All Hebrew Names →
          </Link>
        </div>
      </section>

      {/* Popular Biblical Names */}
      <section className="mb-16 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Most Popular Biblical Names</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-gray-900 mb-3">Classic Girls</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Sarah - Princess</li>
              <li>• Rebecca - To bind</li>
              <li>• Rachel - Ewe</li>
              <li>• Hannah - Grace</li>
              <li>• Mary - Beloved</li>
              <li>• Elizabeth - God is my oath</li>
              <li>• Naomi - Pleasant</li>
              <li>• Ruth - Friend</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-3">Classic Boys</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Noah - Rest, comfort</li>
              <li>• Elijah - My God is Yahweh</li>
              <li>• Benjamin - Son of the right hand</li>
              <li>• David - Beloved</li>
              <li>• Daniel - God is my judge</li>
              <li>• Samuel - Heard by God</li>
              <li>• Jacob - Supplanter</li>
              <li>• Isaac - He will laugh</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-3">Trending Biblical</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Ezra - Help</li>
              <li>• Micah - Who is like God</li>
              <li>• Abigail - Father's joy</li>
              <li>• Caleb - Faithful, devotion</li>
              <li>• Asher - Happy, blessed</li>
              <li>• Leah - Weary</li>
              <li>• Levi - Joined, attached</li>
              <li>• Eve - Life</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Biblical Names */}
      <section className="mb-16 bg-blue-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose a Biblical Name?</h2>
        <div className="grid md:grid-cols-2 gap-6 text-gray-600">
          <div className="flex items-start gap-3">
            <span className="text-2xl">✝️</span>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Spiritual Significance</h3>
              <p>Biblical names carry deep religious meaning and connect your child to faith traditions.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">⏳</span>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Timeless Quality</h3>
              <p>These names have endured for thousands of years across cultures and generations.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">💎</span>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Rich Meanings</h3>
              <p>Every biblical name tells a story and carries profound spiritual significance.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">🌍</span>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Universal Recognition</h3>
              <p>Biblical names are recognized and respected across many cultures worldwide.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="bg-gray-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Enduring Appeal of Biblical Baby Names</h2>
        <div className="prose prose-gray max-w-none text-gray-600 space-y-4">
          <p>
            Biblical baby names have remained consistently popular for millennia, offering timeless appeal
            and deep spiritual significance. These names from the Old and New Testament carry stories of
            faith, courage, wisdom, and divine purpose. Parents who choose biblical names often appreciate
            their connection to religious heritage and the values they represent.
          </p>
          <p>
            Many of today&apos;s most popular baby names have biblical origins. Noah, Elijah, Hannah, and Abigail
            consistently rank among the top choices for modern parents. These names work beautifully because
            they balance tradition with contemporary sound, offering familiar yet distinctive choices that
            never go out of style.
          </p>
          <p>
            Biblical names come with built-in stories and meanings. Noah means rest or comfort, reflecting his
            role in preserving humanity. Sarah means princess, honoring the matriarch of nations. David means
            beloved, fitting for the shepherd king. These meaningful origins give parents a way to express
            their hopes and values through their child&apos;s name.
          </p>
          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Choosing the Right Biblical Name</h3>
          <p>
            When selecting a biblical name, consider both the sound and the story. Research the biblical
            figure who bore the name and whether their story resonates with you. Many parents also consider
            the name&apos;s meaning in Hebrew or Greek, ensuring it aligns with their wishes for their child.
            Browse our collection of biblical names to find the perfect choice that honors your faith and
            family traditions.
          </p>
        </div>
      </section>
    </div>
  )
}

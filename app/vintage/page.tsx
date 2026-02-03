import Link from 'next/link'
import type { Metadata } from 'next'
import { getAllNames } from '@/lib/data'
import { NameGrid } from '@/components/NameCard'

export const metadata: Metadata = {
  title: 'Vintage Baby Names | Classic & Old-Fashioned Names',
  description: 'Discover timeless vintage baby names from the 1920s-1950s. Browse classic, old-fashioned names that are making a stylish comeback.',
  openGraph: {
    title: 'Vintage & Classic Baby Names',
    description: 'Timeless names from bygone eras making a comeback',
  },
}

export default function VintagePage() {
  const allNames = getAllNames()

  // Classic vintage names - we'll filter by certain origins and name patterns
  const vintageNames = [
    'Theodore', 'Eleanor', 'Arthur', 'Hazel', 'Henry', 'Evelyn', 'Oscar', 'Clara',
    'Walter', 'Ruth', 'Ernest', 'Pearl', 'Albert', 'Dorothy', 'George', 'Florence',
    'Frederick', 'Beatrice', 'Harold', 'Violet', 'Stanley', 'Mabel', 'Louis', 'Edith',
    'Francis', 'Alice', 'Bernard', 'Rose', 'Leonard', 'Grace', 'Clarence', 'Lillian'
  ]

  const getVintageGirlNames = () => {
    return allNames
      .filter(n => n.gender === 'girl' && (
        vintageNames.includes(n.name) ||
        n.name.includes('eth') || n.name.includes('ine') ||
        ['English', 'French', 'German', 'Latin'].includes(n.origin)
      ))
      .slice(0, 30)
  }

  const getVintageBoyNames = () => {
    return allNames
      .filter(n => n.gender === 'boy' && (
        vintageNames.includes(n.name) ||
        ['English', 'German', 'Latin'].includes(n.origin)
      ))
      .slice(0, 30)
  }

  const vintageGirlNames = getVintageGirlNames()
  const vintageBoyNames = getVintageBoyNames()

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero */}
      <div className="text-center mb-12">
        <span className="text-5xl mb-4 block">🕰️</span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Vintage Baby Names
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover timeless classic names from the 1920s-1950s. These elegant, old-fashioned names
          are making a stylish comeback and offer sophistication and charm.
        </p>
      </div>

      {/* Era Sections */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Vintage Name Eras</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-6">
            <h3 className="font-bold text-amber-900 mb-2">1920s Names</h3>
            <p className="text-amber-700 text-sm">Dorothy, George, Ruth, Harold - the Roaring Twenties brought jazz and glamorous names.</p>
          </div>

          <div className="bg-gradient-to-br from-rose-50 to-rose-100 rounded-xl p-6">
            <h3 className="font-bold text-rose-900 mb-2">1930s Names</h3>
            <p className="text-rose-700 text-sm">Betty, William, Shirley, Robert - Depression-era names with enduring strength.</p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
            <h3 className="font-bold text-blue-900 mb-2">1940s Names</h3>
            <p className="text-blue-700 text-sm">Barbara, James, Patricia, John - wartime names reflecting resilience and tradition.</p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
            <h3 className="font-bold text-green-900 mb-2">1950s Names</h3>
            <p className="text-green-700 text-sm">Linda, Michael, Susan, David - post-war optimism in classic American names.</p>
          </div>
        </div>
      </section>

      {/* Why Vintage */}
      <section className="mb-16 bg-purple-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose a Vintage Name?</h2>
        <div className="grid md:grid-cols-2 gap-6 text-gray-600">
          <div className="flex items-start gap-3">
            <span className="text-2xl">👑</span>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Timeless Elegance</h3>
              <p className="text-sm">Vintage names have proven their staying power across generations.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">📚</span>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Rich History</h3>
              <p className="text-sm">These names carry stories from bygone eras and cultural significance.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">✨</span>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Sophisticated Sound</h3>
              <p className="text-sm">Old-fashioned names often have a refined, distinguished quality.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">🔄</span>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Fresh Again</h3>
              <p className="text-sm">After decades out of fashion, vintage names feel fresh and unique.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vintage Girl Names */}
      <section className="mb-16">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-primary-600 mb-2">Vintage Girl Names</h2>
          <p className="text-gray-600">Classic, timeless names for girls</p>
        </div>
        <NameGrid names={vintageGirlNames} />
        <div className="text-center mt-6">
          <Link
            href="/names/girl/"
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            Browse All Girl Names →
          </Link>
        </div>
      </section>

      {/* Vintage Boy Names */}
      <section className="mb-16">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-secondary-600 mb-2">Vintage Boy Names</h2>
          <p className="text-gray-600">Classic, timeless names for boys</p>
        </div>
        <NameGrid names={vintageBoyNames} />
        <div className="text-center mt-6">
          <Link
            href="/names/boy/"
            className="text-secondary-600 hover:text-secondary-700 font-medium"
          >
            Browse All Boy Names →
          </Link>
        </div>
      </section>

      {/* Popular Vintage Names List */}
      <section className="mb-16 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Vintage Names Making a Comeback</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-gray-900 mb-3">For Girls</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Eleanor - Shining light</li>
              <li>• Hazel - The hazelnut tree</li>
              <li>• Violet - Purple flower</li>
              <li>• Pearl - Precious gem</li>
              <li>• Clara - Bright, clear</li>
              <li>• Rose - The flower</li>
              <li>• Ruth - Companion, friend</li>
              <li>• Beatrice - She who brings happiness</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-3">For Boys</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Theodore - Gift of God</li>
              <li>• Arthur - Noble, bear</li>
              <li>• Oscar - God&apos;s spear</li>
              <li>• Walter - Army ruler</li>
              <li>• Henry - Ruler of the home</li>
              <li>• Albert - Noble, bright</li>
              <li>• George - Farmer</li>
              <li>• Frederick - Peaceful ruler</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-3">Unisex Vintage</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Charlie - Free man</li>
              <li>• Frankie - From France</li>
              <li>• Sam - Told by God</li>
              <li>• Alex - Defender</li>
              <li>• Max - Greatest</li>
              <li>• Lou - Famous warrior</li>
              <li>• Ray - Wise protector</li>
              <li>• Kit - Bearer of Christ</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="bg-gray-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Appeal of Vintage Baby Names</h2>
        <div className="prose prose-gray max-w-none text-gray-600 space-y-4">
          <p>
            Vintage baby names have surged in popularity as parents seek names with history, character, and
            sophistication. These classic names from the 1920s through 1950s offer a refreshing alternative
            to modern trends while maintaining timeless appeal. Names like Theodore, Eleanor, and Arthur
            feel both distinguished and approachable.
          </p>
          <p>
            What makes a name &quot;vintage&quot;? Generally, these are names that were popular in your grandparents&apos;
            or great-grandparents&apos; generation but fell out of favor for several decades. Now, after enough
            time has passed, they feel fresh and distinctive again. The vintage revival reflects a broader
            cultural appreciation for traditional craftsmanship, classic style, and enduring quality.
          </p>
          <p>
            Vintage names often have rich etymologies and cross-cultural appeal. Many come from Latin, Greek,
            Germanic, or Hebrew origins, carrying meanings related to virtues, nature, or noble qualities.
            These names also tend to have straightforward spellings and pronunciations, making them practical
            choices that honor the past while working perfectly in the present.
          </p>
          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Choosing the Perfect Vintage Name</h3>
          <p>
            When selecting a vintage name, consider how it sounds with your surname and whether it offers
            good nickname options. Many vintage names like Theodore (Theo), Eleanor (Ellie), and Charlotte
            (Charlie) have built-in short forms that give your child options as they grow. Browse our
            collection to find the perfect old-fashioned name with new-fashioned appeal.
          </p>
        </div>
      </section>
    </div>
  )
}

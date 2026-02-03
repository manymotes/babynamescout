'use client'

import Link from 'next/link'

export default function AvoidMistakesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Hero */}
      <div className="text-center mb-12">
        <Link href="/sibling-names/" className="text-amber-600 hover:text-amber-700 text-sm font-medium mb-4 inline-block">
          ← Back to Sibling Names
        </Link>
        <span className="text-5xl mb-4 block">⚠️</span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Sibling Naming Mistakes to Avoid
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Common pitfalls when choosing names for siblings, and how to avoid them while
          creating a cohesive yet individual set of names for your children.
        </p>
      </div>

      {/* Mistakes List */}
      <div className="space-y-8 mb-12">
        {/* Mistake 1 */}
        <section className="bg-red-50 border-2 border-red-200 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-red-900 mb-4 flex items-center gap-2">
            <span className="text-3xl">❌</span> Names That Are Too Similar
          </h2>
          <div className="space-y-3 text-gray-700">
            <p className="font-semibold">The Problem:</p>
            <p>
              Names like Madison and Addison, or Mary and Marie sound too alike. They create confusion when
              calling out names and make it harder for each child to have their own distinct identity.
            </p>
            <p className="font-semibold">Examples to Avoid:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Madison, Addison, and Bradison</li>
              <li>Aiden, Brayden, Cayden, and Jayden</li>
              <li>Mary, Marie, and Maria</li>
              <li>Michael and Michelle (too matchy for different genders)</li>
            </ul>
            <p className="font-semibold text-green-700">Better Alternative:</p>
            <p>
              Choose names that share a style or origin but have distinctly different sounds. Instead of
              Madison and Addison, try Madison and Harper or Addison and Charlotte.
            </p>
          </div>
        </section>

        {/* Mistake 2 */}
        <section className="bg-red-50 border-2 border-red-200 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-red-900 mb-4 flex items-center gap-2">
            <span className="text-3xl">❌</span> Overly Themed Names
          </h2>
          <div className="space-y-3 text-gray-700">
            <p className="font-semibold">The Problem:</p>
            <p>
              Theme names like all flowers (Rose, Lily, Daisy, Violet) or all months (April, May, June, August)
              can feel gimmicky and limit each child's individuality. Your children aren't a themed set.
            </p>
            <p className="font-semibold">Examples to Avoid:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>All Disney princesses: Ariel, Belle, Aurora, Jasmine</li>
              <li>All seasons: Autumn, Winter, Summer</li>
              <li>All places: Brooklyn, London, Paris, Dallas</li>
              <li>All virtues: Hope, Faith, Charity, Patience</li>
            </ul>
            <p className="font-semibold text-green-700">Better Alternative:</p>
            <p>
              Use a subtle theme. Instead of all flowers, use nature-inspired names with variety: Lily, River,
              Sage, and Rowan. The theme is present but not overwhelming.
            </p>
          </div>
        </section>

        {/* Mistake 3 */}
        <section className="bg-red-50 border-2 border-red-200 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-red-900 mb-4 flex items-center gap-2">
            <span className="text-3xl">❌</span> Dramatically Different Name Styles
          </h2>
          <div className="space-y-3 text-gray-700">
            <p className="font-semibold">The Problem:</p>
            <p>
              Giving one child an extremely unique or trendy name and another a very traditional name can create
              an awkward mismatch. Think Nevaeh and Elizabeth, or Braxtyn and William.
            </p>
            <p className="font-semibold">Examples to Avoid:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Khaleesi and Margaret</li>
              <li>Jayden and Theodore</li>
              <li>McKenzie and Catherine</li>
              <li>Axel and Frederick</li>
            </ul>
            <p className="font-semibold text-green-700">Better Alternative:</p>
            <p>
              Maintain similar formality levels. If you love both modern and classic, choose names that bridge
              the gap: Charlotte and Harper, or Theodore and Oliver.
            </p>
          </div>
        </section>

        {/* Mistake 4 */}
        <section className="bg-red-50 border-2 border-red-200 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-red-900 mb-4 flex items-center gap-2">
            <span className="text-3xl">❌</span> Unbalanced Popularity Levels
          </h2>
          <div className="space-y-3 text-gray-700">
            <p className="font-semibold">The Problem:</p>
            <p>
              Giving one child a Top 10 name and another an extremely rare name can make one feel "normal" and
              the other feel "different" in an awkward way. Balance is key.
            </p>
            <p className="font-semibold">Examples to Avoid:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Emma (#2) and Thessalonica (unranked)</li>
              <li>Liam (#1) and Beauregard (rare)</li>
              <li>Olivia and Eulalia</li>
            </ul>
            <p className="font-semibold text-green-700">Better Alternative:</p>
            <p>
              Keep names at similar popularity levels, or at least within a few hundred spots of each other.
              Emma and Clara, or Liam and Theo maintain better balance.
            </p>
          </div>
        </section>

        {/* Mistake 5 */}
        <section className="bg-red-50 border-2 border-red-200 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-red-900 mb-4 flex items-center gap-2">
            <span className="text-3xl">❌</span> Names With Unfortunate Combinations
          </h2>
          <div className="space-y-3 text-gray-700">
            <p className="font-semibold">The Problem:</p>
            <p>
              Some name combinations create unfortunate associations, jokes, or innuendos when said together.
              Always say potential sibling names together multiple times before deciding.
            </p>
            <p className="font-semibold">Examples to Avoid:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>George and Jungle (George of the Jungle)</li>
              <li>Jack and Jill (nursery rhyme)</li>
              <li>Romeo and Juliet (tragic lovers)</li>
              <li>Candy and Cookie (food theme that sounds silly)</li>
              <li>Harry and Sally (When Harry Met Sally)</li>
            </ul>
            <p className="font-semibold text-green-700">Better Alternative:</p>
            <p>
              Test all name combinations out loud. Say them in different orders, with your last name, and
              imagine them being announced together at events.
            </p>
          </div>
        </section>

        {/* Mistake 6 */}
        <section className="bg-red-50 border-2 border-red-200 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-red-900 mb-4 flex items-center gap-2">
            <span className="text-3xl">❌</span> Forcing a Pattern You Can't Continue
          </h2>
          <div className="space-y-3 text-gray-700">
            <p className="font-semibold">The Problem:</p>
            <p>
              Starting with all M names or all flower names seems fun, but what if you have more children?
              You may feel obligated to continue the pattern even if you run out of names you love.
            </p>
            <p className="font-semibold">The Trap:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>First two children: Matthew and Michael (love them!)</li>
              <li>Third child: Maxwell (okay, running out of M names I like)</li>
              <li>Fourth child: Mortimer (really scraping the barrel now)</li>
            </ul>
            <p className="font-semibold text-green-700">Better Alternative:</p>
            <p>
              Before committing to any pattern, make a list of 5-6 names in that category that you genuinely
              love. If you can't find that many, the pattern isn't sustainable.
            </p>
          </div>
        </section>

        {/* Mistake 7 */}
        <section className="bg-red-50 border-2 border-red-200 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-red-900 mb-4 flex items-center gap-2">
            <span className="text-3xl">❌</span> Ignoring Initials and Monograms
          </h2>
          <div className="space-y-3 text-gray-700">
            <p className="font-semibold">The Problem:</p>
            <p>
              Siblings with the exact same initials create confusion with monogrammed items, mail, and
              documents. Also check that individual initials don't spell unfortunate acronyms.
            </p>
            <p className="font-semibold">Examples to Avoid:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>All children with initials A.J.S. (Amy Jane Smith, Andrew James Smith, etc.)</li>
              <li>Individual unfortunate initials: A.S.S., P.I.G., B.A.D.</li>
            </ul>
            <p className="font-semibold text-green-700">Better Alternative:</p>
            <p>
              Check all initials before finalizing names. It's fine if they share one initial (all first names
              start with A), but avoid identical full initial sets.
            </p>
          </div>
        </section>

        {/* Mistake 8 */}
        <section className="bg-red-50 border-2 border-red-200 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-red-900 mb-4 flex items-center gap-2">
            <span className="text-3xl">❌</span> Vastly Different Name Lengths
          </h2>
          <div className="space-y-3 text-gray-700">
            <p className="font-semibold">The Problem:</p>
            <p>
              Pairing a very short name with a very long name can sound unbalanced when said together,
              especially with the same last name.
            </p>
            <p className="font-semibold">Examples to Avoid:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Jo and Alexandrina</li>
              <li>Max and Montgomery</li>
              <li>Bea and Evangeline</li>
            </ul>
            <p className="font-semibold text-green-700">Better Alternative:</p>
            <p>
              Keep names within a few syllables of each other, or if using very different lengths, make sure
              they both sound good with your last name: Alexander and Sophia works better than Alexandrina and Jo.
            </p>
          </div>
        </section>
      </div>

      {/* Golden Rules */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-xl p-8 mb-12">
        <h2 className="text-2xl font-bold text-green-900 mb-6 flex items-center gap-2">
          <span className="text-3xl">✅</span> Golden Rules for Sibling Names
        </h2>
        <div className="space-y-4 text-gray-700">
          <div className="flex items-start gap-3">
            <span className="text-2xl">1️⃣</span>
            <div>
              <p className="font-semibold">Say them out loud together, repeatedly</p>
              <p className="text-sm">Do they sound harmonious? Is there any awkwardness?</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">2️⃣</span>
            <div>
              <p className="font-semibold">Consider each name individually</p>
              <p className="text-sm">Does each name sound strong on its own, or does it only work as part of a set?</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">3️⃣</span>
            <div>
              <p className="font-semibold">Maintain similar style and formality</p>
              <p className="text-sm">Names should feel like they belong to the same family without being identical.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">4️⃣</span>
            <div>
              <p className="font-semibold">Think long-term</p>
              <p className="text-sm">Will these names still work well together when your children are adults?</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">5️⃣</span>
            <div>
              <p className="font-semibold">Get outside opinions</p>
              <p className="text-sm">Ask trusted friends if they notice any issues or unfortunate associations.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">6️⃣</span>
            <div>
              <p className="font-semibold">Avoid trends that might date quickly</p>
              <p className="text-sm">Names that are too trendy together may feel dated as a set.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="bg-gray-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Find Better Name Combinations</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/sibling-names/brother-sister-pairs/" className="bg-white hover:bg-purple-50 border rounded-lg p-4 text-center transition">
            <span className="font-medium text-purple-600">Brother-Sister Pairs →</span>
          </Link>
          <Link href="/sibling-names/same-origin/" className="bg-white hover:bg-green-50 border rounded-lg p-4 text-center transition">
            <span className="font-medium text-green-600">Same Origin →</span>
          </Link>
          <Link href="/sibling-names/vintage-pairs/" className="bg-white hover:bg-amber-50 border rounded-lg p-4 text-center transition">
            <span className="font-medium text-amber-600">Vintage Pairs →</span>
          </Link>
        </div>
      </section>
    </div>
  )
}

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Baby Registry Essentials - Must-Have Products for Newborns',
  description: 'Complete baby registry checklist with expert-recommended products. From car seats to cribs, get everything you need for your new baby.',
  keywords: ['baby registry', 'baby essentials', 'newborn products', 'baby gear', 'nursery essentials', 'baby must haves'],
}

export default function BabyProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-500 to-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Baby Registry Essentials
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Everything you need for your newborn, recommended by pediatricians and experienced parents.
            Build the perfect baby registry with our curated list of must-have products.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Introduction */}
        <div className="prose max-w-none mb-12">
          <p className="text-lg text-gray-700 leading-relaxed">
            Creating a baby registry can feel overwhelming with thousands of products to choose from. We've narrowed
            it down to the absolute essentials that every new parent needs, based on recommendations from pediatricians,
            safety experts, and thousands of parent reviews.
          </p>
        </div>

        {/* Product Categories */}
        <div className="space-y-16">

          {/* Car Seat */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gradient-to-r from-red-50 to-red-100 p-6 border-b border-red-200">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    🚗 Infant Car Seat
                  </h2>
                  <p className="text-red-800 font-medium">Required Before Leaving Hospital</p>
                </div>
              </div>
            </div>
            <div className="p-6 space-y-6">

              {/* Graco SnugRide */}
              <div className="border-b border-gray-200 pb-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">
                    Graco SnugRide SnugFit 35 Infant Car Seat
                  </h3>
                  <div className="text-right">
                    <div className="text-yellow-500">★★★★★</div>
                    <div className="text-gray-600 text-sm">4.8/5</div>
                  </div>
                </div>
                <p className="text-gray-700 mb-3">
                  Top-rated infant car seat with advanced safety features. Fits babies from 4-35 pounds and includes
                  Stay-in-Car base for easy transfers. Compatible with most strollers.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-2">Safety Features:</h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>✓ Side-impact protection</li>
                      <li>✓ 5-point harness</li>
                      <li>✓ Anti-rebound bar</li>
                      <li>✓ Crash-tested beyond federal standards</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-2">Convenience:</h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>✓ One-hand adjustable base</li>
                      <li>✓ Easy to install</li>
                      <li>✓ Removable infant insert</li>
                      <li>✓ Machine-washable cover</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-sm text-gray-700 mb-3">
                    <strong>Price:</strong> $140-180 | <strong>Weight:</strong> 4-35 lbs | <strong>Height:</strong> Up to 32"
                  </p>
                  <a
                    href="https://www.amazon.com/s?k=graco+snugride+35+infant+car+seat&tag=kendallmotes-20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition"
                  >
                    View on Amazon →
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Stroller */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 border-b border-blue-200">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    🚼 Baby Stroller
                  </h2>
                  <p className="text-blue-800 font-medium">Essential for Getting Out & About</p>
                </div>
              </div>
            </div>
            <div className="p-6 space-y-6">

              {/* Baby Jogger City Mini */}
              <div className="border-b border-gray-200 pb-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">
                    Baby Jogger City Mini GT2 Stroller
                  </h3>
                  <div className="text-right">
                    <div className="text-yellow-500">★★★★★</div>
                    <div className="text-gray-600 text-sm">4.7/5</div>
                  </div>
                </div>
                <p className="text-gray-700 mb-3">
                  Lightweight, all-terrain stroller that's easy to fold and maneuver. Works from birth with car seat
                  adapter or from 6 months with regular seat. Perfect for city streets and parks.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-gray-700 mb-3">
                    <strong>Price:</strong> $350-450 | <strong>Weight:</strong> 22 lbs | <strong>Max child weight:</strong> 65 lbs
                  </p>
                  <a
                    href="https://www.amazon.com/s?k=baby+jogger+city+mini+gt2&tag=kendallmotes-20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
                  >
                    View on Amazon →
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Crib & Mattress */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 border-b border-purple-200">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    🛏️ Crib & Mattress
                  </h2>
                  <p className="text-purple-800 font-medium">Safe Sleep Environment</p>
                </div>
              </div>
            </div>
            <div className="p-6 space-y-6">

              {/* Graco Benton Convertible Crib */}
              <div className="border-b border-gray-200 pb-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">
                    Graco Benton 4-in-1 Convertible Crib
                  </h3>
                  <div className="text-right">
                    <div className="text-yellow-500">★★★★★</div>
                    <div className="text-gray-600 text-sm">4.6/5</div>
                  </div>
                </div>
                <p className="text-gray-700 mb-3">
                  Solid, affordable crib that converts to toddler bed, daybed, and full-size bed with headboard.
                  JPMA certified and meets all safety standards. Classic design fits any nursery style.
                </p>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <p className="text-sm text-gray-700 mb-3">
                    <strong>Price:</strong> $180-250 | <strong>Converts:</strong> Crib → Toddler Bed → Daybed → Full Bed
                  </p>
                  <a
                    href="https://www.amazon.com/s?k=graco+benton+convertible+crib&tag=kendallmotes-20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition"
                  >
                    View on Amazon →
                  </a>
                </div>
              </div>

              {/* Crib Mattress */}
              <div className="border-b border-gray-200 pb-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">
                    Newton Baby Crib Mattress
                  </h3>
                  <div className="text-right">
                    <div className="text-yellow-500">★★★★★</div>
                    <div className="text-gray-600 text-sm">4.8/5</div>
                  </div>
                </div>
                <p className="text-gray-700 mb-3">
                  100% breathable, washable crib mattress that's safer than traditional foam or spring mattresses.
                  Hypoallergenic, non-toxic, and proven to reduce suffocation risk.
                </p>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <p className="text-sm text-gray-700 mb-3">
                    <strong>Price:</strong> $299-350 | <strong>Why it's worth it:</strong> Breathable design = safer sleep
                  </p>
                  <a
                    href="https://www.amazon.com/s?k=newton+baby+crib+mattress&tag=kendallmotes-20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition"
                  >
                    View on Amazon →
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Baby Monitor */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 border-b border-green-200">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    📹 Baby Monitor
                  </h2>
                  <p className="text-green-800 font-medium">Peace of Mind</p>
                </div>
              </div>
            </div>
            <div className="p-6 space-y-6">

              {/* Infant Optics Video Monitor */}
              <div className="border-b border-gray-200 pb-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">
                    Infant Optics DXR-8 PRO Video Baby Monitor
                  </h3>
                  <div className="text-right">
                    <div className="text-yellow-500">★★★★★</div>
                    <div className="text-gray-600 text-sm">4.5/5</div>
                  </div>
                </div>
                <p className="text-gray-700 mb-3">
                  The #1 bestselling baby monitor on Amazon. Crystal-clear video, two-way talk, room temperature display,
                  and long battery life. No WiFi needed = more secure and reliable.
                </p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-sm text-gray-700 mb-3">
                    <strong>Price:</strong> $180-200 | <strong>Range:</strong> 700 feet
                  </p>
                  <a
                    href="https://www.amazon.com/s?k=infant+optics+dxr+8+pro&tag=kendallmotes-20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition"
                  >
                    View on Amazon →
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Diaper Essentials */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-6 border-b border-yellow-200">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    🍼 Diaper Essentials
                  </h2>
                  <p className="text-yellow-800 font-medium">You'll Go Through Thousands</p>
                </div>
              </div>
            </div>
            <div className="p-6 space-y-6">

              {/* Diapers */}
              <div className="border-b border-gray-200 pb-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">
                    Pampers Swaddlers Diapers
                  </h3>
                  <div className="text-right">
                    <div className="text-yellow-500">★★★★★</div>
                    <div className="text-gray-600 text-sm">4.8/5</div>
                  </div>
                </div>
                <p className="text-gray-700 mb-3">
                  The #1 choice of hospitals. Soft, breathable, and gentle on newborn skin. Wetness indicator
                  tells you when it's time for a change.
                </p>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-sm text-gray-700 mb-3">
                    <strong>Price:</strong> $35-50 per box | <strong>Recommendation:</strong> Stock up on Size Newborn & Size 1
                  </p>
                  <a
                    href="https://www.amazon.com/s?k=pampers+swaddlers+newborn&tag=kendallmotes-20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-yellow-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-yellow-700 transition"
                  >
                    View on Amazon →
                  </a>
                </div>
              </div>

              {/* Wipes */}
              <div className="border-b border-gray-200 pb-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">
                    WaterWipes Baby Wipes
                  </h3>
                  <div className="text-right">
                    <div className="text-yellow-500">★★★★★</div>
                    <div className="text-gray-600 text-sm">4.7/5</div>
                  </div>
                </div>
                <p className="text-gray-700 mb-3">
                  The purest baby wipes with just 2 ingredients: 99.9% water and a drop of fruit extract.
                  Perfect for sensitive newborn skin. Recommended by pediatricians.
                </p>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-sm text-gray-700 mb-3">
                    <strong>Price:</strong> $45-55 for 9-pack (540 wipes) | <strong>Use for:</strong> Diaper changes, face, hands
                  </p>
                  <a
                    href="https://www.amazon.com/s?k=waterwipes+baby+wipes&tag=kendallmotes-20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-yellow-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-yellow-700 transition"
                  >
                    View on Amazon →
                  </a>
                </div>
              </div>

              {/* Diaper Pail */}
              <div className="border-b border-gray-200 pb-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">
                    Diaper Genie Complete Diaper Pail
                  </h3>
                  <div className="text-right">
                    <div className="text-yellow-500">★★★★☆</div>
                    <div className="text-gray-600 text-sm">4.4/5</div>
                  </div>
                </div>
                <p className="text-gray-700 mb-3">
                  The most popular diaper pail. Locks away odors with carbon filter and antimicrobial film.
                  Holds up to 270 diapers. Hands-free foot pedal.
                </p>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-sm text-gray-700 mb-3">
                    <strong>Price:</strong> $40-60 | <strong>Note:</strong> Requires refill bags (~$6-8 each)
                  </p>
                  <a
                    href="https://www.amazon.com/s?k=diaper+genie+complete&tag=kendallmotes-20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-yellow-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-yellow-700 transition"
                  >
                    View on Amazon →
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Baby Clothes */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gradient-to-r from-pink-50 to-pink-100 p-6 border-b border-pink-200">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    👶 Baby Clothing Basics
                  </h2>
                  <p className="text-pink-800 font-medium">Comfortable & Practical</p>
                </div>
              </div>
            </div>
            <div className="p-6 space-y-6">

              <div className="border-b border-gray-200 pb-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">
                    Simple Joys by Carter's Baby Bodysuits
                  </h3>
                  <div className="text-right">
                    <div className="text-yellow-500">★★★★★</div>
                    <div className="text-gray-600 text-sm">4.7/5</div>
                  </div>
                </div>
                <p className="text-gray-700 mb-3">
                  Affordable, high-quality basics. Multi-packs of bodysuits in neutral colors and patterns.
                  Soft cotton, snap closures, and built to last through multiple babies.
                </p>
                <div className="bg-pink-50 border border-pink-200 rounded-lg p-4">
                  <p className="text-sm text-gray-700 mb-3">
                    <strong>Price:</strong> $20-30 for 6-pack | <strong>Recommendation:</strong> Get 12-18 bodysuits total
                  </p>
                  <a
                    href="https://www.amazon.com/s?k=simple+joys+carters+baby+bodysuit&tag=kendallmotes-20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-pink-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-pink-700 transition"
                  >
                    View on Amazon →
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Registry Checklist */}
        <div className="mt-16 bg-blue-50 border border-blue-200 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Complete Baby Registry Checklist
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-gray-700">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Nursery Essentials</h3>
              <ul className="space-y-1 text-sm">
                <li>✓ Crib + mattress</li>
                <li>✓ Crib sheets (3-4)</li>
                <li>✓ Changing table</li>
                <li>✓ Dresser</li>
                <li>✓ Glider/rocking chair</li>
                <li>✓ Baby monitor</li>
                <li>✓ Blackout curtains</li>
                <li>✓ White noise machine</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Feeding</h3>
              <ul className="space-y-1 text-sm">
                <li>✓ Bottles (if not exclusively breastfeeding)</li>
                <li>✓ Bottle brush</li>
                <li>✓ Burp cloths (6-8)</li>
                <li>✓ Nursing pillow</li>
                <li>✓ Breast pump (if breastfeeding)</li>
                <li>✓ Bibs</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">On The Go</h3>
              <ul className="space-y-1 text-sm">
                <li>✓ Infant car seat</li>
                <li>✓ Stroller</li>
                <li>✓ Diaper bag</li>
                <li>✓ Baby carrier/wrap</li>
                <li>✓ Portable changing pad</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Affiliate Disclosure */}
        <div className="mt-8 text-center text-sm text-gray-600">
          <p>
            * We are a participant in the Amazon Services LLC Associates Program, an affiliate advertising
            program designed to provide a means for us to earn fees by linking to Amazon.com and affiliated sites.
            We earn a commission at no cost to you when you purchase through our links.
          </p>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-500 to-teal-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Find the Perfect Name for Your Baby
          </h2>
          <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
            Explore thousands of baby names with meanings, origins, and popularity data
            to find the perfect name for your little one.
          </p>
          <a
            href="/"
            className="inline-block bg-white text-teal-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition"
          >
            Browse Baby Names →
          </a>
        </div>

      </div>
    </div>
  )
}

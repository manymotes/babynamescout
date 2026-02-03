import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 border-t border-gray-100 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl">👶</span>
              <span className="text-lg font-bold text-gray-900">BabyNameScout</span>
            </Link>
            <p className="text-gray-600 text-sm">
              Helping parents find the perfect name for their little one since 2024.
            </p>
          </div>

          {/* Browse Names */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Browse Names</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/names/girl/" className="text-gray-600 hover:text-primary-600 text-sm">
                  Girl Names
                </Link>
              </li>
              <li>
                <Link href="/names/boy/" className="text-gray-600 hover:text-secondary-600 text-sm">
                  Boy Names
                </Link>
              </li>
              <li>
                <Link href="/unisex/" className="text-gray-600 hover:text-gray-900 text-sm">
                  Unisex Names
                </Link>
              </li>
              <li>
                <Link href="/popular/" className="text-gray-600 hover:text-gray-900 text-sm">
                  Popular Names
                </Link>
              </li>
              <li>
                <Link href="/unique/" className="text-gray-600 hover:text-gray-900 text-sm">
                  Unique Names
                </Link>
              </li>
              <li>
                <Link href="/vintage/" className="text-gray-600 hover:text-gray-900 text-sm">
                  Vintage Names
                </Link>
              </li>
            </ul>
          </div>

          {/* By Style */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">By Style</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/biblical/" className="text-gray-600 hover:text-gray-900 text-sm">
                  Biblical Names
                </Link>
              </li>
              <li>
                <Link href="/short-names/" className="text-gray-600 hover:text-gray-900 text-sm">
                  Short Names
                </Link>
              </li>
              <li>
                <Link href="/twin-names/" className="text-gray-600 hover:text-gray-900 text-sm">
                  Twin Names
                </Link>
              </li>
              <li>
                <Link href="/middle-names/" className="text-gray-600 hover:text-gray-900 text-sm">
                  Middle Names Guide
                </Link>
              </li>
              <li>
                <Link href="/origins/" className="text-gray-600 hover:text-gray-900 text-sm">
                  All Origins →
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/generator/" className="text-gray-600 hover:text-gray-900 text-sm">
                  Name Generator
                </Link>
              </li>
              <li>
                <Link href="/trends/2026/" className="text-gray-600 hover:text-gray-900 text-sm">
                  2026 Trends
                </Link>
              </li>
              <li>
                <Link href="/meanings/" className="text-gray-600 hover:text-gray-900 text-sm">
                  Name Meanings
                </Link>
              </li>
              <li>
                <Link href="/about/" className="text-gray-600 hover:text-gray-900 text-sm">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Explore More - Wellness/Parenting Group */}
        <div className="border-t border-gray-200 mt-8 pt-8">
          <h3 className="font-semibold text-gray-900 mb-4">Explore More</h3>
          <p className="text-gray-600 text-sm mb-4">
            Discover related resources for spiritual wellness and parenting:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
            <li>
              <a
                href="https://horoscopehub.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                Daily Horoscopes →
              </a>
            </li>
            <li>
              <a
                href="https://crystalguide.co"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                Crystal Meanings & Healing →
              </a>
            </li>
            <li>
              <a
                href="https://mypregnancyweek.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                Pregnancy Week-by-Week →
              </a>
            </li>
          </ul>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {currentYear} BabyNameScout. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

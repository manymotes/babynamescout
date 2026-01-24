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
                <Link href="/names/unisex/" className="text-gray-600 hover:text-gray-900 text-sm">
                  Unisex Names
                </Link>
              </li>
              <li>
                <Link href="/unique/" className="text-gray-600 hover:text-gray-900 text-sm">
                  Unique Names
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Origins */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Popular Origins</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/origin/hebrew/" className="text-gray-600 hover:text-gray-900 text-sm">
                  Hebrew Names
                </Link>
              </li>
              <li>
                <Link href="/origin/celtic/" className="text-gray-600 hover:text-gray-900 text-sm">
                  Celtic Names
                </Link>
              </li>
              <li>
                <Link href="/origin/latin/" className="text-gray-600 hover:text-gray-900 text-sm">
                  Latin Names
                </Link>
              </li>
              <li>
                <Link href="/origin/greek/" className="text-gray-600 hover:text-gray-900 text-sm">
                  Greek Names
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

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {currentYear} BabyNameScout. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

'use client'

import Link from 'next/link'
import { useState } from 'react'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [moreMenuOpen, setMoreMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-100">
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">👶</span>
            <span className="text-xl font-bold text-gray-900">BabyNameScout</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/names/girl/" className="text-gray-600 hover:text-primary-600 font-medium">
              Girl Names
            </Link>
            <Link href="/names/boy/" className="text-gray-600 hover:text-secondary-600 font-medium">
              Boy Names
            </Link>
            <Link href="/origins/" className="text-gray-600 hover:text-gray-900 font-medium">
              By Origin
            </Link>
            <div className="relative">
              <button
                onClick={() => setMoreMenuOpen(!moreMenuOpen)}
                onBlur={() => setTimeout(() => setMoreMenuOpen(false), 200)}
                className="text-gray-600 hover:text-gray-900 font-medium flex items-center gap-1"
              >
                Categories
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {moreMenuOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg py-2 min-w-[200px] z-50">
                  <Link href="/popular/" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900 text-sm">
                    Popular Names
                  </Link>
                  <Link href="/unique/" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900 text-sm">
                    Unique Names
                  </Link>
                  <Link href="/vintage/" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900 text-sm">
                    Vintage Names
                  </Link>
                  <Link href="/unisex/" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900 text-sm">
                    Unisex Names
                  </Link>
                  <Link href="/biblical/" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900 text-sm">
                    Biblical Names
                  </Link>
                  <Link href="/short-names/" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900 text-sm">
                    Short Names
                  </Link>
                  <Link href="/trends/2026/" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900 text-sm">
                    2026 Trends
                  </Link>
                  <div className="border-t border-gray-200 my-2"></div>
                  <Link href="/twin-names/" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900 text-sm">
                    Twin Names
                  </Link>
                  <Link href="/middle-names/" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900 text-sm">
                    Middle Names
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="/generator/"
              className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg font-medium transition"
            >
              Name Generator
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
            <div className="flex flex-col gap-3">
              <Link href="/names/girl/" className="text-gray-600 hover:text-primary-600 font-medium">
                Girl Names
              </Link>
              <Link href="/names/boy/" className="text-gray-600 hover:text-secondary-600 font-medium">
                Boy Names
              </Link>
              <Link href="/origins/" className="text-gray-600 hover:text-gray-900 font-medium">
                By Origin
              </Link>
              <div className="border-t border-gray-200 my-2"></div>
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Categories</div>
              <Link href="/popular/" className="text-gray-600 hover:text-gray-900 text-sm pl-2">
                Popular Names
              </Link>
              <Link href="/unique/" className="text-gray-600 hover:text-gray-900 text-sm pl-2">
                Unique Names
              </Link>
              <Link href="/vintage/" className="text-gray-600 hover:text-gray-900 text-sm pl-2">
                Vintage Names
              </Link>
              <Link href="/unisex/" className="text-gray-600 hover:text-gray-900 text-sm pl-2">
                Unisex Names
              </Link>
              <Link href="/biblical/" className="text-gray-600 hover:text-gray-900 text-sm pl-2">
                Biblical Names
              </Link>
              <Link href="/short-names/" className="text-gray-600 hover:text-gray-900 text-sm pl-2">
                Short Names
              </Link>
              <Link href="/trends/2026/" className="text-gray-600 hover:text-gray-900 text-sm pl-2">
                2026 Trends
              </Link>
              <div className="border-t border-gray-200 my-2"></div>
              <Link href="/twin-names/" className="text-gray-600 hover:text-gray-900 text-sm pl-2">
                Twin Names
              </Link>
              <Link href="/middle-names/" className="text-gray-600 hover:text-gray-900 text-sm pl-2">
                Middle Names Guide
              </Link>
              <Link
                href="/generator/"
                className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg font-medium transition text-center mt-2"
              >
                Name Generator
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

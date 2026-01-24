'use client'

import Link from 'next/link'
import { useState } from 'react'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
            <Link href="/meanings/" className="text-gray-600 hover:text-gray-900 font-medium">
              By Meaning
            </Link>
            <Link href="/trends/2026/" className="text-gray-600 hover:text-gray-900 font-medium">
              2026 Trends
            </Link>
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
              <Link href="/meanings/" className="text-gray-600 hover:text-gray-900 font-medium">
                By Meaning
              </Link>
              <Link href="/trends/2026/" className="text-gray-600 hover:text-gray-900 font-medium">
                2026 Trends
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

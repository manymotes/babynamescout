'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { getAllNames } from '@/lib/data'
import { NameGrid } from '@/components/NameCard'
import type { BabyName } from '@/types/name'

export default function GeneratorPage() {
  const allNames = getAllNames()

  const [gender, setGender] = useState<'all' | 'girl' | 'boy' | 'unisex'>('all')
  const [startingLetter, setStartingLetter] = useState<string>('')
  const [origin, setOrigin] = useState<string>('')
  const [showResults, setShowResults] = useState(false)

  const origins = useMemo(() => {
    const uniqueOrigins = [...new Set(allNames.map(n => n.origin))]
    return uniqueOrigins.sort()
  }, [allNames])

  const filteredNames = useMemo(() => {
    let filtered = allNames

    if (gender !== 'all') {
      filtered = filtered.filter(n => n.gender === gender)
    }

    if (startingLetter) {
      filtered = filtered.filter(n =>
        n.name.toLowerCase().startsWith(startingLetter.toLowerCase())
      )
    }

    if (origin) {
      filtered = filtered.filter(n => n.origin === origin)
    }

    // Shuffle and take random selection
    return filtered
      .sort(() => Math.random() - 0.5)
      .slice(0, 12)
  }, [allNames, gender, startingLetter, origin])

  const handleGenerate = () => {
    setShowResults(true)
  }

  const handleReset = () => {
    setGender('all')
    setStartingLetter('')
    setOrigin('')
    setShowResults(false)
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <span className="text-5xl mb-4 block">✨</span>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Baby Name Generator
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Get personalized baby name suggestions based on your preferences.
          Customize your search and discover the perfect name!
        </p>
      </div>

      {/* Generator Form */}
      <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8">
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Gender */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Gender
            </label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value as typeof gender)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="all">All Genders</option>
              <option value="girl">Girl Names</option>
              <option value="boy">Boy Names</option>
              <option value="unisex">Unisex Names</option>
            </select>
          </div>

          {/* Starting Letter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Starting Letter
            </label>
            <select
              value={startingLetter}
              onChange={(e) => setStartingLetter(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="">Any Letter</option>
              {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter => (
                <option key={letter} value={letter}>{letter}</option>
              ))}
            </select>
          </div>

          {/* Origin */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Origin
            </label>
            <select
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="">Any Origin</option>
              {origins.map(o => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={handleGenerate}
            className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-lg font-medium transition"
          >
            Generate Names
          </button>
          <button
            onClick={handleReset}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-8 py-3 rounded-lg font-medium transition"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Results */}
      {showResults && (
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Your Name Suggestions
            </h2>
            <button
              onClick={handleGenerate}
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              Shuffle &rarr;
            </button>
          </div>

          {filteredNames.length > 0 ? (
            <NameGrid names={filteredNames} />
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-xl">
              <p className="text-gray-600">
                No names found matching your criteria. Try adjusting your filters!
              </p>
            </div>
          )}
        </div>
      )}

      {/* Tips */}
      <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Tips for Choosing a Baby Name
        </h2>
        <ul className="space-y-3 text-gray-600">
          <li className="flex items-start gap-2">
            <span className="text-primary-500">•</span>
            Say the name out loud with your last name to hear how it sounds
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary-500">•</span>
            Consider potential nicknames and initials
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary-500">•</span>
            Think about the name&apos;s meaning and what it represents to you
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary-500">•</span>
            Check the popularity trend to see if the name is rising or falling
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary-500">•</span>
            Make sure both parents love the name - it&apos;s a joint decision!
          </li>
        </ul>
      </div>
    </div>
  )
}

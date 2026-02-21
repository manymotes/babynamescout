#!/usr/bin/env node
/**
 * Clean duplicate entries from lib/data.ts
 *
 * Strategy:
 * 1. For each unique name (case-insensitive), keep only ONE entry
 * 2. Prefer the entry with clean slug (no -2, -3 suffixes)
 * 3. Remove all duplicates
 * 4. Write cleaned data back to file
 */

import * as fs from 'fs'
import { getAllNames } from './lib/data.js'

console.log('=== Cleaning BabyNameScout Data ===\n')

// Read the current data
const allNames = getAllNames()
console.log(`Current total entries: ${allNames.length}`)

// Group by name (case-insensitive) and gender
// Key: "name_gender" (e.g. "olivia_girl")
const nameMap = new Map<string, any[]>()

for (const name of allNames) {
  const key = `${name.name.toLowerCase()}_${name.gender}`
  if (!nameMap.has(key)) {
    nameMap.set(key, [])
  }
  nameMap.get(key)!.push(name)
}

// For each group, select the best entry (clean slug preferred)
const cleanedNames: any[] = []
let removedCount = 0

for (const [key, entries] of nameMap.entries()) {
  if (entries.length === 1) {
    // No duplicates, keep as-is
    cleanedNames.push(entries[0])
  } else {
    // Has duplicates - choose the best one
    // Prefer slug without -2, -3 suffixes
    const cleanEntry = entries.find(e => !e.slug.match(/-\d+$/))

    if (cleanEntry) {
      cleanedNames.push(cleanEntry)
      removedCount += (entries.length - 1)
      console.log(`✓ ${cleanEntry.name} (${cleanEntry.gender}): Kept "${cleanEntry.slug}", removed ${entries.length - 1} duplicate(s)`)
    } else {
      // All have suffixes, keep the first one but warn
      cleanedNames.push(entries[0])
      removedCount += (entries.length - 1)
      console.warn(`⚠ ${entries[0].name} (${entries[0].gender}): All slugs have suffixes, kept "${entries[0].slug}"`)
    }
  }
}

console.log(`\n📊 Results:`)
console.log(`Original entries: ${allNames.length}`)
console.log(`Cleaned entries: ${cleanedNames.length}`)
console.log(`Removed: ${removedCount}`)
console.log(`Reduction: ${((removedCount / allNames.length) * 100).toFixed(1)}%`)

// Sort by popularity then name for consistency
cleanedNames.sort((a, b) => {
  if (a.popularity && b.popularity) {
    return a.popularity - b.popularity
  }
  return a.name.localeCompare(b.name)
})

// Generate the new data.ts file content
console.log(`\n📝 Generating new data.ts file...`)

const header = `/**
 * Baby Names Database
 *
 * CLEANED: ${new Date().toISOString()}
 * Removed ${removedCount} duplicate entries
 *
 * Each name now has ONE canonical entry per gender
 */

export interface BabyName {
  name: string
  slug: string
  gender: 'girl' | 'boy' | 'unisex'
  origin: string
  meaning: string
  popularity?: number
}

// Origins list
export const ORIGINS = [
  'Hebrew', 'Greek', 'Latin', 'English', 'Irish', 'German', 'French',
  'Spanish', 'Italian', 'Arabic', 'Scandinavian', 'Scottish', 'Welsh',
  'Slavic', 'Persian', 'Japanese', 'Indian', 'African', 'Native American',
  'Russian', 'Turkish', 'Portuguese'
]

// Meaning categories
export type MeaningCategory =
  | 'Strong'
  | 'Love'
  | 'Nature'
  | 'Light'
  | 'Noble'
  | 'Grace'
  | 'Wisdom'
  | 'Joy'
  | 'Gift'
  | 'Peace'
  | 'Victory'
  | 'Life'

export const MEANING_CATEGORIES: MeaningCategory[] = [
  'Strong', 'Love', 'Nature', 'Light', 'Noble', 'Grace',
  'Wisdom', 'Joy', 'Gift', 'Peace', 'Victory', 'Life'
]

// Baby names data
export const names: BabyName[] = [
`

const nameEntries = cleanedNames.map(n => {
  const parts = [
    `name: '${n.name.replace(/'/g, "\\'")}'`,
    `slug: '${n.slug}'`,
    `gender: '${n.gender}'`,
    `origin: '${n.origin.replace(/'/g, "\\'")}'`,
    `meaning: '${n.meaning.replace(/'/g, "\\'")}'`,
  ]

  if (n.popularity) {
    parts.push(`popularity: ${n.popularity}`)
  }

  return `  { ${parts.join(', ')} }`
}).join(',\n')

const footer = `
]

// Helper functions
export function getAllNames(): BabyName[] {
  return names
}

export function getNamesByGender(gender: 'girl' | 'boy' | 'unisex'): BabyName[] {
  return names.filter(n => n.gender === gender)
}

export function getNamesByLetter(gender: 'girl' | 'boy' | 'unisex', letter: string): BabyName[] {
  return names.filter(
    n => n.gender === gender && n.name[0].toLowerCase() === letter.toLowerCase()
  )
}

export function getNamesByOrigin(origin: string): BabyName[] {
  return names.filter(n => n.origin.toLowerCase() === origin.toLowerCase())
}

export function getNamesByMeaning(category: MeaningCategory): BabyName[] {
  const keywords = {
    Strong: ['strong', 'strength', 'warrior', 'brave', 'power', 'mighty'],
    Love: ['love', 'beloved', 'dear', 'affection'],
    Nature: ['nature', 'earth', 'tree', 'flower', 'river', 'meadow', 'valley', 'mountain'],
    Light: ['light', 'bright', 'shine', 'radiant', 'dawn'],
    Noble: ['noble', 'royal', 'prince', 'king', 'queen'],
    Grace: ['grace', 'gracious', 'elegant', 'favor'],
    Wisdom: ['wisdom', 'wise', 'intelligent', 'sage'],
    Joy: ['joy', 'happy', 'blessed', 'cheerful', 'rejoice'],
    Gift: ['gift', 'blessing', 'precious', 'treasure'],
    Peace: ['peace', 'peaceful', 'calm', 'serene'],
    Victory: ['victory', 'victorious', 'triumph', 'conqueror'],
    Life: ['life', 'living', 'alive']
  }

  const searchTerms = keywords[category] || []
  return names.filter(n =>
    searchTerms.some(term => n.meaning.toLowerCase().includes(term))
  )
}

export function getPopularNames(count: number = 100): BabyName[] {
  return names
    .filter(n => n.popularity)
    .sort((a, b) => (a.popularity || 999) - (b.popularity || 999))
    .slice(0, count)
}

export function getAvailableLetters(gender: 'girl' | 'boy' | 'unisex'): string[] {
  const letters = new Set<string>()
  names
    .filter(n => n.gender === gender)
    .forEach(n => letters.add(n.name[0].toUpperCase()))
  return Array.from(letters).sort()
}
`

const newContent = header + nameEntries + footer

// Write the cleaned file
const outputPath = 'lib/data-cleaned.ts'
fs.writeFileSync(outputPath, newContent)

console.log(`✅ Cleaned data written to: ${outputPath}`)
console.log(`\nNext steps:`)
console.log(`1. Review lib/data-cleaned.ts`)
console.log(`2. If looks good: mv lib/data-cleaned.ts lib/data.ts`)
console.log(`3. npm run build to regenerate site`)
console.log(`4. Implement 301 redirects for removed URLs`)

#!/usr/bin/env node
/**
 * Remove remaining -2, -3, -4 suffixes from names that don't have duplicates
 *
 * These 45 names only had suffixed versions in the original data.
 * Since duplicates have been removed, we can safely clean these slugs.
 */

import { getAllNames } from './lib/data.js'
import * as fs from 'fs'

console.log('=== Cleaning Remaining Numeric Suffixes ===\n')

const allNames = getAllNames()

// Find names with numeric suffixes
const namesWithSuffixes = allNames.filter(n => n.slug.match(/-\d+$/))

console.log(`Found ${namesWithSuffixes.length} names with numeric suffixes:`)
namesWithSuffixes.forEach(n => {
  console.log(`  - ${n.name}: ${n.slug}`)
})

// For each, create clean slug
const updates: Array<{old: string, new: string, name: string}> = []
const newRedirects: string[] = []

for (const name of namesWithSuffixes) {
  const cleanSlug = name.slug.replace(/-\d+$/, '')

  // Check if clean slug would conflict with existing
  const conflict = allNames.find(n => n.slug === cleanSlug)

  if (conflict) {
    console.warn(`⚠️  Cannot clean ${name.slug} - would conflict with existing: ${conflict.name}`)
  } else {
    updates.push({
      old: name.slug,
      new: cleanSlug,
      name: name.name
    })
    newRedirects.push(`/name/${name.slug}/ /name/${cleanSlug}/ 301`)
  }
}

console.log(`\n✓ Can safely clean ${updates.length} slugs`)
console.log(`⚠️  ${namesWithSuffixes.length - updates.length} would conflict and must keep suffix\n`)

// Read current data.ts
const dataPath = 'lib/data.ts'
let content = fs.readFileSync(dataPath, 'utf-8')

// Replace each slug
let replacements = 0
for (const update of updates) {
  const oldPattern = `slug: '${update.old}'`
  const newPattern = `slug: '${update.new}'`

  const before = content
  content = content.replace(oldPattern, newPattern)

  if (content !== before) {
    replacements++
    console.log(`✓ ${update.name}: ${update.old} → ${update.new}`)
  } else {
    console.warn(`⚠️  Could not find: ${oldPattern}`)
  }
}

// Write updated data
fs.writeFileSync(dataPath, content)
console.log(`\n✅ Updated ${replacements} slugs in ${dataPath}`)

// Append new redirects to _redirects file
if (newRedirects.length > 0) {
  const redirectsPath = 'public/_redirects'
  const existingRedirects = fs.readFileSync(redirectsPath, 'utf-8')

  const newContent = existingRedirects + '\n# Additional redirects for cleaned suffixes\n' + newRedirects.join('\n') + '\n'

  fs.writeFileSync(redirectsPath, newContent)
  console.log(`✅ Added ${newRedirects.length} redirects to ${redirectsPath}`)
}

console.log(`\n📊 Summary:`)
console.log(`  Names cleaned: ${replacements}`)
console.log(`  Redirects added: ${newRedirects.length}`)
console.log(`  Remaining with suffixes: ${namesWithSuffixes.length - updates.length}`)

console.log(`\n🎯 Next steps:`)
console.log(`1. npm run build`)
console.log(`2. Verify no duplicate slugs exist`)
console.log(`3. Deploy to production`)

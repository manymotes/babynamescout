#!/usr/bin/env node
/**
 * Fix duplicate name entries in data.ts
 *
 * Problem: The database has duplicate name entries with -2, -2-3 suffixes in slugs
 * This creates duplicate pages that Google sees as spam/thin content
 *
 * Solution: Remove all duplicate entries, keep only the first occurrence
 */

import { getAllNames } from './lib/data.js'
import * as fs from 'fs'

console.log('=== BabyNameScout Duplicate Fixer ===\n')

// Get all names
const allNames = getAllNames()

console.log(`Total names in database: ${allNames.length}`)

// Find duplicates by name (case-insensitive)
const nameMap = new Map<string, any[]>()

for (const name of allNames) {
  const key = name.name.toLowerCase()
  if (!nameMap.has(key)) {
    nameMap.set(key, [])
  }
  nameMap.get(key)!.push(name)
}

// Find names that have duplicates
const duplicates: any[] = []
const duplicateNames: string[] = []

for (const [nameKey, entries] of nameMap.entries()) {
  if (entries.length > 1) {
    duplicates.push({
      name: entries[0].name,
      count: entries.length,
      entries: entries
    })
    duplicateNames.push(entries[0].name)
  }
}

console.log(`\nFound ${duplicates.length} names with duplicates:`)
console.log(`This creates ${duplicates.reduce((sum, d) => sum + d.count, 0)} total entries for ${duplicates.length} unique names`)

// Show first 20 duplicates
console.log(`\n🔍 Sample duplicates (showing first 20):`)
duplicates.slice(0, 20).forEach((dup, i) => {
  console.log(`\n${i + 1}. ${dup.name} (${dup.count} entries)`)
  dup.entries.forEach((entry: any, j: number) => {
    console.log(`   ${j + 1}. slug: "${entry.slug}", gender: ${entry.gender}, origin: ${entry.origin}`)
  })
})

// Identify which slugs have -2 suffixes
const slugsWithSuffix = allNames.filter(n => n.slug.match(/-2(-\d+)?$/))
console.log(`\n📊 Slugs with -2 suffix: ${slugsWithSuffix.length}`)

// Show examples
console.log(`\nExamples of problematic slugs:`)
slugsWithSuffix.slice(0, 10).forEach(n => {
  console.log(`  - ${n.name}: slug="${n.slug}"`)
})

// Generate report
const report = {
  timestamp: new Date().toISOString(),
  totalNames: allNames.length,
  uniqueNames: nameMap.size,
  duplicateNames: duplicates.length,
  slugsWithSuffix: slugsWithSuffix.length,
  duplicateDetails: duplicates.map(d => ({
    name: d.name,
    count: d.count,
    slugs: d.entries.map((e: any) => e.slug)
  }))
}

// Save report
const reportPath = './duplicate-names-report.json'
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2))
console.log(`\n✅ Report saved to: ${reportPath}`)

// Generate list of slugs to redirect (all -2 variants should redirect to base)
const redirects = slugsWithSuffix.map(n => {
  const baseSlug = n.slug.replace(/-2(-\d+)?$/, '')
  return {
    from: `/name/${n.slug}/`,
    to: `/name/${baseSlug}/`,
    name: n.name
  }
})

const redirectsPath = './redirects-needed.json'
fs.writeFileSync(redirectsPath, JSON.stringify(redirects, null, 2))
console.log(`✅ Redirects list saved to: ${redirectsPath}`)
console.log(`   ${redirects.length} redirects needed`)

console.log(`\n🎯 Next steps:`)
console.log(`1. Review the duplicate-names-report.json`)
console.log(`2. Remove duplicate entries from lib/data.ts (keep first occurrence)`)
console.log(`3. Implement 301 redirects from redirects-needed.json`)
console.log(`4. Rebuild site`)
console.log(`5. Update sitemap to exclude duplicates`)

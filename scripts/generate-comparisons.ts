import * as fs from 'fs'
import * as path from 'path'

interface BabyName {
  name: string
  slug: string
  gender: 'girl' | 'boy' | 'unisex'
  origin: string
  meaning: string
  popularity?: number
}

interface NameComparison {
  name1: string
  name2: string
  slug1: string
  slug2: string
  comparisonSlug: string
  gender: 'girl' | 'boy' | 'mixed'
}

// Read the data.ts file and extract names
function extractNamesFromDataFile(): BabyName[] {
  const dataPath = path.join(process.cwd(), 'lib', 'data.ts')
  const content = fs.readFileSync(dataPath, 'utf-8')

  // Extract names array from the file
  const namesMatch = content.match(/const names = \[([\s\S]+?)\]/m)
  if (!namesMatch) {
    throw new Error('Could not find names array in data.ts')
  }

  const names: BabyName[] = []
  const nameRegex = /\{\s*name:\s*'([^']+)',\s*slug:\s*'([^']+)',\s*gender:\s*'(girl|boy|unisex)',\s*origin:\s*'([^']+)',\s*meaning:\s*'([^']+)',\s*popularity:\s*(\d+)\s*\}/g

  let match
  while ((match = nameRegex.exec(namesMatch[1])) !== null) {
    names.push({
      name: match[1],
      slug: match[2],
      gender: match[3] as 'girl' | 'boy' | 'unisex',
      origin: match[4],
      meaning: match[5],
      popularity: parseInt(match[6])
    })
  }

  return names
}

function generateComparisons(): NameComparison[] {
  const allNames = extractNamesFromDataFile()
  const comparisons: NameComparison[] = []
  const usedCombinations = new Set<string>()

  // Deduplicate names by name (not slug)
  const uniqueNames = new Map<string, BabyName>()
  allNames.forEach(name => {
    const key = `${name.name.toLowerCase()}-${name.gender}`
    if (!uniqueNames.has(key) || (name.popularity && (!uniqueNames.get(key)?.popularity || name.popularity < uniqueNames.get(key)!.popularity!))) {
      uniqueNames.set(key, name)
    }
  })

  const names = Array.from(uniqueNames.values())

  // Get top 8 girls and boys by popularity (reduced to meet Cloudflare Pages 20k file limit)
  const topGirls = names
    .filter(n => n.gender === 'girl' && n.popularity && n.popularity <= 8)
    .sort((a, b) => (a.popularity || 999) - (b.popularity || 999))
    .slice(0, 8)

  const topBoys = names
    .filter(n => n.gender === 'boy' && n.popularity && n.popularity <= 8)
    .sort((a, b) => (a.popularity || 999) - (b.popularity || 999))
    .slice(0, 8)

  console.log(`Found ${topGirls.length} top girl names and ${topBoys.length} top boy names`)

  function addComparison(name1: BabyName, name2: BabyName) {
    const sortedNames = [name1.name, name2.name].sort()
    const key = `${sortedNames[0]}-${sortedNames[1]}`

    if (usedCombinations.has(key)) return
    usedCombinations.add(key)

    const isName1First = name1.name === sortedNames[0]
    const first = isName1First ? name1 : name2
    const second = isName1First ? name2 : name1

    const gender: 'girl' | 'boy' | 'mixed' =
      first.gender === second.gender && first.gender !== 'unisex'
        ? first.gender
        : 'mixed'

    comparisons.push({
      name1: first.name,
      name2: second.name,
      slug1: first.slug,
      slug2: second.slug,
      comparisonSlug: `${first.slug}-vs-${second.slug}`,
      gender
    })
  }

  // 1. Top 8 girl names vs each other
  console.log('Generating girl name comparisons...')
  for (let i = 0; i < topGirls.length; i++) {
    for (let j = i + 1; j < topGirls.length; j++) {
      addComparison(topGirls[i], topGirls[j])
    }
  }

  // 2. Top 8 boy names vs each other
  console.log('Generating boy name comparisons...')
  for (let i = 0; i < topBoys.length; i++) {
    for (let j = i + 1; j < topBoys.length; j++) {
      addComparison(topBoys[i], topBoys[j])
    }
  }

  // 3. Similar sounding names (same first letter, same gender, top 100)
  // COMMENTED OUT TO REDUCE FILE COUNT FOR CLOUDFLARE PAGES LIMIT
  // console.log('Generating similar sounding name comparisons...')
  // const top100Girls = names
  //   .filter(n => n.gender === 'girl' && n.popularity && n.popularity <= 100)
  //   .sort((a, b) => (a.popularity || 999) - (b.popularity || 999))

  // const top100Boys = names
  //   .filter(n => n.gender === 'boy' && n.popularity && n.popularity <= 100)
  //   .sort((a, b) => (a.popularity || 999) - (b.popularity || 999))

  // // Group by first letter
  // const girlsByLetter = new Map<string, BabyName[]>()
  // const boysByLetter = new Map<string, BabyName[]>()

  // top100Girls.forEach(name => {
  //   const letter = name.name[0].toUpperCase()
  //   if (!girlsByLetter.has(letter)) girlsByLetter.set(letter, [])
  //   girlsByLetter.get(letter)!.push(name)
  // })

  // top100Boys.forEach(name => {
  //   const letter = name.name[0].toUpperCase()
  //   if (!boysByLetter.has(letter)) boysByLetter.set(letter, [])
  //   boysByLetter.get(letter)!.push(name)
  // })

  // // Add comparisons for names starting with same letter (limit to avoid too many)
  // girlsByLetter.forEach(letterNames => {
  //   for (let i = 0; i < letterNames.length && i < 10; i++) {
  //     for (let j = i + 1; j < letterNames.length && j < 10; j++) {
  //       addComparison(letterNames[i], letterNames[j])
  //     }
  //   }
  // })

  // boysByLetter.forEach(letterNames => {
  //   for (let i = 0; i < letterNames.length && i < 10; i++) {
  //     for (let j = i + 1; j < letterNames.length && j < 10; j++) {
  //       addComparison(letterNames[i], letterNames[j])
  //     }
  //   }
  // })

  // // 4. Same origin names (top 100)
  // COMMENTED OUT TO REDUCE FILE COUNT FOR CLOUDFLARE PAGES LIMIT
  // console.log('Generating same origin name comparisons...')
  // const girlsByOrigin = new Map<string, BabyName[]>()
  // const boysByOrigin = new Map<string, BabyName[]>()

  // top100Girls.forEach(name => {
  //   if (!girlsByOrigin.has(name.origin)) girlsByOrigin.set(name.origin, [])
  //   girlsByOrigin.get(name.origin)!.push(name)
  // })

  // top100Boys.forEach(name => {
  //   if (!boysByOrigin.has(name.origin)) boysByOrigin.set(name.origin, [])
  //   boysByOrigin.get(name.origin)!.push(name)
  // })

  // // Add comparisons for names with same origin (limit to top 5 per origin)
  // girlsByOrigin.forEach(originNames => {
  //   if (originNames.length < 2) return
  //   const limited = originNames.slice(0, 8)
  //   for (let i = 0; i < limited.length; i++) {
  //     for (let j = i + 1; j < limited.length; j++) {
  //       addComparison(limited[i], limited[j])
  //     }
  //   }
  // })

  // boysByOrigin.forEach(originNames => {
  //   if (originNames.length < 2) return
  //   const limited = originNames.slice(0, 8)
  //   for (let i = 0; i < limited.length; i++) {
  //     for (let j = i + 1; j < limited.length; j++) {
  //       addComparison(limited[i], limited[j])
  //     }
  //   }
  // })

  console.log(`Generated ${comparisons.length} total comparisons`)
  return comparisons
}

// Generate and save comparisons
const comparisons = generateComparisons()

// Create output directory if it doesn't exist
const outputDir = path.join(process.cwd(), 'lib')
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true })
}

// Write comparisons to a TypeScript file
const outputPath = path.join(outputDir, 'comparisons-data.ts')
const content = `// Auto-generated comparison data
// Generated on ${new Date().toISOString()}

export interface NameComparison {
  name1: string
  name2: string
  slug1: string
  slug2: string
  comparisonSlug: string
  gender: 'girl' | 'boy' | 'mixed'
}

export const comparisons: NameComparison[] = ${JSON.stringify(comparisons, null, 2)}

export function getAllComparisons(): NameComparison[] {
  return comparisons
}

export function getComparisonBySlug(slug: string): NameComparison | undefined {
  return comparisons.find(c => c.comparisonSlug === slug)
}

export function getComparisonsByGender(gender: 'girl' | 'boy' | 'mixed'): NameComparison[] {
  return comparisons.filter(c => c.gender === gender)
}

export function getPopularComparisons(limit = 20): NameComparison[] {
  // Return comparisons involving very popular names
  return comparisons.slice(0, limit)
}

export function searchComparisons(query: string): NameComparison[] {
  const q = query.toLowerCase()
  return comparisons.filter(c =>
    c.name1.toLowerCase().includes(q) ||
    c.name2.toLowerCase().includes(q)
  )
}
`

fs.writeFileSync(outputPath, content, 'utf-8')
console.log(`\nComparison data written to ${outputPath}`)
console.log(`Total comparisons: ${comparisons.length}`)

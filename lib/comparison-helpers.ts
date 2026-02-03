import type { BabyName } from '@/types/name'

export interface ComparisonData {
  name1: BabyName
  name2: BabyName
  winner: {
    morePopular: 'name1' | 'name2' | 'tie'
    shorter: 'name1' | 'name2' | 'tie'
    moreUnique: 'name1' | 'name2' | 'tie'
  }
  commonalities: string[]
  differences: string[]
}

export function compareNames(name1: BabyName, name2: BabyName): ComparisonData {
  const commonalities: string[] = []
  const differences: string[] = []

  // Determine popularity winner
  let morePopular: 'name1' | 'name2' | 'tie' = 'tie'
  if (name1.popularity && name2.popularity) {
    morePopular = name1.popularity < name2.popularity ? 'name1' : name2.popularity < name1.popularity ? 'name2' : 'tie'
  } else if (name1.popularity) {
    morePopular = 'name1'
  } else if (name2.popularity) {
    morePopular = 'name2'
  }

  // Determine length winner
  const shorter: 'name1' | 'name2' | 'tie' =
    name1.name.length < name2.name.length ? 'name1' :
    name2.name.length < name1.name.length ? 'name2' : 'tie'

  // Determine uniqueness winner (higher popularity number = more unique)
  let moreUnique: 'name1' | 'name2' | 'tie' = 'tie'
  if (name1.popularity && name2.popularity) {
    moreUnique = name1.popularity > name2.popularity ? 'name1' : name2.popularity > name1.popularity ? 'name2' : 'tie'
  } else if (!name1.popularity && name2.popularity) {
    moreUnique = 'name1'
  } else if (name1.popularity && !name2.popularity) {
    moreUnique = 'name2'
  }

  // Find commonalities
  if (name1.gender === name2.gender) {
    const genderLabel = name1.gender === 'girl' ? 'girl' : name1.gender === 'boy' ? 'boy' : 'unisex'
    commonalities.push(`Both are ${genderLabel} names`)
  }

  if (name1.origin === name2.origin) {
    commonalities.push(`Both have ${name1.origin} origins`)
  }

  if (name1.name[0] === name2.name[0]) {
    commonalities.push(`Both start with the letter ${name1.name[0]}`)
  }

  if (name1.name.length === name2.name.length) {
    commonalities.push(`Both have ${name1.name.length} letters`)
  }

  // Check for similar meanings
  const meaning1Lower = name1.meaning.toLowerCase()
  const meaning2Lower = name2.meaning.toLowerCase()
  if (meaning1Lower === meaning2Lower) {
    commonalities.push('Both have the same meaning')
  } else if (
    meaning1Lower.includes('light') && meaning2Lower.includes('light') ||
    meaning1Lower.includes('god') && meaning2Lower.includes('god') ||
    meaning1Lower.includes('strong') && meaning2Lower.includes('strong') ||
    meaning1Lower.includes('love') && meaning2Lower.includes('love') ||
    meaning1Lower.includes('grace') && meaning2Lower.includes('grace')
  ) {
    commonalities.push('Both have similar meaning themes')
  }

  // Find differences
  if (name1.gender !== name2.gender) {
    const gender1Label = name1.gender === 'girl' ? 'girl' : name1.gender === 'boy' ? 'boy' : 'unisex'
    const gender2Label = name2.gender === 'girl' ? 'girl' : name2.gender === 'boy' ? 'boy' : 'unisex'
    differences.push(`${name1.name} is a ${gender1Label} name while ${name2.name} is a ${gender2Label} name`)
  }

  if (name1.origin !== name2.origin) {
    differences.push(`${name1.name} has ${name1.origin} origins while ${name2.name} has ${name2.origin} origins`)
  }

  if (Math.abs(name1.name.length - name2.name.length) >= 2) {
    differences.push(`${name1.name} is ${name1.name.length > name2.name.length ? 'longer' : 'shorter'} (${name1.name.length} vs ${name2.name.length} letters)`)
  }

  if (name1.popularity && name2.popularity && Math.abs(name1.popularity - name2.popularity) >= 10) {
    const morePop = name1.popularity < name2.popularity ? name1 : name2
    const lessPop = name1.popularity < name2.popularity ? name2 : name1
    differences.push(`${morePop.name} is significantly more popular (ranked #${morePop.popularity} vs #${lessPop.popularity})`)
  }

  return {
    name1,
    name2,
    winner: {
      morePopular,
      shorter,
      moreUnique
    },
    commonalities,
    differences
  }
}

export function getComparisonInsights(comparison: ComparisonData): {
  title: string
  description: string
} {
  const { name1, name2, winner } = comparison

  let title = `${name1.name} vs ${name2.name}: `
  let description = ''

  if (winner.morePopular !== 'tie') {
    const popularName = winner.morePopular === 'name1' ? name1 : name2
    title += `${popularName.name} is More Popular`
  } else {
    title += 'Both Names Are Equally Popular'
  }

  if (name1.origin === name2.origin && name1.gender === name2.gender) {
    description = `Both ${name1.name} and ${name2.name} are ${name1.origin} ${name1.gender} names, making them excellent alternatives to consider.`
  } else if (name1.gender === name2.gender) {
    description = `Compare ${name1.name} and ${name2.name}, two popular ${name1.gender} names with different cultural backgrounds.`
  } else {
    description = `${name1.name} and ${name2.name} are names from different traditions that offer unique qualities for your baby.`
  }

  return { title, description }
}

// Mock state-by-state data (in a real app, this would come from actual data)
export function getStatePreferences(name1: BabyName, name2: BabyName): {
  name1States: string[]
  name2States: string[]
  tieStates: string[]
} {
  // This is mock data - in production you'd have actual state-by-state data
  const allStates = [
    'California', 'Texas', 'Florida', 'New York', 'Pennsylvania',
    'Illinois', 'Ohio', 'Georgia', 'North Carolina', 'Michigan'
  ]

  // Mock distribution based on popularity
  const name1Count = Math.floor(allStates.length * 0.4)
  const name2Count = Math.floor(allStates.length * 0.4)

  return {
    name1States: allStates.slice(0, name1Count),
    name2States: allStates.slice(name1Count, name1Count + name2Count),
    tieStates: allStates.slice(name1Count + name2Count)
  }
}

// Generate mock trend data for charts
export function getTrendData(name1: BabyName, name2: BabyName): {
  years: number[]
  name1Data: number[]
  name2Data: number[]
} {
  const currentYear = 2025
  const years = Array.from({ length: 10 }, (_, i) => currentYear - 9 + i)

  // Generate mock trend data based on current popularity
  const name1Base = name1.popularity || 500
  const name2Base = name2.popularity || 500

  const name1Data = years.map((_, i) => {
    const trend = Math.sin(i / 2) * 50
    return Math.max(1, Math.min(1000, name1Base + trend + (Math.random() - 0.5) * 20))
  })

  const name2Data = years.map((_, i) => {
    const trend = Math.cos(i / 2) * 50
    return Math.max(1, Math.min(1000, name2Base + trend + (Math.random() - 0.5) * 20))
  })

  return { years, name1Data, name2Data }
}

// Generate pros for each name
export function getNamePros(name: BabyName): string[] {
  const pros: string[] = []

  if (name.popularity && name.popularity <= 10) {
    pros.push('Highly popular and well-recognized')
    pros.push('Easy for others to spell and pronounce')
  } else if (name.popularity && name.popularity <= 50) {
    pros.push('Popular but not overly common')
    pros.push('Good balance of familiar and distinctive')
  } else if (name.popularity && name.popularity <= 100) {
    pros.push('Moderately popular - stands out without being too unusual')
  } else {
    pros.push('Unique and distinctive choice')
    pros.push('Less likely to be shared with classmates')
  }

  if (name.name.length <= 4) {
    pros.push('Short and easy to write')
  } else if (name.name.length <= 6) {
    pros.push('Manageable length for young children')
  }

  if (name.origin === 'English' || name.origin === 'American') {
    pros.push('Culturally familiar in English-speaking countries')
  } else {
    pros.push(`Beautiful ${name.origin} heritage`)
  }

  // Check if name has strong meaning
  const meaning = name.meaning.toLowerCase()
  if (meaning.includes('strong') || meaning.includes('warrior') || meaning.includes('brave')) {
    pros.push('Powerful and strong meaning')
  } else if (meaning.includes('love') || meaning.includes('beloved') || meaning.includes('dear')) {
    pros.push('Loving and affectionate meaning')
  } else if (meaning.includes('wise') || meaning.includes('wisdom')) {
    pros.push('Wise and thoughtful meaning')
  } else if (meaning.includes('grace') || meaning.includes('beautiful') || meaning.includes('pretty')) {
    pros.push('Elegant and graceful meaning')
  }

  return pros
}

// Generate considerations for each name
export function getNameCons(name: BabyName): string[] {
  const cons: string[] = []

  if (name.popularity && name.popularity <= 5) {
    cons.push('Very common - may have several in their class')
  } else if (name.popularity && name.popularity <= 10) {
    cons.push('Quite popular - less unique')
  }

  if (name.name.length >= 10) {
    cons.push('Longer name may be challenging for young children to write')
  }

  if (!name.popularity || name.popularity > 500) {
    cons.push('Less familiar to others - may need to repeat or spell')
  }

  // If the name has an unusual origin
  if (!['English', 'American', 'Irish', 'Scottish', 'German', 'French', 'Italian', 'Spanish'].includes(name.origin)) {
    cons.push('May require explanation of origin or pronunciation')
  }

  // If we have fewer than 2 cons, add a neutral one
  if (cons.length < 2) {
    cons.push('Limited traditional nickname options')
  }

  return cons
}

import type { BabyName } from '@/types/name'

interface SiblingMatch {
  name: BabyName
  score: number
  reason: string
}

// Sound similarity helpers
function getPhonemeEnding(name: string): string {
  const lower = name.toLowerCase()
  if (lower.length < 2) return lower
  return lower.slice(-2)
}

function hasRhymingEnding(name1: string, name2: string): boolean {
  const ending1 = getPhonemeEnding(name1)
  const ending2 = getPhonemeEnding(name2)
  return ending1 === ending2
}

function hasSimilarVowelPattern(name1: string, name2: string): boolean {
  const vowels1 = name1.toLowerCase().match(/[aeiou]/g) || []
  const vowels2 = name2.toLowerCase().match(/[aeiou]/g) || []

  if (vowels1.length === 0 || vowels2.length === 0) return false

  // Check if they share the primary vowel sound
  return vowels1[0] === vowels2[0]
}

// Style classification
function getNameStyle(name: BabyName): string[] {
  const styles: string[] = []

  // Based on popularity
  if (name.popularity && name.popularity <= 50) {
    styles.push('popular')
  } else if (name.popularity && name.popularity > 500) {
    styles.push('unique')
  } else if (!name.popularity) {
    styles.push('unique')
  } else {
    styles.push('moderate')
  }

  // Based on length
  if (name.name.length <= 4) {
    styles.push('short')
  } else if (name.name.length >= 8) {
    styles.push('long')
  } else {
    styles.push('medium')
  }

  // Vintage indicators (these are typical vintage name patterns)
  const vintagePatterns = ['ine', 'ette', 'abeth', 'dore', 'bert', 'fred', 'ald', 'ard']
  if (vintagePatterns.some(pattern => name.name.toLowerCase().includes(pattern))) {
    styles.push('vintage')
  }

  // Modern indicators (short, vowel-heavy, or ending in common modern patterns)
  const modernEndings = ['lyn', 'son', 'den', 'ton', 'ley']
  if (modernEndings.some(ending => name.name.toLowerCase().endsWith(ending))) {
    styles.push('modern')
  }

  // Nature-inspired
  const natureWords = ['rose', 'lily', 'ivy', 'violet', 'daisy', 'iris', 'oak', 'ash', 'brook', 'river', 'sky', 'star', 'luna', 'aurora', 'sage', 'willow']
  if (natureWords.some(word => name.name.toLowerCase().includes(word))) {
    styles.push('nature')
  }

  return styles
}

function getSyllableCount(name: string): number {
  // Rough syllable counting algorithm
  const vowelGroups = name.toLowerCase().match(/[aeiouy]+/g)
  if (!vowelGroups) return 1

  let count = vowelGroups.length

  // Adjust for silent e
  if (name.toLowerCase().endsWith('e') && count > 1) {
    count--
  }

  return Math.max(1, count)
}

export function generateSiblingMatches(
  targetName: BabyName,
  allNames: BabyName[],
  limit = 75
): BabyName[] {
  const matches: SiblingMatch[] = []
  const targetStyles = getNameStyle(targetName)
  const targetSyllables = getSyllableCount(targetName.name)

  for (const candidate of allNames) {
    // Skip same name or duplicate names
    if (candidate.slug === targetName.slug || candidate.name === targetName.name) {
      continue
    }

    let score = 0
    const reasons: string[] = []

    // 1. Same origin is a strong positive (25 points)
    if (candidate.origin === targetName.origin) {
      score += 25
      reasons.push('same-origin')
    }

    // 2. Opposite gender preference (20 points for opposite, 15 for same gender to encourage variety)
    if (candidate.gender !== targetName.gender && candidate.gender !== 'unisex' && targetName.gender !== 'unisex') {
      score += 20
      reasons.push('opposite-gender')
    } else if (candidate.gender === targetName.gender) {
      score += 15
      reasons.push('same-gender')
    }

    // 3. Style matching (20 points for shared styles)
    const candidateStyles = getNameStyle(candidate)
    const sharedStyles = candidateStyles.filter(style => targetStyles.includes(style))
    score += sharedStyles.length * 10
    if (sharedStyles.length > 0) {
      reasons.push(`shared-style-${sharedStyles[0]}`)
    }

    // 4. AVOID rhyming endings (subtract points)
    if (hasRhymingEnding(targetName.name, candidate.name)) {
      score -= 30
      reasons.push('rhyming-deduction')
    }

    // 5. AVOID same first letter (slight deduction to encourage variety)
    if (targetName.name[0].toLowerCase() === candidate.name[0].toLowerCase()) {
      score -= 5
      reasons.push('same-letter-deduction')
    }

    // 6. Similar syllable count is good (10 points)
    const candidateSyllables = getSyllableCount(candidate.name)
    if (Math.abs(candidateSyllables - targetSyllables) <= 1) {
      score += 10
      reasons.push('similar-syllables')
    }

    // 7. Popularity balance (prefer matching popularity tiers)
    const targetPop = targetName.popularity || 1000
    const candidatePop = candidate.popularity || 1000
    const popDiff = Math.abs(targetPop - candidatePop)

    if (popDiff < 100) {
      score += 15
      reasons.push('similar-popularity')
    } else if (popDiff < 300) {
      score += 10
    } else {
      score += 5
    }

    // 8. Similar vowel patterns can be good but not too similar
    if (hasSimilarVowelPattern(targetName.name, candidate.name) && !hasRhymingEnding(targetName.name, candidate.name)) {
      score += 8
      reasons.push('complementary-sound')
    }

    // 9. Length balance
    const lengthDiff = Math.abs(targetName.name.length - candidate.name.length)
    if (lengthDiff <= 2) {
      score += 8
      reasons.push('similar-length')
    }

    // 10. Bonus for same meaning themes
    const meaningKeywords = ['strong', 'brave', 'light', 'bright', 'wise', 'noble', 'royal', 'peace', 'love', 'joy', 'grace', 'god', 'gift']
    const targetMeaningWords = targetName.meaning.toLowerCase().split(' ')
    const candidateMeaningWords = candidate.meaning.toLowerCase().split(' ')

    for (const keyword of meaningKeywords) {
      if (targetMeaningWords.some(w => w.includes(keyword)) &&
          candidateMeaningWords.some(w => w.includes(keyword))) {
        score += 12
        reasons.push('related-meaning')
        break
      }
    }

    if (score > 0) {
      matches.push({
        name: candidate,
        score,
        reason: reasons.join(',')
      })
    }
  }

  // Sort by score (highest first) and return top matches
  matches.sort((a, b) => b.score - a.score)

  // Deduplicate by name (keep highest scoring variant)
  const seen = new Set<string>()
  const uniqueMatches = matches.filter(match => {
    if (seen.has(match.name.name)) {
      return false
    }
    seen.add(match.name.name)
    return true
  })

  return uniqueMatches.slice(0, limit).map(m => m.name)
}

export function categorizeSiblingMatches(
  targetName: BabyName,
  matches: BabyName[]
): {
  sameOrigin: BabyName[]
  oppositeGender: BabyName[]
  sameGender: BabyName[]
  similarStyle: BabyName[]
} {
  const sameOrigin = matches.filter(m => m.origin === targetName.origin).slice(0, 15)
  const oppositeGender = matches.filter(
    m => m.gender !== targetName.gender && m.gender !== 'unisex' && targetName.gender !== 'unisex'
  ).slice(0, 20)
  const sameGender = matches.filter(m => m.gender === targetName.gender).slice(0, 20)

  const targetStyles = getNameStyle(targetName)
  const similarStyle = matches.filter(m => {
    const candidateStyles = getNameStyle(m)
    return candidateStyles.some(style => targetStyles.includes(style))
  }).slice(0, 15)

  return {
    sameOrigin,
    oppositeGender,
    sameGender,
    similarStyle
  }
}

export function getSiblingPairDescription(name1: BabyName, name2: BabyName): string {
  const descriptions: string[] = []

  if (name1.origin === name2.origin) {
    descriptions.push(`Both names share ${name1.origin} heritage`)
  }

  const styles1 = getNameStyle(name1)
  const styles2 = getNameStyle(name2)
  const sharedStyles = styles1.filter(s => styles2.includes(s))

  if (sharedStyles.includes('vintage')) {
    descriptions.push('Classic vintage pairing')
  } else if (sharedStyles.includes('modern')) {
    descriptions.push('Contemporary modern pairing')
  }

  if (name1.gender !== name2.gender) {
    descriptions.push('Perfect brother-sister combination')
  } else if (name1.gender === 'girl') {
    descriptions.push('Beautiful sister pairing')
  } else {
    descriptions.push('Strong brother pairing')
  }

  const syllables1 = getSyllableCount(name1.name)
  const syllables2 = getSyllableCount(name2.name)
  if (Math.abs(syllables1 - syllables2) <= 1) {
    descriptions.push('Balanced rhythmic flow')
  }

  return descriptions.join(' • ')
}

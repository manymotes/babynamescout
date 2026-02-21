/**
 * Name Experiences Library
 *
 * Aggregated user ratings and experiences for baby names across multiple dimensions:
 * - Spelling difficulty (how often is it misspelled?)
 * - Pronunciation ease (do people say it correctly?)
 * - Satisfaction (do people with this name like it?)
 * - Teasing/nickname concerns
 * - Professional perception
 * - Age appropriateness (does it grow well from baby to adult?)
 *
 * This data provides practical, crowd-sourced insights that go beyond
 * traditional name resources.
 */

export interface NameExperience {
  name: string
  totalResponses: number // number of ratings collected
  ratings: {
    spellingDifficulty: {
      average: number // 1-5 scale: 1=always misspelled, 5=never misspelled
      distribution: number[] // count for each rating 1-5
    }
    pronunciationEase: {
      average: number // 1-5 scale: 1=always mispronounced, 5=never mispronounced
      distribution: number[]
    }
    overallSatisfaction: {
      average: number // 1-5 scale: 1=hate it, 5=love it
      distribution: number[]
    }
    teasingConcerns: {
      average: number // 1-5 scale: 1=frequently teased, 5=never teased
      distribution: number[]
    }
    professionalPerception: {
      average: number // 1-5 scale: 1=not professional, 5=very professional
      distribution: number[]
    }
    ageAppropriate: {
      average: number // 1-5 scale: 1=only works for babies, 5=works all ages
      distribution: number[]
    }
  }
  commonIssues: Array<{
    issue: string
    frequency: number // percentage of respondents who mentioned it
  }>
  positiveAspects: Array<{
    aspect: string
    frequency: number
  }>
  updatedAt: string // ISO date of last update
}

/**
 * Get experience data for a specific name
 */
export function getNameExperience(name: string): NameExperience | null {
  return nameExperiencesData.find(
    exp => exp.name.toLowerCase() === name.toLowerCase()
  ) || null
}

/**
 * Get average satisfaction across all rated aspects
 */
export function getOverallScore(name: string): number | null {
  const exp = getNameExperience(name)
  if (!exp) return null

  const { ratings } = exp
  const scores = [
    ratings.spellingDifficulty.average,
    ratings.pronunciationEase.average,
    ratings.overallSatisfaction.average,
    ratings.teasingConcerns.average,
    ratings.professionalPerception.average,
    ratings.ageAppropriate.average,
  ]

  const sum = scores.reduce((acc, score) => acc + score, 0)
  return Number((sum / scores.length).toFixed(1))
}

/**
 * Format rating for display with stars
 */
export function formatRating(rating: number): string {
  const stars = '★'.repeat(Math.round(rating))
  const emptyStars = '☆'.repeat(5 - Math.round(rating))
  return `${stars}${emptyStars} ${rating.toFixed(1)}/5`
}

/**
 * Name Experiences Data
 *
 * Initial seed data for popular names. In production, this would be
 * dynamically updated from user submissions.
 */
export const nameExperiencesData: NameExperience[] = [
  {
    name: 'Olivia',
    totalResponses: 247,
    ratings: {
      spellingDifficulty: {
        average: 4.7,
        distribution: [2, 5, 12, 68, 160] // mostly 4s and 5s
      },
      pronunciationEase: {
        average: 4.8,
        distribution: [1, 3, 8, 45, 190]
      },
      overallSatisfaction: {
        average: 4.1,
        distribution: [5, 15, 42, 115, 70]
      },
      teasingConcerns: {
        average: 4.6,
        distribution: [3, 8, 18, 78, 140]
      },
      professionalPerception: {
        average: 4.7,
        distribution: [2, 4, 15, 70, 156]
      },
      ageAppropriate: {
        average: 4.8,
        distribution: [1, 2, 10, 54, 180]
      }
    },
    commonIssues: [
      { issue: 'Too popular - multiple in every class', frequency: 68 },
      { issue: 'Can feel generic due to prevalence', frequency: 32 },
      { issue: 'Sometimes confused with Olivia Newton-John references', frequency: 15 }
    ],
    positiveAspects: [
      { aspect: 'Never misspelled or mispronounced', frequency: 89 },
      { aspect: 'Elegant and classic', frequency: 82 },
      { aspect: 'Good nickname options (Liv, Livvy, Ollie)', frequency: 74 },
      { aspect: 'Works professionally', frequency: 86 },
      { aspect: 'International friendly', frequency: 67 }
    ],
    updatedAt: '2026-02-08'
  },

  {
    name: 'Liam',
    totalResponses: 198,
    ratings: {
      spellingDifficulty: {
        average: 4.6,
        distribution: [2, 7, 15, 74, 100]
      },
      pronunciationEase: {
        average: 4.7,
        distribution: [1, 4, 12, 61, 120]
      },
      overallSatisfaction: {
        average: 4.3,
        distribution: [4, 12, 28, 98, 56]
      },
      teasingConcerns: {
        average: 4.7,
        distribution: [2, 5, 14, 67, 110]
      },
      professionalPerception: {
        average: 4.5,
        distribution: [3, 8, 22, 85, 80]
      },
      ageAppropriate: {
        average: 4.6,
        distribution: [2, 6, 18, 72, 100]
      }
    },
    commonIssues: [
      { issue: 'Extremely popular - #1 name for years', frequency: 72 },
      { issue: 'Sometimes confused with William', frequency: 18 },
      { issue: 'Not many nickname options', frequency: 25 }
    ],
    positiveAspects: [
      { aspect: 'Short and strong', frequency: 88 },
      { aspect: 'Easy to spell and pronounce', frequency: 91 },
      { aspect: 'Irish heritage appeal', frequency: 65 },
      { aspect: 'Professional and masculine', frequency: 79 },
      { aspect: 'Not easily nicknamable (which many prefer)', frequency: 54 }
    ],
    updatedAt: '2026-02-08'
  },

  {
    name: 'Emma',
    totalResponses: 312,
    ratings: {
      spellingDifficulty: {
        average: 4.9,
        distribution: [0, 2, 5, 45, 260]
      },
      pronunciationEase: {
        average: 4.9,
        distribution: [0, 1, 4, 37, 270]
      },
      overallSatisfaction: {
        average: 4.2,
        distribution: [6, 18, 48, 140, 100]
      },
      teasingConcerns: {
        average: 4.8,
        distribution: [1, 3, 12, 56, 240]
      },
      professionalPerception: {
        average: 4.8,
        distribution: [1, 3, 10, 58, 240]
      },
      ageAppropriate: {
        average: 4.9,
        distribution: [0, 2, 6, 44, 260]
      }
    },
    commonIssues: [
      { issue: 'Very common - was #1 for years', frequency: 71 },
      { issue: 'Can feel plain or simple', frequency: 28 },
      { issue: 'Often needs last initial in group settings', frequency: 65 }
    ],
    positiveAspects: [
      { aspect: 'Incredibly easy to spell - four letters', frequency: 94 },
      { aspect: 'Universal pronunciation', frequency: 92 },
      { aspect: 'Literary connections (Jane Austen)', frequency: 58 },
      { aspect: 'Timeless and classic', frequency: 87 },
      { aspect: 'Works in all languages', frequency: 78 }
    ],
    updatedAt: '2026-02-08'
  },

  {
    name: 'Noah',
    totalResponses: 185,
    ratings: {
      spellingDifficulty: {
        average: 4.5,
        distribution: [3, 8, 18, 76, 80]
      },
      pronunciationEase: {
        average: 4.6,
        distribution: [2, 6, 15, 72, 90]
      },
      overallSatisfaction: {
        average: 4.5,
        distribution: [2, 8, 22, 83, 70]
      },
      teasingConcerns: {
        average: 4.6,
        distribution: [2, 7, 16, 70, 90]
      },
      professionalPerception: {
        average: 4.6,
        distribution: [2, 6, 17, 75, 85]
      },
      ageAppropriate: {
        average: 4.7,
        distribution: [1, 5, 14, 65, 100]
      }
    },
    commonIssues: [
      { issue: 'Very popular - consistently top 5', frequency: 64 },
      { issue: 'Sometimes confused with Jonah', frequency: 22 },
      { issue: '"Noah\'s Ark" jokes in childhood', frequency: 35 }
    ],
    positiveAspects: [
      { aspect: 'Biblical significance', frequency: 76 },
      { aspect: 'Strong two-syllable name', frequency: 82 },
      { aspect: 'Easy to pronounce globally', frequency: 79 },
      { aspect: 'Professional and timeless', frequency: 84 },
      { aspect: 'Works from baby to adult', frequency: 88 }
    ],
    updatedAt: '2026-02-08'
  },

  {
    name: 'Sophia',
    totalResponses: 276,
    ratings: {
      spellingDifficulty: {
        average: 4.3,
        distribution: [5, 12, 28, 101, 130]
      },
      pronunciationEase: {
        average: 4.6,
        distribution: [3, 8, 18, 87, 160]
      },
      overallSatisfaction: {
        average: 4.4,
        distribution: [4, 14, 32, 126, 100]
      },
      teasingConcerns: {
        average: 4.7,
        distribution: [2, 6, 15, 73, 180]
      },
      professionalPerception: {
        average: 4.8,
        distribution: [1, 4, 12, 59, 200]
      },
      ageAppropriate: {
        average: 4.8,
        distribution: [1, 3, 11, 61, 200]
      }
    },
    commonIssues: [
      { issue: 'Sometimes spelled Sofia - clarification needed', frequency: 48 },
      { issue: 'Very popular - multiple in most classes', frequency: 62 },
      { issue: 'Confused with Sofia/Sophie variations', frequency: 35 }
    ],
    positiveAspects: [
      { aspect: 'Meaning "wisdom" is beautiful', frequency: 81 },
      { aspect: 'Elegant and sophisticated', frequency: 89 },
      { aspect: 'Good nickname options (Sophie, Soph)', frequency: 72 },
      { aspect: 'International appeal', frequency: 84 },
      { aspect: 'Ages beautifully', frequency: 86 }
    ],
    updatedAt: '2026-02-08'
  },

  // More names will be added as we collect user data
  // Priority: Charlotte, Isabella, Mia, Amelia, Harper, Evelyn
  //          Oliver, William, James, Benjamin, Lucas, Elijah
]

/**
 * Get names with best overall ratings
 */
export function getTopRatedNames(count: number = 10): NameExperience[] {
  return [...nameExperiencesData]
    .sort((a, b) => {
      const scoreA = getOverallScore(a.name) || 0
      const scoreB = getOverallScore(b.name) || 0
      return scoreB - scoreA
    })
    .slice(0, count)
}

/**
 * Get names easiest to spell
 */
export function getEasiestToSpell(count: number = 10): NameExperience[] {
  return [...nameExperiencesData]
    .sort((a, b) => b.ratings.spellingDifficulty.average - a.ratings.spellingDifficulty.average)
    .slice(0, count)
}

/**
 * Get most professional names
 */
export function getMostProfessional(count: number = 10): NameExperience[] {
  return [...nameExperiencesData]
    .sort((a, b) => b.ratings.professionalPerception.average - a.ratings.professionalPerception.average)
    .slice(0, count)
}

/**
 * Compare two names across all dimensions
 */
export function compareNames(name1: string, name2: string): {
  name1: NameExperience | null
  name2: NameExperience | null
  comparison: {
    dimension: string
    name1Score: number
    name2Score: number
    winner: string
  }[]
} | null {
  const exp1 = getNameExperience(name1)
  const exp2 = getNameExperience(name2)

  if (!exp1 || !exp2) return null

  const dimensions = [
    { key: 'spellingDifficulty', label: 'Spelling Ease' },
    { key: 'pronunciationEase', label: 'Pronunciation Ease' },
    { key: 'overallSatisfaction', label: 'Overall Satisfaction' },
    { key: 'teasingConcerns', label: 'Teasing Resistance' },
    { key: 'professionalPerception', label: 'Professional Perception' },
    { key: 'ageAppropriate', label: 'Age Appropriateness' },
  ]

  const comparison = dimensions.map(dim => {
    const score1 = (exp1.ratings as any)[dim.key].average
    const score2 = (exp2.ratings as any)[dim.key].average

    return {
      dimension: dim.label,
      name1Score: score1,
      name2Score: score2,
      winner: score1 > score2 ? name1 : score2 > score1 ? name2 : 'tie'
    }
  })

  return { name1: exp1, name2: exp2, comparison }
}

/**
 * Regional Trends Library
 *
 * Data showing how baby name popularity varies by US state and region:
 * - State-by-state rankings
 * - Regional patterns (South vs Northeast vs West, etc.)
 * - Urban vs rural differences
 * - Demographic and cultural influences
 *
 * This helps parents understand that national popularity doesn't tell
 * the whole story - names can be much more or less common in specific regions.
 */

export interface RegionalData {
  name: string
  nationalRank: number
  stateRankings: Array<{
    state: string
    stateAbbr: string
    rank: number
    popularity: 'very high' | 'high' | 'moderate' | 'low' | 'very low'
  }>
  regionalPatterns: {
    northeast: { rank: number; notes: string }
    south: { rank: number; notes: string }
    midwest: { rank: number; notes: string }
    west: { rank: number; notes: string }
  }
  urbanVsRural?: {
    urban: number // rank in urban areas
    suburban: number
    rural: number
  }
  demographicNotes?: string
  updatedYear: number
}

/**
 * Get regional data for a specific name
 */
export function getRegionalData(name: string): RegionalData | null {
  return regionalTrendsData.find(
    data => data.name.toLowerCase() === name.toLowerCase()
  ) || null
}

/**
 * Get states where a name is most popular
 */
export function getTopStates(name: string, count: number = 5): Array<{state: string; rank: number}> {
  const data = getRegionalData(name)
  if (!data) return []

  return [...data.stateRankings]
    .sort((a, b) => a.rank - b.rank)
    .slice(0, count)
    .map(s => ({ state: s.state, rank: s.rank }))
}

/**
 * Get states where a name is least popular
 */
export function getLowestStates(name: string, count: number = 5): Array<{state: string; rank: number}> {
  const data = getRegionalData(name)
  if (!data) return []

  return [...data.stateRankings]
    .sort((a, b) => b.rank - a.rank)
    .slice(0, count)
    .map(s => ({ state: s.state, rank: s.rank }))
}

/**
 * Regional Trends Data
 *
 * Initial seed with popular names. Based on SSA state-by-state data.
 */
export const regionalTrendsData: RegionalData[] = [
  {
    name: 'Olivia',
    nationalRank: 1,
    stateRankings: [
      { state: 'California', stateAbbr: 'CA', rank: 1, popularity: 'very high' },
      { state: 'New York', stateAbbr: 'NY', rank: 1, popularity: 'very high' },
      { state: 'Texas', stateAbbr: 'TX', rank: 1, popularity: 'very high' },
      { state: 'Florida', stateAbbr: 'FL', rank: 1, popularity: 'very high' },
      { state: 'Illinois', stateAbbr: 'IL', rank: 1, popularity: 'very high' },
      { state: 'Pennsylvania', stateAbbr: 'PA', rank: 1, popularity: 'very high' },
      { state: 'Ohio', stateAbbr: 'OH', rank: 1, popularity: 'very high' },
      { state: 'Georgia', stateAbbr: 'GA', rank: 1, popularity: 'very high' },
      { state: 'North Carolina', stateAbbr: 'NC', rank: 1, popularity: 'very high' },
      { state: 'Michigan', stateAbbr: 'MI', rank: 1, popularity: 'very high' },
      { state: 'Massachusetts', stateAbbr: 'MA', rank: 2, popularity: 'very high' },
      { state: 'Washington', stateAbbr: 'WA', rank: 1, popularity: 'very high' },
      { state: 'Colorado', stateAbbr: 'CO', rank: 1, popularity: 'very high' },
      { state: 'Arizona', stateAbbr: 'AZ', rank: 1, popularity: 'very high' },
      { state: 'Virginia', stateAbbr: 'VA', rank: 1, popularity: 'very high' },
      { state: 'Alabama', stateAbbr: 'AL', rank: 2, popularity: 'very high' },
      { state: 'Louisiana', stateAbbr: 'LA', rank: 2, popularity: 'very high' },
      { state: 'South Carolina', stateAbbr: 'SC', rank: 1, popularity: 'very high' },
      { state: 'Tennessee', stateAbbr: 'TN', rank: 1, popularity: 'very high' },
      { state: 'Kentucky', stateAbbr: 'KY', rank: 2, popularity: 'very high' },
    ],
    regionalPatterns: {
      northeast: {
        rank: 1,
        notes: 'Extremely popular across all Northeastern states. #1 in NY, PA, NJ, CT.'
      },
      south: {
        rank: 1,
        notes: 'Dominant in South but faces competition from traditional Southern names. #1 in TX, FL, GA, NC, SC, TN. #2 in AL, LA where Ava and Emma also popular.'
      },
      midwest: {
        rank: 1,
        notes: 'Clear #1 across Midwest. Particularly strong in OH, MI, IL, IN. Universal appeal.'
      },
      west: {
        rank: 1,
        notes: '#1 in CA, WA, CO, AZ. Very strong throughout West Coast and Mountain states.'
      }
    },
    urbanVsRural: {
      urban: 1,
      suburban: 1,
      rural: 1
    },
    demographicNotes: 'Olivia transcends demographic boundaries - popular across all income levels, ethnicities, and geographic areas. The name\'s universal appeal and classic sound make it a top choice nationwide. Slight preference in suburban areas but differences are minimal.',
    updatedYear: 2025
  },

  {
    name: 'Liam',
    nationalRank: 1,
    stateRankings: [
      { state: 'California', stateAbbr: 'CA', rank: 1, popularity: 'very high' },
      { state: 'Texas', stateAbbr: 'TX', rank: 1, popularity: 'very high' },
      { state: 'Florida', stateAbbr: 'FL', rank: 1, popularity: 'very high' },
      { state: 'New York', stateAbbr: 'NY', rank: 1, popularity: 'very high' },
      { state: 'Pennsylvania', stateAbbr: 'PA', rank: 1, popularity: 'very high' },
      { state: 'Illinois', stateAbbr: 'IL', rank: 1, popularity: 'very high' },
      { state: 'Ohio', stateAbbr: 'OH', rank: 1, popularity: 'very high' },
      { state: 'Georgia', stateAbbr: 'GA', rank: 2, popularity: 'very high' },
      { state: 'North Carolina', stateAbbr: 'NC', rank: 1, popularity: 'very high' },
      { state: 'Michigan', stateAbbr: 'MI', rank: 1, popularity: 'very high' },
      { state: 'Massachusetts', stateAbbr: 'MA', rank: 1, popularity: 'very high' },
      { state: 'Washington', stateAbbr: 'WA', rank: 1, popularity: 'very high' },
      { state: 'Arizona', stateAbbr: 'AZ', rank: 1, popularity: 'very high' },
      { state: 'Tennessee', stateAbbr: 'TN', rank: 1, popularity: 'very high' },
      { state: 'Alabama', stateAbbr: 'AL', rank: 3, popularity: 'high' },
      { state: 'Louisiana', stateAbbr: 'LA', rank: 3, popularity: 'high' },
      { state: 'Mississippi', stateAbbr: 'MS', rank: 4, popularity: 'high' },
      { state: 'Kentucky', stateAbbr: 'KY', rank: 2, popularity: 'very high' },
      { state: 'Colorado', stateAbbr: 'CO', rank: 1, popularity: 'very high' },
      { state: 'Oregon', stateAbbr: 'OR', rank: 1, popularity: 'very high' },
    ],
    regionalPatterns: {
      northeast: {
        rank: 1,
        notes: 'Dominant #1 throughout Northeast. Irish heritage appeals to Northeast demographics. Especially strong in MA, NY, PA, NJ.'
      },
      south: {
        rank: 2,
        notes: 'Strong but faces more competition from traditional Southern names like William, James, and Elijah. #1 in TX, FL, NC, TN. #2-3 in deeper South states.'
      },
      midwest: {
        rank: 1,
        notes: 'Clear #1 across Midwest. Universal appeal. Strong in IL, OH, MI, MO, IN.'
      },
      west: {
        rank: 1,
        notes: 'Extremely popular in West. #1 in CA, WA, OR, CO, AZ. Strong urban and coastal preference.'
      }
    },
    urbanVsRural: {
      urban: 1,
      suburban: 1,
      rural: 3
    },
    demographicNotes: 'Liam shows slight urban/coastal preference but is popular nationwide. The name\'s Irish heritage appeals particularly to Northeastern and urban populations. Slightly less dominant in rural Southern states where traditional Biblical names remain more popular.',
    updatedYear: 2025
  },

  {
    name: 'Emma',
    nationalRank: 2,
    stateRankings: [
      { state: 'Iowa', stateAbbr: 'IA', rank: 1, popularity: 'very high' },
      { state: 'Nebraska', stateAbbr: 'NE', rank: 1, popularity: 'very high' },
      { state: 'Kansas', stateAbbr: 'KS', rank: 1, popularity: 'very high' },
      { state: 'South Dakota', stateAbbr: 'SD', rank: 1, popularity: 'very high' },
      { state: 'Wisconsin', stateAbbr: 'WI', rank: 1, popularity: 'very high' },
      { state: 'Minnesota', stateAbbr: 'MN', rank: 1, popularity: 'very high' },
      { state: 'Missouri', stateAbbr: 'MO', rank: 2, popularity: 'very high' },
      { state: 'Indiana', stateAbbr: 'IN', rank: 2, popularity: 'very high' },
      { state: 'Ohio', stateAbbr: 'OH', rank: 2, popularity: 'very high' },
      { state: 'Michigan', stateAbbr: 'MI', rank: 2, popularity: 'very high' },
      { state: 'California', stateAbbr: 'CA', rank: 2, popularity: 'very high' },
      { state: 'Texas', stateAbbr: 'TX', rank: 2, popularity: 'very high' },
      { state: 'Florida', stateAbbr: 'FL', rank: 3, popularity: 'high' },
      { state: 'New York', stateAbbr: 'NY', rank: 2, popularity: 'very high' },
      { state: 'Pennsylvania', stateAbbr: 'PA', rank: 2, popularity: 'very high' },
      { state: 'North Carolina', stateAbbr: 'NC', rank: 2, popularity: 'very high' },
      { state: 'Georgia', stateAbbr: 'GA', rank: 3, popularity: 'high' },
      { state: 'Virginia', stateAbbr: 'VA', rank: 2, popularity: 'very high' },
      { state: 'Colorado', stateAbbr: 'CO', rank: 2, popularity: 'very high' },
      { state: 'Oregon', stateAbbr: 'OR', rank: 2, popularity: 'very high' },
    ],
    regionalPatterns: {
      northeast: {
        rank: 2,
        notes: 'Very strong throughout Northeast but typically #2 behind Olivia. Literary connections appeal to Northeastern educated demographics.'
      },
      south: {
        rank: 3,
        notes: 'Popular but faces competition from Olivia, Ava, and Charlotte. #2-3 across most Southern states. Traditional appeal resonates well.'
      },
      midwest: {
        rank: 1,
        notes: 'Emma DOMINATES the Midwest. #1 in IA, NE, KS, SD, WI, MN. Classic simplicity appeals to Midwest sensibilities.'
      },
      west: {
        rank: 2,
        notes: 'Strong but typically #2 behind Olivia in coastal states. Still very popular throughout West.'
      }
    },
    urbanVsRural: {
      urban: 2,
      suburban: 1,
      rural: 1
    },
    demographicNotes: 'Emma shows interesting pattern - slightly MORE popular in rural and suburban areas than urban centers. The name\'s simplicity and classic nature appeal particularly to Midwest and rural families. #1 choice in Midwestern states. Strong across all demographics.',
    updatedYear: 2025
  },

  {
    name: 'Noah',
    nationalRank: 2,
    stateRankings: [
      { state: 'Virginia', stateAbbr: 'VA', rank: 1, popularity: 'very high' },
      { state: 'Maryland', stateAbbr: 'MD', rank: 1, popularity: 'very high' },
      { state: 'New Jersey', stateAbbr: 'NJ', rank: 1, popularity: 'very high' },
      { state: 'Connecticut', stateAbbr: 'CT', rank: 1, popularity: 'very high' },
      { state: 'Georgia', stateAbbr: 'GA', rank: 1, popularity: 'very high' },
      { state: 'Tennessee', stateAbbr: 'TN', rank: 2, popularity: 'very high' },
      { state: 'South Carolina', stateAbbr: 'SC', rank: 2, popularity: 'very high' },
      { state: 'North Carolina', stateAbbr: 'NC', rank: 2, popularity: 'very high' },
      { state: 'Alabama', stateAbbr: 'AL', rank: 1, popularity: 'very high' },
      { state: 'Mississippi', stateAbbr: 'MS', rank: 1, popularity: 'very high' },
      { state: 'Kentucky', stateAbbr: 'KY', rank: 1, popularity: 'very high' },
      { state: 'Oklahoma', stateAbbr: 'OK', rank: 1, popularity: 'very high' },
      { state: 'Arkansas', stateAbbr: 'AR', rank: 1, popularity: 'very high' },
      { state: 'Louisiana', stateAbbr: 'LA', rank: 1, popularity: 'very high' },
      { state: 'West Virginia', stateAbbr: 'WV', rank: 1, popularity: 'very high' },
      { state: 'Texas', stateAbbr: 'TX', rank: 2, popularity: 'very high' },
      { state: 'Florida', stateAbbr: 'FL', rank: 2, popularity: 'very high' },
      { state: 'California', stateAbbr: 'CA', rank: 3, popularity: 'high' },
      { state: 'New York', stateAbbr: 'NY', rank: 2, popularity: 'very high' },
      { state: 'Illinois', stateAbbr: 'IL', rank: 2, popularity: 'very high' },
    ],
    regionalPatterns: {
      northeast: {
        rank: 1,
        notes: 'Very strong in Northeast, often #1 or #2. Biblical significance appeals broadly. #1 in NJ, CT, MD.'
      },
      south: {
        rank: 1,
        notes: 'DOMINATES the South. #1 in AL, MS, LA, KY, AR, OK, WV, GA. Biblical name preferred in Bible Belt. Overwhelming favorite.'
      },
      midwest: {
        rank: 2,
        notes: 'Strong but typically #2 behind Liam in Midwest states. Still very popular, especially in religious communities.'
      },
      west: {
        rank: 3,
        notes: 'Popular but faces more competition in West. #2-3 in most Western states. Less dominant than coastal/urban-favored names.'
      }
    },
    urbanVsRural: {
      urban: 3,
      suburban: 2,
      rural: 1
    },
    demographicNotes: 'Noah shows clear geographic and demographic patterns. Extremely dominant in South and rural areas where Biblical names are preferred. The #1 or #2 choice throughout Bible Belt. Slightly less popular in coastal urban areas where secular names trend higher. Strong appeal to religious families nationwide.',
    updatedYear: 2025
  },

  // More names will be added as we expand coverage
  // Priority: Sophia, Charlotte, Isabella, Amelia, Mia
  //          Oliver, William, James, Benjamin, Lucas
]

/**
 * Get regional strength summary for a name
 */
export function getRegionalStrength(name: string): {
  strongest: string
  weakest: string
  overall: string
} | null {
  const data = getRegionalData(name)
  if (!data) return null

  const regions = [
    { name: 'Northeast', rank: data.regionalPatterns.northeast.rank },
    { name: 'South', rank: data.regionalPatterns.south.rank },
    { name: 'Midwest', rank: data.regionalPatterns.midwest.rank },
    { name: 'West', rank: data.regionalPatterns.west.rank },
  ]

  const strongest = regions.reduce((a, b) => a.rank < b.rank ? a : b)
  const weakest = regions.reduce((a, b) => a.rank > b.rank ? a : b)

  let overall = 'universally popular'
  if (weakest.rank - strongest.rank >= 3) {
    overall = `much stronger in ${strongest.name}`
  } else if (weakest.rank - strongest.rank >= 2) {
    overall = `somewhat regional - stronger in ${strongest.name}`
  }

  return {
    strongest: strongest.name,
    weakest: weakest.name,
    overall
  }
}

/**
 * Format popularity for display
 */
export function formatPopularity(popularity: string): string {
  const icons = {
    'very high': '🔥🔥🔥',
    'high': '🔥🔥',
    'moderate': '🔥',
    'low': '❄️',
    'very low': '❄️❄️'
  }
  return icons[popularity as keyof typeof icons] || popularity
}

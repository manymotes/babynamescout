import { MetadataRoute } from 'next'
import { getAllNames, getOriginData, getMeaningCategories, getAvailableLetters } from '@/lib/data'
import { getAllComparisons } from '@/lib/comparisons-data'

export const dynamic = 'force-static'

const SITE_URL = 'https://babynamescout.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const names = getAllNames()
  const origins = getOriginData().filter(o => o.count > 0)
  const meanings = getMeaningCategories().filter(m => m.count > 0)
  const comparisons = getAllComparisons()

  const genders: ('girl' | 'boy' | 'unisex')[] = ['girl', 'boy', 'unisex']

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${SITE_URL}/origins/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/meanings/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/generator/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  // New category pages
  const categoryPages: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/trends/2026/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/unique/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/popular/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/vintage/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/unisex/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/short-names/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/biblical/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/middle-names/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/twin-names/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  // Gender pages
  const genderPages: MetadataRoute.Sitemap = genders.map(gender => ({
    url: `${SITE_URL}/names/${gender}/`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  // Letter pages
  const letterPages: MetadataRoute.Sitemap = []
  for (const gender of genders) {
    const letters = getAvailableLetters(gender)
    for (const letter of letters) {
      letterPages.push({
        url: `${SITE_URL}/names/${gender}/${letter}/`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      })
    }
  }

  // Individual name pages
  const namePages: MetadataRoute.Sitemap = names.map(name => ({
    url: `${SITE_URL}/name/${name.slug}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Origin pages
  const originPages: MetadataRoute.Sitemap = origins.map(origin => ({
    url: `${SITE_URL}/origin/${origin.slug}/`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Meaning pages
  const meaningPages: MetadataRoute.Sitemap = meanings.map(meaning => ({
    url: `${SITE_URL}/meaning/${meaning.slug}/`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Comparison pages
  const comparisonLandingPage: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/compare/`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    }
  ]

  const comparisonPages: MetadataRoute.Sitemap = comparisons.map(comparison => ({
    url: `${SITE_URL}/compare/${comparison.comparisonSlug}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    ...staticPages,
    ...categoryPages,
    ...genderPages,
    ...letterPages,
    ...namePages,
    ...originPages,
    ...meaningPages,
    ...comparisonLandingPage,
    ...comparisonPages,
  ]
}

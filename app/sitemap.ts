import { MetadataRoute } from 'next'
import { getAllNames, getOriginData, getMeaningCategories, getAvailableLetters } from '@/lib/data'

export const dynamic = 'force-static'

const SITE_URL = 'https://babynamescout.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const names = getAllNames()
  const origins = getOriginData().filter(o => o.count > 0)
  const meanings = getMeaningCategories().filter(m => m.count > 0)

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

  return [
    ...staticPages,
    ...genderPages,
    ...letterPages,
    ...namePages,
    ...originPages,
    ...meaningPages,
  ]
}

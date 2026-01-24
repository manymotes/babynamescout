export interface BabyName {
  name: string
  slug: string
  gender: 'girl' | 'boy' | 'unisex'
  origin: string
  meaning: string
  pronunciation?: string
  popularity?: number
  meanings?: string[]
  variants?: string[]
  famousNamesakes?: string[]
  relatedNames?: string[]
}

export interface Origin {
  name: string
  slug: string
  description: string
  count: number
}

export interface MeaningCategory {
  name: string
  slug: string
  description: string
  keywords: string[]
  count: number
}

import { Metadata } from 'next'
import { SITE_URL } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Baby Name Generator - Get Personalized Name Suggestions',
  description: 'Use our free baby name generator to discover the perfect name. Filter by gender, starting letter, and origin to get personalized suggestions for your baby.',
  alternates: {
    canonical: `${SITE_URL}/generator/`,
  },
  openGraph: {
    title: 'Baby Name Generator - Find the Perfect Name',
    description: 'Use our free baby name generator to discover the perfect name. Filter by gender, starting letter, and origin to get personalized suggestions for your baby.',
  },
}

export default function GeneratorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

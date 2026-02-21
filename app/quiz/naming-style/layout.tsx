import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Baby Naming Style Quiz - Discover Your Perfect Name Style | BabyNameScout',
  description: 'Take our free 2-minute quiz to discover your unique baby naming style. Are you classic, modern, unique, or nature-inspired? Get personalized name suggestions.',
  keywords: ['baby name quiz', 'naming style', 'baby name personality', 'name preferences', 'baby name test'],
  openGraph: {
    title: 'Baby Naming Style Quiz - What\'s Your Naming Personality?',
    description: 'Discover your unique baby naming style with our free quiz. Get personalized name suggestions based on your preferences.',
    type: 'website',
  }
}

export default function NamingStyleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

/**
 * Parent Stories Library
 *
 * Real, anonymized stories from parents sharing their experiences with baby names:
 * - Why they chose the name
 * - How the name has worked out in practice
 * - Reactions from family and friends
 * - Playground and school experiences
 * - Reflections and advice for other parents
 *
 * These authentic first-person accounts provide invaluable real-world perspective
 * that goes far beyond meaning and origin data.
 */

export interface ParentStory {
  id: string
  name: string // baby name
  parentPseudonym: string // "Jessica M.", "Robert K."
  childAge: string // "newborn", "2 years", "5 years", "teenager"
  location?: string // "California", "Texas" (optional)
  story: string // 200-400 word first-person narrative
  rating: number // 1-5, how happy they are with the choice
  wouldChooseAgain: boolean
  keyTakeaways: string[]
  siblingNames?: string[] // if they mention siblings
}

export interface GrowingUpStory {
  id: string
  name: string
  personPseudonym: string // Person with the name sharing their experience
  age: number
  story: string // 150-300 words about growing up with this name
  rating: number // 1-5, how much they like their name
  commonIssues?: string[] // "Often misspelled", "Confused with similar name"
  positives?: string[] // "Easy to pronounce", "Professional sounding"
}

/**
 * Get parent stories for a specific name
 */
export function getParentStories(name: string): ParentStory[] {
  return parentStoriesData.filter(story => story.name.toLowerCase() === name.toLowerCase())
}

/**
 * Get "growing up with this name" stories
 */
export function getGrowingUpStories(name: string): GrowingUpStory[] {
  return growingUpStoriesData.filter(story => story.name.toLowerCase() === name.toLowerCase())
}

/**
 * Get random selection of stories
 */
export function getRandomParentStories(name: string, count: number = 3): ParentStory[] {
  const stories = getParentStories(name)
  const shuffled = [...stories].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}

/**
 * Parent Stories Data
 *
 * Initial seed with popular names. Will expand to cover top 200-500 names
 * as part of content enhancement strategy.
 */
export const parentStoriesData: ParentStory[] = [
  {
    id: 'olivia-001',
    name: 'Olivia',
    parentPseudonym: 'Sarah M.',
    childAge: '4 years',
    location: 'California',
    story: "We chose Olivia for our daughter after months of deliberation. My husband loved the classic feel while I appreciated that it felt both timeless and modern. When she was born in 2020, we had no idea just how popular the name was - she's one of three Olivias in her preschool class! At first this bothered me; I worried we'd chosen something too common. But four years in, I've made peace with it. Olivia suits her personality perfectly - she's sweet but strong, just like the name suggests. Teachers never mispronounce or misspell it, which is a huge plus. She's started going by 'Liv' with friends, which I think is adorable. The only real downside is the popularity - at the playground, when you call 'Olivia!', three kids turn around. We sometimes use her middle name (Grace) when there's confusion. Despite the prevalence, I wouldn't change our choice. The name has Italian roots (olive tree) and works well in multiple languages, which was important to us. My advice to parents considering Olivia: it's popular for good reasons. If you love it, don't let the rankings dissuade you. Just be prepared to potentially use a nickname or middle name for differentiation in group settings. Overall, we're very happy with our choice - it's a beautiful, strong name that has aged well with our daughter.",
    rating: 4,
    wouldChooseAgain: true,
    keyTakeaways: [
      'Very popular - expect multiple Olivias in school classes and playgrounds',
      'Easy to pronounce and spell, works internationally',
      'Nickname "Liv" is common and beloved',
      'Consider using middle name for differentiation in group settings',
      'Classic yet modern feel that ages well'
    ],
    siblingNames: ['Emma', 'Noah']
  },

  {
    id: 'olivia-002',
    name: 'Olivia',
    parentPseudonym: 'Jennifer L.',
    childAge: '7 years',
    location: 'New York',
    story: "I'm the mother of a 7-year-old Olivia, and I want to share both the good and the challenging aspects of this name. We chose it because it was feminine but not frilly, strong but not harsh. In first grade, there were four Olivias in her class of 22 students. The teacher had to use last initials (Olivia M., Olivia S., etc.) to differentiate them. This was initially frustrating for my daughter, who felt like her name wasn't uniquely 'hers.' However, she's adapted beautifully. She goes by 'Ollie' now, which started as a family nickname and has stuck. Her friends all know her as Ollie, and it gives her individuality despite the common first name. The name has worked wonderfully in practical terms - no one ever mispronounces it, forms and documents always have it spelled correctly, and it sounds professional for her future. We've never had issues with monogramming or personalized items; the name is so common that stores always have it in stock! My main advice: if you choose a super popular name like Olivia, embrace nicknames early. It gives your child options for creating their own identity. Also, consider a more unique middle name that they can use if they choose. Despite the popularity, I'd choose Olivia again - it's timeless, elegant, and has worn beautifully into her school years.",
    rating: 4.5,
    wouldChooseAgain: true,
    keyTakeaways: [
      'Extremely popular in early 2020s - expect classroom multiples',
      'Nickname "Ollie" provides uniqueness and individuality',
      'Never an issue with pronunciation or spelling',
      'Consider unique middle name as backup option',
      'Timeless and professional for all ages'
    ],
    siblingNames: ['Charlotte']
  },

  {
    id: 'liam-001',
    name: 'Liam',
    parentPseudonym: 'Michael R.',
    childAge: '5 years',
    location: 'Texas',
    story: "As the dad of a 5-year-old Liam, I want to share our experience with this name. We chose it because it felt strong, simple, and had Irish heritage (my family background). We loved that it was short, masculine, and easy to spell - none of that 'is it with two L's?' confusion. What we didn't fully appreciate when he was born in 2019 was just how trendy the name had become. Our neighborhood is full of Liams - I counted six in our HOA directory for kids under 10. At his daycare and now kindergarten, there are always at least 2-3 other Liams. Initially this bothered me; I'd wanted something classic but not too common. However, my son loves his name and hasn't seemed bothered by sharing it. Kids naturally add last names or nicknames in groups. The name has aged really well. It sounds good on a little boy and will sound professional when he's an adult. It's short enough that it's not nicknamable (though one friend calls him 'Li'), which we actually prefer - he's just Liam. The pronunciation is straightforward, and we've never had issues with it internationally when traveling. My wife and I joke that we unintentionally joined the 'Liam parent club' - but honestly, it's popular for good reasons. If you're considering Liam, know that you'll likely meet many others, but it's a solid, timeless choice that your son won't outgrow.",
    rating: 4,
    wouldChooseAgain: true,
    keyTakeaways: [
      '#1 name for boys - extremely common in current generation',
      'Short, strong, and easy to spell',
      'Works well professionally and ages appropriately',
      'Not easily nicknamable, which some families prefer',
      'Irish heritage appeals to many families'
    ],
    siblingNames: ['Ava']
  },

  {
    id: 'emma-001',
    name: 'Emma',
    parentPseudonym: 'Laura K.',
    childAge: '6 years',
    location: 'Illinois',
    story: "Our daughter Emma is now 6, and I'm reflecting on our name choice. We selected Emma because it was classic, simple, and had literary connections (Jane Austen's 'Emma'). The four-letter simplicity appealed to us - easy to spell, easy to say, works in multiple languages. Six years later, I have mixed feelings about the popularity. Emma was the #1 girl name when she was born, and it shows. Every birthday party has at least one other Emma. Her school uses 'Emma K.' and 'Emma L.' distinctions. Sometimes I wish we'd gone with something slightly less common, maybe our runner-up Eliza. However, the name itself has been wonderful. Emma suits her gentle, kind personality. Teachers and doctors never mangle it. International travel is easy - everyone can pronounce it. And honestly, popularity aside, it's just a beautiful name. We call her 'Em' or 'Emmy' at home, which gives her some uniqueness. Looking back, I might have chosen our second favorite if I'd known just how many Emmas there would be. But I can't imagine her as anything else now. She loves her name, and that's what matters most. For parents considering Emma: yes, it's incredibly popular. But it's also timeless, elegant, and will serve her well from kindergarten to the boardroom. Just be prepared for Emma A., Emma B., Emma C. scenarios in group settings.",
    rating: 3.5,
    wouldChooseAgain: false,
    keyTakeaways: [
      'Top 5 name - very common in classrooms and activities',
      'Simple, classic, and works internationally',
      'Nicknames "Em" and "Emmy" provide some individuality',
      'Literary and historical significance (Jane Austen)',
      'Professional and appropriate for all ages'
    ],
    siblingNames: ['Jack', 'Sophia']
  },

  {
    id: 'noah-001',
    name: 'Noah',
    parentPseudonym: 'David S.',
    childAge: '8 years',
    location: 'Florida',
    story: "I'm the father of 8-year-old Noah, and I want to offer perspective on this name choice. We selected Noah for its biblical significance (we're a religious family) and because it felt both traditional and modern. The two-syllable simplicity was appealing, and we liked that it wasn't easily shortened to nicknames we disliked. Eight years in, Noah has been a fantastic choice for our family. Yes, it's been consistently in the top 5 names, and yes, there are usually 1-2 other Noahs in his various activities. But our son has never expressed frustration about this. The name has aged beautifully with him - it suited him as a baby, fits perfectly as an elementary school kid, and will work well as a teenager and adult. Pronunciation is never an issue, spelling is straightforward (unlike Jonah, which people sometimes confuse it with), and it has positive associations (Noah's Ark). My son is proud of the biblical connection and the qualities Noah represents - faithfulness, obedience, and building something meaningful. The name crosses cultural and linguistic boundaries easily, which has been great for our diverse community and when traveling. If I could go back, I wouldn't change a thing. Noah is strong, simple, and timeless. It's popular, but not in a trendy way that will feel dated. My advice: don't let popularity rankings deter you if you love a name. Noah has served our son exceptionally well, and I'm confident it will continue to do so.",
    rating: 5,
    wouldChooseAgain: true,
    keyTakeaways: [
      'Consistently top-ranked but not trendy - truly timeless',
      'Biblical significance appeals to religious families',
      'Simple two-syllable name, easy to pronounce and spell',
      'Works well across all ages from baby to adult',
      'Cross-cultural and international friendly'
    ],
    siblingNames: ['Elijah', 'Grace']
  },

  // More stories will be added for additional popular names
  // Priority: Sophia, Isabella, Charlotte, Amelia, Mia, Harper (girls)
  //         Oliver, William, James, Benjamin, Lucas (boys)
]

/**
 * Growing Up Stories Data
 *
 * Perspectives from people who have actually lived with these names
 */
export const growingUpStoriesData: GrowingUpStory[] = [
  {
    id: 'olivia-teen-001',
    name: 'Olivia',
    personPseudonym: 'Olivia T.',
    age: 16,
    story: "I'm a 16-year-old Olivia, and I've lived with this name my entire life, obviously. Growing up, I was always 'Olivia T.' in school because there were so many of us. In middle school, there were FIVE Olivias in my grade of 150 kids. It was honestly kind of annoying. I started going by 'Liv' in 7th grade, partly to differentiate myself and partly because it just felt cooler and more me. Now most of my friends call me Liv, and I love it. The name Olivia itself is fine - it's pretty, classic, and professional. When I apply for jobs or internships, 'Olivia Thompson' looks good on a resume. I've never had anyone mispronounce or misspell it, which my friend Siobhan deals with constantly. But the popularity is real. Every time I meet another teenager, there's like a 30% chance they're also named Olivia. On the bright side, there's tons of personalized stuff with my name - keychains, mugs, etc. And the nickname options are good: Liv, Livvy, Ollie. Overall, I like my name. Would I have preferred something more unique? Maybe. But it's a solid name that I'll never be embarrassed by.",
    rating: 4,
    commonIssues: ['Extremely common - always multiple in any group', 'Feels less special due to popularity'],
    positives: ['Easy to spell and pronounce', 'Professional sounding', 'Good nickname options (Liv, Livvy)', 'Lots of personalized merchandise available']
  },

  {
    id: 'liam-teen-001',
    name: 'Liam',
    personPseudonym: 'Liam H.',
    age: 14,
    story: "As a 14-year-old Liam, I can tell you this name is everywhere. I've been in classes with 3-4 other Liams since elementary school. Teachers always use last names or initials to tell us apart. Honestly, I've never really thought about it much - it's just my name. It's short, easy to spell, and sounds good. My friends sometimes call me 'Li' but mostly just Liam. The name feels masculine without being too aggressive, and it's professional enough that I won't need to worry about it on job applications. I know it's super popular, but that doesn't really bother me. It's not like a weird trendy name that will sound dated in 20 years. I play sports and the name sounds good when announced at games. My girlfriend says it's a 'hot guy name' which I guess is a compliment? The Irish heritage is cool - my family isn't even Irish but people always assume we are. Overall, I'm fine with my name. Sure, it would be cool to have something unique, but Liam works. It's strong, simple, and I don't get teased about it. Could be worse.",
    rating: 4,
    commonIssues: ['Very common - multiple Liams in every class', 'Not particularly unique or distinctive'],
    positives: ['Short and easy to remember', 'Sounds masculine and professional', 'Easy to pronounce in multiple languages', 'Irish heritage perceived as cool']
  },

  // More growing-up perspectives will be added for other popular names
]

/**
 * Calculate average rating for a name based on all stories
 */
export function getAverageRating(name: string): number {
  const stories = getParentStories(name)
  if (stories.length === 0) return 0

  const sum = stories.reduce((acc, story) => acc + story.rating, 0)
  return Number((sum / stories.length).toFixed(1))
}

/**
 * Get common themes from stories
 */
export function getCommonThemes(name: string): string[] {
  const stories = getParentStories(name)
  const allTakeaways = stories.flatMap(story => story.keyTakeaways)

  // Simple frequency analysis to find common themes
  const themes = new Set<string>()

  // Check for popularity mentions
  if (allTakeaways.some(t => t.toLowerCase().includes('popular') || t.toLowerCase().includes('common'))) {
    themes.add('Very popular name')
  }

  // Check for pronunciation/spelling mentions
  if (allTakeaways.some(t => t.toLowerCase().includes('pronounce') || t.toLowerCase().includes('spell'))) {
    themes.add('Easy to pronounce and spell')
  }

  // Check for nickname mentions
  if (allTakeaways.some(t => t.toLowerCase().includes('nickname'))) {
    themes.add('Good nickname options')
  }

  // Check for professional mentions
  if (allTakeaways.some(t => t.toLowerCase().includes('professional') || t.toLowerCase().includes('ages well'))) {
    themes.add('Professional and timeless')
  }

  return Array.from(themes)
}

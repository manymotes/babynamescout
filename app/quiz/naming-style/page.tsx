'use client'

import { useState } from 'react'
import Link from 'next/link'

interface Question {
  id: number
  question: string
  options: {
    text: string
    scores: Record<string, number>
  }[]
}

const questions: Question[] = [
  {
    id: 1,
    question: "When you hear a baby name you love, your first thought is...",
    options: [
      { text: "It has such a beautiful, timeless quality", scores: { classic: 2, elegant: 1 } },
      { text: "I've never heard that before - how unique!", scores: { unique: 2, creative: 1 } },
      { text: "It sounds modern and fresh", scores: { modern: 2, trendy: 1 } },
      { text: "It reminds me of something meaningful", scores: { meaningful: 2, nature: 1 } }
    ]
  },
  {
    id: 2,
    question: "Your ideal baby name origin would be...",
    options: [
      { text: "Traditional English or Latin names", scores: { classic: 2, elegant: 1 } },
      { text: "Names from my cultural heritage", scores: { meaningful: 2, unique: 1 } },
      { text: "Inspired by nature, places, or words", scores: { nature: 2, creative: 1 } },
      { text: "Whatever sounds best, origin doesn't matter", scores: { modern: 2, trendy: 1 } }
    ]
  },
  {
    id: 3,
    question: "How do you feel about popular baby names?",
    options: [
      { text: "I love them - they're popular for a reason!", scores: { trendy: 2, modern: 1 } },
      { text: "I'd prefer something less common", scores: { unique: 2, creative: 1 } },
      { text: "Popular classics are perfect", scores: { classic: 2, elegant: 1 } },
      { text: "It depends on the meaning behind the name", scores: { meaningful: 2, nature: 1 } }
    ]
  },
  {
    id: 4,
    question: "If your baby's name was a style, it would be...",
    options: [
      { text: "Sophisticated and refined", scores: { elegant: 2, classic: 1 } },
      { text: "Bold and distinctive", scores: { unique: 2, creative: 1 } },
      { text: "Fresh and contemporary", scores: { modern: 2, trendy: 1 } },
      { text: "Earthy and grounded", scores: { nature: 2, meaningful: 1 } }
    ]
  },
  {
    id: 5,
    question: "When choosing names, you're most drawn to...",
    options: [
      { text: "Names your grandparents might have had", scores: { classic: 2, elegant: 1 } },
      { text: "Names you created or modified yourself", scores: { creative: 2, unique: 1 } },
      { text: "Names you heard on a celebrity's baby", scores: { trendy: 2, modern: 1 } },
      { text: "Names with deep personal or spiritual meaning", scores: { meaningful: 2, nature: 1 } }
    ]
  },
  {
    id: 6,
    question: "The most important quality in a name is...",
    options: [
      { text: "It ages well from baby to adult", scores: { classic: 2, elegant: 1 } },
      { text: "It's memorable and stands out", scores: { unique: 2, creative: 1 } },
      { text: "It sounds current and cool", scores: { modern: 2, trendy: 1 } },
      { text: "It connects to something larger than us", scores: { meaningful: 2, nature: 1 } }
    ]
  },
  {
    id: 7,
    question: "Your reaction to unusual spellings is...",
    options: [
      { text: "Stick to traditional spellings", scores: { classic: 2, elegant: 1 } },
      { text: "Love them! Makes the name unique", scores: { creative: 2, unique: 1 } },
      { text: "Only if it makes the name look modern", scores: { modern: 2, trendy: 1 } },
      { text: "Spelling should honor the name's origin", scores: { meaningful: 2 } }
    ]
  },
  {
    id: 8,
    question: "If you could describe your dream baby name in one word...",
    options: [
      { text: "Timeless", scores: { classic: 2, elegant: 1 } },
      { text: "Original", scores: { unique: 2, creative: 1 } },
      { text: "Stylish", scores: { modern: 2, trendy: 1 } },
      { text: "Soulful", scores: { meaningful: 2, nature: 1 } }
    ]
  }
]

interface NamingStyle {
  style: string
  emoji: string
  tagline: string
  description: string
  characteristics: string[]
  nameExamples: { girl: string[], boy: string[], unisex: string[] }
  avoidTypes: string[]
  tips: string[]
  categories: { name: string, href: string }[]
  color: string
  bgGradient: string
}

const namingStyles: Record<string, NamingStyle> = {
  classic: {
    style: "Classic Traditional",
    emoji: "👑",
    tagline: "Timeless Elegance Never Goes Out of Style",
    description: "You're drawn to names that have stood the test of time. You appreciate the weight of history and tradition, choosing names that feel both dignified and enduring. Your child's name will be just as appropriate in a boardroom as on a playground.",
    characteristics: [
      "Prefer names with historical significance",
      "Value names that age well",
      "Appreciate traditional spelling",
      "Like names that work across generations"
    ],
    nameExamples: {
      girl: ["Elizabeth", "Katherine", "Margaret", "Charlotte", "Eleanor"],
      boy: ["William", "James", "Benjamin", "Alexander", "Theodore"],
      unisex: ["Morgan", "Taylor", "Jordan"]
    },
    avoidTypes: ["Trendy spellings", "Very modern invented names", "Names that feel too youthful"],
    tips: [
      "Look at names from royal families throughout history",
      "Consider names from classic literature",
      "Family names often align with your style",
      "Think about presidential or historical figure names"
    ],
    categories: [
      { name: "Vintage Names", href: "/vintage/" },
      { name: "Royal Names", href: "/meanings/royalty-and-nobility/" },
      { name: "Biblical Names", href: "/biblical/" }
    ],
    color: "text-amber-700",
    bgGradient: "from-amber-50 to-yellow-100"
  },
  elegant: {
    style: "Sophisticated Elegant",
    emoji: "✨",
    tagline: "Refined Beauty in Every Syllable",
    description: "You gravitate toward names with a refined, graceful quality. Sophistication and beauty matter to you - you want a name that sounds like poetry and carries an air of distinction. Your naming choices reflect impeccable taste.",
    characteristics: [
      "Love names with beautiful sounds",
      "Appreciate longer, flowing names",
      "Drawn to French, Italian, or Greek origins",
      "Value names with romantic associations"
    ],
    nameExamples: {
      girl: ["Arabella", "Genevieve", "Vivienne", "Seraphina", "Juliana"],
      boy: ["Sebastian", "Maximilian", "Everett", "Harrison", "Nathaniel"],
      unisex: ["Avery", "Quinn", "Blair"]
    },
    avoidTypes: ["Short, punchy names", "Names that feel too casual", "Overly common choices"],
    tips: [
      "Consider names with multiple syllables for elegance",
      "Look at names from European aristocracy",
      "Names ending in -ella, -ina, or -ette often feel elegant",
      "Think about ballet, opera, or classical music for inspiration"
    ],
    categories: [
      { name: "Beautiful Names", href: "/meanings/beautiful-names/" },
      { name: "Royal Names", href: "/meanings/royalty-and-nobility/" },
      { name: "Vintage Names", href: "/vintage/" }
    ],
    color: "text-purple-700",
    bgGradient: "from-purple-50 to-pink-100"
  },
  unique: {
    style: "Unique Individualist",
    emoji: "🦋",
    tagline: "One of a Kind, Just Like Your Baby",
    description: "You want your child's name to be as special as they are. You're not afraid to venture off the beaten path and choose something truly distinctive. Popularity charts? You'd rather be at the bottom - or not on them at all!",
    characteristics: [
      "Actively avoid popular names",
      "Love discovering hidden gem names",
      "Appreciate names from diverse cultures",
      "Value originality above all"
    ],
    nameExamples: {
      girl: ["Elowen", "Wren", "Zephyrine", "Marigold", "Isolde"],
      boy: ["Caspian", "Lysander", "Theron", "Orion", "Leander"],
      unisex: ["Sage", "Phoenix", "Indigo"]
    },
    avoidTypes: ["Top 100 names", "Names everyone in the class will have", "Trendy names that will date"],
    tips: [
      "Explore names from mythology and folklore",
      "Look at names from other countries and cultures",
      "Consider word names or nature names",
      "Check popularity rankings and choose from the bottom"
    ],
    categories: [
      { name: "Unique Names", href: "/unique/" },
      { name: "Rare Meanings", href: "/meanings/rare-unique-meanings/" },
      { name: "Nature Names", href: "/meanings/nature-names/" }
    ],
    color: "text-teal-700",
    bgGradient: "from-teal-50 to-cyan-100"
  },
  creative: {
    style: "Creative Innovator",
    emoji: "🎨",
    tagline: "Breaking the Rules to Make Something Beautiful",
    description: "You see baby naming as an art form. Whether combining names, inventing new ones, or putting a fresh spin on classics, you love the creative process. Your child's name will be a masterpiece of your imagination.",
    characteristics: [
      "Love creating new name combinations",
      "Enjoy unique spellings and variations",
      "Appreciate unexpected choices",
      "See naming as creative expression"
    ],
    nameExamples: {
      girl: ["Briella", "Avalynn", "Skylar", "Paisley", "Kinsley"],
      boy: ["Jaxon", "Brycen", "Graysen", "Zayden", "Kyler"],
      unisex: ["Emery", "Lennox", "Rowan"]
    },
    avoidTypes: ["Boring traditional names", "Names that feel too expected", "Strict spelling rules"],
    tips: [
      "Try combining parts of family names",
      "Experiment with different spelling variations",
      "Consider mashup names (combining two names)",
      "Look at last names used as first names"
    ],
    categories: [
      { name: "Unisex Names", href: "/unisex/" },
      { name: "Trending Names", href: "/trends/2026/" },
      { name: "Short Names", href: "/short-names/" }
    ],
    color: "text-pink-700",
    bgGradient: "from-pink-50 to-rose-100"
  },
  modern: {
    style: "Modern Minimalist",
    emoji: "⚡",
    tagline: "Clean, Current, and Confidently Simple",
    description: "You appreciate the beauty of simplicity and contemporary style. Short, punchy names with clean sounds appeal to you. You want a name that feels current without being too trendy - modern classics are your sweet spot.",
    characteristics: [
      "Prefer shorter, crisp names",
      "Love clean, simple sounds",
      "Appreciate modern classics",
      "Value easy pronunciation and spelling"
    ],
    nameExamples: {
      girl: ["Mia", "Zoe", "Luna", "Ivy", "Ada"],
      boy: ["Leo", "Max", "Finn", "Owen", "Luca"],
      unisex: ["River", "Blake", "Kai"]
    },
    avoidTypes: ["Complicated spellings", "Very long names", "Names that feel dated"],
    tips: [
      "Look at names with 1-2 syllables",
      "Consider names ending in vowels for softness",
      "Short names with strong sounds work well",
      "Think Scandinavian or Japanese for minimalist inspiration"
    ],
    categories: [
      { name: "Short Names", href: "/short-names/" },
      { name: "Popular Names", href: "/popular/" },
      { name: "Unisex Names", href: "/unisex/" }
    ],
    color: "text-blue-700",
    bgGradient: "from-blue-50 to-indigo-100"
  },
  trendy: {
    style: "Trend-Forward Fashionista",
    emoji: "💫",
    tagline: "Ahead of the Curve and Loving It",
    description: "You have your finger on the pulse of what's hot. You love names that feel fresh, fashionable, and of-the-moment. You're not afraid to embrace trends - they're trends because they're amazing!",
    characteristics: [
      "Love names from pop culture",
      "Follow baby name trends closely",
      "Appreciate celebrity baby names",
      "Enjoy being part of naming movements"
    ],
    nameExamples: {
      girl: ["Olivia", "Emma", "Ava", "Isla", "Willow"],
      boy: ["Liam", "Noah", "Oliver", "Elijah", "Asher"],
      unisex: ["Harper", "Riley", "Parker"]
    },
    avoidTypes: ["Dated names from the 80s/90s", "Names that feel too old-fashioned", "Anything that seems behind the times"],
    tips: [
      "Follow celebrity baby name announcements",
      "Check yearly popularity lists for rising stars",
      "Look at what names are trending on social media",
      "Consider names from popular TV shows and movies"
    ],
    categories: [
      { name: "Trending 2026", href: "/trends/2026/" },
      { name: "Popular Names", href: "/popular/" },
      { name: "Celebrity Names", href: "/unique/" }
    ],
    color: "text-rose-700",
    bgGradient: "from-rose-50 to-pink-100"
  },
  meaningful: {
    style: "Meaningful Storyteller",
    emoji: "📖",
    tagline: "Every Name Tells a Story",
    description: "For you, a name must mean something. Whether honoring family, reflecting values, or connecting to heritage, you want your child's name to carry deep significance. The story behind the name matters as much as the name itself.",
    characteristics: [
      "Research name meanings thoroughly",
      "Value family and heritage connections",
      "Appreciate names with spiritual significance",
      "Love names that tell a story"
    ],
    nameExamples: {
      girl: ["Grace", "Faith", "Hope", "Victoria", "Veronica"],
      boy: ["David", "Gabriel", "Nathan", "Felix", "Benedict"],
      unisex: ["Eden", "Journey", "Haven"]
    },
    avoidTypes: ["Names without clear meaning", "Names chosen just for sound", "Meaningless trendy names"],
    tips: [
      "Look up the meaning of every name you consider",
      "Consider names that honor family members",
      "Explore names from your cultural or religious background",
      "Names meaning hope, love, strength, or wisdom are great starting points"
    ],
    categories: [
      { name: "Names by Meaning", href: "/meanings/" },
      { name: "Biblical Names", href: "/biblical/" },
      { name: "Strong Names", href: "/meanings/strong-names/" }
    ],
    color: "text-indigo-700",
    bgGradient: "from-indigo-50 to-blue-100"
  },
  nature: {
    style: "Nature-Inspired Dreamer",
    emoji: "🌿",
    tagline: "The Natural World is Your Muse",
    description: "You find inspiration in the beauty of nature. From flowers to celestial bodies, from seasons to gemstones, the natural world offers endless naming possibilities. Your child's name will connect them to the earth and sky.",
    characteristics: [
      "Love names from flora and fauna",
      "Appreciate celestial and seasonal names",
      "Value connection to the natural world",
      "Drawn to earthy, organic-feeling names"
    ],
    nameExamples: {
      girl: ["Willow", "Luna", "Ivy", "Aurora", "Violet"],
      boy: ["River", "Jasper", "Forest", "Phoenix", "Ocean"],
      unisex: ["Sage", "Sky", "Wren"]
    },
    avoidTypes: ["Names that feel artificial", "Very urban or modern names", "Names without natural connections"],
    tips: [
      "Explore flower, tree, and plant names",
      "Consider celestial bodies like stars and moons",
      "Look at gemstone names for unique options",
      "Season names and weather-inspired names work well"
    ],
    categories: [
      { name: "Nature Names", href: "/meanings/nature-names/" },
      { name: "Star & Sky Names", href: "/meanings/star-and-sky/" },
      { name: "Water Names", href: "/meanings/water-and-ocean/" }
    ],
    color: "text-green-700",
    bgGradient: "from-green-50 to-emerald-100"
  }
}

export default function NamingStyleQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [result, setResult] = useState<NamingStyle | null>(null)
  const [email, setEmail] = useState('')
  const [emailSubmitted, setEmailSubmitted] = useState(false)
  const [emailLoading, setEmailLoading] = useState(false)
  const [showingResult, setShowingResult] = useState(false)

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers, answerIndex]
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      calculateResult(newAnswers)
    }
  }

  const calculateResult = (finalAnswers: number[]) => {
    const scores: Record<string, number> = {
      classic: 0, elegant: 0, unique: 0, creative: 0,
      modern: 0, trendy: 0, meaningful: 0, nature: 0
    }

    finalAnswers.forEach((answerIndex, questionIndex) => {
      const question = questions[questionIndex]
      const selectedOption = question.options[answerIndex]
      Object.entries(selectedOption.scores).forEach(([style, score]) => {
        scores[style] += score
      })
    })

    let maxScore = 0
    let dominantStyle = 'classic'
    Object.entries(scores).forEach(([style, score]) => {
      if (score > maxScore) {
        maxScore = score
        dominantStyle = style
      }
    })

    setResult(namingStyles[dominantStyle])
    setShowingResult(true)
  }

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setEmailLoading(true)

    // Store locally and track
    try {
      const submissions = JSON.parse(localStorage.getItem('babynamescout_emails') || '[]')
      submissions.push({
        email,
        source: 'naming_style_quiz',
        result: result?.style,
        timestamp: new Date().toISOString()
      })
      localStorage.setItem('babynamescout_emails', JSON.stringify(submissions))

      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'quiz_email_capture', {
          quiz_name: 'naming_style',
          result_style: result?.style
        })
      }

      setEmailSubmitted(true)
    } catch {
      // Silently fail
    }
    setEmailLoading(false)
  }

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setAnswers(answers.slice(0, -1))
    }
  }

  const restartQuiz = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setResult(null)
    setShowingResult(false)
    setEmail('')
    setEmailSubmitted(false)
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100

  if (showingResult && result) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12">
        {/* Result Header */}
        <div className={`bg-gradient-to-br ${result.bgGradient} rounded-2xl p-8 mb-8 text-center border border-gray-200`}>
          <div className="text-6xl mb-4">{result.emoji}</div>
          <p className="text-sm text-gray-600 uppercase tracking-wider mb-2">Your Naming Style</p>
          <h1 className={`text-3xl font-bold ${result.color} mb-2`}>{result.style}</h1>
          <p className="text-lg text-gray-700">{result.tagline}</p>
        </div>

        {/* Description */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
          <p className="text-lg text-gray-700 leading-relaxed">{result.description}</p>
        </div>

        {/* Characteristics & Avoid */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-green-800 mb-4">Your Style Characteristics</h3>
            <ul className="space-y-2">
              {result.characteristics.map((char, i) => (
                <li key={i} className="text-green-700 flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  {char}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-amber-800 mb-4">You Might Avoid</h3>
            <ul className="space-y-2">
              {result.avoidTypes.map((avoid, i) => (
                <li key={i} className="text-amber-700 flex items-start gap-2">
                  <span className="text-amber-500 mt-1">→</span>
                  {avoid}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Name Examples */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Names You Might Love</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <p className="text-sm font-medium text-primary-600 mb-2">Girl Names</p>
              <div className="flex flex-wrap gap-2">
                {result.nameExamples.girl.map((name) => (
                  <Link
                    key={name}
                    href={`/name/${name.toLowerCase()}/`}
                    className="px-3 py-1 bg-primary-50 text-primary-700 text-sm rounded-full hover:bg-primary-100 transition"
                  >
                    {name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-secondary-600 mb-2">Boy Names</p>
              <div className="flex flex-wrap gap-2">
                {result.nameExamples.boy.map((name) => (
                  <Link
                    key={name}
                    href={`/name/${name.toLowerCase()}/`}
                    className="px-3 py-1 bg-secondary-50 text-secondary-700 text-sm rounded-full hover:bg-secondary-100 transition"
                  >
                    {name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-purple-600 mb-2">Unisex Names</p>
              <div className="flex flex-wrap gap-2">
                {result.nameExamples.unisex.map((name) => (
                  <Link
                    key={name}
                    href={`/name/${name.toLowerCase()}/`}
                    className="px-3 py-1 bg-purple-50 text-purple-700 text-sm rounded-full hover:bg-purple-100 transition"
                  >
                    {name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tips */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">Tips for Your Style</h3>
          <ul className="space-y-2">
            {result.tips.map((tip, i) => (
              <li key={i} className="text-blue-700 flex items-start gap-2">
                <span className="text-blue-500 mt-1">💡</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>

        {/* Email Capture */}
        {!emailSubmitted ? (
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6">
            <div className="text-center mb-4">
              <span className="text-3xl mb-2 block">📧</span>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Save Your Results</h3>
              <p className="text-sm text-gray-600">Get your style guide + weekly name suggestions matching your style</p>
            </div>
            <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                required
                disabled={emailLoading}
              />
              <button
                type="submit"
                disabled={emailLoading || !email}
                className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-medium transition disabled:opacity-50"
              >
                {emailLoading ? 'Sending...' : 'Email My Results'}
              </button>
            </form>
          </div>
        ) : (
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6 text-center">
            <p className="text-green-700 font-medium">Your naming style guide is on its way!</p>
          </div>
        )}

        {/* Explore Categories */}
        <div className="text-center mb-8">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Explore Names for Your Style</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {result.categories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 hover:border-primary-300 transition text-sm"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={restartQuiz}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium transition"
          >
            Retake Quiz
          </button>
          <Link
            href="/generator/"
            className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-medium transition text-center"
          >
            Try Name Generator →
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-8">
        <span className="text-5xl mb-4 block">✨</span>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Baby Naming Style Quiz</h1>
        <p className="text-gray-600">Discover your unique naming style in 2 minutes</p>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-gray-500 mb-2">
          <span>Question {currentQuestion + 1} of {questions.length}</span>
          <span>{Math.round(progress)}% complete</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          {questions[currentQuestion].question}
        </h2>

        <div className="space-y-3">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              className="w-full text-left p-4 bg-gray-50 hover:bg-primary-50 border border-gray-200 hover:border-primary-300 rounded-xl text-gray-700 hover:text-gray-900 transition-all duration-200"
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>

      {/* Navigation */}
      {currentQuestion > 0 && (
        <button
          onClick={goBack}
          className="flex items-center gap-2 text-gray-500 hover:text-gray-700 transition"
        >
          ← Previous question
        </button>
      )}
    </div>
  )
}

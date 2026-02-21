import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Baby Name Quizzes - Find Your Perfect Name | BabyNameScout',
  description: 'Take fun baby name quizzes to discover your naming style, find names that match your personality, and narrow down your baby name search.',
  keywords: ['baby name quiz', 'naming quiz', 'baby name finder', 'name personality quiz'],
}

const quizzes = [
  {
    title: 'Baby Naming Style Quiz',
    description: 'Discover your unique naming style - are you Classic, Modern, Unique, or Nature-Inspired? Get personalized name suggestions.',
    href: '/quiz/naming-style/',
    emoji: '✨',
    duration: '2 min',
    featured: true,
    gradient: 'from-primary-50 to-secondary-50',
    border: 'border-primary-200',
  },
  {
    title: 'Name Compatibility Quiz',
    description: 'Find out which baby names best complement your last name and family style.',
    href: '/quiz/naming-style/',
    emoji: '💕',
    duration: '3 min',
    featured: false,
    gradient: 'from-pink-50 to-rose-50',
    border: 'border-pink-200',
    comingSoon: true,
  },
  {
    title: 'Sibling Name Matcher',
    description: 'Already have children? Find the perfect name that fits with your existing family.',
    href: '/quiz/naming-style/',
    emoji: '👶',
    duration: '2 min',
    featured: false,
    gradient: 'from-blue-50 to-indigo-50',
    border: 'border-blue-200',
    comingSoon: true,
  },
]

export default function QuizzesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Baby Name Quizzes</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Not sure where to start? Our fun quizzes help you discover your naming
          preferences and find names that feel right for your family.
        </p>
      </div>

      {/* Featured Quiz */}
      <div className="mb-12">
        <Link href="/quiz/naming-style/" className="block group">
          <div className="bg-gradient-to-br from-primary-50 to-secondary-50 border border-primary-200 rounded-2xl p-8 hover:shadow-lg transition-all">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center text-4xl group-hover:scale-110 transition-transform">
                  ✨
                </div>
              </div>
              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full">
                    Most Popular
                  </span>
                  <span className="text-gray-500 text-sm">2 min</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  Baby Naming Style Quiz
                </h2>
                <p className="text-gray-600">
                  Discover your unique naming style - are you Classic, Modern, Unique, Nature-Inspired,
                  or something else? Get personalized name suggestions based on your quiz results.
                </p>
              </div>
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center group-hover:bg-primary-500 group-hover:border-primary-500 group-hover:text-white transition-all">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Other Quizzes */}
      <h3 className="text-xl font-semibold text-gray-900 mb-6">More Quizzes</h3>
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {quizzes.slice(1).map((quiz) => {
          const QuizCard = (
            <div className={`bg-gradient-to-br ${quiz.gradient} border ${quiz.border} rounded-xl p-6 transition-all h-full ${quiz.comingSoon ? 'opacity-60' : 'hover:shadow-md'}`}>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-2xl flex-shrink-0 border border-gray-100">
                  {quiz.emoji}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-gray-900">{quiz.title}</h3>
                    {quiz.comingSoon && (
                      <span className="px-2 py-0.5 bg-gray-200 text-gray-600 text-xs rounded-full">
                        Coming Soon
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{quiz.description}</p>
                  <span className="text-xs text-gray-500">{quiz.duration}</span>
                </div>
              </div>
            </div>
          )

          if (quiz.comingSoon) {
            return <div key={quiz.title}>{QuizCard}</div>
          }

          return (
            <Link key={quiz.title} href={quiz.href} className="block">
              {QuizCard}
            </Link>
          )
        })}
      </div>

      {/* CTA */}
      <div className="bg-gray-50 rounded-xl p-8 text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-2">Not sure what you're looking for?</h3>
        <p className="text-gray-600 mb-4">Try our name generator for instant suggestions based on your preferences.</p>
        <Link
          href="/generator/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-600 transition"
        >
          Try Name Generator
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  )
}

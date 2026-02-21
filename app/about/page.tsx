import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About BabyNameScout - Our Mission & Methodology',
  description: 'Learn about BabyNameScout, our editorial methodology for name meanings and origins research, and our data sources including the Social Security Administration.',
}

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          About BabyNameScout
        </h1>
        <p className="text-xl text-gray-600">
          Helping parents discover the perfect name for their little one.
        </p>
      </div>

      {/* Who We Are */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Who We Are</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-700 leading-relaxed mb-4">
            BabyNameScout is an independent baby name resource created to help expectant
            parents navigate the exciting journey of choosing a name for their child. We
            understand that a name is one of the first and most meaningful gifts you give
            your baby, and we are here to make that decision easier and more enjoyable.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our team is passionate about names, their histories, and the stories they tell.
            We combine reliable data with thoughtful research to provide you with accurate,
            helpful information about thousands of baby names from cultures around the world.
          </p>
        </div>
      </section>

      {/* Our Data Sources */}
      <section className="mb-12 bg-blue-50 rounded-xl p-6 border border-blue-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Data Sources</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Popularity Rankings
            </h3>
            <p className="text-gray-700 leading-relaxed">
              All baby name popularity data on BabyNameScout comes from the{' '}
              <a
                href="https://www.ssa.gov/oact/babynames/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                Social Security Administration (SSA)
              </a>
              . The SSA maintains comprehensive records of names given to babies in the
              United States, making it the most authoritative source for baby name popularity
              in the country. We update our popularity data regularly to reflect the most
              recent SSA releases.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Name Origins & Cultural Data
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Origin classifications are based on established etymological and linguistic
              research. We reference academic sources, historical naming traditions, and
              cultural heritage documentation to categorize names by their linguistic and
              geographic roots.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Methodology */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Editorial Methodology</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Name Meanings Research
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Our name meanings are compiled from multiple historical, etymological, and
              cultural sources. We cross-reference information across reputable name
              dictionaries, linguistic databases, and cultural heritage resources to ensure
              accuracy. When a name has multiple possible meanings or disputed origins, we
              present the most widely accepted interpretations and note any variations.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Origin Classification
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Names are categorized by their primary linguistic or cultural origin. For names
              with complex histories that span multiple cultures, we identify the most commonly
              accepted root origin while acknowledging the name&apos;s journey across different
              traditions.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Regular Updates
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We regularly review and update our database to incorporate new SSA data releases,
              correct any identified errors, and expand our coverage of names from diverse
              cultural backgrounds.
            </p>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="mb-12 bg-gray-50 rounded-xl p-6 border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Disclaimer</h2>
        <div className="text-gray-700 space-y-3">
          <p>
            <strong>Name Meanings:</strong> Name meanings are compiled from historical and
            cultural sources. Meanings may vary by region, culture, and historical period.
            We present commonly accepted interpretations but encourage independent research
            for names of particular cultural significance.
          </p>
          <p>
            <strong>Popularity Rankings:</strong> Popularity data is sourced from the Social
            Security Administration and reflects names registered in the United States.
            Rankings may differ in other countries.
          </p>
          <p>
            <strong>General Information:</strong> The information on BabyNameScout is provided
            for general informational and entertainment purposes. While we strive for accuracy,
            we make no warranties about the completeness or reliability of any information.
            Your use of this site is at your own discretion.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions?</h2>
        <p className="text-gray-700 leading-relaxed">
          We are always working to improve BabyNameScout. If you notice any errors or have
          suggestions for names we should add, we appreciate your feedback. Happy name hunting!
        </p>
      </section>

      {/* Navigation */}
      <div className="border-t border-gray-200 pt-8">
        <p className="text-gray-600 mb-4">Ready to explore names?</p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/names/girl/"
            className="bg-pink-100 text-pink-700 px-4 py-2 rounded-lg hover:bg-pink-200 transition"
          >
            Browse Girl Names
          </Link>
          <Link
            href="/names/boy/"
            className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-200 transition"
          >
            Browse Boy Names
          </Link>
          <Link
            href="/origins/"
            className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition"
          >
            Explore by Origin
          </Link>
        </div>
      </div>
    </div>
  )
}

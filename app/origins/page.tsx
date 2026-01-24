import { Metadata } from 'next'
import Link from 'next/link'
import { getOriginData } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Baby Names by Origin - Explore Names from Every Culture',
  description: 'Browse baby names by origin and cultural heritage. Discover names from Hebrew, Greek, Latin, Celtic, Arabic, Sanskrit, and many more origins.',
}

export default function OriginsPage() {
  const origins = getOriginData().filter(o => o.count > 0)

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Baby Names by Origin
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Explore baby names from cultures around the world. Each origin carries
          unique traditions, meanings, and beautiful name choices.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {origins.map(origin => (
          <Link
            key={origin.slug}
            href={`/origin/${origin.slug}/`}
            className="bg-white border border-gray-200 hover:border-primary-300 hover:shadow-lg rounded-xl p-6 transition"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-2">{origin.name}</h2>
            <p className="text-gray-600 text-sm mb-4">{origin.description}</p>
            <span className="text-primary-600 font-medium">
              {origin.count} names &rarr;
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}

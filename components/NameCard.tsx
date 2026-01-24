import Link from 'next/link'
import type { BabyName } from '@/types/name'

interface NameCardProps {
  name: BabyName
  showGender?: boolean
}

export function NameCard({ name, showGender = true }: NameCardProps) {
  const genderColor = name.gender === 'girl'
    ? 'border-primary-200 hover:border-primary-400'
    : name.gender === 'boy'
    ? 'border-secondary-200 hover:border-secondary-400'
    : 'border-purple-200 hover:border-purple-400'

  const genderBadge = name.gender === 'girl'
    ? 'bg-primary-100 text-primary-700'
    : name.gender === 'boy'
    ? 'bg-secondary-100 text-secondary-700'
    : 'bg-purple-100 text-purple-700'

  return (
    <Link
      href={`/name/${name.slug}/`}
      className={`block bg-white border-2 ${genderColor} rounded-xl p-4 transition hover:shadow-md`}
    >
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-xl font-bold text-gray-900">{name.name}</h3>
        {showGender && (
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${genderBadge}`}>
            {name.gender === 'girl' ? 'Girl' : name.gender === 'boy' ? 'Boy' : 'Unisex'}
          </span>
        )}
      </div>

      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
        {name.meaning}
      </p>

      <div className="flex items-center gap-3 text-xs text-gray-500">
        <span className="bg-gray-100 px-2 py-1 rounded">{name.origin}</span>
        {name.popularity && (
          <span>#{name.popularity} in 2025</span>
        )}
      </div>
    </Link>
  )
}

interface NameGridProps {
  names: BabyName[]
  showGender?: boolean
}

export function NameGrid({ names, showGender = true }: NameGridProps) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {names.map(name => (
        <NameCard key={name.slug} name={name} showGender={showGender} />
      ))}
    </div>
  )
}

import Image from 'next/image'
import { CheckIcon } from '@heroicons/react/24/outline'

interface ServiceCardProps {
  title: string
  description: string
  problem: string
  outcome: string
  deliverables: string[]
  iconSrc?: string
  iconAlt?: string
}

export default function ServiceCard({
  title,
  description,
  problem,
  outcome,
  deliverables,
  iconSrc,
  iconAlt
}: ServiceCardProps) {
  return (
    <div className="card group hover:shadow-lg transition-all duration-300">
      {/* Icon */}
      {iconSrc && (
        <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors duration-200">
          <Image
            src={iconSrc}
            alt={iconAlt || `${title} icon`}
            width={32}
            height={32}
            className="w-8 h-8"
          />
        </div>
      )}
      
      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-200">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-gray-600 mb-4 leading-relaxed">
        {description}
      </p>
      
      {/* Problem & Outcome */}
      <div className="space-y-3 mb-6">
        <div className="bg-red-50 p-3 rounded-lg">
          <p className="text-sm font-medium text-red-800 mb-1">The Problem:</p>
          <p className="text-sm text-red-700">{problem}</p>
        </div>
        <div className="bg-green-50 p-3 rounded-lg">
          <p className="text-sm font-medium text-green-800 mb-1">The Outcome:</p>
          <p className="text-sm text-green-700">{outcome}</p>
        </div>
      </div>
      
      {/* Deliverables */}
      <div>
        <p className="text-sm font-medium text-gray-700 mb-2">What You Get:</p>
        <ul className="space-y-1">
          {deliverables.map((deliverable, index) => (
            <li key={index} className="flex items-start">
              <CheckIcon className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
              <span className="text-sm text-gray-600">{deliverable}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

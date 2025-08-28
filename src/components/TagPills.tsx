'use client'

import { useState } from 'react'
import Link from 'next/link'

interface TagPillsProps {
  tags: string[]
  clickable?: boolean
  selectedTags?: string[]
  onTagClick?: (tag: string) => void
}

export default function TagPills({ 
  tags, 
  clickable = false, 
  selectedTags = [], 
  onTagClick 
}: TagPillsProps) {
  const [localSelectedTags, setLocalSelectedTags] = useState<string[]>(selectedTags)

  const handleTagClick = (tag: string) => {
    if (onTagClick) {
      onTagClick(tag)
    } else if (clickable) {
      setLocalSelectedTags(prev => 
        prev.includes(tag) 
          ? prev.filter(t => t !== tag)
          : [...prev, tag]
      )
    }
  }

  const isSelected = (tag: string) => {
    return (onTagClick ? selectedTags : localSelectedTags).includes(tag)
  }

  if (clickable) {
    return (
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => handleTagClick(tag)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
              isSelected(tag)
                ? 'bg-primary-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
    )
  }

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Link
          key={tag}
          href={`/blog?tag=${tag}`}
          className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-200"
        >
          {tag}
        </Link>
      ))}
    </div>
  )
}

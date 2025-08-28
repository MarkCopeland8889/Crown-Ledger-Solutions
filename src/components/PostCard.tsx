import Link from 'next/link'
import Image from 'next/image'
import TagPills from './TagPills'

interface Post {
  slug: string
  title: string
  summary: string
  date: string
  readingTime: string
  tags: string[]
  image: string
}

interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <article className="card group hover:shadow-lg transition-all duration-300">
      {/* Featured Image */}
      <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="flex-grow">
        {/* Tags */}
        <div className="mb-3">
          <TagPills tags={post.tags.slice(0, 2)} />
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-200 line-clamp-2">
          <Link href={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </h3>

        {/* Summary */}
        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
          {post.summary}
        </p>

        {/* Meta Information */}
        <div className="flex items-center justify-between text-sm text-gray-500">
          <time dateTime={post.date}>
            {formatDate(post.date)}
          </time>
          <span>{post.readingTime}</span>
        </div>
      </div>

      {/* Read More Link */}
      <div className="mt-6 pt-4 border-t border-gray-100">
        <Link
          href={`/blog/${post.slug}`}
          className="text-primary-600 hover:text-primary-700 font-medium text-sm inline-flex items-center group-hover:underline transition-colors duration-200"
        >
          Read More
          <svg
            className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </article>
  )
}

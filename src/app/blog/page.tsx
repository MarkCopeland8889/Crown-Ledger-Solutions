import type { Metadata } from 'next'
import Link from 'next/link'
import PostCard from '@/components/PostCard'
import TagPills from '@/components/TagPills'
import EmailSignup from '@/components/EmailSignup'

export const metadata: Metadata = {
  title: 'Dental Bookkeeping Blog - Crown Ledger Solutions',
  description: 'Practical dental bookkeeping tips, financial insights, and industry benchmarks. Join 500+ dentists getting weekly financial advice.',
  openGraph: {
    title: 'Dental Bookkeeping Blog - Crown Ledger Solutions',
    description: 'Practical dental bookkeeping tips and financial insights for dental practices.',
  },
}

// Sample blog posts - in a real app, these would come from MDX files
const blogPosts = [
  {
    slug: 'dental-practice-management',
    title: 'Dental Practice Management: Financial Foundations for Success',
    summary: 'Understanding the key financial metrics that determine your practice\'s profitability and how to track them effectively.',
    date: '2024-01-15',
    readingTime: '5 min read',
    tags: ['management', 'benchmarks', 'profitability'],
    image: '/images/blog/dental-management.jpg'
  },
  {
    slug: 'tax-tips-dental-practices',
    title: 'Essential Tax Tips for Dental Practices',
    summary: 'Streamline your tax preparation process and improve cash flow with these proven strategies.',
    date: '2024-01-08',
    readingTime: '7 min read',
    tags: ['taxes', 'preparation', 'cash-flow'],
    image: '/images/blog/tax-tips.jpg'
  },
  {
    slug: 'financial-planning-dentists',
    title: 'Financial Planning Strategies for Dentists',
    summary: 'Get organized for financial planning with this comprehensive guide designed specifically for dental practices.',
    date: '2024-01-01',
    readingTime: '6 min read',
    tags: ['planning', 'organization', 'strategy'],
    image: '/images/blog/financial-planning.jpg'
  },
  {
    slug: 'bookkeeping-best-practices',
    title: 'Bookkeeping Best Practices for Dental Practices',
    summary: 'Learn how to maintain organized financial records and identify opportunities for savings.',
    date: '2023-12-25',
    readingTime: '4 min read',
    tags: ['bookkeeping', 'best-practices', 'organization'],
    image: '/images/blog/bookkeeping-best-practices.jpg'
  },
  {
    slug: 'profit-optimization-dental',
    title: 'Profit Optimization Strategies for Dental Practices',
    summary: 'Keep your costs optimized while ensuring your practice maintains healthy profit margins.',
    date: '2023-12-18',
    readingTime: '8 min read',
    tags: ['profit', 'optimization', 'cost-control'],
    image: '/images/blog/profit-optimization.jpg'
  },
  {
    slug: 'dental-financial-benchmarks',
    title: 'Key Financial Benchmarks Every Dentist Should Track',
    summary: 'Understanding the relationship between production and actual cash received is crucial for practice profitability.',
    date: '2023-12-11',
    readingTime: '6 min read',
    tags: ['benchmarks', 'metrics', 'profitability'],
    image: '/images/blog/dental-management.jpg'
  }
]

const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags))).sort()

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-bg py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Dental Bookkeeping Blog
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Practical financial insights and tips to help your dental practice thrive
            </p>
            <div className="bg-primary-50 rounded-xl p-6 max-w-2xl mx-auto">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                Get Weekly Tips Delivered to Your Inbox
              </h2>
              <p className="text-gray-600 mb-4">
                Join 500+ dentists who receive practical financial insights every week.
              </p>
              <EmailSignup variant="inline" className="mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20">
        <div className="container-custom">
          {/* Tags Filter */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by Topic</h2>
            <TagPills tags={allTags} />
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="btn-outline text-lg px-8 py-4">
              Load More Posts
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-primary-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Never Miss a Tip
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Get our latest dental bookkeeping insights delivered to your inbox every week. 
              No sales pitches, just valuable information to help your practice thrive.
            </p>
            <EmailSignup variant="inline" className="mx-auto" />
            <p className="text-sm text-gray-500 mt-4">
              Unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Featured Resources
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Dental Bookkeeping Starter Kit
                </h3>
                <p className="text-gray-600 mb-4">
                  Get instant access to our comprehensive guide covering essential financial metrics, 
                  templates, and checklists.
                </p>
                <Link
                  href="/downloads/dental-bookkeeping-starter-kit.pdf"
                  className="btn-primary"
                >
                  Download Free PDF
                </Link>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📅</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Tax Prep Checklist
                </h3>
                <p className="text-gray-600 mb-4">
                  Our comprehensive checklist to help you prepare for tax season and 
                  maximize your deductions.
                </p>
                <Link
                  href="/downloads/tax-prep-checklist.pdf"
                  className="btn-primary"
                >
                  Download Checklist
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

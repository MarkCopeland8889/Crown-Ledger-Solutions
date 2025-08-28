import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import EmailSignup from '@/components/EmailSignup'

export const metadata: Metadata = {
  title: 'About Mark Copeland - Crown Ledger Solutions',
  description: 'Meet Mark Copeland, founder of Crown Ledger Solutions. Learn about our mission to provide specialized dental bookkeeping services and financial clarity for dental practices.',
  openGraph: {
    title: 'About Mark Copeland - Crown Ledger Solutions',
    description: 'Meet Mark Copeland, founder of Crown Ledger Solutions. Learn about our mission to provide specialized dental bookkeeping services.',
  },
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-bg py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Crown Ledger Solutions
            </h1>
            <p className="text-xl text-gray-600">
              Founded by Mark Copeland to bring financial clarity to dental practices
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Founder Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              <div className="lg:col-span-1">
                <div className="bg-gray-100 rounded-xl p-8 text-center">
                  <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden">
                    <Image
                      src="/images/about/mark-copeland.png"
                      alt="Mark Copeland, Founder of Crown Ledger Solutions"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Mark Copeland</h3>
                  <p className="text-primary-600 font-medium">Founder & Principal</p>
                  <p className="text-sm text-gray-600 mt-2">
                    Specialized Dental Bookkeeping Expert
                  </p>
                </div>
              </div>
              
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Meet Mark Copeland
                </h2>
                <div className="prose prose-lg text-gray-600 space-y-4">
                  <p>
                    Mark Copeland founded Crown Ledger Solutions with a simple mission: to help dental 
                    practices gain the financial clarity they need to thrive. After years of working 
                    with dental professionals, Mark recognized that generic bookkeeping services 
                    simply weren't meeting the unique needs of dental practices.
                  </p>
                  <p>
                    With deep expertise in dental practice operations, revenue cycles, and industry 
                    benchmarks, Mark and his team provide bookkeeping services that go beyond basic 
                    number-crunching. We understand the dental industry's specific challenges, from 
                    insurance billing complexities to equipment financing considerations.
                  </p>
                  <p>
                    Mark's approach is straightforward: provide organized, accurate, and proactive 
                    bookkeeping that gives dentists the insights they need to make informed decisions 
                    about their practice's future.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission Section */}
            <div className="bg-primary-50 rounded-xl p-8 mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Our Mission
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="prose prose-lg text-gray-600">
                  <p className="text-xl leading-relaxed">
                    To provide dental practices with the financial clarity they need to focus on what 
                    matters most: their patients. We believe that organized, accurate bookkeeping 
                    shouldn't be a source of stress, but rather a foundation for growth and success.
                  </p>
                </div>
                <div className="text-center">
                  <Image
                    src="/images/about/office-team.jpg"
                    alt="Crown Ledger Solutions team and office environment"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>

            {/* Approach Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Our Approach
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Specialized Expertise</h3>
                  <p className="text-gray-600">
                    We focus exclusively on dental practices, understanding the unique financial 
                    challenges and opportunities in your industry.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📊</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Proactive Insights</h3>
                  <p className="text-gray-600">
                    We don't just record transactions—we analyze trends and provide insights 
                    that help you make better business decisions.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Partnership Focus</h3>
                  <p className="text-gray-600">
                    We work as an extension of your team, providing the support you need 
                    to focus on patient care and practice growth.
                  </p>
                </div>
              </div>
            </div>

            {/* Why Dental-Specific Section */}
            <div className="bg-gray-50 rounded-xl p-8 mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Why Dental-Specific Bookkeeping Matters
              </h2>
              <div className="prose prose-lg text-gray-600 max-w-3xl mx-auto">
                <p className="mb-4">
                  Dental practices face unique financial challenges that generic bookkeeping 
                  services often miss. From understanding production-to-deposit relationships 
                  to tracking lab fees and equipment financing, dental bookkeeping requires 
                  specialized knowledge.
                </p>
                <p>
                  Our team understands dental revenue cycles, insurance processing, and 
                  industry benchmarks. We know that supplies should run 5-6% of collections, 
                  payroll should stay under 28%, and that insurance cash flow requires 
                  careful monitoring.
                </p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                While we're currently building our audience and not taking on new clients, 
                you can join our waitlist and start receiving valuable dental bookkeeping insights today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Link
                  href="/contact"
                  className="btn-primary text-lg px-8 py-4"
                >
                  Join the Waitlist
                </Link>
                <Link
                  href="/blog"
                  className="btn-secondary text-lg px-8 py-4"
                >
                  Read Our Blog
                </Link>
              </div>
              
              <div className="bg-primary-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Stay Updated with Weekly Tips
                </h3>
                <p className="text-gray-600 mb-6">
                  Join 500+ dentists who receive practical financial insights every week. 
                  No sales pitches, just valuable information to help your practice thrive.
                </p>
                <EmailSignup variant="inline" className="mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

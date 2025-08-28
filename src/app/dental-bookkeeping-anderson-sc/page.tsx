import type { Metadata } from 'next'
import Link from 'next/link'
import EmailSignup from '@/components/EmailSignup'

export const metadata: Metadata = {
  title: 'Dental Bookkeeping Anderson, SC - Crown Ledger Solutions',
  description: 'Specialized dental bookkeeping services in Anderson, SC. Expert financial management for dental practices in the Upstate region.',
  openGraph: {
    title: 'Dental Bookkeeping Anderson, SC - Crown Ledger Solutions',
    description: 'Professional dental bookkeeping services in Anderson, SC. Financial clarity for dental practices.',
  },
}

export default function AndersonPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-bg py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Dental Bookkeeping in{' '}
              <span className="text-primary-600">Anderson, SC</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Financial clarity for dental practices in the Anderson area
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/downloads/dental-bookkeeping-starter-kit.pdf"
                className="btn-primary text-lg px-8 py-4"
              >
                Get the Starter Kit
              </Link>
              <Link
                href="/contact"
                className="btn-secondary text-lg px-8 py-4"
              >
                Join Waitlist
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Local Focus */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Serving Anderson Dental Practices
              </h2>
              <div className="prose prose-lg text-gray-600 max-w-3xl mx-auto">
                <p className="mb-4">
                  Anderson's growing healthcare sector and diverse community create unique 
                  opportunities and challenges for dental practices. We understand the local 
                  market dynamics and provide specialized bookkeeping services that help 
                  Anderson dentists focus on patient care while maintaining financial clarity.
                </p>
                <p>
                  Our team brings deep knowledge of dental practice operations and local 
                  business conditions to help your Anderson practice thrive financially.
                </p>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-primary-50 rounded-xl p-8 mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Why Anderson Dentists Choose Us
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Local Market Knowledge</h3>
                  <p className="text-gray-600">
                    We understand Anderson's business environment, local regulations, and 
                    the unique challenges facing dental practices in the area.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Dental Industry Expertise</h3>
                  <p className="text-gray-600">
                    Specialized knowledge of dental practice operations, from insurance 
                    processing to equipment financing considerations.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Strategic Insights</h3>
                  <p className="text-gray-600">
                    We don't just record transactions—we provide insights that help you 
                    make informed decisions about your Anderson practice.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Personalized Service</h3>
                  <p className="text-gray-600">
                    Local, personal service with the expertise and technology of a larger firm.
                  </p>
                </div>
              </div>
            </div>

            {/* Nearby Areas */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Also Serving Nearby Areas
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Greenville</h3>
                  <p className="text-gray-600 text-sm mb-3">Just 25 minutes away</p>
                  <Link
                    href="/dental-bookkeeping-greenville-sc"
                    className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                  >
                    Learn More →
                  </Link>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Spartanburg</h3>
                  <p className="text-gray-600 text-sm mb-3">45 minutes away</p>
                  <Link
                    href="/dental-bookkeeping-spartanburg-sc"
                    className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                  >
                    Learn More →
                  </Link>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Clemson</h3>
                  <p className="text-gray-600 text-sm mb-3">30 minutes away</p>
                  <p className="text-gray-500 text-sm">Coming Soon</p>
                </div>
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
                  href="/services"
                  className="btn-secondary text-lg px-8 py-4"
                >
                  View Our Services
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

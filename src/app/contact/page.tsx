import type { Metadata } from 'next'
import Link from 'next/link'
import EmailSignup from '@/components/EmailSignup'

export const metadata: Metadata = {
  title: 'Contact Crown Ledger Solutions - Join Waitlist',
  description: 'Contact Crown Ledger Solutions to join our waitlist for specialized dental bookkeeping services. Schedule a strategy consult or send us a message.',
  openGraph: {
    title: 'Contact Crown Ledger Solutions - Join Waitlist',
    description: 'Contact us to join our waitlist for specialized dental bookkeeping services.',
  },
}

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-bg py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Join our waitlist or schedule a strategy consultation
            </p>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 max-w-2xl mx-auto">
              <p className="text-yellow-800 font-medium">
                ⚠️ Currently building our audience - not taking on new clients yet
              </p>
              <p className="text-yellow-700 text-sm mt-1">
                Join our waitlist to be first in line when we open for new clients
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Calendly Section */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Schedule a Strategy Consultation
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Book a 30-minute call to discuss your practice's financial needs and learn 
                  how our specialized dental bookkeeping services can help you gain financial clarity.
                </p>
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <h3 className="font-semibold text-gray-900 mb-2">What to expect:</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Discussion of your current financial challenges</li>
                    <li>• Overview of our dental-specific approach</li>
                    <li>• Q&A about our services and process</li>
                    <li>• Information about joining our waitlist</li>
                  </ul>
                </div>
                
                {/* Calendly Embed */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="text-center mb-4">
                    <p className="text-sm text-gray-500">
                      Loading calendar...
                    </p>
                  </div>
                  <div className="min-h-[600px] bg-gray-50 rounded border-2 border-dashed border-gray-300 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-gray-500 mb-2">Calendly Integration</p>
                      <p className="text-sm text-gray-400">
                        Calendar widget will be embedded here
                      </p>
                      <p className="text-xs text-gray-400 mt-2">
                        Contact: calendly.com/your-username
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form Section */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Send Us a Message
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Have questions about our services or want to join our waitlist? 
                  Send us a message and we'll get back to you within 24 hours.
                </p>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="practice" className="block text-sm font-medium text-gray-700 mb-2">
                      Practice Name
                    </label>
                    <input
                      type="text"
                      id="practice"
                      name="practice"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder="Tell us about your practice's financial needs or any questions you have..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                    />
                  </div>
                  
                  {/* Honeypot field for spam protection */}
                  <div className="hidden">
                    <input
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="btn-primary w-full text-lg py-4"
                  >
                    Send Message
                  </button>
                </form>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">What happens next?</h3>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• We'll respond within 24 hours</li>
                    <li>• If you're interested in services, we'll add you to our waitlist</li>
                    <li>• You'll receive our weekly dental bookkeeping tips</li>
                    <li>• We'll notify you when we're ready to take on new clients</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-primary-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Stay Updated with Weekly Tips
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join 500+ dentists who receive practical financial insights every week. 
              No sales pitches, just valuable information to help your practice thrive.
            </p>
            <EmailSignup variant="inline" className="mx-auto" />
          </div>
        </div>
      </section>

      {/* Additional Contact Info */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Other Ways to Connect
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📧</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">
                  mark@crownledgersolutions.com
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600">
                  (555) 123-4567
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌐</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Online</h3>
                <p className="text-gray-600">
                  <Link href="/blog" className="text-primary-600 hover:text-primary-700">
                    Read our blog
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

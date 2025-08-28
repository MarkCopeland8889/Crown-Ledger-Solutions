import Link from 'next/link'
import Image from 'next/image'
import EmailSignup from './EmailSignup'

export default function Hero() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-bg.jpg"
          alt="Professional dental office environment"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-white/80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container-custom">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Financial Clarity for{' '}
            <span className="text-primary-600">Dental Practices</span>
          </h1>
          
          {/* Subhead */}
          <p className="text-xl md:text-2xl text-gray-800 mb-8 leading-relaxed">
            Clean books • Stress-free tax season • Profit-focused reporting
          </p>
          
          {/* Primary CTA */}
          <div className="mb-12">
            <EmailSignup variant="inline" className="mx-auto" />
          </div>
          
          {/* Secondary CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/blog"
              className="btn-secondary"
            >
              Free Resource Library
            </Link>
            <Link
              href="/downloads/dental-bookkeeping-starter-kit.pdf"
              className="btn-outline"
            >
              Download Starter Kit
            </Link>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-gray-300/30">
            <p className="text-gray-200 text-sm mb-4">
              Trusted by dental professionals across South Carolina & Colorado
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-gray-200">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary-300 rounded-full mr-2"></div>
                <span className="text-sm">500+ dentists subscribed</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary-300 rounded-full mr-2"></div>
                <span className="text-sm">Industry-specific expertise</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary-300 rounded-full mr-2"></div>
                <span className="text-sm">Free weekly insights</span>
              </div>
            </div>
            
            {/* Trust Badge */}
            <div className="mt-6 flex justify-center">
              <Image
                src="/images/hero/trust-badge.png"
                alt="QuickBooks ProAdvisor Certification"
                width={200}
                height={100}
                className="h-16 w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

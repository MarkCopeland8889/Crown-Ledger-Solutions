import type { Metadata } from 'next'
import Link from 'next/link'
import ServiceCard from '@/components/ServiceCard'
import EmailSignup from '@/components/EmailSignup'

export const metadata: Metadata = {
  title: 'Dental Bookkeeping Services - Crown Ledger Solutions',
  description: 'Specialized dental bookkeeping services including monthly bookkeeping, payroll, cleanup, tax prep support, tax strategy, and full back-office support.',
  openGraph: {
    title: 'Dental Bookkeeping Services - Crown Ledger Solutions',
    description: 'Specialized dental bookkeeping services tailored specifically for dental practices.',
  },
}

const services = [
  {
    title: 'Monthly Bookkeeping',
    description: 'Comprehensive monthly bookkeeping services tailored specifically for dental practices. We handle all your day-to-day financial transactions, ensuring your books are always current and accurate.',
    problem: 'Inconsistent bookkeeping leads to financial blind spots, missed opportunities, and stress during tax season. Many dentists struggle to maintain organized records while focusing on patient care.',
    outcome: 'Clear monthly financial reports that help you make informed decisions about your practice. You\'ll have a complete picture of your financial health and be prepared for tax season.',
    deliverables: [
      'Monthly profit & loss statements',
      'Balance sheet preparation',
      'Cash flow analysis and forecasting',
      'Reconciliation of all bank and credit card accounts',
      'Monthly financial review call with insights',
      'Organized digital filing system for receipts',
      'Quarterly financial performance reviews'
    ],
    iconSrc: '/images/services/bookkeeping-icon.png',
    iconAlt: 'Monthly bookkeeping service icon'
  },
  {
    title: 'Payroll',
    description: 'Accurate and compliant payroll processing for your dental team. We handle all payroll-related tasks, ensuring your employees are paid correctly and all tax obligations are met.',
    problem: 'Payroll errors can lead to compliance issues, employee dissatisfaction, and potential legal problems. Dental practices often struggle with complex payroll requirements and tax filings.',
    outcome: 'Reliable payroll processing with proper tax filings and compliance. Your team gets paid on time, and you avoid costly payroll-related issues.',
    deliverables: [
      'Bi-weekly or monthly payroll processing',
      'Accurate tax calculations and filings',
      'Direct deposit setup and management',
      'Payroll tax returns (941, 940, state filings)',
      'Employee portal access for pay stubs',
      'W-2 and 1099 preparation',
      'Payroll compliance monitoring',
      'Employee benefit tracking and deductions'
    ],
    iconSrc: '/images/services/bookkeeping-icon.png',
    iconAlt: 'Payroll service icon'
  },
  {
    title: 'Cleanup (Catch-up Bookkeeping)',
    description: 'Get your books caught up and organized when you\'re behind. Whether you\'re months or years behind, we\'ll get your financial records in order and set up systems for ongoing success.',
    problem: 'Backlogged bookkeeping creates stress, makes financial planning impossible, and can lead to missed deductions and higher tax bills. Many dentists feel overwhelmed by the task of catching up.',
    outcome: 'Clean, organized books that give you a clear picture of your practice\'s financial health. You\'ll be caught up and ready to move forward with confidence.',
    deliverables: [
      'Complete reconciliation of all accounts',
      'Organization of receipts and supporting documents',
      'Correction of any errors or discrepancies',
      'Setup of proper chart of accounts for dental practices',
      'Clean, accurate financial statements',
      'Identification of missed deductions or opportunities',
      'Setup of ongoing bookkeeping systems',
      'Training on maintaining organized records'
    ],
    iconSrc: '/images/services/bookkeeping-icon.png',
    iconAlt: 'Cleanup bookkeeping service icon'
  },
  {
    title: 'Tax Prep Support',
    description: 'Organized financial records and support for your CPA during tax season. We work with your tax professional to ensure they have everything they need to maximize your deductions.',
    problem: 'Disorganized records lead to missed deductions, higher tax bills, and stressful interactions with your CPA. Many dentists pay more in taxes than necessary due to poor record-keeping.',
    outcome: 'Tax-ready books that help your CPA maximize deductions and minimize your tax liability. You\'ll have peace of mind knowing your tax return is based on complete, accurate information.',
    deliverables: [
      'Organized, reconciled financial records',
      'Complete supporting documentation',
      'CPA communication and coordination support',
      'Tax planning insights and recommendations',
      'Quarterly estimated tax calculations',
      'Tax-efficient business structure advice',
      'Documentation for all business expenses',
      'Year-end tax planning review'
    ],
    iconSrc: '/images/services/tax-icon.png',
    iconAlt: 'Tax preparation service icon'
  },
  {
    title: 'Tax Strategy',
    description: 'Proactive tax planning to minimize your practice\'s tax burden. We work year-round to identify opportunities and strategies that can reduce your tax liability and improve cash flow.',
    problem: 'Reactive tax planning often results in missed opportunities and higher taxes. Many dentists only think about taxes during tax season, missing valuable planning opportunities.',
    outcome: 'Strategic tax planning that reduces your tax liability and improves cash flow. You\'ll pay less in taxes and have more money available for practice growth and personal goals.',
    deliverables: [
      'Quarterly tax planning reviews and updates',
      'Entity structure optimization recommendations',
      'Deduction maximization strategies',
      'Tax-efficient business decision guidance',
      'Year-round tax planning calendar',
      'Retirement plan optimization',
      'Equipment purchase timing strategies',
      'Tax-loss harvesting opportunities'
    ],
    iconSrc: '/images/services/tax-icon.png',
    iconAlt: 'Tax strategy service icon'
  },
  {
    title: 'Dental Backend (Full Back-office Support)',
    description: 'Complete back-office support tailored specifically for dental practices. We handle all your financial operations, allowing you to focus entirely on patient care and practice growth.',
    problem: 'Generic bookkeeping misses dental-specific nuances and opportunities. Dental practices need specialized financial management that understands their unique operations and challenges.',
    outcome: 'Industry-specific financial management that understands dental practice operations. You\'ll have complete financial clarity and support for all your business decisions.',
    deliverables: [
      'Production-to-deposit tie-outs and analysis',
      'Overhead tracking and benchmarking',
      'Vendor payment management and optimization',
      'Insurance billing support and analysis',
      'Practice profitability analysis and reporting',
      'Equipment financing and lease management',
      'Lab fee tracking and analysis',
      'Full financial operations management'
    ],
    iconSrc: '/images/services/consulting-icon.png',
    iconAlt: 'Strategic consulting service icon'
  }
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-bg py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Dental Bookkeeping Services
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Specialized financial services designed specifically for dental practices
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

      {/* Services Overview */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Comprehensive Dental Financial Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide the full spectrum of financial services that dental practices need, 
              from basic bookkeeping to strategic tax planning. Every service is designed 
              specifically for dental practice operations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Why Choose Crown Ledger Solutions?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🦷</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Dental Expertise</h3>
                <p className="text-gray-600">
                  We understand dental practice operations, revenue cycles, and industry benchmarks.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Proactive Approach</h3>
                <p className="text-gray-600">
                  We don't just record transactions—we provide insights that help you grow your practice.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Partnership Focus</h3>
                <p className="text-gray-600">
                  We work as an extension of your team, providing the support you need to succeed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              While we're currently building our audience and not taking on new clients, 
              you can join our waitlist and start receiving valuable dental bookkeeping insights today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Link
                href="/downloads/dental-bookkeeping-starter-kit.pdf"
                className="btn-primary text-lg px-8 py-4"
              >
                Download the Starter Kit (PDF)
              </Link>
              <Link
                href="/contact"
                className="btn-secondary text-lg px-8 py-4"
              >
                Join the Waitlist
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
      </section>
    </>
  )
}

import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import KPIStrip from '@/components/KPIStrip'
import EmailSignup from '@/components/EmailSignup'
import Link from 'next/link'
import { 
  CalculatorIcon, 
  UserGroupIcon, 
  ClipboardDocumentListIcon,
  DocumentTextIcon,
  ChartBarIcon,
  CogIcon 
} from '@heroicons/react/24/outline'

const services = [
  {
    title: 'Monthly Bookkeeping',
    description: 'Comprehensive monthly bookkeeping services tailored specifically for dental practices.',
    problem: 'Inconsistent bookkeeping leads to financial blind spots and missed opportunities.',
    outcome: 'Clear monthly financial reports that help you make informed decisions about your practice.',
    deliverables: [
      'Monthly profit & loss statements',
      'Balance sheet preparation',
      'Cash flow analysis',
      'Reconciliation of all accounts',
      'Monthly financial review call'
    ],
    icon: <CalculatorIcon className="w-6 h-6 text-primary-600" />
  },
  {
    title: 'Payroll',
    description: 'Accurate and compliant payroll processing for your dental team.',
    problem: 'Payroll errors can lead to compliance issues and employee dissatisfaction.',
    outcome: 'Reliable payroll processing with proper tax filings and compliance.',
    deliverables: [
      'Bi-weekly or monthly payroll processing',
      'Tax calculations and filings',
      'Direct deposit setup',
      'Payroll tax returns',
      'Employee portal access'
    ],
    icon: <UserGroupIcon className="w-6 h-6 text-primary-600" />
  },
  {
    title: 'Cleanup (Catch-up Bookkeeping)',
    description: 'Get your books caught up and organized when you\'re behind.',
    problem: 'Backlogged bookkeeping creates stress and makes financial planning impossible.',
    outcome: 'Clean, organized books that give you a clear picture of your practice\'s financial health.',
    deliverables: [
      'Reconciliation of all accounts',
      'Organization of receipts and documents',
      'Correction of any errors',
      'Setup of proper chart of accounts',
      'Clean financial statements'
    ],
    icon: <ClipboardDocumentListIcon className="w-6 h-6 text-primary-600" />
  },
  {
    title: 'Tax Prep Support',
    description: 'Organized financial records and support for your CPA during tax season.',
    problem: 'Disorganized records lead to missed deductions and higher tax bills.',
    outcome: 'Tax-ready books that help your CPA maximize deductions and minimize your tax liability.',
    deliverables: [
      'Organized financial records',
      'Reconciled accounts',
      'Supporting documentation',
      'CPA communication support',
      'Tax planning insights'
    ],
    icon: <DocumentTextIcon className="w-6 h-6 text-primary-600" />
  },
  {
    title: 'Tax Strategy',
    description: 'Proactive tax planning to minimize your practice\'s tax burden.',
    problem: 'Reactive tax planning often results in missed opportunities and higher taxes.',
    outcome: 'Strategic tax planning that reduces your tax liability and improves cash flow.',
    deliverables: [
      'Quarterly tax planning reviews',
      'Entity structure optimization',
      'Deduction maximization strategies',
      'Tax-efficient business decisions',
      'Year-round tax guidance'
    ],
    icon: <ChartBarIcon className="w-6 h-6 text-primary-600" />
  },
  {
    title: 'Dental Backend (Full Back-office Support)',
    description: 'Complete back-office support tailored specifically for dental practices.',
    problem: 'Generic bookkeeping misses dental-specific nuances and opportunities.',
    outcome: 'Industry-specific financial management that understands dental practice operations.',
    deliverables: [
      'Production-to-deposit tie-outs',
      'Overhead tracking and analysis',
      'Vendor payment management',
      'Insurance billing support',
      'Practice profitability analysis'
    ],
    icon: <CogIcon className="w-6 h-6 text-primary-600" />
  }
]

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* What We Do Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What We Do
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide specialized dental bookkeeping services that go beyond generic accounting. 
              Our expertise in dental practice operations means we understand your unique challenges and opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>
      
      <KPIStrip />
      
      {/* Why Dental-Specific Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Why Dental-Specific Bookkeeping?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-600">$</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Revenue Cycle</h3>
                <p className="text-gray-600">
                  We understand dental billing cycles, insurance processing, and production tracking.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-600">📊</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Overhead Tracking</h3>
                <p className="text-gray-600">
                  Monitor dental-specific costs like supplies, lab fees, and equipment maintenance.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-600">🎯</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Industry KPIs</h3>
                <p className="text-gray-600">
                  Track dental benchmarks like supplies at 5-6% and payroll under 28% of collections.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section id="newsletter" className="py-20 bg-primary-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get Weekly Dental Bookkeeping Tips
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join 500+ dentists who receive practical financial insights every week. 
              No sales pitches, just valuable information to help your practice thrive.
            </p>
            <EmailSignup variant="inline" className="mx-auto" />
          </div>
        </div>
      </section>
      
      {/* Resource CTA Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Download Your Free Dental Bookkeeping Starter Kit
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Get instant access to our comprehensive guide covering the essential financial 
              metrics every dental practice should track, plus templates and checklists.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/downloads/dental-bookkeeping-starter-kit.pdf"
                className="btn-primary text-lg px-8 py-4"
              >
                Download the Starter Kit (PDF)
              </Link>
              <Link
                href="/contact"
                className="btn-outline text-lg px-8 py-4"
              >
                Join the Waitlist
              </Link>
            </div>
            
            <p className="text-sm text-gray-500 mt-4">
              Includes: Financial benchmarks, expense tracking templates, tax prep checklists, and more.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

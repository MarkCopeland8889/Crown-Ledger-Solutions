import Link from 'next/link'
import Image from 'next/image'
import EmailSignup from './EmailSignup'

const areasServed = [
  { name: 'Greenville, SC', href: '/dental-bookkeeping-greenville-sc' },
  { name: 'Spartanburg, SC', href: '/dental-bookkeeping-spartanburg-sc' },
  { name: 'Anderson, SC', href: '/dental-bookkeeping-anderson-sc' },
  { name: 'Colorado Springs, CO', href: '/dental-bookkeeping-colorado-springs-co' },
  { name: 'Denver, CO', href: '/dental-bookkeeping-denver-co' },
  { name: 'Woodland Park, CO', href: '/dental-bookkeeping-woodland-park-co' },
]

const socialLinks = [
  { name: 'LinkedIn', href: '#' },
  { name: 'Twitter', href: '#' },
  { name: 'Facebook', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Image
                src="/images/icons/logo.png"
                alt="Crown Ledger Solutions Logo"
                width={200}
                height={80}
                className="h-10 w-auto mr-3"
              />
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Financial clarity for dental practices. Clean books, stress-free tax season, 
              and profit-focused reporting.
            </p>
            <div className="text-gray-300 text-sm">
              <p>Mark Copeland, Founder</p>
              <p>Specialized Dental Bookkeeping</p>
            </div>
          </div>

          {/* Areas We Serve */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Areas We Serve</h3>
            <ul className="space-y-2">
              {areasServed.map((area) => (
                <li key={area.name}>
                  <Link
                    href={area.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
            <p className="text-gray-300 mb-4">
              Join 500+ dentists getting weekly bookkeeping tips
            </p>
            <EmailSignup variant="footer" />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Crown Ledger Solutions. All rights reserved.
          </div>
          <div className="flex space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="text-gray-400 hover:text-primary-400 transition-colors duration-200 text-sm"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

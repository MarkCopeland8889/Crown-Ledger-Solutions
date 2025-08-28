import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Crown Ledger Solutions - Financial Clarity for Dental Practices',
  description: 'Specialized dental bookkeeping services providing clean books, stress-free tax season, and profit-focused reporting. Join 500+ dentists getting weekly bookkeeping tips.',
  keywords: 'dental bookkeeping, dental accounting, dental practice financial management, dental overhead tracking, dental payroll, dental tax preparation',
  authors: [{ name: 'Mark Copeland' }],
  creator: 'Mark Copeland',
  publisher: 'Crown Ledger Solutions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://crownledgersolutions.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Crown Ledger Solutions - Financial Clarity for Dental Practices',
    description: 'Specialized dental bookkeeping services providing clean books, stress-free tax season, and profit-focused reporting.',
    url: 'https://crownledgersolutions.com',
    siteName: 'Crown Ledger Solutions',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Crown Ledger Solutions - Dental Bookkeeping Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crown Ledger Solutions - Financial Clarity for Dental Practices',
    description: 'Specialized dental bookkeeping services providing clean books, stress-free tax season, and profit-focused reporting.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0ea5e9" />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

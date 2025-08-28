'use client'

import { useState } from 'react'

interface EmailSignupProps {
  variant?: 'inline' | 'footer' | 'modal'
  className?: string
}

export default function EmailSignup({ variant = 'inline', className = '' }: EmailSignupProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    
    // TODO: Integrate with ConvertKit/Mailchimp API
    // For now, simulate API call
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // TODO: Replace with actual API call
      // const response = await fetch('/api/subscribe', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email })
      // })
      
      setStatus('success')
      setMessage('Welcome! Check your email for confirmation.')
      setEmail('')
    } catch (error) {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }
  }

  const getButtonText = () => {
    switch (status) {
      case 'loading':
        return 'Subscribing...'
      case 'success':
        return 'Subscribed!'
      default:
        return 'Subscribe for weekly tips'
    }
  }

  const getInputClasses = () => {
    const baseClasses = 'w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200'
    
    if (status === 'error') {
      return `${baseClasses} border-red-300 focus:ring-red-500 focus:border-red-500`
    }
    
    return `${baseClasses} border-gray-300`
  }

  if (variant === 'footer') {
    return (
      <div className={`max-w-md mx-auto ${className}`}>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
          />
          <button
            type="submit"
            disabled={status === 'loading' || status === 'success'}
            className="btn-primary whitespace-nowrap"
          >
            {getButtonText()}
          </button>
        </form>
        {message && (
          <p className={`mt-2 text-sm ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}>
            {message}
          </p>
        )}
      </div>
    )
  }

  if (variant === 'modal') {
    return (
      <div className={`bg-white rounded-xl p-6 shadow-xl max-w-md mx-auto ${className}`}>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Stay Updated</h3>
        <p className="text-gray-600 mb-4">
          Join 500+ dentists getting weekly bookkeeping tips and exclusive resources.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className={getInputClasses()}
          />
          <button
            type="submit"
            disabled={status === 'loading' || status === 'success'}
            className="btn-primary w-full"
          >
            {getButtonText()}
          </button>
        </form>
        {message && (
          <p className={`text-sm ${status === 'success' ? 'text-green-600' : 'text-red-600'}`}>
            {message}
          </p>
        )}
      </div>
    )
  }

  // Default inline variant
  return (
    <div className={`max-w-lg ${className}`}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className={`flex-1 ${getInputClasses()}`}
          />
          <button
            type="submit"
            disabled={status === 'loading' || status === 'success'}
            className="btn-primary whitespace-nowrap"
          >
            {getButtonText()}
          </button>
        </div>
        {message && (
          <p className={`text-sm ${status === 'success' ? 'text-green-600' : 'text-red-600'}`}>
            {message}
          </p>
        )}
        <p className="text-xs text-gray-500">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </form>
    </div>
  )
}

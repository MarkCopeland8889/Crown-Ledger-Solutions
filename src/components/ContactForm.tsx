'use client'

import { useState } from 'react'

interface FormData {
  firstName: string
  lastName: string
  email: string
  practice: string
  message: string
  website: string // Honeypot field
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error'
  message: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    practice: '',
    message: '',
    website: ''
  })

  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      setStatus({
        type: 'error',
        message: 'Please fill in all required fields.'
      })
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: 'error',
        message: 'Please enter a valid email address.'
      })
      return
    }

    setStatus({
      type: 'loading',
      message: 'Sending your message...'
    })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.'
        })
        
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          practice: '',
          message: '',
          website: ''
        })
      } else {
        throw new Error(result.error || 'Failed to send message')
      }
    } catch (error) {
      console.error('Contact form error:', error)
      setStatus({
        type: 'error',
        message: 'Sorry, there was an error sending your message. Please try again.'
      })
    }
  }

  const getStatusStyles = () => {
    switch (status.type) {
      case 'success':
        return 'bg-green-50 border-green-200 text-green-800'
      case 'error':
        return 'bg-red-50 border-red-200 text-red-800'
      case 'loading':
        return 'bg-blue-50 border-blue-200 text-blue-800'
      default:
        return 'hidden'
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Status Message */}
      {status.type !== 'idle' && (
        <div className={`p-4 rounded-lg border mb-6 ${getStatusStyles()}`}>
          <div className="flex items-center">
            {status.type === 'loading' && (
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-3"></div>
            )}
            {status.type === 'success' && (
              <span className="text-green-600 mr-3">✓</span>
            )}
            {status.type === 'error' && (
              <span className="text-red-600 mr-3">✕</span>
            )}
            <p className="font-medium">{status.message}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
              placeholder="Your first name"
              disabled={status.type === 'loading'}
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
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
              placeholder="Your last name"
              disabled={status.type === 'loading'}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
              placeholder="your.email@practice.com"
              disabled={status.type === 'loading'}
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
              value={formData.practice}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
              placeholder="Your dental practice name"
              disabled={status.type === 'loading'}
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
            placeholder="Tell us about your bookkeeping needs, questions, or how we can help..."
            disabled={status.type === 'loading'}
          />
        </div>

        {/* Honeypot field - hidden from users */}
        <div className="hidden">
          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            disabled={status.type === 'loading'}
            className={`btn-primary text-lg py-4 px-8 transition-all duration-200 ${
              status.type === 'loading' 
                ? 'opacity-75 cursor-not-allowed' 
                : 'hover:bg-primary-700'
            }`}
          >
            {status.type === 'loading' ? 'Sending Message...' : 'Send Message'}
          </button>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-500">
            We'll respond to your message within 24 hours.
          </p>
        </div>
      </form>
    </div>
  )
}

import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, firstName, website } = body

    // Check for honeypot field (spam protection)
    if (website) {
      return NextResponse.json({ success: true }, { status: 200 })
    }

    // Basic validation
    if (!email || !firstName) {
      return NextResponse.json(
        { error: 'Email and firstName are required' },
        { status: 400 }
      )
    }

    console.log('=== Starting subscription process ===')
    console.log('Subscription request:', { email, firstName })

    // Get environment variables
    const adminEmail = process.env.ADMIN_EMAIL
    const fromEmail = process.env.FROM_EMAIL

    if (!adminEmail || !fromEmail) {
      console.error('Missing environment variables')
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      )
    }

    console.log('Email configuration:', { adminEmail, fromEmail })

    // Send welcome email to subscriber
    console.log('Sending welcome email to subscriber:', email)
    const welcomeEmail = await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: 'Welcome to Crown Ledger Solutions! 🦷',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0ea5e9;">Welcome to Financial Clarity, ${firstName}!</h2>
          <p>Thank you for subscribing to our weekly dental bookkeeping insights!</p>
          <p>You'll now receive:</p>
          <ul>
            <li>Weekly dental bookkeeping tips</li>
            <li>Tax season preparation strategies</li>
            <li>Profit optimization insights</li>
            <li>Industry benchmarks and best practices</li>
          </ul>
          <p>Your first email will arrive next week with actionable insights to improve your practice's financial health.</p>
          <p>Best regards,<br>Mark Copeland<br>Crown Ledger Solutions</p>
        </div>
      `
    })

    console.log('Welcome email sent successfully:', welcomeEmail)

    // Send admin notification with subscriber details
    console.log('Sending admin notification to:', adminEmail)
    const adminNotification = await resend.emails.send({
      from: fromEmail,
      to: adminEmail,
      subject: 'New Newsletter Subscriber - Crown Ledger Solutions',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0ea5e9;">New Newsletter Subscriber!</h2>
          <p><strong>Name:</strong> ${firstName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
          <p>This subscriber has been added to your weekly newsletter list.</p>
          <p><strong>Next Steps:</strong></p>
          <ul>
            <li>Add ${email} to your Resend contacts</li>
            <li>Send your weekly newsletter to all subscribers</li>
            <li>Track engagement through Resend analytics</li>
          </ul>
          <p><strong>Pro Tip:</strong> Use Resend's contact management to organize your subscribers and send targeted campaigns!</p>
        </div>
      `
    })

    console.log('Admin notification sent successfully:', adminNotification)

    console.log('=== Subscription process completed successfully ===')

    return NextResponse.json({ 
      success: true, 
      message: 'Successfully subscribed to newsletter',
      subscriber: { email, firstName }
    })

  } catch (error) {
    console.error('Subscription error:', error)
    return NextResponse.json(
      { error: 'Failed to subscribe to newsletter' },
      { status: 500 }
    )
  }
}

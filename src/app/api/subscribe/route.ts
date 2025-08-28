import { NextRequest, NextResponse } from 'next/server'

// Initialize Mailchimp with your API key and server prefix
const mailchimp = require('@mailchimp/mailchimp_marketing')
mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY || '',
  server: process.env.MAILCHIMP_SERVER_PREFIX || ''
})

export async function POST(request: NextRequest) {
  try {
    console.log('=== Starting ConvertKit subscription process ===')
    
    const body = await request.json()
    const { email, firstName = 'Dental Professional' } = body

    console.log('Subscription request:', { email, firstName })

    // Basic validation
    if (!email) {
      console.log('ERROR: Email is required')
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      console.log('ERROR: Invalid email format:', email)
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Get Mailchimp configuration
    const apiKey = process.env.MAILCHIMP_API_KEY
    const serverPrefix = process.env.MAILCHIMP_SERVER_PREFIX
    const audienceId = process.env.MAILCHIMP_AUDIENCE_ID

    console.log('Mailchimp configuration:', {
      apiKey: apiKey ? 'Found' : 'Missing',
      serverPrefix,
      audienceId
    })

    if (!apiKey) {
      console.log('ERROR: MAILCHIMP_API_KEY not found')
      return NextResponse.json({
        error: 'Mailchimp API key not configured',
        envVars: { apiKey: !!apiKey, serverPrefix, audienceId }
      })
    }

    if (!serverPrefix) {
      console.log('ERROR: MAILCHIMP_SERVER_PREFIX not found')
      return NextResponse.json({
        error: 'Mailchimp server prefix not configured',
        envVars: { apiKey: !!apiKey, serverPrefix, audienceId }
      })
    }

    if (!audienceId) {
      console.log('ERROR: MAILCHIMP_AUDIENCE_ID not found')
      return NextResponse.json({
        error: 'Mailchimp audience ID not configured',
        envVars: { apiKey: !!apiKey, serverPrefix, audienceId }
      })
    }

    // Subscribe to Mailchimp
    console.log('Subscribing to Mailchimp audience:', audienceId)
    const subscription = await mailchimp.lists.addListMember(audienceId, {
      email_address: email,
      status: 'subscribed',
      merge_fields: {
        FNAME: firstName
      }
    })

    console.log('Mailchimp subscription result:', subscription)

    // Send admin notification using Resend (since this works)
    const adminEmail = process.env.ADMIN_EMAIL || 'fusionspace.net@gmail.com'
    const fromEmail = process.env.FROM_EMAIL || 'onboarding@resend.dev'
    
    if (process.env.RESEND_API_KEY) {
      try {
        const { Resend } = await import('resend')
        const resend = new Resend(process.env.RESEND_API_KEY)
        
        console.log('Sending admin notification to:', adminEmail)
        const adminNotification = await resend.emails.send({
          from: `Crown Ledger Solutions <${fromEmail}>`,
          to: [adminEmail],
          subject: `New Newsletter Subscriber: ${email}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #059669; border-bottom: 2px solid #059669; padding-bottom: 10px;">
                New Newsletter Subscriber
              </h2>
              
                             <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
                 <h3 style="color: #374151; margin-top: 0;">Subscriber Details</h3>
                 <p><strong>Email:</strong> ${email}</p>
                 <p><strong>Name:</strong> ${firstName}</p>
                 <p><strong>Subscribed:</strong> ${new Date().toLocaleString()}</p>
                 <p><strong>Platform:</strong> Mailchimp</p>
               </div>
               
               <div style="background-color: #ecfdf5; padding: 15px; border-radius: 8px; border: 1px solid #a7f3d0;">
                 <p style="margin: 0; color: #065f46; font-size: 14px;">
                   <strong>Next Steps:</strong> This person has been added to your Mailchimp audience and will receive your welcome sequence.
                 </p>
               </div>
              
              <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280;">
                <p>This notification was sent from your website subscription system.</p>
              </div>
            </div>
          `,
        })
        console.log('Admin notification sent successfully:', adminNotification)
      } catch (adminError) {
        console.error('ERROR sending admin notification:', adminError)
        // Don't fail the whole subscription if admin notification fails
      }
    }

    console.log('=== ConvertKit subscription process completed successfully ===')
    return NextResponse.json({ 
      success: true, 
      message: 'Successfully subscribed to our newsletter! Check your email for your welcome gift.',
      subscriberId: subscription.id || 'No ID returned',
      platform: 'Mailchimp',
      welcomeEmailSent: true
    })

  } catch (error) {
    console.error('ConvertKit subscription error:', error)
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again.' },
      { status: 500 }
    )
  }
}

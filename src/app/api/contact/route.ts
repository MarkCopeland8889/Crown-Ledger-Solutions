import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, practice, message, website } = body

    // Basic validation
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Honeypot check
    if (website) {
      return NextResponse.json({ success: true })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    const adminEmail = process.env.ADMIN_EMAIL || 'fusionspace.net@gmail.com'
    const fromEmail = process.env.FROM_EMAIL || 'onboarding@resend.dev'

    // Send email to admin
    const adminEmailResult = await resend.emails.send({
      from: `Crown Ledger Solutions <${fromEmail}>`,
      to: [adminEmail],
      subject: `New Contact Form Submission - ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #059669; border-bottom: 2px solid #059669; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${practice ? `<p><strong>Practice:</strong> ${practice}</p>` : ''}
            <p><strong>Message:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 4px; border-left: 4px solid #059669;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <div style="background-color: #ecfdf5; padding: 15px; border-radius: 8px; border: 1px solid #a7f3d0;">
            <p style="margin: 0; color: #065f46; font-size: 14px;">
              <strong>Next Steps:</strong> This person should be added to your waitlist and sent a welcome email.
            </p>
          </div>
          
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280;">
            <p>This email was sent from your website contact form at crownledgersolutions.com</p>
            <p>Reply directly to this email to respond to ${firstName} at: ${email}</p>
          </div>
        </div>
      `,
    })

    // Send confirmation email to the person who submitted the form
    const confirmationEmail = await resend.emails.send({
      from: `Crown Ledger Solutions <${fromEmail}>`,
      to: [email],
      subject: 'Thank you for contacting Crown Ledger Solutions',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #059669; border-bottom: 2px solid #059669; padding-bottom: 10px;">
            Thank You for Reaching Out!
          </h2>
          <p>Hi ${firstName},</p>
          <p>Thank you for contacting Crown Ledger Solutions. We've received your message and will get back to you within 24 hours.</p>
          
          <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0; border: 1px solid #f59e0b;">
            <h3 style="color: #92400e; margin-top: 0;">What Happens Next?</h3>
            <ul style="color: #92400e; line-height: 1.6;">
              <li>We'll review your message and respond within 24 hours</li>
              <li>If you're interested in our services, we'll add you to our waitlist</li>
              <li>You'll start receiving our weekly dental bookkeeping tips</li>
              <li>We'll notify you as soon as we're ready to take on new clients</li>
            </ul>
          </div>
          
          <div style="background-color: #ecfdf5; padding: 20px; border-radius: 8px; margin: 20px 0; border: 1px solid #a7f3d0;">
            <h3 style="color: #065f46; margin-bottom: 15px;">
              While You Wait...
            </h3>
            <p style="color: #065f46; margin-bottom: 15px;">
              Download our <strong>Dental Bookkeeping Starter Kit</strong> to get started improving your practice's financial management today.
            </p>
            <a href="https://crownledgersolutions.com/downloads/dental-bookkeeping-starter-kit.pdf"
               style="background-color: #059669; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block; font-weight: 500;">
              Download Starter Kit
            </a>
          </div>
          
          <p>If you have any urgent questions, feel free to reply to this email or call us directly.</p>
          <p>Best regards,<br>
          <strong>Mark Copeland</strong><br>
          Crown Ledger Solutions</p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280;">
            <p>Crown Ledger Solutions<br>
            Specialized dental bookkeeping services<br>
            <a href="https://crownledgersolutions.com" style="color: #059669;">crownledgersolutions.com</a></p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully!'
    })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    )
  }
}

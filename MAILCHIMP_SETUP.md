# Mailchimp Setup Guide

## Overview
This website now uses **Mailchimp** for email marketing (newsletter subscriptions) and **Resend** for contact form messages.

## Mailchimp Setup Steps

### 1. Create a Mailchimp Account
- Go to [mailchimp.com](https://mailchimp.com)
- Sign up for a free account
- Verify your email address

### 2. Get Your API Key
- Log into Mailchimp
- Go to **Account** → **Extras** → **API Keys**
- Click **Create A Key**
- Copy the API key (starts with random characters)

### 3. Get Your Server Prefix
- In the same API Keys section
- Note your **Server Prefix** (e.g., `us1`, `us2`, `us3`, etc.)
- This is usually shown near your API key

### 4. Create an Audience
- Go to **Audience** → **All contacts**
- Click **Create Audience**
- Fill in the basic information
- Save the audience
- Note the **Audience ID** (found in the URL or Audience settings)

### 5. Update Environment Variables
Edit your `.env.local` file and replace the placeholder values:

```bash
# Mailchimp Configuration for Email Marketing
MAILCHIMP_API_KEY=your_actual_api_key_here
MAILCHIMP_SERVER_PREFIX=us1
MAILCHIMP_AUDIENCE_ID=1234567890
```

### 6. Test the Integration
Visit `/api/test-mailchimp` to verify everything is working.

## How It Works

### Email Marketing (Mailchimp)
- **Newsletter subscriptions** go to Mailchimp
- **Welcome emails** are handled by Mailchimp
- **Email sequences** can be automated in Mailchimp
- **Subscriber management** is done in Mailchimp dashboard

### Contact Forms (Resend)
- **Contact form submissions** go to your email via Resend
- **Admin notifications** are sent to you
- **Confirmation emails** are sent to the person who contacted you

## Benefits of This Setup

✅ **Mailchimp**: Professional email marketing with automation, templates, and analytics  
✅ **Resend**: Reliable contact form delivery with spam protection  
✅ **Separation of Concerns**: Marketing vs. business communication  
✅ **Scalability**: Can handle thousands of subscribers  
✅ **Automation**: Welcome sequences, weekly tips, etc.  

## Mailchimp Features You Can Use

- **Welcome Sequences**: Automatically send new subscribers a series of emails
- **Email Templates**: Professional-looking emails with your branding
- **Subscriber Segmentation**: Tag and organize your audience
- **Analytics**: Track open rates, click rates, and engagement
- **A/B Testing**: Test different subject lines and content
- **Integrations**: Connect with other tools you use

## Next Steps

1. **Set up Mailchimp** using the steps above
2. **Test the integration** at `/api/test-mailchimp`
3. **Create your first email sequence** in Mailchimp
4. **Customize your audience** to match your brand
5. **Start collecting subscribers** from your website

## Support

- **Mailchimp Help**: [mailchimp.com/help](https://mailchimp.com/help)
- **API Documentation**: [mailchimp.com/developer](https://mailchimp.com/developer)
- **Community**: [community.mailchimp.com](https://community.mailchimp.com)

## Troubleshooting

### Common Issues:
- **API Key Error**: Make sure your API key is correct and active
- **Server Prefix Error**: Verify the server prefix matches your account
- **Audience ID Error**: Ensure the audience ID exists in your Mailchimp account
- **Permission Error**: Ensure your API key has the right permissions

### Test Endpoints:
- `/api/test-mailchimp` - Test Mailchimp integration
- `/api/contact` - Test contact form (POST request)
- `/api/subscribe` - Test newsletter subscription (POST request)

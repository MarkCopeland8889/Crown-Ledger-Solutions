# Crown Ledger Solutions Website

A Next.js 14 website for Crown Ledger Solutions, a specialized dental bookkeeping firm focused on helping dental practices gain financial clarity through organized, accurate, and proactive bookkeeping.

## 🎯 Project Overview

This website is designed with an **audience-first approach** to build authority and trust in the dental bookkeeping space. The primary goal is to capture email subscribers and build a large base of dental professionals who follow our content, rather than immediately selling services.

### Key Features

- **Audience Building Focus**: Primary CTA = email subscribe, secondary CTA = "Join waitlist"
- **Specialized Content**: Dental-specific bookkeeping insights and benchmarks
- **Local SEO**: Dedicated pages for 6 target cities (SC & CO)
- **Resource Downloads**: Lead magnets and educational content
- **Professional Design**: Clean, modern UI with dental industry branding

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Typography plugin
- **Icons**: Heroicons
- **Deployment**: Vercel (recommended)
- **Forms**: Email signup components (ready for ConvertKit/Mailchimp integration)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/            # About page
│   ├── services/         # Services page
│   ├── contact/          # Contact page
│   ├── blog/             # Blog listing page
│   ├── dental-bookkeeping-*/ # Local SEO pages
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Homepage
├── components/            # Reusable components
│   ├── Header.tsx        # Navigation header
│   ├── Footer.tsx        # Site footer
│   ├── Hero.tsx          # Homepage hero section
│   ├── ServiceCard.tsx   # Service display cards
│   ├── KPIStrip.tsx      # Key metrics display
│   ├── EmailSignup.tsx   # Newsletter signup forms
│   ├── PostCard.tsx      # Blog post previews
│   └── TagPills.tsx      # Blog tag filters
└── lib/                  # Utility functions
public/
├── blog/                 # Blog images
├── downloads/            # Resource downloads
└── robots.txt            # SEO robots file
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd crown-ledger-solutions
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Brand Colors

The primary brand colors are defined in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#f0f9ff',   // Light blue
    500: '#0ea5e9',  // Main blue
    600: '#0284c7',  // Darker blue
    // ... more shades
  }
}
```

### Typography

The site uses Inter font family with Tailwind's Typography plugin for rich text content.

### Components

All components are built with Tailwind CSS and are fully customizable. Each component includes:

- Responsive design
- Hover states and animations
- Accessibility features
- TypeScript interfaces

## 📱 Pages & Routes

### Core Pages
- **Home** (`/`) - Hero, services overview, KPIs, newsletter signup
- **About** (`/about`) - Mark Copeland bio, mission, approach
- **Services** (`/services`) - Detailed service descriptions
- **Contact** (`/contact`) - Calendly embed, contact form, waitlist
- **Blog** (`/blog`) - Article listings with tag filtering

### Local SEO Pages
- `/dental-bookkeeping-greenville-sc`
- `/dental-bookkeeping-spartanburg-sc`
- `/dental-bookkeeping-anderson-sc`
- `/dental-bookkeeping-colorado-springs-co`
- `/dental-bookkeeping-denver-co`
- `/dental-bookkeeping-woodland-park-co`

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for local development:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
CONVERTKIT_API_KEY=your-convertkit-key
MAILCHIMP_AUDIENCE_ID=your-mailchimp-id
FORMS_ENDPOINT=your-forms-endpoint
```

### Calendly Integration

To integrate Calendly on the contact page:

1. Replace the placeholder in `src/app/contact/page.tsx`
2. Add your Calendly embed code
3. Update the calendar widget styling

### Email Service Integration

The EmailSignup component is ready for integration with:

- **ConvertKit**: Update API calls in the component
- **Mailchimp**: Modify the form submission logic
- **Formspree/Netlify Forms**: Update form action URLs

## 📊 SEO Features

- **Meta Tags**: Comprehensive Open Graph and Twitter Card support
- **Schema.org**: JSON-LD structured data for local business
- **Sitemap**: Dynamic XML sitemap generation
- **Robots.txt**: Search engine crawling instructions
- **Local SEO**: City-specific pages with unique content
- **Performance**: Optimized images and lazy loading

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Set environment variables** in Vercel dashboard
3. **Deploy automatically** on git push

### Other Platforms

The site can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Self-hosted servers

## 📈 Performance & Analytics

### Lighthouse Scores

Target scores:
- Performance: 90+
- SEO: 90+
- Best Practices: 90+
- Accessibility: 90+

### Analytics Integration

Ready for integration with:
- Google Analytics 4
- Plausible Analytics
- Custom analytics solutions

## 🔒 Security Features

- **Honeypot Fields**: Spam protection in contact forms
- **Input Validation**: Client and server-side validation
- **HTTPS**: Secure connections (enforced by hosting platform)
- **Content Security Policy**: Ready for CSP headers

## 📚 Content Management

### Blog Posts

Blog posts are currently hardcoded but can be easily converted to:

- **MDX files** with frontmatter
- **Headless CMS** integration (Sanity, Contentful)
- **Database-driven** content management

### Resources

Downloadable resources are stored in `/public/downloads/` and can include:
- PDF guides
- Excel templates
- Checklist documents
- Video content

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary to Crown Ledger Solutions.

## 📞 Support

For questions or support:
- Email: mark@crownledgersolutions.com
- Website: [crownledgersolutions.com](https://crownledgersolutions.com)

## 🎉 Acknowledgments

- Built with Next.js and Tailwind CSS
- Icons from Heroicons
- Fonts from Google Fonts
- Design inspiration from modern SaaS websites

---

**Crown Ledger Solutions** - Financial clarity for dental practices

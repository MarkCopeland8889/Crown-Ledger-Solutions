import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'var(--color-primary-50)',
          100: 'var(--color-primary-100)',
          200: 'var(--color-primary-200)',
          300: 'var(--color-primary-300)',
          400: 'var(--color-primary-400)',
          500: 'var(--color-primary-500)',
          600: 'var(--color-primary-600)',
          700: 'var(--color-primary-700)',
          800: 'var(--color-primary-800)',
          900: 'var(--color-primary-900)',
          950: 'var(--color-primary-950)',
        },
        dental: {
          50: 'var(--color-dental-50)',
          100: 'var(--color-dental-100)',
          200: 'var(--color-dental-200)',
          300: 'var(--color-dental-300)',
          400: 'var(--color-dental-400)',
          500: 'var(--color-dental-500)',
          600: 'var(--color-dental-600)',
          700: 'var(--color-dental-700)',
          800: 'var(--color-dental-800)',
          900: 'var(--color-dental-900)',
          950: 'var(--color-dental-950)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#374151',
            a: {
              color: '#0ea5e9',
              '&:hover': {
                color: '#0284c7',
              },
            },
            strong: {
              color: '#111827',
            },
            h1: {
              color: '#111827',
            },
            h2: {
              color: '#111827',
            },
            h3: {
              color: '#111827',
            },
            h4: {
              color: '#111827',
            },
            code: {
              color: '#111827',
            },
            pre: {
              color: '#111827',
              backgroundColor: '#f9fafb',
            },
            blockquote: {
              color: '#6b7280',
              borderLeftColor: '#d1d5db',
            },
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config

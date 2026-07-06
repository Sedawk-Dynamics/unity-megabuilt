import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import { Providers } from './providers'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
})

const SITE_URL = 'https://unitymegabuilt.com'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Unity Megabuilt | Premium Scaffolding Solutions',
    template: '%s | Unity Megabuilt',
  },
  description:
    'Unity Megabuilt — your trusted partner for high-quality M.S. & Aluminium scaffolding rental, manufacturing and supply across Mumbai, Thane & Nashik. Safe. Durable. Delivered.',
  keywords: [
    'scaffolding rental',
    'MS scaffolding',
    'aluminium scaffolding',
    'cuplock system',
    'construction scaffolding Mumbai',
    'scaffolding supplier Nashik',
  ],
  authors: [{ name: 'Unity Megabuilt' }],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: 'Unity Megabuilt | Premium Scaffolding Solutions',
    description:
      'High-quality M.S. & Aluminium scaffolding rental, manufacturing and supply across Mumbai, Thane & Nashik.',
    siteName: 'Unity Megabuilt',
    images: [{ url: '/images/hero-scaffold.png', width: 1200, height: 630, alt: 'Unity Megabuilt scaffolding' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Unity Megabuilt | Premium Scaffolding Solutions',
    description: 'Safe. Durable. Delivered. Scaffolding rental & manufacturing across Mumbai, Thane & Nashik.',
    images: ['/images/hero-scaffold.png'],
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafaf7' },
    { media: '(prefers-color-scheme: dark)', color: '#2a2724' },
  ],
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Unity Megabuilt Private Limited',
  description: 'Scaffolding rental, manufacturing and supply.',
  image: `${SITE_URL}/images/hero-scaffold.png`,
  email: 'unitymegabuild1@gmail.com',
  telephone: '+91-9867781299',
  url: SITE_URL,
  areaServed: ['Ayodhya', 'Khalilabad', 'Mumbai', 'Thane', 'Nashik', 'Pune'],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Plot No. D-50, Khalilabad Industrial Area',
    addressLocality: 'Khalilabad',
    addressRegion: 'Uttar Pradesh',
    postalCode: '272175',
    addressCountry: 'IN',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${geistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  )
}

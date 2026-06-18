import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import { ContactHero } from '@/components/contact/ContactHero'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Unity Megabuilt for scaffolding rental, manufacturing and supply across Mumbai, Thane & Nashik. Call us or send your requirements for a tailored quote.',
  alternates: { canonical: '/contact' },
  openGraph: {
    type: 'website',
    url: 'https://unitymegabuilt.com/contact',
    title: 'Contact | Unity Megabuilt',
    description:
      'Reach out for pricing, rental terms, or an on-site consultation — we usually respond the same day.',
  },
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactHero />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

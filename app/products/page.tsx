import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ProductsHero } from '@/components/products/ProductsHero'
import { ProductsExplorer } from '@/components/products/ProductsExplorer'

export const metadata: Metadata = {
  title: 'Products',
  description:
    'Browse the full Unity Megabuilt catalogue — cuplock scaffolding, adjustable props & spans, shuttering, jacks, couplers, trolleys and construction machinery. For rental or purchase across Mumbai, Thane & Nashik.',
  alternates: { canonical: '/products' },
  openGraph: {
    type: 'website',
    url: 'https://unitymegabuilt.com/products',
    title: 'Products | Unity Megabuilt',
    description:
      'A complete range of M.S. scaffolding and formwork products — manufactured to Indian standards, available for rental or purchase.',
  },
}

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main>
        <ProductsHero />
        <ProductsExplorer />
      </main>
      <Footer />
    </>
  )
}

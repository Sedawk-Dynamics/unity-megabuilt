import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Footer from '@/components/Footer'

// Heavier / below-the-fold sections are code-split to keep the initial bundle lean.
const Products = dynamic(() => import('@/components/Products'))
const ImageCarousel = dynamic(() => import('@/components/ImageCarousel'))
const Testimonials = dynamic(() => import('@/components/Testimonials'))

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Products />
        <ImageCarousel />
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}

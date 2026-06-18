'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ChevronRight, ShieldCheck } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { GradientBlobs } from '@/components/ui/gradient-blobs'
import { Eyebrow } from '@/components/ui/section-heading'
import { categories, products } from '@/lib/products'
import { easeOut } from '@/lib/motion'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
}

const stats = [
  { value: `${products.length}+`, label: 'Products in stock' },
  { value: `${categories.length}`, label: 'Product families' },
  { value: 'IS', label: 'Certified materials' },
]

export function ProductsHero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-12 sm:pt-36 lg:pt-40">
      <GradientBlobs />

      <Container>
        <motion.div variants={container} initial="hidden" animate="visible" className="max-w-3xl">
          {/* Breadcrumb */}
          <motion.nav
            variants={item}
            aria-label="Breadcrumb"
            className="mb-6 flex items-center gap-1.5 text-sm text-muted-foreground"
          >
            <a href="/" className="transition-colors hover:text-foreground">
              Home
            </a>
            <ChevronRight className="size-3.5" />
            <span className="text-foreground">Products</span>
          </motion.nav>

          <motion.div variants={item} className="mb-5">
            <Eyebrow>Product Catalogue</Eyebrow>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-balance text-[2.5rem] font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-[4rem]"
          >
            Everything your site needs,{' '}
            <span className="text-gradient-gold">in one place</span>.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            From cuplock systems and adjustable props to shuttering, jacks, fittings and on-site
            machinery — a complete range of M.S. scaffolding and formwork, manufactured to Indian
            standards and available for rental or outright purchase.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="/contact" size="lg">
              Get a Quote
              <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button href="/#about" size="lg" variant="secondary">
              About Us
            </Button>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-7 inline-flex items-center gap-1.5 text-sm text-muted-foreground"
          >
            <ShieldCheck className="size-4 text-gold" /> Conforming to IS 1239 / 1161 standards
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={item}
            className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-border pt-7"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  {s.value}
                </p>
                <p className="mt-1 text-xs leading-snug text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}

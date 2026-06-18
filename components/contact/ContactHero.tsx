'use client'

import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { GradientBlobs } from '@/components/ui/gradient-blobs'
import { Eyebrow } from '@/components/ui/section-heading'
import { easeOut } from '@/lib/motion'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
}

export function ContactHero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-12 sm:pt-36 lg:pt-40">
      <GradientBlobs variant="subtle" />

      <Container>
        <motion.div variants={container} initial="hidden" animate="visible" className="max-w-3xl">
          <motion.nav
            variants={item}
            aria-label="Breadcrumb"
            className="mb-6 flex items-center gap-1.5 text-sm text-muted-foreground"
          >
            <a href="/" className="transition-colors hover:text-foreground">
              Home
            </a>
            <ChevronRight className="size-3.5" />
            <span className="text-foreground">Contact</span>
          </motion.nav>

          <motion.div variants={item} className="mb-5">
            <Eyebrow>Get in Touch</Eyebrow>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-balance text-[2.5rem] font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-[4rem]"
          >
            Let’s build something{' '}
            <span className="text-gradient-gold">strong together</span>.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Reach out for pricing, rental terms, or an on-site consultation — we usually respond the
            same day. Call us directly or send your requirements and we’ll get back with a tailored
            quote.
          </motion.p>
        </motion.div>
      </Container>
    </section>
  )
}

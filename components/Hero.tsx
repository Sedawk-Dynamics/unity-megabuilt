'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, ShieldCheck, Star, Sparkles } from 'lucide-react'
import { Container } from './ui/container'
import { Button } from './ui/button'
import { GradientBlobs } from './ui/gradient-blobs'
import { easeOut } from '@/lib/motion'

const stats = [
  { value: '10+', label: 'Years of experience' },
  { value: '500+', label: 'Projects delivered' },
  { value: '3', label: 'Locations served' },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 80])
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section ref={ref} id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-36 lg:pt-40 lg:pb-28">
      <GradientBlobs />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          {/* Left — copy */}
          <motion.div variants={container} initial="hidden" animate="visible">
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
                <Sparkles className="size-3.5 text-gold" />
                One-stop solution for scaffolding
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-6 text-balance text-[2.65rem] font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-[4.25rem]"
            >
              Scaffolding that{' '}
              <span className="text-gradient-gold">stands strong</span>, every single site.
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              A leading name in rental and manufacturing of high-quality M.S. &amp; Aluminium
              scaffolding — trusted by contractors, builders and infrastructure companies across India.
            </motion.p>

            <motion.div variants={item} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="#contact" size="lg">
                Get a Free Quote
                <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button href="#services" size="lg" variant="secondary">
                Explore Services
              </Button>
            </motion.div>

            {/* trust row */}
            <motion.div variants={item} className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="size-4 text-gold" /> IS-certified materials
              </span>
              <span className="inline-flex items-center gap-1.5">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-3.5 fill-gold text-gold" />
                  ))}
                </div>
                Trusted since 2014
              </span>
            </motion.div>

            {/* stats */}
            <motion.div variants={item} className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-border pt-7">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{s.value}</p>
                  <p className="mt-1 text-xs leading-snug text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — image with parallax */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: easeOut, delay: 0.2 }}
            style={{ y: imageY, opacity: fade }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            {/* glow */}
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gold/20 blur-3xl" />

            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-border shadow-card">
              <Image
                src="/images/hero-scaffold.png"
                alt="Unity Megabuilt scaffolding on a high-rise construction site"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

              {/* floating glass badge */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.7, ease: easeOut }}
                className="glass-strong absolute inset-x-4 bottom-4 flex items-center gap-3 rounded-2xl border border-white/10 px-4 py-3"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gold text-primary-foreground">
                  <ShieldCheck className="size-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-gold">{`Our promise`}</p>
                  <p className="text-sm font-semibold text-white">Safe. Durable. Delivered.</p>
                </div>
              </motion.div>
            </div>

            {/* floating mini-card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: -10 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 1.15, duration: 0.6, ease: easeOut }}
              className="glass-strong absolute -left-4 top-10 hidden rounded-2xl border border-border px-4 py-3 shadow-soft sm:block"
            >
              <p className="text-2xl font-semibold text-foreground">500+</p>
              <p className="text-[11px] text-muted-foreground">projects delivered</p>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'
import { Container } from './ui/container'
import { SectionHeading } from './ui/section-heading'
import { cn } from '@/lib/utils'

const slides = [
  { src: '/images/scaffold-1.png', caption: 'Heavy-Duty Site Scaffolding', sub: 'Robust M.S. systems for every scale of project' },
  { src: '/images/scaffold-2.png', caption: 'Cuplock Scaffolding System', sub: 'Four-way connections — precise, safe and fast to erect' },
  { src: '/images/scaffold-3.png', caption: 'Fully Stocked Rental Yard', sub: 'Pipes, jacks, couplers, planks — always ready for dispatch' },
  { src: '/images/scaffold-4.png', caption: 'High-Rise Construction Support', sub: 'Trusted by contractors across Mumbai & Nashik' },
  { src: '/images/scaffold-5.png', caption: 'Adjustable Props & Spans', sub: 'Precision-engineered M.S. accessories for all formwork' },
]

const AUTOPLAY_MS = 5000

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
}

export default function ImageCarousel() {
  const [[index, dir], setPage] = useState<[number, number]>([0, 0])
  const [playing, setPlaying] = useState(true)

  const goTo = useCallback((next: number, direction: number) => {
    setPage([(next + slides.length) % slides.length, direction])
  }, [])
  const paginate = useCallback(
    (d: number) => setPage(([prev]) => [(prev + d + slides.length) % slides.length, d]),
    [],
  )

  // Autoplay — uses a ref so the interval doesn't reset every slide change.
  const paginateRef = useRef(paginate)
  paginateRef.current = paginate
  useEffect(() => {
    if (!playing) return
    const t = setInterval(() => paginateRef.current(1), AUTOPLAY_MS)
    return () => clearInterval(t)
  }, [playing])

  const slide = slides[index]

  return (
    <section id="gallery" className="relative scroll-mt-24 py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Our Work"
          title="A look at what we deliver"
          description="From rental yards to high-rise sites — a glimpse of Unity Megabuilt scaffolding in action."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="group relative mt-12 aspect-16/10 overflow-hidden rounded-3xl border border-border shadow-card sm:aspect-21/9"
          onMouseEnter={() => setPlaying(false)}
          onMouseLeave={() => setPlaying(true)}
        >
          <AnimatePresence custom={dir} initial={false}>
            <motion.div
              key={index}
              custom={dir}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, ease: [0.56, 0, 0.17, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={slide.src}
                alt={slide.caption}
                fill
                sizes="(max-width: 1024px) 100vw, 1200px"
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

              <motion.div
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.25, duration: 0.55 }}
                className="absolute inset-x-6 bottom-6 sm:inset-x-12 sm:bottom-10"
              >
                <p className="mb-2 text-xs font-medium uppercase tracking-[0.22em] text-gold">Our Work</p>
                <h3 className="text-balance text-2xl font-semibold tracking-tight text-white sm:text-4xl">
                  {slide.caption}
                </h3>
                <p className="mt-2 max-w-md text-sm text-white/75 sm:text-base">{slide.sub}</p>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Arrows */}
          <button
            onClick={() => paginate(-1)}
            aria-label="Previous slide"
            className="glass-strong absolute left-4 top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 text-white opacity-0 transition-all duration-300 hover:bg-gold hover:text-primary-foreground group-hover:opacity-100"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => paginate(1)}
            aria-label="Next slide"
            className="glass-strong absolute right-4 top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 text-white opacity-0 transition-all duration-300 hover:bg-gold hover:text-primary-foreground group-hover:opacity-100"
          >
            <ChevronRight size={20} />
          </button>

          {/* Play/pause */}
          <button
            onClick={() => setPlaying((p) => !p)}
            aria-label={playing ? 'Pause slideshow' : 'Play slideshow'}
            className="glass-strong absolute right-4 top-4 z-10 flex size-9 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:bg-gold hover:text-primary-foreground"
          >
            {playing ? <Pause size={15} /> : <Play size={15} />}
          </button>

          {/* Dots */}
          <div className="absolute inset-x-0 bottom-4 z-10 flex justify-center gap-2 sm:hidden">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > index ? 1 : -1)}
                aria-label={`Go to slide ${i + 1}`}
                className={cn(
                  'h-1.5 rounded-full transition-all duration-300',
                  i === index ? 'w-7 bg-gold' : 'w-2 bg-white/40',
                )}
              />
            ))}
          </div>
        </motion.div>

        {/* Thumbnail strip (desktop) */}
        <div className="mt-4 hidden grid-cols-5 gap-3 sm:grid">
          {slides.map((s, i) => (
            <button
              key={s.src}
              onClick={() => goTo(i, i > index ? 1 : -1)}
              aria-label={`Show ${s.caption}`}
              className={cn(
                'relative aspect-video overflow-hidden rounded-xl border transition-all duration-300',
                i === index ? 'border-gold ring-2 ring-gold/40' : 'border-border opacity-60 hover:opacity-100',
              )}
            >
              <Image src={s.src} alt={s.caption} fill sizes="200px" className="object-cover" />
            </button>
          ))}
        </div>
      </Container>
    </section>
  )
}

'use client'

import { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, X, ZoomIn, ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { categories, products, categoryIcon, type Product } from '@/lib/products'
import { ProductImage } from './ProductImage'
import { cn } from '@/lib/utils'
import { easeOut } from '@/lib/motion'

const ALL = 'All'

export function ProductsExplorer() {
  const [active, setActive] = useState<string>(ALL)
  const [selected, setSelected] = useState<Product | null>(null)

  const filters = useMemo(() => [ALL, ...categories.map((c) => c.name)], [])
  const filtered = useMemo(
    () => (active === ALL ? products : products.filter((p) => p.category === active)),
    [active],
  )

  const activeBlurb =
    active === ALL ? null : categories.find((c) => c.name === active)?.blurb ?? null

  // Close the lightbox on Escape and lock body scroll while it's open.
  useEffect(() => {
    if (!selected) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [selected])

  return (
    <section className="relative pb-24 sm:pb-28">
      <Container>
        {/* Filter bar */}
        <div className="sticky top-20 z-30 mb-10 flex justify-center sm:justify-start">
          <div className="flex max-w-full gap-1 overflow-x-auto rounded-full border border-border bg-card p-1.5 shadow-soft [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {filters.map((name) => {
              const isActive = active === name
              return (
                <button
                  key={name}
                  onClick={() => setActive(name)}
                  className={cn(
                    'relative shrink-0 whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-300',
                    isActive
                      ? 'text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground',
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="product-filter-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-gold"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  {name}
                </button>
              )
            })}
          </div>
        </div>

        {/* Count + category blurb */}
        <div className="mb-8 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <p className="text-sm text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{filtered.length}</span>{' '}
            {filtered.length === 1 ? 'product' : 'products'}
            {active !== ALL && (
              <>
                {' '}in <span className="font-semibold text-foreground">{active}</span>
              </>
            )}
          </p>
          {activeBlurb && <p className="text-sm text-muted-foreground">{activeBlurb}</p>}
        </div>

        {/* Grid */}
        <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((product) => (
              <ProductCard key={product.slug} product={product} onOpen={() => setSelected(product)} />
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>

      {/* Lightbox modal */}
      <ProductLightbox product={selected} onClose={() => setSelected(null)} />
    </section>
  )
}

function ProductCard({ product, onOpen }: { product: Product; onOpen: () => void }) {
  const Icon = categoryIcon(product.category)

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4, ease: easeOut }}
      className="card-premium group flex flex-col overflow-hidden hover:shadow-card"
    >
      {/* Clickable image → opens lightbox */}
      <button
        type="button"
        onClick={onOpen}
        aria-label={`View ${product.name} image`}
        className="relative block cursor-zoom-in outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <ProductImage src={product.image} alt={product.name} Icon={Icon} className="aspect-[4/3]" />
        <span className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
        <span className="pointer-events-none absolute right-3 top-3 flex size-9 items-center justify-center rounded-full bg-black/45 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
          <ZoomIn className="size-4" />
        </span>
      </button>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wider text-gold">
            <Icon className="size-3.5" />
            {product.category}
          </span>
          {product.spec && (
            <span className="shrink-0 whitespace-nowrap rounded-full border border-gold/30 bg-gold/5 px-2.5 py-0.5 text-[11px] font-medium text-gold">
              {product.spec}
            </span>
          )}
        </div>

        <h3 className="mt-2.5 text-[1.05rem] font-semibold leading-snug tracking-tight text-foreground">
          {product.name}
        </h3>
        <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted-foreground">{product.desc}</p>

        <a
          href="/contact"
          className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-gold"
        >
          Enquire now
          <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>
    </motion.article>
  )
}

function ProductLightbox({ product, onClose }: { product: Product | null; onClose: () => void }) {
  return (
    <AnimatePresence>
      {product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/70 p-4 backdrop-blur-sm sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={product.name}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 8 }}
            transition={{ duration: 0.3, ease: easeOut }}
            onClick={(e) => e.stopPropagation()}
            className="relative my-auto grid w-full max-w-4xl overflow-hidden rounded-3xl border border-border bg-card shadow-card md:grid-cols-[1.25fr_1fr]"
          >
            {/* Close */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-3 top-3 z-10 flex size-9 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm transition-colors hover:bg-black/65"
            >
              <X className="size-4" />
            </button>

            {/* Image */}
            <div className="relative flex max-h-[55vh] items-center justify-center bg-secondary/50 md:max-h-[85vh]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={product.image}
                alt={product.name}
                className="size-full max-h-[55vh] object-contain md:max-h-[85vh]"
              />
            </div>

            {/* Details */}
            <div className="flex flex-col p-6 sm:p-8">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wider text-gold">
                {product.category}
              </span>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
                {product.name}
              </h2>
              {product.spec && (
                <span className="mt-3 inline-flex w-fit items-center rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-xs font-medium text-gold">
                  {product.spec}
                </span>
              )}
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{product.desc}</p>

              <div className="mt-auto pt-6">
                <Button href="/contact" size="lg" className="w-full">
                  Enquire about this product
                  <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

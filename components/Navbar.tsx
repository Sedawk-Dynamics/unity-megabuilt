'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Menu, X, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { siteConfig, navLinks } from '@/lib/site'
import { useActiveSection, useScrolled } from '@/lib/use-active-section'
import { ThemeToggle } from './ui/theme-toggle'
import { Button } from './ui/button'

const sectionIds = navLinks.map((l) => l.id)

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled(12)
  const active = useActiveSection(sectionIds)

  return (
    <motion.header
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-5 sm:pt-4"
    >
      <nav
        className={cn(
          'flex w-full max-w-6xl items-center justify-between rounded-full border px-3 py-2 transition-all duration-500 sm:pl-5 sm:pr-3',
          scrolled
            ? 'glass-strong border-border shadow-soft'
            : 'border-transparent bg-transparent',
        )}
      >
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2.5 pl-1" aria-label={siteConfig.name}>
          <Image
            src={siteConfig.logo}
            alt={siteConfig.name}
            width={200}
            height={56}
            className="h-9 w-auto object-contain sm:h-10"
            priority
          />
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = active === link.id
            return (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={cn(
                    'relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors',
                    isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground',
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-secondary"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>

        {/* Right cluster */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button href="#contact" size="sm" className="hidden sm:inline-flex">
            Get a Quote
            <ArrowRight className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </Button>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-card/60 text-foreground transition-colors hover:bg-secondary lg:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? 'x' : 'menu'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {open ? <X size={20} /> : <Menu size={20} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="glass-strong absolute inset-x-3 top-[4.75rem] rounded-3xl border border-border p-3 shadow-card lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.04 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'block rounded-2xl px-4 py-3 text-sm font-medium transition-colors',
                      active === link.id
                        ? 'bg-secondary text-foreground'
                        : 'text-muted-foreground hover:bg-secondary hover:text-foreground',
                    )}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <Button href="#contact" onClick={() => setOpen(false)} className="mt-2 w-full">
              Get a Quote
              <ArrowRight />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

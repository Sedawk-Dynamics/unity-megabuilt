'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Menu, X, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { siteConfig, navLinks } from '@/lib/site'
import {
  useActiveSection,
} from '@/lib/use-active-section'
import { ThemeToggle } from './ui/theme-toggle'
import { Button } from './ui/button'

const sectionIds = navLinks.map((l) => l.id)

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(sectionIds)

  return (
    <motion.header
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-5 sm:pt-4"
    >
      {/* Main Navbar */}
      <nav className="flex w-full max-w-7xl items-center justify-between rounded-full border border-neutral-200 bg-white px-4 py-2 shadow-lg backdrop-blur-md transition-all duration-500 sm:px-5">
        {/* Logo */}
        <a
          href="#top"
          className="flex items-center gap-2"
          aria-label={siteConfig.name}
        >
          <Image
            src={siteConfig.logo}
            alt={siteConfig.name}
            width={200}
            height={56}
            className="h-10 w-auto object-contain sm:h-11"
            priority
          />
        </a>

        {/* Desktop Links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = active === link.id

            return (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={cn(
                    'relative rounded-full px-5 py-2 text-sm font-medium transition-all duration-300',
                    isActive
                      ? 'text-black'
                      : 'text-neutral-600 hover:text-black'
                  )}
                >
                  {/* Active background */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-neutral-100"
                      transition={{
                        type: 'spring',
                        stiffness: 350,
                        damping: 28,
                      }}
                    />
                  )}

                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <div className="rounded-full border border-neutral-200 bg-white shadow-sm">
            <ThemeToggle />
          </div>

          {/* Quote Button */}
          <Button
            href="#contact"
            size="sm"
            className="hidden rounded-full bg-[#C79217] px-6 text-white hover:opacity-90 sm:inline-flex"
          >
            Get a Quote
            <ArrowRight className="ml-1 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Button>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="inline-flex size-11 items-center justify-center rounded-full border border-neutral-200 bg-white text-black shadow-sm transition hover:bg-neutral-100 lg:hidden"
          >
            <AnimatePresence
              mode="wait"
              initial={false}
            >
              <motion.span
                key={open ? 'x' : 'menu'}
                initial={{
                  rotate: -90,
                  opacity: 0,
                }}
                animate={{
                  rotate: 0,
                  opacity: 1,
                }}
                exit={{
                  rotate: 90,
                  opacity: 0,
                }}
                transition={{ duration: 0.2 }}
              >
                {open ? (
                  <X size={20} />
                ) : (
                  <Menu size={20} />
                )}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: -12,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -12,
              scale: 0.98,
            }}
            transition={{
              duration: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute inset-x-3 top-[5.2rem] rounded-[2rem] border border-neutral-200 bg-white p-4 shadow-2xl lg:hidden"
          >
            <ul className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.id}
                  initial={{
                    opacity: 0,
                    x: -10,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: 0.05 + i * 0.04,
                  }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'block rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-300',
                      active === link.id
                        ? 'bg-neutral-100 text-black'
                        : 'text-neutral-600 hover:bg-neutral-100 hover:text-black'
                    )}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>

            <Button
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 w-full rounded-full bg-[#C79217] text-white"
            >
              Get a Quote
              <ArrowRight className="ml-1" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
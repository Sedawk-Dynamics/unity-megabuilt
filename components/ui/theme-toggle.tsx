'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { cn } from '@/lib/utils'

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const isDark = resolvedTheme === 'dark'

  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={cn(
        'relative inline-flex size-10 items-center justify-center overflow-hidden rounded-full border border-border bg-card/60 text-foreground transition-colors hover:bg-secondary',
        className,
      )}
    >
      {/* Avoid hydration flash: render a neutral icon until mounted */}
      {!mounted ? (
        <Sun className="size-[18px] opacity-0" />
      ) : (
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={isDark ? 'moon' : 'sun'}
            initial={{ y: 14, opacity: 0, rotate: -30 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -14, opacity: 0, rotate: 30 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="absolute inline-flex"
          >
            {isDark ? (
              <Moon className="size-[18px] text-gold" />
            ) : (
              <Sun className="size-[18px] text-gold" />
            )}
          </motion.span>
        </AnimatePresence>
      )}
    </button>
  )
}

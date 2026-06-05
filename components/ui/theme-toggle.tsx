'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { cn } from '@/lib/utils'

export function ThemeToggle({
  className,
}: {
  className?: string
}) {
  const { resolvedTheme, setTheme } =
    useTheme()

  const [mounted, setMounted] =
    useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark =
    mounted && resolvedTheme === 'dark'

  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      onClick={() =>
        setTheme(isDark ? 'light' : 'dark')
      }
      className={cn(
        'relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-white text-[#C79217] shadow-sm transition-all duration-300 hover:scale-105 hover:bg-neutral-100',
        className
      )}
    >
      {!mounted ? (
        <div className="h-[18px] w-[18px]" />
      ) : (
        <AnimatePresence
          mode="wait"
          initial={false}
        >
          <motion.span
            key={isDark ? 'moon' : 'sun'}
            initial={{
              opacity: 0,
              rotate: -90,
              scale: 0.7,
            }}
            animate={{
              opacity: 1,
              rotate: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              rotate: 90,
              scale: 0.7,
            }}
            transition={{
              duration: 0.25,
            }}
            className="absolute flex items-center justify-center"
          >
            {isDark ? (
              <Moon className="h-[18px] w-[18px]" />
            ) : (
              <Sun className="h-[18px] w-[18px]" />
            )}
          </motion.span>
        </AnimatePresence>
      )}
    </button>
  )
}
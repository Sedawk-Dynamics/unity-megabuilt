'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { viewportOnce, easeOut } from '@/lib/motion'

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3.5 py-1.5 text-xs font-medium tracking-wide text-muted-foreground',
        className,
      )}
    >
      <span className="size-1.5 rounded-full bg-gold" />
      {children}
    </span>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: {
  eyebrow?: string
  title: React.ReactNode
  description?: React.ReactNode
  align?: 'left' | 'center'
  className?: string
}) {
  const centered = align === 'center'
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.08 } },
      }}
      className={cn('max-w-2xl', centered && 'mx-auto text-center', className)}
    >
      {eyebrow && (
        <motion.div
          variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } } }}
          className={cn('mb-5', centered && 'flex justify-center')}
        >
          <Eyebrow>{eyebrow}</Eyebrow>
        </motion.div>
      )}
      <motion.h2
        variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } } }}
        className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-[2.75rem] md:leading-[1.1]"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } } }}
          className={cn('mt-5 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg', centered && 'mx-auto')}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  )
}

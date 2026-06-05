'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { fadeUp, staggerContainer, staggerItem, viewportOnce, easeOut } from '@/lib/motion'

type Direction = 'up' | 'down' | 'left' | 'right' | 'none'

const offset: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 28 },
  down: { y: -28 },
  left: { x: 36 },
  right: { x: -36 },
  none: {},
}

/** Scroll-triggered fade/slide entrance for any block. */
export function Reveal({
  children,
  className,
  delay = 0,
  direction = 'up',
  as = 'div',
}: {
  children: ReactNode
  className?: string
  delay?: number
  direction?: Direction
  as?: 'div' | 'section' | 'span'
}) {
  const MotionTag = motion[as]
  const o = offset[direction]
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, ...o }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.7, ease: easeOut, delay }}
    >
      {children}
    </MotionTag>
  )
}

/** Parent that staggers children revealed with <StaggerItem>. */
export function Stagger({
  children,
  className,
  stagger = 0.1,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  stagger?: number
  delay?: number
}) {
  return (
    <motion.div
      className={className}
      variants={staggerContainer(stagger, delay)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div className={className} variants={staggerItem}>
      {children}
    </motion.div>
  )
}

export { fadeUp }

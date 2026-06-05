import type { Variants, Transition } from 'framer-motion'

/** Signature premium easing (Apple/Linear feel). */
export const easeOut: Transition['ease'] = [0.22, 1, 0.36, 1]
export const easeInOut: Transition['ease'] = [0.65, 0, 0.35, 1]

/** Fade up — the default section/element entrance. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: easeOut } },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: easeOut } },
}

/** Parent that staggers its children. */
export const staggerContainer = (stagger = 0.1, delay = 0): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
})

/** Child item for use inside a staggerContainer parent. */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
}

/** Shared viewport config for whileInView. */
export const viewportOnce = { once: true, margin: '-80px' } as const

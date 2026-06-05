'use client'

import { forwardRef } from 'react'
import { motion, type HTMLMotionProps } from 'framer-motion'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'group relative inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium tracking-tight transition-colors duration-300 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        primary: 'bg-gold text-primary-foreground shadow-soft hover:shadow-glow',
        secondary: 'border border-border bg-card text-foreground hover:bg-secondary',
        ghost: 'text-foreground hover:bg-secondary',
        outline: 'border border-gold/40 bg-transparent text-foreground hover:border-gold hover:bg-gold/10',
        link: 'text-foreground underline-offset-4 hover:text-gold hover:underline',
      },
      size: {
        sm: 'h-9 px-4 text-sm',
        md: 'h-11 px-6 text-sm',
        lg: 'h-13 px-8 text-[0.95rem]',
        icon: 'size-10',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  },
)

const interaction = {
  whileHover: { y: -2 },
  whileTap: { y: 0, scale: 0.98 },
  transition: { type: 'spring' as const, stiffness: 400, damping: 22 },
}

type Variants = VariantProps<typeof buttonVariants>

type ButtonProps = HTMLMotionProps<'button'> & Variants & { href?: undefined }
type LinkProps = HTMLMotionProps<'a'> & Variants & { href: string }

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps | LinkProps>(
  function Button({ className, variant, size, children, ...props }, ref) {
    const classes = cn(buttonVariants({ variant, size }), className)

    if (typeof (props as LinkProps).href === 'string') {
      return (
        <motion.a
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={classes}
          {...interaction}
          {...(props as HTMLMotionProps<'a'>)}
        >
          {children}
        </motion.a>
      )
    }

    return (
      <motion.button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classes}
        {...interaction}
        {...(props as HTMLMotionProps<'button'>)}
      >
        {children}
      </motion.button>
    )
  },
)

export { buttonVariants }

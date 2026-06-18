'use client'

import { useState } from 'react'
import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * Product thumbnail with a graceful fallback.
 *
 * Uses a native <img> (not next/image) on purpose: product photos are dropped
 * into /public/images/products over time, so any not-yet-added image should
 * degrade to the branded tile via onError instead of throwing.
 */
export function ProductImage({
  src,
  alt,
  Icon,
  className,
}: {
  src?: string
  alt: string
  Icon: LucideIcon
  className?: string
}) {
  const [failed, setFailed] = useState(false)
  const showPlaceholder = !src || failed

  return (
    <div className={cn('relative overflow-hidden bg-secondary/40', className)}>
      {showPlaceholder ? (
        <div className="grid size-full place-items-center bg-gradient-to-br from-secondary to-accent/40">
          <div className="bg-dots absolute inset-0 opacity-50" aria-hidden="true" />
          <div className="pointer-events-none absolute -right-8 -top-8 size-32 rounded-full bg-gold/10 blur-2xl" />
          <div className="relative flex size-16 items-center justify-center rounded-2xl border border-gold/20 bg-gold/10 text-gold">
            <Icon className="size-7" />
          </div>
        </div>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      )}
    </div>
  )
}

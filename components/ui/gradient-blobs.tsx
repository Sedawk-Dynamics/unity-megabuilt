'use client'

import { cn } from '@/lib/utils'

/**
 * Soft, animated background blobs + grid. Purely decorative.
 * Colors come from --blob-* tokens so they adapt to light/dark.
 */
export function GradientBlobs({
  className,
  variant = 'default',
}: {
  className?: string
  variant?: 'default' | 'subtle'
}) {
  return (
    <div className={cn('pointer-events-none absolute inset-0 -z-10 overflow-hidden', className)} aria-hidden="true">
      <div className="absolute inset-0 bg-grid mask-fade-y" />
      <div
        className="absolute -left-24 -top-24 size-[34rem] rounded-full blur-3xl animate-blob"
        style={{ background: 'radial-gradient(circle at center, var(--blob-a), transparent 70%)' }}
      />
      <div
        className="absolute -right-32 top-10 size-[30rem] rounded-full blur-3xl animate-blob"
        style={{ background: 'radial-gradient(circle at center, var(--blob-b), transparent 70%)', animationDelay: '-6s' }}
      />
      {variant === 'default' && (
        <div
          className="absolute bottom-0 left-1/3 size-[28rem] rounded-full blur-3xl animate-blob"
          style={{ background: 'radial-gradient(circle at center, var(--blob-c), transparent 70%)', animationDelay: '-12s' }}
        />
      )}
    </div>
  )
}

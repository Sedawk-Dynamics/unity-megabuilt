'use client'

import { Star, Quote } from 'lucide-react'
import { Container } from './ui/container'
import { SectionHeading } from './ui/section-heading'
import { Stagger, StaggerItem } from './ui/reveal'

/**
 * Representative client feedback. Replace copy/names with real,
 * consented reviews before launch.
 */
const testimonials = [
  {
    quote:
      'Material quality is excellent and delivery is always on time. The flexible credit terms made a real difference for our cash flow on a tight project.',
    name: 'Rajesh Sharma',
    role: 'Site Manager, Skyline Builders',
    initials: 'RS',
  },
  {
    quote:
      'We’ve rented cuplock and props from Unity for three projects now. Sturdy, well-maintained equipment and a team that genuinely supports you on site.',
    name: 'Priya Deshmukh',
    role: 'Project Engineer, Deshmukh Infra',
    initials: 'PD',
  },
  {
    quote:
      'Fast pickup and dispatch, fair pricing, and no advance required. Exactly the kind of reliable partner you want for infrastructure work.',
    name: 'Imran Qureshi',
    role: 'Contractor, Nashik',
    initials: 'IQ',
  },
  {
    quote:
      'Their planks and platforms meet every safety check we run. Documentation and standards compliance were spot on for our audit.',
    name: 'Anita Joshi',
    role: 'Safety Officer, Metro Constructions',
    initials: 'AJ',
  },
  {
    quote:
      'From a small renovation to a high-rise, they scaled with us without any hassle. Communication is quick and professional.',
    name: 'Vikram Patil',
    role: 'Owner, Patil & Sons',
    initials: 'VP',
  },
  {
    quote:
      'Honestly the smoothest scaffolding vendor we’ve dealt with in Mumbai. Strong materials, stronger service — just as they promise.',
    name: 'Sandeep Rao',
    role: 'Civil Lead, Horizon Developers',
    initials: 'SR',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative scroll-mt-24 overflow-hidden border-y border-border bg-secondary/40 py-24 sm:py-28">
      <div className="bg-dots pointer-events-none absolute inset-0 -z-10 opacity-60" aria-hidden="true" />
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Client Reviews"
          title="Trusted by builders across India"
          description="Contractors, engineers and developers rely on Unity Megabuilt to keep their sites safe and on schedule."
        />

        <Stagger stagger={0.08} className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <StaggerItem key={t.name} className="h-full">
              <figure className="card-premium group flex h-full flex-col p-7 transition-shadow duration-300 hover:shadow-card">
                <div className="flex items-center justify-between">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="size-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <Quote className="size-7 text-gold/25" />
                </div>
                <blockquote className="mt-5 flex-1 text-pretty text-[0.95rem] leading-relaxed text-foreground/90">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <div className="flex size-11 items-center justify-center rounded-full bg-gold/15 text-sm font-semibold text-gold">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  )
}

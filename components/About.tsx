'use client'

import { motion } from 'framer-motion'
import {
  ShieldCheck,
  Truck,
  BadgeIndianRupee,
  HardHat,
  CalendarClock,
  CheckCircle2,
  Quote,
} from 'lucide-react'
import { Container } from './ui/container'
import { SectionHeading } from './ui/section-heading'
import { Reveal, Stagger, StaggerItem } from './ui/reveal'
import { cn } from '@/lib/utils'

const features = [
  { icon: ShieldCheck, title: 'Strong & Durable', desc: 'Well-maintained materials built to withstand the rigours of any construction site.' },
  { icon: Truck, title: 'Fast Delivery & Pickup', desc: 'Timely dispatch and recovery so your project never stalls or loses momentum.' },
  { icon: BadgeIndianRupee, title: 'Fair Pricing', desc: 'Competitive rental terms with flexible credit facility — no advance required.' },
  { icon: HardHat, title: 'Trusted by Contractors', desc: 'Relied on by builders and infrastructure firms across Mumbai and Nashik.' },
  { icon: CalendarClock, title: 'Flexible Rental', desc: 'Short-term and long-term options tailored precisely to your project timeline.' },
  { icon: CheckCircle2, title: 'Safety Compliant', desc: 'Equipment that meets construction standards for safe and reliable use.' },
]

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-24 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: intro */}
          <div>
            <SectionHeading
              eyebrow="About Us"
              title={
                <>
                  Great experience for <span className="text-gradient-gold">industrial solutions</span>
                </>
              }
            />
            <Reveal delay={0.1} className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Welcome to <strong className="font-semibold text-foreground">New Aditya Enterprises</strong> and{' '}
                <strong className="font-semibold text-foreground">Amit Enterprises</strong> — a leading name in the rental
                and manufacturing of high-quality M.S. and Aluminium scaffolding solutions. With utmost customer faith,
                we’ve established ourselves as a trusted partner for construction professionals seeking reliable, robust
                systems.
              </p>
              <p>
                With a strong focus on safety, durability, and timely service, we support builders, contractors, and
                infrastructure companies with dependable scaffolding for every type of worksite.
              </p>
            </Reveal>
          </div>

          {/* Right: owner message card */}
          <Reveal direction="left" delay={0.15}>
            <figure className="card-premium relative h-full p-8 shadow-soft sm:p-9">
              <Quote className="size-9 text-gold/30" />
              <blockquote className="mt-4 text-pretty text-lg font-medium leading-relaxed text-foreground">
                “With years of experience in this industry, we understand how important safety, reliability and timely
                service are on every site. That’s why we offer high-quality materials for sale and rental — with flexible
                payment options, including credit, no advance required.”
              </blockquote>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Our mission is simple: to support your projects with strong materials and even stronger service — the
                support, literally and financially, that you need.
              </p>
              <figcaption className="mt-7 flex items-center gap-4 border-t border-border pt-6">
                <div className="flex size-12 items-center justify-center rounded-full bg-gold text-lg font-semibold text-primary-foreground">
                  A
                </div>
                <div>
                  <p className="font-semibold text-foreground">Anil Kumar Pandey</p>
                  <p className="text-sm text-muted-foreground">Founder &amp; Owner</p>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        </div>

        {/* Why choose us */}
        <div className="mt-24">
          <SectionHeading
            eyebrow="Why Choose Us"
            title={
              <>
                Built on trust. <span className="text-gradient-gold">Delivered with precision.</span>
              </>
            }
            description="Everything you need to keep your site moving — quality materials, fast logistics, and service you can count on."
          />

          <Stagger stagger={0.08} className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <StaggerItem key={f.title}>
                <FeatureCard icon={f.icon} title={f.title} desc={f.desc} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Container>
    </section>
  )
}

function FeatureCard({
  icon: Icon,
  title,
  desc,
  className,
}: {
  icon: typeof ShieldCheck
  title: string
  desc: string
  className?: string
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      className={cn(
        'card-premium group h-full p-6 transition-shadow duration-300 hover:shadow-card',
        className,
      )}
    >
      <div className="flex size-11 items-center justify-center rounded-xl border border-gold/20 bg-gold/10 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-primary-foreground">
        <Icon className="size-5" />
      </div>
      <h3 className="mt-5 text-base font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
    </motion.div>
  )
}

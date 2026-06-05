'use client'

import { motion } from 'framer-motion'
import { Boxes, Factory, Headset, HandCoins, ArrowUpRight } from 'lucide-react'
import { Container } from './ui/container'
import { SectionHeading } from './ui/section-heading'
import { Stagger, StaggerItem } from './ui/reveal'

const services = [
  {
    icon: Boxes,
    number: '01',
    title: 'Scaffolding on Rental',
    desc: 'High-quality pipes, jacks, couplers, planks and complete setups on flexible rental terms — short- and long-term.',
  },
  {
    icon: Factory,
    number: '02',
    title: 'Manufacturing & Supply',
    desc: 'We manufacture and supply strong, durable scaffolding conforming to IS 1239 / 1161 YST 210 standards.',
  },
  {
    icon: Headset,
    number: '03',
    title: 'On-Site Support',
    desc: 'Assistance with loading, unloading and material planning for smooth site operations and minimal downtime.',
  },
  {
    icon: HandCoins,
    number: '04',
    title: 'Flexible Credit Facility',
    desc: 'Materials available on credit without advance payment, as per business terms — because your projects shouldn’t wait.',
  },
]

const industries = [
  'Building Construction',
  'Commercial & Residential',
  'Road & Bridge Work',
  'Industrial Infrastructure',
  'Renovation & Repair',
]

export default function Services() {
  return (
    <section id="services" className="relative scroll-mt-24 overflow-hidden border-y border-border bg-secondary/40 py-24 sm:py-28">
      <div className="bg-dots pointer-events-none absolute inset-0 -z-10 opacity-60" aria-hidden="true" />
      <Container>
        <SectionHeading
          eyebrow="What We Offer"
          title="Comprehensive scaffolding services"
          description="From rental to on-site support — everything you need, under one roof."
        />

        <Stagger className="mt-14 grid gap-5 md:grid-cols-2">
          {services.map((svc) => (
            <StaggerItem key={svc.number}>
              <ServiceCard {...svc} />
            </StaggerItem>
          ))}
        </Stagger>

        {/* Industries */}
        <div className="mt-16">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">Industries we serve</p>
          <Stagger stagger={0.06} className="mt-5 flex flex-wrap gap-3">
            {industries.map((ind) => (
              <StaggerItem key={ind}>
                <span className="inline-flex cursor-default items-center rounded-full border border-border bg-card px-5 py-2.5 text-sm text-muted-foreground transition-colors duration-300 hover:border-gold/50 hover:text-foreground">
                  {ind}
                </span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Container>
    </section>
  )
}

function ServiceCard({
  icon: Icon,
  number,
  title,
  desc,
}: {
  icon: typeof Boxes
  number: string
  title: string
  desc: string
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      className="card-premium group relative h-full overflow-hidden p-7 transition-shadow duration-300 hover:shadow-card sm:p-8"
    >
      <span className="pointer-events-none absolute -right-2 -top-4 select-none text-8xl font-bold text-foreground/[0.03]">
        {number}
      </span>
      <div className="flex items-start justify-between">
        <div className="flex size-12 items-center justify-center rounded-2xl border border-gold/20 bg-gold/10 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-primary-foreground">
          <Icon className="size-6" />
        </div>
        <ArrowUpRight className="size-5 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold" />
      </div>
      <h3 className="mt-6 text-xl font-semibold tracking-tight text-foreground">{title}</h3>
      <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{desc}</p>
    </motion.div>
  )
}

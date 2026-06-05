'use client'

import { motion } from 'framer-motion'
import { Layers, CheckCircle2 } from 'lucide-react'
import { Container } from './ui/container'
import { SectionHeading } from './ui/section-heading'
import { Reveal, Stagger, StaggerItem } from './ui/reveal'

const products = [
  { title: 'Mild Steel Scaffolding Pipes', desc: 'Conforming to IS 1161 grade YST 210/240. 40mm NB tubes for verticals and horizontals.', spec: '40mm NB' },
  { title: 'Base Jacks & U-Jacks', desc: 'Adjustable base components for levelling scaffolding on uneven ground. Made to IS standards.', spec: 'Various sizes' },
  { title: 'Adjustable Props (M.S.)', desc: 'Four sizes: 1.5–2.75m, 2–3.25m, 2–3.75m, 3–4.80m. Weights from 15.5 to 21.5 kg.', spec: '1.5m – 4.80m' },
  { title: 'Couplers (Fixed & Swivel)', desc: 'High-quality forged couplers for secure pipe-to-pipe connections at any angle.', spec: 'Fixed & Swivel' },
  { title: 'H-Frames & Cross Bracings', desc: 'Galvanised H-frames for rapid tower erection; cross bracings provide lateral stability.', spec: 'Standard & Custom' },
  { title: 'M.S. Planks / Walkways', desc: 'IS 2062 Grade E250A. Anti-skid corrugations, welded end hooks. Width 210–280mm.', spec: '1.2m – 3.0m' },
  { title: 'Shuttering / Centering Plates', desc: '14/12 gauge M.S. sheet with pressed flange & stiffeners. 600×900mm and 300×900mm.', spec: '600×900mm' },
  { title: 'Adjustable Span (Weller)', desc: 'Outer 65×65×6mm angle; inner 40×40×5mm T-angle. 2.35m × 2.35m. 41 kg.', spec: '2.35m / 41 kg' },
  { title: 'M.S. Platte / Brickplate Soldier', desc: 'Outer tube 50NB (60.3mm OD); inner 40NB (48.3mm OD). 2.5m and 3m variants.', spec: '2.5m & 3m' },
  { title: 'I-Beam & Channel', desc: 'Horizontal support spans and wellers. Sizes 100×50mm, 200×75mm. High-strength members.', spec: '100×50mm' },
  { title: 'Anti-Skid Platforms', desc: 'Metal steel, 2mm thick. From 2000×285×50mm up to 3000×235×50mm. Perforated for safety.', spec: 'Up to 3000mm' },
  { title: 'Shikanja (Clamping Device)', desc: 'Fastening device for holding components tightly during construction and woodworking.', spec: '2 / 3 / 4 ft' },
]

const verticals = ['3.0M', '2.5M', '2.0M', '1.5M', '1.0M', '0.5M']
const horizontals = ['2.5M', '2.0M', '1.8M', '1.5M', '1.2M', '0.9M', '0.8M', '0.6M']

export default function Products() {
  return (
    <section id="products" className="relative scroll-mt-24 py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="What We Supply"
          title="A complete range of scaffolding products"
          description="Manufactured to Indian and British standards — available for rental or outright purchase."
        />

        <Stagger stagger={0.05} className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <StaggerItem key={p.title} className="h-full">
              <motion.article
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="card-premium group flex h-full flex-col p-6 transition-shadow duration-300 hover:shadow-card"
              >
                <div className="mb-3 flex items-start justify-between gap-3">
                  <h3 className="text-[0.95rem] font-semibold leading-snug text-foreground">{p.title}</h3>
                  <span className="shrink-0 whitespace-nowrap rounded-full border border-gold/30 bg-gold/5 px-2.5 py-0.5 text-[11px] font-medium text-gold">
                    {p.spec}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              </motion.article>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Featured Cuplock system */}
        <Reveal delay={0.1} className="mt-16">
          <div className="card-premium relative overflow-hidden p-8 shadow-soft sm:p-12">
            <div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-gold/10 blur-3xl" />
            <div className="relative grid gap-10 lg:grid-cols-2">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-3.5 py-1.5 text-xs font-medium text-gold">
                  <Layers className="size-3.5" /> Featured System
                </span>
                <h3 className="mt-5 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  Cuplock Scaffolding System
                </h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Welded bottom cups made from high-quality steel and captive malleable top cups ensure a firm, rigid
                  connection with ledger blades — built to withstand rough site use. Verticals connect end-to-end through
                  an internal spigot, securely bolted in place.
                </p>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Easy to erect with four-way connections at the same level — ideal for access platforms, formwork
                  support, circular scaffolding and versatile staging around any structure.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <SpecList label="Verticals" items={verticals} />
                <SpecList label="Horizontals" items={horizontals} />
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

function SpecList({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-border bg-secondary/40 p-5">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">{label}</p>
      <ul className="space-y-1">
        {items.map((v) => (
          <li key={v} className="flex items-center gap-2 py-1 text-sm text-foreground">
            <CheckCircle2 className="size-3.5 shrink-0 text-gold" />
            {v}
          </li>
        ))}
      </ul>
    </div>
  )
}

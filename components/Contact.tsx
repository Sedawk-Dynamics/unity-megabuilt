'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle2,
  ArrowUpRight,
} from 'lucide-react'
import { Container } from './ui/container'
import { SectionHeading } from './ui/section-heading'
import { Reveal } from './ui/reveal'
import { Button } from './ui/button'
import { siteConfig, offices, phones } from '@/lib/site'
import { cn } from '@/lib/utils'

const inputClass =
  'w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 transition-all duration-300 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20'

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const form = e.currentTarget
    const data = new FormData(form)

    const name = String(data.get('name') ?? '')
    const phone = String(data.get('phone') ?? '')
    const company = String(data.get('company') ?? '')
    const message = String(data.get('message') ?? '')

    const subject = `Scaffolding enquiry from ${
      name || 'website visitor'
    }`

    const body = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Company / Project: ${company}`,
      '',
      'Message:',
      message,
    ].join('\n')

    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`

    setSent(true)
    form.reset()

    setTimeout(() => {
      setSent(false)
    }, 4000)
  }

  return (
    <section
      id="contact"
      className="relative isolate z-10 scroll-mt-24 overflow-hidden py-24 pb-44 sm:py-28 sm:pb-52"
    >
      {/* Background blur effect */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-gold/10 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-gold/10 blur-[120px]" />
      </div>

      <Container>
        <SectionHeading
          eyebrow="Get in Touch"
          title={
            <>
              Let’s build something{' '}
              <span className="text-gradient-gold">
                strong together
              </span>
            </>
          }
          description="Reach out for pricing, rental terms, or an on-site consultation — we usually respond the same day."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* LEFT SIDE */}
          <Reveal direction="right" className="space-y-5">
            <InfoCard title="Our Locations" icon={MapPin}>
              <ul className="space-y-4">
                {offices.map((office) => (
                  <li key={office.label}>
                    <p className="text-sm font-semibold text-foreground">
                      {office.label}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {office.address}
                    </p>
                  </li>
                ))}
              </ul>
            </InfoCard>

            <div className="grid gap-5 sm:grid-cols-2">
              <InfoCard title="Phone" icon={Phone}>
                <div className="space-y-4">
                  {phones.map((contact) => (
                    <div key={contact.name}>
                      <p className="text-sm font-semibold text-foreground">
                        {contact.name}
                      </p>

                      <div className="mt-1 flex flex-col gap-1">
                        {contact.numbers.map((number) => (
                          <a
                            key={number}
                            href={`tel:+91${number}`}
                            className="text-sm text-muted-foreground transition-colors hover:text-gold"
                          >
                            +91 {number}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </InfoCard>

              <InfoCard title="Email" icon={Mail}>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="group inline-flex items-center gap-1 break-all text-sm text-muted-foreground transition-colors hover:text-gold"
                >
                  {siteConfig.email}

                  <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>

                <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                  Prefer a callback? Drop us a message and we’ll
                  reach out with a tailored quote.
                </p>
              </InfoCard>
            </div>
          </Reveal>

          {/* RIGHT SIDE */}
          <Reveal direction="left" delay={0.1}>
            <div className="card-premium relative z-20 overflow-hidden p-7 shadow-soft sm:p-9">
              {/* Floating blur */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />

              <p className="text-xl font-semibold text-foreground">
                Send us a message
              </p>

              <p className="mt-2 text-sm text-muted-foreground">
                Tell us about your scaffolding requirements.
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-6 space-y-5"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Full Name" htmlFor="name">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className={inputClass}
                    />
                  </Field>

                  <Field
                    label="Phone Number"
                    htmlFor="phone"
                  >
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 00000 00000"
                      className={inputClass}
                    />
                  </Field>
                </div>

                <Field
                  label="Company / Project"
                  htmlFor="company"
                >
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Company name or project"
                    className={inputClass}
                  />
                </Field>

                <Field label="Message" htmlFor="message">
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell us about your requirements..."
                    className={cn(
                      inputClass,
                      'resize-none'
                    )}
                  />
                </Field>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                >
                  <Send className="size-4" />
                  Send Enquiry
                </Button>

                <AnimatePresence>
                  {sent && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{ opacity: 0 }}
                      className="flex items-center justify-center gap-2 text-sm text-gold"
                    >
                      <CheckCircle2 className="size-4" />
                      Opening your email app — just hit
                      send!
                    </motion.p>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

function InfoCard({
  title,
  icon: Icon,
  children,
}: {
  title: string
  icon: typeof MapPin
  children: React.ReactNode
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="card-premium relative z-20 h-full overflow-hidden p-6"
    >
      <div className="mb-5 flex items-center gap-3">
        <span className="flex size-10 items-center justify-center rounded-xl border border-gold/20 bg-gold/10 text-gold">
          <Icon className="size-5" />
        </span>

        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground">
          {title}
        </p>
      </div>

      {children}
    </motion.div>
  )
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string
  htmlFor: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-xs font-medium text-muted-foreground"
      >
        {label}
      </label>

      {children}
    </div>
  )
}
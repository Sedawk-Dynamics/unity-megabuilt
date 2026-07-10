'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ArrowUpRight,
} from 'lucide-react'
import { Container } from './ui/container'
import { Reveal } from './ui/reveal'
import { Button } from './ui/button'
import { SocialLinks } from './ui/social-links'
import { siteConfig, offices, phones, web3formsKey } from '@/lib/site'
import { cn } from '@/lib/utils'

const inputClass =
  'w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 transition-all duration-300 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)
    const name = String(formData.get('name') ?? '').trim()

    // Web3Forms delivers the submission straight to our inbox — no mail client.
    formData.append('access_key', web3formsKey)
    formData.append('from_name', siteConfig.name)
    formData.append('subject', `New enquiry from ${name || 'website visitor'} — ${siteConfig.name}`)

    setStatus('submitting')
    setError('')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      })
      const data = await res.json()

      if (data.success) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
        setError(data.message || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setError('Network error — please try again, or email us directly.')
    }
  }

  return (
    <section
      id="contact"
      className="relative isolate z-10 scroll-mt-24 overflow-hidden pb-24 sm:pb-28"
    >
      {/* Background blur effect */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-gold/10 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-gold/10 blur-[120px]" />
      </div>

      <Container>
        <div className="grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr]">
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
                      {contact.role && (
                        <p className="text-[11px] font-medium uppercase tracking-wide text-gold">
                          {contact.role}
                        </p>
                      )}

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
                <div className="flex flex-col gap-2">
                  {siteConfig.emails.map((email) => (
                    <a
                      key={email}
                      href={`mailto:${email}`}
                      className="group inline-flex items-center gap-1 break-all text-sm text-muted-foreground transition-colors hover:text-gold"
                    >
                      {email}

                      <ArrowUpRight className="size-3.5 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  ))}
                </div>

                <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                  Prefer a callback? Drop us a message and we’ll
                  reach out with a tailored quote.
                </p>
              </InfoCard>
            </div>

            <div className="card-premium relative z-20 overflow-hidden p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground">
                Follow us
              </p>
              <p className="mt-1.5 text-sm text-muted-foreground">
                See our latest projects and product updates.
              </p>
              <SocialLinks className="mt-4" />
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
                {/* Honeypot spam trap — hidden from real users */}
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

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

                  <Field label="Email" htmlFor="email">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      className={inputClass}
                    />
                  </Field>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Phone Number" htmlFor="phone">
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 00000 00000"
                      className={inputClass}
                    />
                  </Field>

                  <Field label="Company / Project" htmlFor="company">
                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Company name or project"
                      className={inputClass}
                    />
                  </Field>
                </div>

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
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="size-4 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send className="size-4" />
                      Send Enquiry
                    </>
                  )}
                </Button>

                <AnimatePresence mode="wait">
                  {status === 'success' && (
                    <motion.p
                      key="success"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center justify-center gap-2 text-center text-sm text-gold"
                    >
                      <CheckCircle2 className="size-4 shrink-0" />
                      Thanks! Your enquiry has been sent — we’ll get back to you shortly.
                    </motion.p>
                  )}
                  {status === 'error' && (
                    <motion.p
                      key="error"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center justify-center gap-2 text-center text-sm text-red-500"
                    >
                      <AlertCircle className="size-4 shrink-0" />
                      {error}
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
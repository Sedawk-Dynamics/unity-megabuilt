'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  Mail,
  Phone,
  ArrowRight,
  ArrowUp,
} from 'lucide-react'
import { Container } from './ui/container'
import { Button } from './ui/button'
import { SocialLinks } from './ui/social-links'
import {
  siteConfig,
  navLinks,
  phones,
} from '@/lib/site'
import {
  viewportOnce,
  easeOut,
} from '@/lib/motion'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t border-border bg-secondary/30">
      <Container>
        {/* CTA band */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{
            duration: 0.7,
            ease: easeOut,
          }}
          className="card-premium relative mt-12 overflow-hidden p-8 shadow-card sm:p-12"
        >
          {/* glow */}
          <div className="pointer-events-none absolute -right-20 -top-24 size-72 rounded-full bg-gold/15 blur-3xl" />

          <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Ready to start your next project?
              </h2>

              <p className="mt-2 max-w-md text-muted-foreground">
                Get a tailored quote with flexible rental
                terms — no advance required.
              </p>
            </div>

            <Button
              href="/contact"
              size="lg"
              className="shrink-0"
            >
              Get a Free Quote
              <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </motion.div>

        {/* Main footer */}
        <div className="grid gap-10 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Image
              src={siteConfig.logo}
              alt={siteConfig.legalName}
              width={200}
              height={56}
              className="h-11 w-auto object-contain"
            />

            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Your trusted partner for
              high-quality M.S. & Aluminium
              scaffolding rental,
              manufacturing and supply across
              Mumbai, Thane & Nashik.
            </p>

            <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-3.5 py-1.5 text-xs font-medium text-gold">
              {siteConfig.tagline}
            </p>

            <SocialLinks className="mt-6" />
          </div>

          {/* Quick links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Quick Links
            </p>

            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <span className="h-px w-0 bg-gold transition-all duration-300 group-hover:w-4" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Contact
            </p>

            <ul className="mt-5 space-y-3.5">
              {siteConfig.emails.map((email) => (
                <li key={email} className="flex items-start gap-3">
                  <Mail className="mt-0.5 size-4 shrink-0 text-gold" />

                  <a
                    href={`mailto:${email}`}
                    className="break-all text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {email}
                  </a>
                </li>
              ))}

              {phones.map((c) =>
                c.numbers.map((n) => (
                  <li
                    key={n}
                    className="flex items-start gap-3"
                  >
                    <Phone className="mt-0.5 size-4 shrink-0 text-gold" />

                    <a
                      href={`tel:+91${n}`}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      +91 {n}
                    </a>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-border py-7 sm:flex-row">
          <p className="text-center text-xs text-muted-foreground sm:text-left">
            © {year}{' '}
            {siteConfig.legalName}. All rights
            reserved.
          </p>

          <p className="text-center text-xs text-muted-foreground">
            New Aditya Enterprises & Amit
            Enterprises
          </p>

          <a
            href="#top"
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-gold/50 hover:text-foreground"
          >
            Back to top
            <ArrowUp className="size-3.5" />
          </a>
        </div> 
        
      </Container>
    </footer>
  )
}
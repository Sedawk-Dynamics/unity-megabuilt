import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.legalName} — Premium Scaffolding Solutions`,
    short_name: siteConfig.name,
    description:
      'High-quality M.S. & Aluminium scaffolding rental, manufacturing and supply across Mumbai, Thane & Nashik.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fafaf7',
    theme_color: '#2a2724',
    icons: [
      { src: '/icon-light-32x32.png', sizes: '32x32', type: 'image/png' },
      { src: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
    ],
  }
}

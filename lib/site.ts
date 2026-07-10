export const siteConfig = {
  name: 'Unity Megabuilt',
  legalName: 'Unity Megabuilt Private Limited',
  tagline: 'Safe. Durable. Delivered.',
  /** Primary email — used for JSON-LD and the mailto subject line. */
  email: 'unitymegabuild1@gmail.com',
  /** All contact emails, shown across the site. */
  emails: ['unitymegabuild1@gmail.com', 'acc.unitymegabuilt@gmail.com'],
  logo: '/logo.png',
}

export const navLinks = [
  { label: 'About', href: '/#about', id: 'about' },
  { label: 'Services', href: '/#services', id: 'services' },
  { label: 'Products', href: '/products', id: 'products' },
  { label: 'Gallery', href: '/#gallery', id: 'gallery' },
  { label: 'Reviews', href: '/#testimonials', id: 'testimonials' },
  { label: 'Contact', href: '/contact', id: 'contact' },
] as const

/** Web3Forms public access key for the contact form (safe to expose in client code). */
export const web3formsKey =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? '7d6c61ba-0c24-4534-a36b-764173b530e7'

export type Phone = { name: string; role?: string; numbers: string[] }

export const phones: Phone[] = [
  { name: 'Amit Pandey', numbers: ['7021054511'] },
  { name: 'Ramgopal Chaudhary', numbers: ['9373720196'] },
  { name: 'Anil Kumar Pandey', role: 'A.K. Pandey', numbers: ['9867781299'] },
  { name: 'Sales Head', numbers: ['9628578099'] },
  { name: 'Office Executive', numbers: ['7599700045'] },
]

export const offices = [
  {
    label: 'Workshop — Ayodhya',
    address: 'Plot No. 564, Ranopali, Ayodhya Dham Road, Near Bhavdiya Public School, Ayodhya (U.P.)',
  },
  {
    label: 'Workshop — Khalilabad',
    address: 'Plot No. D-50, Khalilabad Industrial Area, Khalilabad – 272175',
  },
  {
    label: 'Workshop — Mumbai',
    address: 'Shop No. A-18, Anna Sagar Scrap Market, K A Road, Jarmari, Kurla (W), Mumbai – 400 072',
  },
  {
    label: 'Workshop — Thane',
    address: 'New Anna Sagar Market, Uttarshiv Naka, Mumbra–Panvel Road, Dist. Thane',
  },
  {
    label: 'Workshop — Nashik',
    address: 'Plot No. 34, 23/B/23/C/1, Near Maharashtra Weight Bridge, Nashik',
  },
  {
    label: 'Workshop — Pune',
    address: 'S. No. 311/1A/4, Uruli Devachi, Pune',
  },
]

export const socials = [
  { key: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/unitymegabuilt/?hl=en' },
  { key: 'x', label: 'X (Twitter)', href: 'https://x.com/unitymegabuilt' },
  { key: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/unitymegabuilt/' },
  { key: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/company/unity-megabuilt-pvt-ltd/' },
] as const

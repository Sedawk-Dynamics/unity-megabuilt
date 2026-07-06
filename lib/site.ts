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

export const phones = [
  { name: 'A.K. Pandey', numbers: ['9867781299', '6386810163'] },
  { name: 'Amit Pandey', numbers: ['7021054511'], tel: '28594247' },
]

export const offices = [
  {
    label: 'Workshop — Ayodhya',
    address: 'Plot No. 564, Ranopali, Ayodhya Dham Road, Near Bhavdiya Public School, Ayodhya (U.P.)',
  },
  {
    label: 'Registered Office — Khalilabad',
    address: 'Plot No. D-50, Khalilabad Industrial Area, Khalilabad – 272175',
  },
  {
    label: 'Office — Mumbai',
    address: 'Shop No. A-18, Anna Sagar Scrap Market, K A Road, Jarmari, Kurla (W), Mumbai – 400 072',
  },
  {
    label: 'Godown — Thane',
    address: 'New Anna Sagar Market, Uttarshiv Naka, Mumbra–Panvel Road, Dist. Thane',
  },
  {
    label: 'Godown — Nashik',
    address: 'Plot No. 34, 23/B/23/C/1, Near Maharashtra Weight Bridge, Nashik',
  },
  {
    label: 'Godown — Pune',
    address: 'S. No. 311/1A/4, Uruli Devachi, Pune',
  },
]

export const socials = [
  { key: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/unitymegabuilt/?hl=en' },
  { key: 'x', label: 'X (Twitter)', href: 'https://x.com/unitymegabuilt' },
  { key: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/unitymegabuilt/' },
  { key: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/company/unity-megabuilt-pvt-ltd/' },
] as const

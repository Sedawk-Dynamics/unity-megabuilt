import {
  Layers,
  ArrowUpDown,
  Construction,
  Frame,
  Anchor,
  Truck,
  Wrench,
  Package,
  Cog,
  type LucideIcon,
} from 'lucide-react'

/** A top-level product family shown as a filter chip. */
export type ProductCategory = {
  name: string
  icon: LucideIcon
  blurb: string
}

export const categories: ProductCategory[] = [
  { name: 'Cuplock System', icon: Layers, blurb: 'Fast four-way scaffolding — verticals, ledgers and standards.' },
  { name: 'Props & Spans', icon: ArrowUpDown, blurb: 'Adjustable supports that carry slab and beam loads.' },
  { name: 'Shuttering & Formwork', icon: Construction, blurb: 'Plates, soldiers and ply that shape your concrete.' },
  { name: 'Frames & Access', icon: Frame, blurb: 'Frames, gratings and walkways for safe access.' },
  { name: 'Jacks', icon: Anchor, blurb: 'Base and U-head jacks for levelling and load transfer.' },
  { name: 'Material Handling', icon: Truck, blurb: 'Trolleys, barrows and trays to move material on site.' },
  { name: 'Fittings & Accessories', icon: Wrench, blurb: 'Couplers, clamps and clamping devices.' },
  { name: 'Raw Material', icon: Package, blurb: 'M.S. sections supplied and cut to size.' },
  { name: 'Construction Machines', icon: Cog, blurb: 'Rebar and cutting machinery for the jobsite.' },
]

export type Product = {
  slug: string
  name: string
  category: string
  desc: string
  spec?: string
  /** Photo under /public/images/products — falls back to a branded tile if missing. */
  image: string
}

/**
 * Catalogue compiled from the on-site product photos. Items tagged "DELETE"
 * in the source sheet are intentionally excluded; duplicate shots are merged.
 * Image paths point at the uploaded files (spaces are URL-encoded as %20).
 */
export const products: Product[] = [
  // ── Cuplock System ──────────────────────────────────────────────
  {
    slug: 'ms-cuplock-vertical',
    name: 'MS Cuplock Vertical',
    category: 'Cuplock System',
    desc: 'Vertical standard with a welded bottom cup and captive top cup for rigid four-way connections. Spigot-jointed for any height.',
    spec: '0.5m – 3.0m',
    image: '/images/products/MS%20CUPLOCK%20VERTICAL.jpeg',
  },
  {
    slug: 'ms-cuplock-ledger',
    name: 'MS Cuplock Ledger',
    category: 'Cuplock System',
    desc: 'Horizontal ledger with forged blade ends that lock into the cuplock joint — fast, secure and tool-free assembly.',
    spec: '0.6m – 2.5m',
    image: '/images/products/MS%20CUPLOCK%20LEDGER.jpeg',
  },
  {
    slug: 'ms-vertical',
    name: 'MS Vertical',
    category: 'Cuplock System',
    desc: 'Heavy-duty M.S. vertical standards for tube-and-coupler and cuplock scaffolds, finished for a long rental life.',
    spec: 'IS 1239 / 1161',
    image: '/images/products/MS%20VERTICAL.jpeg',
  },

  // ── Props & Spans ───────────────────────────────────────────────
  {
    slug: 'ms-props',
    name: 'MS Props',
    category: 'Props & Spans',
    desc: 'Adjustable steel props for slab and beam support. Telescopic with pin-and-nut height locking.',
    spec: '1.5m – 4.8m',
    image: '/images/products/MS%20PROPS.jpeg',
  },
  {
    slug: 'ms-acro-span',
    name: 'MS Acro Span',
    category: 'Props & Spans',
    desc: 'Adjustable telescopic lattice span that carries slab loads across wide, prop-free openings.',
    spec: 'Adjustable',
    image: '/images/products/MS%20ACRO%20SPAN.jpeg',
  },
  {
    slug: 'ms-fix-span',
    name: 'MS Fix Span',
    category: 'Props & Spans',
    desc: 'Fixed-length span beam for repetitive formwork bays where the opening is a standard size.',
    spec: 'Fixed length',
    image: '/images/products/MS%20FIX%20SPAN.jpeg',
  },
  {
    slug: 'ms-acro-bridge-plate',
    name: 'MS Acro Bridge Plate',
    category: 'Props & Spans',
    desc: 'Perforated bridging plate that links spans and props into a continuous slab-support deck.',
    spec: 'Perforated',
    image: '/images/products/MS%20ACRO%20BRIDGE%20PLATE.jpeg',
  },

  // ── Shuttering & Formwork ───────────────────────────────────────
  {
    slug: 'ms-soldier',
    name: 'MS Soldier',
    category: 'Shuttering & Formwork',
    desc: 'Soldier walers that stiffen and align column and wall shutters against concrete pressure.',
    spec: 'Various',
    image: '/images/products/MS%20SOILDJER.jpeg',
  },
  {
    slug: 'ms-boiler',
    name: 'MS Boiler',
    category: 'Shuttering & Formwork',
    desc: 'Channel-section steel shuttering for boiler and beam casting — stacked and crated for transport.',
    spec: 'Custom',
    image: '/images/products/MS%20BOILER.jpeg',
  },
  {
    slug: 'ms-pharma',
    name: 'MS Pharma',
    category: 'Shuttering & Formwork',
    desc: 'Curved, semi-circular column formwork plates for clean circular concrete columns.',
    spec: 'Circular',
    image: '/images/products/MS%20PHARMA.jpeg',
  },
  {
    slug: 'shuttering-plywood',
    name: 'Shuttering Plywood',
    category: 'Shuttering & Formwork',
    desc: 'Phenol-bonded BWP-grade film-faced ply for beams, columns, slabs and walls. Standard 8×4 ft sheets.',
    spec: '9 / 12 / 18 mm',
    image: '/images/products/SHUTTERING%20PLYWOOD.jpeg',
  },

  // ── Frames & Access ─────────────────────────────────────────────
  {
    slug: 'ms-h-frame',
    name: 'MS H Frame',
    category: 'Frames & Access',
    desc: 'H-frame for rapid tower scaffolding and shoring. Standard module with cross bracings for lateral stability.',
    spec: '2m × 1m',
    image: '/images/products/MS%20H%20FRAME%202MTR%20X%201%20MTR.jpeg',
  },
  {
    slug: 'ms-falli-jalli',
    name: 'MS Falli (Jalli)',
    category: 'Frames & Access',
    desc: 'Welded grating / ladder panel used as access and walkway grating on scaffolds.',
    spec: 'Custom',
    image: '/images/products/MS%20FALLI%20(JALLI).jpeg',
  },

  // ── Jacks ───────────────────────────────────────────────────────
  {
    slug: 'ms-base-jack',
    name: 'MS Base Jack',
    category: 'Jacks',
    desc: 'Adjustable base-plate jack that levels scaffolding and props on uneven ground.',
    spec: 'Adjustable',
    image: '/images/products/MS%20BASE%20JACK.jpeg',
  },
  {
    slug: 'ms-u-jack',
    name: 'MS U Jack',
    category: 'Jacks',
    desc: 'U-head screw jack that cradles spans and beams while allowing fine height adjustment.',
    spec: 'Adjustable',
    image: '/images/products/MS%20U%20JACK.jpeg',
  },

  // ── Material Handling ───────────────────────────────────────────
  {
    slug: 'ms-trolley',
    name: 'MS Trolley',
    category: 'Material Handling',
    desc: 'Heavy-gauge steel concrete / material trolley for moving loads around the site.',
    spec: 'Heavy-duty',
    image: '/images/products/MS%20TROLLEY.jpeg',
  },
  {
    slug: 'ms-trolley-wheel-barrow',
    name: 'MS Trolley Wheel Barrow',
    category: 'Material Handling',
    desc: 'Single-wheel barrow with a pneumatic tyre for concrete, sand and aggregate.',
    spec: 'Pneumatic tyre',
    image: '/images/products/MS%20TROLLEY%20WHEEL%20BARROW.jpeg',
  },
  {
    slug: 'ms-tray',
    name: 'MS Tray',
    category: 'Material Handling',
    desc: 'Steel carrying tray with side handles for mortar, concrete and debris.',
    spec: 'With handles',
    image: '/images/products/MS%20TRAY.jpeg',
  },

  // ── Fittings & Accessories ──────────────────────────────────────
  {
    slug: 'couplers-clamps',
    name: 'Couplers & Clamps',
    category: 'Fittings & Accessories',
    desc: 'Full range of forged and pressed steel clamps — fixed, swivel, single, sleeve, putlog and beam couplers.',
    spec: 'Forged & Pressed',
    image: '/images/products/NAME%20AND%20IMAGES%20ARE%20ALREADY%20THERE%20PLEASE%20EDIT.jpeg',
  },
  {
    slug: 'ms-shikanja',
    name: 'MS Shikanja',
    category: 'Fittings & Accessories',
    desc: 'Adjustable clamping device for holding shutters and members tight during casting.',
    spec: '2 / 3 / 4 ft',
    image: '/images/products/MS%20SHIKANJA.jpeg',
  },

  // ── Raw Material ────────────────────────────────────────────────
  {
    slug: 'ms-square-tube',
    name: 'MS Square Tube',
    category: 'Raw Material',
    desc: 'M.S. square hollow sections for fabrication, frames and bracing — supplied and cut to length.',
    spec: 'Various sizes',
    image: '/images/products/MS%20SQUARE%20TUBE.jpeg',
  },

  // ── Construction Machines ───────────────────────────────────────
  {
    slug: 'bar-bending-machine',
    name: 'Bar Bending Machine',
    category: 'Construction Machines',
    desc: 'Automatic steel bar bender with angle and auto / manual conversion for fast rebar work.',
    spec: 'Up to 42 mm',
    image: '/images/products/BAR%20BENDING%20MACHINE.jpeg',
  },
  {
    slug: 'bar-threading-machine',
    name: 'Bar Threading Machine',
    category: 'Construction Machines',
    desc: 'Bar cutting & threading machine for fast, accurate rebar preparation on site.',
    spec: 'On-site',
    image: '/images/products/BAR%20THREADING%20MACHINE.jpeg',
  },
  {
    slug: 'cutting-machine',
    name: 'Cutting & Hand Cutter Machine',
    category: 'Construction Machines',
    desc: 'Chop-saw cutting machine and hand cutter for steel, tube and tile cutting.',
    spec: 'Heavy-duty',
    image: '/images/products/CUTTING%20MACHINE%20AND%20HAND%20CUTTER%20MACHINE.jpeg',
  },
  {
    slug: 'angle-grinder-machine',
    name: 'Angle Grinder Machine',
    category: 'Construction Machines',
    desc: '850 W angle grinder supplied with a cutting, grinding and polishing accessory kit.',
    spec: '850 W',
    image: '/images/products/ANGLE%20GRINDER%20MACHINE.jpeg',
  },
]

const iconByCategory: Record<string, LucideIcon> = Object.fromEntries(
  categories.map((c) => [c.name, c.icon]),
)

/** Resolve the lucide icon for a category name (used by the placeholder tile). */
export function categoryIcon(name: string): LucideIcon {
  return iconByCategory[name] ?? Package
}

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
  Hammer,
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
  { name: 'Formwork Accessories', icon: Hammer, blurb: 'Tie rods, wing nuts and prop nuts for formwork.' },
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
  {
    slug: 'cuplock-system',
    name: 'Cuplock Scaffolding System',
    category: 'Cuplock System',
    desc: 'Complete assembled cuplock system — verticals, ledgers and braces for fast, stable access and shoring.',
    spec: 'Complete system',
    image: '/images/products/still/23_cuplock_scaffolding_assembled.jpg',
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

  // ── Formwork Accessories ────────────────────────────────────────
  {
    slug: 'tie-rods',
    name: 'Tie Rods',
    category: 'Formwork Accessories',
    desc: 'High-tensile formwork tie rods that hold wall shutters together against concrete pressure.',
    spec: 'High-tensile',
    image: '/images/products/still/28_formwork_tie_rods.jpg',
  },
  {
    slug: 'water-stopper-tie-rod',
    name: 'Water Stopper Tie Rod',
    category: 'Formwork Accessories',
    desc: 'Tie rod with a central water-stop plate for water-retaining and basement walls.',
    spec: 'With water bar',
    image: '/images/products/still/26_water_stopper_tie_rod.jpg',
  },
  {
    slug: 'wing-nut',
    name: 'Wing Nut',
    category: 'Formwork Accessories',
    desc: 'Formwork wing nut that tightens onto tie rods to clamp wall shutters securely.',
    spec: 'Cast steel',
    image: '/images/products/still/27_formwork_wing_nut.jpg',
  },
  {
    slug: 'anchor-wing-nut',
    name: 'Anchor Wing Nut',
    category: 'Formwork Accessories',
    desc: 'Anchor wing nut with a bearing plate that anchors tie rods to soldiers and walers.',
    spec: 'With plate',
    image: '/images/products/still/25_formwork_anchor_wing_nut.jpg',
  },
  {
    slug: 'prop-sleeve-nut',
    name: 'Prop Sleeve Nut',
    category: 'Formwork Accessories',
    desc: 'Adjusting sleeve nut with handle for fine height control of adjustable steel props.',
    spec: 'With handle',
    image: '/images/products/still/29_prop_sleeve_nut_with_handle.jpg',
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
    image: '/images/products/still/03_scaffolding_fittings_collage.jpg',
  },
  {
    slug: 'swivel-coupler',
    name: 'Swivel Coupler',
    category: 'Fittings & Accessories',
    desc: 'Forged swivel coupler that connects two scaffold tubes at any angle for braces and diagonals.',
    spec: 'Forged',
    image: '/images/products/still/01_swivel_coupler_galvanized.jpg',
  },
  {
    slug: 'single-coupler',
    name: 'Single Coupler',
    category: 'Fittings & Accessories',
    desc: 'Pressed single coupler for fixing transoms, putlogs and guardrails to ledgers.',
    spec: 'Pressed steel',
    image: '/images/products/still/07_single_coupler_galvanized.jpg',
  },
  {
    slug: 'putlog-coupler',
    name: 'Putlog Coupler',
    category: 'Fittings & Accessories',
    desc: 'Galvanized putlog coupler that secures putlog tubes and boards onto the scaffold.',
    spec: 'Galvanized',
    image: '/images/products/still/12_putlog_coupler_galvanized.jpg',
  },
  {
    slug: 'sleeve-coupler',
    name: 'Sleeve Coupler',
    category: 'Fittings & Accessories',
    desc: 'External sleeve coupler that joins two tubes end-to-end in a continuous run.',
    spec: 'End-to-end',
    image: '/images/products/still/06_sleeve_coupler_rubber_lined.jpg',
  },
  {
    slug: 'girder-coupler',
    name: 'Girder / Beam Coupler',
    category: 'Fittings & Accessories',
    desc: 'Girder coupler used in pairs to hang or support scaffold tubes from steel beams and girders.',
    spec: 'Beam fixing',
    image: '/images/products/still/05_girder_coupler_galvanized.jpg',
  },
  {
    slug: 'board-retaining-coupler',
    name: 'Board Retaining Coupler',
    category: 'Fittings & Accessories',
    desc: 'Holds scaffold boards down at their ends to prevent tipping and wind uplift.',
    spec: 'Galvanized',
    image: '/images/products/still/08_board_retaining_coupler.jpg',
  },
  {
    slug: 'toe-board-clamp',
    name: 'Toe Board Clamp',
    category: 'Fittings & Accessories',
    desc: 'Clamp that holds the toe board in place along the working-platform edge for fall protection.',
    spec: 'Adjustable',
    image: '/images/products/still/09_toe_board_clamp.jpg',
  },
  {
    slug: 'internal-joint-pin',
    name: 'Internal Joint Pin',
    category: 'Fittings & Accessories',
    desc: 'Internal expanding joint pin that connects two tubes end-to-end from the inside.',
    spec: 'Internal',
    image: '/images/products/still/10_internal_joint_pin_brass.jpg',
  },
  {
    slug: 'base-plate',
    name: 'Base Plate',
    category: 'Fittings & Accessories',
    desc: 'Fixed steel base plate that spreads scaffold standard loads onto the ground or sole board.',
    spec: 'Fixed',
    image: '/images/products/still/11_girder_coupler_base_plate.jpg',
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

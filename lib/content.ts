import { siteImages, type SiteImageKey } from "./site-images";

export const company = {
  name: "Stoneford Kitchens & Bathrooms",
  shortName: "Stoneford",
  phone: "01923 555 014",
  phoneHref: "tel:+441923555014",
  smsHref: "sms:+441923555014",
  email: "hello@stonefordkb.co.uk",
  tagline: "Premium kitchen & bathroom renovations",
  region: "Hertfordshire & North London",
  studio: "Design studio in Watford, Hertfordshire",
  hours: "Mon–Fri 8:30am–5:30pm · Sat by appointment",
  // NAP (Name / Address / Phone) — consistent local SEO citation details.
  addressLine: "Unit 4, Clarendon Studios, Clarendon Road",
  addressLocality: "Watford, Hertfordshire",
  postcode: "WD17 1JA",
  // Public Google Business Profile review link (placeholder for the demo).
  googleReviewUrl: "https://g.page/r/stoneford-kitchens-bathrooms/review",
  googleProfileUrl: "https://www.google.com/maps/search/?q=Stoneford+Kitchens+%26+Bathrooms+Watford",
  mapEmbed:
    "https://www.google.com/maps?q=Clarendon+Road,+Watford+WD17&z=14&output=embed",
  googleRating: "4.9",
  googleReviewCount: "87",
  responseTime: "We typically reply within a few minutes",
};

export const nav = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Transformations", href: "#transformations" },
  { label: "Process", href: "#process" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

export type Service = {
  title: string;
  copy: string;
  image: SiteImageKey;
  cta: string;
};

export const services: Service[] = [
  {
    title: "Kitchen renovations",
    copy: "Full kitchen transformations designed around how you actually live — from layout and lighting to the final worktop polish.",
    image: "kitchenIslandWarm",
    cta: "Plan my kitchen",
  },
  {
    title: "Bathroom renovations",
    copy: "Calm, hard-wearing bathrooms with premium tiling, brassware and storage that still looks beautiful in ten years.",
    image: "bathroomMarbleVanity",
    cta: "Plan my bathroom",
  },
  {
    title: "Ensuite renovations",
    copy: "Make the most of compact spaces with clever storage, walk-in showers and a quiet, hotel-style finish.",
    image: "ensuiteStorage",
    cta: "Plan my ensuite",
  },
  {
    title: "Kitchen design & fitting",
    copy: "One team takes you from 3D design and material selection through to a precise, fully managed installation.",
    image: "kitchenShaker",
    cta: "Book a design chat",
  },
  {
    title: "Bathroom design & fitting",
    copy: "Considered bathroom design with everything supplied and fitted — no chasing trades, no surprises.",
    image: "bathroomWalkInShower",
    cta: "Book a design chat",
  },
  {
    title: "Tiling & flooring",
    copy: "Expert tiling, stone and engineered wood flooring laid to a flawless, level finish throughout your home.",
    image: "flooring",
    cta: "Discuss tiling",
  },
  {
    title: "Worktops & fixtures",
    copy: "Quartz, granite and solid surface worktops with premium taps, sinks and brassware sourced and fitted for you.",
    image: "kitchenQuartzBrass",
    cta: "Explore worktops",
  },
  {
    title: "Full rip-out & installation",
    copy: "Complete strip-out, first and second fix, and a clean handover — we manage the whole project end to end.",
    image: "openPlanWood",
    cta: "Start a project",
  },
];

export type Project = {
  title: string;
  location: string;
  type: string;
  result: string;
  range: string;
  image: SiteImageKey;
};

export const projects: Project[] = [
  {
    title: "Modern Kitchen Renovation in St Albans",
    location: "St Albans",
    type: "Kitchen renovation",
    result:
      "Walls opened up to create an open-plan kitchen with a quartz island, shaker cabinetry and warm, layered lighting.",
    range: "£25k–£45k",
    image: "openPlanLivingKitchen",
  },
  {
    title: "Luxury Bathroom Upgrade in Watford",
    location: "Watford",
    type: "Bathroom renovation",
    result:
      "A walk-in shower, stone-effect tiles, brushed brass fittings and a bespoke vanity for a calm, spa-like feel.",
    range: "£12k–£25k",
    image: "bathroomDarkWalkIn",
  },
  {
    title: "Ensuite Transformation in Northwood",
    location: "Northwood",
    type: "Ensuite renovation",
    result:
      "A compact ensuite redesigned with premium storage, considered lighting and a generous walk-in shower.",
    range: "£8k–£18k",
    image: "bathroomFreestanding",
  },
];

export type Transformation = {
  title: string;
  description: string;
  before: SiteImageKey;
  after: SiteImageKey;
};

export const transformations: Transformation[] = [
  {
    title: "Dated kitchen → open-plan island",
    description:
      "A closed-off, tired kitchen reworked into a bright open-plan space with a statement island.",
    before: "beforeKitchen",
    after: "afterKitchen",
  },
  {
    title: "Old bathroom → luxury walk-in shower",
    description:
      "A dated family bathroom replaced with stone tiling, brass fittings and a walk-in shower.",
    before: "beforeBathroom",
    after: "afterBathroom",
  },
  {
    title: "Small ensuite → hotel-style ensuite",
    description:
      "An awkward, underused space transformed into a premium, hotel-inspired ensuite.",
    before: "beforeEnsuite",
    after: "afterEnsuite",
  },
];

export const whyChooseUs = [
  {
    title: "One team, design to installation",
    copy: "The people who design your space are the people who fit it — no handovers, no gaps.",
  },
  {
    title: "Clear quotes before work begins",
    copy: "A detailed, itemised quote up front so you know exactly what you're investing in.",
  },
  {
    title: "Carefully managed timelines",
    copy: "A realistic schedule with a single point of contact keeping everything on track.",
  },
  {
    title: "Premium materials & finishes",
    copy: "Quartz, stone, solid timber and quality brassware specified to last for years.",
  },
  {
    title: "Clean, respectful install team",
    copy: "Dust protection, daily tidy-ups and a team that treats your home like their own.",
  },
  {
    title: "Fully insured",
    copy: "Comprehensive public liability cover and workmanship you can rely on.",
  },
  {
    title: "Local specialists",
    copy: "Hertfordshire and North London experts who know local homes and properties.",
  },
  {
    title: "Built around your lifestyle",
    copy: "Designs shaped by how you cook, relax and live — not an off-the-shelf template.",
  },
];

export const stats = [
  { value: "10+", label: "Years of experience" },
  { value: "120+", label: "Renovations completed" },
  { value: "5-star", label: "Rated locally" },
  { value: "Fully", label: "Insured & covered" },
];

export const process = [
  {
    step: "01",
    title: "Free consultation",
    copy: "We talk through your ideas, must-haves and budget — at our studio or over a call.",
  },
  {
    step: "02",
    title: "Home survey",
    copy: "We visit, measure up and assess your space, plumbing and electrics in detail.",
  },
  {
    step: "03",
    title: "Design & quote",
    copy: "You receive a considered design with a clear, itemised, fixed quote.",
  },
  {
    step: "04",
    title: "Materials confirmed",
    copy: "We finalise finishes, worktops, tiles and fittings together and order everything.",
  },
  {
    step: "05",
    title: "Installation",
    copy: "Our team fits your kitchen or bathroom to a precise, fully managed schedule.",
  },
  {
    step: "06",
    title: "Final walkthrough",
    copy: "We walk through every detail with you and hand over a clean, finished space.",
  },
];

export type Review = {
  quote: string;
  name: string;
  location: string;
  project: string;
  image: SiteImageKey;
};

export const reviews: Review[] = [
  {
    quote:
      "From the first design meeting to the final clean, the whole kitchen project felt organised. The island and quartz worktop are exactly what we hoped for, and they stuck to the quote.",
    name: "Rachel & Tom",
    location: "St Albans",
    project: "Kitchen renovation",
    image: "afterKitchen",
  },
  {
    quote:
      "Our old bathroom was tired and cramped. The walk-in shower and brass fittings have completely changed it. The team was tidy, polite and finished on the day they promised.",
    name: "Priya M.",
    location: "Watford",
    project: "Bathroom renovation",
    image: "bathroomDarkWalkIn",
  },
  {
    quote:
      "They turned a tiny, awkward ensuite into something that feels like a boutique hotel. Brilliant use of the space and genuinely helpful advice on materials.",
    name: "James H.",
    location: "Northwood",
    project: "Ensuite renovation",
    image: "bathroomFreestanding",
  },
];

export const areas = [
  "Watford",
  "St Albans",
  "Bushey",
  "Radlett",
  "Harrow",
  "Northwood",
  "Rickmansworth",
  "Hemel Hempstead",
  "Borehamwood",
  "North London",
];

export const faqs = [
  {
    q: "Do you offer free quotes?",
    a: "Yes. We start with a free, no-obligation consultation and follow up with a clear, itemised quote. There's no charge for the initial conversation or the estimate.",
  },
  {
    q: "Can you help with design?",
    a: "Absolutely — design is where we start. We help with layout, materials, lighting and finishes, and provide visuals so you can see your kitchen or bathroom before any work begins.",
  },
  {
    q: "Do you supply and fit everything?",
    a: "Yes. We can supply and install the whole project — cabinetry, worktops, tiles, flooring, sanitaryware, brassware and lighting — so you only deal with one team from start to finish.",
  },
  {
    q: "How long does a kitchen renovation take?",
    a: "Most kitchen renovations take around 3–5 weeks on site once materials are confirmed, depending on the size of the project and any structural changes. We give you a realistic schedule with your quote.",
  },
  {
    q: "How long does a bathroom renovation take?",
    a: "A typical bathroom or ensuite takes around 2–3 weeks on site. Compact ensuites can be quicker, while fully re-tiled bathrooms with bespoke elements may take a little longer.",
  },
  {
    q: "Can we live at home during the work?",
    a: "In most cases, yes. We protect your home, keep work areas contained and tidy daily. For single-bathroom homes we'll plan the schedule carefully to minimise disruption.",
  },
  {
    q: "Are you insured?",
    a: "Yes — we're fully insured with public liability cover, and we stand behind the quality of our workmanship on every project.",
  },
  {
    q: "What budget should we expect?",
    a: "As a guide, ensuites typically start from around £8k, bathrooms from around £12k, and full kitchen renovations from around £25k. Your quote depends on size, materials and the scope of work — we'll be clear and upfront.",
  },
];

export const projectTypes = [
  "Kitchen renovation",
  "Bathroom renovation",
  "Ensuite renovation",
  "Kitchen & bathroom",
  "Not sure yet",
];

export const budgetRanges = [
  "£8k–£15k",
  "£15k–£25k",
  "£25k–£40k",
  "£40k–£60k",
  "Not sure yet",
];

export const startDates = [
  "As soon as possible",
  "Within 1–3 months",
  "In 3–6 months",
  "Just planning ahead",
];

export { siteImages };

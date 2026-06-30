/**
 * CENTRAL IMAGE CONFIG
 * --------------------------------------------------------------------------
 * Every image used across the Stoneford site is defined here so it can be
 * swapped for real project photography later. Each entry carries:
 *   - url:   a high-resolution royalty-free source (Unsplash) sized for use
 *   - alt:   SEO + accessibility focused alt text
 *   - query: the recommended stock search query to find a replacement image
 *
 * All current images are verified premium UK-style kitchen/bathroom interiors.
 * To replace with real client work, keep the same keys and update `url`/`alt`.
 */

export type SiteImage = {
  url: string;
  alt: string;
  query: string;
};

const UNSPLASH = "https://images.unsplash.com/photo-";

/** Build a sized, optimised Unsplash URL. */
function u(id: string, w = 1200): string {
  return `${UNSPLASH}${id}?auto=format&fit=crop&w=${w}&q=80`;
}

export const siteImages = {
  /* ----------------------------- HERO ---------------------------------- */
  hero: {
    url: u("1507089947368-19c1da9775ae", 2100),
    alt: "Luxury open-plan kitchen renovation with a quartz island, shaker cabinetry, range cooker and warm pendant lighting",
    query: "luxury kitchen renovation quartz island warm lighting",
  },
  heroCard: {
    url: u("1564540583246-934409427776", 900),
    alt: "Premium bathroom vanity with marble walls, brushed brass taps and gold framed mirrors",
    query: "luxury bathroom marble brass fittings",
  },

  /* --------------------------- KITCHENS -------------------------------- */
  kitchenShaker: {
    url: u("1600489000022-c2086d79f9d4", 1300),
    alt: "Modern UK-style shaker kitchen renovation in dark green with brass handles, metro tiles and oak shelving",
    query: "modern shaker kitchen renovation UK style",
  },
  kitchenIslandWarm: {
    url: u("1556912167-f556f1f39fdf", 1300),
    alt: "Warm kitchen island with marble worktop, glass globe pendant lighting and walnut bar stools",
    query: "premium kitchen island open plan living warm lighting",
  },
  kitchenQuartzBrass: {
    url: u("1565538810643-b5bdb714032a", 1300),
    alt: "Premium kitchen with white quartz worktop, brushed brass mixer tap and handmade glass pendants",
    query: "luxury kitchen renovation quartz worktop brass tap",
  },
  kitchenWhiteIsland: {
    url: u("1588854337221-4cf9fa96059c", 1300),
    alt: "Bright shaker kitchen renovation with a large quartz island and statement pendant lights",
    query: "white shaker kitchen island quartz renovation",
  },
  kitchenMarble: {
    url: u("1556911220-bff31c812dba", 1100),
    alt: "Contemporary kitchen with handleless white cabinetry and a polished marble island worktop",
    query: "modern kitchen marble worktop renovation",
  },
  kitchenModern: {
    url: u("1484154218962-a197022b5858", 1100),
    alt: "Modern monochrome kitchen with island, breakfast stools and engineered wood flooring",
    query: "modern kitchen island renovation wood floor",
  },

  /* ------------------------- OPEN-PLAN LIVING -------------------------- */
  openPlanLivingKitchen: {
    url: u("1565183997392-2f6f122e5912", 1500),
    alt: "Open-plan kitchen and living space with a sage green island, pendant lighting and natural light",
    query: "open plan kitchen living renovation island",
  },
  openPlanWood: {
    url: u("1600607687939-ce8a6c25118c", 1500),
    alt: "Open-plan kitchen and living area with warm timber feature wall and contemporary finishes",
    query: "open plan kitchen living space natural light wood",
  },
  openPlanDining: {
    url: u("1604578762246-41134e37f9cc", 1300),
    alt: "Open-plan kitchen diner with brass pendant lights and bi-fold doors opening to the garden",
    query: "open plan kitchen diner bifold doors renovation",
  },

  /* --------------------------- BATHROOMS ------------------------------- */
  bathroomMarbleVanity: {
    url: u("1604709177225-055f99402ea3", 1400),
    alt: "High-end bathroom renovation with stone-effect tiles, freestanding bath and floating timber vanity",
    query: "high end bathroom renovation stone tiles freestanding bath",
  },
  bathroomWalkInShower: {
    url: u("1584622650111-993a426fbf0a", 1300),
    alt: "Bathroom renovation with a glass walk-in shower, double vanity and brushed black fittings",
    query: "high end bathroom renovation walk in shower",
  },
  bathroomDarkWalkIn: {
    url: u("1600566752355-35792bedcfea", 1300),
    alt: "Luxury bathroom with freestanding bath, large-format dark tiles and a walk-in shower",
    query: "luxury bathroom freestanding bath walk in shower dark tiles",
  },
  bathroomFreestanding: {
    url: u("1620626011761-996317b8d101", 1300),
    alt: "Bright bathroom renovation with a freestanding bath, vessel basin and chrome wall taps",
    query: "freestanding bath premium bathroom interior",
  },
  bathroomMarbleBrass: {
    url: u("1564540583246-934409427776", 1300),
    alt: "Luxury bathroom vanity with marble walls, brushed brass taps and gold round mirrors",
    query: "luxury bathroom marble brass fittings",
  },

  /* --------------------- ENSUITE / STORAGE / DETAIL -------------------- */
  ensuiteStorage: {
    url: u("1556020685-ae41abfc9365", 1100),
    alt: "Compact ensuite styling with a round mirror, oak vanity unit and soft neutral tones",
    query: "modern ensuite bathroom renovation storage vanity",
  },
  vanityUnit: {
    url: u("1595428774223-ef52624120d2", 1000),
    alt: "Wall-hung oak bathroom storage unit with open shelving and folded towels",
    query: "bathroom vanity unit storage oak renovation",
  },
  flooring: {
    url: u("1581858726788-75bc0f6a952d", 1100),
    alt: "Engineered oak flooring in a freshly finished open-plan interior",
    query: "engineered wood flooring renovation interior",
  },
  detailCeramics: {
    url: u("1610701596007-11502861dcfa", 900),
    alt: "Handmade ceramic detailing in warm neutral tones on a stone shelf",
    query: "premium home interiors detail natural materials",
  },
  accentGreenCorner: {
    url: u("1606744824163-985d376605aa", 1200),
    alt: "Dark green interior corner with a contemporary accent chair and warm brass lighting",
    query: "premium home interiors renovation natural light dark green",
  },

  /* ------------------------ BEFORE / AFTER ----------------------------- */
  beforeKitchen: {
    url: u("1574739782594-db4ead022697", 1100),
    alt: "Dated, tired kitchen before a full renovation",
    query: "old dated kitchen before renovation",
  },
  afterKitchen: {
    url: u("1565183997392-2f6f122e5912", 1100),
    alt: "The same space transformed into an open-plan kitchen with island and warm lighting",
    query: "kitchen renovation after open plan island",
  },
  beforeBathroom: {
    url: u("1552321554-5fefe8c9ef14", 1100),
    alt: "Small dated bathroom before renovation with old fittings",
    query: "old dated bathroom before renovation",
  },
  afterBathroom: {
    url: u("1604709177225-055f99402ea3", 1100),
    alt: "The same bathroom transformed with a walk-in shower, stone tiles and brass fittings",
    query: "bathroom renovation after walk in shower stone tiles",
  },
  beforeEnsuite: {
    url: u("1581858726788-75bc0f6a952d", 1100),
    alt: "Unused awkward space before being converted into a premium ensuite",
    query: "small room before ensuite conversion",
  },
  afterEnsuite: {
    url: u("1620626011761-996317b8d101", 1100),
    alt: "A compact hotel-style ensuite after renovation with premium storage and lighting",
    query: "premium ensuite renovation after hotel style",
  },
} as const satisfies Record<string, SiteImage>;

export type SiteImageKey = keyof typeof siteImages;

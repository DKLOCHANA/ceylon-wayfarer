/**
 * SINGLE source of truth for business details.
 *
 * Replace every value in [BRACKETS] with the real detail before launch.
 * Bracketed values are shown on the site as-is so nothing untrue is ever published.
 * Never add reviews, licences, insurance, awards or stats that are not real.
 */

export const site = {
  name: "Ceylon Wayfarer",
  /** Production URL, no trailing slash. Keep in sync with `site` in astro.config.mjs. */
  url: "https://ceylonwayfarer.com",
  locale: "en",
  tagline: "Private driver",
  description:
    "Private driver in Sri Lanka: airport pickups, day trips and multi-day tours in an air-conditioned van, with an English-speaking local driver based in Kegalle.",

  owner: {
    name: "Lochana",
    role: "Your driver",
    languages: ["English", "Sinhala"],
    bio: "I’m a 26-year-old graduate from Kegalle and I’ve been driving for more than five years. I know Sri Lanka’s roads, towns and people well, and I take looking after my guests seriously. Friendly, easy to talk to, and always happy to stop for a photo.",
  },

  location: {
    town: "Kegalle",
    country: "Sri Lanka",
    countryCode: "LK",
    note: "Halfway from airport to Kandy",
  },

  contact: {
    /** Digits only, with country code and no plus sign. */
    whatsappNumber: "94772910119",
    /** How the number is shown on buttons. */
    whatsappDisplay: "+94 77 291 0119",
    /** No email yet: leave empty and the email button stays hidden. */
    email: "",
    /** Usual WhatsApp reply time, as a phrase: "within …". */
    replyTime: "1 hour",
  },

  van: {
    model: "Nissan Caravan E25",
    seats: "7",
  },

  /** What the price covers and what it doesn't (exclusions follow common practice among Sri Lankan drivers). */
  included:
    "The price covers the whole air-conditioned van and me as your driver, plus fuel, highway tolls, parking, and my own meals and room on multi-day trips. Not included: your hotels and meals, entrance tickets, safari jeeps and park fees, guide fees, train and boat tickets, and tips.",
  /** A 20% advance is the common practice among Sri Lankan private drivers. */
  payment:
    "You can pay in US dollars, euros or Sri Lankan rupees. Airport transfers need no deposit: you pay on the day. For multi-day trips, a 20% advance confirms your booking, and you pay the rest when you arrive in Sri Lanka.",

  /** Currency prices are shown in. */
  currency: "USD",

  /**
   * Price rule (whole van), in Sri Lankan rupees: distance × perKm, plus perDay × days on
   * multi-day trips. Every price is calculated from these, then shown in USD.
   */
  pricing: {
    perKm: 150,
    perDayMultiDay: 6000,
    /** Exchange rate used for display. Update when the rupee moves (check cbsl.gov.lk). */
    lkrPerUsd: 330,
    /** Trip prices are rounded to the nearest this many dollars. */
    roundUsdTo: 5,
  },

  socials: [
    { label: "Google reviews", url: "[GOOGLE REVIEWS URL]" },
    { label: "Instagram", url: "[INSTAGRAM URL]" },
    { label: "TikTok", url: "[TIKTOK URL]" },
  ],

  nav: [
    // Dropdown of all itineraries (no /itineraries page); href only marks the section as current.
    { label: "Itineraries", href: "/itineraries", menu: "itineraries" },
    { label: "About", href: "/about" },
  ],

  /** Prefilled WhatsApp messages. */
  messages: {
    general: "Hi Lochana, I’d like a quote for a private driver in Sri Lanka.",
    route: (routeTitle: string) =>
      `Hi Lochana, I’d like a quote for the ${routeTitle} route.`,
    itinerary: (title: string) =>
      `Hi Lochana, I’m interested in the ${title} itinerary. My dates are: `,
  },

  ui: {
    skipLink: "Skip to content",
    whatsappCta: "WhatsApp me",
    homeLabel: "Ceylon Wayfarer home",
    mainNavLabel: "Main",
    socialNavLabel: "Social",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    menuLabel: "Menu",
  },
} as const;

export type Site = typeof site;

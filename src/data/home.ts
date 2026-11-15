import { site } from "@/config/site";
import { existsSync } from "node:fs";
import { driver } from "@/data/driver";

/** Home page copy, section by section. */
export const home = {
  seo: {
    title: `${site.name} — Private driver in Sri Lanka`,
    description: site.description,
  },
  hero: {
    eyebrow: "PRIVATE DRIVER · SRI LANKA",
    headline: "Your driver for the",
    headlineAccent: "whole island.",
    lead: "Airport pickups, day trips and multi-day tours in an air-conditioned van, with an English-speaking local behind the wheel.",
    imageAlt:
      "A blue train crossing the Nine Arch Bridge near Ella, surrounded by jungle",
    /**
     * Background video (files in public/videos). LOCAL TEST ONLY: hero-placeholder.mp4 is cut from a
     * third-party advert and is git-ignored, so it can't be deployed. Replace with a licensed clip
     * (your own footage, Pexels or Pixabay), or remove `video` to show the photo only.
     */
    video: existsSync("public/videos/hero-placeholder.mp4")
      ? { src: "/videos/hero-placeholder.mp4", playOnPhones: false }
      : undefined,
    ticket: {
      label: "RIDE TICKET",
      labelRight: "ONE WAY",
      fromLabel: "FROM",
      fromCode: "BIA",
      fromName: "Airport",
      toLabel: "TO",
      toCode: "KDY",
      toName: "Kandy",
      fareLabel: "FARE, WHOLE VAN",
      cta: "Get a quote on WhatsApp",
      /** Slug of the route whose price the ticket shows. */
      routeId: "airport-to-kandy",
    },
  },
  marquee: { label: "Places I drive to" },
  routes: {
    eyebrow: "01 — WHERE TO?",
    title: "Pick a route. I’ll handle the road.",
    bookLabel: "Book this route",
    listLabel: "Choose a route",
  },
  island: {
    eyebrow: "02 — THE ISLAND",
    title: "Every road here ends somewhere beautiful.",
    intro:
      "Temples, tea country, wild elephants and golden beaches, all within a day’s drive of each other.",
  },
  driver: {
    eyebrow: "03 — YOUR DRIVER",
    title: `Hi, I’m ${site.owner.name}.`,
    chips: driver.chips,
    note: driver.guidesNote,
    ownerPhoto: driver.ownerPhoto,
    vanPhoto: driver.vanPhoto,
    ownerPlaceholder: driver.ownerPlaceholder,
    vanPlaceholder: driver.vanPlaceholder,
  },
  how: {
    eyebrow: "04 — HOW IT WORKS",
    title: "Booked in three messages.",
  },
  reviews: {
    eyebrow: "05 — GUESTS",
    title: "Postcards from guests.",
    allReviewsLabel: "All reviews on Google",
    emptyTitle: "Guest postcards are on their way.",
    emptyText:
      "This is a new website, so reviews from guests will appear here soon. Ask me anything on WhatsApp in the meantime.",
  },
  faq: {
    eyebrow: "06 — QUESTIONS",
    title: "Good to know.",
  },
  cta: {
    eyebrow: "READY WHEN YOU ARE",
    title: "Where to first?",
    lead: `Message me your dates and the places on your list. I usually reply within ${site.contact.replyTime}.`,
    imageAlt: "Surfboards on the beach at Mirissa at dusk",
    whatsappLabel: `WhatsApp ${site.contact.whatsappDisplay}`,
    emailLabel: `Email ${site.contact.email}`,
  },
} as const;

import { defineCollection } from "astro:content";
import { file, glob } from "astro/loaders";
import { z } from "astro/zod";
import { mapStopIds } from "@/data/mapStops";

const routes = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/routes" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      /** Ticket code, e.g. "BIA → KDY". */
      code: z.string(),
      /** Category label, e.g. "AIRPORT TRANSFER". */
      tag: z.string(),
      /** e.g. "≈ 3 H", "FULL DAY". */
      duration: z.string(),
      /** Driving distance in km; the price is calculated from it (see site.pricing). */
      distanceKm: z.number().positive().optional(),
      /** Days the trip lasts (default 1). Multi-day trips add the daily charge. */
      days: z.number().int().positive().optional(),
      /** Fixed price or rate text, used only when there's no distanceKm (e.g. the per-day island loop). */
      priceFrom: z.union([z.number().positive(), z.string()]).optional(),
      /** e.g. "FROM, WHOLE VAN", "PER DAY". */
      priceLabel: z.string(),
      image: image(),
      imageAlt: z.string(),
      /** Short place label on the photo, e.g. "KANDY LAKE". */
      place: z.string(),
      order: z.number().int(),
      summary: z.string(),
    }),
});

/** One day (or a pair like "12–13") of an itinerary. */
const itineraryDay = z.object({
  day: z.string(),
  title: z.string(),
  from: z.string(),
  to: z.string(),
  /** Map stops this day passes, in order (ids from src/data/mapStops.ts). */
  path: z.array(z.enum(mapStopIds)).min(1),
  distanceKm: z.number().nonnegative(),
  driveTime: z.string(),
  highlights: z.array(z.string()),
  description: z.string(),
  /** Empty on the last day (guests fly home). */
  overnight: z.string(),
  tip: z.string(),
  /** File name in src/assets/images (see src/data/photos.ts); falls back to heroImage. */
  image: z.string().optional(),
});

/** Sample multi-day trips, all in one file: src/content/itineraries.yaml. */
const itineraries = defineCollection({
  loader: file("src/content/itineraries.yaml"),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    order: z.number().int(),
    days: z.number().int().positive(),
    nights: z.number().int().nonnegative(),
    summary: z.string(),
    start: z.string(),
    end: z.string(),
    totalDistanceKm: z.number().positive(),
    /** "Months — why", e.g. "December–April — dry season in the hills". */
    bestMonths: z.string(),
    heroImage: z.string(),
    mapStops: z.array(z.object({ name: z.string() })),
    itinerary: z.array(itineraryDay).min(1),
  }),
});

export const collections = { routes, itineraries };

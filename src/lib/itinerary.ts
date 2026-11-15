import type { CollectionEntry } from "astro:content";
import { getPhoto, type Photo } from "@/data/photos";
import { itineraryPage } from "@/data/itineraryPage";
import { url } from "@/lib/url";

type Itinerary = CollectionEntry<"itineraries">["data"];
type Day = Itinerary["itinerary"][number];

/** "December–April — dry season…" → { short: "December–April", why: "Dry season…" } */
export function splitBestMonths(bestMonths: string): {
  short: string;
  why: string;
} {
  const [short = bestMonths, ...rest] = bestMonths.split(" — ");
  const why = rest.join(" — ");
  return { short, why: why ? why.charAt(0).toUpperCase() + why.slice(1) : "" };
}

/** "~2.5 h" → "≈ 2.5 H" */
export function formatDriveTime(driveTime: string): string {
  return driveTime.replace("~", "≈ ").toUpperCase();
}

/** "160 KM · ≈ 4 H DRIVE" */
export function dayMeta(day: Day): string {
  return `${day.distanceKm} KM · ${formatDriveTime(day.driveTime)} ${itineraryPage.planner.driveLabel}`;
}

/** "OVERNIGHT · SIGIRIYA", or "FLY HOME" on the last day. */
export function nightLabel(day: Day): string {
  const p = itineraryPage.planner;
  return day.overnight
    ? `${p.overnightLabel} · ${day.overnight.toUpperCase()}`
    : p.flyHomeLabel;
}

/** The day's photo, or the trip's hero photo when the day has none. */
export function dayPhoto(day: Day, trip: Itinerary): Photo {
  return getPhoto(day.image ?? trip.heroImage);
}

/** "7 DAYS · 6 NIGHTS" */
export function tripMeta(trip: Itinerary): string {
  return `${trip.days} DAYS · ${trip.nights} NIGHTS`;
}

export function itineraryHref(slug: string): string {
  return url(`/itineraries/${slug}`);
}

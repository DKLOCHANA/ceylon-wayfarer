import { site } from "@/config/site";

/** True for values still waiting for the owner, e.g. "[YOUR PRICE]". */
export function isPlaceholder(
  value: string | number | undefined | null,
): boolean {
  return typeof value !== "number" && (!value || /\[[^\]]*\]/.test(value));
}

/** Formats a route price. Numbers use the site currency; text (incl. placeholders) is shown as-is. */
export function formatPrice(
  price: number | string,
  currency: string = site.currency,
): string {
  if (typeof price === "string") return price;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(price);
}

/** Whole-van price for a trip: km × rate, plus a daily charge when it lasts more than one day. */
export function tripPrice(distanceKm: number, days = 1): number {
  const { perKm, perDayMultiDay } = site.pricing;
  return distanceKm * perKm + (days > 1 ? days * perDayMultiDay : 0);
}

/** Display price for a route: calculated from its distance, or its fixed text (e.g. a rate). */
export function routePrice(route: {
  distanceKm?: number | undefined;
  days?: number | undefined;
  priceFrom?: number | string | undefined;
}): string {
  if (route.distanceKm !== undefined)
    return formatPrice(tripPrice(route.distanceKm, route.days));
  return formatPrice(route.priceFrom ?? "");
}

/** "mailto:" link, or undefined while the email is still a placeholder. */
export function mailtoLink(email: string): string | undefined {
  return isPlaceholder(email) ? undefined : `mailto:${email}`;
}

/** External URL, or undefined while it is still a placeholder. */
export function realUrl(url: string): string | undefined {
  return isPlaceholder(url) ? undefined : url;
}

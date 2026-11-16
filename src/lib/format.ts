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

/** LKR → USD at the site rate, rounded to the nearest roundUsdTo dollars. */
export function toUsd(lkr: number): number {
  const { lkrPerUsd, roundUsdTo } = site.pricing;
  return Math.max(
    roundUsdTo,
    Math.round(lkr / lkrPerUsd / roundUsdTo) * roundUsdTo,
  );
}

/** Whole-van price for a trip in USD: (km × rate, plus a daily charge on multi-day trips) in LKR, converted. */
export function tripPrice(distanceKm: number, days = 1): number {
  const { perKm, perDayMultiDay } = site.pricing;
  return toUsd(distanceKm * perKm + (days > 1 ? days * perDayMultiDay : 0));
}

/** The pricing rule as a rate, e.g. "$18/day + $0.45/km" (for open-ended trips like the island loop). */
export function rateText(): string {
  const { perKm, perDayMultiDay, lkrPerUsd } = site.pricing;
  const fmt = (n: number, digits: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: site.currency,
      minimumFractionDigits: digits,
      maximumFractionDigits: digits,
    }).format(n);
  return `${fmt(Math.round(perDayMultiDay / lkrPerUsd), 0)}/day + ${fmt(perKm / lkrPerUsd, 2)}/km`;
}

/** Display price for a route: a fixed priceFrom (USD) wins, else calculated from distance, else the rate. */
export function routePrice(route: {
  distanceKm?: number | undefined;
  days?: number | undefined;
  priceFrom?: number | string | undefined;
}): string {
  if (route.priceFrom !== undefined) return formatPrice(route.priceFrom);
  if (route.distanceKm !== undefined)
    return formatPrice(tripPrice(route.distanceKm, route.days));
  return rateText();
}

/** "mailto:" link, or undefined while the email is still a placeholder. */
export function mailtoLink(email: string): string | undefined {
  return isPlaceholder(email) ? undefined : `mailto:${email}`;
}

/** External URL, or undefined while it is still a placeholder. */
export function realUrl(url: string): string | undefined {
  return isPlaceholder(url) ? undefined : url;
}

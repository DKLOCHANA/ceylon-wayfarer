/**
 * Site-internal links that work at any base path: "/" on a custom domain,
 * "/ceylon-wayfarer/" on GitHub Pages (set by the BASE_PATH env var in astro.config.mjs).
 */
const base = import.meta.env.BASE_URL.replace(/\/$/, "");

/** "/about" → "/ceylon-wayfarer/about". External links and "#anchors" are returned unchanged. */
export function url(path: string): string {
  if (/^(https?:|mailto:|tel:|#)/.test(path)) return path;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

/** "/ceylon-wayfarer/about/" → "/about" (for comparing the current page with nav links). */
export function stripBase(pathname: string): string {
  const p =
    base && pathname.startsWith(base) ? pathname.slice(base.length) : pathname;
  return p.replace(/\/$/, "") || "/";
}

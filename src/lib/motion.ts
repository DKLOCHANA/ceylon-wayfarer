/**
 * Stagger helpers for the motion utilities in global.css.
 * Class names are listed in full so Tailwind can find them (it can't see classes built at runtime).
 */

const enterSteps = [
  "enter-0",
  "enter-1",
  "enter-2",
  "enter-3",
  "enter-4",
  "enter-5",
  "enter-6",
  "enter-7",
  "enter-8",
  "enter-9",
] as const;

const revealDelays = [
  "reveal-delay-0",
  "reveal-delay-1",
  "reveal-delay-2",
  "reveal-delay-3",
  "reveal-delay-4",
] as const;

/** Page-load entrance step n (120 ms apart). */
export function enterStep(n: number): string {
  return enterSteps[Math.max(0, Math.min(n, enterSteps.length - 1))]!;
}

/** Scroll-reveal offset for the n-th item in a row (wraps after 5). */
export function revealDelay(n: number): string {
  return revealDelays[Math.max(0, n) % revealDelays.length]!;
}

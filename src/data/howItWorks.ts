import type { StepArtName } from "@/components/ui/StepArt.astro";

export interface Step {
  title: string;
  text: string;
  /** Illustration shown above the step. */
  art: StepArtName;
}

export const steps: Step[] = [
  {
    title: "Tell me your plan",
    text: "Your dates, pickup point, how many people, and the places you want to see.",
    art: "plan",
  },
  {
    title: "Get one fixed price",
    text: "I reply with one clear price for the whole trip. Agree to it, and you’re booked.",
    art: "price",
  },
  {
    title: "Enjoy the ride",
    text: "I meet you at the airport or your hotel. You watch the view, I handle the roads.",
    art: "ride",
  },
];

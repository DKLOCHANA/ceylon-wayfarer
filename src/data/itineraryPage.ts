import { site } from "@/config/site";

/**
 * Copy shared by every itinerary page and the itineraries list.
 * Trip-specific content lives in src/content/itineraries.yaml.
 */
export const itineraryPage = {
  seoTitle: (title: string) =>
    `${title} — private driver itinerary | ${site.name}`,
  breadcrumbLabel: "ITINERARIES",
  daysLabel: "DAYS",
  airportToAirport: "Airport to airport",
  bestPrefix: "Best:",

  planner: {
    eyebrow: "DAY BY DAY",
    title: "The route, one day at a time.",
    intro:
      "Tap a day to see the details and follow it on the map. Every day can be changed: tell me what you’d swap and I’ll adjust the plan.",
    dayLabel: "DAY",
    driveLabel: "DRIVE",
    tipLabel: "Tip:",
    overnightLabel: "OVERNIGHT",
    flyHomeLabel: "FLY HOME",
    onTheMap: "ON THE MAP",
    previousDay: "Previous day",
    nextDay: "Next day",
    baseLabel: `YOUR DRIVER’S BASE, ${site.location.town.toUpperCase()}`,
  },

  booking: {
    label: "PRIVATE VAN + DRIVER",
    guests: `whole van, up to ${site.van.seats} guests`,
    included: "Included: fuel, tolls, parking, and my meals and room",
    notIncluded:
      "Not included: your hotels and meals, entrance tickets, safari jeeps",
    cta: "Ask about your dates",
    note: "One fixed price, agreed on WhatsApp before you go.",
  },

  more: {
    eyebrow: "MORE ITINERARIES",
    title: "Shorter, longer, or a different season.",
    cta: "See this itinerary",
  },
};

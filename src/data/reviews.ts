/**
 * Real guest reviews only — copy them word for word from Google, with the guest's permission.
 * While this list is empty, the Reviews section shows a "reviews coming soon" card instead.
 * NEVER invent reviews or guest names.
 */
export interface Review {
  quote: string;
  name: string;
  country: string;
}

export const reviews: Review[] = [];

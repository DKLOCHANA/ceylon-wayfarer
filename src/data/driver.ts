import { site } from "@/config/site";
import { getPhoto } from "@/data/photos";

/** Facts about the driver shown on both the home page and the About page. */
export const driver = {
  chips: [
    site.owner.languages.join(" & "),
    `Based in ${site.location.town}`,
    site.location.note,
    "Replies on WhatsApp",
  ],
  /** Honest note: driver service, not a licensed guide. */
  guidesNote:
    "A driver service: at the big sites, I’ll connect you with licensed local guides.",
  /** The owner's photos (src/assets/images, listed in src/data/photos.ts). */
  ownerPhoto: getPhoto("lochana-van.webp"),
  vanPhoto: getPhoto("van.webp"),
  /** Shown wherever a real photo is still missing. */
  ownerPlaceholder:
    "PHOTO — you, smiling, beside the van.\nNatural light, no sunglasses.",
  vanPlaceholder: "PHOTO — the van,\nclean, side-on.",
} as const;

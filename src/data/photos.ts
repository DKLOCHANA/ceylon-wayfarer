import type { ImageMetadata } from "astro";
import beach from "@/assets/images/beach.jpg";
import elephants from "@/assets/images/elephants.jpg";
import galle from "@/assets/images/galle.jpg";
import hero from "@/assets/images/hero.jpg";
import horton from "@/assets/images/horton.jpg";
import lake from "@/assets/images/lake.jpg";
import leopard from "@/assets/images/leopard.jpg";
import lochanaVan from "@/assets/images/lochana-van.webp";
import nilaveli from "@/assets/images/nilaveli.jpg";
import polonnaruwa from "@/assets/images/polonnaruwa.jpg";
import sigiriya from "@/assets/images/sigiriya.jpg";
import sunset from "@/assets/images/sunset.jpg";
import tea from "@/assets/images/tea.jpg";
import temple from "@/assets/images/temple.jpg";
import van from "@/assets/images/van.webp";
import vanLocation from "@/assets/images/van-location.webp";
import vanSeats from "@/assets/images/van-seats.webp";

export interface Photo {
  image: ImageMetadata;
  alt: string;
  /** Short uppercase caption for photo chips. */
  caption: string;
}

/**
 * Every photo in src/assets/images, by file name, with its alt text and caption.
 * Content files (e.g. itineraries.yaml) refer to photos by these file names.
 * Credits: src/assets/images/CREDITS.md and src/data/photoCredits.ts.
 */
export const photos = {
  "hero.jpg": {
    image: hero,
    alt: "A blue train crossing the Nine Arch Bridge near Ella, surrounded by jungle",
    caption: "NINE ARCH BRIDGE · ELLA",
  },
  "sigiriya.jpg": {
    image: sigiriya,
    alt: "Sigiriya rock rising above the forest, seen from Pidurangala",
    caption: "SIGIRIYA",
  },
  "tea.jpg": {
    image: tea,
    alt: "Tea bushes and trees disappearing into mist",
    caption: "TEA COUNTRY",
  },
  "temple.jpg": {
    image: temple,
    alt: "Painted corridor inside the Temple of the Sacred Tooth Relic, Kandy",
    caption: "TEMPLE OF THE TOOTH · KANDY",
  },
  "galle.jpg": {
    image: galle,
    alt: "The white lighthouse at Galle Fort under a blue sky",
    caption: "GALLE FORT",
  },
  "elephants.jpg": {
    image: elephants,
    alt: "A mother elephant and her calf grazing beside a lake",
    caption: "MINNERIYA",
  },
  "beach.jpg": {
    image: beach,
    alt: "Turquoise sea and rocky shore at Mirissa",
    caption: "MIRISSA",
  },
  "lake.jpg": {
    image: lake,
    alt: "Kandy Lake in the centre of Kandy",
    caption: "KANDY LAKE",
  },
  "sunset.jpg": {
    image: sunset,
    alt: "Surfboards on the beach at Mirissa at dusk",
    caption: "SURFBOARDS · MIRISSA",
  },
  "leopard.jpg": {
    image: leopard,
    alt: "A Sri Lankan leopard in Yala",
    caption: "YALA",
  },
  "horton.jpg": {
    image: horton,
    alt: "Mist rolling over Horton Plains",
    caption: "HORTON PLAINS",
  },
  "nilaveli.jpg": {
    image: nilaveli,
    alt: "Fishing boats on Nilaveli beach near Trincomalee",
    caption: "NILAVELI · TRINCOMALEE",
  },
  "polonnaruwa.jpg": {
    image: polonnaruwa,
    alt: "The reclining Buddha at Gal Vihara, Polonnaruwa",
    caption: "GAL VIHARA · POLONNARUWA",
  },
  // The owner's own photos.
  "lochana-van.webp": {
    image: lochanaVan,
    alt: "Lochana standing beside his silver Nissan van in a tropical driveway",
    caption: "LOCHANA & THE VAN",
  },
  "van.webp": {
    image: van,
    alt: "Lochana’s silver Nissan van parked on a tropical driveway",
    caption: "THE VAN",
  },
  "van-seats.webp": {
    image: vanSeats,
    alt: "Inside the van: cloth passenger seats seen through the open sliding door",
    caption: "THE SEATS",
  },
  "van-location.webp": {
    image: vanLocation,
    alt: "The silver van parked beside a white stupa and a Buddha statue",
    caption: "ON THE ROAD",
  },
} satisfies Record<string, Photo>;

export type PhotoName = keyof typeof photos;

/** Looks up a photo by file name; fails the build with a clear message if it doesn't exist. */
export function getPhoto(name: string): Photo {
  const photo = (photos as Record<string, Photo>)[name];
  if (!photo) {
    throw new Error(
      `Unknown photo "${name}". Add it to src/assets/images and src/data/photos.ts.`,
    );
  }
  return photo;
}

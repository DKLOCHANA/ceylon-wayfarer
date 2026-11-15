import type { ImageMetadata } from "astro";
import temple from "@/assets/images/temple.jpg";
import tea from "@/assets/images/tea.jpg";
import lake from "@/assets/images/lake.jpg";
import elephants from "@/assets/images/elephants.jpg";
import galle from "@/assets/images/galle.jpg";
import beach from "@/assets/images/beach.jpg";
import sunset from "@/assets/images/sunset.jpg";
import sigiriya from "@/assets/images/sigiriya.jpg";

export type TileSpan = "single" | "tall" | "wide";

export interface GalleryTile {
  image: ImageMetadata;
  alt: string;
  caption: string;
  span: TileSpan;
}

/**
 * Bento collage, in grid order. On desktop (4 columns) these fill exactly 3 rows:
 *   temple(tall) | tea(wide)        | lake
 *   temple       | elephants | galle | beach(tall)
 *   sunset       | sigiriya(wide)    | beach
 * When adding or removing tiles, keep the total cell count a multiple of 4
 * (single = 1, tall = 2, wide = 2) so the grid has no holes.
 */
export const gallery: GalleryTile[] = [
  {
    image: temple,
    alt: "Painted corridor inside the Temple of the Sacred Tooth Relic, Kandy",
    caption: "TEMPLE OF THE TOOTH · KANDY",
    span: "tall",
  },
  {
    image: tea,
    alt: "Tea bushes and trees disappearing into mist",
    caption: "TEA COUNTRY · HAPUTALE",
    span: "wide",
  },
  {
    image: lake,
    alt: "Kandy Lake in the centre of Kandy",
    caption: "KANDY LAKE",
    span: "single",
  },
  {
    image: elephants,
    alt: "A mother elephant and her calf grazing beside a lake",
    caption: "MINNERIYA",
    span: "single",
  },
  {
    image: galle,
    alt: "The white lighthouse at Galle Fort under a blue sky",
    caption: "GALLE FORT",
    span: "single",
  },
  {
    image: beach,
    alt: "Turquoise sea and rocky shore at Mirissa",
    caption: "MIRISSA",
    span: "tall",
  },
  {
    image: sunset,
    alt: "Surfboards on the beach at Mirissa at dusk",
    caption: "SURFBOARDS · MIRISSA",
    span: "single",
  },
  {
    image: sigiriya,
    alt: "Sigiriya rock rising above the forest, seen from Pidurangala",
    caption: "SIGIRIYA · FROM PIDURANGALA",
    span: "wide",
  },
];

import type { ImageMetadata } from "astro";
import { site } from "@/config/site";
import { driver } from "@/data/driver";
import { getPhoto } from "@/data/photos";
import { home } from "@/data/home";
import type { DataRow } from "@/components/ui/DataList.astro";
import type { IconName } from "@/components/ui/Icon.astro";

export type VanPhotoSpan = "big" | "single" | "wide";

export interface VanPhoto {
  /** Add a real photo here (import it from src/assets/images); the placeholder shows until then. */
  image?: ImageMetadata;
  alt?: string;
  placeholder: string;
  span: VanPhotoSpan;
  /** Part of the photo to keep in view when the tile crops it. */
  focus?: "center" | "top" | "bottom";
}

export interface WorkPromise {
  title: string;
  text: string;
  icon: IconName;
}

/** About page copy. Business facts come from site.ts; [BRACKETS] are for the owner to fill. */
export const about = {
  seo: {
    title: `About ${site.owner.name}, your private driver in Sri Lanka — ${site.name}`,
    description: `Meet ${site.owner.name}, a private driver based in ${site.location.town}, Sri Lanka, with an air-conditioned van for airport pickups, day trips and multi-day tours.`,
  },
  hero: {
    eyebrow: "ABOUT · YOUR DRIVER",
    title: `Hi, I’m ${site.owner.name}.`,
    bio: site.owner.bio,
    chips: driver.chips,
    photo: driver.ownerPhoto,
    photoPlaceholder: driver.ownerPlaceholder,
    pass: {
      label: "DRIVER PASS",
      labelRight: "№ 001",
      rows: [
        { label: "Name", value: site.owner.name },
        {
          label: "Based",
          value: `${site.location.town}, ${site.location.country}`,
        },
        { label: "Speaks", value: site.owner.languages.join(" & ") },
        {
          label: "Drives",
          value: `${site.van.model}, ${site.van.seats} seats`,
        },
      ] satisfies DataRow[],
      footLabel: "REPLIES WITHIN",
      footValue: site.contact.replyTime,
    },
    whatsappLabel: "Say hello on WhatsApp",
    secondaryCta: { label: "See my routes", href: "/#routes" },
  },
  story: {
    eyebrow: "01 — MY STORY",
    title: `From ${site.location.town}, for the whole island.`,
    paragraphs: [
      "I’m 26, a graduate, and I’ve been driving for more than five years. I’m a people person, so driving guests around my island is the job I enjoy most: good conversation, new friends, and the chance to share the places I know.",
      "Years on the road have taught me Sri Lanka’s routes, towns and people well: which road to take, where to stop, and how to keep you safe and comfortable along the way. You relax and enjoy the view; I look after the driving.",
    ],
    quote: "Tell me what you’d love to see, and I’ll take care of the roads.",
  },
  van: {
    eyebrow: "02 — THE VAN",
    title: "Cool, clean, and room for the surfboards.",
    photos: [
      {
        image: driver.vanPhoto.image,
        alt: driver.vanPhoto.alt,
        placeholder: driver.vanPlaceholder,
        span: "big",
      },
      {
        image: getPhoto("van-seats.webp").image,
        alt: getPhoto("van-seats.webp").alt,
        placeholder: "PHOTO — inside:\nthe seats.",
        span: "wide",
      },
      {
        image: getPhoto("van-location.webp").image,
        alt: getPhoto("van-location.webp").alt,
        placeholder: "PHOTO — the van\non the road.",
        // The van sits at the bottom of this photo; keep it (and the temple) in the wide tile.
        focus: "bottom",
        span: "wide",
      },
    ] satisfies VanPhoto[],
    specs: [
      { label: "Model", value: site.van.model },
      { label: "Seats", value: `Up to ${site.van.seats}` },
      { label: "Comfort", value: "Air-conditioned" },
      // Owner confirmed: van and all passengers are fully insured.
      { label: "Van & passengers", value: "Fully insured" },
    ] satisfies DataRow[],
  },
  promises: {
    eyebrow: "03 — HOW I WORK",
    title: "Three promises.",
    items: [
      {
        title: "No hidden fees",
        text: "One price for the whole trip, agreed on WhatsApp before you ride. What we agree is what you pay.",
        icon: "receipt",
      },
      {
        title: "Experienced guides at the sites",
        text: "I’m your driver. At the major sites I connect you with experienced, licensed local guides.",
        icon: "guide",
      },
      {
        title: "Safe driving on busy roads",
        text: "Sri Lankan roads can be chaotic. I drive calmly and carefully, so you can sit back and enjoy the view.",
        icon: "steering",
      },
    ] satisfies WorkPromise[],
  },
  cta: {
    ...home.cta,
    eyebrow: "NICE TO MEET YOU",
    title: "Let’s plan your trip.",
  },
};

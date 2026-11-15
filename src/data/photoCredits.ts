/** Required by the CC BY / CC BY-SA licences. Keep in sync with src/assets/images/CREDITS.md. */
export interface PhotoCredit {
  subject: string;
  author: string;
  licence: string;
}

export const photoCreditsIntro = "Photos via Wikimedia Commons:";

/** Licence deeds, linked from the credits page. */
export const licenceUrls: Record<string, string> = {
  "CC BY 4.0": "https://creativecommons.org/licenses/by/4.0/",
  "CC BY-SA 4.0": "https://creativecommons.org/licenses/by-sa/4.0/",
};

/** The /credits page (linked from the footer). */
export const creditsPage = {
  path: "/credits",
  linkLabel: "Photo credits",
  seoTitle: "Photo credits — Ceylon Wayfarer",
  seoDescription:
    "Credits and licences for the photos used on the Ceylon Wayfarer website.",
  eyebrow: "PHOTO CREDITS",
  title: "Thank you, photographers.",
  intro:
    "Many travel photos on this site come from Wikimedia Commons and are used under Creative Commons licences. Photos of me and my van are my own.",
  sourceNote: "via Wikimedia Commons",
};

export const photoCredits: PhotoCredit[] = [
  {
    subject: "Nine Arch Bridge",
    author: "Dilshan255",
    licence: "CC BY-SA 4.0",
  },
  { subject: "Sigiriya", author: "Gayomiw", licence: "CC BY-SA 4.0" },
  {
    subject: "Tea country and Kandy Lake",
    author: "Vyacheslav Argenberg",
    licence: "CC BY 4.0",
  },
  {
    subject: "Temple of the Tooth and Gal Vihara",
    author: "Philip Nalangan",
    licence: "CC BY-SA 4.0",
  },
  {
    subject: "Galle lighthouse",
    author: "Samal Nadeeshan",
    licence: "CC BY-SA 4.0",
  },
  { subject: "Elephants", author: "Eli Solidum", licence: "CC BY-SA 4.0" },
  {
    subject: "Mirissa beach",
    author: "Abishek Palraj",
    licence: "CC BY-SA 4.0",
  },
  { subject: "Surfboards", author: "Dan arndt", licence: "CC BY-SA 4.0" },
  // Added with the itinerary pages. Licences as listed in the itinerary design — verify on Wikimedia Commons.
  { subject: "Leopard", author: "Casey Klebba", licence: "CC BY-SA 4.0" },
  {
    subject: "Horton Plains",
    author: "Pamuditha2000",
    licence: "CC BY-SA 4.0",
  },
  { subject: "Nilaveli", author: "Anton 17", licence: "CC BY-SA 4.0" },
];

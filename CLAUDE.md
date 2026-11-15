# Ceylon Wayfarer — private driver website

Marketing site for a private driver service for foreign tourists in Sri Lanka.
Owner: Lochana (driver), based in Kegalle, on the Colombo–Kandy road. One person, one air-conditioned van.
Goal: get tourists to send a WhatsApp message asking for a quote. Everything serves that.

Scope: a home page now, then 3–4 more static pages (About, Routes + one page per route, FAQ, Privacy).
No user accounts, no database, no backend. It must stay small, fast and easy to maintain.

## The design is already decided

`design/home-v2.dc.html` is the approved home page design; `design/brand-sheet.dc.html` shows logo, colours, type.
They are design references made on a design canvas, NOT runnable code: they use a canvas template syntax
(`<x-dc>`, `<helmet>`, `{{holes}}`, `<sc-for>`, `<sc-if>`, a `DCLogic` class). Rebuild the design faithfully as
real Astro components; never ship that syntax. Colours appear there as `{{t.ink}}` etc. — see the token table.
Photos are in `design/photos/` (move them into `src/assets/images/` during setup).

## Stack (decided — do not swap)

- **Astro**, static output, **TypeScript strict**. No UI framework (no React/Vue/Svelte).
- **Tailwind CSS** (current version) with the brand tokens defined once in the theme
  (e.g. `@theme` in `src/styles/global.css`). Components use token classes (`bg-primary`, `text-ink`),
  never raw hex values.
- **Interactivity in vanilla TypeScript** inside the component that needs it (`<script>` in the `.astro` file).
  Only the route picker and the itinerary planner need JS. The marquee, hover zooms and FAQ are pure CSS/HTML.
- **Images** through `astro:assets` (`<Image>` / `<Picture>`): WebP/AVIF, responsive widths, lazy below the fold,
  hero eager with high fetch priority. Images live in `src/assets/images/`, not `public/`.
- **Fonts** self-hosted with Fontsource: Bricolage Grotesque (700, 800), Inter (400, 500, 600), DM Mono (400, 500).
- **Content** for routes in an Astro **content collection** (`src/content/routes/*.md`) so each route gets its own page.
- **Tooling:** Prettier + prettier-plugin-astro, `astro check` must pass. Optional ESLint.
- **Hosting:** Vercel (static). No server functions.

## Project structure (follow this)

```
src/
  assets/images/            photos (optimised by astro:assets)
  components/
    ui/                     small, reusable, content-free building blocks
      Button.astro          variants: primary (marigold), dark, outline, ghost-on-photo; renders <a> or <button>
      WhatsAppButton.astro  Button preset that builds the wa.me link from a message prop
      Container.astro       max-width 1280px + responsive side padding
      Section.astro         vertical spacing + background variant (ground | surface | ink)
      SectionHeading.astro  eyebrow label ("01 — ROUTES"), title, optional intro
      Eyebrow.astro         DM Mono uppercase label
      Chip.astro            pill tag (light | glass)
      Ticket.astro          ticket card with dashed perforation (used in hero and route cards)
      PhotoTile.astro       image + caption chip + hover zoom (bento grid)
      Logo.astro            the SVG mark + wordmark
      Icon.astro            inline stroke SVG icons by name (whatsapp/chat, arrow, check)
    layout/
      Header.astro          frosted pill nav; transparent over hero, solid on inner pages
      Footer.astro          logo, location, socials, photo credits
    sections/               one file per page section, composed in pages
      Hero.astro
      DestinationMarquee.astro
      RoutePicker.astro     the only component with client JS
      IslandGallery.astro   bento grid
      DriverIntro.astro
      HowItWorks.astro
      Reviews.astro         renders nothing (or a "reviews coming soon" CTA) when the reviews list is empty
      Faq.astro
      BookingCta.astro
    seo/
      Seo.astro             title, description, canonical, Open Graph, Twitter tags
      LocalBusinessSchema.astro  JSON-LD with only true details from config
  content/
    routes/*.md             one file per route (frontmatter: title, code, tag, duration, priceFrom, priceLabel,
                            image, imageAlt, place, order, summary) + longer body for the route page
  content.config.ts         zod schema for the routes collection
  data/
    faq.ts  gallery.ts  reviews.ts  howItWorks.ts  destinations.ts
  config/
    site.ts                 SINGLE source of truth: business name, owner, WhatsApp number, email, socials,
                            base location, van model, seats, reply time, payment methods, what's included
  lib/
    whatsapp.ts             buildWhatsAppLink(message) -> https://wa.me/<number>?text=<encoded>
    format.ts               price formatting etc.
  layouts/
    BaseLayout.astro        <html>, <head> (Seo, fonts, favicon), Header, <slot />, Footer
  pages/
    index.astro             composes sections only — no markup of its own beyond the layout
    routes/index.astro      all routes as Ticket cards
    routes/[slug].astro     one page per route from the collection
    about.astro  faq.astro  privacy.astro
  styles/global.css         Tailwind import, @theme tokens, font families, reduced-motion rules, keyframes
```

## Clean-code rules

- Components are small and single-purpose. If markup repeats twice, it becomes a component.
- **No hard-coded content inside components.** Text, prices, routes, FAQs and contact details come from
  `src/config/site.ts`, `src/data/*` or the content collection, passed in as props.
- Every component declares a typed `interface Props`. Sensible defaults; no `any`.
- No raw colours, font names or magic spacing in components — use theme tokens and Tailwind scale.
- Pages only compose sections; sections only compose ui components and data.
- The WhatsApp number exists in ONE place (`site.ts`). Every booking button goes through `WhatsAppButton`,
  with a prefilled message that names the route where relevant.
- Keep client JS in `RoutePicker.astro`, `sections/itinerary/ItineraryPlanner.astro` and `ui/HeroVideo.astro`
  (deferred hero video) only (map ↔ day sync;
  days are native `<details>` so they work without JS), each under ~3 KB, no dependencies.
- Names: PascalCase components, camelCase data and functions, kebab-case route slugs.

## Brand tokens — palette "Tea & Marigold" (final)

| Token | Hex | Use |
|---|---|---|
| ink | #0E2A24 | main text, dark sections |
| deep | #0A201B | footer, CTA frame |
| primary | #12463A | brand green, selected states, logo tile |
| ground | #F5F6F1 | page background, light text on dark |
| surface | #FFFFFF | cards, alternate sections |
| body | #3B504A | body text on light |
| muted | #4A5F58 | small labels on light |
| line | #DCE1DA | borders |
| dash | #C9D0C6 | ticket perforations |
| on-dark-muted | #B9CCC4 | labels on dark |
| on-dark-body | #DDE7E2 | body text on dark |
| accent (marigold) | #F2A93B | buttons, highlights; text on it is ink |
| scrim | rgba(10,32,27,α) | photo overlays |
| glass | rgba(14,42,36,α) + backdrop blur | frosted nav, photo caption chips |

Type: Bricolage Grotesque 800 headings (tight tracking, ~0.9–0.95 line height), Inter body,
DM Mono uppercase labels with wide letter-spacing. Radius: 20–32px cards, full pills for buttons and chips.

## Home page sections (in order)

1. **Hero:** Nine Arch Bridge photo in a rounded frame inset 14px, slow Ken Burns zoom; frosted pill nav;
   headline "Your driver for the whole island." ("whole island." in marigold); ride `Ticket` (BIA → KDY, fare, WhatsApp).
2. **DestinationMarquee:** endless CSS scroll of place names separated by marigold ✦ (duplicate copy is aria-hidden).
3. **RoutePicker (#routes):** route buttons left, photo stage right with cross-fade; auto-advances every 5 s until a
   click; progress bars; overlay with code, title, price, "Book this route". Buttons use `aria-pressed`.
   Data comes from the routes collection (first 4 by `order`).
4. **IslandGallery (#island):** dark bento grid — temple (tall), tea (wide), marigold promise tile, elephants, Galle,
   Mirissa (tall), van info tile, Sigiriya (wide). 4 columns desktop, 2 on phones.
5. **DriverIntro (#driver):** owner photo + overlapping van photo (placeholders until supplied), "Hi, I'm Lochana.",
   chips, and the honest note: driver service; guests are connected with licensed guides at major sites.
6. **HowItWorks (#how):** 3 numbered steps joined by a dashed line (line hidden on phones).
7. **Reviews:** sideways scroll-snap postcard cards with slight rotation.
8. **Faq (#faq):** native `<details>`/`<summary>`.
9. **BookingCta (#book):** sunset photo with scrim, "Where to first?", WhatsApp + email.
10. **Footer:** logo, location, socials, photo credit line (required).

## Non-negotiable rules (from an audit of the owner's previous site)

- NEVER invent reviews, guest names, stats, licences, insurance, awards or "24/7 team" claims. Do not claim SLTDA
  licensing. Unknown facts stay as visible `[BRACKETED]` placeholders in `site.ts` until the owner fills them.
- All contact details are the owner's own, from `site.ts`. No forms posting to third-party builders. No dead links.
- Photos are Wikimedia Commons CC BY / CC BY-SA: keep the footer "Photo credits" link to `/credits`
  (list in `src/data/photoCredits.ts`, see `src/assets/images/CREDITS.md`).
- Respect `prefers-reduced-motion`: stop marquee, Ken Burns, and route auto-advance.
- Accessibility: semantic elements, alt text on every image, visible focus styles, 4.5:1 contrast, 44px targets.
- SEO: unique title + description per page, canonical URLs, Open Graph image, favicon from the logo,
  `@astrojs/sitemap`, robots.txt, JSON-LD `LocalBusiness`.

## Definition of done

- `astro check` and the build pass with no warnings; no console errors.
- Home page under ~1.5 MB on first load; no layout shift from fonts or images.
- Lighthouse mobile: Performance ≥ 95, Accessibility 100, SEO 100.
- Looks right at 390px, 768px and 1440px wide.
- Changing the WhatsApp number, a price or a route needs editing exactly one file.

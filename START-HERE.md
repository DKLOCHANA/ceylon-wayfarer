# Start here

1. Open this folder in VS Code (File › Open Folder).
2. Install the "Claude Code" extension by Anthropic, open CLAUDE.md, click the Spark icon, sign in.
3. Paste prompt 1. Read the plan, reply "OK", then let it build. Review each change in the diff view.

## Prompt 1 — plan and scaffold

```
Read CLAUDE.md and design/home-v2.dc.html. Give me a short plan first:
the folder structure, the list of ui components and sections with their
props, and how the route picker script will work. Wait for my OK.
Then scaffold the Astro + Tailwind project in this folder, move the
photos from design/photos into src/assets/images, set up the theme
tokens, fonts, BaseLayout, Header and Footer, and the ui components.
Stop after that so I can review.
```

## Prompt 2 — build the home page

```
Now build the home page sections one at a time in the order listed in
CLAUDE.md, matching design/home-v2.dc.html exactly. All content comes
from src/config/site.ts, src/data and the routes collection.
After each section, tell me what you built.
```

## Prompt 3 — check quality

```
Run astro check and a production build. Then review the codebase
against the clean-code rules and the definition of done in CLAUDE.md,
list anything that falls short, and fix it.
```

## Later

- "Add the About page using the existing components."
- "Add a route page for each route in the routes collection."

## Fill in your details

Open `src/config/site.ts` and replace every `[BRACKETED]` value: WhatsApp number, email, prices,
van model, seats, what's included, payment methods, reply time, social links.
Replace the driver and van photo placeholders with real photos.

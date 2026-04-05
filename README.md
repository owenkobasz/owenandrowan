# owenrowan.love

Wedding website for Owen Kobasz & Rowan Sinclair-Gregg — July 11, 2026, New Mexico Museum of Art, Santa Fe.

Astro + Tailwind v4, deployed on Vercel. RSVP via Notion API.

## Routes

| Path | Page |
|---|---|
| `/` | Home — hero, story, the day, RSVP, registry |
| `/venue` | The Venue — about, directions, what to expect |
| `/stay` | Where to Stay — hotels, neighborhoods |
| `/do` | Things to Do — museums, outdoors, food, drinks |
| `/faq` | FAQ |
| `/secret` | Easter egg |
| `/api/rsvp` | POST — submits RSVP to Notion |
| `/api/rsvp-check` | POST — validates password |

## Dev

```sh
npm run dev       # localhost:4321
npm run build     # production build
npm run preview   # preview production build
npx astro check   # typecheck
```

## Environment

Copy `.env` and fill in:

```
RSVP_PASSWORD=esme
NOTION_TOKEN=
NOTION_DATABASE_ID=
```

## Content

- Hotels: `src/content/hotels.ts`
- Things to do: `src/content/listings.ts`
- Illustrations: `public/illustrations/` — swap Owen's drawings at the same paths, no code changes needed

## Before launch

- [ ] Add `NOTION_TOKEN` + `NOTION_DATABASE_ID` to `.env` and Vercel env vars
- [ ] Add Song Request + Submitted At fields to Notion database
- [ ] Purchase Canela Condensed web license (current files are Trial)
- [ ] Design OG image → `public/og-image.jpg`
- [ ] Generate `favicon.ico` + `apple-touch-icon.png`
- [ ] Connect repo to Vercel, confirm DNS for `owenrowan.love`
- [ ] Copy review pass

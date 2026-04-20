# owenrowan.love

Wedding website for Owen Kobasz & Rowan Sinclair-Gregg.

Astro + Tailwind v4 · Vercel · RSVP via Notion API

## Routes

| Path | Page |
|---|---|
| `/` | Home |
| `/venue` | The Venue |
| `/stay` | Where to Stay |
| `/do` | Things to Do |
| `/registry` | Registry |
| `/faq` | FAQ |
| `/api/rsvp` | POST — submits RSVP to Notion |
| `/api/rsvp-check` | POST — validates password |

## Dev

```sh
npm run dev       # localhost:4321
npm run build
npm run preview
npx astro check   # typecheck
```

## Environment

```
RSVP_PASSWORD=esme
NOTION_TOKEN=
NOTION_DATABASE_ID=
```


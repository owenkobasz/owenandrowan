export const prerender = false

import type { APIRoute } from 'astro'
import { Client } from '@notionhq/client'

interface RSVPBody {
  password: string
  name: string
  attending: 'Yes' | 'No' | 'Maybe'
  dietary?: string
  plusOne?: 'Yes' | 'No'
  plusOneName?: string
  songRequest?: string
  message?: string
}

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json() as RSVPBody

  if (body.password !== import.meta.env.RSVP_PASSWORD) {
    return new Response(JSON.stringify({ error: 'Wrong password' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const notion = new Client({ auth: import.meta.env.NOTION_TOKEN })

  await notion.pages.create({
    parent: { database_id: import.meta.env.NOTION_DATABASE_ID },
    properties: {
      'Name': {
        title: [{ text: { content: body.name } }],
      },
      'Attending': {
        select: { name: body.attending },
      },
      'Dietary': {
        rich_text: [{ text: { content: body.dietary ?? '' } }],
      },
      'Plus One': {
        select: { name: body.plusOne ?? 'No' },
      },
      'Plus One Name': {
        rich_text: [{ text: { content: body.plusOneName ?? '' } }],
      },
      'Message': {
        rich_text: [{ text: { content: body.message ?? '' } }],
      },
      'Song Request': {
        rich_text: [{ text: { content: body.songRequest ?? '' } }],
      },
      'Submitted At': {
        date: { start: new Date().toISOString() },
      },
    },
  })

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  })
}

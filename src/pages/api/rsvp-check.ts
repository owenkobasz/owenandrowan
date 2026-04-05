export const prerender = false

import type { APIRoute } from 'astro'

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json() as { password?: string }
  const valid = body.password === import.meta.env.RSVP_PASSWORD

  return new Response(JSON.stringify({ valid }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  })
}

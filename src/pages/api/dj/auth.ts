export const prerender = false

import type { APIRoute } from 'astro'
import { passwordMatches, admitCookie } from '../../../lib/dj'

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json().catch(() => ({})) as { password?: string }

  if (typeof body.password !== 'string' || !passwordMatches(body.password)) {
    return new Response(JSON.stringify({ ok: false }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Set-Cookie': admitCookie(),
    },
  })
}

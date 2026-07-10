export const prerender = false

import type { APIRoute } from 'astro'
import {
  COOKIE_NAME, NIGHT_MINUTES, TICK, SET_LENGTHS,
  isAdmitted, fetchSlots, createSlot,
} from '../../../lib/dj'

function json(status: number, data: unknown): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  })
}

export const GET: APIRoute = async ({ cookies }) => {
  if (!isAdmitted(cookies.get(COOKIE_NAME)?.value)) return json(401, { error: 'not admitted' })
  return json(200, { slots: await fetchSlots() })
}

export const POST: APIRoute = async ({ request, cookies }) => {
  if (!isAdmitted(cookies.get(COOKIE_NAME)?.value)) return json(401, { error: 'not admitted' })

  const body = await request.json().catch(() => null) as
    { name?: unknown, start?: unknown, minutes?: unknown, vibe?: unknown } | null

  const name = typeof body?.name === 'string' ? body.name.trim().slice(0, 60) : ''
  const vibe = typeof body?.vibe === 'string' ? body.vibe.trim().slice(0, 100) : ''
  const start = body?.start
  const minutes = body?.minutes

  if (!name) return json(400, { error: 'The bill needs a name.' })
  if (
    typeof start !== 'number' || typeof minutes !== 'number' ||
    start % TICK !== 0 || !SET_LENGTHS.includes(minutes) ||
    start < 0 || start + minutes > NIGHT_MINUTES
  ) {
    return json(400, { error: 'That set doesn’t fit the night.' })
  }

  // Read-then-write overlap check. Not transactional, but two guests would
  // have to submit within the same second to race it.
  const existing = await fetchSlots()
  const collision = existing.find((s) => start < s.start + s.minutes && s.start < start + minutes)
  if (collision) {
    return json(409, {
      error: `Someone beat you to it — ${collision.name} has that stretch now.`,
      slots: existing,
    })
  }

  await createSlot({ name, start, minutes, vibe })
  return json(200, { slots: await fetchSlots() })
}

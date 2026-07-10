// Shared helpers for the turntable.fm DJ signup.
import { createHash } from 'node:crypto'
import { Client } from '@notionhq/client'

// The night: 8:00–11:00 PM MDT, July 11, 2026. All slot math is in
// minutes-after-8pm so the client never touches timezones.
export const NIGHT_START_ISO = '2026-07-11T20:00:00-06:00'
export const NIGHT_MINUTES = 180
export const TICK = 15
export const SET_LENGTHS = [15, 30, 45, 60]

export const COOKIE_NAME = 'tt_admit'

export interface Slot {
  name: string
  start: number // minutes after 8:00 PM
  minutes: number
  vibe: string
}

function normalize(pw: string): string {
  return pw.trim().toLowerCase().replace(/\s+/g, ' ')
}

// Cookie token: hash of the password, so the password itself never rides
// along in requests. Threat model is "guests only", not Fort Knox.
export function admitToken(): string {
  const pw = import.meta.env.DJ_PASSWORD ?? ''
  return createHash('sha256').update(`owenrowan:${normalize(pw)}`).digest('hex')
}

export function passwordMatches(attempt: string): boolean {
  return normalize(attempt) === normalize(import.meta.env.DJ_PASSWORD ?? '')
}

export function isAdmitted(cookieValue: string | undefined): boolean {
  return !!cookieValue && cookieValue === admitToken()
}

export function admitCookie(): string {
  // 60 days: outlives the wedding, nobody re-enters the password.
  return `${COOKIE_NAME}=${admitToken()}; Path=/; Max-Age=5184000; HttpOnly; SameSite=Lax; Secure`
}

export async function fetchSlots(): Promise<Slot[]> {
  const notion = new Client({ auth: import.meta.env.NOTION_TOKEN })
  const res = await notion.dataSources.query({
    data_source_id: import.meta.env.NOTION_DJ_DATA_SOURCE_ID,
    sorts: [{ property: 'Start', direction: 'ascending' }],
  })

  const nightStart = Date.parse(NIGHT_START_ISO)
  const slots: Slot[] = []

  for (const page of res.results) {
    if (!('properties' in page)) continue
    const p = page.properties as Record<string, any>
    const iso = p['Start']?.date?.start
    const minutes = p['Minutes']?.number
    if (!iso || typeof minutes !== 'number') continue
    slots.push({
      name: p['DJ']?.title?.[0]?.plain_text ?? '?',
      start: Math.round((Date.parse(iso) - nightStart) / 60000),
      minutes,
      vibe: p['Spinning']?.rich_text?.[0]?.plain_text ?? '',
    })
  }

  return slots.sort((a, b) => a.start - b.start)
}

// Minutes-after-8pm → ISO in Santa Fe time (MDT, UTC-6 in July).
function slotISO(minutesAfter8: number): string {
  const h = 20 + Math.floor(minutesAfter8 / 60)
  const m = minutesAfter8 % 60
  const pad = (n: number) => String(n).padStart(2, '0')
  return `2026-07-11T${pad(h)}:${pad(m)}:00-06:00`
}

export async function createSlot(slot: Slot): Promise<void> {
  const notion = new Client({ auth: import.meta.env.NOTION_TOKEN })

  await notion.pages.create({
    parent: { data_source_id: import.meta.env.NOTION_DJ_DATA_SOURCE_ID },
    properties: {
      'DJ': { title: [{ text: { content: slot.name } }] },
      'Start': { date: { start: slotISO(slot.start), end: slotISO(slot.start + slot.minutes) } },
      'Minutes': { number: slot.minutes },
      'Spinning': { rich_text: [{ text: { content: slot.vibe } }] },
      'Submitted At': { date: { start: new Date().toISOString() } },
    },
  })
}

// Notifies when a visitor opens the CV. Fired from the client on mount, so
// crawlers and link-preview bots that never run JavaScript stay out of it.
// Anything that does execute the page will ping, so this is noisier than the
// entry gate it replaced.

const WINDOW_MS = 60_000
const MAX_PER_WINDOW = 5

// Per-instance throttle. The endpoint is public and discoverable, so this caps
// how badly a naive flood can spam Telegram. It is a blunt, not a guarantee.
let windowStart = 0
let sentInWindow = 0

const withinBudget = () => {
  const now = Date.now()

  if (now - windowStart > WINDOW_MS) {
    windowStart = now
    sentInWindow = 0
  }

  if (sentInWindow >= MAX_PER_WINDOW) return false

  sentInWindow += 1
  return true
}

const readRef = async (request: Request) => {
  try {
    const body = await request.json()
    if (typeof body?.ref !== 'string') return ''
    // Only a short, boring slug ever reaches the message text.
    return body.ref.replace(/[^a-zA-Z0-9_-]/g, '').slice(0, 40)
  } catch {
    return ''
  }
}

export async function POST(request: Request) {
  // Always 204: the visitor must never see, or wait on, this succeeding.
  const done = () => new Response(null, { status: 204 })

  if (process.env.NOTIFY_VISITS !== '1') return done()

  const token = process.env.TELEGRAM_BOT_TOKEN
  const chat = process.env.TELEGRAM_CHAT_ID
  if (!token || !chat) return done()

  const ref = await readRef(request)

  if (!withinBudget()) return done()

  const when = new Date().toLocaleString('en-GB', {
    timeZone: 'Europe/Luxembourg',
    dateStyle: 'medium',
    timeStyle: 'short',
  })

  const text = [
    'Someone opened your CV.',
    ref ? `Source: ${ref}` : null,
    `${when} (Luxembourg)`,
  ]
    .filter(Boolean)
    .join('\n')

  try {
    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ chat_id: chat, text }),
    })
  } catch {
    // A failed notification is not the visitor's problem.
  }

  return done()
}

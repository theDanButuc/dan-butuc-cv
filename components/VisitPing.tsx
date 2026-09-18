'use client'

import { useEffect, useRef } from 'react'

// A browser that has been here with ?ref=me never pings again.
const MUTE_REF = 'me'
const MUTE_KEY = 'cv:mute-visit-ping'

// One ping per tab session, so a refresh does not send a second message.
const SEEN_KEY = 'cv:visit-pinged'

export default function VisitPing() {
  const pinged = useRef(false)

  useEffect(() => {
    // Strict Mode mounts effects twice in development.
    if (pinged.current) return
    pinged.current = true

    const ref = new URLSearchParams(window.location.search).get('ref') ?? ''

    // Visiting once with ?ref=me marks this browser as mine, permanently. It
    // keeps my own visits out of the notifications without a server-side list.
    if (ref === MUTE_REF) {
      try {
        window.localStorage.setItem(MUTE_KEY, '1')
      } catch {
        // Private mode or blocked storage: nothing to do, the ping is skipped
        // for this visit anyway.
      }
      return
    }

    try {
      if (window.localStorage.getItem(MUTE_KEY) === '1') return
      if (window.sessionStorage.getItem(SEEN_KEY) === '1') return
      window.sessionStorage.setItem(SEEN_KEY, '1')
    } catch {
      // Unreadable storage just means we fall through and notify.
    }

    // keepalive lets this survive the tab being closed straight away.
    void fetch('/api/visit', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ ref }),
      keepalive: true,
    }).catch(() => {})
  }, [])

  return null
}

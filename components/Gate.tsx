'use client'

import { useEffect, useRef, useState } from 'react'

const ANSWER = 'dan butuc'
const FADE_MS = 600

const normalise = (value: string) =>
  value.trim().replace(/\s+/g, ' ').toLowerCase()

export default function Gate({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState(false)
  const [gateMounted, setGateMounted] = useState(true)
  const [empty, setEmpty] = useState(true)
  const inputRef = useRef<HTMLInputElement>(null)

  // Keep the page from scrolling behind the gate, and hand focus to the input.
  useEffect(() => {
    if (unlocked) return

    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'
    inputRef.current?.focus()

    return () => {
      document.body.style.overflow = overflow
    }
  }, [unlocked])

  // Drop the gate from the DOM once it has finished fading out.
  useEffect(() => {
    if (!unlocked) return

    const timer = window.setTimeout(() => setGateMounted(false), FADE_MS)
    return () => window.clearTimeout(timer)
  }, [unlocked])

  const check = (value: string) => {
    setEmpty(value === '')
    if (normalise(value) === ANSWER) setUnlocked(true)
  }

  return (
    <>
      <div
        inert={!unlocked}
        className={`transition-opacity ease-out ${
          unlocked ? 'opacity-100 duration-700' : 'opacity-0 duration-0'
        }`}
      >
        {children}
      </div>

      {gateMounted ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="gate-heading"
          className={`fixed inset-0 z-100 flex items-center justify-center bg-bg px-6 transition-opacity ease-out ${
            unlocked
              ? 'pointer-events-none opacity-0'
              : 'opacity-100'
          }`}
          style={{ transitionDuration: `${FADE_MS}ms` }}
        >
          <div className="w-full max-w-sm text-center">
            <p
              id="gate-heading"
              className="text-xs font-medium tracking-[0.18em] text-muted uppercase"
            >
              Welcome to Dan Butuc&rsquo;s CV
            </p>

            {/* The placeholder is drawn as real text so part of it can be
                coloured — a native placeholder cannot be styled per word. */}
            <div className="relative mt-8">
              <input
                ref={inputRef}
                type="text"
                autoComplete="off"
                spellCheck={false}
                aria-label="Type Dan Butuc to continue"
                onChange={(event) => check(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') {
                    event.preventDefault()
                    check(event.currentTarget.value)
                  }
                }}
                className="w-full border-b border-line bg-transparent pb-3 text-center text-lg text-ink transition-colors outline-none focus:border-accent"
              />

              {empty ? (
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 text-center text-lg text-muted"
                >
                  Type <span className="text-accent-text">Dan Butuc</span> to
                  continue
                </span>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}

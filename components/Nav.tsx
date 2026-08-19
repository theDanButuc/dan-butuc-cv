'use client'

import { useEffect, useState } from 'react'
import { nav } from '@/data/cv'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string>(nav.links[0].href.slice(1))
  const [atBottom, setAtBottom] = useState(false)

  const lastId = nav.links[nav.links.length - 1].href.slice(1)
  // The last section is too short to ever reach the observer's band, but once
  // the page is scrolled to the end it is unambiguously the one being read.
  const current = atBottom ? lastId : active

  useEffect(() => {
    const ids = nav.links.map((link) => link.href.slice(1))
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
    )

    sections.forEach((section) => observer.observe(section))

    const onScroll = () => {
      const scrolled = window.innerHeight + window.scrollY
      setAtBottom(scrolled >= document.documentElement.scrollHeight - 2)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    const frame = requestAnimationFrame(onScroll)

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])

  useEffect(() => {
    if (!open) return

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/90 backdrop-blur-sm">
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6"
      >
        <a
          href="#about"
          onClick={() => setOpen(false)}
          className="text-[0.95rem] font-semibold tracking-tight text-ink"
        >
          {nav.name}
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {nav.links.map((link) => {
            const id = link.href.slice(1)
            const isActive = current === id

            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive ? 'true' : undefined}
                  className={`group relative py-1 text-sm transition-colors ${
                    isActive ? 'text-ink' : 'text-muted hover:text-ink'
                  }`}
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className={`absolute -bottom-0.5 left-0 h-px bg-accent transition-[width] duration-300 ease-out ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </a>
              </li>
            )
          })}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="-mr-2 inline-flex h-10 w-10 items-center justify-center rounded-md text-ink md:hidden"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-line bg-bg md:hidden"
      >
        <ul className="mx-auto flex w-full max-w-5xl flex-col px-6 py-2">
          {nav.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block py-3 text-sm ${
                  current === link.href.slice(1) ? 'text-ink' : 'text-muted'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

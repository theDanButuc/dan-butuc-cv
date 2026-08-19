# Dan Butuc — CV

A single-page CV built for a specific job application, in the stack the role
was built around: Next.js, TypeScript, Tailwind, deployed on Vercel.

Live at **[cv.pinecone.design](https://cv.pinecone.design)**.

## Notes

- **Content lives in [`data/cv.ts`](data/cv.ts).** Components render, they never
  hardcode copy. Changing the CV means editing one typed file.
- **Server components by default.** `"use client"` appears in exactly three
  places: the navigation, the scroll-reveal wrapper, and the entry gate.
- **No animation or UI libraries.** Scroll reveals and active-section tracking
  are one `IntersectionObserver` each.
- **The CV is server-rendered underneath the entry gate**, not mounted after it.
  Crawlers and link previews get the full page.

## Running it

```bash
npm install
npm run dev
```

## Checks

```bash
npm run lint
npm run build
```

Lighthouse on the production build: 97 performance, 100 accessibility,
100 best practices, 100 SEO.

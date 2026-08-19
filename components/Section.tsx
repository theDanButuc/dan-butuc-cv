import Reveal from './Reveal'

export default function Section({
  id,
  title,
  children,
  className = '',
}: {
  id: string
  title?: string
  children: React.ReactNode
  className?: string
}) {
  const headingId = `${id}-heading`

  return (
    <section
      id={id}
      aria-labelledby={title ? headingId : undefined}
      className={`border-t border-line py-20 sm:py-24 ${className}`}
    >
      <div className="mx-auto w-full max-w-5xl px-6">
        <Reveal>
          {title ? (
            <h2
              id={headingId}
              className="mb-12 text-sm font-semibold tracking-[0.18em] text-muted uppercase"
            >
              {title}
            </h2>
          ) : null}
          {children}
        </Reveal>
      </div>
    </section>
  )
}

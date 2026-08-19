import { experience } from '@/data/cv'
import Section from './Section'

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="relative border-l border-line">
        {experience.map((entry) => (
          <li
            key={`${entry.company}-${entry.period}`}
            className="relative pb-12 pl-8 last:pb-0 sm:pl-10"
          >
            <span
              data-timeline-dot=""
              aria-hidden="true"
              className="absolute top-1.5 -left-[4.5px] block h-2 w-2 rounded-full bg-accent"
            />

            <p className="text-xs tracking-wide text-muted">
              {entry.period}
              {entry.location ? ` · ${entry.location}` : ''}
            </p>

            <h3 className="mt-2 text-base font-semibold text-ink">
              {entry.role}
            </h3>
            <p className="text-sm text-muted">{entry.company}</p>

            <ul className="mt-4 space-y-2.5">
              {entry.bullets.map((bullet) => (
                <li
                  key={bullet.slice(0, 40)}
                  className="relative pl-4 text-justify hyphens-auto text-[0.9rem] leading-relaxed text-ink/80 before:absolute before:top-[0.65em] before:left-0 before:h-1 before:w-1 before:rounded-full before:bg-line"
                >
                  {bullet}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  )
}

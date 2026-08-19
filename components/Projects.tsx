import { projects } from '@/data/cv'
import { ArrowIcon } from './Icons'
import Section from './Section'

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.name}
            className="flex flex-col rounded-lg border border-line p-6 transition-shadow duration-200 hover:shadow-md"
          >
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="text-base font-semibold text-ink">
                {project.name}
              </h3>
              {project.isPrivate ? (
                <span className="text-xs text-muted italic">private</span>
              ) : null}
            </div>

            <ul className="mt-3 flex flex-wrap gap-2">
              {project.platforms.map((platform) => (
                <li
                  key={platform}
                  className="rounded border border-accent/30 bg-accent/5 px-2 py-0.5 text-xs text-accent-text"
                >
                  {platform}
                </li>
              ))}
            </ul>

            <p className="mt-4 text-justify hyphens-auto text-[0.9rem] leading-relaxed text-ink/80">
              {project.description}
            </p>

            <ul className="mt-4 flex flex-wrap gap-x-2 gap-y-1">
              {project.stack.map((item) => (
                <li
                  key={item}
                  className="rounded border border-line px-2 py-0.5 text-xs text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>

            {project.links ? (
              <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-line pt-4">
                {project.links.map((link) => (
                  <li key={link.url}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent-text"
                    >
                      {link.label}
                      <ArrowIcon />
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </article>
        ))}
      </div>
    </Section>
  )
}

import { contact } from '@/data/cv'
import { Icon } from './Icons'
import Section from './Section'

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="flex flex-col items-center text-center">
        <p className="text-xl font-semibold tracking-tight text-ink">
          {contact.name}
        </p>
        <p className="mt-1 text-sm text-muted">{contact.title}</p>

        <div className="mt-6 space-y-1 text-[0.95rem]">
          <p>
            <a
              href={`mailto:${contact.email}`}
              className="text-ink transition-colors hover:text-accent-text"
            >
              {contact.email}
            </a>
          </p>
          <p>
            <a
              href={`tel:${contact.phone.replace(/\s/g, '')}`}
              className="text-ink transition-colors hover:text-accent-text"
            >
              {contact.phone}
            </a>
          </p>
        </div>

        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {contact.links.map((link) => (
            <li key={link.url}>
              <a
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
              >
                <Icon
                  name={link.icon}
                  className="h-4 w-4 text-muted transition-colors group-hover:text-accent-text"
                />
                <span className="border-b border-transparent pb-px transition-colors group-hover:border-accent">
                  {link.label}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-14 text-xs leading-relaxed text-muted">
          {contact.footer.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </div>
    </Section>
  )
}

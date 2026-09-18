import Image from 'next/image'
import { hero } from '@/data/cv'
import { Icon } from './Icons'
import Reveal from './Reveal'

export default function Hero() {
  return (
    <section id="about" aria-labelledby="about-heading" className="pt-32 pb-20 sm:pt-40 sm:pb-24">
      <div className="mx-auto w-full max-w-5xl px-6">
        <Reveal>
          <div className="grid items-start gap-12 md:grid-cols-[minmax(0,1fr)_auto] md:gap-16">
            <div>
              <h1
                id="about-heading"
                className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl"
              >
                {hero.name}
              </h1>
              <p className="mt-2 text-lg text-muted">{hero.title}</p>

              <div className="mt-6 space-y-4 text-justify hyphens-auto text-[0.975rem] leading-relaxed text-ink/85">
                {hero.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                {hero.links.map((link) => (
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
            </div>

            <div className="flex flex-col items-center md:items-end">
              <Image
                src={hero.photo.src}
                alt={hero.photo.alt}
                width={800}
                height={800}
                priority
                sizes="(max-width: 768px) 160px, 208px"
                className="h-40 w-40 rounded-full object-cover shadow-md ring-1 ring-line md:h-52 md:w-52"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

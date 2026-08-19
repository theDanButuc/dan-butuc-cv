import { coverLetter } from '@/data/cv'
import Section from './Section'

export default function CoverLetter() {
  return (
    <Section id="cover-letter" title={coverLetter.title}>
      <div className="border-l-2 border-accent pl-6 sm:pl-8">
        <div className="space-y-5 text-justify hyphens-auto text-[0.975rem] leading-relaxed text-ink/85">
          {coverLetter.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
      </div>
    </Section>
  )
}

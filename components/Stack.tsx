import { stack } from '@/data/cv'
import Education from './Education'
import Section from './Section'

export default function Stack() {
  return (
    <Section id="stack" title="Stack">
      <div className="space-y-8">
        {stack.map((group) => (
          <div key={group.category}>
            <h3 className="text-sm font-semibold text-ink">{group.category}</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-line px-3 py-1 text-sm text-ink/80"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <Education />
      </div>
    </Section>
  )
}

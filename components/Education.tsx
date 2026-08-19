import { certifications } from '@/data/cv'

export default function Education() {
  return (
    <div>
      <h3 className="text-sm font-semibold text-ink">Certifications</h3>
      <ul className="mt-3 flex flex-wrap gap-2">
        {certifications.map((certification) => (
          <li
            key={certification}
            className="rounded-full border border-line px-3 py-1 text-sm text-ink/80"
          >
            {certification}
          </li>
        ))}
      </ul>
    </div>
  )
}

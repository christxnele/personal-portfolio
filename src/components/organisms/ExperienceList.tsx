import type { Experience } from '../../data/experience'
import type { ExperienceGroup } from '../../data/site'
import { groupExperience } from '../../helpers/experience'
import { ExperienceEntry, type ExperienceEntryLabels } from './ExperienceEntry'

type ExperienceListProps = {
  entries: Experience[]
  groups: ExperienceGroup[]
  labels: ExperienceEntryLabels
}

export function ExperienceList({ entries, groups, labels }: ExperienceListProps) {
  return (
    <div className="space-y-14 sm:space-y-20">
      {groupExperience(entries, groups).map((group) => (
        <section key={group.label} aria-label={group.label}>
          <h3 className="mb-2 font-mono text-sm uppercase tracking-[0.14em] text-ink">{group.label}</h3>
          <ul>
            {group.entries.map((entry) => (
              <li key={`${entry.organization}-${entry.role}-${entry.startDate}`}>
                <ExperienceEntry entry={entry} labels={labels} />
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}

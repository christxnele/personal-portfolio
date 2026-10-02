import type { Experience } from '../data/experience'
import type { ExperienceGroup } from '../data/site'

// Splits entries into the given groups, keeping data order and dropping empty groups.
export function groupExperience(
  entries: Experience[],
  groups: ExperienceGroup[],
): Array<{ label: string; entries: Experience[] }> {
  return groups
    .map((group) => ({
      label: group.label,
      entries: entries.filter((entry) => group.types.includes(entry.type)),
    }))
    .filter((group) => group.entries.length > 0)
}

import type { Experience } from '../../data/experience'
import { isFilled } from '../../helpers/content'
import { externalLinkProps } from '../../helpers/links'
import { MonoLabel } from '../atoms/MonoLabel'
import { WobblyRule } from '../atoms/WobblyRule'
import { DateRange } from '../molecules/DateRange'
import { LeafList } from '../molecules/LeafList'
import { TagList } from '../molecules/TagList'

export type ExperienceEntryLabels = {
  experienceTech: string
  dateRangeTo: string
}

type ExperienceEntryProps = {
  entry: Experience
  labels: ExperienceEntryLabels
}

export function ExperienceEntry({ entry, labels }: ExperienceEntryProps) {
  return (
    <article className="relative grid grid-cols-1 gap-x-10 gap-y-3 py-8 md:grid-cols-[11rem_minmax(0,1fr)]">
      <WobblyRule seed={entry.organization.length * 7} className="absolute inset-x-0 top-0 h-3 -translate-y-1/2 text-rule" />
      <div className="flex flex-wrap gap-x-4 gap-y-1 md:flex-col">
        <DateRange start={entry.startDate} end={entry.endDate} toLabel={labels.dateRangeTo} className="text-ink" />
        {isFilled(entry.location) && <MonoLabel>{entry.location}</MonoLabel>}
      </div>

      <div>
        <h4 className="font-display text-3xl font-bold leading-none">{entry.role}</h4>
        <p className="mt-2 text-lg">
          {isFilled(entry.url) ? (
            <a
              href={entry.url}
              {...externalLinkProps(entry.url)}
              className="underline decoration-rule underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
            >
              {entry.organization} <span aria-hidden="true">↗</span>
            </a>
          ) : (
            entry.organization
          )}
        </p>

        {isFilled(entry.summary) && <p className="mt-3 text-muted">{entry.summary}</p>}

        <LeafList items={entry.bullets} className="mt-5" />

        {entry.tech && entry.tech.length > 0 && (
          <TagList label={labels.experienceTech} tags={entry.tech} tone="nav" className="mt-5" />
        )}
      </div>
    </article>
  )
}

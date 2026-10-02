import type { ReactNode } from 'react'
import type { SiteSection } from '../../data/site'
import { cn } from '../../helpers/cn'
import { TornEdge } from '../atoms/TornEdge'
import { SectionHeading } from '../molecules/SectionHeading'

type SectionProps = {
  section: SiteSection
  children?: ReactNode
}

// A full-width band for one page section, with its heading and content.
export function Section({ section, children }: SectionProps) {
  const titleId = `${section.id}-title`

  return (
    <section
      id={section.id}
      aria-labelledby={titleId}
      className={cn('relative', section.tone === 'surface' ? 'bg-surface' : 'bg-paper')}
    >
      <TornEdge
        seed={section.id.charCodeAt(0)}
        fillClassName={section.tone === 'surface' ? 'fill-surface' : 'fill-paper'}
      />
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28">
        <SectionHeading id={titleId} title={section.label} />
        {children}
      </div>
    </section>
  )
}

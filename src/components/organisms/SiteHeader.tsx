import type { SiteSection } from '../../data/site'
import { useActiveSection } from '../../hooks/useActiveSection'
import { ButtonLink } from '../atoms/ButtonLink'
import { WobblyRule } from '../atoms/WobblyRule'

type SiteHeaderProps = {
  name: string
  sections: SiteSection[]
  navLabel: string
  resumeHref: string
  resumeLabel: string
}

export function SiteHeader({ name, sections, navLabel, resumeHref, resumeLabel }: SiteHeaderProps) {
  const active = useActiveSection(sections.map((section) => section.id))

  return (
    <header className="sticky top-0 z-40 bg-nav text-nav-ink">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-y-1 px-4 py-3 sm:px-6">
        <a href="#top" className="font-display text-3xl font-bold leading-none hover:opacity-80 focus-visible:outline-nav-ink">
          {name}
        </a>

        <nav aria-label={navLabel} className="order-last w-full sm:order-none sm:ml-auto sm:w-auto">
          <ul className="flex gap-5 sm:gap-7">
            {sections.map((section) => {
              const isActive = active === section.id
              return (
                <li key={section.id} className="relative">
                  <a
                    href={`#${section.id}`}
                    aria-current={isActive ? 'location' : undefined}
                    className="font-display text-xl font-bold transition-opacity hover:opacity-80 focus-visible:outline-nav-ink"
                  >
                    {section.label}
                  </a>
                  {isActive && (
                    <WobblyRule seed={section.id.length} className="absolute inset-x-0 -bottom-1.5 h-2 text-nav-ink" />
                  )}
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="sm:ml-8">
          <ButtonLink href={resumeHref} variant="nav" size="sm">
            {resumeLabel}
          </ButtonLink>
        </div>
      </div>

      <WobblyRule seed={7} className="absolute inset-x-0 bottom-0 h-3 translate-y-1/2 text-rule" />
    </header>
  )
}

import type { SocialLink } from '../../data/profile'
import { Doodle } from '../atoms/Doodle'
import { MonoLabel } from '../atoms/MonoLabel'
import { TornEdge } from '../atoms/TornEdge'
import { SocialLinks } from '../molecules/SocialLinks'

type SiteFooterProps = {
  name: string
  socials: SocialLink[]
}

export function SiteFooter({ name, socials }: SiteFooterProps) {
  return (
    <footer className="relative bg-surface">
      <TornEdge seed={99} fillClassName="fill-surface" />
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex items-center gap-3">
          <Doodle name="leaf" className="size-7 text-accent" />
          <MonoLabel>
            © {new Date().getFullYear()} {name}
          </MonoLabel>
        </div>
        <SocialLinks links={socials} />
      </div>
    </footer>
  )
}

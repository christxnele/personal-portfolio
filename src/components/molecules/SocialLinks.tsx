import type { SocialLink } from '../../data/profile'
import { cn } from '../../helpers/cn'
import { TextLink } from '../atoms/TextLink'

type SocialLinksProps = {
  links: SocialLink[]
  className?: string
}

export function SocialLinks({ links, className }: SocialLinksProps) {
  return (
    <ul className={cn('flex flex-wrap gap-x-6 gap-y-2', className)}>
      {links.map((link) => (
        <li key={link.url}>
          <TextLink href={link.url}>{link.label}</TextLink>
        </li>
      ))}
    </ul>
  )
}

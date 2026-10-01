import type { ReactNode } from 'react'
import { cn } from '../../helpers/cn'
import { externalLinkProps } from '../../helpers/links'

type TextLinkProps = {
  href: string
  children: ReactNode
  className?: string
}

// Small uppercase underlined link, used for socials and project links.
export function TextLink({ href, children, className }: TextLinkProps) {
  return (
    <a
      href={href}
      {...externalLinkProps(href)}
      className={cn(
        'font-mono text-xs uppercase tracking-[0.14em] text-ink underline decoration-rule underline-offset-4 transition-colors hover:text-accent hover:decoration-accent',
        className,
      )}
    >
      {children}
    </a>
  )
}

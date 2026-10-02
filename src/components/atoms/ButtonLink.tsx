import type { ReactNode } from 'react'
import { cn } from '../../helpers/cn'
import { externalLinkProps } from '../../helpers/links'

type ButtonLinkProps = {
  href: string
  variant?: 'solid' | 'outline' | 'nav'
  size?: 'md' | 'sm'
  children: ReactNode
}

// A link styled as a button. Text stays large and bold so cream on the accent green
// meets the WCAG contrast ratio for large text.
export function ButtonLink({ href, variant = 'solid', size = 'md', children }: ButtonLinkProps) {
  return (
    <a
      href={href}
      {...externalLinkProps(href)}
      className={cn(
        'sketchy inline-flex items-center gap-2 border-[1.5px] font-display font-bold transition-colors',
        size === 'md' ? 'px-6 py-1.5 text-[1.375rem]' : 'px-4 py-0.5 text-xl',
        variant === 'solid' && 'border-accent bg-accent text-paper hover:border-ink hover:bg-ink',
        variant === 'outline' &&
          'border-ink text-ink hover:border-accent hover:bg-accent hover:text-paper',
        variant === 'nav' &&
          'border-nav-ink text-nav-ink hover:bg-nav-ink hover:text-nav focus-visible:outline-nav-ink',
      )}
    >
      {children}
    </a>
  )
}

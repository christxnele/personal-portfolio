import type { ReactNode } from 'react'
import { cn } from '../../helpers/cn'

export type TagTone = 'mint' | 'laurel' | 'nav'

type TagProps = {
  tone?: TagTone
  className?: string
  children: ReactNode
}

// The nav tone matches the navbar. Its text is bold and fairly large because cream on sage is low contrast.
export function Tag({ tone = 'mint', className, children }: TagProps) {
  return (
    <span
      className={cn(
        'sketchy inline-flex max-w-full items-center gap-1.5 px-3 py-1',
        tone === 'mint' && 'bg-mint text-base text-ink',
        tone === 'laurel' && 'bg-laurel text-base text-ink',
        tone === 'nav' && 'bg-nav font-display text-lg font-bold text-nav-ink',
        className,
      )}
    >
      {children}
    </span>
  )
}

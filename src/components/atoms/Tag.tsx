import type { ReactNode } from 'react'
import { cn } from '../../helpers/cn'

type TagProps = {
  tone?: 'mint' | 'laurel'
  className?: string
  children: ReactNode
}

export function Tag({ tone = 'mint', className, children }: TagProps) {
  return (
    <span
      className={cn(
        'sketchy inline-flex max-w-full items-center gap-1.5 px-3 py-1 text-base text-ink',
        tone === 'mint' ? 'bg-mint' : 'bg-laurel',
        className,
      )}
    >
      {children}
    </span>
  )
}

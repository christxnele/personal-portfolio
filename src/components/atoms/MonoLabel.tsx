import type { ReactNode } from 'react'
import { cn } from '../../helpers/cn'

type MonoLabelProps = {
  children: ReactNode
  className?: string
}

// Small uppercase label for dates, numbering like (01), and captions.
export function MonoLabel({ children, className }: MonoLabelProps) {
  return (
    <span className={cn('font-mono text-xs uppercase tracking-[0.14em] text-muted', className)}>
      {children}
    </span>
  )
}

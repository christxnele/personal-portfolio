import { cn } from '../../helpers/cn'
import { Doodle } from '../atoms/Doodle'

type LeafListProps = {
  items: string[]
  className?: string
}

// Bullet list with small leaf doodles as markers.
export function LeafList({ items, className }: LeafListProps) {
  return (
    <ul className={cn('space-y-3', className)}>
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <Doodle name="leaf" className="mt-1 size-4 text-accent" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

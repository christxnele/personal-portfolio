import { formatMonth } from '../../helpers/dates'
import { MonoLabel } from '../atoms/MonoLabel'

type DateRangeProps = {
  start: string
  end: string
  toLabel: string // spoken by screen readers in place of the arrow
  className?: string
}

export function DateRange({ start, end, toLabel, className }: DateRangeProps) {
  return (
    <MonoLabel className={className}>
      {formatMonth(start)} <span aria-hidden="true">→</span>
      <span className="sr-only">{toLabel}</span> {formatMonth(end)}
    </MonoLabel>
  )
}

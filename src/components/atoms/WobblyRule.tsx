import { cn } from '../../helpers/cn'
import { WOBBLE_HEIGHT, WOBBLE_WIDTH, wobbleLinePath } from '../../helpers/sketch'

type WobblyRuleProps = {
  seed?: number
  // Replaces the default 'h-3 text-rule', so include a height and a text color class.
  // (Tailwind can't tell which of two text-* classes should win, so they can't be stacked.)
  className?: string
}

// Hand-drawn horizontal divider that stretches to its container's width.
export function WobblyRule({ seed = 1, className = 'h-3 text-rule' }: WobblyRuleProps) {
  return (
    <svg
      viewBox={`0 0 ${WOBBLE_WIDTH} ${WOBBLE_HEIGHT}`}
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
      className={cn('block w-full overflow-visible', className)}
    >
      <path
        d={wobbleLinePath(seed)}
        fill="none"
        stroke="currentColor"
        strokeWidth={1.3}
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
}

import { cn } from '../../helpers/cn'
import { WOBBLE_HEIGHT, WOBBLE_WIDTH, wobbleLinePath } from '../../helpers/sketch'

type WobblyRuleProps = {
  seed?: number
  className?: string // set color with a text class, e.g. text-rule
}

// Hand-drawn horizontal divider that stretches to its container's width.
export function WobblyRule({ seed = 1, className }: WobblyRuleProps) {
  return (
    <svg
      viewBox={`0 0 ${WOBBLE_WIDTH} ${WOBBLE_HEIGHT}`}
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
      className={cn('block h-3 w-full overflow-visible text-rule', className)}
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

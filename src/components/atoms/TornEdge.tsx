import { cn } from '../../helpers/cn'
import { WOBBLE_HEIGHT, WOBBLE_WIDTH, wobbleLinePath } from '../../helpers/sketch'

type TornEdgeProps = {
  seed?: number
  fillClassName: string // band color, e.g. fill-surface
  className?: string
}

// Wobbly top edge for a full-width band, so bands meet like torn paper instead of a straight line.
// Place inside a relative parent; it sits just above the parent's top edge.
export function TornEdge({ seed = 1, fillClassName, className }: TornEdgeProps) {
  const line = wobbleLinePath(seed, 40, 3)
  return (
    <svg
      viewBox={`0 0 ${WOBBLE_WIDTH} ${WOBBLE_HEIGHT}`}
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
      className={cn('pointer-events-none absolute inset-x-0 bottom-full block h-3 w-full', className)}
    >
      <path d={`${line} L${WOBBLE_WIDTH} ${WOBBLE_HEIGHT + 1} L0 ${WOBBLE_HEIGHT + 1} Z`} className={fillClassName} />
      <path
        d={line}
        fill="none"
        stroke="currentColor"
        strokeWidth={1.3}
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        className="text-rule"
      />
    </svg>
  )
}

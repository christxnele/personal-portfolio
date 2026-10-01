import { cn } from '../../helpers/cn'
import { sketchRectPath } from '../../helpers/sketch'

type SketchBorderProps = {
  seed?: number
  className?: string // set color with a text class, e.g. text-rule
}

// Pen-sketched outline that fills its parent. The parent needs `relative`.
export function SketchBorder({ seed = 1, className }: SketchBorderProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
      className={cn('pointer-events-none absolute inset-0 size-full overflow-visible text-rule', className)}
    >
      <path
        d={sketchRectPath(seed)}
        fill="none"
        stroke="currentColor"
        strokeWidth={1.3}
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
}

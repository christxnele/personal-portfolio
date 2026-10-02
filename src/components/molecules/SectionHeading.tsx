import { Doodle } from '../atoms/Doodle'
import { WobblyRule } from '../atoms/WobblyRule'

type SectionHeadingProps = {
  id: string // used by the section's aria-labelledby
  title: string
}

export function SectionHeading({ id, title }: SectionHeadingProps) {
  return (
    <div className="mb-10 sm:mb-14">
      <div className="flex items-end gap-3 pb-2">
        <Doodle name="sprout" className="mb-1 size-9 text-accent" />
        <h2 id={id} className="font-display text-4xl font-bold leading-none sm:text-5xl">
          {title}
        </h2>
      </div>
      <WobblyRule seed={title.length * 13} />
    </div>
  )
}

import { MonoLabel } from '../atoms/MonoLabel'
import { Tag, type TagTone } from '../atoms/Tag'

type TagListProps = {
  label: string
  tags: string[]
  tone?: TagTone
  className?: string
}

export function TagList({ label, tags, tone, className }: TagListProps) {
  return (
    <div className={className}>
      <MonoLabel>{label}</MonoLabel>
      <ul className="mt-2 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <li key={tag}>
            <Tag tone={tone}>{tag}</Tag>
          </li>
        ))}
      </ul>
    </div>
  )
}

import { MonoLabel } from '../atoms/MonoLabel'
import { Tag } from '../atoms/Tag'

type TagListProps = {
  label: string
  tags: string[]
  className?: string
}

export function TagList({ label, tags, className }: TagListProps) {
  return (
    <div className={className}>
      <MonoLabel>{label}</MonoLabel>
      <ul className="mt-2 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <li key={tag}>
            <Tag>{tag}</Tag>
          </li>
        ))}
      </ul>
    </div>
  )
}

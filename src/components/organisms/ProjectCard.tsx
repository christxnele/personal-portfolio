import type { Project, ProjectLinks } from '../../data/projects'
import { isFilled } from '../../helpers/content'
import { formatMonth } from '../../helpers/dates'
import { Doodle } from '../atoms/Doodle'
import { MonoLabel } from '../atoms/MonoLabel'
import { SketchBorder } from '../atoms/SketchBorder'
import { TextLink } from '../atoms/TextLink'
import { LeafList } from '../molecules/LeafList'
import { TagList } from '../molecules/TagList'

export type ProjectCardLabels = {
  role: string
  techUsed: string
  projectLinks: Record<keyof ProjectLinks, string>
}

type ProjectCardProps = {
  project: Project
  number: number
  labels: ProjectCardLabels
}

export function ProjectCard({ project, number, labels }: ProjectCardProps) {
  const titleId = `project-${project.slug}`
  const links = (Object.keys(labels.projectLinks) as Array<keyof ProjectLinks>).flatMap((key) => {
    const href = project.links[key]
    return isFilled(href) ? [{ key, href }] : []
  })
  const image = project.image && isFilled(project.image.src) ? project.image : undefined

  return (
    <article
      aria-labelledby={titleId}
      className="relative grid grid-cols-1 gap-8 bg-surface/60 p-5 sm:p-8 md:grid-cols-[minmax(0,1fr)_15rem]"
    >
      <SketchBorder seed={number * 31} />
      <div>
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
          <MonoLabel className="text-ink">({String(number).padStart(2, '0')})</MonoLabel>
          <MonoLabel>{formatMonth(project.date)}</MonoLabel>
          {isFilled(project.context) && <MonoLabel>{project.context}</MonoLabel>}
        </div>

        <h3 id={titleId} className="mt-3 font-display text-4xl font-bold leading-none sm:text-5xl">
          {project.title}
        </h3>
        <p className="mt-3 text-lg">{project.summary}</p>

        {isFilled(project.role) && (
          <p className="mt-4 flex flex-wrap items-baseline gap-x-3">
            <MonoLabel>{labels.role}</MonoLabel>
            <span>{project.role}</span>
          </p>
        )}

        <p className="mt-4 text-muted">{project.description}</p>

        <LeafList items={project.highlights} className="mt-6" />

        <TagList label={labels.techUsed} tags={project.tech} tone="nav" className="mt-6" />

        {links.length > 0 && (
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
            {links.map(({ key, href }) => (
              <li key={key}>
                <TextLink href={href}>
                  {labels.projectLinks[key]} <span aria-hidden="true">↗</span>
                </TextLink>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Framed plate: the screenshot when there is one, otherwise a leaf doodle (desktop only) */}
      <div className={image ? '-order-1 md:order-none' : 'hidden md:block'}>
        <div className="relative p-2">
          <SketchBorder seed={number * 17} />
          <div className="relative flex aspect-[4/5] items-center justify-center bg-paper">
            <SketchBorder seed={number * 23} />
            {image ? (
              <img src={image.src} alt={image.alt} loading="lazy" className="size-full object-cover" />
            ) : (
              <Doodle name="leaf" className="size-20 text-leaf-400" />
            )}
          </div>
        </div>
      </div>
    </article>
  )
}

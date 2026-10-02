import type { Project } from '../../data/projects'
import { sortFeaturedFirst } from '../../helpers/projects'
import { ProjectCard, type ProjectCardLabels } from './ProjectCard'

type ProjectListProps = {
  projects: Project[]
  labels: ProjectCardLabels
}

export function ProjectList({ projects, labels }: ProjectListProps) {
  return (
    <ol className="space-y-8 sm:space-y-10">
      {sortFeaturedFirst(projects).map((project, index) => (
        <li key={project.slug}>
          <ProjectCard project={project} number={index + 1} labels={labels} />
        </li>
      ))}
    </ol>
  )
}

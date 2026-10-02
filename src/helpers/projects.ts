import type { Project } from '../data/projects'

// Featured projects first, otherwise keeps the order from src/data/projects.ts.
export function sortFeaturedFirst(projects: Project[]): Project[] {
  return [...projects].sort((a, b) => Number(b.featured) - Number(a.featured))
}

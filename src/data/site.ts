// Site-wide labels: the page sections (used for nav links and anchors) and small UI text.

import type { ExperienceType } from './experience'

export type SectionId = 'projects' | 'experience' | 'about' | 'contact'

export type SiteSection = {
  id: SectionId
  label: string
  tone: 'paper' | 'surface' // background of the section band
}

export const sections: SiteSection[] = [
  { id: 'projects', label: 'Projects', tone: 'paper' },
  { id: 'experience', label: 'Experience', tone: 'surface' },
  { id: 'about', label: 'About', tone: 'paper' },
  { id: 'contact', label: 'Contact', tone: 'surface' },
]

export const ui = {
  skipToContent: 'Skip to content',
  resume: 'View resume',
  resumeShort: 'Resume',
  contact: 'Get in touch',
  primaryNav: 'Primary',
  role: 'Role',
  techUsed: 'Built with',
  projectLinks: {
    live: 'Live site',
    repo: 'Code',
    video: 'Demo video',
    writeup: 'Devpost',
  },
  experienceTech: 'Tools',
  dateRangeTo: 'to', // read by screen readers between dates; sighted users see an arrow
}

export type ExperienceGroup = {
  label: string
  types: ExperienceType[]
}

// How the Experience section is split up, in display order. Empty groups are skipped.
export const experienceGroups: ExperienceGroup[] = [
  { label: 'Internships & work', types: ['internship', 'full-time', 'part-time'] },
  { label: 'Research', types: ['research'] },
  { label: 'Leadership & community', types: ['leadership', 'volunteer'] },
]

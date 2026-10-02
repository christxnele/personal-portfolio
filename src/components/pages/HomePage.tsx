import type { ReactNode } from 'react'
import { experience } from '../../data/experience'
import { profile } from '../../data/profile'
import { projects } from '../../data/projects'
import { experienceGroups, sections, ui, type SectionId } from '../../data/site'
import { ExperienceList } from '../organisms/ExperienceList'
import { Hero } from '../organisms/Hero'
import { ProjectList } from '../organisms/ProjectList'
import { Section } from '../organisms/Section'
import { SiteFooter } from '../organisms/SiteFooter'
import { SiteHeader } from '../organisms/SiteHeader'
import { SinglePageTemplate } from '../templates/SinglePageTemplate'

// Content for each section. Sections without an entry yet render just their heading.
const sectionContent: Partial<Record<SectionId, ReactNode>> = {
  projects: <ProjectList projects={projects} labels={ui} />,
  experience: <ExperienceList entries={experience} groups={experienceGroups} labels={ui} />,
}

export function HomePage() {
  return (
    <SinglePageTemplate
      skipLabel={ui.skipToContent}
      header={
        <SiteHeader
          name={profile.name}
          sections={sections}
          navLabel={ui.primaryNav}
          resumeHref={profile.resumeUrl}
          resumeLabel={ui.resumeShort}
        />
      }
      footer={<SiteFooter name={profile.name} socials={profile.socials} />}
    >
      <Hero
        profile={profile}
        resumeLabel={ui.resume}
        contactLabel={ui.contact}
        contactHref="#contact"
      />
      {sections.map((section) => (
        <Section key={section.id} section={section}>
          {sectionContent[section.id]}
        </Section>
      ))}
    </SinglePageTemplate>
  )
}

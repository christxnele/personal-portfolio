// Jobs, internships, research, and leadership roles for the Experience section.
// List newest first. Copy the object inside the array once per role. Replace every "TODO" string.
// Delete optional fields (marked with ?) that don't apply.

export type ExperienceType =
  | 'internship'
  | 'full-time'
  | 'part-time'
  | 'research'
  | 'leadership'
  | 'volunteer'

export type Experience = {
  organization: string // company, lab, or club name
  role: string // your title
  type: ExperienceType
  location?: string // e.g. "Toronto, ON" or "Remote"
  startDate: string // "YYYY-MM"
  endDate: string | 'present' // "YYYY-MM" or "present"
  summary?: string // one sentence about the team or what the org does
  bullets: string[] // what you did, first person, past tense for past roles. Only real numbers.
  tech?: string[] // tools or languages used, shown as tags
  url?: string // org website
}

export const experience: Experience[] = [
  {
    organization: 'Data Science Alliance',
    role: 'Web Developer Intern',
    type: 'internship',
    location: 'San Diego, CA',
    startDate: '2026-06',
    endDate: '2026-09',
    summary:
      'I worked on a team of 3 building games that teach visitors to the DSA website about data science ethics, and on a team of 2 making a food bank\'s delivery routing tool fast and reliable.',
    bullets: [
      'Designed and built a Hangman game on my own from game logic to visual design (React, Vite, Supabase), and collaborated on a Wordle-style game, boosting visitor engagement with data science ethics and awareness.',
      'Replaced synchronous route optimization with async jobs and geocode and matrix caching for the food bank\'s routing tool, cutting re-optimization time from minutes to seconds and eliminating timeouts.',
      'Persisted fleet data with CRUD endpoints, named presets, and a tuned solver (bounded time limits, guided local search), enabling fast, reliable route generation every planning day.',
    ],
    tech: ['React', 'Vite', 'Supabase'],
    url: 'TODO: https://... (or delete this line)',
  },
  {
    organization: 'Water Resources Economics',
    role: 'Data & Web Development Intern',
    type: 'internship',
    location: 'Remote',
    startDate: '2026-07',
    endDate: 'present',
    summary:
      "At an economics consulting firm for water utilities, I built the firm's first public tool for comparing water rates across 347 California cities, from collecting the data to building the calculator.",
    bullets: [
      "Collected and compiled water rates for 347 California cities, with my supervisor reviewing the data, powering the firm's first public rate comparison tool.",
      'Built a self-service rate calculator (WordPress, JavaScript, Chart.js, Papa Parse) that lets residents and city officials compare water rates statewide instantly and at no cost.',
    ],
    tech: ['WordPress', 'JavaScript', 'Chart.js', 'Papa Parse'],
    url: 'https://water-economics.com/water-rate-comparison-tool/',
  },
  {
    organization: 'Nest Friends',
    role: 'Full Stack Developer Intern',
    type: 'internship',
    location: 'Remote',
    startDate: '2025-11',
    endDate: '2026-02',
    summary:
      'I worked on the frontend of Nest Friends, a dating app for homeowners, as part of a small team of developers.',
    bullets: [
      'Built 4 to 5 production React Native screens and implemented Mixpanel analytics across 15+ events, accelerating design-to-dev handoff and enabling data-driven product decisions.',
      'Helped design app screens and smaller UI elements like badges, and pushed frontend changes to the development environment.',
    ],
    tech: ['React Native', 'Mixpanel'],
    url: 'TODO: https://... (or delete this line)',
  },
  {
    organization: 'Association for Computing Machinery @ UCSD',
    role: 'Hack Projects Lead',
    type: 'leadership',
    startDate: '2026-05',
    endDate: 'present',
    summary:
      "I mentor in ACM's Hack Projects, a quarter long program where teams of 4 to 5 students from every year build a project with guidance from 1 to 2 mentors.",
    bullets: [
      'Mentored a student team in Summer 2026, providing technical guidance across the MERN stack and coaching them on Agile development practices throughout the project lifecycle.',
      'Promote Hack Projects and table for the program to bring in students who are passionate about building.',
    ],
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
  },
  {
    organization: 'Triton Web Developers',
    role: 'Web Developer',
    type: 'leadership',
    startDate: '2026-04',
    endDate: 'present',
    bullets: [
      'Build and deploy production websites for student organizations lacking technical resources, collaborating with client clubs to gather requirements and deliver tailored web solutions.',
    ],
  },
]

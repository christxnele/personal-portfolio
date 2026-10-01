// Projects shown in the Projects section, numbered (01), (02)... in the order listed here.
// Copy the object inside the array once per project. Replace every "TODO" string.
// Delete optional fields (marked with ?) that don't apply.

export type ProjectLinks = {
  live?: string // deployed site or demo
  repo?: string // GitHub repo
  video?: string // demo video
  writeup?: string // blog post, Devpost, paper, etc.
}

export type Project = {
  slug: string // short unique id, lowercase with hyphens, e.g. "plant-tracker"
  title: string
  summary: string // one sentence for the card, first person
  description: string // a short paragraph: the problem, what you built, and why
  highlights: string[] // 2 to 4 bullets on what you did or achieved. Only real numbers.
  role?: string // e.g. "Solo project", "Frontend lead on a team of 4"
  context?: string // e.g. "Hackathon name", "Course name", "Personal project"
  date: string // "YYYY-MM" or "YYYY"
  tech: string[] // shown as tags
  links: ProjectLinks
  image?: { src: string; alt: string } // put screenshots in /public/projects/
  featured: boolean // true = shown first / larger on the page
}

export const projects: Project[] = [
  {
    slug: 'piggy-ai',
    title: 'Piggy.AI',
    summary:
      'A personal finance app that reads your bank statements with AI and gives advice in the tone you pick.',
    description:
      'Piggy.AI is a personal finance app my team of 4 built in under 24 hours at DiamondHacks 2026. It pulls transactions out of bank statement PDFs with Google Gemini and has an AI chat advisor that gives financial guidance in one of three tones.',
    highlights: [
      'Placed 3rd overall out of 134 teams and 400+ participants at DiamondHacks 2026.',
      'Built a Gemini 2.5 Flash PDF parsing pipeline that extracts transaction data (date, amount, category) from multiple bank statements at once, reaching 85 to 90% accuracy in 30 to 60 seconds per file.',
      'Implemented email and password login plus Google OAuth through Passport.js, with bcrypt hashing and JWT session management.',
      'Developed a personality-driven AI chat advisor with three selectable tones, making financial guidance more engaging by adapting to each user.',
    ],
    role: 'Backend developer on a team of 4',
    context: 'DiamondHacks 2026',
    date: '2026-04',
    tech: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Google Gemini'],
    links: {
      live: 'TODO: https://... (or delete this line)',
      repo: 'https://github.com/katiemoc/piggy.ai',
      writeup: 'TODO: Devpost link (or delete this line)',
    },
    image: {
      src: 'TODO: /projects/piggy-ai.png',
      alt: 'TODO: what the screenshot shows',
    },
    featured: true,
  },
  {
    slug: 'decidr',
    title: 'Decidr',
    summary:
      'A restaurant discovery app that ranks nearby San Diego restaurants by how trustworthy their Yelp ratings are.',
    description:
      'Decidr is a full-stack restaurant discovery app with a React Native frontend and an Express and MongoDB backend. It finds restaurants within a radius you choose and ranks them with a weighted algorithm that combines Yelp ratings with review counts, so places with too few reviews to trust are filtered out.',
    highlights: [
      'Designed a weighted recommendation algorithm combining Yelp ratings with review volume thresholds, filtering out low-confidence ratings across 50,000+ San Diego restaurants.',
      'Built geolocation-based search within a configurable radius with real-time Yelp API integration.',
      'Built a RESTful API in TypeScript following MVC architecture, with bcrypt password hashing, MongoDB schema validation, and protected route middleware for secure sessions.',
    ],
    role: 'Full-stack developer on a team of 5',
    context: 'ACM Projects at UCSD',
    date: '2025-12',
    tech: ['React Native', 'Express', 'TypeScript', 'MongoDB', 'Node.js', 'Yelp Places API'],
    links: {
      live: 'TODO: https://... (or delete this line)',
      repo: 'https://github.com/jadenseangmany/decidr',
    },
    image: {
      src: 'TODO: /projects/decidr.png',
      alt: 'TODO: what the screenshot shows',
    },
    featured: true,
  },
]

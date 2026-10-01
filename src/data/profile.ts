// Everything about you that isn't a project or a job: hero, about, contact, skills, links.
// Replace every "TODO" string. Delete optional fields (marked with ?) you don't want shown.

export type SocialPlatform = 'github' | 'linkedin' | 'email' | 'website' | 'other'

export type SocialLink = {
  platform: SocialPlatform
  label: string // text shown on the site, e.g. "GitHub"
  url: string // full URL, or "mailto:you@example.com" for email
}

export type SkillGroup = {
  category: string // e.g. "Languages", "Frameworks", "Tools"
  skills: string[]
}

export type Education = {
  school: string
  degree: string // e.g. "B.S. Computer Science"
  startDate: string // "YYYY-MM"
  endDate: string // "YYYY-MM" (expected graduation is fine)
  location?: string
  gpa?: string
  coursework?: string[]
  honors?: string[]
}

export type Profile = {
  name: string
  pronouns?: string
  tagline: string // the one line about you in the hero, first person
  location?: string // e.g. "Toronto, ON"
  email: string
  resumeUrl: string // path to a file in /public
  openTo?: string // e.g. "Open to Summer 2027 software engineering internships"
  about: string[] // About section, one string per paragraph, first person
  interests?: string[] // hobbies or things you like outside of work
  avatar?: { src: string; alt: string } // put the image in /public and use "/filename.jpg"
  education: Education[]
  skills: SkillGroup[]
  socials: SocialLink[]
}

export const profile: Profile = {
  name: 'Christine Le',
  pronouns: 'she/her',
  tagline: 'Growing as I go!',
  location: 'San Diego, CA',
  email: 'christinele1301@gmail.com',
  resumeUrl: '/Christine_Le__Resume.pdf',
  openTo: 'Open to Summer 2027 software engineering internships and new grad roles',
  about: [
    "I got into computer science through my intro Python class, where I fell in love with the logic and problem solving. Now I'm studying computer science at UC San Diego, and what I enjoy most is building full-stack applications that real users interact with and that make people's lives easier.",
    'Building Piggy.AI was especially fun because it tackles a genuine problem a lot of people deal with, and we got to build a real solution for it. That is the kind of work I want to keep doing.',
  ],
  interests: ['Climbing', 'Snowboarding', 'Finding new food & drink spots'],
  avatar: {
    src: 'TODO: /your-photo.jpg',
    alt: 'TODO: short description of the photo',
  },
  education: [
    {
      school: 'University of California, San Diego',
      degree: 'B.S. in Computer Science, Minor in Mathematics',
      startDate: '2023-09',
      endDate: '2027-06',
      location: 'La Jolla, CA',
      gpa: '3.81',
      coursework: [
        'Machine Learning',
        'AI (Probabilistic Models)',
        'Software Engineering',
        'Operating Systems',
        'Algorithms',
        'Advanced Data Structures',
        'Web Development & Analytics',
      ],
    },
  ],
  skills: [
    {
      category: 'Languages',
      skills: ['Python', 'Java', 'C/C++', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Bash'],
    },
    {
      category: 'Frameworks & Tools',
      skills: ['React', 'Node.js', 'Express', 'Next.js', 'PyTorch', 'pandas', 'MongoDB', 'PostgreSQL', 'Supabase'],
    },
    {
      category: 'Developer Tools',
      skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'Vim', 'Linux/Unix', 'GDB'],
    },
  ],
  socials: [
    { platform: 'github', label: 'GitHub', url: 'https://github.com/christxnele' },
    { platform: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/christnele/' },
    { platform: 'email', label: 'Email', url: 'mailto:christinele1301@gmail.com' },
  ],
}

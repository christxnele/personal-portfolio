# Portfolio

This is a personal portfolio site showcasing my projects, experience, and contact info. I will be using it when applying for internship and job applications so it has to appeal to the recruiters that click on my page, as well as any other user. I want it to be unique and be based on my preferences

## Site sections
- Hero: name, one line about me, links to resume and contact
- Projects
- Experience
- About
- Contact
  
# Content rules
- Never invent facts about me (projects, jobs, dates, metrics, skills). If content is missing, use an obvious placeholder like `TODO: project description` and tell me.
- Site copy is written in first person.
- 
## Stack
- Vite + React + Typescript
- Tailwind CSS
- Deployed on Vercel from the main branch

## Commands
- `npm run dev`: start the dev server
- `npm run build`: production build
- `npm run lint`: run ESlint

## Structure

- `src/components`: reusable UI pieces
- `src/components/atoms`: these are the building blocks, which cannot be further broken down
- `src/components/molecules`:  Atoms grouped together form a single molecule
- `src/components/organisms`: Molecules joined together to create a part of the interface
- `src/components/templates`: The content structure
- `src/components/pages`:Interfaces built as instances of templates
- `src/helpers`: pure TypeScript functions with no React (formatting, sorting, class name merging). Keep them small and side effect free.
- `src/hooks`: custom React hooks for shared stateful logic.
- `src/data`: all site content (projects, experience, skills, links) lives here as typed arrays. Components only render this data. Never hardcode content inside components.

## Design
- Mood board images are in `design/moodboard/`. Look at them before making visual decisions.
- Overall feel: calm, earthy, and botanical, like a vintage nature journal or an editorial magazine. Hand-drawn and a little whimsical, but still clean and easy to read.
- Illustrations: simple green line-art doodles of plants, sprouts, and leaves, used as small decorative touches.
- Layout: generous whitespace, paper-like backgrounds (subtle grain is welcome), numbered items like (01) for projects, thin rule lines and bordered frames.
- Avoid: bright saturated colors, heavy gradients, generic startup templates, glossy or corporate looks.
- Colors (use these roles, don't introduce new colors):
  - Background: Villa Nova `#E4E0C8` (warm cream)
  - Surface for cards and alternate sections: Pastel Gray `#D4D0B9`
  - Main text and headings: Kombu Green `#394931`
  - Secondary text, captions, dates: Ocean Deep `#4E5954`
  - Accent for buttons, links, and hover: `#728156`
  - Soft fills for tags, badges, and highlights: `#CFE1B9` and Laurel Green `#AFB59D`
  - Muted borders and dividers: Artichoke `#90997F`
  - Extra greens if needed for illustrations: `#E7F5DC`, `#B6C99B`, `#98A77C`, `#88976C`
  -  Colors and fonts are defined as theme tokens in `src/index.css` under `@theme`. Always use the token classes, never raw hex values in components.
- Fonts (all from Google Fonts):
  - Headings, hero text, nav, section titles: Gaegu (bold for large headings)
  - Body text and descriptions: Quicksand, weight 500 minimum, 16px or larger
  - Small labels, dates, numbering like (01): DM Mono, uppercase with slight letter spacing


## Conventions
- Functional components with named exports
- Tailwind classes only, no separate CSS files except index.css
- Mobile first: check layouts at phone width
- Keep the bundle light; ask before adding a new dependency
- 
## Workflow
- Run `npm run lint` and `npm run build` before saying a task is done.
- Keep changes small and focused on one thing at a time.
- Types for data live next to the data in `src/data`.

## Writing style for site copy
- Plain, natural sentences. No dashes and nothing that reads as AI-generated.
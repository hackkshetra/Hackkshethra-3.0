# Project Instructions

## Purpose

HACKKSHETRA 3.0 is a frontend-only, multi-page event website for the 11–12 December 2026 national-level hackathon. It presents the event overview, AI domains, schedule, organizers, associations, prizes, registration guidance, sponsorship opportunities, and historical gallery.

## Tech Stack

- JavaScript, React 18, Create React App (`react-scripts` 5)
- `styled-components` with a shared dark theme
- React Three Fiber/Drei for the star field and Earth model
- Framer Motion, React Tilt, and Vertical Timeline for presentation
- No backend, database, server API, or global state library

## Build and Run

- Install exactly from the lockfile: `npm ci`
- Development server: `npm start`
- Production build: `npm run build`
- Tests: `npm test -- --watchAll=false`
- There is no separate lint script; CRA's ESLint config runs during builds.

## Runtime Structure

- `src/index.js` mounts `<App />` in React Strict Mode.
- `src/App.js` applies the theme and defines the React Router route table.
- Navigation uses browser routes for Home, About, Domains, Schedule, Prizes, Sponsors, Glimpses, Team, and Registration.
- `src/data/constants.js` is the main content source for event metadata, domains, timeline, prizes, organizers, associations, sponsorship tiers, submission guidance, and perks.
- Section-level UI state stays local: mobile menu, track modal, contributor filter, and gallery lightbox.
- Query contact details are available in the global footer; student coordinator phone numbers are listed on the Team page.

## Project Structure

- `src/components/sections/` - full-width page sections
- `src/components/cards/` - timeline and contributor/association cards
- `src/components/canvas/` - Three.js-backed React canvas components
- `src/components/HeroBgAnimation/` - animated SVG hero artwork
- `src/data/constants.js` - primary editable event content
- `src/utils/Themes.js` - shared theme tokens
- `src/utils/motion.js` - reusable Framer Motion variants
- `src/images/` - imported assets plus a very large historical media archive
- `public/planet/` - GLTF Earth model and textures
- `docs/project-analysis/` - detailed project audit and handover notes; verify against current code before relying on line numbers

## Conventions

- Use function components and named styled components in the same file.
- Name components and component files in PascalCase; utility/data files may use camelCase.
- Keep reusable event content in `src/data/constants.js`; avoid adding more edition-specific literals to components.
- Use the theme tokens instead of introducing isolated colors where practical.
- Match existing responsive breakpoints (primarily 960 px, 768 px, and 500/640 px).
- Give mapped elements stable, unique keys and interactive controls keyboard-accessible semantics.
- Do not add credentials or private secrets to source.

## Change Guide

- Event copy, dates, tracks, prizes, people, associations, perks: `src/data/constants.js`
- Section order or page composition: `src/App.js`
- Edition, dates, venue, prize pool, logo, and registration state: `src/data/constants.js`
- Navigation labels/anchors: `src/components/Navbar.jsx`
- Colors: `src/utils/Themes.js`
- Query contact details: `src/components/sections/Footer.jsx`
- 3D visuals: `src/components/canvas/`

## Verification

- Run a production build after every change.
- Manually check desktop and mobile navigation, track modal, contributor tabs, glimpse toggle, external links, and GLTF loading.
- Add `*.test.js` or `*.test.jsx` files near the relevant source when adding behavior.
- Avoid importing the historical photo/video archive into the bundle unless a feature explicitly needs it; many files are several megabytes each.

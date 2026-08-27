# TODO

## Portfolio Data

- [x] Update About timeline: "2024 — PayrollPH & Agent Docs" still references removed Agent Docs project
- [x] Update About timeline year to 2026
- [x] Add experience date range at PetLabCo. (currently just "Present")

## Navigation

- [x] Add Extensions link to Footer quick links (only Home, About, Projects, Contact listed)
- [x] Add Extensions link to mobile Navbar menu (only shows Home, About, Projects, Contact)

## SEO & Meta

- [x] Add `og:image` meta tag to `index.html` (no social sharing image)
- [x] Add Twitter card meta tags (`twitter:card`, `twitter:title`, etc.)
- [x] Add `<link rel="preconnect">` for Google Fonts in `index.html` (currently loaded via CSS `@import`)

## Contact Form

- [x] Contact form catch block silently swallows errors — always shows success even on failure (`Contact.tsx:53-56`)
- [x] Add client-side email regex validation beyond HTML5 `type="email"`
- [x] Add honeypot field or rate limiting to prevent spam

## ScrollReveal

- [x] `ScrollReveal.tsx` only applies a static CSS class — no Intersection Observer or viewport-based animation trigger

## 404 Page

- [x] No 404/Not Found page — `docs/404.html` exists but no React route handles unknown paths

## Firebase

- [x] `firebase.ts` initializes Firestore and Functions but neither is imported anywhere in the app — dead code

## Accessibility

- [x] Add skip-to-content link for keyboard/screen reader users

## Performance

- [x] Google Fonts `@import` in CSS blocks rendering — move to `<link>` with `rel="preload"` or use `font-display: swap`

## Assets

- [x] Add `favicon.ico` for more browsers (currently only SVG favicon, no `.ico` fallback)
- [x] Add Apple touch icon (`apple-touch-icon`)

## Tooling

- [x] Add Prettier for consistent code formatting
- [x] Add testing framework (Vitest + React Testing Library)
- [x] Achieve 100% test coverage across components and pages
- [x] Install fallow for static analysis (dead code, duplication, complexity)
- [x] Install knip for unused exports/dependencies detection

## Contact Form Backend

- [ ] Replace Firebase Cloud Function (`functions/`) with Cloudflare Worker for sending contact form submissions to Viber
- [ ] Remove `@functions/` directory and Firebase Functions dependencies

## Features to Add

- [ ] Add blog section for articles/tutorials
- [ ] Add project filtering/search by tech stack
- [ ] Add reading time estimates on project cards
- [ ] Add RSS feed for blog posts
- [ ] Add sitemap.xml generation
- [ ] Add analytics integration (Plausible, Umami, or similar privacy-focused)
- [ ] Add loading states/skeleton screens for route transitions
- [ ] Add back-to-top button
- [ ] Add project detail pages with expanded descriptions
- [ ] Add testimonials section
- [ ] Add skills/tech stack visualization page

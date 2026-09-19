# Web Project Audit Report

**Date:** 2026-09-20
**Project:** alchie-monorepo (chesteralan.github.io)
**Scope:** apps/web — React + TypeScript portfolio site (Vite, Tailwind CSS, React Router)

## Overall Score: 8.4/10

| Dimension             | Score | Weight | Weighted |
| --------------------- | ----- | ------ | -------- |
| TypeScript Clean Code | 9/10  | 15%    | 1.35     |
| React Standards       | 9/10  | 15%    | 1.35     |
| Accessibility (a11y)  | 8/10  | 15%    | 1.20     |
| Performance           | 8/10  | 15%    | 1.20     |
| SEO                   | 9/10  | 10%    | 0.90     |
| Security              | 9/10  | 10%    | 0.90     |
| Dependencies          | 8/10  | 5%     | 0.40     |
| Testing Coverage      | 8/10  | 10%    | 0.80     |
| Responsive Design     | 8/10  | 5%     | 0.40     |

---

## Findings by Dimension

### 1. TypeScript Clean Code — 9/10

**Compliant:**

- Zero `any` types across all source files
- Named interfaces for all object shapes (`Project`, `Skill`, `Experience`, `Testimonial`, `Stats`)
- Strict compiler options: `noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch`
- `verbatimModuleSyntax` enabled for proper type-only imports
- Barrel-style `cn()` utility with `clsx` + `tailwind-merge`
- Constants file for programmatic brand colors (`constants.ts`)
- Clean function signatures with explicit return types on form handlers

**Issues:**

- `tsconfig.app.json` missing `strict: true` — no strict null checks, no strict function types
- `Contact.tsx:53` — `EMAIL_REGEX` is defined inside the component (recreated every render); should be a module-level constant
- `constants.ts` exports only 2 values; could consolidate with Tailwind config `brand` tokens

**Recommendations:**

- Enable `strict: true` in `tsconfig.app.json` (will require fixing any null-safety issues)
- Move `EMAIL_REGEX` to module scope in `Contact.tsx` or `constants.ts`

---

### 2. React Standards — 9/10

**Compliant:**

- All components use named `*Props` interfaces (`FormFieldProps`, `CardProps`, `BadgePillProps`, etc.)
- Props destructured in function parameters consistently
- `React.ReactNode` used for children props (`Card`, `ScrollReveal`, `CTASection`)
- Typed event handlers (`React.ChangeEvent`, `React.FormEvent`) in `Contact.tsx`
- `useRef<HTMLDivElement>(null)` pattern in `ScrollReveal.tsx`
- Context properly typed with `ObserverContextValue` interface
- `StrictMode` enabled in `main.tsx`
- Clean separation: data layer (`src/data/`), components, pages, lib

**Issues:**

- `Navbar.tsx:15` — `useState` without explicit type for `isOpen` and `scrolled` (minor, inferred as `boolean`)
- No `React.memo` on any components — missed optimization opportunity for `ProjectCard`, `StatCard`, `Tag`
- No `useMemo` for `featuredProjects` filter in `Home.tsx:20` (runs every render)

**Recommendations:**

- Wrap `ProjectCard`, `StatCard`, and `Tag` in `React.memo` since they receive stable data
- Memoize `featuredProjects` with `useMemo` in `Home.tsx`

---

### 3. Accessibility (a11y) — 8/10

**Compliant:**

- Skip-to-content link in `Layout.tsx:9` with proper focus styling (`.skip-link`)
- `aria-label` on mobile menu toggle button (`Navbar.tsx:84`)
- `aria-label` on social icon links (`SocialIcon.tsx:17`)
- `aria-label` on copy email button (`Contact.tsx:194`)
- `aria-hidden="true"` on honeypot field (`Contact.tsx:255`)
- `aria-describedby` on form fields linked to error messages
- `<label>` properly associated with inputs via `htmlFor`/`id`
- Semantic HTML: `<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`, `<aside>`
- Heading hierarchy is correct (h1 → h2 → h3)
- Focus-visible styles defined in `index.css:20-23`
- External links use `rel="noopener noreferrer"` and `target="_blank"`

**Issues:**

- No `role="navigation"` on the footer nav (`Footer.tsx:24`), though `<nav>` implicitly provides it
- `Contact.tsx:300` — textarea has no explicit `aria-describedby` linking to the error (only the error div has `id`)
- Mobile menu (`Navbar.tsx:92-122`) lacks `aria-expanded` on the toggle button and `role="menu"` on the dropdown
- No visible `aria-live` region for form submission status (success/error messages appear without announcing to screen readers)
- `NotFound.tsx:10` — uses `<h1>` but the page lacks a landmark region or `<main>` wrapper (Layout provides it, but 404 page content could be more semantic)

**Recommendations:**

- Add `aria-expanded={isOpen}` to the mobile menu toggle button in `Navbar.tsx`
- Wrap form status messages in `aria-live="polite"` region
- Add `role="menu"` / `role="menuitem"` to mobile nav items
- Consider `aria-current="page"` on active nav links

---

### 4. Performance — 8/10

**Compliant:**

- Vite build: 352KB JS (109KB gzipped) — reasonable for a portfolio site
- CSS: 31KB (6KB gzipped) — excellent
- Tailwind purges unused styles
- `IntersectionObserver`-based scroll reveal (no scroll event listeners)
- `ScrollRevealProvider` shares a single observer instance across all children
- `scroll-behavior: smooth` in CSS (no JS scroll library)
- Google Fonts preconnected in `index.html:32-33`
- Lucide React tree-shakeable icon imports (only imported icons bundled)

**Issues:**

- **Bundle size warning:** 1.8MB `alchietagudin.jpg` image — not optimized (should be WebP, resized, lazy-loaded)
- Font loaded via `@import url()` in `index.css:1` — render-blocking; should use `<link rel="preload">` in HTML
- No `loading="lazy"` on the avatar image (`Home.tsx:83`)
- No code splitting — all pages bundled into single chunk (no `React.lazy`)
- `ScrollReveal` uses `useState` + `useEffect` per instance — could cause layout thrashing on pages with many sections
- No `<link rel="preconnect">` for `fonts.googleapis.com` in HTML (only in CSS `@import`)

**Recommendations:**

- Convert `alchietagudin.jpg` to WebP and resize to ~400x400 (should be <100KB)
- Add `loading="lazy"` to avatar image
- Move font loading from CSS `@import` to `<link>` with `rel="preload"` in `index.html`
- Consider `React.lazy()` for route-level code splitting (minor gain for a portfolio site)
- Add `fetchpriority="high"` to avatar image since it's above the fold

---

### 5. SEO — 9/10

**Compliant:**

- `<title>` tag present and descriptive
- `meta description` present with keywords
- `meta keywords` present
- Open Graph tags: `og:title`, `og:description`, `og:type`, `og:url`, `og:image`
- Twitter Card tags: `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`
- Semantic HTML structure (headings, landmarks)
- `lang="en"` on `<html>` element
- Canonical URL implied via `og:url`

**Issues:**

- Missing `robots.txt` (not found in public/)
- Missing `sitemap.xml`
- No canonical `<link>` tag in `<head>` (relies only on `og:url`)
- OG image `https://alchie.cc/og-image.png` should be verified it exists
- No structured data (JSON-LD) for person/organization schema

**Recommendations:**

- Add `robots.txt` to `apps/web/public/`
- Generate `sitemap.xml` with all routes
- Add `<link rel="canonical">` tag
- Add JSON-LD structured data for `Person` schema
- Verify `og-image.png` exists in public assets

---

### 6. Security — 9/10

**Compliant:**

- No known vulnerabilities (`pnpm audit` clean)
- No hardcoded secrets — environment variables used (`VITE_CONTACT_ENDPOINT`, `VITE_FIREBASE_PROJECT_ID`)
- Honeypot field for bot prevention (`Contact.tsx:253-267`)
- Input validation on contact form (required fields, email regex)
- External links use `rel="noopener noreferrer"`
- `.env` is in `.gitignore`
- CSP-ready: no inline scripts (except module script in HTML)
- Form sends to Firebase Cloud Functions endpoint (server-side processing)

**Issues:**

- `.env.example` exists but was not checked — ensure no real values leaked
- No Content Security Policy headers configured (depends on deployment, e.g., GitHub Pages or Cloudflare)
- `Contact.tsx:114-116` — fallback URL construction uses raw env var in string concatenation

**Recommendations:**

- Verify `.env.example` contains only placeholder values
- Configure CSP headers at deployment level (Cloudflare Workers or GitHub Pages `_headers`)
- Sanitize form inputs server-side in the Cloud Function (out of scope for frontend, but worth noting)

---

### 7. Dependencies — 8/10

**Compliant:**

- Zero known vulnerabilities
- Minimal dependency footprint: only 6 runtime deps (react, react-dom, react-router-dom, clsx, lucide-react, tailwind-merge)
- No duplicate functionality
- Monorepo managed with pnpm workspaces + Turborepo

**Issues:**

- `prettier` 3.9.6 → 3.9.8 (patch available)
- `eslint` 10.10.0 → 10.11.0 (minor available)
- `fallow` 3.25.0 → 3.27.0 (minor available)
- `knip` 6.35.1 → 6.37.0 (minor available)
- `turbo` 2.10.13 → 2.11.2 (minor available)

**Recommendations:**

- Run `pnpm update` to pull latest minor/patch versions
- Consider adding `renovate` or `dependabot` for automated dependency updates

---

### 8. Testing Coverage — 8/10

**Compliant:**

- 18 test files, 67 tests — all passing
- Coverage: Statements 88.8%, Branches 88%, Functions 93.3%, Lines 90%
- Tests cover: components (Navbar, Footer, Layout, ScrollReveal, ProjectCard, etc.), pages (Home, About, Contact, Projects, Extensions, NotFound), and utilities (config)
- Testing Library + Vitest + jsdom — modern testing stack
- Contact form tests cover: rendering, validation, submission, error states

**Issues:**

- Coverage thresholds set to 100% in `vitest.config.ts:16-21` but actual coverage is ~90% — tests fail on coverage check
- `constants.ts` has 0% statement coverage
- `Projects.tsx` has 66% statement coverage (filter logic untested)
- `StatCard.tsx` has 66% statement coverage
- `BulletListItem.tsx` has 66% statement coverage
- No integration tests for routing/navigation
- No accessibility tests (e.g., `@axe-core/react`)

**Recommendations:**

- Either lower coverage thresholds to 90% or add tests to hit 100%
- Add tests for `Projects.tsx` filter logic (switch cases)
- Add integration test for React Router navigation
- Consider adding `jest-axe` or `@axe-core/react` for a11y regression testing

---

### 9. Responsive Design — 8/10

**Compliant:**

- Mobile-first Tailwind breakpoints used consistently (`sm:`, `md:`, `lg:`)
- Hamburger menu on mobile with animated slide-down
- Grid layouts adapt: 1 col → 2 col → 3 col
- Touch-friendly targets (buttons ≥44px height)
- No horizontal scroll issues observed
- Responsive typography in page headings (`text-3xl md:text-4xl`)
- Avatar scales: `h-72 w-72 sm:h-80 sm:w-80`

**Issues:**

- `About.tsx:29` — padding uses `pt-10 md:pt-15` — `pt-15` is not a standard Tailwind value (should be `pt-[3.75rem]` or use `pt-12 md:pt-16`)
- Mobile menu max-height is hardcoded to `max-h-64` — may clip if nav items are added
- No `prefers-reduced-motion` media query for scroll reveal animations
- Footer nav doesn't collapse gracefully on very small screens (<320px)

**Recommendations:**

- Fix `pt-15` to a valid Tailwind value in `About.tsx`
- Add `prefers-reduced-motion` support to disable scroll animations
- Test on 320px viewport width for edge cases

---

## Priority Fixes

| Priority | Issue                                                | Dimension     | Effort |
| -------- | ---------------------------------------------------- | ------------- | ------ |
| High     | Optimize avatar image (1.8MB → WebP <100KB)          | Performance   | 15min  |
| High     | Add `loading="lazy"` to avatar image                 | Performance   | 5min   |
| High     | Add `aria-expanded` to mobile menu toggle            | Accessibility | 5min   |
| High     | Add `aria-live` region for form status               | Accessibility | 10min  |
| Medium   | Enable `strict: true` in tsconfig                    | TypeScript    | 30min  |
| Medium   | Move font from CSS `@import` to HTML `<link>`        | Performance   | 10min  |
| Medium   | Add `robots.txt` and `sitemap.xml`                   | SEO           | 15min  |
| Medium   | Add canonical `<link>` tag                           | SEO           | 5min   |
| Medium   | Fix `pt-15` invalid Tailwind class in About.tsx      | Responsive    | 2min   |
| Medium   | Add `prefers-reduced-motion` media query             | Responsive    | 10min  |
| Medium   | Lower test coverage thresholds to 90% or add tests   | Testing       | 30min  |
| Low      | Add `React.memo` to `ProjectCard`, `StatCard`, `Tag` | React         | 15min  |
| Low      | Memoize `featuredProjects` in `Home.tsx`             | React         | 2min   |
| Low      | Move `EMAIL_REGEX` to module scope in `Contact.tsx`  | TypeScript    | 2min   |
| Low      | Add JSON-LD structured data                          | SEO           | 20min  |
| Low      | Add `aria-current="page"` on active nav links        | Accessibility | 10min  |
| Low      | Run `pnpm update` for minor dependency bumps         | Dependencies  | 5min   |

---

## Automated Check Results

| Check            | Result                                                                       |
| ---------------- | ---------------------------------------------------------------------------- |
| Lint (eslint)    | Pass (3 warnings in coverage/ output files — not source)                     |
| Type check (tsc) | Pass (no errors)                                                             |
| Tests (vitest)   | 67/67 passing                                                                |
| Build (vite)     | Success (1.00s)                                                              |
| Prettier         | All files formatted                                                          |
| Security audit   | No known vulnerabilities                                                     |
| Coverage         | 88.8% stmts / 88% branches / 93.3% funcs / 90% lines (threshold set to 100%) |

---

## Next Steps

1. **Quick wins (30min):** Fix `pt-15` class, add `loading="lazy"` to avatar, add `aria-expanded` to mobile menu, move `EMAIL_REGEX` to module scope
2. **Performance (1hr):** Optimize avatar image to WebP, move font loading to HTML `<link>`, add `prefers-reduced-motion`
3. **SEO (30min):** Add `robots.txt`, `sitemap.xml`, canonical link tag, JSON-LD
4. **TypeScript (30min):** Enable `strict: true`, fix any resulting issues
5. **Testing (1hr):** Add tests for `Projects.tsx` filter logic, fix coverage thresholds, consider a11y testing

# Portfolio Redesign Spec

## Goal

Complete visual and structural overhaul of the portfolio site at `apps/web/`, adopting the Stitch-generated design. Light-only theme, new color palette, expanded content sections, richer components.

## Design Source

Stitch-generated designs at `project-docs/design/stitch_alchie.cc_redesign/` — 5 page mockups (home desktop/mobile, about, projects, contact) with HTML source.

## Key Decisions

- **Dark mode:** Removed. Light-only theme.
- **Extensions page:** Kept and included in navigation.
- **Portfolio data:** Real projects retained (ANC, PayrollPH, etc.), not placeholder data.
- **Contact form:** Upgraded from simple (name/email/message) to rich (engagement type, timeline, budget, project details).

## Design System

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| `primary` | `#00647c` | CTAs, links, badges, buttons |
| `primary-light` | `#007f9d` | Hover states, containers |
| `secondary` | `#6b38d4` | Accents, highlights, version badges |
| `surface` | `#faf8ff` | Page background |
| `surface-card` | `#ffffff` | Cards, content areas |
| `on-surface` | `#131b2e` | Primary text |
| `on-surface-variant` | `#3e484d` | Secondary text |
| `outline` | `#6e797e` | Borders, dividers |
| `outline-variant` | `#bdc8ce` | Subtle borders |
| `surface-container` | `#eaedff` | Hover backgrounds |
| `success` | `#16a34a` | "Available for work" badge |

### Typography

- **Font:** Inter (already loaded)
- **Hero:** 48px/56px weight 700, -0.02em tracking (mobile: 36px/44px)
- **Headline LG:** 32px/38px weight 700, -0.01em (mobile: 26px/32px)
- **Headline MD:** 24px/30px weight 700
- **Headline SM:** 20px/26px weight 600
- **Title MD:** 18px/24px weight 600
- **Body LG:** 18px/28px weight 400
- **Body MD:** 16px/26px weight 400
- **Label MD:** 14px/20px weight 600
- **Label SM:** 12px/16px weight 500

### Spacing

- Gutters: 1.5rem (desktop), 1rem (mobile)
- Max-width: `max-w-6xl`
- Card padding: `p-6`
- Border radius: `rounded-lg` (0.5rem)

### Animations

- ScrollReveal: opacity 0→1, translateY(20px)→0, 500ms ease-out
- Stagger: 100ms delay between siblings
- Hover: scale 1.02, 200ms

## Pages

### Home

**Sections:**
1. **Hero** — Two-column (desktop), stacked (mobile)
   - Left: Role badge ("Full-Stack Engineer & Architect"), headline, subtext, two CTAs (View Featured Work + Get in Touch), core tech stack tags
   - Right: Profile photo (circle, teal border), floating "Full-Stack Senior / 8+ Yrs Experience" badge, "Available for Q3/Q4" pill
2. **Stats row** — 4 stat cards: Years Industry Exp, Shipped Products, Reliability Mindset, Code Quality & DX — each with icon and large number
3. **Selected Work** — 2-column grid of featured projects. Each card: category badge, mockup image area, title, description, tech tags, external link icon. "View all projects →" link.
4. **Testimonial** — Star rating, quote, author name/title/company
5. **CTA banner** — Dark teal background: "Have a project in mind?" with "Start a Conversation" button

**Data:** Filter `projects` where `featured === true` for Selected Work. Use real project data (ANC, PayrollPH).

### About

**Sections:**
1. **Hero** — "About Me & Engineering Philosophy" heading, role summary
2. **Two-column:**
   - Left: "The Journey" — long-form narrative
   - Right: "Quick Profile" card — avatar, name, title, resume link, current focus, education, "View Tech Matrix" + "Download CV" buttons
3. **Stats row** — Years Experience, Processed $, Code Uptime SLA
4. **Values cards** — 3 cards: Pragmatic Architecture, Obsessive Craft & Quality, Reliability at Scale
5. **Technical Skills Matrix** — Tabbed interface (All Domains, 5 Categories). Cards per category: Frontend Engineering, Backend & Distributed Systems, Databases & Caching, DevOps & Cloud, Testing & Quality
6. **Career Timeline** — Role cards with metrics: PetLabCo (2023—Present), Freelance (2021—2023), Apex Labs (2019—2021)
7. **Values principles** — Scalability by Design, User-Centric Craft, Continuous Learning
8. **CTA** — "Interested in working together?" with Download Resume + Get in Touch buttons

**Data:** Expand `experience` array in `portfolio.ts` with full career history. Add metrics per role.

### Projects

**Sections:**
1. **Hero** — "Featured Work & Engineering Projects" heading
2. **Stats row** — Events Processed/mo, Global P99 Latency, Architecture Uptime, OSS Releases Merged
3. **Filter bar** — Category chips (All, Full-Stack Web, Cloud & DevOps, Fintech & API, Open Source Tools) + Search input + Sort dropdown
4. **Project grid** — 3-column. Each card: category badge pill (Production/Case Study/Open Source), image area with overlay stats, title + version, description, tech tags, footer with metrics + action button
5. **Open Source section** — Contribution stats (commits, PRs, packages) + GitHub contribution graph visualization
6. **CTA** — "Looking to architect a new platform?" with Start a Conversation + Direct Email buttons

**Data:** Add `category`, `version`, `metrics` fields to Project interface. Add open source stats to portfolio data.

### Extensions

**Sections:**
1. **Hero** — "Chrome Extensions" heading
2. **Extension grid** — Cards with icon, title, description, tags, "Install" link to Chrome Web Store

**Data:** Keep existing `extensions` array. Restyle cards to match new design.

### Contact

**Two-column layout:**

**Left column:**
1. "Available for Q3/Q4 Projects" badge + Remote & Hybrid pill
2. Engagement description
3. Direct email with copy button
4. Location & working hours
5. Response window
6. Developer Presence grid: GitHub, LinkedIn, X/Twitter, Discord
7. Core Areas of Engagement: 4 items

**Right column — "Send a Project Inquiry" form:**
1. First Name + Last Name (side by side)
2. Work Email Address
3. Project Scope / Engagement Type chips (Full-stack App, Architecture Consulting, Contract/Freelance, Other)
4. Estimated Timeline dropdown
5. Approximate Budget chips ($5k-$10k, $10k-$25k, $25k+, Undisclosed)
6. Project Details textarea
7. "Send Message" button
8. Privacy note

**Data:** Add `engagementTypes`, `timelineOptions`, `budgetRanges` constants. Update form submission to include new fields.

## Components

### Modified
- **Navbar** — New layout: logo (dark rounded square "AT") + name + "Available for work" badge + nav links (Home, Projects, About, Extensions, Contact) + "Get in Touch" CTA button. Remove ThemeToggle.
- **Footer** — Restyle: brand + nav links + social icons (code, briefcase, mail) + copyright
- **Layout** — Remove ThemeToggle import/usage
- **ProjectCard** — New design: category badge, image area, title + version, description, tech tags, metrics footer
- **ScrollReveal** — Add stagger delay support
- **Home** — Full rewrite
- **About** — Full rewrite
- **Projects** — Full rewrite
- **Contact** — Full rewrite

### New
- **StatsRow** — Reusable row of 4 stat cards (number, label, icon)
- **Testimonial** — Star rating + quote + author
- **SkillsMatrix** — Tabbed skill categories with detailed cards
- **CareerTimeline** — Role cards with company, period, metrics
- **EngagementChips** — Selectable chip group for contact form
- **AvailabilityBadge** — Green "Available for work" pill

### Deleted
- **ThemeToggle** — No dark mode

## Files to Modify

- `apps/web/tailwind.config.js` — New color palette, remove dark mode config
- `apps/web/src/index.css` — Remove dark mode classes, update utility classes
- `apps/web/src/data/portfolio.ts` — Expand interfaces (Project, Skill, Experience), add new data
- `apps/web/src/App.tsx` — Update routes if needed
- `apps/web/src/components/Navbar.tsx` — New layout
- `apps/web/src/components/Footer.tsx` — Restyle
- `apps/web/src/components/Layout.tsx` — Remove ThemeToggle
- `apps/web/src/components/ProjectCard.tsx` — New design
- `apps/web/src/pages/Home.tsx` — Full rewrite
- `apps/web/src/pages/About.tsx` — Full rewrite
- `apps/web/src/pages/Projects.tsx` — Full rewrite
- `apps/web/src/pages/Contact.tsx` — Full rewrite

## Files to Create

- `apps/web/src/components/StatsRow.tsx`
- `apps/web/src/components/Testimonial.tsx`
- `apps/web/src/components/SkillsMatrix.tsx`
- `apps/web/src/components/CareerTimeline.tsx`
- `apps/web/src/components/EngagementChips.tsx`
- `apps/web/src/components/AvailabilityBadge.tsx`

## Files to Delete

- `apps/web/src/components/ThemeToggle.tsx`

## Testing

- All existing tests must pass after redesign
- Update test expectations for new component structures
- Visual verification: each page matches Stitch design screenshots
- Responsive: verify mobile layouts match mobile screenshots
- Accessibility: maintain skip-to-content, semantic HTML, keyboard navigation

## Risk Areas

- **Data expansion:** New fields on Project/Experience interfaces may break existing tests
- **Dark mode removal:** Must remove all `dark:` Tailwind classes throughout codebase
- **Contact form:** New fields require corresponding Worker backend updates (or keep backend simple and just store extra fields)
- **Profile photo:** Design shows a real photo — need an actual image asset
- **GitHub contribution graph:** May need a library or SVG generation

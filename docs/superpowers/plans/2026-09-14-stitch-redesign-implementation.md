# Portfolio Documentation + Stitch Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create comprehensive project documentation and prepare context for Stitch redesign

**Architecture:** Documentation-first approach - extract current state, document architecture, prepare DESIGN.md for Stitch, create migration guide

**Tech Stack:** Markdown documentation, Tailwind CSS, React, TypeScript

**Spec:** `docs/superpowers/specs/2026-09-14-stitch-redesign-design.md`

## Global Constraints

- Documentation must be accurate and reflect current codebase state
- Use consistent markdown formatting across all docs
- Follow existing project conventions
- All documentation lives in `docs/` at project root

---

### Task 1: Create Documentation Structure

**Files:**
- Create: `docs/README.md`
- Create: `docs/architecture/` directory
- Create: `docs/design/` directory
- Create: `docs/content/` directory
- Create: `docs/implementation/` directory

**Interfaces:**
- Consumes: None
- Produces: Documentation directory structure

- [ ] **Step 1: Create directory structure**

```bash
mkdir -p docs/architecture docs/design/stitch-output docs/content docs/implementation
```

- [ ] **Step 2: Create documentation index**

```markdown
# Portfolio Documentation

## Overview

Comprehensive documentation for the Alchie Tagudin portfolio project.

## Structure

- **architecture/** - System design, components, pages
- **design/** - Design system, current state, Stitch output
- **content/** - Portfolio data, assets
- **implementation/** - Migration guide, mobile patterns

## Quick Links

- [System Overview](architecture/system-overview.md)
- [Components](architecture/components.md)
- [Current Design](design/current-state.md)
- [Portfolio Data](content/portfolio-data.md)
```

- [ ] **Step 3: Commit**

```bash
git add docs/
git commit -m "docs: create documentation structure"
```

---

### Task 2: Document System Architecture

**Files:**
- Create: `docs/architecture/system-overview.md`

**Interfaces:**
- Consumes: `package.json`, `vite.config.ts`, `tailwind.config.js`
- Produces: System architecture documentation

- [ ] **Step 1: Create system overview document**

```markdown
# System Overview

## Tech Stack

| Layer | Technology | Version |
|-------|------------|---------|
| Frontend | React | 19.2.6 |
| Language | TypeScript | 6.0.2 |
| Build Tool | Vite | 8.0.12 |
| Styling | Tailwind CSS | 3.4.19 |
| Routing | React Router | 7.15.1 |
| Icons | Lucide React | 1.16.0 |
| Testing | Vitest | 4.1.11 |
| Linting | ESLint | 10.3.0 |
| Formatting | Prettier | 3.9.6 |

## Architecture

```
src/
├── components/     # Reusable UI components
├── pages/          # Route-based page components
├── data/           # Static content data
├── lib/            # Utility functions
├── App.tsx         # Route configuration
├── main.tsx        # Entry point
└── index.css       # Global styles
```

## Data Flow

1. Static data from `src/data/portfolio.ts`
2. Component-based rendering with React
3. Client-side routing with React Router
4. Tailwind CSS for styling
5. Firebase for hosting and contact form backend

## Build Process

- Development: `yarn dev` (Vite dev server)
- Production: `yarn build` (TypeScript + Vite build)
- Testing: `yarn test` (Vitest)
- Linting: `yarn lint` (ESLint)
- Formatting: `yarn format` (Prettier)
```

- [ ] **Step 2: Commit**

```bash
git add docs/architecture/system-overview.md
git commit -m "docs: add system architecture overview"
```

---

### Task 3: Document Components

**Files:**
- Create: `docs/architecture/components.md`

**Interfaces:**
- Consumes: `src/components/*.tsx`
- Produces: Component hierarchy documentation

- [ ] **Step 1: Create components document**

```markdown
# Components

## Component Hierarchy

```
App
├── Layout
│   ├── Navbar
│   │   ├── ThemeToggle
│   │   └── ScrollToTop
│   └── Footer
├── Home
│   ├── ScrollReveal
│   └── ProjectCard
├── About
│   └── ScrollReveal
├── Projects
│   └── ProjectCard
├── Extensions
│   └── ProjectCard
└── Contact
```

## Component Catalog

### Layout
- **Purpose:** Main layout wrapper with navbar and footer
- **Props:** `{ children: ReactNode }`
- **Location:** `src/components/Layout.tsx`

### Navbar
- **Purpose:** Responsive navigation with mobile menu
- **Props:** None
- **Location:** `src/components/Navbar.tsx`
- **Features:** Mobile hamburger menu, route-aware active states

### Footer
- **Purpose:** Footer with social links and copyright
- **Props:** None
- **Location:** `src/components/Footer.tsx`

### ThemeToggle
- **Purpose:** Dark/light mode toggle
- **Props:** None
- **Location:** `src/components/ThemeToggle.tsx`
- **Features:** Persists preference to localStorage

### ScrollReveal
- **Purpose:** Intersection Observer-based reveal animation
- **Props:** `{ children: ReactNode, className?: string }`
- **Location:** `src/components/ScrollReveal.tsx`

### ProjectCard
- **Purpose:** Project display card with image, title, description
- **Props:** `{ project: Project }`
- **Location:** `src/components/ProjectCard.tsx`

### ScrollToTop
- **Purpose:** Resets scroll position on route change
- **Props:** None
- **Location:** `src/components/ScrollToTop.tsx`
```

- [ ] **Step 2: Commit**

```bash
git add docs/architecture/components.md
git commit -m "docs: add component hierarchy documentation"
```

---

### Task 4: Document Pages

**Files:**
- Create: `docs/architecture/pages.md`

**Interfaces:**
- Consumes: `src/pages/*.tsx`, `src/App.tsx`
- Produces: Page structure documentation

- [ ] **Step 1: Create pages document**

```markdown
# Pages

## Route Structure

| Route | Page | Component |
|-------|------|-----------|
| `/` | Home | `Home.tsx` |
| `/about` | About | `About.tsx` |
| `/projects` | Projects | `Projects.tsx` |
| `/extensions` | Extensions | `Extensions.tsx` |
| `/contact` | Contact | `Contact.tsx` |
| `*` | 404 | `NotFound.tsx` |

## Page Descriptions

### Home (`/`)
- Hero section with name and title
- Featured projects showcase
- Skills overview
- Call-to-action

### About (`/about`)
- Bio and personal introduction
- Work experience timeline
- Skills and technologies
- Education background

### Projects (`/projects`)
- Full project grid
- Filter/search functionality
- Project cards with images

### Extensions (`/extensions`)
- Chrome extension showcase
- Extension details and screenshots
- Installation links

### Contact (`/contact`)
- Contact form with validation
- Firebase backend integration
- Slack webhook notifications

### NotFound (`*`)
- 404 error page
- Navigation back to home
```

- [ ] **Step 2: Commit**

```bash
git add docs/architecture/pages.md
git commit -m "docs: add page structure documentation"
```

---

### Task 5: Document Current Design System

**Files:**
- Create: `docs/design/current-state.md`

**Interfaces:**
- Consumes: `tailwind.config.js`, `src/index.css`
- Produces: Current design tokens documentation

- [ ] **Step 1: Create current state document**

```markdown
# Current Design System

## Colors

### Primary
- **primary:** `#0891b2` (cyan-600)
- **primary-foreground:** `#ffffff`

### Accent
- **accent:** `#8b5cf6` (violet-500)
- **accent-foreground:** `#ffffff`

### Background
- **background:** `#ffffff` (light) / `#0f172a` (dark)
- **foreground:** `#0f172a` (light) / `#ffffff` (dark)

### Muted
- **muted:** `#f1f5f9` (light) / `#1e293b` (dark)
- **muted-foreground:** `#64748b`

### Card
- **card:** `#ffffff` (light) / `#1e293b` (dark)
- **card-foreground:** `#0f172a` (light) / `#ffffff` (dark)

## Typography

### Font Family
- **sans:** Inter, system-ui, sans-serif

### Font Sizes
- **text-xs:** 0.75rem (12px)
- **text-sm:** 0.875rem (14px)
- **text-base:** 1rem (16px)
- **text-lg:** 1.125rem (18px)
- **text-xl:** 1.25rem (20px)
- **text-2xl:** 1.5rem (24px)
- **text-3xl:** 1.875rem (30px)
- **text-4xl:** 2.25rem (36px)

## Spacing

- **space-1:** 0.25rem (4px)
- **space-2:** 0.5rem (8px)
- **space-3:** 0.75rem (12px)
- **space-4:** 1rem (16px)
- **space-6:** 1.5rem (24px)
- **space-8:** 2rem (32px)

## Breakpoints

- **sm:** 640px
- **md:** 768px
- **lg:** 1024px
- **xl:** 1280px

## Border Radius

- **rounded-sm:** 0.125rem
- **rounded:** 0.25rem
- **rounded-md:** 0.375rem
- **rounded-lg:** 0.5rem
- **rounded-xl:** 0.75rem
- **rounded-full:** 9999px

## Shadows

- **shadow-sm:** Small shadow
- **shadow:** Default shadow
- **shadow-md:** Medium shadow
- **shadow-lg:** Large shadow
```

- [ ] **Step 2: Commit**

```bash
git add docs/design/current-state.md
git commit -m "docs: add current design system documentation"
```

---

### Task 6: Create Stitch DESIGN.md Context

**Files:**
- Create: `docs/design/DESIGN.md`

**Interfaces:**
- Consumes: `docs/design/current-state.md`, `docs/architecture/components.md`
- Produces: Stitch-compatible DESIGN.md file

- [ ] **Step 1: Create DESIGN.md for Stitch**

```markdown
# DESIGN.md - Portfolio Redesign Context

## Brand Identity

**Name:** Alchie Tagudin
**Role:** Full-stack Developer
**Style:** Modern, clean, professional

## Design Principles

1. **Clarity:** Information hierarchy is clear
2. **Whitespace:** Generous spacing for readability
3. **Consistency:** Uniform patterns across all pages
4. **Motion:** Subtle animations enhance UX
5. **Mobile-first:** Responsive design优先

## Color Palette

### Primary
- Cyan-600: #0891b2 (CTAs, links, accents)

### Neutral
- Slate-900: #0f172a (dark backgrounds, text)
- Slate-100: #f1f5f9 (light backgrounds)
- White: #ffffff (cards, content areas)

### Accent
- Violet-500: #8b5cf6 (highlights, badges)

## Typography

### Headings
- Font: Inter
- Weight: 700 (bold)
- Line height: 1.2

### Body
- Font: Inter
- Weight: 400 (regular)
- Line height: 1.6

## Components

### Card
- Background: white
- Border radius: rounded-lg
- Shadow: shadow-md
- Padding: p-6

### Button
- Primary: bg-primary text-white
- Secondary: bg-transparent border border-primary
- Hover: opacity-90

### Input
- Border: border border-gray-300
- Focus: ring-2 ring-primary
- Padding: px-4 py-2

## Layout Patterns

### Container
- Max width: max-w-6xl
- Padding: px-4 sm:px-6 lg:px-8

### Grid
- Projects: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Skills: grid-cols-2 md:grid-cols-3 lg:grid-cols-4

## Animations

### ScrollReveal
- Opacity: 0 → 1
- Transform: translateY(20px) → translateY(0)
- Duration: 500ms
- Easing: ease-out

### Hover
- Scale: 1.02
- Duration: 200ms

## Images

### Project Screenshots
- Aspect ratio: 16:9
- Format: WebP
- Optimization: Lazy loading

### Profile Photo
- Shape: Circle
- Size: 200x200px
```

- [ ] **Step 2: Commit**

```bash
git add docs/design/DESIGN.md
git commit -m "docs: add Stitch DESIGN.md context file"
```

---

### Task 7: Document Portfolio Content

**Files:**
- Create: `docs/content/portfolio-data.md`

**Interfaces:**
- Consumes: `src/data/portfolio.ts`
- Produces: Content documentation

- [ ] **Step 1: Create portfolio data document**

```markdown
# Portfolio Data

## Content Structure

All portfolio content lives in `src/data/portfolio.ts`.

## Data Types

### Project
```typescript
interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
}
```

### Skill
```typescript
interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'other';
}
```

### SocialLink
```typescript
interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
```

## Content Categories

### Projects
- Portfolio website (current)
- Chrome extensions
- Open source contributions
- Personal projects

### Skills
- **Frontend:** React, TypeScript, Tailwind CSS, HTML, CSS
- **Backend:** Node.js, Python, Firebase
- **Tools:** Git, VS Code, Figma
- **Other:** Agile, TDD, CI/CD

### Social Links
- GitHub: github.com/chesteralan
- LinkedIn: linkedin.com/in/alchietagudin
- Email: alchie.tagudin@gmail.com

## Updating Content

To update portfolio content:
1. Edit `src/data/portfolio.ts`
2. Follow TypeScript interfaces
3. Run `yarn build` to verify
4. Run `yarn test` to ensure no regressions
```

- [ ] **Step 2: Commit**

```bash
git add docs/content/portfolio-data.md
git commit -m "docs: add portfolio content documentation"
```

---

### Task 8: Document Assets

**Files:**
- Create: `docs/content/assets.md`

**Interfaces:**
- Consumes: `public/`, `src/` images
- Produces: Asset documentation

- [ ] **Step 1: Create assets document**

```markdown
# Assets

## Image Assets

### Profile Photos
- `public/apple-touch-icon.png` - Apple touch icon (180x180)
- `docs/assets/apple-touch-icon-Cw9JgD5j.png` - Generated variant

### Favicon
- `public/favicon.ico` - Standard favicon
- `public/favicon-16x16.png` - 16x16 variant
- `public/favicon-32x32.png` - 32x32 variant

### Project Screenshots
- Location: `public/projects/`
- Format: WebP preferred, PNG fallback
- Size: 1200x675px (16:9)

## Icon System

### Library
- **Lucide React** - Primary icon library

### Usage
```tsx
import { Github, Linkedin, Mail } from 'lucide-react';

<GitHub size={24} />
<Linkedin size={24} />
<Mail size={24} />
```

## Optimization

### Lazy Loading
- All images use `loading="lazy"`
- Below-the-fold images prioritize

### Responsive Images
- Use `srcset` for multiple sizes
- Provide `sizes` attribute

### Format
- Prefer WebP for photos
- Use SVG for icons and graphics
```

- [ ] **Step 2: Commit**

```bash
git add docs/content/assets.md
git commit -m "docs: add assets documentation"
```

---

### Task 9: Create Mobile-First Documentation

**Files:**
- Create: `docs/implementation/mobile-first.md`

**Interfaces:**
- Consumes: `tailwind.config.js`, responsive patterns
- Produces: Mobile-first design patterns

- [ ] **Step 1: Create mobile-first document**

```markdown
# Mobile-First Design Patterns

## Breakpoint Strategy

Mobile-first approach using Tailwind CSS breakpoints:

```css
/* Base styles (mobile) */
.container {
  padding: 1rem;
}

/* sm: 640px */
@media (min-width: 640px) {
  .container {
    padding: 1.5rem;
  }
}

/* md: 768px */
@media (min-width: 768px) {
  .container {
    padding: 2rem;
  }
}

/* lg: 1024px */
@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
    margin: 0 auto;
  }
}
```

## Responsive Patterns

### Navigation
- **Mobile:** Hamburger menu, full-screen overlay
- **Tablet:** Horizontal nav with overflow
- **Desktop:** Full horizontal nav

### Grid Layouts
- **Mobile:** 1 column
- **Tablet:** 2 columns
- **Desktop:** 3-4 columns

### Typography
- **Mobile:** Smaller font sizes, tighter spacing
- **Desktop:** Larger font sizes, generous spacing

## Touch Interactions

### Tap Targets
- Minimum size: 44x44px
- Spacing between targets: 8px minimum

### Gestures
- Swipe for carousels
- Pull-to-refresh (if applicable)
- Long press for context menus

## Performance

### Mobile Optimization
- Lazy load images
- Minimize JavaScript bundle
- Use CSS containment
- Reduce DOM complexity

### Testing
- Test on real devices
- Use Chrome DevTools device simulation
- Test on slow networks (3G)
```

- [ ] **Step 2: Commit**

```bash
git add docs/implementation/mobile-first.md
git commit -m "docs: add mobile-first design patterns"
```

---

### Task 10: Create Restructure Guide

**Files:**
- Create: `docs/implementation/restructure-guide.md`

**Interfaces:**
- Consumes: All documentation, current codebase
- Produces: Migration guide

- [ ] **Step 1: Create restructure guide**

```markdown
# Restructure Guide

## Current → New Mapping

### Components

| Current | New | Changes |
|---------|-----|---------|
| `Layout.tsx` | `Layout.tsx` | Update navbar pattern |
| `Navbar.tsx` | `Navbar.tsx` | Mobile-first redesign |
| `Footer.tsx` | `Footer.tsx` | Simplify structure |
| `ThemeToggle.tsx` | `ThemeToggle.tsx` | Keep as-is |
| `ScrollReveal.tsx` | `ScrollReveal.tsx` | Optimize performance |
| `ProjectCard.tsx` | `ProjectCard.tsx` | New design tokens |
| `ScrollToTop.tsx` | `ScrollToTop.tsx` | Keep as-is |

### Pages

| Current | New | Changes |
|---------|-----|---------|
| `Home.tsx` | `Home.tsx` | Hero redesign, new layout |
| `About.tsx` | `About.tsx` | Timeline redesign |
| `Projects.tsx` | `Projects.tsx` | Grid layout update |
| `Extensions.tsx` | `Extensions.tsx` | Card redesign |
| `Contact.tsx` | `Contact.tsx` | Form redesign |

## Migration Steps

### Phase 1: Design Tokens
1. Update `tailwind.config.js` with new colors
2. Update `src/index.css` with new CSS variables
3. Verify all components use new tokens

### Phase 2: Components
1. Update each component with new design
2. Maintain existing props interface
3. Update tests for visual changes

### Phase 3: Pages
1. Update page layouts
2. Implement new responsive patterns
3. Add new animations

### Phase 4: Polish
1. Cross-browser testing
2. Performance optimization
3. Accessibility audit

## Rollback Plan

- Keep old components in `src/components/legacy/`
- Feature flag for new vs old design
- Gradual rollout by page
```

- [ ] **Step 2: Commit**

```bash
git add docs/implementation/restructure-guide.md
git commit -m "docs: add restructure migration guide"
```

---

## Self-Review

### Spec Coverage
- [x] Documentation structure created
- [x] Architecture documented
- [x] Components documented
- [x] Pages documented
- [x] Current design system documented
- [x] DESIGN.md for Stitch created
- [x] Portfolio content documented
- [x] Assets documented
- [x] Mobile-first patterns documented
- [x] Restructure guide created

### Placeholder Scan
- No TBD/TODO markers found
- All steps have concrete content
- All code blocks have actual code

### Type Consistency
- Document structure matches spec
- File paths are consistent
- Component names match codebase

## Execution Handoff

Plan complete and saved to `docs/superpowers/plans/2026-09-14-stitch-redesign-implementation.md`. Two execution options:

**1. Subagent-Driven (recommended)** - I dispatch a fresh subagent per task, review between tasks, fast iteration

**2. Inline Execution** - Execute tasks in this session using executing-plans, batch execution with checkpoints

Which approach?

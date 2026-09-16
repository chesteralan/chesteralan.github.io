# Portfolio Redesign Design Spec

## Overview

Complete visual redesign of the portfolio site based on Stitch design mockups. Adapts the mockup's visual language (colors, typography, layout patterns, component styles) to the existing multi-page React Router architecture with real portfolio data.

## Decisions

- **Layout**: Keep multi-page (React Router), do NOT convert to single-page scroll
- **Title**: Keep "Frontend Developer" (not "Full-Stack Engineer")
- **Photo**: User will provide a portrait photo for hero/avatar
- **Icons**: Material Symbols Outlined (Google Fonts) — replaces Lucide React
- **Nav**: Drop "Extensions" link (keep 4 links: Home, Projects, About, Contact). Extensions page remains accessible via direct URL.
- **Content**: Adapt mockup structure to real portfolio data (ANC, PayrollPH, Altrugenix, etc.)

## Design System

### Colors
```
Brand Primary: #0891b2 (cyan-600) — CTAs, accents, links
Brand Hover:   #0e7490 (cyan-700) — button hover states
Background:    #f8fafc (slate-50) — page background
Cards:         #ffffff — card backgrounds
Border:        #e2e8f0 (slate-200) — card/nav borders
Text Primary:  #0f172a (slate-900) — headings
Text Body:     #475569 (slate-600) — body text
Text Muted:    #94a3b8 (slate-400) — labels, captions
Accent:        #7e22ce (purple-700) — secondary accent (skills, timeline nodes)
Success:       #10b981 (emerald-500) — available badge, status dots
```

### Typography
- Font: Inter (already loaded)
- Headings: font-extrabold (800), tracking-tight
- Body: font-normal, leading-relaxed
- Labels: text-xs font-semibold uppercase tracking-wider
- Monospace: JetBrains Mono (for code-style elements)

### Icons
- Material Symbols Outlined via Google Fonts
- Import: `https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap`
- Usage: `<span class="material-symbols-outlined">icon_name</span>`
- Key icons: terminal, arrow_forward, mail, workspace_premium, rocket_launch, verified, code_blocks, north_east, star, handshake, code, work, etc.

### Component Styles
- **card**: `bg-white rounded-2xl border border-slate-200/90 shadow-sm`
- **card-hover**: same + `hover:shadow-md transition-shadow`
- **btn-primary**: `bg-[#0891b2] hover:bg-[#0e7490] text-white px-5 py-2.5 rounded-lg text-sm font-semibold shadow-sm`
- **btn-outline**: `border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 rounded-lg`
- **tag**: `px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200`
- **badge-pill**: `inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-cyan-50 text-cyan-700 border border-cyan-200`
- **section-label**: `text-xs font-bold text-[#0891b2] uppercase tracking-wider` with dot prefix

## Page Designs

### Navbar (Global)
- Sticky, `bg-white/90 backdrop-blur-md border-b border-slate-200`
- Left: Monogram "A" (dark rounded square) + "Alchie Tagudin" + "Available for work" pill (green dot)
- Center: Pill-shaped nav (`bg-slate-100/80 p-1.5 rounded-xl`) — 4 links, active = `bg-white shadow-sm font-semibold`
- Right: "Get in Touch" CTA + profile photo circle (32px)
- Mobile: Hamburger, same brand/availability left, toggle right

### Home Page
1. **Hero** — `lg:grid-cols-12` (7/5 split):
   - Left: Role badge pill → Headline → Description → CTA buttons → Tech Stack pills (border-t)
   - Right: Circular portrait (w-72 h-72, ring-4 ring-cyan-100) + floating badges (Available, Experience)
2. **Stats** — 4 cards: `bg-white rounded-lg shadow-sm border p-6` with cyan number + Material icon + label
3. **Selected Work** — 2-col grid: Dark gradient header (h-60) + white body + footer. Category badge, monospace filename, progress bar, metric text.
4. **Testimonial** — Star rating + blockquote + avatar + name/role
5. **Contact CTA** — Dark gradient banner (`from-slate-900 to-cyan-950`) with heading + button

### About Page
1. **Hero** — Badge pill + heading + subtitle
2. **Journey + Profile** (7/5 grid):
   - Left: Journey card (heading, paragraphs, 3 metrics) + 3 pillar cards
   - Right: Quick Profile card (photo, location/focus/education rows, action buttons)
3. **Skills Matrix** — Filter tabs + 3-col grid (3 cards) + 2-col bottom row (2 cards). Each: icon, title, description, tech badges, footer metric.
4. **Career Timeline** — Vertical line with colored dots + experience cards (role, company, period, metrics, tags)
5. **Engineering Values** — 3 principle cards with icon, title, description, verification badge
6. **CTA Banner** — Gradient bg + "Interested in working together?" + buttons

### Projects Page
1. **Hero** — Gradient glow bg, breadcrumb pill, heading, description, 4-card metrics strip
2. **Filter Toolbar** — Category pills + search input + sort dropdown
3. **Project Grid** — 3-col: Dark preview header (h-44) + status badge + metric pill → body (title, version, description, colored tech badges) → footer (metric + actions)
4. **Open Source** — Stats cards (3) + contribution heatmap (simulated GitHub-style grid)
5. **Collaboration CTA** — Gradient banner with heading + buttons

### Contact Page
1. **Hero** — Badge pill + heading + subtitle
2. **2-Column Layout** (5/7):
   - Left: Status card + Contact methods card (email, location, response) + Developer presence (2x2 social grid) + Core areas checklist
   - Right: Inquiry form (first/last name, email, scope chips, timeline dropdown, budget chips, details textarea, submit + privacy note)

### Extensions Page
- Restyle to match new visual language (same structure, updated styles)
- No nav link (accessible via direct URL only)

### Footer (Global)
- Compact: Left (name + "Full-stack Developer" badge + description) / Right (nav links + social SVG icons)

## File Changes

### Tailwind Config
- Remove `darkMode: 'class'`
- Update color palette to cyan brand
- Add Material Symbols font import to index.html

### CSS (index.css)
- Remove all `dark:` variants
- Update component classes to new styles
- Add new utilities (bg-dot-grid, hero-glow)

### Data (portfolio.ts)
- Add new fields as needed for the richer UI
- Adapt stats, testimonials, experience to real data

### Components (full rewrite)
- **Navbar.tsx** — New layout with pill nav, availability badge, avatar
- **Footer.tsx** — Compact layout with SVG social icons
- **ProjectCard.tsx** — Dark gradient header + body + footer pattern
- **Layout.tsx** — Minor updates for new nav/footer
- Delete **ThemeToggle.tsx** (already done)

### Pages (full rewrite)
- **Home.tsx** — Hero with photo, stats, selected work, testimonial, CTA
- **About.tsx** — Journey, pillars, skills matrix, timeline, values, CTA
- **Projects.tsx** — Hero, filters, 3-col grid, open source, CTA
- **Contact.tsx** — Sidebar + inquiry form
- **Extensions.tsx** — Restyle only

### Icons
- Replace all Lucide imports with Material Symbols spans
- Update all test files to match new content/structure

### Tests
- Update all 14 test files for new component structure
- Update assertions for new text content
- Remove ThemeToggle tests (already done)

## Verification
- `npx turbo build` — 2/2 apps
- `npx turbo test` — all passing
- `npx turbo lint` — clean

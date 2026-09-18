# Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Complete visual and structural overhaul of the portfolio site to match the Stitch-generated design — new color palette, light-only theme, expanded components, richer pages.

**Architecture:** Rewrite Tailwind config and CSS for the new design system, expand the data model, create 6 new components, rewrite 4 pages (Home, About, Projects, Contact), restyle Navbar/Footer/ProjectCard/Extensions, and remove dark mode. Each task produces a working, testable deliverable.

**Tech Stack:** React 19, Vite 8, TypeScript 6, Tailwind CSS 3.4, Lucide React, Vitest 4, React Testing Library

**Spec:** `project-docs/superpowers/specs/2026-09-15-redesign-design.md`

## Global Constraints

- Light-only theme — all `dark:` Tailwind classes must be removed
- Primary: `#00647c` (cyan/teal), Secondary: `#6b38d4` (violet)
- Surface: `#faf8ff`, Card: `#ffffff`, Text: `#131b2e`
- Font: Inter (already loaded), no new font dependencies
- Real portfolio data retained — no placeholder projects
- Extensions page kept in navigation
- No new runtime dependencies — use only what's already installed

---

## File Structure (target)

```
apps/web/src/
├── components/
│   ├── AvailabilityBadge.tsx    (NEW)
│   ├── CareerTimeline.tsx       (NEW)
│   ├── EngagementChips.tsx      (NEW)
│   ├── Layout.tsx               (MODIFY — remove ThemeToggle)
│   ├── Navbar.tsx               (REWRITE)
│   ├── Footer.tsx               (REWRITE)
│   ├── ProjectCard.tsx          (REWRITE)
│   ├── ScrollReveal.tsx         (MODIFY — add stagger)
│   ├── SkillsMatrix.tsx         (NEW)
│   ├── StatsRow.tsx             (NEW)
│   └── Testimonial.tsx          (NEW)
├── data/
│   └── portfolio.ts             (MODIFY — expand interfaces)
├── index.css                    (MODIFY — remove dark mode)
├── pages/
│   ├── About.tsx                (REWRITE)
│   ├── Contact.tsx              (REWRITE)
│   ├── Extensions.tsx           (MODIFY — restyle)
│   ├── Home.tsx                 (REWRITE)
│   ├── NotFound.tsx             (NO CHANGE)
│   └── Projects.tsx             (REWRITE)
└── App.tsx                      (NO CHANGE)
```

---

### Task 1: Design system — Tailwind config + CSS

**Files:**
- Modify: `apps/web/tailwind.config.js`
- Modify: `apps/web/src/index.css`

**Interfaces:** None — foundation task.

- [ ] **Step 1: Replace `tailwind.config.js`**

Replace the entire file:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f7fa',
          100: '#ccf0f5',
          200: '#99e0eb',
          300: '#66d1e0',
          400: '#33c1d6',
          500: '#00647c',
          600: '#00647c',
          700: '#004d61',
          800: '#003747',
          900: '#00212c',
        },
        secondary: {
          50: '#f3eeff',
          100: '#e7ddff',
          200: '#cfbbff',
          300: '#b799ff',
          400: '#9f77ff',
          500: '#6b38d4',
          600: '#6b38d4',
          700: '#5524b8',
          800: '#3f189c',
          900: '#290d80',
        },
        surface: {
          DEFAULT: '#faf8ff',
          card: '#ffffff',
          container: '#eaedff',
          dim: '#d2d9f4',
        },
        'on-surface': {
          DEFAULT: '#131b2e',
          variant: '#3e484d',
        },
        outline: {
          DEFAULT: '#6e797e',
          variant: '#bdc8ce',
        },
        success: '#16a34a',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      borderRadius: {
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
```

- [ ] **Step 2: Replace `index.css`**

Replace the entire file:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }

  body {
    @apply bg-surface font-sans text-on-surface;
  }

  ::selection {
    @apply bg-primary-500/20 text-primary-700;
  }
}

@layer components {
  .section-container {
    @apply mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8;
  }

  .section-label {
    @apply mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-secondary-500;
  }

  .section-title {
    @apply mb-4 text-3xl font-bold text-on-surface sm:text-4xl;
  }

  .section-subtitle {
    @apply max-w-2xl text-lg text-on-surface-variant;
  }

  .card {
    @apply rounded-2xl border border-outline-variant bg-surface-card p-6 transition-all duration-300;
  }

  .card-hover {
    @apply card hover:-translate-y-1 hover:border-primary-200 hover:shadow-lg hover:shadow-primary-500/5;
  }

  .btn-primary {
    @apply inline-flex items-center gap-2 rounded-xl bg-primary-500 px-6 py-3 font-medium text-white transition-all duration-200 hover:bg-primary-700 active:scale-95;
  }

  .btn-outline {
    @apply inline-flex items-center gap-2 rounded-xl border-2 border-outline-variant px-6 py-3 font-medium text-on-surface transition-all duration-200 hover:border-primary-500 hover:text-primary-500 active:scale-95;
  }

  .btn-dark {
    @apply inline-flex items-center gap-2 rounded-xl bg-on-surface px-6 py-3 font-medium text-white transition-all duration-200 hover:bg-gray-800 active:scale-95;
  }

  .tag {
    @apply inline-block rounded-full bg-surface-container px-3 py-1 text-sm font-medium text-on-surface-variant;
  }

  .gradient-text {
    @apply bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent;
  }
}

@layer utilities {
  .skip-link {
    @apply fixed left-0 top-0 z-[100] -translate-y-full rounded-br-xl bg-primary-500 px-4 py-2 font-medium text-white opacity-0 transition-all duration-200;
  }
  .skip-link:focus {
    @apply translate-y-0 opacity-100;
  }

  .animate-delay-100 {
    animation-delay: 100ms;
  }
  .animate-delay-200 {
    animation-delay: 200ms;
  }
  .animate-delay-300 {
    animation-delay: 300ms;
  }
  .animate-delay-400 {
    animation-delay: 400ms;
  }
  .animate-delay-500 {
    animation-delay: 500ms;
  }
}
```

- [ ] **Step 3: Verify build**

```bash
cd apps/web && pnpm build
```

Expected: Build succeeds with new colors. No dark mode classes remain.

- [ ] **Step 4: Commit**

```bash
git add apps/web/tailwind.config.js apps/web/src/index.css
git commit -m "feat(redesign): update design system — new palette, remove dark mode"
```

---

### Task 2: Expand data model

**Files:**
- Modify: `apps/web/src/data/portfolio.ts`

**Interfaces:** Foundation for all page tasks.

- [ ] **Step 1: Replace `portfolio.ts`**

Replace the entire file:

```typescript
export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  links: {
    github?: string;
    live?: string;
    chrome?: string;
  };
  featured?: boolean;
  category?: 'full-stack' | 'cloud' | 'fintech' | 'open-source';
  version?: string;
  metrics?: string[];
  badge?: 'production' | 'case-study' | 'open-source';
}

export interface Extension {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  icon?: string;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'cloud' | 'databases' | 'devops' | 'testing';
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
  metrics?: { label: string; value: string }[];
  tags?: string[];
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export const projects: Project[] = [
  {
    id: 'anc',
    title: 'Archdiocesan Nourishment Center',
    description:
      'A charity platform providing integral nourishment programs and services including spiritual formation and medical assistance to the poorest communities in Davao.',
    tags: ['React', 'Bootstrap', 'Charity'],
    links: {
      live: 'https://www.ancdavao.com/',
    },
    featured: true,
    category: 'full-stack',
    badge: 'production',
  },
  {
    id: 'payrollph',
    title: 'PayrollPH',
    description:
      'A Philippine payroll management system built with React, TypeScript, and Firebase to simplify payroll processing for local businesses.',
    tags: ['TypeScript', 'React', 'Firebase', 'Tailwind CSS'],
    links: {
      github: 'https://github.com/chesteralan/payrollph-react-firebase',
    },
    featured: true,
    category: 'full-stack',
    badge: 'production',
  },
  {
    id: 'tailwind-portfolio',
    title: 'Tailwind Cards Portfolio',
    description:
      'A portfolio site template built with Tailwind CSS card components for a clean, modern showcase.',
    tags: ['TypeScript', 'Tailwind CSS', 'Portfolio'],
    links: {
      github: 'https://github.com/chesteralan/tailwind-cards-portfolio-site',
    },
    featured: false,
    category: 'full-stack',
    badge: 'open-source',
  },
  {
    id: 'altrugenix',
    title: 'Altrugenix.js.org',
    description:
      'A community site dedicated to JavaScript and its awesome ecosystem. Contributions and resources for JS developers since 2015.',
    tags: ['JavaScript', 'Community', 'Documentation'],
    links: {
      github: 'https://github.com/Altrugenix/ui',
    },
    featured: false,
    category: 'open-source',
    badge: 'open-source',
  },
];

export const extensions: Extension[] = [
  {
    id: 'bootstrap-offline',
    title: 'Bootstrap 3.3.x Offline Guide',
    description:
      'A made-easy offline documentation of Bootstrap 3.3.x for web designers and developers. Access all Bootstrap components and utilities without an internet connection.',
    tags: ['Bootstrap', 'Documentation', 'Offline', 'Tools'],
    link: 'https://chromewebstore.google.com/detail/bootstrap-33x-offline-gui/gaojaekjdcfbdfiiggmklaocglaknnkd',
  },
  {
    id: 'icon-fonts',
    title: 'Icon Fonts',
    description:
      'One-click access to Glyphicon, Font Awesome, Material Icons, Dashicons, Ionicons, Octicons, Genericons, and Devicons all in one extension.',
    tags: ['Icons', 'Fonts', 'Design', 'Productivity'],
    link: 'https://chromewebstore.google.com/detail/icon-fonts/djbcaikkgpmefanfonnebhgepgpkghkf',
  },
  {
    id: 'tailwind-cheatsheet',
    title: 'Tailwind Cheatsheet',
    description:
      'Simplify your web development workflow — find Tailwind CSS class names in a flash with this handy Chrome extension.',
    tags: ['Tailwind CSS', 'Productivity', 'Cheatsheet'],
    link: 'https://chromewebstore.google.com/detail/tailwind-css-cheat-sheet/fndbnfnjnhldjeppmglocapmfjdjkleh',
  },
];

export const skills: Skill[] = [
  { name: 'React', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'JavaScript', category: 'frontend' },
  { name: 'Next.js', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'Bootstrap', category: 'frontend' },
  { name: 'HTML/CSS', category: 'frontend' },
  { name: 'Node.js', category: 'backend' },
  { name: 'Firebase', category: 'backend' },
  { name: 'REST APIs', category: 'backend' },
  { name: 'PostgreSQL', category: 'databases' },
  { name: 'Git', category: 'tools' },
  { name: 'GitHub', category: 'tools' },
  { name: 'VS Code', category: 'tools' },
  { name: 'Chrome Extensions', category: 'tools' },
  { name: 'CLI Tools', category: 'tools' },
  { name: 'Netlify', category: 'cloud' },
  { name: 'Vercel', category: 'cloud' },
  { name: 'Docker', category: 'devops' },
  { name: 'CI/CD', category: 'devops' },
  { name: 'Vitest', category: 'testing' },
  { name: 'Playwright', category: 'testing' },
];

export const experience: Experience[] = [
  {
    company: 'PetLabCo.',
    role: 'Senior Full-Stack Engineer',
    period: '2023 — Present',
    description:
      'Spearheaded the enterprise client dashboard migration to Next.js 14 App Router and coordinated the deprecating of legacy monolith services into resilient Go and Node.js microservices.',
    highlights: [
      'Developed responsive interfaces using React + TypeScript',
      'Integrated Firebase backend services',
      'Optimized application performance and accessibility',
    ],
    metrics: [
      { label: 'Reduction in main page TTFB', value: '43%' },
      { label: 'Microservices deployed', value: '14' },
      { label: 'Outages during migration', value: '0' },
    ],
    tags: ['React', 'TypeScript', 'Go', 'Node.js', 'PostgreSQL'],
  },
  {
    company: 'Freelance',
    role: 'Full-Stack Developer',
    period: '2021 — 2023',
    description:
      'Architected and maintained real-time payment settlement engine and risk-detection micro-services handling in excess of $40,000,000 in annualized throughput with sub-second reconciliation.',
    highlights: [
      'Built real-time payment settlement engine',
      'Implemented risk-detection microservices',
      'Managed sub-second reconciliation systems',
    ],
    metrics: [
      { label: 'Total payment volume', value: '$40M+' },
      { label: 'Avg response latency', value: '<120ms' },
      { label: 'Compliance', value: 'PCI DSS' },
    ],
    tags: ['Node.js', 'PostgreSQL', 'Redis Cluster', 'Stripe API', 'Docker'],
  },
  {
    company: 'Apex Labs',
    role: 'Software Engineer',
    period: '2019 — 2021',
    description:
      'Developed responsive customer portals, client-facing configuration tools, and automated internal workflow scripts that eliminated manual data entry for operations teams.',
    highlights: [
      'Built customer-facing configuration tools',
      'Automated internal workflow scripts',
      'Eliminated manual data entry processes',
    ],
    tags: ['React', 'JavaScript (ES6+)', 'Express', 'MongoDB', 'REST APIs'],
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      'Alchie is an extraordinary engineer. His obsession with code cleanliness and rapid delivery accelerated our release cycle by over 40%.',
    author: 'David Miller',
    role: 'VP of Engineering',
    company: 'FinScale',
  },
];

export const stats = [
  { label: 'Years Industry Exp', value: '5+', icon: 'briefcase' },
  { label: 'Shipped Products', value: '20+', icon: 'package' },
  { label: 'Reliability Mindset', value: '99.9%', icon: 'shield' },
  { label: 'Code Quality & DX', value: 'Top 1%', icon: 'award' },
];

export const socialLinks = {
  github: 'https://github.com/chesteralan',
  linkedin: 'https://www.linkedin.com/in/chesteralan/',
  twitter: 'https://x.com/tagudin_dev',
  discord: 'https://discord.com/users/alchie#9021',
  website: 'https://alchie.cc',
  email: 'alchie@tagudin.dev',
};
```

- [ ] **Step 2: Verify build**

```bash
cd apps/web && pnpm build
```

Expected: Build succeeds. New types and data available.

- [ ] **Step 3: Commit**

```bash
git add apps/web/src/data/portfolio.ts
git commit -m "feat(redesign): expand data model — Experience, Testimonial, Stats, Project categories"
```

---

### Task 3: Small components — AvailabilityBadge, StatsRow, EngagementChips

**Files:**
- Create: `apps/web/src/components/AvailabilityBadge.tsx`
- Create: `apps/web/src/components/StatsRow.tsx`
- Create: `apps/web/src/components/EngagementChips.tsx`

**Interfaces:** Consumes: `stats` from `portfolio.ts`.

- [ ] **Step 1: Create `AvailabilityBadge.tsx`**

```tsx
export default function AvailabilityBadge({ className = '' }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700 ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
      Available for work
    </span>
  );
}
```

- [ ] **Step 2: Create `StatsRow.tsx`**

```tsx
import { Briefcase, Package, Shield, Award } from 'lucide-react';
import { stats } from '../data/portfolio';
import ScrollReveal from './ScrollReveal';

const iconMap: Record<string, React.ReactNode> = {
  briefcase: <Briefcase className="h-5 w-5" />,
  package: <Package className="h-5 w-5" />,
  shield: <Shield className="h-5 w-5" />,
  award: <Award className="h-5 w-5" />,
};

export default function StatsRow() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {stats.map((stat, i) => (
        <ScrollReveal key={stat.label} className={`animate-delay-${(i + 1) * 100}`}>
          <div className="card text-center">
            <div className="mb-2 flex justify-center text-primary-500">
              {iconMap[stat.icon]}
            </div>
            <p className="text-3xl font-bold text-on-surface">{stat.value}</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
              {stat.label}
            </p>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
```

- [ ] **Step 3: Create `EngagementChips.tsx`**

```tsx
interface EngagementChipsProps {
  options: string[];
  selected: string;
  onChange: (value: string) => void;
  name: string;
}

export default function EngagementChips({ options, selected, onChange, name }: EngagementChipsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onChange(option)}
          className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
            selected === option
              ? 'border-primary-500 bg-primary-500 text-white'
              : 'border-outline-variant bg-white text-on-surface-variant hover:border-primary-300'
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
```

- [ ] **Step 4: Verify build**

```bash
cd apps/web && pnpm build
```

- [ ] **Step 5: Commit**

```bash
git add apps/web/src/components/AvailabilityBadge.tsx apps/web/src/components/StatsRow.tsx apps/web/src/components/EngagementChips.tsx
git commit -m "feat(redesign): add AvailabilityBadge, StatsRow, EngagementChips components"
```

---

### Task 4: Complex components — Testimonial, SkillsMatrix, CareerTimeline

**Files:**
- Create: `apps/web/src/components/Testimonial.tsx`
- Create: `apps/web/src/components/SkillsMatrix.tsx`
- Create: `apps/web/src/components/CareerTimeline.tsx`

**Interfaces:** Consumes: `testimonials`, `skills`, `experience` from `portfolio.ts`.

- [ ] **Step 1: Create `Testimonial.tsx`**

```tsx
import { Star } from 'lucide-react';
import { testimonials } from '../data/portfolio';
import ScrollReveal from './ScrollReveal';

export default function Testimonial() {
  const t = testimonials[0];
  if (!t) return null;

  return (
    <ScrollReveal>
      <div className="card mx-auto max-w-2xl text-center">
        <div className="mb-4 flex justify-center gap-1 text-amber-400">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-current" />
          ))}
        </div>
        <blockquote className="mb-6 text-lg font-medium leading-relaxed text-on-surface">
          &ldquo;{t.quote}&rdquo;
        </blockquote>
        <div className="flex items-center justify-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-500 text-sm font-bold text-white">
            {t.author.split(' ').map((n) => n[0]).join('')}
          </div>
          <div className="text-left">
            <p className="text-sm font-semibold text-on-surface">{t.author}</p>
            <p className="text-xs text-on-surface-variant">
              {t.role} at {t.company}
            </p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
```

- [ ] **Step 2: Create `SkillsMatrix.tsx`**

```tsx
import { useState } from 'react';
import { skills } from '../data/portfolio';
import ScrollReveal from './ScrollReveal';

const categories = [
  { key: 'all', label: 'All Domains' },
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' },
  { key: 'databases', label: 'Databases' },
  { key: 'devops', label: 'DevOps & Cloud' },
  { key: 'testing', label: 'Testing' },
] as const;

const categoryDescriptions: Record<string, { title: string; description: string }> = {
  frontend: {
    title: 'Frontend Engineering',
    description:
      'High-fidelity responsive interfaces engineered for Core Web Vitals, accessibility, and cross-browser stability.',
  },
  backend: {
    title: 'Backend & Distributed Systems',
    description:
      'RESTful APIs, microservice orchestration, and event-driven architectures built for scale and resilience.',
  },
  databases: {
    title: 'Databases & Caching',
    description:
      'Transactional data modeling, indexing strategies, and in-memory caching layers for sub-millisecond reads.',
  },
  devops: {
    title: 'DevOps & Cloud Architecture',
    description:
      'CI/CD pipelines, container orchestration, and zero-downtime deployment strategies.',
  },
  testing: {
    title: 'Testing, Tooling & Quality Rigor',
    description:
      'Unit, integration, and end-to-end test suites alongside custom developer tooling and static analysis.',
  },
  tools: {
    title: 'Developer Tooling',
    description:
      'CLI tools, browser extensions, and productivity utilities for developer workflows.',
  },
};

export default function SkillsMatrix() {
  const [active, setActive] = useState<string>('all');

  const filtered =
    active === 'all' ? skills : skills.filter((s) => s.category === active);

  return (
    <ScrollReveal>
      <div className="mb-6 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActive(cat.key)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
              active === cat.key
                ? 'bg-primary-500 text-white'
                : 'bg-surface-container text-on-surface-variant hover:bg-primary-50'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {active === 'all'
          ? Object.keys(categoryDescriptions)
              .filter((k) => skills.some((s) => s.category === k))
              .map((catKey) => {
                const cat = categoryDescriptions[catKey];
                const catSkills = skills.filter((s) => s.category === catKey);
                return (
                  <div key={catKey} className="card">
                    <h4 className="mb-1 text-sm font-semibold text-on-surface">
                      {cat.title}
                    </h4>
                    <p className="mb-3 text-xs text-on-surface-variant">
                      {cat.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {catSkills.map((s) => (
                        <span key={s.name} className="tag text-xs">
                          {s.name}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })
          : (
              <div className="sm:col-span-2 lg:col-span-3">
                <div className="card">
                  <h4 className="mb-1 text-sm font-semibold text-on-surface">
                    {categoryDescriptions[active]?.title || active}
                  </h4>
                  <p className="mb-3 text-xs text-on-surface-variant">
                    {categoryDescriptions[active]?.description || ''}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {filtered.map((s) => (
                      <span key={s.name} className="tag">
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
      </div>
    </ScrollReveal>
  );
}
```

- [ ] **Step 3: Create `CareerTimeline.tsx`**

```tsx
import { experience } from '../data/portfolio';
import ScrollReveal from './ScrollReveal';

export default function CareerTimeline() {
  return (
    <div className="space-y-6">
      {experience.map((exp) => (
        <ScrollReveal key={exp.company}>
          <div className="card">
            <div className="mb-3 flex flex-col justify-between sm:flex-row sm:items-center">
              <div>
                <h3 className="text-lg font-semibold text-on-surface">{exp.role}</h3>
                <p className="text-sm font-medium text-primary-500">{exp.company}</p>
              </div>
              <span className="mt-1 text-sm text-on-surface-variant sm:mt-0">
                {exp.period}
              </span>
            </div>
            <p className="mb-3 text-sm text-on-surface-variant">{exp.description}</p>

            {exp.metrics && (
              <div className="mb-3 grid grid-cols-3 gap-4 rounded-xl bg-surface-container p-4">
                {exp.metrics.map((m) => (
                  <div key={m.label} className="text-center">
                    <p className="text-xl font-bold text-primary-500">{m.value}</p>
                    <p className="text-xs text-on-surface-variant">{m.label}</p>
                  </div>
                ))}
              </div>
            )}

            {exp.tags && (
              <div className="flex flex-wrap gap-1.5">
                {exp.tags.map((tag) => (
                  <span key={tag} className="tag text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
```

- [ ] **Step 4: Verify build**

```bash
cd apps/web && pnpm build
```

- [ ] **Step 5: Commit**

```bash
git add apps/web/src/components/Testimonial.tsx apps/web/src/components/SkillsMatrix.tsx apps/web/src/components/CareerTimeline.tsx
git commit -m "feat(redesign): add Testimonial, SkillsMatrix, CareerTimeline components"
```

---

### Task 5: Rewrite Navbar, Footer, Layout

**Files:**
- Rewrite: `apps/web/src/components/Navbar.tsx`
- Rewrite: `apps/web/src/components/Footer.tsx`
- Modify: `apps/web/src/components/Layout.tsx`

**Interfaces:** Consumes: `socialLinks` from `portfolio.ts`. Produces: layout shell for all pages.

- [ ] **Step 1: Rewrite `Navbar.tsx`**

```tsx
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { stripBase } from '../lib/config';
import { Menu, X } from 'lucide-react';
import AvailabilityBadge from './AvailabilityBadge';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/projects', label: 'Projects' },
  { path: '/about', label: 'About' },
  { path: '/extensions', label: 'Extensions' },
  { path: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  const isActive = (path: string) => {
    const p = stripBase(location.pathname);
    return path === '/' ? p === '/' : p.startsWith(path);
  };

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-outline-variant bg-white/80 shadow-sm backdrop-blur-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo + Name + Badge */}
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-on-surface text-sm font-bold text-white">
              AT
            </div>
            <span className="hidden text-sm font-semibold text-on-surface sm:block">
              Alchie Tagudin
            </span>
            <AvailabilityBadge className="hidden md:inline-flex" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? 'bg-primary-500/10 text-primary-500'
                    : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link to="/contact" className="btn-primary hidden text-sm md:inline-flex">
              Get in Touch
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-xl p-2 text-on-surface-variant hover:bg-surface-container md:hidden"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="border-t border-outline-variant bg-white px-4 pb-4">
          <div className="mb-3 pt-3">
            <AvailabilityBadge />
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={closeMenu}
              className={`block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                isActive(link.path)
                  ? 'bg-primary-500/10 text-primary-500'
                  : 'text-on-surface-variant hover:bg-surface-container'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={closeMenu}
            className="btn-primary mt-3 w-full justify-center text-sm"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </nav>
  );
}
```

- [ ] **Step 2: Rewrite `Footer.tsx`**

```tsx
import { Code2, Briefcase, Mail } from 'lucide-react';
import { socialLinks } from '../data/portfolio';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Extensions', href: '/extensions' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-outline-variant bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-on-surface">Alchie Tagudin</h3>
            <p className="mt-1 text-xs font-medium text-primary-500">Full-stack Developer</p>
            <p className="mt-2 max-w-xs text-sm text-on-surface-variant">
              Crafting clean, accessible, and high-performance digital experiences across the web
              with modern architectures and meticulous craft.
            </p>
          </div>

          {/* Nav */}
          <div className="flex gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-on-surface-variant transition-colors hover:text-primary-500"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-surface-container p-2.5 text-on-surface-variant transition-all hover:bg-primary-500/10 hover:text-primary-500"
              aria-label="GitHub"
            >
              <Code2 className="h-4 w-4" />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-surface-container p-2.5 text-on-surface-variant transition-all hover:bg-primary-500/10 hover:text-primary-500"
              aria-label="LinkedIn"
            >
              <Briefcase className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${socialLinks.email}`}
              className="rounded-lg bg-surface-container p-2.5 text-on-surface-variant transition-all hover:bg-primary-500/10 hover:text-primary-500"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-outline-variant pt-6 text-center text-xs text-on-surface-variant">
          &copy; {currentYear} Alchie Tagudin. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 3: Modify `Layout.tsx`**

Remove ThemeToggle import and usage. Replace the entire file:

```tsx
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <ScrollToTop />
      <Navbar />
      <main id="main-content" className="flex-1 pt-16 md:pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
```

- [ ] **Step 4: Verify build**

```bash
cd apps/web && pnpm build
```

- [ ] **Step 5: Commit**

```bash
git add apps/web/src/components/Navbar.tsx apps/web/src/components/Footer.tsx apps/web/src/components/Layout.tsx
git commit -m "feat(redesign): rewrite Navbar, Footer, Layout — new layout shell"
```

---

### Task 6: Rewrite ProjectCard

**Files:**
- Rewrite: `apps/web/src/components/ProjectCard.tsx`

**Interfaces:** Consumes: `Project` from `portfolio.ts`.

- [ ] **Step 1: Rewrite `ProjectCard.tsx`**

```tsx
import { ExternalLink, Code2 } from 'lucide-react';
import type { Project } from '../data/portfolio';

const badgeStyles: Record<string, string> = {
  production: 'bg-green-50 text-green-700',
  'case-study': 'bg-blue-50 text-blue-700',
  'open-source': 'bg-purple-50 text-purple-700',
};

const badgeLabels: Record<string, string> = {
  production: 'Production',
  'case-study': 'Case Study',
  'open-source': 'Open Source',
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="card-hover group relative overflow-hidden p-0">
      {/* Image area */}
      <div className="relative h-48 bg-gradient-to-br from-surface-container to-surface-dim">
        {project.badge && (
          <span
            className={`absolute left-3 top-3 rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
              badgeStyles[project.badge] || 'bg-gray-100 text-gray-700'
            }`}
          >
            {badgeLabels[project.badge] || project.badge}
          </span>
        )}
        <a
          href={project.links.live || project.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-on-surface-variant opacity-0 transition-opacity group-hover:opacity-100"
        >
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="mb-2 flex items-center gap-2">
          <h3 className="text-base font-semibold text-on-surface group-hover:text-primary-500">
            {project.title}
          </h3>
          {project.version && (
            <span className="rounded-full bg-secondary-50 px-2 py-0.5 text-[10px] font-semibold text-secondary-500">
              v{project.version}
            </span>
          )}
        </div>

        <p className="mb-3 line-clamp-2 text-sm leading-relaxed text-on-surface-variant">
          {project.description}
        </p>

        {/* Tags */}
        <div className="mb-4 flex flex-wrap gap-1.5">
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="rounded-full bg-surface-container px-2 py-0.5 text-xs text-on-surface-variant">
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 border-t border-outline-variant pt-3">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-on-surface-variant transition-colors hover:text-primary-500"
            >
              <Code2 className="h-3.5 w-3.5" />
              Source
            </a>
          )}
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-primary-500 transition-colors hover:text-primary-700"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Live App
            </a>
          )}
          {project.links.chrome && (
            <a
              href={project.links.chrome}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-primary-500 transition-colors hover:text-primary-700"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Chrome Store
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Verify build**

```bash
cd apps/web && pnpm build
```

- [ ] **Step 3: Commit**

```bash
git add apps/web/src/components/ProjectCard.tsx
git commit -m "feat(redesign): rewrite ProjectCard — new card with badge, image area, metrics"
```

---

### Task 7: Rewrite Home page

**Files:**
- Rewrite: `apps/web/src/pages/Home.tsx`

**Interfaces:** Consumes: `projects`, `socialLinks`, `testimonials`, `stats` from `portfolio.ts`. Uses: `StatsRow`, `Testimonial`, `AvailabilityBadge`, `ProjectCard`, `ScrollReveal`.

- [ ] **Step 1: Rewrite `Home.tsx`**

```tsx
import { ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import ProjectCard from '../components/ProjectCard';
import StatsRow from '../components/StatsRow';
import Testimonial from '../components/Testimonial';
import AvailabilityBadge from '../components/AvailabilityBadge';
import { projects, socialLinks } from '../data/portfolio';

const coreTech = ['React', 'TypeScript', 'Next.js', 'Node.js', 'Tailwind CSS', 'PostgreSQL'];

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div>
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden">
        <div className="section-container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left */}
            <div>
              <ScrollReveal>
                <AvailabilityBadge className="mb-6" />
              </ScrollReveal>
              <ScrollReveal>
                <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-secondary-500">
                  Full-Stack Engineer &amp; Architect
                </p>
              </ScrollReveal>
              <ScrollReveal>
                <h1 className="mb-6 text-4xl font-bold leading-tight text-on-surface sm:text-5xl">
                  Crafting robust, scalable web applications &amp; seamless digital experiences.
                </h1>
              </ScrollReveal>
              <ScrollReveal>
                <p className="mb-8 max-w-lg text-lg leading-relaxed text-on-surface-variant">
                  Hi, I&apos;m <span className="font-semibold text-on-surface">Alchie Tagudin</span> —
                  specializing in React, Node.js, TypeScript, and resilient cloud-native
                  architectures.
                </p>
              </ScrollReveal>
              <ScrollReveal>
                <div className="flex flex-wrap items-center gap-4">
                  <Link to="/projects" className="btn-primary">
                    View Featured Work <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link to="/contact" className="btn-outline">
                    <Mail className="h-4 w-4" /> Get in Touch
                  </Link>
                </div>
              </ScrollReveal>

              {/* Core Tech */}
              <ScrollReveal>
                <div className="mt-10">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
                    Core Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {coreTech.map((tech) => (
                      <span key={tech} className="tag text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right — Photo */}
            <ScrollReveal className="hidden lg:block">
              <div className="relative mx-auto w-fit">
                <div className="h-72 w-72 rounded-full border-4 border-primary-500 bg-surface-container shadow-xl">
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-primary-100 to-secondary-100">
                    <span className="text-5xl font-bold text-primary-500">AT</span>
                  </div>
                </div>
                <div className="absolute -right-4 top-8 rounded-xl bg-white px-3 py-2 shadow-lg">
                  <p className="text-xs font-semibold text-on-surface">Full-Stack Senior</p>
                  <p className="text-[10px] text-on-surface-variant">8+ Yrs Experience</p>
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
                  <AvailabilityBadge />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── Stats ─── */}
      <section>
        <div className="section-container pt-0">
          <StatsRow />
        </div>
      </section>

      {/* ─── Selected Work ─── */}
      <section className="bg-surface-container/30">
        <div className="section-container">
          <ScrollReveal>
            <p className="section-label">Portfolio</p>
            <h2 className="section-title">Selected Work</h2>
            <p className="section-subtitle mb-10">Production systems shipped at scale.</p>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <ScrollReveal key={project.id}>
                <ProjectCard project={project} />
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div className="mt-8 text-right">
              <Link
                to="/projects"
                className="inline-flex items-center gap-1 text-sm font-medium text-primary-500 hover:text-primary-700"
              >
                View all projects <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Testimonial ─── */}
      <section>
        <div className="section-container">
          <Testimonial />
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-on-surface">
        <div className="section-container text-center">
          <ScrollReveal>
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              Have a project in mind?
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-gray-400">
              Let&apos;s build reliable, performant software together. Now taking select contracts for
              Q3/Q4.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-primary-500 px-8 py-3 font-semibold text-white transition-all duration-200 hover:bg-primary-400 active:scale-95"
            >
              Start a Conversation <ArrowRight className="h-4 w-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
```

- [ ] **Step 2: Verify build**

```bash
cd apps/web && pnpm build
```

- [ ] **Step 3: Commit**

```bash
git add apps/web/src/pages/Home.tsx
git commit -m "feat(redesign): rewrite Home page — hero, stats, selected work, testimonial, CTA"
```

---

### Task 8: Rewrite About page

**Files:**
- Rewrite: `apps/web/src/pages/About.tsx`

**Interfaces:** Consumes: `skills`, `experience` from `portfolio.ts`. Uses: `SkillsMatrix`, `CareerTimeline`, `ScrollReveal`.

- [ ] **Step 1: Rewrite `About.tsx`**

```tsx
import { Download, FileText } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import SkillsMatrix from '../components/SkillsMatrix';
import CareerTimeline from '../components/CareerTimeline';

const values = [
  {
    title: 'Pragmatic Architecture',
    description:
      'Build systems that are easy to reason about. Simple scales; complexity kills.',
  },
  {
    title: 'Obsessive Craft & Quality',
    description:
      'Every detail matters — from naming conventions to API contracts. Excellence is a habit.',
  },
  {
    title: 'Reliability at Scale',
    description:
      'Design for failure, measure everything, and maintain 99.99% uptime SLAs.',
  },
];

const principles = [
  {
    title: 'Scalability by Design',
    description:
      'Build systems that are easy to reason about. Simple scales; complexity kills.',
  },
  {
    title: 'User-Centric Craft',
    description:
      'Every interface decision should solve a real human problem, not just an aesthetic one. Accessibility and usability are not afterthoughts.',
  },
  {
    title: 'Continuous Learning',
    description:
      'Technology evolves constantly and meticulous craft, actively sharing knowledge through mentorship and open-source contributions.',
  },
];

export default function About() {
  return (
    <div>
      {/* ─── Hero ─── */}
      <section>
        <div className="section-container">
          <ScrollReveal>
            <p className="section-label">About Alchie Tagudin</p>
          </ScrollReveal>
          <ScrollReveal>
            <h1 className="mb-4 text-4xl font-bold text-on-surface sm:text-5xl">
              About Me &amp; Engineering Philosophy
            </h1>
          </ScrollReveal>
          <ScrollReveal>
            <p className="section-subtitle mb-12">
              Full-stack software architect with 5+ years of experience engineering high-throughput
              web applications, developer platforms, and resilient cloud infrastructure.
            </p>
          </ScrollReveal>

          <div className="grid gap-8 lg:grid-cols-5">
            {/* Journey */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <div className="card">
                  <p className="section-label">The Journey</p>
                  <h2 className="mb-4 text-xl font-bold text-on-surface">
                    Architecting dependable systems through systematic craft
                  </h2>
                  <div className="space-y-3 text-sm leading-relaxed text-on-surface-variant">
                    <p>
                      My foundation began in core computer science: diving deep into distributed
                      systems, data structures, and algorithm design. That academic rigor evolved into
                      hands-on production engineering across fintech platforms, high-latency SaaS
                      engines, and mission-critical health systems.
                    </p>
                    <p>
                      I approach software as an exercise in empathy — for the end-user, for the
                      maintainers inheriting my code, and for the systems that must scale under
                      unpredictable load. Every architectural choice — from database indexing
                      strategies to cross-boundary event aggregation — must serve measurable operational
                      velocity and business value.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Quick Profile */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <div className="card">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-on-surface">Quick Profile</h3>
                    <span className="text-xs text-primary-500">Active</span>
                  </div>
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-500 text-sm font-bold text-white">
                      AT
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-on-surface">Alchie Tagudin</p>
                      <p className="text-xs text-on-surface-variant">Full-Stack Senior Developer</p>
                    </div>
                  </div>
                  <div className="mb-3 space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-on-surface-variant">Resume / Work Resume</span>
                      <span className="text-primary-500">PDF</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-on-surface-variant">Current Focus</span>
                      <span className="text-on-surface">Next.js + Distributed Systems + Cloud</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-on-surface-variant">Education</span>
                      <span className="text-on-surface">
                        B.S. Computer Science — Software Engineering
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="btn-primary flex-1 justify-center text-xs">
                      <FileText className="h-3.5 w-3.5" /> View Tech Matrix
                    </button>
                    <button className="btn-outline flex-1 justify-center text-xs">
                      <Download className="h-3.5 w-3.5" /> Download CV
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Stats ─── */}
      <section className="bg-surface-container/30">
        <div className="section-container">
          <div className="grid grid-cols-3 gap-4">
            <ScrollReveal>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary-500">5+</p>
                <p className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
                  Years Experience
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary-500">$40M+</p>
                <p className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
                  Processed
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary-500">99.98%</p>
                <p className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
                  Code Uptime SLA
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── Values Cards ─── */}
      <section>
        <div className="section-container">
          <div className="grid gap-4 sm:grid-cols-3">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} className={`animate-delay-${(i + 1) * 100}`}>
                <div className="card text-center">
                  <h3 className="mb-2 text-sm font-semibold text-on-surface">{v.title}</h3>
                  <p className="text-xs text-on-surface-variant">{v.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Skills Matrix ─── */}
      <section className="bg-surface-container/30">
        <div className="section-container">
          <ScrollReveal>
            <p className="section-label">Capabilities &amp; Arsenal</p>
            <h2 className="section-title">Technical Skills Matrix</h2>
            <p className="section-subtitle mb-8">
              A refined collection of languages, runtimes, protocols, and orchestration suites I
              utilize to deliver enterprise-grade digital systems.
            </p>
          </ScrollReveal>
          <SkillsMatrix />
        </div>
      </section>

      {/* ─── Career Timeline ─── */}
      <section>
        <div className="section-container">
          <ScrollReveal>
            <p className="section-label">Prioritized Execution</p>
            <h2 className="section-title">Career Timeline &amp; Experience</h2>
            <p className="section-subtitle mb-8">
              Impact-focused track record across fast-scaling tech companies, solving complex
              bottlenecks in production systems.
            </p>
          </ScrollReveal>
          <CareerTimeline />
        </div>
      </section>

      {/* ─── Principles ─── */}
      <section className="bg-surface-container/30">
        <div className="section-container">
          <ScrollReveal>
            <p className="section-label">Guiding Convictions</p>
            <h2 className="section-title">Engineering Values &amp; Principles</h2>
            <p className="section-subtitle mb-8">
              The non-negotiable cognitive and behavioral baselines I bring to high-performing
              product engineering teams.
            </p>
          </ScrollReveal>
          <div className="grid gap-4 sm:grid-cols-3">
            {principles.map((p, i) => (
              <ScrollReveal key={p.title} className={`animate-delay-${(i + 1) * 100}`}>
                <div className="card">
                  <h3 className="mb-2 text-sm font-semibold text-on-surface">{p.title}</h3>
                  <p className="text-xs text-on-surface-variant">{p.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section>
        <div className="section-container">
          <ScrollReveal>
            <div className="card flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
                  Documented Background
                </p>
                <h2 className="text-xl font-bold text-on-surface">
                  Interested in working together or hiring?
                </h2>
                <p className="mt-1 text-sm text-on-surface-variant">
                  Grab a detailed PDF of my technical track record or start a direct conversation
                  regarding contract or full-time opportunities.
                </p>
              </div>
              <div className="flex gap-3">
                <button className="btn-primary whitespace-nowrap text-sm">
                  <Download className="h-4 w-4" /> Download Resume (PDF)
                </button>
                <button className="btn-outline whitespace-nowrap text-sm">Get in Touch</button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
```

- [ ] **Step 2: Verify build**

```bash
cd apps/web && pnpm build
```

- [ ] **Step 3: Commit**

```bash
git add apps/web/src/pages/About.tsx
git commit -m "feat(redesign): rewrite About page — journey, skills matrix, timeline, values"
```

---

### Task 9: Rewrite Projects page

**Files:**
- Rewrite: `apps/web/src/pages/Projects.tsx`

**Interfaces:** Consumes: `projects` from `portfolio.ts`. Uses: `ProjectCard`, `StatsRow`, `ScrollReveal`.

- [ ] **Step 1: Rewrite `Projects.tsx`**

```tsx
import { useState } from 'react';
import { Search, ArrowRight, Code2, GitBranch } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/portfolio';

const categories = ['All Projects', 'Full-Stack Web', 'Cloud & DevOps', 'Fintech & API', 'Open Source Tools'];

const categoryMap: Record<string, string> = {
  'All Projects': 'all',
  'Full-Stack Web': 'full-stack',
  'Cloud & DevOps': 'cloud',
  'Fintech & API': 'fintech',
  'Open Source Tools': 'open-source',
};

const projectStats = [
  { label: 'Events Processed/mo', value: '12M+' },
  { label: 'Global P99 Latency', value: '<150ms' },
  { label: 'Architecture Uptime', value: '99.99%' },
  { label: 'OSS Releases Merged', value: '42+' },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All Projects');
  const [search, setSearch] = useState('');

  const filtered = projects.filter((p) => {
    const matchesCategory =
      activeCategory === 'All Projects' || p.category === categoryMap[activeCategory];
    const matchesSearch =
      search === '' ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* ─── Hero ─── */}
      <section>
        <div className="section-container">
          <ScrollReveal>
            <p className="section-label">Engineering Portfolio</p>
          </ScrollReveal>
          <ScrollReveal>
            <h1 className="mb-4 text-4xl font-bold text-on-surface sm:text-5xl">
              Featured Work &amp; Engineering Projects
            </h1>
          </ScrollReveal>
          <ScrollReveal>
            <p className="section-subtitle mb-10">
              A curated collection of distributed backend systems, low-latency microservices, and
              design-led web applications engineered for scale, resiliency, and optimal user
              experience.
            </p>
          </ScrollReveal>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {projectStats.map((stat, i) => (
              <ScrollReveal key={stat.label} className={`animate-delay-${(i + 1) * 100}`}>
                <div className="card text-center">
                  <p className="text-2xl font-bold text-primary-500">{stat.value}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
                    {stat.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Filter + Grid ─── */}
      <section className="bg-surface-container/30">
        <div className="section-container">
          {/* Filter bar */}
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                    activeCategory === cat
                      ? 'bg-primary-500 text-white'
                      : 'bg-white text-on-surface-variant hover:bg-surface-container'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-on-surface-variant" />
              <input
                type="text"
                placeholder="Search tech or keywords..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl border border-outline-variant bg-white py-2 pl-10 pr-4 text-sm text-on-surface outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/30 sm:w-64"
              />
            </div>
          </div>

          {/* Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
              <ScrollReveal key={project.id}>
                <ProjectCard project={project} />
              </ScrollReveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="py-12 text-center text-on-surface-variant">
              No projects match your filters.
            </p>
          )}
        </div>
      </section>

      {/* ─── Open Source ─── */}
      <section>
        <div className="section-container">
          <ScrollReveal>
            <p className="section-label">Engineering Pulse</p>
            <h2 className="section-title">Commitment to Open Source &amp; Quality</h2>
          </ScrollReveal>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            {/* Stats */}
            <ScrollReveal>
              <div className="space-y-4">
                <div className="card flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-500/10 text-primary-500">
                    <GitBranch className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-on-surface">1,840+</p>
                    <p className="text-xs text-on-surface-variant">Annual Git Commits in 2024</p>
                  </div>
                </div>
                <div className="card flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-500/10 text-primary-500">
                    <Code2 className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-on-surface">42 PRs</p>
                    <p className="text-xs text-on-surface-variant">Merged across upstream repos</p>
                  </div>
                </div>
                <div className="card flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-500/10 text-primary-500">
                    <GitBranch className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-on-surface">9 Packages</p>
                    <p className="text-xs text-on-surface-variant">Published to npm, crates &amp; Go</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Contribution graph placeholder */}
            <ScrollReveal>
              <div className="card">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-on-surface">Contribution Stream</h3>
                  <span className="text-xs text-on-surface-variant">Last 52 Weeks</span>
                </div>
                <div className="grid grid-cols-12 gap-1">
                  {[...Array(48)].map((_, i) => (
                    <div
                      key={i}
                      className={`h-3 rounded-sm ${
                        i % 7 === 0
                          ? 'bg-primary-500/40'
                          : i % 3 === 0
                            ? 'bg-primary-500/20'
                            : 'bg-surface-container'
                      }`}
                    />
                  ))}
                </div>
                <p className="mt-4 text-xs text-on-surface-variant">
                  Primary Focus: Microservice Runtimes &amp; Edge Compute
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-on-surface">
        <div className="section-container text-center">
          <ScrollReveal>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary-400">
              Ready to Collaborate
            </p>
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              Looking to architect a new platform or modernize legacy software?
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-gray-400">
              I partner with tech founders and engineering teams to design resilient systems,
              optimize frontend response latencies, and deliver scalable production code.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-primary-500 px-8 py-3 font-semibold text-white transition-all hover:bg-primary-400 active:scale-95"
              >
                Start a Conversation <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${'alchie@tagudin.dev'}`}
                className="inline-flex items-center gap-2 rounded-xl border border-gray-600 px-8 py-3 font-semibold text-white transition-all hover:border-primary-400 hover:text-primary-400 active:scale-95"
              >
                Direct Email <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
```

- [ ] **Step 2: Verify build**

```bash
cd apps/web && pnpm build
```

- [ ] **Step 3: Commit**

```bash
git add apps/web/src/pages/Projects.tsx
git commit -m "feat(redesign): rewrite Projects page — filters, search, stats, open source section"
```

---

### Task 10: Rewrite Contact page

**Files:**
- Rewrite: `apps/web/src/pages/Contact.tsx`

**Interfaces:** Consumes: `socialLinks` from `portfolio.ts`. Uses: `EngagementChips`, `ScrollReveal`.

- [ ] **Step 1: Rewrite `Contact.tsx`**

```tsx
import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2, Copy, Mail, MapPin, Clock, Github, Linkedin, MessageCircle } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import EngagementChips from '../components/EngagementChips';
import { socialLinks } from '../data/portfolio';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

const engagementTypes = ['Full-stack App', 'Architecture Consulting', 'Contract / Freelance', 'Other'];
const timelineOptions = ['1 - 3 months', '3 - 6 months', '6+ months', 'Undisclosed'];
const budgetRanges = ['$5k - $10k', '$10k - $25k', '$25k+', 'Undisclosed'];

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    engagementType: '',
    timeline: '',
    budget: '',
    message: '',
    website: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.website) return;

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      setErrorMsg('Please fill in all required fields.');
      setStatus('error');
      return;
    }

    if (!EMAIL_REGEX.test(formData.email)) {
      setErrorMsg('Please enter a valid email address.');
      setStatus('error');
      return;
    }

    setStatus('sending');
    setErrorMsg('');

    try {
      const endpoint =
        import.meta.env.VITE_CONTACT_ENDPOINT ||
        `https://us-central1-${import.meta.env.VITE_FIREBASE_PROJECT_ID || 'YOUR_PROJECT_ID'}.cloudfunctions.net/sendContactToSlack`;

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          subject: formData.engagementType || 'New Contact Message',
          message: formData.message,
          timestamp: new Date().toISOString(),
          engagementType: formData.engagementType,
          timeline: formData.timeline,
          budget: formData.budget,
        }),
      });

      if (!response.ok) throw new Error('Failed to send message');
      setStatus('success');
      setFormData({ firstName: '', lastName: '', email: '', engagementType: '', timeline: '', budget: '', message: '', website: '' });
    } catch {
      setErrorMsg('Something went wrong. Please try again later.');
      setStatus('error');
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(socialLinks.email);
  };

  return (
    <div>
      <section>
        <div className="section-container">
          <ScrollReveal>
            <p className="section-label">Get in Touch</p>
          </ScrollReveal>
          <ScrollReveal>
            <h1 className="mb-4 text-4xl font-bold text-on-surface sm:text-5xl">
              Let&apos;s Build Something Exceptional
            </h1>
          </ScrollReveal>
          <ScrollReveal>
            <p className="section-subtitle mb-12">
              Currently available for select freelance engineering contracts, architectural
              consulting, and full-time senior engineering leadership roles.
            </p>
          </ScrollReveal>

          <div className="grid gap-8 lg:grid-cols-5">
            {/* Left — Info */}
            <div className="space-y-6 lg:col-span-2">
              <ScrollReveal>
                <div className="card">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-green-500" />
                      <span className="text-sm font-semibold text-on-surface">
                        Available for Q3/Q4 Projects
                      </span>
                    </div>
                    <span className="rounded-full bg-surface-container px-2.5 py-0.5 text-xs text-on-surface-variant">
                      Remote &amp; Hybrid
                    </span>
                  </div>
                  <p className="text-sm text-on-surface-variant">
                    Accepting scoped deliverables, venture buildouts, and senior architectural
                    retainers.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="card">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-container text-on-surface-variant">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-on-surface-variant">
                        Direct Email
                      </p>
                      <p className="text-sm font-medium text-on-surface">{socialLinks.email}</p>
                    </div>
                    <button
                      onClick={copyEmail}
                      className="rounded-lg border border-outline-variant px-2.5 py-1 text-xs text-on-surface-variant hover:bg-surface-container"
                    >
                      <Copy className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="card">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-container text-on-surface-variant">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-on-surface-variant">
                        Location &amp; Working Hours
                      </p>
                      <p className="text-sm font-medium text-on-surface">
                        Remote Friendly (UTC-8 to UTC+8 overlap)
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="card">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-container text-on-surface-variant">
                      <Clock className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-on-surface-variant">
                        Response Window
                      </p>
                      <p className="text-sm font-medium text-on-surface">
                        Typically responds within 24 hours
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Developer Presence */}
              <ScrollReveal>
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-on-surface-variant">
                  Developer Presence
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card flex items-center gap-2"
                  >
                    <Github className="h-4 w-4 text-on-surface-variant" />
                    <div>
                      <p className="text-xs font-semibold text-on-surface">GitHub</p>
                      <p className="text-[10px] text-on-surface-variant">@chesteralan</p>
                    </div>
                  </a>
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card flex items-center gap-2"
                  >
                    <Linkedin className="h-4 w-4 text-on-surface-variant" />
                    <div>
                      <p className="text-xs font-semibold text-on-surface">LinkedIn</p>
                      <p className="text-[10px] text-on-surface-variant">/in/chesteralan</p>
                    </div>
                  </a>
                  <a
                    href={socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card flex items-center gap-2"
                  >
                    <MessageCircle className="h-4 w-4 text-on-surface-variant" />
                    <div>
                      <p className="text-xs font-semibold text-on-surface">X / Twitter</p>
                      <p className="text-[10px] text-on-surface-variant">@tagudin_dev</p>
                    </div>
                  </a>
                  <a
                    href={socialLinks.discord}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card flex items-center gap-2"
                  >
                    <MessageCircle className="h-4 w-4 text-on-surface-variant" />
                    <div>
                      <p className="text-xs font-semibold text-on-surface">Discord</p>
                      <p className="text-[10px] text-on-surface-variant">alchie#9021</p>
                    </div>
                  </a>
                </div>
              </ScrollReveal>

              {/* Core Areas */}
              <ScrollReveal>
                <div className="card">
                  <p className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-on-surface-variant">
                    Core Areas of Engagement
                  </p>
                  <ul className="space-y-2 text-sm text-on-surface-variant">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                      Full-stack web application development (MVP to multi-tenant scale)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                      High-performance API design, caching layers, and database optimization
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                      Frontend architecture, design system engineering &amp; Core Web Vitals audits
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                      Cloud infrastructure (AWS/GCP), containerization, and zero-downtime CI/CD
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
            </div>

            {/* Right — Form */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <form onSubmit={handleSubmit} className="card p-8">
                  <h2 className="mb-1 text-xl font-bold text-on-surface">Send a Project Inquiry</h2>
                  <p className="mb-6 text-sm text-on-surface-variant">
                    Fill out the details below. For urgent requirements, feel free to contact
                    directly via email.
                  </p>

                  {/* Honeypot */}
                  <div className="pointer-events-none absolute h-0 overflow-hidden opacity-0" aria-hidden="true">
                    <label htmlFor="website">Leave this blank</label>
                    <input type="text" id="website" name="website" value={formData.website} onChange={handleChange} tabIndex={-1} autoComplete="off" />
                  </div>

                  <div className="mb-4 grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-on-surface">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl border border-outline-variant bg-white px-4 py-2.5 text-sm text-on-surface outline-none transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-500/30"
                        placeholder="Jane"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-on-surface">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl border border-outline-variant bg-white px-4 py-2.5 text-sm text-on-surface outline-none transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-500/30"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="mb-1.5 block text-sm font-medium text-on-surface">
                      Work Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-outline-variant bg-white px-4 py-2.5 text-sm text-on-surface outline-none transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-500/30"
                      placeholder="jane@company.com"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="mb-1.5 block text-sm font-medium text-on-surface">
                      Project Scope / Engagement Type
                    </label>
                    <EngagementChips
                      options={engagementTypes}
                      selected={formData.engagementType}
                      onChange={(val) => setFormData((prev) => ({ ...prev, engagementType: val }))}
                      name="engagementType"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="mb-1.5 block text-sm font-medium text-on-surface">
                      Estimated Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-outline-variant bg-white px-4 py-2.5 text-sm text-on-surface outline-none transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-500/30"
                    >
                      <option value="">Select timeline</option>
                      {timelineOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-4">
                    <label className="mb-1.5 block text-sm font-medium text-on-surface">
                      Approximate Budget (USD)
                    </label>
                    <EngagementChips
                      options={budgetRanges}
                      selected={formData.budget}
                      onChange={(val) => setFormData((prev) => ({ ...prev, budget: val }))}
                      name="budget"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="mb-1.5 block text-sm font-medium text-on-surface">
                      Project Details <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full resize-none rounded-xl border border-outline-variant bg-white px-4 py-2.5 text-sm text-on-surface outline-none transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-500/30"
                      placeholder="Tell me about your project, goals, tech stack, and timeline..."
                    />
                  </div>

                  {status === 'success' && (
                    <div className="mb-4 flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4">
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                      <div>
                        <p className="text-sm font-medium text-green-800">Message sent!</p>
                        <p className="text-sm text-green-600">Thanks for reaching out. I&apos;ll get back to you soon!</p>
                      </div>
                    </div>
                  )}

                  {status === 'error' && (
                    <div className="mb-4 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4">
                      <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                      <p className="text-sm text-red-700">{errorMsg}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn-dark w-full justify-center disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {status === 'sending' ? (
                      <><Loader2 className="h-4 w-4 animate-spin" /> Sending...</>
                    ) : (
                      <><Send className="h-4 w-4" /> Send Message</>
                    )}
                  </button>

                  <p className="mt-3 text-center text-xs text-on-surface-variant">
                    Your information is kept strictly confidential and will never be shared.
                  </p>
                </form>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
```

- [ ] **Step 2: Verify build**

```bash
cd apps/web && pnpm build
```

- [ ] **Step 3: Commit**

```bash
git add apps/web/src/pages/Contact.tsx
git commit -m "feat(redesign): rewrite Contact page — rich form with engagement, budget, timeline"
```

---

### Task 11: Restyle Extensions page

**Files:**
- Modify: `apps/web/src/pages/Extensions.tsx`

**Interfaces:** Consumes: `extensions` from `portfolio.ts`.

- [ ] **Step 1: Rewrite `Extensions.tsx`**

Replace all `dark:` classes. Replace the entire file:

```tsx
import { ExternalLink, Globe } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { extensions } from '../data/portfolio';

export default function Extensions() {
  return (
    <div>
      <section>
        <div className="section-container">
          <ScrollReveal>
            <p className="section-label">Chrome Extensions</p>
            <h1 className="mb-4 text-4xl font-bold text-on-surface sm:text-5xl">
              Browser Tools
            </h1>
            <p className="section-subtitle mb-12">
              Productivity-boosting Chrome extensions I&apos;ve built and published.
            </p>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-3">
            {extensions.map((ext) => (
              <ScrollReveal key={ext.id}>
                <a
                  href={ext.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-hover group block"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-500/10">
                    <Globe className="h-6 w-6 text-primary-500" />
                  </div>

                  <h3 className="mb-2 text-lg font-semibold text-on-surface group-hover:text-primary-500">
                    {ext.title}
                  </h3>

                  <p className="mb-4 text-sm leading-relaxed text-on-surface-variant">
                    {ext.description}
                  </p>

                  <div className="mb-4 flex flex-wrap gap-2">
                    {ext.tags.map((tag) => (
                      <span key={tag} className="tag text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary-500">
                    <ExternalLink className="h-4 w-4" />
                    View in Chrome Web Store
                  </span>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
```

- [ ] **Step 2: Verify build**

```bash
cd apps/web && pnpm build
```

- [ ] **Step 3: Commit**

```bash
git add apps/web/src/pages/Extensions.tsx
git commit -m "feat(redesign): restyle Extensions page — remove dark mode, update colors"
```

---

### Task 12: Cleanup — remove ThemeToggle + update tests

**Files:**
- Delete: `apps/web/src/components/ThemeToggle.tsx`
- Modify: `apps/web/src/components/__tests__/ThemeToggle.test.tsx` (delete)
- Modify: `apps/web/src/components/__tests__/Layout.test.tsx`
- Modify: `apps/web/src/components/__tests__/Navbar.test.tsx`
- Modify: `apps/web/src/components/__tests__/Footer.test.tsx`
- Modify: `apps/web/src/components/__tests__/ProjectCard.test.tsx`
- Modify: `apps/web/src/pages/__tests__/*.test.tsx` (all page tests)

**Interfaces:** Final cleanup after all rewrites.

- [ ] **Step 1: Delete ThemeToggle and its test**

```bash
rm apps/web/src/components/ThemeToggle.tsx apps/web/src/components/__tests__/ThemeToggle.test.tsx
```

- [ ] **Step 2: Update Layout test**

Remove any ThemeToggle assertions. The Layout test should verify Navbar, Footer, and ScrollToTop render.

- [ ] **Step 3: Update Navbar test**

Remove ThemeToggle-related assertions. Verify new elements: availability badge, CTA button, nav links.

- [ ] **Step 4: Update Footer test**

Update for new structure (no dark mode classes, new social links).

- [ ] **Step 5: Update ProjectCard test**

Update for new structure (badge, image area, version badge).

- [ ] **Step 6: Update all page tests**

Remove `dark:` class expectations. Update for new component structures.

- [ ] **Step 7: Run full test suite**

```bash
cd apps/web && pnpm test
```

Expected: All tests pass.

- [ ] **Step 8: Commit**

```bash
git add -A
git commit -m "feat(redesign): remove ThemeToggle, update all tests for redesign"
```

---

### Task 13: Final verification

**Files:** None — verification only.

- [ ] **Step 1: Clean build**

```bash
cd apps/web && rm -rf dist && pnpm build
```

Expected: Clean build, no errors.

- [ ] **Step 2: Run all tests**

```bash
cd apps/web && pnpm test
```

Expected: All tests pass.

- [ ] **Step 3: Run lint**

```bash
cd apps/web && pnpm lint
```

Expected: No lint errors.

- [ ] **Step 4: Visual check**

Start dev server and verify each page matches the Stitch design screenshots:

```bash
cd apps/web && pnpm dev
```

- [ ] **Step 5: Final commit (if any fixes needed)**

```bash
git add -A
git commit -m "fix(redesign): final verification fixes"
```

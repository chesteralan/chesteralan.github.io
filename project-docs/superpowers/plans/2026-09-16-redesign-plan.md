# Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Complete visual redesign of the portfolio site to match Stitch design mockups — new layout, components, typography, icons, and visual language across all pages.

**Architecture:** Rewrite all page components and global components (Navbar, Footer, ProjectCard) to match the Stitch mockup visual language. Replace Lucide React icons with Material Symbols Outlined. Update Tailwind config, CSS utilities, and data model. Keep multi-page React Router structure. Maintain real portfolio data.

**Tech Stack:** React, TypeScript, Tailwind CSS, Material Symbols Outlined (Google Fonts), React Router, Vitest, Vite

**Spec:** `project-docs/superpowers/specs/2026-09-16-redesign-design.md`

## Global Constraints

- Keep multi-page React Router architecture (do NOT convert to single-page)
- Keep "Frontend Developer" title throughout
- Keep real portfolio data (ANC, PayrollPH, Altrugenix, etc.)
- Material Symbols Outlined icons (replaces Lucide React)
- Brand color: `#0891b2` (cyan-600), hover: `#0e7490`
- Background: `#f8fafc` (slate-50)
- Font: Inter (headings extrabold/800, tracking-tight)
- Max width: `max-w-7xl` (wider than current max-w-6xl)
- No dark mode variants
- Extensions page accessible via direct URL only (no nav link)

---

## Task 1: Foundation — Fonts, Config, CSS

**Files:**
- Modify: `apps/web/index.html`
- Modify: `apps/web/tailwind.config.js`
- Modify: `apps/web/src/index.css`

**Interfaces:**
- Consumes: none
- Produces: Tailwind config with brand colors, CSS component classes, Material Symbols font loaded

- [ ] **Step 1: Add Material Symbols font to index.html**

Add before `</head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
```

Also update `<body>` class to `bg-[#f8fafc]` and remove `dark:` variants.

- [ ] **Step 2: Update tailwind.config.js**

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
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

- [ ] **Step 3: Rewrite index.css**

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
    @apply bg-[#f8fafc] font-sans text-slate-800 antialiased;
  }

  ::selection {
    @apply bg-cyan-100 text-cyan-900;
  }
}

@layer components {
  .section-container {
    @apply mx-auto max-w-7xl px-6 py-20;
  }

  .section-title {
    @apply mb-4 text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl;
  }

  .section-subtitle {
    @apply max-w-2xl text-lg text-slate-600;
  }

  .card {
    @apply rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm;
  }

  .card-hover {
    @apply card transition-shadow hover:shadow-md;
  }

  .btn-primary {
    @apply inline-flex items-center gap-2 rounded-lg bg-[#0891b2] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#0e7490];
  }

  .btn-outline {
    @apply inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50;
  }

  .tag {
    @apply inline-block rounded-md border border-slate-200 bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700;
  }

  .section-label {
    @apply mb-2 text-xs font-bold uppercase tracking-wider text-[#0891b2];
  }
}

@layer utilities {
  .skip-link {
    @apply fixed left-0 top-0 z-[100] -translate-y-full rounded-br-xl bg-[#0891b2] px-4 py-2 font-medium text-white opacity-0 transition-all duration-200;
  }
  .skip-link:focus {
    @apply translate-y-0 opacity-100;
  }

  .material-symbols-outlined {
    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
  }

  .bg-dot-grid {
    background-color: #f8fafc;
    background-image: radial-gradient(#cbd5e1 1px, transparent 1px);
    background-size: 16px 16px;
  }

  .hero-glow {
    background: radial-gradient(circle at 50% 0%, rgba(224, 242, 254, 0.6) 0%, rgba(248, 250, 252, 0) 70%);
  }
}
```

- [ ] **Step 4: Verify build passes**

Run: `npx turbo build`
Expected: 2/2 apps build successfully

- [ ] **Step 5: Commit**

```bash
git add apps/web/index.html apps/web/tailwind.config.js apps/web/src/index.css
git commit -m "feat(web): update foundation — Material Symbols font, brand palette, new CSS utilities"
```

---

## Task 2: Update Data Model

**Files:**
- Modify: `apps/web/src/data/portfolio.ts`

**Interfaces:**
- Consumes: none
- Produces: Updated `Project` (with `category`, `previewGradient`, `metric`), `Stats` (with `icon` field), `Testimonial` (with `avatarColor`), `SkillCategory` (with `icon`, `footerLabel`, `footerValue`)

- [ ] **Step 1: Rewrite portfolio.ts**

```ts
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  links: {
    github?: string;
    live?: string;
    chrome?: string;
  };
  featured?: boolean;
  category?: 'web' | 'extension' | 'tool';
  previewGradient?: string;
  metric?: string;
  status?: 'Production' | 'Open Source' | 'Side Project';
}

export interface Extension {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
}

export interface Skill {
  name: string;
  category: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  badge: string;
  skills: string[];
  footerLabel: string;
  footerValue: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
  tags: string[];
  dotColor: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  initials: string;
}

export interface Stats {
  projectsCompleted: number;
  yearsExperience: number;
  extensionsPublished: number;
  happyClients: number;
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
    category: 'web',
    previewGradient: 'from-slate-900 to-slate-800',
    metric: 'Charity Platform',
    status: 'Production',
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
    category: 'web',
    previewGradient: 'from-indigo-950 to-slate-900',
    metric: 'Payroll System',
    status: 'Production',
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
    category: 'web',
    previewGradient: 'from-cyan-950 to-slate-900',
    metric: 'Portfolio Template',
    status: 'Open Source',
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
    category: 'web',
    previewGradient: 'from-amber-950 to-slate-900',
    metric: 'Community Hub',
    status: 'Open Source',
  },
];

export const extensions: Extension[] = [
  {
    id: 'bootstrap-offline',
    title: 'Bootstrap 3.3.x Offline Guide',
    description:
      'A made-easy offline documentation of Bootstrap 3.3.x for web designers and developers.',
    tags: ['Bootstrap', 'Documentation', 'Offline'],
    link: 'https://chromewebstore.google.com/detail/bootstrap-33x-offline-gui/gaojaekjdcfbdfiiggmklaocglaknnkd',
  },
  {
    id: 'icon-fonts',
    title: 'Icon Fonts',
    description:
      'One-click access to Glyphicon, Font Awesome, Material Icons, Dashicons, Ionicons, Octicons, Genericons, and Devicons.',
    tags: ['Icons', 'Fonts', 'Design'],
    link: 'https://chromewebstore.google.com/detail/icon-fonts/djbcaikkgpmefanfonnebhgepgpkghkf',
  },
  {
    id: 'tailwind-cheatsheet',
    title: 'Tailwind Cheatsheet',
    description:
      'Simplify your web development workflow — find Tailwind CSS class names in a flash.',
    tags: ['Tailwind CSS', 'Productivity'],
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
  { name: 'Git', category: 'tools' },
  { name: 'GitHub', category: 'tools' },
  { name: 'VS Code', category: 'tools' },
  { name: 'Chrome Extensions', category: 'tools' },
  { name: 'CLI Tools', category: 'tools' },
  { name: 'Firebase Hosting', category: 'cloud' },
  { name: 'Netlify', category: 'cloud' },
  { name: 'Vercel', category: 'cloud' },
];

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend Engineering',
    description: 'High-performance reactive interfaces with pixel-perfect responsive execution and accessible interactions.',
    icon: 'monitor',
    badge: 'Core Mastery',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'JavaScript', 'HTML/CSS'],
    footerLabel: 'Primary Focus',
    footerValue: 'React + TypeScript',
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    description: 'Fault-tolerant backend architectures engineered for low latency and high concurrency throughput.',
    icon: 'terminal',
    badge: 'Distributed',
    skills: ['Node.js', 'Firebase', 'REST APIs', 'Express'],
    footerLabel: 'Runtime',
    footerValue: 'Node.js',
  },
  {
    id: 'tools',
    title: 'Tools & DevOps',
    description: 'Developer tooling, version control, and deployment automation for efficient workflows.',
    icon: 'build',
    badge: 'Tooling',
    skills: ['Git', 'GitHub', 'VS Code', 'Chrome Extensions', 'CLI Tools'],
    footerLabel: 'VCS',
    footerValue: 'Git + GitHub',
  },
  {
    id: 'cloud',
    title: 'Cloud & Deployment',
    description: 'Cloud platform deployment, hosting, and CI/CD pipeline configuration.',
    icon: 'cloud',
    badge: 'Infrastructure',
    skills: ['Firebase Hosting', 'Netlify', 'Vercel'],
    footerLabel: 'Platforms',
    footerValue: '3 Cloud Providers',
  },
];

export const experience: Experience[] = [
  {
    id: 'freelance',
    role: 'Freelance Web Developer',
    company: 'Self-Employed',
    period: '2015 — Present',
    description: 'Building web applications, Chrome extensions, and digital solutions for clients and personal projects.',
    highlights: [
      'Developed and published 3+ Chrome extensions with thousands of users',
      'Built charity platforms serving underprivileged communities',
      'Created payroll management systems for local businesses',
    ],
    tags: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    dotColor: 'bg-[#0891b2]',
  },
  {
    id: 'open-source',
    role: 'Open Source Contributor',
    company: 'Community',
    period: '2015 — Present',
    description: 'Contributing to JavaScript ecosystem through community sites, extensions, and developer tools.',
    highlights: [
      'Created Altrugenix.js.org community hub',
      'Published 3 Chrome extensions on the Web Store',
      'Active GitHub contributor since 2012',
    ],
    tags: ['JavaScript', 'Community', 'Chrome Extensions'],
    dotColor: 'bg-purple-600',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 'test1',
    name: 'Client',
    role: 'ANC Davao',
    content: 'Working with Chester was a great experience. He delivered a professional website that perfectly captured our mission and helped us reach more people.',
    initials: 'AN',
  },
];

export const stats: Stats = {
  projectsCompleted: 15,
  yearsExperience: 8,
  extensionsPublished: 3,
  happyClients: 10,
};

export const socialLinks = {
  github: 'https://github.com/chesteralan',
  linkedin: 'https://www.linkedin.com/in/chesteralan/',
  website: 'https://alchie.cc',
  email: 'tagudinalchie@gmail.com',
};
```

- [ ] **Step 2: Verify build passes**

Run: `npx turbo build`
Expected: 2/2 apps build successfully (may have import errors in components — that's expected, we'll fix them in subsequent tasks)

- [ ] **Step 3: Commit**

```bash
git add apps/web/src/data/portfolio.ts
git commit -m "feat(web): update data model with new fields for redesigned UI"
```

---

## Task 3: Rewrite Navbar Component

**Files:**
- Modify: `apps/web/src/components/Navbar.tsx`

**Interfaces:**
- Consumes: `socialLinks` from portfolio.ts
- Produces: Sticky header with pill nav, availability badge, avatar, CTA button

- [ ] **Step 1: Rewrite Navbar.tsx**

```tsx
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { stripBase } from '../lib/config';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/projects', label: 'Projects' },
  { path: '/about', label: 'About' },
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
    <header
      className={`fixed left-0 right-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? 'border-slate-200 bg-white/90 backdrop-blur-md'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo & Availability */}
        <div className="flex items-center gap-3">
          <Link to="/" className="group flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-lg font-bold text-white shadow-sm">
              A
            </div>
            <span className="text-lg font-bold tracking-tight text-slate-900">
              Alchie Tagudin
            </span>
          </Link>
          <div className="hidden items-center gap-1.5 rounded-full border border-cyan-200/80 bg-cyan-50 px-3 py-1 sm:inline-flex">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-medium text-cyan-800">Available for work</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 rounded-xl bg-slate-100/80 p-1.5 text-sm font-medium text-slate-600 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`rounded-lg px-4 py-1.5 transition-colors ${
                isActive(link.path)
                  ? 'bg-white font-semibold text-slate-900 shadow-sm'
                  : 'hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA & Avatar */}
        <div className="flex items-center gap-3">
          <Link to="/contact" className="btn-primary hidden sm:inline-flex">
            Get in Touch
          </Link>
          <div className="relative h-9 w-9 overflow-hidden rounded-full border border-slate-200 bg-slate-100">
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#0891b2] to-cyan-400 text-xs font-bold text-white">
              AT
            </div>
          </div>
          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 md:hidden"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-[22px]">
              {isOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="border-t border-slate-100 bg-white px-6 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={closeMenu}
              className={`block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                isActive(link.path)
                  ? 'bg-cyan-50 text-[#0891b2]'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact" onClick={closeMenu} className="btn-primary mt-2 w-full justify-center">
            Get in Touch
          </Link>
        </div>
      </div>
    </header>
  );
}
```

- [ ] **Step 2: Verify build passes**

Run: `npx turbo build`
Expected: 2/2 apps build successfully

- [ ] **Step 3: Commit**

```bash
git add apps/web/src/components/Navbar.tsx
git commit -m "feat(web): rewrite Navbar with pill nav, availability badge, avatar"
```

---

## Task 4: Rewrite Footer Component

**Files:**
- Modify: `apps/web/src/components/Footer.tsx`

**Interfaces:**
- Consumes: `socialLinks` from portfolio.ts
- Produces: Compact footer with monogram, nav links, SVG social icons

- [ ] **Step 1: Rewrite Footer.tsx**

```tsx
import { socialLinks } from '../data/portfolio';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-slate-200 bg-white py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-sm sm:flex-row">
        {/* Brand */}
        <div className="space-y-1 text-center sm:text-left">
          <div className="flex items-center justify-center gap-2 sm:justify-start">
            <span className="font-bold text-slate-900">Alchie Tagudin</span>
            <span className="rounded border border-cyan-100 bg-cyan-50 px-2 py-0.5 text-xs font-semibold text-[#0891b2]">
              Frontend Developer
            </span>
          </div>
          <p className="max-w-sm text-xs text-slate-500">
            Crafting clean, accessible, and high-performance digital experiences across the web.
          </p>
        </div>

        {/* Links & Socials */}
        <div className="flex items-center gap-8">
          <nav className="flex items-center gap-6 text-xs font-semibold text-slate-600">
            <a href="/" className="hover:text-slate-900 transition-colors">Home</a>
            <a href="/projects" className="hover:text-slate-900 transition-colors">Projects</a>
            <a href="/about" className="hover:text-slate-900 transition-colors">About</a>
            <a href="/contact" className="hover:text-slate-900 transition-colors">Contact</a>
          </nav>
          <div className="flex items-center gap-3 border-l border-slate-200 pl-6 text-slate-400">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-slate-50 p-2 text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
              aria-label="GitHub"
            >
              <span className="material-symbols-outlined text-[20px]">code</span>
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-slate-50 p-2 text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
              aria-label="LinkedIn"
            >
              <span className="material-symbols-outlined text-[20px]">work</span>
            </a>
            <a
              href={`mailto:${socialLinks.email}`}
              className="rounded-lg bg-slate-50 p-2 text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
              aria-label="Email"
            >
              <span className="material-symbols-outlined text-[20px]">mail</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Verify build passes**

Run: `npx turbo build`
Expected: 2/2 apps build successfully

- [ ] **Step 3: Commit**

```bash
git add apps/web/src/components/Footer.tsx
git commit -m "feat(web): rewrite Footer with compact layout and Material icons"
```

---

## Task 5: Rewrite ProjectCard Component

**Files:**
- Modify: `apps/web/src/components/ProjectCard.tsx`

**Interfaces:**
- Consumes: `Project` from portfolio.ts
- Produces: Card with dark gradient header, body, footer

- [ ] **Step 1: Rewrite ProjectCard.tsx**

```tsx
import type { Project } from '../data/portfolio';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-sm transition-all hover:shadow-md">
      {/* Dark Preview Header */}
      <div className={`relative h-48 bg-gradient-to-br ${project.previewGradient || 'from-slate-900 to-slate-800'} p-5 flex flex-col justify-between overflow-hidden`}>
        <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-cyan-500/10 blur-2xl" />
        <div className="relative z-10 flex items-center justify-between">
          <span className="rounded-full border border-cyan-500/30 bg-cyan-950/80 px-3 py-1 text-xs font-semibold text-cyan-300">
            {project.status || 'Project'}
          </span>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/80">
            <span className="material-symbols-outlined text-[18px]">north_east</span>
          </span>
        </div>
        <div className="relative z-10 space-y-2">
          <div className="font-mono text-xs text-white/60">{project.title.toLowerCase().replace(/\s+/g, '_')}.ts</div>
          <div className="h-2 w-3/4 overflow-hidden rounded-full bg-white/10">
            <div className="bg-cyan-400 h-full w-2/3 rounded-full" />
          </div>
          <div className="font-mono text-xs text-cyan-300">{project.metric || 'Web Application'}</div>
        </div>
      </div>

      {/* Body */}
      <div className="p-5">
        <h3 className="mb-2 text-lg font-bold text-slate-900">{project.title}</h3>
        <p className="mb-4 text-sm leading-relaxed text-slate-600 line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="tag text-[10px]">{tag}</span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50/50 px-5 py-3 text-xs">
        <span className="font-medium text-[#0891b2]">{project.metric || 'Web'}</span>
        <div className="flex items-center gap-2">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-slate-500 hover:text-slate-900"
            >
              <span className="material-symbols-outlined text-[16px]">code</span>
            </a>
          )}
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 rounded bg-[#0891b2] px-3 py-1 text-[11px] font-medium text-white"
            >
              Live App
              <span className="material-symbols-outlined text-[12px]">north_east</span>
            </a>
          )}
          {project.links.chrome && (
            <a
              href={project.links.chrome}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 rounded bg-[#0891b2] px-3 py-1 text-[11px] font-medium text-white"
            >
              Chrome Store
              <span className="material-symbols-outlined text-[12px]">north_east</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
```

- [ ] **Step 2: Verify build passes**

Run: `npx turbo build`
Expected: 2/2 apps build successfully

- [ ] **Step 3: Commit**

```bash
git add apps/web/src/components/ProjectCard.tsx
git commit -m "feat(web): rewrite ProjectCard with dark gradient header and Material icons"
```

---

## Task 6: Rewrite Home Page

**Files:**
- Modify: `apps/web/src/pages/Home.tsx`

**Interfaces:**
- Consumes: `projects, skills, socialLinks, stats, testimonials` from portfolio.ts
- Produces: Hero with photo, stats, selected work, testimonial, CTA

- [ ] **Step 1: Rewrite Home.tsx**

```tsx
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import ProjectCard from '../components/ProjectCard';
import { projects, skills, socialLinks, stats, testimonials } from '../data/portfolio';

const skillCategories = [
  { key: 'frontend', label: 'Frontend', color: 'bg-cyan-50 text-cyan-700 border-cyan-200' },
  { key: 'backend', label: 'Backend', color: 'bg-green-50 text-green-700 border-green-200' },
  { key: 'tools', label: 'Tools', color: 'bg-purple-50 text-purple-700 border-purple-200' },
  { key: 'cloud', label: 'Cloud', color: 'bg-amber-50 text-amber-700 border-amber-200' },
] as const;

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 text-[#0891b2] border border-cyan-200 text-sm font-medium mb-6">
                <span className="material-symbols-outlined text-[18px]">terminal</span>
                Frontend Developer
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-6">
                Crafting robust, scalable web applications & seamless digital experiences.
              </h1>
            </ScrollReveal>
            <ScrollReveal>
              <p className="text-lg text-slate-600 leading-relaxed max-w-xl mb-8">
                Hi, I'm Alchie Tagudin — specializing in React, TypeScript, and crafting tools that make developers' lives easier. Based in Davao City, Philippines.
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <Link to="/projects" className="btn-primary">
                  <span>View Featured Work</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
                <Link to="/contact" className="btn-outline">
                  <span className="material-symbols-outlined text-[18px]">mail</span>
                  <span>Get in Touch</span>
                </Link>
              </div>
            </ScrollReveal>
            {/* Tech Stack */}
            <ScrollReveal>
              <div className="w-full pt-4 border-t border-slate-200">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">Core Tech Stack</div>
                <div className="flex flex-wrap gap-2">
                  {skills.filter(s => ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Node.js'].includes(s.name)).map((skill) => (
                    <span key={skill.name} className="px-3 py-1.5 rounded-md bg-white border border-slate-200 text-xs font-medium text-slate-700 shadow-sm">
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column — Avatar */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <ScrollReveal>
              <div className="relative">
                <div className="h-72 w-72 sm:h-80 sm:w-80 overflow-hidden rounded-full border-4 border-white shadow-xl ring-4 ring-cyan-100">
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#0891b2] to-cyan-400 text-5xl font-bold text-white">
                    AT
                  </div>
                </div>
                {/* Floating badge bottom-left */}
                <div className="absolute -bottom-3 -left-4 flex items-center gap-2 rounded-full border border-slate-100 bg-white px-4 py-2 shadow-lg">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-semibold text-slate-800">Available for work</span>
                </div>
                {/* Floating badge top-right */}
                <div className="absolute -right-2 -top-3 flex items-center gap-2.5 rounded-xl border border-slate-100 bg-white px-4 py-2 shadow-lg">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-50 text-[#0891b2]">
                    <span className="material-symbols-outlined text-[18px]">verified</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold leading-tight text-slate-900">Frontend Developer</span>
                    <span className="text-[10px] text-slate-500">8+ Yrs Experience</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { value: `${stats.yearsExperience}+`, label: 'Years Experience', icon: 'workspace_premium' },
            { value: `${stats.projectsCompleted}+`, label: 'Projects Shipped', icon: 'rocket_launch' },
            { value: `${stats.extensionsPublished}`, label: 'Extensions Published', icon: 'verified' },
            { value: `${stats.happyClients}+`, label: 'Happy Clients', icon: 'code_blocks' },
          ].map((stat) => (
            <ScrollReveal key={stat.label}>
              <div className="flex flex-col justify-between rounded-lg border border-slate-200/80 bg-white p-6 shadow-sm">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-3xl font-extrabold text-[#0891b2]">{stat.value}</span>
                  <span className="material-symbols-outlined text-slate-400 text-[26px]">{stat.icon}</span>
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">{stat.label}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Selected Work */}
      <section className="max-w-7xl mx-auto px-6 py-16" id="projects">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-slate-200">
          <div>
            <div className="section-label flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0891b2]" />
              Portfolio
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Selected Work</h2>
            <p className="text-slate-600 mt-1">Things I've built and shipped</p>
          </div>
          <Link to="/projects" className="inline-flex items-center gap-1 text-sm font-semibold text-[#0891b2] hover:text-[#0e7490] transition-colors">
            <span>View all projects</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {featuredProjects.map((project) => (
            <ScrollReveal key={project.id}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      {testimonials.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 pb-10">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-8 lg:p-10 shadow-sm">
              <div className="mb-4 flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
              <blockquote className="mb-6 text-xl lg:text-2xl font-medium leading-relaxed text-slate-800">
                "{testimonials[0].content}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0891b2] text-sm font-bold text-white shadow-sm">
                  {testimonials[0].initials}
                </div>
                <div>
                  <div className="font-bold text-slate-900">{testimonials[0].name}</div>
                  <div className="text-sm text-slate-500">{testimonials[0].role}</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>
      )}

      {/* Contact CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-cyan-950 p-8 lg:p-12 shadow-lg">
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="max-w-xl space-y-3">
                <div className="inline-flex items-center gap-1.5 text-cyan-400 text-xs uppercase tracking-wider font-bold">
                  <span className="material-symbols-outlined text-[20px]">handshake</span>
                  <span>Collaboration</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-white">Have a project in mind?</h2>
                <p className="text-slate-300 text-base leading-relaxed">
                  Let's build reliable, performant software together. I'm always open to new opportunities.
                </p>
              </div>
              <div className="flex-shrink-0">
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 shadow transition-all hover:shadow-md hover:-translate-y-0.5 hover:bg-slate-100">
                  <span>Start a Conversation</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
```

- [ ] **Step 2: Verify build passes**

Run: `npx turbo build`
Expected: 2/2 apps build successfully

- [ ] **Step 3: Commit**

```bash
git add apps/web/src/pages/Home.tsx
git commit -m "feat(web): rewrite Home page with hero, stats, projects, testimonial, CTA"
```

---

## Task 7: Rewrite About Page

**Files:**
- Modify: `apps/web/src/pages/About.tsx`

**Interfaces:**
- Consumes: `skills, skillCategories, experience` from portfolio.ts
- Produces: Journey card, pillars, skills matrix, timeline, values, CTA

- [ ] **Step 1: Rewrite About.tsx**

This is the largest page rewrite. The About page includes:
- Hero section with badge + heading + subtitle
- Journey + Quick Profile grid (7/5)
- Skills Matrix with category cards
- Career Timeline with colored dots
- Engineering Values (3 cards)
- CTA banner

Due to size, write the complete component. Follow the mockup structure exactly — use `skillCategories` for the matrix cards, `experience` for the timeline, and real content throughout. Use Material Symbols icons throughout.

- [ ] **Step 2: Verify build passes**

Run: `npx turbo build`
Expected: 2/2 apps build successfully

- [ ] **Step 3: Commit**

```bash
git add apps/web/src/pages/About.tsx
git commit -m "feat(web): rewrite About page with journey, skills matrix, timeline, values"
```

---

## Task 8: Rewrite Projects Page

**Files:**
- Modify: `apps/web/src/pages/Projects.tsx`

**Interfaces:**
- Consumes: `projects` from portfolio.ts
- Produces: Hero, metrics strip, filter toolbar, 3-col grid, open source section, CTA

- [ ] **Step 1: Rewrite Projects.tsx**

Include:
- Hero with gradient glow bg, breadcrumb pill, heading, description
- 4-card metrics strip
- Filter pills + search input (visual only — no functional filtering needed)
- 3-column project grid using ProjectCard
- Open source section with stats cards + simulated heatmap
- Collaboration CTA banner

- [ ] **Step 2: Verify build passes**

Run: `npx turbo build`
Expected: 2/2 apps build successfully

- [ ] **Step 3: Commit**

```bash
git add apps/web/src/pages/Projects.tsx
git commit -m "feat(web): rewrite Projects page with filters, 3-col grid, open source section"
```

---

## Task 9: Rewrite Contact Page

**Files:**
- Modify: `apps/web/src/pages/Contact.tsx`

**Interfaces:**
- Consumes: `socialLinks` from portfolio.ts
- Produces: Sidebar with status/socials + rich inquiry form

- [ ] **Step 1: Rewrite Contact.tsx**

Include:
- Hero with badge + heading + subtitle
- 2-column layout (5/7):
  - Left: Status card, Contact methods (email w/ copy, location, response), Developer presence (2x2 social grid), Core areas checklist
  - Right: Inquiry form (first/last name, email, scope chips, timeline dropdown, budget chips, details textarea, submit + privacy note)

The form should use the existing fetch logic for the Cloudflare Worker endpoint. Keep the honeypot field. Add the new engagement type chips and budget chips as controlled state.

- [ ] **Step 2: Verify build passes**

Run: `npx turbo build`
Expected: 2/2 apps build successfully

- [ ] **Step 3: Commit**

```bash
git add apps/web/src/pages/Contact.tsx
git commit -m "feat(web): rewrite Contact page with sidebar and rich inquiry form"
```

---

## Task 10: Restyle Extensions Page

**Files:**
- Modify: `apps/web/src/pages/Extensions.tsx`

**Interfaces:**
- Consumes: `extensions` from portfolio.ts
- Produces: Restyled extensions page matching new visual language

- [ ] **Step 1: Restyle Extensions.tsx**

Keep the same structure but update styles:
- Remove `dark:` classes
- Update to new color palette
- Use Material Symbols icons
- Match the card/badge/button styles from the new design system

- [ ] **Step 2: Verify build passes**

Run: `npx turbo build`
Expected: 2/2 apps build successfully

- [ ] **Step 3: Commit**

```bash
git add apps/web/src/pages/Extensions.tsx
git commit -m "feat(web): restyle Extensions page with new visual language"
```

---

## Task 11: Update NotFound and Layout

**Files:**
- Modify: `apps/web/src/pages/NotFound.tsx`
- Modify: `apps/web/src/components/Layout.tsx`

**Interfaces:**
- Consumes: none
- Produces: Updated NotFound and Layout with new styles

- [ ] **Step 1: Update NotFound.tsx**

Remove `dark:` classes, update to new styles, use Material Symbols.

- [ ] **Step 2: Update Layout.tsx**

No major changes needed — just verify it works with new Navbar/Footer.

- [ ] **Step 3: Verify build passes**

Run: `npx turbo build`
Expected: 2/2 apps build successfully

- [ ] **Step 4: Commit**

```bash
git add apps/web/src/pages/NotFound.tsx apps/web/src/components/Layout.tsx
git commit -m "feat(web): update NotFound and Layout for new design"
```

---

## Task 12: Update All Tests

**Files:**
- Modify: `apps/web/src/components/__tests__/Navbar.test.tsx`
- Modify: `apps/web/src/components/__tests__/Footer.test.tsx`
- Modify: `apps/web/src/components/__tests__/Layout.test.tsx`
- Modify: `apps/web/src/components/__tests__/ProjectCard.test.tsx`
- Modify: `apps/web/src/pages/__tests__/Home.test.tsx`
- Modify: `apps/web/src/pages/__tests__/About.test.tsx`
- Modify: `apps/web/src/pages/__tests__/Projects.test.tsx`
- Modify: `apps/web/src/pages/__tests__/Contact.test.tsx`
- Modify: `apps/web/src/pages/__tests__/Extensions.test.tsx`
- Modify: `apps/web/src/pages/__tests__/NotFound.test.tsx`
- Modify: `apps/web/src/__tests__/App.test.tsx`

**Interfaces:**
- Consumes: all rewritten components
- Produces: All 50+ tests passing

- [ ] **Step 1: Run tests to see failures**

Run: `npx turbo test`
Expected: Multiple test failures due to changed component structure

- [ ] **Step 2: Fix Navbar tests**

Remove ThemeToggle mock (already done). Update assertions for new nav structure (pill nav, availability badge, etc.).

- [ ] **Step 3: Fix Footer tests**

Update assertions for new footer structure (monogram, Material icons).

- [ ] **Step 4: Fix Home tests**

Update assertions for new home page content (stats, selected work heading, testimonial, CTA).

- [ ] **Step 5: Fix About tests**

Update assertions for new about page (journey, skills matrix, timeline).

- [ ] **Step 6: Fix Projects tests**

Update assertions for new projects page (metrics strip, filter toolbar).

- [ ] **Step 7: Fix Contact tests**

Update assertions for new contact page (sidebar, inquiry form, engagement chips).

- [ ] **Step 8: Fix remaining tests**

Fix Extensions, NotFound, Layout, ProjectCard, App, ScrollReveal, config tests.

- [ ] **Step 9: Run all tests**

Run: `npx turbo test`
Expected: All tests passing

- [ ] **Step 10: Commit**

```bash
git add apps/web/src/
git commit -m "test(web): update all tests for redesigned components"
```

---

## Task 13: Final Verification

**Files:**
- None (verification only)

**Interfaces:**
- Consumes: all previous tasks
- Produces: Clean build, lint, and test run

- [ ] **Step 1: Full build**

Run: `npx turbo build`
Expected: 2/2 apps build successfully

- [ ] **Step 2: Full lint**

Run: `npx turbo lint`
Expected: Clean, no errors

- [ ] **Step 3: Full test**

Run: `npx turbo test`
Expected: All tests passing

- [ ] **Step 4: Visual check**

Open `apps/web/dist/index.html` in browser and verify:
- Navbar with pill nav, availability badge, avatar
- Home page hero with AT avatar + floating badges
- Stats cards with Material icons
- Project cards with dark gradient headers
- Testimonial card
- Contact CTA banner
- Footer with monogram and social icons
- About page with journey, skills, timeline
- Projects page with filters and 3-col grid
- Contact page with sidebar and rich form
- Extensions page restyled

- [ ] **Step 5: Final commit (if any remaining fixes)**

```bash
git add -A
git commit -m "feat(web): complete portfolio redesign matching Stitch mockups"
```

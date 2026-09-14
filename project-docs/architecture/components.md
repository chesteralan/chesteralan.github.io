# Components

## Component Hierarchy

```
App
├── Layout
│   ├── ScrollToTop
│   ├── Navbar
│   │   └── ThemeToggle
│   └── Footer
├── Home
│   ├── ScrollReveal
│   └── ProjectCard
├── About
│   └── ScrollReveal
├── Projects
│   ├── ScrollReveal
│   └── ProjectCard
├── Extensions
│   └── ScrollReveal
├── Contact
│   └── ScrollReveal
└── NotFound
    └── ScrollReveal
```

## Component Catalog

### Layout
- **Purpose:** Main layout wrapper with navbar, footer, and route outlet
- **Props:** None (uses react-router-dom `Outlet` for child routes)
- **Location:** `src/components/Layout.tsx`
- **Features:** Includes skip-to-content link for accessibility, renders `ScrollToTop` and `Navbar` above main content, `Footer` below

### Navbar
- **Purpose:** Responsive navigation with mobile hamburger menu
- **Props:** None
- **Location:** `src/components/Navbar.tsx`
- **Features:** Mobile hamburger menu (uses lucide-react `Menu`/`X` icons), route-aware active states via `useLocation`, background blur on scroll, includes `ThemeToggle`

### Footer
- **Purpose:** Footer with social links and copyright
- **Props:** None
- **Location:** `src/components/Footer.tsx`
- **Features:** Three-column grid layout (brand, navigation links, social links), dynamically pulls `socialLinks` from portfolio data

### ThemeToggle
- **Purpose:** Dark/light mode toggle
- **Props:** None
- **Location:** `src/components/ThemeToggle.tsx`
- **Features:** Persists preference to localStorage, respects system preference on first visit, animated sun/moon icon transition using lucide-react

### ScrollReveal
- **Purpose:** Intersection Observer-based reveal animation
- **Props:** `{ children: ReactNode, className?: string }`
- **Location:** `src/components/ScrollReveal.tsx`
- **Features:** One-time reveal animation (unobserves after triggering), translateY + fade transition, configurable via className prop

### ProjectCard
- **Purpose:** Project display card with tags, title, description, and action links
- **Props:** `{ project: Project }` (where `Project` is imported from `src/data/portfolio`)
- **Location:** `src/components/ProjectCard.tsx`
- **Features:** Displays up to 3 tags, optional GitHub/live demo/Chrome Store links, featured badge for highlighted projects

### ScrollToTop
- **Purpose:** Resets scroll position on route change
- **Props:** None
- **Location:** `src/components/ScrollToTop.tsx`
- **Features:** Listens to `pathname` changes via `useLocation`, calls `window.scrollTo(0, 0)`

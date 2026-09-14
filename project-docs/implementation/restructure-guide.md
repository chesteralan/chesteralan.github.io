# Restructure Guide

## Current → New Mapping

### Components

| Current | New | Changes |
|---------|-----|---------|
| `Layout.tsx` | `Layout.tsx` | Update navbar pattern, add skip-to-content link |
| `Navbar.tsx` | `Navbar.tsx` | Mobile-first redesign, full-screen overlay, hamburger menu |
| `Footer.tsx` | `Footer.tsx` | Simplify structure, maintain three-column grid |
| `ThemeToggle.tsx` | `ThemeToggle.tsx` | Keep as-is (localStorage persistence, system preference) |
| `ScrollReveal.tsx` | `ScrollReveal.tsx` | Optimize performance, unobserve after trigger |
| `ProjectCard.tsx` | `ProjectCard.tsx` | New design tokens, featured badge, tags display |
| `ScrollToTop.tsx` | `ScrollToTop.tsx` | Keep as-is (route change listener) |
| `NotFound.tsx` | `NotFound.tsx` | Update styling to match new design system |

### Pages

| Current | New | Changes |
|---------|-----|---------|
| `Home.tsx` | `Home.tsx` | Hero redesign with cyan-600 accents, new layout, skills overview |
| `About.tsx` | `About.tsx` | Timeline redesign, bio section, education background |
| `Projects.tsx` | `Projects.tsx` | Grid layout update (1→2→3 columns), filter/search |
| `Extensions.tsx` | `Extensions.tsx` | Card redesign, installation links, screenshots |
| `Contact.tsx` | `Contact.tsx` | Form redesign with validation, Firebase integration |

### Data Files

| Current | New | Changes |
|---------|-----|---------|
| `src/data/portfolio.ts` | `src/data/portfolio.ts` | Add extension data, update project structure |
| `tailwind.config.js` | `tailwind.config.js` | New color palette (cyan-600, violet-500) |
| `src/index.css` | `src/index.css` | Update CSS variables, component classes |

## Migration Steps

### Phase 1: Design Tokens
1. Update `tailwind.config.js` with new colors:
   - Primary: Cyan-600 (`#0891b2`) for CTAs, links, accents
   - Accent: Violet-500 (`#8b5cf6`) for highlights, badges
   - Neutral: Slate-900 (`#0f172a`), Slate-100 (`#f1f5f9`)
2. Update `src/index.css` with new CSS variables:
   - Update `.section-title`, `.section-subtitle`, `.card`, `.btn-primary`, `.btn-outline`, `.tag`, `.gradient-text`, `.link-underline`
   - Maintain existing animation utilities
3. Verify all components use new tokens:
   - Search for old color classes (primary-*, accent-*)
   - Replace with new color palette
   - Test dark mode transitions

### Phase 2: Components
1. Update each component with new design:
   - `Layout.tsx`: Add skip-to-content link, maintain navbar/footer structure
   - `Navbar.tsx`: Implement full-screen overlay mobile menu, hamburger toggle
   - `Footer.tsx`: Simplify three-column grid, social links from portfolio data
   - `ProjectCard.tsx`: New card design, featured badge, tags display
   - `ScrollReveal.tsx`: Optimize intersection observer, unobserve after trigger
2. Maintain existing props interface:
   - `ScrollReveal`: `{ children: ReactNode, className?: string }`
   - `ProjectCard`: `{ project: Project }`
   - Others: No props (state managed internally)
3. Update tests for visual changes:
   - Snapshot tests for component structure
   - Interaction tests for mobile menu, theme toggle
   - Accessibility tests for skip links, focus management

### Phase 3: Pages
1. Update page layouts:
   - `Home.tsx`: Hero section with cyan-600 accents, featured projects, skills overview
   - `About.tsx`: Bio, work experience timeline, skills grid, education
   - `Projects.tsx`: Full project grid with filter/search functionality
   - `Extensions.tsx`: Chrome extension showcase with screenshots
   - `Contact.tsx`: Contact form with validation, Firebase backend
2. Implement new responsive patterns:
   - Mobile: 1 column layout, `px-4` padding
   - Tablet (sm:): 2 columns, `sm:px-6` padding
   - Desktop (lg:): 3 columns, `lg:px-8` padding
3. Add new animations:
   - ScrollReveal for section entrances
   - Hover effects for cards and buttons
   - Page transitions between routes

### Phase 4: Polish
1. Cross-browser testing:
   - Chrome, Firefox, Safari, Edge
   - Mobile Safari, Chrome for Android
   - Test with BrowserStack or similar
2. Performance optimization:
   - Lazy load images
   - Minimize JavaScript bundle
   - Use CSS containment
   - Reduce DOM complexity
3. Accessibility audit:
   - WCAG 2.1 AA compliance
   - Screen reader testing
   - Keyboard navigation
   - Color contrast verification

## Rollback Plan

### Legacy Components
- Keep old components in `src/components/legacy/`
- Maintain old props interface for backward compatibility
- Document legacy component usage in comments

### Feature Flag
- Implement feature flag for new vs old design:
  ```typescript
  const USE_NEW_DESIGN = import.meta.env.VITE_USE_NEW_DESIGN === 'true';
  ```
- Toggle via environment variable
- Default to old design during migration

### Gradual Rollout
1. **Phase 1:** Deploy new design tokens (no visual changes)
2. **Phase 2:** Update components behind feature flag
3. **Phase 3:** Roll out page by page:
   - Home page first (most visible)
   - About page second
   - Projects/Extensions pages third
   - Contact page last (form functionality)
4. **Phase 4:** Remove feature flag and legacy components

### Monitoring
- Track error rates during rollout
- Monitor performance metrics (LCP, FID, CLS)
- Collect user feedback on new design
- A/B test key pages if needed

## Verification Checklist

- [ ] All components use new design tokens
- [ ] Mobile-first responsive patterns implemented
- [ ] Dark mode transitions work correctly
- [ ] Accessibility requirements met
- [ ] Performance benchmarks maintained
- [ ] Cross-browser compatibility verified
- [ ] Legacy components documented
- [ ] Feature flag implemented and tested
- [ ] Rollback procedure documented
- [ ] Monitoring setup in place

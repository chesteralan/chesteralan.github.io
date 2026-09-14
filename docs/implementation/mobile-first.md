# Mobile-First Design Patterns

## Breakpoint Strategy

Mobile-first approach using Tailwind CSS default breakpoints:

```css
/* Base styles (mobile) - all screens */
.section-container {
  @apply mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8;
}

/* sm: 640px */
@media (min-width: 640px) {
  .section-title {
    @apply text-4xl;
  }
}

/* md: 768px */
@media (min-width: 768px) {
  .navbar-desktop-nav { display: flex; }
  .navbar-mobile-menu { display: none; }
}

/* lg: 1024px */
@media (min-width: 1024px) {
  .section-container {
    @apply px-8;
  }
}
```

## Responsive Patterns

### Navigation
- **Mobile:** Hamburger menu (`md:hidden`), full-screen overlay with slide-down animation
- **Desktop:** Full horizontal nav (`hidden md:flex`), navbar height `h-16 md:h-20`

### Grid Layouts
- **Mobile:** 1 column (default)
- **Tablet (md:):** 2 columns (`md:grid-cols-2`)
- **Desktop (lg:):** 3-4 columns (`lg:grid-cols-4`, `lg:grid-cols-5`)

### Typography
- **Mobile:** `text-3xl` for section titles, `text-lg` for body
- **Tablet (sm:):** `sm:text-4xl` for section titles
- **Desktop (md:):** `md:text-5xl` for hero headings
- **Large (lg:):** `lg:text-7xl` for hero display

### Layout Containers
- **Mobile:** `px-4` horizontal padding
- **Tablet (sm:):** `sm:px-6`
- **Desktop (lg:):** `lg:px-8`

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

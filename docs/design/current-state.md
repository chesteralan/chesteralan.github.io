# Current Design System

> Source of truth: `tailwind.config.js` + `src/index.css`

## Colors

### Primary (Blue Scale)

| Token | Value |
|-------|-------|
| **primary-50** | `#f0f5ff` |
| **primary-100** | `#e0ebff` |
| **primary-200** | `#b8d4ff` |
| **primary-300** | `#85b8ff` |
| **primary-400** | `#4a94ff` |
| **primary-500** | `#1a6dff` |
| **primary-600** | `#0052e6` |
| **primary-700** | `#003db3` |
| **primary-800** | `#003080` |
| **primary-900** | `#002266` |

### Accent (Orange-Red Scale)

| Token | Value |
|-------|-------|
| **accent-50** | `#fdf4f1` |
| **accent-100** | `#fbe6df` |
| **accent-200** | `#f7ccbe` |
| **accent-300** | `#f1a894` |
| **accent-400** | `#e97d63` |
| **accent-500** | `#e05a3c` |
| **accent-600** | `#d04028` |
| **accent-700** | `#ae3120` |
| **accent-800** | `#8b2a1f` |
| **accent-900** | `#71261e` |

### Surface

| Token | Light | Dark |
|-------|-------|------|
| **surface** | `#f8fafc` (default) | `#0f172a` |
| **surface-light** | `#ffffff` | — |
| **surface-dark** | — | `#0f172a` |
| **surface-dark-card** | — | `#1e293b` |

### Semantic Usage (from `src/index.css`)

| Element | Light Mode | Dark Mode |
|---------|------------|-----------|
| **body bg** | `bg-surface` (`#f8fafc`) | `bg-surface-dark` (`#0f172a`) |
| **body text** | `text-gray-800` | `text-gray-200` |
| **selection bg** | `bg-primary-500/20` | `bg-primary-500/20` |
| **selection text** | `text-primary-700` | `text-primary-300` |
| **card bg** | `bg-white` | `bg-surface-dark-card` (`#1e293b`) |
| **card border** | `border-gray-100` | `border-gray-800` |

## Typography

### Font Family

| Token | Stack |
|-------|-------|
| **sans** | Inter, system-ui, -apple-system, sans-serif |
| **mono** | JetBrains Mono, Fira Code, monospace |

### Font Weights (Loaded)

- **Inter:** 300, 400, 500, 600, 700, 800
- **JetBrains Mono:** 400, 500, 600

### Font Sizes (Tailwind Defaults)

| Token | Value | px |
|-------|-------|-----|
| **text-xs** | 0.75rem | 12px |
| **text-sm** | 0.875rem | 14px |
| **text-base** | 1rem | 16px |
| **text-lg** | 1.125rem | 18px |
| **text-xl** | 1.25rem | 20px |
| **text-2xl** | 1.5rem | 24px |
| **text-3xl** | 1.875rem | 30px |
| **text-4xl** | 2.25rem | 36px |

### Key Typography Classes

| Class | Usage |
|-------|-------|
| `text-3xl font-bold sm:text-4xl` | Section titles |
| `text-lg` | Section subtitles |
| `text-sm font-medium` | Tags |

## Spacing

Standard Tailwind scale used throughout:

| Token | Value | px |
|-------|-------|-----|
| **p-1 / m-1** | 0.25rem | 4px |
| **p-2 / m-2** | 0.5rem | 8px |
| **p-3 / m-3** | 0.75rem | 12px |
| **p-4 / m-4** | 1rem | 16px |
| **p-6 / m-6** | 1.5rem | 24px |
| **p-8 / m-8** | 2rem | 32px |

### Key Spacing Patterns

| Pattern | Usage |
|---------|-------|
| `max-w-6xl px-4 py-20 sm:px-6 lg:px-8` | Section containers |
| `px-6 py-3` | Buttons |
| `px-3 py-1` | Tags |
| `p-6` | Cards |

## Breakpoints

| Token | Min Width | Usage |
|-------|-----------|-------|
| **sm** | 640px | Mobile landscape |
| **md** | 768px | Tablet |
| **lg** | 1024px | Desktop |
| **xl** | 1280px | Large desktop |

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| **rounded-sm** | 0.125rem | — |
| **rounded** | 0.25rem | — |
| **rounded-md** | 0.375rem | — |
| **rounded-lg** | 0.5rem | — |
| **rounded-xl** | 0.75rem | Buttons, links |
| **rounded-2xl** | 1rem | Cards |
| **rounded-full** | 9999px | Tags |

## Shadows

| Token | Description |
|-------|-------------|
| **shadow-sm** | Small shadow |
| **shadow** | Default shadow |
| **shadow-md** | Medium shadow |
| **shadow-lg** | Large shadow |
| **hover:shadow-lg hover:shadow-primary-500/5** | Card hover (primary tinted) |

## Animations

### Custom Keyframes (`tailwind.config.js`)

| Animation | Keyframes |
|-----------|-----------|
| **fade-in** | opacity 0 → 1 over 0.6s ease-out |
| **slide-up** | opacity 0, translateY(20px) → opacity 1, translateY(0) over 0.6s ease-out |
| **slide-down** | opacity 0, translateY(-10px) → opacity 1, translateY(0) over 0.3s ease-out |

### Animation Delay Utilities (`src/index.css`)

| Class | Delay |
|-------|-------|
| `animate-delay-100` | 100ms |
| `animate-delay-200` | 200ms |
| `animate-delay-300` | 300ms |
| `animate-delay-400` | 400ms |
| `animate-delay-500` | 500ms |

## Component Classes (from `src/index.css`)

### Section Container

```css
.section-container {
  @apply mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8;
}
```

### Section Title

```css
.section-title {
  @apply mb-4 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl;
}
```

### Section Subtitle

```css
.section-subtitle {
  @apply max-w-2xl text-lg text-gray-600 dark:text-gray-400;
}
```

### Card

```css
.card {
  @apply rounded-2xl border border-gray-100 bg-white p-6 transition-all duration-300
         dark:border-gray-800 dark:bg-surface-dark-card;
}
```

### Card Hover

```css
.card-hover {
  @apply card hover:-translate-y-1 hover:border-primary-200 hover:shadow-lg hover:shadow-primary-500/5
         dark:hover:border-primary-800;
}
```

### Button Primary

```css
.btn-primary {
  @apply inline-flex items-center gap-2 rounded-xl bg-primary-600 px-6 py-3 font-medium
         text-white transition-all duration-200 hover:bg-primary-700 active:scale-95;
}
```

### Button Outline

```css
.btn-outline {
  @apply inline-flex items-center gap-2 rounded-xl border-2 border-gray-200 px-6 py-3
         font-medium text-gray-700 transition-all duration-200
         hover:border-primary-500 hover:text-primary-600 active:scale-95
         dark:border-gray-700 dark:text-gray-300
         dark:hover:border-primary-500 dark:hover:text-primary-400;
}
```

### Tag

```css
.tag {
  @apply inline-block rounded-full bg-gray-100 px-3 py-1 text-sm font-medium
         text-gray-600 dark:bg-gray-800 dark:text-gray-400;
}
```

### Gradient Text

```css
.gradient-text {
  @apply bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent;
}
```

### Link Underline

```css
.link-underline {
  @apply relative inline-block after:absolute after:bottom-0 after:left-0
         after:h-[2px] after:w-full after:origin-left after:scale-x-0
         after:bg-primary-500 after:transition-transform after:duration-300
         hover:after:scale-x-100;
}
```

### Skip Link

```css
.skip-link {
  @apply fixed left-0 top-0 z-[100] -translate-y-full rounded-br-xl
         bg-primary-600 px-4 py-2 font-medium text-white opacity-0
         transition-all duration-200;
}
.skip-link:focus {
  @apply translate-y-0 opacity-100;
}
```

## Dark Mode

- Strategy: `class` (toggle via `dark` class on `<html>`)
- Toggle mechanism: `ThemeToggle` component in `src/components/ThemeToggle.tsx`
- Persisted to `localStorage` (key: `theme`)
- Respects `prefers-color-scheme: dark` on first visit (system default)

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

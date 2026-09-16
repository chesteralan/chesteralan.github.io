---
name: Modern Developer Portfolio
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#3e484d'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#6e797e'
  outline-variant: '#bdc8ce'
  surface-tint: '#006780'
  primary: '#00647c'
  on-primary: '#ffffff'
  primary-container: '#007f9d'
  on-primary-container: '#fafdff'
  inverse-primary: '#6cd3f7'
  secondary: '#6b38d4'
  on-secondary: '#ffffff'
  secondary-container: '#8455ef'
  on-secondary-container: '#fffbff'
  tertiary: '#894e00'
  on-tertiary: '#ffffff'
  tertiary-container: '#a86516'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#b7eaff'
  primary-fixed-dim: '#6cd3f7'
  on-primary-fixed: '#001f28'
  on-primary-fixed-variant: '#004e61'
  secondary-fixed: '#e9ddff'
  secondary-fixed-dim: '#d0bcff'
  on-secondary-fixed: '#23005c'
  on-secondary-fixed-variant: '#5516be'
  tertiary-fixed: '#ffdcbf'
  tertiary-fixed-dim: '#ffb873'
  on-tertiary-fixed: '#2d1600'
  on-tertiary-fixed-variant: '#6a3b00'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
  slate-bg: '#f1f5f9'
  surface-card: '#ffffff'
  border-subtle: '#e2e8f0'
typography:
  display-hero:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 30px
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 26px
  title-md:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
  space-2xl: 3rem
  space-3xl: 4rem
---

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
5. **Mobile-first:** Mobile-first responsive design

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
- Primary: bg-primary text-white (#0891b2)
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

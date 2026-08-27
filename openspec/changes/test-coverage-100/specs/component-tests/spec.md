# Specification: component-tests

## Requirements

1. Each component **SHALL** have its own unit test file under a `__tests__/` directory co-located with the component source.
2. Each page **SHALL** have a render test file under a `__tests__/` directory co-located with the page source.
3. Every test **SHALL** use Vitest as the test runner and React Testing Library for rendering and assertions.
4. Tests **SHALL** cover:
   - Rendering with default props.
   - Rendering with variant/conditional props (e.g., dark mode, active route).
   - User interactions (clicks, keyboard events) where applicable.
   - Accessibility attributes (ARIA labels, roles).
5. `react-router-dom` **SHALL** be mocked in page tests via `vi.mock()` to provide `useLocation`, `useNavigate`, and `Link` stubs.
6. Data imports (projects, extensions) **SHALL** be mocked to decouple tests from content.
7. Coverage thresholds **SHALL** be set to 100% for:
   - `branches`
   - `functions`
   - `lines`
   - `statements`
8. `vitest.config.ts` **SHALL** include a `coverage` section with `provider: 'v8'` and `reporter: ['text', 'lcov']`.
9. `package.json` **SHALL** include a `"test:coverage": "vitest run --coverage"` script.

## Test Inventory

| Component/Page | Test File                                        | Key Scenarios                                            |
| -------------- | ------------------------------------------------ | -------------------------------------------------------- |
| Layout         | `src/components/__tests__/Layout.test.tsx`       | Renders children, applies layout classes                 |
| Navbar         | `src/components/__tests__/Navbar.test.tsx`       | Renders nav links, mobile menu toggle, active route      |
| Footer         | `src/components/__tests__/Footer.test.tsx`       | Renders copyright, social links                          |
| ThemeToggle    | `src/components/__tests__/ThemeToggle.test.tsx`  | Toggles dark class on `<html>`, persists to localStorage |
| ScrollReveal   | `src/components/__tests__/ScrollReveal.test.tsx` | Intersects and applies reveal class                      |
| ScrollToTop    | `src/components/__tests__/ScrollToTop.test.tsx`  | Scrolls to top on route change                           |
| ProjectCard    | `src/components/__tests__/ProjectCard.test.tsx`  | Renders title, description, links, tags                  |
| Home           | `src/pages/__tests__/Home.test.tsx`              | Renders hero, featured projects                          |
| About          | `src/pages/__tests__/About.test.tsx`             | Renders bio, skills section                              |
| Projects       | `src/pages/__tests__/Projects.test.tsx`          | Renders project list, filters                            |
| Extensions     | `src/pages/__tests__/Extensions.test.tsx`        | Renders extension cards                                  |
| Contact        | `src/pages/__tests__/Contact.test.tsx`           | Renders contact form, validates inputs                   |
| NotFound       | `src/pages/__tests__/NotFound.test.tsx`          | Renders 404 message, back link                           |

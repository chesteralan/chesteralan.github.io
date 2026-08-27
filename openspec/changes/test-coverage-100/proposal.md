# Proposal: test-coverage-100

## Why

After introducing Vitest and React Testing Library, the project has no unit or render tests for any component or page. Without tests, regressions can slip through silently — broken renders, missing dark-mode support, navigation failures, and layout shifts all go undetected. Reaching 100% test coverage ensures every component and page is verified and that future changes cannot introduce breakage without a failing test.

## What Changes

Write comprehensive test files for all components and pages:

| Category   | Files                                                                       |
| ---------- | --------------------------------------------------------------------------- |
| Components | Layout, Navbar, Footer, ThemeToggle, ScrollReveal, ScrollToTop, ProjectCard |
| Pages      | Home, About, Projects, Extensions, Contact, NotFound                        |

Additionally, configure Vitest coverage thresholds to enforce 100% branch, function, line, and statement coverage.

## Capabilities

- **component-tests** — Unit and render tests for every component and page, mocked dependencies, and enforced coverage thresholds.

## Impact

- New `__tests__/` directories under `src/components/` and `src/pages/`.
- `vitest.config.ts` updated with coverage thresholds (`branches`, `functions`, `lines`, `statements` all set to `100`).
- `package.json` updated with a `test:coverage` script.
- No runtime or production impact; dev/test only.

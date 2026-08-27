# Proposal: add-testing

## Why

The project currently has no test framework or test suite. There is no automated safety net, so regressions and breakage can be introduced silently by any change to components, pages, or configuration. Adding a testing setup establishes a foundation that makes future changes verifiable and safe.

## What Changes

Add a testing stack to the project: Vitest as the test runner, React Testing Library for rendering and interacting with React components, and jsdom as the DOM environment. Configure `vitest.config.ts` with the jsdom environment and coverage settings, and add a `test` (and `test:coverage`) script to `package.json`. No new application features are added; this is purely infrastructure.

## Capabilities

- **test-infrastructure**: The tooling, configuration, and scripts required to write and run automated tests for React components and pages in this project.

## Impact

- `package.json` — Add dev dependencies (`vitest`, `@testing-library/react`, `@testing-library/jest-dom`, `jsdom`) and `test` / `test:coverage` scripts.
- `vitest.config.ts` — New config file: jsdom environment, setup file, coverage configuration.
- New test setup file (e.g. `vitest.setup.ts`) to register jest-dom matchers.
- All component and page files will eventually need corresponding test files to reach meaningful coverage.

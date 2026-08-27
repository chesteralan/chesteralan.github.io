# Design: add-testing

## Approach

Introduce a standard Vitest + React Testing Library testing setup suitable for a React 19 + Vite + TypeScript + Tailwind project.

### Dependencies

Install the following as dev dependencies via yarn:

- `vitest` — the test runner and CLI.
- `@testing-library/react` — React 19-compatible rendering and querying utilities.
- `@testing-library/jest-dom` — additional DOM-specific Jest matchers (`toBeInTheDocument`, etc.).
- `jsdom` — the DOM environment for tests.

### Configuration: `vitest.config.ts`

Create a `vitest.config.ts` at the project root:

- Set `test.environment` to `"jsdom"`.
- Set `test.globals` to `true` so `describe`/`it`/`expect` are available without imports (optional but convenient).
- Point `test.setupFiles` at a setup file (e.g. `./vitest.setup.ts`).
- Configure `test.coverage` using `@vitest/coverage-v8` (provider `v8`), with `reportsDirectory` and include/exclude patterns appropriate to the project (e.g. include `src`, exclude config and test files).

### Setup file: `vitest.setup.ts`

- Import `@testing-library/jest-dom` to register custom matchers for all tests.

### package.json scripts

Add the following scripts:

```json
{
  "scripts": {
    "test": "vitest run",
    "test:watch": "vitest",
    "test:coverage": "vitest run --coverage"
  }
}
```

Tests are run with `yarn test` (single run, CI-friendly) and coverage collected with `yarn test:coverage`.

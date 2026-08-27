# Design: test-coverage-100

## Overview

All tests will be written using **Vitest** + **React Testing Library**. Tests are co-located with source files under `__tests__/` directories. Mocking is handled via Vitest's `vi.mock()` for module-level mocks and `vi.fn()` for individual function stubs.

## Test Architecture

```
src/
├── components/
│   ├── __tests__/
│   │   ├── Layout.test.tsx
│   │   ├── Navbar.test.tsx
│   │   ├── Footer.test.tsx
│   │   ├── ThemeToggle.test.tsx
│   │   ├── ScrollReveal.test.tsx
│   │   ├── ScrollToTop.test.tsx
│   │   └── ProjectCard.test.tsx
│   └── ...
├── pages/
│   ├── __tests__/
│   │   ├── Home.test.tsx
│   │   ├── About.test.tsx
│   │   ├── Projects.test.tsx
│   │   ├── Extensions.test.tsx
│   │   ├── Contact.test.tsx
│   │   └── NotFound.test.tsx
│   └── ...
└── vitest.config.ts
```

## Mocking Strategy

### react-router-dom

Page tests mock `react-router-dom` to avoid requiring a full router context:

```ts
vi.mock('react-router-dom', () => ({
  BrowserRouter: ({ children }) => children,
  Link: ({ to, children }) => <a href={to}>{children}</a>,
  useLocation: () => ({ pathname: '/' }),
  useNavigate: () => vi.fn(),
  useParams: () => ({}),
}));
```

### Data Imports

Project and extension data are mocked to isolate tests from content changes:

```ts
vi.mock('../data/projects', () => ({
  projects: [{ id: '1', title: 'Test Project', description: '...', tags: [] }],
}));
```

### IntersectionObserver

`ScrollReveal` tests mock `IntersectionObserver` to control visibility triggers:

```ts
global.IntersectionObserver = vi.fn((callback) => ({
  observe: () => {},
  unobserve: () => {},
  disconnect: () => {},
}));
```

### localStorage / Theme

`ThemeToggle` tests mock `localStorage` to verify persistence:

```ts
const localStorageMock = { getItem: vi.fn(), setItem: vi.fn() };
Object.defineProperty(window, 'localStorage', { value: localStorageMock });
```

## Coverage Configuration

`vitest.config.ts` will include:

```ts
export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov'],
      thresholds: {
        branches: 100,
        functions: 100,
        lines: 100,
        statements: 100,
      },
    },
  },
});
```

## Test Patterns

- **Render test**: `render(<Component />)` → assert DOM output.
- **Interaction test**: `render(<Component />)` → `fireEvent.click()` or `userEvent.click()` → assert state change.
- **Dark mode test**: Set `document.documentElement.classList.add('dark')` → assert dark-mode styles/classes present.
- **Route test**: Mock `useLocation` with specific pathname → assert active state on matching nav link.
- **Form test**: `render(<Contact />)` → fill inputs → submit → assert validation behavior.

## Package Scripts

Add to `package.json`:

```json
{
  "scripts": {
    "test": "vitest run",
    "test:watch": "vitest",
    "test:coverage": "vitest run --coverage"
  }
}
```

## Dependencies

Dev dependencies to install (if not already present):

- `@testing-library/react`
- `@testing-library/jest-dom`
- `@testing-library/user-event`
- `vitest`
- `@vitest/coverage-v8`
- `jsdom`

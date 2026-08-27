# Tasks: add-testing

- [x] Install dev dependencies: `vitest`, `@testing-library/react`, `@testing-library/jest-dom`, `jsdom`, `@vitest/coverage-v8`
- [x] Create `vitest.config.ts` with jsdom environment, globals, setup file reference, and coverage config
- [x] Create `vitest.setup.ts` with `@testing-library/jest-dom`, `IntersectionObserver`, and `matchMedia` mocks
- [x] Add `test`, `test:watch`, and `test:coverage` scripts to `package.json`
- [x] Verify the test runner works by running `npx vitest run`

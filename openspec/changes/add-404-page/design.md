# Design: add-404-page

## Approach

### NotFound.tsx

Create `src/pages/NotFound.tsx` as a functional component with a centered layout displaying a large "404" heading, a short "page not found" message, and a `Link` back to `/`. Use Tailwind utility classes consistent with the existing page style (e.g., `section-container`, `gradient-text` for emphasis, `btn-primary` for the home link). Support dark mode via `dark:` variants.

### Route registration

In `App.tsx`, add a catch-all route `<Route path="*" element={<NotFound />} />` as a child of the existing `<Route path="/" element={<Layout />}>` so the 404 page renders within the Layout shell (Navbar + Footer).

### Files touched

- `src/pages/NotFound.tsx` — new
- `src/App.tsx` — add import + catch-all route

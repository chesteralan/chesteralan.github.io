# Proposal: add-404-page

## Why

Users who navigate to unknown or mistyped URLs see a blank page or the Vite default error, which is a poor experience. The `docs/404.html` file exists for GitHub Pages, but the React SPA has no catch-all route to handle unmatched paths.

## What Changes

- Add a new `NotFound` page component styled consistently with the rest of the site
- Add a catch-all `*` route in `App.tsx` that renders the 404 page within the existing `Layout`

## Capabilities

- not-found-page

## Impact

- App.tsx (add catch-all route)
- src/pages/NotFound.tsx (new file)

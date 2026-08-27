# Proposal: asset-updates

## Why

Only an SVG favicon exists. Missing `.ico` fallback for older browsers and `apple-touch-icon.png` for iOS home screen bookmarks.

## What Changes

Add `favicon.ico` and `apple-touch-icon.png` as static assets, and reference them in `index.html`.

## Capabilities

- favicon-icons

## Impact

- `public/` — new static assets
- `index.html` — new `<link>` tags

# Proposal: seo-meta-tags

## Why

The site is missing social sharing metadata (`og:image`, Twitter cards) and loads Google Fonts via a CSS `@import` inside `src/index.css`, which blocks rendering and delays font discovery. Both issues degrade SEO and Core Web Vitals.

## What Changes

- Add `og:image` meta tag to `index.html`.
- Add Twitter Card meta tags (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`) to `index.html`.
- Add `<link rel="preconnect">` for Google Fonts origins (`fonts.googleapis.com` and `fonts.gstatic.com`) in `index.html`.
- Remove the `@import` from `src/index.css` and replace it with a `<link rel="stylesheet">` in `index.html` so preconnect is effective.

## Capabilities

- `seo-meta` — Semantic, social-sharing, and performance-related `<head>` metadata.

## Impact

| File            | Change                                                                                         |
| --------------- | ---------------------------------------------------------------------------------------------- |
| `index.html`    | Add `og:image`, Twitter card tags, font preconnect link, and stylesheet link for Google Fonts. |
| `src/index.css` | Remove `@import` rule for Google Fonts.                                                        |

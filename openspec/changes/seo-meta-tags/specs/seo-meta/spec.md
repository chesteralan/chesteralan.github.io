# Spec: seo-meta

## Capability: seo-meta

### ADDED Requirements

1. **og:image**
   The `index.html` file **SHALL** contain an `<meta property="og:image">` tag whose `content` attribute points to a valid, publicly accessible image URL (e.g. `/og-image.png`).

2. **Twitter Card Tags**
   The `index.html` file **SHALL** contain the following Twitter Card meta tags:
   - `<meta name="twitter:card">` with value `summary_large_image`
   - `<meta name="twitter:title">`
   - `<meta name="twitter:description">`
   - `<meta name="twitter:image">`

3. **Google Fonts Preconnect**
   The `index.html` file **SHALL** contain `<link rel="preconnect">` elements for both `https://fonts.googleapis.com` and `https://fonts.gstatic.com` (with `crossorigin` on the latter), appearing **before** any stylesheet or font links.

4. **Font Loading via HTML**
   Google Fonts **SHALL** be loaded via a `<link rel="stylesheet">` element in `index.html` rather than via a CSS `@import` in `src/index.css`.

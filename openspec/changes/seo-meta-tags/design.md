# Design: seo-meta-tags

## Approach

All changes target the `<head>` section of `index.html` and the CSS entry point `src/index.css`.

## index.html

Insert the following elements inside `<head>`, ordered for optimal loading:

1. **Google Fonts preconnect** — two `<link rel="preconnect">` tags (for `fonts.googleapis.com` and `fonts.gstatic.com`) placed before any stylesheet references so the browser can establish early connections.

2. **Google Fonts stylesheet** — a single `<link rel="stylesheet">` that replaces the CSS `@import`. This ensures the browser discovers the stylesheet during HTML parsing rather than after the main CSS bundle is fetched and parsed.

3. **Open Graph tag** — `<meta property="og:image" content="..." />` for social sharing previews.

4. **Twitter Card tags** — `<meta name="twitter:card" ... />` and related `twitter:title`, `twitter:description`, `twitter:image` tags.

## src/index.css

Remove the existing `@import url(...)` rule for Google Fonts (`fonts.googleapis.com`). The font stylesheet is now loaded from `index.html`, so the CSS import is redundant and its removal eliminates a render-blocking waterfall.

## Image Asset

A placeholder `og-image.png` (1200×630 px recommended) should be placed in the `public/` directory. The `og:image` and `twitter:image` content values should reference the absolute URL of this asset.

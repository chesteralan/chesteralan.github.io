# Design: asset-updates

## Approach

1. Create or convert `favicon.ico` from the existing SVG favicon (or add a placeholder 16×16 `.ico`).
2. Add `apple-touch-icon.png` (180×180 PNG) to `public/`.
3. Add corresponding `<link rel="icon" href="/favicon.ico">` and `<link rel="apple-touch-icon" href="/apple-touch-icon.png">` tags to `index.html`.

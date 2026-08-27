# Design: accessibility-skip-link

## Approach

Add a styled skip link at the top of `Layout.tsx`, positioned before the navigation component so it is the first element in the DOM flow. The link targets an anchor id on the main content area.

### Layout.tsx

- Insert a skip-to-content link as the first child inside the layout wrapper.
- The link points to `#main-content`.
- Add `id="main-content"` to the main content container element.

### index.css

- Add a `.skip-link` class using the visually-hidden-but-focusable CSS pattern.
- Default state: visually hidden using `clip`, `clip-path`, and positioning off-screen.
- Focus state: use `:focus` pseudo-class to restore visibility and apply a high-contrast background, padding, and `z-index` to ensure it appears above all other content.

```css
.skip-link {
  position: absolute;
  left: -9999px;
  z-index: 999;
  padding: 0.75rem 1.5rem;
  background: #000;
  color: #fff;
  font-weight: bold;
  text-decoration: none;
}

.skip-link:focus {
  left: 50%;
  top: 0;
  transform: translateX(-50%);
}
```

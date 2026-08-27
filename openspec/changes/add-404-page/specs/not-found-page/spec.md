# Spec: not-found-page

## ADDED Requirements

### Display

- The app **SHALL** display a styled 404 page when the user navigates to a route that does not match any defined page
- The 404 page **SHALL** be rendered within the existing `Layout` component (Navbar + Footer)
- The 404 page **SHALL** display a visible "404" heading and a brief message indicating the page was not found

### Navigation

- The 404 page **SHALL** include a link back to the home page (`/`)
- The link **SHALL** use `react-router-dom` `Link` component for client-side navigation

### Styling

- The 404 page **SHALL** follow the existing design system (Tailwind utility classes, dark mode support, section-container pattern)

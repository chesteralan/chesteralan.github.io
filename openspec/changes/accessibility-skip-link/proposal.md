# Proposal: accessibility-skip-link

## Why

Keyboard and screen reader users currently cannot skip the navigation to reach main content. Every page requires tabbing through the entire navigation bar before reaching the primary content, creating a significant accessibility barrier.

## What Changes

Add a visually hidden skip-to-content link that becomes visible when focused via keyboard navigation. This link will be the first focusable element in the DOM and will anchor to the main content area.

## Capabilities

- **skip-link**: A hidden link that becomes visible on keyboard focus, allowing users to bypass navigation and jump directly to main content.

## Impact

- `Layout.tsx` — Add the skip link element and anchor id on main content
- `index.css` — Add visually-hidden-but-focusable CSS pattern

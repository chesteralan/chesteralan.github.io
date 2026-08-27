# Proposal: scroll-reveal-observer

## Why

`ScrollReveal.tsx` is currently just a passive wrapper. It unconditionally applies the `animate-fade-in` CSS class to its children on mount, so every element fades in immediately regardless of whether it has entered the viewport. There is no Intersection Observer and no viewport-based animation trigger, which means the "scroll reveal" effect is misleading — content animates before it is ever seen by the user.

## What Changes

- Add an Intersection Observer in `ScrollReveal.tsx` that detects when the element enters the viewport.
- Toggle an animation class (e.g. `is-visible`) on intersection so the element fades/slides in only when scrolled into view.
- Add/adjust the required CSS transition/animation state in `src/index.css` for the hidden and revealed states.
- Support a configurable `threshold` prop so callers can control how much of the element must be visible before triggering.

## Capabilities

| Capability      | Description                                                                                 |
| --------------- | ------------------------------------------------------------------------------------------- |
| `scroll-reveal` | Trigger viewport-based reveal animations for wrapped content using an Intersection Observer |

## Impact

- `src/components/ScrollReveal.tsx` — replace static class with observer-driven animation toggle
- `src/index.css` — add/replace the hidden and revealed animation styles if not already present

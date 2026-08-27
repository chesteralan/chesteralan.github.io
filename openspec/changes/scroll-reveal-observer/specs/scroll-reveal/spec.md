# Spec: scroll-reveal

## ADDED

### Requirement: viewport-triggered animation

Elements wrapped by `ScrollReveal` SHALL animate (fade/slide in) only when they enter the viewport, not immediately on mount.

### Requirement: intersection observer usage

`ScrollReveal` SHALL use the browser's Intersection Observer API to detect when the wrapped element intersects the viewport, rather than relying on a static CSS class alone.

### Requirement: configurable threshold

`ScrollReveal` SHALL accept a configurable `threshold` value (fraction of the element visible, 0–1) that determines how much of the element must be in view before the reveal animation is triggered. The default SHALL be a sensible value (e.g. `0.1`) when no threshold is provided.

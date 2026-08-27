# Design: fix-navigation-links

## Approach

### Footer.tsx

Update the inline `navLinks` array in the Footer quick links section (lines 27-31) to include `{ label: 'Extensions', href: '/extensions' }` between Projects and Contact, matching the order used in Navbar.tsx.

### Navbar.tsx (no change needed)

The Navbar's shared `navLinks` array already includes Extensions and is iterated by both the desktop nav and the mobile menu. No code changes required in this file.

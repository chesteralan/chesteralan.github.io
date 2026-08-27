# Proposal: fix-navigation-links

## Why

The Footer quick links section only lists Home, About, Projects, and Contact. The Extensions page exists as a route and appears in the desktop Navbar, but is absent from the Footer navigation. This creates an inconsistent navigation experience — users who reach the Footer cannot discover or navigate to Extensions without using the desktop Navbar.

## What Changes

- Add Extensions link to the Footer quick links array

## Capabilities

- navigation-completeness

## Impact

- Footer.tsx

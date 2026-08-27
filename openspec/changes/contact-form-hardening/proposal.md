# Proposal: contact-form-hardening

## Why

The contact form has poor error handling — the catch block silently swallows errors and always shows a success message even on failure. There is no client-side email validation beyond the HTML5 `type="email"` attribute, and no spam protection.

## What Changes

- Fix error handling in the contact form catch block so errors surface to the user
- Add client-side email regex validation
- Add a honeypot field for spam prevention

## Capabilities

- contact-form

## Impact

- Contact.tsx

# Simplify Contact Form

## Goal

Replace the multi-field project inquiry form with a minimal Name + Email + Message contact form.

## Steps

1. **Simplify form state** — remove `firstName`, `lastName`, `scope`, `timeline`, `budget`, `website` fields; keep `email` and `details`; add `name`
2. **Remove unused constants** — delete `SCOPE_OPTIONS`, `TIMELINE_OPTIONS`, `BUDGET_OPTIONS`
3. **Remove unused imports** — delete `ToggleButton` import
4. **Simplify form JSX** — replace grid of fields with 3 simple fields (Name, Email, Message)
5. **Update heading** — change "Send a Project Inquiry" to "Get in Touch"
6. **Keep** — honeypot spam protection, FormAlert, submit button, privacy note

## Files Changed

- `apps/web/src/pages/Contact.tsx` — simplify form

## Verification

- `pnpm --filter web lint` passes
- `pnpm --filter web test` passes

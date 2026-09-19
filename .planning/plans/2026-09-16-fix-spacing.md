# Fix Spacing Issues

## Goal

Fix broken spacing from Lucide icon migration and contact form simplification.

## Steps

1. **Icon.tsx** — add `filled` prop (ignored, keeps API compat)
2. **IconBox.tsx** — bump icon sizes to compensate for Lucide internal padding
3. **Contact.tsx** — reduce Card padding for simplified form

## Files Changed

- `apps/web/src/components/Icon.tsx`
- `apps/web/src/components/IconBox.tsx`
- `apps/web/src/pages/Contact.tsx`

## Verification

- `pnpm --filter web lint` passes
- `pnpm --filter web test` passes

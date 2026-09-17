# Material Icons → Lucide Icons Migration

## Goal

Replace Material Symbols Outlined font with Lucide React icons across the entire app, keeping the same `Icon` component API so all 50+ usages don't need individual changes.

## Steps

1. **Install `lucide-react`** — add to `apps/web/package.json` devDeps
2. **Rewrite `Icon` component** — import all 45 Lucide icons, create name→component map, render Lucide components instead of Material font spans
3. **Remove Material Symbols** — delete Google Fonts import for Material from `index.css`, remove `.material-symbols-outlined` CSS rule
4. **Verify** — run lint, typecheck, tests, and knip

## Files Changed

- `apps/web/package.json` — add `lucide-react`
- `apps/web/src/components/Icon.tsx` — rewrite internals (same API)
- `apps/web/src/index.css` — remove Material font import + CSS rule

## Verification

- `pnpm --filter web lint` passes
- `pnpm --filter web test` passes (53 tests, 100% coverage)
- `npx knip` clean
- All 45 icon names map correctly

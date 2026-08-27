# Proposal: add-prettier

## Why

No code formatter is configured in the project. Developers rely on manual formatting, leading to inconsistent style across source files — mismatched quote styles, trailing commas, inconsistent semicolons, and varying line endings. This creates unnecessary diff noise in reviews and makes onboarding harder.

## What Changes

Add Prettier as a dev dependency with a project-level configuration file (`.prettierrc`). Add `format` and `format:check` scripts to `package.json` so formatting can be run manually or in CI. Add `lint-staged` with a pre-commit hook to auto-format staged files before commit.

## Capabilities

- `prettier-formatting` — consistent code style enforced across all source files.

## Impact

- **New files:** `.prettierrc`
- **Modified files:** `package.json` (new scripts, new devDependencies)
- **Affected files:** all `.ts`, `.tsx`, `.css`, `.json`, and `.md` source files will be reformatted on first run.

# Spec: prettier-formatting

**Capability:** prettier-formatting
**Status:** proposed

## Requirements

- The project **SHALL** have a `.prettierrc` configuration file at the repository root.
- The `.prettierrc` **SHALL** define `singleQuote`, `semi`, `trailingComma`, and `printWidth` settings.
- All source files (`.ts`, `.tsx`, `.css`, `.json`, `.md`) **SHALL** be formatted according to the Prettier config.
- The project **SHALL** expose a `format` script via `yarn format` that runs Prettier with `--write`.
- The project **SHALL** expose a `format:check` script via `yarn format:check` that runs Prettier with `--check` (non-destructive, suitable for CI).
- The project **SHALL** have `lint-staged` configured to run Prettier on staged files via a pre-commit hook.

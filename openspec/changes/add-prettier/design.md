# Design: add-prettier

## Decisions

1. **Package manager:** yarn (consistent with existing `packageManager` field in `package.json`).
2. **Prettier version:** latest stable v3.
3. **Config file:** `.prettierrc` (JSON) at repo root.

## Configuration

```json
{
  "singleQuote": true,
  "semi": true,
  "trailingComma": "all",
  "printWidth": 80,
  "tabWidth": 2,
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

- `singleQuote: true` — matches common React/TS conventions.
- `trailingComma: "all"` — cleaner diffs.
- `prettier-plugin-tailwindcss` — auto-sorts Tailwind classes for consistent ordering.

## Scripts added to `package.json`

```json
{
  "format": "prettier --write .",
  "format:check": "prettier --check ."
}
```

## lint-staged

Add `lint-staged` as a devDependency and configure via `package.json`:

```json
{
  "lint-staged": {
    "*.{ts,tsx,css,json,md}": "prettier --write"
  }
}
```

Add a `prepare` script:

```json
{
  "prepare": "husky install"
}
```

Use Husky for the git hook:

```bash
yarn add -D husky lint-staged
npx husky install
npx husky add .husky/pre-commit "npx lint-staged"
```

## Rollout

1. Install `prettier`, `prettier-plugin-tailwindcss`, `husky`, `lint-staged`.
2. Create `.prettierrc` with the config above.
3. Add `format`, `format:check`, and `prepare` scripts to `package.json`.
4. Add `lint-staged` config to `package.json`.
5. Run `yarn format` to format all files in one commit.
6. Commit: "chore: add prettier and format codebase" (config + scripts), then "style: format codebase with prettier" (formatted files only).

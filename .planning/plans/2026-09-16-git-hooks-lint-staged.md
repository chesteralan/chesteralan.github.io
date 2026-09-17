# Git Hooks + lint-staged Setup

## Goal

Add pre-commit (lint-staged) and pre-push (full test suite) git hooks to enforce code quality before commits and pushes.

## Steps

1. **Install dependencies** — `husky` and `lint-staged` as root devDeps
2. **Add `prepare` script** — `"prepare": "husky"` in root package.json so hooks auto-install on `pnpm install`
3. **Create `.lintstagedrc.json`** — config for staged file processing:
   - `*.{ts,tsx}` → `eslint --fix`, `prettier --write`
   - `*.{json,md,css,html}` → `prettier --write`
4. **Create `.husky/pre-commit`** — runs `npx lint-staged`
5. **Create `.husky/pre-push`** — runs `pnpm --filter web test`
6. **Verify** — run `pnpm install`, then test hooks manually

## Verification

- `pnpm install` succeeds and husky init runs
- `git add` a file with lint issues → pre-commit hook blocks
- `git push` with failing tests → pre-push hook blocks

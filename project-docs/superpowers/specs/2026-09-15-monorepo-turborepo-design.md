# Monorepo with Turborepo + pnpm

## Goal

Convert the single-project portfolio repo into a Turborepo monorepo with pnpm workspaces, containing two apps: the portfolio site and a Cloudflare Worker replacing the Firebase Cloud Function.

## Architecture

```
chesteralan.github.io/
├── apps/
│   ├── web/                    # Portfolio site (React + Vite + Tailwind)
│   └── worker/                 # Cloudflare Worker (contact form → Slack)
├── turbo.json                  # Turborepo pipeline
├── pnpm-workspace.yaml         # pnpm workspace definition
├── package.json                # Root: scripts, devDeps (turbo)
└── ...existing dotfiles...
```

No shared `packages/` directory. Configs (ESLint, TypeScript, Prettier, Tailwind) live at the root or within each app.

## Apps

### `apps/web/` — Portfolio Site

**Source:** Current root project files (`src/`, `index.html`, `vite.config.ts`, etc.)

**Contents:**
- `src/` — React components, pages, data, lib, assets, tests
- `index.html`
- `vite.config.ts`
- `vitest.config.ts`, `vitest.setup.ts`
- `tsconfig.app.json`, `tsconfig.node.json`
- `tailwind.config.js`, `postcss.config.js`
- `eslint.config.js`
- `knip.json`

**Dependencies (migrated from root):**
- `react`, `react-dom`, `react-router-dom`, `lucide-react`
- All devDependencies: `@vitejs/plugin-react`, `vite`, `vitest`, `typescript`, `tailwindcss`, `eslint`, `prettier`, etc.

**Scripts:**
- `dev` — `vite`
- `build` — `tsc -b && vite build`
- `lint` — `eslint .`
- `test` — `vitest run`
- `format` — `prettier --write .`
- `preview` — `vite preview`

**Deployment:** GitHub Pages (static build output from `dist/`)

### `apps/worker/` — Cloudflare Worker

**Replaces:** `functions/` directory (Firebase Cloud Function)

**Contents:**
- `src/index.ts` — Worker entry point
- `wrangler.toml` or `wrangler.jsonc` — Wrangler config
- `tsconfig.json`
- `package.json`

**Dependencies:**
- None (uses built-in `fetch` API)

**DevDependencies:**
- `wrangler` — Cloudflare's CLI for dev/deploy
- `typescript`

**Scripts:**
- `dev` — `wrangler dev`
- `build` — `tsc` (or no-op if using Wrangler's bundling)
- `deploy` — `wrangler deploy`
- `lint` — `eslint .`

**Functionality (migrated from `functions/index.js`):**
- POST endpoint receiving `{ name, email, subject, message, timestamp }`
- Validates required fields
- Sanitizes input (HTML entity encoding)
- Sends formatted message to Slack webhook
- No Firestore write — the Worker is stateless; Slack is the record of contact

**Environment:**
- `SLACK_WEBHOOK_URL` — Slack incoming webhook URL (secret via `wrangler secret put`)

## Turbo Pipeline

```json
{
  "$schema": "https://turbo.build/schema.json",
  "tasks": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**"]
    },
    "dev": {
      "persistent": true,
      "cache": false
    },
    "lint": {},
    "test": {
      "dependsOn": ["^build"]
    },
    "deploy:worker": {
      "dependsOn": ["build"]
    }
  }
}
```

## pnpm Workspace Config

`pnpm-workspace.yaml`:
```yaml
packages:
  - 'apps/*'
```

## Root `package.json`

```json
{
  "name": "alchie-monorepo",
  "private": true,
  "scripts": {
    "dev": "turbo dev",
    "build": "turbo build",
    "lint": "turbo lint",
    "test": "turbo test",
    "deploy:worker": "turbo deploy:worker --filter=worker"
  },
  "devDependencies": {
    "turbo": "^2"
  },
  "packageManager": "pnpm@9"
}
```

## Migration Steps

1. **Initialize pnpm + Turborepo**
   - Remove `yarn.lock`, add `pnpm-lock.yaml`
   - Create root `package.json` with `turbo` devDep
   - Create `pnpm-workspace.yaml`
   - Create `turbo.json`

2. **Move portfolio to `apps/web/`**
   - Move `src/`, `index.html`, `vite.config.ts`, `vitest.config.ts`, `vitest.setup.ts`
   - Move `tsconfig.app.json`, `tsconfig.node.json`
   - Move `tailwind.config.js`, `postcss.config.js`
   - Move `eslint.config.js`, `knip.json`
   - Move `public/` (static assets)
   - Create `apps/web/package.json` with all deps from root
   - Update paths in configs (`base: './'` in Vite, tsconfig paths, etc.)

3. **Create `apps/worker/`**
   - Port `functions/index.js` → `apps/worker/src/index.ts` (TypeScript)
   - Add `wrangler.toml` with entry point, compatibility flags
   - Create `apps/worker/package.json`
   - Create `apps/worker/tsconfig.json`
   - Remove `functions/` directory

4. **Update root configs**
   - Root `eslint.config.js` → minimal or remove (each app has its own)
   - Root `tsconfig.json` → remove (each app has its own)
   - Root `.prettierrc` stays (shared formatting)
   - `.gitignore` — update for `apps/` structure

5. **Update CI/deployment**
   - GitHub Actions: update `actions/checkout`, `actions/setup-node`, build step to use `apps/web/` working directory, deploy from `apps/web/dist/`
   - Remove Firebase config (`.firebaserc`, `firebase.json` if present)
   - Add Cloudflare Worker deployment workflow (or add to existing workflow with `--filter=worker`)

6. **Verify**
   - `pnpm install` succeeds
   - `turbo build` builds both apps
   - `turbo dev` runs both in parallel
   - `turbo lint` passes
   - `turbo test` passes (if tests exist for web)
   - Worker deploys to Cloudflare

## What Changes for the Portfolio App

- Working directory shifts from root to `apps/web/`
- All imports stay the same (relative paths within `src/`)
- `vite.config.ts` base path may need adjustment
- `vitest.config.ts` test paths update
- GitHub Pages deployment path may need updating (`base` in Vite config)

## What Changes for the Worker

- `functions/index.js` (CommonJS) → `apps/worker/src/index.ts` (ESM + TypeScript)
- `firebase-functions` SDK → Cloudflare Workers runtime APIs
- `firebase-admin` Firestore call → either keep Firestore or remove
- Deployment: `firebase deploy` → `wrangler deploy`
- Secrets: `firebase functions:secrets:set` → `wrangler secret put`

## Risk Areas

- **Vite `base` path**: Currently `'./'` for relative asset paths. In monorepo, the build output path changes — may need `'/'` or adjusted base.
- **Test paths**: `vitest.config.ts` and `tsconfig` references will need path updates.
- **GitHub Pages**: Deployment workflow needs to build from `apps/web/` and set correct output dir.
- **Firestore in Worker**: If keeping the Firestore write, need `firebase-admin` in the Worker package or switch to Cloudflare KV/D1.

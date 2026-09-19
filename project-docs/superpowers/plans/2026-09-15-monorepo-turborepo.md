# Monorepo with Turborepo + pnpm — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convert the single-project portfolio repo into a Turborepo monorepo with pnpm workspaces containing `apps/web` (portfolio) and `apps/worker` (Cloudflare Worker replacing Firebase Functions).

**Architecture:** Move all portfolio files into `apps/web/`, create a new Cloudflare Worker in `apps/worker/`, and wire both up with Turborepo + pnpm workspaces. Root holds only turbo, workspace config, and shared dotfiles.

**Tech Stack:** pnpm 9, Turborepo v2, Vite 8, React 19, TypeScript 6, Tailwind 3, Wrangler, Vitest 4

**Spec:** `project-docs/superpowers/specs/2026-09-15-monorepo-turborepo-design.md`

## Global Constraints

- Package manager: pnpm 9 (replaces Yarn 1.22)
- Turborepo v2 for task orchestration
- Vite 8, React 19, TypeScript 6, Tailwind 3.4
- Node 24 (matching current CI)
- No shared `packages/` directory — configs live at root or within each app
- Worker: Cloudflare Workers runtime, Wrangler CLI

---

## File Structure (target)

```
chesteralan.github.io/
├── apps/
│   ├── web/
│   │   ├── package.json
│   │   ├── index.html
│   │   ├── vite.config.ts
│   │   ├── vitest.config.ts
│   │   ├── vitest.setup.ts
│   │   ├── tsconfig.app.json
│   │   ├── tsconfig.node.json
│   │   ├── tsconfig.json
│   │   ├── tailwind.config.js
│   │   ├── postcss.config.js
│   │   ├── eslint.config.js
│   │   ├── knip.json
│   │   ├── public/
│   │   └── src/
│   └── worker/
│       ├── package.json
│       ├── wrangler.toml
│       ├── tsconfig.json
│       └── src/
│           └── index.ts
├── turbo.json
├── pnpm-workspace.yaml
├── package.json
├── .prettierrc
├── .prettierignore
├── .gitignore
├── .github/workflows/ci.yml
└── .github/workflows/deploy.yml
```

---

### Task 1: Initialize root monorepo config

**Files:**
- Create: `package.json` (replace existing)
- Create: `pnpm-workspace.yaml`
- Create: `turbo.json`
- Delete: `yarn.lock`

**Interfaces:** None — this is the foundation.

- [ ] **Step 1: Delete `yarn.lock`**

```bash
rm yarn.lock
```

- [ ] **Step 2: Replace root `package.json`**

Replace the contents of `package.json` with:

```json
{
  "name": "alchie-monorepo",
  "private": true,
  "scripts": {
    "dev": "turbo dev",
    "build": "turbo build",
    "lint": "turbo lint",
    "test": "turbo test",
    "format": "prettier --write .",
    "format:check": "prettier --check .",
    "deploy:worker": "turbo deploy:worker --filter=worker"
  },
  "devDependencies": {
    "turbo": "^2"
  },
  "packageManager": "pnpm@9.15.0"
}
```

- [ ] **Step 3: Create `pnpm-workspace.yaml`**

```yaml
packages:
  - 'apps/*'
```

- [ ] **Step 4: Create `turbo.json`**

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

- [ ] **Step 5: Install pnpm and run `pnpm install`**

```bash
corepack enable
corepack prepare pnpm@9.15.0 --activate
pnpm install
```

Expected: `pnpm-lock.yaml` created, no errors.

- [ ] **Step 6: Commit**

```bash
git add package.json pnpm-workspace.yaml turbo.json pnpm-lock.yaml
git rm yarn.lock
git commit -m "chore: initialize turborepo with pnpm workspaces"
```

---

### Task 2: Create `apps/web/` — move portfolio files

**Files:**
- Create: `apps/web/package.json`
- Move: `src/` → `apps/web/src/`
- Move: `index.html` → `apps/web/index.html`
- Move: `vite.config.ts` → `apps/web/vite.config.ts`
- Move: `vitest.config.ts` → `apps/web/vitest.config.ts`
- Move: `vitest.setup.ts` → `apps/web/vitest.setup.ts`
- Move: `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json` → `apps/web/`
- Move: `tailwind.config.js` → `apps/web/tailwind.config.js`
- Move: `postcss.config.js` → `apps/web/postcss.config.js`
- Move: `eslint.config.js` → `apps/web/eslint.config.js`
- Move: `knip.json` → `apps/web/knip.json`
- Move: `public/` → `apps/web/public/`

**Interfaces:** Consumes Task 1 (workspace root exists).

- [ ] **Step 1: Create `apps/web/` directory**

```bash
mkdir -p apps/web
```

- [ ] **Step 2: Move portfolio files into `apps/web/`**

```bash
mv src apps/web/
mv index.html apps/web/
mv vite.config.ts apps/web/
mv vitest.config.ts apps/web/
mv vitest.setup.ts apps/web/
mv tsconfig.json apps/web/
mv tsconfig.app.json apps/web/
mv tsconfig.node.json apps/web/
mv tailwind.config.js apps/web/
mv postcss.config.js apps/web/
mv eslint.config.js apps/web/
mv knip.json apps/web/
mv public apps/web/
```

- [ ] **Step 3: Create `apps/web/package.json`**

```json
{
  "name": "web",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "format": "prettier --write .",
    "format:check": "prettier --check .",
    "test": "vitest run",
    "test:watch": "vitest",
    "test:coverage": "vitest run --coverage",
    "check:knip": "knip",
    "analyze": "fallow dead-code && fallow health"
  },
  "dependencies": {
    "lucide-react": "^1.16.0",
    "react": "^19.2.6",
    "react-dom": "^19.2.6",
    "react-router-dom": "^7.15.1"
  },
  "devDependencies": {
    "@eslint/js": "^10.0.1",
    "@testing-library/dom": "^10.4.1",
    "@testing-library/jest-dom": "^7.0.1",
    "@testing-library/react": "^16.3.2",
    "@types/node": "^24.12.3",
    "@types/react": "^19.2.14",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^6.0.1",
    "@vitest/coverage-v8": "^4.1.11",
    "autoprefixer": "^10.5.0",
    "eslint": "^10.3.0",
    "eslint-plugin-react-hooks": "^7.1.1",
    "eslint-plugin-react-refresh": "^0.5.2",
    "fallow": "^3.19.0",
    "globals": "^17.6.0",
    "jsdom": "^30.0.1",
    "knip": "^6.32.3",
    "postcss": "^8.5.15",
    "prettier": "^3.9.6",
    "prettier-plugin-tailwindcss": "^0.8.1",
    "tailwindcss": "^3.4.19",
    "typescript": "~6.0.2",
    "typescript-eslint": "^8.59.2",
    "vite": "^8.0.12",
    "vitest": "^4.1.11"
  }
}
```

- [ ] **Step 4: Verify `tsconfig.json` references are correct**

`apps/web/tsconfig.json` should remain unchanged:
```json
{
  "files": [],
  "references": [{ "path": "./tsconfig.app.json" }, { "path": "./tsconfig.node.json" }]
}
```

`apps/web/tsconfig.app.json` — no changes needed (paths are relative to `src/`, which moved with it).

`apps/web/tsconfig.node.json` — no changes needed (`include: ["vite.config.ts"]` is still correct relative to `apps/web/`).

- [ ] **Step 5: Verify `vitest.config.ts` paths are correct**

`apps/web/vitest.config.ts` — the `setupFiles: ['./vitest.setup.ts']` and coverage paths `src/**/*.{ts,tsx}` are still correct relative to `apps/web/`.

- [ ] **Step 6: Verify `tailwind.config.js` content paths**

`apps/web/tailwind.config.js` — `content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}']` is still correct relative to `apps/web/`.

- [ ] **Step 7: Install dependencies**

```bash
pnpm install
```

Expected: `pnpm-lock.yaml` updated, no errors.

- [ ] **Step 8: Verify web app builds**

```bash
cd apps/web && pnpm build
```

Expected: TypeScript compiles, Vite builds to `apps/web/dist/`.

- [ ] **Step 9: Verify tests pass**

```bash
cd apps/web && pnpm test
```

Expected: All tests pass.

- [ ] **Step 10: Commit**

```bash
git add apps/web/
git commit -m "feat: move portfolio to apps/web/"
```

---

### Task 3: Create `apps/worker/` — Cloudflare Worker

**Files:**
- Create: `apps/worker/package.json`
- Create: `apps/worker/tsconfig.json`
- Create: `apps/worker/wrangler.toml`
- Create: `apps/worker/src/index.ts`

**Interfaces:** None — independent app. The Worker replaces `functions/index.js`.

- [ ] **Step 1: Create `apps/worker/` directory structure**

```bash
mkdir -p apps/worker/src
```

- [ ] **Step 2: Create `apps/worker/package.json`**

```json
{
  "name": "worker",
  "private": true,
  "version": "0.0.0",
  "scripts": {
    "dev": "wrangler dev",
    "build": "tsc",
    "deploy": "wrangler deploy",
    "lint": "eslint ."
  },
  "devDependencies": {
    "@cloudflare/workers-types": "^4.20250915.0",
    "typescript": "~6.0.2",
    "wrangler": "^4"
  }
}
```

- [ ] **Step 3: Create `apps/worker/tsconfig.json`**

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ES2022",
    "moduleResolution": "bundler",
    "lib": ["ES2022"],
    "types": ["@cloudflare/workers-types"],
    "skipLibCheck": true,
    "noEmit": true,
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src"]
}
```

- [ ] **Step 4: Create `apps/worker/wrangler.toml`**

```toml
name = "alchie-contact"
main = "src/index.ts"
compatibility_date = "2025-09-15"
compatibility_flags = ["nodejs_compat"]

[vars]
```

- [ ] **Step 5: Create `apps/worker/src/index.ts`**

Port the Firebase Cloud Function to a Cloudflare Worker. Remove Firestore write — Worker is stateless.

```typescript
interface Env {
  SLACK_WEBHOOK_URL: string;
}

interface ContactPayload {
  name: string;
  email: string;
  subject?: string;
  message: string;
  timestamp?: string;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), {
        status: 405,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    let body: ContactPayload;
    try {
      body = (await request.json()) as ContactPayload;
    } catch {
      return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const { name, email, subject, message, timestamp } = body;

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields: name, email, message' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const slackMessage = {
      blocks: [
        {
          type: 'header',
          text: {
            type: 'plain_text',
            text: 'New Contact Form Submission',
            emoji: true,
          },
        },
        {
          type: 'section',
          fields: [
            { type: 'mrkdwn', text: `*Name:*\n${sanitize(name)}` },
            { type: 'mrkdwn', text: `*Email:*\n<mailto:${sanitize(email)}|${sanitize(email)}>` },
            { type: 'mrkdwn', text: `*Subject:*\n${sanitize(subject || 'N/A')}` },
            {
              type: 'mrkdwn',
              text: `*Time:*\n${new Date(timestamp || Date.now()).toLocaleString('en-PH', { timeZone: 'Asia/Manila' })}`,
            },
          ],
        },
        { type: 'divider' },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: `*Message:*\n${sanitize(message)}`,
          },
        },
        {
          type: 'context',
          elements: [
            {
              type: 'mrkdwn',
              text: `From alchie.cc — ${sanitize(name)} (${sanitize(email)})`,
            },
          ],
        },
      ],
    };

    const response = await fetch(env.SLACK_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(slackMessage),
    });

    if (!response.ok) {
      console.error('Slack webhook error:', response.status, await response.text());
      return new Response(JSON.stringify({ error: 'Failed to send to Slack' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { 'Content-Type': 'application/json' },
    });
  },
};

function sanitize(text: string): string {
  if (!text) return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\n/g, '\n');
}
```

- [ ] **Step 6: Install worker dependencies**

```bash
cd apps/worker && pnpm install
```

- [ ] **Step 7: Verify worker typechecks**

```bash
cd apps/worker && pnpm build
```

Expected: No TypeScript errors.

- [ ] **Step 8: Commit**

```bash
git add apps/worker/
git commit -m "feat: add Cloudflare Worker in apps/worker/"
```

---

### Task 4: Remove old `functions/` directory

**Files:**
- Delete: `functions/index.js`
- Delete: `functions/package.json`
- Delete: `functions/package-lock.json`

**Interfaces:** Depends on Task 3 (Worker ported to `apps/worker/`).

- [ ] **Step 1: Remove `functions/`**

```bash
rm -rf functions/
```

- [ ] **Step 2: Update `.gitignore`**

Replace `.gitignore` contents with:

```gitignore
node_modules/
dist/
coverage/
.env
.env.local
*.log
.DS_Store
```

Removed: `functions/node_modules/`, `.firebase/` (no longer using Firebase).

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "chore: remove Firebase functions/ directory"
```

---

### Task 5: Update root configs and clean up

**Files:**
- Delete: Root `eslint.config.js` (moved to `apps/web/`)
- Keep: `.prettierrc` (shared formatting)
- Update: `.prettierignore`

**Interfaces:** Depends on Task 2 (web app has its own eslint).

- [ ] **Step 1: Remove root `eslint.config.js`**

Already moved to `apps/web/` in Task 2. If it still exists at root:

```bash
rm -f eslint.config.js
```

- [ ] **Step 2: Update `.prettierignore`**

```gitignore
docs/
project-docs/
.superpowers/
apps/
```

Adding `apps/` prevents Prettier from reformatting app-specific configs that each app manages independently. The root `.prettierrc` still applies to any root-level files.

Actually — since each app runs its own `pnpm format`, we should NOT ignore `apps/`. Instead, keep `.prettierignore` as-is but ensure the apps have their own `.prettierignore` if needed. For now, revert to:

```gitignore
docs/
project-docs/
.superpowers/
```

No change needed — the existing `.prettierignore` is fine.

- [ ] **Step 3: Verify root is clean**

Root should now contain only:
- `package.json`, `pnpm-workspace.yaml`, `turbo.json`, `pnpm-lock.yaml`
- `.prettierrc`, `.prettierignore`
- `.gitignore`
- `.github/`
- `.opencode/`, `.superpowers/`, `.fallow/`, `.fallowrc`
- `docs/`, `project-docs/`
- `README.md`, `TODO.md`
- `.env.example`, `.nojekyll`

All source code is in `apps/`.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "chore: clean up root configs after monorepo migration"
```

---

### Task 6: Update CI workflow for pnpm + Turborepo

**Files:**
- Modify: `.github/workflows/ci.yml`
- Modify: `.github/workflows/deploy.yml`

**Interfaces:** Depends on Tasks 1-5 (monorepo structure in place).

- [ ] **Step 1: Replace `.github/workflows/ci.yml`**

```yaml
name: CI

on:
  pull_request:

jobs:
  ci:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup pnpm
        uses: pnpm/action-setup@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 24
          cache: 'pnpm'

      - name: Install dependencies
        run: pnpm install --frozen-lockfile

      - name: Format check
        run: pnpm format:check

      - name: Lint
        run: pnpm lint

      - name: Build
        run: pnpm build

      - name: Test
        run: pnpm test

  fallow:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pull-requests: write
      checks: write
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Fallow analysis
        uses: fallow-rs/fallow@v3
        with:
          command: audit
          gate: new-only
```

Key changes:
- `pnpm/action-setup@v4` replaces manual corepack
- `cache: 'pnpm'` instead of `cache: 'yarn'`
- `pnpm install --frozen-lockfile` instead of `yarn install --frozen-lockfile`
- `pnpm build` / `pnpm lint` / `pnpm test` — Turborepo orchestrates across apps
- Removed `check:knip` (runs within `apps/web` via `pnpm --filter web check:knip`)

- [ ] **Step 2: Replace `.github/workflows/deploy.yml`**

```yaml
name: Deploy Portfolio

on:
  push:
    branches: [main]

permissions:
  contents: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup pnpm
        uses: pnpm/action-setup@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 24
          cache: 'pnpm'

      - name: Install dependencies
        run: pnpm install --frozen-lockfile

      - name: Build site
        run: pnpm --filter web build

      - name: Set up Git
        run: |
          git config user.name "github-actions[bot]"
          git config user.email "github-actions[bot]@users.noreply.github.com"

      - name: Copy build to docs/
        run: |
          rm -rf docs/
          cp -r apps/web/dist docs/
          cp docs/index.html docs/404.html

      - name: Commit and push docs/
        run: |
          git add docs/
          if git diff --cached --quiet; then
            echo "No changes to docs/ — skipping commit"
          else
            git commit -m "Auto-build: update docs/ [skip ci]"
            git push
          fi
```

Key changes:
- `pnpm/action-setup@v4` + `cache: 'pnpm'`
- `pnpm --filter web build` — only builds the web app
- `cp -r apps/web/dist docs/` — build output is now in `apps/web/dist/`

- [ ] **Step 3: Commit**

```bash
git add .github/workflows/
git commit -m "ci: migrate workflows from yarn to pnpm + turborepo"
```

---

### Task 7: End-to-end verification

**Files:** None — verification only.

**Interfaces:** Depends on all previous tasks.

- [ ] **Step 1: Clean install**

```bash
rm -rf node_modules apps/web/node_modules apps/worker/node_modules
pnpm install
```

Expected: No errors, `pnpm-lock.yaml` updated.

- [ ] **Step 2: Build all apps**

```bash
pnpm build
```

Expected: Both `apps/web` and `apps/worker` build successfully.

- [ ] **Step 3: Run all lints**

```bash
pnpm lint
```

Expected: No lint errors in either app.

- [ ] **Step 4: Run tests**

```bash
pnpm test
```

Expected: All tests in `apps/web` pass.

- [ ] **Step 5: Run dev mode**

```bash
pnpm dev
```

Expected: Vite dev server starts for `apps/web`. Press Ctrl+C to stop.

- [ ] **Step 6: Verify Worker types**

```bash
cd apps/worker && pnpm build
```

Expected: No TypeScript errors.

- [ ] **Step 7: Final commit (if any fixes needed)**

```bash
git add -A
git commit -m "fix: monorepo migration fixes"
```

Only if changes were needed during verification.

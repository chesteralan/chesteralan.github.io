# TypeScript Clean Code Audit

**Date:** 2026-09-18
**Scope:** `apps/web/src/`

---

## Summary

| Category            | Score | Status          |
| ------------------- | ----- | --------------- |
| Naming Conventions  | 9/10  | ✅ Good         |
| Type Safety         | 8/10  | ✅ Good         |
| Function Patterns   | 7/10  | ⚠️ Minor issues |
| Component Patterns  | 7/10  | ⚠️ Minor issues |
| Module Organization | 8/10  | ✅ Good         |

---

## Findings

### ✅ Compliant

- **No `any` types** — all files use proper types
- **Interfaces for object shapes** — `types.ts` uses `interface` correctly
- **camelCase** for variables and functions
- **PascalCase** for components and interfaces
- **Pure functions** — utilities like `cn()`, `stripBase()` are pure
- **Small, focused components** — most components have single responsibility
- **Good composition** — `ScrollRevealProvider` pattern is clean

---

### ⚠️ Issues Found

#### 1. Missing Explicit Return Types on Public APIs

**Standard:** Explicit return types on exported functions

| File                    | Line | Function      | Issue               |
| ----------------------- | ---- | ------------- | ------------------- |
| `lib/cn.ts`             | 4    | `cn()`        | Missing return type |
| `lib/config.ts`         | 7    | `stripBase()` | Missing return type |
| `components/Icon.tsx`   | 109  | `Icon()`      | Missing return type |
| `components/Navbar.tsx` | 27   | `isActive()`  | Missing return type |

**Fix:**

```typescript
// lib/cn.ts
export function cn(...inputs: ClassValue[]): string {

// lib/config.ts
export function stripBase(pathname: string): string {

// components/Icon.tsx
export default function Icon({ name, size = 24, className = '' }: IconProps): JSX.Element | null {
```

---

#### 2. Inline Type Definitions

**Standard:** Named interfaces for component props

| File                          | Line  | Issue                                             |
| ----------------------------- | ----- | ------------------------------------------------- |
| `components/ProjectCard.tsx`  | 6     | `{ project }: { project: Project }`               |
| `components/ScrollReveal.tsx` | 47-49 | Inline props type                                 |
| `components/Layout.tsx`       | 6     | No props defined (fine, but pattern inconsistent) |

**Fix:**

```typescript
// components/ProjectCard.tsx
interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
```

---

#### 3. Default Exports

**Standard:** Named exports preferred

All components use `export default function`:

- `Navbar.tsx`, `Footer.tsx`, `Layout.tsx`, `Home.tsx`, etc.

**Impact:** Lower discoverability, harder to refactor renames.

**Recommendation:** Consider converting to named exports:

```typescript
export function Navbar() { ... }
export function Footer() { ... }
```

---

#### 4. Magic Color Values

**Standard:** Constants for repeated values

`bg-[#0891b2]` appears in:

- `Home.tsx:175`
- `ProjectCard.tsx:31,62,73`
- `Footer.tsx` (via Tailwind classes)

**Fix:**

```typescript
// lib/constants.ts
export const BRAND_COLOR = '#0891b2';
export const BRAND_TAILWIND = 'bg-[#0891b2]';
```

---

#### 5. Non-Null Assertion

**Standard:** Avoid non-null assertions

| File       | Line | Issue                              |
| ---------- | ---- | ---------------------------------- |
| `main.tsx` | 6    | `document.getElementById('root')!` |

**Fix:**

```typescript
const root = document.getElementById('root');
if (!root) throw new Error('Root element not found');
createRoot(root).render(...);
```

---

#### 6. Unused Interface Property

**Standard:** Remove unused code

| File                  | Line | Issue                              |
| --------------------- | ---- | ---------------------------------- |
| `components/Icon.tsx` | 106  | `filled` prop defined but not used |

The `IconProps` interface includes `filled?: boolean` but the component doesn't use it.

**Fix:** Remove unused property or implement functionality.

---

#### 7. Missing Barrel File

**Standard:** Organized imports

No `index.ts` in `components/` directory.

**Impact:** Long import paths:

```typescript
import ProjectCard from '../components/ProjectCard';
import Tag from '../components/Tag';
import Icon from '../components/Icon';
```

**Recommendation:** Consider adding barrel file for cleaner imports.

---

## Priority Fixes

| Priority | Issue                              | Effort |
| -------- | ---------------------------------- | ------ |
| High     | Add explicit return types          | 10 min |
| High     | Remove unused `filled` prop        | 2 min  |
| Medium   | Extract inline types to interfaces | 15 min |
| Medium   | Fix non-null assertion             | 5 min  |
| Low      | Extract magic colors to constants  | 10 min |
| Low      | Add barrel file                    | 5 min  |
| Low      | Convert to named exports           | 30 min |

---

## Next Steps

1. Fix high-priority items
2. Run `npm run typecheck` to verify
3. Run `npm run lint` to check for linting issues
4. Commit changes

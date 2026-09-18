# React TypeScript Standards Audit

**Date:** 2026-09-18
**Scope:** `apps/web/src/`

---

## Summary

| Category                   | Score | Status  |
| -------------------------- | ----- | ------- |
| Props Interface Convention | 9/10  | ✅ Good |
| Component Return Types     | 8/10  | ✅ Good |
| Event Handler Typing       | 9/10  | ✅ Good |
| Hooks Typing               | 8/10  | ✅ Good |
| Children Props             | 9/10  | ✅ Good |

---

## Findings

### ✅ Compliant

- **Named interfaces for all components** — Every component has a properly named `*Props` interface
- **Destructured props** — Props are destructured in function parameters
- **Typed event handlers** — `React.ChangeEvent`, `React.FormEvent` used correctly in `Contact.tsx`
- **Typed children** — `React.ReactNode` used consistently for children props
- **Typed useState** — Complex state has explicit types, simple state uses inference
- **Typed useRef** — DOM refs use `useRef<HTMLDivElement>(null)`
- **No `any` types** — All components are fully typed

---

### ⚠️ Issues Found

#### 1. Missing Explicit Return Types on Components

**Standard:** Explicit return types on exported components

| File                    | Component           | Issue               |
| ----------------------- | ------------------- | ------------------- |
| `Badge.tsx`             | `Badge`             | Missing return type |
| `BadgePill.tsx`         | `BadgePill`         | Missing return type |
| `CTASection.tsx`        | `CTASection`        | Missing return type |
| `FormField.tsx`         | `FormField`         | Missing return type |
| `StatCard.tsx`          | `StatCard`          | Missing return type |
| `Tag.tsx`               | `Tag`               | Missing return type |
| `IconBox.tsx`           | `IconBox`           | Missing return type |
| `SectionContainer.tsx`  | `SectionContainer`  | Missing return type |
| `PageHeading.tsx`       | `PageHeading`       | Missing return type |
| `SkillCategoryCard.tsx` | `SkillCategoryCard` | Missing return type |

**Fix:**

```typescript
// Add to each component
export function Badge({ ... }: BadgeProps): JSX.Element {
```

---

#### 2. Missing Return Types on Event Handlers

**Standard:** Explicit return types on handlers

| File          | Handler           | Issue               |
| ------------- | ----------------- | ------------------- |
| `Contact.tsx` | `handleChange`    | Missing return type |
| `Contact.tsx` | `handleCopyEmail` | Missing return type |
| `Contact.tsx` | `validateForm`    | Missing return type |
| `Contact.tsx` | `buildPayload`    | Missing return type |
| `Contact.tsx` | `resetForm`       | Missing return type |
| `Contact.tsx` | `handleSubmit`    | Missing return type |

**Fix:**

```typescript
const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
```

---

#### 3. Missing Return Types on Helper Functions

| File          | Function       | Issue               |
| ------------- | -------------- | ------------------- |
| `Contact.tsx` | `validateForm` | Missing return type |
| `Contact.tsx` | `buildPayload` | Missing return type |

**Fix:**

```typescript
const validateForm = (): string | null => {
const buildPayload = (): ContactPayload => {
```

---

#### 4. Interface for Form Data

**Standard:** Named interfaces for complex objects

| File          | Issue                                       |
| ------------- | ------------------------------------------- |
| `Contact.tsx` | `formData` state has inline type definition |

**Fix:**

```typescript
interface ContactFormData {
  name: string;
  email: string;
  message: string;
  website: string;
}

const [formData, setFormData] = useState<ContactFormData>({
  name: '',
  email: '',
  message: '',
  website: '',
});
```

---

#### 5. Missing Interface for Contact Payload

| File          | Issue                                |
| ------------- | ------------------------------------ |
| `Contact.tsx` | `buildPayload` returns implicit type |

**Fix:**

```typescript
interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}

const buildPayload = (): ContactPayload => ({
```

---

## Priority Fixes

| Priority | Issue                               | Effort |
| -------- | ----------------------------------- | ------ |
| High     | Add return types to components      | 15 min |
| High     | Add return types to handlers        | 10 min |
| Medium   | Extract `ContactFormData` interface | 5 min  |
| Medium   | Extract `ContactPayload` interface  | 5 min  |

---

## Component Compliance Matrix

| Component         | Props Interface | Return Type | Typed Children | Typed Events |
| ----------------- | --------------- | ----------- | -------------- | ------------ |
| Badge             | ✅              | ❌          | ✅             | N/A          |
| BadgePill         | ✅              | ❌          | ✅             | N/A          |
| Card              | ✅              | ✅          | ✅             | N/A          |
| CTASection        | ✅              | ❌          | ✅             | N/A          |
| FormField         | ✅              | ❌          | N/A            | ✅           |
| Icon              | ✅              | ✅          | N/A            | N/A          |
| IconBox           | ✅              | ❌          | N/A            | N/A          |
| PageHeading       | ✅              | ❌          | ✅             | N/A          |
| ProjectCard       | ✅              | ✅          | N/A            | N/A          |
| ScrollReveal      | ✅              | ✅          | ✅             | N/A          |
| SectionContainer  | ✅              | ❌          | ✅             | N/A          |
| SkillCategoryCard | ✅              | ❌          | N/A            | N/A          |
| StatCard          | ✅              | ❌          | N/A            | N/A          |
| Tag               | ✅              | ❌          | ✅             | N/A          |
| Contact (page)    | N/A             | ❌          | N/A            | ✅           |

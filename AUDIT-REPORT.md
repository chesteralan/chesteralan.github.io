# Audit Report — Web App

**Date:** 2026-09-16
**Scope:** All files under `apps/web/src/`
**Auditor:** OpenCode

---

## Summary

| Severity | Count |
| -------- | ----- |
| Critical | 0     |
| High     | 6     |
| Medium   | 8     |
| Low      | 5     |

---

## Implementation Audit

### HIGH

**1. `ToggleButton` is dead code**

- File: `components/ToggleButton.tsx`
- After the Contact form simplification, `ToggleButton` is no longer imported anywhere. Remove the file.

**2. `filled` prop silently ignored**

- File: `components/Icon.tsx:104`
- The `filled` prop is accepted but does nothing. `Home.tsx:131` passes `filled` to star icons expecting filled stars. Callers assume behavior that doesn't exist.
- **Fix:** Either remove the prop entirely and clean up callers, or log a dev warning.

**3. Stale form error not cleared on edit**

- File: `pages/Contact.tsx:47-49`
- `handleChange` doesn't clear `status`/`errorMsg`. If submission fails, the error stays visible while the user edits — confusing UX.
- **Fix:** Add `setStatus('idle')` in `handleChange`.

**4. Honeypot submit silently returns**

- File: `pages/Contact.tsx:90`
- `if (formData.website) return;` — no feedback to the bot (or user if误). Should ideally show a fake success to deceive bots.
- **Low priority** but worth noting.

**5. Non-functional search input**

- File: `pages/Projects.tsx:110-114`
- The search input has no `onChange` handler, no state, no filtering logic. It's purely decorative — users will try to use it and be confused.
- **Fix:** Either implement search or remove the input.

**6. Missing `aria-label` on search input**

- File: `pages/Projects.tsx:110`
- `<input>` has no `aria-label` or associated `<label>`. Screen readers announce "edit text" with no context.

### MEDIUM

**7. Email regex is overly permissive**

- File: `pages/Contact.tsx:45`
- `/^[^\s@]+@[^\s@]+\.[^\s@]+$/` accepts `a@b.c`. Consider a slightly stricter pattern or rely on `type="email"` browser validation alone.

**8. Footer references non-existent icon `"work"`**

- File: `components/Footer.tsx:31`
- `icon="work"` is not in the Icon component's map. The LinkedIn icon renders nothing (returns `null`).
- **Fix:** Change to `"person"` or add a proper LinkedIn icon mapping (e.g., `Linkedin` from Lucide).

**9. Skip link CSS removed**

- File: `index.css`
- The `.skip-link` and `.skip-link:focus` rules are still present, but the `material-symbols-outlined` removal may have shifted layer ordering. Verify the skip link still works on keyboard focus.

**10. `SkillCategoryCard` footer duplicates value**

- File: `components/SkillCategoryCard.tsx:45-48`
- Footer shows both `footerLabel: footerValue` AND `footerValue` side by side. Appears to be a bug — the left side already includes the value.
- **Fix:** Change left side to just `{footerLabel}` or remove the right side.

**11. About page "4 Categories" is non-interactive but looks clickable**

- File: `pages/About.tsx:232-234`
- `<span className="cursor-pointer ...">` has no `onClick` or role. Looks like a button but does nothing.
- **Fix:** Remove `cursor-pointer` or make it functional.

**12. `totalCategories` is hardcoded**

- File: `pages/About.tsx:79`
- `const totalCategories = 4` is hardcoded. If `skillCategories` changes, this will be wrong.
- **Fix:** Derive from `skillCategories.length`.

**13. `SkillCategoryCard` missing `flex-grow` for equal heights**

- File: `components/SkillCategoryCard.tsx:27`
- `h-full` is set but the parent grid items don't stretch. Cards in the same row may have different heights.

**14. Contact form has no CSRF protection**

- File: `pages/Contact.tsx:105-109`
- The form POSTs JSON to a Cloud Function with no CSRF token. The honeypot helps but isn't foolproof.

### LOW

**15. `extensions` data in `portfolio.ts` uses `link` (singular)**

- File: `data/portfolio.ts:68-93`
- The `Extension` type uses `link` but `Project` uses `links` (object). Minor inconsistency in the data model.

**16. `experience` data has only 2 entries**

- File: `data/portfolio.ts:159-188`
- The career timeline section looks sparse with only 2 items. Consider adding more or adjusting the layout.

**17. `testimonials` has only 1 entry**

- File: `data/portfolio.ts:190-198`
- The testimonial carousel section is designed for multiple but only has 1. The conditional `testimonials.length > 0` suggests it was meant to be dynamic.

**18. Unused `skills` array in Home.tsx**

- File: `pages/Home.tsx:59`
- `skills` is imported and filtered inline. The filter runs on every render. Could be memoized or pre-filtered.

**19. `ScrollReveal` creates a new `IntersectionObserver` per instance**

- File: `components/ScrollReveal.tsx:19`
- Each `ScrollReveal` creates its own observer. On pages with many reveals (About has ~20), this creates 20+ observers. A single shared observer with a context would be more efficient.

---

## Design Audit

### Visual Consistency

**20. Inconsistent icon sizes across components**

| Component               | Size    | Context       |
| ----------------------- | ------- | ------------- |
| `SectionHeader`         | 14px    | Label icon    |
| `BadgePill`             | 14/18px | Inline badge  |
| `Badge`                 | 14px    | Inline badge  |
| `StatCard` (vertical)   | 26px    | Decorative    |
| `StatCard` (horizontal) | 22px    | In box        |
| `IconBox`               | 16-24px | In container  |
| `ProjectCard` links     | 16px    | Link icon     |
| `SocialIcon`            | 20px    | Footer social |

The sizes are contextually appropriate but there's no shared token system. Consider defining icon size tokens (e.g., `icon-sm: 14`, `icon-md: 16`, `icon-lg: 20`, `icon-xl: 24`).

**21. Inconsistent border radius**

- Cards: `rounded-2xl`
- Buttons: `rounded-lg`
- Tags: `rounded-md`
- Input fields: `rounded-xl`
- IconBox: `rounded-xl` or `rounded-lg`
- Badges: `rounded-full`

The mix is intentional (visual hierarchy) but `rounded-xl` on inputs vs `rounded-lg` on buttons feels inconsistent.

**22. Hardcoded color in NotFound.tsx**

- File: `pages/NotFound.tsx:11`
- Uses `text-gray-600` (Tailwind default gray) instead of `text-slate-600` (used everywhere else). Minor but breaks the color palette.

### Accessibility (a11y)

**23. Missing `aria-label` on icon-only buttons**

- `SocialIcon.tsx` — has `aria-label` ✓
- `Navbar.tsx:85` — has `aria-label="Toggle menu"` ✓
- `Contact.tsx:179` — Copy button has no `aria-label`. Screen readers announce "button" with no context.
- **Fix:** Add `aria-label={copied ? 'Email copied' : 'Copy email'}`.

**24. Form field missing `aria-describedby` for error messages**

- `FormField.tsx` — When validation fails, the error appears in `FormAlert` but isn't linked to the input via `aria-describedby`. Screen readers won't announce the error in context.

**25. Color contrast on `text-slate-400`**

- Multiple components use `text-slate-400` for labels/hints on white backgrounds. This may fail WCAG AA contrast ratio (4.5:1). `text-slate-500` is safer.

**26. `animate-pulse` on `PulseDot` — prefers-reduced-motion**

- `PulseDot.tsx:14` uses `animate-pulse` but doesn't respect `prefers-reduced-motion`. Users who prefer reduced motion still see the animation.
- **Fix:** Add `motion-reduce:animate-none` to the class.

**27. No focus-visible styles on interactive elements**

- Links and buttons rely on browser defaults. The `focus:ring-2 focus:ring-[#0891b2]` is only on form inputs. Buttons and links should have visible focus indicators for keyboard users.

### Responsive Design

**28. Heatmap grid overflow on mobile**

- `Projects.tsx:207` — `min-w-[550px]` forces horizontal scroll on mobile. The `overflow-x-auto` handles it, but the UX could be better (e.g., scaled-down grid or simplified view on small screens).

**29. Footer layout breaks on very small screens**

- `Footer.tsx:9` — `sm:flex-row` switches to column on mobile, but the nav links + social icons row may still overflow on screens < 360px.

**30. Contact page left sidebar has no sticky behavior**

- On desktop, the sidebar (status card, contact methods, socials, core areas) scrolls away while the form remains. Consider `lg:sticky lg:top-24` on the aside.

---

## Recommendations (Priority Order)

1. **Fix Footer `"work"` icon** — broken LinkedIn icon (HIGH)
2. **Remove dead `ToggleButton`** — dead code (HIGH)
3. **Clear form error on edit** — stale error UX (HIGH)
4. **Add `aria-label` to Copy button** — a11y (HIGH)
5. **Remove or implement search input** — confusing non-functional UI (HIGH)
6. **Fix `SkillCategoryCard` footer duplication** — visual bug (MEDIUM)
7. **Fix `text-gray-600` → `text-slate-600` in NotFound** — consistency (LOW)
8. **Add `prefers-reduced-motion` to PulseDot** — a11y (MEDIUM)
9. **Add focus-visible styles globally** — a11y (MEDIUM)
10. **Derive `totalCategories` from data** — maintainability (LOW)

# Design: fix-portfolio-data

## Technical Approach

All changes are localized to the experience and timeline data arrays defined in `src/pages/About.tsx`. No new components, hooks, or external dependencies are required.

1. **Timeline array**: Remove or rewrite the "2024 — PayrollPH & Agent Docs" entry. Replace it with an accurate entry reflecting the current project set. Update any year values from 2024 to 2026 where applicable.

2. **Experience array**: Update the PetLabCo entry to include a start date, changing the display from `"Present"` to a full range like `"2023 — Present"` (exact start date to be confirmed from the existing data context).

3. Both edits are in-memory data literal changes — no schema, type, or structural modifications needed.

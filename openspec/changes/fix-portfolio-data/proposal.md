# Proposal: fix-portfolio-data

## Why

The About page contains stale data: the timeline still references a removed "Agent Docs" project and displays an outdated year. The PetLabCo experience entry is missing a start date, showing only "Present" with no range context.

## What Changes

- Remove the "2024 — PayrollPH & Agent Docs" timeline entry and replace it with an accurate entry reflecting current projects
- Update the timeline year references from 2024 to 2026
- Add a start date range to the PetLabCo experience entry (currently just "Present")

## Capabilities

| Capability            | Description                                                                                                                |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `portfolio-data-sync` | Keeping portfolio data accurate by removing references to removed projects, updating years, and adding missing date ranges |

## Impact

- `src/pages/About.tsx` — timeline and experience data arrays

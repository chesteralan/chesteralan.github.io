# Design: Install Knip

## Approach

Install knip as a devDependency and configure it to analyse the Vite + React + TypeScript source tree.

### Dependencies

- **knip** — added as a devDependency (latest stable)

### Configuration

Create `knip.json` at the project root:

```json
{
  "$schema": "https://unpkg.com/knip@latest/schema.json",
  "entry": ["src/main.tsx", "src/**/*.tsx"],
  "ignore": ["dist", "docs", "functions"],
  "ignoreDependencies": []
}
```

- `entry` — explicit entry point (`src/main.tsx`) plus all TSX files so knip can trace imports.
- `ignore` — directories that are not source code or that contain generated output.
- `ignoreDependencies` — empty for now; populated after initial run if false positives appear.

### Script

Add to `package.json` scripts:

```json
"check:knip": "knip"
```

Running `yarn check:knip` will produce a report and exit non-zero if issues are found.

### Integration Points

| System              | Integration                                            |
| ------------------- | ------------------------------------------------------ |
| Local dev           | `yarn check:knip`                                      |
| CI (GitHub Actions) | Add step in existing workflow or new reusable workflow |

### Trade-offs

- **No CI gate yet** — the initial PR adds the tool and config only. CI enforcement can be added in a follow-up once the team reviews initial findings.
- **json config over JS** — `knip.json` is sufficient here; no need for the extra flexibility of `knip.config.ts`.

# Design: Install Fallow

## Approach

Install fallow as a devDependency and configure it to analyse the Vite + React + TypeScript source tree for dead code, duplication, and complexity hotspots.

### Dependencies

- **fallow** — added as a devDependency (latest stable)

### Configuration

Create `.fallowrc` at the project root:

```json
{
  "include": ["src"],
  "exclude": ["dist", "docs", "functions", "node_modules"],
  "deadCode": true,
  "health": true
}
```

- `include` — scope analysis to the `src/` directory.
- `exclude` — directories that are not source code or that contain generated output.
- `deadCode` — enable unused code detection.
- `health` — enable duplication and complexity analysis.

### Script

Add to `package.json` scripts:

```json
"analyze": "fallow dead-code && fallow health"
```

Running `yarn analyze` will produce a report for dead code and code health metrics.

### Integration Points

| System              | Integration                                            |
| ------------------- | ------------------------------------------------------ |
| Local dev           | `yarn analyze`                                         |
| CI (GitHub Actions) | Add step in existing workflow or new reusable workflow |

### Trade-offs

- **No CI gate yet** — the initial PR adds the tool and config only. CI enforcement can be added in a follow-up once initial findings are reviewed.
- **JSON config** — `.fallowrc` is sufficient; no need for a JS config file for this project size.

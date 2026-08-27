# Specification: knip-checks

## Requirements

| ID      | Requirement                                                                                           | Status  |
| ------- | ----------------------------------------------------------------------------------------------------- | ------- |
| KNIP-01 | The project SHALL have knip installed as a devDependency                                              | Pending |
| KNIP-02 | The project SHALL have a `knip.json` configuration file at the project root                           | Pending |
| KNIP-03 | The project SHALL expose a `check:knip` npm script that runs knip                                     | Pending |
| KNIP-04 | The `check:knip` script SHALL exit with a non-zero code when unused dependencies or exports are found | Pending |
| KNIP-05 | Knip findings SHALL be reviewable by running the script locally or in CI                              | Pending |
| KNIP-06 | The knip configuration SHALL correctly identify `src/main.tsx` as the main entry point                | Pending |
| KNIP-07 | The knip configuration SHALL ignore paths that are not source code (e.g., `dist`, `docs`)             | Pending |

## Notes

- Knip defaults cover most React + Vite + TypeScript projects well; the config only needs entry point overrides.
- This capability is additive — it does not change existing build or lint behavior.

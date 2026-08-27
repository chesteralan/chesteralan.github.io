# Specification: fallow-analysis

## Requirements

| ID     | Requirement                                                                          | Status  |
| ------ | ------------------------------------------------------------------------------------ | ------- |
| FAL-01 | The project SHALL have fallow installed as a devDependency                           | Pending |
| FAL-02 | The project SHALL have a `.fallowrc` configuration file at the project root          | Pending |
| FAL-03 | The project SHALL expose an `analyze` npm script that runs fallow                    | Pending |
| FAL-04 | The `analyze` script SHALL run fallow dead-code and fallow health checks             | Pending |
| FAL-05 | Fallow findings SHALL be reviewable by running the script locally or in CI           | Pending |
| FAL-06 | The `.fallowrc` configuration SHALL correctly target the `src/` directory            | Pending |
| FAL-07 | The configuration SHALL exclude non-source paths (e.g., `dist`, `docs`, `functions`) | Pending |

## Notes

- Fallow complements linting by catching dead code, duplication, and complexity that rules-based linters miss.
- This capability is additive — it does not change existing build or lint behavior.

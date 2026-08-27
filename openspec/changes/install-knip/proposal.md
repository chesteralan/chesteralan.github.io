# Proposal: Install Knip

## Why

As the project grows, unused dependencies and dead exports may accumulate. These add unnecessary bundle weight, increase install times, and make the dependency graph harder to reason about. Without a static analysis tool to detect them, these issues go unnoticed until they become significant.

Knip is a fast, lightweight tool that detects unused dependencies, unlisted dependencies, unused exports, and orphaned files. Integrating it into the CI pipeline ensures the project stays lean and maintainable.

## What Changes

- Install `knip` as a devDependency
- Create `knip.json` configuration file with project-specific entry points
- Add a `check:knip` script to `package.json` for running the analysis

## Capabilities

| Capability  | Description                                               |
| ----------- | --------------------------------------------------------- |
| knip-checks | Static analysis to detect unused deps, exports, and files |

## Impact

| File           | Change Type | Description                                              |
| -------------- | ----------- | -------------------------------------------------------- |
| `package.json` | Modified    | Added `knip` devDependency and `check:knip` script       |
| `knip.json`    | Added       | Knip configuration with entry points and ignore patterns |

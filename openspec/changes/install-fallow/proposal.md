# Proposal: Install Fallow

## Why

As the project grows, unused code, circular dependencies, and duplication can accumulate silently. Without automated detection, these issues go unnoticed and degrade maintainability, increase cognitive load, and inflate the codebase with dead paths.

Fallow is a static analysis tool for TypeScript/JavaScript that detects unused code, circular dependencies, duplication, and complexity hotspots. Integrating it into the workflow provides ongoing visibility into code health beyond what linting or formatting tools cover.

## What Changes

- Install `fallow` as a devDependency
- Create `.fallowrc` configuration file with project-specific settings
- Add an `analyze` script to `package.json` for running the analysis

## Capabilities

| Capability      | Description                                                         |
| --------------- | ------------------------------------------------------------------- |
| fallow-analysis | Static analysis for dead code, duplication, and complexity hotspots |

## Impact

| File           | Change Type | Description                                       |
| -------------- | ----------- | ------------------------------------------------- |
| `package.json` | Modified    | Added `fallow` devDependency and `analyze` script |
| `.fallowrc`    | Added       | Fallow configuration file                         |

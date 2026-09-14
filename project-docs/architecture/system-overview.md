# System Overview

## Tech Stack

| Layer | Technology | Version |
|-------|------------|---------|
| Frontend | React | 19.2.6 |
| Language | TypeScript | 6.0.2 |
| Build Tool | Vite | 8.0.12 |
| Styling | Tailwind CSS | 3.4.19 |
| Routing | React Router | 7.15.1 |
| Icons | Lucide React | 1.16.0 |
| Testing | Vitest | 4.1.11 |
| Linting | ESLint | 10.3.0 |
| Formatting | Prettier | 3.9.6 |

## Architecture

```
src/
├── components/     # Reusable UI components
├── pages/          # Route-based page components
├── data/           # Static content data
├── lib/            # Utility functions
├── App.tsx         # Route configuration
├── main.tsx        # Entry point
└── index.css       # Global styles
```

## Data Flow

1. Static data from `src/data/portfolio.ts`
2. Component-based rendering with React
3. Client-side routing with React Router
4. Tailwind CSS for styling
5. Firebase for hosting and contact form backend

## Build Process

- Development: `yarn dev` (Vite dev server)
- Production: `yarn build` (TypeScript + Vite build)
- Testing: `yarn test` (Vitest)
- Linting: `yarn lint` (ESLint)
- Formatting: `yarn format` (Prettier)

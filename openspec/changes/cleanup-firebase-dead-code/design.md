# Design: cleanup-firebase-dead-code

## Current State

`src/lib/firebase.ts` contains:

```ts
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getFunctions } from 'firebase/functions';

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const functions = getFunctions(app);
export default app;
```

No other file in `src/` imports from `firebase.ts`. The Contact form (`src/pages/Contact.tsx:32-34`) constructs the Cloud Function URL via string interpolation and calls it with `fetch()`.

## Approach

**Delete `src/lib/firebase.ts` entirely.**

Rationale:

- `initializeApp` is only used inside `firebase.ts` to create the `app` instance that feeds `getFirestore`/`getFunctions`
- Since `app` itself is never imported externally, the entire initialization chain is dead
- The Contact form does not use any Firebase SDK — it uses the HTTP endpoint directly
- Deleting the file eliminates all Firebase SDK imports from the frontend bundle

Then remove the `firebase` package:

```bash
yarn remove firebase
```

This eliminates the `firebase/app`, `firebase/firestore`, and `firebase/functions` modules from the bundle (~280 kB gzipped savings).

## Alternatives Considered

1. **Keep firebase.ts, remove only `db`/`functions`**: Retains `initializeApp` + config for potential future use. Rejected because unused `initializeApp` still pulls in `firebase/app` (~40 kB gzipped) for no benefit.

2. **Keep file but lazy-init**: Not applicable — there is no consumer to trigger lazy init.

## Verification

- `grep -r "from.*firebase" src/` returns zero matches after the change
- `yarn build` succeeds with no missing module errors
- `yarn lint` passes
- Contact form continues to work (it never used the SDK)

# Proposal: cleanup-firebase-dead-code

## Why

`src/lib/firebase.ts` imports `initializeApp`, `getFirestore`, and `getFunctions` from the Firebase SDK and exports `db` (Firestore instance), `functions` (Cloud Functions instance), and `app` (default). However, **none of these exports are imported anywhere in the application**. The Contact form uses a direct `fetch()` call to the Firebase Cloud Function HTTP endpoint rather than the Firebase SDK. The `firebase` npm package (~280 kB gzipped) is a dependency solely to support this dead code.

## What Changes

Remove unused Firebase SDK initialization and exports from `src/lib/firebase.ts`. Optionally remove the `firebase` dependency from `package.json` if no Firebase SDK usage remains.

## Capabilities

- `firebase-cleanup`

## Impact

- `src/lib/firebase.ts` — remove unused imports (`getFirestore`, `getFunctions`) and exports (`db`, `functions`, `app`), or delete the file entirely
- `package.json` — remove `firebase` from `dependencies` if no longer used

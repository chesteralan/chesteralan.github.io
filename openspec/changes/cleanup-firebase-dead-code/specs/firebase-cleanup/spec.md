# Capability: firebase-cleanup

## ADDED Requirements

### firebase-cleanup/1 — Remove unused Firebase SDK exports

**firebase.ts SHALL only export symbols that are imported by other modules in the application.**

- `src/lib/firebase.ts` SHALL NOT export `db` (Firestore instance) if no module imports it
- `src/lib/firebase.ts` SHALL NOT export `functions` (Cloud Functions instance) if no module imports it
- `src/lib/firebase.ts` SHALL NOT export `app` (default) if no module imports it
- The `getFirestore` and `getFunctions` imports from `firebase/firestore` and `firebase/functions` SHALL be removed if their results are not consumed

### firebase-cleanup/2 — Remove dead file or trim to minimal

If no Firebase SDK API is used anywhere in the frontend (currently the case — Contact form uses `fetch()` directly):

- `src/lib/firebase.ts` SHALL be removed entirely, OR
- If retained for future use, it SHALL contain only `initializeApp` and a default export, with no Firestore or Functions clients

### firebase-cleanup/3 — Dependency cleanup

- The `firebase` package in `package.json` dependencies SHALL be removed if no file in `src/` imports from any `firebase/*` module after this change

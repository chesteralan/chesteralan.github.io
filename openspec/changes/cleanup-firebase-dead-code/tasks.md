# Tasks: cleanup-firebase-dead-code

- [x] Verify no file in `src/` imports from `src/lib/firebase.ts` (grep confirmation)
- [x] Delete `src/lib/firebase.ts`
- [x] Run `yarn remove firebase` to drop the Firebase SDK dependency
- [x] Run `yarn build` — confirm no build errors from removed module
- [x] Run `yarn lint` — confirm no lint errors
- [x] Verify Contact form still submits correctly (it uses `fetch()`, not the SDK)
- [x] Confirm bundle size reduction via `yarn build` output or bundle analyzer

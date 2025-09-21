# React Client

Vite + React + TypeScript + Sass application with a component-driven structure and theming via skins.

## Scripts

- `npm run dev` — Start Vite dev server on port 5173.
- `npm run build` — Type-check and build production assets.
- `npm run preview` — Preview the production build.
- `npm run test` — Run component tests with Vitest + Testing Library.
- `npm run lint` — Lint TypeScript and TSX files.
- `npm run stop` — Free port 5173 when needed.

## Structure

Key directories inside `src/`:

- `assets/` — Static assets.
- `components/` — Atomic design folders (`atoms`, `molecules`, `organisms`).
- `layouts/` — Page wrappers defining layout chrome.
- `pages/` — Route-aligned feature folders with their own translations and styles.
- `configuration/` — Site-wide UI settings (`ui.config.json` and typed helpers).
- `skins/` — Sass skins. Ships with `defaultSkin` (cool neutral) and `beigeSkin` (warm neutral). Swap by updating the `@use` line in `src/styles/index.scss`.
- `translations/` — Global translation bundles (`common`).
- `styles/` — Global styles entry point.

Use the `skins/defaultSkin` folder as the contract for theming variables.

# Architecture Overview

This boilerplate is split into two workspaces:

- **client/** — Vite + React SPA with Sass-based skins, atomic components, and i18next translations.
- **server/** — Express + TypeScript API server with layered folders for routes, controllers, services, and middlewares.

## Development Workflow

1. Install dependencies from the repository root with `npm install`.
2. Run `npm run dev` to boot both servers.
   - Client runs on [http://localhost:5173](http://localhost:5173)
   - Server runs on [http://localhost:2000](http://localhost:2000)
3. Stop both servers with `npm run stop` (uses `kill-port`).

## Frontend Notes

- Organise UI primitives in `components/atoms`, `components/molecules`, and `components/organisms`.
- Layouts wrap pages and own global chrome (header/footer/sidebar).
- Page folders encapsulate their translations, styles, and child views.
- `configuration/` centralises UI defaults in JSON for theme, skin, and language settings (see `docs/ui-customisation.md`).
- Skins export CSS variables for theming and dark/light mode toggling.
- Available skins: `defaultSkin` (cool neutral) and `beigeSkin` (warm neutral). Swap skins by changing the `@use` import in `src/styles/index.scss`.

## Backend Notes

- Routes live under `src/routes` and mount into `/api`.
- Controllers coordinate HTTP requests and delegate to services.
- Services hold business logic (placeholder implementations included).
- Middlewares handle logging, error handling, and cross-cutting concerns.

Extend this document with project-specific decisions as you adapt the boilerplate.

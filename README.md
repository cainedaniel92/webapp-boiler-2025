# Webapp Boiler 2025

A React + Node.js starter template with opinionated structure for front-end and back-end projects. The template ships with a granular component architecture, layout system, theming via Sass skins, and an Express API server.

## Workspaces

- `client` — Vite + React + TypeScript + Sass + i18next.
- `server` — Express + TypeScript with layered architecture.

Use `npm install` in the repository root to install all workspace dependencies. Use `npm run dev` to start both servers (client on port 5173, server on port 2000). Copy `.env.example` files in `client/` and `server/` to create environment setups quickly.

## Scripts

- `npm run dev` — Start client and server concurrently.
- `npm run build` — Build client and server.
- `npm run lint` — Run linters in both workspaces.
- `npm run test` — Run test suites in both workspaces.
- `npm run client:start` / `npm run server:start` — Start either workspace individually.
- `npm run client:stop` / `npm run server:stop` — Stop the respective workspace (uses `kill-port`).
- `npm run lint:fix` — Auto-fix lint warnings where possible in both workspaces.
- `npm run format` — Run Prettier formatting across the repo.

### Customising the UI

- Update `client/src/configuration/ui.config.json` to change the default skin (`defaultSkin` or `beigeSkin`), theme mode, content width, and supported languages. Access at runtime via helpers exported from `client/src/configuration/index.ts`.
- To add a new skin, copy one of the folders under `client/src/skins/`, adjust the colour tokens, and reference it in `ui.config.json` and `client/src/styles/index.scss`.
- Page-level translations live beside each page (see `client/src/pages/Home/translations/`). Use `registerNamespace` to load additional locales on demand.

### Deployment notes

- `npm run build` compiles both workspaces. The client outputs to `client/dist/` (adaptable for Netlify/Vercel) and the server compiles into `server/dist/` for Node hosting or containerisation.
- A sample `server/.env.example` is provided; copy it to `.env` and adjust `PORT`/`CLIENT_URL` for production.
- For container workflows, add a Dockerfile and reuse the provided scripts. A skeleton `docker-compose.yml` is easy to bolt on if you plan to ship a database alongside the API.

### Repository hygiene

- `.github/` contains issue/PR templates and Dependabot configuration so GitHub projects created from this template inherit consistent workflows.
- Run `npm run lint:fix` and `npm run format` before raising pull requests to keep automated checks green.
- Sample tests exist in both workspaces (`ThemeToggle`, `NotFoundPage`, and `auth` route) to demonstrate recommended testing patterns. Extend them as you build new features.
- If you use Git hooks, add Husky + lint-staged and point them at the `lint:fix` and `format` scripts for pre-commit validation.

## Template Usage

1. Create a GitHub repository from this template (Settings ➜ Template repository).
2. Click **Use this template** to generate a new project, or run `gh repo create my-app --template you/webapp-boiler-2025`.
3. Install dependencies and update the `README.md` with project-specific instructions.

```bash
npx degit cainedaniel92/webapp-boiler-2025 my-new-app
pnpm i && pnpm dev
```

See `docs/architecture.md` for a high-level overview and `docs/ui-customisation.md` for theming/config notes.

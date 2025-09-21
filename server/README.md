# API Server

TypeScript Express server that powers the boilerplate backend. It exposes REST routes under `/api` and provides layered folders for controllers, services, and middlewares.

## Scripts

- `npm run dev` — Start the watcher with `tsx` on port 2000.
- `npm run build` — Compile TypeScript into `dist/`.
- `npm start` — Run the compiled server.
- `npm test` — Execute Vitest integration tests.
- `npm run stop` — Stop the dev server by freeing port 2000.

## Environment

Copy `.env.example` to `.env` and update values as needed.

```bash
cp .env.example .env
```

The default client URL is `http://localhost:5173` so cross-origin requests from the React app work out of the box.

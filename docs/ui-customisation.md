# UI Customisation Guide

This template centralises front-end settings so you can rebrand quickly.

## Configuration file

`client/src/configuration/ui.config.json` controls:

- `theme.defaultMode` — Initial theme (`light` or `dark`).
- `theme.defaultSkin` — Which skin to load (`defaultSkin`, `beigeSkin`, or your custom skin).
- `internationalization` — Default and supported language codes.
- `layout` — Basic layout constraints (content width, padding).

Use the helpers in `client/src/configuration/index.ts` to read these values at runtime. They ensure the JSON stays type-safe.

## Adding skins

1. Duplicate an existing folder in `client/src/skins/` (for example `defaultSkin`).
2. Update `_colors.scss` with your palette for light and dark themes.
3. Import the new skin in `client/src/styles/index.scss` with a unique namespace.
4. Add the skin name to `ui.config.json > theme.availableSkins` and set `defaultSkin` if you want it to load by default.

Skins rely on the `data-skin` attribute applied to `<html>`. The bootstrapping code in `client/src/main.tsx` reads `ui.config.json` and sets it automatically.

## Extending translations

Each page stores its own translations. Use `registerNamespace(namespace, resources)` to register new bundles lazily. For global copy, extend `client/src/translations/`.

## Theme toggle behaviour

`ThemeToggle` respects three tiers of preference:

1. Explicit user selection stored in `localStorage`.
2. System preference (`prefers-color-scheme`) when `allowSystemPreference` is true.
3. The fallback defined in `ui.config.json`.

Adjust the configuration file when shipping the template to tailor the initial experience without touching code.

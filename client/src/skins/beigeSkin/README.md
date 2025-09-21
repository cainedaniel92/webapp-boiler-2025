# Beige Skin

Warm neutral palette with soft beige tones for light mode and a rich espresso treatment for dark mode. The skin exposes the same contract as `defaultSkin` so you can swap without touching component code.

## Usage

1. Import the skin entry file in `src/styles/index.scss` instead of the default skin:

```scss
@use '../skins/beigeSkin/app';
```

2. (Optional) If you plan to allow runtime skin switching, consider moving these `@use` statements into their own files and conditionally loading them during your build process.

The Sass partials mirror the structure of other skins:

- `_colors.scss` — Light/dark colour tokens.
- `_variables.scss` — Primitive values (radii, shadows, etc.).
- `_mixins.scss` — Shared mixins like focus rings.
- `_typography.scss` — Font and weight tokens.
- `_scaffolding.scss` — Structural tokens for radius/shadow.

Because tokens are exposed via CSS variables, all components automatically pick up the new palette once the skin is active.

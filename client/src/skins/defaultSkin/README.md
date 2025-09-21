# Default Skin

The default skin defines the base visual language for the boilerplate. It exposes theme tokens via CSS variables so you can swap colour palettes or typography without touching component code.

## Files

- `app.scss` — Entry point that wires variables and mixins into CSS variables.
- `_colors.scss` — Light and dark theme palettes.
- `_mixins.scss` — Shared Sass mixins (focus rings, etc.).
- `_typography.scss` — Font families, sizes, and weights.
- `_variables.scss` — Primitive values used across tokens.
- `_scaffolding.scss` — Structural design tokens (radius, shadows).

Create new skins by copying this folder and updating the palette while keeping the same contract of CSS custom properties.

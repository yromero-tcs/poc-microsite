# @poc-microsite/content-utils

Excel ↔ JSON pipelines for microsite **copy** and **image path** config.

## Per-client layout

```
{client}/data/
  landing-page.content.xlsx
  images.xlsx
{client}/src/content/
  landing-page.content.json   # generated
  landing-page.ts             # generated barrel
{client}/src/config/
  images.config.json          # generated
  images.ts                   # generated barrel
{client}/public/images/       # binary assets (not managed by Excel)
```

Default client: `accenture/chemicals`.

## Workflow

1. Edit `{client}/data/landing-page.content.xlsx` and/or `{client}/data/images.xlsx`.
2. Add or replace files under `{client}/public/images/` when changing image paths.
3. From monorepo root:

```bash
npm run config:import
# or individually:
npm run content:import
npm run images:import
```

4. Commit generated `.json` and `.ts` barrels.
5. `npm run build --workspace=accenture-chemicals`

## Bootstrap from existing TS

```bash
npm run content:export
npm run images:export
```

## Client flag

```bash
npm run content:import -- --client accenture/chemicals
```

## SectionLabel variants (app code)

- `emphasis` — primary brand accent label
- `on-dark` — light text on dark backgrounds
- `muted` — subdued label on light sections

## Validation

- Content: Zod schema; `LeaderMembers.imageKey` must exist in `images.config.json`.
- Images: unique keys, paths must start with `./images/`, files must exist under `public/images/`.

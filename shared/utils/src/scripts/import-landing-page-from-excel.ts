import fs from 'node:fs/promises';
import path from 'node:path';
import { resolveClientPaths } from '../client-paths.js';
import { readLandingPageWorkbook } from '../excel/landing-page/read-workbook.js';
import { writeContentBarrel } from '../generate-barrels.js';
import { loadImagesConfig } from '../load-landing-page.js';
import { parseArgs } from '../parse-args.js';
import { landingPageContentSchema } from '../schema/landing-page.js';
import { validateLeaderImageKeys } from '../validate.js';

const { client } = parseArgs();
const paths = resolveClientPaths(client);

const raw = await readLandingPageWorkbook(paths.contentExcel);
const parsed = landingPageContentSchema.safeParse(raw);

if (!parsed.success) {
  console.error('Content validation failed:');
  for (const issue of parsed.error.issues) {
    console.error(`  ${issue.path.join('.')}: ${issue.message}`);
  }
  process.exit(1);
}

let images: Record<string, string> = {};
try {
  images = await loadImagesConfig(paths.imagesJson, paths.imagesBarrel);
} catch {
  console.warn('Warning: images config not found; skipping imageKey validation');
}

const imageKeyErrors = validateLeaderImageKeys(parsed.data, images);
if (imageKeyErrors.length > 0) {
  console.error('Content import failed:');
  for (const err of imageKeyErrors) console.error(`  ${err}`);
  process.exit(1);
}

await fs.mkdir(path.dirname(paths.contentJson), { recursive: true });
await fs.writeFile(paths.contentJson, `${JSON.stringify(parsed.data, null, 2)}\n`, 'utf8');
await writeContentBarrel(paths.contentBarrel);

console.log(`Imported landing page content to ${paths.contentJson}`);

import fs from 'node:fs/promises';
import path from 'node:path';
import { resolveClientPaths } from '../client-paths.js';
import { readImagesWorkbook } from '../excel/images/read-workbook.js';
import { writeImagesBarrel } from '../generate-barrels.js';
import { parseArgs } from '../parse-args.js';
import { clientImagesSchema } from '../schema/images.js';
import { validateImagesAsync } from '../validate.js';

const { client } = parseArgs();
const paths = resolveClientPaths(client);

const raw = await readImagesWorkbook(paths.imagesExcel);
const parsed = clientImagesSchema.safeParse(raw);

if (!parsed.success) {
  console.error('Images validation failed:');
  for (const issue of parsed.error.issues) {
    console.error(`  ${issue.path.join('.')}: ${issue.message}`);
  }
  process.exit(1);
}

const fileErrors = await validateImagesAsync(parsed.data, paths);
if (fileErrors.length > 0) {
  console.error('Images import failed:');
  for (const err of fileErrors) console.error(`  ${err}`);
  process.exit(1);
}

await fs.mkdir(path.dirname(paths.imagesJson), { recursive: true });
await fs.writeFile(paths.imagesJson, `${JSON.stringify(parsed.data, null, 2)}\n`, 'utf8');
await writeImagesBarrel(paths.imagesBarrel);

console.log(`Imported images config to ${paths.imagesJson}`);

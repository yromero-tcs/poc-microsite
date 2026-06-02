import fs from 'node:fs/promises';
import { resolveClientPaths } from '../client-paths.js';
import { writeImagesWorkbook } from '../excel/images/write-workbook.js';
import { loadImagesConfig } from '../load-landing-page.js';
import { parseArgs } from '../parse-args.js';

const { client } = parseArgs();
const paths = resolveClientPaths(client);

await fs.mkdir(paths.dataDir, { recursive: true });

const images = await loadImagesConfig(paths.imagesJson, paths.imagesBarrel);
await writeImagesWorkbook(paths.imagesExcel, images);

console.log(`Exported images config to ${paths.imagesExcel}`);

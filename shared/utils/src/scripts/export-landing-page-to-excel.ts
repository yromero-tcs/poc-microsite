import fs from 'node:fs/promises';
import { resolveClientPaths } from '../client-paths.js';
import { writeLandingPageWorkbook } from '../excel/landing-page/write-workbook.js';
import { loadLandingPageContent } from '../load-landing-page.js';
import { parseArgs } from '../parse-args.js';

const { client } = parseArgs();
const paths = resolveClientPaths(client);

await fs.mkdir(paths.dataDir, { recursive: true });

const content = await loadLandingPageContent(paths.contentJson, paths.contentBarrel);
await writeLandingPageWorkbook(paths.contentExcel, content);

console.log(`Exported landing page content to ${paths.contentExcel}`);

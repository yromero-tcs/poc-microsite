import path from 'node:path';
import { fileURLToPath } from 'node:url';

const UTILS_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export const MONOREPO_ROOT = path.resolve(UTILS_ROOT, '../..');

export type ClientPaths = {
  clientRoot: string;
  contentExcel: string;
  contentJson: string;
  contentBarrel: string;
  imagesExcel: string;
  imagesJson: string;
  imagesBarrel: string;
  publicImagesDir: string;
  dataDir: string;
};

export function resolveClientPaths(clientId: string): ClientPaths {
  const clientRoot = path.resolve(MONOREPO_ROOT, clientId);
  const dataDir = path.join(clientRoot, 'data');

  return {
    clientRoot,
    dataDir,
    contentExcel: path.join(dataDir, 'landing-page.content.xlsx'),
    contentJson: path.join(clientRoot, 'src/content/landing-page.content.json'),
    contentBarrel: path.join(clientRoot, 'src/content/landing-page.ts'),
    imagesExcel: path.join(dataDir, 'images.xlsx'),
    imagesJson: path.join(clientRoot, 'src/config/images.config.json'),
    imagesBarrel: path.join(clientRoot, 'src/config/images.ts'),
    publicImagesDir: path.join(clientRoot, 'public/images'),
  };
}

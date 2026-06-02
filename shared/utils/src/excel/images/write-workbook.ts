import ExcelJS from 'exceljs';
import type { ClientImages } from '../../schema/images.js';
import { addReadmeSheet, setHeaderRow } from '../sheet-utils.js';

const DESCRIPTIONS: Record<string, string> = {
  accentureLogo: 'Header/footer Accenture logo',
  truechoiceLogo: 'Header/footer TrueChoice logo',
  heroImage: 'Hero section background',
  team02: 'Leader card photo (member 2)',
  team03: 'Leader card photo (member 3)',
};

export async function writeImagesWorkbook(filePath: string, images: ClientImages): Promise<void> {
  const workbook = new ExcelJS.Workbook();

  addReadmeSheet(workbook, [
    'Image path mappings (not binary files)',
    'Paths must start with ./images/',
    'Add files under the client public/images/ folder separately',
    'Run: npm run images:import -- --client <client-id>',
  ]);

  const sheet = workbook.addWorksheet('Images');
  setHeaderRow(sheet, ['key', 'path', 'description']);

  const keys = Object.keys(images).sort();
  for (const key of keys) {
    sheet.addRow([key, images[key], DESCRIPTIONS[key] ?? '']);
  }

  await workbook.xlsx.writeFile(filePath);
}

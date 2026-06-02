import ExcelJS from 'exceljs';
import type { ClientImages } from '../../schema/images.js';
import { cellText, col, getSheet, readRows } from '../sheet-utils.js';

export async function readImagesWorkbook(filePath: string): Promise<ClientImages> {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(filePath);

  const sheet = getSheet(workbook, 'Images');
  const headers = readRows(sheet);
  const images: ClientImages = {};

  sheet.eachRow((row, rowNumber) => {
    if (rowNumber === 1) return;
    const key = cellText(row.getCell(col(headers, 'key', 'Images')).value);
    if (!key) return;
    const path = cellText(row.getCell(col(headers, 'path', 'Images')).value);
    if (!path) return;
    images[key] = path;
  });

  return images;
}

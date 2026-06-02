import type ExcelJS from 'exceljs';

export function cellText(value: ExcelJS.CellValue): string {
  if (value == null) return '';
  if (typeof value === 'string') return value.trim();
  if (typeof value === 'number' || typeof value === 'boolean') return String(value);
  if (value instanceof Date) return value.toISOString();
  if (typeof value === 'object' && 'text' in value && typeof value.text === 'string') {
    return value.text.trim();
  }
  if (typeof value === 'object' && 'richText' in value && Array.isArray(value.richText)) {
    return value.richText.map((part) => part.text ?? '').join('').trim();
  }
  return String(value).trim();
}

export function parseIndex(value: ExcelJS.CellValue, sheet: string, row: number): number {
  const text = cellText(value);
  const num = Number(text);
  if (!Number.isInteger(num) || num < 0) {
    throw new Error(`${sheet} row ${row}: invalid index "${text}"`);
  }
  return num;
}

export function parseBoolean(value: ExcelJS.CellValue): boolean {
  const text = cellText(value).toLowerCase();
  return text === 'true' || text === '1' || text === 'yes' || text === 'y';
}

export function getSheet(workbook: ExcelJS.Workbook, name: string): ExcelJS.Worksheet {
  const sheet = workbook.getWorksheet(name);
  if (!sheet) throw new Error(`Missing worksheet "${name}"`);
  return sheet;
}

export function readRows(sheet: ExcelJS.Worksheet): Map<string, number> {
  const headerRow = sheet.getRow(1);
  const map = new Map<string, number>();
  headerRow.eachCell((cell, col) => {
    const key = cellText(cell.value).toLowerCase();
    if (key) map.set(key, col);
  });
  return map;
}

export function col(headers: Map<string, number>, name: string, sheet: string): number {
  const colNum = headers.get(name.toLowerCase());
  if (!colNum) throw new Error(`${sheet}: missing column "${name}"`);
  return colNum;
}

export function setHeaderRow(sheet: ExcelJS.Worksheet, headers: string[]): void {
  sheet.addRow(headers);
  sheet.getRow(1).font = { bold: true };
}

export function addReadmeSheet(workbook: ExcelJS.Workbook, lines: string[]): void {
  const sheet = workbook.addWorksheet('_README');
  lines.forEach((line) => sheet.addRow([line]));
  sheet.getColumn(1).width = 100;
}

/**
 * Accenture Chemicals brand palette.
 * Imported by tailwind.config.ts; shared components expect these `brand.*` tokens.
 */
export const brandColors = {
  primary: '#3b006f',
  secondary: '#8000c3',
  'accent-light': '#f4daff',
  'surface-dark': '#161022',
  'surface-footer': '#1f003f',
  'surface-tint': '#2b2438',
  'surface-light': '#f5f5f5',
  page: '#fcf8f9',
  text: '#333333',
  muted: '#b7b2c1',
  'text-bullet': '#4b4451',
  'border-muted': '#cdc3d2',
} as const;

export type BrandColorToken = keyof typeof brandColors;

const DEFAULT_CLIENT = 'accenture/chemicals';

export function parseArgs(argv = process.argv.slice(2)): { client: string } {
  return { client: parseClientArg(argv) };
}

export function parseClientArg(argv = process.argv.slice(2)): string {
  const idx = argv.indexOf('--client');
  if (idx === -1) return DEFAULT_CLIENT;
  const value = argv[idx + 1];
  if (!value || value.startsWith('--')) {
    throw new Error('Missing value for --client (e.g. --client accenture/chemicals)');
  }
  return value.replace(/\\/g, '/').replace(/\/$/, '');
}

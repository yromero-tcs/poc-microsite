import fs from 'node:fs/promises';
import path from 'node:path';
import type { ClientPaths } from './client-paths.js';
import type { ClientImages } from './schema/images.js';
import type { LandingPageContent } from './schema/landing-page.js';

const IMAGE_PATH_PREFIX = './images/';

export async function validateImagesAsync(images: ClientImages, paths: ClientPaths): Promise<string[]> {
  const errors: string[] = [];
  const keys = Object.keys(images);

  if (keys.length === 0) {
    errors.push('Images: at least one row required');
    return errors;
  }

  const seen = new Set<string>();
  for (const key of keys) {
    if (seen.has(key)) errors.push(`Images: duplicate key "${key}"`);
    seen.add(key);

    const imagePath = images[key];
    if (!imagePath.startsWith(IMAGE_PATH_PREFIX)) {
      errors.push(`Images key "${key}": path must start with "${IMAGE_PATH_PREFIX}"`);
    }

    const filename = imagePath.replace(/^\.\/images\//, '');
    const publicFile = path.join(paths.publicImagesDir, filename);
    try {
      await fs.access(publicFile);
    } catch {
      errors.push(`Images key "${key}": file not found at public/images/${filename}`);
    }
  }

  return errors;
}

export function validateLeaderImageKeys(
  content: LandingPageContent,
  images: ClientImages,
): string[] {
  const errors: string[] = [];
  const imageKeys = new Set(Object.keys(images));

  content.leadersContent.members.forEach((member, row) => {
    if (!member.imageKey) return;
    if (!imageKeys.has(member.imageKey)) {
      errors.push(
        `LeaderMembers row ${row + 2}: imageKey "${member.imageKey}" not found in images config`,
      );
    }
  });

  return errors;
}

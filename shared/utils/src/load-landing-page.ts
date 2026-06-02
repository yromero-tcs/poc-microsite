import fs from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import type { LandingPageContent } from './schema/landing-page.js';

export async function loadLandingPageContent(
  contentJson: string,
  contentBarrel: string,
): Promise<LandingPageContent> {
  try {
    const raw = await fs.readFile(contentJson, 'utf8');
    return JSON.parse(raw) as LandingPageContent;
  } catch {
    const mod = await import(pathToFileURL(contentBarrel).href);
    return {
      navigationLinks: [...mod.navigationLinks],
      heroContent: { ...mod.heroContent, tags: [...mod.heroContent.tags] },
      overviewContent: {
        ...mod.overviewContent,
        metrics: mod.overviewContent.metrics.map((m: { value: string; label: string }) => ({ ...m })),
        cards: mod.overviewContent.cards.map((c: { title: string; body: string }) => ({ ...c })),
      },
      solutionsContent: {
        ...mod.solutionsContent,
        cards: mod.solutionsContent.cards.map(
          (c: {
            title: string;
            body: string;
            bullets: string[];
            stats: { value: string; label: string; fullWidth?: boolean }[];
          }) => ({
            title: c.title,
            body: c.body,
            bullets: [...c.bullets],
            stats: c.stats.map((s) => ({ ...s })),
          }),
        ),
      },
      caseStudiesContent: {
        ...mod.caseStudiesContent,
        studies: mod.caseStudiesContent.studies.map(
          (s: {
            id: string;
            title: string;
            summary: string;
            challenge: string;
            metrics: { value: string; label: string }[];
            approach: string[];
          }) => ({
            id: s.id,
            title: s.title,
            summary: s.summary,
            challenge: s.challenge,
            metrics: s.metrics.map((m: { value: string; label: string }) => ({ ...m })),
            approach: [...s.approach],
          }),
        ),
      },
      aiToolsContent: {
        ...mod.aiToolsContent,
        features: mod.aiToolsContent.features.map((f: { title: string; body: string }) => ({ ...f })),
        whyItems: mod.aiToolsContent.whyItems.map((w: { label: string; body: string }) => ({ ...w })),
      },
      productShowcaseContent: {
        ...mod.productShowcaseContent,
        tabs: mod.productShowcaseContent.tabs.map(
          (t: { id: string; label: string; title: string; intro: string; bullets: string[] }) => ({
            id: t.id,
            label: t.label,
            title: t.title,
            intro: t.intro,
            bullets: [...t.bullets],
          }),
        ),
      },
      leadersContent: {
        ...mod.leadersContent,
        members: mod.leadersContent.members.map(
          (m: { name: string; title: string; bio: string; imageKey?: string }) => ({
            name: m.name,
            title: m.title,
            bio: m.bio,
            ...(m.imageKey ? { imageKey: m.imageKey } : {}),
          }),
        ),
      },
      ctaContent: { ...mod.ctaContent },
      footerContent: { ...mod.footerContent },
    };
  }
}

export async function loadImagesConfig(
  imagesJson: string,
  imagesBarrel: string,
): Promise<Record<string, string>> {
  try {
    const raw = await fs.readFile(imagesJson, 'utf8');
    return JSON.parse(raw) as Record<string, string>;
  } catch {
    const mod = await import(pathToFileURL(imagesBarrel).href);
    const images = mod.images as Record<string, string>;
    return Object.fromEntries(Object.entries(images));
  }
}

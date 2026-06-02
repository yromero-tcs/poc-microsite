import { z } from 'zod';

const metricSchema = z.object({
  value: z.string(),
  label: z.string(),
});

const solutionStatSchema = metricSchema.extend({
  fullWidth: z.boolean().optional(),
});

const solutionCardSchema = z.object({
  title: z.string(),
  body: z.string(),
  bullets: z.array(z.string()),
  stats: z.array(solutionStatSchema),
});

const caseStudySchema = z.object({
  id: z.string(),
  title: z.string(),
  summary: z.string(),
  challenge: z.string(),
  metrics: z.array(metricSchema),
  approach: z.array(z.string()),
});

export const landingPageContentSchema = z.object({
  navigationLinks: z.array(
    z.object({
      id: z.string(),
      label: z.string(),
      href: z.string(),
    }),
  ),
  heroContent: z.object({
    headlineLine1: z.string(),
    headlineLine2: z.string(),
    subheadline: z.string(),
    tags: z.array(z.string()),
    primaryCta: z.string(),
    secondaryCta: z.string(),
  }),
  overviewContent: z.object({
    label: z.string(),
    heading: z.string(),
    body: z.string(),
    metrics: z.array(metricSchema),
    cards: z.array(z.object({ title: z.string(), body: z.string() })),
  }),
  solutionsContent: z.object({
    label: z.string(),
    heading: z.string(),
    body: z.string(),
    cards: z.array(solutionCardSchema),
  }),
  caseStudiesContent: z.object({
    label: z.string(),
    heading: z.string(),
    studies: z.array(caseStudySchema),
  }),
  aiToolsContent: z.object({
    label: z.string(),
    heading: z.string(),
    body: z.string(),
    features: z.array(z.object({ title: z.string(), body: z.string() })),
    whyHeading: z.string(),
    whyItems: z.array(z.object({ label: z.string(), body: z.string() })),
  }),
  productShowcaseContent: z.object({
    label: z.string(),
    heading: z.string(),
    tabs: z.array(
      z.object({
        id: z.string(),
        label: z.string(),
        title: z.string(),
        intro: z.string(),
        bullets: z.array(z.string()),
      }),
    ),
  }),
  leadersContent: z.object({
    label: z.string(),
    heading: z.string(),
    members: z.array(
      z.object({
        name: z.string(),
        title: z.string(),
        bio: z.string(),
        imageKey: z.string().optional(),
      }),
    ),
  }),
  ctaContent: z.object({
    heading: z.string(),
    button: z.string(),
  }),
  footerContent: z.object({
    copyright: z.string(),
  }),
});

export type LandingPageContent = z.infer<typeof landingPageContentSchema>;

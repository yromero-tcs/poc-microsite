import { z } from 'zod';

export const clientImagesSchema = z.record(z.string().min(1), z.string().min(1));

export type ClientImages = z.infer<typeof clientImagesSchema>;

export const imageRowSchema = z.object({
  key: z.string().min(1),
  path: z.string().min(1),
  description: z.string().optional(),
});

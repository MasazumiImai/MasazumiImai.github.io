import { defineCollection, reference } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

const localized = z.union([z.string(), z.object({ en: z.string(), ja: z.string() })]);
const yearMonth = z.string().regex(/^\d{4}-\d{2}$/);

const publications = defineCollection({
  loader: file('src/data/publications.yaml'),
  schema: z.object({
    // 'domestic' is shown only on the Japanese pages
    type: z.enum(['journal', 'international', 'domestic', 'preprint']),
    title: z.string(),
    authors: z.array(z.string()),
    venue: z.string(),
    details: z.string().optional(),
    year: z.number().int(),
    awards: z.array(z.string()).default([]),
    selected: z.boolean().default(false),
    links: z
      .object({
        pdf: z.url(),
        doi: z.url(),
        arxiv: z.url(),
        video: z.url(),
        code: z.url(),
        project: z.url(),
      })
      .partial()
      .default({}),
  }),
});

const news = defineCollection({
  loader: file('src/data/news.yaml'),
  schema: z.object({
    date: z.coerce.date(),
    text: localized,
    link: z.string().optional(),
  }),
});

const cv = defineCollection({
  loader: file('src/data/cv.yaml'),
  schema: z.object({
    section: z.enum(['education', 'experience', 'awards', 'scholarships', 'skills']),
    start: yearMonth.optional(),
    end: z.union([z.literal('present'), yearMonth]).optional(),
    title: localized,
    org: localized.optional(),
    note: localized.optional(),
    researchProject: z.object({ title: localized, url: z.url() }).optional(),
  }),
});

const research = defineCollection({
  loader: glob({ base: './src/content/research', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    order: z.number().default(0),
    image: z.string().optional(),
    publications: z.array(reference('publications')).default([]),
  }),
});

export const collections = { publications, news, cv, research };

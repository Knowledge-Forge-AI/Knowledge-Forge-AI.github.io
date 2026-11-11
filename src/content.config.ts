import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { blogSchema } from 'starlight-blog/schema';

export const collections = {
  journal: defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/journal' }),
    schema: z.object({
      title: z.string(), description: z.string(),
      date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/), updated: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
      category: z.enum(['APGR', 'Common Lore Index', 'Theme Forge', 'DINAS']),
      kind: z.enum(['release', 'milestone']), releases: z.array(z.string()),
      sources: z.array(z.object({ label: z.string(), url: z.string().url() })),
    }),
  }),
	docs: defineCollection({
		loader: docsLoader(), schema: docsSchema({
			extend: (context) => blogSchema(context), // 2. Inject blog properties into docs
		})
	}),
};

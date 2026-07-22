// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    site: 'https://www.knowledge-forge.ai',
    integrations: [starlight({
        title: 'Knowledge Forge AI',
        social: [
            { icon: 'pen', label: 'Sam Lair', href: 'https://sam-lair.knowledge-forge.ai'},
            { icon: 'github', label: 'GitHub', href: 'https://github.com/Knowledge-Forge-AI' }
        ],
        sidebar: [
            {
                label: 'Guides',
                items: [
                    // Each item here is one entry in the navigation menu.
                    { label: 'Example Guide', slug: 'guides/example' },
                ],
            },
            {
                label: 'Reference',
                items: [{ autogenerate: { directory: 'reference' } }],
            },

        ],
        plugins: [
            starlightBlog(),
        ],
    }), react()],
});
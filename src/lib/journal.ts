import { getCollection } from 'astro:content';

export const formatDate = (date: string) => new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${date}T12:00:00Z`));

export async function journalEntries() {
  const posts = await getCollection('journal');
  const entries = posts.map(post => ({ ...post.data, href: `/journal/${post.id}/` }));
  entries.push({
    title: 'Introducing Agentic Praxis Grimoire v0.3.0',
    description: 'Nineteen public skills bring routing, repository-guidance synthesis and language-aware engineering into the original process core.',
    date: '2026-07-22', updated: '2026-07-22', category: 'APGR', kind: 'release',
    href: '/blog/knowledge-forge-apg-v030-release/',
    releases: ['agentic-praxis-grimoire@v0.3.0'], sources: [],
  });
  return entries.sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title));
}

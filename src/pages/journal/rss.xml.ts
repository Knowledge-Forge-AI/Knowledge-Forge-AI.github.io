import { journalEntries } from '../../lib/journal';

const escapeXML = (value: string) => value.replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' }[character]!));

export async function GET() {
  const entries = await journalEntries();
  const items = entries.map(entry => {
    const url = `https://www.knowledge-forge.ai${entry.href}`;
    return `<item><title>${escapeXML(entry.title)}</title><link>${url}</link><guid isPermaLink="true">${url}</guid><pubDate>${new Date(`${entry.date}T00:00:00Z`).toUTCString()}</pubDate><description>${escapeXML(entry.description)}</description><category>${escapeXML(entry.category)}</category></item>`;
  }).join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel><title>Knowledge Forge AI journal</title><link>https://www.knowledge-forge.ai/journal/</link><description>Release stories, project origins, and the work between.</description><language>en</language><atom:link href="https://www.knowledge-forge.ai/journal/rss.xml" rel="self" type="application/rss+xml"/>${items}</channel></rss>`, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}

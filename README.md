# Knowledge Forge AI

Source for [www.knowledge-forge.ai](https://www.knowledge-forge.ai/): the
organizational introduction, original Rei Ai mascot and public release journal.
Knowledge Forge AI builds inspectable tools for understanding repositories,
agent engineering, workstation composition and visual systems.

## Projects

- [Agentic Praxis Grimoire](https://github.com/Knowledge-Forge-AI/agentic-praxis-grimoire):
  deterministic toolkit and skills for bounded agent work.
- [RepoMap](https://github.com/Knowledge-Forge-AI/repo-map), in the process of
  rebranding to **Common Lore Index (CLOE)**: evidence-linked repository knowledge
  graphs. Existing repository, distribution and CLI identities remain unchanged.
- [Theme Forge](https://tfnf.knowledge-forge.ai/): Stellar Burst, Stellar Loom,
  Solar Sail, Nebular Fusion, STTN and CTTN; independently versioned engines,
  application and theme packages.
- [DINAS](https://github.com/Knowledge-Forge-AI/darwin-is-not-a-snowflake): the
  modular nix-darwin workstation framework that originally inspired RepoMap.
- [Release Starport 9](https://rs9.knowledge-forge.ai/) and
  [Theme Forge Packages](https://tf.rs9.knowledge-forge.ai/): downstream
  distribution and signed package-repository services.

Each project's own source, release records and documentation remain authoritative
for its current maturity, installation, compatibility and licensing.

## Site structure

The site retains Astro 7.1.3, Starlight 0.41.4 and starlight-blog 0.28.0 from the
existing lockfile. Custom static Astro pages provide the organization and journal
layout; the original Starlight blog article and other existing routes remain
available. No React hydration is needed for the new pages.

- `src/pages/`: home, journal index, article route, RSS feed and licensing overview.
- `src/content/journal/`: release-date posts and project milestones.
- `src/data/release-records.json`: public release-to-article inventory.
- `src/content/docs/blog/`: preserved original APG 0.3.0 article.
- `src/layouts/`, `src/components/`, `src/styles/`: shared site system.
- `public/rei-ai.webp`: original transparent organizational mascot artwork.
- `docs/editorial-policy.md`: source, date and release-status rules.
- `docs/rei-ai-art-direction.md`, `BRAND-ASSETS.md`: character and brand notes.

The light surface is tinted moss green; dark mode uses deep evergreen. Typography
uses local old-style serif and humanist-sans stacks with system fallbacks, with
no external font request. The mode preference shares Starlight's existing
same-origin preference key. Journal filtering works locally without an API,
analytics, account or remote search service.

## Build and deployment

Use Node.js 22.12 or newer and the committed npm lockfile:

```sh
npm ci --ignore-scripts
npm run build
```

The existing workflow builds and deploys main to GitHub Pages. This site change
does not build, sign or publish a product release. The configured custom domain
and environment protections remain repository settings, not source-controlled
credentials. Preview the generated static output before deployment and verify
the canonical HTTPS site after deployment.

Repository instructions describe the maintained development-server lifecycle.
Do not commit generated dist, .astro, package caches or local evidence.

## License

Rei Ai artwork and organizational brand assets are excluded from the AGPL grant;
no separate artwork license is granted here. See BRAND-ASSETS.md.

Original website software and editorial text are offered under the GNU Affero General
Public License v3.0 or later (**AGPL-3.0-or-later**). See [LICENSE](LICENSE).

Commercial licenses are available for proprietary terms, including integration,
closed-source embedding, private service deployments, support and negotiated
arrangements. AGPL itself permits commercial use subject to its terms. See
[COMMERCIAL-LICENSE.md](COMMERCIAL-LICENSE.md).

Contributors retain copyright and grant the steward the sublicensing and
relicensing rights described in [CLA.md](CLA.md). Pull requests must include its
explicit acknowledgment; Signed-off-by alone is insufficient. Read
[CONTRIBUTING.md](CONTRIBUTING.md), [NOTICE](NOTICE) and
[BRAND-ASSETS.md](BRAND-ASSETS.md). Third-party material retains its own terms;
no earlier public grant is revoked.

Steward and commercial contact: Samuel Leighton Lair,
[sam.lair@knowledge-forge.ai](mailto:sam.lair@knowledge-forge.ai).

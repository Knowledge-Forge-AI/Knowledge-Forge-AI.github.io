---
{
  "title": "The Theme Forge CLI release line advances",
  "description": "Burst 0.7.0, Loom 0.5.0 and Solar Sail 0.3.0 keep the engines independently installable.",
  "date": "2026-10-26",
  "updated": "2026-11-11",
  "category": "Theme Forge",
  "kind": "release",
  "releases": [
    "theme-forge-stellar-burst@v0.7.0",
    "theme-forge-stellar-loom@v0.5.0",
    "theme-forge-solar-sail@v0.3.0"
  ],
  "sources": [
    {
      "label": "Theme Forge Stellar Burst v0.7.0",
      "url": "https://github.com/Knowledge-Forge-AI/theme-forge-stellar-burst/releases/tag/v0.7.0"
    },
    {
      "label": "theme-forge-stellar-loom 0.5.0",
      "url": "https://github.com/Knowledge-Forge-AI/theme-forge-stellar-loom/releases/tag/v0.5.0"
    },
    {
      "label": "theme-forge-solar-sail 0.3.0",
      "url": "https://github.com/Knowledge-Forge-AI/theme-forge-solar-sail/releases/tag/v0.3.0"
    }
  ]
}
---

The coordinated CLI release advances Stellar Burst to 0.7.0, Stellar Loom to 0.5.0 and Solar Sail to 0.3.0. Burst retains deterministic SVG compilation, transactional installation and drift checks; Loom provides the documentation-theme engine; Solar Sail provides the Tailwind and shadcn theme compiler.

Solar Sail also makes compiler descriptors, generated provenance and the CLI version agree on the package identity. Each release carries its own source, inventory and software-bill-of-materials evidence.

These compiler products remain independent of the desktop workbench. Their package records describe npm and Python distribution, including separate wheel qualification. Installation details and channel readiness belong to those records, rather than being inferred from a family-wide version label.

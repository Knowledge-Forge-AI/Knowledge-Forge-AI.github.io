---
{
  "title": "APGR 0.8.1: making context costs inspectable",
  "description": "Footprint accounting turns guidance budgets into explicit, versioned data.",
  "date": "2026-09-06",
  "updated": "2026-11-11",
  "category": "APGR",
  "kind": "release",
  "releases": [
    "agentic-praxis-grimoire@v0.8.1"
  ],
  "sources": [
    {
      "label": "v0.8.1",
      "url": "https://github.com/Knowledge-Forge-AI/agentic-praxis-grimoire/releases/tag/v0.8.1"
    }
  ]
}
---

Context is a finite input, and its cost should be visible. APGR 0.8.1 adds the public footprint Go package and CLI commands for measuring, comparing and projecting context budgets across descriptions, bodies and support material.

Versioned schemas describe footprints, comparisons, projections, component registries and capacity mappings. They give a caller a consistent vocabulary for deciding what to include instead of treating a large prompt as an unmeasured side effect.

The release retains thirty-nine canonical skills and its reusable Go packages, alongside deterministic multi-registry packaging and richer package presentation. Measuring context is useful evidence; it is not a claim that a particular provider used fewer tokens or produced a better answer.

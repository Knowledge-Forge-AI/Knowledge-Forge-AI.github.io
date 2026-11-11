---
{
  "title": "APGR 0.9.0: evidence an integration can actually consume",
  "description": "A strict CI summary contract and caller-owned adapters support composition with JACA XO.",
  "date": "2026-09-08",
  "updated": "2026-11-11",
  "category": "APGR",
  "kind": "release",
  "releases": [
    "agentic-praxis-grimoire@v0.9.0"
  ],
  "sources": [
    {
      "label": "v0.9.0",
      "url": "https://github.com/Knowledge-Forge-AI/agentic-praxis-grimoire/releases/tag/v0.9.0"
    }
  ]
}
---

The qualification interface gains a machine-readable summary containing version, subproject, suite, test status, gate status and source commit. A caller can bind a result to a source identity instead of scraping a human log and guessing what passed.

The release distinguishes policy, unit, integration and combined qualification roles. It also demonstrates Go-library consumption through a caller-owned XO adapter fixture: APGR supplies its domain primitives, while the consuming project owns its own data types and orchestration decisions.

This fixture is not JACA’s production adapter, and JACA-side CI registration was still pending at this release. That separation is the important integration story. A toolkit can make evidence portable without becoming the authority that decides whether a larger system is ready to ship.

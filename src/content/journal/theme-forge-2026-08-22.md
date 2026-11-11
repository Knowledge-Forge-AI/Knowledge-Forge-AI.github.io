---
{
  "title": "Stellar Burst begins with inspectable vectors",
  "description": "A declarative SVG compiler brings repeatability and lifecycle checks to vector assets.",
  "date": "2026-08-22",
  "updated": "2026-11-11",
  "category": "Theme Forge",
  "kind": "release",
  "releases": [
    "theme-forge-stellar-burst@v0.1.0"
  ],
  "sources": [
    {
      "label": "v0.1.0",
      "url": "https://github.com/Knowledge-Forge-AI/theme-forge-stellar-burst/releases/tag/v0.1.0"
    }
  ]
}
---

Stellar Burst starts with a straightforward proposition: a vector asset can have a human-editable source, a deterministic build and an installation history. Version 0.1.0 uses TOML to describe a bounded SVG model, then rebuilds canonical SVG output and records the result.

Archive import checks inputs before writing, transactional installation supports backup and rollback, and drift checks compare installed assets with their expected identities. Accessibility metadata is part of the model rather than a caption added after export.

The supported SVG subset is intentional. This release is not a general-purpose browser engine or an unrestricted SVG executor; its value is making a declared asset pipeline understandable and repeatable.

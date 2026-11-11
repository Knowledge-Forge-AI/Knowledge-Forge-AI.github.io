---
{
  "title": "Nebular Fusion 0.6.1 reaches Linux",
  "description": "The workbench release covers Apple Silicon and both Linux architectures with separate channel claims.",
  "date": "2026-09-30",
  "updated": "2026-11-11",
  "category": "Theme Forge",
  "kind": "release",
  "releases": [
    "theme-forge-nebular-fusion@v0.6.1"
  ],
  "sources": [
    {
      "label": "Theme Forge Nebular Fusion 0.6.1",
      "url": "https://github.com/Knowledge-Forge-AI/theme-forge-nebular-fusion/releases/tag/v0.6.1"
    }
  ]
}
---

Nebular Fusion 0.6.1 publishes the native workbench for macOS Apple Silicon, Linux ARM64 and Linux x64 with glibc. The npm wrapper selects a matching platform package, and the release also records the Apple Silicon Homebrew Formula route.

The attached checksums and provenance connect the reviewed source, hosted qualification and exact native artifacts. This makes the expanding target matrix a distribution concern with evidence, rather than a promise inferred from portable source code.

The macOS application remains ad-hoc signed; Developer ID signing, notarization and Gatekeeper qualification are not claimed. Nix is withheld for this release, and the notes explicitly state that there is no Nebular Fusion 0.6.0 release.

---
{
  "title": "Nebular Fusion 0.7.1: respecting immutable installations",
  "description": "A narrow verification correction accepts Nix permissions while retaining content and executable identity checks.",
  "date": "2026-10-31",
  "updated": "2026-11-11",
  "category": "Theme Forge",
  "kind": "release",
  "releases": [
    "theme-forge-nebular-fusion@v0.7.1"
  ],
  "sources": [
    {
      "label": "Theme Forge Nebular Fusion 0.7.1",
      "url": "https://github.com/Knowledge-Forge-AI/theme-forge-nebular-fusion/releases/tag/v0.7.1"
    }
  ]
}
---

Nix removes write permissions from installed store files. Nebular Fusion 0.7.1 corrects sidecar verification to accept that immutable installation form without relaxing its content hashes, file inventories or pre-spawn executable identity checks.

The embedded Node runtime moves to 22.23.4 in response to the findings reported against 22.23.3. Native downloads cover Apple Silicon and both Linux architectures; Linux uses the host's WebKitGTK 4.1 and GTK3 runtime.

This is a focused compatibility and runtime maintenance release. Python, Homebrew, Nix, APT, DNF and the custom pacman repository are tracked as separate publication channels, and an AUR submission is a separate deferred step.

---
{
  "title": "Nebular 0.8.0 reaches the signed repositories",
  "description": "The existing Linux package service advances to the new workbench generation without conflating build, signing and deployment.",
  "date": "2026-11-10",
  "updated": "2026-11-11",
  "category": "Theme Forge",
  "kind": "milestone",
  "releases": [],
  "sources": [
    {
      "label": "Signed repository publication receipt and architecture inventory",
      "url": "https://github.com/Knowledge-Forge-AI/theme-forge-packages/releases/tag/packages-current-202611-nebular080"
    },
    {
      "label": "Production repository deployment for the 0.8.0 generation",
      "url": "https://github.com/Knowledge-Forge-AI/theme-forge-packages/actions/runs/42859410403"
    },
    {
      "label": "Theme Forge package service",
      "url": "https://tf.rs9.knowledge-forge.ai/"
    }
  ]
}
---

The signed APT, DNF and pacman repositories now carry the Nebular 0.8.0 generation for Linux AMD64 and ARM64, including pacman AArch64. This is a downstream publication milestone following the upstream workbench release.

The route retains the exact qualified package inputs through signing/client checks and final deployment. A package build, a signature, an installed consumer and a public repository answer different questions; publication brings those records together without treating one as a substitute for the others.

The service remains at tf.rs9.knowledge-forge.ai, alongside its public signing certificate. The other Theme Forge products retain their own versions. Nix and Homebrew use their own channel records, and the custom pacman repository does not imply an AUR submission.

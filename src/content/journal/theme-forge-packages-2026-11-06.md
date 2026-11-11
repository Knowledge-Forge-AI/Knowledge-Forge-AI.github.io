---
{
  "title": "The 0.7.1 generation reaches signed Linux repositories",
  "description": "APT, DNF and pacman connect the qualified family artifacts to familiar package managers.",
  "date": "2026-11-06",
  "updated": "2026-11-11",
  "category": "Theme Forge",
  "kind": "milestone",
  "releases": [],
  "sources": [
    {
      "label": "Signed repository publication receipt and architecture inventory",
      "url": "https://github.com/Knowledge-Forge-AI/theme-forge-packages/releases/tag/packages-current-202611"
    },
    {
      "label": "Production repository deployment for the 0.7.1 generation",
      "url": "https://github.com/Knowledge-Forge-AI/theme-forge-packages/actions/runs/42154056906"
    },
    {
      "label": "Theme Forge package service",
      "url": "https://tf.rs9.knowledge-forge.ai/"
    }
  ]
}
---

The Theme Forge package repositories are now published at tf.rs9.knowledge-forge.ai. APT, DNF and the custom pacman repository cover both Linux architectures, including pacman AArch64, with repository metadata and package signatures bound to the qualified inputs.

Release Starport 9 connects the upstream products to this distribution layer. The products keep their own versions and source releases; the package service supplies installation routes and a traceable publication receipt rather than becoming a new engine or desktop application.

This publication includes the Nebular 0.7.1 generation. These are project-operated repositories, not a claim of acceptance into Debian, Fedora or Arch's official repositories. AUR publication remains separate and deferred. Verify the published signing-certificate fingerprint and use the package manager’s signature checks.

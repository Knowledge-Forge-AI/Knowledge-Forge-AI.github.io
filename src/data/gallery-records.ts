export type GenreBasis =
  | 'current-owner-source-fact'
  | 'current-roadmap-fact'
  | 'not-recorded';

export type HistoricalAuthoringTool =
  | 'Built-in image tool'
  | null;

export type GalleryRecord = {
  readonly characterId: 'rei-ai' | 'shiori' | 'hikari' | 'orihime';
  readonly displayName: string;
  readonly briefCaption: string;
  readonly projectId:
    | 'knowledge-forge-ai'
    | 'agentic-praxis-grimoire'
    | 'release-starport-9'
    | 'theme-forge';
  readonly genre: readonly string[];
  readonly genreBasis: GenreBasis;
  readonly styleRevision: null;
  readonly styleReference: 'current-reference-for-style';
  readonly registryStatus: 'reference-inventory';
  readonly status: 'reference-inventory';
  readonly displayPath: string;
  readonly date: {
    readonly registryRecorded: string;
    readonly source: string | null;
    readonly conversion: string | null;
  };
  readonly process: 'historical-import';
  readonly generationStatus: 'imported';
  readonly tfGenerated: false;
  readonly authoringTool: HistoricalAuthoringTool;
  readonly provider: string | null;
  readonly model: string | null;
  readonly attribution: string;
  readonly terms: {
    readonly displayScope: 'Owner-authorized gallery display';
    readonly thirdPartyReuse: 'This display does not grant third-party reuse permission.';
    readonly sourceSummary: string;
    readonly sourceUrl: string;
    readonly sourceLinkLabel: string;
  };
  readonly approvedFacts: readonly string[];
  readonly explicitUnknowns: readonly string[];
  readonly sourceIdentity: {
    readonly repository: string;
    readonly revision: string;
    readonly path: string;
    readonly blobSha: string;
    readonly sourceBytesSha256: string;
    readonly sourceBytesMatchDerivative: true;
    readonly blobUrl: string;
  };
  readonly derivative: {
    readonly mime: 'image/webp';
    readonly byteLength: number;
    readonly sha256: string;
    readonly width: 1024;
    readonly height: 1536;
    readonly alpha: 'straight';
  };
};

/**
 * Build-time projection of four owner-authorized historical public references.
 * The display scope does not grant third-party reuse and contains no private
 * prompts, masters, archive IDs, or unselected current study records.
 */
export const galleryRecords = [
  {
    characterId: 'rei-ai',
    displayName: 'Rei Ai',
    briefCaption: 'Woodland fantasy and functional cyberpunk technology in one design.',
    projectId: 'knowledge-forge-ai',
    genre: ['fantasy-cyberpunk-fusion'],
    genreBasis: 'current-owner-source-fact',
    styleRevision: null,
    styleReference: 'current-reference-for-style',
    registryStatus: 'reference-inventory',
    status: 'reference-inventory',
    displayPath: '/rei-ai.webp',
    date: { registryRecorded: '2026-11-13', source: null, conversion: null },
    process: 'historical-import',
    generationStatus: 'imported',
    tfGenerated: false,
    authoringTool: 'Built-in image tool',
    provider: 'OpenAI',
    model: null,
    attribution: 'Knowledge Forge AI Website',
    terms: {
      displayScope: 'Owner-authorized gallery display',
      thirdPartyReuse: 'This display does not grant third-party reuse permission.',
      sourceSummary: 'Rights reserved; no separate artwork license is granted.',
      sourceUrl:
        'https://github.com/Knowledge-Forge-AI/Knowledge-Forge-AI.github.io/blob/b7409f39b1683d78443145cb8b197b5ab00a5015/NOTICE#L15-L18',
      sourceLinkLabel: 'Pinned site artwork terms',
    },
    approvedFacts: [
      'long-lived Sylvan elf',
      'long dark-green hair',
      'dark-blue eyes',
      'evergreen, navy, and gold palette',
      'functional cyberpunk technology',
      'modern tablet',
    ],
    explicitUnknowns: ['underlying image model version'],
    sourceIdentity: {
      repository: 'Knowledge-Forge-AI/Knowledge-Forge-AI.github.io',
      revision: 'b7409f39b1683d78443145cb8b197b5ab00a5015',
      path: 'public/rei-ai.webp',
      blobSha: '11a45dd807c8aad4bdb2e884c9027bc371262dc7',
      sourceBytesSha256: 'c5e09f5cb7cc83b5df159467d853d6627c4de27f9dd87db06a71a57dabbbfe1d',
      sourceBytesMatchDerivative: true,
      blobUrl:
        'https://github.com/Knowledge-Forge-AI/Knowledge-Forge-AI.github.io/blob/b7409f39b1683d78443145cb8b197b5ab00a5015/public/rei-ai.webp',
    },
    derivative: {
      mime: 'image/webp',
      byteLength: 317218,
      sha256: 'c5e09f5cb7cc83b5df159467d853d6627c4de27f9dd87db06a71a57dabbbfe1d',
      width: 1024,
      height: 1536,
      alpha: 'straight',
    },
  },
  {
    characterId: 'shiori',
    displayName: 'Shiori',
    briefCaption: 'An adult high-elf scholar with an ornate magical grimoire.',
    projectId: 'agentic-praxis-grimoire',
    genre: ['fantasy'],
    genreBasis: 'current-owner-source-fact',
    styleRevision: null,
    styleReference: 'current-reference-for-style',
    registryStatus: 'reference-inventory',
    status: 'reference-inventory',
    displayPath: '/apgr/shiori.webp',
    date: { registryRecorded: '2026-11-13', source: null, conversion: null },
    process: 'historical-import',
    generationStatus: 'imported',
    tfGenerated: false,
    authoringTool: 'Built-in image tool',
    provider: null,
    model: null,
    attribution: 'Knowledge Forge AI Website',
    terms: {
      displayScope: 'Owner-authorized gallery display',
      thirdPartyReuse: 'This display does not grant third-party reuse permission.',
      sourceSummary: 'Rights reserved; no separate artwork license is granted.',
      sourceUrl:
        'https://github.com/Knowledge-Forge-AI/Knowledge-Forge-AI.github.io/blob/b7409f39b1683d78443145cb8b197b5ab00a5015/NOTICE#L15-L18',
      sourceLinkLabel: 'Pinned site artwork terms',
    },
    approvedFacts: [
      'adult high elf',
      'dark-purple hair',
      'dark-blue eyes',
      'purple, blue, and silver scholarly robes',
      'ornate magical grimoire',
      'mysterious, intelligent, scholarly character',
    ],
    explicitUnknowns: ['provider identity not separately reported', 'underlying image model version'],
    sourceIdentity: {
      repository: 'Knowledge-Forge-AI/Knowledge-Forge-AI.github.io',
      revision: 'b7409f39b1683d78443145cb8b197b5ab00a5015',
      path: 'public/apgr/shiori.webp',
      blobSha: '9ea340841be116d8deaa2b7298d5841b1613b554',
      sourceBytesSha256: '1232c9de2fe441aae6586937aad627c591f7d3db21c34145140342b2d6c920b8',
      sourceBytesMatchDerivative: true,
      blobUrl:
        'https://github.com/Knowledge-Forge-AI/Knowledge-Forge-AI.github.io/blob/b7409f39b1683d78443145cb8b197b5ab00a5015/public/apgr/shiori.webp',
    },
    derivative: {
      mime: 'image/webp',
      byteLength: 289470,
      sha256: '1232c9de2fe441aae6586937aad627c591f7d3db21c34145140342b2d6c920b8',
      width: 1024,
      height: 1536,
      alpha: 'straight',
    },
  },
  {
    characterId: 'hikari',
    displayName: 'Hikari',
    briefCaption: 'A lunar-fleet admiral with a celestial navigation baton.',
    projectId: 'release-starport-9',
    genre: ['space-opera'],
    genreBasis: 'current-roadmap-fact',
    styleRevision: null,
    styleReference: 'current-reference-for-style',
    registryStatus: 'reference-inventory',
    status: 'reference-inventory',
    displayPath: '/gallery/assets/hikari.webp',
    date: { registryRecorded: '2026-11-13', source: null, conversion: null },
    process: 'historical-import',
    generationStatus: 'imported',
    tfGenerated: false,
    authoringTool: null,
    provider: null,
    model: null,
    attribution: 'Release Starport 9',
    terms: {
      displayScope: 'Owner-authorized gallery display',
      thirdPartyReuse: 'This display does not grant third-party reuse permission.',
      sourceSummary: 'This record does not state source-specific reuse terms.',
      sourceUrl:
        'https://github.com/Knowledge-Forge-AI/release-starport-9/blob/0f717d1ff8d2ce9b3db675b76ac268335af91b52/website/hikari.webp',
      sourceLinkLabel: 'Pinned source identity (terms not stated here)',
    },
    approvedFacts: [
      'silver-blue hair',
      'indigo and pearl lunar-fleet admiral uniform',
      'celestial navigation baton',
      'steady, watchful, commanding presence',
    ],
    explicitUnknowns: [
      'eye color',
      'species',
      'age status',
      'historical authoring tool and provider',
      'underlying image model',
    ],
    sourceIdentity: {
      repository: 'Knowledge-Forge-AI/release-starport-9',
      revision: '0f717d1ff8d2ce9b3db675b76ac268335af91b52',
      path: 'website/hikari.webp',
      blobSha: 'fa2f9e7e8ce93afb0299c964b72c2b9fe5bb58ec',
      sourceBytesSha256: '79f3fb675f2644069d6a3d5aa6a3a19d61c313e7691cb638c830c5f857cb5c23',
      sourceBytesMatchDerivative: true,
      blobUrl:
        'https://github.com/Knowledge-Forge-AI/release-starport-9/blob/0f717d1ff8d2ce9b3db675b76ac268335af91b52/website/hikari.webp',
    },
    derivative: {
      mime: 'image/webp',
      byteLength: 212754,
      sha256: '79f3fb675f2644069d6a3d5aa6a3a19d61c313e7691cb638c830c5f857cb5c23',
      width: 1024,
      height: 1536,
      alpha: 'straight',
    },
  },
  {
    characterId: 'orihime',
    displayName: 'Orihime',
    briefCaption: 'A celestial weaver with layered kimono forms and starwoven detail.',
    projectId: 'theme-forge',
    genre: [],
    genreBasis: 'not-recorded',
    styleRevision: null,
    styleReference: 'current-reference-for-style',
    registryStatus: 'reference-inventory',
    status: 'reference-inventory',
    displayPath: '/gallery/assets/orihime.webp',
    date: { registryRecorded: '2026-11-13', source: null, conversion: null },
    process: 'historical-import',
    generationStatus: 'imported',
    tfGenerated: false,
    authoringTool: null,
    provider: null,
    model: null,
    attribution: 'Theme Forge Stellar Burst',
    terms: {
      displayScope: 'Owner-authorized gallery display',
      thirdPartyReuse: 'This display does not grant third-party reuse permission.',
      sourceSummary: 'This record does not state source-specific reuse terms.',
      sourceUrl:
        'https://github.com/Knowledge-Forge-AI/theme-forge-stellar-burst/blob/25694fd9977054b3c8def11005e054417db2ef43/website/orihime.webp',
      sourceLinkLabel: 'Pinned source identity (terms not stated here)',
    },
    approvedFacts: [
      'plum or purple hair',
      'green eyes',
      'lilac, plum, jade, and gold palette',
      'layered kimono forms with starwoven detail',
      'celestial weaver role',
    ],
    explicitUnknowns: [
      'age status',
      'species',
      'historical authoring tool and provider',
      'underlying image model',
    ],
    sourceIdentity: {
      repository: 'Knowledge-Forge-AI/theme-forge-stellar-burst',
      revision: '25694fd9977054b3c8def11005e054417db2ef43',
      path: 'website/orihime.webp',
      blobSha: '7a16832b9faeccbbb0ecf37c88a21bcba40b23eb',
      sourceBytesSha256: '7fa33afd77cd87ddc0240a25eea2ff1464911fe7ac4ff5068b49ca9bea11fc66',
      sourceBytesMatchDerivative: true,
      blobUrl:
        'https://github.com/Knowledge-Forge-AI/theme-forge-stellar-burst/blob/25694fd9977054b3c8def11005e054417db2ef43/website/orihime.webp',
    },
    derivative: {
      mime: 'image/webp',
      byteLength: 393788,
      sha256: '7fa33afd77cd87ddc0240a25eea2ff1464911fe7ac4ff5068b49ca9bea11fc66',
      width: 1024,
      height: 1536,
      alpha: 'straight',
    },
  },
] satisfies readonly GalleryRecord[];

export type GalleryFacetValues = {
  readonly character: string;
  readonly project: string;
  readonly genre: readonly string[];
  readonly styleRevision: string;
  readonly status: string;
  readonly date: readonly string[];
  readonly process: string;
};

export const galleryFacetValues = (record: GalleryRecord): GalleryFacetValues => ({
  character: record.characterId,
  project: record.projectId,
  genre: record.genre.length ? record.genre : ['not-recorded'],
  styleRevision: record.styleRevision ?? 'not-recorded',
  status: record.status,
  date: [
    `registry-recorded-${record.date.registryRecorded.slice(0, 4)}`,
    record.date.source ? `source-date-${record.date.source}` : 'source-date-not-recorded',
    record.date.conversion ? `conversion-date-${record.date.conversion}` : 'conversion-date-not-recorded',
  ],
  process: record.process,
});

const uniqueSorted = (values: readonly string[]): readonly string[] => [...new Set(values)].sort();
const facetValues = galleryRecords.map(galleryFacetValues);

export const galleryFacetOptions = {
  character: uniqueSorted(facetValues.map((value) => value.character)),
  project: uniqueSorted(facetValues.map((value) => value.project)),
  genre: uniqueSorted(facetValues.flatMap((value) => value.genre)),
  styleRevision: uniqueSorted(facetValues.map((value) => value.styleRevision)),
  status: uniqueSorted(facetValues.map((value) => value.status)),
  date: uniqueSorted(facetValues.flatMap((value) => value.date)),
  process: uniqueSorted(facetValues.map((value) => value.process)),
} as const;

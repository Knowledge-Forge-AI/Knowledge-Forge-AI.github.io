import { createHash } from 'node:crypto';
import { lstat, readFile } from 'node:fs/promises';
import sharp from 'sharp';
import type { galleryRecords } from './gallery-records';

type GalleryAssetRecord = (typeof galleryRecords)[number];
type AssetPin = { sha256: string; width: number; height: number; byteLength?: number };

async function verifyAsset(publicDir: URL, path: string, pin: AssetPin): Promise<void> {
  const match = /^\/gallery\/assets\/[a-z0-9-]+\.(webp|png|jpg)$/u.exec(path);
  if (!match) throw new Error('Invalid gallery artwork path');

  const file = new URL(path.slice(1), publicDir);
  const info = await lstat(file).catch(() => undefined);
  if (!info?.isFile()) throw new Error(`Gallery artwork missing or not a regular file (${path})`);
  const bytes = await readFile(file);
  if (createHash('sha256').update(bytes).digest('hex') !== pin.sha256
      || (pin.byteLength !== undefined && bytes.length !== pin.byteLength)) {
    throw new Error(`Gallery artwork digest or byte length mismatch (${path})`);
  }

  const metadata = await sharp(bytes).metadata();
  const format = match[1] === 'jpg' ? 'jpeg' : match[1];
  if (metadata.format !== format || metadata.width !== pin.width || metadata.height !== pin.height) {
    throw new Error(`Gallery artwork format or dimensions mismatch (${path})`);
  }
}

export async function verifyGalleryAssets(publicDir: URL, records: readonly GalleryAssetRecord[]): Promise<void> {
  const originals = new Map(records.map(({ displayPath, derivative }) => [displayPath, derivative.sha256]));
  for (const record of records) {
    await verifyAsset(publicDir, record.displayPath, record.derivative);
    const trace = 'trace' in record ? record.trace : undefined;
    if (trace && originals.get(trace.referencePath) !== trace.referenceSha256) {
      throw new Error(`Gallery trace reference mismatch (${record.displayPath})`);
    }
    const responsive = 'responsiveDerivative' in record ? record.responsiveDerivative : undefined;
    if (!responsive) continue;
    if (!trace || responsive.sourceSvgSha256 !== trace.svgSha256
        || responsive.width >= record.derivative.width
        || responsive.width * record.derivative.height !== responsive.height * record.derivative.width) {
      throw new Error(`Gallery responsive artwork source or aspect ratio mismatch (${record.displayPath})`);
    }
    await verifyAsset(publicDir, responsive.path, responsive);
  }
}

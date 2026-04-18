/**
 * Walk upstream/ for image files, upload any that are missing from R2,
 * and rewrite image references in translated Markdown to point at R2.
 *
 * Scaffold — implement the TODOs.
 */
import { S3Client, PutObjectCommand, HeadObjectCommand } from '@aws-sdk/client-s3';
import { readFile } from 'node:fs/promises';
import { glob } from 'node:fs/promises';
import path from 'node:path';

const {
  R2_ACCOUNT_ID,
  R2_ACCESS_KEY_ID,
  R2_SECRET_ACCESS_KEY,
  R2_BUCKET,
  PUBLIC_R2_BASE,
} = process.env;

if (!R2_ACCOUNT_ID || !R2_ACCESS_KEY_ID || !R2_SECRET_ACCESS_KEY || !R2_BUCKET || !PUBLIC_R2_BASE) {
  console.error('R2 environment variables are missing.');
  process.exit(1);
}

const s3 = new S3Client({
  region: 'auto',
  endpoint: `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: R2_ACCESS_KEY_ID,
    secretAccessKey: R2_SECRET_ACCESS_KEY,
  },
});

const IMAGE_EXT = new Set(['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp']);

async function existsInR2(key: string): Promise<boolean> {
  try {
    await s3.send(new HeadObjectCommand({ Bucket: R2_BUCKET, Key: key }));
    return true;
  } catch {
    return false;
  }
}

async function main() {
  const UPSTREAM_DIR = path.resolve('upstream');
  for await (const file of glob('**/*', { cwd: UPSTREAM_DIR })) {
    const ext = path.extname(file).toLowerCase();
    if (!IMAGE_EXT.has(ext)) continue;

    const key = `handbook/${file}`;
    if (await existsInR2(key)) continue;

    const body = await readFile(path.join(UPSTREAM_DIR, file));
    await s3.send(new PutObjectCommand({
      Bucket: R2_BUCKET,
      Key: key,
      Body: body,
      ContentType: contentTypeFor(ext),
      CacheControl: 'public, max-age=31536000, immutable',
    }));
    console.log(`uploaded: ${key}`);
  }

  // TODO: walk src/content/ja/handbook/**/*.md and rewrite relative image
  // references (./foo.png etc.) to `${PUBLIC_R2_BASE}/handbook/<path>/foo.png`.
}

function contentTypeFor(ext: string): string {
  switch (ext) {
    case '.png':  return 'image/png';
    case '.jpg':
    case '.jpeg': return 'image/jpeg';
    case '.gif':  return 'image/gif';
    case '.svg':  return 'image/svg+xml';
    case '.webp': return 'image/webp';
    default:      return 'application/octet-stream';
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

/**
 * Sync images referenced by translated Markdown into the R2 bucket.
 *
 * Strategy:
 * - Walk `content/handbook` and collect every root-absolute asset URL
 *   (e.g. `/images/foo.svg`, both `<img src>` and `![](...)`).
 * - For each unique reference, look it up under `upstream/static/<path>`
 *   and upload to R2 with key `<path>` (no leading slash). That way the
 *   public bucket URL `<base>/<path>` matches the absolute path that
 *   lives in the Markdown source — the Hugo image render hook
 *   (layouts/_markup/render-image.html) prefixes `params.image_base_url`
 *   and the URL resolves.
 * - Idempotent: HEAD-checks each key and skips uploads that already exist.
 *
 * Env vars (infra workflow と統一されている命名):
 *   AWS_ACCESS_KEY_ID       — R2 の access key (AWS SDK が自動で読む標準名)
 *   AWS_SECRET_ACCESS_KEY   — R2 の secret key (同上)
 *   CLOUDFLARE_ACCOUNT_ID   — エンドポイント URL の組み立てに使用
 *   R2_BUCKET               — 画像バケット名 (e.g. gitlab-handbook-ja-images)
 */
import { S3Client, PutObjectCommand, HeadObjectCommand } from '@aws-sdk/client-s3';
import { readFile, stat } from 'node:fs/promises';
import { glob } from 'node:fs/promises';
import path from 'node:path';

const {
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY,
  CLOUDFLARE_ACCOUNT_ID,
  R2_BUCKET,
} = process.env;

if (!AWS_ACCESS_KEY_ID || !AWS_SECRET_ACCESS_KEY || !CLOUDFLARE_ACCOUNT_ID || !R2_BUCKET) {
  console.error(
    'Missing env vars. Required: AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, CLOUDFLARE_ACCOUNT_ID, R2_BUCKET.',
  );
  process.exit(1);
}

// AWS SDK は AWS_ACCESS_KEY_ID / AWS_SECRET_ACCESS_KEY を自動で読むため
// credentials を明示しなくてもよいが、ローカルの ~/.aws/credentials が
// AWS 本体のものと混ざる事故を避けるため明示する。
const s3 = new S3Client({
  region: 'auto',
  endpoint: `https://${CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
  },
});

const TRANSLATED_ROOT = path.resolve('content/handbook');
const UPSTREAM_STATIC = path.resolve('upstream/static');
const IMAGE_EXT = new Set(['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp', '.avif', '.ico']);

// Match `src="/..."`, `src='/...'`, `poster="/..."`, and `![alt](/...)`.
const REF_RE = /(?:(?:src|poster)\s*=\s*("|')(\/[^"'>\s]+)\1)|(?:!\[[^\]]*\]\((\/[^)\s]+)\))/g;

async function existsInR2(key: string): Promise<boolean> {
  try {
    await s3.send(new HeadObjectCommand({ Bucket: R2_BUCKET, Key: key }));
    return true;
  } catch {
    return false;
  }
}

function contentTypeFor(ext: string): string {
  switch (ext) {
    case '.png':  return 'image/png';
    case '.jpg':
    case '.jpeg': return 'image/jpeg';
    case '.gif':  return 'image/gif';
    case '.svg':  return 'image/svg+xml';
    case '.webp': return 'image/webp';
    case '.avif': return 'image/avif';
    case '.ico':  return 'image/x-icon';
    default:      return 'application/octet-stream';
  }
}

async function collectReferences(): Promise<Set<string>> {
  const refs = new Set<string>();
  for await (const rel of glob('**/*.md', { cwd: TRANSLATED_ROOT })) {
    const body = await readFile(path.join(TRANSLATED_ROOT, rel), 'utf8');
    for (const m of body.matchAll(REF_RE)) {
      const url = m[2] ?? m[3];
      if (!url) continue;
      const ext = path.extname(url).toLowerCase();
      if (!IMAGE_EXT.has(ext)) continue;
      refs.add(url);
    }
  }
  return refs;
}

async function main() {
  const refs = await collectReferences();
  if (refs.size === 0) {
    console.log('No image references found in translated Markdown — nothing to upload.');
    return;
  }

  let uploaded = 0;
  let skipped = 0;
  const missing: string[] = [];

  for (const url of [...refs].sort()) {
    const key = url.replace(/^\//, '');
    const localPath = path.join(UPSTREAM_STATIC, key);

    try {
      await stat(localPath);
    } catch {
      missing.push(url);
      continue;
    }

    if (await existsInR2(key)) {
      skipped += 1;
      continue;
    }

    const body = await readFile(localPath);
    await s3.send(new PutObjectCommand({
      Bucket: R2_BUCKET,
      Key: key,
      Body: body,
      ContentType: contentTypeFor(path.extname(key).toLowerCase()),
      CacheControl: 'public, max-age=31536000, immutable',
    }));
    console.log(`uploaded: ${key}`);
    uploaded += 1;
  }

  console.log(`\n${uploaded} uploaded, ${skipped} already in R2, ${missing.length} missing in upstream/static.`);
  if (missing.length > 0) {
    // upstream のマークダウン中に書かれていても upstream/static に実体が無い参照
    // （= upstream 側で元々リンク切れ。handbook.gitlab.com でも 403 で表示できない）
    // はこちらでは直しようが無いので、警告のみ出してデプロイは通す。
    console.warn('Missing (referenced in Markdown but not found under upstream/static — upstream-side broken refs, ignored):');
    for (const u of missing) console.warn(`  ${u}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

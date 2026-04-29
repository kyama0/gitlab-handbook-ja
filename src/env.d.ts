/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly PUBLIC_GA4_ID?: string;
  readonly PUBLIC_R2_BASE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
# GitLab Handbook 非公式日本語訳

[GitLab Handbook](https://handbook.gitlab.com/) のコミュニティによる非公式日本語訳プロジェクトです。GitLab Inc. とは関係ありません。

**This is an unofficial community translation. Not affiliated with, endorsed by, or sponsored by GitLab Inc.**

## ライセンスと出典

- 原文: <https://handbook.gitlab.com/>
- 原文ライセンス: [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)
- 本リポジトリの翻訳物も同じく [CC BY-SA 4.0](./LICENSE) で配布します
- 出典と変更点の開示については [NOTICE](./NOTICE) を参照

GitLab のロゴ、タヌキマスコット、ブランドカラーは GitLab Inc. の商標であり、本プロジェクトでは使用しません。

## 技術スタック

- [Astro](https://astro.build/) — 静的サイト生成
- Cloudflare Pages — ホスティング
- Cloudflare R2 — 画像配信
- [Anthropic Claude API](https://docs.claude.com/) — 翻訳エンジン

## ディレクトリ構成

```
upstream/              本家 handbook を git submodule として配置（英語原文）
src/
  content/ja/handbook/ 翻訳済み Markdown（upstream と同じパス構造）
  layouts/             Astro レイアウト
  components/          Astro コンポーネント
  pages/               ルーティング
scripts/
  sync-upstream.ts     本家の最新を取り込み、翻訳対象を検出
  translate.ts         Claude API で差分翻訳
  upload-images-r2.ts  画像を R2 へアップロードして URL を書き換え
  check-staleness.ts   原文更新に追随できていない翻訳を列挙
translation-state/
  manifest.json        {path, upstream_sha, translated_at, model} の台帳
infra/                 Terraform で Cloudflare (Pages / R2 / DNS) を管理
```

## セットアップ

```bash
# 依存関係
npm install

# 本家 handbook を submodule として追加（初回のみ）
git submodule add https://gitlab.com/gitlab-com/content-sites/handbook.git upstream
git submodule update --init --recursive

# 開発サーバ
npm run dev
```

## 翻訳ワークフロー

```bash
# 1. 本家の最新を pull
npm run sync:upstream

# 2. 差分を Claude で翻訳（ANTHROPIC_API_KEY が必要）
npm run translate

# 3. 画像を R2 へ同期
npm run upload:images

# 4. 古くなった翻訳を洗い出す
npm run check:staleness
```

## デプロイ

Cloudflare Pages に push で自動デプロイされます（`.github/workflows/deploy.yml`）。

## 環境変数

| 変数 | 用途 |
| --- | --- |
| `ANTHROPIC_API_KEY` | Claude API |
| `R2_ACCOUNT_ID` | Cloudflare R2 |
| `R2_ACCESS_KEY_ID` | R2 |
| `R2_SECRET_ACCESS_KEY` | R2 |
| `R2_BUCKET` | R2 バケット名 |
| `PUBLIC_R2_BASE` | R2 公開 URL（例: `https://images.example.com`） |
| `SITE_URL` | 本番サイト URL |

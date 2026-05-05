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

- [Hugo](https://gohugo.io/) (extended 0.151.0) — 静的サイト生成。upstream と同じテーマ ([docsy](https://www.docsy.dev/) v0.12.0 + [docsy-gitlab](https://gitlab.com/gitlab-com/content-sites/docsy-gitlab) v0.3.67) を Hugo Modules で参照
- Cloudflare Pages — ホスティング (direct-upload)
- Cloudflare R2 — 画像配信
- [Anthropic Claude](https://docs.claude.com/) — 翻訳エンジン (Claude Code の `translator` サブエージェント経由)

## ディレクトリ構成

```
upstream/              本家 handbook を git submodule として配置（英語原文）
content/handbook/      翻訳済み Markdown（upstream と同じパス・同じファイル名で 1:1 対応）
config/_default/       Hugo サイト設定（upstream config を JA 化したもの）
layouts/
  _shortcodes/         upstream 由来のショートコードテンプレート（64 files）
  _partials/           upstream 由来のパーシャル（15 files）
  home.html / index.redirects   upstream 由来のトップレイアウト
assets/
  includes/            {{% include %}} ショートコードのソース（upstream/assets から取り込み）
  csv/, icons/, …      その他 upstream アセット
data/                  upstream の data ファイル一式（misused_terms, navigation, toc 等）
static/                サイト直下に配信する静的ファイル（robots.txt 等）
go.mod / go.sum        Hugo Modules の依存定義
scripts/
  sync-upstream.ts        本家の最新を取り込み、翻訳対象を検出
  upload-images-r2.ts     参照画像を R2 へ同期
  check-staleness.ts      原文更新に追随できていない翻訳を列挙
  restore-shortcodes.ts   旧 transform-shortcodes が HTML 化したショートコードを {{< … >}} に逆変換（移行用ユーティリティ）
translation-state/
  manifest.json           {path, upstream_sha, translated_at, model, input_hash} の台帳
  phase2-retranslate.txt  再翻訳が必要なファイルの追跡キュー
infra/                  Terraform で Cloudflare (Pages / R2 / DNS) を管理
```

## セットアップ

[asdf](https://asdf-vm.com/) を使うと `.tool-versions` で Hugo / Go / Node を一括で揃えられます。

```bash
# 依存関係 (postcss/autoprefixer は Hugo の docsy CSS パイプラインで使用)
npm install

# 本家 handbook を submodule として追加（初回のみ）
git submodule update --init --recursive

# Hugo Modules を解決
hugo mod get

# 開発サーバ (http://localhost:1313)
hugo server --renderToMemory

# 本番ビルド
hugo --minify
```

ビルド成果物は `public/` に出力されます。

## 翻訳ワークフロー

```bash
# 1. 本家の最新を pull
npm run sync:upstream

# 2. 差分を翻訳 (Claude Code の translator サブエージェントを呼び出す)
#    .claude/agents/translator.md がシステムプロンプト

# 3. 画像を R2 へ同期
npm run upload:images

# 4. 古くなった翻訳を洗い出す
npm run check:staleness
```

翻訳エージェントの規約は [`.claude/agents/translator.md`](.claude/agents/translator.md)、レビュー観点は [`.claude/agents/translation-reviewer.md`](.claude/agents/translation-reviewer.md) を参照。

## デプロイ

`main` への push で Cloudflare Pages に自動デプロイされます ([`.github/workflows/app_deploy.yml`](.github/workflows/app_deploy.yml))。GitHub Actions が `hugo --minify` で `public/` を生成し、`cloudflare/pages-action` が direct-upload します。

## 環境変数

| 変数 | 用途 |
| --- | --- |
| `R2_ACCOUNT_ID` | Cloudflare R2 |
| `R2_ACCESS_KEY_ID` | R2 |
| `R2_SECRET_ACCESS_KEY` | R2 |
| `R2_BUCKET` | R2 バケット名 |
| `SITE_URL` | 本番サイト URL（Hugo の `baseURL` を上書き） |

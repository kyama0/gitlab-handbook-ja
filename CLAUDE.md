# CLAUDE.md

このファイルは、このリポジトリ内のコードを扱う際に Claude Code (claude.ai/code) に向けたガイダンスを提供します。

## プロジェクト概要

[GitLab Handbook](https://handbook.gitlab.com/) の非公式な日本語翻訳であり、Astro 静的サイトとして構築されています。英語の原文は `upstream/` git サブモジュール（GitLab handbook のアップストリームリポジトリ）に配置されており、翻訳後の Markdown はリポジトリルート直下の `content/ja/handbook/` に配置されます（Astro の Content Layer `glob()` ローダーが `src/content/` 配下のパスを受け付けないため、`src/content/` の外に置いています）。翻訳は、変更されたアップストリームファイルに対して Claude を実行し PR を作成するスケジュールパイプラインによって生成されます。

## 共通コマンド

```bash
npm run dev                              # astro dev
npm run build                            # astro build → dist/
npm run check                            # astro check: 型 + content-collection スキーマ
npm run typecheck                        # tsc --noEmit（astro check とは別）

npm run sync:upstream                    # git submodule pull + manifest と比較して変更ファイルをリスト
npm run upload:images                    # アップストリーム画像を R2 に同期; R2_* の環境変数が必要
npm run check:staleness                  # アップストリームのハッシュがずれた翻訳をリスト
npm run transform:shortcodes -- <file>   # 翻訳済み Markdown 内の Hugo ショートコードを HTML に展開

cd infra && terraform plan / apply       # Cloudflare Pages + R2 (direct-upload の Pages プロジェクト)
```

Node 22+ が必要です（スクリプトが `node:fs/promises` の `glob` を使用するため）。`upstream/` に触れるスクリプトを実行する前にサブモジュールのチェックアウト（`git submodule update --init`）が必要です。

## アーキテクチャ

**このリポジトリには 2 つの独立した関心事があります:**

1. **翻訳パイプライン**（`scripts/` + `translation-state/manifest.json`）。manifest は「何が、どのアップストリームハッシュで翻訳されたか」の唯一の情報源です。各エントリは `{ upstream_sha, translated_at, model, input_hash }` を保持します。`sync-upstream.ts` はアップストリームの Markdown を `input_hash` と差分比較して新規・変更ファイルを見つけ、`check-staleness.ts` はハッシュを再チェックしてドリフトを検出します（オプションでフロントマターに `stale: true` を設定します）。**実翻訳は GHA では走らせず**、ローカルで Claude Code の `translator` サブエージェント（`.claude/agents/translator.md`）を呼び出して翻訳・manifest 更新・PR 作成を行う想定です。

2. **Astro サイト**（`src/`）。単一のコンテンツコレクション `handbook`（`src/content.config.ts`）は Content Layer `glob()` ローダーを使用しており（Astro 4.x では `experimental.contentLayer: true` が必要）、Zod でフロントマターを検証します: `title`, `description?`, `weight?`, `upstream_path`, `upstream_sha`, `translated_at?`, `translator`（`claude` | `human` | `claude+human`）, `stale`。Zod は未定義のキーを落とすため、サイト側で新たに読みたい Hugo フロントマター（例: `linkTitle`, `no_list`）はスキーマへの追加が必要です。`src/pages/handbook/[...slug].astro` が各エントリをレンダリングし、`upstream_path` が「原文」リンクと hreflang を決定します。サイトはビルド時に `upstream/` を一切読みません — コミット済みの翻訳 Markdown のみを読みます。

**サイドバー（`src/components/Sidebar.astro`）は Hugo と同様に `weight` 昇順 → タイトル（ja ロケール）でソートします** — 新規翻訳ではアップストリームの `weight` をそのまま保持してください（未指定は 0 扱い）。セクション配下に `index.md` の翻訳が無いと、そのセクションはサイドバー上で URL セグメント（例: `company`）がそのまま表示されるので、セクション `_index.md` の翻訳は優先度高めです。

**画像パス**: Markdown 内の root-absolute なアセット URL（`/images/...` 等、`![]()` および raw HTML `<img src>`）は、remark プラグイン（`src/plugins/rewrite-asset-paths.mjs`）が `PUBLIC_R2_BASE`（未設定なら `https://handbook.gitlab.com` にフォールバック）を前置します。本番ビルドでは R2 公開 URL（例: `https://pub-{accountid}.r2.dev`、または将来的にカスタムドメイン）を `PUBLIC_R2_BASE` に設定してください。R2 のキー構造は upstream Hugo の URL に 1:1 対応する形（`upstream/static/images/foo.svg` → R2 key `images/foo.svg` → URL `${PUBLIC_R2_BASE}/images/foo.svg`）にしてあるので、Markdown 側の `/images/...` を書き換えずに base 前置だけで解決できます。`scripts/upload-images-r2.ts` は翻訳済み Markdown が参照している画像のみを upstream/static/ から拾い上げて R2 へ idempotent に同期します（参照外の画像はアップロードしない）。dev 環境では `PUBLIC_R2_BASE` 未設定で問題ありません — handbook.gitlab.com からホットリンクでフォールバック表示されます。

**見出し ID**: Hugo/Pandoc 流の `## 見出し {#custom-id}` は remark プラグイン（`src/plugins/heading-ids.mjs`）が `<h*>` の `id` 属性に変換します（`<a href="#custom-id">` のアンカージャンプが効くようになる）。

**Tailwind の content glob**: `tailwind.config.mjs` の `content` には `./content/**/*.{md,mdx}` を必ず含めてください。ショートコード（例: `scripts/shortcodes/youtube.ts`）が出力する HTML には `.absolute`, `.inset-0`, `.h-full` 等のユーティリティが含まれており、glob に `content/` が無いと JIT に検出されず CSS から purge されてしまい、レイアウトが崩れます（YouTube iframe が極端に縦長/縦潰れになるなど）。

**ショートコード処理**: 翻訳済み Markdown は `npm run transform:shortcodes -- <file>` で Hugo ショートコード（`{{< ... >}}` / `{{% ... %}}`）を HTML に展開します（処理結果は in-place で書き戻される）。Astro/remark の smartypants が ASCII 引用符を curly に変換するため、ショートコードを未展開で残すと出力 HTML 上で `id="..."` が `id=“...”` になり、後から `transform:shortcodes` を走らせても引数が取れなくなります — 翻訳直後に必ず展開すること（`translator` サブエージェントは書き込み後にこの展開ステップまで実行する設計）。

**パスマッピング（アップストリーム → 翻訳 → URL）:**

注意: Hugo の `_index.md`（セクションインデックス）は出力時に `index.md` にリネームする必要があります — Astro のコンテンツローダーは `_` で始まるファイル名を無視します。`translator` サブエージェントが翻訳時にこのリネームを行います。

| アップストリーム相対パス | 翻訳ファイル | URL |
| --- | --- | --- |
| `content/handbook/_index.md` | `content/ja/handbook/index.md` | `/handbook/` |
| `content/handbook/about/_index.md` | `content/ja/handbook/about/index.md` | `/handbook/about/` |
| `content/handbook/company/mission.md` | `content/ja/handbook/company/mission.md` | `/handbook/company/mission/` |

末尾スラッシュは強制されます（`astro.config.mjs: trailingSlash: 'always'`）。フロントマターの `upstream_path` はファイルパスではなく `handbook.gitlab.com` 上の URL です。

Content Layer ローダーは `slug` ではなく `entry.id`（ベースからの相対ファイルパス、拡張子なし）を公開します。動的ルートは末尾の `/index` セグメントを取り除いて URL スラグを導出します（`about/index` → `about`、`index` → `''`）。

**スクリプトは未完了 TODO を含むスキャフォールドです** — 主なギャップ: `sync-upstream.ts` は変更ファイルを標準出力に出すだけで自動翻訳に流していません。`check-staleness.ts` は翻訳側フロントマターに `stale: true` を書き戻しません。実際の翻訳は `.claude/agents/translator.md` の `translator` サブエージェントを Claude Code から呼び出して行います。パイプラインを拡張する際は、再実装せずにこれらをつなぎ合わせてください。

## 翻訳規約

実翻訳のシステムプロンプト・ワークフローは `.claude/agents/translator.md`（`translator` サブエージェント）にあります。手動で翻訳を編集する際もこの規約に従ってください:

- Markdown 構造、コードブロック、Hugo ショートコード（`{{< ... >}}`、`{{% ... %}}`）は原文のまま保持します。
- 固有名詞は英語のままにします（GitLab, Slack, Workday, Okta, Snowplow など）。
- 一人称は「私たち」。指示形は「〜します」。
- 用語集: `DRI` → `DRI`、`iteration` → `イテレーション`、`handbook` → `ハンドブック`。
- フロントマター: `title` と `description` のみ翻訳し、その他のキー（`cascade`, `menu`, `weight`, `canonical_path` など）は原文のまま保持します。追跡用フィールド（`upstream_path`, `upstream_sha`, `translated_at`, `translator`, `stale`）は常に追加します。
- サイト上の正確性に関する免責事項には「正確性については英語の原文を参照してください」と記載しています — 翻訳は法的に厳密である必要はありませんが、原文にない内容を持ち込むべきではありません。

## デプロイ & インフラ

- Cloudflare Pages プロジェクトは git 連携ではなく **direct-upload** 方式です。`infra/` の Terraform はプロジェクトとバケットを宣言するのみで、実際のデプロイは `app_deploy.yml` 内の `cloudflare/pages-action` によって行われます。`cloudflare_pages_project.site` に `source` ブロックを追加しないでください。
- Terraform の state は S3 互換バックエンド（`gitlab-handbook-ja-tf-state`）経由で R2 に保管されます。GHA ワークフローは環境変数ではなく `terraform init -backend-config=...` で R2 の認証情報を渡します。
- `infra/main.tf` はオプションのドメイン属性を `coalesce(..., "placeholder")` でラップしており、`count = 0` のリソースでも必須属性の検証を満たせるようにしています — オプションのリソースを追加する際もこのパターンを踏襲してください。
- Pages の production 向け `env_vars` は空の場合 `null` として渡します（プロバイダーが空のマップを拒否するため） — `locals.tf` を参照してください。

## CI ワークフロー

- `app_ci.yml` — `src/ content/ scripts/ public/ package*.json astro.config.mjs tsconfig.json tailwind.config.mjs` を変更する PR に対して: `npm run check` + `npm run build` + dependency-review + gitleaks。サブモジュールのチェックアウトはしません（ビルドはコミット済みの `content/ja/handbook/` のみを必要とします）。
- `app_deploy.yml` — `main` への push に対して: ビルド（サブモジュール付き）して Pages にプッシュ。
- `infra_plan.yml` / `infra_apply.yml` — `tfcmt` 経由で terraform を実行し、plan を PR コメントとして投稿。

# CLAUDE.md

このファイルは、このリポジトリ内のコードを扱う際に Claude Code (claude.ai/code) に向けたガイダンスを提供します。Codex 向けの常時ガイダンスは `AGENTS.md`、Codex skill / custom agent は `.agents/` と `.codex/` を参照してください。

## プロジェクト概要

[GitLab Handbook](https://handbook.gitlab.com/) の非公式な日本語翻訳であり、**Hugo 静的サイト**として構築されています（upstream と同じ docsy + docsy-gitlab Hugo Modules を使用）。英語の原文は `upstream/` git サブモジュール（GitLab handbook のアップストリームリポジトリ）に配置されており、翻訳後の Markdown は `content/handbook/` に upstream と 1:1 対応するパスで配置されます。翻訳は、変更されたアップストリームファイルに対して Codex または Claude Code を実行し PR を作成するローカル workflow によって生成されます。

## 共通コマンド

```bash
hugo                                     # ビルド → public/
hugo server --renderToMemory             # ローカル dev (http://localhost:1313)
hugo --logLevel info                     # 詳細ログ付きビルド

npm run sync:upstream                    # git submodule pull + manifest と比較して変更ファイルをリスト
npm run upload:images                    # アップストリーム画像を R2 に同期; R2_* の環境変数が必要
npm run check:staleness                  # アップストリームのハッシュがずれた翻訳をリスト
npm run backfill:lastmod                 # manifest と翻訳フロントマターに upstream の最終更新日 (upstream_committed_at / lastmod) を埋める
npm run restore:shortcodes -- <file>     # 旧 transform-shortcodes で HTML 化されたショートコードを {{< … >}} に逆変換

cd infra && terraform plan / apply       # Cloudflare Pages + R2 (direct-upload の Pages プロジェクト)
```

ツールバージョンは `.tool-versions` に固定: hugo-extended 0.151.0 / nodejs 22.22.0 / golang 1.25.7。`upstream/` に触れるスクリプトを実行する前にサブモジュールのチェックアウト（`git submodule update --init`）が必要です。Hugo Modules は初回 build 時に `hugo mod get` で `~/.cache/hugo_cache/modules/filecache/modules/pkg/mod/` 以下に展開されます（`~/go/pkg/mod` ではない）。

## アーキテクチャ

**このリポジトリには 2 つの独立した関心事があります:**

1. **翻訳パイプライン**（`scripts/` + `translation-state/manifest.json`）。manifest は「何が、どのアップストリームハッシュで翻訳されたか」の唯一の情報源です。各エントリは `{ upstream_sha, upstream_committed_at, translated_at, model, input_hash }` を保持します。`upstream_committed_at` は `upstream_sha` 時点でその原文を最後に変更した upstream コミットの ISO 8601 タイムスタンプ（`git -C upstream log -1 --format=%cI <sha> -- <path>` で取得）で、各翻訳フロントマターの `lastmod` と同じ値を持ち、ページに表示される「最終更新日」のソースになります。`sync-upstream.ts` はアップストリームの Markdown を `input_hash` と差分比較して新規・変更ファイルを見つけ、`check-staleness.ts` はハッシュを再チェックしてドリフトを検出します。**実翻訳は GHA では走らせず**、ローカルで Codex の `.agents/skills/translate-batch/SKILL.md` / `.codex/agents/translator.toml`、または Claude Code の `translator` サブエージェント（`.claude/agents/translator.md`）を呼び出して翻訳・manifest 更新・PR 作成を行う想定です。

2. **Hugo サイト**。設定は `config/_default/config.yaml` にあり、upstream の同名ファイルをほぼそのまま流用しつつ言語/タイトル/リポジトリリンクのみ JA 化しています。
   - **テーマ**: Hugo Modules で `github.com/google/docsy v0.12.0` と `gitlab.com/gitlab-com/content-sites/docsy-gitlab v0.3.67` を upstream と同じバージョンで pin (`go.mod`)。テーマの layouts／shortcodes はモジュールから読まれるため repo にコピーする必要は基本ない。
   - **オーバーライド**: `layouts/_shortcodes/` (64 files), `layouts/_partials/` (15 files), `layouts/home.html`, `layouts/index.redirects` は upstream の同名ファイルをコピーして配置している（テーマ側に無い handbook 固有のテンプレートのため）。
   - **アセット**: `assets/includes/` (94 files) は `{{% include "..." %}}` ショートコードのソース。upstream/assets/ から取り込み済み。
   - **データ**: `data/` (8 files) は `{{< misused-terms >}}` 等が読む YAML/JSON。upstream/data/ から取り込み済み。動的に sync する `team.json` 等は今のところ無いため、それを参照するショートコードは Phase 2 として `translation-state/phase2-retranslate.txt` に登録され、本文では呼び出しが除去されている。

**サイドバー**: docsy が upstream のサイドバーをそのまま生成します。順序は `weight` 昇順 → タイトル昇順。新規翻訳ではアップストリームの `weight` をそのまま保持してください。セクション配下に `_index.md` の翻訳が無いとサイドバーで URL セグメントがそのまま表示されるので、セクション `_index.md` の翻訳は優先度高めです。

**画像パス**: Markdown の `![alt](/images/...)` は `layouts/_markup/render-image.html` (Goldmark の image render hook) が `params.imageBaseUrl` を前置して外部ホストへ解決します。

- **dev**: `imageBaseUrl: "https://handbook.gitlab.com"` (config 既定値) → upstream にホットリンクしてローカルでも画像が表示される。
- **prod**: CI で `HUGO_PARAMS_imageBaseUrl=https://pub-xxxx.r2.dev` のように env var で R2 公開 URL を指定。R2 へは `scripts/upload-images-r2.ts` で `upstream/static/images/` から同期する。
- **param 名は camelCase 必須**: Hugo の env var override は `HUGO` の直後 1 文字を区切り文字として推論する仕様 ([公式 docs](https://gohugo.io/configuration/introduction/)) のため、snake_case の param 名を `HUGO_PARAMS_image_base_url` のように `_` 区切りで渡すと `params.image.base.url` にネスト解釈されてしまい効かない。camelCase (`imageBaseUrl`) であれば `HUGO_PARAMS_imageBaseUrl` で素直に上書きされる。

protocol-relative (`//foo`) や絶対 URL (`https://...`) はそのまま、相対パス (`./foo`) も leaf bundle 想定で素通し。raw HTML の `<img src="/images/...">` (29 ファイル程度に存在) は Goldmark の render hook 対象外なので書き換わらないが、`layouts/index.redirects` 経由で `_redirects` に `/images/* {imageBaseUrl}/images/:splat 301` を出力しているので、本番 (Cloudflare Pages) では Cloudflare の Bulk Redirects が走って外部ホストへ 301 でリダイレクトされる。ローカル `hugo server` ではこの `_redirects` は使われないので生 HTML 画像はローカルでは表示されない。

**見出し ID**: Hugo/Pandoc 流の `## 見出し {#custom-id}` は Goldmark の `parser.attribute.block: true` でネイティブ対応します（remark プラグインは不要）。

**ショートコード処理**: 翻訳済み Markdown は **原文の `{{< ... >}}` / `{{% ... %}}` をそのまま保持**します。Hugo がビルド時に `layouts/_shortcodes/` または Hugo Module 側のテンプレートでレンダリングします。HTML への事前展開はしません（旧 `transform-shortcodes.ts` は廃止）。

**Hugo の shortcode parser は HTML コメント内も含めてショートコード呼び出しを検出します**。`<!-- {{< foo >}} -->` も build エラーになるため、ショートコードを一時的に無効化したい場合は呼び出しリテラルを完全に削除してください。

**パスマッピング（アップストリーム → 翻訳 → URL）:**

| アップストリーム相対パス | 翻訳ファイル | URL |
| --- | --- | --- |
| `upstream/content/handbook/_index.md` | `content/handbook/_index.md` | `/handbook/` |
| `upstream/content/handbook/about/_index.md` | `content/handbook/about/_index.md` | `/handbook/about/` |
| `upstream/content/handbook/company/mission.md` | `content/handbook/company/mission.md` | `/handbook/company/mission/` |

upstream と同じファイル名・同じ相対パスです（旧 Astro 時代の `_index.md → index.md` リネーム規則は廃止）。フロントマターの `upstream_path` はファイルパスではなく `handbook.gitlab.com` 上の URL です。

**スクリプトは未完了 TODO を含むスキャフォールドです** — `sync-upstream.ts` は変更ファイルを標準出力に出すだけで自動翻訳に流していません。`check-staleness.ts` は翻訳側フロントマターに `stale: true` を書き戻しません。実際の翻訳は Codex の `translate-batch` skill または Claude Code の `translator` サブエージェントを呼び出して行います。

**Phase 2 再翻訳キュー**: `translation-state/phase2-retranslate.txt` は、過去の `transform-shortcodes.ts` がデータ駆動ショートコードを HTML スタブに置換してしまったために原状復帰不能になったファイル群を追跡しています。このリストのファイルは upstream から再翻訳する必要があります。

## 翻訳規約

実翻訳のシステムプロンプト・ワークフローは Codex では `.agents/skills/translate-batch/SKILL.md` と `.codex/agents/translator.toml`、Claude Code では `.claude/agents/translator.md`（`translator` サブエージェント）にあります。レビュー側は Codex では `.codex/agents/translation-reviewer.toml`、Claude Code では `.claude/agents/translation-reviewer.md` です。手動で翻訳を編集する際もこの規約に従ってください:

- Markdown 構造、コードブロック、Hugo ショートコード（`{{< ... >}}`、`{{% ... %}}`）は **原文と完全に同じ形のまま** 保持します（HTML に展開しない）。開きと閉じのペアを必ず揃える。
- 見出しの `## 見出し {#custom-id}` 構文は Goldmark で動くのでそのまま保持。
- 一人称は「私たち」。指示形は「〜します」。
- **用語選択は [.claude/translation-glossary.md](.claude/translation-glossary.md) を唯一の情報源とする**。固有名詞（GitLab, Slack, Workday, Okta, Snowplow など）の英語維持、`DRI` / `iteration` → `イテレーション` / `handbook` → `ハンドブック` / `feature` → `機能` / `all-remote` → `オールリモート` / `Separation of Duty` → `職務分掌` などの指定訳、表記揺れ防止のための半角スペースルール、よくある誤訳の回避はすべて glossary に集約しています。翻訳・レビューで新しい訳ぶれを発見したら glossary を更新してください。
- フロントマター: `title` と `description` のみ翻訳し、その他のキー（`cascade`, `menu`, `weight`, `canonical_path`, `linkTitle`, `manualLinkRelref`, `no_list`, `aliases` など）は原文のまま保持します。追跡用フィールド（`upstream_path`, `upstream_sha`, `lastmod`, `translated_at`, `translator`, `stale`）は常に追加します。Codex 生成なら `translator: codex`、Claude Code 生成なら `translator: claude` とします。`lastmod` は `upstream_sha` 時点で原文を最後に変更した upstream コミットの ISO 8601 タイムスタンプで、ページに表示される最終更新日が翻訳コミット日ではなく原文の更新日になるようにします（manifest 側は `upstream_committed_at` という名前で同値を保持）。
- サイト上の免責事項に「正確性については英語の原文を参照してください」と記載しています — 翻訳は法的に厳密である必要はありませんが、原文にない内容を持ち込むべきではありません。

## デプロイ & インフラ

- Cloudflare Pages プロジェクトは git 連携ではなく **direct-upload** 方式です。`infra/` の Terraform はプロジェクトとバケットを宣言するのみで、実際のデプロイは `app_deploy.yml` 内の `cloudflare/wrangler-action` (`wrangler pages deploy`) によって行われます。Pages のビルド出力ディレクトリは `public/` です（旧 Astro 時代の `dist/` から変更）。`cloudflare_pages_project.site` に `source` ブロックを追加しないでください。
- Terraform の state は S3 互換バックエンド（`gitlab-handbook-ja-tf-state`）経由で R2 に保管されます。GHA ワークフローは環境変数ではなく `terraform init -backend-config=...` で R2 の認証情報を渡します。
- `infra/main.tf` はオプションのドメイン属性を `coalesce(..., "placeholder")` でラップしており、`count = 0` のリソースでも必須属性の検証を満たせるようにしています — オプションのリソースを追加する際もこのパターンを踏襲してください。
- Pages の production 向け `env_vars` は空の場合 `null` として渡します（プロバイダーが空のマップを拒否するため） — `locals.tf` を参照してください。

## Git ブランチ命名規則

形式: `<type>/<short-kebab-description>`

| type | 用途 |
| --- | --- |
| `feature/` | 新機能（アプリ・インフラ問わず） |
| `fix/` | バグ修正 |
| `refactor/` | 機能変更を伴わないリファクタリング |
| `docs/` | ドキュメント・CLAUDE.md のみの変更 |
| `translation/` | 翻訳コンテンツの追加・更新 |
| `chore/` | ビルド設定・依存関係更新など雑務 |

1ブランチ = 1つの関心事。インフラ変更とサイト変更は別ブランチに分ける。

## PR 作成時のファイル数制限

CodeRabbit がレビュー可能なのは **1 PR あたり最大 150 ファイル** までです。これを超えると CodeRabbit がレビューを実行できないため、PR を作成する際は変更ファイル数が 150 以内に収まるよう、必要に応じて複数の PR に分割してください（翻訳の一括コミットなどで特に注意）。

## CI ワークフロー

- `app_ci.yml` — Hugo 関連ファイル（`config/`, `content/`, `layouts/`, `data/`, `assets/`, `static/`, `go.mod`, `go.sum`, `package*.json`, `.tool-versions`）を変更する PR に対して: hugo build + dependency-review + gitleaks。サブモジュールチェックアウト付き（Hugo Modules の解決には不要だが、`assets/includes/` 等の検証で参照する場合あり）。
- `app_deploy.yml` — `main` への push に対して: hugo build して Cloudflare Pages にプッシュ。出力ディレクトリは `public/`。
- `infra_plan.yml` / `infra_apply.yml` — `tfcmt` 経由で terraform を実行し、plan を PR コメントとして投稿。

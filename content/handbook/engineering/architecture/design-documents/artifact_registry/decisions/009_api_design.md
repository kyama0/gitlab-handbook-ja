---
title: "Artifact Registry ADR 009: API 設計"
owning-stage: "~devops::package"
description: "レジストリの API エンドポイント編成に関する決定"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/artifact_registry/decisions/009_api_design/
upstream_sha: c6f416c14ee9f53cb671d49ff11a9671c68d9326
translated_at: "2026-06-09T00:00:00Z"
translator: claude
stale: false
lastmod: 2026-06-09T19:10:50+01:00
---

## Context

Artifact Registry には、以下の制約を満たす包括的な API 設計が必要です。

1. **2 つの API カテゴリー**: レジストリの概念とやり取りする管理 API と、特定の
   クライアントが使用するための厳密な仕様に従う Artifact Management Client API。
2. **データベースのデータ編成に従う**: API エンドポイントはアーティファクトの
   フォーマット別に編成され、リポジトリがフォーマット固有のテーブルとフィールドを
   持つデータベーススキーマ<!-- (see [ADR-007](007_database_schema.md)) -->と一致します。
   この 1 対 1 のマッピングは、複雑なマルチフォーマットの抽象化を避けることで実装を
   簡素化し、フォーマット固有の最適化を可能にします。
3. **3 つのリポジトリタイプ**: レジストリは 3 つのリポジトリタイプをサポートします。
   hosted（プッシュされたアーティファクト用のプライベートストレージ）、remote（外部
   レジストリのプロキシ／キャッシュ）、virtual（hosted と remote のアップストリームを
   組み合わせた集約プルエンドポイント）です。このモデルは業界の慣行と一致します。
   3 つのタイプはすべて、独立して管理可能なスタンドアロンのエンティティです。

Artifact Registry は、すべての URL に現れる、不変かつ顧客が選択したスラッグ
（[ADR-022](022_namespace_decoupling.md)）を通じて Organization にスコープされます
（その根拠は [ADR-001](001_organizations_as_anchor_point.md) を参照）。すべての
エンドポイントは、API バージョンプレフィックス（クライアント API の場合はプロトコル
プレフィックス）の後に `/:slug` パスセグメントを含み、すべてのリクエストを特定の
スラッグにスコープします。スラッグは、Organization のパス解決に依存することなく、
トポロジーサービスを介して安定した [Cells](../../cells/) ルーティングを提供します。

Artifact Registry は、メインの GitLab アプリケーションドメインとは分離された専用ドメイン
（例えば `artifact-registry.gitlab.com`）で提供されます。これにより、レジストリを
メインアプリケーションの cookie、資格情報、内部ネットワークコンテキストから隔離し、
[XSS](https://owasp.org/www-community/attacks/xss/) や
[SSRF](https://owasp.org/www-community/attacks/Server_Side_Request_Forgery) の脆弱性に
対するセキュリティ態勢を大幅に向上させます。

### Versioning

Artifact Registry は専用ドメインで動作するため、GitLab Rails モノリスで使われている
`/api/v4` プレフィックスは適用されません。モノリスは、同じドメイン上で API ルートを
Web UI ルートから分離するため、また API バージョンの系譜（v3 から v4）を反映するために
`/api/v4` を使っています。スタンドアロンのサービスにはどちらの懸念もありません。

管理 API のルートは、`/api/v1` のパスベースのバージョンプレフィックスを使います。
`/api/` プレフィックスは、同じドメイン上で管理ルートをプロトコル固有のクライアント
ルートから分離し、管理 API のバージョンが将来上がった場合のネームスペースの衝突を
防ぎます（例えば OCI は `/v2/` を必須とするため、むき出しの `/v2` 管理プレフィックスは
衝突します）。これは業界の慣行と一致します。パスベースのバージョニングは、ヘッダーの
検査を必要とせずに、URL、ログ、ルーティングルールの中でバージョンを可視化し続けます。

クライアント API はバージョンプレフィックスを使いません。プロトコル固有の
バージョニングは、必要に応じてクライアント自身が処理します（例えば OCI は `/v2/` を
必須とします）。これにより、クライアントが設定する URL を可能な限り短く保ちます。

### API Classification

API サーフェスは、異なるルールを持つ 2 つの明確なカテゴリーに分かれます。

1. **管理 API (Management APIs)**: レジストリの概念（リポジトリ、アーティファクト、
   ポリシーなど）に対する CRUD 操作のための REST および GraphQL API
   - 認証: GitLab の標準的な REST／GraphQL 認証
   - 目的: UI、自動化スクリプト、管理ツール
   - フォーマット: GitLab の標準 API パターンに従う JSON レスポンス
   - ページネーション: すべてのリスト系エンドポイントはページネーションされ、
     できればキーセットページネーション戦略を使用します

2. **Artifact Management Client API**: 業界標準の仕様を実装するプロトコル固有の API
   - 認証: プロトコル固有（OCI 用のベアラートークン、Maven 用の Basic 認証など）
   - 目的: ネイティブクライアントとの互換性（`docker`、`npm`、`mvn` コマンド）
   - フォーマット: プロトコル固有のレスポンス（OCI Distribution Spec、Maven Repository
     Layout、NPM Registry API）

どちらの API カテゴリーも、3 つのリポジトリタイプすべて（hosted、virtual、remote）に
サービスを提供します。クライアント API はフォーマットごとに編成され（フォーマットごとに
1 セットのエンドポイント）、一方で管理 API は統一されたリポジトリ CRUD を共有し、
フォーマットはフォーマット固有のサブリソースにのみ現れます。

この ADR は公開エンドポイントのみを扱います。サービス間の通信（例えば Rails モノリスと
Artifact Registry の間）は、別の ADR で扱います。

### URL Structure Design

管理 API のルートは**リポジトリにアンカーされます**。`/api/v1/:slug` プレフィックスは
すべてのルートで必須であり、概念的なレベルとしてはカウントされません。リポジトリの
エンドポイントは、一意なリポジトリ名を `:repository_name` パラメーターとして受け取ります。

すべてのリポジトリレベルのリソース（アーティファクト、ライフサイクルポリシー、
アップストリームの関連付け）は、hosted および remote のリポジトリがデータを分離された
フォーマット固有のテーブルに保存するため、リポジトリにスコープされます。

`:format` セグメントは、すべてのフォーマット固有のサブリソースについて**リポジトリの
後ろ**に現れます: `/api/v1/:slug/repositories/:repository_name/:format/...`（例えば
イメージの一覧表示、ライフサイクルポリシー）。リポジトリレベルのサブリソースは特定の
フォーマットに専用化されており、エンドポイントの編成と返される構造のカスタマイズに
おいて高い柔軟性を可能にします。これにはアーティファクトの操作とフォーマット固有の
設定の両方が含まれます。ネームスペースレベルのフォーマット固有の操作は、`:format` を
プレフィックスとして使います: `/api/v1/:slug/:format/statistics`。

リポジトリの CRUD 自体はフォーマットを持ちません。`repositories` の親テーブルが、
すべてのフォーマットとタイプ間で共有されるためです。フォーマットと種別 (kind) は、
URL セグメントではなく、リポジトリリソースのプロパティです。

例:

- すべてのリポジトリの一覧表示: `GET /api/v1/:slug/repositories`
- リポジトリの作成: `POST /api/v1/:slug/repositories`
- リポジトリの読み取り／更新／削除: `GET/PATCH/DELETE /api/v1/:slug/repositories/:repository_name`（対象概念の識別子を使うトップレベルのルート）
- コンテナリポジトリ内のイメージの一覧表示: `GET /api/v1/:slug/repositories/:repository_name/container/images`（フォーマット固有のサブリソース）
- ID によるイメージの取得: `GET /api/v1/:slug/repositories/:repository_name/container/images/:image_id`（リポジトリにスコープされたアーティファクトの詳細）

### Repository Name Immutability

リポジトリ名は作成時に設定され、変更できません。リポジトリの説明は変更可能なままです。
これにより、クライアント設定の破損、名前の再取得による認可のバイパス、そして暗黙的な
誤ルーティングを防ぎます。また、名前ベースの URL を可能にし（[下記](#human-friendly-urls)を
参照）、認可ルールを簡素化します。

これは業界の慣行と一致します。詳細は
[gitlab-org/gitlab#592582](https://gitlab.com/gitlab-org/gitlab/-/issues/592582) を
参照してください。

### Human-Friendly URLs

リポジトリのエンドポイントは、一意な名前を識別子として受け取ります。リポジトリ名は、
フォーマットやリポジトリタイプに関わらず、スラッグ内でグローバルに一意でなければ
なりません。このグローバルな一意性制約は業界の慣行と一致し、曖昧な名前ベースの
ルックアップを避けます。これは後でフォーマットごとの一意性に緩和でき、誰も壊しません。
逆に厳しくするのは破壊的変更になります。名前の不変性（[上記](#repository-name-immutability)を
参照）により、名前ベースの URL は安定したパスセグメントとして安全になります。スラッグは
不変です（[ADR-022](022_namespace_decoupling.md)）。したがって、URL パスのすべての
セグメントは人間が読める形であり、恒久的に安定しています。

## API Organization

### Management APIs

管理 API は GitLab の [REST API 認証](https://docs.gitlab.com/api/rest/authentication/)を
使います。

**Note:** `:format` はアーティファクトのフォーマット（`container`、`maven`、または
`npm`）を表します。

#### Namespace-level APIs

**Repository Management:**

- `GET    /api/v1/:slug/repositories`                  - すべてのリポジトリを一覧表示（全フォーマットにわたる hosted、virtual、remote）。フォーマットとリポジトリタイプによるフィルタリングをサポート
- `POST   /api/v1/:slug/repositories`                  - リポジトリを作成
- `GET    /api/v1/:slug/repositories/:repository_name` - リポジトリの詳細を取得
- `PATCH  /api/v1/:slug/repositories/:repository_name` - リポジトリを更新
- `DELETE /api/v1/:slug/repositories/:repository_name` - リポジトリを削除

リポジトリ詳細のレスポンスはポリモーフィックであり、その形はフォーマットと種別によって
変わります。

- すべてのリポジトリは、親の `repositories` テーブルから共通フィールドを返します: `name`、`format`、`kind`、`visibility`、`description`、カウンター（`artifacts_count`、`downloads_count`、`size_bytes`）、`last_updated_at`。
- フォーマット固有および種別固有のフィールドは、オプションのトップレベルキーとして
  現れるのではなく、単一の `settings` オブジェクトの下にネストされます。`format` と
  `kind` のフィールドは識別子 (discriminator) として機能します。クライアントはこれらを
  使って `settings` の形を解釈します。例えば、コンテナの remote リポジトリに対する
  `GET /api/v1/:slug/repositories/production-mirror` は以下を返します:

  ```json
  {
    "id": 456,
    "name": "production-mirror",
    "format": "container",
    "kind": "remote",
    "visibility": "private",
    "artifacts_count": 142,
    "downloads_count": 8503,
    "size_bytes": 5368709120,
    "settings": {
      "url": "https://registry-1.docker.io",
      "auth_url": "https://auth.docker.io",
      "cache_validity_hours": 24,
      "last_health_status": "healthy",
      "last_health_checked_at": "2026-03-24T08:00:00Z"
    }
  }
  ```

- `POST` と `PATCH` は、作成および更新の操作に対して同じネスト構造を受け取ります。

**Statistics:**

- `GET /api/v1/:slug/statistics`         - ストレージとダウンロードの集計統計を取得
- `GET /api/v1/:slug/:format/statistics` - 特定のフォーマットのストレージとダウンロードの統計を取得

**Lifecycle Policies:**

- `GET    /api/v1/:slug/lifecycle_policy`                - ライフサイクルポリシーを取得
- `PATCH  /api/v1/:slug/lifecycle_policy`                - ライフサイクルポリシーを更新
- `GET    /api/v1/:slug/lifecycle_policy/rules`          - ライフサイクルポリシーのルールを取得
- `POST   /api/v1/:slug/lifecycle_policy/rules`          - ライフサイクルポリシーのルールを作成
- `GET    /api/v1/:slug/lifecycle_policy/rules/:rule_id` - ライフサイクルポリシーのルールを取得
- `PATCH  /api/v1/:slug/lifecycle_policy/rules/:rule_id` - ライフサイクルポリシーのルールを更新
- `DELETE /api/v1/:slug/lifecycle_policy/rules/:rule_id` - ライフサイクルポリシーのルールを削除

#### Repository-level APIs

**Virtual Repository - Upstreams:**

アップストリームは、フォーマットごとのテーブル（`container_virtual_repository_upstreams`、
`maven_virtual_repository_upstreams`、`npm_virtual_repository_upstreams`）に、フォーマット
固有のアップストリームルールとともに保存されます。remote および hosted のリポジトリは
スタンドアロンのエンティティであるため、virtual リポジトリのアップストリームは既存の
リポジトリへの参照です。アップストリームのタイプ（hosted または remote）は、参照される
リポジトリの `kind` によって決定されます。

- `GET    /api/v1/:slug/repositories/:repository_name/:format/upstream_repositories`     - virtual リポジトリのアップストリームリポジトリ（hosted と remote）を、解決の優先順位順に一覧表示
- `POST   /api/v1/:slug/repositories/:repository_name/:format/upstream_repositories`     - リポジトリ（hosted または remote）を virtual リポジトリのアップストリームとして関連付け。`upstream_repository_id` を受け取る
- `GET    /api/v1/:slug/repositories/:repository_name/:format/upstream_repositories/:id` - アップストリームリポジトリの関連付けを取得
- `PATCH  /api/v1/:slug/repositories/:repository_name/:format/upstream_repositories/:id` - 関連付けの位置を更新。`position` フィールドのみ更新可能
- `DELETE /api/v1/:slug/repositories/:repository_name/:format/upstream_repositories/:id` - virtual リポジトリからアップストリームの関連付けを解除

**Remote Repository - Connection Test:**

- `POST /api/v1/:slug/repositories/:repository_name/test` - 設定された remote レジストリへの接続をテスト

**Statistics:**

- `GET    /api/v1/:slug/repositories/:repository_name/statistics`  - リポジトリのストレージとダウンロードの統計を取得

**Lifecycle Policies:**

リポジトリレベルのライフサイクルポリシーは、ネームスペースレベルのデフォルトを
オーバーライドするフォーマットごとのテーブル（`container_repository_lifecycle_policy_settings`
など）を使います。

- `GET    /api/v1/:slug/repositories/:repository_name/:format/lifecycle_policy`                - リポジトリのライフサイクルポリシーを取得
- `PATCH  /api/v1/:slug/repositories/:repository_name/:format/lifecycle_policy`                - リポジトリのライフサイクルポリシーを更新
- `GET    /api/v1/:slug/repositories/:repository_name/:format/lifecycle_policy/rules`          - リポジトリのライフサイクルポリシーのルールを取得
- `POST   /api/v1/:slug/repositories/:repository_name/:format/lifecycle_policy/rules`          - リポジトリのライフサイクルポリシーのルールを作成
- `GET    /api/v1/:slug/repositories/:repository_name/:format/lifecycle_policy/rules/:rule_id` - ライフサイクルポリシーのルールを取得
- `PATCH  /api/v1/:slug/repositories/:repository_name/:format/lifecycle_policy/rules/:rule_id` - ライフサイクルポリシーのルールを更新
- `DELETE /api/v1/:slug/repositories/:repository_name/:format/lifecycle_policy/rules/:rule_id` - ライフサイクルポリシーのルールを削除

#### Format-Specific Artifact APIs

すべてのアーティファクトエンドポイントはリポジトリにスコープされ、hosted と remote の
両方のリポジトリに一律に適用されます。ルート、動詞、ページネーションは両方の種別で
同一です。remote リポジトリは、hosted のスキーマをミラーリングする階層的なテーブル
（`*_remote_images`、`*_remote_packages`、`*_remote_versions`、`*_remote_files` など）に
アーティファクトをキャッシュします（[ADR-007](007_database_schema.md) を参照）。

レスポンスボディはリポジトリの `kind` によってポリモーフィックです。これは
[リポジトリ詳細の `settings` オブジェクト](#namespace-level-apis)に使われているのと
同じ慣行です。`kind` が `remote` の場合、鮮度が追跡される行（タグ、パッケージファイル、
メタデータファイル）にマッピングされる各エントリは、`upstream_checked_at` と
`upstream_etag` を公開するネストされた `cache` オブジェクトを持ちます。コンテナの
マニフェストとブロブはダイジェストによってコンテンツアドレス指定され、行ごとの鮮度を
持たないため、`cache` ブロックを持ちません。リポジトリレベルのキャッシュ設定
（`cache_validity_hours`、`metadata_cache_validity_hours`）はリポジトリ詳細の `settings`
オブジェクトに存在し、アーティファクトごとに繰り返されることはありません。

remote リポジトリにおける動詞のセマンティクスは、アップストリームではなくキャッシュ
された行を記述します。

- `DELETE` はキャッシュされた行を退避させます（アップストリームへの影響はなし。アーティファクトはクライアント API を介した次回のプル時に再取得されます）。
- `PATCH .../quarantine` はキャッシュされた行をブロック済みとしてフラグします。アップストリームにまだアーティファクトがあっても、クライアントのプルは `404 Not Found` を返します。このフラグはキャッシュされた行のライフサイクルに紐づいています。退避によってクリアされます。永続的またはダイジェストレベルのブロックは意図的にスコープ外です（API の問題ではなく、ライフサイクル管理の問題です）。
- `GET` は、上記の `cache` サブオブジェクトを除いて、両方の種別で同一です。

例えば、コンテナの _remote_ リポジトリ内のタグに対する
`GET /api/v1/:slug/repositories/library-mirror/container/images/42/tags/v1.2.3` は
以下を返します:

```json
{
  "id": 12345,
  "name": "v1.2.3",
  "manifest_digest": "sha256:...",
  "last_downloaded_at": "2026-05-05T18:21:00Z",
  "cache": {
    "upstream_checked_at": "2026-05-06T08:00:00Z",
    "upstream_etag": "\"e7c1f2...\""
  }
}
```

hosted リポジトリに対する同じリクエストは、`cache` オブジェクト _なし_ で同じ形を
返します。

**Container-specific - Images:**

コンテナリポジトリでは、アーティファクトは「イメージ」と呼ばれます。

- `GET    /api/v1/:slug/repositories/:repository_name/container/images`                      - コンテナリポジトリ内のイメージを一覧表示
- `GET    /api/v1/:slug/repositories/:repository_name/container/images/:image_id`            - イメージの詳細を取得
- `GET    /api/v1/:slug/repositories/:repository_name/container/images/:image_id/manifests`  - 指定したイメージのマニフェストを一覧表示
- `GET    /api/v1/:slug/repositories/:repository_name/container/images/:image_id/blobs`      - 指定したイメージのブロブを一覧表示
- `GET    /api/v1/:slug/repositories/:repository_name/container/images/:image_id/statistics` - イメージのストレージ、使用量、ダウンロードの統計を取得
- `DELETE /api/v1/:slug/repositories/:repository_name/container/images/:image_id`            - イメージを削除（ソフト削除またはハード削除）
- `DELETE /api/v1/:slug/repositories/:repository_name/container/images`                      - イメージを一括削除
- `PATCH  /api/v1/:slug/repositories/:repository_name/container/images/:image_id/quarantine` - 指定したイメージをクアランティン

**Container-specific - Image Tags:**

- `GET    /api/v1/:slug/repositories/:repository_name/container/images/:image_id/tags`                 - 指定したイメージのタグを一覧表示
- `GET    /api/v1/:slug/repositories/:repository_name/container/images/:image_id/tags/:tag/statistics` - タグのストレージ、使用量、ダウンロードの統計を取得
- `DELETE /api/v1/:slug/repositories/:repository_name/container/images/:image_id/tags/:tag`            - イメージタグを削除
- `DELETE /api/v1/:slug/repositories/:repository_name/container/images/:image_id/tags`                 - イメージタグのセットを削除

**Maven/NPM-specific - Packages:**

- `GET    /api/v1/:slug/repositories/:repository_name/:format/packages`                         - リポジトリ内のパッケージを一覧表示
- `GET    /api/v1/:slug/repositories/:repository_name/:format/packages/:package_id`             - パッケージの詳細を取得
- `GET    /api/v1/:slug/repositories/:repository_name/:format/packages/:package_id/statistics`  - パッケージのストレージ、使用量、ダウンロードの統計を取得
- `DELETE /api/v1/:slug/repositories/:repository_name/:format/packages/:package_id`             - パッケージを削除（ソフト削除またはハード削除）
- `DELETE /api/v1/:slug/repositories/:repository_name/:format/packages`                         - パッケージを一括削除
- `PATCH  /api/v1/:slug/repositories/:repository_name/:format/packages/:package_id/quarantine`  - 指定したパッケージをクアランティン
- `GET    /api/v1/:slug/repositories/:repository_name/:format/packages/:package_id/versions`    - 指定したパッケージのバージョンを一覧表示

**Maven/NPM-specific - Package Versions:**

- `GET    /api/v1/:slug/repositories/:repository_name/:format/versions/:version_id`            - バージョンの詳細を取得
- `GET    /api/v1/:slug/repositories/:repository_name/:format/versions/:version_id/statistics` - パッケージバージョンのストレージ、使用量、ダウンロードの統計を取得
- `DELETE /api/v1/:slug/repositories/:repository_name/:format/versions/:version_id`            - バージョンを削除（ソフト削除またはハード削除）
- `DELETE /api/v1/:slug/repositories/:repository_name/:format/versions`                        - バージョンを一括削除
- `GET    /api/v1/:slug/repositories/:repository_name/:format/versions/:version_id/files`      - 指定したバージョンのファイルを一覧表示

**Maven/NPM-specific - Package Files:**

- `GET    /api/v1/:slug/repositories/:repository_name/:format/files/:file_id`          - ファイルの詳細を取得
- `GET    /api/v1/:slug/repositories/:repository_name/:format/files/:file_id/download` - ファイルをダウンロード
- `DELETE /api/v1/:slug/repositories/:repository_name/:format/files/:file_id`          - ファイルを削除（ソフト削除またはハード削除）
- `DELETE /api/v1/:slug/repositories/:repository_name/:format/files`                   - ファイルを一括削除

**NPM-specific - Distribution Tags:**

- `GET    /api/v1/:slug/repositories/:repository_name/npm/packages/:package_id/tags` - 指定したパッケージのタグを一覧表示
- `GET    /api/v1/:slug/repositories/:repository_name/npm/tags/:tag_id`              - タグの詳細を取得
- `GET    /api/v1/:slug/repositories/:repository_name/npm/tags/:tag_id/statistics`   - タグのストレージ、使用量、ダウンロードの統計を取得
- `DELETE /api/v1/:slug/repositories/:repository_name/npm/tags/:tag_id`              - タグを削除

### Artifact Management Client APIs

クライアント API の URL は、すべてのリポジトリタイプ（hosted、remote、virtual）で同じ
です。レジストリは内部的にリポジトリの種別を解決し、タイプ固有の動作を適用します
（例えば、remote および virtual のリポジトリへの書き込みを拒否する）。

#### Container

[OCI Distribution Spec v1.1](https://github.com/opencontainers/distribution-spec/blob/main/spec.md) を実装します。認証: [ベアラートークン](https://docs.docker.com/reference/api/registry/auth/)。

- `GET    /v2/`                                                                                   - API バージョンとレジストリ実装を確認（OCI で必須、スラッグにスコープされない）
- `GET    /v2/:slug/container/:repository_name/:image_name/manifests/:reference`                  - マニフェストを取得（reference はタグまたはダイジェスト）
- `HEAD   /v2/:slug/container/:repository_name/:image_name/manifests/:reference`                  - マニフェストの存在を確認
- `PUT    /v2/:slug/container/:repository_name/:image_name/manifests/:reference`                  - マニフェストをアップロード（remote および virtual のリポジトリでは利用不可）
- `DELETE /v2/:slug/container/:repository_name/:image_name/manifests/:reference`                  - マニフェストを削除（ダイジェストまたはタグ参照による。remote および virtual のリポジトリでは利用不可）
- `DELETE /v2/:slug/container/:repository_name/:image_name/manifests/:tag`                        - 特定のタグを削除（remote および virtual のリポジトリでは利用不可）
- `GET    /v2/:slug/container/:repository_name/:image_name/blobs/:digest`                         - ブロブをダウンロード
- `HEAD   /v2/:slug/container/:repository_name/:image_name/blobs/:digest`                         - ブロブの存在を確認
- `DELETE /v2/:slug/container/:repository_name/:image_name/blobs/:digest`                         - ブロブを削除（remote および virtual のリポジトリでは利用不可）
- `POST   /v2/:slug/container/:repository_name/:image_name/blobs/uploads/`                        - ブロブのアップロードを開始（remote および virtual のリポジトリでは利用不可）
- `PATCH  /v2/:slug/container/:repository_name/:image_name/blobs/uploads/:uuid`                   - ブロブのチャンクをアップロード（remote および virtual のリポジトリでは利用不可）
- `GET    /v2/:slug/container/:repository_name/:image_name/blobs/uploads/:uuid`                   - ブロブのアップロード状態を取得（再開可能なアップロード用。remote および virtual のリポジトリでは利用不可）
- `PUT    /v2/:slug/container/:repository_name/:image_name/blobs/uploads/:uuid?digest=:digest`    - ブロブのアップロードを完了（remote および virtual のリポジトリでは利用不可）
- `DELETE /v2/:slug/container/:repository_name/:image_name/blobs/uploads/:uuid`                   - ブロブのアップロードをキャンセル（remote および virtual のリポジトリでは利用不可）
- `POST   /v2/:slug/container/:repository_name/:image_name/blobs/uploads/?digest=:digest`         - 単一のリクエストでブロブ全体をアップロード（remote および virtual のリポジトリでは利用不可）
- `GET    /v2/:slug/container/:repository_name/:image_name/tags/list`                             - リポジトリ内のすべてのタグを一覧表示
- `GET    /v2/:slug/container/:repository_name/:image_name/tags/list?n=100&last=tag_name`         - ページネーションされたタグの一覧表示
- `GET    /v2/:slug/container/:repository_name/:image_name/referrers/:digest`                     - マニフェストを参照するアーティファクト／アテステーションを一覧表示
- `GET    /v2/:slug/container/:repository_name/:image_name/referrers/:digest?artifactType=<type>` - アーティファクトタイプで referrer をフィルタリング

**Note:** OCI で必須の `GET /v2/` エンドポイントは `/:slug` プレフィックスを含まない
ため、[Cells](../../cells/) ルーターはパスだけからどの Cell がリクエストを処理すべきかを
判断できません。`GET /v2/` はステートレスなバージョンプローブ（OCI 準拠を示す
`200 OK`、そうでなければ `401 Unauthorized`）であるため、どの Cell でもこれにサービスを
提供できます。スラッグやルーティングコンテキストは不要です。その他のすべての
クライアントリクエストは、Cells ルーターがターゲットの Cell を判断するために使う
`/:slug` セグメントを持ちます。クライアントは
[`glab`](https://gitlab.com/gitlab-org/cli) を介してクライアント側で資格情報を取得し
（[ADR-020](020_authentication_flow.md) を参照）、最初からベアラートークンを提示する
ため、OCI の `401 WWW-Authenticate` リダイレクトチャレンジは使われません。
`GET /v2/_catalog`（Docker Registry HTTP API V2）は OCI Distribution Spec の一部では
なく、実装されません。

##### Client configuration example

リポジトリ名 `my-repo`、イメージ名 `my-app`、タグ `latest`、スラッグ
`acme-engineering` のコンテナリポジトリからイメージをプルする例:

```shell
docker pull artifact-registry.gitlab.com/acme-engineering/container/my-repo/my-app:latest
```

#### Maven

[Maven Repository Layout](https://maven.apache.org/repositories/layout.html) を実装
します。認証: Basic 認証。カスタムヘッダー認証（元の GitLab Maven パッケージ
レジストリ由来のレガシーなメカニズム）はサポートされません。Basic 認証は Maven
レジストリ全体で普遍的な標準であり、すべての主要なビルドツール（`mvn`、`gradle`、
`sbt`）でサポートされています。特に `sbt` は Basic 認証のみをサポートします。

- `GET /:slug/maven/:repository_name/*path/:file_name` - Maven の hosted、remote、または virtual のリポジトリからパッケージファイルをダウンロード
- `PUT /:slug/maven/:repository_name/*path/:file_name` - Maven の hosted リポジトリにパッケージファイルをアップロード（remote および virtual のリポジトリでは利用不可）

##### Client configuration example

スラッグ `acme-engineering` の Maven リポジトリ `my-repo` を `settings.xml` で依存関係の
ソースとして設定する例:

```xml
<settings>
  <servers>
    <server>
      <id>artifact-registry</id>
      <username>gitlab-token</username>
      <password>${GITLAB_TOKEN}</password>
    </server>
  </servers>
  <profiles>
    <profile>
      <id>artifact-registry</id>
      <repositories>
        <repository>
          <id>artifact-registry</id>
          <url>https://artifact-registry.gitlab.com/acme-engineering/maven/my-repo</url>
        </repository>
      </repositories>
    </profile>
  </profiles>
  <activeProfiles>
    <activeProfile>artifact-registry</activeProfile>
  </activeProfiles>
</settings>
```

#### NPM

[NPM Registry API](https://github.com/npm/registry/blob/main/docs/REGISTRY-API.md) を
実装します。認証: ベアラートークン。

- `GET    /:slug/npm/:repository_name/:package_name`                                 - パッケージのメタデータを取得
- `PUT    /:slug/npm/:repository_name/:package_name`                                 - パッケージを公開（remote および virtual のリポジトリでは利用不可）
- `PUT    /:slug/npm/:repository_name/:package_name/-rev/:rev`                       - 単一のバージョンの公開取り消し、ステップ 1: 対象バージョンを削除したパッケージドキュメントで置き換える（remote および virtual のリポジトリでは利用不可）
- `DELETE /:slug/npm/:repository_name/:package_name/-/:file_name/-rev/:rev`          - 単一のバージョンの公開取り消し、ステップ 2: バージョンの tarball を削除（remote および virtual のリポジトリでは利用不可）
- `DELETE /:slug/npm/:repository_name/:package_name/-rev/:rev`                       - パッケージ全体の公開を取り消し（`npm unpublish <pkg> --force`。remote および virtual のリポジトリでは利用不可）
- `GET    /:slug/npm/:repository_name/:package_name/-/:file_name`                    - パッケージファイルをダウンロード
- `GET    /:slug/npm/:repository_name/-/package/:package_name/dist-tags`             - パッケージの dist-tag を一覧表示
- `PUT    /:slug/npm/:repository_name/-/package/:package_name/dist-tags/:tag`        - dist-tag を作成または更新（remote および virtual のリポジトリでは利用不可）
- `DELETE /:slug/npm/:repository_name/-/package/:package_name/dist-tags/:tag`        - dist-tag を削除（remote および virtual のリポジトリでは利用不可）
- `POST   /:slug/npm/:repository_name/-/npm/v1/security/audits/quick`                - クイックセキュリティ監査
- `POST   /:slug/npm/:repository_name/-/npm/v1/security/advisories/bulk`             - 一括セキュリティアドバイザリー

##### Client configuration example

スラッグ `acme-engineering` の NPM リポジトリ `my-repo` を `.npmrc` で依存関係の
ソースとして設定する例:

```ini
@my-scope:registry=https://artifact-registry.gitlab.com/acme-engineering/npm/my-repo/
//artifact-registry.gitlab.com/acme-engineering/npm/my-repo/:_authToken=${GITLAB_TOKEN}
```

## Consequences

### Positive

- **関心の明確な分離**: 管理 API とクライアント API は明確な目的、認証メカニズム、
  対象ユーザーを持ち、混乱を減らし、独立した進化を可能にします
- **リポジトリにアンカーされた URL パターン**: すべてのアーティファクト操作は
  リポジトリにスコープされ、明確なルーティングコンテキストを提供し、hosted と remote の
  両方のリポジトリに同じ URL 構造を可能にします
- **恒久的に安定した、人間が読める URL**: スラッグとリポジトリ名はどちらも不変である
  ため、すべての URL パスセグメントは人間が読める形であり、決して変わりません。
  クライアント向けの URL に数値の ID は一切現れません
- **統一されたハイブリッドリスト**: 単一のエンドポイントが、すべてのフォーマットに
  わたるすべてのリポジトリ（hosted、virtual、remote）をフィルタリング付きで一覧表示し、
  プラットフォームエンジニア向けにフォーマット横断のガバナンスと監査可能性のビューを
  可能にします
- **スタンドアロンエンティティとしての remote リポジトリ**: remote リポジトリは独立して
  管理可能で、複数の virtual リポジトリ間で再利用可能であり、独自のライフサイクルを
  持ちます。これは業界の慣行（JFrog Artifactory、Sonatype Nexus、Google Cloud AR）と
  一致します
- **hosted と remote で統一されたアーティファクト構造**: remote リポジトリは hosted
  リポジトリと同じアーティファクト階層（images、packages、versions、files）を使います。
  同じルートが両方の種別にサービスを提供し、それを追跡する行に鮮度メタデータ
  （`upstream_checked_at`、`upstream_etag`）を表面化させるネストされた `cache`
  サブオブジェクトを持ちます。キャッシュのミューテーションは hosted リポジトリと同じ
  動詞を再利用するため（`DELETE` = 退避、`PATCH .../quarantine` = ブロック）、remote
  リポジトリのために API サーフェスが拡大することはありません。ポリモーフィックなのは
  レスポンスボディのみです
- **簡素化されたアップストリームモデル**: virtual リポジトリのアップストリームは、
  アップストリームタイプごとに別々のエンドポイント階層を使うのではなく、既存の
  リポジトリを ID で参照するため、API サーフェスと実装の複雑さを減らします
- **将来の拡張性**: この設計パターンは、アーキテクチャの変更なしに追加のパッケージ
  フォーマット（PyPI、NuGet、Helm など）を容易に受け入れます。管理 API とクライアント
  API は、それぞれの要件に基づいて独立して進化できます

### Negative

- **リポジトリ名の不変性が柔軟性を制限する**: タイプミスや組織的なリネームには、単に
  名前を変更するのではなく、新しいリポジトリを作成してアーティファクトを移行する必要が
  あります
- **グローバルな名前の一意性が制限的**: `my-app` のような名前はフォーマット間で再利用
  できません（例えば、ともに `my-app` という名前のコンテナと Maven のリポジトリ）。
  これは `my-app-docker` や `my-app-maven` のような命名規則につながる可能性があります。
  この制約は、破壊的変更なしに後で緩和できます
- **フォーマット固有の API サーフェス**: フォーマットごとにエンドポイントを専用化する
  ことは、フォーマット間でいくらかの重複を意味し、管理タスク向けの統一された
  フォーマット横断の操作がないことを意味します

## References

- [ADR-001: Organizations as Anchor Point](001_organizations_as_anchor_point.md)
- [ADR-022: Namespace Decoupling](022_namespace_decoupling.md)
- [Cells Architecture](../../cells/)
- [Container Registry Routing Service (Cells)](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/14825)
- [GitLab REST API Authentication](https://docs.gitlab.com/api/rest/authentication/)
- [OCI Distribution Spec v1.1](https://github.com/opencontainers/distribution-spec/blob/main/spec.md)
- [Docker Registry Bearer Token Authentication](https://docs.docker.com/reference/api/registry/auth/)
- [Maven Repository Layout](https://maven.apache.org/repositories/layout.html)
- [NPM Registry API](https://github.com/npm/registry/blob/main/docs/REGISTRY-API.md)
- [Repository Name Immutability Proposal](https://gitlab.com/gitlab-org/gitlab/-/issues/592582)

---
title: "Artifact Registry ADR 009: API 設計"
owning-stage: "~devops::package"
description: "レジストリの API エンドポイント編成に関する決定"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/artifact_registry/decisions/009_api_design/
upstream_sha: 5b642767a4478d09eeedd1689a94c1b164788f25
lastmod: "2026-06-09T19:10:50+01:00"
translated_at: "2026-06-12T14:13:12Z"
translator: claude
stale: false
model: claude-opus-4-7
---

## コンテキスト {#context}

Artifact Registry には、次の制約を伴う包括的な API 設計が必要です。

1. **2 つの API カテゴリ**: レジストリの概念とやり取りする管理 API と、特定のクライアントが使用する厳格な仕様に従う Artifact Management Client API です。
2. **データベースのデータ編成に従う**: API エンドポイントはアーティファクトフォーマットごとに編成され、リポジトリがフォーマット固有のテーブルとフィールドを持つデータベーススキーマ<!-- (see [ADR-007](007_database_schema.md)) -->と一致します。この 1 対 1 のマッピングにより、複雑なマルチフォーマットの抽象化を回避して実装を簡素化し、フォーマット固有の最適化を可能にします。
3. **3 つのリポジトリタイプ**: レジストリは 3 つのリポジトリタイプ — hosted（push されたアーティファクト用のプライベートストレージ）、remote（外部レジストリ用のプロキシ/キャッシュ）、virtual（hosted と remote のアップストリームを組み合わせた集約 pull エンドポイント）— をサポートします。このモデルは業界の慣行と一致します。3 つのタイプはいずれも独立しており、個別に管理可能なエンティティです。

Artifact Registry は、すべての URL に表示される、不変で顧客が選択するスラッグ（[ADR-022](022_namespace_decoupling.md)）を通じて Organizations にスコープされます（根拠については [ADR-001](001_organizations_as_anchor_point.md) を参照）。すべてのエンドポイントには API バージョンプレフィックス（クライアント API の場合はプロトコルプレフィックス）の後に `/:slug` パスセグメントが含まれ、すべてのリクエストを特定のスラッグにスコープします。スラッグは、組織パスの解決に依存することなく、トポロジーサービスを通じて安定した [Cells](../../cells/) ルーティングを提供します。

Artifact Registry は、メインの GitLab アプリケーションドメインとは別の専用ドメイン（例: `artifact-registry.gitlab.com`）で提供されます。これにより、レジストリをメインアプリケーションの cookie、認証情報、内部ネットワークコンテキストから分離することで、[XSS](https://owasp.org/www-community/attacks/xss/) および [SSRF](https://owasp.org/www-community/attacks/Server_Side_Request_Forgery) の脆弱性に対するセキュリティ態勢が大幅に改善されます。

### バージョニング {#versioning}

Artifact Registry は専用ドメインで動作するため、GitLab Rails モノリスで使用される `/api/v4` プレフィックスは適用されません。モノリスは、同じドメイン上で API ルートを web UI ルートから分離し、その API バージョンの系譜（v3 から v4）を反映するために `/api/v4` を使用します。独立したサービスにはどちらの懸念も存在しません。

管理 API ルートは `/api/v1` というパスベースのバージョンプレフィックスを使用します。`/api/` プレフィックスは、同じドメイン上で管理ルートをプロトコル固有のクライアントルートから分離し、管理 API バージョンが将来引き上げられた場合のネームスペースの衝突を防ぎます（例: OCI は `/v2/` を必須とするため、`/v2` という素の管理プレフィックスは衝突します）。これは業界の慣行と一致します。パスベースのバージョン管理は、ヘッダーの検査を必要とせず、URL、ログ、ルーティングルールにバージョンを表示し続けます。

クライアント API はバージョンプレフィックスを使用しません。プロトコル固有のバージョン管理は、必要に応じてクライアント自身が処理します（例: OCI は `/v2/` を必須とします）。これにより、クライアントが構成する URL を可能な限り短く保ちます。

### API 分類 {#api-classification}

API サーフェスは、異なるルールを持つ 2 つの異なるカテゴリに分けられます。

1. **管理 API**: レジストリの概念（リポジトリ、アーティファクト、ポリシーなど）に対する CRUD 操作のための REST および GraphQL API
   - 認証: GitLab の標準的な REST/GraphQL 認証
   - 目的: UI、自動化スクリプト、管理ツール
   - フォーマット: 標準的な GitLab API パターンを使用した JSON レスポンス
   - ページネーション: すべてのリストエンドポイントはページネーションされ、できればキーセットページネーション戦略を使用します

2. **Artifact Management Client API**: 業界標準仕様を実装するプロトコル固有の API
   - 認証: プロトコル固有（OCI 用の Bearer トークン、Maven 用の Basic 認証など）
   - 目的: ネイティブクライアントの互換性（`docker`、`npm`、`mvn` コマンド）
   - フォーマット: プロトコル固有のレスポンス（OCI Distribution Spec、Maven Repository Layout、NPM Registry API）

両方の API カテゴリは、3 つのリポジトリタイプすべて（hosted、virtual、remote）に対応します。クライアント API はフォーマットごとに編成され（フォーマットごとに 1 セットのエンドポイント）、一方で管理 API は統一されたリポジトリ CRUD を共有し、フォーマットはフォーマット固有のサブリソースにのみ現れます。

この ADR は公開向けのエンドポイントのみを扱います。サービス間通信（例: Rails モノリスと Artifact Registry の間）は別の ADR で扱います。

### URL 構造設計 {#url-structure-design}

管理 API ルートは **リポジトリにアンカーされます**。`/api/v1/:slug` プレフィックスはすべてのルートで必須であり、概念レベルとしてはカウントされません。リポジトリエンドポイントは、一意のリポジトリ名を `:repository_name` パラメータとして受け取ります。

すべてのリポジトリレベルのリソース（アーティファクト、ライフサイクルポリシー、アップストリームの関連付け）はリポジトリにスコープされます。これは、hosted および remote リポジトリが個別のフォーマット固有のテーブルにデータを保存するためです。

`:format` セグメントは、すべてのフォーマット固有のサブリソースについて **リポジトリの後** に現れます: `/api/v1/:slug/repositories/:repository_name/:format/...`（例: イメージのリスト表示、ライフサイクルポリシー）。リポジトリレベルのサブリソースは特定のフォーマット専用であり、エンドポイント編成における柔軟性の向上と返される構造のカスタマイズを可能にします。これにはアーティファクト操作とフォーマット固有の構成の両方が含まれます。ネームスペースレベルのフォーマット固有の操作は `:format` をプレフィックスとして使用します: `/api/v1/:slug/:format/statistics`。

リポジトリ CRUD 自体はフォーマットに依存しません。これは、`repositories` 親テーブルがすべてのフォーマットとタイプで共有されるためです。フォーマットと種類はリポジトリリソースのプロパティであり、URL セグメントではありません。

例:

- すべてのリポジトリのリスト表示: `GET /api/v1/:slug/repositories`
- リポジトリの作成: `POST /api/v1/:slug/repositories`
- リポジトリの読み取り/更新/削除: `GET/PATCH/DELETE /api/v1/:slug/repositories/:repository_name`（対象の概念識別子を使用したトップレベルルート）
- container リポジトリ内のイメージのリスト表示: `GET /api/v1/:slug/repositories/:repository_name/container/images`（フォーマット固有のサブリソース）
- ID によるイメージの取得: `GET /api/v1/:slug/repositories/:repository_name/container/images/:image_id`（リポジトリにスコープされたアーティファクトの詳細）

### リポジトリ名の不変性 {#repository-name-immutability}

リポジトリ名は作成時に設定され、変更できません。リポジトリの説明は変更可能なままです。これにより、壊れたクライアント構成、名前の再取得による認可バイパス、サイレントな誤ルーティングを防ぎます。また、名前ベースの URL（[下記](#human-friendly-urls)を参照）を可能にし、認可ルールを簡素化します。

これは業界の慣行と一致します。詳細については [gitlab-org/gitlab#592582](https://gitlab.com/gitlab-org/gitlab/-/issues/592582) を参照してください。

### 人間にやさしい URL {#human-friendly-urls}

リポジトリエンドポイントは、識別子として一意の名前を受け取ります。リポジトリ名は、フォーマットやリポジトリタイプに関係なく、スラッグ内でグローバルに一意でなければなりません。このグローバルな一意性制約は業界の慣行と一致し、あいまいな名前ベースのルックアップを回避します。これは後で誰にも影響を与えずにフォーマットごとの一意性に緩和できます。逆に厳格化することは破壊的変更になります。名前の不変性（[上記](#repository-name-immutability)を参照）により、名前ベースの URL は安定したパスセグメントとして安全になります。スラッグは不変であるため（[ADR-022](022_namespace_decoupling.md)）、URL パス内のすべてのセグメントは人間が読めて、永続的に安定しています。

## API 編成 {#api-organization}

### 管理 API {#management-apis}

管理 API は GitLab の [REST API 認証](https://docs.gitlab.com/api/rest/authentication/) を使用します。

**注:** `:format` はアーティファクトフォーマット（`container`、`maven`、または `npm`）を表します。

#### ネームスペースレベル API {#namespace-level-apis}

**リポジトリ管理:**

- `GET    /api/v1/:slug/repositories`                  - すべてのリポジトリ（すべてのフォーマットにわたる hosted、virtual、remote）のリスト表示。フォーマットおよびリポジトリタイプによるフィルタリングをサポート
- `POST   /api/v1/:slug/repositories`                  - リポジトリの作成
- `GET    /api/v1/:slug/repositories/:repository_name` - リポジトリ詳細の取得
- `PATCH  /api/v1/:slug/repositories/:repository_name` - リポジトリの更新
- `DELETE /api/v1/:slug/repositories/:repository_name` - リポジトリの削除

リポジトリ詳細のレスポンスはポリモーフィックであり、その形状はフォーマットと種類によって異なります。

- すべてのリポジトリは、親 `repositories` テーブルから共通フィールドを返します: `name`、`format`、`kind`、`visibility`、`description`、カウンター（`artifacts_count`、`downloads_count`、`size_bytes`）、および `last_updated_at`。
- フォーマット固有および種類固有のフィールドは、オプションのトップレベルキーとして現れるのではなく、単一の `settings` オブジェクトの下にネストされます。`format` および `kind` フィールドは識別子として機能します — クライアントはそれらを使用して `settings` の形状を解釈します。例えば、container remote リポジトリに対する `GET /api/v1/:slug/repositories/production-mirror` は次を返します。

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

- `POST` および `PATCH` は、作成および更新操作に対して同じネストされた構造を受け取ります。

**統計:**

- `GET /api/v1/:slug/statistics`         - ストレージとダウンロードの集計統計の取得
- `GET /api/v1/:slug/:format/statistics` - 特定のフォーマットのストレージとダウンロードの統計の取得

**ライフサイクルポリシー:**

- `GET    /api/v1/:slug/lifecycle_policy`                - ライフサイクルポリシーの取得
- `PATCH  /api/v1/:slug/lifecycle_policy`                - ライフサイクルポリシーの更新
- `GET    /api/v1/:slug/lifecycle_policy/rules`          - ライフサイクルポリシールールの取得
- `POST   /api/v1/:slug/lifecycle_policy/rules`          - ライフサイクルポリシールールの作成
- `GET    /api/v1/:slug/lifecycle_policy/rules/:rule_id` - ライフサイクルポリシールールの取得
- `PATCH  /api/v1/:slug/lifecycle_policy/rules/:rule_id` - ライフサイクルポリシールールの更新
- `DELETE /api/v1/:slug/lifecycle_policy/rules/:rule_id` - ライフサイクルポリシールールの削除

#### リポジトリレベル API {#repository-level-apis}

**virtual リポジトリ - アップストリーム:**

アップストリームは、フォーマット固有のアップストリームルールを持つフォーマットごとのテーブル（`container_virtual_repository_upstreams`、`maven_virtual_repository_upstreams`、`npm_virtual_repository_upstreams`）に保存されます。remote および hosted リポジトリは独立したエンティティであるため、virtual リポジトリのアップストリームは既存のリポジトリへの参照です。アップストリームのタイプ（hosted または remote）は、参照されるリポジトリの `kind` によって決定されます。

- `GET    /api/v1/:slug/repositories/:repository_name/:format/upstream_repositories`     - virtual リポジトリのアップストリームリポジトリ（hosted および remote）を解決優先度順にリスト表示
- `POST   /api/v1/:slug/repositories/:repository_name/:format/upstream_repositories`     - リポジトリ（hosted または remote）を virtual リポジトリのアップストリームとして関連付け。`upstream_repository_id` を受け取る
- `GET    /api/v1/:slug/repositories/:repository_name/:format/upstream_repositories/:id` - アップストリームリポジトリの関連付けの取得
- `PATCH  /api/v1/:slug/repositories/:repository_name/:format/upstream_repositories/:id` - 関連付けの位置の更新。`position` フィールドのみ更新可能
- `DELETE /api/v1/:slug/repositories/:repository_name/:format/upstream_repositories/:id` - virtual リポジトリからのアップストリームの関連付け解除

**remote リポジトリ - 接続テスト:**

- `POST /api/v1/:slug/repositories/:repository_name/test` - 構成された remote レジストリへの接続のテスト

**統計:**

- `GET    /api/v1/:slug/repositories/:repository_name/statistics`  - リポジトリのストレージとダウンロードの統計の取得

**ライフサイクルポリシー:**

リポジトリレベルのライフサイクルポリシーは、ネームスペースレベルのデフォルトを上書きするフォーマットごとのテーブル（`container_repository_lifecycle_policy_settings` など）を使用します。

- `GET    /api/v1/:slug/repositories/:repository_name/:format/lifecycle_policy`                - リポジトリのライフサイクルポリシーの取得
- `PATCH  /api/v1/:slug/repositories/:repository_name/:format/lifecycle_policy`                - リポジトリのライフサイクルポリシーの更新
- `GET    /api/v1/:slug/repositories/:repository_name/:format/lifecycle_policy/rules`          - リポジトリのライフサイクルポリシールールの取得
- `POST   /api/v1/:slug/repositories/:repository_name/:format/lifecycle_policy/rules`          - リポジトリのライフサイクルポリシールールの作成
- `GET    /api/v1/:slug/repositories/:repository_name/:format/lifecycle_policy/rules/:rule_id` - ライフサイクルポリシールールの取得
- `PATCH  /api/v1/:slug/repositories/:repository_name/:format/lifecycle_policy/rules/:rule_id` - ライフサイクルポリシールールの更新
- `DELETE /api/v1/:slug/repositories/:repository_name/:format/lifecycle_policy/rules/:rule_id` - ライフサイクルポリシールールの削除

#### フォーマット固有のアーティファクト API {#format-specific-artifact-apis}

すべてのアーティファクトエンドポイントはリポジトリにスコープされ、hosted および remote リポジトリの両方に均一に適用されます。ルート、動詞、ページネーションは両方の種類で同一です。remote リポジトリは、hosted スキーマをミラーリングする階層的なテーブル（`*_remote_images`、`*_remote_packages`、`*_remote_versions`、`*_remote_files` など）にアーティファクトをキャッシュします（[ADR-007](007_database_schema.md) を参照）。

レスポンスボディはリポジトリの `kind` によってポリモーフィックです — これは [リポジトリ詳細の `settings` オブジェクト](#namespace-level-apis) で使用されるのと同じ規則です。`kind` が `remote` の場合、鮮度追跡される行（タグ、パッケージファイル、メタデータファイル）にマッピングされる各エントリは、`upstream_checked_at` と `upstream_etag` を公開するネストされた `cache` オブジェクトを持ちます。container のマニフェストと blob はダイジェストによってコンテンツアドレス指定され、行ごとの鮮度を持たないため、`cache` ブロックを持ちません。リポジトリレベルのキャッシュ構成（`cache_validity_hours`、`metadata_cache_validity_hours`）はリポジトリ詳細の `settings` オブジェクトに存在し、アーティファクトごとには反映されません。

remote リポジトリ上の動詞のセマンティクスは、アップストリームではなくキャッシュされた行を記述します。

- `DELETE` はキャッシュされた行を削除します（アップストリームへの影響なし。アーティファクトはクライアント API を通じた次回の pull で再取得されます）。
- `PATCH .../quarantine` はキャッシュされた行をブロック済みとしてフラグ付けします。アップストリームにまだアーティファクトがある場合でも、クライアントの pull は `404 Not Found` を返します。フラグはキャッシュされた行のライフサイクルに紐付きます — 削除によってクリアされます。永続的またはダイジェストレベルのブロックは意図的に範囲外です（API ではなくライフサイクル管理の関心事です）。
- `GET` は、上記の `cache` サブオブジェクトを除いて両方の種類で同一です。

例えば、container _remote_ リポジトリのタグに対する `GET /api/v1/:slug/repositories/library-mirror/container/images/42/tags/v1.2.3` は次を返します。

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

hosted リポジトリに対する同じリクエストは、`cache` オブジェクト _なし_ で同じ形状を返します。

**container 固有 - イメージ:**

container リポジトリの場合、アーティファクトは「イメージ」と呼ばれます。

- `GET    /api/v1/:slug/repositories/:repository_name/container/images`                      - container リポジトリ内のイメージのリスト表示
- `GET    /api/v1/:slug/repositories/:repository_name/container/images/:image_id`            - イメージ詳細の取得
- `GET    /api/v1/:slug/repositories/:repository_name/container/images/:image_id/manifests`  - 指定されたイメージのマニフェストのリスト表示
- `GET    /api/v1/:slug/repositories/:repository_name/container/images/:image_id/blobs`      - 指定されたイメージの blob のリスト表示
- `GET    /api/v1/:slug/repositories/:repository_name/container/images/:image_id/statistics` - イメージのストレージ、使用状況、ダウンロードの統計の取得
- `DELETE /api/v1/:slug/repositories/:repository_name/container/images/:image_id`            - イメージの削除（ソフトまたはハード削除）
- `DELETE /api/v1/:slug/repositories/:repository_name/container/images`                      - イメージの一括削除
- `PATCH  /api/v1/:slug/repositories/:repository_name/container/images/:image_id/quarantine` - 指定されたイメージの検疫

**container 固有 - イメージタグ:**

- `GET    /api/v1/:slug/repositories/:repository_name/container/images/:image_id/tags`                 - 指定されたイメージのタグのリスト表示
- `GET    /api/v1/:slug/repositories/:repository_name/container/images/:image_id/tags/:tag/statistics` - タグのストレージ、使用状況、ダウンロードの統計の取得
- `DELETE /api/v1/:slug/repositories/:repository_name/container/images/:image_id/tags/:tag`            - イメージタグの削除
- `DELETE /api/v1/:slug/repositories/:repository_name/container/images/:image_id/tags`                 - 一連のイメージタグの削除

**Maven/NPM 固有 - パッケージ:**

- `GET    /api/v1/:slug/repositories/:repository_name/:format/packages`                         - リポジトリ内のパッケージのリスト表示
- `GET    /api/v1/:slug/repositories/:repository_name/:format/packages/:package_id`             - パッケージ詳細の取得
- `GET    /api/v1/:slug/repositories/:repository_name/:format/packages/:package_id/statistics`  - パッケージのストレージ、使用状況、ダウンロードの統計の取得
- `DELETE /api/v1/:slug/repositories/:repository_name/:format/packages/:package_id`             - パッケージの削除（ソフトまたはハード削除）
- `DELETE /api/v1/:slug/repositories/:repository_name/:format/packages`                         - パッケージの一括削除
- `PATCH  /api/v1/:slug/repositories/:repository_name/:format/packages/:package_id/quarantine`  - 指定されたパッケージの検疫
- `GET    /api/v1/:slug/repositories/:repository_name/:format/packages/:package_id/versions`    - 指定されたパッケージのバージョンのリスト表示

**Maven/NPM 固有 - パッケージバージョン:**

- `GET    /api/v1/:slug/repositories/:repository_name/:format/versions/:version_id`            - バージョン詳細の取得
- `GET    /api/v1/:slug/repositories/:repository_name/:format/versions/:version_id/statistics` - パッケージバージョンのストレージ、使用状況、ダウンロードの統計の取得
- `DELETE /api/v1/:slug/repositories/:repository_name/:format/versions/:version_id`            - バージョンの削除（ソフトまたはハード削除）
- `DELETE /api/v1/:slug/repositories/:repository_name/:format/versions`                        - バージョンの一括削除
- `GET    /api/v1/:slug/repositories/:repository_name/:format/versions/:version_id/files`      - 指定されたバージョンのファイルのリスト表示

**Maven/NPM 固有 - パッケージファイル:**

- `GET    /api/v1/:slug/repositories/:repository_name/:format/files/:file_id`          - ファイル詳細の取得
- `GET    /api/v1/:slug/repositories/:repository_name/:format/files/:file_id/download` - ファイルのダウンロード
- `DELETE /api/v1/:slug/repositories/:repository_name/:format/files/:file_id`          - ファイルの削除（ソフトまたはハード削除）
- `DELETE /api/v1/:slug/repositories/:repository_name/:format/files`                   - ファイルの一括削除

**NPM 固有 - ディストリビューションタグ:**

- `GET    /api/v1/:slug/repositories/:repository_name/npm/packages/:package_id/tags` - 指定されたパッケージのタグのリスト表示
- `GET    /api/v1/:slug/repositories/:repository_name/npm/tags/:tag_id`              - タグ詳細の取得
- `GET    /api/v1/:slug/repositories/:repository_name/npm/tags/:tag_id/statistics`   - タグのストレージ、使用状況、ダウンロードの統計の取得
- `DELETE /api/v1/:slug/repositories/:repository_name/npm/tags/:tag_id`              - タグの削除

### Artifact Management Client API {#artifact-management-client-apis}

クライアント API の URL は、すべてのリポジトリタイプ（hosted、remote、virtual）で同じです。レジストリは内部でリポジトリの種類を解決し、タイプ固有の動作を適用します（例: remote および virtual リポジトリでの書き込みを拒否）。

#### Container {#container}

[OCI Distribution Spec v1.1](https://github.com/opencontainers/distribution-spec/blob/main/spec.md) を実装します。認証: [Bearer トークン](https://docs.docker.com/reference/api/registry/auth/)。

- `GET    /v2/`                                                                                   - API バージョンとレジストリ実装の確認（OCI 必須、スラッグにスコープされない）
- `GET    /v2/:slug/container/:repository_name/:image_name/manifests/:reference`                  - マニフェストの取得（reference はタグまたはダイジェスト）
- `HEAD   /v2/:slug/container/:repository_name/:image_name/manifests/:reference`                  - マニフェストの存在確認
- `PUT    /v2/:slug/container/:repository_name/:image_name/manifests/:reference`                  - マニフェストのアップロード（remote および virtual リポジトリでは利用不可）
- `DELETE /v2/:slug/container/:repository_name/:image_name/manifests/:reference`                  - マニフェストの削除（ダイジェストまたはタグ reference による、remote および virtual リポジトリでは利用不可）
- `DELETE /v2/:slug/container/:repository_name/:image_name/manifests/:tag`                        - 特定のタグの削除（remote および virtual リポジトリでは利用不可）
- `GET    /v2/:slug/container/:repository_name/:image_name/blobs/:digest`                         - blob のダウンロード
- `HEAD   /v2/:slug/container/:repository_name/:image_name/blobs/:digest`                         - blob の存在確認
- `DELETE /v2/:slug/container/:repository_name/:image_name/blobs/:digest`                         - blob の削除（remote および virtual リポジトリでは利用不可）
- `POST   /v2/:slug/container/:repository_name/:image_name/blobs/uploads/`                        - blob アップロードの開始（remote および virtual リポジトリでは利用不可）
- `PATCH  /v2/:slug/container/:repository_name/:image_name/blobs/uploads/:uuid`                   - blob チャンクのアップロード（remote および virtual リポジトリでは利用不可）
- `GET    /v2/:slug/container/:repository_name/:image_name/blobs/uploads/:uuid`                   - blob アップロードステータスの取得（再開可能なアップロード用、remote および virtual リポジトリでは利用不可）
- `PUT    /v2/:slug/container/:repository_name/:image_name/blobs/uploads/:uuid?digest=:digest`    - blob アップロードの完了（remote および virtual リポジトリでは利用不可）
- `DELETE /v2/:slug/container/:repository_name/:image_name/blobs/uploads/:uuid`                   - blob アップロードのキャンセル（remote および virtual リポジトリでは利用不可）
- `POST   /v2/:slug/container/:repository_name/:image_name/blobs/uploads/?digest=:digest`         - 単一リクエストでの blob 全体のアップロード（remote および virtual リポジトリでは利用不可）
- `GET    /v2/:slug/container/:repository_name/:image_name/tags/list`                             - リポジトリ内のすべてのタグのリスト表示
- `GET    /v2/:slug/container/:repository_name/:image_name/tags/list?n=100&last=tag_name`         - ページネーションされたタグのリスト表示
- `GET    /v2/:slug/container/:repository_name/:image_name/referrers/:digest`                     - マニフェストを参照するアーティファクト/アテステーションのリスト表示
- `GET    /v2/:slug/container/:repository_name/:image_name/referrers/:digest?artifactType=<type>` - アーティファクトタイプによる referrer のフィルタリング

**注:** OCI 必須の `GET /v2/` エンドポイントには `/:slug` プレフィックスが含まれません。つまり、[Cells](../../cells/) ルーターはパスのみからどの Cell がリクエストを処理すべきかを判断できません。`GET /v2/` はステートレスなバージョンプローブ（OCI 準拠を示す `200 OK`、それ以外は `401 Unauthorized`）であるため、どの Cell でも処理できます。スラッグやルーティングコンテキストは必要ありません。他のすべてのクライアントリクエストは Cells ルーターがターゲット Cell を決定するために使用する `/:slug` セグメントを持ちます — クライアントは [`glab`](https://gitlab.com/gitlab-org/cli) を通じてクライアント側で認証情報を取得し（[ADR-020](020_authentication_flow.md) を参照）、最初から Bearer トークンを提示するため、OCI の `401 WWW-Authenticate` リダイレクトチャレンジは使用されません。`GET /v2/_catalog`（Docker Registry HTTP API V2）は OCI Distribution Spec の一部ではなく、実装されません。

##### クライアント設定例 {#client-configuration-example}

`my-repo` という名前の container リポジトリから、イメージ名 `my-app`、タグ `latest`、スラッグ `acme-engineering` でイメージを pull する場合:

```shell
docker pull artifact-registry.gitlab.com/acme-engineering/container/my-repo/my-app:latest
```

#### Maven {#maven}

[Maven Repository Layout](https://maven.apache.org/repositories/layout.html) を実装します。認証: Basic 認証。カスタムヘッダー認証（オリジナルの GitLab Maven package registry からのレガシーメカニズム）はサポートされません。Basic 認証は Maven レジストリ全体での普遍的な標準であり、すべての主要なビルドツール（`mvn`、`gradle`、`sbt`）でサポートされています。特に `sbt` は Basic 認証のみをサポートします。

- `GET /:slug/maven/:repository_name/*path/:file_name` - Maven の hosted、remote、または virtual リポジトリからのパッケージファイルのダウンロード
- `PUT /:slug/maven/:repository_name/*path/:file_name` - Maven hosted リポジトリへのパッケージファイルのアップロード（remote および virtual リポジトリでは利用不可）

##### クライアント設定例 {#client-configuration-example-1}

`my-repo` という名前で スラッグ `acme-engineering` の Maven リポジトリを、`settings.xml` で依存関係のソースとして構成する場合:

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

#### NPM {#npm}

[NPM Registry API](https://github.com/npm/registry/blob/main/docs/REGISTRY-API.md) を実装します。認証: Bearer トークン。

- `GET    /:slug/npm/:repository_name/:package_name`                                 - パッケージメタデータの取得
- `PUT    /:slug/npm/:repository_name/:package_name`                                 - パッケージの公開（remote および virtual リポジトリでは利用不可）
- `PUT    /:slug/npm/:repository_name/:package_name/-rev/:rev`                       - 単一バージョンの公開取り消し、ステップ 1: 当該バージョンを削除したパッケージドキュメントで置き換える（remote および virtual リポジトリでは利用不可）
- `DELETE /:slug/npm/:repository_name/:package_name/-/:file_name/-rev/:rev`          - 単一バージョンの公開取り消し、ステップ 2: バージョンの tarball を削除する（remote および virtual リポジトリでは利用不可）
- `DELETE /:slug/npm/:repository_name/:package_name/-rev/:rev`                       - パッケージ全体の公開取り消し（`npm unpublish <pkg> --force`、remote および virtual リポジトリでは利用不可）
- `GET    /:slug/npm/:repository_name/:package_name/-/:file_name`                    - パッケージファイルのダウンロード
- `GET    /:slug/npm/:repository_name/-/package/:package_name/dist-tags`             - パッケージの dist-tag のリスト表示
- `PUT    /:slug/npm/:repository_name/-/package/:package_name/dist-tags/:tag`        - dist-tag の作成または更新（remote および virtual リポジトリでは利用不可）
- `DELETE /:slug/npm/:repository_name/-/package/:package_name/dist-tags/:tag`        - dist-tag の削除（remote および virtual リポジトリでは利用不可）
- `POST   /:slug/npm/:repository_name/-/npm/v1/security/audits/quick`                - クイックセキュリティ監査
- `POST   /:slug/npm/:repository_name/-/npm/v1/security/advisories/bulk`             - 一括セキュリティアドバイザリ

##### クライアント設定例 {#client-configuration-example-2}

`my-repo` という名前で スラッグ `acme-engineering` の NPM リポジトリを、`.npmrc` で依存関係のソースとして構成する場合:

```ini
@my-scope:registry=https://artifact-registry.gitlab.com/acme-engineering/npm/my-repo/
//artifact-registry.gitlab.com/acme-engineering/npm/my-repo/:_authToken=${GITLAB_TOKEN}
```

## 結果 {#consequences}

### ポジティブ {#positive}

- **明確な関心の分離**: 管理 API とクライアント API は異なる目的、認証メカニズム、ターゲットオーディエンスを持ち、混乱を減らして独立した進化を可能にします
- **リポジトリにアンカーされた URL パターン**: すべてのアーティファクト操作はリポジトリにスコープされ、明確なルーティングコンテキストを提供し、hosted および remote リポジトリの両方に対して同じ URL 構造を可能にします
- **永続的に安定した、人間が読める URL**: スラッグとリポジトリ名はどちらも不変であるため、すべての URL パスセグメントは人間が読めて、決して変わりません。クライアント向けの URL に数値 ID は一切現れません
- **統一されたハイブリッドリスト**: 単一のエンドポイントが、フィルタリングを伴ってすべてのフォーマットにわたるすべてのリポジトリ（hosted、virtual、remote）をリスト表示し、プラットフォームエンジニア向けのクロスフォーマットのガバナンスと監査可能性のビューを可能にします
- **独立したエンティティとしての remote リポジトリ**: remote リポジトリは個別に管理可能で、複数の virtual リポジトリ間で再利用でき、独自のライフサイクルを持ち、業界の慣行（JFrog Artifactory、Sonatype Nexus、Google Cloud AR）と一致します
- **均一な hosted および remote アーティファクト構造**: remote リポジトリは hosted リポジトリと同じアーティファクト階層（images、packages、versions、files）を使用します。同じルートが両方の種類に対応し、ネストされた `cache` サブオブジェクトが、それを追跡する行に鮮度メタデータ（`upstream_checked_at`、`upstream_etag`）を表面化します。キャッシュの変更は hosted リポジトリと同じ動詞（`DELETE` = 削除、`PATCH .../quarantine` = ブロック）を再利用するため、API サーフェスは remote リポジトリに対して拡大しません — レスポンスボディのみがポリモーフィックです
- **簡素化されたアップストリームモデル**: virtual リポジトリのアップストリームは、アップストリームタイプごとに個別のエンドポイント階層を使用するのではなく、ID によって既存のリポジトリを参照し、API サーフェスと実装の複雑さを削減します
- **将来の拡張性**: この設計パターンは、アーキテクチャの変更なしに追加のパッケージフォーマット（PyPI、NuGet、Helm など）に容易に対応します。管理 API とクライアント API は、それぞれの要件に基づいて独立して進化できます

### ネガティブ {#negative}

- **リポジトリ名の不変性は柔軟性を制限する**: タイプミスや組織的なリネームには、単純にリネームするのではなく、新しいリポジトリを作成してアーティファクトをマイグレーションする必要があります
- **グローバルな名前の一意性は制限的**: `my-app` のような名前はフォーマット間で再利用できません（例: `my-app` という名前の container リポジトリと Maven リポジトリの両方）。これにより、`my-app-docker` や `my-app-maven` のような命名規則につながる可能性があります。この制約は破壊的変更なしに後で緩和できます
- **フォーマット固有の API サーフェス**: フォーマットごとにエンドポイントを専用化すると、フォーマット間である程度の重複が生じ、管理タスクに対する統一されたクロスフォーマット操作がありません

## 参考資料 {#references}

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

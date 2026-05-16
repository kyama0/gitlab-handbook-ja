---
title: "Artifact Registry ADR 009: API 設計"
owning-stage: "~devops::package"
description: "レジストリの API エンドポイント編成に関する決定"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/artifact_registry/decisions/009_api_design/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-14T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-04-02T14:01:56+02:00"
---

## コンテキスト

Artifact Registry は、以下の制約を満たす包括的な API 設計を必要とします。

1. **2 つの API カテゴリ**: レジストリの概念とやり取りするための管理用 API と、特定のクライアントが使用する厳格な仕様に従うアーティファクト管理クライアント用 API。
2. **データベースのデータ編成に従う**: API エンドポイントはアーティファクトフォーマット別に編成され、リポジトリがフォーマット固有のテーブルとフィールドを持つデータベーススキーマ <!-- ([ADR-007](007_database_schema.md) を参照) --> と一致します。この 1 対 1 のマッピングは、複雑なマルチフォーマット抽象化を回避することで実装をシンプルにし、フォーマット固有の最適化を可能にします。
3. **3 つのリポジトリタイプ**: レジストリは 3 つのリポジトリタイプ（push されたアーティファクトのプライベートストレージである local、外部レジストリのプロキシ/キャッシュである remote、local と remote の上流を組み合わせた集約 pull エンドポイントである virtual）をサポートします。このモデルは業界の慣行と一致しています。3 つすべては独立して管理可能なスタンドアロンエンティティです。

Artifact Registry は組織にスコープされ（理由は [ADR-001](001_organizations_as_anchor_point.md) を参照）、すべての URL に表れる、変更不可で顧客が選択するスラッグ（[ADR-022](022_namespace_decoupling.md)）を経由します。すべてのエンドポイントは API バージョンプレフィックス（またはクライアント API のプロトコルプレフィックス）の後に `/:slug` パスセグメントを含み、すべてのリクエストを特定のスラッグにスコープします。スラッグは、組織パス解決に依存せず、トポロジサービスを介して安定した [Cells](../../cells/) ルーティングを提供します。

Artifact Registry は、メイン GitLab アプリケーションドメインとは別の専用ドメイン（例: `artifact-registry.gitlab.com`）で提供されます。これは、レジストリをメインアプリケーションのクッキー、認証情報、内部ネットワークコンテキストから分離することで、[XSS](https://owasp.org/www-community/attacks/xss/) や [SSRF](https://owasp.org/www-community/attacks/Server_Side_Request_Forgery) の脆弱性に対するセキュリティ姿勢を大幅に改善します。

### バージョニング

Artifact Registry は専用ドメインで動作するため、GitLab Rails モノリスで使用されている `/api/v4` プレフィックスは適用されません。モノリスは同一ドメイン上で API ルートと Web UI ルートを区別し、API バージョンの系譜（v3 から v4）を反映するために `/api/v4` を使用します。スタンドアロンサービスではどちらの懸念も存在しません。

管理 API ルートはパスベースのバージョンプレフィックス `/api/v1` を使用します。`/api/` プレフィックスは同一ドメイン上で管理ルートとプロトコル固有のクライアントルートを区別し、管理 API バージョンが将来上げられた場合（例: OCI は `/v2/` を必須とするため、ベアな `/v2` 管理プレフィックスは衝突します）の名前空間衝突を防ぎます。これは業界の慣行と一致しています。パスベースのバージョニングは、ヘッダー検査を必要とせず、URL、ログ、ルーティングルールでバージョンを可視化します。

クライアント API はバージョンプレフィックスを使用しません。プロトコル固有のバージョニングは、必要に応じてクライアント自身によって処理されます（例: OCI は `/v2/` を必須とします）。これにより、クライアント設定の URL は可能な限り短くなります。

### API 分類

API サーフェスは、異なるルールを持つ 2 つの異なるカテゴリに分けられます。

1. **管理用 API**: レジストリ概念（リポジトリ、アーティファクト、ポリシーなど）の CRUD 操作のための REST と GraphQL API
   - 認証: GitLab の標準 REST/GraphQL 認証
   - 目的: UI、自動化スクリプト、管理ツール
   - フォーマット: 標準 GitLab API パターンによる JSON レスポンス
   - ページネーション: すべてのリストエンドポイントはページネーションされ、可能な限りキーセットページネーション戦略を使用

2. **アーティファクト管理クライアント API**: 業界標準仕様を実装するプロトコル固有の API
   - 認証: プロトコル固有（OCI 用 Bearer トークン、Maven 用 Basic 認証など）
   - 目的: ネイティブクライアント互換性（`docker`、`npm`、`mvn` コマンド）
   - フォーマット: プロトコル固有のレスポンス（OCI Distribution Spec、Maven Repository Layout、NPM Registry API）

両方の API カテゴリは、3 つのすべてのリポジトリタイプ（local、virtual、remote）に対応します。クライアント API はフォーマットごとに編成されます（フォーマットごとに 1 セットのエンドポイント）が、管理 API はフォーマットがフォーマット固有のサブリソースにのみ表れる統一されたリポジトリ CRUD を共有します。

この ADR はパブリック向けエンドポイントのみを扱います。サービス間通信（例: Rails モノリスと Artifact Registry の間）は別の ADR で扱います。

### URL 構造設計

管理 API ルートは **リポジトリにアンカー** されます。`/api/v1/:slug` プレフィックスはすべてのルートで必須であり、概念的なレベルとしてはカウントされません。リポジトリエンドポイントは、ユニークなリポジトリ名を `:repository_name` パラメータとして受け取ります。

すべてのリポジトリレベルのリソース（アーティファクト、ライフサイクルポリシー、上流アソシエーション）は、local と remote リポジトリがフォーマット固有の別個のテーブルにデータを保存するため、リポジトリにスコープされます。

`:format` セグメントは、フォーマット固有のすべてのサブリソースに対して **リポジトリの後** に表れます: `/api/v1/:slug/repositories/:repository_name/:format/...`（例: イメージのリスティング、ライフサイクルポリシー）。リポジトリレベルのサブリソースは特定のフォーマット専用であり、エンドポイント編成と返される構造のカスタマイズに高い柔軟性を提供します。これにはアーティファクト操作とフォーマット固有の設定の両方が含まれます。ネームスペースレベルのフォーマット固有操作は、`:format` をプレフィックスとして使用します: `/api/v1/:slug/:format/statistics`。

リポジトリ CRUD 自体はフォーマットフリーです。なぜなら、`repositories` 親テーブルはすべてのフォーマットとタイプで共有されるからです。フォーマットと種別はリポジトリリソースのプロパティであり、URL セグメントではありません。

例:

- すべてのリポジトリのリスティング: `GET /api/v1/:slug/repositories`
- リポジトリの作成: `POST /api/v1/:slug/repositories`
- リポジトリの読み取り/更新/削除: `GET/PATCH/DELETE /api/v1/:slug/repositories/:repository_name`（対象概念識別子を使用するトップレベルルート）
- コンテナリポジトリ内のイメージのリスティング: `GET /api/v1/:slug/repositories/:repository_name/container/images`（フォーマット固有のサブリソース）
- ID によるイメージの取得: `GET /api/v1/:slug/repositories/:repository_name/container/images/:image_id`（リポジトリにスコープされたアーティファクト詳細）

### リポジトリ名の不変性 {#repository-name-immutability}

リポジトリ名は作成時に設定され、変更できません。リポジトリの説明は変更可能です。これにより、クライアント設定の破損、名前再取得による認可バイパス、サイレントな誤ルーティングを防ぎます。また、名前ベースの URL（[後述](#human-friendly-urls)）を可能にし、認可ルールをシンプルにします。

これは業界の慣行と一致しています。詳細は [gitlab-org/gitlab#592582](https://gitlab.com/gitlab-org/gitlab/-/issues/592582) を参照してください。

### 人間にやさしい URL {#human-friendly-urls}

リポジトリエンドポイントは、識別子としてユニークな名前を受け取ります。リポジトリ名はフォーマットやリポジトリタイプに関係なく、スラッグ内でグローバルにユニークである必要があります。このグローバル一意性制約は業界の慣行と一致し、あいまいな名前ベースのルックアップを回避します。後で互換性を破ることなくフォーマットごとの一意性に緩和できます。締め付ける方は破壊的変更となります。名前の不変性（[前述](#repository-name-immutability)）により、名前ベースの URL を安定したパスセグメントとして安全に使用できます。スラッグは不変（[ADR-022](022_namespace_decoupling.md)）であるため、URL パスのすべてのセグメントは人間可読で恒久的に安定します。

## API 編成

### 管理用 API

管理 API は GitLab の [REST API 認証](https://docs.gitlab.com/api/rest/authentication/) を使用します。

**注意:** `:format` はアーティファクトフォーマット（`container`、`maven`、または `npm`）を表します。

#### ネームスペースレベル API

**リポジトリ管理:**

- `GET    /api/v1/:slug/repositories`                  - すべてのリポジトリをリスティング（すべてのフォーマット・local、virtual、remote 横断）。フォーマットとリポジトリタイプによるフィルタリングをサポート
- `POST   /api/v1/:slug/repositories`                  - リポジトリを作成
- `GET    /api/v1/:slug/repositories/:repository_name` - リポジトリ詳細を取得
- `PATCH  /api/v1/:slug/repositories/:repository_name` - リポジトリを更新
- `DELETE /api/v1/:slug/repositories/:repository_name` - リポジトリを削除

リポジトリ詳細レスポンスはポリモーフィックです。形状はフォーマットと種別によって異なります。

- すべてのリポジトリは親 `repositories` テーブルから共通フィールドを返します: `name`、`format`、`kind`、`visibility`、`description`、カウンタ（`artifacts_count`、`downloads_count`、`size_bytes`）、`last_updated_at`。
- フォーマット固有および種別固有のフィールドは、オプションのトップレベルキーとして表れるのではなく、単一の `settings` オブジェクトの下にネストされます。`format` と `kind` フィールドはディスクリミネータとして機能します。クライアントはこれらを使用して `settings` の形状を解釈します。例えば、コンテナの remote リポジトリ上の `GET /api/v1/:slug/repositories/production-mirror` は次を返します。

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

- `POST` と `PATCH` は作成と更新の操作で同じネスト構造を受け取ります。

**統計:**

- `GET /api/v1/:slug/statistics`         - 集計ストレージとダウンロード統計を取得
- `GET /api/v1/:slug/:format/statistics` - 特定のフォーマットのストレージとダウンロード統計を取得

**ライフサイクルポリシー:**

- `GET    /api/v1/:slug/lifecycle_policy`                - ライフサイクルポリシーを取得
- `PATCH  /api/v1/:slug/lifecycle_policy`                - ライフサイクルポリシーを更新
- `GET    /api/v1/:slug/lifecycle_policy/rules`          - ライフサイクルポリシールールを取得
- `POST   /api/v1/:slug/lifecycle_policy/rules`          - ライフサイクルポリシールールを作成
- `GET    /api/v1/:slug/lifecycle_policy/rules/:rule_id` - ライフサイクルポリシールールを取得
- `PATCH  /api/v1/:slug/lifecycle_policy/rules/:rule_id` - ライフサイクルポリシールールを更新
- `DELETE /api/v1/:slug/lifecycle_policy/rules/:rule_id` - ライフサイクルポリシールールを削除

#### リポジトリレベル API

**Virtual Repository - 上流:**

上流はフォーマットごとのテーブル（`container_virtual_repository_upstreams`、`maven_virtual_repository_upstreams`、`npm_virtual_repository_upstreams`）に保存され、フォーマット固有の上流ルールを持ちます。remote と local リポジトリはスタンドアロンエンティティであるため、virtual リポジトリの上流は既存リポジトリへの参照です。上流タイプ（local または remote）は参照されたリポジトリの `kind` によって決定されます。

- `GET    /api/v1/:slug/repositories/:repository_name/:format/upstream_repositories`     - virtual リポジトリの上流リポジトリ（local と remote）を解決優先度順にリスティング
- `POST   /api/v1/:slug/repositories/:repository_name/:format/upstream_repositories`     - リポジトリ（local または remote）を virtual リポジトリの上流として関連付け。`upstream_repository_id` を受け取る
- `GET    /api/v1/:slug/repositories/:repository_name/:format/upstream_repositories/:id` - 上流リポジトリの関連付けを取得
- `PATCH  /api/v1/:slug/repositories/:repository_name/:format/upstream_repositories/:id` - 関連付けの位置を更新。`position` フィールドのみ更新可能
- `DELETE /api/v1/:slug/repositories/:repository_name/:format/upstream_repositories/:id` - virtual リポジトリから上流の関連付けを解除

**Remote Repository - 接続テスト:**

- `POST /api/v1/:slug/repositories/:repository_name/test` - 設定された remote レジストリへの接続をテスト

**統計:**

- `GET    /api/v1/:slug/repositories/:repository_name/statistics`  - リポジトリのストレージとダウンロード統計を取得

**ライフサイクルポリシー:**

リポジトリレベルのライフサイクルポリシーは、ネームスペースレベルのデフォルトを上書きするフォーマットごとのテーブル（`container_repository_lifecycle_policy_settings` など）を使用します。

- `GET    /api/v1/:slug/repositories/:repository_name/:format/lifecycle_policy`                - リポジトリのライフサイクルポリシーを取得
- `PATCH  /api/v1/:slug/repositories/:repository_name/:format/lifecycle_policy`                - リポジトリのライフサイクルポリシーを更新
- `GET    /api/v1/:slug/repositories/:repository_name/:format/lifecycle_policy/rules`          - リポジトリのライフサイクルポリシールールを取得
- `POST   /api/v1/:slug/repositories/:repository_name/:format/lifecycle_policy/rules`          - リポジトリのライフサイクルポリシールールを作成
- `GET    /api/v1/:slug/repositories/:repository_name/:format/lifecycle_policy/rules/:rule_id` - ライフサイクルポリシールールを取得
- `PATCH  /api/v1/:slug/repositories/:repository_name/:format/lifecycle_policy/rules/:rule_id` - ライフサイクルポリシールールを更新
- `DELETE /api/v1/:slug/repositories/:repository_name/:format/lifecycle_policy/rules/:rule_id` - ライフサイクルポリシールールを削除

#### フォーマット固有のアーティファクト API

すべてのアーティファクトエンドポイントはリポジトリにスコープされます。これらのエンドポイントは local と remote リポジトリの両方に均一に適用されます。remote リポジトリは local リポジトリと同じアーティファクトデータ構造を使用します。

**Container 固有 - イメージ:**

コンテナリポジトリでは、アーティファクトは「イメージ」と呼ばれます。

- `GET    /api/v1/:slug/repositories/:repository_name/container/images`                      - コンテナリポジトリ内のイメージをリスティング
- `GET    /api/v1/:slug/repositories/:repository_name/container/images/:image_id`            - イメージ詳細を取得
- `GET    /api/v1/:slug/repositories/:repository_name/container/images/:image_id/manifests`  - 指定イメージのマニフェストをリスティング
- `GET    /api/v1/:slug/repositories/:repository_name/container/images/:image_id/blobs`      - 指定イメージの blob をリスティング
- `GET    /api/v1/:slug/repositories/:repository_name/container/images/:image_id/statistics` - イメージのストレージ、使用、ダウンロード統計を取得
- `DELETE /api/v1/:slug/repositories/:repository_name/container/images/:image_id`            - イメージを削除（ソフトまたはハード削除）
- `DELETE /api/v1/:slug/repositories/:repository_name/container/images`                      - イメージを一括削除
- `PATCH  /api/v1/:slug/repositories/:repository_name/container/images/:image_id/quarantine` - 指定イメージを隔離

**Container 固有 - イメージタグ:**

- `GET    /api/v1/:slug/repositories/:repository_name/container/images/:image_id/tags`                 - 指定イメージのタグをリスティング
- `GET    /api/v1/:slug/repositories/:repository_name/container/images/:image_id/tags/:tag/statistics` - タグのストレージ、使用、ダウンロード統計を取得
- `DELETE /api/v1/:slug/repositories/:repository_name/container/images/:image_id/tags/:tag`            - イメージタグを削除
- `DELETE /api/v1/:slug/repositories/:repository_name/container/images/:image_id/tags`                 - イメージタグの集合を削除

**Maven/NPM 固有 - パッケージ:**

- `GET    /api/v1/:slug/repositories/:repository_name/:format/packages`                         - リポジトリ内のパッケージをリスティング
- `GET    /api/v1/:slug/repositories/:repository_name/:format/packages/:package_id`             - パッケージ詳細を取得
- `GET    /api/v1/:slug/repositories/:repository_name/:format/packages/:package_id/statistics`  - パッケージのストレージ、使用、ダウンロード統計を取得
- `DELETE /api/v1/:slug/repositories/:repository_name/:format/packages/:package_id`             - パッケージを削除（ソフトまたはハード削除）
- `DELETE /api/v1/:slug/repositories/:repository_name/:format/packages`                         - パッケージを一括削除
- `PATCH  /api/v1/:slug/repositories/:repository_name/:format/packages/:package_id/quarantine`  - 指定パッケージを隔離
- `GET    /api/v1/:slug/repositories/:repository_name/:format/packages/:package_id/versions`    - 指定パッケージのバージョンをリスティング

**Maven/NPM 固有 - パッケージバージョン:**

- `GET    /api/v1/:slug/repositories/:repository_name/:format/versions/:version_id`            - バージョン詳細を取得
- `GET    /api/v1/:slug/repositories/:repository_name/:format/versions/:version_id/statistics` - パッケージバージョンのストレージ、使用、ダウンロード統計を取得
- `DELETE /api/v1/:slug/repositories/:repository_name/:format/versions/:version_id`            - バージョンを削除（ソフトまたはハード削除）
- `DELETE /api/v1/:slug/repositories/:repository_name/:format/versions`                        - バージョンを一括削除
- `GET    /api/v1/:slug/repositories/:repository_name/:format/versions/:version_id/files`      - 指定バージョンのファイルをリスティング

**Maven/NPM 固有 - パッケージファイル:**

- `GET    /api/v1/:slug/repositories/:repository_name/:format/files/:file_id`          - ファイル詳細を取得
- `GET    /api/v1/:slug/repositories/:repository_name/:format/files/:file_id/download` - ファイルをダウンロード
- `DELETE /api/v1/:slug/repositories/:repository_name/:format/files/:file_id`          - ファイルを削除（ソフトまたはハード削除）
- `DELETE /api/v1/:slug/repositories/:repository_name/:format/files`                   - ファイルを一括削除

**NPM 固有 - 配布タグ:**

- `GET    /api/v1/:slug/repositories/:repository_name/npm/packages/:package_id/tags` - 指定パッケージのタグをリスティング
- `GET    /api/v1/:slug/repositories/:repository_name/npm/tags/:tag_id`              - タグ詳細を取得
- `GET    /api/v1/:slug/repositories/:repository_name/npm/tags/:tag_id/statistics`   - タグのストレージ、使用、ダウンロード統計を取得
- `DELETE /api/v1/:slug/repositories/:repository_name/npm/tags/:tag_id`              - タグを削除

### アーティファクト管理クライアント API

クライアント API URL はすべてのリポジトリタイプ（local、remote、virtual）で同じです。レジストリは内部的にリポジトリ種別を解決し、タイプ固有の動作を適用します（例: remote と virtual リポジトリへの書き込み拒否）。

#### Container

[OCI Distribution Spec v1.1](https://github.com/opencontainers/distribution-spec/blob/main/spec.md) を実装します。認証: [Bearer トークン](https://docs.docker.com/reference/api/registry/auth/)。

- `GET    /v2/`                                                                                   - API バージョンとレジストリ実装を確認（OCI 必須、スラッグにスコープされない）
- `GET    /v2/:slug/container/:repository_name/:image_name/manifests/:reference`                  - マニフェストを取得（reference はタグまたはダイジェスト）
- `HEAD   /v2/:slug/container/:repository_name/:image_name/manifests/:reference`                  - マニフェストの存在を確認
- `PUT    /v2/:slug/container/:repository_name/:image_name/manifests/:reference`                  - マニフェストをアップロード（remote と virtual リポジトリでは利用不可）
- `DELETE /v2/:slug/container/:repository_name/:image_name/manifests/:reference`                  - マニフェストを削除（ダイジェストまたはタグ参照、remote と virtual リポジトリでは利用不可）
- `DELETE /v2/:slug/container/:repository_name/:image_name/manifests/:tag`                        - 特定のタグを削除（remote と virtual リポジトリでは利用不可）
- `GET    /v2/:slug/container/:repository_name/:image_name/blobs/:digest`                         - blob をダウンロード
- `HEAD   /v2/:slug/container/:repository_name/:image_name/blobs/:digest`                         - blob の存在を確認
- `DELETE /v2/:slug/container/:repository_name/:image_name/blobs/:digest`                         - blob を削除（remote と virtual リポジトリでは利用不可）
- `POST   /v2/:slug/container/:repository_name/:image_name/blobs/uploads/`                        - blob アップロードを開始（remote と virtual リポジトリでは利用不可）
- `PATCH  /v2/:slug/container/:repository_name/:image_name/blobs/uploads/:uuid`                   - blob チャンクをアップロード（remote と virtual リポジトリでは利用不可）
- `GET    /v2/:slug/container/:repository_name/:image_name/blobs/uploads/:uuid`                   - blob アップロードのステータスを取得（再開可能なアップロード用、remote と virtual リポジトリでは利用不可）
- `PUT    /v2/:slug/container/:repository_name/:image_name/blobs/uploads/:uuid?digest=:digest`    - blob アップロードを完了（remote と virtual リポジトリでは利用不可）
- `DELETE /v2/:slug/container/:repository_name/:image_name/blobs/uploads/:uuid`                   - blob アップロードをキャンセル（remote と virtual リポジトリでは利用不可）
- `POST   /v2/:slug/container/:repository_name/:image_name/blobs/uploads/?digest=:digest`         - 単一リクエストで blob 全体をアップロード（remote と virtual リポジトリでは利用不可）
- `GET    /v2/:slug/container/:repository_name/:image_name/tags/list`                             - リポジトリ内のすべてのタグをリスティング
- `GET    /v2/:slug/container/:repository_name/:image_name/tags/list?n=100&last=tag_name`         - ページネーションされたタグリスティング
- `GET    /v2/:slug/container/:repository_name/:image_name/referrers/:digest`                     - マニフェストを参照するアーティファクト/アテステーションをリスティング
- `GET    /v2/:slug/container/:repository_name/:image_name/referrers/:digest?artifactType=<type>` - アーティファクトタイプでリファラをフィルタ

**注意:** OCI 必須の `GET /v2/` エンドポイントは `/:slug` プレフィックスを含まないため、[Cells](../../cells/) ルーターはパスのみからどの Cell がリクエストを処理すべきかを決定できません。[Registry Routing Service](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/14825) と同じアプローチに従い、認証されていない `GET /v2/` リクエストは任意の Cell にルーティングされ（任意の Cell が `401` チャレンジで応答可能）、その後の認証されたリクエストは JWT トークンに埋め込まれたスラッグを使用してルーティングされます。`GET /v2/_catalog`（Docker Registry HTTP API V2）は OCI Distribution Spec の一部ではなく、実装されません。

##### クライアント設定例

スラッグ `acme-engineering` のコンテナリポジトリ `my-repo` から、イメージ名 `my-app`、タグ `latest` のイメージを pull する例:

```shell
docker pull artifact-registry.gitlab.com/acme-engineering/container/my-repo/my-app:latest
```

#### Maven

[Maven Repository Layout](https://maven.apache.org/repositories/layout.html) を実装します。認証: Basic 認証。カスタムヘッダー認証（オリジナルの GitLab Maven パッケージレジストリからのレガシーメカニズム）はサポートされません。Basic 認証は Maven レジストリ全体での普遍的な標準であり、すべての主要なビルドツール（`mvn`、`gradle`、`sbt`）でサポートされています。特に、`sbt` は Basic 認証のみをサポートします。

- `GET /:slug/maven/:repository_name/*path/:file_name` - Maven の local、remote、または virtual リポジトリからパッケージファイルをダウンロード
- `PUT /:slug/maven/:repository_name/*path/:file_name` - Maven の local リポジトリへパッケージファイルをアップロード（remote と virtual リポジトリでは利用不可）

##### クライアント設定例

スラッグ `acme-engineering` の Maven リポジトリ `my-repo` を `settings.xml` で依存性ソースとして設定する例:

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

[NPM Registry API](https://github.com/npm/registry/blob/main/docs/REGISTRY-API.md) を実装します。認証: Bearer トークン。

- `GET    /:slug/npm/:repository_name/:package_name`                          - パッケージメタデータを取得
- `PUT    /:slug/npm/:repository_name/:package_name`                          - パッケージを公開（remote と virtual リポジトリでは利用不可）
- `GET    /:slug/npm/:repository_name/:package_name/-/:file_name`             - パッケージファイルをダウンロード
- `GET    /:slug/npm/:repository_name/-/package/:package_name/dist-tags`      - パッケージの dist-tags をリスティング
- `PUT    /:slug/npm/:repository_name/-/package/:package_name/dist-tags/:tag` - dist-tag を作成または更新（remote と virtual リポジトリでは利用不可）
- `DELETE /:slug/npm/:repository_name/-/package/:package_name/dist-tags/:tag` - dist-tag を削除（remote と virtual リポジトリでは利用不可）
- `GET    /:slug/npm/:repository_name/-/v1/security/audits/quick`             - クイックセキュリティ監査
- `POST   /:slug/npm/:repository_name/-/v1/security/advisories/bulk`          - 一括セキュリティアドバイザリ（remote と virtual リポジトリでは利用不可）

##### クライアント設定例

スラッグ `acme-engineering` の NPM リポジトリ `my-repo` を `.npmrc` で依存性ソースとして設定する例:

```ini
@my-scope:registry=https://artifact-registry.gitlab.com/acme-engineering/npm/my-repo/
//artifact-registry.gitlab.com/acme-engineering/npm/my-repo/:_authToken=${GITLAB_TOKEN}
```

## 帰結

### ポジティブ

- **明確な関心の分離**: 管理 API とクライアント API は異なる目的、認証メカニズム、ターゲットオーディエンスを持ち、混乱を減らし独立した進化を可能にします
- **リポジトリにアンカーされた URL パターン**: すべてのアーティファクト操作はリポジトリにスコープされ、明確なルーティングコンテキストを提供し、local と remote リポジトリの両方で同じ URL 構造を可能にします
- **恒久的に安定した、人間可読な URL**: スラッグとリポジトリ名はどちらも不変であるため、すべての URL パスセグメントは人間可読で決して変わりません。クライアント向け URL に数値 ID は表れません
- **統合ハイブリッドリスト**: 単一エンドポイントが、すべてのリポジトリ（local、virtual、remote）をすべてのフォーマット横断でフィルタリング付きでリスティングし、プラットフォームエンジニア向けにフォーマット横断のガバナンスと監査可能性ビューを実現します
- **スタンドアロンエンティティとしての remote リポジトリ**: remote リポジトリは独立して管理可能で、複数の virtual リポジトリで再利用可能であり、独自のライフサイクルを持ちます。これは業界の慣行（JFrog Artifactory、Sonatype Nexus、Google Cloud AR）と一致します
- **local と remote の統一されたアーティファクト構造**: remote リポジトリは local リポジトリと同じアーティファクト階層（イメージ、パッケージ、バージョン、ファイル）を使用し、リポジトリ種別全体で一貫した UI と API を可能にします
- **シンプルな上流モデル**: virtual リポジトリの上流は、上流タイプごとに別個のエンドポイント階層を使用するのではなく、ID で既存リポジトリを参照し、API サーフェスと実装の複雑さを削減します
- **将来の拡張性**: この設計パターンは、アーキテクチャの変更なしに追加のパッケージフォーマット（PyPI、NuGet、Helm など）を容易に取り込むことができます。管理 API とクライアント API は、それぞれの要件に基づいて独立して進化できます

### ネガティブ

- **リポジトリ名の不変性が柔軟性を制限する**: タイポや組織のリネームは、単純なリネームではなく、新しいリポジトリの作成とアーティファクトの移行を必要とします
- **グローバル名の一意性は制約的である**: `my-app` のような名前はフォーマット間で再利用できません（例: コンテナと Maven の両方のリポジトリを `my-app` と呼ぶこと）。これは `my-app-docker` や `my-app-maven` のような命名規則につながる可能性があります。この制約は破壊的変更なしに後で緩和できます
- **フォーマット固有の API サーフェス**: フォーマットごとにエンドポイントを専用化することは、フォーマット間の若干の重複と、管理タスクのフォーマット横断の統一操作の不在を意味します

## 参考文献

- [ADR-001: アンカーポイントとしての組織](001_organizations_as_anchor_point.md)
- [ADR-022: ネームスペースデカップリング](022_namespace_decoupling.md)
- [Cells アーキテクチャ](../../cells/)
- [Container Registry Routing Service (Cells)](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/14825)
- [GitLab REST API 認証](https://docs.gitlab.com/api/rest/authentication/)
- [OCI Distribution Spec v1.1](https://github.com/opencontainers/distribution-spec/blob/main/spec.md)
- [Docker Registry Bearer Token Authentication](https://docs.docker.com/reference/api/registry/auth/)
- [Maven Repository Layout](https://maven.apache.org/repositories/layout.html)
- [NPM Registry API](https://github.com/npm/registry/blob/main/docs/REGISTRY-API.md)
- [リポジトリ名不変性の提案](https://gitlab.com/gitlab-org/gitlab/-/issues/592582)

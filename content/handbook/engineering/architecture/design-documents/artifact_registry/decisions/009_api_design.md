---
title: "Artifact Registry ADR 009: API 設計"
owning-stage: "~devops::package"
description: "レジストリの API エンドポイントの構成に関する決定"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/artifact_registry/decisions/009_api_design/
upstream_sha: "78a0e7a77d6186ee917e52daef46030cba948677"
translated_at: "2026-07-23T07:28:59+09:00"
translator: codex
stale: false
lastmod: 2026-07-22T23:36:48+02:00
---

## コンテキスト

Artifact Registry は、次の制約を持つ包括的な API 設計を必要とします。

1. **3 つの API カテゴリ**: レジストリの概念とやり取りする管理 API、特定のクライアントが使用する厳密な仕様に従うアーティファクト管理クライアント API、そしてプラットフォームとレジストリ間の通信のための GitLab API。
2. **データベースのデータ構成に従う**: API エンドポイントはアーティファクトフォーマットごとに構成され、リポジトリがフォーマットファミリーごとのテーブルとフィールドを持つデータベーススキーマ <!-- (see [ADR-007](007_database_schema.md)) --> に一致します（`docker` と `oci` は `container_*` テーブルを共有します）。このマッピングは、複雑なマルチフォーマット抽象化を回避することで実装を簡素化し、フォーマット固有の最適化を可能にします。
3. **3 つのリポジトリタイプ**: レジストリは 3 つのリポジトリタイプをサポートします。ホスト型（プッシュされたアーティファクトのためのプライベートストレージ）、リモート（外部レジストリのためのプロキシ/キャッシュ）、仮想（ホスト型とリモートのアップストリームを組み合わせた集約された pull エンドポイント）です。このモデルは業界の慣行に一致します。3 つのタイプはすべて独立しており、個別に管理可能なエンティティです。

Artifact Registry は、すべてのお客様向け URL に現れる不変で顧客が選択するスラッグ（[ADR-022](022_namespace_decoupling.md)）を通じて、Organizations にスコープされます（根拠については [ADR-001](001_organizations_as_anchor_point.md) を参照）。すべてのクライアントおよび管理エンドポイントは、API バージョンプレフィックス（またはクライアント API の場合はプロトコルプレフィックス）の後に `/:slug` パスセグメントを含み、すべてのリクエストを特定のスラッグにスコープします。スラッグは、組織パスの解決に依存することなく、トポロジーサービスを介した安定した [Cells](../../cells/) ルーティングを提供します。例外は 2 つあります。OCI で必須の `GET /v2/` バージョンプローブ（[Container](#container) を参照）と GitLab API エンドポイント（[GitLab API](#gitlab-api) を参照）です。

Artifact Registry は、メインの GitLab アプリケーションドメインとは別の、専用ドメイン（例: `artifact-registry.gitlab.com`）で提供されます。これにより、メインアプリケーションの Cookie、認証情報、内部ネットワークコンテキストからレジストリを分離することで、[XSS](https://owasp.org/www-community/attacks/xss/) および [SSRF](https://owasp.org/www-community/attacks/Server_Side_Request_Forgery) の脆弱性に対するセキュリティ態勢が劇的に改善されます。

この ADR は API サーフェス、それらに適用されるルール、エンドポイント構造を定義します。リクエストおよびレスポンスのペイロードは、Artifact Registry コードベース内の対応する OpenAPI 仕様に存在します。

### バージョニング

Artifact Registry は専用ドメインで動作するため、GitLab Rails モノリスで使用される `/api/v4` プレフィックスは適用されません。モノリスは、同一ドメイン上で API ルートを Web UI ルートから分離し、その API バージョンの系譜（v3 から v4 へ）を反映するために `/api/v4` を使用します。スタンドアロンサービスにはどちらの懸念も存在しません。

管理 API ルートは `/api/v1` パスベースのバージョンプレフィックスを使用します。`/api/` プレフィックスは、同一ドメイン上で管理ルートをプロトコル固有のクライアントルートから分離し、管理 API バージョンが将来引き上げられた場合の namespace 衝突を防ぎます（例: OCI は `/v2/` を必須とするため、裸の `/v2` 管理プレフィックスは衝突します）。これは業界の慣行に一致します。パスベースのバージョニングは、ヘッダー検査を必要とせずに、URL、ログ、ルーティングルールにおいてバージョンを可視に保ちます。

クライアント API はバージョンプレフィックスを使用しません。プロトコル固有のバージョニングは、必要に応じてクライアント自身によって処理されます（例: OCI は `/v2/` を必須とします）。これにより、クライアントが構成する URL を可能な限り短く保ちます。

GitLab API ルートは `/api/gitlab/v1` プレフィックスを使用します。明示的な `gitlab` セグメントにより、サーフェスは URL、ログ、ルーティングルールで可視になり、エッジが専用のパスルールを適用できます。これは、レジストリからプラットフォームへのサーフェスで `/gitlab/v1/` プレフィックスを使用する Container Registry の先例に従います。

### API 分類

API の表面は、異なるルールを持つ 3 つの明確なカテゴリに分けられます。

1. **管理 API**: レジストリの概念（リポジトリ、アーティファクト、ポリシーなど）に対する CRUD 操作のための REST および GraphQL API
   - 認証: GitLab の標準的な REST/GraphQL 認証
   - 目的: UI、自動化スクリプト、管理ツール
   - フォーマット: 標準的な GitLab API パターンを持つ JSON レスポンス
   - ページネーション: すべてのリストエンドポイントはページネーションされ、できればキーセットページネーション戦略を使用します

2. **アーティファクト管理クライアント API**: 業界標準の仕様を実装するプロトコル固有の API
   - 認証: プロトコル固有（OCI 用の Bearer トークン、Maven 用の Basic 認証など）
   - 目的: ネイティブクライアントの互換性（`docker`、`npm`、`mvn` コマンド）
   - フォーマット: プロトコル固有のレスポンス（OCI Distribution Spec、Maven Repository Layout、NPM Registry API）

3. **GitLab API**: プラットフォームとレジストリ間の通信のための REST エンドポイント
   - 認証: サービス間認証情報。エンドユーザー ID は使用しない
   - 目的: ネームスペースのプロビジョニング、解決、サービス条件、リソース検証
   - フォーマット: JSON
   - 公開範囲: 信頼されたプラットフォーム呼び出し元のみ

管理 API とクライアント API は、3 つのリポジトリタイプすべて（ホスト型、仮想、リモート）を提供します。クライアント API はプロトコルごとに構成されます（プロトコルごとに 1 セットのエンドポイント。OCI Distribution Spec のエンドポイントは、`docker` と `oci` の両フォーマットのリポジトリを提供します）が、管理 API は統合されたリポジトリ CRUD を共有し、フォーマットはフォーマット固有のサブリソースにのみ現れます。

### URL 構造設計

管理 API ルートは **リポジトリにアンカーされます**。`/api/v1/:slug` プレフィックスはすべてのルートで必須であり、概念上のレベルとしてはカウントされません。リポジトリエンドポイントは、一意のリポジトリ名を `:repository_name` パラメータとして受け取ります。

すべてのリポジトリレベルのリソース（アーティファクト、ライフサイクルポリシー、アップストリームの関連付け）はリポジトリにスコープされます。これはホスト型とリモートのリポジトリが別個のフォーマットファミリーごとのテーブルにデータを保存するためです。

`:format` セグメントは、すべてのフォーマット固有のサブリソースに対して **リポジトリの後** に現れます: `/api/v1/:slug/repositories/:repository_name/:format/...`（例: イメージのリスト、ライフサイクルポリシー）。リポジトリレベルのサブリソースは特定のフォーマットに専用であり、エンドポイントの構成と返される構造のカスタマイズにおいてより高い柔軟性を可能にします。これにはアーティファクト操作とフォーマット固有の構成の両方が含まれます。namespace レベルのフォーマット固有の操作は `:format` をプレフィックスとして使用します: `/api/v1/:slug/:format/statistics`。

リポジトリ CRUD 自体はフォーマットフリーです。これは `repositories` 親テーブルがすべてのフォーマットとタイプにわたって共有されるためです。フォーマットと種類はリポジトリリソースのプロパティであり、URL セグメントではありません。

例えば:

- すべてのリポジトリのリスト: `GET /api/v1/:slug/repositories`
- リポジトリの作成: `POST /api/v1/:slug/repositories`
- リポジトリの読み取り/更新/削除: `GET/PATCH/DELETE /api/v1/:slug/repositories/:repository_name`（対象概念の識別子を使用するトップレベルルート）
- コンテナファミリーのリポジトリ内のイメージのリスト: `GET /api/v1/:slug/repositories/:repository_name/:format/images`（フォーマット固有のサブリソース。`:format` は `docker` または `oci`）
- ID によるイメージの取得: `GET /api/v1/:slug/repositories/:repository_name/:format/images/:image_id`（アーティファクト詳細、リポジトリにスコープ）

### リポジトリ名の不変性 {#repository-name-immutability}

リポジトリ名は作成時に設定され、変更できません。リポジトリの説明は可変のままです。これは、壊れたクライアント構成、名前の再取得による認可バイパス、黙ったミスルーティングを防ぎます。また、名前ベースの URL（[下記](#human-friendly-urls)を参照）を可能にし、認可ルールを簡素化します。

これは業界の慣行に一致します。詳細は [gitlab-org/gitlab#592582](https://gitlab.com/gitlab-org/gitlab/-/issues/592582) を参照してください。

### 人間にやさしい URL {#human-friendly-urls}

リポジトリエンドポイントは、一意の名前を識別子として受け取ります。リポジトリ名は、フォーマットやリポジトリタイプに関係なく、スラッグ内でグローバルに一意でなければなりません。このグローバルな一意性制約は業界の慣行に一致し、あいまいな名前ベースのルックアップを回避します。後でフォーマットごとの一意性へと緩和しても誰も壊しませんが、厳格化は破壊的な変更となります。名前の不変性（[上記](#repository-name-immutability)を参照）により、名前ベースの URL を安定したパスセグメントとして安全にします。スラッグは不変であるため（[ADR-022](022_namespace_decoupling.md)）、URL パス内のすべてのセグメントは人間が読めて永続的に安定しています。

## API 編成

### 管理用 API

管理 API は GitLab の [REST API 認証](https://docs.gitlab.com/api/rest/authentication/) を使用します。

**注:** `:format` はリポジトリの `format` 値（`docker`、`oci`、`maven`、または `npm`）を表します。`docker` と `oci` はコンテナファミリーを形成します。これらはコンテナアーティファクトモデル（イメージ、タグ、マニフェスト）と `container_*` テーブルを共有します。`:format` セグメントがリポジトリのフォーマットと一致しないリクエストは、`404 Not Found` を返します。

#### ネームスペースレベル API {#namespace-level-apis}

**リポジトリ管理:**

- `GET    /api/v1/:slug/repositories`                  - すべてのリポジトリをリスト（すべてのフォーマットにわたるホスト型、仮想、リモート）。フォーマットとリポジトリタイプによるフィルタリングをサポート
- `POST   /api/v1/:slug/repositories`                  - リポジトリを作成
- `GET    /api/v1/:slug/repositories/:repository_name` - リポジトリの詳細を取得
- `PATCH  /api/v1/:slug/repositories/:repository_name` - リポジトリを更新
- `DELETE /api/v1/:slug/repositories/:repository_name` - リポジトリを削除

リポジトリ詳細のレスポンスはポリモーフィックであり、その形状はフォーマットと種類によって異なります。

- すべてのリポジトリは、親 `repositories` テーブルからの共通フィールドを返します: `name`、`format`、`kind`、`visibility`、`description`、カウンター（`artifacts_count`、`downloads_count`、`size_bytes`）、`last_updated_at`。
- フォーマット固有およびタイプ固有のフィールドは、オプションのトップレベルキーとして現れるのではなく、単一の `settings` オブジェクトの下にネストされます。`format` と `kind` のフィールドは判別子として機能します。クライアントはこれらを使用して `settings` の形状を解釈します。
- `POST` と `PATCH` は、作成および更新操作に対して同じネストされた構造を受け取ります。

**統計:**

- `GET /api/v1/:slug/statistics`         - 集約されたストレージとダウンロードの統計を取得
- `GET /api/v1/:slug/:format/statistics` - 特定のフォーマットのストレージとダウンロードの統計を取得

**ライフサイクルポリシー:**

- `GET    /api/v1/:slug/lifecycle_policy`                - ライフサイクルポリシーを取得
- `PATCH  /api/v1/:slug/lifecycle_policy`                - ライフサイクルポリシーを更新
- `GET    /api/v1/:slug/lifecycle_policy/rules`          - ライフサイクルポリシールールを取得
- `POST   /api/v1/:slug/lifecycle_policy/rules`          - ライフサイクルポリシールールを作成
- `GET    /api/v1/:slug/lifecycle_policy/rules/:rule_id` - ライフサイクルポリシールールを取得
- `PATCH  /api/v1/:slug/lifecycle_policy/rules/:rule_id` - ライフサイクルポリシールールを更新
- `DELETE /api/v1/:slug/lifecycle_policy/rules/:rule_id` - ライフサイクルポリシールールを削除

#### リポジトリレベル API

**仮想リポジトリ - アップストリーム:**

アップストリームは、フォーマット固有のアップストリームルールを持つフォーマットファミリーごとのテーブル（`docker` と `oci` で共有される `container_virtual_repository_upstreams`、および `maven_virtual_repository_upstreams` と `npm_virtual_repository_upstreams`）に保存されます。リモートとホスト型のリポジトリは独立したエンティティであるため、仮想リポジトリのアップストリームは既存のリポジトリへの参照です。アップストリームタイプ（ホスト型またはリモート）は、参照されるリポジトリの `kind` によって決定されます。

- `GET    /api/v1/:slug/repositories/:repository_name/:format/upstream_repositories`     - 仮想リポジトリのアップストリームリポジトリ（ホスト型とリモート）を、解決の優先順位順にリスト
- `POST   /api/v1/:slug/repositories/:repository_name/:format/upstream_repositories`     - リポジトリ（ホスト型またはリモート）を仮想リポジトリのアップストリームとして関連付け。`upstream_repository_id` を受け取る
- `GET    /api/v1/:slug/repositories/:repository_name/:format/upstream_repositories/:id` - アップストリームリポジトリの関連付けを取得
- `PATCH  /api/v1/:slug/repositories/:repository_name/:format/upstream_repositories/:id` - 関連付けの位置を更新。`position` フィールドのみ更新可能
- `DELETE /api/v1/:slug/repositories/:repository_name/:format/upstream_repositories/:id` - 仮想リポジトリからアップストリームの関連付けを解除

**リモートリポジトリ - 接続テスト:**

- `POST /api/v1/:slug/repositories/:repository_name/test` - 構成されたリモートレジストリへの接続をテスト

**統計:**

- `GET    /api/v1/:slug/repositories/:repository_name/statistics`  - リポジトリのストレージとダウンロードの統計を取得

**ライフサイクルポリシー:**

リポジトリレベルのライフサイクルポリシーは、namespace レベルのデフォルトを上書きするフォーマットファミリーごとのテーブル（`container_repository_lifecycle_policy_settings` など）を使用します。

- `GET    /api/v1/:slug/repositories/:repository_name/:format/lifecycle_policy`                - リポジトリのライフサイクルポリシーを取得
- `PATCH  /api/v1/:slug/repositories/:repository_name/:format/lifecycle_policy`                - リポジトリのライフサイクルポリシーを更新
- `GET    /api/v1/:slug/repositories/:repository_name/:format/lifecycle_policy/rules`          - リポジトリのライフサイクルポリシールールを取得
- `POST   /api/v1/:slug/repositories/:repository_name/:format/lifecycle_policy/rules`          - リポジトリのライフサイクルポリシールールを作成
- `GET    /api/v1/:slug/repositories/:repository_name/:format/lifecycle_policy/rules/:rule_id` - ライフサイクルポリシールールを取得
- `PATCH  /api/v1/:slug/repositories/:repository_name/:format/lifecycle_policy/rules/:rule_id` - ライフサイクルポリシールールを更新
- `DELETE /api/v1/:slug/repositories/:repository_name/:format/lifecycle_policy/rules/:rule_id` - ライフサイクルポリシールールを削除

#### フォーマット固有のアーティファクト API

すべてのアーティファクトエンドポイントはリポジトリにスコープされ、ホスト型とリモートの両方のリポジトリに一様に適用されます。ルート、動詞、ページネーションは両方の種類で同一です。リモートリポジトリは、ホスト型スキーマをミラーリングする階層テーブル（`*_remote_images`、`*_remote_packages`、`*_remote_versions`、`*_remote_files` など）にアーティファクトをキャッシュします（[ADR-007](007_database_schema.md) を参照）。

レスポンスボディはリポジトリの `kind` によってポリモーフィックです。これは [リポジトリ詳細の `settings` オブジェクト](#namespace-level-apis) で使用されるのと同じ慣例です。`kind` が `remote` の場合、鮮度追跡された行（タグ、パッケージファイル、メタデータファイル）にマッピングされる各エントリは、`upstream_checked_at` と `upstream_etag` を公開するネストされた `cache` オブジェクトを持ちます。コンテナのマニフェストと blob はダイジェストによってコンテンツアドレス指定され、行ごとの鮮度を持たないため、`cache` ブロックを持ちません。リポジトリレベルのキャッシュ構成（`cache_validity_hours`、`metadata_cache_validity_hours`）はリポジトリ詳細の `settings` オブジェクトに存在し、アーティファクトごとには反映されません。ホスト型リポジトリに対するリクエストは、`cache` オブジェクト _なし_ で同じ形状を返します。

リモートリポジトリ上の動詞のセマンティクスは、アップストリームではなくキャッシュされた行を記述します。

- `DELETE` はキャッシュされた行を退避します（アップストリームへの影響なし。アーティファクトはクライアント API を通じた次の pull で再取得されます）。
- `PATCH .../quarantine` はキャッシュされた行をブロック済みとしてフラグします。アップストリームにまだアーティファクトがあっても、クライアントの pull は `404 Not Found` を返します。フラグはキャッシュされた行のライフサイクルに紐付けられ、退避するとクリアされます。永続的またはダイジェストレベルのブロックは意図的にスコープ外です（API ではなくライフサイクル管理の関心事）。
- `GET` は、上記の `cache` サブオブジェクトを除いて両方の種類で同一です。

**コンテナファミリー固有 - イメージ:**

コンテナファミリーのリポジトリでは、アーティファクトを「イメージ」と呼びます。これらのルートの `:format` セグメントは、リポジトリのフォーマットである `docker` または `oci` です:

- `GET    /api/v1/:slug/repositories/:repository_name/:format/images`                      - リポジトリ内のイメージをリスト
- `GET    /api/v1/:slug/repositories/:repository_name/:format/images/:image_id`            - イメージの詳細を取得
- `GET    /api/v1/:slug/repositories/:repository_name/:format/images/:image_id/manifests`  - 所定のイメージのマニフェストをリスト
- `GET    /api/v1/:slug/repositories/:repository_name/:format/images/:image_id/blobs`      - 所定のイメージの blob をリスト
- `GET    /api/v1/:slug/repositories/:repository_name/:format/images/:image_id/statistics` - イメージのストレージ、使用量、ダウンロードの統計を取得
- `DELETE /api/v1/:slug/repositories/:repository_name/:format/images/:image_id`            - イメージを削除（ソフトまたはハード削除）
- `DELETE /api/v1/:slug/repositories/:repository_name/:format/images`                      - イメージを一括削除
- `PATCH  /api/v1/:slug/repositories/:repository_name/:format/images/:image_id/quarantine` - 所定のイメージを隔離

**コンテナファミリー固有 - イメージタグ:**

- `GET    /api/v1/:slug/repositories/:repository_name/:format/images/:image_id/tags`                 - 所定のイメージのタグをリスト
- `GET    /api/v1/:slug/repositories/:repository_name/:format/images/:image_id/tags/:tag/statistics` - タグのストレージ、使用量、ダウンロードの統計を取得
- `DELETE /api/v1/:slug/repositories/:repository_name/:format/images/:image_id/tags/:tag`            - イメージタグを削除
- `DELETE /api/v1/:slug/repositories/:repository_name/:format/images/:image_id/tags`                 - 一連のイメージタグを削除

**Maven/NPM 固有 - パッケージ:**

- `GET    /api/v1/:slug/repositories/:repository_name/:format/packages`                         - リポジトリ内のパッケージをリスト
- `GET    /api/v1/:slug/repositories/:repository_name/:format/packages/:package_id`             - パッケージの詳細を取得
- `GET    /api/v1/:slug/repositories/:repository_name/:format/packages/:package_id/statistics`  - パッケージのストレージ、使用量、ダウンロードの統計を取得
- `DELETE /api/v1/:slug/repositories/:repository_name/:format/packages/:package_id`             - パッケージを削除（ソフトまたはハード削除）
- `DELETE /api/v1/:slug/repositories/:repository_name/:format/packages`                         - パッケージを一括削除
- `PATCH  /api/v1/:slug/repositories/:repository_name/:format/packages/:package_id/quarantine`  - 所定のパッケージを隔離
- `GET    /api/v1/:slug/repositories/:repository_name/:format/packages/:package_id/versions`    - 所定のパッケージのバージョンをリスト

**Maven/NPM 固有 - パッケージバージョン:**

- `GET    /api/v1/:slug/repositories/:repository_name/:format/versions/:version_id`            - バージョンの詳細を取得
- `GET    /api/v1/:slug/repositories/:repository_name/:format/versions/:version_id/statistics` - パッケージバージョンのストレージ、使用量、ダウンロードの統計を取得
- `DELETE /api/v1/:slug/repositories/:repository_name/:format/versions/:version_id`            - バージョンを削除（ソフトまたはハード削除）
- `DELETE /api/v1/:slug/repositories/:repository_name/:format/versions`                        - バージョンを一括削除
- `GET    /api/v1/:slug/repositories/:repository_name/:format/versions/:version_id/files`      - 所定のバージョンのファイルをリスト

**Maven/NPM 固有 - パッケージファイル:**

- `GET    /api/v1/:slug/repositories/:repository_name/:format/files/:file_id`          - ファイルの詳細を取得
- `GET    /api/v1/:slug/repositories/:repository_name/:format/files/:file_id/download` - ファイルをダウンロード
- `DELETE /api/v1/:slug/repositories/:repository_name/:format/files/:file_id`          - ファイルを削除（ソフトまたはハード削除）
- `DELETE /api/v1/:slug/repositories/:repository_name/:format/files`                   - ファイルを一括削除

**NPM 固有 - 配布タグ:**

- `GET    /api/v1/:slug/repositories/:repository_name/npm/packages/:package_id/tags` - 所定のパッケージのタグをリスト
- `GET    /api/v1/:slug/repositories/:repository_name/npm/tags/:tag_id`              - タグの詳細を取得
- `GET    /api/v1/:slug/repositories/:repository_name/npm/tags/:tag_id/statistics`   - タグのストレージ、使用量、ダウンロードの統計を取得
- `DELETE /api/v1/:slug/repositories/:repository_name/npm/tags/:tag_id`              - タグを削除

### アーティファクト管理クライアント API

クライアント API の URL は、すべてのリポジトリタイプ（ホスト型、リモート、仮想）で同じです。レジストリはリポジトリの種類を内部的に解決し、タイプ固有の挙動を適用します（例: リモートおよび仮想リポジトリへの書き込みを拒否する）。

#### Container

[OCI Distribution Spec v1.1](https://github.com/opencontainers/distribution-spec/blob/main/spec.md) を実装します。認証: [Bearer トークン](https://docs.docker.com/reference/api/registry/auth/)。

以下のリテラルの `container` パスセグメントはプロトコルレベルで固定されています。1 セットの `/v2` エンドポイントが、`docker` と `oci` の両フォーマットのリポジトリを提供します。これはルーターが挿入するリテラルであり、リポジトリの `format` 値ではありません（[管理 API](#management-apis) を参照）。

- `GET    /v2/`                                                                                   - API バージョンとレジストリ実装を確認（OCI 必須、スラッグにスコープされない）
- `GET    /v2/:slug/container/:repository_name/:image_name/manifests/:reference`                  - マニフェストを取得（reference はタグまたはダイジェスト）
- `HEAD   /v2/:slug/container/:repository_name/:image_name/manifests/:reference`                  - マニフェストの存在を確認
- `PUT    /v2/:slug/container/:repository_name/:image_name/manifests/:reference`                  - マニフェストをアップロード（リモートおよび仮想リポジトリでは利用不可）
- `DELETE /v2/:slug/container/:repository_name/:image_name/manifests/:reference`                  - マニフェストを削除（ダイジェストまたはタグ参照による、リモートおよび仮想リポジトリでは利用不可）
- `DELETE /v2/:slug/container/:repository_name/:image_name/manifests/:tag`                        - 特定のタグを削除（リモートおよび仮想リポジトリでは利用不可）
- `GET    /v2/:slug/container/:repository_name/:image_name/blobs/:digest`                         - blob をダウンロード
- `HEAD   /v2/:slug/container/:repository_name/:image_name/blobs/:digest`                         - blob の存在を確認
- `DELETE /v2/:slug/container/:repository_name/:image_name/blobs/:digest`                         - blob を削除（リモートおよび仮想リポジトリでは利用不可）
- `POST   /v2/:slug/container/:repository_name/:image_name/blobs/uploads/`                        - blob アップロードを開始（リモートおよび仮想リポジトリでは利用不可）
- `PATCH  /v2/:slug/container/:repository_name/:image_name/blobs/uploads/:uuid`                   - blob チャンクをアップロード（リモートおよび仮想リポジトリでは利用不可）
- `GET    /v2/:slug/container/:repository_name/:image_name/blobs/uploads/:uuid`                   - blob アップロードのステータスを取得（再開可能なアップロード用、リモートおよび仮想リポジトリでは利用不可）
- `PUT    /v2/:slug/container/:repository_name/:image_name/blobs/uploads/:uuid?digest=:digest`    - blob アップロードを完了（リモートおよび仮想リポジトリでは利用不可）
- `DELETE /v2/:slug/container/:repository_name/:image_name/blobs/uploads/:uuid`                   - blob アップロードをキャンセル（リモートおよび仮想リポジトリでは利用不可）
- `POST   /v2/:slug/container/:repository_name/:image_name/blobs/uploads/?digest=:digest`         - 単一リクエストで完全な blob をアップロード（リモートおよび仮想リポジトリでは利用不可）
- `GET    /v2/:slug/container/:repository_name/:image_name/tags/list`                             - リポジトリ内のすべてのタグをリスト
- `GET    /v2/:slug/container/:repository_name/:image_name/tags/list?n=100&last=tag_name`         - ページネーションされたタグのリスト
- `GET    /v2/:slug/container/:repository_name/:image_name/referrers/:digest`                     - マニフェストを参照するアーティファクト/アテステーションをリスト
- `GET    /v2/:slug/container/:repository_name/:image_name/referrers/:digest?artifactType=<type>` - アーティファクトタイプで referrer をフィルタリング

**注:** OCI 必須の `GET /v2/` エンドポイントは `/:slug` プレフィックスを含まないため、[Cells](../../cells/) ルーターはパスだけからどの Cell がリクエストを処理すべきかを判断できません。`GET /v2/` はステートレスなバージョンプローブ（OCI 準拠を示す `200 OK`、そうでなければ `401 Unauthorized`）であるため、どの Cell でも提供できます。スラッグやルーティングコンテキストは不要です。他のすべてのクライアントリクエストは `/:slug` セグメントを持ち、Cells ルーターがそれを使用してターゲット Cell を判断します。クライアントは [`glab`](https://gitlab.com/gitlab-org/cli) を介してクライアント側で認証情報を取得し（[ADR-020](020_authentication_flow.md) を参照）、最初から Bearer トークンを提示するため、OCI の `401 WWW-Authenticate` リダイレクトチャレンジは使用されません。`GET /v2/_catalog`（Docker Registry HTTP API V2）は OCI Distribution Spec の一部ではなく、実装されません。

##### クライアント設定例

スラッグ `acme-engineering` で、リポジトリ名 `my-repo`、イメージ名 `my-app`、タグ `latest` のコンテナファミリーのリポジトリからイメージを pull する場合:

```shell
docker pull artifact-registry.gitlab.com/acme-engineering/container/my-repo/my-app:latest
```

#### Maven

[Maven Repository Layout](https://maven.apache.org/repositories/layout.html) を実装します。認証: Basic 認証。カスタムヘッダー認証（元の GitLab Maven パッケージレジストリからのレガシーメカニズム）はサポートされません。Basic 認証は Maven レジストリ全体で普遍的な標準であり、すべての主要なビルドツール（`mvn`、`gradle`、`sbt`）でサポートされています。特に `sbt` は Basic 認証のみをサポートします。

- `GET /:slug/maven/:repository_name/*path/:file_name` - Maven のホスト型、リモート、仮想リポジトリからパッケージファイルをダウンロード
- `PUT /:slug/maven/:repository_name/*path/:file_name` - Maven のホスト型リポジトリにパッケージファイルをアップロード（リモートおよび仮想リポジトリでは利用不可）

##### クライアント設定例

スラッグ `acme-engineering` の `my-repo` という名前の Maven リポジトリのリポジトリ URL。`settings.xml`、`build.gradle`、または `build.sbt` で使用します:

```plaintext
https://artifact-registry.gitlab.com/acme-engineering/maven/my-repo
```

#### NPM

[NPM Registry API](https://github.com/npm/registry/blob/main/docs/REGISTRY-API.md) を実装します。認証: Bearer トークン。

- `GET    /:slug/npm/:repository_name/:package_name`                                 - パッケージメタデータを取得
- `PUT    /:slug/npm/:repository_name/:package_name`                                 - パッケージを公開（リモートおよび仮想リポジトリでは利用不可）
- `PUT    /:slug/npm/:repository_name/:package_name/-rev/:rev`                       - 単一バージョンの公開取り消し、ステップ 1: そのバージョンを削除したパッケージドキュメントに置き換える（リモートおよび仮想リポジトリでは利用不可）
- `DELETE /:slug/npm/:repository_name/:package_name/-/:file_name/-rev/:rev`          - 単一バージョンの公開取り消し、ステップ 2: バージョンの tarball を削除（リモートおよび仮想リポジトリでは利用不可）
- `DELETE /:slug/npm/:repository_name/:package_name/-rev/:rev`                       - パッケージ全体の公開取り消し（`npm unpublish <pkg> --force`、リモートおよび仮想リポジトリでは利用不可）
- `GET    /:slug/npm/:repository_name/:package_name/-/:file_name`                    - パッケージファイルをダウンロード
- `GET    /:slug/npm/:repository_name/-/package/:package_name/dist-tags`             - パッケージの dist-tags をリスト
- `PUT    /:slug/npm/:repository_name/-/package/:package_name/dist-tags/:tag`        - dist-tag を作成または更新（リモートおよび仮想リポジトリでは利用不可）
- `DELETE /:slug/npm/:repository_name/-/package/:package_name/dist-tags/:tag`        - dist-tag を削除（リモートおよび仮想リポジトリでは利用不可）
- `POST   /:slug/npm/:repository_name/-/npm/v1/security/audits/quick`                - クイックセキュリティ監査
- `POST   /:slug/npm/:repository_name/-/npm/v1/security/advisories/bulk`             - 一括セキュリティアドバイザリ

##### クライアント設定例

スラッグ `acme-engineering` の `my-repo` という名前の NPM リポジトリのレジストリ URL。`.npmrc` で使用します:

```plaintext
https://artifact-registry.gitlab.com/acme-engineering/npm/my-repo/
```

### GitLab API

GitLab API は、最初は Rails モノリスであるプラットフォーム呼び出し元にサービスを提供します。リクエストは呼び出すサービスを認証し、エンドユーザーを認証することはありません。ユーザーのチェックは呼び出しをトリガーするプラットフォームフローに属し、ユーザー向けトラフィックは代わりに管理 API とクライアント API を使用します（[ADR-014](014_frontend_to_artifact_registry.md)、[ADR-021](021_authorization.md)）。「GitLab」は呼び出し元の名前です。つまり GitLab プラットフォームデプロイメントであり、ハイブリッドデプロイメントモデルではお客様がホストするモノリスです。そのためこのサーフェスはインターネット向けですが、お客様向けではありません。

ハイブリッドデプロイメントモデル（SaaS レジストリに対する Self-Managed または Dedicated モノリス）を含め、このサーフェスで呼び出し元を認証する方法は、[ADR-020](020_authentication_flow.md) と [ADR-021](021_authorization.md) で扱います（[artifact-registry#255](https://gitlab.com/gitlab-org/ops/artifact-registry/-/work_items/255)）。

#### ネームスペースのライフサイクル

これらのエンドポイントにはスラッグが不要です。プロビジョニングはスラッグが取得される前に実行され、解決は UUID をスラッグに変換し、サービス条件はスラッグの状態にかかわらず機能する必要があるためです。ネームスペースを所有者アンカー（[ADR-001](001_organizations_as_anchor_point.md)）または UUID（[ADR-022](022_namespace_decoupling.md)）で参照します。

- `POST /api/gitlab/v1/namespaces` - 所有者アンカーのネームスペースをプロビジョニングします（[gitlab#603023](https://gitlab.com/gitlab-org/gitlab/-/work_items/603023)）。アンカーに対して冪等であり、呼び出し元が永続化するネームスペース UUID を返します（[ADR-022](022_namespace_decoupling.md)）。
- `GET  /api/gitlab/v1/namespaces/:uuid` - UUID でネームスペースを解決します。所有者アンカー、スラッグ、ステータスを返します。呼び出し元はスラッグとステータスをキャッシュします（[ADR-022](022_namespace_decoupling.md)、[ADR-014](014_frontend_to_artifact_registry.md)）。
- `POST /api/gitlab/v1/namespaces/:uuid/<action>` - 可逆的なサービス条件を適用または解除します（[ADR-007](007_database_schema.md#namespaces)）。アクションごとに 1 つのエンドポイントを設け、`<action>` は `block`、`unblock`、`disable`、`enable`、`suspend`、`unsuspend` のいずれかです。

スラッグが不要なルートは [Cells](../../cells/) ルーティングを弱めません。ネームスペースの作成はキーでルーティングできません。まだルーティングの対象となるものが存在しないためです。Cell に存在するモノリスはその Cell ローカルのレジストリを直接呼び出し、ネームスペースはその Cell に配置されます。ハイブリッドの呼び出し元には Cell がないため、その呼び出しはエッジに入り、エッジが対象 Cell を決定します。どちらのパスもネームスペース UUID をルーティングキーとして登録します（スラッグの取得時には第 2 のキーとして追加されます）。他のすべての GitLab API エンドポイントはその UUID をキーとし、呼び出し元の場所にかかわらず、スラッグプレフィックス付きリクエストと同じトポロジー機構を経由してルーティングされます。UUID をキーにしたルーティングが十分でないと判明した場合、[Container Registry](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/14825) で以前に検討されたように、GitLab API リクエストは所有者アンカーをルーティングヒントとして追加で埋め込むこともできます。これは潜在的な経路であり、現時点の要件ではありません。

#### リソース検証

プラットフォームの認可フローは、一括ロール付与の対象リソースがネームスペースに属することを確認しなければなりません（[artifact-registry#181](https://gitlab.com/gitlab-org/ops/artifact-registry/-/issues/181)）。ネームスペース対象の付与にはレジストリ呼び出しは不要です。プラットフォームが永続化されたマッピングに対して所有権を検証します（[gitlab#603023](https://gitlab.com/gitlab-org/gitlab/-/work_items/603023)）。リポジトリ対象の付与は、ネームスペース UUID にスコープされ、単一の `HASH(namespace_id)` パーティションから提供されるバッチ検証を使用します。

- `POST /api/gitlab/v1/namespaces/:uuid/repositories/verifications` - 指定されたリポジトリ ID がネームスペース配下に存在することを一括検証します。データは返しません。すべての ID が属する場合は `204`、失敗時にはすべて同じ不透明な `400` を返し、ID の存在有無を明らかにしません。

レジストリは Organization データを返しません。呼び出し元はネームスペーススコープを提供し、その所有者をすでに把握しています。将来の割り当て可能なリソースタイプは、同じタイプ別のパターン（`POST /api/gitlab/v1/namespaces/:uuid/<resource_type>/verifications`）に従います。

GitLab API は、提供先のプラットフォームバージョン間で後方互換性を維持しなければなりません。ハイブリッドデプロイメントモデルでは、Self-Managed モノリスは SaaS レジストリより遅れることがあります（[ADR-022](022_namespace_decoupling.md)）。

## 帰結

### ポジティブ

- **明確な関心の分離**: 3 つの API サーフェスは明確な目的、認証メカニズム、ターゲットオーディエンスを持ち、混乱を減らし、独立した進化を可能にします
- **リポジトリにアンカーされた URL パターン**: すべてのアーティファクト操作はリポジトリにスコープされ、明確なルーティングコンテキストを提供し、ホスト型とリモートの両方のリポジトリに対して同じ URL 構造を可能にします
- **永続的に安定した、人間が読める URL**: スラッグとリポジトリ名はどちらも不変であるため、すべての URL パスセグメントは人間が読めて決して変わりません。クライアント向けのどの URL にも数値 ID は現れません
- **統合されたハイブリッドリスト**: 単一のエンドポイントが、すべてのフォーマットにわたるすべてのリポジトリ（ホスト型、仮想、リモート）をフィルタリング付きでリストし、プラットフォームエンジニア向けのフォーマット横断のガバナンスと監査性のビューを可能にします
- **独立したエンティティとしてのリモートリポジトリ**: リモートリポジトリは個別に管理可能で、複数の仮想リポジトリにまたがって再利用でき、独自のライフサイクルを持ち、業界の慣行（JFrog Artifactory、Sonatype Nexus、Google Cloud AR）に一致します
- **一様なホスト型とリモートのアーティファクト構造**: リモートリポジトリはホスト型リポジトリと同じアーティファクト階層（images、packages、versions、files）を使用します。同じルートが両方の種類を提供し、それを追跡する行にネストされた `cache` サブオブジェクトが鮮度メタデータ（`upstream_checked_at`、`upstream_etag`）を表面化します。キャッシュの変更はホスト型リポジトリと同じ動詞を再利用するため（`DELETE` = 退避、`PATCH .../quarantine` = ブロック）、リモートリポジトリに対して API の表面は拡大しません。レスポンスボディのみがポリモーフィックです
- **簡素化されたアップストリームモデル**: 仮想リポジトリのアップストリームは、アップストリームタイプごとに別個のエンドポイント階層を使用するのではなく、ID で既存のリポジトリを参照し、API の表面と実装の複雑さを減らします
- **ADR 外でのスキーマ進化**: リクエストおよびレスポンスのペイロードは Artifact Registry コードベースの OpenAPI 仕様に存在するため、ペイロードの変更で ADR を更新する必要はありません
- **将来の拡張性**: この設計パターンは、アーキテクチャの変更なしに追加のパッケージフォーマット（PyPI、NuGet、Helm など）に容易に対応します。管理 API とクライアント API は、それぞれの要件に基づいて独立して進化できます

### ネガティブ

- **リポジトリ名の不変性が柔軟性を制限する**: タイプミスや組織的なリネームには、単にリネームするのではなく、新しいリポジトリを作成してアーティファクトを移行することが必要になります
- **グローバルな名前の一意性が制限的**: `my-app` のような名前はフォーマットをまたいで再利用できません（例: `my-app` という名前の Docker と Maven の両方のリポジトリ）。これは `my-app-docker` や `my-app-maven` のような命名規則につながる可能性があります。この制約は後で破壊的な変更なしに緩和できます
- **フォーマット固有の API 表面**: フォーマットごとにエンドポイントを専用化することは、フォーマットをまたいだ一部の重複と、管理タスクに対する統合されたフォーマット横断の操作がないことを意味します

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
- [Repository Name Immutability Proposal](https://gitlab.com/gitlab-org/gitlab/-/issues/592582)

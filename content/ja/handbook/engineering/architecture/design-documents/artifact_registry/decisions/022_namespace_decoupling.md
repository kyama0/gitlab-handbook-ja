---
title: "Artifact Registry ADR 022: ネームスペースデカップリング"
owning-stage: "~devops::package"
description: "不変なスラッグと仮想アンカータプルを持つ内部ネームスペースエンティティを導入し、Artifact Registry を Rails の内部識別子から切り離す提案"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/artifact_registry/decisions/022_namespace_decoupling/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:00:00Z"
translator: claude
stale: false
---

<!-- Design Documents often contain forward-looking statements -->
<!-- vale gitlab.FutureTense = NO -->

## ステータス

**提案中。**

## コンテキスト

[ADR-001](001_organizations_as_anchor_point.md) は、Artifact Registry のアンカーポイントとして組織を確立しました。組織はエンタープライズアーティファクト管理の自然な境界を表し、GitLab の長期的な方向性に整合し、トップレベルグループの上に構築する移行の負担を回避します。現在の設計は ADR-001 に直接従います: Rails の `organization_id` がデータベーステーブルにシャーディングキーとして保存され、API URL に埋め込まれ、JWT トークンスコープに含まれます。

認可と API 設計の ADR の作業中に、リポジトリ名は、クライアント設定の破損、OCI 参照の無効化、名前再取得による認可バイパスのリスクを防ぐために [不変](https://gitlab.com/gitlab-org/gitlab/-/work_items/592582) であるべきと決定しました。その決定は自然に「同じ原則をネームスペースレベルで適用すべきか？」という疑問を呼びました。組織パスは可変です（トップレベルグループパスと同じく、企業はリネームします）。そのため、Artifact Registry URL に直接使用すると、リネームのたびにクライアント設定（`.npmrc`、`settings.xml`、Dockerfile、CI パイプライン）が壊れ、キャッシュされた参照が無効になり、JWT トークンスコープの陳腐化が発生し、Rails と Artifact Registry の間でリネームの伝播と競合状態の処理が必要になります。ネームスペースレベルで不変性を強制することで、これらすべてが排除され、設計がシンプルになります。

別途、最新の [CTO レビュー](https://docs.google.com/document/d/1qkcOZYSHM_h9k9pYjHze2KHG5qZYMDeZ1UE4GZgD1jw/edit?tab=t.1dg0o6ns9uiw#bookmark=id.t5ky1ssp818r) で、すべてのサテライトサービスに対して仮想アンカーポイントパターンが提案されました。これは、`organization_id` への密結合がアンカーエンティティが進化した場合に元に戻すコストが高くならないようにするためです。理由は、GitLab の組織階層は引き続き発展する見込みであり、ネストされた組織と組織の合併は将来の検討事項であり、組織展開の長期計画はまだ不明確であるため、Artifact Registry は組織の普遍的なカバレッジを仮定できません。

その後、このトピックの [部署横断的な議論](https://docs.google.com/document/d/1n81b4NNtwddtS419TA8Of-Yoymj2MNNM89FRBo43e8E/edit?tab=t.0#bookmark=id.ps8037nih9pa) において、Artifact Registry が不変なネームスペース識別子を使用できるかが議論されました。これにより、ネームスペースのアイデンティティは Artifact Registry によって完全に所有され、外部エンティティの命名から独立したものになります。

さらに、デカップリングされたネームスペースアイデンティティは、Artifact Registry を独立した製品としてパッケージ化することを可能にする、という観察があります。その唯一の依存先はサードパーティの認証および認可プロバイダーであり、GitLab Rails ではありません。これは設計上の動機ではなく、ポジティブな副次効果です。これにより、Pulp を Artifact Registry の独立した分離されたインスタンスで置き換えるなど、他の方法で GitLab.com 内部での製品再利用への扉が開かれる可能性があります。

インダイレクションレイヤのアイデアは完全に新しいわけではありません。[ADR-007](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18456) の初期イテレーションでは、チームがまだトップレベルグループと組織のどちらかを決定していたとき、アンカーエンティティと内部テーブル間の抽象化として `registries` テーブルが検討されました。本提案はそのパターンの上に構築されており、不変な外部から見えるアイデンティティ（スラッグ）を追加し、アンカーエンティティを完全に不透明にします。

これらの収束する入力により、Artifact Registry が Rails の `organization_id` を直接参照するのではなく、独自のネームスペースアイデンティティを所有すべきかを検討するに至りました。組織はデフォルトのアンカーであり続けます。問題はそれらをどのように参照するかです: 直接、または独自の不変識別子を持つ内部インダイレクションを通じて。

## 提案

Artifact Registry に内部 `namespaces` エンティティを導入し、3 つのプロパティを持たせます:

1. **不変なスラッグ**: グローバルにユニークで、顧客が選択する人間可読な識別子。すべての URL に表れ、決して変わりません。GCS/S3 ストレージバケット名の動作に類似しています。
2. **仮想アンカータプル**: ネームスペースを外部エンティティにリンクする `(platform, entity_type, entity_id)` タプル。そのセマンティクスを解釈しません
3. **内部数値 ID**: データベースパーティショニングとすべての内部クエリに使用され、外部に公開されない

組織は最初のアンカータイプであり続けます。本提案は [ADR-001](001_organizations_as_anchor_point.md) を変更するのではなく、Artifact Registry とアンカーエンティティの間に抽象化レイヤを追加します。

### データベーススキーマ

```sql
CREATE TABLE namespaces (
    id            BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    slug          TEXT NOT NULL UNIQUE,
    platform      TEXT NOT NULL DEFAULT 'gitlab',
    entity_type   TEXT NOT NULL DEFAULT 'organization',
    entity_id     TEXT NOT NULL,
    created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE (platform, entity_type, entity_id)
);
```

- `slug` は作成後に不変です。
- `entity_id` は、基礎となる値が数値の場合（例: Rails の `organization_id`）でも不透明な文字列（`TEXT`）です。これは将来のアンカーが非数値識別子を使用する可能性があるため、アンカータイプ間でスキーマを統一します。Artifact Registry は外部エンティティのセマンティクスを決して解釈しません。
- `(platform, entity_type, entity_id)` の一意性制約は重複アンカーを防ぎます。
- 組織 v1 では、すべての行は `('gitlab', 'organization', '<rails_org_id>')` を持ちます。
- 将来のアンカータイプは異なる `entity_type` 値を持つ行を追加します。スキーマ移行は不要です。

シャーディングキーまたはパーティションキーとして `organization_id` を使用するテーブルは、代わりに `namespace_id` を使用します。外部キーとインデックスは同じパターンに従います。パーティションキーは安定です: 内部 ID は決して変わりません。

[Cells シャーディングキー要件](https://docs.gitlab.com/development/organization/sharding/#choosing-the-right-sharding-key) は Rails モノリスデータベースに適用されます。Cell ローカルサービスは、データ移動のために行を組織に [属性付ける](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18808#note_3144391363) だけで済みます（直接または間接的に）。ネームスペースモデルは `namespace_id -> アンカータプル -> 組織` を通じてこれを行います。

### URL 構造

```plaintext
Management:  /api/v1/<slug>/maven/repositories
Maven:       /<slug>/maven/my-repo/com/example/myapp/1.0.0/myapp-1.0.0.jar
npm:         /<slug>/npm/my-repo/@scope/package
OCI:         /v2/<slug>/repositories/my-repo/manifests/latest
```

どの URL にも数値 ID は表れません。API プレフィックスの後の最初のパスセグメントは常にスラッグです。スラッグとリポジトリ名はどちらも不変であるため、URL パス全体は恒久的に安定します。

### スラッグ設計

スラッグは、ネームスペースを作成するときに顧客によって選択されます。スラッグが組織名を追跡するという誤った期待を生み出さないため、組織名から自動補完 **しません**。設計プロパティ:

- **不変**: 一度設定されると決して変わりません。リポジトリ名の不変性および業界の慣行と一致します。
- **顧客選択**: クライアント設定、CI パイプライン、Kubernetes マニフェストに表れるため、人間可読でタイプ可能です。
- **グローバルにユニーク**: 2 つのネームスペースが同じスラッグを共有することはできません。予約名と高価値スラッグ保護のためのポリシーが必要です。
- **検証ルール**: ハイフン付きの小文字英数字、先頭または末尾のハイフンなし、最小長 TBD。S3 バケット命名ルールに類似しています。

### ネームスペースのライフサイクル

**作成:** 顧客が（管理 API または購入フローを介して）Artifact Registry のネームスペースを作成するとき、スラッグを選択し、ネームスペースはアンカータプルを介して組織にリンクされます。ネームスペースレコードはデータベースで作成され、スラッグは Cells ルーティングのためにトポロジサービスでクレームされます。

**組織のリネーム:** Artifact Registry に影響なし。スラッグは不変で組織名から独立しています。データベース、URL、JWT スコープ、クライアント設定で何も変わりません。

**アンカー昇格:** ネームスペースを別のエンティティに再アンカーする必要がある場合、アンカータプル列のみが更新されます。スラッグは変わりません。すべての URL は安定したままです。すべてのパーティション化されたテーブルは影響を受けません。これは将来の機能であり、組織 v1 では昇格イベントは存在しません。

**削除:** Artifact Registry はネームスペースをソフト削除または無効化します。スラッグは予約され、リポジトリ名再取得（認可バイパス、キャッシュポイズニング）と同じセキュリティリスクを避けるため、別の顧客によって再取得できません。これにより、グローバルなスラッグネームスペースは時間とともに縮小します。最低長要件は利用可能なプールが大きく保たれることを保証します。

### 組織の合併

GitLab が将来組織の合併をサポートする場合、ネームスペースモデルはデータ移行なしでこれを処理します:

1. 2 つの組織（それぞれ独自のネームスペースを持つ）が 1 つに合併します。
2. 吸収されるネームスペースのアンカータプルは、存続する組織を指すように更新されます。ネームスペースごとに 1 つのメタデータ更新です。
3. 存続する組織は 2 つのネームスペースを持ちます。それぞれが独自のリポジトリと独立した重複排除境界を持ちます（トレードオフ）。
4. データベースパーティション間でのデータ移動はありません。
5. オブジェクトストレージの blob、キャッシュ、その他の保存データは、組織ではなくネームスペースでキー付けされます。ストレージバックエンドでも何も移動しません。
6. スラッグは変わりません。すべての URL、JWT スコープ、クライアント設定は安定したままです。

Rails 側では、UI は合併された組織の下に複数のネームスペースを表示できます。それぞれが独自のリポジトリを持ちます:

```plaintext
Organization: Acme Corp (merged)
  Namespace: acme-engineering
    - maven/my-app
    - docker/service-a
  Namespace: acme-platform (from merged org)
    - maven/platform-lib
    - docker/service-b
```

顧客が後で 1 つのネームスペースに統合したい場合、それは合併の自動的な帰結ではなく、明示的な移行（あるネームスペースから別のネームスペースへリポジトリを移動）になります。

ネームスペース抽象化なしでは、組織の合併は、すべてのパーティション化されたデータをある `organization_id` から別のものに移行すること、すべての URL を更新すること、重複排除境界を調整すること、JWT スコープの陳腐化を処理することが必要になります。

### Cells ルーティング

トポロジサービス（Go gRPC サービス）は、クレームされた識別子からセルへのマッピングを保持します。Artifact Registry はスラッグをクレームすることで統合します:

1. ネームスペースが作成されると、Artifact Registry はトポロジサービスでスラッグをクレームし、ネームスペースのデータが存在するセルにマッピングします。
2. リクエストが到着すると、HTTP ルーターはスラッグ（最初のパスセグメント）を抽出し、トポロジサービスにクエリし、正しいセルにルーティングします。
3. 認証されていないリクエスト（例: 匿名 Docker pull）の場合、スラッグは唯一のルーティングシグナルです。これは、スラッグが URL にあり、認証なしで分類できるため動作します。

トポロジサービスは Cells の共有依存であり、Artifact Registry に固有ではありません。ネームスペース作成のみがトポロジサービスを書き込み可能にする必要があります（スラッグクレーム）。読み取りパスのリクエストはルーティングルックアップのみを必要とし、これはキャッシュ可能です。

### リクエストフロー

すべてのリクエスト（認証されているかどうかにかかわらず）は同じ方法で開始されます:

1. HTTP ルーターは URL からスラッグを抽出し、トポロジサービス経由で正しいセルにルーティング
2. Artifact Registry は `namespaces WHERE slug = '<slug>'` をルックアップしてネームスペース ID を取得
3. Artifact Registry は `(namespace_id, name)` でリポジトリをルックアップして、リポジトリレコードと可視性を取得

`namespaces` テーブルはパーティション化されておらず、`slug` に一意のインデックスを持ちます。1 つのインデックスルックアップ、その後すべてのものに対するパーティションルーティングされたクエリ。スラッグからネームスペース ID へのマッピングは不変であるため、リクエストごとのデータベースクエリを避けるために積極的にキャッシュ（インメモリまたは Redis）できます。

**認証されたリクエスト** は、[ADR-020](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18462) で定義された JWT 交換フローを使用します。すべてのクライアントは Artifact Registry を通じて認証し、Artifact Registry は独自のネームスペーステーブルからスラッグを org ID に解決し、Rails との透過的な交換に含めます。Rails はスラッグについて知る必要がありません。

**認証されていないリクエスト** は JWT 交換をスキップし（[ADR-020](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18462)）、`no_access` を直接割り当て、Artifact Registry はアクセスルールをローカルで評価します。パブリックダウンロードに Rails 呼び出しは不要です。

### 認可の互換性

本提案は [ADR-021](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18717) と互換性があります:

- **スコープ形式**: ADR-021 は現在 `o/<org_id>/repositories/<format>/<type>/<repo_id>` を使用します。本提案により、スコープは org ID の代わりにスラッグを使用します（例: `<slug>/repositories/maven/local/my-repo`）。Artifact Registry はスラッグを org ID に解決し、Rails との交換に含めます。
- **JWT**: ADR-020 は現在 JWT に組織 ID を含みます。本提案により、`organization_id` クレームは不要になります。Artifact Registry は交換が発生する前に独自のルックアップからすでにネームスペース ID を持っています。JWT は `access_level` のみを伝えれば済みます。
- **組織オーナー** は、Rails の組織メンバーシップから直接 Owner アクセスレベルを受け取ります。ネームスペースアプローチからの影響はありません。

### スラッグの発見

GitLab フロントエンドは（Rails を経由せずに）Artifact Registry の API を直接呼び出します。すべての API 呼び出しは URL にスラッグを必要とするため、フロントエンドはリクエストを行う前にスラッグを必要とします。

Artifact Registry は、特定の組織のスラッグのリストを返す軽量なエンドポイント（`/api/v1/o/:org_id/slugs`）を公開します。v1 ではこのリストは常に 1 項目を含みます（組織ごとに 1 つのネームスペース）が、組織ごとの複数ネームスペースがサポートされる将来（例: 組織合併後）に API の破壊的変更を避けるため、レスポンスはリストです。Rails はフロントエンドのアイデンティティトークンを発行する際にこのエンドポイントを呼び出し（[ADR-020](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18462)）、トークンペイロードにスラッグを含めます。フロントエンドは以降のすべての API 呼び出しでそれらを使用します。

マッピングは不変であるため、Rails はレスポンスを積極的にキャッシュできます。Artifact Registry が単一の真実の情報源であり続け、Rails は決して永続化しません。アンカー切り替えまたは組織ごとの複数ネームスペースが将来サポートされる場合、キャッシュ無効化が対応される必要があります。

## 帰結

### ポジティブ

1. **完全な Rails デカップリング**: Artifact Registry のスキーマ、URL、ロジックに Rails の ID はありません。Rails が組織 ID や構造を変更しても、Artifact Registry は影響を受けません。
2. **不変な URL**: スラッグとリポジトリ名はどちらも不変です。URL パス全体が恒久的に安定します。リネームイベントなし、パスドリフトなし、JWT スコープの陳腐化なし、リネームによるクライアント設定の破壊なし。
3. **安定したパーティショニング**: ネームスペース ID は内部的なものであり、アンカー変更時でも決して変わりません。パーティション化されたテーブル、外部キー、インデックスへの影響はありません。
4. **仮想アンカーの柔軟性**: `(platform, entity_type, entity_id)` タプルにより、ネームスペースを今日の組織に、後で他のエンティティに、スキーマ移行やデータ移動なしに付け替えられます。エンティティレベル間の昇格はメタデータ更新です。
5. **Cells 対応**: トポロジサービスでのスラッグクレームは、組織パス解決に依存しないクリーンなルーティングメカニズムを提供します。
6. **認証されていない読み取りに対して自己充足的**: Artifact Registry は独自の namespaces テーブルを持ちます。パブリックダウンロードに Rails 呼び出しは不要です。
7. **データ移行なしの組織合併**: 組織が合併する場合、アンカータプルが更新され、存続する組織は複数のネームスペースを保持します。データ移動、URL 変更、クライアント設定の破壊はありません。詳細は [組織の合併](#organization-merges) を参照してください。
8. **スタンドアロン製品の可能性**（願望）: Artifact Registry が独自のネームスペースアイデンティティを所有し、アンカーを不透明として扱うため、アーキテクチャは GitLab Rails に構造的に依存しません。これは、GitLab の代わりにサードパーティの認証および認可プロバイダーに依存する独立した製品として Artifact Registry をパッケージ化する扉を開きます。

### ネガティブ

1. **スラッグ一意性の強制**: グローバルにユニークなスラッグはスクワッティングリスクをもたらします。予約名、高価値スラッグ保護、最低長のためのポリシーが必要です。これは業界（S3、Docker Hub）で解決済みの問題ですが、製品上の決定が必要です。
2. **すべての認証が Artifact Registry をルーティング**: Artifact Registry がスラッグから org へのマッピングを所有するため、すべてのクライアントは Rails と直接ではなく、Artifact Registry を通じて認証する必要があります。これは Artifact Registry に負荷を加えますが、Rails 側でのマッピング重複を避けます。
3. **ネームスペース作成は明示的なアクション**: 管理 API または購入フローは、クライアントリクエストが成功する前にネームスペースを作成する必要があります。Artifact Registry はネームスペースを設定していない組織のリクエストを処理できません。
4. **トポロジサービスの依存**: Artifact Registry はスラッグクレームのためにトポロジサービスの Go クライアントを統合する必要があります。
5. **スラッグの発見可能性**: ユーザーがすでに GitLab エクスペリエンスから知っている組織パスとは異なり、スラッグは Artifact Registry に固有の新しい概念です。ユーザーはスラッグを覚えるか調べる必要があります。クライアント設定ドキュメントと UI はこれを考慮する必要があります。
6. **重複排除境界の変更**: 重複排除（[ADR-002](002_storage_deduplication_scope.md)）は組織からネームスペースに移動します。v1 ではこれらは 1:1 ですが、顧客ごとに複数のネームスペースは、各ネームスペースが独立した重複排除境界を持つことを意味します。ネームスペース間の重複排除はスコープ外です。

## ADR への影響

受け入れられた場合、本提案は現在レビュー中の以下の ADR に変更を必要とします:

- **[ADR-007: データベーススキーマ](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18456)**: すべてのパーティション化されたテーブルの `organization_id` 列は `namespace_id` にリネームされ、Rails の org ID の代わりに内部ネームスペース ID を参照します。新しいパーティション化されていない `namespaces` テーブルがスキーマに追加されます。パーティショニング戦略、複合主キー、外部キーパターンは変わりません。
- **[ADR-009: API 設計](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18458)**: URL の `/o/<org_id>/` プレフィックスは `/<slug>/` に置き換えられます。スラッグはすべてのプロトコル（管理、Maven、npm、OCI）で API プレフィックスの後の最初のパスセグメントです。どの URL にも数値 ID は表れません。組織 ID のネームスペースを取得するための新しい CRUD API も必要です。
- **[ADR-020: 認証フロー](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18462)**: すべてのクライアントは、Rails と交換する前にスラッグを org ID に解決する Artifact Registry を通じて認証します。JWT の `organization_id` クレームは不要になります。
- **[ADR-021: 認可](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18717)**: スコープ形式は `o/<org_id>/repositories/<format>/<type>/<repo_id>` から `<slug>/repositories/<format>/<type>/<repo_name>` に変わります。認可モデル（専用グループ/プロジェクト、アクセスレベル、可視性同期）はそれ以外影響を受けません。

- **[ADR-008: コンテンツアドレッサブルストレージ](008_content_addressable_storage.md)**:
  オブジェクトストレージのキー階層は、トップレベル分離のためにネームスペースの内部数値 ID の SHA256 ハッシュを使用します。ハッシュ化されたパスは構造的に不変であり（変更すべき人間可読な値がない）、[GitLab のハッシュ化ストレージ標準](https://gitlab.com/groups/gitlab-org/-/work_items/2320) と整合します。ネームスペースのすべてのアーティファクトは同じハッシュプレフィックスの下に同居します。

すでにマージされた ADR は構造的に変更されません:

- **[ADR-001](001_organizations_as_anchor_point.md)**: アンカーポイントとしての組織は維持されます。本提案は置換ではなく、抽象化レイヤを追加します。
- **[ADR-002](002_storage_deduplication_scope.md)**: 重複排除スコープは組織からネームスペースに移動します。初回リリースではこれらは 1:1 です。ストレージはネームスペース境界内で重複排除されます: 同じネームスペース内の同一コンテンツは 1 度保存されます。

## 未解決の質問

1. **どのスラッグ検証ルールを適用すべきか？** 最小/最大長、文字セット、予約プレフィックス。https://gitlab.com/gitlab-org/gitlab/-/work_items/593368 を参照（内部）。
1. **このエンティティのユーザー向けの名前は何か？** https://gitlab.com/gitlab-org/gitlab/-/work_items/593366 を参照。

## 参考文献

- [ADR-001: アンカーポイントとしての組織](001_organizations_as_anchor_point.md)
- [ADR-002: ストレージ重複排除スコープ](002_storage_deduplication_scope.md)
- [ADR-007: データベーススキーマ](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18456)
- [ADR-008: コンテンツアドレッサブルストレージ](008_content_addressable_storage.md)
- [ADR-009: API 設計](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18458)
- [ADR-020: 認証フロー](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18462)
- [ADR-021: 認可](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18717)
- [リポジトリ名の不変性](https://gitlab.com/gitlab-org/gitlab/-/work_items/592582)
- [CTO レビュー: 仮想アンカーポイント](https://docs.google.com/document/d/1qkcOZYSHM_h9k9pYjHze2KHG5qZYMDeZ1UE4GZgD1jw/edit?tab=t.1dg0o6ns9uiw#bookmark=id.t5ky1ssp818r)
- [部署横断ミーティング: 不変なスラッグのアイデア](https://docs.google.com/document/d/1n81b4NNtwddtS419TA8Of-Yoymj2MNNM89FRBo43e8E/edit?tab=t.0#bookmark=id.ps8037nih9pa)

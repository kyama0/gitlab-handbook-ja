---
title: "Artifact Registry ADR 022: Namespace Decoupling"
owning-stage: "~devops::package"
description: "不変なスラグと仮想アンカータプルを持つ内部 namespaces エンティティを導入し、Artifact Registry を Rails の内部識別子から切り離す提案"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/artifact_registry/decisions/022_namespace_decoupling/
upstream_sha: 3f9509996a1f405d6126d2081aebad493e4a3d21
lastmod: "2026-06-08T13:31:46-07:00"
translated_at: "2026-06-08T00:00:00Z"
translator: claude
stale: false
---

<!-- Design Documents often contain forward-looking statements -->
<!-- vale gitlab.FutureTense = NO -->

## ステータス {#status}

**Proposed.**

## コンテキスト {#context}

[ADR-001](001_organizations_as_anchor_point.md) は、Artifact Registry のアンカーポイントとして Organizations を確立しました。Organizations は、エンタープライズのアーティファクト管理にとって自然な境界を表し、GitLab の長期的な方向性と整合し、最上位グループの上に先に構築する移行負担を回避します。現在の設計は ADR-001 に直接従っています。Rails の `organization_id` がシャーディングキーとしてデータベーステーブルに保存され、API URL に埋め込まれ、JWT トークンのスコープに含まれます。

認可と API 設計の ADR に取り組む中で、私たちは、クライアント構成の破損、OCI 参照の無効化、名前再取得による認可バイパスのリスクを防ぐために、リポジトリ名を [不変](https://gitlab.com/gitlab-org/gitlab/-/work_items/592582) にすべきだと決定しました。この決定は自然に次の問いを生みました。同じ原則を namespace レベルにも適用すべきか、ということです。組織パスは可変です（最上位グループのパスと同じく、企業は名前を変更します）。そのため、それらを Artifact Registry の URL に直接使用すると、すべてのリネームがクライアント構成（`.npmrc`、`settings.xml`、Dockerfile、CI パイプライン）を壊し、キャッシュされた参照を無効化し、JWT トークンスコープの陳腐化を引き起こし、Rails と Artifact Registry の間でリネームの伝播と競合状態の処理を必要とします。namespace レベルで不変性を強制すれば、これらすべてが排除され、設計が簡素化されます。

これとは別に、直近の [CTO レビュー](https://docs.google.com/document/d/1qkcOZYSHM_h9k9pYjHze2KHG5qZYMDeZ1UE4GZgD1jw/edit?tab=t.1dg0o6ns9uiw#bookmark=id.t5ky1ssp818r) では、アンカーエンティティが進化した場合に `organization_id` への密結合を解消するコストが高くならないよう、すべてのサテライトサービスに対して仮想アンカーポイントのパターンが提案されました。その根拠は、GitLab の組織階層が今後も発展し続けると見込まれることです。ネストされた組織や組織のマージは将来の検討事項であり、組織展開の長期計画はまだ不明確であるため、Artifact Registry は組織の普遍的なカバレッジを前提にできません。

その後、このトピックに関する [クロスチームの議論](https://docs.google.com/document/d/1n81b4NNtwddtS419TA8Of-Yoymj2MNNM89FRBo43e8E/edit?tab=t.0#bookmark=id.ps8037nih9pa) の中で、Artifact Registry が不変な namespace 識別子を使用できるかどうかが問われました。これにより、namespace のアイデンティティが完全に Artifact Registry によって所有され、外部エンティティの命名から独立することになります。

さらなる観察として、切り離された namespace アイデンティティは、Artifact Registry を独立したプロダクトとしてパッケージ化することを可能にしえます。その唯一の依存先は、GitLab Rails ではなくサードパーティの認証・認可プロバイダーになります。これは設計の推進要因ではなく、好ましい副次効果です。これは、Pulp を Artifact Registry の独立した分離インスタンスに置き換えるなど、GitLab.com 向けにプロダクトを内部で別の形で再利用する道を開きうるものです。

間接レイヤーというアイデアは完全に新しいものではありません。[ADR-007](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18456) の初期のイテレーションでは、チームがまだ最上位グループと組織のどちらにするか決めていた頃に、アンカーエンティティと内部テーブルの間の抽象化として `registries` テーブルが検討されました。この提案は、不変で外部から見えるアイデンティティ（スラグ）を追加し、アンカーエンティティを完全に不透明にすることで、そのパターンを発展させます。

これらの収束する入力から、私たちは、Artifact Registry が Rails の `organization_id` を直接参照するのではなく、自身の namespace アイデンティティを所有すべきかどうかを検討するに至りました。Organizations は引き続きデフォルトのアンカーです。問いは、Artifact Registry がそれらをどう参照するか、つまり直接参照するか、独自の不変識別子を持つ内部的な間接化を通じて参照するか、ということです。

## 提案 {#proposal}

Artifact Registry に内部的な `namespaces` エンティティを導入します。3 つのプロパティを持ちます。

1. **不変なスラグ**: すべての URL に表示され、決して変わらない、グローバルに一意で、顧客が選択する、人間が読める識別子です。GCS/S3 のストレージバケット名の動作と同様です。
2. **仮想アンカータプル**: namespace を外部エンティティに、そのセマンティクスを解釈することなくリンクする `(platform, entity_type, entity_id)` タプルです
3. **内部 UUIDv7 ID**: データベースのパーティショニングとすべての内部クエリに使用され、外部には決して公開されません

Organizations は引き続き最初のアンカータイプです。この提案は [ADR-001](001_organizations_as_anchor_point.md) を変更しません。Artifact Registry とアンカーエンティティの間に抽象化レイヤーを追加します。

### データベーススキーマ {#database-schema}

```sql
CREATE TABLE namespaces (
    id                  UUID PRIMARY KEY,  -- UUIDv7 per ADR-007
    slug                TEXT NOT NULL UNIQUE,
    platform            TEXT NOT NULL,
    entity_type         TEXT NOT NULL,
    entity_id           TEXT NOT NULL,
    billing_entity_type TEXT NOT NULL,
    billing_entity_id   TEXT NOT NULL,
    created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE (platform, entity_type, entity_id)
);
```

- `slug` は作成後不変です。
- `entity_id` は、基となる値が数値である場合（たとえば Rails の `organization_id`）でも、不透明な文字列（`TEXT`）です。これにより、将来のアンカーが非数値の識別子を使用する可能性があるため、アンカータイプ全体でスキーマが統一されます。Artifact Registry は外部エンティティのセマンティクスを決して解釈しません。
- `(platform, entity_type, entity_id)` の一意制約は、重複するアンカーを防ぎます。
- Organizations v1 では、すべての行が `('gitlab', 'organization', '<rails_org_id>')` を持ちます。
- 将来のアンカータイプは、異なる `entity_type` の値を持つ行を追加します。スキーママイグレーションは不要です。
- `billing_entity_type` と `billing_entity_id` は、使用状況イベントの請求アンカーを識別します。AR はこれらを解釈することなく、すべての請求イベントにスタンプします。Core Module（Rails）が namespace 作成時にこれらの値を提供します。FY27-Q2 では、請求エンティティは TLG（`billing_entity_type = 'top_level_group'`、`billing_entity_id = '<root_namespace_id>'`）です。組織レベルの請求が CDot に導入されると、値は AR のコード変更なしに `('organization', '<organization_id>')` に変わります。これにより、AR は請求構造に依存しないままになります。
- 外部から提供される列（`platform`、`entity_type`、`entity_id`、`billing_entity_type`、`billing_entity_id`）のいずれも、スキーマレベルのデフォルトを持ちません。Core Module は namespace 作成時にすべての値を供給する必要があり、これにより Artifact Registry のスキーマは外部のアイデンティティおよび請求モデルに依存しないままになります。

`organization_id` をシャーディングまたはパーティションキーとして使用するテーブルは、代わりに `namespace_id` を使用します。外部キーとインデックスは同じパターンに従います。パーティションキーは安定しています。内部 ID は決して変わりません。

[Cells のシャーディングキー要件](https://docs.gitlab.com/development/organization/sharding/#choosing-the-right-sharding-key) は Rails モノリスのデータベースに適用されます。セルローカルなサービスは、データ移動のために [行を組織に帰属させる](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18808#note_3144391363)（直接または間接的に）だけでよいのです。namespace モデルは、これを `namespace_id -> アンカータプル -> organization` を通じて行います。

### URL 構造 {#url-structure}

```plaintext
Management:  /api/v1/<slug>/maven/repositories
Maven:       /<slug>/maven/my-repo/com/example/myapp/1.0.0/myapp-1.0.0.jar
npm:         /<slug>/npm/my-repo/@scope/package
OCI:         /v2/<slug>/repositories/my-repo/manifests/latest
```

どの URL にも数値 ID はどこにもありません。API プレフィックスの後の最初のパスセグメントは常にスラグです。スラグとリポジトリ名の両方が不変であるため、URL パス全体が恒久的に安定しています。

### スラグ設計 {#slug-design}

スラグは、namespace の作成時に顧客が選択します。スラグが組織名を追跡するという誤った期待を生み出すことを避けるため、組織名から自動入力 **されません**。設計上のプロパティ:

- **不変**: 一度設定されると、決して変わりません。リポジトリ名の不変性、および業界の慣行と一貫しています。
- **顧客が選択**: クライアント構成、CI パイプライン、Kubernetes マニフェストに表示されるため、人間が読めてタイプできます。
- **グローバルに一意**: 2 つの namespace がスラグを共有することはできません。予約名と価値の高いスラグの保護に関するポリシーが必要です。
- **検証ルール**: ハイフンを含む小文字英数字、先頭または末尾のハイフンなし、最小長 TBD。S3 のバケット命名規則と同様です。

### namespace のライフサイクル {#namespace-lifecycle}

**作成:** 顧客が（管理 API または購入フローを通じて）Artifact Registry の namespace を作成すると、スラグを選択し、その namespace はアンカータプルを通じて組織にリンクされます。namespace レコードがデータベースに作成され、スラグは Cells ルーティングのためにトポロジーサービスでクレームされます。

**組織のリネーム:** Artifact Registry への影響はありません。スラグは不変で、組織名から独立しています。データベース、URL、JWT スコープ、クライアント構成のいずれも変わりません。

**アンカーのプロモーション:** namespace を別のエンティティに再アンカーする必要がある場合、アンカータプルの列のみが更新されます。スラグは変わりません。すべての URL は安定したままです。すべてのパーティション化されたテーブルは影響を受けません。これは将来の機能です。Organizations v1 では、プロモーションイベントは存在しません。

**削除:** Artifact Registry は namespace をソフト削除または無効化します。スラグは予約され、別の顧客が再取得することはできません。これは、リポジトリ名の再取得と同じセキュリティリスク（認可バイパス、キャッシュポイズニング）を避けるためです。これは、グローバルなスラグの名前空間が時間とともに縮小することを意味します。最小長の要件は、利用可能なプールが大きいままであることを保証するのに役立ちます。

### 組織のマージ {#organization-merges}

GitLab が将来的に組織のマージをサポートする場合、namespace モデルはデータ移行なしにこれを処理します。

1. 2 つの組織（それぞれ独自の namespace を持つ）が 1 つにマージされます。
2. 吸収される namespace のアンカータプルが、存続する組織を指すように更新されます。namespace ごとに 1 回のメタデータ更新です。
3. 存続する組織は、それぞれ独自のリポジトリと独立した重複排除境界を持つ 2 つの namespace を持つことになります（トレードオフ）。
4. データベースパーティション間でのデータ移動はありません。
5. オブジェクトストレージの blob、キャッシュ、その他の保存データは、組織ではなく namespace でキーが付けられます。ストレージバックエンドでも何も移動しません。
6. スラグは変わりません。すべての URL、JWT スコープ、クライアント構成は安定したままです。

Rails 側では、UI はマージされた組織の下に、それぞれ独自のリポジトリを持つ複数の namespace を表示できます。

```plaintext
Organization: Acme Corp (merged)
  Namespace: acme-engineering
    - maven/my-app
    - docker/service-a
  Namespace: acme-platform (from merged org)
    - maven/platform-lib
    - docker/service-b
```

顧客が後で単一の namespace に統合したい場合、それはマージの自動的な帰結ではなく、明示的な移行（リポジトリをある namespace から別の namespace に移動する）になります。

namespace の抽象化がなければ、組織のマージには、すべてのパーティション化されたデータをある `organization_id` から別の `organization_id` に移行し、すべての URL を更新し、重複排除の境界を調整し、JWT スコープの陳腐化を処理することが必要になる場合があります。

### Cells ルーティング {#cells-routing}

トポロジーサービス（Go の gRPC サービス）は、クレームされた識別子からセルへのマッピングを維持します。Artifact Registry はスラグをクレームすることで統合します。

1. namespace が作成されると、Artifact Registry はトポロジーサービスでスラグをクレームし、namespace のデータが存在するセルにマッピングします。
2. リクエストが到着すると、HTTP ルーターがスラグ（最初のパスセグメント）を抽出し、トポロジーサービスに問い合わせ、正しいセルにルーティングします。
3. 認証されていないリクエスト（たとえば匿名の Docker プル）の場合、スラグが唯一のルーティングシグナルです。これは、スラグが URL 内にあり、認証なしで分類できるため機能します。

トポロジーサービスは共有された Cells の依存先であり、Artifact Registry に固有のものではありません。namespace の作成のみがトポロジーサービスを書き込み可能にすること（スラグのクレーム）を必要とします。読み取りパスのリクエストはルーティングのルックアップのみを必要とし、これはキャッシュできます。

### リクエストフロー {#request-flow}

すべてのリクエスト（認証されているかどうかにかかわらず）は同じように始まります。

1. HTTP ルーターが URL からスラグを抽出し、トポロジーサービスを通じて正しいセルにルーティングします
2. Artifact Registry が `namespaces WHERE slug = '<slug>'` をルックアップして namespace ID を取得します
3. Artifact Registry が `(namespace_id, name)` でリポジトリをルックアップして、リポジトリレコードと可視性を取得します

`namespaces` テーブルはパーティション化されておらず、`slug` に一意インデックスを持ちます。1 回のインデックス付きルックアップを行い、それ以外のすべてはパーティションルーティングされたクエリで行います。スラグから namespace ID へのマッピングは不変であるため、リクエストごとにデータベースクエリを行うのを避けるために積極的にキャッシュ（インメモリまたは Redis）できます。

**認証されたリクエスト** は、[ADR-020](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18462) で定義された JWT 交換フローを使用します。すべてのクライアントは Artifact Registry を通じて認証され、Artifact Registry は自身の namespace テーブルからスラグを組織 ID に解決し、それを Rails との透過的な交換に含めます。Rails はスラグについて知る必要が一切ありません。

**認証されていないリクエスト** は JWT 交換をスキップし（[ADR-020](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18462)）、直接 `no_access` が割り当てられ、Artifact Registry がアクセスルールをローカルに評価します。パブリックダウンロードに Rails の呼び出しは不要です。

### 認可の互換性 {#authorization-compatibility}

この提案は [ADR-021](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18717) と互換性があります。

- **スコープフォーマット**: ADR-021 は現在 `o/<org_id>/repositories/<format>/<type>/<repo_id>` を使用しています。この提案では、スコープは組織 ID の代わりにスラグを使用します（たとえば `<slug>/repositories/maven/local/my-repo`）。Artifact Registry はスラグを組織 ID に解決し、それを Rails との交換に含めます。
- **JWT**: ADR-020 は現在、JWT に組織 ID を含めています。この提案では、`organization_id` クレームはもはや不要です。Artifact Registry は、交換が行われる前に、自身のルックアップから namespace ID をすでに持っています。JWT は `access_level` だけを運べばよいのです。
- **組織のオーナー** は、Rails の組織メンバーシップから Owner のアクセスレベルを直接受け取ります。namespace アプローチによる影響はありません。

### スラグの発見 {#slug-discovery}

GitLab フロントエンドは、（Rails を通じてではなく）Artifact Registry の API を直接呼び出します。すべての API 呼び出しは URL にスラグを必要とするため、フロントエンドはリクエストを行う前にスラグを必要とします。

Artifact Registry は、指定された組織のスラグのリストを返す軽量なエンドポイント（`/api/v1/o/:org_id/slugs`）を公開します。v1 ではこのリストは常に単一の項目を含みます（組織ごとに 1 つの namespace）が、組織ごとに複数の namespace がサポートされる場合（たとえば組織のマージ後）に API の破壊的変更を避けるため、レスポンスはリストになっています。Rails はフロントエンドのアイデンティティトークンを発行する際にこのエンドポイントを呼び出し（[ADR-020](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18462)）、スラグをトークンのペイロードに含めます。フロントエンドはその後、すべての後続の API 呼び出しにそれらを使用します。

マッピングは不変であるため、Rails はレスポンスを積極的にキャッシュできます。Artifact Registry は引き続き唯一の信頼できる情報源です。Rails はそれを決して永続化しません。将来的にアンカーの切り替えや組織ごとの複数 namespace がサポートされる場合、キャッシュの無効化に対処する必要があります。

## 結果 {#consequences}

### ポジティブ {#positive}

1. **Rails からの完全な切り離し**: Artifact Registry のスキーマ、URL、ロジックに Rails の ID がありません。Rails が組織 ID や構造を変更しても、Artifact Registry は影響を受けません。
2. **不変な URL**: スラグとリポジトリ名の両方が不変です。URL パス全体が恒久的に安定しています。リネームイベントなし、パスのドリフトなし、JWT スコープの陳腐化なし、リネームによるクライアント構成の破損なしです。
3. **安定したパーティショニング**: namespace ID は内部的で、アンカーの変更時でも決して変わりません。パーティション化されたテーブル、外部キー、インデックスへの影響はありません。
4. **仮想アンカーの柔軟性**: `(platform, entity_type, entity_id)` タプルにより、今日は組織に、後で他のエンティティに、スキーママイグレーションやデータ移動なしで namespace を付与できます。エンティティレベル間のプロモーションはメタデータの更新です。
5. **Cells 対応**: トポロジーサービスでのスラグのクレームは、組織パスの解決に依存することなく、クリーンなルーティングメカニズムを提供します。
6. **認証されていない読み取りに対して自己完結**: Artifact Registry は自身の namespaces テーブルを持ちます。パブリックダウンロードに Rails の呼び出しは不要です。
7. **データ移行なしの組織のマージ**: 組織がマージされる場合、アンカータプルが更新され、存続する組織が複数の namespace を保持します。データ移動、URL の変更、クライアント構成の破損はありません。詳細は [Organization Merges](#organization-merges) を参照してください。
8. **スタンドアロンプロダクトの可能性**（理想的な展望）: Artifact Registry は自身の namespace アイデンティティを所有し、アンカーを不透明として扱うため、アーキテクチャは構造的に GitLab Rails に依存しません。これは、Artifact Registry を、GitLab の代わりにサードパーティの認証・認可プロバイダーに依存する独立したプロダクトとしてパッケージ化する道を開きます。

### ネガティブ {#negative}

1. **スラグの一意性の強制**: グローバルに一意なスラグはスクワッティングのリスクを導入します。予約名、価値の高いスラグの保護、最小長に関するポリシーが必要です。これは業界で解決済みの問題（S3、Docker Hub）ですが、プロダクトの決定を必要とします。
2. **すべての認証が Artifact Registry を経由する**: Artifact Registry がスラグから組織へのマッピングを所有するため、すべてのクライアントは Rails と直接ではなく Artifact Registry を通じて認証する必要があります。これは Artifact Registry に負荷を追加しますが、Rails 側でのマッピングの重複を回避します。
3. **namespace の作成は明示的なアクション**: 管理 API または購入フローは、いかなるクライアントリクエストも成功する前に namespace を作成する必要があります。Artifact Registry は、namespace を設定していない組織のリクエストをサーブできません。
4. **トポロジーサービスへの依存**: Artifact Registry は、スラグのクレームのためにトポロジーサービスの Go クライアントを統合する必要があります。
5. **スラグの発見可能性**: ユーザーが GitLab の経験からすでに知っている組織パスとは異なり、スラグは Artifact Registry に固有の新しい概念です。ユーザーは自身のスラグを覚えるか調べる必要があります。クライアント構成のドキュメントと UI はこれを考慮する必要があります。
6. **重複排除境界の変更**: 重複排除（[ADR-002](002_storage_deduplication_scope.md)）は組織から namespace に移ります。v1 ではこれらは 1:1 ですが、顧客ごとに複数の namespace があるということは、各 namespace が独立した重複排除境界を持つことを意味します。namespace をまたぐ重複排除は対象外です。

## ADR への影響 {#impact-on-adrs}

承認された場合、この提案は、現在レビュー中の以下の ADR への変更を必要とします。

- **[ADR-007: Database Schema](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18456)**: すべてのパーティション化されたテーブルの `organization_id` 列は `namespace_id` にリネームされ、Rails の組織 ID の代わりに内部の namespace ID を参照します。パーティション化されていない新しい `namespaces` テーブルがスキーマに追加されます。パーティショニング戦略、複合主キー、外部キーパターンは変わりません。
- **[ADR-009: API Design](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18458)**: URL の `/o/<org_id>/` プレフィックスは `/<slug>/` に置き換えられます。スラグは、すべてのプロトコル（管理、Maven、npm、OCI）について、API プレフィックスの後の最初のパスセグメントです。どの URL にも数値 ID は表示されません。組織 ID の namespace を取得する新しい CRUD API も必要です。
- **[ADR-020: Authentication Flow](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18462)**: すべてのクライアントは Artifact Registry を通じて認証され、Artifact Registry は Rails と交換する前にスラグを組織 ID に解決します。JWT の `organization_id` クレームはもはや不要になります。
- **[ADR-021: Authorization](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18717)**: スコープフォーマットが `o/<org_id>/repositories/<format>/<type>/<repo_id>` から `<slug>/repositories/<format>/<type>/<repo_name>` に変わります。認可モデル（専用のグループ/プロジェクト、アクセスレベル、可視性の同期）はそれ以外には影響を受けません。

- **[ADR-008: Content-Addressable Storage](008_content_addressable_storage.md)**: オブジェクトストレージのキー階層は、最上位の分離のために namespace の内部 UUIDv7 ID の SHA256 ハッシュを使用します。ハッシュ化されたパスは構造上不変です（変わりうる人間が読める値がありません）。これは [GitLab のハッシュ化ストレージ標準](https://gitlab.com/groups/gitlab-org/-/work_items/2320) と整合します。namespace のすべてのアーティファクトは、同じハッシュプレフィックスの下に共置されます。

すでにマージされた ADR は構造的には変わりません。

- **[ADR-001](001_organizations_as_anchor_point.md)**: アンカーポイントとしての Organizations は維持されます。この提案は抽象化レイヤーを追加するものであり、置き換えではありません。
- **[ADR-002](002_storage_deduplication_scope.md)**: 重複排除のスコープは組織から namespace に移ります。初期リリースではこれらは 1:1 です。ストレージは namespace 境界内で重複排除されます。同じ namespace 内の同一コンテンツは 1 回保存されます。

## 未解決の問題 {#open-questions}

1. **どのようなスラグ検証ルールを適用すべきか。** 最小/最大長、文字セット、予約プレフィックス。https://gitlab.com/gitlab-org/gitlab/-/work_items/593368 （内部）を参照してください。
1. **このエンティティのユーザー向けの名前は何か。** https://gitlab.com/gitlab-org/gitlab/-/work_items/593366 を参照してください。

## 参考資料 {#references}

- [ADR-001: Organizations as Anchor Point](001_organizations_as_anchor_point.md)
- [ADR-002: Storage Deduplication Scope](002_storage_deduplication_scope.md)
- [ADR-007: Database Schema](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18456)
- [ADR-008: Content-Addressable Storage](008_content_addressable_storage.md)
- [ADR-009: API Design](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18458)
- [ADR-020: Authentication Flow](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18462)
- [ADR-021: Authorization](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18717)
- [Repository name immutability](https://gitlab.com/gitlab-org/gitlab/-/work_items/592582)
- [CTO review: virtual anchor point](https://docs.google.com/document/d/1qkcOZYSHM_h9k9pYjHze2KHG5qZYMDeZ1UE4GZgD1jw/edit?tab=t.1dg0o6ns9uiw#bookmark=id.t5ky1ssp818r)
- [Cross-team meeting: immutable slug idea](https://docs.google.com/document/d/1n81b4NNtwddtS419TA8Of-Yoymj2MNNM89FRBo43e8E/edit?tab=t.0#bookmark=id.ps8037nih9pa)

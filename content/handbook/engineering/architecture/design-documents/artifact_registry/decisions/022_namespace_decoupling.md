---
title: "Artifact Registry ADR 022: ネームスペースデカップリング"
owning-stage: "~devops::package"
description: "不変なスラッグと仮想アンカータプルを持つ内部ネームスペースエンティティを導入し、Artifact Registry を Rails の内部識別子から切り離す提案"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/artifact_registry/decisions/022_namespace_decoupling/
upstream_sha: 5b642767a4478d09eeedd1689a94c1b164788f25
lastmod: "2026-06-09T19:10:50+01:00"
translated_at: "2026-06-11T00:00:00Z"
translator: claude
stale: false
model: claude-opus-4-7
---

<!-- Design Documents often contain forward-looking statements -->
<!-- vale gitlab.FutureTense = NO -->

## Status

**Proposed.**

## Context

[ADR-001](001_organizations_as_anchor_point.md) は、Artifact Registry のアンカーポイントとして Organizations を確立しました。Organizations は、エンタープライズのアーティファクト管理にとって自然な境界を表し、GitLab の長期的な方向性と整合し、最初に最上位グループの上に構築するというマイグレーションの負担を回避します。現在の設計は ADR-001 に直接従っています: Rails の `organization_id` がシャーディングキーとしてデータベーステーブルに保存され、API URL に埋め込まれ、JWT トークンのスコープに含められます。

認可と API 設計の ADR に取り組む中で、私たちはクライアント構成の破損、OCI 参照の無効化、名前の再取得による認可バイパスのリスクを防ぐために、リポジトリ名を [不変](https://gitlab.com/gitlab-org/gitlab/-/work_items/592582) にすべきだと決定しました。その決定は当然ながら次の問いを提起しました: 同じ原則をネームスペースレベルでも適用すべきか? 組織パスは可変です（最上位グループのパスと同じで、企業はリネームします）。そのため、それらを Artifact Registry の URL で直接使用すると、すべてのリネームがクライアント構成（`.npmrc`、`settings.xml`、Dockerfile、CI パイプライン）を壊し、キャッシュされた参照を無効化し、JWT トークンのスコープの古さを生み出し、Rails と Artifact Registry の間でのリネームの伝播と競合状態の処理を必要とすることを意味します。ネームスペースレベルで不変性を強制することは、これらすべてを排除し、設計を簡素化します。

別途、最新の [CTO レビュー](https://docs.google.com/document/d/1qkcOZYSHM_h9k9pYjHze2KHG5qZYMDeZ1UE4GZgD1jw/edit?tab=t.1dg0o6ns9uiw#bookmark=id.t5ky1ssp818r) では、アンカーエンティティが進化した場合に `organization_id` への密結合を元に戻すコストが高くならないように、すべてのサテライトサービスに対して仮想アンカーポイントのパターンが提案されました。その根拠は、GitLab の組織階層が引き続き発展すると予想されることです: ネストされた組織と組織のマージは将来の検討事項であり、組織展開の長期計画はまだ不明確であるため、Artifact Registry は組織が普遍的にカバーされていると想定できません。

その後、このトピックに関する [クロスチームの議論](https://docs.google.com/document/d/1n81b4NNtwddtS419TA8Of-Yoymj2MNNM89FRBo43e8E/edit?tab=t.0#bookmark=id.ps8037nih9pa) において、Artifact Registry が不変なネームスペース識別子を使用できるかどうかが問われました。これにより、ネームスペースのアイデンティティが完全に Artifact Registry によって所有され、外部のエンティティの命名から独立します。

さらなる観察として、切り離されたネームスペースのアイデンティティは、Artifact Registry を、唯一の依存関係がサードパーティの認証・認可プロバイダーであり GitLab Rails ではない独立した製品としてパッケージ化することを可能にしうります。これは設計の推進要因ではなく、ポジティブな副次効果です。これは、Pulp を Artifact Registry の独立した分離インスタンスで置き換えるなど、GitLab.com 向けに製品を内部的に他の方法で再利用する道を開く可能性があります。

間接化レイヤーのアイデアは完全に新しいわけではありません。[ADR-007](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18456) の初期のイテレーションでは、チームがまだ最上位グループと組織の間で決定している頃に、アンカーエンティティと内部テーブルの間の抽象化としての `registries` テーブルが検討されました。この提案は、不変で外部から見えるアイデンティティ（スラッグ）を追加し、アンカーエンティティを完全に不透明にすることで、そのパターンを基にしています。

これらの収束した入力により、私たちは、Artifact Registry が Rails の `organization_id` を直接参照するのではなく、自身のネームスペースアイデンティティを所有すべきかどうかを検討するに至りました。Organizations はデフォルトのアンカーのままです。問題は、Artifact Registry がそれらをどのように参照するか、すなわち直接参照するか、独自の不変な識別子を持つ内部の間接化を通じて参照するかです。

## Proposal

Artifact Registry に、3 つのプロパティを持つ内部 `namespaces` エンティティを導入します。

1. **不変なスラッグ**: すべての URL に表示され、決して変わらない、グローバルに一意で顧客が選択する人間が読める識別子。GCS/S3 のストレージバケット名の動作に類似しています。
2. **仮想アンカータプル**: ネームスペースを外部エンティティにリンクする `(platform, entity_type, entity_id)` タプルであり、そのセマンティクスを解釈しません。
3. **内部 UUIDv7 ID**: データベースのパーティショニングとすべての内部クエリに使用され、外部には決して公開されません。

Organizations は最初のアンカータイプのままです。この提案は [ADR-001](001_organizations_as_anchor_point.md) を変更しません。Artifact Registry とアンカーエンティティの間に抽象化レイヤーを追加します。

### Database Schema

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

- `slug` は作成後は不変です。
- `entity_id` は、基礎となる値が数値の場合（例えば Rails の `organization_id`）でも、不透明な文字列（`TEXT`）です。これにより、将来のアンカーが非数値の識別子を使用する可能性があるため、アンカータイプ間でスキーマが統一されます。Artifact Registry は外部エンティティのセマンティクスを決して解釈しません。
- `(platform, entity_type, entity_id)` に対する一意性制約は、重複するアンカーを防ぎます。
- Organizations v1 では、すべての行は `('gitlab', 'organization', '<rails_org_id>')` を持ちます。
- 将来のアンカータイプは、異なる `entity_type` 値を持つ行を追加します。スキーマのマイグレーションは不要です。
- `billing_entity_type` と `billing_entity_id` は、使用イベントの課金アンカーを識別します。AR はこれらをすべての課金イベントに、解釈することなくスタンプします。Core Module（Rails）がネームスペースの作成時にこれらの値を提供します。FY27-Q2 では、課金エンティティは TLG です（`billing_entity_type = 'top_level_group'`、`billing_entity_id = '<root_namespace_id>'`）。組織レベルの課金が CDot に導入されると、値は AR のコード変更なしに `('organization', '<organization_id>')` に変わります。これにより AR は課金構造に依存しないままになります。
- 外部から提供される列（`platform`、`entity_type`、`entity_id`、`billing_entity_type`、`billing_entity_id`）のいずれも、スキーマレベルのデフォルトを持ちません。Core Module は、Artifact Registry スキーマが外部のアイデンティティおよび課金モデルに依存しないままになるように、ネームスペースの作成時にすべての値を提供する必要があります。

`organization_id` をシャーディングまたはパーティションキーとして使用するテーブルは、代わりに `namespace_id` を使用します。外部キーとインデックスは同じパターンに従います。パーティションキーは安定しています: 内部 ID は決して変わりません。

[Cells のシャーディングキー要件](https://docs.gitlab.com/development/organization/sharding/#choosing-the-right-sharding-key) は Rails モノリスのデータベースに適用されます。Cell ローカルのサービスは、データ移動のために [行を組織に帰属させる](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18808#note_3144391363)（直接的または間接的に）だけで済みます。ネームスペースモデルはこれを `namespace_id -> アンカータプル -> organization` を通じて行います。

### URL Structure

```plaintext
Management:  /api/v1/<slug>/maven/repositories
Maven:       /<slug>/maven/my-repo/com/example/myapp/1.0.0/myapp-1.0.0.jar
npm:         /<slug>/npm/my-repo/@scope/package
OCI:         /v2/<slug>/repositories/my-repo/manifests/latest
```

どの URL にも数値 ID はどこにもありません。API プレフィックスの後の最初のパスセグメントは常にスラッグです。スラッグとリポジトリ名の両方が不変であるため、URL パス全体が永続的に安定しています。

### Slug Design

スラッグは、ネームスペースの作成時に顧客によって選択されます。スラッグが組織名を追跡するという誤った期待を生み出すことを避けるため、組織名から自動入力される **わけではありません**。設計プロパティ:

- **不変**: 一度設定されると決して変わりません。リポジトリ名の不変性および業界の慣行と一致します。
- **顧客が選択**: クライアント構成、CI パイプライン、Kubernetes マニフェストに表示されるため、人間が読めてタイプ可能です。
- **グローバルに一意**: 2 つのネームスペースがスラッグを共有することはできません。予約名と高価値のスラッグの保護に関するポリシーが必要です。
- **検証ルール**: ハイフンを伴う小文字英数字、先頭または末尾のハイフンなし、最小長は TBD。S3 のバケット命名ルールに類似しています。

### Namespace Lifecycle

**作成:** 顧客が Artifact Registry のネームスペースを作成すると（管理 API または購入フローを通じて）、スラッグを選択し、ネームスペースはアンカータプルを通じて組織にリンクされます。ネームスペースレコードがデータベースに作成され、スラッグが Cells ルーティングのためにトポロジーサービスでクレームされます。

**組織のリネーム:** Artifact Registry への影響はありません。スラッグは不変であり、組織名から独立しています。データベース、URL、JWT スコープ、クライアント構成には何も変更がありません。

**アンカーのプロモーション:** ネームスペースを異なるエンティティに再アンカーする必要がある場合、アンカータプルの列のみが更新されます。スラッグは変わりません。すべての URL は安定したままです。すべてのパーティション化されたテーブルは影響を受けません。これは将来のケイパビリティです。Organizations v1 では、プロモーションイベントは存在しません。

**削除:** Artifact Registry はネームスペースをソフト削除または無効化します。スラッグは予約され、リポジトリ名の再取得と同じセキュリティリスク（認可バイパス、キャッシュ汚染）を避けるため、別の顧客によって再取得することはできません。これは、グローバルなスラッグのネームスペースが時間とともに縮小することを意味します。最小長の要件は、利用可能なプールが大きいままになることを保証するのに役立ちます。

### Organization Merges

GitLab が将来組織のマージをサポートする場合、ネームスペースモデルはデータマイグレーションなしにこれを処理します。

1. 2 つの組織（それぞれ独自のネームスペースを持つ）が 1 つにマージします。
2. 吸収されたネームスペースのアンカータプルが、存続する組織を指すように更新されます。ネームスペースごとに 1 回のメタデータ更新です。
3. 存続する組織は、それぞれ独自のリポジトリと独立した重複排除境界を持つ 2 つのネームスペースを持つようになります（トレードオフ）。
4. データベースのパーティション間でのデータ移動はありません。
5. オブジェクトストレージの blob、キャッシュ、その他の保存されたデータはすべて、組織ではなくネームスペースをキーとします。ストレージバックエンドでも何も移動しません。
6. スラッグは変わりません。すべての URL、JWT スコープ、クライアント構成は安定したままです。

Rails 側では、UI はマージされた組織の下に、それぞれ独自のリポジトリを持つ複数のネームスペースを表示できます。

```plaintext
Organization: Acme Corp (merged)
  Namespace: acme-engineering
    - maven/my-app
    - docker/service-a
  Namespace: acme-platform (from merged org)
    - maven/platform-lib
    - docker/service-b
```

顧客が後で単一のネームスペースに統合したい場合、それはマージの自動的な結果ではなく、明示的なマイグレーション（リポジトリをあるネームスペースから別のネームスペースに移動する）になります。

ネームスペースの抽象化がなければ、組織のマージには、ある `organization_id` から別の `organization_id` へのすべてのパーティション化されたデータのマイグレーション、すべての URL の更新、重複排除境界の調整、JWT スコープの古さの処理が必要になる可能性があります。

### Cells Routing

トポロジーサービス（Go の gRPC サービス）は、クレームされた識別子から Cell へのマッピングを維持します。Artifact Registry はスラッグをクレームすることで統合します。

1. ネームスペースが作成されると、Artifact Registry はスラッグをトポロジーサービスでクレームし、ネームスペースのデータが存在する Cell にマッピングします。
2. リクエストが到着すると、HTTP ルーターはスラッグ（最初のパスセグメント）を抽出し、トポロジーサービスにクエリし、正しい Cell にルーティングします。
3. 認証されていないリクエスト（例: 匿名の Docker pull）の場合、スラッグが唯一のルーティングシグナルです。スラッグが URL に含まれており、認証なしで分類できるため、これは機能します。

トポロジーサービスは共有された Cells の依存関係であり、Artifact Registry に固有ではありません。ネームスペースの作成のみが、トポロジーサービスを書き込み可能にすること（スラッグのクレーム）を必要とします。読み取りパスのリクエストはルーティングのルックアップのみを必要とし、これはキャッシュできます。

### Request Flow

すべてのリクエスト（認証されているかどうかにかかわらず）は同じように始まります。

1. HTTP ルーターが URL からスラッグを抽出し、トポロジーサービスを通じて正しい Cell にルーティングする
2. Artifact Registry が `namespaces WHERE slug = '<slug>'` をルックアップしてネームスペース ID を取得する
3. Artifact Registry が `(namespace_id, name)` でリポジトリをルックアップし、リポジトリレコードと可視性を取得する

`namespaces` テーブルはパーティション化されておらず、`slug` に一意のインデックスを持ちます。1 回のインデックス付きルックアップを行い、その後は他のすべてに対してパーティションルーティングされたクエリを行います。スラッグからネームスペース ID へのマッピングは不変であるため、すべてのリクエストでのデータベースクエリを回避するために積極的にキャッシュできます（インメモリまたは Redis）。

**認証されたリクエスト** は、[ADR-020](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18462) で定義された JWT 交換フローを使用します。すべてのクライアントは Artifact Registry を通じて認証され、Artifact Registry は自身のネームスペーステーブルからスラッグを組織 ID に解決し、それを Rails との透過的な交換に含めます。Rails はスラッグについて知る必要が決してありません。

**認証されていないリクエスト** は JWT 交換をスキップし（[ADR-020](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18462)）、直接 `no_access` が割り当てられ、Artifact Registry はアクセスルールをローカルで評価します。パブリックダウンロードに Rails 呼び出しは不要です。

### Authorization Compatibility

この提案は [ADR-021](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18717) と互換性があります。

- **スコープフォーマット**: ADR-021 は現在 `o/<org_id>/repositories/<format>/<type>/<repo_id>` を使用しています。この提案では、スコープは組織 ID の代わりにスラッグを使用します（例: `<slug>/repositories/maven/hosted/my-repo`）。Artifact Registry はスラッグを組織 ID に解決し、それを Rails との交換に含めます。
- **JWT**: ADR-020 は現在、組織 ID を JWT に含めています。この提案では、`organization_id` クレームは不要になります。Artifact Registry は、交換が発生する前に自身のルックアップからネームスペース ID をすでに持っています。JWT は `access_level` を運ぶだけで済みます。
- **組織のオーナー** は、Rails の組織メンバーシップから Owner アクセスレベルを直接受け取ります。ネームスペースアプローチからの影響はありません。

### Slug Discovery

GitLab フロントエンドは（Rails を通じてではなく）Artifact Registry の API を直接呼び出します。すべての API 呼び出しは URL にスラッグを必要とするため、フロントエンドはリクエストを行う前にスラッグを必要とします。

Artifact Registry は、特定の組織のスラッグのリストを返す軽量なエンドポイント（`/api/v1/o/:org_id/slugs`）を公開します。v1 では、このリストは常に単一の項目を含みます（組織ごとに 1 つのネームスペース）が、レスポンスは、組織ごとに複数のネームスペースがサポートされる場合（例えば組織のマージ後）に API の破壊的変更を避けるためにリストになっています。Rails はフロントエンドのアイデンティティトークンを発行する際にこのエンドポイントを呼び出し（[ADR-020](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18462)）、スラッグをトークンのペイロードに含めます。フロントエンドはその後、後続のすべての API 呼び出しにそれらを使用します。

マッピングは不変であるため、Rails はレスポンスを積極的にキャッシュできます。Artifact Registry は唯一の信頼できる情報源のままです。Rails はそれを永続化しません。将来アンカーの切り替えや組織ごとの複数のネームスペースがサポートされる場合、キャッシュの無効化に対処する必要があります。

## Consequences

### Positive

1. **完全な Rails の切り離し**: Artifact Registry のスキーマ、URL、ロジックに Rails の ID がありません。Rails が組織 ID や構造を変更しても、Artifact Registry は影響を受けません。
2. **不変な URL**: スラッグとリポジトリ名の両方が不変です。URL パス全体が永続的に安定しています。リネームイベントなし、パスのドリフトなし、JWT スコープの古さなし、リネームによるクライアント構成の破損なし。
3. **安定したパーティショニング**: ネームスペース ID は内部的であり、アンカーの変更時でも決して変わりません。パーティション化されたテーブル、外部キー、インデックスへの影響はありません。
4. **仮想アンカーの柔軟性**: `(platform, entity_type, entity_id)` タプルにより、今日は組織に、後で他のエンティティに、スキーマのマイグレーションやデータの移動なしにネームスペースを接続できます。エンティティレベル間のプロモーションはメタデータの更新です。
5. **Cells 対応**: トポロジーサービスでのスラッグのクレームは、組織パスの解決に依存しないクリーンなルーティングメカニズムを提供します。
6. **認証されていない読み取りに対して自己完結**: Artifact Registry は独自のネームスペーステーブルを持ちます。パブリックダウンロードに Rails 呼び出しは不要です。
7. **データマイグレーションなしの組織のマージ**: 組織がマージする場合、アンカータプルが更新され、存続する組織が複数のネームスペースを保持します。データの移動、URL の変更、クライアント構成の破損はありません。詳細については [Organization Merges](#organization-merges) を参照してください。
8. **独立した製品の可能性**（理想的）: Artifact Registry は自身のネームスペースアイデンティティを所有し、アンカーを不透明として扱うため、アーキテクチャは構造的に GitLab Rails に依存しません。これにより、Artifact Registry を、GitLab の代わりにサードパーティの認証・認可プロバイダーに依存する独立した製品としてパッケージ化する道が開かれます。

### Negative

1. **スラッグの一意性の強制**: グローバルに一意なスラッグはスクワッティングのリスクをもたらします。予約名、高価値のスラッグの保護、最小長に関するポリシーが必要です。これは業界（S3、Docker Hub）で解決済みの問題ですが、製品上の決定が必要です。
2. **すべての認証が Artifact Registry を経由する**: Artifact Registry がスラッグから組織へのマッピングを所有するため、すべてのクライアントは Rails と直接ではなく、それを通じて認証する必要があります。これは Artifact Registry に負荷を追加しますが、Rails 側でのマッピングの重複を回避します。
3. **ネームスペースの作成は明示的なアクション**: 管理 API または購入フローは、クライアントリクエストが成功する前にネームスペースを作成する必要があります。Artifact Registry は、ネームスペースをセットアップしていない組織のリクエストに対応できません。
4. **トポロジーサービスへの依存**: Artifact Registry は、スラッグのクレームのためにトポロジーサービスの Go クライアントを統合する必要があります。
5. **スラッグの発見可能性**: ユーザーが GitLab の経験からすでに知っている組織パスとは異なり、スラッグは Artifact Registry 固有の新しい概念です。ユーザーはスラッグを覚えるかルックアップする必要があります。クライアント構成のドキュメントと UI はこれを考慮する必要があります。
6. **重複排除境界の変更**: 重複排除（[ADR-002](002_storage_deduplication_scope.md)）が組織からネームスペースに移ります。v1 ではこれらは 1:1 ですが、顧客ごとの複数のネームスペースは、各ネームスペースが独立した重複排除境界を持つことを意味します。ネームスペース間の重複排除は範囲外です。

## Impact on ADRs

承認された場合、この提案は、現在レビュー中の以下の ADR への変更を必要とします。

- **[ADR-007: Database Schema](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18456)**: すべてのパーティション化されたテーブルの `organization_id` 列が `namespace_id` にリネームされ、Rails の組織 ID の代わりに内部のネームスペース ID を参照します。新しいパーティション化されていない `namespaces` テーブルがスキーマに追加されます。パーティショニング戦略、複合主キー、外部キーのパターンは変更されません。
- **[ADR-009: API Design](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18458)**: URL の `/o/<org_id>/` プレフィックスが `/<slug>/` に置き換えられます。スラッグは、すべてのプロトコル（管理、Maven、npm、OCI）について API プレフィックスの後の最初のパスセグメントです。どの URL にも数値 ID は現れません。また、組織 ID のネームスペースを取得するための新しい CRUD API も必要です。
- **[ADR-020: Authentication Flow](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18462)**: すべてのクライアントは Artifact Registry を通じて認証し、Artifact Registry は Rails と交換する前にスラッグを組織 ID に解決します。JWT の `organization_id` クレームは不要になります。
- **[ADR-021: Authorization](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18717)**: スコープフォーマットが `o/<org_id>/repositories/<format>/<type>/<repo_id>` から `<slug>/repositories/<format>/<type>/<repo_name>` に変わります。認可モデル（専用のグループ/プロジェクト、アクセスレベル、可視性の同期）はそれ以外の点では影響を受けません。

- **[ADR-008: Content-Addressable Storage](008_content_addressable_storage.md)**: オブジェクトストレージのキー階層は、最上位の分離のためにネームスペースの内部 UUIDv7 ID の SHA256 ハッシュを使用します。ハッシュ化されたパスは構造上不変です（変更すべき人間が読める値がありません）。これは [GitLab のハッシュ化ストレージ標準](https://gitlab.com/groups/gitlab-org/-/work_items/2320) と整合します。ネームスペースのすべてのアーティファクトは、同じハッシュプレフィックスの下に同居します。

すでにマージされた ADR は構造的には変更されません。

- **[ADR-001](001_organizations_as_anchor_point.md)**: アンカーポイントとしての Organizations は維持されます。この提案は抽象化レイヤーを追加するものであり、置き換えではありません。
- **[ADR-002](002_storage_deduplication_scope.md)**: 重複排除のスコープが組織からネームスペースに移ります。初回リリースではこれらは 1:1 です。ストレージはネームスペース境界内で重複排除されます: 同じネームスペース内の同一コンテンツは 1 度だけ保存されます。

## Open Questions

1. **どのスラッグ検証ルールを適用すべきか?** 最小/最大長、文字セット、予約プレフィックス。https://gitlab.com/gitlab-org/gitlab/-/work_items/593368 （内部）を参照してください。
1. **このエンティティのユーザー向けの名称は何か?** https://gitlab.com/gitlab-org/gitlab/-/work_items/593366 を参照してください。

## References

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

---
title: "Artifact Registry ADR 022: ネームスペースデカップリング"
owning-stage: "~devops::package"
description: "不変なスラッグと仮想アンカータプルを持つ内部ネームスペースエンティティを導入し、Artifact Registry を Rails の内部識別子から切り離す提案"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/artifact_registry/decisions/022_namespace_decoupling/
upstream_sha: 0505a0f5a670366af5dd620eb2b9f12ebd7a79fe
lastmod: 2026-06-09T19:10:50+01:00
translated_at: "2026-06-12T21:12:20Z"
translator: claude
stale: false
---

<!-- Design Documents often contain forward-looking statements -->
<!-- vale gitlab.FutureTense = NO -->

## ステータス

**提案中。**

## コンテキスト

[ADR-001](001_organizations_as_anchor_point.md) は、Organization を Artifact Registry のアンカーポイントとして確立しました。
Organization は、エンタープライズのアーティファクト管理にとって自然な境界を表し、GitLab の長期的な
方向性に整合し、トップレベルグループの上に最初に構築する移行負担を回避します。現在の設計は ADR-001 に
直接従っています。Rails の `organization_id` はシャーディングキーとしてデータベーステーブルに保存され、API URL に
埋め込まれ、JWT トークンスコープに含まれます。

認可と API 設計の ADR に取り組む中で、私たちはリポジトリ名を
[不変](https://gitlab.com/gitlab-org/gitlab/-/work_items/592582) にすべきだと決定しました。クライアント設定の破損、OCI
参照の無効化、名前の再取得による認可バイパスのリスクを防ぐためです。その決定は自然に次の問いを提起しました。
同じ原則をネームスペースレベルにも適用すべきか、という問いです。Organization のパスは可変です（トップレベルグループのパスと同じく、
企業は名前を変える）。そのため、それらを Artifact Registry の URL で直接使用すると、リネームのたびにクライアント
設定（`.npmrc`、`settings.xml`、Dockerfile、CI パイプライン）が壊れ、キャッシュされた参照が無効になり、JWT トークン
スコープの陳腐化が生じ、Rails と Artifact Registry の間でリネームの伝播と競合状態の処理が必要になります。
ネームスペースレベルで不変性を強制すれば、これらすべてが解消され、設計が簡素化されます。

別の観点として、直近の [CTO レビュー](https://docs.google.com/document/d/1qkcOZYSHM_h9k9pYjHze2KHG5qZYMDeZ1UE4GZgD1jw/edit?tab=t.1dg0o6ns9uiw#bookmark=id.t5ky1ssp818r) では、
すべてのサテライトサービスに対して仮想アンカーポイントのパターンが提案されました。アンカーエンティティが進化した場合に、`organization_id`
への密結合を元に戻すコストが高くならないようにするためです。その根拠は、GitLab の組織階層は
今後も発展し続けることが予想される、という点にあります。ネストされた Organization と Organization のマージは将来の検討事項であり、
Organization のロールアウトの長期計画はまだ不明確であるため、Artifact Registry は普遍的な Organization
カバレッジを前提にできません。

その後、このトピックの [部門横断の議論](https://docs.google.com/document/d/1n81b4NNtwddtS419TA8Of-Yoymj2MNNM89FRBo43e8E/edit?tab=t.0#bookmark=id.ps8037nih9pa)
の中で、Artifact Registry が不変なネームスペース識別子を使用できるかどうかが問われました。これにより、
ネームスペースのアイデンティティが完全に Artifact Registry によって所有され、外部エンティティの命名から独立します。

さらなる観察として、切り離されたネームスペースのアイデンティティは、Artifact
Registry を、唯一の依存先がサードパーティの認証・認可プロバイダーであり GitLab Rails ではない、独立したプロダクトとして
パッケージ化することを可能にする可能性があります。これは設計の駆動要因ではなく、肯定的な副次的効果です。これは、Pulp を Artifact Registry の
分離された独立インスタンスで置き換えるなど、GitLab.com 向けにプロダクトを内部で別の形で再利用する道を開く可能性があります。

間接層というアイデアは完全に新しいものではありません。
[ADR-007](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18456) の初期のイテレーションでは、トップレベル
グループと Organization のどちらにするかをチームがまだ決めていた頃に、アンカーエンティティと内部テーブルの間の抽象化として `registries` テーブルを
検討しました。この提案は、不変で外部から見えるアイデンティティ（スラッグ）を追加し、アンカーエンティティを完全に不透明にすることで、その
パターンを発展させたものです。

これらの収束する入力により、私たちは、Artifact Registry が Rails の `organization_id` を直接参照するのではなく、自身の
ネームスペースのアイデンティティを所有すべきかどうかを探求するに至りました。Organization は引き続きデフォルトのアンカーです。問いは、Artifact
Registry がそれらをどう参照するか、すなわち直接参照するか、それとも独自の不変な識別子を持つ内部の間接層を通じて参照するか、です。

## 提案

Artifact Registry に、3 つのプロパティを持つ内部 `namespaces` エンティティを導入します。

1. **不変なスラッグ**: グローバルに一意で、顧客が選択し、人間が読める識別子。すべての URL に現れ、決して
   変わらない。GCS/S3 のストレージバケット名の動作に類似している。
2. **仮想アンカータプル**: ネームスペースを外部エンティティにリンクする `(platform, entity_type, entity_id)` タプル。
   そのセマンティクスを解釈することはない
3. **内部 UUIDv7 ID**: データベースのパーティショニングとすべての内部クエリに使用される。外部に公開されることは決してない

Organization は引き続き最初のアンカー型です。この提案は
[ADR-001](001_organizations_as_anchor_point.md) を変更しません。Artifact Registry と
アンカーエンティティの間に抽象化層を追加するものです。

### データベーススキーマ

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

- `slug` は作成後は不変。
- `entity_id` は不透明な文字列（`TEXT`）であり、基となる値が数値（例: Rails の
  `organization_id`）であっても同様。これにより、将来のアンカーが非数値の識別子を使用する可能性があるため、アンカー型をまたいで
  スキーマが統一される。Artifact Registry は外部エンティティのセマンティクスを決して解釈しない。
- `(platform, entity_type, entity_id)` の一意制約が、重複するアンカーを防ぐ。
- Organization v1 では、すべての行が `('gitlab', 'organization', '<rails_org_id>')` を持つ。
- 将来のアンカー型は、異なる `entity_type` の値を持つ行を追加する。スキーマのマイグレーションは不要。
- `billing_entity_type` と `billing_entity_id` は、使用状況イベントの課金アンカーを識別する。AR はこれらを
  解釈することなく、すべての課金イベントにスタンプする。Core Module (Rails) がネームスペース作成時にこれらの値を
  提供する。FY27-Q2 では、課金エンティティは TLG (`billing_entity_type = 'top_level_group'`、
  `billing_entity_id = '<root_namespace_id>'`) である。Organization レベルの課金が CDot に到達すると、値は AR の
  コード変更なしに `('organization', '<organization_id>')` に変わる。これにより AR は課金構造に依存しないままになる。
- 外部から提供される列（`platform`、`entity_type`、`entity_id`、`billing_entity_type`、
  `billing_entity_id`）のいずれも、スキーマレベルのデフォルトを持たない。Core Module は、Artifact Registry の
  スキーマが外部のアイデンティティおよび課金モデルに依存しないままになるよう、ネームスペース作成時にすべての値を
  供給しなければならない。

`organization_id` をシャーディングまたはパーティションキーとして使用するテーブルは、代わりに `namespace_id` を使用します。外部キーと
インデックスは同じパターンに従います。パーティションキーは安定しています。内部 ID は決して変わりません。

[Cells のシャーディングキー要件](https://docs.gitlab.com/development/organization/sharding/#choosing-the-right-sharding-key)
は Rails モノリスのデータベースに適用されます。セルローカルサービスは、データ移動のために、行を Organization に
[帰属させる](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18808#note_3144391363)（直接または間接的に）必要があるだけです。
ネームスペースモデルは、`namespace_id -> anchor tuple -> organization` を通じてこれを行います。

### URL 構造

```plaintext
Management:  /api/v1/<slug>/maven/repositories
Maven:       /<slug>/maven/my-repo/com/example/myapp/1.0.0/myapp-1.0.0.jar
npm:         /<slug>/npm/my-repo/@scope/package
OCI:         /v2/<slug>/repositories/my-repo/manifests/latest
```

どの URL にも数値 ID はどこにもありません。API プレフィックスの後の最初のパスセグメントは常にスラッグです。スラッグと
リポジトリ名の両方が不変であるため、URL パス全体が恒久的に安定します。

### スラッグ設計

スラッグは、ネームスペースを作成するときに顧客が選択します。スラッグが組織名を追跡するという誤った期待を生まないように、
組織名から自動入力されることは **ありません**。設計上のプロパティは次のとおりです。

- **不変**: 一度設定されると、決して変わらない。リポジトリ名の不変性、および業界の慣行と一貫している。
- **顧客が選択**: クライアント設定、CI パイプライン、Kubernetes マニフェストに現れるため、人間が読めて
  タイプできる。
- **グローバルに一意**: 2 つのネームスペースがスラッグを共有することはできない。予約名と高価値スラッグの
  保護のためのポリシーが必要。
- **検証ルール**: ハイフンを含む小文字の英数字、先頭または末尾のハイフンなし、最小長は未定。S3 バケットの
  命名ルールに類似している。

### ネームスペースのライフサイクル

**作成:** 顧客が（管理 API または購入フローを通じて）Artifact Registry のネームスペースを作成するとき、
スラッグを選択し、ネームスペースはアンカータプルを通じて自身の Organization にリンクされます。ネームスペースのレコードが
データベースに作成され、スラッグが Cells ルーティングのためにトポロジーサービスでクレームされます。

**Organization のリネーム:** Artifact Registry への影響なし。スラッグは不変であり、組織名から独立しています。
データベース、URL、JWT スコープ、クライアント設定のいずれも変わりません。

**アンカープロモーション:** ネームスペースを別のエンティティに再アンカーする必要がある場合、アンカータプルの列のみが
更新されます。スラッグは変わりません。すべての URL は安定したままです。すべてのパーティション分割されたテーブルは影響を受けません。これは将来の
機能です。Organization v1 では、プロモーションイベントは存在しません。

**削除:** Artifact Registry はネームスペースをソフト削除または無効化します。スラッグは予約され、別の顧客によって再取得
できません。リポジトリ名の再取得と同じセキュリティリスク（認可バイパス、キャッシュポイズニング）を避けるためです。これは、グローバルなスラッグの
ネームスペースが時間とともに縮小することを意味します。最小長の要件が、利用可能なプールが大きく保たれるのを助けます。

### 組織のマージ {#organization-merges}

将来 GitLab が Organization のマージをサポートする場合、ネームスペースモデルはデータマイグレーションなしにこれを処理します。

1. 2 つの Organization（それぞれ独自のネームスペースを持つ）が 1 つにマージする。
2. 吸収されたネームスペースのアンカータプルが、存続する Organization を指すように更新される。ネームスペースごとに 1 回のメタデータ更新。
3. 存続する Organization は、それぞれ独自のリポジトリと独立した重複排除境界を持つ 2 つのネームスペースを持つようになる（トレードオフ）。
4. データベースパーティション間のデータ移動なし。
5. オブジェクトストレージの blob、キャッシュ、その他の保存データは、Organization ではなくネームスペースでキー付けされる。ストレージバックエンドでも何も移動しない。
6. スラッグは変わらない。すべての URL、JWT スコープ、クライアント設定は安定したまま。

Rails 側では、UI はマージされた Organization の下に複数のネームスペースを表示でき、それぞれが独自の
リポジトリを持ちます。

```plaintext
Organization: Acme Corp (merged)
  Namespace: acme-engineering
    - maven/my-app
    - docker/service-a
  Namespace: acme-platform (from merged org)
    - maven/platform-lib
    - docker/service-b
```

顧客が後で単一のネームスペースに統合したい場合、それは（リポジトリをあるネームスペースから別のネームスペースに移す）明示的な
マイグレーションであり、マージの自動的な帰結ではありません。

ネームスペース抽象化がなければ、Organization のマージは、すべてのパーティション分割されたデータをある
`organization_id` から別の `organization_id` に移行し、すべての URL を更新し、重複排除境界を調整し、JWT スコープの
陳腐化を処理することを必要とする可能性があります。

### Cells ルーティング

トポロジーサービス（Go の gRPC サービス）は、クレームされた識別子からセルへのマッピングを維持します。Artifact Registry は
スラッグをクレームすることで統合します。

1. ネームスペースが作成されると、Artifact Registry はトポロジーサービスでスラッグをクレームし、ネームスペースのデータが存在するセルに
   マッピングする。
2. リクエストが到着すると、HTTP ルーターがスラッグ（最初のパスセグメント）を抽出し、トポロジーサービスにクエリし、
   正しいセルにルーティングする。
3. 認証されていないリクエスト（例: 匿名の Docker プル）の場合、スラッグが唯一のルーティングシグナルである。これは、
   スラッグが URL にあり、認証なしで分類できるため機能する。

トポロジーサービスは共有された Cells の依存性であり、Artifact Registry に固有のものではありません。ネームスペースの作成だけが
トポロジーサービスを書き込み可能にすること（スラッグのクレーム）を必要とします。読み取りパスのリクエストはルーティングルックアップのみを必要とし、それはキャッシュできます。

### リクエストフロー

すべてのリクエスト（認証されているかどうかにかかわらず）は同じように始まります。

1. HTTP ルーターが URL からスラッグを抽出し、トポロジーサービスを介して正しいセルにルーティングする
2. Artifact Registry が `namespaces WHERE slug = '<slug>'` をルックアップしてネームスペース ID を取得する
3. Artifact Registry が `(namespace_id, name)` でリポジトリをルックアップしてリポジトリレコードと可視性を取得する

`namespaces` テーブルはパーティション分割されておらず、`slug` に一意インデックスがあります。1 回のインデックス付きルックアップの後、
それ以外のすべてに対してパーティションルーティングされたクエリを行います。スラッグからネームスペース ID へのマッピングは不変であるため、
リクエストごとのデータベースクエリを避けるために積極的にキャッシュ（インメモリまたは Redis）できます。

**認証されたリクエスト** は、
[ADR-020](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18462) で定義された JWT 交換フローを使用します。すべてのクライアントは Artifact Registry を通じて認証し、Artifact Registry は自身のネームスペーステーブルからスラッグを組織 ID に解決し、Rails との
透過的な交換にそれを含めます。Rails はスラッグについて知る必要が決してありません。

**認証されていないリクエスト** は JWT 交換をスキップし
（[ADR-020](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18462)）、直接 `no_access` が
割り当てられ、Artifact Registry がローカルでアクセスルールを評価します。公開ダウンロードのために Rails の呼び出しは不要です。

### 認可との互換性

この提案は [ADR-021](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18717) と互換性があります。

- **スコープフォーマット**: ADR-021 は現在 `o/<org_id>/repositories/<format>/<type>/<repo_id>` を使用しています。この提案では、
  スコープは組織 ID の代わりにスラッグを使用します（例: `<slug>/repositories/maven/hosted/my-repo`）。Artifact
  Registry がスラッグを組織 ID に解決し、Rails との交換にそれを含めます。
- **JWT**: ADR-020 は現在 JWT に Organization ID を含めています。この提案では、`organization_id` クレームは
  もはや不要になります。Artifact Registry は、交換が発生する前に、自身のルックアップからすでにネームスペース ID を
  持っています。JWT は `access_level` を運ぶだけで済みます。
- **Organization の Owner** は、Rails の組織メンバーシップから直接 Owner のアクセスレベルを受け取ります。ネームスペースの
  アプローチからの影響はありません。

### スラッグのディスカバリー

GitLab のフロントエンドは、（Rails を通じてではなく）Artifact Registry の API を直接呼び出します。すべての API 呼び出しは URL にスラッグを必要とするため、フロントエンドは何らかのリクエストを行う前にスラッグを必要とします。

Artifact Registry は、指定された Organization のスラッグのリストを返す軽量なエンドポイント（`/api/v1/o/:org_id/slugs`）を公開します。v1 ではこのリストは常に単一の項目（Organization ごとに 1 つのネームスペース）を含みますが、複数のネームスペースが Organization ごとにサポートされる場合（例: Organization のマージ後）に API の破壊的変更を避けるため、レスポンスはリストになっています。Rails は、フロントエンドのアイデンティティトークンをミントするとき（[ADR-020](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18462)）にこのエンドポイントを呼び出し、スラッグをトークンペイロードに含めます。フロントエンドはその後、後続のすべての API 呼び出しでそれらを使用します。

マッピングは不変であるため、Rails はレスポンスを積極的にキャッシュできます。Artifact Registry は唯一の信頼できる情報源であり続けます。Rails がそれを永続化することは決してありません。アンカーの切り替えや Organization ごとの複数ネームスペースが将来サポートされる場合、キャッシュの無効化に対処する必要があります。

## 結果

### 利点

1. **完全な Rails の切り離し**: Artifact Registry のスキーマ、URL、ロジックに Rails の ID がない。Rails が組織
   ID や構造を変更しても、Artifact Registry は影響を受けない。
2. **不変な URL**: スラッグとリポジトリ名の両方が不変。URL パス全体が恒久的に安定。リネームイベントなし、パスの
   ドリフトなし、JWT スコープの陳腐化なし、リネームによるクライアント設定の破損なし。
3. **安定したパーティショニング**: ネームスペース ID は内部的であり、アンカーの変更時でも決して変わらない。パーティション分割された
   テーブル、外部キー、インデックスへの影響なし。
4. **仮想アンカーの柔軟性**: `(platform, entity_type, entity_id)` タプルにより、今日は Organization に、後から
   他のエンティティに、スキーマのマイグレーションやデータ移動なしにネームスペースを接続できる。エンティティレベル間のプロモーションは、メタデータ
   の更新である。
5. **Cells 対応**: トポロジーサービスでのスラッグのクレームが、組織パスの解決に依存しないクリーンなルーティングメカニズムを
   提供する。
6. **認証されていない読み取りに対して自己充足的**: Artifact Registry は独自のネームスペーステーブルを持つ。公開ダウンロードのために Rails の呼び出しは
   不要。
7. **データマイグレーションなしの Organization マージ**: Organization がマージする場合、アンカータプルが更新され、存続する
   Organization が複数のネームスペースを保持する。データ移動、URL の変更、クライアント設定の破損なし。詳細は
   [Organization Merges](#organization-merges) を参照。
8. **スタンドアロンプロダクトの可能性**（願望的）: Artifact Registry は独自のネームスペースのアイデンティティを所有し、アンカーを
   不透明として扱うため、アーキテクチャは GitLab Rails に構造的に依存しない。これにより、GitLab の代わりに
   サードパーティの認証・認可プロバイダーに依存する独立したプロダクトとして Artifact Registry を
   パッケージ化する道が開ける。

### 欠点

1. **スラッグの一意性の強制**: グローバルに一意なスラッグは、スクワッティングのリスクを導入する。予約名、
   高価値スラッグの保護、最小長のためのポリシーが必要。これは業界では解決済みの問題（S3、Docker Hub）だが、
   プロダクトの決定が必要。
2. **すべての認証が Artifact Registry を経由する**: Artifact Registry がスラッグから組織へのマッピングを所有するため、すべての
   クライアントは Rails と直接ではなく、それを通じて認証しなければならない。これは Artifact Registry に負荷を追加するが、Rails 側でのマッピングの重複を避ける。
3. **ネームスペースの作成は明示的なアクション**: 管理 API または購入フローが、いずれかのクライアントリクエストが成功する前に
   ネームスペースを作成しなければならない。Artifact Registry は、ネームスペースをセットアップしていない Organization の
   リクエストを処理できない。
4. **トポロジーサービスへの依存**: Artifact Registry は、スラッグのクレームのためにトポロジーサービスの Go クライアントを
   統合する必要がある。
5. **スラッグの発見可能性**: ユーザーが GitLab の経験からすでに知っている組織パスとは異なり、スラッグは Artifact Registry に
   固有の新しい概念である。ユーザーは自身のスラッグを覚えるか調べる必要がある。クライアント
   設定のドキュメントと UI がこれを考慮する必要がある。
6. **重複排除境界の変更**: 重複排除（[ADR-002](002_storage_deduplication_scope.md)）が
   Organization からネームスペースに移る。v1 ではこれらは 1:1 だが、顧客ごとの複数ネームスペースは、各ネームスペースが
   独立した重複排除境界を持つことを意味する。ネームスペースをまたぐ重複排除はスコープ外。

## ADR への影響

承認された場合、この提案は現在レビューのために公開されている以下の ADR への変更を必要とします。

- **[ADR-007: データベーススキーマ](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18456)**: すべての
  パーティション分割されたテーブルの `organization_id` 列が `namespace_id` にリネームされ、Rails の組織 ID の代わりに内部の
  ネームスペース ID を参照する。新しいパーティション分割されていない `namespaces` テーブルがスキーマに追加される。
  パーティショニング戦略、複合主キー、外部キーのパターンは変わらない。
- **[ADR-009: API 設計](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18458)**: URL の
  `/o/<org_id>/` プレフィックスが `/<slug>/` に置き換えられる。スラッグは、すべてのプロトコル（management、Maven、npm、OCI）で API プレフィックスの後の最初のパスセグメント
  である。どの URL にも数値 ID は現れない。また、組織 ID に対するネームスペースを取得する新しい CRUD API も必要になる。
- **[ADR-020: 認証フロー](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18462)**: すべての
  クライアントが Artifact Registry を通じて認証し、Artifact Registry がスラッグを組織 ID に解決してから
  Rails と交換する。JWT 内の `organization_id` クレームはもはや不要になる。
- **[ADR-021: 認可](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18717)**: スコープ
  フォーマットが `o/<org_id>/repositories/<format>/<type>/<repo_id>` から
  `<slug>/repositories/<format>/<type>/<repo_name>` に変わる。認可モデル（専用グループ/プロジェクト、アクセスレベル、
  可視性の同期）は、それ以外は影響を受けない。

- **[ADR-008: コンテンツアドレッサブルストレージ](008_content_addressable_storage.md)**:
  オブジェクトストレージのキー階層は、トップレベルの分離のためにネームスペースの内部 UUIDv7 ID の SHA256 ハッシュを使用する。
  ハッシュ化されたパスは構造上不変である（変更する人間が読める値がない）。これは
  [GitLab のハッシュ化ストレージ標準](https://gitlab.com/groups/gitlab-org/-/work_items/2320) に整合する。ネームスペースのすべてのアーティファクトは
  同じハッシュプレフィックスの下に同居する。

すでにマージされた ADR は構造的に変更されません。

- **[ADR-001](001_organizations_as_anchor_point.md)**: Organization をアンカーポイントとすることは維持される。この提案は
  抽象化層を追加するものであり、置き換えではない。
- **[ADR-002](002_storage_deduplication_scope.md)**: 重複排除のスコープが Organization からネームスペースに移る。
  初回リリースではこれらは 1:1。ストレージはネームスペース境界内で重複排除される。同じネームスペース内の
  同一コンテンツは一度だけ保存される。

## 未解決の問い

1. **どのスラッグ検証ルールを適用すべきか。** 最小/最大長、文字セット、予約プレフィックス。https://gitlab.com/gitlab-org/gitlab/-/work_items/593368 (internal) を参照。
1. **このエンティティのユーザー向けの名称は何か。** https://gitlab.com/gitlab-org/gitlab/-/work_items/593366 を参照。

## 参考資料

- [ADR-001: アンカーポイントとしての Organization](001_organizations_as_anchor_point.md)
- [ADR-002: ストレージ重複排除のスコープ](002_storage_deduplication_scope.md)
- [ADR-007: データベーススキーマ](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18456)
- [ADR-008: コンテンツアドレッサブルストレージ](008_content_addressable_storage.md)
- [ADR-009: API 設計](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18458)
- [ADR-020: 認証フロー](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18462)
- [ADR-021: 認可](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18717)
- [リポジトリ名の不変性](https://gitlab.com/gitlab-org/gitlab/-/work_items/592582)
- [CTO レビュー: 仮想アンカーポイント](https://docs.google.com/document/d/1qkcOZYSHM_h9k9pYjHze2KHG5qZYMDeZ1UE4GZgD1jw/edit?tab=t.1dg0o6ns9uiw#bookmark=id.t5ky1ssp818r)
- [部門横断ミーティング: 不変なスラッグのアイデア](https://docs.google.com/document/d/1n81b4NNtwddtS419TA8Of-Yoymj2MNNM89FRBo43e8E/edit?tab=t.0#bookmark=id.ps8037nih9pa)

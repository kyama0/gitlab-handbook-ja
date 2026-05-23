---
title: "Artifact Registry ADR 022: ネームスペースデカップリング"
owning-stage: "~devops::package"
description: "不変なスラッグと仮想アンカータプルを持つ内部ネームスペースエンティティを導入し、Artifact Registry を Rails の内部識別子から切り離す提案"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/artifact_registry/decisions/022_namespace_decoupling/
upstream_sha: 877082e5cd4baeabe3d6e802b3b4b1efdb6573f1
lastmod: "2026-05-21T14:16:24+02:00"
translated_at: "2026-05-23T00:00:00Z"
translator: claude
stale: false
---

<!-- Design Documents often contain forward-looking statements -->
<!-- vale gitlab.FutureTense = NO -->

## ステータス

**提案中。**

## コンテキスト

[ADR-001](001_organizations_as_anchor_point.md) は、Artifact Registry のアンカーポイントとして Organizations を確立しました。
Organizations はエンタープライズのアーティファクト管理における自然な境界を表し、GitLab の長期的な方向性と整合し、最初にトップレベルグループの上に構築する場合の移行負担を回避します。現在の設計は ADR-001 を
直接踏襲しています。すなわち、Rails の `organization_id` をデータベーステーブルにシャーディングキーとして格納し、API URL に埋め込み、JWT トークンのスコープに含めるというものです。

認可と API 設計の ADR に取り組む中で、私たちはリポジトリ名を
[不変](https://gitlab.com/gitlab-org/gitlab/-/work_items/592582)にすべきだと判断しました。これは、クライアント設定の破損、OCI
参照の無効化、名前の再取得による認可バイパスのリスクを防ぐためです。この判断は自然に次の問いを生みました。すなわち、
同じ原則をネームスペースレベルにも適用すべきか、というものです。Organization のパスは可変です（トップレベルグループのパスと同様で、
企業は名称を変更します）。そのため、これを Artifact Registry の URL に直接使用すると、名称変更のたびにクライアント設定
（`.npmrc`、`settings.xml`、Dockerfile、CI パイプライン）が破損し、キャッシュされた参照が無効化され、JWT トークンの
スコープが陳腐化し、Rails と Artifact Registry の間で名称変更の伝播と競合状態の処理が必要になります。
ネームスペースレベルで不変性を強制すれば、これらすべてが解消され、設計が簡素化されます。

これとは別に、直近の [CTO レビュー](https://docs.google.com/document/d/1qkcOZYSHM_h9k9pYjHze2KHG5qZYMDeZ1UE4GZgD1jw/edit?tab=t.1dg0o6ns9uiw#bookmark=id.t5ky1ssp818r)
において、すべてのサテライトサービスに対して仮想アンカーポイントのパターンが提案されました。これは、アンカーエンティティが進化した場合に `organization_id` への密結合を解消する
コストが高くならないようにするためです。その根拠は、GitLab の組織階層は今後も発展し続けると予想される、というものです。すなわち、
ネストされた組織や組織のマージは将来の検討事項であり、組織の展開に関する長期計画はまだ不明確であるため、Artifact Registry は組織が
あまねく行き渡っていることを前提にできないのです。

その後、このトピックに関する[チーム横断の議論](https://docs.google.com/document/d/1n81b4NNtwddtS419TA8Of-Yoymj2MNNM89FRBo43e8E/edit?tab=t.0#bookmark=id.ps8037nih9pa)
において、Artifact Registry が不変のネームスペース識別子を使用できるのではないか、という疑問が提起されました。これにより、
ネームスペースのアイデンティティは Artifact Registry が完全に所有し、外部エンティティの命名に依存しないものになります。

さらに、ネームスペースのアイデンティティを切り離すことで、Artifact
Registry を独立した製品としてパッケージ化でき、その唯一の依存先がサードパーティの認証・認可プロバイダーとなり、GitLab Rails ではなくなる可能性がある、という観察もあります。これは設計の推進要因ではなく、むしろ好ましい副次的効果です。これにより、GitLab.com 向けに製品を別の形で社内再利用する道が開ける可能性もあります。たとえば、Pulp を Artifact Registry の独立した隔離インスタンスで置き換えるといった用途です。

間接層というアイデアはまったく新しいものではありません。
[ADR-007](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18456) の初期のイテレーションでは、チームがまだトップレベルグループと
組織のどちらにするか検討していた頃に、アンカーエンティティと内部テーブルの間の抽象化として `registries` テーブルが検討されていました。
この提案は、不変で外部から見える識別子（スラッグ）を追加し、アンカーエンティティを完全に不透明にすることで、そのパターンの上に構築するものです。

これらの収束する入力により、私たちは Artifact Registry が Rails の `organization_id` を直接参照するのではなく、独自のネームスペース
アイデンティティを所有すべきかどうかを検討するに至りました。Organizations は引き続きデフォルトのアンカーです。問題は、Artifact
Registry がそれらをどのように参照するか、すなわち直接参照するか、独自の不変識別子を持つ内部の間接層を介して参照するか、ということです。

## 提案

Artifact Registry に、3 つの属性を持つ内部の `namespaces` エンティティを導入します。

1. **不変なスラッグ**: グローバルに一意で、顧客が選択する、人間が読める識別子。すべての URL に登場し、決して
   変更されません。GCS/S3 のストレージバケット名の仕組みに似ています。
2. **仮想アンカータプル**: ネームスペースを外部エンティティにリンクする `(platform, entity_type, entity_id)` のタプル。
   そのセマンティクスを解釈することはありません。
3. **内部の数値 ID**: データベースのパーティショニングおよびすべての内部クエリに使用され、外部に公開されることはありません。

Organizations は引き続き最初のアンカータイプです。この提案は
[ADR-001](001_organizations_as_anchor_point.md) を変更するものではありません。Artifact Registry とアンカーエンティティの間に
抽象化層を追加するものです。

### データベーススキーマ

```sql
CREATE TABLE namespaces (
    id                  BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
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
- `entity_id` は不透明な文字列（`TEXT`）であり、基礎となる値が数値（たとえば Rails の
  `organization_id`）であっても同様です。これにより、将来のアンカーが非数値の識別子を使用する可能性があるため、アンカータイプ間で
  スキーマが統一されます。Artifact Registry は外部エンティティのセマンティクスを決して解釈しません。
- `(platform, entity_type, entity_id)` に対する一意制約により、重複するアンカーを防止します。
- Organizations v1 では、すべての行は `('gitlab', 'organization', '<rails_org_id>')` を持ちます。
- 将来のアンカータイプは、異なる `entity_type` の値を持つ行を追加します。スキーマのマイグレーションは不要です。
- `billing_entity_type` と `billing_entity_id` は、使用イベントの請求アンカーを識別します。AR はこれらを
  すべての請求イベントに刻印しますが、それらを解釈することはありません。Core Module（Rails）がこれらの値をネームスペース作成
  時に提供します。FY27-Q2 では、請求エンティティは TLG（`billing_entity_type = 'top_level_group'`、
  `billing_entity_id = '<root_namespace_id>'`）です。組織レベルの請求が CDot に到来したら、値は AR のコード変更なしに
  `('organization', '<organization_id>')` に変わります。これにより、AR は請求構造に依存しないままになります。
- 外部から提供される列（`platform`、`entity_type`、`entity_id`、`billing_entity_type`、
  `billing_entity_id`）には、スキーマレベルのデフォルト値がいずれも設定されていません。Core Module はネームスペース作成
  時にすべての値を供給する必要があり、これにより Artifact Registry のスキーマは外部のアイデンティティモデルおよび請求モデルに
  依存しないままになります。

`organization_id` をシャーディングキーまたはパーティションキーとして使用するテーブルは、代わりに `namespace_id` を使用します。外部キーと
インデックスも同じパターンに従います。パーティションキーは安定しています。内部 ID は決して変更されません。

[Cells のシャーディングキー要件](https://docs.gitlab.com/development/organization/sharding/#choosing-the-right-sharding-key)
は Rails モノリスのデータベースに適用されます。セルローカルなサービスは、データ移動のために[行を組織に紐付ける](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18808#note_3144391363)
ことができれば十分です（直接的か間接的かを問いません）。ネームスペースモデルは、これを `namespace_id -> アンカータプル -> organization` を通じて実現します。

### URL 構造

```plaintext
Management:  /api/v1/<slug>/maven/repositories
Maven:       /<slug>/maven/my-repo/com/example/myapp/1.0.0/myapp-1.0.0.jar
npm:         /<slug>/npm/my-repo/@scope/package
OCI:         /v2/<slug>/repositories/my-repo/manifests/latest
```

いずれの URL にも数値 ID はどこにもありません。API プレフィックスの後の最初のパスセグメントは常にスラッグです。スラッグも
リポジトリ名も不変であるため、URL パス全体は恒久的に安定します。

### スラッグ設計

スラッグは、ネームスペースを作成する際に顧客が選択します。組織名から自動入力される **わけではありません**。
これは、スラッグが組織名を追従するという誤った期待を生まないためです。設計属性は次のとおりです。

- **不変**: 一度設定すると決して変更されません。リポジトリ名の不変性、および業界の慣行と整合します。
- **顧客が選択**: クライアント設定、CI パイプライン、Kubernetes マニフェストに登場するため、人間が読めてタイプできます。
- **グローバルに一意**: 2 つのネームスペースがスラッグを共有することはできません。予約名のポリシーと、価値の高いスラッグの
  保護が必要です。
- **バリデーションルール**: 小文字の英数字とハイフン、先頭・末尾のハイフンなし、最小長は未定。S3 のバケット命名ルールに
  似ています。

### ネームスペースのライフサイクル

**作成:** 顧客が Artifact Registry のネームスペースを作成すると（管理 API または購入フローを介して）、
スラッグを選択し、ネームスペースはアンカータプルを介して組織にリンクされます。ネームスペースのレコードが
データベースに作成され、Cells ルーティングのためにトポロジーサービスでスラッグが要求（claim）されます。

**組織の名称変更:** Artifact Registry には影響しません。スラッグは不変であり、組織名から独立しています。データベース、
URL、JWT スコープ、クライアント設定のいずれも変更されません。

**アンカーのプロモーション:** ネームスペースを別のエンティティに再アンカーする必要がある場合、アンカータプルの列のみが
更新されます。スラッグは変更されません。すべての URL は安定したままです。すべてのパーティション化されたテーブルは影響を受けません。これは将来の
機能であり、Organizations v1 ではプロモーションイベントは存在しません。

**削除:** Artifact Registry はネームスペースをソフトデリートまたは無効化します。スラッグは予約され、別の顧客によって
再取得することはできません。これは、リポジトリ名の再取得と同じセキュリティリスク（認可バイパス、キャッシュ
ポイズニング）を避けるためです。これは、グローバルなスラッグのネームスペースが時間とともに縮小することを意味します。最小長の要件により、
利用可能なプールが大きいままになるよう保証します。

### 組織のマージ

将来 GitLab が組織のマージをサポートする場合、ネームスペースモデルはデータマイグレーションなしでこれを処理します。

1. 2 つの組織（それぞれが独自のネームスペースを持つ）が 1 つにマージされます。
2. 吸収されるネームスペースのアンカータプルが、存続する組織を指すように更新されます。ネームスペースごとに 1 回のメタデータ更新です。
3. 存続する組織は 2 つのネームスペースを持つことになり、それぞれが独自のリポジトリと独立した重複排除境界を持ちます（トレードオフ）。
4. データベースのパーティション間でのデータ移動はありません。
5. オブジェクトストレージの BLOB、キャッシュ、およびその他の格納データは、組織ではなくネームスペースをキーとします。ストレージバックエンドでも何も移動しません。
6. スラッグは変更されません。すべての URL、JWT スコープ、クライアント設定は安定したままです。

Rails 側では、UI はマージされた組織の下に複数のネームスペースを表示でき、それぞれが独自の
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

顧客が後で単一のネームスペースに統合したい場合、それはマージの自動的な結果ではなく、明示的なマイグレーション（あるネームスペースから
別のネームスペースへのリポジトリの移動）になります。

ネームスペースの抽象化がなければ、組織のマージでは、すべてのパーティション化されたデータを 1 つの
`organization_id` から別の `organization_id` へ移行し、すべての URL を更新し、重複排除境界を調整し、JWT スコープの
陳腐化を処理する必要が生じる可能性があります。

### Cells ルーティング

トポロジーサービス（Go の gRPC サービス）は、要求された識別子とセルのマッピングを保持します。Artifact Registry は
スラッグを要求することで統合します。

1. ネームスペースが作成されると、Artifact Registry はトポロジーサービスでスラッグを要求し、ネームスペースのデータが存在するセル
   にマッピングします。
2. リクエストが到着すると、HTTP ルーターはスラッグ（最初のパスセグメント）を抽出し、トポロジーサービスにクエリを行い、
   正しいセルにルーティングします。
3. 認証されていないリクエスト（たとえば匿名の Docker pull）では、スラッグが唯一のルーティングシグナルです。これが機能するのは、
   スラッグが URL にあり、認証なしで分類できるためです。

トポロジーサービスは共有の Cells 依存先であり、Artifact Registry に固有のものではありません。ネームスペースの作成のみが
トポロジーサービスを書き込み可能にする必要があります（スラッグの要求）。読み取りパスのリクエストはルーティングルックアップのみを必要とし、これはキャッシュできます。

### リクエストフロー

すべてのリクエスト（認証の有無を問わず）は同じように開始します。

1. HTTP ルーターが URL からスラッグを抽出し、トポロジーサービスを介して正しいセルにルーティングする
2. Artifact Registry が `namespaces WHERE slug = '<slug>'` をルックアップしてネームスペース ID を取得する
3. Artifact Registry が `(namespace_id, name)` でリポジトリをルックアップし、リポジトリレコードと可視性を取得する

`namespaces` テーブルはパーティション化されておらず、`slug` に一意のインデックスを持ちます。1 回のインデックス付きルックアップを行い、その後は
それ以外のすべてについてパーティションにルーティングされたクエリを行います。スラッグからネームスペース ID へのマッピングは不変であるため、リクエストごとに
データベースクエリを行わずに済むよう積極的にキャッシュできます（インメモリまたは Redis）。

**認証されたリクエスト** は、[ADR-020](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18462) で定義された JWT 交換フローを使用します。すべてのクライアントは Artifact Registry を通じて認証され、Artifact Registry は自身のネームスペーステーブルからスラッグを組織 ID に解決し、それを Rails との透過的な交換に含めます。Rails はスラッグについて知る必要がありません。

**認証されていないリクエスト** は JWT 交換
（[ADR-020](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18462)）をスキップし、直接 `no_access`
を割り当てられ、Artifact Registry はアクセスルールをローカルで評価します。公開ダウンロードには Rails 呼び出しは不要です。

### 認可との互換性

この提案は [ADR-021](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18717) と互換性があります。

- **スコープ形式**: ADR-021 は現在 `o/<org_id>/repositories/<format>/<type>/<repo_id>` を使用しています。この提案では、
  スコープは組織 ID の代わりにスラッグを使用します（たとえば `<slug>/repositories/maven/local/my-repo`）。Artifact
  Registry はスラッグを組織 ID に解決し、それを Rails との交換に含めます。
- **JWT**: ADR-020 は現在、組織 ID を JWT に含めています。この提案では、`organization_id` クレームは
  もはや不要になります。Artifact Registry は、交換が行われる前に自身のルックアップから既にネームスペース ID を
  保持しています。JWT は `access_level` のみを運べばよくなります。
- **組織オーナー** は、Rails の組織メンバーシップから直接 Owner アクセスレベルを受け取ります。ネームスペース
  アプローチによる影響はありません。

### スラッグのディスカバリー

GitLab のフロントエンドは、Artifact Registry の API を直接呼び出します（Rails を経由しません）。すべての API 呼び出しは URL にスラッグを必要とするため、フロントエンドはリクエストを行う前にスラッグを取得する必要があります。

Artifact Registry は、与えられた組織のスラッグのリストを返す軽量なエンドポイント（`/api/v1/o/:org_id/slugs`）を公開します。v1 ではこのリストは常に単一の項目を含みます（組織ごとに 1 つのネームスペース）が、組織ごとに複数のネームスペースがサポートされた場合（たとえば組織のマージ後）に API の破壊的変更を避けるため、レスポンスはリスト形式になっています。Rails は、フロントエンドのアイデンティティトークンを発行する際（[ADR-020](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18462)）にこのエンドポイントを呼び出し、スラッグをトークンのペイロードに含めます。フロントエンドはその後、後続のすべての API 呼び出しでそれらを使用します。

このマッピングは不変であるため、Rails はレスポンスを積極的にキャッシュできます。Artifact Registry は引き続き唯一の信頼できる情報源であり、Rails はそれを永続化しません。将来、アンカーの切り替えや組織ごとの複数ネームスペースがサポートされた場合は、キャッシュの無効化に対処する必要があります。

## 結果

### 利点

1. **Rails との完全なデカップリング**: Artifact Registry のスキーマ、URL、ロジックに Rails の ID が一切ありません。Rails が組織
   ID や構造を変更しても、Artifact Registry は影響を受けません。
2. **不変な URL**: スラッグもリポジトリ名も不変です。URL パス全体が恒久的に安定します。名称変更
   イベントもパスのドリフトも JWT スコープの陳腐化も、名称変更によるクライアント設定の破損もありません。
3. **安定したパーティショニング**: ネームスペース ID は内部的なものであり、アンカーの変更時であっても決して変更されません。パーティション化された
   テーブル、外部キー、インデックスに影響しません。
4. **仮想アンカーの柔軟性**: `(platform, entity_type, entity_id)` のタプルにより、今日は組織にネームスペースを紐付け、
   将来は他のエンティティに紐付けることが、スキーマのマイグレーションやデータ移動なしに可能です。エンティティレベル間のプロモーションは
   メタデータの更新です。
5. **Cells 対応**: トポロジーサービスでのスラッグ要求は、組織パスの解決に依存しないクリーンなルーティング機構を
   提供します。
6. **認証なしの読み取りに対して自己充足的**: Artifact Registry は独自のネームスペーステーブルを持ちます。公開ダウンロードに Rails 呼び出しは
   不要です。
7. **データマイグレーションなしの組織マージ**: 組織がマージされる場合、アンカータプルが更新され、存続する
   組織が複数のネームスペースを保持します。データ移動も URL の変更もクライアント設定の破損もありません。詳細は
   [組織のマージ](#organization-merges)を参照してください。
8. **スタンドアロン製品の可能性**（将来的な構想）: Artifact Registry は独自のネームスペースアイデンティティを所有し、アンカーを
   不透明として扱うため、アーキテクチャは GitLab Rails に構造的に依存しません。これにより、GitLab の代わりに
   サードパーティの認証・認可プロバイダーに依存する独立した製品として Artifact Registry をパッケージ化する
   道が開けます。

### 欠点

1. **スラッグの一意性の強制**: グローバルに一意なスラッグは、スクワッティングのリスクをもたらします。予約名、
   価値の高いスラッグの保護、最小長のポリシーが必要です。これは業界では解決済みの問題（S3、Docker Hub）ですが、
   製品上の判断が必要です。
2. **すべての認証が Artifact Registry を経由する**: Artifact Registry がスラッグから組織へのマッピングを所有するため、すべての
   クライアントは Rails と直接ではなく Artifact Registry を通じて認証する必要があります。これは Artifact Registry に負荷を加えますが、Rails 側でマッピングを複製することを回避します。
3. **ネームスペースの作成は明示的なアクション**: 管理 API または購入フローは、いずれかのクライアントリクエストが成功する前に
   ネームスペースを作成する必要があります。Artifact Registry は、ネームスペースをセットアップしていない組織のリクエストを処理
   できません。
4. **トポロジーサービスへの依存**: Artifact Registry は、スラッグの要求のためにトポロジーサービスの Go クライアントを統合
   する必要があります。
5. **スラッグの発見しやすさ**: ユーザーが GitLab の利用経験からすでに知っている組織パスとは異なり、スラッグは
   Artifact Registry に固有の新しい概念です。ユーザーは自分のスラッグを記憶するか調べる必要があります。クライアント
   設定のドキュメントと UI はこれを考慮する必要があります。
6. **重複排除境界の変更**: 重複排除（[ADR-002](002_storage_deduplication_scope.md)）が
   組織からネームスペースに移ります。v1 ではこれらは 1:1 ですが、顧客ごとに複数のネームスペースがある場合は、各ネームスペースが
   独立した重複排除境界を持ちます。ネームスペースをまたぐ重複排除はスコープ外です。

## ADR への影響

承認された場合、この提案は現在レビュー中の以下の ADR に変更を要求します。

- **[ADR-007: データベーススキーマ](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18456)**:
  すべてのパーティション化されたテーブルの `organization_id` 列が `namespace_id` にリネームされ、Rails の組織 ID の代わりに内部の
  ネームスペース ID を参照します。パーティション化されていない新しい `namespaces` テーブルがスキーマに追加されます。
  パーティショニング戦略、複合主キー、外部キーのパターンは変更されません。
- **[ADR-009: API 設計](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18458)**:
  URL の `/o/<org_id>/` プレフィックスが `/<slug>/` に置き換えられます。スラッグは、すべてのプロトコル（管理、Maven、npm、OCI）について API プレフィックスの後の最初のパスセグメント
  になります。いずれの URL にも数値 ID は現れません。また、組織 ID に対するネームスペースを取得するための新しい CRUD API も必要です。
- **[ADR-020: 認証フロー](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18462)**: すべての
  クライアントが Artifact Registry を通じて認証し、Artifact Registry は Rails と交換する前にスラッグを組織 ID に
  解決します。JWT の `organization_id` クレームはもはや不要になります。
- **[ADR-021: 認可](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18717)**: スコープ
  形式が `o/<org_id>/repositories/<format>/<type>/<repo_id>` から
  `<slug>/repositories/<format>/<type>/<repo_name>` に変わります。認可モデル（専用のグループ／プロジェクト、アクセスレベル、
  可視性の同期）はその他の点では影響を受けません。

- **[ADR-008: コンテンツアドレッサブルストレージ](008_content_addressable_storage.md)**:
  オブジェクトストレージのキー階層は、トップレベルの隔離のためにネームスペースの内部数値 ID の SHA256 ハッシュを使用します。
  ハッシュ化されたパスは構成上不変です（変更すべき人間が読める値がありません）。これは
  [GitLab のハッシュ化ストレージ標準](https://gitlab.com/groups/gitlab-org/-/work_items/2320)と整合します。ネームスペースの
  すべてのアーティファクトは同じハッシュプレフィックスの下に共置されます。

すでにマージされた ADR は構造的には変更されません。

- **[ADR-001](001_organizations_as_anchor_point.md)**: アンカーポイントとしての Organizations は維持されます。この提案は
  抽象化層を追加するものであり、置き換えではありません。
- **[ADR-002](002_storage_deduplication_scope.md)**: 重複排除のスコープが組織からネームスペースに移ります。初回
  リリースではこれらは 1:1 です。ストレージはネームスペース境界内で重複排除されます。すなわち、同じネームスペース内の
  同一コンテンツは一度だけ格納されます。

## 未解決の問い

1. **どのようなスラッグのバリデーションルールを適用すべきか？** 最小／最大の長さ、文字セット、予約プレフィックス。https://gitlab.com/gitlab-org/gitlab/-/work_items/593368 を参照（社内向け）。
1. **このエンティティのユーザー向けの名称は何か？** https://gitlab.com/gitlab-org/gitlab/-/work_items/593366 を参照。

## 参考資料

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
</content>
</invoke>

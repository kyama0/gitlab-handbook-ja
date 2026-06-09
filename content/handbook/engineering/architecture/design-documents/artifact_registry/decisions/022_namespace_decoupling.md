---
title: "Artifact Registry ADR 022: ネームスペースデカップリング"
owning-stage: "~devops::package"
description: "不変なスラッグと仮想アンカータプルを持つ内部ネームスペースエンティティを導入し、Artifact Registry を Rails の内部識別子から切り離す提案"
toc_hide: true
upstream_path: "/handbook/engineering/architecture/design-documents/artifact_registry/decisions/022_namespace_decoupling/"
upstream_sha: c6f416c14ee9f53cb671d49ff11a9671c68d9326
lastmod: 2026-06-09T19:10:50+01:00
translated_at: "2026-06-09T00:00:00Z"
translator: claude
stale: false
---

<!-- Design Documents often contain forward-looking statements -->
<!-- vale gitlab.FutureTense = NO -->

## ステータス

**提案中（Proposed）。**

## コンテキスト

[ADR-001](001_organizations_as_anchor_point.md) では、Organizations を Artifact Registry のアンカーポイントとして確立しました。
Organizations はエンタープライズのアーティファクト管理にとって自然な境界を表し、GitLab の長期的な
方向性に整合し、最初にトップレベルグループの上に構築することによる移行の負担を回避します。現在の設計は ADR-001 に
直接従っています。Rails の `organization_id` をシャーディングキーとしてデータベーステーブルに保存し、API URL に埋め込み、
JWT トークンスコープに含めるというものです。

認可と API 設計の ADR に取り組む中で、私たちはリポジトリ名を
[不変](https://gitlab.com/gitlab-org/gitlab/-/work_items/592582)にすべきだと判断しました。これは、クライアント設定の破損、OCI
リファレンスの無効化、そして名前の再取得による認可バイパスのリスクを防ぐためです。この判断は自然と次の問いを生みました。
同じ原則をネームスペースレベルでも適用すべきか? Organization のパスは可変です（トップレベルグループのパスと同様に、
会社は名前を変更します）。そのため、それらを Artifact Registry の URL に直接使用すると、名前変更のたびにクライアント
設定（`.npmrc`、`settings.xml`、Dockerfiles、CI パイプライン）が壊れ、キャッシュされたリファレンスが無効化され、JWT トークン
スコープが陳腐化し、Rails と Artifact Registry の間で名前変更の伝播と競合状態の処理が必要になります。
ネームスペースレベルで不変性を強制すれば、これらすべてが解消され、設計が簡素化されます。

これとは別に、直近の [CTO レビュー](https://docs.google.com/document/d/1qkcOZYSHM_h9k9pYjHze2KHG5qZYMDeZ1UE4GZgD1jw/edit?tab=t.1dg0o6ns9uiw#bookmark=id.t5ky1ssp818r)では、
アンカーエンティティが進化した場合に `organization_id` への密結合を元に戻すコストが高くならないように、すべてのサテライト
サービスに対して仮想アンカーポイントのパターンが提案されました。その根拠は、GitLab の組織階層は
今後も発展し続けると予想されるという点です。ネストされた Organizations や Organizations のマージは将来の検討事項であり、
Organization 展開の長期計画もまだ不明確であるため、Artifact Registry は普遍的な Organization の
カバレッジを前提とすることができません。

その後、このトピックに関する[クロスチームでの議論](https://docs.google.com/document/d/1n81b4NNtwddtS419TA8Of-Yoymj2MNNM89FRBo43e8E/edit?tab=t.0#bookmark=id.ps8037nih9pa)
の中で、Artifact Registry が不変なネームスペース識別子を使用できるかどうかが問われました。これにより、
ネームスペースのアイデンティティを完全に Artifact Registry が所有し、いかなる外部エンティティの命名からも独立させることができます。

さらなる観点として、切り離されたネームスペースアイデンティティは、Artifact
Registry を独立した製品としてパッケージ化することを可能にし、その唯一の依存先が GitLab Rails ではなくサードパーティの認証・
認可プロバイダーになる可能性があるという点があります。これは設計の駆動要因ではなく、ポジティブな副次的効果です。これにより、Pulp を Artifact Registry の別個の
分離されたインスタンスで置き換えるなど、製品を GitLab.com 向けに他の方法で社内再利用する道が開ける可能性があります。

間接層というアイデアは完全に新しいものではありません。
[ADR-007](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18456) の初期のイテレーションでは、チームがまだトップレベル
グループと Organizations のどちらにするか決めていなかった頃に、アンカーエンティティと内部テーブルの間の抽象化として `registries` テーブルを
検討していました。この提案は、不変で外部から見えるアイデンティティ（
スラッグ）を追加し、アンカーエンティティを完全に不透明にすることで、そのパターンを発展させています。

これらの収束する入力により、私たちは Artifact Registry が Rails の `organization_id` を直接参照するのではなく、独自の
ネームスペースアイデンティティを所有すべきかどうかを検討するに至りました。Organizations は引き続きデフォルトのアンカーです。問題は Artifact
Registry がそれらをどのように参照するかです。直接参照するか、独自の不変識別子を持つ内部の間接層を介して参照するか、です。

## 提案

Artifact Registry に、3 つのプロパティを持つ内部の `namespaces` エンティティを導入します。

1. **不変スラッグ**: すべての URL に現れ、決して変更されない、グローバルに一意で顧客が選択する人間が読める識別子。
   GCS/S3 のストレージバケット名の動作に似ています。
2. **仮想アンカータプル**: ネームスペースをその意味を解釈することなく外部エンティティにリンクする
   `(platform, entity_type, entity_id)` タプル
3. **内部 UUIDv7 ID**: データベースのパーティショニングとすべての内部クエリに使用され、外部には決して公開されない

Organizations は引き続き最初のアンカータイプです。この提案は
[ADR-001](001_organizations_as_anchor_point.md) を変更しません。Artifact Registry とアンカーエンティティの間に抽象化層を追加するものです。

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

- `slug` は作成後は不変です。
- `entity_id` は、基底となる値が数値である場合（たとえば Rails の `organization_id`）であっても、不透明な文字列（`TEXT`）です。
  これにより、将来のアンカーが非数値の識別子を使用する可能性があるため、スキーマがアンカータイプ間で統一されます。Artifact Registry は
  外部エンティティの意味を決して解釈しません。
- `(platform, entity_type, entity_id)` に対する一意制約は、重複したアンカーを防ぎます。
- Organizations v1 では、すべての行が `('gitlab', 'organization', '<rails_org_id>')` を持ちます。
- 将来のアンカータイプは、異なる `entity_type` 値を持つ行を追加します。スキーマ移行は不要です。
- `billing_entity_type` と `billing_entity_id` は、使用量イベントの課金アンカーを識別します。AR はこれらを
  解釈することなくすべての課金イベントにスタンプします。Core Module（Rails）がネームスペース作成時にこれらの値を
  提供します。FY27-Q2 では、課金エンティティは TLG（`billing_entity_type = 'top_level_group'`、
  `billing_entity_id = '<root_namespace_id>'`）です。Organization レベルの課金が CDot に導入されると、値は
  AR のコード変更なしに `('organization', '<organization_id>')` に変わります。これにより AR は課金構造に依存しないままになります。
- 外部から提供される列（`platform`、`entity_type`、`entity_id`、`billing_entity_type`、
  `billing_entity_id`）のいずれにもスキーマレベルのデフォルトはありません。Core Module はネームスペース作成時に
  すべての値を供給する必要があり、これにより Artifact Registry のスキーマは外部のアイデンティティと課金モデルに
  依存しないままになります。

`organization_id` をシャーディングまたはパーティションキーとして使用するテーブルは、代わりに `namespace_id` を使用します。外部キーと
インデックスも同じパターンに従います。パーティションキーは安定しています。内部 ID は決して変更されません。

[Cells のシャーディングキー要件](https://docs.gitlab.com/development/organization/sharding/#choosing-the-right-sharding-key)は、
Rails モノリスのデータベースに適用されます。Cell ローカルのサービスは、データ移動のために[行を Organization に帰属させる](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18808#note_3144391363)（
直接または間接的に）だけで済みます。ネームスペースモデルはこれを `namespace_id -> アンカータプル -> organization` を通じて行います。

### URL 構造

```plaintext
Management:  /api/v1/<slug>/maven/repositories
Maven:       /<slug>/maven/my-repo/com/example/myapp/1.0.0/myapp-1.0.0.jar
npm:         /<slug>/npm/my-repo/@scope/package
OCI:         /v2/<slug>/repositories/my-repo/manifests/latest
```

どの URL にも数値 ID はどこにも現れません。API プレフィックスの後の最初のパスセグメントは常にスラッグです。スラッグと
リポジトリ名の両方が不変であるため、URL パス全体は恒久的に安定しています。

### スラッグの設計

スラッグはネームスペースを作成するときに顧客によって選択されます。スラッグが組織名を追跡するという誤った期待を生まないようにするため、
Organization 名から自動入力されることは **ありません**。設計上のプロパティ:

- **不変**: 一度設定されると、決して変更されません。リポジトリ名の不変性、および業界の慣行と一貫しています。
- **顧客が選択**: クライアント設定、CI パイプライン、Kubernetes マニフェストに現れるため、人間が読めて
  タイプ可能です。
- **グローバルに一意**: 2 つのネームスペースがスラッグを共有することはできません。予約名と高価値スラッグの
  保護に関するポリシーが必要です。
- **検証ルール**: ハイフンを含む小文字の英数字、先頭・末尾のハイフンなし、最小長は未定。S3
  バケットの命名ルールに似ています。

### ネームスペースのライフサイクル

**作成:** 顧客が Artifact Registry のネームスペースを作成するとき（管理 API または購入フローを介して）、
スラッグを選択し、ネームスペースはアンカータプルを介して自分の Organization にリンクされます。ネームスペースレコードは
データベースに作成され、スラッグは Cells ルーティングのためにトポロジーサービスにクレームされます。

**Organization の名前変更:** Artifact Registry への影響はありません。スラッグは不変であり、Organization
名から独立しています。データベース、URL、JWT スコープ、クライアント設定のいずれにも変更はありません。

**アンカーのプロモーション:** ネームスペースを別のエンティティに再アンカーする必要がある場合、アンカータプルの列のみが
更新されます。スラッグは変更されません。すべての URL は安定したままです。すべてのパーティションテーブルは影響を受けません。これは将来の
機能です。Organizations v1 では、プロモーションイベントは存在しません。

**削除:** Artifact Registry はネームスペースをソフト削除または無効化します。スラッグは予約され、別の顧客によって再取得
することはできません。これは、リポジトリ名の再取得と同じセキュリティリスク（認可バイパス、キャッシュ
ポイズニング）を回避するためです。これは、グローバルなスラッグネームスペースが時間とともに縮小することを意味します。最小長要件は
利用可能なプールが大きく保たれるのを助けます。

### Organization のマージ

GitLab が将来的に Organization のマージをサポートする場合、ネームスペースモデルはデータ移行なしでこれを処理します。

1. 2 つの Organizations（それぞれが独自のネームスペースを持つ）が 1 つにマージされます。
2. 吸収されるネームスペースのアンカータプルが、存続する Organization を指すように更新されます。ネームスペースごとに 1 回のメタデータ更新です。
3. 存続する Organization は 2 つのネームスペースを持つようになり、それぞれが独自のリポジトリと独立した重複排除境界を持ちます（トレードオフ）。
4. データベースパーティション間でのデータ移動はありません。
5. オブジェクトストレージの blob、キャッシュ、その他の保存データはすべて、Organization ではなくネームスペースをキーとしています。ストレージバックエンドでも何も移動しません。
6. スラッグは変更されません。すべての URL、JWT スコープ、クライアント設定は安定したままです。

Rails 側では、UI はマージされた Organization の下に複数のネームスペースを、それぞれ独自の
リポジトリとともに表示できます。

```plaintext
Organization: Acme Corp (merged)
  Namespace: acme-engineering
    - maven/my-app
    - docker/service-a
  Namespace: acme-platform (from merged org)
    - maven/platform-lib
    - docker/service-b
```

顧客が後で単一のネームスペースに統合したい場合、それは明示的な移行（リポジトリをあるネームスペースから
別のネームスペースに移動する）になり、マージの自動的な結果ではありません。

ネームスペース抽象化がなければ、Organization のマージは、すべてのパーティション化されたデータを
ある `organization_id` から別の `organization_id` へ移行し、すべての URL を更新し、重複排除境界を調整し、JWT スコープの
陳腐化を処理することを必要とする可能性があります。

### Cells ルーティング

トポロジーサービス（Go の gRPC サービス）は、クレームされた識別子から cell へのマッピングを維持します。Artifact Registry は
スラッグをクレームすることで統合します。

1. ネームスペースが作成されると、Artifact Registry はトポロジーサービスにスラッグをクレームし、それをネームスペースのデータが
   存在する cell にマッピングします。
2. リクエストが到着すると、HTTP ルーターはスラッグ（最初のパスセグメント）を抽出し、トポロジーサービスに問い合わせて、
   正しい cell にルーティングします。
3. 認証されていないリクエスト（たとえば匿名の Docker プル）の場合、スラッグが唯一のルーティングシグナルです。これは
   スラッグが URL に含まれており、認証なしで分類できるため機能します。

トポロジーサービスは共有された Cells の依存先であり、Artifact Registry 固有のものではありません。ネームスペースの作成のみ
がトポロジーサービスを書き込み可能であること（スラッグのクレーム）を必要とします。読み取りパスのリクエストはルーティングルックアップのみを必要とし、これはキャッシュ可能です。

### リクエストフロー

すべてのリクエスト（認証の有無にかかわらず）は同じように始まります。

1. HTTP ルーターが URL からスラッグを抽出し、トポロジーサービスを介して正しい cell にルーティングします
2. Artifact Registry が `namespaces WHERE slug = '<slug>'` をルックアップしてネームスペース ID を取得します
3. Artifact Registry が `(namespace_id, name)` でリポジトリをルックアップして、リポジトリレコードと可視性を取得します

`namespaces` テーブルはパーティション化されておらず、`slug` に一意インデックスがあります。1 回のインデックス付きルックアップの後、
それ以外のすべてについてパーティションルーティングされたクエリが実行されます。スラッグからネームスペース ID へのマッピングは不変であるため、
リクエストごとにデータベースクエリを行うのを避けるために、積極的にキャッシュ（インメモリまたは Redis）できます。

**認証されたリクエスト** は、[ADR-020](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18462) で定義された
JWT 交換フローを使用します。すべてのクライアントは Artifact Registry を介して認証し、Artifact Registry は独自のネームスペーステーブルからスラッグを org ID に解決し、
Rails との透過的な交換にそれを含めます。Rails はスラッグについて知る必要が一切ありません。

**認証されていないリクエスト** は、JWT 交換
（[ADR-020](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18462)）をスキップし、
直接 `no_access` が割り当てられ、Artifact Registry はアクセスルールをローカルで評価します。パブリックダウンロードに Rails 呼び出しは不要です。

### 認可の互換性

この提案は [ADR-021](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18717) と互換性があります。

- **スコープ形式**: ADR-021 は現在 `o/<org_id>/repositories/<format>/<type>/<repo_id>` を使用しています。この提案では、
  スコープは org ID の代わりにスラッグを使用します（例: `<slug>/repositories/maven/hosted/my-repo`）。Artifact
  Registry はスラッグを org ID に解決し、Rails との交換にそれを含めます。
- **JWT**: ADR-020 は現在、JWT に Organization ID を含めています。この提案では、`organization_id` クレーム
  は不要になります。Artifact Registry は交換が行われる前に、すでに独自のルックアップからネームスペース ID を持っています。
  JWT は `access_level` のみを運べばよくなります。
- **Organization のオーナー** は、Rails の組織メンバーシップから直接 Owner のアクセスレベルを受け取ります。ネームスペース
  アプローチによる影響はありません。

### スラッグの探索

GitLab のフロントエンドは、Artifact Registry の API を（Rails を介さずに）直接呼び出します。すべての API 呼び出しは URL にスラッグを必要とするため、フロントエンドはリクエストを行う前にスラッグを必要とします。

Artifact Registry は、特定の Organization のスラッグのリストを返す軽量なエンドポイント（`/api/v1/o/:org_id/slugs`）を公開します。v1 ではこのリストは常に単一の項目（Organization ごとに 1 つのネームスペース）を含みますが、Organization ごとに複数のネームスペースがサポートされる場合（たとえば Organization のマージ後）に API の破壊的変更を避けるため、レスポンスはリストになっています。Rails はフロントエンドのアイデンティティトークンを発行する際（[ADR-020](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18462)）にこのエンドポイントを呼び出し、スラッグをトークンペイロードに含めます。フロントエンドはその後、それらをすべての後続の API 呼び出しに使用します。

マッピングは不変であるため、Rails はレスポンスを積極的にキャッシュできます。Artifact Registry は引き続き唯一の信頼できる情報源であり、Rails がそれを永続化することはありません。将来的にアンカーの切り替えや Organization ごとの複数ネームスペースがサポートされる場合、キャッシュの無効化に対処する必要があります。

## 結果

### ポジティブな影響

1. **完全な Rails の切り離し**: Artifact Registry のスキーマ、URL、ロジックに Rails の ID が一切含まれません。Rails が org
   ID や構造を変更しても、Artifact Registry は影響を受けません。
2. **不変な URL**: スラッグとリポジトリ名の両方が不変です。URL パス全体は恒久的に安定しています。
   名前変更イベントなし、パスのドリフトなし、JWT スコープの陳腐化なし、名前変更によるクライアント設定の破損なし。
3. **安定したパーティショニング**: ネームスペース ID は内部的なもので、アンカーが変わっても決して変更されません。パーティション化された
   テーブル、外部キー、インデックスへの影響はありません。
4. **仮想アンカーの柔軟性**: `(platform, entity_type, entity_id)` タプルにより、今日 Organizations に
   ネームスペースを接続し、後で他のエンティティにスキーマ移行やデータ移動なしで接続できます。エンティティレベル間のプロモーションはメタデータの
   更新です。
5. **Cells 対応**: トポロジーサービスへのスラッグのクレームにより、org パスの解決に依存しないクリーンなルーティング
   メカニズムが提供されます。
6. **認証なしの読み取りに自己完結**: Artifact Registry は独自のネームスペーステーブルを持っています。パブリックダウンロードに Rails 呼び出し
   は不要です。
7. **データ移行なしの Organization マージ**: Organizations がマージされる場合、アンカータプルが更新され、存続する
   Organization が複数のネームスペースを保持します。データ移動、URL の変更、クライアント設定の破損はありません。詳細は
   [Organization のマージ](#organization-merges)を参照してください。
8. **スタンドアロン製品の可能性**（意欲的）: Artifact Registry が独自のネームスペースアイデンティティを所有し、アンカーを
   不透明として扱うため、アーキテクチャは GitLab Rails に構造的に依存しません。これにより、GitLab の
   代わりにサードパーティの認証・認可プロバイダーに依存する独立した製品として Artifact
   Registry をパッケージ化する道が開けます。

### ネガティブな影響

1. **スラッグの一意性の強制**: グローバルに一意なスラッグは、スクワッティングのリスクを生じさせます。予約名、
   高価値スラッグの保護、最小長に関するポリシーが必要です。これは業界では解決済みの問題（S3、Docker Hub）ですが、
   製品上の判断が必要です。
2. **すべての認証が Artifact Registry を経由**: Artifact Registry がスラッグから org へのマッピングを所有するため、すべての
   クライアントは Rails と直接ではなく、Artifact Registry を介して認証する必要があります。これは Artifact Registry に負荷を追加しますが、Rails 側でマッピングを複製するのを避けます。
3. **ネームスペースの作成は明示的なアクション**: 管理 API または購入フローは、いずれかのクライアントリクエストが成功する前に
   ネームスペースを作成する必要があります。Artifact Registry は、ネームスペースをセットアップしていない org に対して
   リクエストを処理できません。
4. **トポロジーサービスへの依存**: Artifact Registry は、スラッグのクレームのためにトポロジーサービスの Go
   クライアントを統合する必要があります。
5. **スラッグの探索性**: ユーザーが GitLab の利用経験からすでに知っている Organization パスとは異なり、スラッグ
   は Artifact Registry 固有の新しい概念です。ユーザーは自分のスラッグを覚えるか調べる必要があります。クライアント
   設定のドキュメントと UI はこれを考慮する必要があります。
6. **重複排除境界の変更**: 重複排除（[ADR-002](002_storage_deduplication_scope.md)）が
   Organization からネームスペースに移ります。v1 ではこれらは 1:1 ですが、顧客ごとに複数のネームスペースがあると、各ネームスペースが
   独立した重複排除境界を持ちます。ネームスペース間の重複排除は対象外です。

## ADR への影響

承認された場合、この提案は現在レビュー中の以下の ADR への変更を必要とします。

- **[ADR-007: データベーススキーマ](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18456)**:
  すべてのパーティション化されたテーブルの `organization_id` 列は `namespace_id` に名前変更され、Rails の org ID の代わりに内部
  ネームスペース ID を参照します。パーティション化されていない新しい `namespaces` テーブルがスキーマに追加されます。
  パーティショニング戦略、複合主キー、外部キーのパターンは変更されません。
- **[ADR-009: API 設計](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18458)**:
  URL の `/o/<org_id>/` プレフィックスが `/<slug>/` に置き換えられます。スラッグはすべてのプロトコル（management、Maven、npm、OCI）で
  API プレフィックスの後の最初のパスセグメントです。どの URL にも数値 ID は現れません。また、organization id のネームスペースを取得するための新しい CRUD API が必要です。
- **[ADR-020: 認証フロー](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18462)**: すべての
  クライアントは Artifact Registry を介して認証し、Artifact Registry は Rails と交換する前にスラッグを org ID に解決します。JWT の
  `organization_id` クレームは不要になります。
- **[ADR-021: 認可](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18717)**: スコープ
  形式が `o/<org_id>/repositories/<format>/<type>/<repo_id>` から
  `<slug>/repositories/<format>/<type>/<repo_name>` に変わります。認可モデル（専用のグループ/プロジェクト、アクセスレベル、
  可視性の同期）はそれ以外は影響を受けません。

- **[ADR-008: コンテンツアドレス可能ストレージ](008_content_addressable_storage.md)**:
  オブジェクトストレージのキー階層は、トップレベルの分離のためにネームスペースの内部 UUIDv7 ID の SHA256 ハッシュを使用します。
  ハッシュ化されたパスは構造上不変です（変更すべき人間が読める値がありません）。これは
  [GitLab のハッシュ化ストレージ標準](https://gitlab.com/groups/gitlab-org/-/work_items/2320)に整合します。ネームスペースの
  すべてのアーティファクトは、同じハッシュプレフィックスの下に配置されます。

すでにマージされた ADR は構造的には変更されません。

- **[ADR-001](001_organizations_as_anchor_point.md)**: アンカーポイントとしての Organizations は維持されます。この提案は抽象化
  層を追加するものであり、置き換えではありません。
- **[ADR-002](002_storage_deduplication_scope.md)**: 重複排除のスコープが Organization からネームスペースに移ります。
  初期リリースではこれらは 1:1 です。ストレージはネームスペース境界内で重複排除されます。同じ
  ネームスペース内の同一コンテンツは一度だけ保存されます。

## 未解決の問題

1. **どのスラッグ検証ルールを適用すべきか?** 最小/最大長、文字セット、予約プレフィックス。https://gitlab.com/gitlab-org/gitlab/-/work_items/593368 （社内）を参照。
1. **このエンティティのユーザー向け名称は何か?** https://gitlab.com/gitlab-org/gitlab/-/work_items/593366 を参照。

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

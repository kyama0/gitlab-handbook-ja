---
title: "Artifact Registry ADR 022: ネームスペースデカップリング"
owning-stage: "~devops::package"
description: "不変なスラッグと仮想アンカータプルを持つ内部ネームスペースエンティティを導入し、Artifact Registry を Rails の内部識別子から切り離す提案"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/artifact_registry/decisions/022_namespace_decoupling/
upstream_sha: f656f02435661ffa63fe51e9b75469265e9ed794
lastmod: "2026-11-05T17:24:28Z"
translated_at: "2026-11-05T21:46:48.566032+00:00"
translator: claude
stale: false
---


<!-- Design Documents often contain forward-looking statements -->
<!-- vale gitlab.FutureTense = NO -->

## ステータス {#status}

**提案中。**

## 背景 {#context}

[ADR-001](001_organizations_as_anchor_point.md)は、Organizations を Artifact Registry のアンカーポイントとします。
Rails の組織を、テーブルとトークンでは ID、URL ではパスで直接参照すると、2 つのコストが生じます。

組織のパスは可変です。企業は名前を変えます。組織パスを Artifact Registry の URL に含めると、名前を変えるたびに、クライアント設定（`.npmrc`、`settings.xml`、Dockerfile、CI パイプライン）が壊れ、キャッシュした参照が無効になり、トークンスコープが古くなり、Rails と Artifact Registry の間で名前変更の伝播と競合処理が必要になります。同じ理由で、リポジトリ名は不変であり（[ADR-009](009_api_design.md#repository-name-immutability)）、1 つ上のレベルにも同じ原則を適用します。

組織階層も、まだ発展途上です。組織のネストや統合が起こり得るうえ、組織のロールアウトは、すべての環境に行き渡っていません。組織 ID と密結合すると、アンカーとなるエンティティが変わった場合に、切り離すコストが高くなります。そのため、Artifact Registry は、自身が所有する間接層を通じてアンカーを参照します。

組織は、引き続きデフォルトのアンカーです。問うのは参照方法であり、直接参照するか、独自の不変な識別子を持つ内部ネームスペースを経由するかです。

## 提案 {#proposal}

3 つの特性を持つ、内部ネームスペースエンティティを Artifact Registry に導入します。

1. **不変のスラッグ**：グローバルに一意で、顧客が選ぶ、人間が読める識別子です。ストレージバケット名のように、すべての URL に現れ、決して変わりません。
1. **仮想アンカータプル**：ネームスペースを、意味を解釈することなく外部エンティティに結び付ける、`(platform, entity_type, entity_id)` タプルです。
1. **UUIDv7 ID**：データベースのパーティショニング、内部クエリ、認可におけるネームスペースの安定したリソース識別子、つまりロール割り当ての対象リソースの識別に使用します（[ADR-021](021_authorization.md#role-assignment)）。アドレス指定用の識別子ではありません。クライアント向け URL の唯一のネームスペース識別子はスラッグであり、内部 GitLab API は UUID をキーにします（[ADR-009](009_api_design.md)）。

これは [ADR-001](001_organizations_as_anchor_point.md)を変更せず、Artifact Registry とアンカーエンティティの間に間接層を加えます。Artifact Registry のパーティショニングや URL に、Rails の識別子は現れません。

### アンカー {#anchors}

- `entity_id` は、一部のアンカー型では数値、ほかの型では UUID です。Artifact Registry が外部エンティティの意味を解釈することは一切なく、`entity_type` が、値の識別するエンティティを利用側に示します。
- アンカーは、パージされていないネームスペースの間で一意です。パージによって解放するため、所有者は新たなネームスペースをオンボーディングできますが、古いスラッグは廃止したままです（[ADR-015（社内向け）](https://internal.gitlab.com/handbook/engineering/architecture/design-documents/artifact_registry/decisions/015_slug_policy/#slug-lifecycle)）。
- Organizations v1 では、すべてのアンカーは `('gitlab', 'organization', '<organizations.uuid>')` です。数値 ID ではなく、組織の UUIDv7 を使用します。IAM の Relationships API は、UUIDv7 以外のオブジェクト ID を含むリクエスト全体を拒否するため、数値 ID では、祖先である組織を指定できませんでした。
- 組織の値に、それ以外の一意性制約を課してはいけません。[組織の統合](#organization-merges)では、存続する組織が複数のネームスペースを持つ必要があるためです。
- 新しいアンカー型は、新たな `entity_type` の値であり、スキーマの変更は不要です。
- 別の**課金アンカー**である `(billing_entity_type, billing_entity_id)` のペアが、使用量の支払者を識別します。Artifact Registry は、これを解釈せずに、すべての課金イベントに記載します。Organizations v1 ではトップレベルグループであり、`('top_level_group', '<root_namespace_id>')` です。支払者が変わる場合、Rails は後から置き換えられます（[課金アンカーの変更](#namespace-lifecycle)を参照）。課金が組織に移行しても、Artifact Registry を変更せずに値が変わります。
- プラットフォームは、ネームスペースの作成時に、すべてのアンカーと課金の値を提供します。いずれにもスキーマのデフォルトを設けず、Artifact Registry を、外部のアイデンティティモデルと課金モデルから独立させます。

パーティション分割されたテーブルは、`namespace_id`、または blob ストレージではダイジェストをキーとし（[ADR-007](007_database_schema.md#blob-storage-partitioning-strategy)）、どちらも変わりません。Cells の[シャーディングキー要件](https://docs.gitlab.com/development/organization/sharding/#choosing-the-right-sharding-key)は、Rails モノリスのデータベースに適用するものであり、Cell 内のサービスには適用しません。Cell 間のデータ移動に必要なのは、行が直接または間接的に組織に帰属することだけです。ネームスペースモデルでは、`namespace_id` → アンカー → 組織によって実現します。

### スラッグ設計 {#slug-design}

スラッグは、ネームスペースの作成時に顧客が選び、すべてのクライアント向け領域に公開します。顧客向けドキュメントと UX でのユーザー向け名称は、**registry handle** です。

- **不変**：設定後は、決して変わりません。
- **顧客が選択**：クライアント設定、CI パイプライン、Kubernetes マニフェストに現れるため、人間が読み、入力できるものにします。
- **グローバルに一意**：2 つのネームスペースが、スラッグを共有することはできません。
- **パスの先頭**：OCI の `GET /v2/` プローブを除く、すべてのクライアント向け URL で、API またはプロトコルのプレフィックスの次の最初のパスセグメントをスラッグとし、数値 ID はどのクライアント向け URL にも現れません（[ADR-009](009_api_design.md)）。リポジトリ名も不変であるため、URL パス全体が永続的に安定します。

検証ルール、組織名からのデフォルト値の導出、予約ポリシー、ライフサイクルの制御（セキュリティブロックと移管）は、[ADR-015：スラッグポリシー（社内向け）](https://internal.gitlab.com/handbook/engineering/architecture/design-documents/artifact_registry/decisions/015_slug_policy/)で定義します。

リクエストは、インデックスを使った 1 回の検索で、スラッグをネームスペース ID に解決します。この対応付けは不変であるため、自由にキャッシュできます。

### ネームスペースのライフサイクル {#namespace-lifecycle}

**作成：** 顧客がスラッグを選び、アンカーを通じてネームスペースを組織に結び付け、Cells ルーティングのためにトポロジーサービスでスラッグを取得します。

**組織の名前変更：** 影響はありません。データベース、URL、トークン、クライアント設定は、どれも変わりません。

**アンカー変更：** ネームスペースを別のエンティティに結び直す場合、アンカーだけを更新します。スラッグ、URL、パーティション分割されたデータは変わりません。Organizations v1 では、このようなイベントは存在しません。

**課金アンカーの変更：** 有料グループが指定グループになる場合など、支払者が変わるときに、Rails は課金アンカーを置き換えられます。
課金アンカーを変えても、スラッグもアンカータプルも変わりません。

**ステータス：** ネームスペースには、削除とパージという 2 つの一方向のライフサイクルイベントと、独立した可逆的な 4 つのサービス条件があります。

- ブロック（セキュリティ）。
- 無効化（組織がレジストリをオフにした状態）。
- 利用停止（プランの失効。[ADR-010](010_data_retention.md#subscription-expiration)を参照）。
- 使用量上限によるブロック（ネームスペースが使用量上限に達した状態。[ADR-010](010_data_retention.md#usage-limit-block)を参照）。

ある条件を適用または解除しても、ほかの条件は変わらないため、複数の条件を同時に適用できます。
利用停止中、または使用量上限でブロックされたネームスペースは、読み取り（pull）を提供し、書き込み（push）を拒否します。
それ以外のイベントや条件では、すべてのサービスを停止します。
各条件での課金と保持の適用方法は、[ADR-010](010_data_retention.md#billing-and-retention-by-condition)で定めます。
Artifact Registry は、各条件を保存し、Rails のキャッシュに関係なく、リクエストごとにステータスを適用し、API で公開します（[スラッグの検出](#slug-discovery)を参照）。
Rails が条件を設定した理由を知ることは、一切ありません。

**削除：** Artifact Registry は、ネームスペースをソフト削除します。リポジトリ名の再取得と同じセキュリティリスク（認可バイパス、キャッシュポイズニング）を避けるため、スラッグは予約し、別の顧客が再取得できないようにします。完全なライフサイクル（再取得を認めるソフト削除期間、永久廃止を伴うハード削除）とセキュリティブロックや移管の制御は、[ADR-015（社内向け）](https://internal.gitlab.com/handbook/engineering/architecture/design-documents/artifact_registry/decisions/015_slug_policy/#slug-lifecycle)を参照してください。

### 組織の統合 {#organization-merges}

組織を統合しても、ネームスペースモデルではデータの移行は不要です。

1. 吸収される組織のネームスペースのアンカーを、存続する組織に向けて更新します。ネームスペースごとに 1 回のメタデータ更新です。
1. 存続する組織は、それぞれ専用のリポジトリと重複排除境界を持つ、複数のネームスペースを保持します。
1. 保存するすべてのデータは組織ではなくネームスペースをキーとするため、データベースパーティション間でも、オブジェクトストレージ内でも、移動はありません。
1. スラッグは変わらないため、URL、トークン、クライアント設定も安定したままです。

単一のネームスペースにまとめる場合は、ネームスペース間でリポジトリを明示的に移行する必要があり、統合による自動的な帰結ではありません。

ネームスペースがなければ、統合時には、ある組織 ID から別の組織 ID への全パーティションデータの移行、すべての URL の変更、重複排除境界の調整、古いトークンスコープの処理が必要になります。

### Cells ルーティング {#cells-routing}

トポロジーサービスは、取得済みの識別子を Cell に対応付け、Artifact Registry はスラッグを取得します。

1. ネームスペースを作成すると、Artifact Registry がスラッグを取得し、そのデータを保持する Cell に対応付けます。
1. HTTP ルーターは、URL からスラッグを取り出し、その Cell にリクエストを送ります。スラッグは認証せずに読み取れるため、スラッグをプレフィックスに持つすべてのリクエストをルーティングできます。スラッグのないルートを Cell に届ける方法は、ADR-009 が定めます。OCI の [`GET /v2/` プローブ](009_api_design.md#container)と、UUID をキーにする [GitLab API](009_api_design.md#gitlab-api)が該当します。

トポロジーサービスに書き込みが必要なのは、ネームスペースの作成時だけです。読み取りパスに必要なのは、キャッシュ可能なルーティング検索だけです。

### スラッグの検出 {#slug-discovery}

GitLab のフロントエンドは、Rails モノリスを通じて Artifact Registry にアクセスします（[ADR-014](014_frontend_to_artifact_registry.md)）。Artifact Registry のすべての API 呼び出しには URL 内のスラッグが必要であるため、Rails は、リクエストを行う前にスラッグを把握する必要があります。

Rails は、ネームスペース UUID だけを永続的に保存します。プロビジョニング時に書き込む、ネームスペースごとに 1 行のレコードです。Organizations v1 では、組織ごとに 1 行であり、[組織の統合](#organization-merges)では、吸収されるネームスペースの行を存続する組織に加えます。UUID は不変であるため、この参照は同期が不要であり、統合やアンカー変更の後も存続します。

スラッグとネームスペースのステータスは、Rails 側には永続化しません。Rails は、UUID で Artifact Registry から解決し、キャッシュします。
スラッグを変えられるのは Artifact Registry の権限だけであり、法務上のエスカレーションが不変性の唯一の例外です。
サービス条件（[ネームスペースのライフサイクル](#namespace-lifecycle)）には 2 つの設定元があります。Rails は、無効化、利用停止、使用量上限によるブロックを設定し、Artifact Registry は、ブロック（セキュリティ）を設定します。
Artifact Registry が、リクエストごとにすべての条件を適用する権威を持ちます。
Self-Managed の Rails と SaaS Artifact Registry を組み合わせるハイブリッドデプロイメントモデルでは、スラッグの変更とセキュリティブロックは Artifact Registry 側からしか発生しないため、Rails がそれらの正とする情報源になることはできません。

古いキャッシュが、強制を弱めることはありません。Artifact Registry は、リクエストごとにネームスペースのステータスを適用します。ステータスについて、古さが影響するのは次の更新までの表示だけです（たとえば、無効なネームスペースのレジストリがナビゲーションに一時的に表示されます）。スラッグについては、古い値で、次の更新までリンク切れが発生する場合があります。スラッグ変更はまれな緊急イベントであり、キャッシュ更新間隔がその期間の上限を定めます。

## 帰結 {#consequences}

### ポジティブ {#positive}

1. **Rails からの分離**：Artifact Registry のパーティショニングや URL に、Rails の ID は現れません。Rails が組織 ID や構造を変えても、Artifact Registry は影響を受けません。
1. **不変の URL**：スラッグとリポジトリ名はどちらも不変であり、名前変更によって URL、トークンスコープ、クライアント設定が壊れることはありません。
1. **安定したパーティショニング**：ネームスペース ID は内部識別子であり、アンカーを変えても、決して変わりません。
1. **アンカーの柔軟性**：スキーマ変更もデータ移動も行わず、ネームスペースを現在は組織に、将来はほかのエンティティに結び付けられます。
1. **Cells 対応**：スラッグの取得によって、組織パスの解決に依存しないルーティングキーを得られます。
1. **リクエストパスで Rails を呼び出しません**：Artifact Registry は、自身のデータからネームスペースを解決します。
1. **データ移行を伴わない組織の統合**（[組織の統合](#organization-merges)）。
1. **独立したプロダクトとしての可能性**：Artifact Registry は、自身のネームスペースのアイデンティティを所有し、アンカーを不透明に扱うため、構造上 GitLab Rails に依存しません。サードパーティの認証・認可プロバイダーに依存する、独立したプロダクトとして提供することも可能です。

### ネガティブ {#negative}

1. **スラッグの不正占有**：グローバルに一意なスラッグは不正占有を招くため、予約名、価値の高いスラッグ、最小の長さに関するポリシーが必要です（[ADR-015（社内向け）](https://internal.gitlab.com/handbook/engineering/architecture/design-documents/artifact_registry/decisions/015_slug_policy/)）。
1. **ネームスペースの作成は明示的な操作です**：クライアントのリクエストが成功する前に、ネームスペースをプロビジョニングする必要があります。設定していない組織には、Artifact Registry はサービスを提供できません。
1. **トポロジーサービスへの依存**：Artifact Registry は、スラッグを取得するため、トポロジーサービスと統合します。
1. **スラッグの発見可能性**：GitLab でユーザーがすでに把握している組織パスとは異なり、スラッグは新しい概念です。クライアント設定のドキュメントと UI で、明示する必要があります。
1. **重複排除境界**：重複排除は、組織（[ADR-002](002_storage_deduplication_scope.md)）からネームスペースへ移ります。Organizations v1 では、ネームスペースは組織に 1 対 1 で対応しますが、複数のネームスペースを持つ組織では、それぞれが独立した重複排除境界を持ちます。ネームスペース間の重複排除は、対象外です。

## 参考文献 {#references}

- [ADR-001：アンカーポイントとしての組織](001_organizations_as_anchor_point.md)
- [ADR-002：ストレージ重複排除のスコープ](002_storage_deduplication_scope.md)
- [ADR-009：API 設計](009_api_design.md)
- [ADR-014：フロントエンドと Artifact Registry の連携](014_frontend_to_artifact_registry.md)
- [ADR-015：スラッグポリシー（社内向け）](https://internal.gitlab.com/handbook/engineering/architecture/design-documents/artifact_registry/decisions/015_slug_policy/)
- [ADR-021：認可](021_authorization.md)

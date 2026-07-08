---
title: "Artifact Registry と Organizations のインターフェース合意"
owning-stage: "~devops::package"
description: "Artifact Registry チームと Organizations チームの間のインターフェース合意"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/artifact_registry/agreements/organizations/
upstream_sha: e369d698c905fc3eca22dd31f609afe16f2307bf
translated_at: "2026-07-06T09:08:00+09:00"
translator: codex
stale: false
lastmod: "2026-07-06T09:56:59+10:00"
---

<!-- vale gitlab.FutureTense = NO -->

## 概要

Artifact Registry (AR) は、最初の組織レベルの GitLab 機能です。Organizations は AR のデータパーティショニング、ストレージ、ビリング、アクセス制御のアンカーポイントです。ここで行われる意思決定は、将来の組織レベル機能の前例となります。

本ドキュメントでは、AR と Organizations の間のインターフェース合意を定義します。AR が必要とするもの、AR が提供するもの、未解決の質問を明確にします。議論は時間や媒体を越えて行われ、関係者全員が容易に追跡できるとは限りません。他の場所で行われた関連する決定は、本ドキュメントで記録・承認されるまでは認識されておらず受け入れられてもいないものとします。

## バージョン履歴

| バージョン | 日付 | 著者 | 承認者 | 概要 |
| --- | --- | --- | --- | --- |
| 0.1 | 2026-04-06 | @jdrpereira | | 初版 |

## タイムライン

AR は、Q2 FY27 末（2026 年 7 月 31 日）までに .com での公開を目指しています。Self-Managed と Dedicated のオンボーディングは Q2 ローンチのスコープ外で、Q3/Q4 FY27 にターゲットされている統一セルフサービスオンボーディングワークフローに依存します。Organizations チームは、[Q2 の Organization GA をスコープダウン](https://gitlab.com/groups/gitlab-org/-/work_items/21393#note_3218405112)し、AR ローンチに必要な要素のみに絞りました。すなわち、AR 有効化前の Organization 確認、サイドパネル内の Organization オブジェクト、シェルランディングページ（Organization オブジェクト配下の最小ページで、AR が独自のビューで埋める）です。管理エリア、設定、オーナー判定、ユーザー管理は先送りされています。

本ドキュメントの MUST 要件は、AR が顧客のオンボーディングを開始する前に満たされる必要があります。

## 要件レベル

本ドキュメントでは [RFC 2119](https://www.rfc-editor.org/rfc/rfc2119) のキーワードを使用します。**MUST**、**MUST NOT**、**SHOULD**、**SHOULD NOT**、**MAY** が要件レベルを示します。

## 用語

| 用語 | 定義 |
| ------------------------ | -------------------------------------------------------------- |
| Organization | トップレベルグループ (TLG) より上位の GitLab エンティティ。AR のデータパーティショニング、ストレージ重複排除、コスト按分、アクセス制御の主要境界。 |
| TLG | トップレベルグループ。階層内で最も高位のグループエンティティ。 |
| 確認済み Organization | 正しい TLG を含むことが検証された Organization。確認の仕組みは [未解決の質問](#open-questions) です。 |
| Namespace | 組織にスコープされる AR 内部のエンティティ。1 つの Organization が複数の namespace を持つことがあります。すべてのデータパーティショニング、ストレージ、アクセス制御は namespace にスコープされます。詳細なコンテキストは [Namespace Decoupling ADR](/handbook/engineering/architecture/design-documents/artifact_registry/decisions/022_namespace_decoupling/) を参照してください。これはモノリス側の namespace エンティティとは *無関係* です。後者は本ドキュメントには関係ありません。 |
| Slug | AR namespace の不変で顧客向けの識別子。すべての AR URL とクライアント設定に現れます。GitLab SaaS 境界内で一意です。Organization パス（`gitlab.com/o/<org-path>`）とは異なります。後者は可変であり Organizations チームが管理します。 |
| アンカータプル | AR の `namespaces` テーブルに保存される `(platform, entity_type, entity_id)` で、namespace を外部エンティティ（Organization）にリンクします。 |

## Organization 要件 {#organization-requirements}

AR は組織のメンバーシップ、階層、ライフサイクルを解釈しません。AR は namespace 作成時に `organization_id` を受け取り、アンカータプルに保存します。それ以降、AR は `organization_id` を不透明な値として扱います。AR は他のすべての組織プロパティ（名前、パス、メンバーシップ、設定、プラン）を無視します。

組織 ID や属性は AR の公開 API や URL に出現しません。`organization_id` は厳密に内部的なもので、ビリング按分に使われますが、クライアントには露出しません。

### AR が提供するもの

| 要件 | レベル | オーナー | 詳細 |
| ------------------------- | ------- | ------- | -------------------------------------------------------------- |
| Namespace 解決エンドポイント | MUST | AR | 指定された namespace UUID に対する namespace の詳細（スラッグ、ステータス）を返します。Rails はプロビジョニング時に UUID を永続化し、スラッグとステータスをキャッシュします（[ADR-022](../decisions/022_namespace_decoupling.md#slug-discovery)）。 |
| Namespace 作成 API | MUST | AR | 確認済み Organization と顧客選択のスラグにリンクされた AR namespace を作成する管理 API。レスポンスには、Rails が永続化する namespace UUID が含まれます。 |
| 移管ルール | MUST | AR | AR は組織マージの移管ルールを宣言します。詳細は [マージトリガー](#merge-trigger) を参照してください。 |
| ビリングイベント | MUST | AR | AR は Snowplow/LabKit SDK を介して `organization_id` がタグ付けされた使用イベントを発行します。ビリングパイプラインがこれを按分に使用します。 |

### 可用性

AR は、namespace を作成する前に、すべてのインストールタイプで Organization を必要とします。

| 要件 | レベル | オーナー | 詳細 |
| ------------------------------------- | ------- | --------------- | -------------------------------------------------------------- |
| すべてのインストールタイプで利用可能 | MUST | Organizations | Organizations は .com、Self-Managed、Dedicated で **MUST** 利用可能であるべきです。 |
| SM/Dedicated 上の単一 Organization | MUST | Organizations | すでにロールアウト済み（[Organizations ADR-007](/handbook/engineering/architecture/design-documents/organization/decisions/007_self_managed_dedicated_single_organization/)）。SM/Dedicated の各インスタンスで Organization ID=1。 |

### TLG 移管

Organizations チームの最終的な計画では、すべての .com TLG を独自の Organization に移管します（1:1）。Organization は TLG を含み、置き換えたり再構成したりはしません。複数の TLG を所有する顧客は、これらの自動プロビジョンされた Organization を後でまとめられるようになります。AR はこのマッピングを規定しません。

| 要件 | レベル | オーナー | 詳細 |
| -------------------------- | -------- | --------------- | -------------------------------------------------------------- |
| GitLab.com におけるマルチ TLG レコンサイル | SHOULD | Organizations | 複数の TLG を持つ顧客は、AR を有効化する前に TLG を 1 つの Organization に統合する手段を **SHOULD** 持つべきです。レコンサイル（既存設定や機能を持たないまっさらな未確認 Organization に TLG を移動する）は、組織マージ（既存設定や機能を持つ 2 つのアクティブな Organization を結合する）とは異なります。短期的にはレコンサイルのみが必要です。[レコンサイル PoC](https://www.youtube.com/watch?v=HEfZzK4r9nQ) があります。事前に統合しない場合の影響については [組織マージ](#organization-merges) を参照してください。 |

### 確認

AR は未確認の Organization で **MUST NOT** 有効化されてはいけません。確認は Rails 側で強制されます。namespace 作成 API は、Organization が確認済みになった後にのみ呼ばれる **MUST** ものとします。AR は呼び出し元を信頼し、自身では確認チェックをスキップします。

| 要件 | レベル | オーナー | 詳細 |
| ---------------------------------------- | ------- | ---------------------------------- | -------------------------------------------------------------- |
| AR 有効化前の確認 | MUST | Organizations + AR + Fulfillment | Organization は AR を有効化する前に確認済みで **MUST** あるべきです。ローンチ向けには手動プロセス（Organization 作成、TLG 移動、Organization 確認）。AR の事前選定顧客はローンチ前に確認されます。AR を購入する新規顧客は営業への連絡を案内され、その後同じ手動プロセスが適用されます。中期的には、セルフサーブのレコンサイル／確認フロー。詳細は [#596355](https://gitlab.com/gitlab-org/gitlab/-/work_items/596355)。 |
| SM/Dedicated 自動確認 | MUST | Organizations | 単一 Organization のインスタンスは自動的に確認されます。顧客のアクションは不要です。 |
| 確認状態のクエリ可能性 | MUST | Organizations | 確認状態は Rails 側でクエリ可能で **MUST** あるべきです。これにより、呼び出し元が AR の namespace 作成 API を呼び出す前にゲートを強制できます。 |
| 呼び出し元による確認の強制 | MUST | Rails | 呼び出し元は、AR の namespace 作成 API を呼び出す前に Organization が確認済みであることを **MUST** 確認しなければなりません。AR は呼び出し元を信頼し、自身で確認状態をチェックしません。 |
| マルチ TLG 購入のフォールバック | MUST | Organizations + AR | 複数の TLG を持つ未知の .com 顧客が AR の購入を試みる場合、UX は支援された統合のために営業に連絡するよう案内するメッセージを **MUST** 表示しなければなりません。 |

### ID 安定性

| 要件 | レベル | オーナー | 詳細 |
| ----------------------------------- | ------- | --------------- | -------------------------------------------------------------- |
| 不変な Organization ID | MUST | Organizations | Organization に割り当てられた `organizations.id` は変わっては **MUST NOT** いけません。AR はこれをアンカータプルに保存し、ビリング按分に使用します。変更があると namespace が孤児化します。 |
| Organization のリネームは影響なし | MUST | AR | Organization の名前とパスは可変です。AR はそれらを使用しません。スラグはすべての URL とクライアント設定における安定した識別子です。Organization のリネームは AR に何のアクションも要求しては **MUST NOT** いけません。 |

### UI 配置

| 要件 | レベル | オーナー | 詳細 |
| ---------------------------------- | ------- | -------------------- | -------------------------------------------------------------- |
| サイドバー内の Organization オブジェクト | MUST | Organizations | AR は GitLab UI 内に Artifact Registry 機能を表面化できるアンカーポイントを **MUST** 必要とします。現在の方向性は、サイドパネル内の Organization オブジェクトです。 |
| 管理者以外のユーザーによる AR アクセス | MUST | Organizations + AR | アーティファクト管理（リポジトリやアーティファクトの参照、アーティファクトのプル／プッシュ）は管理者専用ワークフローではありません。Organization オーナー以外のユーザーも、Organization 配下の AR UI への **MUST** アクセスを必要とします。 |
| 設定の配置 | MUST | Organizations + AR | AR は、Organizations チームが UI パターンを最終決定するのを待たずに、設定を配置できる **MUST** 必要があります。設定は後で最終的な場所に移動できます。Organizations チームが UI パターン（管理エリア vs. Organization > Settings）を決定し、AR はそのパターン内のどこに自身の構成を表面化するかを決定します。AR の設定は AR 自身のデータベースに保存され、Rails や Organization 設定下には保存されません。 |

### ビリングとエンタイトルメント

ビリングは [#591904](https://gitlab.com/gitlab-org/gitlab/-/work_items/591904) で詳細に扱われています。プロビジョニングパイプライン（[設計](https://gitlab.com/gitlab-org/customers-gitlab-com/-/merge_requests/15263)）と利用トラッキング（[提案](https://gitlab.com/gitlab-org/customers-gitlab-com/-/merge_requests/15308)）は Fulfillment チームが所有しており、Organizations チームではありません。以下は、Organizations と交差するビリング前提条件です。

| 要件 | レベル | オーナー | 詳細 |
| --------------------------------------- | ------- | ----------------------------- | -------------------------------------------------------------- |
| Organization レベルのエンタイトルメント | MUST | Organizations + Fulfillment | AR は Organization レベルで販売されます。`subscription_add_on_purchases` 上の `organization_id` カラム（Protocells の作業ですでに存在）がエンタイトルメントのアンカーです。 |
| AR は Organization 専用 | MUST | All | AR はデフォルト（未確認）の Organization の顧客には販売しては **MUST NOT** いけません。確認済み Organization は厳密な前提条件です。プロビジョニングおよび利用パイプラインが運用可能になるまで、オンボーディングフローは進行しては **MUST NOT** いけません。 |
| 既存顧客向けの移管フロー | MUST | Organizations | AR を望む既存の TLG 顧客は、AR を有効化する前に Organization を **MUST** 持つ必要があります。Fulfillment の[プロビジョニング移行（フェーズ 3）](https://gitlab.com/gitlab-org/customers-gitlab-com/-/merge_requests/15263) は、このフローが利用可能になることでブロックされています。 |

### ユーザーメンバーシップ

| 要件 | レベル | オーナー | 詳細 |
| ----------------------------------- | ------- | --------------- | -------------------------------------------------------------- |
| Organization メンバーシップのクエリ可能性 | MUST | Organizations | Rails は、ユーザーが指定された Organization のメンバーであるかどうかを解決できる必要があります。認証と認可の詳細は本合意のスコープ外です。 |

ユーザーは複数の Organization のメンバーになれます（`organization_users` 結合テーブル経由）。各 AR リクエストは単一の namespace（および 1 つの Organization）にスコープされます。1 つのリクエストが複数の Organization にまたがることはできません。パブリックリポジトリは Organization メンバーシップなしでもアクセス可能です。非分離 Organization はユーザークレームステップを必要としません。ユーザー／アカウント移行は分離バージョン（将来的）にのみ適用されます。

## 組織マージ {#organization-merges}

> **注:** このセクションは、要件を最終決定する前に問題空間について両チームが共通の理解を持つ必要があるため、本ドキュメントの他のセクションよりも深く踏み込みます。合意後、主要な要件は [Organization 要件](#organization-requirements) に統合され、AR 固有の設計詳細は別ドキュメントに移されます。

組織マージは直近のロードマップにはありません（[Merge Tooling epic](https://gitlab.com/groups/gitlab-org/-/work_items/21394)）。それでも、アーキテクチャはマージを構造的に不可能にしては **MUST NOT** ならず、マージを促進する **MUST** 必要があります。

現在のアーキテクチャでは、両方の Organization が AR を有効化している場合に 2 つの Organization がマージされると、生き残った Organization が 2 つの namespace を持つことになります。2 つの namespace は重複データ（二重請求）、重複構成、アーティファクトの統一ビューがないことを意味します。組織あたり 1 つの namespace が唯一望ましい *目標* 状態です。

初期リリースには、予防ゲート（例: 各顧客の AR 有効 Organization を 1 つに制限）と [マージブロッキング要件](#initial-phase-blocking)（後述）で十分です。中長期的には、計画外または自然発生的な組織マージは避けられず、予測不能な頻度で発生するため、エンジニアの介入なしに **MUST** 処理される必要があります。

### マージトリガー {#merge-trigger}

2 つの Organization がマージされると、一方が生き残り、もう一方が吸収されます。AR の視点では、即時のアクションはアンカータプルの更新です。吸収される側の namespace の `entity_id` を生き残った `organization_id` を指すように更新します。これは namespace ごとに 1 行の更新です。データは移動しません。

[Namespace Decoupling ADR](/handbook/engineering/architecture/design-documents/artifact_registry/decisions/022_namespace_decoupling/#organization-merges) は、すべてのデータを `organization_id` ではなく namespace にスコープすることでこれを可能にします。この間接化がない場合（つまり AR が直接 `organization_id` に紐づいている場合）、このステップでさえ完全なデータマイグレーションが必要になります。

| 要件 | レベル | オーナー | 詳細 |
| --------------------------- | ------- | --------------- | -------------------------------------------------------------- |
| 移管ルールの宣言 | MUST | AR | AR は[組織移管サポート](https://docs.gitlab.com/development/database/database_dictionary/#organization-transfer-support)ルールを **MUST** 宣言する必要があります。AR の移管ルール: `namespaces` テーブルの `entity_id` を生き残った `organization_id` に更新。AR の他のテーブルは `organization_id` を直接参照しません。 |
| マージイベント通知 | MUST | Organizations | Organizations チームがマージを実装したとき、AR がアンカータプル更新を同期的に実行できるよう、AR は **MUST** 通知される必要があります。 |

#### マージシナリオ {#merge-scenarios}

結果は、どの Organization が AR を有効化しているかによって異なります。

1. **生き残った Organization のみ AR を有効化:** 何も変わりません。namespace はすでに生き残った Organization を指しています。
2. **吸収される Organization のみ AR を有効化:** アンカータプルが更新され、生き残った Organization を指します。すべてのデータが namespace にスコープされている（`organization_id` ではなく）ため、データマイグレーションは不要です。namespace、スラグ、すべてのデータは変更されません。1:1 が保たれます。
3. **両方の Organization が AR を有効化:** 生き残った Organization は 2 つの namespace を持ちます。これは下記の[namespace 統合](#namespace-consolidation) の遷移状態に入ります。

#### 初期フェーズ: ブロッキング {#initial-phase-blocking}

下記の namespace 統合ツールとマルチ namespace UX は、現時点では存在しません。これらが利用可能になるまで、両方の Organization が AR を有効化している組織マージは **MUST** ブロックされる必要があります。対応する UX とツールなしにマージを許可すると、顧客は見ることも、制御することも、解決することもできない状態に陥ります。

| 要件 | レベル | オーナー | 詳細 |
| ---------------------------- | ------- | --------------- | -------------------------------------------------------------- |
| AR コンフリクト時のマージブロック | MUST | Organizations | namespace UX と統合ツールが利用可能になるまで、両方の Organization がアクティブな AR namespace を持っている場合、組織マージは **MUST** ブロックされる必要があります。 |

### Namespace 統合 {#namespace-consolidation}

1:N 状態は *遷移的* で **SHOULD** あるべきで、永続的ではありません。ただし提案する統合は顧客主導であるため、その状態が続く限り収束を強制することはできません。1:1 が望ましい *目標* 状態であることに変わりはありません。それでも、1:N 状態は **MUST** *管理* される必要があります。顧客は、両方の namespace の可視性とマイグレーション制御を持ち、自分のペースで 1:1 に収束できる必要があります。サポートを拒否すると、組織マージを無期限にブロックするか、顧客もプラットフォームも安全にスケールで運用できない破壊的で不透明なデータマイグレーションを強制することになります。

#### なぜデータマイグレーションが必要か

AR は namespace 単位でデータをパーティショニングし、ストレージを重複排除しています。境界によってデータをスコープするシステムは、境界が変わるときにそのデータをレコンサイルする必要があります。2 つの namespace が 1 つになると、パーティション化されたデータと重複排除コンテキストを統合する必要があります。これは、アンカーエンティティが何（Organization、トップレベルグループ、その他の境界）であっても真です。namespace 抽象は、Organization が変わるとき AR をデータマイグレーションから守ります（[シナリオ 2](#merge-scenarios)）。データマイグレーションは、顧客が 2 つの namespace を 1 つに統合したいときにのみ必要です（[シナリオ 3](#merge-scenarios)）。それは 1:1 の目標状態によって駆動され、マージイベントそのものではありません。

#### マルチ namespace UX

利用可能になった時点で、マルチ namespace の UX は最低限以下を **MUST** 提供する必要があります。

- **Namespace 一覧:** Organization 配下のすべての namespace と、namespace ごとの使用量・ビリング。
- **Namespace ごとのリポジトリ参照:** どれを移動するか判断するため、各 namespace を独立してナビゲート。
- **マイグレーション制御:** ある namespace から別の namespace へリポジトリを移動。
- **ビリング可視性:** Namespace ごとのストレージと使用量、2 つの namespace をアクティブに保つコストを顧客が理解できるように。

以下の図は概念のみを示します。UX を規定するものではありません。2 つの状態でナビゲーション構造がどう異なるかを示します。

**1:1（目標状態）:** Organization の単一 AR namespace はバックエンドに存在しますが、UX は隠しています。リポジトリは Artifact Registry ランディングページの直下に一覧されます。

```text
┌─ Organization: Acme Corp ───────────────────────────┐
│                                                     │
│  Artifact Registry                                  │
│  ┌─────────────────────────────────────────────┐    │
│  │ namespace: acme-eng (hidden from UX)        │    │
│  │                                             │    │
│  │  ├── acme-eng/my-app                        │    │
│  │  ├── acme-eng/platform-lib                  │    │
│  │  ├── acme-eng/service-a                     │    │
│  │  └── ...                                    │    │
│  └─────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────┘
```

**1:N（マージ後遷移状態）:** Acme Corp が別の Organization を吸収し、`acme-platform` AR namespace を持ち込みました。これは元の `acme-eng` namespace と並んで存在します。Namespace はナビゲーションレベルとして表面化されます。各 namespace は独自のリポジトリ、アクセスルール、ビリング、マイグレーション制御を持ちます。

```text
┌─ Organization: Acme Corp (merged) ──────────────────┐
│                                                     │
│  Artifact Registry                                  │
│  ┌─────────────────────────────────────────────┐    │
│  │ ▸ acme-eng              3 repos    1.2 GB   │    │
│  │ ▸ acme-platform         2 repos    0.8 GB   │    │
│  └─────────────────────────────────────────────┘    │
│                                                     │
│  ▾ acme-eng (expanded)                              │
│  ┌─────────────────────────────────────────────┐    │
│  │  ├── acme-eng/my-app                        │    │
│  │  ├── acme-eng/service-a                     │    │
│  │  └── ...                                    │    │
│  │                                   [Migrate] │    │
│  └─────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────┘
```

#### マイグレーションアプローチ

namespace 統合は **MUST** 顧客主導である必要があります。自動化された一括マイグレーションを使っては **MUST NOT** いけません。各顧客のデータレイアウト、クライアント構成、運用上の制約は異なります。[.com コンテナレジストリのマイグレーション](https://gitlab.com/groups/gitlab-org/-/work_items/5523)は、大規模な自動オンラインマイグレーションが成功し得ることを示しましたが、慎重にオーケストレーションされた一回限りのイベントとしてのみでした。組織マージは繰り返し発生するセルフサービス操作であり、別のアプローチが必要です。

検討中のメカニズムは 2 つあります（相互排他的ではありません）。

- **顧客主導マイグレーション:** 顧客は、GitLab が提供するツールを使って、自分のペースで namespace 間にリポジトリを移動します。
- **自動レイジーマイグレーション:** クライアントアクセス時にリポジトリを生き残った namespace に透過的に移行します。

MVP 後に AR が他のプロバイダーからアーティファクトをインポートするために提供するマイグレーション機能の一部を再利用する機会がある **MAY** かもしれません。データマイグレーションの内部詳細は本ドキュメントのスコープ外です。

ソース namespace が空になったら、それは **SHOULD** 廃止され、そのスラグは生き残った namespace のエイリアスに **MUST** なる必要があります。両スラグはリダイレクトなしで同じ namespace に解決します。顧客は、すべてのクライアントが生き残ったスラグの URL に移行した後、エイリアスを *永久に* 無効化できる **SHOULD** ようにすべきです。セキュリティ上の理由から、古いクライアント設定が別の顧客の namespace に解決するのを防ぐため、スラグは無期限に予約されたままで **MUST** あるべきです。

### マルチ namespace シナリオの予防

関連するが別の懸念は予防です。顧客が複数の AR 有効 Organization を持つ可能性をそもそも *減らす* 方法です。顧客が Organization を確認し AR を有効化する順序が重要です。

1. 顧客は TLG-A と TLG-B を持っています。
2. 各 TLG はそれぞれ独自の Organization に移管されます。
3. 顧客は両方の Organization で AR を有効化します。それぞれが独自の namespace を取得します。
4. すぐ後、2 つの Organization がマージします。生き残った Organization は今や 2 つの namespace を持っています。

[マージトリガー](#merge-trigger) と [namespace 統合](#namespace-consolidation) のセクションでは、これが発生したときに何が起こるかを扱います。ここでの懸念は、その状態に至る可能性を減らすことです。

.com 顧客のうち複数の TLG を持つのはわずか約 2.7% です（[ソース](https://gitlab.com/gitlab-org/gitlab/-/work_items/591904#note_3185140930)）が、この数字はおそらく問題を過小評価しています。なぜなら、すべての .com 顧客にわたって平均しているのに対し、エンタープライズ顧客（AR の主要採用ターゲット）は複数の TLG を持つより複雑な組織構造を持つ傾向があるためです。SM/Dedicated は影響を受けません（単一 Organization、ID=1）。リスクは AR 採用が最も重要な .com エンタープライズ顧客に集中します。

#### 予防ゲート {#preventive-gates}

| ゲート | レベル | オーナー | 詳細 |
| ----------------------------------------------- | -------- | ---------------------------------- | -------------------------------------------------------------- |
| **AR の前にレコンサイル** | SHOULD | Organizations | マルチ TLG 顧客は、AR を有効化する前に TLG を 1 つの Organization に統合できる **SHOULD** ようにすべきです。セルフサービスレコンサイル UI は、暫定的に FY27-Q2 にスケジュールされています。[POC があります](https://www.youtube.com/watch?v=HEfZzK4r9nQ)。ローンチ向けには、統合は確認メカニズム（[未解決の質問](#open-questions)）を通じて処理されます。 |
| **AR を顧客あたり 1 つの Organization に制限** | SHOULD | AR + Organizations + Fulfillment | ビリングアカウントあたり 1 つの Organization に AR 有効化を制限する製品上の判断。問題を完全に防ぎます。本当に別個の組織境界を必要とする顧客を苛立たせる可能性があります。 |
| **アーリーアダプター向けのカスタムマイグレーション** | WILL | Organizations | マルチ TLG のアーリーアダプター顧客は、AR ローンチ前に 1 つの Organization に統合されます。 |

## 未解決の質問 {#open-questions}

| 質問 | オーナー | コンテキスト |
| -------------------------------------------------------------- | -------------------- | -------------------------------------------------------------- |
| マルチ TLG 顧客向けのセルフサービスレコンサイル UI はいつ準備が整うか？ | Organizations | [POC があります](https://www.youtube.com/watch?v=HEfZzK4r9nQ)。暫定的に FY27-Q2 にスケジュールされています。ローンチ向けには、統合は手動確認プロセスを通じて処理されます。[予防ゲート](#preventive-gates) を参照してください。 |

## 提案する進め方

このセクションは、上記の要件を段階的なロールアウトに並べたものです。各フェーズは前のフェーズの上に構築されます。各項目は、前のセクションで定義された要件、制約、または根拠に遡ります。最初にそれらを読むことが不可欠です。

### フェーズ 0: ローンチ前

**目標:** 2026 年 6 月末

AR が顧客のオンボーディングを開始する前に、以下の項目に対処する必要があります。

| 項目 | オーナー |
| --- | --- |
| すべてのインストールタイプで Organizations が利用可能（SM/Dedicated はすでに org ID=1 を持つ） | Organizations |
| サイドパネル内の Organization オブジェクト、AR の UI アンカーを提供 | Organizations |
| Rails 上で確認状態をクエリ可能にし、呼び出し元が namespace 作成をゲートできるようにする | Organizations |
| Organization レベルのエンタイトルメントアンカー | Organizations + Fulfillment |
| Organization メンバーシップをクエリ可能 | Organizations |
| .com 上で TLG-から-未確認 Organization-への移管 | Organizations |
| シェルランディングページ作成 | Organizations |
| 管理者以外のユーザーが Organization にアクセス可能 | Organizations |
| 設定 UI パターン決定（管理エリア vs. Organization > Settings） | Organizations |
| ドキュメントとオンボーディングは、namespace 統合ツールが将来利用可能（TBD）になるまで AR を有効化した 2 つの Organization をマージできないことを伝えなければならない | AR + Organizations |
| AR 有効化をビリングアカウントあたり 1 つの Organization に制限するかどうかの決定、および「はい」の場合の強制ゲート | AR + Organizations + Fulfillment |
| マルチ TLG のアーリーアダプター顧客を AR 有効化前に 1 つの Organization に統合 | Organizations |

### フェーズ 1: ローンチ（MVP）

**目標:** Q2 FY27 末（2026 年 7 月）

AR は .com で顧客のオンボーディングを開始します。SM と Dedicated のオンボーディングは、統一セルフサービスオンボーディングワークフローが利用可能になるまで先送りされます（Q3/Q4 FY27）。

| 項目 | オーナー |
| --- | --- |
| SM/Dedicated: 顧客のアクションなしで購入時に Organization が自動確認される | Organizations |
| .com: 購入後に Organization が確認され AR namespace が作成される（メカニズムは [未解決の質問](#open-questions)） | Organizations + AR + Fulfillment |
| 両方の Organization が AR を持つ場合に組織マージをブロックし、マージブロッカーがこの制限を明示的に表示 | Organizations |

### フェーズ 2: namespace 統合

**目標:** TBD

2 つの AR namespace を 1 つに収束させるツールと UX を提供することで、マージブロッカーを解除します。

| 項目 | オーナー |
| --- | --- |
| マルチ namespace UX: namespace 一覧、namespace ごとの使用量、リポジトリ参照、マイグレーション制御 | AR |
| 顧客主導マイグレーション UX: リポジトリが顧客のペースで namespace 間に移動 | AR |
| AR がアンカータプル更新を実行できるマージイベントトリガー | Organizations |
| 廃止された namespace のスラグはエイリアスとなり、両スラグが生き残った namespace に解決 | AR |
| マルチ namespace UX と統合ツールが利用可能になったらフェーズ 1 のマージブロッカーを解除 | Organizations |

## 関連

**AR アーキテクチャ決定事項:**

- [Organizations as Anchor Point ADR](/handbook/engineering/architecture/design-documents/artifact_registry/decisions/001_organizations_as_anchor_point/)
- [Namespace Decoupling ADR](/handbook/engineering/architecture/design-documents/artifact_registry/decisions/022_namespace_decoupling/)

**Organizations アーキテクチャ決定事項:**

- [SM/Dedicated Single Organization ADR](/handbook/engineering/architecture/design-documents/organization/decisions/007_self_managed_dedicated_single_organization/)
- [Organization transfer support (database dictionary)](https://docs.gitlab.com/development/database/database_dictionary/#organization-transfer-support)

**インターフェース合意:**

- [AR/Infrastructure](https://docs.google.com/document/d/1GApsHWd3XaQ0Z40Dk7J_pM9sWqDDJlbD9tQuBiebHLI/edit)
- [AR/Auth](https://docs.google.com/document/d/1LeO8pmw8hSt5RBCfk_9ZmIXTkLJD9SOnKnzH3BOYkcE/edit)

**GitLab issue と epic:**

- [Non-Isolated Organizations: User Onboarding & AR Enablement](https://gitlab.com/groups/gitlab-org/-/work_items/21393)
- [Organization and TLG Reconciliation (Merge Tooling)](https://gitlab.com/groups/gitlab-org/-/work_items/21394)
- [CustomersDot: Service Onboarding and Slug Registration](https://gitlab.com/gitlab-org/gitlab/-/work_items/594637)
- [Licensing, Billing, and Provisioning](https://gitlab.com/gitlab-org/gitlab/-/work_items/591904)
- [Slug Validation Rules and Reservation Policy](https://gitlab.com/gitlab-org/gitlab/-/work_items/593368)
- [User-facing Name for Namespace Entity](https://gitlab.com/gitlab-org/gitlab/-/work_items/593366)

**主要なコメント:**

- [Q2 descoped onboarding summary](https://gitlab.com/groups/gitlab-org/-/work_items/21393#note_3218405112) (2026-04-02)
- [TLGs vs Organizations clarification](https://gitlab.com/groups/gitlab-org/-/work_items/21393#note_3215000014) (2026-04-01)

**その他の参考資料:**

- [Organizations: MVP Launch Requirements meeting notes](https://docs.google.com/document/d/1MGC_YTYPD1qfs7k-aYcACTJzAFJQdFr-MTATU1cfZVA/edit) (2026-04-08)
- [CTO Module Review](https://docs.google.com/document/d/1xZ4B1iW4srffOViwHYFqVumnlUuBcp7ivN_Jk_UKj9c/edit)
- [CTO Review Notes](https://docs.google.com/document/d/1qkcOZYSHM_h9k9pYjHze2KHG5qZYMDeZ1UE4GZgD1jw/edit)
- [Onboarding and merging POC demo](https://www.youtube.com/watch?v=3n_kWMND6B4)
- [Reconciliation POC demo](https://www.youtube.com/watch?v=HEfZzK4r9nQ)
- [Organization sidebar POC demo](https://www.youtube.com/watch?v=beLvhq2yKJQ)
- [Organization Landing Page UX alignment notes](https://docs.google.com/document/d/1VxGKnpGjh_Q7P9qwlQIlRPzEkG94bjv-dfLkFex2SaI/edit?tab=t.0#heading=h.c5sl9vcfa76q)
- [Organization Landing Page and AR design (Figma)](https://www.figma.com/design/RXKqp5o48qTtLzuWLLukUR/Org-%3C%3E-AR-GA?node-id=169-10261)
- [Org/AR user flow design (Figma)](https://www.figma.com/board/4uenKEJdAdT2g7e5ROy91i/Org-%3C%3E-AR-user-flow?node-id=0-1)

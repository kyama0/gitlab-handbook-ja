---
title: "ワークアイテム"
status: accepted
creation-date: "2022-09-28"
authors: [ "@ntepluhina" ]
coach: "@ayufan"
approvers: [ "@gweaver" ]
owning-stage: "~devops::plan"
participating-stages: []
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/work_items/
upstream_sha: d5f4aa38819ae2b572eb32e0d967394d0361a975
translated_at: "2026-04-27T00:00:00Z"
translator: claude
stale: false
---


<div class="my-3 border-l-4 border-blue-500 bg-blue-50 px-4 py-3 rounded-r text-sm text-blue-800">
このページには今後予定されている製品・機能・機能性に関する情報が含まれています。ここに示す情報は参考目的のみです。購入・計画の決定にこの情報を使用しないでください。製品・機能・機能性の開発、リリース、タイミングは変更または延期される可能性があり、GitLab Inc. の独自の判断に委ねられています。
</div>

<div class="overflow-x-auto my-4">
<table class="w-full text-sm border-collapse">
<thead>
<tr class="bg-gray-100 text-left">
<th class="px-3 py-2 border border-gray-300">Status</th>
<th class="px-3 py-2 border border-gray-300">Authors</th>
<th class="px-3 py-2 border border-gray-300">Coach</th>
<th class="px-3 py-2 border border-gray-300">DRIs</th>
<th class="px-3 py-2 border border-gray-300">Owning Stage</th>
<th class="px-3 py-2 border border-gray-300">Created</th>
</tr>
</thead>
<tbody>
<tr>
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">accepted</span></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/ntepluhina" class="text-blue-600 hover:underline">@ntepluhina</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/ayufan" class="text-blue-600 hover:underline">@ayufan</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/gweaver" class="text-blue-600 hover:underline">@gweaver</a></td>
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">~devops::plan</span></td>
<td class="px-3 py-2 border border-gray-300">2022-09-28</td>
</tr>
</tbody>
</table>
</div>


このドキュメントは作成中です。いくつかの側面はまだ文書化されていませんが、将来追加する予定です。

## 概要

ワークアイテムは、Issue、要件、インシデントなど、製品全体でさまざまな種類の構築済みおよび計画済みエンティティをサポートするために作成された新しいアーキテクチャです。同じコア機能を共有しながら、これらのタイプを拡張およびカスタマイズしやすくします。

## 用語

ワークアイテムアーキテクチャのコンポーネントとプロパティを説明するために以下の用語を使用します。

### ワークアイテム

Issue、要件、テストケース、インシデント、タスクの基本タイプ（このリストは将来拡張される予定）。異なるワークアイテムは同じ基本プロパティのセットを持ちますが、[ウィジェット](#work-item-widgets)のリストは異なります。

### ワークアイテムタイプ

ワークアイテムのさまざまなカテゴリのための定義済みタイプのセット。データベースの `work_item_types` テーブル内で定義されます。

#### GitLab 製品内のワークアイテムタイプ

上記のデフォルトのワークアイテムタイプは本番データベースに存在しますが、各タイプをレガシー API からワークアイテム API に移行する過程にあるため、GitLab 製品の UI では使用されていない場合があります。レガシーアイテムが存在する場合、すべてのワークアイテムが保存されている issues テーブルにデータを移行し、すべての機能を包括する新しいウィジェットを構築する必要もあります。

| ワークアイテムタイプ                                                   | UI の状態      | UI での利用可能性                     | issues テーブルへのデータ移行が必要か | ドキュメント                                                                          |
| ---------------------------------------------------------------- | -------------- | ------------------------------------- | ------------------------------------------ | ------------------------------------------------------------------------------------ |
| [タスク](https://gitlab.com/groups/gitlab-org/-/epics/7103)        | 実装済み       | 完全に利用可能                        | いいえ                                     | [タスク](https://docs.gitlab.com/ee/user/tasks.html)                                  |
| [目標](https://gitlab.com/groups/gitlab-org/-/epics/9003)         | 実装済み       | フィーチャーフラグの後ろで完全に利用可能 | いいえ                                     | [目標](https://docs.gitlab.com/ee/user/okrs.html)                                    |
| [キーリザルト](https://gitlab.com/groups/gitlab-org/-/epics/9003) | 実装済み       | フィーチャーフラグの後ろで完全に利用可能 | いいえ                                     | [キーリザルト](https://docs.gitlab.com/ee/user/okrs.html)                            |
| [インシデント](https://gitlab.com/groups/gitlab-org/-/epics/9585) | 計画中         | -                                     | いいえ                                     | [インシデント](https://docs.gitlab.com/ee/operations/incident_management/incidents.html) |
| [テストケース](https://gitlab.com/groups/gitlab-org/-/epics/9923) | 計画中         | -                                     | いいえ                                     | [テストケース](https://docs.gitlab.com/ee/ci/test_cases/index.html)                   |
| [要件](https://gitlab.com/groups/gitlab-org/-/epics/9923)        | 計画中         | -                                     | いいえ                                     | [要件](https://docs.gitlab.com/ee/user/project/requirements/index.html)              |
| [Issue](https://gitlab.com/groups/gitlab-org/-/epics/10842)      | 開発中         | -                                     | いいえ                                     | [Issue](https://gitlab.com/groups/gitlab-org/-/epics/9584)                           |
| [エピック](https://gitlab.com/groups/gitlab-org/-/epics/9290)     | 開発中         | -                                     | はい、進行中                               | [エピック](https://gitlab.com/groups/gitlab-org/-/epics/9290)                        |
| [チケット](https://gitlab.com/gitlab-org/gitlab/-/issues/412055) | 計画中         | -                                     | いいえ                                     | [チケット](https://gitlab.com/groups/gitlab-org/-/epics/10419)                       |

#### ワークアイテムプロパティ

すべてのワークアイテムタイプには以下の共通プロパティがあります:

**注意:**
詳細については、[ワークアイテム](https://docs.gitlab.com/ee/api/graphql/reference/index.html#workitem)のフィールドも参照してください。

- `id` - 一意のワークアイテムグローバル識別子
- `iid` - 親ワークスペース（現在ワークスペースはプロジェクトのみ）に対するワークアイテムの内部 ID
- ワークアイテムタイプ
- ワークアイテムの変更時刻に関連するプロパティ: `createdAt`、`updatedAt`、`closedAt`
- タイトル文字列
- ワークアイテムの機密状態
- ワークアイテムの状態（オープンまたはクローズ）
- ロックバージョン（ワークアイテムが更新されるたびにインクリメント）
- リソースに対する現在のユーザーの権限
- [ワークアイテムウィジェット](#work-item-widgets)のリスト

### ワークアイテムウィジェット {#work-item-widgets}

すべてのワークアイテムタイプは同じ定義済みウィジェットのプールを共有し、特定のタイプでどのウィジェットがアクティブかによってカスタマイズされます。特定のワークアイテムタイプのウィジェットのリストは現在定義済みでカスタマイズできません。ただし、将来的にはユーザーが新しいワークアイテムタイプを作成し、そのウィジェットセットを定義できるようにする予定です。

新しいウィジェットの追加方法を含む、[ワークアイテムウィジェットに関する別のページ](https://docs.gitlab.com/development/work_items_widgets/)もあります。

### ウィジェットタイプ（更新中）

| ウィジェット  | 説明 | フィーチャーフラグ | 書き込み権限 | GraphQL サブスクリプションサポート |
|---|---|---|---|---|
| [WorkItemWidgetAssignees](https://docs.gitlab.com/ee/api/graphql/reference/index.html#workitemwidgetassignees) | ワークアイテムの担当者リスト | エピックワークアイテムタイプの場合 `work_items_beta`、それ以外は FF なし |`Guest`|Yes|
| [WorkItemWidgetAwardEmoji](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgetawardemoji) | ワークアイテムへの絵文字リアクション（アップボート/ダウンボートカウントのサポートを含む） | |誰でも閲覧可能|No|
| [WorkItemWidgetColor](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgetcolor) | ワークアイテムの色を設定。**注意:** 色はエピックでのみ利用可能。 | |`Reporter`|No|
| [WorkItemWidgetCurrentUserTodos](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgetcurrentusertodos) | ワークアイテムのユーザー Todo 状態 | |誰でも閲覧可能|No|
| [WorkItemWidgetDescription](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgetdescription) | ワークアイテムの説明（編集状態、タイムスタンプ、作成者のサポートを含む） | |`Reporter`|No|
| [WorkItemWidgetDesigns](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgetdesigns) | ワークアイテムのデザイン添付ファイル | |`Reporter`|No|
| [WorkItemWidgetDevelopment](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgetdevelopment) | ワークアイテムの関連ブランチとマージリクエストを表示 | |`Reporter`|No|
| [WorkItemWidgetHealthStatus](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgethealthstatus) | ワークアイテムのヘルスステータス割り当てサポート | |`Reporter`|No|
| [WorkItemWidgetHierarchy](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgethierarchy) | 子の存在を表すブール値のサポートを含むワークアイテムの階層。 | |`Guest`|No|
| [WorkItemWidgetIteration](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgetiteration) | ワークアイテムのイテレーション割り当てサポート | |`Reporter`|No|
| [WorkItemWidgetLabels](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgetlabels) | ワークアイテムに追加されたラベルのリスト（スコープ付きラベルがサポートされているかどうかのチェックを含む） | |`Reporter`|Yes|
| [WorkItemWidgetLinkedItems](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgetlinkeditems) | `relates_to`、`blocks`、`blocked_by` の関係タイプで、特定のワークアイテムに関連付けられたワークアイテムのリスト。ブロック状態、ブロック対象、ブロック中、関連のカウントのサポートを含む。 | |`Guest`|No|
| [WorkItemWidgetMilestone](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgetmilestone) | ワークアイテムのマイルストーン割り当てサポート | |`Reporter`|No|
| [WorkItemWidgetNotes](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgetnotes) | ワークアイテム内のディスカッションのリスト | |`Guest`|Yes|
| [WorkItemWidgetNotifications](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgetnotifications) | 現在のユーザーのワークアイテムの通知サブスクリプション状態 | |誰でも閲覧可能|No|
| [WorkItemWidgetParticipants](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgetparticipants) | ワークアイテムの参加者 | |誰でも閲覧可能|No|
| [WorkItemWidgetProgress](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgetprogress) | ワークアイテムの進捗値。**注意:** 進捗は現在 OKR のみで利用可能。 | `okrs_mvc` |`Reporter`|No|
| [WorkItemWidgetRequirementLegacy](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgetrequirementlegacy) | レガシー要件 | | |No|
| [WorkItemWidgetRolledupDates](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgetrolledupdates) | エピックワークアイテムの開始日と期限を設定し、子ワークアイテムから開始日と期限をロールアップする | |`Reporter`|No|
| [WorkItemWidgetStartAndDueDate](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgetstartandduedate) | ワークアイテムの開始日と期限を設定 | |`Reporter`|No|
| [WorkItemWidgetStatus](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgetstatus) | タイプが要件の場合のワークアイテムのステータス（`unverified`、`satisfied`、`failed` のステータスタイプが可能） | | |No|
| [WorkItemWidgetTestReports](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgettestreports) | ワークアイテムに関連するテストレポート | | | |
| [WorkItemWidgetTimeTracking](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgettimetracking) | ワークアイテムに費やした合計時間を追跡 | |`Reporter`|No|
| [WorkItemWidgetWeight](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgetweight) | ワークアイテムのウェイトを設定 | |`Reporter`|No|
| WorkItemWidgetLock | ワークアイテムのロック/ロック解除 | |`Reporter`|No|

#### ウィジェットの可用性（更新中）

| ウィジェット | エピック | Issue | タスク | 目標 | キーリザルト |
|---|---|---|---|---|---|
| [WorkItemWidgetAssignees](https://docs.gitlab.com/ee/api/graphql/reference/index.html#workitemwidgetassignees) | ✅ | ✔️  | ✅ | ✅ | ✅ |
| [WorkItemWidgetAwardEmoji](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgetawardemoji) | ✅ | ✔️ | ✅ | ✅ | ✅ |
| [WorkItemWidgetColor](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgetcolor) | ✅ | ❌ | ❌ | ❌ | ❌ |
| [WorkItemWidgetCurrentUserTodos](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgetcurrentusertodos) | ✅ | ✅ | ✅ | ✅ | ✅ |
| [WorkItemWidgetDescription](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgetdescription) | ✅ | ✅ | ✅ | ✅ | ✅ |
| [WorkItemWidgetDesigns](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgetdesigns) | ✔️ | ✅ | ❌ | ❌ | ❌ |
| [WorkItemWidgetDevelopment](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgetdevelopment) | ❌ | ✅ | ❌ | ❌ | ❌ |
| [WorkItemWidgetHealthStatus](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgethealthstatus) | ✅ | ✅ | ✅ | ✅ | ✅ |
| [WorkItemWidgetHierarchy](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgethierarchy) | ✅ | ✅ | ❌ | ✅ | ❌ |
| [WorkItemWidgetIteration](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgetiteration) | ❌ | ✅ | ✅ | ❌ | ❌ |
| [WorkItemWidgetLabels](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgetlabels) | ✅ | ✅ | ✅ | ✅ | ✅ |
| [WorkItemWidgetLinkedItems](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgetlinkeditems) | ✅ | ✅ | ✅ | ✅ | ✅ |
| [WorkItemWidgetMilestone](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgetmilestone) | ❌ | ✅ | ✅ | ✅ | ❌ |
| [WorkItemWidgetNotes](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgetnotes) | ✅ | ✅ | ✅ | ✅ | ✅ |
| [WorkItemWidgetNotifications](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgetnotifications) | ✅ | ✅ | ✅ | ✅ | ✅ |
| [WorkItemWidgetParticipants](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgetparticipants) | ✅ | ✅ | ✅ | ✅ | ✅ |
| [WorkItemWidgetProgress](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgetprogress) | ❌ | ❌ | ❌ | ✅ | ✅ |
| [WorkItemWidgetRequirementLegacy](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgetrequirementlegacy) | ❌ | ❌ | ❌ | ❌ | ❌ |
| [WorkItemWidgetRolledupDates](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgetrolledupdates) | ✅ | ❌ | ❌ | ❌ | ❌ |
| [WorkItemWidgetStartAndDueDate](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgetstartandduedate) | ❌ | ✅ | ✅ | ❌ | ✅ |
| [WorkItemWidgetStatus](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgetstatus) | ❓ | ❓ | ❓ | ❓ | ❓ |
| [WorkItemWidgetTestReports](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgettestreports) | ❌ | ❌ | ❌ | ❌ | ❌ |
| [WorkItemWidgetTimeTracking](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgettimetracking) | ✅ | ✅ | ✅ | ❌ | ❌ |
| [WorkItemWidgetWeight](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgetweight) | ❌ | ✅ | ✅ | ❌ | ❌ |

##### 凡例

- ✅ - ウィジェット利用可能
- ✔️ - ウィジェット利用可能予定
- ❌ - ウィジェット利用不可
- ❓ - ウィジェット検討中
- 🔍 - 代替ウィジェット計画中

### ワークアイテムの関係

ワークアイテムはさまざまな方法で他のワークアイテムに関連付けることができます:

- 親: 現在のワークアイテムに対する直接の先祖であり、その完了は現在のワークアイテムの完了に依存します。
- 子: 現在のワークアイテムの直接の子孫であり、このワークアイテムの完了に貢献します。
- ブロック対象: 現在のワークアイテムの完了を妨げるワークアイテム。
- ブロック中: 現在のワークアイテムによって完了がブロックされるワークアイテム。
- 関連: 現在のワークアイテムの主題に関連するワークアイテムですが、直接このワークアイテムの完了に貢献またはブロックするものではありません。

#### 階層

親子関係はワークアイテムの**階層**の基盤を形成します。各ワークアイテムタイプには、そのタイプの親または子になれるタイプの定義済みセットがあります。

タイプが拡張し、親アイテムが自分自身の親アイテムを持つようになると、階層機能は指数関数的に成長できます。

現在、以下の親子関係が許可されています:

| タイプ        | 親になれる対象 | 子になれる対象 |
|------------|------------------|------------------|
| エピック      | エピック          | エピック          |
| Issue       | タスク            | エピック          |
| タスク       | なし              | Issue            |
| 目標        | 目標              | 目標              |
| キーリザルト | なし              | 目標              |

### ワークアイテムビュー

グローバルワークアイテム `id` を識別子として使用して、あらゆるタイプのワークアイテムをレンダリングする新しいフロントエンドビュー。

### タスク

タスクは特別なワークアイテムタイプです。タスクは Issue に子アイテムとして追加でき、Issue ビューのモーダルに表示できます。

### フィーチャーフラグ

これは多数の可動部分を含む大きなプロジェクトであるため、利用可能なウィジェットのプロモーションを追跡するためにフィーチャーフラグが使用されています。以下の表は使用されているさまざまなフィーチャーフラグとそれらが利用可能なオーディエンスを示しています。

| フィーチャーフラグ名 | オーディエンス |
|---|---|
| `work_items` | デフォルトでオン |
| `work_items_beta` | `gitlab-org`、`gitlab-com` |
| `work_items_alpha` | `gitlab-org/plan-stage` |

#### コンテキストビューのフィーチャーフラグ

| フィーチャーフラグ名 | 制御エリア | 状態 |
|---|---|---|
| `work_items_alpha` | コンテキストビュー内の子アイテム  | `gitlab-org/plan-stage` で有効 |
| `epics_list_drawer` | エピックリスト、エピックボード  | `gitlab-org/plan-stage` で有効 |
| `issues_list_drawer` | Issue リスト、Issue ボード  | 無効 |

#### Issue ワークアイテムビューのフィーチャーフラグ

| フィーチャーフラグ名 | 制御エリア | 状態 |
|---|---|---|
| `work_item_view_for_issues` | Issue のワークアイテムビューを有効にする | デフォルトでオン |
| `work_items_view_preference` | ヘッダーセクションで Issue ワークアイテムビューの有効/無効を切り替えるトグルを表示 | デフォルトでオン |

エピックワークアイテム固有のフィーチャーフラグについては、[エピックワークアイテム移行エピック](https://gitlab.com/groups/gitlab-org/-/epics/11777#feature-flags)を参照してください。

## 動機

ワークアイテムの主な目標は、あらゆる業界の知識労働者にとって最も人気の高いコラボレーションツールとなるための計画ツールセットを強化することです。

- Issue、インシデント、エピック、テストケースなどの類似アイテムを標準プラットフォームに集約して、メンテナンスを簡素化し、エクスペリエンスの一貫性を高める
- GitLab 固有のニュアンスを学ばずにユーザーが計画できるように、共通の計画概念のファーストクラスサポートを可能にして複雑さを軽減する

## 目標

### スケーラビリティ

現在、Issue、エピック、マージリクエストなどのさまざまなエンティティは多くの類似機能を共有していますが、これらの機能はエンティティタイプごとに個別に実装されています。これにより、新機能の実装や既存機能のリファクタリングが困難になります。例えば、Issue とインシデントに新機能を追加する計画がある場合、Issue タイプとインシデントタイプで個別に実装する必要があります。ワークアイテムでは、新機能はすべての既存タイプのウィジェットとして実装されるため、アーキテクチャがよりスケーラブルになります。

### 柔軟性

既存の実装では、issuable、マージリクエスト、エピックなどに対して厳格な構造があります。この構造はバックエンドとフロントエンドの両方で定義されているため、変更には協調的な取り組みが必要です。また、フラグのセットを導入してあらゆる既存機能を有効/無効にすることなく、この構造をユーザーがカスタマイズ可能にすることも非常に困難です。ワークアイテムアーキテクチャにより、フロントエンドはワークアイテムウィジェットを柔軟にレンダリングできます: ワークアイテムウィジェットに存在するものはすべてページにレンダリングされます。これにより、変更を迅速に行え、構造がより柔軟になります。例えば、インシデントページでラベルの表示を停止したい場合、バックエンドのインシデントワークアイテムタイプからラベルウィジェットを削除します。また、将来的にはユーザーがカスタムワークアイテムタイプで表示するウィジェットのセットを定義できるようになります。

### 一貫したエクスペリエンス

異なるエンティティで類似機能の一貫した動作を実現しようとしても、実装に違いが生じています。例えば、GraphQL API を通じてマージリクエストのラベルを更新するには専用の `setMergeRequestLabels` ミューテーションを使用しますが、Issue の場合はより粗粒度な `updateIssue` を呼び出します。これにより、フロントエンドと外部 API ユーザーの両方に一貫性のないエクスペリエンスが生じます。結果として、エピック、Issue、要件など、すべてが類似しているが共通のインタラクションに微妙な違いがあり、ユーザーはそれぞれの動作の複雑なメンタルモデルを持つ必要があります。

ワークアイテムアーキテクチャは、すべてのタイプのすべての機能を一貫して、ワークアイテムウィジェットとして実装することを目的として設計されています。

## 解決すべき高レベルのアーキテクチャ問題

- エピックをワークアイテムタイプに移行するためにグループとプロジェクトの統合をどのようにバイパスできるか
- 特定のワークアイテムタイプの親子関係を扱う: エピック > Issue > タスク、および同じワークアイテムタイプへ: Issue > Issue
- [カスタムワークアイテムタイプとカスタムウィジェットの実装](https://gitlab.com/gitlab-org/gitlab/-/issues/335110)

### リンク

- [ワークアイテムイニシアティブエピック](https://gitlab.com/groups/gitlab-org/-/epics/6033)
- [タスクロードマップ](https://gitlab.com/groups/gitlab-org/-/epics/7103?_gl=1*zqatx*_ga*NzUyOTc3NTc1LjE2NjEzNDcwMDQ.*_ga_ENFH3X7M5Y*MTY2MjU0MDQ0MC43LjEuMTY2MjU0MDc2MC4wLjAuMA..)
- [ワークアイテム「ビジョン」プロトタイプ](https://gitlab.com/gitlab-org/gitlab/-/issues/368607)
- [ワークアイテムディスカッション](https://gitlab.com/groups/gitlab-org/-/epics/7060)

---
title: 'SLA ポリシー'
description: 'Zendesk SLA ポリシーの運用ドキュメントページ'
upstream_path: "/handbook/eta/css/zendesk/sla-policies/"
upstream_sha: "1312dadbdf7381446077faefcfae17ba323692b6"
lastmod: "2026-07-14T15:22:25-05:00"
translated_at: "2026-07-19T08:09:48+09:00"
translator: codex
stale: false
---

このガイドでは、GitLab で Zendesk SLA ポリシーを作成、編集、管理する方法を説明します。管理者は[管理者タスク](#administrator-tasks)セクションを確認してください。

{{% alert title="技術的な詳細" color="primary" %}}

- デプロイタイプ: `Standard`
- 同期リポジトリ
  - [Zendesk Global](https://gitlab.com/gitlab-support-readiness/zendesk-global/sla-policies)
  - [Zendesk US Government](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/sla-policies)
- `CustSuppOps Zendesk Test Suite Generator` が有効

{{% /alert %}}
{{% alert title="Zendesk はサービスレベル契約と呼びますが、私たちはそう呼びません" color="warning" %}}

ここに表示されるものはすべてサービスレベル契約、すなわち SLA というタイトルですが、その多くは代わりに内部サービスレベル目標、すなわち SLO です。Zendesk がこの設定をサービスレベル契約、すなわち SLA と呼ぶため、このタイトルになっています。ここで詳述するものはいずれも実際の法的なサービスレベル契約ではありません。

{{% /alert %}}

## SLA ポリシーを理解する

### SLA ポリシーとは

[Zendesk](https://support.zendesk.com/hc/en-us/articles/4408829459866-Defining-SLA-policies)によると:

> サービスレベル契約、すなわち SLA は、サポートチームが顧客に提供する応答時間と解決時間について合意した指標です。サービスレベルに基づいてサポートを提供することで、測定可能で予測可能なサービスを提供できます。また、問題が発生したときの可視性も向上します。

### 対象となるメトリックポリシー

| ポリシー名 | API 名 | 意味 |
|-------------|----------|---------------|
| 初回返信時間 | `first_reply_time` | 最初の顧客コメントからエージェントによる最初の公開コメントまでの時間で、分単位で表示されます。 |
| 次回返信時間 | `next_reply_time` | 最も古く、未応答の顧客コメントからエージェントによる次の公開コメントまでの時間で、分単位で表示されます。 |
| 一時停止可能な更新 | `pausable_update_time` | エージェントによる各公開コメント間の時間で、分単位で表示されます。SLA は Pending で一時停止します。 |
| 定期的な更新 | `periodic_update_time` | エージェントによる各公開コメント間の時間で、分単位で表示されます。 |
| エージェント作業時間 | `agent_work_time` | New および Open ステータスで費やされた合計時間です。SLA は Pending および On-hold で一時停止します。 |
| リクエスター待機時間 | `requester_wait_time` | チケットが New、Open、On-hold ステータスで費やす時間です。 |
| 解決までの合計時間 | `total_resolution_time` | すべてのステータスを含め、チケットの解決にかかる最大時間です。 |

これらのうち、最も一般的に使用するのは初回返信時間（FRT）と次回返信時間（NRT）です。

### SLA ポリシーはフィルターロジックを使用する

SLA ポリシーはフィルターロジックを使用します。

- `all`: 配列内のすべての条件が true である必要があります（AND ロジック）
- `any`: 配列内の少なくとも 1 つの条件が true である必要があります（OR ロジック）
- 1 つのセットのみ、または両方のセットを使用できます（ただし、少なくとも 1 つのセットを使用する必要があります）

### SLA ポリシーを管理する方法

Zendesk は UI を通じて SLA ポリシーを管理する完全な方法を提供していますが、私たちはよりバージョン管理された方法を採用しています。これにより、定められたレビュー プロセスや、必要に応じたロールバック機能などを利用できます。

そのため、Zendesk の内部フォーム、同期リポジトリ、管理対象コンテンツリポジトリを利用しています。

#### 人間が読める値への置換

{{% alert title="注記" color="primary" %}}

- YAML ファイルを通じて SLA ポリシーを作成または編集する `administrators` にのみ適用されます

{{% /alert %}}

現在、同期リポジトリはさまざまな項目を人間が読める項目から "Zendesk" の同等項目に置換できます。これには次のものが含まれます。

| 人間が読める項目 | Zendesk フィールド項目 | フィルターの場所 | 注記 |
|---------------------|--------------------|-----------------|-------|
| `'Brand: XXX'` | `brand_id` | `value` | `XXX` をブランドの `name` に置き換えます |
| `'Field: XXX'` | `custom_fields_xxx` | `field` | `XXX` をチケットフィールドの `title` に置き換えます |
| `'Group: XXX'` | `group_id` | `value` | `XXX` をグループの `name` に置き換えます |
| `'XXX'` | `role` | `value` | `XXX` をロールタイプの `name` またはリクエスターのメールアドレスに置き換えます |
| `'Form: XXX'` | `ticket_form_id` | `value` | `XXX` をチケットフォームの `name` に置き換えます |
| `'Schedule: XXX'` | `set_schedule` | `value` | `XXX` をスケジュールの `name` に置き換えます |
| `'Schedule: XXX'` | `schedule_id` | `value` | `XXX` をスケジュールの `name` に置き換えます |
| `'XXX'` | `organization_id` | `value` | `XXX` を組織の `salesforce_id` 属性に置き換えます |
| `'XXX'` | `assignee_id` | `value` | `XXX` をエージェントのメールアドレスに置き換えます |
| `'XXX'` | `satisfaction_reason_code` | `value` | `XXX` を満足理由の `name` に置き換えます |
| `'XXX'` | `via_id` | `value` | `XXX` を経由タイプの `name` に置き換えます |
| `'XXX'` | `requester_role` | `value` | `XXX` をリクエスターのロールタイプの `name` に置き換えます |

たとえば、チケットのフォームが `SaaS` フォームではないことを確認するフィルターが必要な場合は、次のようにします。

```yaml
- field: 'ticket_form_id'
  operator: 'is_not'
  value: 'Form: SaaS'
```

## 非管理者として SLA ポリシーを作成する

SLA ポリシーの作成については、[Feature Request issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature)を作成してください（Customer Support Systems チームによる手動対応が必要になるためです）。

## 非管理者として SLA ポリシーを編集する

SLA ポリシーの変更については、[Feature Request issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature)を作成してください（Customer Support Systems チームによる手動対応が必要になるためです）。

## 非管理者として SLA ポリシーを削除する

SLA ポリシーの削除については、[Feature Request issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature)を作成してください（Customer Support Systems チームによる手動対応が必要になるためです）。

## 管理者タスク

{{% alert title="注記" color="primary" %}}

- このセクション内のすべての項目には、Zendesk への `Administrator` レベルのアクセスが必要です。

{{% /alert %}}

### Zendesk で SLA ポリシーを表示する

Zendesk で SLA ポリシーのリストを表示するには、次のようにします。

1. Zendesk インスタンスの管理ダッシュボードに移動します
   - [Zendesk Global（本番）](https://gitlab.zendesk.com/admin/home)
   - [Zendesk Global（サンドボックス）](https://gitlab1707170878.zendesk.com/admin/home)
   - [Zendesk US Government（本番）](https://gitlab-federal-support.zendesk.com/admin/home)
   - [Zendesk US Government（サンドボックス）](https://gitlabfederalsupport1585318082.zendesk.com/admin/home)
1. `Objects and rules > Business rules > Service level agreements` に移動します
   - [Zendesk Global](https://gitlab.zendesk.com/admin/objects-rules/rules/slas)
   - [Zendesk Global（サンドボックス）](https://gitlab1707170878.zendesk.com/admin/objects-rules/rules/slas)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/objects-rules/rules/slas)
   - [Zendesk US Government（サンドボックス）](https://gitlabfederalsupport1585318082.zendesk.com/admin/objects-rules/rules/slas)

SLA ポリシーの詳細を確認する必要がある場合は、SLA ポリシーの名前をクリックします。

### 位置に関する注記

チケットに適用される SLA ポリシーは、上から下へ読み取ったときに最初に _一致する_ SLA ポリシー（フィルター経由）によって決まります（順序は position 値によって決まります）。そのため、同じチケットにフィルターできる SLA ポリシーが複数ある場合は、位置に細心の注意を払う必要があります。

### SLA ポリシーを作成する

{{% alert title="警告" color="warning" %}}

- これは、対応するリクエスト Issue（Feature Request、Administrative、Bug など）がある場合にのみ実行してください。存在しない場合は、まず 1 つ作成し、作業する前に標準プロセスを通過させる必要があります。
- これはチケットとメトリクスに重大な下流への影響を与える可能性があります。実行する際は注意してください。

{{% /alert %}}

SLA ポリシーを作成するには、同期リポジトリで MR を作成する必要があります。行う正確な変更はリクエスト自体によって異なります。使用できる開始テンプレートは次のとおりです。

```yaml
---
title: 'Your title here'
previous_title: 'Your title here'
description: 'Your description here'
position: 1 # Integer representing SLA policy position
filter:
  all:
  - field: 'the_action_to_perform'
    operator: 'the_operator_to_use'
    value: 'the_value_to_use'
  any:
  - field: 'the_action_to_perform'
    operator: 'the_operator_to_use'
    value: 'the_value_to_use'
policy_metrics:
- priority: 'low'
  metric: 'metric_policy_to_use'
  target: 123 # Number of minutes
  business_hours: true # Set to true to use the ticket's schedule, set to false to use 24/7
- priority: 'normal'
  metric: 'metric_policy_to_use'
  target: 123 # Number of minutes
  business_hours: true # Set to true to use the ticket's schedule, set to false to use 24/7
- priority: 'high'
  metric: 'metric_policy_to_use'
  target: 123 # Number of minutes
  business_hours: true # Set to true to use the ticket's schedule, set to false to use 24/7
- priority: 'urgent'
  metric: 'metric_policy_to_use'
  target: 123 # Number of minutes
  business_hours: true # Set to true to use the ticket's schedule, set to false to use 24/7
```

同僚が MR をレビューして承認した後、MR をマージできます。次のデプロイが発生すると、Zendesk に同期されます。

### SLA ポリシーを編集する

{{% alert title="警告" color="warning" %}}

- これは、対応するリクエスト Issue（Feature Request、Administrative、Bug など）がある場合にのみ実行してください。存在しない場合は、まず 1 つ作成し、作業する前に標準プロセスを通過させる必要があります。
- これはチケットとメトリクスに重大な下流への影響を与える可能性があります。実行する際は注意してください。

{{% /alert %}}

SLA ポリシーを編集するには、同期リポジトリで MR を作成する必要があります。行う正確な変更はリクエスト自体によって異なります。

同僚が MR をレビューして承認した後、MR をマージできます。次のデプロイが発生すると、Zendesk に同期されます。

#### SLA ポリシーのタイトルを変更する

SLA ポリシーのタイトルを変更する必要がある場合は、現在の値を `previous_title` 属性にコピーしてから、`title` 属性を変更します。これにより、同期は更新対象の SLA ポリシーを引き続き特定できます。

### SLA ポリシーを削除する

{{% alert title="警告" color="warning" %}}

- これは、対応するリクエスト Issue（Feature Request、Administrative、Bug など）がある場合にのみ実行してください。存在しない場合は、まず 1 つ作成し、作業する前に標準プロセスを通過させる必要があります。
- これはチケットとメトリクスに重大な下流への影響を与える可能性があります。実行する際は注意してください。

{{% /alert %}}

同期リポジトリは削除を実行しないため、SLA ポリシーを削除するには 2 つのアクションを実行する必要があります。

まず、同期リポジトリから対応するファイルを削除する必要があります。同僚が MR をレビューして承認した後、MR をマージできます。

それが完了した後、Zendesk 自体から削除する必要があります。

Zendesk から SLA ポリシーを削除するには、次のようにします。

1. Zendesk インスタンスの管理ダッシュボードに移動します
   - [Zendesk Global（本番）](https://gitlab.zendesk.com/admin/home)
   - [Zendesk Global（サンドボックス）](https://gitlab1707170878.zendesk.com/admin/home)
   - [Zendesk US Government（本番）](https://gitlab-federal-support.zendesk.com/admin/home)
   - [Zendesk US Government（サンドボックス）](https://gitlabfederalsupport1585318082.zendesk.com/admin/home)
1. `Objects and rules > Business rules > Service level agreements` に移動します
   - [Zendesk Global](https://gitlab.zendesk.com/admin/objects-rules/rules/slas)
   - [Zendesk Global（サンドボックス）](https://gitlab1707170878.zendesk.com/admin/objects-rules/rules/slas)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/objects-rules/rules/slas)
   - [Zendesk US Government（サンドボックス）](https://gitlabfederalsupport1585318082.zendesk.com/admin/objects-rules/rules/slas)
1. 削除する SLA ポリシーの右側にある縦の 3 点をクリックします
1. `Delete` をクリックします
1. 削除を確認するには `Continue deletion` をクリックします

### 例外デプロイを実行する

SLA ポリシーの例外デプロイを実行するには、対象の SLA ポリシー同期プロジェクトに移動し、スケジュール済みパイプラインのページに移動して、同期項目の再生ボタンをクリックします。これにより SLA ポリシーの同期ジョブがトリガーされます。

## 一般的な問題とトラブルシューティング

### マージ後に SLA ポリシーの変更が表示されない

SLA ポリシーは `Standard` デプロイタイプに従うため、通常のデプロイサイクル中（または例外デプロイが実行された場合）にのみデプロイされます

### チケットの SLA ポリシーの更新が表示されない

[Zendesk](https://support.zendesk.com/hc/en-us/articles/5600997516058-About-SLA-policies-and-how-they-work#topic_pz5_zzv_rr)によると:

> チケットが作成または更新されると、Zendesk インスタンスに設定されているすべてのトリガーを通過します。トリガーが適用された後、そのチケットは SLA システムを通過します。

つまり、チケットの SLA ポリシーを更新するには、チケット自体を更新する必要があります。そのため、チケットの SLA ポリシーの変更を確認するには、あなた（または顧客）がチケットを更新する必要があります。

### SLA ポリシーが更新された後、チケットのタイマーが変わらなかった

[Zendesk](https://support.zendesk.com/hc/en-us/articles/5600997516058-About-SLA-policies-and-how-they-work#topic_pz5_zzv_rr)によると:

> そのチケットが最後に更新されて以降に、新しい、より制限的なポリシーを作成した場合、チケットは以前には存在しなかった新しいポリシーを受け取る可能性があります。または、すでに適用されているポリシーのターゲットを更新した可能性もあります。どちらの場合も、優先度やスケジュールの変更など、SLA に影響するチケットの更新後に、チケットは新しい情報を受け取ります。

そのため、タイマーが更新されることを確認するには、チケットの優先度を変更してから元に戻す必要がある場合があります。

### SLA ポリシーのターゲットが更新されても違反イベントが更新されなかった

[Zendesk](https://support.zendesk.com/hc/en-us/articles/5600997516058-About-SLA-policies-and-how-they-work#topic_pz5_zzv_rr)によると:

> すでに違反している SLA ターゲットを適用または変更した場合、違反は更新時点で記録されます。SLA は違反イベントを過去にさかのぼって記録しません。

### チケットから SLA タイマーが消えた

SLA タイマーがチケットに表示されなくなる一般的なケースは、次のいずれかです。

- チケットに SLA ポリシーがない
- チケットの最後の公開コメントがエージェントによって作成された
- チケットのステータスが solved である

チケットのステータスが solved の場合、ステータスを他のものに変更して、チケットの SLA タイマーを復元できます（表示されるべき場合）。

チケットの最後の公開コメントがエージェントによって作成された場合、チケットに SLA タイマーが表示される前に、エンドユーザーがチケットにコメントする必要があります。

どちらのケースも発生していない場合、チケットに SLA ポリシーがない可能性があります。さらに調査するには、Slack を通じて Customer Support Systems チームに連絡してください。

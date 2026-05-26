---
title: 'SLA ポリシー'
description: 'Zendesk SLA ポリシーに関するオペレーションドキュメントページ'
upstream_path: /handbook/security/customer-support-operations/zendesk/sla-policies/
upstream_sha: 7405b4b85e7e4a5d61d4eff68e49976463e3dada
lastmod: "2026-05-26T12:05:00-05:00"
translated_at: "2026-05-26T18:30:00Z"
translator: claude
stale: false
---

このガイドでは、GitLab における Zendesk SLA ポリシーの作成・編集・管理方法を説明します。管理者は [管理者タスク](#administrator-tasks) のセクションを確認してください。

{{% alert title="Technical Details" color="primary" %}}

- デプロイタイプ: `Standard`
- 同期リポジトリ
  - [Zendesk Global](https://gitlab.com/gitlab-support-readiness/zendesk-global/sla-policies)
  - [Zendesk US Government](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/sla-policies)
- `CustSuppOps Zendesk Test Suite Generator` 有効

{{% /alert %}}
{{% alert title="Zendesk はこれをサービスレベルアグリーメントと呼びますが、私たちは呼びません" color="warning" %}}

ここに表示されているものはすべてサービスレベルアグリーメント（SLA）と題されていますが、その多くは実際には内部的なサービスレベル目標（SLO）です。サービスレベルアグリーメント（SLA）と題されているのは、それが Zendesk における設定名だからです。ここに詳述されている内容は、いずれも実際の法的なサービスレベルアグリーメントではありません。

{{% /alert %}}

## Understanding SLA policies

### What are SLA policies

[Zendesk](https://support.zendesk.com/hc/en-us/articles/4408829459866-Defining-SLA-policies) によると:

> サービスレベルアグリーメント（SLA）とは、サポートチームが顧客に提供する応答時間および解決時間について合意された指標です。サービスレベルに基づくサポートを提供することで、測定可能で予測可能なサービスを確実に提供できます。また、問題が発生した際の可視性も高まります。

### Metric policies involved

| ポリシー名 | API 名 | 意味 |
|-------------|----------|---------------|
| First reply time | `first_reply_time` | 最初の顧客コメントから、エージェントによる最初の公開コメントまでの時間（分単位で表示）。 |
| Next reply time | `next_reply_time` | 最も古い未回答の顧客コメントから、エージェントによる次の公開コメントまでの時間（分単位で表示）。 |
| Pausable update | `pausable_update_time` | エージェントによる各公開コメント間の時間（分単位で表示）。SLA は Pending で一時停止します。 |
| Periodic update | `periodic_update_time` | エージェントによる各公開コメント間の時間（分単位で表示）。 |
| Agent work time | `agent_work_time` | New および Open ステータスで費やされた合計時間。SLA は Pending および On-hold で一時停止します。 |
| Requester wait time | `requester_wait_time` | チケットが New、Open、On-hold ステータスで費やす時間。 |
| Total resolution time | `total_resolution_time` | すべてのステータスを含む、チケットの解決にかかるべき最大時間。 |

このうち、私たちが最も一般的に使用するのは First reply time（FRT）と Next reply time（NRT）です。

### SLA policies use filter logic

SLA ポリシーはフィルターロジックを使用します:

- `all`: 配列内のすべての条件が真である必要があります（AND ロジック）
- `any`: 配列内の少なくとも 1 つの条件が真である必要があります（OR ロジック）
- いずれか一方のセットのみ、または両方のセットを使用できます（ただし、少なくとも 1 つのセットを使用する必要があります）

### How we manage SLA policies

Zendesk は UI 経由で SLA ポリシーを完全に管理する方法を提供していますが、私たちはよりバージョン管理されたメソドロジーを採用しています。これにより、設定されたレビュープロセスや、必要に応じたロールバックの実行などが可能になります。

そのため、私たちは Zendesk の内部フォーム、同期リポジトリ、管理対象コンテンツリポジトリを活用しています。

#### Human readable replacements

{{% alert title="Note" color="primary" %}}

- YAML ファイル経由で SLA ポリシーを作成・編集する `administrators` にのみ適用されます

{{% /alert %}}

現在、同期リポジトリは、さまざまな項目を人間が読める形式から「Zendesk」の同等の項目へ置換できます。これには以下が含まれます:

| 人間が読める項目 | Zendesk フィールド項目 | フィルターの位置 | 備考 |
|---------------------|--------------------|-----------------|-------|
| `'Brand: XXX'` | `brand_id` | `value` | `XXX` をブランドの `name` に置き換える |
| `'Field: XXX'` | `custom_fields_xxx` | `field` | `XXX` をチケットフィールドの `title` に置き換える |
| `'Group: XXX'` | `group_id` | `value` | `XXX` をグループの `name` に置き換える |
| `'XXX'` | `role` | `value` | `XXX` をロールタイプの `name`、またはリクエスターのメールアドレスに置き換える |
| `'Form: XXX'` | `ticket_form_id` | `value` | `XXX` をチケットフォームの `name` に置き換える |
| `'Schedule: XXX'` | `set_schedule` | `value` | `XXX` をスケジュールの `name` に置き換える |
| `'Schedule: XXX'` | `schedule_id` | `value` | `XXX` をスケジュールの `name` に置き換える |
| `'XXX'` | `organization_id` | `value` | `XXX` を組織の `salesforce_id` 属性に置き換える |
| `'XXX'` | `assignee_id` | `value` | `XXX` をエージェントのメールアドレスに置き換える |
| `'XXX'` | `satisfaction_reason_code` | `value` | `XXX` を満足度理由の `name` に置き換える |
| `'XXX'` | `via_id` | `value` | `XXX` を経由タイプの `name` に置き換える |
| `'XXX'` | `requester_role` | `value` | `XXX` をリクエスターロールタイプの `name` に置き換える |

例として、チケットのフォームが `SaaS` フォームでないかどうかを確認するフィルターが必要な場合は、次のようにします:

```yaml
- field: 'ticket_form_id'
  operator: 'is_not'
  value: 'Form: SaaS'
```

## Creating SLA policies as a non-admin

SLA ポリシーの作成については、[Feature Request issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature) を作成してください（Customer Support Operations チームによる手動対応が必要となるため）。

## Editing SLA policies as a non-admin

SLA ポリシーの変更については、[Feature Request issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature) を作成してください（Customer Support Operations チームによる手動対応が必要となるため）。

## Deleting SLA policies as a non-admin

SLA ポリシーの削除については、[Feature Request issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature) を作成してください（Customer Support Operations チームによる手動対応が必要となるため）。

## Administrator tasks

{{% alert title="Note" color="primary" %}}

- このセクションのすべての項目には、Zendesk への `Administrator` レベルのアクセス権が必要です。

{{% /alert %}}

### Viewing SLA policies in Zendesk

Zendesk で SLA ポリシーの一覧を表示するには:

1. 該当する Zendesk インスタンスの管理ダッシュボードに移動します
   - [Zendesk Global (production)](https://gitlab.zendesk.com/admin/home)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/home)
   - [Zendesk US Government (production)](https://gitlab-federal-support.zendesk.com/admin/home)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/home)
1. `Objects and rules > Business rules > Service level agreements` に移動します
   - [Zendesk Global](https://gitlab.zendesk.com/admin/objects-rules/rules/slas)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/objects-rules/rules/slas)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/objects-rules/rules/slas)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/objects-rules/rules/slas)

SLA ポリシーに関する詳細を確認する必要がある場合は、SLA ポリシーの名前をクリックできます。

### A note about positioning

チケットに適用される SLA ポリシーは、（フィルター経由で）上から下へ読まれる最初に _一致する_ SLA ポリシーによって決定されます（順序は position の値によって決まります）。そのため、同じチケットにフィルターで一致しうる複数の SLA ポリシーがある場合、position の設定には十分注意する必要があります。

### Creating an SLA policy

{{% alert title="Warning" color="warning" %}}

- これは、対応するリクエスト issue（Feature Request、Administrative、Bug など）がある場合にのみ行ってください。存在しない場合は、まず作成し、作業前に標準プロセスを通してください。
- これはチケットやメトリクスに対して多くの深刻な下流の影響を及ぼす可能性があります。実施する際は注意してください。

{{% /alert %}}

SLA ポリシーを作成するには、同期リポジトリで MR を作成する必要があります。具体的な変更内容はリクエスト自体によって異なります。使用できる開始テンプレートは次のとおりです:

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

ピアレビューで承認された後、MR をマージできます。次のデプロイが発生したときに、Zendesk へ同期されます。

### Editing an SLA policy

{{% alert title="Warning" color="warning" %}}

- これは、対応するリクエスト issue（Feature Request、Administrative、Bug など）がある場合にのみ行ってください。存在しない場合は、まず作成し、作業前に標準プロセスを通してください。
- これはチケットやメトリクスに対して多くの深刻な下流の影響を及ぼす可能性があります。実施する際は注意してください。

{{% /alert %}}

SLA ポリシーを編集するには、同期リポジトリで MR を作成する必要があります。具体的な変更内容はリクエスト自体によって異なります。

ピアレビューで承認された後、MR をマージできます。次のデプロイが発生したときに、Zendesk へ同期されます。

#### Changing the title of an SLA policy

SLA ポリシーのタイトルを変更する必要がある場合は、現在の値を `previous_title` 属性にコピーしてから `title` 属性を変更します。これにより、同期処理が更新対象の SLA ポリシーを引き続き特定できるようになります。

### Deleting an SLA policy

{{% alert title="Warning" color="warning" %}}

- これは、対応するリクエスト issue（Feature Request、Administrative、Bug など）がある場合にのみ行ってください。存在しない場合は、まず作成し、作業前に標準プロセスを通してください。
- これはチケットやメトリクスに対して多くの深刻な下流の影響を及ぼす可能性があります。実施する際は注意してください。

{{% /alert %}}

同期リポジトリは削除を実行しないため、SLA ポリシーを削除するには 2 つのアクションを行う必要があります。

まず、同期リポジトリから対応するファイルを削除する必要があります。ピアレビューで承認された後、MR をマージできます。

それが完了したら、次に Zendesk 自体からそれを削除する必要があります。

Zendesk から SLA ポリシーを削除するには:

1. 該当する Zendesk インスタンスの管理ダッシュボードに移動します
   - [Zendesk Global (production)](https://gitlab.zendesk.com/admin/home)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/home)
   - [Zendesk US Government (production)](https://gitlab-federal-support.zendesk.com/admin/home)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/home)
1. `Objects and rules > Business rules > Service level agreements` に移動します
   - [Zendesk Global](https://gitlab.zendesk.com/admin/objects-rules/rules/slas)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/objects-rules/rules/slas)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/objects-rules/rules/slas)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/objects-rules/rules/slas)
1. 削除したい SLA ポリシーの右側にある縦に並んだ 3 つの点をクリックします
1. `Delete` をクリックします
1. `Continue deletion` をクリックして削除を確定します

### Performing an exception deployment

SLA ポリシーの例外デプロイを実行するには、該当する SLA ポリシーの同期プロジェクトに移動し、スケジュールされたパイプラインのページに移動して、同期項目の再生ボタンをクリックします。これにより、SLA ポリシーの同期ジョブがトリガーされます。

## Common issues and troubleshooting

### Not seeing SLA policy changes after a merge

SLA ポリシーは `Standard` デプロイタイプに従うため、通常のデプロイサイクル中（または例外デプロイが実行されたとき）にのみデプロイされます。

### Not seeing an update to the SLA policy on a ticket

[Zendesk](https://support.zendesk.com/hc/en-us/articles/5600997516058-About-SLA-policies-and-how-they-work#topic_pz5_zzv_rr) によると:

> チケットが作成または更新されると、Zendesk インスタンスに設定されたすべてのトリガーを通過します。トリガーが適用された後、そのチケットは SLA システムを通過します。

つまり、チケットの SLA ポリシーを更新するには、チケット自体が更新される必要があります。そのため、チケットの SLA ポリシーの変更を確認するには、あなた（または顧客）がチケットを更新する必要があります。

### The timer on a ticket did not change after an SLA policy updated

[Zendesk](https://support.zendesk.com/hc/en-us/articles/5600997516058-About-SLA-policies-and-how-they-work#topic_pz5_zzv_rr) によると:

> そのチケットが最後に更新されて以降、より制限の厳しい新しいポリシーを作成した場合、チケットがそれまで存在しなかった新しいポリシーを受け取る可能性があります。あるいは、すでに適用されているポリシーのターゲットを更新した場合もあります。これらいずれの場合も、優先度やスケジュールの変更など、SLA に影響するチケット更新の後に、チケットは新しい情報を受け取ります。

そのため、チケットの優先度を変更してから元に戻すことで、タイマーの更新を確認する必要があるかもしれません。

### The breach event did not update when the SLA policy's target did

[Zendesk](https://support.zendesk.com/hc/en-us/articles/5600997516058-About-SLA-policies-and-how-they-work#topic_pz5_zzv_rr) によると:

> すでに違反している SLA ターゲットを適用または変更した場合、違反は更新時点で記録されます。SLA は違反イベントを遡って記録しません。

### The SLA timer is gone from my ticket

SLA タイマーは、次の 2 つの一般的なケースのいずれかでチケットに表示されなくなります:

- チケットに SLA ポリシーがない
- チケットの最後の公開コメントがエージェントによって行われた
- チケットのステータスが solved である

チケットのステータスが solved の場合、ステータスを他のいずれかに変更すると、（表示されるべきものであれば）SLA タイマーをチケットに復元できます。

チケットの最後の公開コメントがエージェントによって行われた場合、SLA タイマーがチケットに表示される前に、エンドユーザーがチケットにコメントする必要があります。

これらのいずれのケースも発生していない場合、チケットに SLA ポリシーがない可能性があります。さらに詳しく調査するために、Slack 経由で Customer Support Operations チームに連絡してください。

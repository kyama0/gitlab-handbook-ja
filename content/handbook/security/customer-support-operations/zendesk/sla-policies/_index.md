---
title: 'SLA ポリシー'
description: 'Zendesk SLA ポリシーに関する運用ドキュメントページ'
date: 2025-12-26
upstream_path: /handbook/security/customer-support-operations/zendesk/sla-policies/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T22:41:14Z"
translator: claude
stale: false
---

このガイドでは、GitLab における Zendesk SLA ポリシーの作成、編集、管理方法について説明します。管理者は [管理者向けタスク](#administrator-tasks) セクションを確認してください。

{{% alert title="技術詳細" color="primary" %}}

- デプロイメントタイプ: `Standard`
- Sync リポジトリ
  - [Zendesk Global](https://gitlab.com/gitlab-support-readiness/zendesk-global/sla-policies)
  - [Zendesk US Government](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/sla-policies)

{{% /alert %}}
{{% alert title="Zendesk はサービスレベルアグリーメントと呼びますが、私たちは違います" color="warning" %}}

ここに表示されるものはすべてサービスレベルアグリーメント、または SLA というタイトルが付いていますが、その多くは内部的なサービスレベル目標、つまり SLO です。サービスレベルアグリーメント、または SLA というタイトルが付いているのは、Zendesk がその設定をそう呼ぶためです。ここに記載されているものはいずれも、実際の法的なサービスレベルアグリーメントではありません。

{{% /alert %}}

## SLA ポリシーを理解する

### SLA ポリシーとは

[Zendesk](https://support.zendesk.com/hc/en-us/articles/4408829459866-Defining-SLA-policies) より:

> サービスレベルアグリーメント (SLA) とは、サポートチームが顧客に提供する応答時間と解決時間の合意された尺度です。サービスレベルに基づくサポートを提供することで、測定可能で予測可能なサービスを提供できることが保証されます。また、問題が発生した際の可視性も向上します。

### 関係するメトリクスポリシー

| ポリシー名 | API 名 | 意味 |
|-------------|----------|---------------|
| First reply time | `first_reply_time` | 最初の顧客コメントとエージェントによる最初の公開コメントとの間の時間 (分単位で表示)。 |
| Next reply time | `next_reply_time` | 最も古い未回答の顧客コメントとエージェントによる次の公開コメントとの間の時間 (分単位で表示)。 |
| Pausable update | `pausable_update_time` | エージェントによる各公開コメント間の時間 (分単位で表示)。Pending 時に SLA が一時停止します。 |
| Periodic update | `periodic_update_time` | エージェントによる各公開コメント間の時間 (分単位で表示)。 |
| Agent work time | `agent_work_time` | New と Open ステータスで費やされた合計時間。Pending と On-hold 時に SLA が一時停止します。 |
| Requester wait time | `requester_wait_time` | チケットが New、Open、On-hold ステータスで過ごした時間です。 |
| Total resolution time | `total_resolution_time` | チケットを解決するのにかかる最大時間です (すべてのステータスを含む)。 |

これらのうち、私たちが最も一般的に使用するものは First reply time (FRT) と Next reply time (NRT) です。

### SLA ポリシーはフィルターロジックを使用する

SLA ポリシーはフィルターロジックを使用します:

- `all`: 配列内のすべての条件が真である必要がある (AND ロジック)
- `any`: 配列内の少なくとも 1 つの条件が真である必要がある (OR ロジック)
- どちらか一方のセットだけ、または両方のセットを使用できます (ただし少なくとも 1 つのセットを使用する必要があります)

### SLA ポリシーの管理方法

Zendesk は UI から SLA ポリシーを完全に管理する方法を提供していますが、私たちはよりバージョン管理されたメソドロジーに頼っています。これにより、定型化されたレビュープロセス、必要に応じたロールバックの能力などが可能になります。

そのため、Zendesk 内部のフォーム、sync リポジトリ、管理コンテンツリポジトリを利用しています。

#### 人間が読める形式の置換

{{% alert title="注意" color="primary" %}}

- YAML ファイル経由で SLA ポリシーを作成・編集する `administrators` にのみ適用されます

{{% /alert %}}

現在、sync リポジトリは様々な項目を人間が読める形式から「Zendesk」相当の項目へ置換する処理を行えます。これには以下が含まれます:

| 人間が読める形式の項目 | Zendesk フィールド項目 | フィルター位置 | 備考 |
|---------------------|--------------------|-----------------|-------|
| `'Brand: XXX'` | `brand_id` | `value` | `XXX` をブランドの `name` で置換 |
| `'Field: XXX'` | `custom_fields_xxx` | `field` | `XXX` をチケットフィールドの `title` で置換 |
| `'Group: XXX'` | `group_id` | `value` | `XXX` をグループの `name` で置換 |
| `'XXX'` | `role` | `value` | `XXX` をロールタイプの `name` または依頼者のメールアドレスで置換 |
| `'Form: XXX'` | `ticket_form_id` | `value` | `XXX` をチケットフォームの `name` で置換 |
| `'Schedule: XXX'` | `set_schedule` | `value` | `XXX` をスケジュールの `name` で置換 |
| `'Schedule: XXX'` | `schedule_id` | `value` | `XXX` をスケジュールの `name` で置換 |
| `'XXX'` | `organization_id` | `value` | `XXX` を組織の `salesforce_id` 属性で置換 |
| `'XXX'` | `assignee_id` | `value` | `XXX` をエージェントのメールアドレスで置換 |
| `'XXX'` | `satisfaction_reason_code` | `value` | `XXX` を満足度理由の `name` で置換 |
| `'XXX'` | `via_id` | `value` | `XXX` を via タイプの `name` で置換 |
| `'XXX'` | `requester_role` | `value` | `XXX` を依頼者ロールタイプの `name` で置換 |

例として、チケットのフォームが `SaaS` フォームではないことをチェックするフィルターが必要な場合、以下のようにします:

```yaml
- field: 'ticket_form_id'
  operator: 'is_not'
  value: 'Form: SaaS'
```

## 管理者以外として SLA ポリシーを作成する

SLA ポリシーの作成については、[Feature Request issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature) を作成してください (Customer Support Operations チームによる手動対応が必要です)。

## 管理者以外として SLA ポリシーを編集する

SLA ポリシーの修正については、[Feature Request issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature) を作成してください (Customer Support Operations チームによる手動対応が必要です)。

## 管理者以外として SLA ポリシーを削除する

SLA ポリシーの削除については、[Feature Request issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature) を作成してください (Customer Support Operations チームによる手動対応が必要です)。

## 管理者向けタスク {#administrator-tasks}

{{% alert title="注意" color="primary" %}}

- このセクションのすべての項目は、Zendesk への `Administrator` レベルのアクセス権を必要とします。

{{% /alert %}}

### Zendesk で SLA ポリシーを表示する

Zendesk で SLA ポリシーの一覧を表示するには:

1. Zendesk インスタンスの管理ダッシュボードに移動します
   - [Zendesk Global (production)](https://gitlab.zendesk.com/admin/home)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/home)
   - [Zendesk US Government (production)](https://gitlab-federal-support.zendesk.com/admin/home)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/home)
1. `Objects and rules > Business rules > Service level agreements` に移動します
   - [Zendesk Global](https://gitlab.zendesk.com/admin/objects-rules/rules/slas)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/objects-rules/rules/slas)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/objects-rules/rules/slas)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/objects-rules/rules/slas)

SLA ポリシーの詳細を確認したい場合は、SLA ポリシーの名前をクリックします。

### 順序付けに関する注意

チケットに適用される SLA ポリシーは、上から下へ読まれた最初に_一致する_ SLA ポリシー (フィルター経由) によって決定されます (順序は position 値によって決まります)。そのため、同じチケットにフィルターできる SLA ポリシーが複数ある場合は、順序付けに非常に注意する必要があります。

### SLA ポリシーの作成

{{% alert title="警告" color="warning" %}}

- これは対応するリクエスト Issue (Feature Request、Administrative、Bug など) がある場合のみ行うべきです。存在しない場合は、まず作成してください(そして対応する前に通常のプロセスを通してください)。
- これはチケットやメトリクスに多くの深刻な下流への影響を及ぼす可能性があります。実行する際は注意してください。

{{% /alert %}}

SLA ポリシーを作成するには、sync リポジトリで MR を作成する必要があります。具体的な変更内容はリクエスト自体によって異なります。使用できる開始テンプレートは以下のとおりです:

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

ピアによるレビュー・承認後、MR をマージできます。次回のデプロイ時に Zendesk と同期されます。

### SLA ポリシーの編集

{{% alert title="警告" color="warning" %}}

- これは対応するリクエスト Issue (Feature Request、Administrative、Bug など) がある場合のみ行うべきです。存在しない場合は、まず作成してください(そして対応する前に通常のプロセスを通してください)。
- これはチケットやメトリクスに多くの深刻な下流への影響を及ぼす可能性があります。実行する際は注意してください。

{{% /alert %}}

SLA ポリシーを編集するには、sync リポジトリで MR を作成する必要があります。具体的な変更内容はリクエスト自体によって異なります。

ピアによるレビュー・承認後、MR をマージできます。次回のデプロイ時に Zendesk と同期されます。

#### SLA ポリシーのタイトルを変更する

SLA ポリシーのタイトルを変更する必要がある場合、現在の値を `previous_title` 属性にコピーしてから `title` 属性を変更してください。これにより、sync が依然として対象の SLA ポリシーを見つけて更新できます。

### SLA ポリシーの削除

{{% alert title="警告" color="warning" %}}

- これは対応するリクエスト Issue (Feature Request、Administrative、Bug など) がある場合のみ行うべきです。存在しない場合は、まず作成してください(そして対応する前に通常のプロセスを通してください)。
- これはチケットやメトリクスに多くの深刻な下流への影響を及ぼす可能性があります。実行する際は注意してください。

{{% /alert %}}

sync リポジトリは削除を行わないため、SLA ポリシーを削除するには 2 つのアクションを行う必要があります。

まず、sync リポジトリから対応するファイルを削除する必要があります。ピアによるレビュー・承認後、MR をマージできます。

その後、Zendesk 自体からも削除する必要があります。

Zendesk から SLA ポリシーを削除するには:

1. Zendesk インスタンスの管理ダッシュボードに移動します
   - [Zendesk Global (production)](https://gitlab.zendesk.com/admin/home)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/home)
   - [Zendesk US Government (production)](https://gitlab-federal-support.zendesk.com/admin/home)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/home)
1. `Objects and rules > Business rules > Service level agreements` に移動します
   - [Zendesk Global](https://gitlab.zendesk.com/admin/objects-rules/rules/slas)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/objects-rules/rules/slas)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/objects-rules/rules/slas)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/objects-rules/rules/slas)
1. 削除したい SLA ポリシーの右にある縦の三点ドットをクリックします
1. `Delete` をクリックします
1. `Continue deletion` をクリックして削除を確定します

### 例外デプロイメントの実行

SLA ポリシーの例外デプロイメントを実行するには、対象の SLA ポリシー sync プロジェクトに移動し、スケジュールパイプラインのページに行き、sync 項目の再生ボタンをクリックします。これにより SLA ポリシーの sync ジョブがトリガーされます。

## よくある問題とトラブルシューティング

### マージ後に SLA ポリシーの変更が反映されない

SLA ポリシーは `Standard` デプロイメントタイプに従うため、通常のデプロイメントサイクル中(または例外デプロイメントが行われたとき)にのみデプロイされます。

### チケットで SLA ポリシーの更新が反映されない

[Zendesk](https://support.zendesk.com/hc/en-us/articles/5600997516058-About-SLA-policies-and-how-they-work#topic_pz5_zzv_rr) より:

> チケットが作成または更新されると、Zendesk インスタンスにセットアップされたすべてのトリガーを通過します。トリガーが適用された後、そのチケットは SLA システムを通過します。

これは、チケット上の SLA ポリシーを更新するには、チケット自体が更新される必要があることを意味します。そのため、あなた (または顧客) はチケットを更新して、チケット上の SLA ポリシーが変更されるのを確認する必要があります。

### SLA ポリシーが更新された後、チケットのタイマーが変わらなかった

[Zendesk](https://support.zendesk.com/hc/en-us/articles/5600997516058-About-SLA-policies-and-how-they-work#topic_pz5_zzv_rr) より:

> そのチケットが最後に更新されてからより制限的な新しいポリシーを作成した場合、そのチケットは以前は存在しなかった新しいポリシーを受け取る可能性があります。あるいは、すでに適用されているポリシーのターゲットを更新した可能性があります。これら両方のケースで、チケットは優先度やスケジュールの変更など、SLA に影響するチケット更新後に新しい情報を受け取ります。

そのため、チケットの優先度を変更してから元に戻す必要があるかもしれません。タイマーの更新を確認するためです。

### SLA ポリシーのターゲットが更新されたのに違反イベントが更新されなかった

[Zendesk](https://support.zendesk.com/hc/en-us/articles/5600997516058-About-SLA-policies-and-how-they-work#topic_pz5_zzv_rr) より:

> すでに違反した SLA ターゲットを適用または変更した場合、違反は更新時に記録されます。SLA は違反イベントを遡及記録しません。

### チケットから SLA タイマーがなくなった

SLA タイマーは以下の 2 つの一般的なケースのいずれかでチケットに表示されなくなります:

- チケットに SLA ポリシーがない
- チケットの最後の公開コメントがエージェントによるものだった
- チケットのステータスが solved である

チケットのステータスが solved の場合、ステータスを他のものに変更すると SLA タイマーが (表示されるべきものなら) チケットに復元されます。

チケットの最後の公開コメントがエージェントによるものだった場合、SLA タイマーがチケットに表示される前にエンドユーザーがチケットにコメントする必要があります。

これらのいずれのケースも発生していない場合、チケットに SLA ポリシーがない可能性があります。Slack を介して Customer Support Operations チームに連絡し、さらに調査してもらってください。

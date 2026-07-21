---
title: 'スケジュール'
description: 'Zendesk スケジュールに関するドキュメント'
upstream_path: "/handbook/eta/css/zendesk/schedules/"
upstream_sha: "db1b52fb5e65d37509c3eaaaebfd50dd491e4b36"
lastmod: "2026-07-21T11:29:58-05:00"
translated_at: "2026-07-22T06:32:52+09:00"
translator: codex
stale: false
---

このガイドでは、GitLab における Zendesk スケジュールの作成、編集、管理方法について説明します。管理者は[管理者タスク](#administrator-tasks)セクションを確認してください。

{{% alert title="技術的な詳細" color="primary" %}}

- デプロイタイプ: `Standard`
- 同期リポジトリ
  - [Zendesk Global](https://gitlab.com/gitlab-support-readiness/zendesk-global/schedules)
  - [Zendesk US Government](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/schedules)
- `CustSuppOps Zendesk Test Suite Generator` が有効

{{% /alert %}}

## スケジュールを理解する

### スケジュールとは

Zendesk のスケジュールは、他の多くのもののスケジュールと同様に、時間の枠です。これらを使用して、営業時間およびさまざまな地域の勤務時間を決定します。これは Zendesk SLA ポリシーの動作にとって重要なコンポーネントです（SLA ポリシーが実行される時間枠を詳細に示すためです）。

Zendesk では、特定のタイムゾーンを使用でき、休日を設定できます。どちらもスケジュールの動作に不可欠な要素です。

### Zendesk でスケジュールを使用する

スケジュールは、SLA の計算における営業時間と、時間ベースの自動化を決定するために使用します。一般的な用途は次のとおりです。

- SLA ポリシー（営業時間中のみ FRT、NRT を測定）
- 営業時間トリガー（勤務時間中にのみ実行するアクション）
- 時間条件を持つ自動化

スケジュールは通常、SLA ポリシーを通じてチケットレベルで適用するか、トリガー／自動化の条件で参照します。

### 休日

スケジュール内の休日は、"タイマー" が実行されない設定日です。

現在、Zendesk ではこの機能を使用していません（法務チームの決定によるものです）。この機能の使用は、契約要件に影響するため法務の承認が必要です。

### スケジュールの管理方法

Zendesk では UI を介してスケジュールを管理する完全な方法が提供されていますが、私たちはよりバージョン管理された方法論を採用しています。これにより、定められたレビューのプロセス、必要に応じたロールバックの実行などが可能になります。

このため、同期リポジトリを使用します。

### 現在使用中のスケジュール

{{% alert title="注記" color="danger" %}}

これは、使用中のスケジュールに関する唯一の情報源にする必要があります。承認済みのワークフロー以外で変更を加えないでください。

常に変更に注意してください。これらの多くは、下流に大きな影響を与える可能性があります。

{{% /alert %}}

- Zendesk Global
  - Business Hours
    - タイムゾーン: Pacific Time (US & Canada)
    - 週間スケジュール:
      - 日曜日: 1500-2400
      - 月曜日: 0000-2400
      - 火曜日: 0000-2400
      - 水曜日: 0000-2400
      - 木曜日: 0000-2400
      - 金曜日: 0000-1700
      - 土曜日: 休業
    - 休日: なし
  - 24x7 Support
    - タイムゾーン: Pacific Time (US & Canada)
    - 週間スケジュール:
      - 日曜日: 0000-2400
      - 月曜日: 0000-2400
      - 火曜日: 0000-2400
      - 水曜日: 0000-2400
      - 木曜日: 0000-2400
      - 金曜日: 0000-2400
      - 土曜日: 0000-2400
    - 休日: なし
  - AMER
    - タイムゾーン: Pacific Time (US & Canada)
    - 週間スケジュール:
      - 日曜日: 休業
      - 月曜日: 0500-1700
      - 火曜日: 0500-1700
      - 水曜日: 0500-1700
      - 木曜日: 0500-1700
      - 金曜日: 0500-1700
      - 土曜日: 休業
    - 休日: なし
  - APAC
    - タイムゾーン: Brisbane
    - 週間スケジュール:
      - 日曜日: 休業
      - 月曜日: 0900-2100
      - 火曜日: 0900-2100
      - 水曜日: 0900-2100
      - 木曜日: 0900-2100
      - 金曜日: 0900-2100
      - 土曜日: 休業
    - 休日: なし
  - EMEA
    - タイムゾーン: Amsterdam
    - 週間スケジュール:
      - 日曜日: 休業
      - 月曜日: 0800-1800
      - 火曜日: 0800-1800
      - 水曜日: 0800-1800
      - 木曜日: 0800-1800
      - 金曜日: 0800-1800
      - 土曜日: 休業
    - 休日: なし
- Zendesk US Government
  - Standard Business Hours
    - タイムゾーン: Pacific Time (US & Canada)
    - 週間スケジュール:
      - 日曜日: 休業
      - 月曜日: 0500-1700
      - 火曜日: 0500-1700
      - 水曜日: 0500-1700
      - 木曜日: 0500-1700
      - 金曜日: 0500-1700
      - 土曜日: 休業
    - 休日: なし
  - 24x7 Business Hours
    - タイムゾーン: Pacific Time (US & Canada)
    - 週間スケジュール:
      - 日曜日: 0000-2400
      - 月曜日: 0000-2400
      - 火曜日: 0000-2400
      - 水曜日: 0000-2400
      - 木曜日: 0000-2400
      - 金曜日: 0000-2400
      - 土曜日: 0000-2400
    - 休日: なし

## 非管理者としてスケジュールを作成する

スケジュールの作成については、[機能リクエスト Issue](https://gitlab.com/gitlab-com/eta/css/issue-tracker/-/issues/new?description_template=Feature)を作成してください（Customer Support Systems チームによる手動対応が必要になるためです）。

## 非管理者としてスケジュールを編集する

スケジュールの変更については、[機能リクエスト Issue](https://gitlab.com/gitlab-com/eta/css/issue-tracker/-/issues/new?description_template=Feature)を作成してください（Customer Support Systems チームによる手動対応が必要になるためです）。

## 非管理者としてスケジュールを削除する

スケジュールの削除については、[機能リクエスト Issue](https://gitlab.com/gitlab-com/eta/css/issue-tracker/-/issues/new?description_template=Feature)を作成してください（Customer Support Systems チームによる手動対応が必要になるためです）。

## 管理者タスク

{{% alert title="注記" color="primary" %}}

- このセクション内のすべての項目には、Zendesk の `Administrator` レベルのアクセス権が必要です。

{{% /alert %}}

### Zendesk でスケジュールを表示する

1. Zendesk インスタンスの管理者ダッシュボードに移動します。
   - [Zendesk Global（本番環境）](https://gitlab.zendesk.com/admin/home)
   - [Zendesk Global（Sandbox）](https://gitlab1707170878.zendesk.com/admin/home)
   - [Zendesk US Government（本番環境）](https://gitlab-federal-support.zendesk.com/admin/home)
   - [Zendesk US Government（Sandbox）](https://gitlabfederalsupport1585318082.zendesk.com/admin/home)
1. `Objects and rules > Business rules > Schedules` に移動します。
   - [Zendesk Global](https://gitlab.zendesk.com/admin/objects-rules/rules/schedules)
   - [Zendesk Global（Sandbox）](https://gitlab1707170878.zendesk.com/admin/objects-rules/rules/schedules)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/objects-rules/rules/schedules)
   - [Zendesk US Government（Sandbox）](https://gitlabfederalsupport1585318082.zendesk.com/admin/objects-rules/rules/schedules)

実際のスケジュールのタイムスロットまたは休日設定を確認する必要がある場合は、スケジュール名をクリックできます。

### スケジュールを作成する

{{% alert title="警告" color="warning" %}}

- これは、対応するリクエスト Issue（機能リクエスト、管理、バグなど）が存在する場合にのみ実行してください。存在しない場合は、まず作成し（作業する前に標準プロセスを通過させてください）。
- スケジュールを作成しただけでは、それが使用されることを意味しないことに注意してください。

{{% /alert %}}

スケジュールを作成するには、同期リポジトリで MR を作成する必要があります。実際に加える変更は、リクエスト自体によって異なります。使用できる開始テンプレートは次のとおりです。

```yaml
---
name: 'Schedule name here'
previous_name: 'Schedule name here'
time_zone: 'Timezone to use here'
sunday: []
monday:
- START-END
tuesday:
- START-END
wednesday:
- START-END
thursday:
- START-END
friday:
- START-END
saturday: []
```

`time_zone` 属性には、私たちが使用する承認済みタイムゾーンのいずれかを指定する必要があります。

- Zendesk Global
  - `AMER` スケジュールの場合: `Pacific Time (US & Canada)`
  - `APAC` スケジュールの場合: `Brisbane`
  - `EMEA` スケジュールの場合: `Amsterdam`
  - その他の場合: `Pacific Time (US & Canada)`
- Zendesk US Government
  - `Pacific Time (US & Canada)`

`sunday`、`monday`、...、`saturday` 属性の下にある配列項目には、使用するタイムスロットの配列を指定する必要があります（24 時間制形式で記述します）。1 日の最後（午前 0 時）には、`2400` を使用してください。例として、月曜日に 0700 から 1200、および 1500-2300 のタイムスロットを適用するスケジュールにする場合は、次のようにします。

```yaml
monday:
- 0700-1200
- 1500-2300
```

ピアが MR をレビューして承認した後、MR をマージできます。次のデプロイ時に Zendesk へ同期されます。

### スケジュールを編集する

{{% alert title="警告" color="warning" %}}

- これは、対応するリクエスト Issue（機能リクエスト、管理、バグなど）が存在する場合にのみ実行してください。存在しない場合は、まず作成し（作業する前に標準プロセスを通過させてください）。
- これはチケットとその SLA に多くの重大な下流影響を与える可能性があります。実施する際は注意してください。

{{% /alert %}}

スケジュールを編集するには、同期リポジトリで MR を作成する必要があります。実際に加える変更は、リクエスト自体によって異なります。

ピアが MR をレビューして承認した後、MR をマージできます。次のデプロイ時に Zendesk へ同期されます。

#### スケジュール名を変更する

スケジュール名を変更する必要がある場合は、現在の値を `previous_name` 属性にコピーしてから、`name` 属性を変更します。これにより、同期で更新対象の SLA ポリシーを引き続き特定できます。

### スケジュールを削除する

{{% alert title="警告" color="warning" %}}

- これは、対応するリクエスト Issue（機能リクエスト、管理、バグなど）が存在する場合にのみ実行してください。存在しない場合は、まず作成し（作業する前に標準プロセスを通過させてください）。
- これはチケットとその SLA に多くの重大な下流影響を与える可能性があります。実施する際は注意してください。

{{% /alert %}}

同期リポジトリでは削除を実行しないため、スケジュールを削除するには 2 つの操作を行う必要があります。

最初に、同期リポジトリから対応するファイルを削除する必要があります。ピアが MR をレビューして承認した後、MR をマージできます。

その後、Zendesk 自体から削除する必要があります。

Zendesk でスケジュールを削除するには、次のとおりです。

1. Zendesk インスタンスの管理者ダッシュボードに移動します。
   - [Zendesk Global（本番環境）](https://gitlab.zendesk.com/admin/home)
   - [Zendesk Global（Sandbox）](https://gitlab1707170878.zendesk.com/admin/home)
   - [Zendesk US Government（本番環境）](https://gitlab-federal-support.zendesk.com/admin/home)
   - [Zendesk US Government（Sandbox）](https://gitlabfederalsupport1585318082.zendesk.com/admin/home)
1. `Objects and rules > Business rules > Schedules` に移動します。
   - [Zendesk Global](https://gitlab.zendesk.com/admin/objects-rules/rules/schedules)
   - [Zendesk Global（Sandbox）](https://gitlab1707170878.zendesk.com/admin/objects-rules/rules/schedules)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/objects-rules/rules/schedules)
   - [Zendesk US Government（Sandbox）](https://gitlabfederalsupport1585318082.zendesk.com/admin/objects-rules/rules/schedules)
1. スケジュール名の右にある縦に並んだ 3 つの点をクリックします。
1. `Delete` をクリックします。
1. 削除を確認するため、`Delete` をクリックします。

### 例外デプロイを実行する

スケジュールの例外デプロイを実行するには、該当するスケジュール同期プロジェクトに移動し、スケジュール済みパイプラインページに移動して、同期項目の再生ボタンをクリックします。これにより、スケジュールの同期ジョブがトリガーされます。

## 一般的な問題とトラブルシューティング

これは、必要に応じて項目が追加される生きたセクションです。

### マージ後にスケジュールの変更が表示されない

スケジュールは `Standard` デプロイタイプに従うため、通常のデプロイサイクル中（または例外デプロイを実行したとき）にのみデプロイされます。

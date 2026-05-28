---
title: 'スケジュール'
description: 'Zendesk スケジュールに関するドキュメント'
upstream_path: /handbook/security/customer-support-operations/zendesk/schedules/
upstream_sha: 78b430bc8e2a925f210024d512218ce1d8d42106
translated_at: "2026-05-28T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-05-26T12:05:00-05:00"
---

このガイドでは、GitLab における Zendesk スケジュールの作成、編集、管理方法について説明します。管理者は [管理者向けタスク](#administrator-tasks) セクションを確認してください。

{{% alert title="技術詳細" color="primary" %}}

- デプロイメントタイプ: `Standard`
- Sync リポジトリ
  - [Zendesk Global](https://gitlab.com/gitlab-support-readiness/zendesk-global/schedules)
  - [Zendesk US Government](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/schedules)
- `CustSuppOps Zendesk Test Suite Generator` 有効

{{% /alert %}}

## スケジュールを理解する

### スケジュールとは

Zendesk のスケジュールは、他の多くのものにおけるスケジュールと同様、時間枠です。私たちはこれを使って業務時間や様々な地域の勤務時間を決定します。これは Zendesk SLA ポリシーがどのように機能するかにとって重要なコンポーネントです (SLA ポリシーが実行される時間枠を指定するため)。

Zendesk 内では、これらは特定のタイムゾーンを使用したり、休日の設定を許可する機能を持っており、両方ともスケジュールがどのように機能するかにとって重要なコンポーネントです。

### Zendesk でスケジュールを使用する

スケジュールは、SLA 計算と時間ベースの自動化のための業務時間を決定するために使われます。一般的な用途には以下が含まれます:

- SLA ポリシー (業務時間中のみ FRT、NRT を測定)
- 業務時間トリガー (勤務時間中のみ発火するアクション)
- 時間条件付きの自動化

スケジュールは通常、SLA ポリシー経由でチケットレベルで適用されるか、トリガー / 自動化の条件で参照されます。

### 休日

スケジュール内の休日とは、「タイマー」が動作しない設定された日付です。

私たちは現在 Zendesk でこの機能を使用していません (法務チームの決定により)。この機能の使用は契約要件に影響するため、法務承認が必要です。

### スケジュールの管理方法

Zendesk は UI からスケジュールを完全に管理する方法を提供していますが、私たちはよりバージョン管理されたメソドロジーに頼っています。これにより、定型化されたレビュープロセス、必要に応じたロールバックの能力などが可能になります。

そのため、sync リポジトリを利用しています。

### 現在使用中のスケジュール

{{% alert title="注意" color="danger" %}}

これは使用中のスケジュールのための単一の信頼できる情報源であるべきです。承認されたワークフロー以外で変更を行わないでください。

変更については常に注意してください。これらの多くは大きな下流への影響を及ぼす可能性があります。

{{% /alert %}}

- Zendesk Global
  - Business Hours
    - タイムゾーン: Pacific Time (US & Canada)
    - 週次スケジュール:
      - 日曜日: 1500-2400
      - 月曜日: 0000-2400
      - 火曜日: 0000-2400
      - 水曜日: 0000-2400
      - 木曜日: 0000-2400
      - 金曜日: 0000-1700
      - 土曜日: クローズ
    - 休日: なし
  - 24x7 Support
    - タイムゾーン: Pacific Time (US & Canada)
    - 週次スケジュール:
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
    - 週次スケジュール:
      - 日曜日: クローズ
      - 月曜日: 0500-1700
      - 火曜日: 0500-1700
      - 水曜日: 0500-1700
      - 木曜日: 0500-1700
      - 金曜日: 0500-1700
      - 土曜日: クローズ
    - 休日: なし
  - APAC
    - タイムゾーン: Brisbane
    - 週次スケジュール:
      - 日曜日: クローズ
      - 月曜日: 0900-2100
      - 火曜日: 0900-2100
      - 水曜日: 0900-2100
      - 木曜日: 0900-2100
      - 金曜日: 0900-2100
      - 土曜日: クローズ
    - 休日: なし
  - EMEA
    - タイムゾーン: Amsterdam
    - 週次スケジュール:
      - 日曜日: クローズ
      - 月曜日: 0800-1800
      - 火曜日: 0800-1800
      - 水曜日: 0800-1800
      - 木曜日: 0800-1800
      - 金曜日: 0800-1800
      - 土曜日: クローズ
    - 休日: なし
- Zendesk US Government
  - Standard Business Hours
    - タイムゾーン: Pacific Time (US & Canada)
    - 週次スケジュール:
      - 日曜日: クローズ
      - 月曜日: 0500-1700
      - 火曜日: 0500-1700
      - 水曜日: 0500-1700
      - 木曜日: 0500-1700
      - 金曜日: 0500-1700
      - 土曜日: クローズ
    - 休日: なし
  - 24x7 Business Hours
    - タイムゾーン: Pacific Time (US & Canada)
    - 週次スケジュール:
      - 日曜日: 0000-2400
      - 月曜日: 0000-2400
      - 火曜日: 0000-2400
      - 水曜日: 0000-2400
      - 木曜日: 0000-2400
      - 金曜日: 0000-2400
      - 土曜日: 0000-2400
    - 休日: なし

## 管理者以外としてスケジュールを作成する

スケジュールの作成については、[Feature Request Issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature) を作成してください (Customer Support Operations チームによる手動対応が必要です)。

## 管理者以外としてスケジュールを編集する

スケジュールの修正については、[Feature Request Issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature) を作成してください (Customer Support Operations チームによる手動対応が必要です)。

## 管理者以外としてスケジュールを削除する

スケジュールの削除については、[Feature Request Issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature) を作成してください (Customer Support Operations チームによる手動対応が必要です)。

## 管理者向けタスク {#administrator-tasks}

{{% alert title="注意" color="primary" %}}

- このセクションのすべての項目は、Zendesk への `Administrator` レベルのアクセス権を必要とします。

{{% /alert %}}

### Zendesk でスケジュールを表示する

1. Zendesk インスタンスの管理ダッシュボードに移動します
   - [Zendesk Global (production)](https://gitlab.zendesk.com/admin/home)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/home)
   - [Zendesk US Government (production)](https://gitlab-federal-support.zendesk.com/admin/home)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/home)
1. `Objects and rules > Business rules > Schedules` に移動します
   - [Zendesk Global](https://gitlab.zendesk.com/admin/objects-rules/rules/schedules)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/objects-rules/rules/schedules)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/objects-rules/rules/schedules)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/objects-rules/rules/schedules)

実際のスケジュールの時間枠や休日設定を確認したい場合は、スケジュール名をクリックします。

### スケジュールの作成

{{% alert title="警告" color="warning" %}}

- これは対応するリクエスト Issue (Feature Request、Administrative、Bug など) がある場合のみ行うべきです。存在しない場合は、まず作成してください(そして対応する前に通常のプロセスを通してください)。
- スケジュールを作成しただけでは使用されないことを覚えておいてください。

{{% /alert %}}

スケジュールを作成するには、sync リポジトリで MR を作成する必要があります。具体的な変更内容はリクエスト自体によって異なります。使用できる開始テンプレートは以下のとおりです:

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

`time_zone` 属性については、私たちが使用する承認済みのタイムゾーンの 1 つにする必要があります:

- Zendesk Global
  - `AMER` スケジュール: `Pacific Time (US & Canada)`
  - `APAC` スケジュール: `Brisbane`
  - `EMEA` スケジュール: `Amsterdam`
  - その他: `Pacific Time (US & Canada)`
- Zendesk US Government
  - `Pacific Time (US & Canada)`

`sunday`、`monday`、…、`saturday` 属性下の配列項目については、使用する時間枠の配列にする必要があります (24 時間表記で書かれます)。1 日の終わり (深夜 0 時) には `2400` を使います。例として、月曜日に 0700 から 1200 と 1500-2300 の時間枠を適用するスケジュールが必要な場合、以下のようにします:

```yaml
monday:
- 0700-1200
- 1500-2300
```

ピアによるレビュー・承認後、MR をマージできます。次回のデプロイ時に Zendesk と同期されます。

### スケジュールの編集

{{% alert title="警告" color="warning" %}}

- これは対応するリクエスト Issue (Feature Request、Administrative、Bug など) がある場合のみ行うべきです。存在しない場合は、まず作成してください(そして対応する前に通常のプロセスを通してください)。
- これはチケットとその SLA に多くの深刻な下流への影響を及ぼす可能性があります。実行する際は注意してください。

{{% /alert %}}

スケジュールを編集するには、sync リポジトリで MR を作成する必要があります。具体的な変更内容はリクエスト自体によって異なります。

ピアによるレビュー・承認後、MR をマージできます。次回のデプロイ時に Zendesk と同期されます。

#### スケジュール名を変更する

スケジュール名を変更する必要がある場合、現在の値を `previous_name` 属性にコピーしてから `name` 属性を変更してください。これにより、sync が依然として対象の SLA ポリシーを見つけて更新できます。

### スケジュールの削除

{{% alert title="警告" color="warning" %}}

- これは対応するリクエスト Issue (Feature Request、Administrative、Bug など) がある場合のみ行うべきです。存在しない場合は、まず作成してください(そして対応する前に通常のプロセスを通してください)。
- これはチケットとその SLA に多くの深刻な下流への影響を及ぼす可能性があります。実行する際は注意してください。

{{% /alert %}}

sync リポジトリは削除を行わないため、スケジュールを削除するには 2 つのアクションを行う必要があります。

まず、sync リポジトリから対応するファイルを削除する必要があります。ピアによるレビュー・承認後、MR をマージできます。

その後、Zendesk 自体からも削除する必要があります。

Zendesk でスケジュールを削除するには:

1. Zendesk インスタンスの管理ダッシュボードに移動します
   - [Zendesk Global (production)](https://gitlab.zendesk.com/admin/home)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/home)
   - [Zendesk US Government (production)](https://gitlab-federal-support.zendesk.com/admin/home)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/home)
1. `Objects and rules > Business rules > Schedules` に移動します
   - [Zendesk Global](https://gitlab.zendesk.com/admin/objects-rules/rules/schedules)
   - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/admin/objects-rules/rules/schedules)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin/objects-rules/rules/schedules)
   - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/admin/objects-rules/rules/schedules)
1. スケジュール名の右にある縦の三点ドットをクリックします
1. `Delete` をクリックします
1. `Delete` をクリックして削除を確定します

### 例外デプロイメントの実行

スケジュールの例外デプロイメントを実行するには、対象のスケジュール sync プロジェクトに移動し、スケジュールパイプラインのページに行き、sync 項目の再生ボタンをクリックします。これによりスケジュールの sync ジョブがトリガーされます。

## よくある問題とトラブルシューティング

このセクションは必要に応じて項目が追加されていく生きたセクションです。

### マージ後にスケジュール変更が反映されない

スケジュールは `Standard` デプロイメントタイプに従うため、通常のデプロイメントサイクル中(または例外デプロイメントが行われたとき)にのみデプロイされます。

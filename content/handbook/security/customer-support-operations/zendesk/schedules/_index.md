---
title: 'スケジュール'
description: 'Zendesk スケジュールに関するドキュメント'
upstream_path: /handbook/security/customer-support-operations/zendesk/schedules/
upstream_sha: 7405b4b85e7e4a5d61d4eff68e49976463e3dada
translated_at: "2026-05-26T21:15:15Z"
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
- `CustSuppOps Zendesk Test Suite Generator` が有効

{{% /alert %}}

## スケジュールを理解する

### スケジュールとは何か

Zendesk のスケジュールは、他の多くのものにおけるスケジュールと同じく、時間帯 (時間の窓) です。私たちはこれを使って営業時間やさまざまな地域の勤務時間を決定します。これは Zendesk の SLA ポリシーがどのように機能するかにとって重要な構成要素です (SLA ポリシーが実行される時間帯を詳細に定めるため)。

Zendesk 内では、これらは特定のタイムゾーンを使用したり、祝日を設定したりすることができ、いずれもスケジュールがどのように機能するかにとって不可欠な構成要素です。

### Zendesk でのスケジュールの使用

スケジュールは、SLA 計算と時間ベースの自動化のために営業時間を決定するのに使用されます。一般的な用途には以下が含まれます。

- SLA ポリシー (営業時間中のみ FRT、NRT を測定する)
- 営業時間トリガー (勤務時間中のみ実行されるアクション)
- 時間条件を持つ自動化

スケジュールは通常、SLA ポリシーを通じてチケットレベルで適用されるか、トリガー/自動化の条件で参照されます。

### 祝日

スケジュール内の祝日は、「タイマー」が実行されない設定された日付です。

私たちは現在 Zendesk でこの機能を使用していません (法務チームの決定による)。この機能の使用には、契約上の要件に影響を与えるため、法務の承認が必要です。

### スケジュールの管理方法

Zendesk は UI 経由でスケジュールを管理する完全な方法を提供していますが、私たちはよりバージョン管理されたメソドロジーに頼っています。これにより、設定されたレビュープロセスや、必要に応じたロールバックの実行などが可能になります。

そのため、私たちは Sync リポジトリを利用しています。

### 現在使用中のスケジュール

{{% alert title="Note" color="danger" %}}

これは使用されているスケジュールの唯一の信頼できる情報源 (single source of truth) であるべきです。承認されたワークフローの外で変更を行わないでください。

常に変更には注意してください。これらの多くは、重大な下流への影響を及ぼす可能性があります。

{{% /alert %}}

- Zendesk Global
  - Business Hours
    - タイムゾーン: Pacific Time (US & Canada)
    - 週間スケジュール:
      - 日曜: 1500-2400
      - 月曜: 0000-2400
      - 火曜: 0000-2400
      - 水曜: 0000-2400
      - 木曜: 0000-2400
      - 金曜: 0000-1700
      - 土曜: 休業
    - 祝日: なし
  - 24x7 Support
    - タイムゾーン: Pacific Time (US & Canada)
    - 週間スケジュール:
      - 日曜: 0000-2400
      - 月曜: 0000-2400
      - 火曜: 0000-2400
      - 水曜: 0000-2400
      - 木曜: 0000-2400
      - 金曜: 0000-2400
      - 土曜: 0000-2400
    - 祝日: なし
  - AMER
    - タイムゾーン: Pacific Time (US & Canada)
    - 週間スケジュール:
      - 日曜: 休業
      - 月曜: 0500-1700
      - 火曜: 0500-1700
      - 水曜: 0500-1700
      - 木曜: 0500-1700
      - 金曜: 0500-1700
      - 土曜: 休業
    - 祝日: なし
  - APAC
    - タイムゾーン: Brisbane
    - 週間スケジュール:
      - 日曜: 休業
      - 月曜: 0900-2100
      - 火曜: 0900-2100
      - 水曜: 0900-2100
      - 木曜: 0900-2100
      - 金曜: 0900-2100
      - 土曜: 休業
    - 祝日: なし
  - EMEA
    - タイムゾーン: Amsterdam
    - 週間スケジュール:
      - 日曜: 休業
      - 月曜: 0800-1800
      - 火曜: 0800-1800
      - 水曜: 0800-1800
      - 木曜: 0800-1800
      - 金曜: 0800-1800
      - 土曜: 休業
    - 祝日: なし
- Zendesk US Government
  - Standard Business Hours
    - タイムゾーン: Pacific Time (US & Canada)
    - 週間スケジュール:
      - 日曜: 休業
      - 月曜: 0500-1700
      - 火曜: 0500-1700
      - 水曜: 0500-1700
      - 木曜: 0500-1700
      - 金曜: 0500-1700
      - 土曜: 休業
    - 祝日: なし
  - 24x7 Business Hours
    - タイムゾーン: Pacific Time (US & Canada)
    - 週間スケジュール:
      - 日曜: 0000-2400
      - 月曜: 0000-2400
      - 火曜: 0000-2400
      - 水曜: 0000-2400
      - 木曜: 0000-2400
      - 金曜: 0000-2400
      - 土曜: 0000-2400
    - 祝日: なし

## 管理者以外としてのスケジュールの作成

スケジュールの作成については、[Feature Request issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature) を作成してください (Customer Support Operations チームによる手動の対応が必要なため)。

## 管理者以外としてのスケジュールの編集

スケジュールの変更については、[Feature Request issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature) を作成してください (Customer Support Operations チームによる手動の対応が必要なため)。

## 管理者以外としてのスケジュールの削除

スケジュールの削除については、[Feature Request issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature) を作成してください (Customer Support Operations チームによる手動の対応が必要なため)。

## 管理者向けタスク

{{% alert title="Note" color="primary" %}}

- このセクションのすべての項目には、Zendesk への `Administrator` レベルのアクセスが必要です。

{{% /alert %}}

### Zendesk でのスケジュールの表示

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

スケジュールの実際の時間帯や祝日設定を確認する必要がある場合は、スケジュールの名前をクリックできます。

### スケジュールの作成

{{% alert title="Warning" color="warning" %}}

- これは、対応するリクエスト issue (Feature Request、Administrative、Bug など) がある場合にのみ行うべきです。存在しない場合は、まず作成する必要があります (そして対応する前に標準的なプロセスを通過させます)。
- スケジュールを作成しただけでは、それが使用されることを意味しないことを覚えておいてください。

{{% /alert %}}

スケジュールの作成については、Sync リポジトリに MR を作成する必要があります。行われる正確な変更は、リクエスト自体に依存します。使用できる出発点となるテンプレートは次のとおりです。

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

`time_zone` 属性については、私たちが使用する承認済みのタイムゾーンのいずれかである必要があります。

- Zendesk Global
  - `AMER` スケジュールの場合: `Pacific Time (US & Canada)`
  - `APAC` スケジュールの場合: `Brisbane`
  - `EMEA` スケジュールの場合: `Amsterdam`
  - その他すべての場合: `Pacific Time (US & Canada)`
- Zendesk US Government
  - `Pacific Time (US & Canada)`

`sunday`、`monday`、...、`saturday` 属性の下の配列項目については、使用する時間帯の配列 (24 時間表記で記述) である必要があります。1 日のいちばん最後 (深夜 0 時) には `2400` を使用します。たとえば、月曜日に 0700 から 1200 と 1500-2300 の時間帯を適用するスケジュールにしたい場合は、次のようにします。

```yaml
monday:
- 0700-1200
- 1500-2300
```

ピアがあなたの MR をレビューして承認した後、MR をマージできます。次のデプロイメントが行われると、Zendesk に同期されます。

### スケジュールの編集

{{% alert title="Warning" color="warning" %}}

- これは、対応するリクエスト issue (Feature Request、Administrative、Bug など) がある場合にのみ行うべきです。存在しない場合は、まず作成する必要があります (そして対応する前に標準的なプロセスを通過させます)。
- これは、チケットとその SLA に多くの重大な下流への影響を及ぼす可能性があります。これを行う際には注意してください。

{{% /alert %}}

スケジュールを編集するには、Sync リポジトリに MR を作成する必要があります。行われる正確な変更は、リクエスト自体に依存します。

ピアがあなたの MR をレビューして承認した後、MR をマージできます。次のデプロイメントが行われると、Zendesk に同期されます。

#### スケジュールの名前の変更

スケジュールの名前を変更する必要がある場合は、現在の値を `previous_name` 属性にコピーしてから `name` 属性を変更します。これにより、同期が更新対象の SLA ポリシーを引き続き特定できるようになります。

### スケジュールの削除

{{% alert title="Warning" color="warning" %}}

- これは、対応するリクエスト issue (Feature Request、Administrative、Bug など) がある場合にのみ行うべきです。存在しない場合は、まず作成する必要があります (そして対応する前に標準的なプロセスを通過させます)。
- これは、チケットとその SLA に多くの重大な下流への影響を及ぼす可能性があります。これを行う際には注意してください。

{{% /alert %}}

Sync リポジトリは削除を実行しないため、スケジュールを削除するには 2 つのアクションを行う必要があります。

まず、Sync リポジトリから対応するファイルを削除する必要があります。ピアがあなたの MR をレビューして承認した後、MR をマージできます。

それが完了したら、次に Zendesk 自体からそれを削除する必要があります。

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
1. スケジュールの名前の右側にある縦 3 点のドットをクリックします
1. `Delete` をクリックします
1. `Delete` をクリックして削除を確定します

### 例外デプロイメントの実行

スケジュールの例外デプロイメントを実行するには、対象のスケジュール Sync プロジェクトに移動し、scheduled pipelines ページに移動して、sync 項目の再生ボタンをクリックします。これによりスケジュールの sync ジョブがトリガーされます。

## よくある問題とトラブルシューティング

これは必要に応じて項目が追加されていく、生きたセクションです。

### マージ後にスケジュールの変更が反映されない

スケジュールは `Standard` デプロイメントタイプに従うため、通常のデプロイメントサイクル中 (または例外デプロイメントが行われたとき) にのみデプロイされます。

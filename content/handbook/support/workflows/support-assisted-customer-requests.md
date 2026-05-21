---
title: サポートが支援する顧客リクエスト
description: "GitLab サポートが支援する顧客リクエスト"
category: References
upstream_path: /handbook/support/workflows/support-assisted-customer-requests/
upstream_sha: c8fa138220d8c6d69f811b17242d6d2f08e4e409
translated_at: "2026-05-08T03:10:58Z"
translator: claude
stale: false
lastmod: "2024-06-27T22:14:31+00:00"
---

## 概要

時として Support は、アプリケーションの通常の構造内では不可能なアクションを必要とするリクエストにおいて、顧客の支援を求められることがあります。

- 一連のユーザーをある ID プロバイダから別の ID プロバイダに移行する
- 一連のユーザーから 2FA を一括削除する

このワークフローの目的は、スケジュールされた顧客作業の前・最中・後に必要なステップを含む runbook の構造を示すことです。

**runbook** とは、特定の状況をどのように扱うかを詳細に記載した内部ドキュメントです。非常に技術的な内容で、アクションを実行する IC を対象としています。

## runbook を保管するプロジェクト

runbook は [runbook プロジェクト](https://gitlab.com/gitlab-com/support/runbooks/-/issues) の Issue として保管されます。
runbook の情報の性質上、内容は `confidential` となります。

## runbook の構造

### ヘッダー

| Runbook 名          |   |
|---------------------|---|
| Runbook の説明      |   |
| DRI                 |   |
| 実施スケジュール    |   |
| ミーティング URL    |   |
| GitLab Issue        |   |

Runbook 名:

#### Runbook 名

runbook の名前。次の形式を使用してください: `顧客名` - `依頼されたタスク`
たとえば、Acme が私たちに全グループでの 2FA 強制を依頼した場合、名前は次のようになります:
`Acme - Enforce 2FA on All Groups`

#### Runbook の説明

タスクから期待される結果を含む、行う作業の簡単な要約。

#### DRI

タスクのオーナーで、スケジュールと実行のメイン窓口。

#### 実施スケジュール

顧客とタスクを行うために合意した日時。タイムゾーンを含めます。

#### ミーティング URL

使用する Zoom ミーティング URL。

#### GitLab Issue

このリクエスト用に作成された GitLab Issue へのリンク。

### GitLab - 連絡先

| 名前 | 役割 | 説明 |
|-------------|------|-------------|
|             |      |             |

通話に GitLab から参加する人とそのタスク中の役割を示す表。

### 顧客 - 連絡先

| 名前 | 役割 | 説明 |
|-------------|------|-------------|
|             |      |             |

顧客の連絡先セクションには、顧客チームから通話に参加する人とその役割が含まれます。
この表は任意ですが、タスク中の効率を高めるために有用な要素です。

### 通話前チェックリスト

完了した項目にマークを付けるか、それを妨げる詳細を記載してください。

- [ ] `#support_gitlab-com` または `#support_self-managed` および `#support_manager` Slack チャンネルに、runbook リンクと共に作業内容を通知する

- [ ] ロールバック計画がどの地域のエンジニアからでも実行できることを確認する

- [ ] 通話前にドライランは実施したか？

- [ ] 実行されたアクションのログを作成する手段があるか？

### Runbook - タスク

可能な場合、タスク名をそれを記載しているプロジェクトやハンドブックページにリンクしてください。

| タスク | 結果 | 所要時間 |
|-------------|---------|----------|
|             |         |          |

#### 例

| タスク | 結果 | 所要時間 |
|-------------|---------|----------|
| 提供されたユーザーの状態を確認 | 成功 | 10m |
| MUser コンソールメソッドでユーザーを変更 | 成功 | 1h15m |

### ロールバック計画

ロールバック計画では、実行されたアクションを元に戻すための手順へのリンクを提供します。ロールバックが簡単な説明だけで済む場合は、runbook に直接追加できます。

### 通話後チェックリスト

- [ ] `#support_gitlab-com` または `#support_self-managed` および `#support_manager` Slack チャンネルに、作業の完了、現在の状態、フォローアップが必要な場合はそのドキュメントリンクを通知する。

### 完全な Runbook の例

| Runbook 名          |  Acme - Enforce 2FA on all groups |
|---------------------|---|
| Runbook の説明      |  Acme Inc. は、私たちに 2500 ある全グループで 2FA を強制するよう依頼している  |
| DRI                 |  `@john_doe` |
| 実施スケジュール    |  `2020-10-10 - 23:30 PST` |
| ミーティング URL    |   example.zoom.com/my/example.meeting|
| GitLab Issue        |   `https://gitlab.com/gitlab-com/demo/example/example-project/-/issues/1` |

#### GitLab 連絡先

| 名前 | 役割 | 説明 |
|-------------|------|-------------|
| John Doe    |  技術的実行  | 変更中の技術的実行 |
| Jane Smith  |  コミュニケーションおよび技術的支援  | 更新の担当および `技術的実行` の役割をサポート |

#### 顧客連絡先

| 名前 | 役割 | 説明 |
|-------------|------|-------------|
| Tom Blogs | システムエンジニア | 作業の検証とサポート |
| harry Page | IT マネージャー | 顧客側の調整 |

#### 通話前チェックリスト

```plain
[x] - Inform on `#support_gitlab-com` or `#support_self-managed` and `#support_manager` slack channel about the work to be done with a runbook link

[x] - Verify that any rollback plan can be execute by an engineer from every region

[ ] - Has a dry-run been performed before the call?

    `Dry-run cannot be completed due to change requirements`

[x] - Do we have a way to create logs from the actions performed.
```

#### Runbook - タスク

| タスク | 結果 | 所要時間 |
|-------------|---------|----------|
| 提供されたユーザーの状態を確認 | | |
| ユーザーリストから 2FA を削除 | | |
| エラーが出たユーザーをレビュー | | |
| 結果を Issue に更新 | | |

#### ロールバック計画

この変更で使用するメソッドにはオプションのパラメータ `status` があり、デフォルトは `disable` です。ロールバックには同じメソッドを `status: 'enable'` というパラメータを追加して実行する必要があります。

#### 通話後チェックリスト

[x] - Inform on `#support_gitlab-com` or `#support_self-managed` and `#support_manager` slack channel the about the work completion, the current state, and if any follow up is necessary with documentation links.

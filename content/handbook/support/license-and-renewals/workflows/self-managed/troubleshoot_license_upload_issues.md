---
title: ライセンスアクティベーションエラーのトラブルシューティングと分類
description: "GitLab ライセンスアクティベーションエラーのトラブルシューティングと分類方法"
category: GitLab Self-Managed licenses
upstream_path: /handbook/support/license-and-renewals/workflows/self-managed/troubleshoot_license_upload_issues/
upstream_sha: 6c73093986242c762a8f4a2769fbfba69b31fcf9
translated_at: "2026-05-08T12:45:20Z"
translator: claude
stale: false
lastmod: "2024-06-27T22:14:31+00:00"
---

顧客が GitLab Self-Managed インスタンスにライセンスをアップロードする際、次のエラーメッセージに遭遇したと報告することがあります:

> During the year before this license started, this GitLab installation had 286
> active users, exceeding this license's limit of 250 by 36 users. Please
> upload a license for at least 286 users or contact sales at [redacted]@gitlab.com.

このエラーは、以下の 3 つの値の **いずれか** が正しくない場合に表示されます:

| キーフィールド | 定義および真実の情報源 |
|------|-------|
| Users count |   **GitLab 13.6 以降**: billable.users コマンドで最小値を特定できます: `sudo gitlab-rails runner 'p User.billable.count'` <br/><br/>**GitLab 13.5 以前**: active.users コマンドで最小値を特定します: `sudo gitlab-rails runner 'p User.active.count'`  |
| Previous users count |   CustomerDot や使用状況などの内部数値に基づいて推定を試みることができます。ただし、1 つの期間に対して複数のライセンスが生成される可能性があるため、これは確実ではありません。代わりに、最良の識別子はシステム自体です。このため、`Admin Area -> Overview -> Dashboard` のユーザー統計パネルのスクリーンショットをリクエストします。Previous users count は左上のウィジェットの `Users in License` です。 |
| True-up count |   この値の最良の識別子は、Max Users から Previous users count を引いた値です。Max カウントには historical.max コマンドを使用することを推奨します: `sudo gitlab-rails runner 'p ::HistoricalData.max_historical_user_count'`。<br/><br/> **重要**: [GitLab 13.9 以降](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/54221)、`max_historical_user_count` メソッドは `from:` および `to:` で指定される日付範囲の 2 つの引数を必要とします: `sudo gitlab-rails runner 'p ::HistoricalData.max_historical_user_count(from: "2020-01-01", to: "2021-01-01")'`。 |

**注**: Ultimate ライセンスでは、ゲストユーザーはライセンス対象ユーザー数にカウントされません。そのため、GitLab 13.5 以前では、`User.active.count` は Admin UI ダッシュボードに表示される `Active Users` カウントよりも大きな値となります。GitLab 13.6 以降では、`User.billable.count` がカウントからゲストを正確に除外します。これは、顧客が Ultimate からダウングレードする場合や Ultimate トライアルを利用している場合に混乱を招く可能性があります。なぜなら、`Active Users` として表示されている数ではなく `User.active.count` の数に対するライセンスが必要だからです。

Zendesk マクロ [`Subscriptions::Active Users`](https://gitlab.com/search?utf8=%E2%9C%93&group_id=2573624&project_id=17008590&scope=&search_code=true&snippets=false&repository_ref=master&nav_source=navbar&search=id%3A+360062275600) を使用して、顧客にこの情報を尋ねることができます。

## 例

**例 1**

- 10 ユーザーのサブスクリプション
- サブスクリプション期間中、最大 15 ユーザーになる
- 更新前に 3 ユーザーをブロック
- 更新時、ライセンスは次のように生成する必要があります: `Users count: 12`（またはそれ以上）、`Previous users count: 10`、`Trueup count: 5`

**例 2**

- 12 月に 12 人のアクティブユーザーのみで開始する 20 ユーザーのサブスクリプション
- 3 月に 5 ユーザーがブロックされ、アクティブユーザーは 7 人になる（最大 12 ユーザー）
- 4 月に新規 5 ユーザーが追加され、アクティブユーザーは 12 人になる（最大 12 ユーザー）
- 7 月にさらに新規 10 ユーザーが追加され、アクティブユーザーは 22 人になる（最大 22 ユーザー）
- 8 月に 5 ユーザーがブロックされ、アクティブユーザーは 17 人になる（最大 22 ユーザー）
- 更新時、ライセンスは次のように生成する必要があります: `Users count: 17`（またはそれ以上）、`Previous users count: 20`、`Trueup count: 2`

**例 3**

- 10 ユーザーの Ultimate サブスクリプション
- サブスクリプション期間中、12 人のアクティブユーザー（うち 2 人のゲストユーザーを含む）
- 更新時、顧客が Premium ライセンスにダウングレードする
- ライセンスは次のように生成する必要があります: `Users count: 12`（またはそれ以上）、`Previous users count: 10`、`Trueup count: 0`

## ライセンスアクティベーション失敗を追跡するための適切な Zendesk フォームフィールド設定のワークフロー

[超過適用によりインスタンスをアクティベートできない顧客の数を識別する手段を提供するプロセスを作成する](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/4959) Issue で詳述されているとおり、Zendesk の L&R フォームフィールドが変更され、顧客がライセンスファイルまたはアクティベーションコードを使用してライセンスをアクティベートできなかったチケットを、サポートエンジニアが分類できるようになりました。

このようなシナリオでは、L&R サポートエンジニアは以下のワークフローに従ってチケットを適切に分類する必要があります。

### 1. フィールド: L&R - Category

- `Self-managed license related matters` に設定

### 2. フィールド: L&R - SM Subcategory

- `I am getting errors applying my license or activation code` に設定

### 3. フィールド: Transactions Issue Type

- 顧客がライセンスファイルを使用した場合は `License troubleshooting (SM only)` に設定
- 顧客がアクティベーションコードを使用した場合は `Cloud Licensing (SM only)` に設定

### 4. フィールド: `L&R: License troubleshooting`

*このフィールドはステップ 3 が完了するまで非表示です。*

顧客が遭遇した問題を最も適切に説明するオプションを選択します:

- `Customer issue`
- `Multiple unique subscriptions`
- `Multi-year license conflict (formerly named "Multi-year license")`
- `New license activation bug`
- `Transition legacy to cloud`

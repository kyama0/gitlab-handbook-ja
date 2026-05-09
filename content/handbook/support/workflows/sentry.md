---
title: Sentry
category: Infrastructure for troubleshooting
description: Sentry を使って GitLab.com または CustomersDot のエラーを調査する方法
upstream_path: /handbook/support/workflows/sentry/
upstream_sha: c8fa138220d8c6d69f811b17242d6d2f08e4e409
translated_at: "2026-05-08T02:00:00Z"
translator: claude
stale: false
---

## 概要

*注意*: Sentry はアプリケーションを「Sentry チーム」に編成しています。さまざまなアプリケーションや環境にまたがるエラーを調査するために、私たちが主に利用しているチームは `#gitlab`（本番 Rails アプリケーション向け）と `#gitlab-internal`（非本番環境向け）です。これらの Sentry チームに参加することで、アプリケーションエラーを閲覧できるようになります。

Sentry でユーザーに関連するエラーを特定するには、以下の Sentry プロジェクトのうち少なくとも 1 つで記録されたエラーを確認してみてください:

1. [`gitlabcom`](https://new-sentry.gitlab.net/organizations/gitlab/projects/gitlabcom/)
1. [`gitlabcom-clientside`](https://new-sentry.gitlab.net/organizations/gitlab/projects/gitlabcom-clientside/?)
1. [`customersgitlabcom`](https://new-sentry.gitlab.net/organizations/gitlab/projects/customersdot/)

メインのプロジェクトランディングページから、アプリケーションとそのパフォーマンスの概要を確認できます。ページ下部には最近の Issue が表示されており、右側の `Open in issues` をクリックするとプロジェクトのすべての Issue ページに遷移します。

1. エラー発生時にユーザーが訪問していた完全な URL と、検索に必要であればユーザー ID を取得します。
1. [Sentry にログイン](https://new-sentry.gitlab.net/organizations/gitlab/issues/?project=3)します。
1. 検索フィールドにクエリを入力します。たとえば、自分の管理者ユーザーでエラーを再現した後など。Sentry ではユーザー名は大文字小文字を区別する点にご注意ください。

```plaintext
is:unresolved user.username:your-admin
```

GitLab.com の特定のページについては、`user.id:` または `url:` も使用できます。

`user.id` を取得するには、以下のいずれかの方法を使用します:

- ChatOps: `/chatops run user find <username or email>` を実行
- 管理者アカウント: [GitLab User Lookup](/handbook/security/customer-support-operations/zendesk/apps/global#gitlab-super-app) Zendesk アプリで管理者リンクに移動
- [Users API](https://docs.gitlab.com/api/users/#as-a-regular-user): メールまたはユーザー名でユーザーを検索

検索によって、報告したユーザーではなく別のユーザーの情報（ユーザー ID、URL など）を参照しているように見える Sentry の Issue が見つかることがあります。これが起こり、その特定の報告者向けに Issue を作成する必要がある場合は、以下のように `Events` タブをクリックするだけで、その Issue の影響を受けたすべてのユーザーのリストを表示できます。

![Sentry events タブ](/images/support/sentry-events-tab.png)

その後、特定のイベントをクリックすると、そのユーザーの Sentry Issue を確認できます。

詳しい情報については、[Sentry ガイド](https://docs.sentry.io/concepts/search/) と [このプレゼンテーション](https://drive.google.com/drive/u/0/search?q=Sentry%20parent:1UT1VKASEzvCzWVX9fDLkYhDju35NxiLT)（GitLab 内部のみ）を参照してください。

### `gitlabcom` Sentry プロジェクトでユーザー名を使って検索する

ユーザーの `username` がわかっている場合、Sentry の `gitlabcom` プロジェクトでそのユーザーのエラーメッセージを見つけます:

- [gitlabcom Sentry プロジェクト](https://new-sentry.gitlab.net/organizations/gitlab/issues/?project=3)に移動する
- `user.username:example` を使う（`example` を GitLab の実際のユーザー名に置き換える）
- Sentry Issue を開く → `All Events` をクリック
- 再度 `user.username:example` を使って特定のユーザーでフィルタする
- 任意のイベントをクリックしてエラーメッセージの詳細を確認する

### `gitlabcom-clientside` Sentry プロジェクトでユーザー ID を使って検索する

ユーザーの `ID` がわかっている場合、Sentry の `gitlabcom-clientside` プロジェクトでそのユーザーのエラーメッセージを見つけます:

- [gitlabcom-clientside Sentry プロジェクト](https://new-sentry.gitlab.net/organizations/gitlab/issues/?project=4)に移動する
- `user.id:userID` を使う（`userID` を GitLab の実際の ID に置き換える）
- Sentry Issue を開く → `All Events` をクリック
- 再度 `user.id:userID` を使って特定のユーザーでフィルタする
- 任意のイベントをクリックしてエラーメッセージの詳細を確認する

### `customersgitlabcom` Sentry プロジェクトでの検索

[ワークフロー](/handbook/support/license-and-renewals/workflows/customersdot/troubleshoot_errors_while_making_purchases#getting-error-message-from-sentry)を使用して、[Customers Portal Sentry プロジェクト](https://new-sentry.gitlab.net/organizations/gitlab/issues/?project=8)でエラーメッセージを見つけます。

### Correlation ID による検索

ほとんどの場合、Sentry のエラーは `user.id:` を使用して検索することで見つけられますが、必ずしもそうとは限りません。場合によっては、まず Kibana を検索して Correlation ID を特定し、その後 Sentry で検索する必要があります。

以下の例では、お客様が[グループの通知メールを変更しようとして](https://docs.gitlab.com/user/profile/notifications/#group-notifications)、ドロップダウンリストから希望のアドレスを選択した際に `500` エラーが発生しています。Sentry で `user.id:` を検索しても何も見つからないため、Kibana で `500` を検索して Correlation ID を取得し、それを Sentry に提供する必要があります。

1. Kibana で `json.username` にお客様の GitLab.com ユーザー名、`json.controller` に `Profiles::NotificationsController`、`json.status` に `500` をポジティブフィルタとして追加します。
1. 左側のメニューを使用して、`json.path`、`json.controller`、`json.status`、`json.correlation_id` フィールドを検索結果に追加します。設定した期間内にエラーが発生していれば、以下のような結果が得られるはずです。

   ![Kibana 検索結果](/images/support/correlationid_kibana_results.jpg)

1. Correlation ID の値を 1 つ選び、Sentry に移動して `correlation_id:` を使って検索すると結果が得られるはずです。

   ![Sentry 検索結果](/images/support/correlationid_sentry_results.jpg)

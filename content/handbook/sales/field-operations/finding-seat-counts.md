---
title: 成長リソース
upstream_path: /handbook/sales/field-operations/finding-seat-counts/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-11T10:00:00Z"
translator: claude
stale: false
lastmod: "2024-06-27T15:57:54+00:00"
---

## 顧客のシート数を調べる

シート拡張は、私たちの収益成長の中核です。これは IACV と Net Retention/Gross Retention の両方に強い影響を与えます。サブスクリプションのシート数を決定する方法はいくつかあります。

### GitLab.com

GitLab.com の顧客のシート数を確認する最良の方法は、Customers Portal の管理セクションにアクセスすることです。

1. [https://customers.gitlab.com/admins/sign_in](https://customers.gitlab.com/admins/sign_in) にアクセスします
1. Okta でサインインします
    1. アクセス権がない場合は、Access Request を開いてください
1. ログインしたら、左側のメニューから [Customers](https://customers.gitlab.com/admin/customer) オプションに移動します
1. `Filter` テキストフィールドに、サブスクリプションに関連付けられている会社名またはメールアドレスを入力します
1. 結果が読み込まれたら、右側のセクションから「i」アイコンを選択します
1. 表示された `Details` ページで、`GitLab Groups` に移動します
1. ここで、Namespace と対応するサブスクリプションのシート数を確認できます
    1. Seats in Subscription は支払われた数です
    1. Seats Currently in Use はアクティブな数です

最終的に、Customer Portal 管理者がこの情報の最も正確かつ最新のビューを持つことに注意することが重要です。

### Self-managed

#### License Usage アプリ

Self-managed 顧客のシート利用状況を理解する最良の方法は、[License Usage Salesforce アプリ](/handbook/sales/field-operations/sales-systems/license-usage-app/)を使用することです

#### Version アプリ

License Usage Salesforce アプリの代替手段は、[Version アプリ](https://version.gitlab.com)です。このアプリケーションにログインするには、開発者アクセスが必要です。ログインしたら、Hosts タブに移動します。そこで、ライセンスティアでフィルタリングし、アクティブユーザー数、過去の最大ユーザー数、最後の使用 ping やバージョンなどの重要な情報を確認できます。

## シート数の伝達 / 顧客の情報検索のサポート - GitLab.com

顧客は、個人サブスクリプションとグループサブスクリプションの両方を持っているため、何を支払うべきかについて混乱することがあります。正しいグループの請求情報を簡単に見つけられるようにするため、次の形式の URL でリンクを送信できます:

`https://gitlab.com/groups/[group-path-name]/-/billings`

`group-path-name` を見つけるには、Customers Portal 管理画面の `GitLab Groups` ページに移動し（前述の手順を参照）、`Path` 列の値をコピーします。

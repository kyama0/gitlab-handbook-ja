---
title: "HelpLab 情報ガイド"
description: "GitLab の ServiceNow 実装に関する FAQ と操作ガイドを掲載しています。"
upstream_path: "/handbook/business-technology/enterprise-applications/guides/helplab-guide/"
upstream_sha: "82fbf0e2626c904de9d6bd562ea4359a0c7e8ab2"
translated_at: "2026-07-09T08:23:34+09:00"
translator: codex
stale: false
lastmod: "2026-07-08T11:09:01-04:00"
---

## HelpLab とは

HelpLab は、GitLab が ServiceNow プラットフォームにつけたブランド名です。

[ServiceNow](https://www.servicenow.com/) は SaaS 型のエンタープライズ サービス マネジメント プラットフォームであり、サービスライフサイクル管理を一元化・自動化することで組織の業務効率を向上させます。シンプルに言えば、サポートチケットシステムです。これにより、私たちはより迅速かつ正確なサポートを提供し、チームメンバーの生産性を最大化できます。

## なぜ ServiceNow なのか

このソリューションは `#people-connect`、`#stock-admin`、`#expense-reporting-inquiries`、`#payroll` の各 Slack チャンネルを単一の窓口に統合します。さまざまな質問に対応する Slack チャンネルをいちいち探す必要はなく、必要なサポートをすべて一か所で受けられるようになります。Slack の Compass アプリ（上部の検索バーに「Compass」と入力して探してください）または it-help@gitlab.com からお問い合わせください。

また、このソリューションはチームメンバーの機密情報をセキュアかつ機密に保つという私たちの継続的な取り組みを支援します。サポートを依頼する際、プライバシーが最大限に配慮されながら対応が行われることが保証されます。

## いつ稼働しますか？

ServiceNow（別名 HelpLab）は 2024-04-25 に稼働開始しました。

## HelpLab ではどのチームが対応していますか？

HelpLab を通じて以下のチームが対応しています:

- [People Operations](https://internal.gitlab.com/handbook/people-group/people-operations/people-operations/)
- [People Compliance](/handbook/people-group/people-compliance/)
- [バックグラウンドチェック](/handbook/people-group/contracts-probation-periods/#background-screenings)
- [グローバル福利厚生](/handbook/total-rewards/benefits/general-and-entity-benefits/)
- [People Technology and Analytics](/job-description-library/people-group/people-systems-and-analytics/)
- [Team Member Relations](/handbook/people-group/team-member-relations/)
- [休暇管理](/handbook/people-policies/leave-of-absence/) & [有給休暇](/handbook/people-group/time-off-and-absence/time-off-types/)
- [Stock Admin](/handbook/total-rewards/stock-options/)
- [経費精算](/handbook/finance/expenses/)
- [給与計算（米国・海外）](/handbook/finance/payroll/)
- [Sales Commissions](https://internal.gitlab.com/handbook/sales/sales-commission/#fy23-sales-commission-policies)
- [CorpSec End User Services](/handbook/security/corporate/end-user-services/)
- [Enterprise Applications](/handbook/business-technology)

## HelpLab の使い方

### HelpLab へのアクセス

HelpLab は Okta 経由でアクセスできます。プラットフォームにアクセスするには:

1. [Okta ホームページ](https://gitlab.okta.com/app/UserHome#)にログインします。
1. 検索バーで HelpLab を検索します。
1. HelpLab ボタンをクリックします。
   - ユーザーがログインした状態で新しいタブが開きます。

### チケット / リクエストの作成

1. Okta 経由で HelpLab にログインします。ServiceNow Fulfiller ライセンスをお持ちの場合、他のチームへのリクエストを開くには [メインダッシュボード](https://helplab.gitlab.systems/esc?id=ec_pro_dashboard) に移動する必要があります。デフォルトでは自分のチームのリクエストのみが表示されます。
1. 上部のメインメニューに移動し、メニューオプションを閲覧してサポートを依頼したいチームを見つけます。

![helplab1](/images/business-technology/enterprise-applications/guides/helplab-guide/helplab1.png)

1. サポートが必要なチームを特定したら、質問や Issue に関連するトピックまたはカテゴリを探します。
   - どのトピックを選べばよいかわからない場合、またはリクエストが特定のカテゴリに当てはまらない場合は、各チームで提供されている `General Request`（一般リクエスト）を開くことを検討してください。このオプションでは、特定のトピックを選択しなくても、問題や質問の概要を入力できます。
1. リクエストに必要な詳細を入力し、追加のコンテキストを提供するために必要な書類やスクリーンショットを添付します。
1. リクエストの正確性と完全性を確認します。
1. 「Submit」ボタンをクリックして、関連チームにリクエストを送信します。

### チームメンバーのチケット / リクエストへの追加

リクエストを提出した後、マネージャーなどのチームメンバーを `ウォッチリスト` に追加できます。ウォッチリストにチームメンバーを追加すると、そのメンバーは通知を受け取り、ケースの状況を把握できるようになります。この機能は、ケースの進捗を確認する必要がある方や、更新・解決について通知が必要な関係者がいる場合に役立ちます。

![helplab2](/images/business-technology/enterprise-applications/guides/helplab-guide/helplab2.png)

### オープンリクエストの追跡と管理

「My Requests」セクションに移動します。

![helplab3](/images/business-technology/enterprise-applications/guides/helplab-guide/helplab3.png)

ここには、すべてのオープンリクエストが現在のステータスと更新内容とともに一覧表示されます。特定のリクエストをクリックすると、進捗の更新やコメントなどの詳細を確認できます。

また、`Open`（未解決）または `Closed`（解決済み）でフィルタリングしたり、検索バーを使って特定のリクエストを素早く検索することもできます。HelpLab の Slack アプリを使ってリクエストを送信した場合も、ここで進捗を追跡できます。

![helplab4](/images/business-technology/enterprise-applications/guides/helplab-guide/helplab4.png)

## HelpLab サポート

ローンチ後に HelpLab 関連の問題が発生した場合は、Slack の Compass アプリ（上部の検索バーに「Compass」と入力して探してください）または it-help@gitlab.com からお問い合わせください。

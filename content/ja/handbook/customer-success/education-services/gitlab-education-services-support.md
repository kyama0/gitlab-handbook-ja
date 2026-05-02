---
title: "GitLab 教育サービスサポートハンドブック"
description: "このハンドブックでは、教育サービスチームおよび使用されている該当システムへのサポート問い合わせの処理方法を詳述します。"
upstream_path: /handbook/customer-success/education-services/gitlab-education-services-support/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
---

## 概要

このハンドブックでは、教育サービスチームおよび使用されている該当システムへのサポート問い合わせの処理方法を詳述します。

## 使用中のサポートシステム

---

- [ZenDesk](https://gitlab.zendesk.com/agent)
- [LevelUp Google グループ](https://groups.google.com/a/gitlab.com/g/levelup) (<levelup@gitlab.com> の受信箱)
- [認定グレーディング Wiki](https://gitlab.com/gitlab-com/customer-success/professional-services-group/education-services/-/wikis/home)
- [Zapier](https://zapier.com/app/zaps/folder/840205)
- [Credly](https://www.credly.com/organizations/gitlab/badges/badges)

これらのシステムへのアクセス権がない場合は、[アクセスリクエスト](/handbook/security/corporate/end-user-services/access-requests/access-requests/)を完了してください。これらのシステムの所有者またはアカウントをプロビジョニングできる担当者については、[GitLab テックスタック](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml)を参照してください。

### ZenDesk の使用

---

教育サービスチームは ZenDesk のフルエージェントライセンスが限られており、ユーザーが顧客チケットに対応できます。このチームでフルエージェントアクセスを持つ担当者については、[こちら](https://gitlab.com/gitlab-com/customer-success/professional-services-group/education-services/-/wikis/Education-Services-Support-Delegates)を参照してください。

1. ZenDesk にアクセスするには、Okta アカウントからアプリケーションを起動します。
2. 左側にある **Views** ボタンをクリックします。
3. **My Assigned Tickets**、**Professional Services-Triage**、**Professional Services- Paid**、**Professional Services- Free** の 4 つのビューが表示されます。
4. **My Assigned Tickets** セクションから始めます。ここには割り当て済みまたは既に返答したチケットがあり、これらを最初に対応する必要があります。
5. 新しいチケットについては、**Professional Services- Triage** ビューに移動します。これは L&D と教育サービスが所有・管理しています。
6. チケットに返答・解決するには、チケットを自分に割り当て、フォームデータにパブリック返信フィールドで回答を入力し、**Submit** ボタンをクリックします。チケットが Solved か Pending かに応じて適切なステータスを選択します。
7. すべてのリージョンまたは優先サポートリージョンで未割り当てのオープンチケットがある場合は、自分に割り当て、フォームデータを入力し、可能であればパブリック返信を行います。
8. パブリック返信ができない場合は、チケットを前進させるため同僚に支援を求めてください。
    - チケットが Level Up や教育サービスに関係なく、GitLab に関する一般的な質問や Sales に関するものである場合は、**Apply Macro** ボタンをクリックし、**General > Forms > Incorrect Form Used** を選択して **Submit** をクリックします。
    - チケットが Sales トレーニングや認定に関するものである場合は、次の Slack チャンネルでフィールドイネーブルメントチームに連絡してください: #field-enablement-team。解決策を受け取ったら、チケットに返信して Solved として閉じます。
    - チケットが Remote Foundations、TeamOps などの Learning and Development トレーニングや認定に関するものである場合は、[こちら](https://gitlab.com/gitlab-com/customer-success/professional-services-group/education-services/-/wikis/Education-Services-Support-Delegates)に記載されている適切な担当者にチケットを割り当てます。
9. 教育サービスチームは Professional Services- Triage と Professional Services- Paid のビューのみを担当し、Professional Services- Free ビューは Learning and Development チームが所有しています。

### LevelUp 受信箱の管理

---

GitLab 教育サービスチームのすべてのメンバーは、GitLab Level Up サポート受信箱にアクセスできます。このグループにアクセスできない場合は、[アクセスリクエスト](/handbook/security/corporate/end-user-services/access-requests/access-requests/)を完了してください。チームは週単位でローテーションして受信箱の監視を担当します。現在の担当者は [GitLab 教育サービスカレンダー](https://calendar.google.com/calendar/embed?src=c_2f86c1ceb88f08d428c3406c956335383e323ef8bbd19fde5379a8ab0f48b4b1%40group.calendar.google.com&ctz=America%2FDenver)で確認できます。

1. Level Up サポート Google グループに参加している場合は、<Levelup@gitlab.com> 受信箱へのすべてのメールを受信します。
2. 担当週の場合は、月曜日から金曜日の通常業務時間内にサポートメールに返信します。
    - 提案: 受信箱を整理し、サポートメールを通常のメールから分離するために[フィルターを作成](/handbook/tools-and-tips/#filters)することを検討してください。
3. Level Up 受信箱では、プラットフォーム自体のシステムサポート、トレーニングの問題、認定の問題、またはデモクラウドの懸念事項など、さまざまなサポート問い合わせを受け取ります。
4. ほとんどのサポートシナリオに対する返答のテンプレートを[こちら](https://docs.google.com/document/d/1IjXvfGfQ066jWbIom-ySGZKO2tFMzENkCJn3THNCAPQ/edit?usp=sharing)に用意しています。
5. 上記の返答またはハンドブックを使用してサポート問い合わせに回答できない場合は、Slack の #edu_services_team チャンネルに問い合わせを投稿してください。

### Zapier

---

システム間のインテグレーションと Webhook（バッジの発行、自動メッセージなど）に使用される Zapier にアクセスするには、Zapier 1Pass Vault へのアクセス権が必要です。アクセス権がない場合は、[アクセスリクエスト](/handbook/security/corporate/end-user-services/access-requests/access-requests/)を完了してください。

教育サービスチームに関連するすべての Zap は、[Zapier](https://zapier.com/app/zaps/folder/840205) の以下のフォルダ内にあります。

### Credly

---

Credly にアクセスするには、[こちら](https://info.credly.com/)のサイトにログインしてください。アクセス権がない場合は、[アクセスリクエスト](/handbook/security/corporate/end-user-services/access-requests/access-requests/)を完了してください。

[GitLab 組織プロフィール](https://www.credly.com/organizations/gitlab/badges)

[Credly 発行者サポートセンター](https://credlyissuer.zendesk.com/hc/en-us)

1. [バッジの発行方法](https://credlyissuer.zendesk.com/hc/en-us/articles/360027660772-How-do-I-issue-a-badge-to-a-single-earner-)
    - [バッジの一括発行](https://credlyissuer.zendesk.com/hc/en-us/articles/360027660752-How-do-I-issue-badges-in-bulk-to-multiple-earners-)
    - すべてのバッジは Zapier の Webhook を通じてトリガーされます。[認定提出物](https://gitlab.com/gitlab-com/customer-success/professional-services-group/education-services/-/wikis/Certifications-form-submission-and-responses-link-centralisation)に合格結果が確認できる場合は、手動でバッジを発行できますが、インテグレーションの問題を調査するために #edu_services_team Slack チャンネルに Ping してください。
1. バッジのメールを変更する
    - バッジが Accepted の場合:
        - バッジをクリックして Revoke ボタンをクリックし、新しいメールアドレスに再発行する必要があります。
    - バッジが Pending の場合:
        - バッジをクリックして Replace ボタンを使用できます。メールフィールドの横に編集アイコンがあり、メールを変更できます。
1. [Credly からのアナリティクスの取得](https://credlyissuer.zendesk.com/hc/en-us/articles/360027938091-What-analytics-can-I-view-as-an-administrator-for-my-organization-)
    - 発行された認定は月次ベースで、対象ごとに区分けして[こちら](https://docs.google.com/spreadsheets/d/1g1lhtYXXWS2P-Djfru03aRdbOF4a13La-WYQPjwVLks/edit?usp=sharing)の Google スプレッドシートで追跡しています。これは教育サービスマネージャーが毎月更新します。
1. [新しいバッジテンプレートの作成](https://credlyissuer.zendesk.com/hc/en-us/articles/360028654791-How-do-I-create-a-badge-template-)
    - 新しいバッジを作成する際は、GitLab ブランディングガイドラインに沿ったバッジ画像を作成するためにマーケティングデザインチームを関与させてください。この[Issue テンプレート](https://gitlab.com/gitlab-com/marketing/corporate_marketing/corporate-marketing/-/issues/new?issuable_template=request-design-general&_gl=1*1k86ng8*_ga*Njk5OTc1OTcxLjE2NTg3ODM3ODE.*_ga_ENFH3X7M5Y*MTY3MzI5NTQwNi4xMzMuMS4xNjczMjk1NDEwLjAuMC4w)を使用してリクエストを開くことができます。

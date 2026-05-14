---
title: 召喚状、裁判所命令、その他のユーザー情報の請求
description: "他の所定のワークフローに当てはまらず、Legal チームの判断が必要となる可能性がある請求のためのワークフロー"
category: GitLab.com
subcategory: Legal
upstream_path: /handbook/support/workflows/information-request/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-14T00:00:00Z"
translator: claude
stale: false
---

Legal チームからの判断が必要と思われるリクエストが届くことがあります。このワークフローでは、所定のワークフローに当てはまらないようなリクエストの取り扱い方法を説明します。

## ワークフロー

### 召喚状や裁判所命令の受領

GitLab ユーザー、そのデータ、活動に関する情報を求める召喚状、その他の法的請求が届くことがあります。
このワークフローでは、これらの請求の取り扱いと、当社の弁護士および CISO が承認した場合に情報を提供するに至る後続のワークフローを明確にします。

*Note:* Legal に関連すると思われるが、召喚状でも裁判所命令でもないチケットが届いた場合は、その他の [Legal ワークフロー](/handbook/support/workflows/#legal) のリストを確認してください。

別のワークフロー（DMCA、GDPR、情報請求など）でカバーされていない召喚状や裁判所命令が届いた場合:

1. メールを <legal@gitlab.com> に転送します。
1. Slack の #legal チャンネルで Legal チームに知らせます。
1. [`Legal::Subpoena or court order`](https://gitlab.com/search?utf8=%E2%9C%93&group_id=2573624&project_id=17008590&scope=&search_code=true&snippets=false&repository_ref=master&nav_source=navbar&search=id%3A+360056759300) マクロでチケットに返信します。

### GitLab.com 固有のサポートポリシー

これらのワークフローは、ユーザーの質問が [Support の特定のポリシー](https://about.gitlab.com/support/gitlab-com-policies) で取り扱われている場合に使用されます。

#### Namespace と商標の主張

[`Legal::Namespace and Trademark`](https://gitlab.com/search?utf8=%E2%9C%93&group_id=2573624&project_id=17008590&scope=&search_code=true&snippets=false&repository_ref=master&nav_source=navbar&search=id%3A+360056759260) マクロでチケットに返信します。

#### 所有権紛争

*Note: このワークフローはグループの所有権に関するリクエストに対応するためのものです。詳細については [GitLab の Ownership Dispute Policy](https://support.gitlab.com/hc/en-us/articles/11626493890844-GitLab-com-Specific-Support-Policies#ownership-disputes) を参照してください。正しいものを使っているかを確認するため、その他の [所有権関連ワークフロー](/handbook/support/workflows/account_verification/) も併せて確認できます。*

[`Legal::Ownership disputes`](https://gitlab.com/search?utf8=%E2%9C%93&group_id=2573624&project_id=17008590&scope=&search_code=true&snippets=false&repository_ref=master&nav_source=navbar&search=id%3A+360056759320) マクロでチケットに返信します。

#### ログ請求

[ログ請求のワークフロー](/handbook/support/workflows/log_requests/) を参照してください。

### その他の Legal 関連の質問

Legal の判断が必要と思われるが、所定のワークフローに当てはまらないリクエストが届くことがあります。そのような状況では、このワークフローに従ってください:

1. リクエストの詳細に応じて [Legal への問い合わせ](/handbook/legal/#3-other-legal-requests) の手順に従います。
1. [`Legal::General`](https://gitlab.com/search?utf8=%E2%9C%93&group_id=2573624&project_id=17008590&scope=&search_code=true&snippets=false&repository_ref=master&nav_source=navbar&search=id%3A+360056569419) マクロでチケットに返信します。

1. チケットが 4 日以内に解決しない場合（チケットが自動再オープンするタイミング）、Legal に回答を確認します。
1. Legal がさらに時間を要すると述べた場合、[`Legal::Handover`](https://gitlab.com/search?utf8=%E2%9C%93&group_id=2573624&project_id=17008590&scope=&search_code=true&snippets=false&repository_ref=master&nav_source=navbar&search=id%3A+360056759280) マクロでチケットに返信します。

1. 上記の対応を関連する Legal and Compliance Issue に記録します。
1. チケットをクローズします。

### 不明な場合・その他

Support は、解明のための問い合わせに対する返答を担当します。多くの場合、既存のお客様はそのアカウントマネージャーへ案内されます。

回答方法に確信が持てない場合は、ガイダンスを得るために `#support_leadership` Slack チャンネルに投稿してください。

---
title: Name Squatting ポリシー
description: "GitLab の Name-squatting ポリシーで休眠とみなされたネームスペースを解放するためのワークフロー"
category: GitLab.com
subcategory: Accounts
upstream_path: /handbook/support/workflows/namesquatting_policy/
upstream_sha: 5b8afe7d206f5c195e463506206021ee3c9a4491
translated_at: "2026-05-08T00:00:00Z"
translator: claude
stale: false
---

### 概要

[サポートのステートメント](https://support.gitlab.com/hc/en-us/articles/11626493890844-GitLab-com-Specific-Support-Policies#name-squatting-policy)によれば、ネームスペースは適切な基準を満たし、**有償顧客**（有償ネームスペースのメンバー、または SaaS に移行する Self-managed 顧客）から要求された場合に解放される可能性があります。

**重要な注:** 通常と異なる状況、または以下のワークフローに当てはまらない状況がある場合は、Security Operations に[Issue を起票](https://gitlab.com/gitlab-com/gl-security/security-operations/trust-and-safety/operations/-/issues/new?issuable_template=General%2BUncategorized)してください。状況を説明し、レビューとガイダンスの提供を依頼してください。

**注:** マクロを適用する際は、プレースホルダー **"REQUESTEDNAME"** を要求されたネームスペースに置き換えるようにしてください。

### ワークフロー

1. GitLab.com 管理者の[ユーザー](https://gitlab.com/admin/users)または[グループ](https://gitlab.com/admin/groups)で要求されたネームスペースを検索し、見つかったらそのネームスペースの GitLab 管理者ページにアクセスします。
1. Zendesk に [`Support::SaaS::Gitlab.com::Name Squatting Policy::Internal Checklist`](https://gitlab.com/gitlab-com/support/zendesk-global/macros/-/blob/master/active/Support/SaaS/GitLab.com/Namesquatting%20Policy/Internal%20Checklist.md) マクロを適用します。覚えておいてください、ユーザーをなりすますと、`Last Sign-In IP` や `Last Sign-in at` といったユーザーアカウントの Last Sign-In 値がリセットされます（個人ネームスペースのアクティビティをレビューする際は、なりすましは避けるべきです）。
1. **Internal Checklist** のすべての質問に Yes/No で回答し、admin セクションで見つけた情報と照合することを確認します。
1. ネームスペースが即時解放可能な場合は、[リクエスト成功](#request-successful)に従います。
1. ネームスペースが解放可能だが、オーナーへの連絡が必要な場合は、[ネームスペースのオーナーに連絡が必要](#namespace-needs-owner-contact)に従います。
1. ネームスペースが解放不可能な場合は、[ネームスペースは利用不可](#namespace-is-not-available)に従います。

### ネームスペースのオーナーに連絡が必要 {#namespace-needs-owner-contact}

オーナーへの連絡:

1. [**チケットとユーザー作成のためのこの特定のワークフロー**](/handbook/support/workflows/sending_notices#how-to-send-notices)に従って、依頼者として**ネームスペースオーナーのメールアドレス**（admin で見つかります）を使用して**新しい Zendesk チケット**を作成します（ユーザーが Zendesk に存在しない場合は、CMOC ローテーションの誰かに連絡してユーザーを作成してもらいます）。
1. 新しいチケットが正しくルーティングされ、連絡を取りたいエンドユーザーが正しい通知を受け取るために、`General::Outbound Contact Request` マクロを適用します。
1. [`Support::SaaS::Gitlab.com::Name Squatting Policy::Contact Namespace Owner`](https://gitlab.com/gitlab-com/support/zendesk-global/macros/-/blob/master/active/Support/SaaS/GitLab.com/Namesquatting%20Policy/Contact%20Namespace%20Owner.md) マクロを適用し、チケットを **On-hold** とマークします。
1. **ネームスペース要求者のチケット**へのリンクを内部コメントとして残します。

グループに複数のオーナーが含まれている場合、1つのチケットにつき 1人のオーナーに連絡してください。複数いる場合は 3人までに制限してください（`https://gitlab.com/groups/<group_name>/-/group_members` ページで *Last activity* が最も新しいオーナーや、namesquatting リクエスト時にまだオーナーである場合に *Source* として記載されているオーナーを選ぶことができます）。

要求者のチケット:

1. チケットのリンクをコピーし、**Internal Checklist** に追加します。
1. [`Support::SaaS::Gitlab.com::Name Squatting Policy::First Response`](https://gitlab.com/gitlab-com/support/zendesk-global/macros/-/blob/master/active/Support/SaaS/GitLab.com/Namesquatting%20Policy/First%20Response.md) マクロを使用して要求者に返信し、チケットを **On-hold** とマークします。

#### ネームスペースのオーナーが応答した場合

ネームスペースのオーナーが応答した場合（私のネームスペースを削除しないで）は、以下の手順に従います:

1. 以下のスニペットを**ネームスペースオーナーの**チケットへの返信として使用し、チケットを `solved` に設定します:

<details>
  <summary markdown="span">Namespace Owner Response - Received</summary>

  <p>Hi,</p>

  <p>Thank you for confirming that you wish to maintain control of the requested namespace. As per our [Name Squatting Policy](https://support.gitlab.com/hc/en-us/articles/11626493890844-GitLab-com-Specific-Support-Policies#name-squatting-policy), we have cancelled this request and will not release your namespace.</p>

  <p>We will mark this ticket as solved, please reach out if you have any further questions.</p>
</details>

1. [`Support::SaaS::Gitlab.com::Name Squatting Policy::Failed Namespace Request`](https://gitlab.com/gitlab-com/support/zendesk-global/macros/-/blob/master/active/Support/SaaS/GitLab.com/Namesquatting%20Policy/Failed%20Namespace%20Request.md) を**ネームスペース要求者のチケット**に適用します。

#### ネームスペースのオーナーが応答しない場合

1週間後に応答がない場合は、[`Support::SaaS::Gitlab.com::Name Squatting Policy::Contact Namespace Owner`](https://gitlab.com/gitlab-com/support/zendesk-global/macros/-/blob/master/active/Support/SaaS/GitLab.com/Namesquatting%20Policy/Contact%20Namespace%20Owner.md) マクロを 2回目に適用し（マクロ内の `within 2 weeks` を期日に置き換える。例: `**before the 25th of March**`）、チケットを **On-hold** とマークします。

2週間後、チケットは**自動的に open とマークされ、担当エンジニアにメールが送信されます**。

ネームスペースのオーナーが応答しなかった場合は、[リクエスト成功](#request-successful)の手順に従います。

### リクエスト成功 {#request-successful}

リクエストが成功した場合、以下の手順に従います:

ユーザーの場合、[Chatops](https://docs.gitlab.com/development/chatops_on_gitlabcom/) でオーナーのユーザー名を変更します:

1. Slack で `/chatops run user idle <owner_username>` を実行します。
1. [Admin note](/handbook/support/workflows/admin_note) を追加します。

admin の使用を希望する場合、またはグループの場合、以下の手順でオーナーのネームスペースをリネームします:

1. admin でネームスペースに移動します - [ユーザー](https://gitlab.com/admin/users)または[グループ](https://gitlab.com/admin/groups)
1. プロフィールで「Edit」を選択します。
1. ユーザーの場合はユーザー名に、グループの場合はグループ URL に "_idle" を追加します。
1. [Admin note](/handbook/support/workflows/admin_note) を追加します。
1. 変更を保存します。

Zendesk で:

1. **ネームスペース要求者のチケット**に [`Support::SaaS::Gitlab.com::Name Squatting Policy::Successful Namespace Request`](https://gitlab.com/gitlab-com/support/zendesk-global/macros/-/blob/master/active/Support/SaaS/GitLab.com/Namesquatting%20Policy/Successful%20Namespace%20Request.md) マクロを適用し、チケットを **Solved** とマークします。

### ネームスペースは利用不可 {#namespace-is-not-available}

1. [`Support::SaaS::Gitlab.com::Name Squatting Policy::Failed Namespace Request`](https://gitlab.com/gitlab-com/support/zendesk-global/macros/-/blob/master/active/Support/SaaS/GitLab.com/Namesquatting%20Policy/Failed%20Namespace%20Request.md) マクロを適用し、チケットを **Solved** とマークします。

### FAQ

1. **name squatting リクエストへの応答としてのログインは、アカウントがアクティブであることを意味するか?**

   いいえ、ユーザーは name squatting リクエストに対して「自分のネームスペースを保持したい」と明示的に返信する必要があります。ユーザーが応答せずログインしただけの場合は、「X 時にログインされたことを確認しましたが、ネームスペースを保持したい場合はここで知らせる必要があります」のような最終メッセージを送信してください。

1. **アカウント内のデータとは何を指すか?**

   グループ、プロジェクトなどはデータを意味します。ただし、プロジェクトまたはグループが空であるか、2年以上アクティビティがない場合を除きます。

1. **ネームスペースのスクワッティングは許可されているか?**

   ネームスペースのスクワッティングは、[利用規約](https://about.gitlab.com/terms/)で明示的に述べられているとおり、許可されていません。ユーザー名およびグループ名は先着順で提供され、予約することはできません。

1. **商標が付与された製品やサービスとは無関係な方法で商標を使用することは、商標ポリシー違反とみなされるか?**

   他者の商標を、その商標が付与された製品やサービスとは無関係な方法で使用することは、商標ポリシー違反ではありません。商標侵害の主張は法的プロセスであり、裁判所命令なしに商標違反を理由にネームスペースを解放することはありません。

1. **リクエストが疑わしく見えても、ネームスペースを解放するべきか?**

   はい、解放基準を満たす限り、常にネームスペースを解放するべきです。Trust and Safety が、その後ネームスペースから発生する可能性のある悪用行為を緩和するために必要な措置を講じます。Support、Legal、Trust and Safety からの議論と追加コンテキストについては、[Support Team Meta issue 3145](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/3145) を参照してください。

---

**マクロ**

- [`Support::SaaS::Gitlab.com::Name Squatting Policy::Failed Namespace Request`](https://gitlab.com/gitlab-com/support/zendesk-global/macros/-/blob/master/active/Support/SaaS/GitLab.com/Namesquatting%20Policy/Failed%20Namespace%20Request.md)
- [`Support::SaaS::Gitlab.com::Name Squatting Policy::Internal Checklist`](https://gitlab.com/gitlab-com/support/zendesk-global/macros/-/blob/master/active/Support/SaaS/GitLab.com/Namesquatting%20Policy/Internal%20Checklist.md)
- [`Support::SaaS::Gitlab.com::Name Squatting Policy::First Response`](https://gitlab.com/gitlab-com/support/zendesk-global/macros/-/blob/master/active/Support/SaaS/GitLab.com/Namesquatting%20Policy/First%20Response.md)
- [`Support::SaaS::Gitlab.com::Name Squatting Policy::Contact Namespace Owner`](https://gitlab.com/gitlab-com/support/zendesk-global/macros/-/blob/master/active/Support/SaaS/GitLab.com/Namesquatting%20Policy/Contact%20Namespace%20Owner.md)
- [`Support::SaaS::Gitlab.com::Name Squatting Policy::Successful Namespace Request`](https://gitlab.com/gitlab-com/support/zendesk-global/macros/-/blob/master/active/Support/SaaS/GitLab.com/Namesquatting%20Policy/Successful%20Namespace%20Request.md)

**自動化**

- [`Status::Open::Reopen namesquatting On-hold tickets after 1 week`](https://gitlab.com/search?utf8=%E2%9C%93&group_id=2573624&project_id=20012489&scope=&search_code=true&snippets=false&repository_ref=master&nav_source=navbar&search=id%3A+94693587)

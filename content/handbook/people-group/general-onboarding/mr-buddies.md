---
title: "マージリクエストバディ"
description: "GitLab のマージリクエストバディ"
upstream_path: /handbook/people-group/general-onboarding/mr-buddies/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-14T00:00:00Z"
translator: claude
stale: false
---

マージリクエストバディは、GitLab ハンドブックやウェブサイトを更新するマージリクエストで支援が必要な他のチームメンバーをサポートするために存在します。GitLab Web IDE の使い方を学んでいる、ハンドブックやウェブサイトをローカルで更新している、あるいはその他の Git や GitLab に関する質問への回答が必要であっても、マージリクエストバディがサポートします。

より深刻な問題、特に時間的制約があるものや、重要な情報へのアクセスを妨げるものについては、問題を解決できるチームメンバーに連絡するための [エスカレーションプロセス](/handbook/about/escalation/) があります。

注: この役割は [Merge Request Coach](/job-description-library/expert/merge-request-coach) と混同しないようにしてください。Merge Request Coach の主な目標は、[コミュニティからのマージリクエスト](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests?label_name[]=Community%20contribution) を GitLab にマージしてもらうことです。

## マージリクエストバディを見つける

[GitLab Team ページ](/handbook/company/team/) で「Merge Request Buddy」を検索するか、Slack の `#mr-buddies` で問い合わせてください。

## マージリクエストバディになる

Git と GitLab の使用に自信があり、チームメンバーが問題をトラブルシュートし学習を加速するのを支援したい場合は、`マージリクエストバディ` としての可用性を示すために次のステップに従ってください:

1. 自分の [`.yml` ファイル](/handbook/about/editing-handbook/#add-yourself-to-the-team-page) を見つける。
1. 自分のエントリの `departments` セクションに `Merge Request Buddy` を追加する（既存の departments は残す）:

   ```yaml
   departments:
     - ...
     - Merge Request Buddy
   ```

1. 自分のエントリの `story` セクションの上に、次のコードを追加する:

   ```yaml
   expertise:  |
      <li><a href="/handbook/people-group/general-onboarding/mr-buddies/">Merge Request Buddy</a></li>
   ```

1. すでに `expertise` セクションがある場合は、上記コードのリスト項目の部分を追加する:

   ```html
   <li><a href="/handbook/people-group/general-onboarding/mr-buddies/">Merge Request Buddy</a></li>
   ```

1. オプションで、MR バディとしてチームメンバーのマージリクエストをマージできるよう、<https://gitlab.com/gitlab-com/www-gitlab-com> へのメンテナーアクセスを [リクエスト](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new) する

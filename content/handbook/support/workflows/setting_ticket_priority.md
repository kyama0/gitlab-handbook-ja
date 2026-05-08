---
title: チケットの優先度設定
category: Zendesk
description: Zendesk チケットの優先度を設定および変更する方法。
upstream_path: /handbook/support/workflows/setting_ticket_priority/
upstream_sha: c8fa138220d8c6d69f811b17242d6d2f08e4e409
translated_at: "2026-05-08T03:10:58Z"
translator: claude
stale: false
---

## 定義

[サポートインパクトの定義](https://about.gitlab.com/support/definitions/#definitions-of-support-impact)はサポートステートメントに記載されています。

## チケットの優先度設定

顧客が Web チケットフォームからチケットを送信する場合、チケットの開始時の優先度を選択できます。これは Zendesk で表示される `Customer Severity` フィールドに基づきます。チケット作成時にトリガーが、メインの `Priority` フィールド（顧客には見えない）を `Customer Severity` の選択値と一致するように設定します。チケット作成後の `Customer Severity` の変更は、`Priority` フィールドや SLA には影響しません。

顧客が緊急連絡用メールアドレスにメールを送信した場合、チケットの `Priority` は 'Urgent' になります。

Zendesk の `Priority` フィールド（`Customer Priority` ではない）でチケットの優先度を手動で設定すると、初回応答と次回応答の両方について、チケット全体の [SLA](/handbook/support/workflows/working-on-tickets#understanding-slas) が変わります。これによりサポートはチケットに優先順位を付け、チケットのライフサイクル中に緊急度を更新できます（たとえば、最初のリクエストは 'High' 優先度であっても、フォローアップの質問は 'Low' 優先度で済むかもしれません）。優先度変更の際に顧客への自動通知は送信されません。

## チケット優先度のリセット

これを行う必要がある場合に役立つ文言とリンクを含む Zendesk マクロ [`General::Changed priority`](https://gitlab.com/search?utf8=%E2%9C%93&group_id=2573624&project_id=17008590&scope=&search_code=true&snippets=false&repository_ref=master&nav_source=navbar&search=id%3A+360093631494) があります。

なお、私たちの最後の応答と顧客の次の応答との間に経過した時間は、チケットの優先度には影響しません。たとえば、[サポートインパクトの定義](https://about.gitlab.com/support/definitions/#definitions-of-support-impact)に基づいてチケットが High 優先度であるべき場合、顧客が初回問い合わせから1ヶ月後にしか応答しなかったとしても、チケットの優先度は引き続き High のままにすべきです（問題の性質が変わっていないと仮定して）。

### ガイドラインと影響

チケットの優先度を変更すると SLA が変更されます。優先度ごとに SLA の長さが異なるためです。[サポートステートメントに記載されているガイドラインと SLA](https://about.gitlab.com/support/#standard-support) を参照してください。

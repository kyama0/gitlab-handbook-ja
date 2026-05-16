---
title: チケットのトリアージ
description: "Zendesk でのチケットトリアージの手順解説"
category: Handling tickets
subcategory: Triaging
upstream_path: /handbook/support/workflows/ticket_triage/
upstream_sha: c8fa138220d8c6d69f811b17242d6d2f08e4e409
translated_at: "2026-05-08T04:02:00Z"
translator: claude
stale: false
lastmod: "2025-11-25T14:16:47-06:00"
---

## このページの目的

このページは、ZenDesk でチケットをトリアージする際に確認しておきたい基本的なチェック項目を順を追って説明することを目的としています。

## 概要

過去には、チケットのトリアージは `Needs Org` キューで行われ、サポートエンジニアはチケットが組織に紐づいており、利用権限が証明できることを確認する必要がありました。現在では、提出されるすべてのチケットには組織が紐づいているか、Free ユーザーに属しているはずです。連絡先として登録されていないユーザーからのチケットは自動的に却下され、[組織の連絡先になる方法に関する案内](https://about.gitlab.com/support/managing-support-contacts/)とともにクローズされます。ただし、お客様が誤ったフォームでチケットを提出する可能性は残っているため、正確な情報を保つことはレポーティングの精度を高め、適切な担当者にチケットを届けるうえで重要です。

## 正しいフォームの適用

チケットには、その依頼に対応できる適切な担当者群へルーティングするために、正しいフォームが適用されている必要があります。

誤ったフォームで提出されたチケットや、サポート以外のフォームに移す必要があるチケットには、`General::Forms::Incorrect form used` マクロを適用してください。以降の再アサインは Support Operations が対応します。

### セキュリティ関連の事項について

`Security::All Security Questions` マクロを適用してください。これにより返信が送られ、チケットは `solved`（解決済み）になります。

### Free ユーザーチケットの取り扱い

Self-Managed または SaaS の問題を報告している Free ユーザー

1. Free ユーザーのチケットをトリアージし、[サポート方針の Free ユーザーセクション](https://about.gitlab.com/support/statement-of-support/#free-users)に記載されているサポート基準を満たす SaaS ユーザーかどうかを確認します。
1. 上記の基準を満たさない場合や、チケットが Self-Managed の Free ユーザーのものである場合、`New` のチケットでは `Self-Managed Subscription` ドロップダウンで `Free customer` を選択できます。これにより [`Auto-close free and self-provisioned trial SM tickets`](https://gitlab.com/search?group_id=2573624&repository_ref=master&scope=blobs&search=id%3A+5475833679900&snippets=false) トリガーが起動し（返信を行いチケットを解決）します。チケットが `Open` の場合は、["Self-managed or GitLab.com Free User Request" マクロ](https://gitlab.com/search?utf8=%E2%9C%93&group_id=15990755&project_id=17008590&scope=&search_code=true&snippets=false&repository_ref=master&search=id%3A+360044960813)を使ってお客様を [GitLab コミュニティフォーラム](https://forum.gitlab.com/) に案内し、「Solved」とマークします。ユーザーに技術的な支援を行いたい場合は、[GitLab コミュニティフォーラム](https://forum.gitlab.com/) で行ってください。

L&R 関連の問題を報告している Free ユーザー

Free ユーザーのチケットをトリアージし、ユーザーの問題が[正しいフォームの適用セクション](#applying-the-correct-form)に記載されているサブスクリプションやアカウント／請求に関連するかを確認します。関連する場合は、対応するチームメンバーが直接対応できるよう、適切なフォームに変更してください。

ユーザーが営業との連絡をサポートしてほしいと依頼している場合は、「L&R」フォームを使用できます。

依頼が上記のシナリオに該当しない場合は[Other Requests セクション](#other-requests)を参照するか、ユーザーを [GitLab コミュニティフォーラム](https://forum.gitlab.com/) に案内し、チケットを「Solved」とマークしてください。

## 正しいフォームを適用したあと

- 可能であれば、適切な `Support Ticket Category` の値を適用します。
- 不足している場合は、`GitLab Install Type`、`Reference Architecture`、`GitLab Version` の情報を収集します。
- お客様が誤ったフォームを使用していた場合は、不足している可能性のある他の情報の収集も検討してください。

## グローバルサポートポータル経由の米国政府チケット

GitLab の [US Government Support](https://about.gitlab.com/support/us-government-support/) を利用しているユーザーは、グローバルサポートポータルでチケットを起票することも選べます。最も多い理由は、米国政府サポートの[業務時間外](https://about.gitlab.com/support/us-government-support/#hours-of-operation)にサポートが必要となるケースです。トリアージの過程で、グローバルエージェントが、米国政府サポートを受ける権利を持つと思われる組織からのチケットに遭遇した場合、エージェントは他のチケットと同様にケースを進めて構いません。

グローバルサポートポータル経由でチケットが作成され、米国市民権を持つエージェントのみがケースを担当することを依頼された場合、エージェントはお客様に対して、米国政府サポートポータル経由で新規ケースを起票するよう案内し、アカウントチームに知らせてください。

## その他の依頼 {#other-requests}

私たちのキューにはサポート以外の依頼も寄せられます。以下に記載されていないものや判断に迷うものを見かけた場合は、`#support_leadership` Slack チャンネルで質問し、回答を得たら以下のリストを更新するための MR を作成してください。

|依頼|ワークフロー|
|--|--|
|トレーニング|依頼者を[プロフェッショナルサービスの教育プログラム](https://about.gitlab.com/services/education/)に案内する|
|新規セットアップ／インストール|[Passing a Lead to Sales](/handbook/support/license-and-renewals/workflows/working_with_sales#specific-workflows-to-pass-to-sales) ワークフローに従う|
|ノベルティの依頼|社内 Slack チャンネル #swag で問い合わせるか、既存注文については [FAQ](https://shop.gitlab.com/policies) に案内する。無料ノベルティの一般的な依頼には `General::Free Swag Request` マクロを使用する。|
|求人応募の状況に関する質問|`General::Job Application Questions` を使用し、社内 Slack チャンネル `#talent acquisition` にメモを送る。|
|法務関連の質問・懸念|社内 Slack チャンネル #legal で問い合わせる|
|Learning and Development 認定証の不備|依頼者に Missed Certificate を確認したうえで、不足している認定証／知識評価を明記して `learning@` に連絡するよう案内する。|
|[GitLab Partner Program](https://partners.gitlab.com/English/) に関する質問や登録時の問題。|このプログラムは [Channel Partner](/handbook/resellers/) の管轄です。依頼者には `partnersupport@` への連絡を案内するか、不明な場合は [#partner-programs-ops](https://gitlab.slack.com/archives/CTM4T5BPF) で確認してください。|

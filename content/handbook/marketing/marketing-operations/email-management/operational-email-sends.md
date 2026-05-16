---
title: "運用メール送信"
description: "Marketing Operations チームは Lifecyle Marketing チームと密接に連携しており、ときには non-demand generation メールの配信を担当することがあります。"
upstream_path: /handbook/marketing/marketing-operations/email-management/operational-email-sends/
upstream_sha: eb9c7122b4259a2111ed65628e5384768922a597
translated_at: "2026-04-30T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-04-04T15:37:12-07:00"
---

## 概要

ページは作成中
Marketing Operations チームは Lifecyle Marketing チームと密接に連携しており、ときには non-demand generation メールの配信を担当することがあります。これらのメールは多くの異なる目的を持ち、必ずしも `operational` とは限りません (定義)。

### Issue テンプレート

- セキュリティリリース通知
- [一般的な non-demand generation テンプレート](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/new?issuable_template=request-operational-email) (製品アップデート、サブプロセッサーアップデート、顧客通知)
- 緊急またはインシデントは [別のプロセスとテンプレート](/handbook/marketing/emergency-response/#marketing-emergency-response) に従ってください

これらの Issue テンプレートは `marketing` メールとは異なり、独自のチェックリストが適用されます。SLA は最終素材から送信まで 5 営業日ですが、最終納品物がない場合でも、送信が必要だとわかった時点でできるだけ早く Issue を提出してください。複雑性により SLA が延びる可能性があります。顧客向けメールを送信するときに考慮すべき [役立つヒント](/handbook/marketing/marketing-operations/email-management/operational-email-sends/#customer-or-user-comms-email-including-breaking-changes) があります。マーケティングメールが必要な場合は、[lifecycle チーム](/handbook/marketing/lifecycle-marketing/#issue-templates) と連携してください。

Marketing Ops はリストの抽出を担当しません。Marketing Strategy and Analytics チームまたは適切なデータエンジニアに [リストリクエスト Issue](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/new?issuable_template=request-target-list) を作成する必要があります。

## 一般的なメールタイプ

### セキュリティインシデント

これらのメールは非常に重要かつ緊急で、配信のための異なる順序のオペレーションに従うため、[このページ](/handbook/marketing/emergency-response/#marketing-emergency-response) の情報に従ってください。

### セキュリティパッチメール

これらのメールは、パッチリリースにセキュリティ関連の更新があるとき、または重要なパッチが適用されたときに送信されます。パッチリリースは通常、月に 2 回行われます。

EMEA の業務時間中にリリースがある場合は、対応を準備できるよう事前にお知らせください。計画外で緊急の場合は、[こちらに定義された対応マトリックス](/handbook/marketing/emergency-response/#coverage-matrix) に従ってください。

リクエスト者の責務:
以下の情報を Issue テンプレートに記入します:

- デプロイ日
- リリース番号
- リリースの種類は何か (critical、coordinated、normal)
- コピーをレビューし、どのバージョンをアップグレードすべきか確認
- 送信時刻または日時の変更について MktgOps チームとコミュニケーション
  - リリースが EMEA 時間に行われる場合は、事前にお知らせください。
- メールコピーの内容のレビュー

Marketing Ops の責務:

- プログラムトークンを利用して Marketo でメールを構築
- ステークホルダーに送信のプレビューを送付 (リンク公開前にも可)
- メールの内容、フォーマット、ブログリンク (ブログは公開済みである必要があります) の最終レビュー
- メールコピーとブログの内容が類似していることを確認
- メールをスケジュール、送信を確認、Issue にペースト

#### Marketing Operations のセキュリティパッチ通知デプロイ手順

1. Issue が完全に揃っていることを確認
2. メール自体は編集せず、最新情報でプログラムトークンのみを編集

##### 更新するトークン

以下の例のようにトークンを更新します。完全性を確認するため、必ずメールをプレビューしてください。

|トークン名|値の例|備考|
|----------|-------------|------|
|{{my.Subject Line}}|Security Release: 16.0.2, 15.11.7, 15.10.8||
|{{my.Versions text update}}|These versions contain important security fixes and we strongly recommend that all GitLab installations be upgraded to one of these versions immediately|トークン WIP、含めるバージョン 2 つのうち 1 つ|
|{{my.blog link}}|about.gitlab.com/releases/2023/06/05/security-release-gitlab-16-0-2-released| https:// は含めないでください|
|{{my.release}}|16.0.2, 15.11.7, 15.10.8||
|{{my.utm-content}}|utm_content=June+05+2023||
|{{my.utm-medium-source-campaign}}|utm_medium=email&utm_source=marketo&utm_campaign=security+release+email|編集不要 - 事前入力済み|

### サブプロセッサーアップデート

サブプロセッサーには、人々が登録できる独自のリストがあり、Legal がメールプロセスを開始します。フォームと処理キャンペーンは、メール送信とは別の Marketo エリアにあります。

#### Marketing Operations のデプロイ手順

1. Marketo のサブプロセッサー [テンプレート](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/EBP6615B2) からクローン
2. Legal から送られた追加のリストをアップロード
3. 最終コピーが提供されたらメールを構築。コピーに [RED Data](/handbook/support/workflows/sending_notices) がないか必ずレビューしてください。
4. Legal リクエスト者にサンプルを送付
5. 確認を得たら配信デプロイ。

### 破壊的変更を含む顧客またはユーザー通信メール

提供されている製品やサービスの変更について特定のグループの人々に通知するためのメール (例: 製品アップデート、サポートポータルの変更、EOA)。このセクションは、製品またはセキュリティの問題やリスクを通知するすべての顧客通信に使用してください。

通信チェックリスト:

- [CS Ops チーム](/handbook/sales/field-operations/customer-success-operations/cs-ops-programs/) に確認し、このメールを gainsight 経由で送信すべきか確認する
- この変更が影響する場合や、大きな変更/通信になる場合は Customer Service と Field チームを巻き込む
- インシデント、破壊的変更、価格設定、重要な変更、重大なリスクのある問題などの重要なメールについては、通信を主導する部門の責任者 (例: Product、Engineering、Security)、Vice President of Customer Success、Legal、または適切な指定者 (PTO 中または不在の場合) によって順番に承認される必要があります。
  - 破壊的変更については、`@jmalleo`、`@DianaSingh`、`@eshutty` を巻き込んでください

#### Marketing Operations のデプロイ手順

1. Marketo の [テンプレート](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/EBP7320A1) からクローン
2. リクエスト者から送られた追加のリストをアップロード
     - 大規模な送信の場合は、ロード前にチェックリストに従う
     - 新しいリードのために適切な処理キャンペーンを設定し、リードステータス、ソースなどを設定 (テンプレートに従う)
3. 最終コピーが提供されたらメールを構築
4. リクエスト者と他の必要な承認者/レビュアーにサンプルを送付
5. 確認を得たら配信デプロイ。

#### 顧客メールの推奨フォーマット

コピーに [RED Data](/handbook/support/workflows/sending_notices) がないか必ずレビューしてください。

以下は、アドホックな顧客メールの推奨フォーマットですが、通信の目的やコンテンツが必要とする場合は調整してください。これにはマーケティング (例: メールキャンペーン、ブログなど) や標準的な製品またはセキュリティ通知 (例: リリースブログ、リリース通知など) は含まれません。メールは明確かつ簡潔で直接的で、詳細へのリンクを提供する必要があります (例: 問題やリスクの詳細、対応のための手順詳細)。[読解力を最大化する](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1709943) ために、不要な単語と言葉をすべて削除し、メールが読まれて行動される確率を最大化してください。

メールは以下の質問に以下の順で答える必要があります:

1. なぜ (顧客は) このメールを受け取っているのか? これは具体的な (つまり「私たちは知っている」) または一般的な (つまり「あなたは認識している、または認識する必要があるかもしれない」) ものとなります。これがメールの最初の文となります。
1. 問題/変更/問題などは何か? リスクと影響は何か? 自分が問題に影響を受けているか、あるいは受ける可能性があるかを知るにはどうすればよいか? それは解決済みなのか、まだ取り組まれているのか?
1. あなたの行動の呼びかけは何か? 何をすべきか?
1. サポートが必要な場合はどこに行けばよいのか? 該当する場合、どこでフィードバックを提供するのか (例: フォーラム、Issue、その他)? 追加の更新がある場合、その情報はいつ、どのように共有されるのか?

メールをリクエストするには、[Issue を作成](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/new?issuable_template=request-operational-email) してください

##### サンプルメール

2 つの例を提供します:

1. (GitLab 内部のみ。提供されているサードパーティソフトウェアを参照しているため) [セキュリティメールの例](https://docs.google.com/document/d/10TEgeGWzmlHpOaiiAYuUzNkevYsWGNmLkNbqWt1KXlo/edit#bookmark=id.aa65snh7vyl6)
1. 製品リスク通信の例 (以下参照)

```text
Subject: Important update information for customers using {GitLab Feature}

Hello {Customer name},

If you use {GitLab Feature}, or plan to migrate to it, this information may be relevant to you.

We recently identified {cases} where {GitLab Feature} can cause a {specific issue} that requires GitLab Support intervention to resolve.

We recommend the following actions to identify and resolve this issue:

- If you use {GitLab Feature}, please review the [scenarios] and avoid them.
- If you have not migrated to {GitLab Feature}, please know that we [provided additional support] to all affected releases.

We're working to reduce the conditions that can cause {specific issue} and will update the [{cases}] when we do so. If you are using {GitLab Feature} and require additional guidance, please contact your support representative or your CSM.

Kind regards,
{Sender}
```

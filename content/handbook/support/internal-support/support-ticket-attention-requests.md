---
title: GitLab Support - Support Ticket Attention Requests (STAR)
description: サポートリーダーシップにチケットへの追加的な注目を求めるためのプロセスドキュメント。
upstream_path: /handbook/support/internal-support/support-ticket-attention-requests/
upstream_sha: 877082e5cd4baeabe3d6e802b3b4b1efdb6573f1
translated_at: "2026-05-23T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-05-22T11:27:49+08:00"
---

## 概要

このドキュメントは、顧客のビジネスにとって重要な状況であるために、私たちの[標準応答時間](https://about.gitlab.com/support/#priority-support)で定められているよりも迅速に注目または初回応答が必要となるサポートチケットを管理するためのプロセスを概説します。

## サポートチケット注目リクエスト (STAR) とは何か

サポートチケット注目リクエスト (STAR) は、GitLab チームメンバーがチケットへの追加的な注目を求めるための仕組みです。STAR は頭字語として発音し、動詞（*顧客からの依頼でこのチケットを STAR した*）または名詞（*適切な専門知識を持つエンジニアが割り当てられるよう、このチケットに STAR を付けた*）として使用してかまいません。

このプロセスを使用して追加的な注目を依頼できるチケットは、次の 2 種類です。

1. ライセンスまたはサブスクリプションを持つ顧客からの Zendesk Support チケット。
1. ライセンスまたはサブスクリプションを持つ顧客のために GitLab チームメンバーが作成した [Zendesk の Internal Request](/handbook/support/internal-support/#internal-requests)。

>**Slack チャンネルに投稿する代わりに STAR プロセスを使用してください。** Support 関連のいずれかの Slack チャンネルで、チケットへの目通し、即時の意見、または追加的な注目を求めることは、他の優先チケットに取り組んでいる可能性がある Support Engineer に不必要なストレスを与えます。

送信されると、[Support Ticket Attention Request](https://gitlab.com/gitlab-com/support/ticket-attention-requests/-/issues) Issue トラッカーに Issue が作成されます。この Issue は自動的に [Support Leader on the Hook (SLOTH)](/handbook/support/workflows/support-leader-on-the-hook) に割り当てられます。

チケットを STAR すると、[#support_ticket-attention-requests](https://gitlab.slack.com/archives/CBVAE1L48) Slack チャンネルにスレッドが作成されます。

### いつチケットを STAR すべきか

1. チケットに構造と焦点をもたらし、必要なリソースを確実に割り当てるためにマネジメントの監督が必要な場合。例えば、以下の場合です。
    - チケットの初回応答の [SLA](https://about.gitlab.com/support/#service-level-agreements) が 1 時間以上超過している（[チケットを STAR する前に](#before-you-star-a-ticket)を参照）。
    - 顧客の高い不満に対処するために、チケットへの即時の介入が必要である。
    - SLA をまだ超過していなくても、ビジネス上の理由でサポートチームからの注目を高める必要がある。
    - [Support Impact](https://about.gitlab.com/support/#priority-support) ガイドラインに照らして客観的に評価すると、チケットの優先度が低い。
1. チケットの進捗が停滞し、GitLab がより迅速にチケットを解決できるよう、（スキルセットに基づいて）別のエンジニアにチケットを引き上げる必要がある場合。

### いつ STAR が適切でないか

1. 既存または将来のビジネスがリスクにさらされており、CSM の注目が必要な GitLab にとっての **business-critical** な状況である場合 -> [アカウントエスカレーションを起票する](/handbook/customer-success/csm/escalations/#initiating-managing-and-closing-an-escalation)
1. **emergency**（緊急事態）である場合 -> 顧客に [emergency を起票する](https://internal.gitlab.com/handbook/support/workflows/raising-an-emergency)よう助言する（社内ハンドブックリンク、GitLab チームメンバー専用。Premium/Ultimate の顧客のみが emergency をトリガーする資格があります）
1. **SaaS インシデント** である場合 -> [GitLab Status Page を確認する](https://status.gitlab.com/)、または[インシデントを報告する](/handbook/engineering/infrastructure-platforms/incident-management/#reporting-an-incident)
1. チケットに取り組んでいるエンジニアに追加情報を伝えたい場合 --> Zendesk のチケットに内部ノートを残すか、`#support_gitlab-com` や `#support_self-managed` のような Slack チャンネルでチケットに取り組んでいる Support Engineer に連絡する。

### チケットを STAR する前に

>**重要:** STAR リクエストを送信した後は、Support Manager からの質問に備えて Slack で対応できるようにしてください。

チケットが STAR 対応の基本的な対象要件を満たしているか確認してください。

1. 関連する Support Engineer（以前に返信した、実質的なノートを残したなど）に Slack で連絡したが、返信がなかった。
1. **チケットは L&R（サブスクリプション、プラン、更新、ライセンス、トライアル）に関するものか？** [Plan/License チケット注目リクエストを処理するためのワークフロー](/handbook/support/license-and-renewals/workflows/managers_working_with_extensions/)とその意思決定フローチャートを参照してください。顧客の利便性のためのリクエスト（つまり、機能の喪失が差し迫っていない場合）は優先されない場合があります。
   - L&R STAR リクエストには、グループ名、サブスクリプション名、ライセンス保有者など、関連するすべての情報を含める必要があります。
1. **私たちは顧客からの情報を待っているのか、それともあなたからの情報を待っているのか？** 最新の応答が *顧客から*（または Internal Request の場合は GitLab チームメンバーから）であることを確認してください。最新の応答が GitLab Support からのものであれば、私たちは必要な情報を待っています。
1. **チケットは SLA 内か？** Okta を使用して [Zendesk](https://gitlab.zendesk.com) にログインし、チケットに関連付けられた SLA と、超過までの残り時間を確認してください。
   - チケットが過去 0 〜 30 分以内に開かれ、正しい [Severity](https://about.gitlab.com/support/definitions/#definitions-of-support-impact) が設定されている場合、STAR リクエストは不要です。
   - SLA タイマーに数時間以上残っている Issue を STAR する必要は通常ありません。
   - 私たちの [SLA](https://about.gitlab.com/support/#service-level-agreements) はチケットへの初回応答に適用されます。GitLab Support は 95% の SLA 達成 KPI を目標としています。これは、ある程度の超過が想定されていることを意味します。
   - チケットがすでに初回返信を受けている場合は、契約上の SLA がない「内部（次回返信）超過」の可能性を見ていることになります。
   - チケットがまだ SLA 内のときに STAR リクエストを行うと、Support Manager が最善のアプローチについて相談します。
1. **チケットに情報が不足していないか？**
   - チケットに必要な情報がすべて揃っていない場合、STAR の対象になりません。例えば、以下の場合です。
      - ログがリクエストされたが、顧客から提供されていない。
      - 必要なチャレンジがすべて完了していない 2FA リクエスト。
      - Support Engineer がチケットで尋ねた質問に未回答である。
      - [サポート利用資格の証明](https://about.gitlab.com/support/managing-support-contacts/#proving-support-entitlement)

**注:** Zendesk アカウントなしで Internal Request Form を使用することはできません。Zendesk へのアクセス権がない場合は、[Light Agent アカウントをリクエスト](/handbook/support/internal-support/#requesting-a-zendesk-light-agent-account)して取得してください。

### 範囲外 / STAR 対応の対象外

1. 私たちの一般的な範囲外の[定義](https://about.gitlab.com/support/statement-of-support/#out-of-scope)に該当するトピック。
1. 追加的な注目を正当化する *受け入れ可能なビジネスケースが提供されていない* チケット。
1. 顧客の Organization 情報が欠落しているチケット（「Needs Org」）。代わりに、Needs Org ワークフローの要件を確認し、`#support_operations` Slack チャンネルで ping してください。
1. 正しい SLA が割り当てられていないように見えるチケット。代わりに、[SLA ワークフロー](/handbook/support/workflows/sla_and_views)の要件を確認し、`#support_operations` Slack チャンネルで ping してください。

## サポートチケット注目リクエスト (STAR) の送信 / チケットの STAR 付け

### **重要**

Zendesk STAR App は、私たちの [Global Support Hours](https://about.gitlab.com/support/#hours-of-operation) の間のみ利用可能です。この時間外は無効になります。

### Zendesk `STAR` アプリ経由

アクセスするには、ページの右上（プロフィールアイコンの下）にある Apps ボタンをクリックします。クリックすると展開され、Zendesk 内に STAR フォームが表示されます。

![Zendesk アプリボタン](/images/support/internal-support/Zendesk_App_Button.png)

この方法を使用すると、アプリが必要な情報のほとんどをチケットから直接自動的に取得します。これにより作業量が大幅に減り、評価のために Support Manager に送信される前にデータがすでに検証されていることが保証されます。

提供する必要があるのは、以下のみです。

- 緊急度
- プラン
- GitLab.com グループ URL または名前
- このチケットに追加的な注目が必要な理由
- 望ましい結果

Zendesk アプリでフォームは次のように表示されます。

![Zendesk STAR アプリフォーム](/images/support/internal-support/Zendesk_STAR_App_Form.png)

#### 検証

Zendesk `STAR` アプリは、リクエストを送信する前に以下を自動的に検証します。

- 送信時刻が [Support hours](https://about.gitlab.com/support/#hours-of-operation) 内である
- 有効な namespace が入力されている（SaaS および SaaS Account フォームのみ）
- チケットが 30 分以上前に作成されている
- チケットが有効なサポートフォーム（SaaS、SaaS Account、Self-Managed、L&R、Open Partner、Select Partner、Alliance Partner）を使用している

### STAR 緊急度レベルの定義

**注:** これらの定義は STAR リクエストの処理方法を決定するものであり、チケット自体に記載された根本的な問題の Impact / Urgency / Severity を指すものではありません。

| 緊急度レベル | 定義 |
|---------------|------------|
| Not Urgent    | チケット/Issue への可視性を高め、今後 2 時間以内に Support からの応答が必要です。この注目のリクエストは緊急ではなく、全体的な影響は `low` です。|
| Timely        | チケット/Issue における潜在的または既存の顧客の不満に、今後 1 時間以内に Support からの応答で対処する必要があります。このエスカレーションには一定レベルの緊急性があり、全体的な影響は `medium` です。|
| Urgent        | 今後 30 分以内にフォローアップが提供されない場合、チケット/Issue が [emergency](https://about.gitlab.com/support/definitions/#definitions-of-support-impact) になる可能性があり、顧客の不満につながる可能性があります。このエスカレーションは緊急であり、全体的な影響は `high` です。|

### STAR Issue トラッカー

送信されると、[Support Ticket Attention Request](https://gitlab.com/gitlab-com/support/ticket-attention-requests/-/issues) Issue トラッカーに Issue が作成されます。この Issue は自動的にオンコールの Support Manager に割り当てられ、チケット注目リクエストを記録します。

## チケットの STAR 解除（Support のみ使用）

リクエストによっては、[Support Leader on the Hook (SLOTH)](/handbook/support/workflows/support-leader-on-the-hook) が STAR にメリットがないと判断する場合があります。あなたの STAR リクエストの適切な優先順位を決定する際、私たちはチケットキュー全体の現状と、すでに存在する STAR を考慮することにご留意ください。

チケットの STAR を解除する際、マネージャーは STAR Issue に以下を文書化して、リクエスト者に期待値を設定する必要があります。

1. チケットが STAR 対応の対象にならない理由。
1. 受け入れ可能な代替経路についてのリクエスト者との合意。

`unstarred`（STAR 解除）されたすべての STAR には、対応する Issue に `unstarred` ラベルを含める必要があります。

## チケット注目リクエストのリダイレクト（Support のみ使用）

STAR リクエストが誤った Slack チャンネルに投稿された場合、その投稿に `:support-ticket-attention-request:` の絵文字をリアクションとして追加します。ユーザーは [Slack Workflow](https://gitlab.com/gitlab-com/support/toolbox/slack-workflows) を通じて、サポートチケット注目リクエストを依頼する適切な方法を案内されます。

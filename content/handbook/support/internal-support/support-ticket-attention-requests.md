---
title: GitLab サポート - サポートチケット注目リクエスト (STAR)
description: サポートリーダーシップにチケットへの追加的な注目を求めるためのプロセスドキュメント。
upstream_path: /handbook/support/internal-support/support-ticket-attention-requests/
upstream_sha: c1bf211b73eb496a1cb1e97c36f3e2aceeb892ba
translated_at: "2026-05-09T00:00:00Z"
translator: claude
stale: false
---

## 概要

このドキュメントは、顧客のビジネスにとって重要な状況であるために、私たちの[標準応答時間](https://about.gitlab.com/support/#priority-support)で定められているよりも迅速に注目または初回応答が必要となるサポートチケットを管理するためのプロセスを概説します。

## サポートチケット注目リクエスト (STAR) とは何か

サポートチケット注目リクエスト (STAR) は、GitLab チームメンバーがチケットへの追加的な注目を求めるための仕組みです。STAR は頭字語として発音し、動詞（*顧客からの依頼でこのチケットを STAR した*）または名詞（*適切な専門知識を持つエンジニアが割り当てられるよう、このチケットに STAR を付けた*）として使用してかまいません。

このプロセスを使用して追加的な注目を依頼できるチケットは、次の 2 種類です。

1. ライセンスまたはサブスクリプションを保有する顧客からの Zendesk サポートチケット。
1. ライセンスまたはサブスクリプションを保有する顧客のために GitLab チームメンバーが作成した [Zendesk 内の内部リクエスト](/handbook/support/internal-support/#internal-requests)。

>**Slack チャンネルへの投稿ではなく、STAR プロセスを使用してください。** サポート関連の Slack チャンネルでチケットへの目通し、即時の見解、または追加的な注目を依頼することは、他の優先度の高いチケットに取り組んでいるかもしれないサポートエンジニアに不要なストレスを与えます。

送信されると、[サポートチケット注目リクエスト](https://gitlab.com/gitlab-com/support/ticket-attention-requests/-/issues) Issue トラッカーに Issue が作成されます。Issue は自動的に[サポートマネージャーオンコール](/handbook/support/workflows/support_manager-on-call)に割り当てられます。

チケットを STAR すると、[#support_ticket-attention-requests](https://gitlab.slack.com/archives/CBVAE1L48) Slack チャンネルにスレッドが作成されます。

### チケットを STAR すべきタイミング

1. チケットに構造と焦点をもたらし、必要なリソースが割り当てられるようにするために、マネジメントによる監督が必要なとき。たとえば次のような場合です。
    - チケットの初回応答 [SLA](https://about.gitlab.com/support/#service-level-agreements) が 1 時間以上違反している（[チケットを STAR する前に](#before-you-star-a-ticket) を参照）。
    - 高い水準の顧客の不満に対処するために、チケットへの即時介入が必要である。
    - SLA に違反していなくても、ビジネス上の理由でサポートチームからの注目度を高める必要がある。
    - [サポートインパクト](https://about.gitlab.com/support/#priority-support) ガイドラインと照らし合わせて評価したとき、チケットの優先度が客観的に低い。
1. チケットの進捗が停滞しており、GitLab がチケットをより迅速に解決できるよう、（スキルセットに基づいて）別のエンジニアにエスカレーションする必要があるとき。

### STAR が適切でないとき

1. 既存または将来のビジネスがリスクにさらされる **GitLab にとってのビジネスクリティカル** な状況であり、CSM からの注目が必要な場合 -> [アカウントエスカレーションを発動](/handbook/customer-success/csm/escalations/#initiating-managing-and-closing-an-escalation)
1. **緊急事態** である場合 -> 顧客に[緊急事態を発動](https://internal.gitlab.com/handbook/support/workflows/raising-an-emergency)するようアドバイスする（内部ハンドブックリンク、GitLab チームメンバー専用。Premium/Ultimate 顧客のみが緊急事態を発動できます）
1. **SaaS インシデント** である場合 -> [GitLab ステータスページを確認](https://status.gitlab.com/) または [インシデントを報告](/handbook/engineering/infrastructure-platforms/incident-management/#reporting-an-incident)
1. チケットを担当しているエンジニアに追加情報を渡したい場合 -> Zendesk のチケットに内部ノートを残すか、`#support_gitlab-com` や `#support_self-managed` のような Slack チャンネルでチケットを担当しているサポートエンジニアに連絡してください。

### チケットを STAR する前に {#before-you-star-a-ticket}

>**重要:** STAR リクエストを送信した後、サポートマネージャーから質問があるかもしれないため、Slack で対応可能な状態を保ってください。

チケットが STAR 対応の基本的な要件を満たしていることを確認します。

1. 関連するサポートエンジニア（以前に返信した、実質的なノートを残したなど）に Slack で連絡したものの、返信がなかった。
1. **チケットは L&R（サブスクリプション、プラン、更新、ライセンス、トライアル）に関するものですか?** [プラン／ライセンスチケット注目リクエストの取り扱いに関するワークフロー](/handbook/support/license-and-renewals/workflows/managers_working_with_extensions/) と判定フローチャートを参照してください。顧客の利便性のためのリクエスト（つまり機能損失が差し迫っていない場合）は、優先されない可能性があります。
   - L&R STAR リクエストには、グループ名、サブスクリプション名、ライセンス保有者など、関連するすべての情報を含める必要があります。
1. **顧客からの情報を待っていますか、それともあなたからの情報を待っていますか?** 最新の応答が*顧客から*（または内部リクエストの場合は GitLab チームメンバーから）であることを確認してください。最新の応答が GitLab サポートからである場合、私たちは必要な情報を待っている状態です。
1. **チケットは SLA 内ですか?** Okta を使用して [Zendesk](https://gitlab.zendesk.com) にログインし、チケットに関連付けられた SLA と、違反までの残り時間を確認してください。
   - チケットがオープンされてから 0〜30 分以内で、正しい [Severity](https://about.gitlab.com/support/definitions/#definitions-of-support-impact) が設定されている場合、STAR リクエストは不要です。
   - SLA タイマーに数時間以上の余裕があるチケットを STAR する必要は通常ありません。
   - 私たちの [SLA](https://about.gitlab.com/support/#service-level-agreements) はチケットの初回応答に適用されます。GitLab サポートは 95% の SLA 達成 KPI を目標としています。これは、ある程度の違反は想定されていることを意味します。
   - チケットがすでに初回応答済みの場合、それは「内部（次回応答）違反」の可能性があり、これには契約上の SLA はありません。
   - チケットがまだ SLA 内のときに STAR リクエストを行った場合、サポートマネージャーが最善のアプローチについてあなたと相談します。
1. **チケットに情報が不足していませんか?**
   - チケットに必要な情報がすべて揃っていない場合、STAR の対象とはなりません。たとえば次のような場合です。
      - ログを依頼したが、顧客から提供されていない。
      - 必要なチャレンジがすべて完了していない 2FA リクエスト。
      - サポートエンジニアがチケット内で尋ねた未回答の質問。
      - [サポート資格の証明](https://about.gitlab.com/support/managing-support-contacts/#proving-support-entitlement)

**注:** Zendesk アカウントなしには内部リクエストフォームを使用できません。Zendesk へのアクセスがない場合は、[ライトエージェントアカウントをリクエスト](/handbook/support/internal-support/#requesting-a-zendesk-light-agent-account) して取得してください。

### スコープ外 / STAR 対応の対象外

1. 私たちの一般的なスコープ外 [定義](https://about.gitlab.com/support/statement-of-support/#out-of-scope) に該当するトピック。
1. 追加的な注目を正当化する*受け入れ可能なビジネスケースが提示されていない*チケット。
1. 顧客組織情報が欠けているチケット（"Needs Org"）。代わりに: Needs Org ワークフローの要件を確認し、`#support_operations` Slack チャンネルで ping してください。
1. 正しい SLA が割り当てられていないと思われるチケット。代わりに: [SLA ワークフロー](/handbook/support/workflows/sla_and_views) の要件を確認し、`#support_operations` Slack チャンネルで ping してください。

## サポートチケット注目リクエスト (STAR) の送信 / チケットの STAR 化

### **重要**

Zendesk STAR アプリは、私たちの[グローバルサポート時間](https://about.gitlab.com/support/#hours-of-operation)中のみ利用可能です。それ以外の時間は無効になります。

### Zendesk `STAR` アプリ経由

アクセスするには、ページ右上（プロフィールアイコンの下）にある Apps ボタンをクリックします。クリックすると展開され、Zendesk 内に STAR フォームが表示されます。

![Zendesk アプリボタン](/images/support/internal-support/Zendesk_App_Button.png)

この方法を使用すると、アプリは必要な情報のほとんどをチケットから自動的に取得します。これにより作業量が大幅に減り、サポートマネージャーが評価する前にデータがすでに検証されていることが保証されます。

提供する必要があるのは次のものだけです。

- 緊急度
- プラン
- GitLab.com グループの URL または名前
- このチケットに追加的な注目が必要な理由
- 望ましい結果

Zendesk アプリでフォームがどのように表示されるかを以下に示します。

![Zendesk STAR アプリフォーム](/images/support/internal-support/Zendesk_STAR_App_Form.png)

#### 検証

Zendesk `STAR` アプリは、リクエストを送信する前に次の項目を自動的に検証します。

- 送信時刻が[サポート時間](https://about.gitlab.com/support/#hours-of-operation)内であること
- 有効な名前空間が入力されていること（SaaS および SaaS アカウントフォームのみ）
- チケットが 30 分以上前に作成されていること
- チケットが有効なサポートフォーム（SaaS、SaaS アカウント、Self-Managed、L&R、Open パートナー、Select パートナー、Alliance パートナー）を使用していること

### STAR 緊急度レベルの定義

**注:** これらの定義は STAR リクエストの取り扱い方法を決定するものです。チケット自体に記述された根本的な問題のインパクト／緊急度／重大度を指すものではありません。

| 緊急度レベル | 定義 |
|---------------|------------|
| Not Urgent    | チケット／Issue に対する可視性を高め、今後 2 時間以内にサポートからの応答が必要です。この注目リクエストは緊急ではなく、全体的な影響は `low` です。|
| Timely        | チケット／Issue に対する潜在的または既存の顧客の不満に対処するため、今後 1 時間以内にサポートからの応答が必要です。このエスカレーションには一定の緊急性があり、全体的な影響は `medium` です。|
| Urgent        | 今後 30 分以内にフォローアップが提供されない場合、チケット／Issue は[緊急事態](https://about.gitlab.com/support/definitions/#definitions-of-support-impact)に発展する可能性があり、顧客の不満につながる可能性があります。このエスカレーションは緊急であり、全体的な影響は `high` です。|

### STAR Issue トラッカー

送信されると、[サポートチケット注目リクエスト](https://gitlab.com/gitlab-com/support/ticket-attention-requests/-/issues) Issue トラッカーに Issue が作成されます。Issue は自動的にサポートマネージャーオンコールに割り当てられ、チケット注目リクエストが記録されます。

## チケットの Unstar（サポートのみ使用）

リクエストによっては、[サポートマネージャーオンコール](/handbook/support/workflows/support_manager-on-call)が STAR に妥当性がないと判断する場合があります。STAR リクエストの適切な優先順位を決定する際には、現在のチケットキュー全体の状態と、すでに存在する STAR を考慮していることをご理解ください。

チケットを unstar する際、マネージャーは STAR Issue に次の内容を記録することで、依頼者と期待値をすり合わせる必要があります。

1. チケットが STAR 対応の対象とならない理由。
1. 依頼者と合意した代替的な進め方。

`unstarred` されたすべての STAR には、対応する Issue に `unstarred` ラベルを付ける必要があります。

## チケット注目リクエストのリダイレクト（サポートのみ使用）

STAR リクエストが間違った Slack チャンネルに投稿された場合、その投稿に `:support-ticket-attention-request:` 絵文字をリアクションとして追加してください。ユーザーには、[Slack ワークフロー](https://gitlab.com/gitlab-com/support/toolbox/slack-workflows) を介してサポートチケット注目リクエストを依頼する適切な方法が通知されます。

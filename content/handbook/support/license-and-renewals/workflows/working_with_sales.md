---
title: Sales との連携
category: General
description: Sales との連携方法について説明するページです。
upstream_path: /handbook/support/license-and-renewals/workflows/working_with_sales/
upstream_sha: 9da08370100b76603b2eb82901592f9d21c9766c
translated_at: "2026-05-08T11:18:50Z"
translator: claude
stale: false
---

## 一般的なワークフロー

### 1. Zendesk で顧客に応答する

1. チケットを自分にアサインします。
1. 該当する具体的なワークフロー（後述）を選択します。
1. `Escalated to sales` ボックスにチェックを入れ、チケットステータスを `Open` に設定します。
1. チケットステータスを `Pending` に設定します。

#### アカウントが `AMER|EMEA|APAC SMB Sales User` によって所有されている場合

顧客には、必要であればアカウントマネジメントチームに直接連絡できるよう `smallbusiness@gitlab.com` までメールできることを伝えます。必要な場合に SMB チームへ社内から連絡する方法については以下を参照してください。

あるいは、チケットのリクエスターが SFDC 上で正しいアカウントの連絡先としてすでに登録されている場合、マーケティングサイトの [Contact Sales フォーム](https://about.gitlab.com/sales/) を使ってチームに直接連絡することもできます。

メールアドレスとフォームのいずれを使っても、Salesforce のケースが作成されます。
***NB:** Zendesk のトリガーは、エージェントが公開コメントではなく内部メモを残した場合、チケットを `Pending` に設定できないようになっています。その場合、チケットは `Open` に戻されます。そのため、`Escalated to sales` のチェックを入れ、チケットステータスを `Pending` に設定すると、ステータスが `Open` に戻されます。2 回目に `Pending` として保存すると正しく適用されます。*

### 2. Salesforce の `Account Owner` 宛に Chatter で関連情報を残す

#### Salesforce アカウントに名前付きの `Account Owner` がいる場合

1. Chatter メッセージに以下のメモを追加することを検討してください。

 > Please note that according to the "Working with Sales workflow" (<https://handbook.gitlab.com/handbook/support/license-and-renewals/workflows/working_with_sales/>) we expect a reply from you on this chatter within 24 hours (excluding weekend, Family and Friends Day & global holidays) stating when/if you will contact the customer.

1. Chatter メッセージのリンク（タイムスタンプを右クリック）をチケットの内部メモで共有します。

- 元の Chatter メッセージにのみリンクできます。コメントへはリンクできません。

1. アカウントオーナーが現在休暇中でないか、Slack ステータスを確認してください。
1. Slack でアカウントオーナーに連絡する場合（必ず `#support_to_sales_escalation`、かつ *常に礼儀として*）、Chatter メッセージのリンクを共有し、そちらで返信してもらうよう依頼します。

***NB:** Support は、アカウントの責任者を判断するために Salesforce の `Account Owner` フィールドを信頼できる必要があります。それが正しくない場合は **直ちに** エスカレーションしてください。*

#### Salesforce の `Account Owner` が `AMER|EMEA|APJ SMB Sales User` の場合

- [このプロセス](/handbook/sales/commercial/high_velocity_sales_first_orders/#working-with-the-global-digital-smb-account-team) に従ってケースを作成するか、`#hvs_public` チャンネルで Slack メッセージを送信します。
  - ケースが作成されると SMB Advocate が引き受けます。引き受けられたら、SMB Advocate が Zendesk チケットにメモを残し、リクエストが対応中であることを伝えます。
  - ケースは `Case Status` フィールドと `Case Next Steps` フィールドで追跡できます。
  - Support のケースとその現在のステータスは、SFDC アカウントまたは [この SFDC レポート](https://gitlab.my.salesforce.com/00OPL000000toc5) で確認できます。

- Support Engineer が Salesforce にアクセスできない場合は、[**#global-digital-smb_public**](https://gitlab.enterprise.slack.com/archives/C06H72XGQUD) Slack チャンネルにメッセージを投稿します。
- 投稿には次の内容を含めてください。
  - リクエストの詳細
  - Zendesk チケットのリンク
- Note: グループにチャットしたり Slack 投稿で済ませたりすると（Salesforce ケースを作成する代わりに）、対応が遅くなります。チャットや Slack メッセージは追跡もできません。

##### Salesforce の `Account Owner` が個人ではなく、`<@AMER|@EMEA|@APAC> SMB Sales` ユーザーでもない場合

1. [Sales セグメント](/handbook/sales/field-operations/gtm-resources/#segmentation) と [Sales テリトリー](https://internal.gitlab.com/handbook/sales/sales-operations/#territory-management) の責任者を見つけ、Chatter コメントでメンションします。投稿には次の内容を含めてください。
    - リクエストの詳細
    - Zendesk チケットのリンク
1. 連絡した相手から 24 時間（週末、Family and Friends Day、グローバル休日を除く）以内に応答がない場合は、

### 3. Sales の誰かが顧客に連絡する旨を確認したら

1. 以下の内容に言及して、チケットを更新します。
    - 連絡を担当する人物の名前
    - 2 営業日後に Sales から連絡があったかを顧客に確認し、必要に応じてその時点でエスカレーションすること
1. チケットステータスを `Pending` に設定します。

*（Pro tip：「Escalated to Sales」= チェック済みの個人用チケットビューを作成し、これらを独立したキューに抽出すると便利です）*

### 4. エスカレーション手順

**エスカレーションする前に、誰かが顧客に連絡したか、アカウントの Salesforce ページの「Activity」セクションを確認することを検討してください。最初の Chatter 投稿以降に活動が見られる場合は、エスカレーションする前に、顧客または Sales 担当者にステータスを確認することを検討してください。** Sales に確認するには、元の Chatter に返信して連絡したかを尋ねるだけです。Chatter を開始してから活動が見られない場合は、以下の手順でエスカレーションしてください。

### Salesforce の `Account Owner` が誤っている、または対応できない／意思がない場合

- 対応できない／意思がない例：
  - アカウントオーナーがすでに GitLab に在籍していない。
  - アカウントオーナーが「もう自分のアカウントではない」と言う。
  - アカウントオーナーが「対応する時間がない」と言う。
  - 妥当な時間（24 時間以上）が経過しても応答がない

#### Salesforce アカウントに名前付きの `Account Owner` がいる場合

- その人物の直属マネージャーを Chatter コメントでメンションします。
  - 推奨メッセージ：
      > Following the "Working with Sales workflow" (<https://handbook.gitlab.com/handbook/support/license-and-renewals/workflows/working_with_sales/>) I'm escalating this, as we haven't heard from <account owner\> within the agreed upon time.
      >
1. VP レベル以上には、Chatter コメントに加えて `#support_to_sales_escalation` の Slack メッセージでもメンションします。
    - 推奨される Chatter メッセージ：
      > Following the "Working with Sales workflow" (<https://handbook.gitlab.com/handbook/support/license-and-renewals/workflows/working_with_sales/>) I'm escalating this, as we haven't heard from <account owner\> nor <account owner's manager\> within the agreed upon time.
    - 推奨される Slack メッセージ：
      > Following the "Working with Sales workflow" I'm escalating support ticket <https://gitlab.zendesk.com/agent/tickets/><ticket number\> as we haven't heard from <account owner\> nor <account owner's manager\> within the agreed upon time.
1. 必要に応じて 24 時間ごとに繰り返し、報告ラインを 1 段階ずつ上げ、必要なら CEO まで上げます。
    - エスカレーション先の判断には [会社の組織図](https://comp-calculator.gitlab.net/org_chart) を参照すると便利です。

#### Salesforce の `Account Owner` が `AMER|EMEA|APAC SMB Sales User` の場合

- ケースに対する SFDC アクセスがあり、ケースに割り当てられたオーナーがいる場合
  - ケースの Chatter でケースオーナーに ping します
  - 該当する地域マネージャーを含めます。
    - EMEA: @Miguel Nunes
    - AMER/ APAC: @Taylor Lund
  - 認知のため、地域の [L&R DRI](/handbook/support/license-and-renewals/#support-management-contacts) に [#support_licensing-subscription](https://gitlab.enterprise.slack.com/archives/C018C623KBJ) で通知します。
- SFDC にアクセスできない、またはケースにオーナーがいない場合
  - [**#global-digital-smb_public**](https://gitlab.enterprise.slack.com/archives/C06H72XGQUD) Slack チャンネルにメッセージを投稿します。
  - 投稿には次の内容を含めてください。
    - リクエストの詳細
    - Zendesk チケットのリンク
    - 認知のため、地域の [L&R DRI](/handbook/support/license-and-renewals/#support-management-contacts) を cc に含めます。
- 妥当な時間内に地域マネージャーと連絡が取れない場合は、ケースの Chatter で @Mike Smith にエスカレーションし、認知のため地域の [L&R DRI](/handbook/support/license-and-renewals/#support-management-contacts) に [#support_licensing-subscription](https://gitlab.enterprise.slack.com/archives/C018C623KBJ) で通知します。

## Sales に **回す** べきか **回さない** べきかの判断

具体的なワークフローは下記を参照してください。

Sales に回す:

- 顧客がクレジットカード以外の方法で支払いたい場合
- 顧客が前年に Sales 支援の購入を行い、今回はオーダーフォームで購入したい（会社が見積書または注文書を必要とする）
- リセラー経由で購入する必要がある（リセラーまたはエンドユーザーから連絡が来る）

Sales に回さない:

- 顧客が SaaS または Self-Managed プランをアップグレードしたい場合 - customers portal のアップグレードボタンを使用できます。
- 顧客のニーズを理解する前にエスカレーションしないでください
- 顧客が更新のために Sales に連絡しようとしているが返信を受け取っていない場合 - 代わりに何の支援が必要かを尋ね、私たちが対応できるか確認してください
- 顧客が製品やプロセスについて質問をしている（多くの場合は私たちが回答するか、別の Support キューに入れることができます）
- 顧客が更新したが、ユーザー数が足りない場合 - customers portal の Add more seats ボタンを使うよう案内します。
- 顧客が現在のサブスクリプションよりも少ないシート数で更新したい場合。顧客は現在の利用数以上で更新する必要があります。少ないシート数で更新したい場合は、更新前にシート使用数を減らし、[自動更新を無効化](https://docs.gitlab.com/subscriptions/gitlab_com/#enable-or-disable-automatic-subscription-renewal) し、サブスクリプションを手動で更新する必要があります（[SaaS](https://docs.gitlab.com/subscriptions/gitlab_com/#renew-or-change-a-gitlab-saas-subscription) と [Self-Managed](https://docs.gitlab.com/subscriptions/self_managed/#renew-a-subscription)）。

NB、Sales は単純に True-Up を免除することはせず、例外的なケースには承認プロセスがあります。料金が免除されるという期待を抱かせないでください。判断に迷ったら、Slack でセカンドオピニオンを求めてください。

## True-Up 免除リクエストに関する Support の責務

True-Up 免除リクエストに関する状況において、L&R Support は以下を行えます。

- True-Up の超過が発生したかどうかを顧客や Sales が特定するのを支援します。
- サブスクリプションが許可する範囲でリクエストされたライセンスを生成します。
- True-Up 免除リクエストが解決するまでの間、一時的なライセンスやサブスクリプションを生成します。

L&R Support は以下のことは行えません。

- 超過が発生した理由について詳細な説明を提供すること。Support が提供できるのは、超過が発生したかどうかを示すデータの収集のみです。
- 超過の性質に関する詳細な分析（例：超過アカウントにログインがあったかどうかの確認、アカウントの作成方法・時期の確認、超過期間のタイムライン提供など）を提供すること。
- True-Up 免除の可否を決定する裁定者となること。これは [waived true-ups policy and approval requirements](/handbook/sales/field-operations/order-processing/#waived-true-ups-policy-and-approval-requirements) で詳述されているとおり、Sales の責務です。

## Sales に回す具体的なワークフロー

以下のワークフローの多くは `Chatter Sales` を行うよう指示しています。手順は [expired license](/handbook/support/workflows/sla_and_views#handling-customers-with-incorrect-expired-support) のプロセスで説明されています。

以下のワークフローでは特に明記がない限り、[Pass to Sales Zendesk マクロ](https://gitlab.zendesk.com/agent/admin/macros/360025924680) を使用します。

### 顧客が代替の支払い方法を使用したい場合

クレジットカード以外の方法で支払いたい顧客の場合。

ワークフロー:

- 顧客が使用したい支払い方法（wire、ACH、または小切手）を確認します
- Chatter で Sales に連絡し、顧客のリクエストを要約し、連絡を取ってもらうよう依頼します
- 適切なマクロで顧客に応答します

### 注文書および見積

顧客が支払いを希望し、PO を持っている、または書面の見積書または請求書を必要としている場合。

ワークフロー:

- 既存の Opportunity またはサブスクリプション（更新の場合）を見つけます
- Chatter で Sales に連絡し、顧客のリクエストを要約し、連絡を取ってもらうよう依頼します
- 適切なマクロで顧客に応答します

### リセラー（またはリセラー顧客）がサブスクリプションを変更したい、または質問したい場合 {#a-reseller-or-reseller-customer-wants-to-change-their-subscription-or-ask-a-question}

リセラーまたはリセラー顧客がサブスクリプションを変更したい、または注文をフォローアップしたい場合。

ワークフロー:

- Zuora でアカウントを見つけ、エンドユーザーとリセラーを確認します
- Chatter で Sales に連絡し、顧客のリクエストを要約し、リセラーとエンドユーザーの情報を提供し、連絡を取ってもらうよう依頼します
- 適切なマクロで顧客に応答します

### 顧客が割引を求めている場合

顧客が割引を求めており、サブスクリプションが Starter ティアより上位の場合。

ワークフロー:

- ティアと要求された割引の詳細を確認します。Starter より上位でない場合や割引リクエストが妥当でない場合（裁量で判断）は、割引は提供できないと説明します
- 割引を提供すべきか不明な場合は、まずアカウントオーナーに相談してください
- Chatter で Sales に連絡し、顧客のリクエストを要約し、割引が可能だと確認できた場合は連絡を取ってもらうよう依頼します
- 適切なマクロで顧客に応答し、割引は保証されたものではなく、関連の承認者の裁量によることを期待値として伝えます

### SaaS と Self-Managed 間の製品移管

顧客が SaaS から Self-Managed へ、またはその逆に移管したい場合。

ワークフロー:

- 現在のサブスクリプションが終了日に近い場合、期限切れにして新しいサブスクリプションを購入するよう顧客に案内します
- 現在のサブスクリプションが開始日に近い場合、Billing に返金可能か確認します。可能であれば、現在のサブスクリプションを解約・返金して、正しい製品タイプで新しいサブスクリプションを購入できることについて顧客の確認を求めます
- いずれも選択できない場合は、Chatter で Sales に連絡し、顧客のリクエストを要約します。新製品に必要なシート数を明示し、移管用の見積を持って連絡してもらうよう依頼します
- 適切なマクロで顧客に応答します

**プランのダウングレード** - 顧客が現在のティアから別のティアにダウングレードしたい場合（同じ製品内）

ワークフロー: 対応している状況に最適な解決策について、Slack で助言を求めてください。

**SaaS - プランを Free にダウングレード**

[Handling trials, extensions, and plan changes on GitLab.com](/handbook/support/license-and-renewals/workflows/saas/trials_and_plan_change) ページの `Downgrading to a free plan` セクションのワークフローに従ってください。

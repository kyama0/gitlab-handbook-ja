---
title: GitLab サポートとの連携
description: GitLab チームメンバーが GitLab サポートと連携する方法とサポートに連絡する最善の方法。
upstream_path: /handbook/support/internal-support/
upstream_sha: 597f4cdde51f70d22792d64c8bf63dff58c6fda8
translated_at: "2026-05-08T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-05-04T12:14:28+08:00"
---

## 概要

このページの目的は、サポート以外の GitLab チームメンバーに対して、GitLab サポートが何を行うか、私たちにどのように連絡するか、そして私たちの関与が必要な一般的な依頼をどこに向けるべきかを案内することです。**技術サポートを求めているお客様ですか？その場合は、代わりに [サポートページ](https://about.gitlab.com/support/) をご覧ください。**

## クイックリファレンス

このページに記載されていない場合、それはおそらくカスタマーサポートの対象ではありません。

詳細については、次の [GitLab サポートの目的](#gitlab-supports-purpose) と [GitLab サポートに連絡すべきか？セクション](#should-i-contact-gitlab-support) をお読みください。

| 問題 | 対応方法 |
| ------ | ------ |
| チケットを見たい | [Light エージェント Zendesk アカウント](#requesting-a-zendesk-light-agent-account) を取得します。 |
| 顧客がチケットを開けない（または閉じられる）  | 顧客が [サポート連絡先](https://about.gitlab.com/support/managing-support-contacts/#managing-contacts) であることを確認します。あるいは、[Zendesk にログインできない](#if-a-customer-cannot-login-to-gitlab-support-zendesk--customer-portal) のかもしれません。  |
| 顧客がチケットについて質問している | Light エージェントアカウントで Zendesk のチケットステータスを確認します。アサインされているサポートエンジニアに連絡するか、顧客の質問を社内ノートとして追加します。必要に応じて [Support Ticket Attention Request（STAR）](#i-want-to-escalate-a-ticket) を開けます。チケットがない場合は、[新しく開きます](#requesting-support-for-customers)。|
| 顧客が [緊急事態](https://about.gitlab.com/support/definitions/#Definitions%20of%20Support%20Impact) に遭遇している！ | サポートを受ける権利のある顧客が緊急事態を起こす必要がある場合、まず [緊急サポートの利用方法](https://about.gitlab.com/support/#how-to-trigger-emergency-support) に記載されているサポートポータルフォームから行うべきです。フォームが利用できない、または顧客が連絡できない場合は、新しい [メール](https://internal.gitlab.com/handbook/support/workflows/raising-an-emergency)（社内）を送ることもできます。Issue がサポートの緊急事態の定義に該当しない場合は、[STAR](#i-want-to-escalate-a-ticket) を開くことができます。 |
| 顧客にサブスクリプション/ライセンスの問題がある  | [顧客とのチケット](#requesting-support-for-customers) が不可能な場合は、[社内リクエスト](#internal-requests) を開いてください。  |

これは網羅的なリストではありません。サポートチームが対応すると思われるその他のものについては、目次を確認するか、このページを検索してください。

## GitLab サポートの目的 {#gitlab-supports-purpose}

GitLab サポートは、GitLab.com およびセルフマネージド GitLab の顧客に対して技術サポートを提供します。IT（1Password、Slack、Mac など）の問題を抱えている GitLab チームメンバーにサポートを **提供しません**。そういった性質の問題で支援が必要な場合は、[Team Member Enablement](/handbook/security/corporate/end-user-services/) に連絡してください。

## GitLab サポートに連絡すべきか？ {#should-i-contact-gitlab-support}

GitLab に関する一般的な質問（「GitLab で x はできるか？」「GitLab で y を行う方法は？」）については、[#questions](https://gitlab.slack.com/messages/questions) で質問してください。あるいは、GitLab を使用中にバグまたは正しく動作していない何かに遭遇したと思った場合は、[#is-this-known](https://gitlab.slack.com/archives/CETG54GQ0) で質問してみてください。そうすることで、[誰もが回答に貢献できる](/handbook/company/mission/#mission) ようになります。

GitLab サポートの Slack チャンネルは、GitLab サポートのさまざまな **チーム** 専用であり、GitLab 製品に関する質問用ではありません。技術サポートを必要とする顧客と作業している場合は、その顧客に [GitLab サポートへの連絡](#requesting-support-for-customers) を案内してください。

### Support Team Meta プロジェクト

長期的または広範な質問をしたい、GitLab サポートにアイデアを提案したい、何かについて議論したい、ワークフローへの改善や変更を提案したい場合は、**[Support Team Meta](https://gitlab.com/gitlab-com/support/support-team-meta)** プロジェクトの [Issue トラッカー](https://gitlab.com/gitlab-com/support/support-team-meta/issues) にアクセスして Issue を作成してください。コミュニティに対して公開されているため、**機密情報を含めるべきではない** ことに注意してください。Zendesk へのリンクや他の参照は推奨されています。

## サポートチケットと顧客情報

### 顧客のためのサポートを依頼する {#requesting-support-for-customers}

顧客が技術サポートを必要としてあなたに連絡してきた場合、以下のオプションが利用可能です。

1. （推奨）多くの場合、[サポートポータル経由でチケットを開く](https://gitlab.zendesk.com) ように案内してください。私たちの顧客に技術サポートを提供することがサポートの主要な機能であり、有料ユーザーとして顧客は私たちにアクセスする権利があります。このオプションは、顧客が自分自身の Issue とニーズを最もよく説明できる立場にあるため推奨されます。サポートに直接連絡することがほぼ常に最も早い回答への道であることを顧客が理解していることを確認してください。

1. 顧客を **GitLab サポートポータル** に案内する際、[サポート連絡先として追加されている](https://about.gitlab.com/support/managing-support-contacts/) ことを確認するように知らせてください。そうしないと、チケットが自動的にクローズされる可能性があります（ライセンスと更新のチケットを除く）。これに関連して、顧客の同僚もサポートチケットを送信できるようにしたい場合、管理対象連絡先のリストも提供する必要があります。顧客は [連絡先の管理](https://about.gitlab.com/support/managing-support-contacts/) の手順に従ってサポート連絡先を追加または管理できます。有効なサポートポータルアカウントを持つことを顧客に促すことで、サポートプロセスが合理化され、顧客と私たちのサポートチームの双方にとってよりスムーズな体験が保証されることに注意してください。

1. ライセンス、サブスクリプション、更新、トライアル、トライアル延長、一時ライセンスなどの調整を依頼するには、[LnR 社内リクエストを開く](#internal-requests) ことができます（[詳細は下記](#internal-requests)）。
    - **注:** 顧客がすでにライセンス/サブスクリプションを所有しており、それを適用する際にエラーが発生している場合は、顧客が直接私たちにサポートチケットを開くのが最善です。
    - **注:** フォームを送信するには、[Zendesk Light エージェントアカウント](#requesting-a-zendesk-light-agent-account) が必要です。すべての GitLab チームメンバーがリクエストできます。このアカウントにより、チームメンバーは Zendesk で顧客チケットを表示し、サポートチームにメモを残すこともできます。

1. 顧客にチケットを開くよう依頼することが状況を悪化させるような繊細なケースでは、[Zendesk グローバル社内リクエストフォーム](https://gitlab-internal.zendesk.com/hc/en-us/requests/new?ticket_form_id=22783651259548) を介して顧客の代理でサポートチケットを開くことができます。これを行うには、`Customer Support Internal Requests` を選択し、次に `What is this request concerning?` ドロップダウンで `Create a support ticket on behalf of a prospect or customer` を選択します。提供できる情報を可能な限り使ってすべての必須フィールドを埋めてください。
   - **注:** このプロセスは以下には **使用しないでください**:
     - 組織のサポート連絡先の追加。この場合、顧客は自分でサポートチームに直接連絡する必要があります。
     - L&R 社内リクエスト。

外部の顧客は社内リクエストの cc に含めるべきではありません。顧客とのコミュニケーションは、顧客自身が開始した [サポートチケット](https://gitlab.zendesk.com)、または顧客の代理で開かれたチケットを通じてのみ提供されます。

#### サポートは Slack ではアクションを実行しません

特定の顧客状況に関する質問には、サポートチケット（顧客から）または [社内リクエスト](#internal-requests) チケット（GitLab チームメンバーから）が必要です。

サポートが Slack を介して行われた顧客固有のリクエストに対応できない理由はいくつかあります。

- 私たちは顧客を支援するたびに [サービスレベルアグリーメント](https://about.gitlab.com/support/#service-level-agreements)（SLA）を満たすことを目指しており、SLA コンプライアンスは Zendesk 経由でのみ追跡しています。
- Zendesk にはチケットアサインシステムがあり、これは私たちのワークフローにとって不可欠です。Slack でチケットを割り当てるシステムはありません。
- 私たちが現在の顧客の問題を解決しようとしているとき、Zendesk で解決済みのチケットを頻繁に検索します。Slack のコンテンツは 90 日後に削除されるため、顧客の問題やその解決策が Zendesk チケットの代わりに Slack で議論されると、貴重な情報が失われる可能性があります。
- 私たちは顧客の技術サポート問題とその解決策のすべての記録を一箇所（Zendesk）に保管したいと考えています。

**既存の** チケットまたは社内リクエストに追加の注意を向けるよう依頼したい場合は、[Support Ticket Attention Request フォーム](https://gitlab-com.gitlab.io/support/toolbox/forms_processor/support_escalation/)（[ハンドブックエントリー](/handbook/support/internal-support/support-ticket-attention-requests)）を使用してください。

### アカウントまたはログインの問題のある GitLab.com ユーザーのサポートを依頼する

アカウントまたはログインの問題のある GitLab.com ユーザーは、[新しいチケットを開いて](https://support.gitlab.com/hc/en-us/requests/new) ください。
リクエストの理由として「GitLab.com (SaaS) User Accounts and Login Issues」を選択する必要があります。

### 顧客が GitLab サポート Zendesk / 顧客ポータルにログインできない場合 {#if-a-customer-cannot-login-to-gitlab-support-zendesk--customer-portal}

Zendesk 顧客ポータルへのログインに困難がある顧客は、まず [文書化されたトラブルシューティング手順](https://about.gitlab.com/support/portal/#support-portal-troubleshooting) を試す必要があります。これらの手順でほぼ常に困難が解決されます。

これらのヒントで問題が解決しない場合は、顧客の代理で [社内リクエスト > その他](#internal-requests) を開けます。

### 顧客情報の閲覧をリクエストする

[プライバシーポリシー](https://about.gitlab.com/privacy/) に従い、サポートは公開されていない顧客、グループ、プロジェクトなどに関する情報をあなたに提供しません。これは、顧客が自分自身のプロジェクト、グループなどについての情報をリクエストしている状況も含みます。認証できない場合、私たちはその人が本人であると仮定できません。ロックアウトされた場合は、サポートチケットを送信してもらってください。

### Zendesk「Light エージェント」アカウントを依頼する {#requesting-a-zendesk-light-agent-account}

サポートチケットを表示するには Zendesk Light エージェントアカウントが必要で、マネージャーの承認なしに取得できます。Zendesk グローバル Light エージェントアカウントをリクエストするには、[Lumos](https://app.lumosidentity.com/app_store?domainAppId=1115644&permissionIds=6102631) 経由でリクエストしてください。

Light エージェントアカウントでは、顧客への公開返信を送信できないことに注意してください。これを行う必要がある場合は、[フルエージェントアカウントの新しいアクセスリクエスト Issue を提出](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=Individual_Bulk_Access_Request) し、予算承認のためにマネージャーをタグ付けしてください。必要に応じて、Zendesk から Light エージェントアカウントに関する [詳細情報を読むこと](https://support.zendesk.com/hc/en-us/articles/4408829504154-Collaboration-overview) ができます。

## 一般的なリクエスト

### GitLab サポート、プラン、ネームスペースについて

| リクエスト    | 対応方法                                                   |
| ---------- | ------------------------------------------------------------ |
| アップグレード支援 | **グローバル組織:** [サービスを確認](https://about.gitlab.com/support/scheduling-upgrade-assistance/) してから、グローバルサポートポータルで新しいチケットを開く <br> **公共セクター組織:** 米国政府サポートポータルで [チケットを開く](https://about.gitlab.com/support/scheduling-upgrade-assistance/#us-federal-support) |
| 顧客の緊急事態の対応者は誰か？ | `GitLab Chatops` へのダイレクトメッセージで `/chatops run oncall support` を実行し、結果を確認します。これによりオンコールエンジニアに **ページングは送信されません**。 |
| GitLab.com CMOC の対応者は誰か？ | `GitLab Chatops` へのダイレクトメッセージで `/chatops run oncall cmoc` を実行し、結果を確認します。これによりオンコールエンジニアに **ページングは送信されません**。 |
| GitLab.com で過剰な reCaptcha が発生 | 発生中に [#support_gitlab-com](https://gitlab.slack.com/messages/C4XFU81LG/) に投稿し、対象の Issue/MR へのリンクを貼って許可リストに追加してもらいます。 |
| クライアントや見込み顧客から受けたサポートに関する苦情を報告 | `Indirect Feedback` テンプレートを使用して [Issue を開いて](https://gitlab.com/gitlab-com/support/feedback/-/issues/new?issuable_template=Indirect%20Feedback) ください。 |
| GitLab.com ネームスペースの利用可能性を確認 | GitLab チームメンバーで、ネームスペースの利用可能性を確認したい場合は、[Zendesk グローバル社内リクエストフォーム](https://gitlab-internal.zendesk.com/hc/en-us/requests/new?ticket_form_id=22783651259548) を使用し、`What is this request concerning?` フィールドの記入時に `Check Namespace Availability` を選択してください。GitLab.com で有料サブスクリプションを持つ顧客がネームスクワッティングリクエストを進めたい場合、[GitLab.com user accounts and login issues](https://support.gitlab.com/hc/en-us/requests/new?ticket_form_id=360000803379) フォームを使用してチケットを送信し、Problem Type として `Namesquatting Assistance` を選択できます。見込み顧客、無料ユーザー、GitLab チームメンバーはネームスクワッティングリクエストの対象ではありません。|

### チームメンバー向けの GitLab プランまたはライセンス

ローカルまたはサンドボックステストの目的では、GitLab チームメンバーは独自のエンタープライズエディションライセンスをプロビジョニングできます。これを行う手順:

   1. **Continue with GitLab.com account** ボタンを選択して [ステージング Customers Portal](https://customers.staging.gitlab.com) にサインインします。既存のアカウントがない場合、作成するように促されます。
   1. 選択したいサブスクリプションの購入ページにアクセスします。ステージング Customers Portal のリンクは価格ページにリダイレクトされるので、購入 URL に直接ナビゲートする必要があります。ステージングサブスクリプションの URL の完全なリストは [こちら](https://gitlab.com/gitlab-org/customers-gitlab-com/-/blob/main/doc/flows/self_service_flow_urls.md#new-subscription-purchase-links) にドキュメント化されています。どのサブスクリプションが必要かわからない場合は、**Self-Managed Ultimate** が良いデフォルトです。
   1. [テストクレジットカード](https://gitlab.com/gitlab-org/customers-gitlab-com/#testing-credit-card-information) を使用してサブスクリプションを購入します。

  これは **ステージングライセンス** であるため、GitLab インスタンスをステージング Customers Portal を使用するように設定する必要があることに注意してください。Omnibus インストールの場合、ステージング Customers Portal を指す方法は [こちら](https://docs.gitlab.com/omnibus/development/setup.html#use-customers-portal-staging-in-gitlab) です。GDK の場合、環境は [デフォルト](https://gitlab-org.gitlab.io/gitlab-development-kit/#use-gitlab-enterprise-features) でステージング Customers Portal を指しているため、アクションは必要ありません。

何らかの理由でセルフプロビジョニングが機能しない場合は、`#s_fulfillment` または `#gdk` に支援を求めてください。

GitLab チームメンバーが GitLab.com の Ultimate ライセンスを希望する場合、2 つのオプションがあります。

1. [アクセスリクエスト](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?description_template=GitlabCom_Licensed_Demo_Group_Request) を介してデモ目的の Ultimate グループライセンスをリクエストします。
1. [個人ネームスペース用の Ultimate ライセンスをリクエスト](/handbook/total-rewards/incentives/#gitlab-ultimate-with-duo-enterprise) します。

### GitLab のインシデントや変更についてユーザーに連絡する

サポートに依頼して、あなたに代わって GitLab.com ユーザーに連絡してもらうことができます。ユーザーへの連絡を依頼できる場合の例を以下に示します。

- GitLab に対して計画されている本番変更がユーザーに大きな影響を与える、または多数のチケットが発生すると考えられる場合
- 緊急のセキュリティ関連 Issue について顧客に通知する必要がある場合
- GitLab.com 上のユーザーをブロックした場合
- 通常とは異なる使用パターンや行動を示しているため、特定のアカウントにインタビューする必要がある場合
- プロジェクト/グループに影響する重要な変更がある場合
- GitLab.com アカウントの問題がある場合

| リクエスト    | 対応方法                                                   | 質問先 |
| ---------- | ------------------------------------------------------------ | ---------------------- |
| インシデント中にユーザーに連絡 | [機密のインフラ Issue を開いて、現在の CMOC にアサインします](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/new?issuable_template=confidential_incident_data)。`confidential_incident_data` テンプレートを使用 | #support_gitlab-com |
| 単一ユーザーに連絡 | `Contact Request` テンプレートを使用して [Issue を開いて](https://gitlab.com/gitlab-com/support/internal-requests/issues/new?issuable_template=Contact%20Request) ください。 | #support_gitlab-com |
| 変更に向けてサポートを準備（特定ユーザーへの連絡有無を問わず） | [Support Preparedness Issue を開いて](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/new?issuable_template=Support%20Preparedness) ください。 | #support_leadership |
| 多数のユーザーに連絡する必要がある | [Marketing-Ops Issue を開いて](/handbook/support/workflows/sending_notices/#mass-emails-through-marketing-department) ください。 | #support_leadership |

**ご注意ください**: これはマーケティングや営業関連の連絡用ではありません。このチャンネルは、GitLab SaaS の使用に影響する可能性のある重要事項に関するユーザーとのコミュニケーション専用です。

### 社内リクエスト {#internal-requests}

社内リクエスト（IR）には通常 2 つのタイプがあります。

1. カスタマーサポート社内リクエスト
詳細は [Gratis サポート](../gratis-support/) を参照してください。

1. L&R 社内リクエスト
ライセンス、サブスクリプション、トライアルに関するすべての社内リクエストは、[グローバルサポート](https://gitlab-internal.zendesk.com/hc/en-us/requests/new?ticket_form_id=22783840298780) または [米国政府サポート](https://gitlab-federal-internal.zendesk.com/hc/en-us/requests/new?ticket_form_id=41826474429588) のいずれかの GitLab Support Internal Zendesk インスタンスを使用して提出する必要があります。`Customer Support Internal Request` ではなく、`L&R Internal Request` フォームを選択していることを確認してください。これらは別々のキューにルーティングされ、そうしないとあなたや顧客、見込み顧客にとって遅延が発生する可能性があります。

**顧客は社内リクエストの cc に含めるべきではありません。**

#### 社内リクエスト SLO

<details><summary markdown='span'>クリックして詳細を表示</summary>

社内リクエストでは、SLO はチケットに対して選択された `Priority` によって異なります。以下の情報をガイドとして使用し、各リクエストに適切な優先度を選択してください。

**Urgent**

- SLO: 1 時間
- 基準: サービス損失
- 一般的なシナリオ:
  - SaaS グループのダウングレード
  - SM ライセンスの期限切れ

**High**

- SLO: 4 時間
- 基準: 時間的に敏感なタスク
- 一般的なシナリオ:
  - 顧客が今日 SaaS サービスを失う

**Normal**

- SLO: 8 時間
- 一般的なシナリオ:
  - SaaS ネームスペースの関連付け
  - SM ライセンスのトラブルシューティング
  - 以下のような購入問題によるブロック:
    - CI 分が完全に消費された
    - プロジェクトがロックされたため SaaS ストレージにアクセスできない
    - SM 更新期間が終わりに近づき、顧客が購入エラーや問題に直面している

**Low**

- SLO: 24 時間
- 一般的なシナリオ:
  - 即時のブロックがない購入問題（例: 解決まで数日の余裕がある）
  - 連絡先管理
  - アカウント管理
  - 営業への連絡依頼
  - 請求/AR への引き渡し
  - 最大シート数のリセット
  - 注文管理チケット
  - クラウドライセンスの除外、ライセンスの再送、ライセンスの転送
    - 顧客が完全にブロックされている、または以前のライセンスが完全に期限切れの場合を除く
  - トライアル（開始 / 延長）
    - 営業からの CI クォータ / ストレージクォータ増加リクエスト
  - QSR / 課金可能ユーザーの紛争または詳細情報のリクエスト
  - 教育、製品 / プロセスに関する質問
  - コミュニティ / NFR ライセンスまたはサブスクリプション
  - 非顧客

すべての SLO は営業日（24x5）にのみ適用されます。

</details>

---

#### 一般的な社内リクエストシナリオ

<details><summary markdown='span'>クリックして詳細を表示</summary>

一般的なシナリオと適切なオプションのリストは、以下のセクションで詳しく説明します。一部のシナリオには有用なウォークスルー YouTube 動画が含まれています。例えば `Extend an (almost) expired subscription` と `Strict Cloud licensing exemption request` ですが、動画を視聴するには GitLab unfiltered アカウントが必要であることに注意してください。

> - **注**: サポートは新しいトライアルを開始できません。必要な場合は、*ユーザーにまず通常のトライアルを開始してもらいます*。
> - **注**: サポートはチケットごとに単一のライセンスまたはサブスクリプションリクエストを必要とします。提供されたライセンスが機能しない場合や、さらに延長が必要な場合は、新しいチケットを送信してください。すべての社内 L&R チケットは、監査/レポートの理由から、生成されたライセンスまたはサブスクリプションと 1 対 1 の関係を持つ必要があります。
> - **注**: 提出前に、正しい社内リクエストフォームを選択していることを確認してください。
> - **注**: 解決を迅速化するため、SFDC リンクや追加コンテキストを含むすべてのフォームフィールドに記入してください。完全で正確な情報を提供することで、L&R サポートはリクエストの完了に必要な手順をより効率的に実行できます。

## SaaS サブスクリプション関連

### 期限切れ間近（または期限切れ）のサブスクリプションを延長する

顧客が私たちと契約しており、（ほぼ）期限切れの場合に使用してください。実際のサブスクリプションを延長することはできないことに注意してください。代わりに、ネームスペースに対するトライアルを作成し、それを延長に使用します。詳細なコンテキストについては [トライアルに含まれるものと除外されるもの](https://about.gitlab.com/free-trial/#what-is-included-in-my-free-trial-what-is-excluded) ページを確認してください。

### 不正確なサブスクリプション情報を調査する

顧客が私たちと契約しており、サブスクリプション情報に何か誤りがある場合に使用してください。これには以下の問題が含まれます: トゥルーアップ、サブスクリプションの不一致、サブスクリプションをグループ/ネームスペースに適用できない、現在のシート使用数。

### QSR の最大シート数をリセット

[超過分の免除に対する承認](/handbook/sales/field-operations/order-processing/#waived-true-ups-policy-and-approval-requirements) が付与され、SFDC chatter 経由でドキュメント化された後にこれを使用します。これが完了したら、フォームを提出してサポートに最大シート数のリセットを依頼してください。

### SaaS NFR ライセンスリクエスト

GitLab.com のグループでトライアルが開始されていることを確認してから、このオプションを使用して SaaS NFR サブスクリプションの生成をリクエストします。

### 請求エンティティの変更

請求エンティティの変更プロセスの一部として、正しいサブスクリプションが顧客のグループに関連付けられているかを確認するために使用します。

### サブスクリプションをネームスペースにリンク

顧客から、提供されたネームスペースにサブスクリプションをリンクするよう依頼があった場合に使用します。リクエストを送信する前に、提供されたネームスペースにサブスクリプションをリンクすることについて、まずアカウントオーナーから書面による確認を受けていることを確認してください。営業がこの証拠を SFDC にアップロードし、それへのリンクを提供する必要があります。メールリンクまたはスクリーンショットを Salesforce の顧客のアカウントレコードの `Google Docs, Notes, & Attachments object` セクションに追加する必要があります。

## SaaS トライアル関連

### SaaS トライアルを延長する

顧客のネームスペースがアクティブ/期限切れのトライアル中の場合に使用してください。顧客のためにトライアルを作成することはできないことに注意してください。現在トライアルがない場合、作成するように案内されます。

### 既存の SaaS トライアルプランを変更する

現在アクティブなトライアルのプランに変更を加えたい場合（コンピューティング分の追加、トライアル Runner のアクティブ化、営業支援トライアルネームスペースのクレジットカード検証要件の上書きを含む）に使用します。GitLab.com トライアルのユーザー数に制限はありません。顧客のためにトライアルを作成することはできないことに注意してください。現在トライアルがない場合、作成するように案内されます。

## セルフマネージドライセンス関連（有料顧客のみ）

### 期限切れ間近（または期限切れ）のサブスクリプションを延長する

顧客がライセンスを所有しており、（ほぼ）期限切れの場合に使用してください。実際のライセンスを延長することはできないことに注意してください。代わりに、顧客にトライアルライセンスを作成し、それを延長に使用します。次の動画 [How to extend an extension for an almost-expired subscription (self-managed)](https://www.youtube.com/watch?v=g8k8PAUY2pM) は `Extend an (almost) expired subscription` リクエストを正しく送信する方法を示しています。

### 既存ライセンスをライセンス上のメールに再送する

顧客が私たちから有料ライセンスを受け取るべきだったのに受け取っていない場合に使用してください。ライセンスはライセンス内の連絡先にのみ再送できることに注意してください。
このリクエストを提出する前に [納品証明を確認](#obtaining-proof-of-delivery-for-a-subscription) してください。

### 既存ライセンスをライセンス上にないメールに転送する

別のユーザーにライセンスを送信するよう依頼するために使用します。アカウントオーナー以外にライセンスを送信することはできないことに注意してください。他の人に送信するには、連絡先変更プロセスを進めるために、顧客にチケットを提出してもらってください。一時ライセンスについては例外を設けることができます。

### 複数年ライセンスの生成が必要

複数年サブスクリプションの次年度ライセンスの作成をリクエストするために使用します。**このリクエストを開く前に、シート使用が超過していないかを必ず顧客に確認してください。** サポートはトゥルーアップを免除したり、SFDC で何かを変更したりすることはできません。確認し必要に応じてサブスクリプションを修正するまで、ライセンスを作成することはできません。

### セルフマネージド NFR ライセンスリクエスト

セルフマネージド NFR ライセンス生成のために使用します

### クラウドライセンスの除外

SCL 除外のために使用します。次の動画 [How to submit a Cloud License Exemption Internal Request form](https://www.youtube.com/watch?v=pvj59EhATIw) は `Strict Cloud licensing exemption request` を正しく送信する方法を示しています。

## セルフマネージドトライアル関連

### 新しいセルフマネージドトライアルの開始に問題がある

顧客が最近のトライアルやサブスクリプションを所有しておらず、オンラインでトライアルを自分でリクエストできない場合に使用してください。

### 既存のセルフマネージドトライアルを変更する

現在アクティブなトライアルのユーザー数および/またはプランに変更を加えたい場合に使用します

### 既存のセルフマネージドトライアルを延長する

顧客が（ほぼ）期限切れのトライアルを使用している場合に使用してください。

## その他

### 注文管理

注文管理リクエストのために使用します。リクエストしているライセンス情報が Salesforce のオポチュニティと一致しない場合、サポートはシートやトゥルーアップを免除できないため、ライセンスを生成できない可能性が高いことに注意してください。コンテキストフィールドにリクエストされたアクションの概要を必ず含めてください。

### Hacker One レポーターライセンス

Hacker One レポーター用のライセンス生成をリクエストするために使用します。

### プロビジョニング失敗の報告

このフォームは、プロビジョニング失敗の処理時に L&R サポートからの支援をリクエストするために、Fulfillment Provisioning チームが使用できます。L&R サポートチームから必要な支援タイプの詳細な説明を必ず提供してください。

### より広範なコミュニティライセンス

コミュニティライセンスの生成をリクエストするために使用します。90 日を超えるライセンスについては、マネージャーの承認が必要です。承認するマネージャーのメールが提供されない場合、チケットはクローズされます

### その他のライセンスと更新の問題

他のオプションが該当しないライセンスと更新の問題に使用します。オプションが **存在する** 場合にこのフォームが使用された場合、リクエストはクローズされ、正しいフォームを使用して新しいリクエストを送信する必要があることに注意してください。

---

#### サブスクリプションの納品証明を取得する {#obtaining-proof-of-delivery-for-a-subscription}

サブスクリプションが作成されると、顧客に送信されたライセンスメールのコピーが SFDC の `Sold To Contact` の `Activity History` 配下に自動的に記録されます。これは顧客が受け取ったメールのレプリカですが、コンプライアンス目的のため実際のライセンスキー/アクティベーションコードは削除されています。件名は `[GitLab Transactions]` で始まります。

</details>

---

### 米国政府サポート社内リクエスト

**公共セクター組織:** 米国政府サポートの顧客に関連する機密ライセンス Issue については、GitLab チームメンバーは [米国政府サポートにケースを開く](https://gitlab-com.gitlab.io/support/support-ops/forms/us-federal-internal-request-form/) ことができます。

### GitLab.com 課金可能メンバーリスト

製品が [#27074](https://gitlab.com/gitlab-org/gitlab/-/issues/27074) と [#35454](https://gitlab.com/gitlab-org/gitlab/-/issues/35454) の最小限の実装可能なバージョンを実装したため、サポートはこのプロセスを非推奨にし始めています。製品が取り組んでいる改善とその進捗については、[エピック 4547](https://gitlab.com/groups/gitlab-org/-/epics/4547) も参照できます。

#### GitLab チームメンバーのセルフサービスオプション

基本的なシート数情報を取得するためのオプションを以下に示します。

1. *Plan* および *Seats Currently in Use*:
    - [chatops](https://docs.gitlab.com/development/chatops_on_gitlabcom/#chatops-on-gitlabcom)（dev.gitlab.org アカウントが必要）でコマンド: `/chatops run namespace find group-path`
1. 1 の情報に加えてサブスクリプション（またはトライアル）の *End Date*
1. 2 の情報に加えて *Seats in Subscription*、*Max Seats Used*、*Start Date*
    - [Customers ポータル管理](https://customers.gitlab.com/admin/customer)（Okta 経由のアクセスが必要）

> **注:** サポートは請求ページのサブスクリプション情報のスクリーンショットのみを提供します。これには以下が含まれます。

- プラン、トライアルかどうか
- サブスクリプション内のシート、現在使用中、最大使用、未払い
- サブスクリプションの開始日と終了日

##### 顧客向けのセルフサービスオプション

> **注:** この情報のパブリック向けバージョンは、[ライセンスとサブスクリプションの FAQ ページ](https://about.gitlab.com/pricing/licensing-faq/#how-can-i-get-a-list-of-billable-users-for-my-plan) にあります。

顧客は、グループの **Billing** ページ（グループ **Settings** 配下）でサブスクリプション情報とシートを使用しているユーザーのリストを取得できます。または [Billable members API エンドポイント](https://docs.gitlab.com/api/members/#list-all-billable-members-of-a-group) を使用できます。

---

### チケットをエスカレートしたい {#i-want-to-escalate-a-ticket}

「*エスカレーション*」という用語を [MECEFU](/handbook/communication/#mecefu-terms) に保つため、サポートは「**サポートチケット注意リクエスト**」（STAR）という用語を使用して、[アカウントエスカレーション](/handbook/customer-success/csm/escalations/) と区別します。「Escalation」は「Emergency」または「Incident」と混同される可能性もあります。

[GitLab グローバルサポート時間](https://about.gitlab.com/support/#definitions-of-gitlab-global-support-hours) 中にのみ、以下のいずれかが該当する場合は **サポートチケット注意リクエスト** を開いてください。

- チケットの進捗が停滞しており、より多くのサポートエンジニアリングの労力が必要
- チケットの優先度が変更された（Low -> High）
- 顧客の高いレベルの不満に対処するため、チケットに即時の介入が必要
- 状況に構造と焦点をもたらすためにサポートマネジメントの監督が必要

[サポートチケット注意リクエストの詳細](/handbook/support/internal-support/support-ticket-attention-requests)

以下の場合は **[アカウントエスカレーション](/handbook/customer-success/csm/escalations/)** を開いてください。

- 単一のチケットまたは複数の Issue の集積によるアカウントレベルのリスクがある。
- 顧客の信頼を回復し Issue を解決するため、複数の部門からの可視性と注意が必要。

[アカウントエスカレーションの詳細](/handbook/customer-success/csm/escalations)

以下の場合は **緊急チケット** を開いてください。

- 顧客が「緊急」のサポートインパクトについての [私たちの定義](https://about.gitlab.com/support/definitions/#Definitions%20of%20Support%20Impact) を満たす状況に直面している

[サポートエンジニアによる緊急チケットの処理についての詳細](/handbook/support/workflows/customer_emergencies_workflows)

以下の場合は **GitLab.com インシデント** を宣言してください。

- SaaS 顧客の間で報告された問題の共通パターンに気づいた
- [5 分以上続く機能の喪失](/handbook/engineering/infrastructure-platforms/incident-management/#definition-of-outage-vs-degraded-vs-disruption-and-when-to-communicate) を経験し検証した
- [深刻度の高いバグ](/handbook/engineering/infrastructure-platforms/incident-management/#high-severity-bugs) が GitLab.com にデプロイされた疑いがある

[GitLab.com インシデントの詳細](/handbook/engineering/infrastructure-platforms/incident-management/)

以下の場合は **セキュリティインシデント** を宣言してください。

- GitLab サービスやデータの機密性、完全性、または可用性に影響する可能性のあるクリティカルな Issue に関する情報を持っている

[セキュリティインシデントの詳細](/handbook/security/security-operations/sirt/engaging-security-on-call#incident-severity)

---

### GitLab.com 管理インターフェイスの設定を変更したい

インフラストラクチャチームが GitLab.com の管理者であり、製品の調整可能項目への変更は [変更リクエストワークフロー](/handbook/engineering/infrastructure-platforms/change-management/#change-request-workflows) を経由します。

### トライアルおよび見込み顧客のサポート

優先見込み顧客に関する情報については、
[Priority Prospects](../priority_prospects) を参照してください。

### 顧客が GitLab.com サブスクリプションの適用に困っている

顧客は購入プロセス中に問題に遭遇したか、グループにサブスクリプションを適用する方法を知らない可能性が高いです。次のドキュメントは、GitLab.com にサブスクライブし、GitLab.com アカウントを [CustomersDot](https://customers.gitlab.com) にリンクし、そのサブスクリプションをグループに適用する方法を説明しています。

- [GitLab サブスクリプションを取得する](https://docs.gitlab.com/subscriptions/manage_subscription/#buy-a-subscription)
- [サブスクリプションを管理する](https://docs.gitlab.com/subscriptions/manage_subscription/#renew-subscription)

### 自分が所有するアカウントのユーザーが、組織のサポートチケットの可視性を高めたい

場合によっては、特定の組織が組織のすべてのメンバーに、ログされたすべてのサポートチケットを閲覧できるようにしたいことがあります。
他のケースでは、アカウントの特定のユーザーが、組織からのすべてのチケットを閲覧して応答できるようにしたいことがあります。
これを有効にしたい場合は、以下を行ってください。

1. 顧客に [Support Ops フォーム](https://support.gitlab.com/hc/en-us/requests/new?ticket_form_id=360001801419) を使用してサポートチケットを送信し、`Problem type` フィールドで `Shared organization requests` を選択するように依頼します。
1. チケットが作成されると、Support Ops がレビューし、チケットに対応します。

**注:** 顧客が別のサポートフォームを使用して共有組織リクエストを送信した場合、フォームを `Support Ops` に変更し、`Problem type` フィールドで `Shared organization requests` を選択するだけです。Support Ops はチケットをレビューし、必要に応じてフォローアップの質問をします。

### 顧客がグループ構造内のすべてのユーザーのレポートを必要としている

グループの課金可能メンバー数を表示するには、グループの `Owner` 権限を持つメンバーが内訳を見るために **Settings -> Billing** セクションを訪問できます。課金可能メンバーの数は `Seats currently in use` の下にリストされる量で、これは有料サブスクリプションにグループをリンクするときに表示される量です。課金可能メンバーは、有料ネームスペース内のグループ、サブグループ、またはプロジェクトに追加された [すべてのユーザー](https://about.gitlab.com/pricing/licensing-faq/#who-gets-counted-in-the-subscription) で構成されます。例外は、特定のサブスクリプションレベルのネームスペース内のゲストユーザーのみです。

[課金可能メンバー API エンドポイント](https://docs.gitlab.com/api/members/#list-all-billable-members-of-a-group) があり、グループのすべての課金可能メンバーのリストを生成します。これは自分の PAT で実行する必要があります。

すべての課金可能メンバーは現在、グループ請求ページにソートされていないリストとしても表示されます。これは最初のイテレーションで、興味があれば、計画されている作業を確認するために [エピック](https://gitlab.com/groups/gitlab-org/-/epics/4547) を表示できます。課金可能メンバーリストに関するフィードバックや、エピックで計画されていない機能や UI の変更をリクエストしたい場合は、エピックにコメントを残してください。

### 組織/ユーザーに関する重要な情報を追加したい

Zendesk には組織とユーザーノートを保存する機能があります。Zendesk のトリガーを使用して、これらをその組織またはユーザーが送信した各チケットに入れます。組織またはユーザーのチケットに含めたい重要な情報がある場合は、組織の ID（Zendesk の組織の URL から ID をコピーすることで見つけることができます）を [こちら](https://gitlab.com/gitlab-com/support/zendesk-global/organizations/-/tree/master/organizations) で検索して MR を作成し、関連する組織のファイルに必要な変更を加えてください。
情報が特定の期間のみ有効かどうかを必ず示してください。これによりノートにその事実を含めることができます。

追加したいかもしれないノートの例:

- チケットで使用するために SA の名前をそこに入れたい。
- 顧客が呼びかけ時に特定の称号を使用することを望んでいる。
- 組織が複数のサブスクリプションを持っている。

---
title: Fulfillment ガイド
description: "Fulfillment サブ部署は、ユーザー購入プロセスに影響を与えるシステム間のインフラストラクチャに責任を持ちます。"
upstream_path: /handbook/product/groups/fulfillment/
upstream_sha: 7d467b8ae210e5b3bb843857cd3639cbc27af386
translated_at: "2026-06-02T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-06-02T16:10:55-05:00"
---

## 主要な Fulfillment ドキュメントリンク

| リソース  | カバーする領域 |
| --------  | ------------- |
| [Fulfillment Direction](/handbook/product/groups/fulfillment/direction/fulfillment_section/) | Fulfillment のビジョンと次に取り組むこと。 |
| [docs.gitlab.com Subscription](https://docs.gitlab.com/subscriptions/) | GitLab サブスクリプションに関する顧客向けドキュメント。Customer Portal (customers.gitlab.com) 情報を含みます。 |
| Fulfillment ガイド (このページ) | CustomersDot 管理ツールと、上記の docs.gitlab.com Subscription ドキュメントの一部ではないプロセスドキュメントについてのドキュメント。 |
| [Fulfillment Development サブ部署](/handbook/engineering/development/fulfillment/) | チームメンバー、安定したカウンターパート (PM、UX、Quality、Security、EntApps、Field Ops、Sales、Billing、Customer Success、Support Engineering)、プロジェクト管理プロセスなど。 |
| [Internal Handbook - Fulfillment](https://internal.gitlab.com/handbook/product/fulfillment/) | パブリックハンドブックに置けないドキュメント。これは [Not Public](/handbook/communication/confidentiality-levels/#not-public) 情報のみに最小化してください。 |
| [Cloud Licesing Overview (External)](https://about.gitlab.com/pricing/licensing-faq/cloud-licensing/) | なぜ Cloud Licensing なのか、収集されるデータ、顧客の前提条件 |
| [Licensing FAQ](https://about.gitlab.com/pricing/licensing-faq/) | 購入、ライセンス、請求、セールス連絡などについてのよくある質問 |
| [Inventory of Fulfillment Emails](https://docs.google.com/spreadsheets/d/1SwEYmLD5Eoa5wM399frPoNGPQ3OUTGBKOOs9z6nB2tc/edit#gid=0) | すべての Fulfillment メールのリスト |
| [GitLab Company Quote-to-Cash documentation](/handbook/company/quote-to-cash/) | 全社的な quote-to-cash ドキュメント |

## 私たちと連絡を取る方法

上記の主要なリンクやこのガイドで質問が解決されない場合:

- ライセンスエラー、ライセンスの再送、その他の顧客固有のサポートリクエストについては、[サポートチーム用に内部 Issue を作成](/handbook/support/internal-support)してください。
- 顧客固有でない購入や provisioning の質問、または購入ワークフローでの障害をエスカレートするには、[#s_fulfillment](https://gitlab.slack.com/archives/CMJ8JR0RH) に連絡してください。

## Fulfillment 機能の利用可能性

すべての Fulfillment 機能がすべての顧客タイプですぐに利用可能というわけではありません。以下の利用可能性マトリックスを参照してください。

### Cloud Licensing、Auto-Renewal、Quarterly Subscription Reconciliation、Operational Data の利用可能性

| 顧客タイプ | Cloud Licensing (Y/N) | Auto-Renewals (Y/N) | Quarterly Subscription Reconciliation (Y/N) | Operational Data (Y/N) |
| ------------- | --------------------- | ------------------- | ------------------------------------------- | ----------------------- |
| クレジットカード登録済みの顧客 | Yes | Yes | Yes | Yes |
| 請求書で支払う顧客 | Yes | Yes | Yes | Yes |
| PO を必要とする顧客 | Yes | No | No | Yes |
| MSA を持つ顧客 | Yes | No | No | No |
| 複数年契約を持つ顧客 | Yes | No | No | Yes |
| GitLab リセラーまたはその他のチャネル/アライアンスパートナーを通じて購入する顧客 | Yes | No | No | Yes |
| 公共部門の顧客 | Yes | No | No | Yes |
| オフライン/エアギャップ環境を持つ顧客 | Yes<br>*([Offline cloud license](https://about.gitlab.com/pricing/licensing-faq/cloud-licensing/#offline-cloud-licenses) は GitLab 15.0 でリリース)* | No | No | No |
| GitLab for Education、Open Source、Startups の顧客 | No | No | No | No |
| Free Tier ユーザー | No | No | No | No |

## GitLab トライアル: 利用可能性と provisioning

### セルフサーブトライアル

| ベースプラン | アドオン | デプロイメントとライセンスタイプ | 期間 | 制限 | 延長 | provisioning ワークフロー |
| ---------- | -------- | --------------- | -------- | ------------ | ---------- | --------- |
| Premium または Ultimate (Duo Core を含む) | None | SM (online cloud licensing) | 現在提供されていない | NA | NA | NA |
| Ultimate (Duo Core を除く)| None | SM (legacy license) | 30 日 | Free、Premium 顧客、100 ユーザー | 不可、新しい $0 quote が必要 | ユーザーがフォームに記入し、marketo が CDot から生成された legacy license を発行 |
| Premium | Duo Pro | SM (online cloud licensing) | 60 日 | Premium 顧客のみ、100 ユーザー | 不可、新しい $0 quote が必要 | ユーザーが Subscription ID とともにフォームに記入し、既存の cloud license に基づいて Duo Pro アクセスを追加 |
| Premium | Duo Enterprise | SM (online cloud licensing) | 現在提供されていない | NA | NA | NA |
| Ultimate | Duo Pro | SM (online cloud licensing) | 現在提供されていない | NA | NA | NA |
| Ultimate | Duo Enterprise | SM (online cloud licensing) | 60 日 | アクティブなサブスクリプションが必要、100 ユーザー | 不可、新しい $0 quote が必要 | ユーザーが Subscription ID とともにフォームに記入し、既存の cloud license に基づいて Duo Enterprise アクセスを追加 |
| Premium (Duo Core を含む)| NA | .Com | 現在提供されていない | NA | NA | NA |
| Ultimate (Duo Core を含む) | NA | .Com | 30 日 | Free、Premium、Ultimate 顧客 | サポートチーム内部リクエスト経由で可能 | NA |
| Premium | Duo Enterprise | .Com | 現在提供されていない | NA | NA | NA |
| Ultimate | Duo Enterprise | .Com | 無料名前空間は 30 日、Premium および Ultimate 顧客は 60 日 | Free EE、Premium、Ultimate 顧客 | サポートチーム内部リクエスト経由で可能 | ユーザーは名前空間またはマーケティングランディングページからトライアルを開始可能 |
| Ultimate | Duo Enterprise | Dedicated | 公開されていないが、既存の Self-managed フォームでセルフサーブトライアルをサポート | Ultimate dedicated 商用顧客、Dedicated PubSec 顧客には不可 | 不可、新しい $0 quote が必要 | NA |

**セルフサーブトライアルの資格基準:**

- セルフサーブトライアルは顧客あたり 1 回に制限されています
- ほとんどのセルフサーブトライアルでは、.Com の制限は名前空間に基づき、Self-managed では Subscription 番号に基づきます (例外は legacy license での Ultimate のみのトライアル)
- 期間は 30 日または 60 日の間で、トライアル期間中はシート数に制限があります
- Dedicated 顧客は、Self-managed 顧客用の既存のトライアルフォームを使用する場合に、Ultimate with Duo Enterprise のセルフサーブトライアルを利用できます (dedicated 商用顧客には制限を設けていません)

### セールス支援トライアル

- これらは、顧客が評価を完了するために延長された期間または追加のシート数を必要とする、非標準的なトライアルです。
- セールス支援トライアルは、顧客向けのセルフサーブフローでは利用できない製品/プランを試したい顧客にも提供されます (例: オフラインまたはエアギャップの顧客 (SM) がセルフホスト機能を試したい、Duo with Amazon Q、Dedicated など)。
- ほとんどのセールス支援トライアルは、$0 quote と Deal desk および Revenue チームからの承認を必要とします

| トライアル | デプロイメントタイプ | 支援タイプ | 期間 | トライアル作成 | 制限 |
| ------------------- | --------------- | --------------- | -------- | ------------------ | ------------ |
| Premium (Duo Core を除く) | SM (legacy license) | セールスおよびサポートチーム (サポートチームが legacy license を作成するには内部リクエストが必要) | 30 日 | $0 quote 不要 | Free EE、Premium、Ultimate 顧客、100 ユーザー |
| Ultimate (Duo Core を除く) | SM (legacy license) | セールスおよびサポートチーム (サポートチームが legacy license を作成するには内部リクエストが必要) | 30 日 | $0 quote 不要 | Free EE、Premium 顧客、100 ユーザー |
| Premium with Duo Pro | SM (online cloud licensing) | セールスチーム | カスタマイズ可能な終了日 | $0 quote で必要 | Free EE、Premium、Ultimate 顧客 |
| Premium with Duo Enterprise | SM (online cloud licensing) | セールスチーム | カスタマイズ可能な終了日 | $0 quote で必要 | Free EE、Premium、Ultimate 顧客 |
| Ultimate with Duo Pro | SM (online cloud licensing) | セールスチーム | カスタマイズ可能な終了日 | $0 quote で必要 | Free EE、Premium、Ultimate 顧客 |
| Ultimate with Duo Enterprise | SM (online cloud licensing) | セールスチーム | カスタマイズ可能な終了日 | $0 quote で必要 | Free EE、Premium、Ultimate 顧客 |
| Premium with Duo Enterprise | SM (offline cloud licensing) | セールスチーム | カスタマイズ可能な終了日 | $0 quote で必要 | Free EE、Premium、Ultimate 顧客 |
| Ultimate with Duo Enterprise | SM (offline cloud licensing) | セールスチーム | カスタマイズ可能な終了日 | $0 quote で必要 | Free EE、Premium、Ultimate 顧客 |
| Premium (Duo Core を含む) | .Com | セールスチーム | カスタマイズ可能な終了日 | $0 quote で必要 | Free EE、Premium、Ultimate 顧客 |
| Ultimate (Duo Core を含む) | .Com | セールスチーム | カスタマイズ可能な終了日 | $0 quote で必要 | Free EE、Premium、Ultimate 顧客 |
| Premium with Duo Pro | .Com | セールスチーム | カスタマイズ可能な終了日 | $0 quote で必要 | Free EE、Premium、Ultimate 顧客 |
| Ultimate with Duo Pro | .Com | セールスチーム | カスタマイズ可能な終了日 | $0 quote で必要 | Free EE、Premium、Ultimate 顧客 |
| Ultimate with Duo Enterprise | .Com | セールスチーム | カスタマイズ可能な終了日 | $0 order で必要 | Free EE、Premium、Ultimate 顧客 |
| Ultimate with Duo with Amazon Q | SM (online cloud license) | セールスチーム | 30 日、リーダーシップ承認が必要 | $0 quote で必要 | NA |
| Ultimate with Duo with Amazon Q | Dedicated | セールスチーム | 30 日、リーダーシップ承認が必要 | $0 quote で必要 | NA |
| Ultimate (Duo Core を含む) | Dedicated | セールスチーム | カスタマイズ可能な終了日 | $0 quote で必要 | NA |
| Ultimate with Duo Pro または Duo Enterprise | Dedicated | セールスチーム | カスタマイズ可能な終了日 | $0 quote で必要 | NA |

## DAP ボーナストライアルクレジット

このセクションでは、Solution Architect (SA) マネージャーと Fulfillment チームが GitLab Duo Agent Platform (DAP) のボーナストライアルクレジットリクエストをどのように処理するか、また CustomersDot Admin からクレジットをプロビジョニング、トップアップ、または延長する方法について説明します。DAP を評価中の既存の Premium または Ultimate 顧客向けに [トライアルクレジットリクエスト](https://gitlab.com/gitlab-org/fulfillment/meta/-/blob/master/.gitlab/issue_templates/trial_credit_requests.md) を処理する際のリファレンスとして使用してください。

ボーナストライアルクレジットは、CustomersDot のサブスクリプションレベルの `bonus_trial` ウォレットに追加されます。これらは最初に消費され (バーンダウン優先度が最高)、毎月リセットされず、マイナスにはなりません。デフォルトでは、プロビジョニングされた日から 30 日で期限切れになります。

### 適格性の前提条件

プロビジョニングの前に、リクエストがリクエスト issue に記載された前提条件を満たしていることを確認してください:

- 顧客がアクティブな有償の **Premium または Ultimate** サブスクリプション (例: `A-S00330622`) を保有していること。
- Self-Managed 顧客はクラウドライセンスを利用している必要があり、Self-Managed または Dedicated 顧客は使用量課金とボーナストライアルクレジットが使用量ダッシュボードで動作するためにバージョン 18.9 以上である必要があります。

CustomersDot はプロビジョニング時に適格性を検証します。サブスクリプションは現行 (キャンセルまたは期限切れでない) でなければならず、適格な Premium または Ultimate の使用量課金ベースチャージを持っている必要があります。これらのチェックが失敗した場合、プロビジョニングはスキップされます。

> ボーナストライアルクレジットは **オフライン顧客には適用されません**。オフライン顧客は使用量課金のボーナストライアルクレジットを消費できないため、彼らのための DAP トライアルは **$0 オーダー** として処理され、代わりに Deal Desk で設定および承認されなければなりません。ボーナストライアルクレジットリクエストと $0 オーダーの違いについては、[トライアルクレジットリクエストテンプレート](https://gitlab.com/gitlab-org/fulfillment/meta/-/blob/master/.gitlab/issue_templates/trial_credit_requests.md) を参照してください。

### 承認マトリクス

必要な承認は、リクエストタイプとクレジット金額によって異なります。GitLab issue リンク自体が最低ティアでの承認となるため、リクエスト当日にプロビジョニングします。承認者のサインオフが必要なティアでは、Slack の承認のスクリーンショットを GitLab issue に追加する必要があります。リクエスト者がまだ追加していない場合、プロビジョニング担当者がプロビジョニング前に追加します。

#### 初回トライアルリクエスト

| 顧客あたりの最大クレジット | 必要な承認 | レポート |
| ------------------------ | ----------------- | --------- |
| 1,000 まで | なし (GitLab issue が承認) | issue 作成後、専用 Slack チャンネルで通知 |
| 1,001 から 10,000 | Deal Strategy (Carli Nodari、Guru Kannan、Alessandra Pianti) | 承認者をタグ付けし、Slack 承認のスクリーンショットを issue に追加 |
| 10,000 超 | CPMO (Manav Khurana) | 承認のためにタグ付けし、Slack 承認のスクリーンショットを issue に追加 |
| 100,000 超 | CEO/CFO/CPMO (Bill Staples、Jessica Ross、Manav Khurana) | 承認者の 1 人をタグ付けし、Slack 承認のスクリーンショットを issue に追加 |

#### リトライアルおよび延長リクエスト

すべてのリトライアルおよび期限延長リクエストには、クレジット金額に関係なく **SA リーダーシップの承認** (SA マネージャー、SA ディレクター、または VP of Solutions Architecture) が必要です。Solution Architect は、正当な問題 (DAP のバグ、停止、または顧客側のブロッカー) が適切な評価を妨げたことをまず検証する必要があり、以前のトライアルの評価後レビューが完了している必要があります。標準的な延長期間は 30 日です。

### ボーナストライアルクレジットのプロビジョニング (初回およびトップアップ)

このワークフローは、初回トライアルクレジットリクエストと、既存のウォレットに新しいクレジットを追加するトップアップリクエストに使用します。新しいクレジットを追加すると、ウォレット内の既存の期限切れでないクレジットの期限が自動的に延長されます。

1. 上記の適格性の前提条件と承認要件が満たされていることを確認します (GitLab issue リンクが存在し、ティアが承認者のサインオフを必要とする場合は Slack 承認のスクリーンショットが添付されていること)。
1. [CustomersDot Admin](https://customers.gitlab.com/admin/) にログインします。
1. **Sales** > **Bonus Trial Wallets** に移動します。
1. **Add Credits** タブを選択してプロビジョニングフォームを開き、必須フィールドを入力します:
   - **Subscription name**: クレジットをプロビジョニングするサブスクリプション (例: `A-S00330622`)。
   - **Approval link**: GitLab.com のトライアルクレジットリクエスト issue のリンク。フォームは GitLab.com の issue URL であることを検証します。
   - **Credit amount**: 0 より大きい整数。
   - **Expiration date**: 期限切れオプションを選択します (下記参照)。
   - **Additional notes** (オプション、最大 500 文字)。
1. **Save** を選択します。CustomersDot は `bonus_trial` ウォレットにクレジットを作成し、管理者ユーザーと承認リンクに紐付いた監査イベントを記録し、サブスクリプションの `SoldTo` 連絡先に `bonus trial credits provision notification` メールを送信します。

#### トップアップ時の期限切れ日の選択

プロビジョニングフォームは 2 つの期限切れオプションを提供しており、新しいクレジットと既存の期限切れでないクレジットの両方の実効期限を決定します:

1. **デフォルト (30 日)**: 新しいクレジットは今日から 30 日後に期限切れになります。ウォレットに既により遅い期限切れ日を持つアクティブなクレジットがある場合、新しいクレジットと既存のクレジットの両方が、その遅い日付を使用します。これは標準オプションであり、**延長された日付での**トップアップが機能する方法です。
1. **Use existing expiration**: 新しいクレジットは既存のアクティブなクレジットの期限切れ日を採用するため、期限切れは変更されません。顧客が現在のトライアルウィンドウ内でより多くのクレジットのみを必要とする場合の **同日** のトップアップに使用します。このオプションは、アクティブなクレジットが既に存在する場合にのみ使用できます。

どちらの場合も、システムは既存の期限切れを短縮することはありません。実効期限は、リクエストされた日付と最新の既存のアクティブな期限切れのうち、遅い方になります。

> プロビジョニングが月次の請求サイクル移行ウィンドウ (毎月 1 日 00:00-06:00 UTC) 中に発生した場合、CustomersDot は前月の消費が完了した後にプロビジョニングを実行するように自動的にスケジュールし、即座にプロビジョニングしません。

### クレジットの期限を日数のみで延長する (新しいクレジットなし)

このワークフローは、顧客がより多くの時間を必要とするが追加のクレジットを必要としない場合に使用します。これは Bonus Trial Wallets ページで直接処理され、クレジットを追加せず、上記のリトライアルおよび延長ルールに従って引き続き SA リーダーシップの承認が必要です。

1. SA リーダーシップの承認が issue に記録されていることを確認します (Slack 承認のスクリーンショットが添付されていること)。
1. [CustomersDot Admin](https://customers.gitlab.com/admin/) にログインし、**Sales** > **Bonus Trial Wallets** に移動します。
1. **Extend Credits** タブを選択して延長フォームを開き、必須フィールドを入力します:
   - **Subscription name**: クレジットを延長するサブスクリプション (例: `A-S00330622`)。
   - **Approval link**: GitLab.com の延長リクエスト issue のリンク。フォームは GitLab.com の issue URL であることを検証します。
   - **Add days**: **7、14、または 30 日** の延長を選択します (7 日がデフォルト)。
1. **Save** を選択します。既存のクレジット残高は変更されません。アクティブなクレジットの期限切れ日のみが先送りされます。システムは期限切れを延長するのみで、短縮することはありません。

### プロビジョニング後

1. クレジットまたは延長が処理されたことを確認するために、GitLab issue でリクエスト者をタグ付けします。
1. GitLab issue をクローズします。
1. クレジットがプロビジョニングされたことを Slack スレッドで通知します。

## ストレージの強制

> ストレージ強制の詳細については [内部ハンドブックページ](https://internal.gitlab.com/handbook/engineering/fulfillment/namespace-storage-enforcement/) にアクセスできます。

## 内部 GitLab Duo ライセンスリクエスト

Support Operations が処理するチームメンバーライセンスプロセスでは、Self-managed インスタンスで GitLab Premium または Ultimate をテストまたは使用するチームメンバー向けに legacy ライセンスファイルを生成できます。このライセンスタイプは GitLab Duo と互換性がありません。

- GitLab Duo のテストには、ステージング cloud license をチームメンバーに提供できます。Slack チャンネル [#g_provision](https://gitlab.enterprise.slack.com/archives/C01BPM66KNE) でリクエストを提出してください。
- 特定の状況に限り、GitLab Duo のテストに本番 cloud license が必要な場合、$0 サブスクリプションを作成することができます。Slack チャンネル [#sales-support](https://gitlab.enterprise.slack.com/archives/CNLBL40H4) で Order Management チームに相談してください。
- legacy ライセンスは有効期限まで有効ですが、cloud license は Zuora と CustomersDot 内でアクティブなステージングまたは本番データが必要です。ステージングリフレッシュ中にアクセスを失った場合は、#g_provision に連絡してください。

## 一時的な更新延長

*2025-08-14、GitLab は Docs、ウェブサイト、更新バナー、メールから 14 日間の猶予期間への外部参照を削除しました。ただし、猶予期間はまだアプリケーションとシステムに存在します。[詳細はこちら](https://gitlab.com/groups/gitlab-org/-/epics/18050)。*

セールス担当者は、承認された理由のいずれかについて SFDC で一時的な延長を生成できます。延長はサブスクリプション終了日の 1-15 日前またはサブスクリプション終了日の 1-13 日後に生成でき、デフォルトの有効期限はサブスクリプション終了日後 21 日です ([SaaS 延長のみ 14 日の猶予期間](https://docs.gitlab.com/subscriptions/self_managed/#subscription-expiry) が続きます)。

Self Managed 延長に関する注意:

- 14 日の猶予期間は適用されず、顧客は 21 日の延長のみを取得します [オープン Issue](https://gitlab.com/gitlab-org/fulfillment/meta/-/issues/1827)
- 生成される一時ライセンスは、顧客のベースプラン (Premium または Ultimate) 用のみとなります。顧客が GitLab Duo Pro または GitLab Duo Enterprise アドオンを持っている場合、一時更新ライセンスがインスタンスに適用されると Duo アクセスを失います。
- SM 顧客は、一時延長がまだアクティブな場合、更新されたライセンスキーの同期がブロックされる可能性があるため、更新が成功した時にアクティベーションコードまたはライセンスキーを手動でインスタンスに適用する必要がある場合があります。

この機能に関する追加のコンテキストは[こちら](https://gitlab.com/groups/gitlab-org/-/epics/10173)で見つけることができます。一時的な更新延長に関連するサブスクリプションイベントの[視覚的タイムライン](https://gitlab.com/groups/gitlab-org/-/epics/10173#timeline-of-events)も含まれます。

この機能に関するフィードバックは [この Issue](https://gitlab.com/gitlab-org/fulfillment/meta/-/issues/1728) で共有してください。

### 延長を作成する (SFDC から)

延長の作成の概要については、SM デモビデオ [SM デモビデオ](https://www.youtube.com/watch?v=ENRtOQ0DbkM) または [Gitlab.com/Saas ビデオ](https://drive.google.com/file/d/1HGGf8IH5fRt4ftB0pKZfHpb7owECItjX/view) をご覧ください。

SFDC から一時更新延長を作成するプロセスは以下のとおりです

1. 追加処理時間を必要とする SFDC Renewal Opportunity に移動します。
1. `Request Temporary Extension` ボタンをクリックします。
1. Temporary Renewal Extension フォームが読み込まれ、関連する OpportunityID と ZuoraSubscriptionID が表示されます。
1. ドロップダウンから `Reason` を選択し、ライセンスの `Users` の数を指定し、オプションの `Notes` を追加して、`Next` をクリックします。
   1. SaaS サブスクリプション用の一時更新延長を作成する場合、`Users` の数は無関係です - 現在のサブスクリプションと同じ数のユーザー用に延長が作成されます。
1. 延長が作成されると、成功メッセージが表示されます。それ以外の場合はエラーメッセージが表示されます。
1. 一時延長が正常に作成されると、いくつかの更新が発生します:
   1. SFDC Renewal Opportunity のいくつかのフィールドが更新されます:
      1. `Temporary License Extension End Date` が日付で更新されます (サブスクリプション終了日 + 21 日に等しい)。
      1. `Exempt Late Renewal Automation` が true に設定されます。
      1. `Late Renewal Exception Expiration Date` が `Temporary License Extension End Date` と同じ値で更新されます。
   1. 一時延長のレコードが [CustomersDot Admin > Temporary Extensions ページ](https://customers.gitlab.com/admin/temporary_extension_history)に表示されます。
   1. self-managed の場合、legacy トライアルライセンスが作成され、CustomersDot Admin の Temporary extension レコードからアクセスできます。
   1. SaaS の場合、新しい一時延長 (有効化後) は gitlab.com グループ請求ページに表示されます。
   1. 件名 `[GitLab Transactions] GitLab Temporary Renewal Extension` のメールが顧客に送信されます。self-managed の場合、メールにライセンスキーが含まれます。
      - このメールは Revenue チームにも送信され、SFDC にコピーされて Contact Activity の下に表示されます。
   1. [Customers Portal](https://docs.gitlab.com/subscriptions/customers_portal/) の関連サブスクリプションに `Access temporarily extended until YYYY-MM-DD` バッジが表示されます。

### 延長の表示と使用

一時更新延長が作成されると、その証拠はいくつかの場所で確認できます。

- SFDC Renewal Opportunity の `Temporary License Extension End Date` フィールドに、延長の有効期限の日付が入力されています。
- [CustomersDot Admin > Temporary Extensions](https://customers.gitlab.com/admin/temporary_extension_history) ページには、すべての一時延長がリストされます。
- 顧客は、[Customers Portal](https://docs.gitlab.com/subscriptions/customers_portal/) の関連サブスクリプションで `Access temporarily extended until YYYY-MM-DD` バッジを確認できます。
  - self-managed の場合、顧客はライセンスキーをダウンロードしてインスタンスに適用できます。
  - SaaS の場合、新しい有効期限が自動的に gitlab.com に同期されます。

サブスクリプションが更新されると、`Access temporarily extended until YYYY-MM-DD` バッジが削除されます。[このビデオ](https://www.youtube.com/watch?v=cR6odsThHNY)は、一時延長の猶予期間が経過し、サブスクリプションが更新されたときに何が起こるかを示しています。

### 延長作成時の起こりうるエラー

| エラー | 説明 |
|---------|-----------|
| 一時延長はサブスクリプション有効期限の 15 日前からサブスクリプション有効期限の 13 日後までリクエストできます | 一時延長は、サブスクリプション終了日の 15 日前またはサブスクリプション終了日の 13 日後までに作成する必要があります。 |
| サブスクリプションは現在の更新期間中にすでに延長を利用しました | 更新ごとに 21 日の一時延長は 1 回だけ可能です。追加の延長は許可されません。 |
| サブスクリプションは YYYY-MM-DD に開始予定の延長を持っています | 更新のための既存の一時延長があり、まだ開始されていません。 |
| 顧客アカウントは不良債権ありとラベル付けされています | Billing チームがこのアカウントを不良債権ありと特定しました。Zuora Billing Account の `Support hold`、`Credit hold` のいずれかが入力されています。 |
| 顧客アカウントは貿易制限国に属します | SoldTo アドレスが [これらの国](https://gitlab.com/gitlab-org/customers-gitlab-com/-/issues/6431#proposal) にある顧客は、一時延長の対象外です。 |

すべての技術的な問題は、[こちらの指示](https://gitlab.com/gitlab-org/fulfillment/meta/-/issues/1514#instructions-please-read-before-posting) に従って Fulfillment と共有する必要があります。問題が報告されたら、顧客がサブスクリプションの延長を受けられるように、サポートへ [内部リクエスト](https://support-super-form-gitlab-com-support-support-op-651f22e90ce6d7.gitlab.io/) を提出する既存のプロセスに従ってください。**GitLab Support Internal Requests for Global customers** または **GitLab Support Internal Requests for Federal customers** リクエストオプションのいずれかを使用してから、SaaS または Self-Managed 用の適切な内部リクエストタイプを選択してください。

### GCP ログへのアクセス

Temporary Renewals Extension 機能に関連するログは、このフィルターを使用して GCP 経由でアクセスできます: `jsonPayload.functionality="temporary_extension"` ([例](https://cloudlogging.app.goo.gl/YH939WC5G5H56hbm6))。

ログはワークフロー別に絞り込めます:

| ワークフロー | フィルター | 例 |
|--------------|-------------- |------------------|
| API リクエスト | `jsonPayload.workflow="api_request"` | [例へのリンク](https://cloudlogging.app.goo.gl/KYHFRHAitHVnVFsL9) |
| Guardrail | `jsonPayload.workflow="guardrail_check"` | [例へのリンク](https://cloudlogging.app.goo.gl/A41vZPYJSM8RwdpP6) |
| Self-managed extension | `jsonPayload.workflow="create_sm_extension"` | [例へのリンク](https://cloudlogging.app.goo.gl/UsWNtG3HPS8XaHqu9) |

追加の属性も適用できます:

| 属性 | フィルター | 例 |
|--------------|-------------- |------------------|
| `subscription_id` | `jsonPayload.zuora_subscription_id="8a8aa0008aff6981018b0619305f4d1d"` | [例へのリンク](https://cloudlogging.app.goo.gl/JvfMNogyuA1HyGA59) |
| `salesforce_opportunity_id` | `jsonPayload.salesforce_opportunity_id="8a8aa0008aff6981018b0619305f4d1d"` | [例へのリンク](https://cloudlogging.app.goo.gl/LZTuShAukfHwAEU87) |

## Subscription Management 機能

[Fulfillment section](/handbook/product/groups/fulfillment/direction/fulfillment_section/) 内の [subscription management グループ](/handbook/product/groups/fulfillment/direction/subscription_management/) が管理する機能のリストです。

### サブスクリプション更新と自動更新

顧客は、自動更新または手動更新を通じて GitLab.com または self-managed サブスクリプションを更新できます。デフォルトでは、サブスクリプションは自動更新に設定されており、有効期限日の UTC 真夜中に自動的に更新され、サービス中断はありません。請求アカウントに `Auto-Pay = Yes` がある場合、デフォルトの支払い方法を使用して支払いが処理されます。それ以外の場合は、請求書が生成され、顧客に送信されます。

自動更新の対象外、または自動更新を希望しない顧客は、[Customers Portal](https://customers.gitlab.com/) のサブスクリプションカードにある **Renew** ボタンをクリックして、手動でサブスクリプションを更新できます。

#### 自動更新の対象

以下の場合、自動更新を試みません:

- Self-Managed の顧客が Cloud Licensing 上にいない
- 顧客が QSR 上にいない
- 顧客は QSR 上にいるが、QSR が失敗してオーバーエージがある
- 顧客のクレジットカードが期限切れ (請求アカウントに `Auto-Pay = Yes` がある場合)

自動更新は以下の場合に失敗します:

- クレジットカード支払いが失敗
- GitLab.com サブスクリプションがグループに割り当てられていない
- 以前考慮されていなかった他のシステムエラー

自動更新から除外されるアカウントとサブスクリプション:

1. Reseller または別のチャネルパートナーを通じて購入されたサブスクリプション (顧客が GitLab と直接取引していない場合)。
1. Education や OSS (Strategy Programs) または Startups Program のサブスクリプション。
1. 非標準期間 (12 か月期間ではない) のサブスクリプション。
1. Enterprise Agile Planning 製品のサブスクリプション。
1. Zuora で以下の設定があるアカウント:
   1. `Account.PO Required = Yes` (顧客が GitLab に "no PO, no Pay policy"、予約要件、事前請求があることを通知)。
   1. `Account.Portal Required = Yes` (顧客が GitLab に、請求書を手動で請求ポータルにアップロードする必要があり、非 PO、PO、契約、SOW を含むことを通知)。
   1. `Account.Support Hold = Yes` (アカウントが支払いコミットメントなしで 90 日以上延滞すると、顧客はサポート保留にされる)。
   1. `Account.Credit Hold = Yes` (任意の残高が不良債権に書き落とされた場合、顧客はクレジット保留にされる)

上記のユースケースに対して `Subscription.TurnOnAutoRenew__c` を `No` に設定する自動プロセス (Zuora Workflow) があります。

#### GitLab Docs (パブリック)

- [更新の準備](https://docs.gitlab.com/subscriptions/manage_subscription/#review-your-account)
- [サブスクリプションの更新](https://docs.gitlab.com/subscriptions/manage_subscription/#renew-subscription)
- [自動サブスクリプション更新](https://docs.gitlab.com/subscriptions/manage_subscription/#renew-automatically)
- [自動更新の FAQ](https://about.gitlab.com/pricing/faq-improved-billing-and-subscription-management/#auto-renewals)
- [Developer Relations Programs 更新ワークフロー](/handbook/marketing/developer-relations/programs/program-resources/#renewal)

#### 開発者ドキュメント

- [Renewal: UX Scorecard](https://gitlab.com/gitlab-org/gitlab-design/-/issues/2160)
- [ローカル環境で更新するための Zuora でのサブスクリプションの作成](https://gitlab.com/gitlab-org/customers-gitlab-com/-/blob/main/doc/zuora/zuora_tips_and_tricks.md#create-a-subscription)
- [Auto-Renew: カスタム自動更新機能](https://gitlab.com/gitlab-org/customers-gitlab-com/-/blob/main/doc/flows/custom_auto_renew/index.md)
- [Auto-Renew: 体験フローチャート](https://www.figma.com/file/4IAnGWRKIxIKqMLUDxWf1A/Autorenew-experience-flowchart?node-id=0%3A1&t=x31XThz7dVzhhIaK-0)
  - Figma ファイルを表示するには、@gitlab.com メールで Figma にログインする必要があります。サインインを求められたら、「Continue with Google」をクリックし、プロンプトが表示されたらアカウントを作成してください。
- [戦略プログラム更新のためのクーポンコード生成](https://gitlab.com/gitlab-org/customers-gitlab-com/-/blob/main/doc/community_programs/coupons.md#coupons)

#### 関連する用語

- [QSR](https://docs.gitlab.com/subscriptions/quarterly_reconciliation/#quarterly-reconciliation)
- [Annual True-up](https://docs.gitlab.com/subscriptions/quarterly_reconciliation/#annual-true-up)
- [シート使用状況](https://docs.gitlab.com/subscriptions/manage_users_and_seats/#billable-users)
- [Seats owed](https://docs.gitlab.com/subscriptions/manage_users_and_seats/#users-over-subscription-limit)

#### Quarterly Subscription Reconciliation (QSR)

[パブリック QSR ドキュメント](https://docs.gitlab.com/subscriptions/quarterly_reconciliation/) を参照してください。

##### QSR の対象

[文書化された対象ケース](https://docs.gitlab.com/subscriptions/quarterly_reconciliation/#eligibility)に加えて、Zuora で次の設定のいずれかをアカウントが持つサブスクリプションは QSR から除外します:

1. `Account.PO Required = Yes` (顧客が GitLab に "no PO, no Pay policy"、予約要件、事前請求があることを通知)。
2. `Account.Portal Required = Yes` (顧客が GitLab に、請求書を手動で請求ポータルにアップロードする必要があり、非 PO、PO、契約、SOW を含むことを通知)。
3. `Account.Support Hold = Yes` (アカウントが支払いコミットメントなしで 90 日以上延滞すると、顧客はサポート保留にされる)。
4. `Account.Credit Hold = Yes` (任意の残高が不良債権に書き落とされた場合、顧客はクレジット保留にされる)

上記のユースケースに対して `Subscription.TurnOnSeatReconciliation__c` を No に設定する自動プロセス (Zuora Workflow) があります。

##### QSR プロセス

1. 新しいサブスクリプションが購入されるか、既存のサブスクリプションが更新されると、Quarterly Reconciliation にオプトインされます。
   1. `Subscription.TurnOnSeatReconciliation__c` 変数が Yes に設定されます。
   2. `Subscription.ContractSeatReconciliation__c` 変数が Yes に設定されます。
2. 使用状況データは、Cloud Licensing (SM/Dedicated) または名前空間 API (gitlab.com) を通じて毎日収集されます

その他の詳細は [QSR invoicing and payment docs](https://docs.gitlab.com/subscriptions/quarterly_reconciliation/#invoicing-and-payment) で確認できます。

**個別自動リコンシリエーションの仕組み:**

この機能は Customers Portal に存在し、UTC 真夜中に毎日実行されます。Self-Managed サブスクリプションの場合、インスタンスからシート使用状況データを収集するのに十分な時間があるように、このプロセスは 6 日遅延します。

1. `TurnOnSeatReconciliation__c` が Yes に等しいすべてのサブスクリプションを見つけます。
2. 前の四半期の最大ユーザー数を確認することで、オーバーエージを計算します。
3. シートのオーバーエージを保存し、Zuora に対して請求書金額をプレビューおよび保存します。
   1. 正確なオーバーエージ数量と支払いが見込まれる請求書金額を含むメールを顧客に送信 (件名: "Important information about your GitLab subscription")。
   2. このメールを SFDC にコピーし、Contact Activity の下に表示。
4. オープンな SFDC Opportunity を作成し、その OpportunityId を Reconciliation レコードに保存します。
5. 7 日後、Zuora に修正を作成して、Effective Price で追加シートを追加します。新しいシート数は四半期の終わりに有効になり、サブスクリプション期間の終わりまで続きます (オーバーエージに対する過去の遡及課金はありません)。
   1. Amendment Name は `Automated seat reconciliation` に設定されます。
6. 請求書を生成し、支払いを適用します。
   1. 支払いが失敗した場合、または支払い方法が登録されていない場合、リコンシリエーションは発生しません。メールが送信されます (件名: "Your GitLab subscription failed to reconcile")。このメールを SFDC にコピーし、Contact Activity の下に表示。
   2. Sales Assisted 顧客の場合、請求書が生成され、支払いのために送信されます (Zuora から)。アカウント固有の支払い条件が適用されます。
7. Zuora からの Receipt 付きのメールを送信 (スケジュール済み Zuora Workflow を介して)。
8. リコンシリエーションが発生したことを示すメールを送信し、provisioning の指示を含めます (件名: "Your GitLab subscription has been reconciled")。このメールは SFDC にコピーされ、Contact Activity の下に表示されます。
9. 追加シートが provisioning されます。
   1. SaaS 顧客の場合、追加シートを即時に provisioning。
   2. Self-managed 顧客の場合、次のインスタンス同期 (24 時間) で追加シートを provisioning、または顧客がインスタンス内から更新をトリガーできます。
10. SFDC Opportunity を Closed Won に更新し、関連する SFDC Quote および Quote オブジェクトを作成します。
11. 何らかの理由でリコンシリエーションが失敗した場合、SFDC Opportunity はオープンのままになります。

##### QSR と SFDC Opportunity

2023-05-22 以降、QSR 用に作成された SFDC Opportunities には 2 つの新しいフィールドが追加されました: `QSR Status` と `QSR Notes`。これらのフィールドに表示されることが予想される内容と、セールス担当者向けの推奨アクションのまとめを以下に示します。

| QSR ステータス | QSR Notes | ステージ | 推奨アクション | 追加メモ |
| :-------- | :-------- |:-------- |:-------- |:-------- |
| Pending | Reconciliation レコードリンク (例: cust....gitlab.com/admin/r../12345) | 6-Awaiting Signature | アクション不要 | QSR は 7 日以内に自動でリコンシリエーションされます。 |
| Processed | Reconciliation レコードリンク (例: cust....gitlab.com/admin/r../12345) | Closed Won | アクション不要 |  |
| Failed | サブスクリプション/金額の修正に失敗、最新のプレビューと一致しない | 6-Awaiting Signature | AE が Closed Lost に設定。 | QSR がすでに作成された後で顧客が追加シートを購入したため、QSR は不要になりました。 |
| Failed | multiple_rate_plans | 6-Awaiting Signature | AE が顧客に連絡し、追加シートを購入する必要があることを通知。 | 顧客がサブスクリプションに複数のレートプランを持っているため、QSR は処理できません。 |
| Failed | - カードが拒否された<br/>- カードがこのタイプの購入をサポートしていない<br/>- カード番号が正しくない<br/>- 有効期限の年が無効<br/>- 有効期限の月が無効<br/>- 資金不足、その他の payment_declined/transaction declined エラー。 | 6-Awaiting Signature | 任意: AE が顧客に連絡。 | 顧客は、カードが拒否されたことの通知と、解決するために必要な手順を受け取ります。顧客が支払い方法を更新すると、QSR が再処理されます。 |

##### FAQ

1. **QSR のステータスはどこで確認できますか？**
   1. [Customers Portal Admin](https://customers.gitlab.com/admin) にログインし、[Reconciliations](https://customers.gitlab.com/admin/reconciliation) セクションに移動します。
   2. フィルターボックスにサブスクリプション名 (例: "A-S00039268") を入力し、検索します。
   3. これにより、そのサブスクリプションのすべてのリコンシリエーションレコードが表示され、それぞれのステータスを確認できます。
2. **顧客は QSR に登録されていますが、リコンシリエーションが実行されていません。**
   1. 拒否された支払いを含む様々な理由で QSR がスキップされた可能性があります。QSR のステータスを調べるには、ポイント `1` の指示に従ってください。
3. **顧客は QSR に登録されていますが、`reconciliations_disabled` 理由コードでリコンシリエーションがスキップされました。**
   1. 顧客の Self-Managed インスタンスは Cloud License でアクティベートされている必要があります。これにより、シート使用状況の収集が有効になり、リコンシリエーションを実行できるようになります。
4. **顧客は EOA または割引されたシートあたり価格の別のプラン上にいます。彼らの QSR 修正は割引/Effective 価格に基づくのか、それともリスト価格に基づくのか？**
   1. 追加シートの QSR Amendment は effective 価格に基づきます。
5. **QSR は割引価格で 25 シートが最大という EOA ビジネスルールを尊重しますか？**
   1. ある意味では - 25 シートを超える EOA タイプのサブスクリプションを修正しようとした場合、QSR をスキップします。このルールが原因でエラーになったすべての QSR のリストを見るには、[こちらをクリック](https://customers.gitlab.com/admin/reconciliation?&f%5Berror_message%5D%5B98073%5D%5Bo%5D=like&f%5Berror_message%5D%5B98073%5D%5Bv%5D=MaxAdditionalSeatsExceededError&model_name=reconciliation&sort=reconcile_on&sort_reverse=true)してください。

##### 追加ドキュメント

- [顧客向けドキュメント](https://docs.gitlab.com/subscriptions/quarterly_reconciliation/)
- [QSR 返金とエスカレーションに関する Finance チームのドキュメント](https://gitlab.com/gitlab-com/Finance-Division/finance/-/wikis/WIP%20Quarterly%20Subscription%20Reconciliation%20Escalation#quarterly-subscription-reconciliation-process-post-billing)
- [プロセス図解](https://gitlab.com/groups/gitlab-org/-/epics/5560#illustration)

#### サブスクリプション表示

1. セールス支援サブスクリプションの場合、単一のサブスクリプション期間に複数のプラン (例: premium、ultimate) があるケースがあり得ます。これは、サブスクリプションがあるプランで販売され、期間途中で別のプランに変更されたためです。新しいサブスクリプションカードのデザインでは、このような場合、サブスクリプションの最新バージョンのみが表示され、古いプランの詳細は表示されません。新プランの開始日は、新プランが有効になった日から始まるように正しく表示される必要があります。詳細はこの [Issue](https://gitlab.com/gitlab-org/customers-gitlab-com/-/issues/6103) (内部) を参照してください。

## CustomersDot Admin Panel

ターゲットオーディエンスは内部の GitLab チームで、[Customers Portal](https://customers.gitlab.com) の [admin panel](https://customers.gitlab.com/admin/) をカバーしています。顧客またはサブスクリプションマネージャーは、ポータルの使用に関するヘルプは GitLab ユーザードキュメントの [Customers](https://docs.gitlab.com/subscriptions/) セクションを、ユーザーのカウント方法などのサブスクリプションに関する質問は [licensing FAQ](https://about.gitlab.com/pricing/licensing-faq/) を参照してください。

### ログイン

アクセスを得るには [customers.gitlab.com/admin/](https://customers.gitlab.com/admin/sign_in) のアクセスリクエストを提出してください ([アクセスリクエスト例](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/14359))。

アクセスが付与されたら、[customers.gitlab.com/admin/](https://customers.gitlab.com/admin/sign_in) に移動して「Sign in with Okta」をクリックするか、Okta App に移動して Customers Portal App を探してください。

### 検索

admin panel 検索を使用する際は、結果は一度に 1 フィールドのみを検索することに基づいていることに注意してください。たとえば、人のフルネームを入力しても、システムは姓と名を同時に検索せず、いずれかのみを検索するため、結果が得られない可能性があります。

メールアドレス、部分的なメールアドレス (例: 会社のドメイン)、または会社名で検索することをお勧めします。名前で検索する場合は、姓または名のみを入力してください。

最初の検索の後、検索結果をさらに絞り込むことができます。

検索結果で、サブスクリプションが関連付けられているアカウントには、名前の横に「Subscription」バッジが付きます。

### 顧客

#### 顧客の検索

1. admin panel で `Customers` に移動します。
1. 空のテキストボックスに検索する顧客の詳細を入力します (例: 顧客のメールアドレスやドメイン)。
1. `Refresh` をクリックするか、キーボードで `Enter` を押して検索を開始します。
1. `Add filter` をクリックして現在の検索を絞り込むことができます。
1. 適用する追加のフィルターを 1 つ以上選択します。
1. もう一度 `Refresh` をクリックします。

#### 顧客の詳細を更新

**注:** 更新された顧客の詳細は、一致する Zuora BillTo/SoldTo コンタクトに同期されます。

1. `Customers` セクションで ✎ アイコンをクリックして正しい顧客を選択します。
1. `First name`、`Last name`、`Email` を更新できます。
1. `Save` をクリックします。

顧客のログインを無効化

顧客の物理アドレスやその他の詳細を更新したい場合は、顧客をインパーソネートする必要があります。

1. 目的の顧客の詳細ビューで、`Impersonate` をクリックします。
1. これでユーザーをインパーソネートするためにリダイレクトされます。
1. [詳細の更新に関するユーザードキュメント](https://docs.gitlab.com/subscriptions/#change-your-personal-details)に従ってください。

#### 顧客のログインを無効化

1. `Customers` セクションで ✎ アイコンをクリックして正しい顧客を選択します。
1. `Login activated` のチェックを外します
1. `Save` をクリックします。

顧客は Customers Portal アカウントへのアクセスがブロックされました。

**注:** これは GitLab.com アカウントへのアクセスには影響しません。

#### 顧客のすべての Zuora サブスクリプションを確認

1. 目的の顧客の詳細ビューで、`Zuora Subscriptions` をクリックします。
1. その顧客のすべての Zuora サブスクリプションのリストが表示されます。含まれるもの:
   - サブスクリプション名
   - タイプ (SaaS または SM)
   - 開始日
   - 終了日
   - 未払いシート
   - Cloud Licensing のオン/オフ
   - Operational Metrics のオン/オフ
   - Quaterly Coterms のオン/オフ
   - Auto Renew のオン/オフ

**注:** 未払いシート = 使用された最大シート - サブスクリプション内のシート。

#### 顧客アカウント変更の履歴を表示

1. 目的の顧客の詳細ビューで、`History` をクリックします。
1. 顧客レコードに発生したすべてのイベントとログのリストが表示されます。

**注:** ログ行で、ユーザーが `admin:xyz@gitlab.com` の場合、それは admin panel 経由で顧客レコードへの変更があったことを示します。

#### ワンタイムサインイン URL

`one-time sign in url` を使用すると、顧客は Customers Portal アカウントに直接サインインできます。これは、GitLab.com アカウントを Customers Portal アカウントにリンクしている、またはしていない顧客に有効です。

1. `Customers` セクションで ℹ️ アイコンをクリックして正しい顧客を選択します。
1. 下にスクロールして、`One time sign in url` の下のリンクをコピーします。
1. 承認された顧客とリンクを共有します。

**注:** 新しいワンタイムサインインリンクは、前のリンクが使用された後に生成されます。`one-time sign in url` は、顧客を GitLab.com アカウントにログインさせるのではなく、Customers Portal アカウントにのみログインさせます。

#### GitLab Groups

顧客が接続された GitLab.com ユーザーアカウントを持っている場合、現在のプランを含む関連情報を伴う名前空間のリストが表示されます。

**注:** これは、顧客の `access_token` が有効である限りのみ機能します。

名前空間のリスト:

- 個人の名前空間
- ユーザーが `Owner` であるトップレベルグループ名前空間

### Billing Accounts

billing account は、主に組織に接続されている請求エンティティの表現です。billing account には Zuora、SFDC、重要な企業情報、すべての billing account メンバーシップに関連するデータがあります。

#### billing account の検索

1. admin panel で `Billing accounts` に移動します。
1. 空のテキストボックスに検索する billing account の詳細を入力します (例: 名前)。
1. `Refresh` をクリックするか、キーボードで `Enter` を押して検索を開始します。
1. `Add filter` をクリックして現在の検索を絞り込むことができます。
1. 適用する追加のフィルターを 1 つ以上選択します。
1. もう一度 `Refresh` をクリックします。

#### billing account 変更の履歴を表示

1. 目的の billing account の詳細ビューで、`History` をクリックします。
1. billing account に発生したすべてのイベントとログのリストが表示されます。

#### billing account の Bill_To と Sold_To コンタクトを確認

1. 目的の billing account の詳細ビューに移動します。
1. ℹ️ `Show` の下に、`Bill_To` と `Sold_To` コンタクトが表示されます。
1. 詳細情報を確認したい場合は、目的のコンタクトをクリックします。

**注:** billing account には 1 つの `Bill_To` と 1 つの `Sold_To` コンタクトしか関連付けられません。同じコンタクトにできます。

#### billing account のすべての請求書を確認

1. 目的の billing account の詳細ビューで、`List Invoices` をクリックします。
1. その billing account のすべての請求書のリストが表示されます。含まれるもの:
   - ID
   - 日付
   - 金額
   - 支払いステータス
   - 残高
   - 期日

**注:** このビューは `read only` 権限を持つ CDot 管理者もアクセスできます。

#### billing account に登録されているすべての支払い方法を確認

1. 目的の billing account の詳細ビューで、`List Payment Methods` をクリックします。
1. その billing account に登録されているすべての支払い方法のリストが表示されます。含まれるもの:
   - クレジットカード:
     - 末尾
     - カードタイプ
     - カード上の名前
     - 有効期限

   - ACH:
     - ルーティング番号
     - 口座番号
     - 口座タイプ
     - 銀行名
     - 口座名

**注:** このビューは `read only` 権限を持つ CDot 管理者もアクセスできます。

#### billing account のすべての Zuora サブスクリプションを確認

1. 目的の billing account の詳細ビューで、`Zuora Subscriptions` をクリックします。
1. その billing account のすべての Zuora サブスクリプションのリストが表示されます。含まれるもの:
   - サブスクリプション名
   - タイプ (SaaS または SM)
   - 開始日
   - 終了日
   - 未払いシート
   - Cloud Licensing のオン/オフ
   - Operational Metrics のオン/オフ
   - Quaterly Coterms のオン/オフ
   - Auto Renew のオン/オフ

**注:** 未払いシート = 使用された最大シート - サブスクリプション内のシート。

### Billing Account Contacts

billing account contact は、請求書や通知などを送信するために使用される billing account のコンタクト詳細を表します。位置ベースのデータなどの他の情報は、税務関連の計算に使用されます。コンタクトは `Bill_To` または `Sold_To` コンタクト (または両方同じであれば同様) になることができます。

billing account には 1 つの `Bill_To` と 1 つの `Sold_To` コンタクトしか持てません。同じ連絡先情報 (例: メールアドレス) を複数の billing account で使用することは可能です。

#### billing account contact の検索

1. admin panel で `Billing account contacts` に移動します。
1. 空のテキストボックスに検索する billing account contact の詳細を入力します (例: 名前、メール)。
1. `Refresh` をクリックするか、キーボードで `Enter` を押して検索を開始します。
1. `Add filter` をクリックして現在の検索を絞り込むことができます。
1. 適用する追加のフィルターを 1 つ以上選択します。
1. もう一度 `Refresh` をクリックします。

#### 既存の billing account contact の更新

1. `Billing account contacts` セクションに移動します。
1. 必要な billing account contact を検索します (例: `email address` を使用)。
1. 適切な billing account contact を選択して `Edit` をクリックします。
1. 以下を更新するかどうかを選択できます:
   - 名
   - 姓
   - 仕事のメール
   - Address 1
   - Address 2
   - 国
   - 州
   - 市
   - 郵便番号
1. `Save` をクリックします。
1. 変更は対応する Zuora コンタクトに即座に同期されます。

#### 新しい billing account contact を CustomersDot に追加

Zuora コンタクトが CustomersDot に利用できない場合でも、Zuora に存在する場合、admin panel を通じてコンタクトを追加できます。

1. `Billing account contacts` セクションに移動します。
1. `+ Add New` をクリックします。
1. `Zuora contact ID` を提供します。
1. `Save` をクリックします。

これにより、Zuora と同期した CustomersDot のコンタクトレコードが作成されます。これは、作成されたコンタクトに Zuora からすべての billing account contact 属性を直接割り当てます。

**注:** コンタクトが CustomersDot に `Billing account` が付属していない可能性があります (例: Customers Portal に存在しない場合)。

#### billing account contact 変更の履歴を表示

1. 目的の billing account contact の詳細ビューで、`History` をクリックします。
1. billing account contact に発生したすべてのイベントとログのリストが表示されます。

### Billing Acccount Memberships

billing account membership は、顧客と billing account 間の関係を定義します。アクティブなサブスクリプションを伴う billing account membership があれば、顧客は Customers Portal アカウントでサブスクリプションを表示できます。

現在、顧客は 1 つの billing account membership しか持てません。

#### 新しい billing account membership を追加

顧客と billing account の間に新しい billing account membership を追加すると、顧客は [サブスクリプション管理コンタクト](/handbook/support/license-and-renewals/workflows/customersdot/associating_purchases) になります。

1. `Billing account memberships` セクションに移動します。
1. `+ Add new` アクションを選択します。
1. 新しいサブスクリプション管理リクエストに適切な顧客と CustomersDot billing account を選択します。
1. `Save` をクリックします。

**注:** billing account のリストには `Zuora account name` と `Zuora account ID (in brackets)` を表示します。

#### 顧客の billing account membership を削除

1. `Billing account memberships` セクションに移動します。
1. 目的の billing account membership を開き、`x Delete` アクションを選択します。
1. 正しい billing account membership が選択されたことを確認します。
1. `Yes, I'm sure` を選択します。
1. `Billing account membership successfully deleted` 成功通知を確認します。

### トライアル

#### トライアル有効期限の確認、変更、または延長

1. トライアルを開始した顧客を見つけます。
1. `GitLab Groups` をクリックします。
1. トライアルが期限切れで延長する必要がある場合は、`Renew Trial` ボタンをクリックします。
1. 必要に応じてトライアル日を変更し、`Update` をクリックします。**警告:** 日付を UTC タイムゾーンで今日より前の日付に変更しないでください。

### ライセンス

1. `Licenses` セクションに移動します。
1. このページから、次のことができます:
   - 最も最近生成されたライセンスのリストを表示
   - 名前でライセンスを検索
1. 右にスクロールして ℹ️ アイコンをクリックすると、ライセンスの詳細が表示されます。

ライセンスの詳細には以下の情報が含まれます:

- タイプ: Cloud、offline cloud、または legacy license。
- トライアル: トライアルライセンスかどうかを表示。
- 名前
- 会社
- メール
- 発行日、開始日、有効期限
- ユーザー数
- Zuora サブスクリプション名とリンク
- GitLab プラン

#### ライセンス検索による顧客の使用状況データの検索

以下のプロセスにより、特定のライセンスがインストールされたすべてのサーバーの Service Ping 使用状況データを表示できます。

1. `Licenses` セクションに移動します。
1. 検索ボックスを使用して顧客を検索します (Salesforce にあるとおりに名前を検索していることを確認)。
1. その顧客のすべてのライセンスが返されます。発行日と有効期限を使用して、どれがアクティブなライセンスかを判断します。
1. 右にスクロールして ℹ️ アイコンをクリックすると、ライセンスの詳細が表示されます
1. 画面の下部にある `Hostnames with this license` の下の `Lookup hostnames` をクリックします。これにより version.gitlab.com が開きます

   - version.gitlab.com はまだ Okta をサポートしていないため、GitLab アカウントでログインします。

1. 使用状況データを返し、このライセンスがインストールされているサーバーごとに 1 行が表示されます。`Usage Ping Last Checked On` カラムを見て、どのエントリに最近の使用状況 ping データが含まれているかを判断します。
1. 使用状況 ping の詳細をロードするには、サーバー名をクリックします。

この [ビデオチュートリアル](https://gitlab.edcast.com/insights/card-e7589a95-0229-4d20-9c54-ee84750020df) は、特定の顧客のライセンスの詳細を見つける例を説明しています。

### License Seat Links

CustomersDot の `License seat links` ページでは、[Cloud Licensing](https://about.gitlab.com/pricing/licensing-faq/cloud-licensing/) または [Offline Cloud Licensing](https://about.gitlab.com/pricing/licensing-faq/cloud-licensing/#offline-cloud-licensing) 上の Self Managed 顧客の現在の使用状況とバージョンデータを可視化できます。データ同期ごとに 1 レコードが作成され、使用状況の経時的な変化や顧客が特定のシート数を超えた日付を示すのに役立つポイントインタイムデータを表します。Cloud License 対応顧客の場合、[License Sync](https://docs.gitlab.com/subscriptions/self_managed/#subscription-data-synchronization) の一部として 1 日に 1 回レコードが作成されます。Offline License 対応顧客の場合、顧客が使用状況データを手動で GitLab に送信するたびにレコードが作成され、月に 1 回の頻度で要求されます。

このページでは、`Company`、`Subscription name`、または `Hostname` で検索して、特定の顧客のすべてのライセンス使用状況を確認できます。各同期で次のメトリクスがレポートされます:

1. `License user count` - 顧客のサブスクリプションの一部として購入されたシート数
1. `Billlable user count` - 同期時のアクティブで請求可能なユーザーの現在の数
1. `Max historical user count` - 現在のサブスクリプション期間中に記録された請求可能ユーザーの最高値
1. `GitLab version` - 同期時の顧客が使用している GitLab のバージョン

### Orders

1. `Orders` セクションに移動します。
1. 検索ボックスを使用して注文を検索します。検索には以下のパラメータを使用できます:
   - 注文 ID
   - billing account
   - サブスクリプション名
   - Gl namespace
   - Gl namespace 名
1. 右の ℹ️ アイコンをクリックすると、注文のすべての詳細が表示されます。
1. 右の 📕 アイコンをクリックすると、注文の履歴が表示されます。

### Reconciliations

1. `Reconciliations` セクションに移動します。
1. 検索ボックスを使用して顧客を検索します (Salesforce にあるとおりに名前を検索していることを確認)。
1. 顧客のリコンシリエーションが返され、次の情報が表示されます:
   - 顧客名
   - Zuora へのリンク付きのサブスクリプション名
   - リコンシリエーションステータス
   - リコンシリエーション日
   - リコンシリエーション完了/終了日
   - スキップ理由 (該当する場合)
   - ユーザー数 (リコンシリエーション後)
   - 請求金額
   - エラーメッセージ (該当する場合)

### CustomersDot Admin panel の Sales ユースケース

#### 顧客/見込み客に対して発行されたすべてのライセンスを検索

これは、誰が、何回、いつ、何人のユーザー向けにトライアルをリクエストしたかを理解できます。[Self-Requested Trials](https://about.gitlab.com/free-trial/) は簡単にレポートできません。

#### version.gitlab.com でライセンスをクロスリファレンス

サーバー名が不明な場合に、使用状況 ping データを検索する唯一の方法です。たとえば、顧客 acmeinc.com が acmeinc.ninja を使っている場合。これを見つける直接的な方法はありません。

#### ライセンスの配信に使用されたメールアドレスをすばやく見つける

CustomersDot がライセンス情報の SSOT であるため、さらなるトラブルシューティングのために、誰がライセンスを受け取ったかを知ることが重要です。

##### 参考資料

- [トラブルシューティング: ライセンス](/handbook/business-technology/enterprise-applications/entapps-crm/quote-to-cash/troubleshooting/#licenses)
- [ライセンス所有者の変更 (Contact Support)](/handbook/business-technology/enterprise-applications/entapps-crm/quote-to-cash/troubleshooting/#how-do-i-change-the-license-owner-for-self-managed-instances-with-licensegitlab)

## Fulfillment Support Admin ツール

*最終更新: 2025年5月21日*

### 概要

このドキュメントでは、[mechanizer](https://gitlab.com/gitlab-com/support/toolbox/mechanizer) から CustomersDot admin ダッシュボードに移行された Support Admin 機能について説明します。これらのツールは、Support Licensing & Renewals (L&R) チームに不可欠な機能を提供します。

**現在のステータス**: 移行はほぼ完了しており、最後の機能 ([まもなく期限切れの SaaS サブスクリプションを延長](https://gitlab.com/groups/gitlab-org/-/epics/17745)) が本番に実装されています。

- フェーズ移行アプローチの詳細については、[Epic #14169](https://gitlab.com/groups/gitlab-org/-/epics/14169) を参照してください

### アクセス要件

Support Admin 機能は現在、L&R サポートチームの選ばれたメンバーに限定されており、アクセスを拡大する計画があります。

#### 必要な権限

これらの機能にアクセスするには、次の Google グループの一員である必要があります:

- **本番環境**: `okta-cdot-prod-support-admins`
- **ステージング環境**: `okta-cdot-stg-support-admins`

#### アクセスのリクエスト方法

1. [Access Request](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?description_template=role_support-CDot-full-access-request-template) を提出します
2. テンプレート `role_support-CDot-full-access-request-template` を選択 (上記のリンクが自動的にテンプレートを適用します)
3. Support チームマネージャーから承認を取得
4. Fulfillment チームマネージャー (`@jameslopez` / `@rhardarson` / `@dzubova`) から承認を取得
5. 本番へのアクセスには、`okta-cdot-stg-support-admins` Google グループに自分を追加してください。ステージングへのアクセスには `okta-cdot-prod-support-admins` を追加してください。

**注**: Support ロールでは、管理者は SaaS トライアルの編集と延長、self-managed の緊急ライセンスの作成、以下のセクションにリストされている SaaS 有料名前空間に対するさまざまなコントロールを実行するアクセスを取得します。
Support 管理機能を使用するために、顧客とライセンスの書き込みアクセスは必要ありません。管理者は他のリソースへの読み取り専用アクセスを既定で取得します。

### 機能ナビゲーション

すべての Support Admin 機能は、CustomersDot 管理インターフェースの **Support** メニューを通じてアクセスできます:

- 本番: https://customers.gitlab.com/admins/sign_in
- ステージング: https://customers.staging.gitlab.com/admins/sign_in

### 利用可能な機能

#### 1. トライアル管理 (SaaS)

場所: `Support` → `Trial changes (SaaS)`

この機能は、.com トライアルの Mechanizer の UpdateGitlabplan 機能を置き換え、以下をサポートします:

1. アクティブ/期限切れトライアルのプランタイプと有効期限の編集
2. アクティブなトライアルプランのキャンセル

##### SaaS トライアルを編集

1. 鉛筆アイコンをクリックしてトライアルの編集ビューを開きます
2. トライアル終了日を変更します (該当する場合)
3. ドロップダウンリストから別のトライアルタイプを選択します (該当する場合)
4. Zendesk チケットリンクを入力します
5. 'Save' をクリックします

##### SaaS トライアルをキャンセル

1. 進入禁止アイコンをクリックしてトライアルのキャンセルビューを開きます
2. Zendesk チケットリンクを入力します
3. 'Confirm' をクリックします

#### 2. Self-Managed トライアルライセンス

場所: `Support` → `Trials for SM`

この機能は SM トライアルの Mechanizer の Emergency license 機能を置き換えます。

##### Self-Managed Legacy トライアルライセンスを生成

1. `Add new License` タブをクリックします
2. 必要な詳細を入力します:
    - ユーザーメール
    - ユーザー数
    - 開始日
    - 終了日
    - Zendesk チケットリンク
3. 'Save' をクリックします
4. legacy ライセンスを含むメールが提供されたメールアドレスに送信されます

#### 3. 名前空間コントロール

場所: `Support` → `Namespace controls (SaaS)`

このセクションでは、さまざまな名前空間管理機能を提供します:

##### 3.1 追加 CI 分の設定

**目的**: GitLab 名前空間に特定の数の追加の共有ランナー CI 分を設定する

**重要**: 入力された値は新しい合計値となり、既存の値に追加されるわけではありません

**手順:**

1. `Set extra CI minutes` タブを選択します
2. Namespace ID またはパスを入力します
3. 追加分の新しい合計を入力します
4. Zendesk チケットリンクを入力します
5. 'Submit' をクリックします

##### 3.2 追加ストレージの設定

**目的**: GitLab 名前空間に追加のストレージ容量を設定する

**手順:**

1. `Set additional storage` タブを選択します
2. Namespace ID またはパスを入力します
3. 追加ストレージを MiB 単位で入力します
4. Zendesk チケットリンクを入力します
5. 'Submit' をクリックします

##### 3.3 サブスクリプションのクリア

**目的**: サブスクリプションを名前空間からリンク解除し、名前空間を Free tier にダウングレードする

**手順:**

1. `Clear subscription` タブを選択します
2. Zuora Subscription ID または名前を入力します
3. Zendesk チケットリンクを入力します
4. 'Submit' をクリックします

##### 3.4 強制的に再関連付け

**目的**: 別の名前空間とサブスクリプションを再関連付ける (前の名前空間は Free tier にダウングレードされます)

**手順:**

1. `Force re-associate` タブを選択します
2. ターゲット Namespace ID またはパスを入力します
3. Zuora Subscription ID または名前を入力します
4. Zendesk チケットリンクを入力します
5. 'Submit' をクリックします

##### 3.5 最大シート数のリセット

**目的**: 名前空間の最大シート数をリセットする

**手順:**

1. `Reset max seats` タブを選択します
2. Namespace ID またはパスを入力します
3. 新しい最大シート数を入力します
4. Zendesk チケットリンクを入力します
5. 'Submit' をクリックします

##### 3.6 サブスクリプションの延長

**目的**: まもなく期限切れになるサブスクリプションを一時的に延長する

**現在の制限**: 名前空間がトライアルに関連付けられている場合、一時延長を provisioning するためにトライアルを延長するようにリダイレクトされます

**将来の開発**: 以前のトライアルがない名前空間のサブスクリプション延長のサポートは [Issue #12874](https://gitlab.com/gitlab-org/customers-gitlab-com/-/issues/12874) で実装中です

### 将来の改善 / バグ修正

将来の改善またはバグ修正については、[CustomersDot project](https://gitlab.com/gitlab-org/customers-gitlab-com/-/issues/new) で Issue を作成し、適切なチームをタグ付けしてください:

1. Trial、ライセンス、名前空間ツール > Provision
2. 消耗品と最大シートツール > Utilization
3. Billing account/contact と QSR ツール > Subscription management

## Fulfillment に影響するバグの対応計画

provisioning、購入、請求、サブスクリプションデータなどを含む、Fulfillment に影響するバグが発見された場合、以下を実行してください:

**Issue の報告**

1. バグについて知られていることを概説した新しい [Fulfillment Meta バグ受付 Issue](https://gitlab.com/gitlab-org/fulfillment-meta/-/issues/new) を開きます (bug_intake テンプレートを選択)。
   1. `@fulfillment-group/leadership/fulfillment-pm` グループをメンションして [Fulfillment Product Management](/handbook/engineering/development/fulfillment/) をタグ付けします。
   1. レビューとアクションのために `ofernandez2` に Issue を割り当てます。
1. 広い認識とレビューのために、Slack の #s_fulfillment と #business-fulfillment-sync に Issue へのリンクを投稿します。

**適切な DRI への通知**

バグのインパクトに応じて、以下の個人を Issue にループする必要があります:

1. 請求と収益に影響する問題: `Sarah McCauley - Director, Billing & AR`
1. 影響を受けるサブスクリプションの特定および/または Zuora ソリューションの自動化: `Jessica Salcido - Finance Systems Administrator`
1. ブッキングへの影響、および/または Salesforce ソリューションのニーズの評価と調整: `Jesse Rabbits - Sr. Manager, Deal Desk`
1. 顧客への連絡が必要な場合、PM が連携する相手: `Lyle Kozloff - Director of Support, Global Readiness`
1. 製品マネタイゼーションの決定が必要な場合: `Justin Farris - Sr. Dir, Product Monetization`

## Fulfillment デバッグと FAQ

### ライセンスアクティベーションの問題

**True-up またはシートオーバーエージの不一致でライセンスがアクティベートされない**

1. 14.3+ の顧客では、10% のシートオーバーエージがあってもライセンスのアクティベーションを許可しています [issue #333851](https://gitlab.com/gitlab-org/gitlab/-/issues/333851)。詳細については [こちら](https://gitlab.com/gitlab-org/gitlab/-/blob/master/doc/administration/license.md#users-exceed-license-limit-upon-renewal) を確認し、関連する [MR #67507](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/67507) および [MR #67508](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/67508) を参照してください
1. Cloud Licensing では、シート数の不一致でアクティベーションをブロックしません。顧客が現在のアクティブユーザーよりも少ないシートを持つライセンスを適用する場合、次の QSR または true-up イベントでリコンシリエーションします。

**Cloud Licensing をアクティベートするために GitLab インスタンスはどのような接続を必要としますか？**

インスタンスはアクティベートするために customers.gitlab.com への 443 ポート接続が必要です。これは、[こちらのドキュメント](https://docs.gitlab.com/subscriptions/self_managed/#subscription-data-synchronization)で概説されているように、ライセンス同期にも使用されます。

### データ収集

**顧客はテレメトリやライセンス同期データの共有をオプトアウトできますか？**

Cloud License で送信されるデータは [このドキュメント](https://docs.gitlab.com/subscriptions/self_managed/#license-sync) で説明されています。要するに、集計されたユーザー数と一部のライセンスメタデータです。このデータは Cloud Licensing に必要です。ライセンスを管理し、将来の更新をサポートし、アドオンをサポートし、シートのリコンシリエーションをサポートする私たちのニーズをサポートするために必要なデータのみを含むように意図されています。

[metrics.gitlab.com](https://metrics.gitlab.com/) で `subscription` イベントを検索することで、カウントを生成するサンプルコードを見ることができます。

**Operational と Optional Data の違いは何ですか？**

私たちの [サービス使用状況データ](/handbook/legal/privacy/customer-product-usage-information/) は、主にインスタンスからの集計カウント (例: Issue や MR の数) であり、週次 (またはそれ以下) の頻度で GitLab に送信されます。

1. Operational Data: これは、サブスクリプションアカウント/ライセンスに結びついたデータです。このデータの目標は、GitLab Customer Success と Sales チームが顧客が GitLab をよりよく採用し、彼らの投資から価値を得るのを支援するための集計カウントを取得することです。これらのカウンターは、"operational" を検索し、operational カテゴリを探すことで metrics.gitlab.com で確認できます。これらの operational イベントは、インスタンスをどのようにアクティベートしたかに依存しません。
2. Optional Data: [Optional Data](https://metrics.gitlab.com/?q=optional) は同様のタイプのメトリクス (集計カウント) ですが、Operational メトリクスよりもはるかに大きなセットです。これは、インスタンスで設定/オプトアウトされ、サブスクリプションとは関係ありません。このデータを共有することを選択した場合、Product チームは、R&D リソースをどこに投資してプラットフォームを成長させ続けるかを理解するためのインサイトを感謝します。それ以外の場合は、更新のために無視し、[こちら](https://docs.gitlab.com/development/internal_analytics/service_ping/#disable-service-ping) で文書化されているオプトアウト手順に従ってください。

**顧客は、GitLab インスタンスをエアギャップ/インターネットに接続しないまま、サブスクリプションデータを臨時で送信できますか？**

詳細については [Offline Cloud Licensing](https://about.gitlab.com/pricing/licensing-faq/cloud-licensing/#offline-cloud-licensing) を参照してください。

## Fulfillment ロードマップ優先順位付け

### 原則

私たちの安定したカウンターパート全体で、正しい結果を提供することに集中するために 4 つの主要な原則に従います。これらの原則は絶対的なものではなく、意思決定をガイドするためのものです。

**GitLab とのビジネスをシームレスにする**

顧客が GitLab を購入することを選択するとき、彼らはすでに取引によって有効になる機能やサービスにアクセスすることで追加の価値を解放することを決定しています。私たちは、取引体験を背景に消すことを目指し、顧客が可能な限り簡単にこの追加の価値を解放できるようにします。これにより、より良い顧客体験が生まれ、GitLab の加速した成長につながります。

これは、すべてのイニシアチブで複雑さの必要性を疑問視することを意味します。私たちは理解し使いやすい機能を構築するように努め、すべてのタイプの顧客にとって完璧に機能することを確認します。可能な限り、顧客がセールス担当者と話すことを必要とせず、オンラインのセルフサービスツール経由で取引するかどうかを選択できるようにします。

**GitLab がスケールできるように強固な基盤を構築する**

Fulfillment システムは、GitLab 内の多くのコマースアクティビティの基盤層です。私たちのシステムは、顧客にライセンスを provisioning し、複数の KPI とデータモデルのデータソースであり、[Zuora](/handbook/business-technology/enterprise-applications/guides/zuora/) と Salesforce と直接相互作用します。これらのシステムは信頼性が高く、需要に応じてスケールでき、他のチームが協力できる必要があります。

私たちは定期的に基盤に投資し、基盤システムが十分に堅牢でないと感じるたびに新機能開発を中断し基盤に集中することを続けます。FY23 にこのエリアの集中した努力のために Fulfillment Platform グループを設立しました。

**データを使用して決定を行いインパクトを測定する**

私たちには多くのセンシングメカニズムがあります: GTM チーム経由のフィードバック、ビジネスカウンターパートとのミーティング、ユーザー研究からの顧客フィードバック、GitLab チームメンバーや広いコミュニティのメンバーが Issue tracker で提起した改善提案。

方向と優先順位を設定するためにデータをセンシングメカニズムとして使用する方法も改善しています。ファネルを理解することは、顧客にとってシームレスなコマース体験を構築する上で最重要です。Growth との協力で Fulfillment チームは、取引ファネルの各ポイントをインストルメンテーションし、私たちの戦略と方向性を情報する形でデータを使用できるようにしています。

**変更のインパクトが大きい場合は特に、イテレートする**

イテレーションは、特に Fulfillment 内で従うのが最も挑戦的な価値の 1 つです。多くの場合、私たちの作業は外部のアナウンスやコミュニケーションと密接に整合してバンドルされる必要があります。それでも、可能な限り作業を分割し、機能のリリースを広範なアナウンスから切り離すように努めます。これにより、私たちの顧客とビジネスへの価値の提供が加速されます。

**GitLab アプリケーションコードからビジネスロジックを最小化して削除する**

過去には、GitLab インスタンスコードに大きなビジネスロジックを直接埋め込んでいました。たとえば、私たちのライセンスシステムには、支払われたライセンスなどに基づいて、顧客ライセンスがインスタンスレベルでアクティベートされるべきかをチェックするロジックがあります。これは、私たちがサポートする過去の GitLab バージョンに反映できないビジネスポリシーが進化するにつれて、重大な問題を引き起こします。

可能な限り、そのようなロジックを最小化し、アプリケーションコードから削除し、代替のソリューションを探します。

### 優先順位付けプロセス

私たちのロードマップは、[Project management process](/handbook/engineering/development/fulfillment/#project-management-process) に従って優先順位付けされ、スケジュールされます。マイルストーンの[計画プロセス](/handbook/engineering/development/fulfillment/#planning)の一部として、このロードマップを毎月更新することを目指しています。

Fulfillment ロードマップに作業を追加するようリクエストするには、[受付リクエストプロセス](/handbook/engineering/development/fulfillment/#intake-request) に従ってください。このロードマップの優先順位の変更は、[優先順位付けプロセス](/handbook/engineering/development/fulfillment/#prioritization) に従います。

特定の四半期の優先順位の SSOT は、Fulfillment OKR です。

[方向性](/handbook/product/groups/fulfillment/direction/fulfillment_section/)の性質上、Fulfillment は主に、以下の片方または両方が当てはまる、高度にクロスファンクショナルなプロジェクトに取り組みます:

1. 多くのクロスチームの依存関係: プロジェクトの実行は他のチームとの協力に依存し、時間とリソースの大幅な調整が必要です。
1. 下流への影響: プロジェクトは他のチーム (例: Field Operations、Enterprise Apps、Billing) の運営方法を変える可能性があり、また、彼らの努力の成功 (例: セールス効率目標の達成、e コマースコンバージョン目標の達成) に影響を与える可能性もあります

最もインパクトのある作業に集中するために、Fulfillment の優先順位付けプロセスは以下を目指しています:

1. GitLab, Inc の価値への長期的なインパクトで測定された、最高 ROI のイニシアチブを優先する。(注: 「構築コスト」は ROI 計算の I の重要な考慮事項です)
1. クロスチームおよびクロスファンクショナルなリソースニーズを十分に計画するために、優先順位への将来の可視性を提供する。
1. 実行途中の再優先順位付けによる無駄と離脱を最小限に抑える。

#### 優先順位付け基準

プロジェクトは、以下の考慮事項に基づいて Fulfillment ロードマップで優先順位付けされます。

1. 収益への潜在的影響
   1. 新しいセールスチャネルを解放する価値
   1. セールス効率の改善と取引を成立させるためにフィールドチームメンバーが費やす時間の削減。これには、ほとんどの取引でのセールスチーム関与の排除が含まれます
   1. コンバージョンの改善
   1. リスクとコンプライアンスの問題 (負の収益の可能性)
1. 運用コストの削減
   1. サポートコストの削減
   1. GitLab とのシームレスな取引、効率性の向上、顧客満足度の改善。
1. 機会を解放するための基盤
   1. 将来の機会を情報するための新規または改善されたデータの価値
   1. 10 倍の顧客をサポートするためのシステムの堅牢性
   1. 他の機会を解放するための基盤作業の価値
   1. e コマース改善に貢献できる GitLab チームメンバーの数
   1. スケールに役立つ作業 (より多くの顧客をサポート、運用を改善、ビジネスプロセスを簡素化など)
1. インパクトと解決策に関する自信レベル
   1. 適切にスコープ化または研究されていないイニシアチブの場合は低くなります。PM/UX/Eng とクロスファンクショナルパートナーは、イニシアチブをスコープ化することで自信を高めます。
1. 実装の容易さ
   1. イニシアチブを完了するために必要な時間とリソースを考慮します。
   1. 推定された収益/コスト影響に対応する、長期的に持続可能な解決策を検討します。
   1. よく理解されていない努力については、未知の部分を考慮してより大きな努力を仮定することから始めます。スコープ化を行うにつれて、コスト/複雑さを洗練できます。

すべてのイニシアチブは、誰がリクエストするかに関係なく、この同じ基準に基づいて評価されます。

一部のイニシアチブはこれらの基準に直接的な影響を与えますが、他のものは間接的な影響を与えます。優先順位付けの一部として間接的な影響を考慮します。

新しい解決策をスコープ化する際は、GitLab がスケールし、将来の作業を加速できるようにする解決策を優先します。これらの解決策はしばしばより多くの前もっての基盤作業を必要としますが、これは最初のスコープに含めます。一部の基盤作業をスキップして解決策を加速することを決定した場合、この基盤作業をロードマップに別のラインアイテムとして追加します。

**顧客満足度に関する注意**: 顧客満足度の改善を目指す努力のインパクトを理解するために、CSAT の改善が収益とコストに与える間接的な影響を見積もる必要があります。たとえば、購入に必要な手順の数を減らすか改善することで、コンバージョン率と収益の増加が見られます。

#### 新しい作業のスケジューリング

確立された基準に基づく優先順位付けが、作業が完了するためにスケジュールされる順序を駆動します。プロダクトチームは定期的に全体の優先順位をレビューします。優先順位を変更する前に、以下を考慮します:

1. 進行中の努力を中断することによる効率性とモラルへの影響
1. 既存の顧客およびパートナーコミットメントへの変更の影響
1. クロスファンクショナルパートナーからのフィードバック

パートナーチームへの影響を最小限に抑え、より予測可能性を与えるために、進行中の四半期内に行うことについてクロスファンクショナルパートナーとすでに合意したイニシアチブへの変更を最小化します。

[受付リクエスト](/handbook/engineering/development/fulfillment/#intake-request) を経由して、誰でもロードマップに追加する新しいアイテムをリクエストできます。

#### 四半期クロスファンクショナルレビュー

私たちの優先順位付けの目標の 1 つは、Fulfillment とクロスファンクショナルパートナー全体のチーム全体のアウトプットを最大化することです。私たちは、Fulfillment とそのパートナーチームが提供する予定の作業について、すべての GitLab チームメンバーに透明性を提供したいと考えています。

これを可能にするために、新しい会計四半期の開始前に[安定したカウンターパート](/handbook/engineering/development/fulfillment/#stable-counterparts)とロードマップレビューを行います。このレビューの一部として、ロードマップの優先順位についてフィードバックを集め、フィードバックに基づいてロードマップを更新し、今後 3-6 か月のスコープと配信マイルストーンについてパートナーと合意します。

これらの四半期レビュー中に、Fulfillment エンジニアリングキャパシティの最大 70% を次の四半期に、それ以降の四半期に対してはキャパシティの 30% を超えないようにコミットすることを目指します。これは、クロスファンクショナルパートナーが計画するための今後の活動への十分な可視性を提供しつつ、必要に応じて再優先順位付けと変更のための余地を残すことを目的としています。

#### ロードマップの変更を伝える

ロードマップへの提案された変更は、最初に関連する Slack チャンネルで、関連するコンテキストと根拠とともに非同期でクロスファンクショナルパートナーに伝え、フィードバックを求めます。必要に応じて、議論のために同期ミーティングがスケジュールされます。すべてのフィードバックがプロダクトチームによって考慮され、最終的な決定が下され、決定がされたら伝えられます。

### Fulfillment 優先順位付けエスカレーション

Fulfillment の通常の優先順位付けプロセスによって、競合する優先順位のために優先順位付けされていない緊急の Fulfillment ニーズがあり、それが重要かつ緊急の両方である場合、エスカレーションのために部門のリーダーシップと連携してください。最初のステップは、Fulfillment リーダーシップ ([ofernandez2](https://gitlab.com/ofernandez2) を含む現在) を伴う非同期の議論にすることができます。リクエストに対応するために競合する会社優先プロジェクトを再優先順位付けする必要がある状況では、GitLab の [e-group](/handbook/company/structure/#executives) へのエスカレーションが必要になる可能性があります。

Sales と Customer Success グループのチームメンバーは、まずクロスチームリーダーシップの可視性と優先順位付けのために [Top ARR Drivers ミーティング](/handbook/product/product-processes/) を経由してエスカレーションする必要があります。議論のためのアスクリストにアイテムを追加するだけです (ミーティングアジェンダのリンク)。

#### Fulfillment OKR プロセス

Fulfillment のリソースは、一般的には次のように管理されるトップ優先作業に割り当てられます:

1. 強制優先順位付け項目 (SLO の達成など) が時間通りに完了することを最初に保証します。
2. 四半期目標と主要結果 (OKR) を提供します。

Fulfillment FY25 Q2 OKR は https://gitlab.com/gitlab-com/gitlab-OKRs/-/work_items/6895 にリストされています (チームメンバーのみアクセス可能)。毎四半期、Fulfillment ステージに同様のトップレベルの目的があります。

OKR の設定:

1. 各四半期、Fulfillment ステージのプロダクトリーダーが、トップ優先事項のドラフトリストを GitLab OKR でトップレベル目的を開始することで OKR 計画を開始します。
1. 各 Fulfillment グループの Quad は、四半期の作業を計画し、これらのトップ優先事項にマッピングするためにサブ目的/KR を追加するために協力します。
1. Quad は、計画中に見えていることに基づいて、OKR への変更を提案します。これには、技術的負債、アーキテクチャブループリント、メンテナンス KR、または OKR から欠けているかもしれない他の作業の優先順位付けが含まれます。
1. すべてのサブ目的または KR に優先度ラベルを使用してラベルを付けます。Priority 1 で 90%+、Priority 2 アイテムで 80%+、Priority 3 アイテムで 70%+ の達成を目指します。

OKR のレビュー:

1. PI レビューミーティングの一部としての OKR の月次更新 (例の Issue https://gitlab.com/gitlab-com/Product/-/issues/13333)
2. KR が最新であることを確認し、適切な場合は OKR をクローズして置き換えることを含めて確認します (例: 追求しないことに決めたプレースホルダー OKR があった場合、または期中で別のものを優先順位付けすることを決めた場合)。
3. 全員が PI レビューミーティングの 2 日前までに更新を提出し、非同期レビュー後にオープンな議論点がない場合、PI 同期ミーティングをキャンセルします。
4. 私たちのアジェンダドキュメントは毎月更新されますが、議論が必要なすべてのことが非同期で議論されることを保証するために非同期でレビューします。([アジェンダドキュメント](https://docs.google.com/document/d/17smuC22Ncu5PP0Ao9QdZnkWK0nbe7ArJveDRp-95AGE/edit#heading=h.n8ipg35nq4u1))

OKR の最終化とクローズ:

四半期の終わりに、ステージリーダーが OKR をスコアリングし、トップレベルの目的にそれを要約するコメントを残します。([FY25 Q1 example](https://gitlab.com/gitlab-com/gitlab-OKRs/-/work_items/5573#note_1883160327))。この最終ステップは、振り返り、自分自身に責任を持ち、そうでなければしばしば見過ごされる達成したことを祝福するのに役立つため、重要です。私たちはこの最後の更新を、私たちの #s_fulfillment_fyi チャンネルでより多くの可視性のために Slack にクロスポストします。

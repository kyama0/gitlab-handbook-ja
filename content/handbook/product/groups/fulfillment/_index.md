---
title: Fulfillment ガイド
description: "Fulfillment サブ部署は、ユーザー購入プロセスに影響を与えるシステム間のインフラストラクチャに責任を持ちます。"
upstream_path: /handbook/product/groups/fulfillment/
upstream_sha: 52419353ea755a1ac823553385f8636ff2fcde17
translated_at: "2026-11-01T17:26:27+00:00"
translator: claude
stale: false
lastmod: "2026-10-29T09:52:32-04:00"
---

## 主要な Fulfillment ドキュメントリンク {#key-fulfillment-documentation-links}

| リソース  | カバーする領域 |
| --------  | ------------- |
| [Fulfillment の方針](/handbook/product/groups/fulfillment/direction/fulfillment_section/) | Fulfillment のビジョンと次に取り組むこと。 |
| [docs.gitlab.com のサブスクリプション](https://docs.gitlab.com/subscriptions/) | GitLab サブスクリプションに関する顧客向けドキュメント。Customer Portal (customers.gitlab.com) 情報を含みます。 |
| Fulfillment ガイド (このページ) | CustomersDot 管理ツールと、上記の docs.gitlab.com のサブスクリプションドキュメントの一部ではないプロセスドキュメントについてのドキュメント。 |
| [Fulfillment Development サブ部署](/handbook/engineering/development/fulfillment/) | チームメンバー、安定したカウンターパート (PM、UX、Quality、Security、EntApps、Field Ops、Sales、Billing、Customer Success、Support Engineering)、プロジェクト管理プロセスなど。 |
| [内部ハンドブック - Fulfillment](https://internal.gitlab.com/handbook/product/fulfillment/) | パブリックハンドブックに置けないドキュメント。これは [非公開](/handbook/communication/confidentiality-levels/#not-public) 情報のみに最小化してください。 |
| [クラウドライセンスの概要（外部）](https://about.gitlab.com/pricing/licensing-faq/cloud-licensing/) | なぜ Cloud Licensing なのか、収集されるデータ、顧客の前提条件 |
| [ライセンス FAQ](https://about.gitlab.com/pricing/licensing-faq/) | 購入、ライセンス、請求、セールス連絡などについてのよくある質問 |
| [Fulfillment メール一覧](https://docs.google.com/spreadsheets/d/1SwEYmLD5Eoa5wM399frPoNGPQ3OUTGBKOOs9z6nB2tc/edit#gid=0) | すべての Fulfillment メールのリスト |
| [GitLab 全社の見積もりから入金までのドキュメント](/handbook/company/quote-to-cash/) | 全社的な見積もりから入金までのドキュメント |

## 私たちと連絡を取る方法 {#how-to-connect-with-us}

上記の主要なリンクやこのガイドで質問が解決されない場合:

- ライセンスエラー、ライセンスの再送、その他の顧客固有のサポートリクエストについては、[Support チーム用に内部 Issue を作成](/handbook/support/internal-support)してください。
- 顧客固有でない購入やプロビジョニングの質問、または購入ワークフローでの障害をエスカレートするには、[#s_fulfillment](https://gitlab.slack.com/archives/CMJ8JR0RH)に連絡してください。

## Fulfillment 機能の利用可能性 {#fulfillment-feature-availability}

すべての Fulfillment 機能がすべての顧客タイプですぐに利用可能というわけではありません。以下の利用可能性マトリックスを参照してください。

### Cloud Licensing、Auto-Renewal、Quarterly Subscription Reconciliation、Operational Data の利用可能性 {#cloud-licensing-auto-renewal-quarterly-subscription-reconciliation-and-operational-data-availability}

| 顧客タイプ | Cloud Licensing (Y/N) | Auto-Renewals (Y/N) | Quarterly Subscription Reconciliation (Y/N) | Operational Data (Y/N) |
| ------------- | --------------------- | ------------------- | ------------------------------------------- | ----------------------- |
| クレジットカード登録済みの顧客 | はい | はい | はい | はい |
| 請求書で支払う顧客 | はい | はい | はい | はい |
| PO を必要とする顧客 | はい | いいえ | いいえ | はい |
| MSA を持つ顧客 | はい | いいえ | いいえ | いいえ |
| 複数年契約を持つ顧客 | はい | いいえ | いいえ | はい |
| GitLab リセラーまたはその他のチャネル/アライアンスパートナーを通じて購入する顧客 | はい | いいえ | いいえ | はい |
| 公共部門の顧客 | はい | いいえ | いいえ | はい |
| オフライン/エアギャップ環境を持つ顧客 | はい<br>*([オフラインクラウドライセンス](https://about.gitlab.com/pricing/licensing-faq/cloud-licensing/#offline-cloud-licenses)は GitLab 15.0 でリリース)* | いいえ | いいえ | いいえ |
| GitLab for Education、Open Source、Startups の顧客 | いいえ | いいえ | いいえ | いいえ |
| Free Tier ユーザー | いいえ | いいえ | いいえ | いいえ |

## GitLab トライアル: 利用可能性とプロビジョニング {#gitlab-trials-availability-and-provisioning}

### セルフサーブトライアル {#self-serve-trials}

| ベースプラン | アドオン | デプロイメントとライセンスタイプ | 期間 | 制限 | 延長 | プロビジョニングワークフロー |
| ---------- | -------- | --------------- | -------- | ------------ | ---------- | --------- |
| Premium または Ultimate (Duo Core を含む) | なし | SM (オンラインクラウドライセンス) | 現在提供されていない | NA | NA | NA |
| Ultimate (Duo Core を除く)| なし | SM (従来型ライセンス) | 30 日 | Free、Premium 顧客、100 ユーザー | 不可、新しい $0 の見積もりが必要 | ユーザーがフォームに記入し、marketo が CDot から生成された従来型ライセンスを発行 |
| Premium | Duo Pro | SM (オンラインクラウドライセンス) | 60 日 | Premium 顧客のみ、100 ユーザー | 不可、新しい $0 の見積もりが必要 | ユーザーが Subscription ID とともにフォームに記入し、既存のクラウドライセンスに基づいて Duo Pro アクセスを追加 |
| Premium | Duo Enterprise | SM (オンラインクラウドライセンス) | 現在提供されていない | NA | NA | NA |
| Ultimate | Duo Pro | SM (オンラインクラウドライセンス) | 現在提供されていない | NA | NA | NA |
| Ultimate | Duo Enterprise | SM (オンラインクラウドライセンス) | 60 日 | アクティブなサブスクリプションが必要、100 ユーザー | 不可、新しい $0 の見積もりが必要 | ユーザーが Subscription ID とともにフォームに記入し、既存のクラウドライセンスに基づいて Duo Enterprise アクセスを追加 |
| Premium (Duo Core を含む)| NA | .Com | 現在提供されていない | NA | NA | NA |
| Ultimate (Duo Core を含む) | NA | .Com | 30 日 | Free、Premium、Ultimate 顧客 | Support チーム内部リクエスト経由で可能 | NA |
| Premium | Duo Enterprise | .Com | 現在提供されていない | NA | NA | NA |
| Ultimate | Duo Enterprise | .Com | 無料名前空間は 30 日、Premium および Ultimate 顧客は 60 日 | Free EE、Premium、Ultimate 顧客 | Support チーム内部リクエスト経由で可能 | ユーザーは名前空間またはマーケティングランディングページからトライアルを開始可能 |
| Ultimate | Duo Enterprise | Dedicated | 公開されていないが、既存の Self-managed フォームでセルフサーブトライアルをサポート | Ultimate Dedicated の商用顧客、Dedicated PubSec 顧客には不可 | 不可、新しい $0 の見積もりが必要 | NA |

**セルフサーブトライアルの資格基準:**

- セルフサーブトライアルは顧客あたり 1 回に制限されています
- ほとんどのセルフサーブトライアルでは、.Com の制限は名前空間に基づき、Self-managed ではサブスクリプション番号に基づきます (例外は従来型ライセンスでの Ultimate のみのトライアル)
- 期間は 30 日または 60 日の間で、トライアル期間中はシート数に制限があります
- Dedicated 顧客は、Self-managed 顧客用の既存のトライアルフォームを使用する場合に、Ultimate with Duo Enterprise のセルフサーブトライアルを利用できます (Dedicated の商用顧客には制限を設けていません)

### セールス支援トライアル {#sales-assisted-trials}

- これらは、顧客が評価を完了するために延長された期間または追加のシート数を必要とする、非標準的なトライアルです。
- セールス支援トライアルは、顧客向けのセルフサーブフローでは利用できない製品/プランを試したい顧客にも提供されます (例: オフラインまたはエアギャップの顧客 (SM) がセルフホスト機能を試したい、Duo with Amazon Q、Dedicated など)。
- ほとんどのセールス支援トライアルは、$0 の見積もりと Deal desk および Revenue チームからの承認を必要とします
- GitLab Duo Agent Platform (DAP) や GitLab Orbit などの使用量課金（クレジットベース）製品では、$0 の見積もりの代わりにトライアルクレジットを通じてセールス支援トライアルを提供します。[クレジットベース製品のセールス支援トライアル](#sales-assisted-trials-for-credit-based-products)を参照してください。

| トライアル | デプロイメントタイプ | 支援タイプ | 期間 | トライアル作成 | 制限 |
| ------------------- | --------------- | --------------- | -------- | ------------------ | ------------ |
| Premium (Duo Core を除く) | SM (従来型ライセンス) | Sales および Support チーム (Support チームが従来型ライセンスを作成するには内部リクエストが必要) | 30 日 | $0 の見積もり不要 | Free EE、Premium、Ultimate 顧客、100 ユーザー |
| Ultimate (Duo Core を除く) | SM (従来型ライセンス) | Sales および Support チーム (Support チームが従来型ライセンスを作成するには内部リクエストが必要) | 30 日 | $0 の見積もり不要 | Free EE、Premium 顧客、100 ユーザー |
| Premium with Duo Pro | SM (オンラインクラウドライセンス) | Sales チーム | カスタマイズ可能な終了日 | $0 の見積もりで可能 | Free EE、Premium、Ultimate 顧客 |
| Premium with Duo Enterprise | SM (オンラインクラウドライセンス) | Sales チーム | カスタマイズ可能な終了日 | $0 の見積もりで可能 | Free EE、Premium、Ultimate 顧客 |
| Ultimate with Duo Pro | SM (オンラインクラウドライセンス) | Sales チーム | カスタマイズ可能な終了日 | $0 の見積もりで可能 | Free EE、Premium、Ultimate 顧客 |
| Ultimate with Duo Enterprise | SM (オンラインクラウドライセンス) | Sales チーム | カスタマイズ可能な終了日 | $0 の見積もりで可能 | Free EE、Premium、Ultimate 顧客 |
| Premium with Duo Enterprise | SM (オフラインクラウドライセンス) | Sales チーム | カスタマイズ可能な終了日 | $0 の見積もりで可能 | Free EE、Premium、Ultimate 顧客 |
| Ultimate with Duo Enterprise | SM (オフラインクラウドライセンス) | Sales チーム | カスタマイズ可能な終了日 | $0 の見積もりで可能 | Free EE、Premium、Ultimate 顧客 |
| Premium (Duo Core を含む) | .Com | Sales チーム | カスタマイズ可能な終了日 | $0 の見積もりで可能 | Free EE、Premium、Ultimate 顧客 |
| Ultimate (Duo Core を含む) | .Com | Sales チーム | カスタマイズ可能な終了日 | $0 の見積もりで可能 | Free EE、Premium、Ultimate 顧客 |
| Premium with Duo Pro | .Com | Sales チーム | カスタマイズ可能な終了日 | $0 の見積もりで可能 | Free EE、Premium、Ultimate 顧客 |
| Ultimate with Duo Pro | .Com | Sales チーム | カスタマイズ可能な終了日 | $0 の見積もりで可能 | Free EE、Premium、Ultimate 顧客 |
| Ultimate with Duo Enterprise | .Com | Sales チーム | カスタマイズ可能な終了日 | $0 の注文で可能 | Free EE、Premium、Ultimate 顧客 |
| Ultimate with Duo with Amazon Q | SM (オンラインクラウドライセンス) | Sales チーム | 30 日、リーダーシップ承認が必要 | $0 の見積もりで可能 | NA |
| Ultimate with Duo with Amazon Q | Dedicated | Sales チーム | 30 日、リーダーシップ承認が必要 | $0 の見積もりで可能 | NA |
| Ultimate (Duo Core を含む) | Dedicated | Sales チーム | カスタマイズ可能な終了日 | $0 の見積もりで可能 | NA |
| Ultimate with Duo Pro または Duo Enterprise | Dedicated | Sales チーム | カスタマイズ可能な終了日 | $0 の見積もりで可能 | NA |

## クレジットベース製品のセールス支援トライアル {#sales-assisted-trials-for-credit-based-products}

使用量課金製品のトライアルは、$0 の見積もりではなく、CustomersDot のサブスクリプションレベルのトライアルクレジットウォレットを通じて行います。各製品には独自のウォレットカテゴリ、クレジット数、承認区分がありますが、すべての製品で同じリクエストおよびプロビジョニングフローに従います:

1. アカウントチームが、製品の Issue テンプレートを使用して [gitlab-org/fulfillment/meta](https://gitlab.com/gitlab-org/fulfillment/meta)にトライアルクレジットリクエスト Issue を作成し、[トライアルクレジットリクエスト用 Slack チャンネル](https://gitlab.enterprise.slack.com/archives/C0AC0TF748N)のワークフローを通じて承認を申請します。
1. 承認は製品のクレジット区分に従います（各製品のセクションを参照）。承認者のサインオフが必要な区分では、Slack 承認のスクリーンショットを Issue に追加します。
1. SA manager（または Fulfillment チーム）が、[CustomersDot Admin](https://customers.gitlab.com/admin/)の **Sales** > **Bonus Trial Wallets** から、**Add Credits** フォームで製品のウォレットを選択してクレジットをプロビジョニングします。
1. CustomersDot は製品のトライアルウォレットにクレジットを作成し、承認リンクとクレジットを追加したウォレットを含む監査イベントを記録して、サブスクリプションの `SoldTo` 連絡先に製品のトライアル確認メールを送信します。

この方式の対象製品:

| 製品 | ウォレットカテゴリ | デフォルトの期間 | セールス支援で付与するクレジット数 | プロセス |
| ------- | --------------- | ---------------- | ---------------------------- | ------- |
| GitLab Duo Agent Platform (DAP) | `bonus_trial` | 30 日 | 1,000 クレジットまでは自動承認。それ以上は DAP 承認マトリクスに従う | [DAP ボーナストライアルクレジット](#dap-bonus-trial-credits) |
| GitLab Orbit | `orbit_trial` | 30 日 | 500 から 10,000 クレジット。すべてのトライアルは 500 から開始 | [Orbit のセールス支援トライアル](#orbit-sales-assisted-trials) |

### CustomersDot Admin での製品トライアルウォレットの仕組み {#how-product-trial-wallets-work-in-customersdot-admin}

CustomersDot Admin の **Bonus Trial Wallets** ページでは、共有の `bonus_trial` プールとともに製品トライアルウォレットを一覧表示し、クレジットを追加できます。この機能は、Orbit のセールス支援トライアルの開始に先立ち、フィーチャーフラグの背後で展開されています。

ウォレット一覧には各ウォレットのカテゴリが表示されるため、1 つのサブスクリプションで `bonus_trial` ウォレットと製品トライアルウォレットを並行して保有できます:

![bonus_trial と orbit_trial カテゴリを表示するトライアルウォレット一覧](/images/product/groups/fulfillment/sales-assisted-trial-wallet-list.png)

**Category** フィルターで一覧を 1 つの製品のウォレットに絞り込みます:

![bonus_trial と orbit_trial を選択できる Category フィルター](/images/product/groups/fulfillment/sales-assisted-trial-category-filter.png)

**Add Credits** フォームには **Wallet** ドロップダウンがあります。デフォルトは `bonus_trial` です。製品トライアルウォレットを選択すると、その製品のトライアルにクレジットが追加されます:

![Wallet ドロップダウンを orbit_trial に設定した Add Credits フォーム](/images/product/groups/fulfillment/sales-assisted-trial-add-credits-orbit.png)

### Orbit のセールス支援トライアル {#orbit-sales-assisted-trials}

GitLab Orbit は GA 時点で 30 日間のトライアルを提供します。セルフサーブトライアルでは、対象となるサブスクリプションに製品内で直接 100 クレジットを付与します。より多くのクレジットが必要な顧客や、セルフサーブの適格性を満たさない顧客は、セールス支援方式を利用します。Sales は既存のトライアルにクレジットをトップアップすることもできます。新しいクレジットを追加すると、期限切れでないクレジットの期限が延長されます。新しいクレジットを追加せず日数のみを延長する方法は、現在 DAP の `bonus_trial` ウォレットでのみ利用できます。

Orbit のセールス支援トライアルは、500 から 10,000 クレジットの範囲です。すべてのトライアルは 500 クレジットから開始し、自動承認のうえ SA manager がプロビジョニングします。500 を超える場合は、以下の区分に従った承認が必要です。

#### Orbit の承認区分 {#orbit-approval-bands}

| 最大クレジット数 | おおよそのクエリ数 | 必要な承認 | レポート |
| ----------- | ------------------- | ----------------- | --------- |
| 500 | 16,500 | なし（自動承認）。SA manager がプロビジョニング | リクエスト Issue を作成し、トライアルリクエスト用 Slack ワークフローを通じて通知 |
| 501 から 1,000 | 33,000 | 500 クレジットでは不足する理由を添えて、SA manager が個別に判断 | SA manager の承認（コメントまたはスクリーンショット）を Issue に追加 |
| 1,001 から 10,000 | 330,000 | Deal Strategy (Monica Rodriguez, Guru Kannan, Alessandra Pianti)。DAP の承認と同じ | 承認者をタグ付けし、Slack 承認のスクリーンショットを Issue に追加 |
| 10,000 超 | 330,000 超 | CPMO (Manav Khurana) | 承認のためにタグ付けし、Slack 承認のスクリーンショットを Issue に追加 |

#### Orbit トライアルのリクエスト {#requesting-an-orbit-trial}

1. 顧客が GitLab.com または Self-Managed（クラウドライセンス）でアクティブな有償の Premium または Ultimate サブスクリプションを保有していることを確認します。Free ティアは対象外で、Dedicated は GA 時点ではサポートされません。新規顧客は、このセールス支援方式で例外として扱います。
1. [Orbit トライアルクレジットリクエストテンプレート](https://gitlab.com/gitlab-org/fulfillment/meta/-/blob/master/.gitlab/issue_templates/orbit_trial_credit_requests.md)を使用して gitlab-org/fulfillment/meta にトライアルクレジットリクエスト Issue を作成し、上記の区分に従って承認を申請します。
1. 承認後、SA manager が CustomersDot Admin の **Add Credits** フォームで `orbit_trial` ウォレットを選択し、リクエスト Issue を承認リンクとしてクレジットをプロビジョニングします。
1. サブスクリプションの `SoldTo` 連絡先に Orbit トライアル確認メールが届きます。トライアル中は、有効期限の接近、残高の低下（付与されたクレジットの 10% 以下）、トライアル期限切れの通知もアカウントに届きます。

## DAP ボーナストライアルクレジット {#dap-bonus-trial-credits}

このセクションでは、Solution Architect (SA) manager と Fulfillment チームが GitLab Duo Agent Platform (DAP) のボーナストライアルクレジットリクエストをどのように処理するか、また CustomersDot Admin からクレジットをプロビジョニング、トップアップ、または延長する方法について説明します。DAP を評価中の既存の Premium または Ultimate 顧客向けに [トライアルクレジットリクエスト](https://gitlab.com/gitlab-org/fulfillment/meta/-/blob/master/.gitlab/issue_templates/trial_credit_requests.md)を処理する際のリファレンスとして使用してください。

ボーナストライアルクレジットは、CustomersDot のサブスクリプションレベルの `bonus_trial` ウォレットに追加されます。これらは最初に消費され (バーンダウン優先度が最高)、毎月リセットされず、マイナスにはなりません。デフォルトでは、プロビジョニングされた日から 30 日で期限切れになります。

### 適格性の前提条件 {#eligibility-prerequisites}

プロビジョニングの前に、リクエストがリクエスト Issue に記載された前提条件を満たしていることを確認してください:

- 顧客がアクティブな有償の **Premium または Ultimate** サブスクリプション (例: `A-S00330622`) を保有していること。
- Self-Managed 顧客はクラウドライセンスを利用している必要があり、Self-Managed または Dedicated 顧客は使用量課金とボーナストライアルクレジットが使用量ダッシュボードで動作するためにバージョン 18.9 以上である必要があります。

CustomersDot はプロビジョニング時に適格性を検証します。サブスクリプションは現行 (キャンセルまたは期限切れでない) でなければならず、適格な Premium または Ultimate の使用量課金ベースチャージを持っている必要があります。これらのチェックが失敗した場合、プロビジョニングはスキップされます。

> ボーナストライアルクレジットは **オフライン顧客には適用されません**。オフライン顧客は使用量課金のボーナストライアルクレジットを消費できないため、彼らのための DAP トライアルは **$0 オーダー** として処理され、代わりに Deal Desk で設定および承認されなければなりません。ボーナストライアルクレジットリクエストと $0 オーダーの違いについては、[トライアルクレジットリクエストテンプレート](https://gitlab.com/gitlab-org/fulfillment/meta/-/blob/master/.gitlab/issue_templates/trial_credit_requests.md)を参照してください。

### 承認マトリクス {#approval-matrix}

必要な承認は、リクエストタイプとクレジット数によって異なります。GitLab Issue リンク自体が最低ティアでの承認となるため、リクエスト当日にプロビジョニングします。承認者のサインオフが必要なティアでは、Slack の承認のスクリーンショットを GitLab Issue に追加する必要があります。リクエスト者がまだ追加していない場合、プロビジョニング担当者がプロビジョニング前に追加します。

#### 初回トライアルリクエスト {#first-time-trial-requests}

| 顧客あたりの最大クレジット | 必要な承認 | レポート |
| ------------------------ | ----------------- | --------- |
| 1,000 まで | なし (GitLab Issue が承認) | Issue 作成後、専用 Slack チャンネルで通知 |
| 1,001 から 10,000 | Deal Strategy (Monica Rodriguez, Guru Kannan, Alessandra Pianti) | 承認者をタグ付けし、Slack 承認のスクリーンショットを Issue に追加 |
| 10,000 超 | CPMO (Manav Khurana) | 承認のためにタグ付けし、Slack 承認のスクリーンショットを Issue に追加 |
| 100,000 超 | CEO/CFO/CPMO (Bill Staples、Jessica Ross、Manav Khurana) | 承認者の 1 人をタグ付けし、Slack 承認のスクリーンショットを Issue に追加 |

#### リトライアルおよび延長リクエスト {#retrial-and-extension-requests}

すべてのリトライアルおよび期限延長リクエストには、クレジット数に関係なく **SA リーダーシップの承認** (SA Manager、SA Director、または VP of Solutions Architecture) が必要です。Solution Architect は、正当な問題 (DAP のバグ、停止、または顧客側のブロッカー) が適切な評価を妨げたことをまず検証する必要があり、以前のトライアルの評価後レビューが完了している必要があります。標準的な延長期間は 30 日です。

### ボーナストライアルクレジットのプロビジョニング (初回およびトップアップ) {#provisioning-bonus-trial-credits-first-time-and-top-up}

このワークフローは、初回トライアルクレジットリクエストと、既存のウォレットに新しいクレジットを追加するトップアップリクエストに使用します。新しいクレジットを追加すると、ウォレット内の既存の期限切れでないクレジットの期限が自動的に延長されます。

1. 上記の適格性の前提条件と承認要件が満たされていることを確認します (GitLab Issue リンクが存在し、ティアが承認者のサインオフを必要とする場合は Slack 承認のスクリーンショットが添付されていること)。
1. [CustomersDot Admin](https://customers.gitlab.com/admin/)にログインします。
1. **Sales** > **Bonus Trial Wallets** に移動します。
1. **Add Credits** タブを選択してプロビジョニングフォームを開き、必須フィールドを入力します:
   - **Subscription name**: クレジットをプロビジョニングするサブスクリプション (例: `A-S00330622`)。
   - **Approval link**: GitLab.com のトライアルクレジットリクエスト Issue のリンク。フォームは GitLab.com の Issue URL であることを検証します。
   - **Wallet**: トライアルを行う製品のウォレットを選択します。DAP トライアルの場合はデフォルトの `bonus_trial` のままにします。Orbit トライアルの場合は `orbit_trial` を選択します。[ウォレットの選択](#choosing-the-wallet)を参照してください。
   - **Credit amount**: 0 より大きい整数。
   - **Expiration date**: 期限切れオプションを選択します (下記参照)。
   - **Additional notes** (オプション、最大 500 文字)。
1. **Save** を選択します。CustomersDot は選択したウォレットにクレジットを作成し、管理者ユーザー、承認リンク、クレジットを追加したウォレットに紐付いた監査イベントを記録し、サブスクリプションの `SoldTo` 連絡先にウォレットのトライアル通知メールを送信します。

#### ウォレットの選択 {#choosing-the-wallet}

各付与でクレジットを追加するウォレットは、**Wallet** フィールドで選択した 1 つだけです:

| 製品 | 選択するウォレット | クレジットの対象 | 顧客へのメール |
| ------- | ---------------- | ---------------------- | -------------- |
| GitLab Duo Agent Platform (DAP) | `bonus_trial`（デフォルト） | 使用量課金製品が共通して消費できる共有プール | ボーナストライアルクレジットのプロビジョニング通知 |
| GitLab Orbit | `orbit_trial` | Orbit の使用量のみ。評価予算が関係のない使用量に費やされないよう分離 | Orbit トライアル確認、および Salesforce 統合バウチャー |

製品ごとに、サブスクリプションあたり 1 つのトライアルウォレットがあり、セルフサーブとセールス支援のチャネルで共有します。どちらかのチャネルから最初にクレジットを追加すると、ウォレットが作成されます。その後ウォレットにトップアップできるのは Sales のみです。セルフサーブトライアルはクレジットを 1 回だけ付与するため、ウォレットの作成後は常にセールス支援フローを通じてトップアップします。

> 製品トライアルウォレットへのクレジット追加は、サブスクリプションにおけるその製品のトライアルとみなされるため、顧客が後から同じ製品のセルフサーブトライアルを開始できなくなります。顧客が先にセルフサーブトライアルを開始した場合、Sales によるトップアップでは同じウォレットにクレジットを追加し、有効期限を延長すると、顧客の残りのセルフサーブクレジットの期限も延長されます。製品トライアルウォレットがフォームに表示されるのは、製品のトライアルフィーチャーフラグと `sales_assisted_trial_wallets` フィーチャーフラグが有効な間だけです。それ以外は `bonus_trial` のみが提供されます。

#### トップアップ時の期限切れ日の選択 {#choosing-the-expiration-date-for-a-top-up}

プロビジョニングフォームは 2 つの期限切れオプションを提供しており、新しいクレジットと既存の期限切れでないクレジットの両方の実効期限を決定します:

1. **Default (30 days)**: 新しいクレジットは今日から 30 日後に期限切れになります。ウォレットに既により遅い期限切れ日を持つアクティブなクレジットがある場合、新しいクレジットと既存のクレジットの両方が、その遅い日付を使用します。これは標準オプションであり、**延長された日付での**トップアップが機能する方法です。
1. **Use existing expiration**: 新しいクレジットは既存のアクティブなクレジットの期限切れ日を採用するため、期限切れは変更されません。顧客が現在のトライアルウィンドウ内でより多くのクレジットのみを必要とする場合の **同日** のトップアップに使用します。このオプションは、アクティブなクレジットが既に存在する場合にのみ使用できます。

どちらの場合も、システムは既存の期限切れを短縮することはありません。実効期限は、リクエストされた日付と最新の既存のアクティブな期限切れのうち、遅い方になります。

> プロビジョニングが月次の請求サイクル移行ウィンドウ (毎月 1 日 00:00-06:00 UTC) 中に発生した場合、CustomersDot は前月の消費が完了した後にプロビジョニングを実行するように自動的にスケジュールし、即座にプロビジョニングしません。

### クレジットの期限を日数のみで延長する (新しいクレジットなし) {#extending-credit-expiration-by-days-only-no-new-credits}

このワークフローは、顧客がより多くの時間を必要とするが追加のクレジットを必要としない場合に使用します。これは Bonus Trial Wallets ページで直接処理され、クレジットを追加せず、上記のリトライアルおよび延長ルールに従って引き続き SA リーダーシップの承認が必要です。

1. SA リーダーシップの承認が Issue に記録されていることを確認します (Slack 承認のスクリーンショットが添付されていること)。
1. [CustomersDot Admin](https://customers.gitlab.com/admin/)にログインし、**Sales** > **Bonus Trial Wallets** に移動します。
1. **Extend Credits** タブを選択して延長フォームを開き、必須フィールドを入力します:
   - **Subscription name**: クレジットを延長するサブスクリプション (例: `A-S00330622`)。
   - **Approval link**: GitLab.com の延長リクエスト Issue のリンク。フォームは GitLab.com の Issue URL であることを検証します。
   - **Add days**: **7、14、または 30 日** の延長を選択します (7 日がデフォルト)。
1. **Save** を選択します。既存のクレジット残高は変更されません。アクティブなクレジットの期限切れ日のみが先送りされます。システムは期限切れを延長するのみで、短縮することはありません。

### プロビジョニング後 {#after-provisioning}

1. クレジットまたは延長が処理されたことを確認するために、GitLab Issue でリクエスト者をタグ付けします。
1. GitLab Issue をクローズします。
1. クレジットがプロビジョニングされたことを Slack スレッドで通知します。

## ストレージの強制 {#storage-enforcement}

> ストレージ強制の詳細については [内部ハンドブックページ](https://internal.gitlab.com/handbook/engineering/fulfillment/namespace-storage-enforcement/)にアクセスできます。

## 内部 GitLab Duo ライセンスリクエスト {#internal-gitlab-duo-license-requests}

Support Operations が処理するチームメンバーライセンスプロセスでは、Self-managed インスタンスで GitLab Premium または Ultimate をテストまたは使用するチームメンバー向けに従来型ライセンスファイルを生成できます。このライセンスタイプは GitLab Duo と互換性がありません。

- GitLab Duo のテストには、ステージングクラウドライセンスをチームメンバーに提供できます。Slack チャンネル [#g_provision](https://gitlab.enterprise.slack.com/archives/C01BPM66KNE)でリクエストを提出してください。
- 特定の状況に限り、GitLab Duo のテストに本番クラウドライセンスが必要な場合、$0 サブスクリプションを作成することができます。Slack チャンネル [#sales-support](https://gitlab.enterprise.slack.com/archives/CNLBL40H4)で Order Management チームに相談してください。
- 従来型ライセンスは有効期限まで有効ですが、クラウドライセンスは Zuora と CustomersDot 内でアクティブなステージングまたは本番データが必要です。ステージングリフレッシュ中にアクセスを失った場合は、#g_provision に連絡してください。

## 一時的な更新延長 {#temporary-renewal-extensions}

*2025-08-14、GitLab は Docs、ウェブサイト、更新バナー、メールから 14 日間の猶予期間への外部参照を削除しました。ただし、猶予期間はまだアプリケーションとシステムに存在します。[詳細はこちら](https://gitlab.com/groups/gitlab-org/-/epics/18050)。*

Sales Rep は、承認された理由のいずれかについて SFDC で一時的な延長を生成できます。延長はサブスクリプション終了日の 1-15 日前またはサブスクリプション終了日の 1-13 日後に生成でき、デフォルトの有効期限はサブスクリプション終了日後 21 日です ([SaaS 延長のみ 14 日の猶予期間](https://docs.gitlab.com/subscriptions/self_managed/#subscription-expiry)が続きます)。

Self Managed 延長に関する注意:

- 14 日の猶予期間は適用されず、顧客は 21 日の延長のみを取得します [オープン Issue](https://gitlab.com/gitlab-org/fulfillment/meta/-/issues/1827)
- 生成される一時ライセンスは、顧客のベースプラン (Premium または Ultimate) 用のみとなります。顧客が GitLab Duo Pro または GitLab Duo Enterprise アドオンを持っている場合、一時更新ライセンスがインスタンスに適用されると Duo アクセスを失います。
- SM 顧客は、一時延長がまだアクティブな場合、更新されたライセンスキーの同期がブロックされる可能性があるため、更新が成功した時にアクティベーションコードまたはライセンスキーを手動でインスタンスに適用する必要がある場合があります。

この機能に関する追加のコンテキストは[こちら](https://gitlab.com/groups/gitlab-org/-/epics/10173)で見つけることができます。一時的な更新延長に関連するサブスクリプションイベントの[視覚的タイムライン](https://gitlab.com/groups/gitlab-org/-/epics/10173#timeline-of-events)も含まれます。

この機能に関するフィードバックは [この Issue](https://gitlab.com/gitlab-org/fulfillment/meta/-/issues/1728)で共有してください。

### 延長を作成する (SFDC から) {#creating-an-extension-from-sfdc}

延長の作成の概要については、SM デモビデオ [SM デモビデオ](https://www.youtube.com/watch?v=ENRtOQ0DbkM) または [Gitlab.com/Saas ビデオ](https://drive.google.com/file/d/1HGGf8IH5fRt4ftB0pKZfHpb7owECItjX/view)をご覧ください。

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
   1. self-managed の場合、従来型トライアルライセンスが作成され、CustomersDot Admin の Temporary extension レコードからアクセスできます。
   1. SaaS の場合、新しい一時延長 (有効化後) は gitlab.com グループ請求ページに表示されます。
   1. 件名 `[GitLab Transactions] GitLab Temporary Renewal Extension` のメールが顧客に送信されます。self-managed の場合、メールにライセンスキーが含まれます。
      - このメールは Revenue チームにも送信され、SFDC にコピーされて Contact Activity の下に表示されます。
   1. [Customers Portal](https://docs.gitlab.com/subscriptions/customers_portal/)の関連サブスクリプションに `Access temporarily extended until YYYY-MM-DD` バッジが表示されます。

### 延長の表示と使用 {#viewing-and-using-the-extension}

一時更新延長が作成されると、その証拠はいくつかの場所で確認できます。

- SFDC Renewal Opportunity の `Temporary License Extension End Date` フィールドに、延長の有効期限の日付が入力されています。
- [CustomersDot Admin > Temporary Extensions](https://customers.gitlab.com/admin/temporary_extension_history) ページには、すべての一時延長がリストされます。
- 顧客は、[Customers Portal](https://docs.gitlab.com/subscriptions/customers_portal/)の関連サブスクリプションで `Access temporarily extended until YYYY-MM-DD` バッジを確認できます。
  - self-managed の場合、顧客はライセンスキーをダウンロードしてインスタンスに適用できます。
  - SaaS の場合、新しい有効期限が自動的に gitlab.com に同期されます。

サブスクリプションが更新されると、`Access temporarily extended until YYYY-MM-DD` バッジが削除されます。[このビデオ](https://www.youtube.com/watch?v=cR6odsThHNY)は、一時延長の猶予期間が経過し、サブスクリプションが更新されたときに何が起こるかを示しています。

### 延長作成時の起こりうるエラー {#possible-errors-when-creating-an-extension}

| エラー | 説明 |
|---------|-----------|
| Temporary extension can be requested 15 days prior to subscription expiry up until 13 days after subscription expiry | 一時延長は、サブスクリプション終了日の 15 日前から終了日の 13 日後までの間に作成する必要があります。 |
| Subscription has already availed an extension in the current renewal term | 更新ごとに 21 日の一時延長は 1 回だけ可能です。追加の延長は許可されません。 |
| Subscription has an upcoming extension starting on YYYY-MM-DD | 更新のための既存の一時延長があり、まだ開始されていません。 |
| Customer account labeled as having bad debt | Billing チームがこのアカウントを不良債権ありと特定しました。Zuora Billing Account の `Support hold`、`Credit hold` のいずれかが入力されています。 |
| Customer account belongs to a trade restricted country | SoldTo アドレスが [これらの国](https://gitlab.com/gitlab-org/customers-gitlab-com/-/issues/6431#proposal)にある顧客は、一時延長の対象外です。 |

すべての技術的な問題は、[こちらの指示](https://gitlab.com/gitlab-org/fulfillment/meta/-/issues/1514#instructions-please-read-before-posting)に従って Fulfillment と共有する必要があります。問題が報告されたら、顧客がサブスクリプションの延長を受けられるように、Support へ内部リクエストを提出する既存のプロセスに従ってください。Global 顧客向けの [L&R Internal Requests フォーム](https://gitlab-internal.zendesk.com/hc/en-us/requests/new?ticket_form_id=22783840298780)、または **GitLab Support Internal Requests for Federal customers** リクエストオプションを使用してから、SaaS または Self-Managed 用の適切な内部リクエストタイプを選択してください。

### GCP ログへのアクセス {#accessing-gcp-logs}

Temporary Renewals Extension 機能に関連するログは、このフィルターを使用して GCP 経由でアクセスできます: `jsonPayload.functionality="temporary_extension"` ([例](https://cloudlogging.app.goo.gl/YH939WC5G5H56hbm6))。

ログはワークフロー別に絞り込めます:

| ワークフロー | フィルター | 例 |
|--------------|-------------- |------------------|
| API リクエスト | `jsonPayload.workflow="api_request"` | [例へのリンク](https://cloudlogging.app.goo.gl/KYHFRHAitHVnVFsL9) |
| ガードレール | `jsonPayload.workflow="guardrail_check"` | [例へのリンク](https://cloudlogging.app.goo.gl/A41vZPYJSM8RwdpP6) |
| Self-managed の延長 | `jsonPayload.workflow="create_sm_extension"` | [例へのリンク](https://cloudlogging.app.goo.gl/UsWNtG3HPS8XaHqu9) |

追加の属性も適用できます:

| 属性 | フィルター | 例 |
|--------------|-------------- |------------------|
| `subscription_id` | `jsonPayload.zuora_subscription_id="8a8aa0008aff6981018b0619305f4d1d"` | [例へのリンク](https://cloudlogging.app.goo.gl/JvfMNogyuA1HyGA59) |
| `salesforce_opportunity_id` | `jsonPayload.salesforce_opportunity_id="8a8aa0008aff6981018b0619305f4d1d"` | [例へのリンク](https://cloudlogging.app.goo.gl/LZTuShAukfHwAEU87) |

## Subscription Management 機能 {#subscription-management-features}

[Fulfillment section](/handbook/product/groups/fulfillment/direction/fulfillment_section/) 内の [subscription management グループ](/handbook/product/groups/fulfillment/direction/subscription_management/)が管理する機能のリストです。

### サブスクリプション更新と自動更新 {#subscription-renewal-and-auto-renewal}

顧客は、自動更新または手動更新を通じて GitLab.com または self-managed サブスクリプションを更新できます。デフォルトでは、サブスクリプションは自動更新に設定されており、有効期限日の UTC 真夜中に自動的に更新され、サービス中断はありません。請求アカウントに `Auto-Pay = Yes` がある場合、デフォルトの支払い方法を使用して支払いが処理されます。それ以外の場合は、請求書が生成され、顧客に送信されます。

自動更新の対象外、または自動更新を希望しない顧客は、[Customers Portal](https://customers.gitlab.com/)のサブスクリプションカードにある **Renew** ボタンをクリックして、手動でサブスクリプションを更新できます。

#### 自動更新の対象 {#auto-renewal-eligibility}

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
   1. `Account.PO Required = Yes` (顧客が GitLab に 「PO がなければ支払わない方針」、予約要件、事前請求があることを通知)。
   1. `Account.Portal Required = Yes` (顧客が GitLab に、請求書を手動で請求ポータルにアップロードする必要があり、非 PO、PO、契約、SOW を含むことを通知)。
   1. `Account.Support Hold = Yes` (アカウントが支払いコミットメントなしで 90 日を超えて延滞すると、顧客はサポート保留にされる)。
   1. `Account.Credit Hold = Yes` (任意の残高が不良債権に書き落とされた場合、顧客はクレジット保留にされる)

上記のユースケースに対して `Subscription.TurnOnAutoRenew__c` を `No` に設定する自動プロセス (Zuora Workflow) があります。

#### GitLab Docs (パブリック) {#gitlab-docs-public}

- [更新の準備](https://docs.gitlab.com/subscriptions/manage_subscription/#review-your-account)
- [サブスクリプションの更新](https://docs.gitlab.com/subscriptions/manage_subscription/#renew-subscription)
- [自動サブスクリプション更新](https://docs.gitlab.com/subscriptions/manage_subscription/#renew-automatically)
- [自動更新の FAQ](https://about.gitlab.com/pricing/faq-improved-billing-and-subscription-management/#auto-renewals)
- [Developer Relations Programs 更新ワークフロー](/handbook/marketing/developer-relations/programs/program-resources/#renewal)

#### 開発者ドキュメント {#developer-docs}

- [更新: UX スコアカード](https://gitlab.com/gitlab-org/gitlab-design/-/issues/2160)
- [ローカル環境で更新するための Zuora でのサブスクリプションの作成](https://gitlab.com/gitlab-org/customers-gitlab-com/-/blob/main/doc/zuora/zuora_tips_and_tricks.md#create-a-subscription)
- [Auto-Renew: カスタム自動更新機能](https://gitlab.com/gitlab-org/customers-gitlab-com/-/blob/main/doc/flows/custom_auto_renew/index.md)
- [Auto-Renew: 体験フローチャート](https://www.figma.com/file/4IAnGWRKIxIKqMLUDxWf1A/Autorenew-experience-flowchart?node-id=0%3A1&t=x31XThz7dVzhhIaK-0)
  - Figma ファイルを表示するには、@gitlab.com メールで Figma にログインする必要があります。サインインを求められたら、「Continue with Google」をクリックし、プロンプトが表示されたらアカウントを作成してください。
- [戦略プログラム更新のためのクーポンコード生成](https://gitlab.com/gitlab-org/customers-gitlab-com/-/blob/main/doc/community_programs/coupons.md#coupons)

#### 関連する用語 {#related-terminology}

- [QSR](https://docs.gitlab.com/subscriptions/quarterly_reconciliation/#quarterly-reconciliation)
- [年間トゥルーアップ](https://docs.gitlab.com/subscriptions/quarterly_reconciliation/#annual-true-up)
- [シート使用状況](https://docs.gitlab.com/subscriptions/manage_users_and_seats/#billable-users)
- [未払いシート](https://docs.gitlab.com/subscriptions/manage_users_and_seats/#users-over-subscription-limit)

#### 四半期サブスクリプション精算 (QSR) {#quarterly-subscription-reconciliation-qsr}

[パブリック QSR ドキュメント](https://docs.gitlab.com/subscriptions/quarterly_reconciliation/)を参照してください。

##### QSR の対象 {#qsr-eligibility}

[文書化された対象ケース](https://docs.gitlab.com/subscriptions/quarterly_reconciliation/#eligibility)に加えて、Zuora で次の設定のいずれかをアカウントが持つサブスクリプションは QSR から除外します:

1. `Account.PO Required = Yes` (顧客が GitLab に 「PO がなければ支払わない方針」、予約要件、事前請求があることを通知)。
2. `Account.Portal Required = Yes` (顧客が GitLab に、請求書を手動で請求ポータルにアップロードする必要があり、非 PO、PO、契約、SOW を含むことを通知)。
3. `Account.Support Hold = Yes` (アカウントが支払いコミットメントなしで 90 日を超えて延滞すると、顧客はサポート保留にされる)。
4. `Account.Credit Hold = Yes` (任意の残高が不良債権に書き落とされた場合、顧客はクレジット保留にされる)

上記のユースケースに対して `Subscription.TurnOnSeatReconciliation__c` を No に設定する自動プロセス (Zuora Workflow) があります。

##### QSR プロセス {#qsr-process}

1. 新しいサブスクリプションが購入されるか、既存のサブスクリプションが更新されると、Quarterly Reconciliation にオプトインされます。
   1. `Subscription.TurnOnSeatReconciliation__c` 変数が Yes に設定されます。
   2. `Subscription.ContractSeatReconciliation__c` 変数が Yes に設定されます。
2. 使用状況データは、Cloud Licensing (SM/Dedicated) または名前空間 API (gitlab.com) を通じて毎日収集されます

その他の詳細は [QSR の請求と支払いのドキュメント](https://docs.gitlab.com/subscriptions/quarterly_reconciliation/#invoicing-and-payment)で確認できます。

**個別自動リコンシリエーションの仕組み:**

この機能は Customers Portal に存在し、UTC 真夜中に毎日実行されます。Self-Managed サブスクリプションの場合、インスタンスからシート使用状況データを収集するのに十分な時間があるように、このプロセスは 6 日遅延します。

1. `TurnOnSeatReconciliation__c` が Yes に等しいすべてのサブスクリプションを見つけます。
2. 前の四半期の最大ユーザー数を確認することで、オーバーエージを計算します。
3. シートのオーバーエージを保存し、Zuora に対して請求書金額をプレビューおよび保存します。
   1. 正確なオーバーエージ数量と支払いが見込まれる請求書金額を含むメールを顧客に送信 (件名: "Important information about your GitLab subscription")。
   2. このメールを SFDC にコピーし、Contact Activity の下に表示。
4. オープンな SFDC Opportunity を作成し、その OpportunityId を Reconciliation レコードに保存します。
5. 7 日後、Zuora に修正を作成して、実効価格で追加シートを追加します。新しいシート数は四半期の終わりに有効になり、サブスクリプション期間の終わりまで続きます (オーバーエージに対する過去の遡及課金はありません)。
   1. Amendment Name は `Automated seat reconciliation` に設定されます。
6. 請求書を生成し、支払いを適用します。
   1. 支払いが失敗した場合、または支払い方法が登録されていない場合、リコンシリエーションは発生しません。メールが送信されます (件名: "Your GitLab subscription failed to reconcile")。このメールを SFDC にコピーし、Contact Activity の下に表示。
   2. Sales Assisted 顧客の場合、請求書が生成され、支払いのために送信されます (Zuora から)。アカウント固有の支払い条件が適用されます。
7. Zuora からの領収書付きのメールを送信 (スケジュール済み Zuora Workflow を介して)。
8. リコンシリエーションが発生したことを示すメールを送信し、プロビジョニングの指示を含めます (件名: "Your GitLab subscription has been reconciled")。このメールは SFDC にコピーされ、Contact Activity の下に表示されます。
9. 追加シートがプロビジョニングされます。
   1. SaaS 顧客の場合、追加シートを即時にプロビジョニング。
   2. Self-managed 顧客の場合、次のインスタンス同期 (24 時間) で追加シートをプロビジョニング、または顧客がインスタンス内から更新をトリガーできます。
10. SFDC Opportunity を Closed Won に更新し、関連する SFDC Quote および Quote オブジェクトを作成します。
11. 何らかの理由でリコンシリエーションが失敗した場合、SFDC Opportunity はオープンのままになります。

##### QSR と SFDC Opportunity {#qsr-and-sfdc-opportunities}

2023-05-22 以降、QSR 用に作成された SFDC Opportunities には 2 つの新しいフィールドが追加されました: `QSR Status` と `QSR Notes`。これらのフィールドに表示されることが予想される内容と、Sales Reps 向けの推奨アクションのまとめを以下に示します。

| QSR ステータス | QSR Notes | ステージ | 推奨アクション | 追加メモ |
| :-------- | :-------- |:-------- |:-------- |:-------- |
| Pending | Reconciliation レコードリンク (例: cust....gitlab.com/admin/r../12345) | 6-Awaiting Signature | アクション不要 | QSR は 7 日以内に自動でリコンシリエーションされます。 |
| Processed | Reconciliation レコードリンク (例: cust....gitlab.com/admin/r../12345) | Closed Won | アクション不要 |  |
| Failed | Failed to amend subscription/ amount does not match latest preview | 6-Awaiting Signature | AE が Closed Lost に設定。 | QSR がすでに作成された後で顧客が追加シートを購入したため、QSR は不要になりました。 |
| Failed | multiple_rate_plans | 6-Awaiting Signature | AE が顧客に連絡し、追加シートを購入する必要があることを通知。 | 顧客がサブスクリプションに複数のレートプランを持っているため、QSR は処理できません。 |
| Failed | - card was declined<br/>- card does not support this type of purchase<br/>- card number is incorrect<br/>- expiration year is invalid<br/>- expiration month is invalid<br/>- has insufficient funds, or any other payment_declined/ transaction declined error. | 6-Awaiting Signature | 任意: AE が顧客に連絡。 | 顧客は、カードが拒否されたことの通知と、解決するために必要な手順を受け取ります。顧客が支払い方法を更新すると、QSR が再処理されます。 |

##### FAQ {#faqs}

1. **QSR のステータスはどこで確認できますか？**
   1. [Customers Portal Admin](https://customers.gitlab.com/admin)にログインし、[Reconciliations](https://customers.gitlab.com/admin/reconciliation) セクションに移動します。
   2. フィルターボックスにサブスクリプション名 (例: "A-S00039268") を入力し、検索します。
   3. これにより、そのサブスクリプションのすべてのリコンシリエーションレコードが表示され、それぞれのステータスを確認できます。
2. **顧客は QSR に登録されていますが、リコンシリエーションが実行されていません。**。
   1. 拒否された支払いを含む様々な理由で QSR がスキップされた可能性があります。QSR のステータスを調べるには、ポイント `1` の指示に従ってください。
3. **顧客は QSR に登録されていますが、`reconciliations_disabled` 理由コードでリコンシリエーションがスキップされました。**
   1. 顧客の Self-Managed インスタンスは Cloud License でアクティベートされている必要があります。これにより、シート使用状況の収集が有効になり、リコンシリエーションを実行できるようになります。
4. **顧客は EOA または割引されたシートあたり価格の別のプラン上にいます。彼らの QSR 修正は割引価格/実効価格に基づくのか、それともリスト価格に基づくのか？**
   1. 追加シートの QSR Amendment は実効価格に基づきます。
5. **QSR は割引価格で 25 シートが最大という EOA ビジネスルールを尊重しますか？**
   1. ある意味では - 25 シートを超える EOA タイプのサブスクリプションを修正しようとした場合、QSR をスキップします。このルールが原因でエラーになったすべての QSR のリストを見るには、[こちらをクリック](https://customers.gitlab.com/admin/reconciliation?&f%5Berror_message%5D%5B98073%5D%5Bo%5D=like&f%5Berror_message%5D%5B98073%5D%5Bv%5D=MaxAdditionalSeatsExceededError&model_name=reconciliation&sort=reconcile_on&sort_reverse=true)してください。

##### 追加ドキュメント {#additional-documentation}

- [顧客向けドキュメント](https://docs.gitlab.com/subscriptions/quarterly_reconciliation/)
- [QSR 返金とエスカレーションに関する Finance チームのドキュメント](https://gitlab.com/gitlab-com/Finance-Division/finance/-/wikis/WIP%20Quarterly%20Subscription%20Reconciliation%20Escalation#quarterly-subscription-reconciliation-process-post-billing)
- [プロセス図解](https://gitlab.com/groups/gitlab-org/-/epics/5560#illustration)

#### サブスクリプション表示 {#subscription-display}

1. セールス支援サブスクリプションの場合、単一のサブスクリプション期間に複数のプラン (例: premium、ultimate) があるケースがあり得ます。これは、サブスクリプションがあるプランで販売され、期間途中で別のプランに変更されたためです。新しいサブスクリプションカードのデザインでは、このような場合、サブスクリプションの最新バージョンのみが表示され、古いプランの詳細は表示されません。新プランの開始日は、新プランが有効になった日から始まるように正しく表示される必要があります。詳細はこの [Issue](https://gitlab.com/gitlab-org/customers-gitlab-com/-/issues/6103) (内部)を参照してください。

## CustomersDot 管理パネル {#customersdot-admin-panel}

ターゲットオーディエンスは内部の GitLab チームで、[Customers Portal](https://customers.gitlab.com)の [管理パネル](https://customers.gitlab.com/admin/)をカバーしています。顧客またはサブスクリプションマネージャーは、ポータルの使用に関するヘルプは GitLab ユーザードキュメントの [Customers](https://docs.gitlab.com/subscriptions/) セクションを、ユーザーのカウント方法などのサブスクリプションに関する質問は [ライセンス FAQ](https://about.gitlab.com/pricing/licensing-faq/)を参照してください。

### ログイン {#log-in}

アクセスを得るには [customers.gitlab.com/admin/](https://customers.gitlab.com/admin/sign_in)のアクセスリクエストを提出してください ([アクセスリクエスト例](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/14359))。

アクセスが付与されたら、[customers.gitlab.com/admin/](https://customers.gitlab.com/admin/sign_in)に移動して「Sign in with Okta」をクリックするか、Okta App に移動して Customers Portal App を探してください。

### 検索 {#searching}

管理パネル検索を使用する際は、結果は一度に 1 フィールドのみを検索することに基づいていることに注意してください。たとえば、人のフルネームを入力しても、システムは姓と名を同時に検索せず、いずれかのみを検索するため、結果が得られない可能性があります。

メールアドレス、部分的なメールアドレス (例: 会社のドメイン)、または会社名で検索することをお勧めします。名前で検索する場合は、姓 *または* 名のみを入力してください。

最初の検索の後、検索結果をさらに絞り込むことができます。

検索結果で、サブスクリプションが関連付けられているアカウントには、名前の横に「Subscription」バッジが付きます。

### 顧客 {#customers}

#### 顧客の検索 {#search-for-a-customer}

1. 管理パネルで `Customers` に移動します。
1. 空のテキストボックスに検索する顧客の詳細を入力します (例: 顧客のメールアドレスやドメイン)。
1. `Refresh` をクリックするか、キーボードで `Enter` を押して検索を開始します。
1. `Add filter` をクリックして現在の検索を絞り込むことができます。
1. 適用する追加のフィルターを 1 つ以上選択します。
1. もう一度 `Refresh` をクリックします。

#### 顧客の詳細を更新 {#update-customer-details}

**注:** 更新された顧客の詳細は、一致する Zuora BillTo/SoldTo コンタクトに同期されます。

1. `Customers` セクションで ✎ アイコンをクリックして正しい顧客を選択します。
1. `First name`、`Last name`、`Email` を更新できます。
1. `Save` をクリックします。

顧客のログインを無効化

顧客の住所やその他の詳細を更新したい場合は、顧客をインパーソネートする必要があります。

1. 目的の顧客の詳細ビューで、`Impersonate` をクリックします。
1. これでユーザーをインパーソネートするためにリダイレクトされます。
1. [詳細の更新に関するユーザードキュメント](https://docs.gitlab.com/subscriptions/#change-your-personal-details)に従ってください。

#### 顧客のログインを無効化 {#deactivate-login-for-a-customer}

1. `Customers` セクションで ✎ アイコンをクリックして正しい顧客を選択します。
1. `Login activated` のチェックを外します
1. `Save` をクリックします。

顧客は Customers Portal アカウントへのアクセスがブロックされました。

**注:** これは GitLab.com アカウントへのアクセスには影響しません。

#### 顧客のすべての Zuora サブスクリプションを確認 {#see-all-zuora-subscriptions-of-a-customer}

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

#### 顧客アカウント変更の履歴を表示 {#view-history-of-customer-account-changes}

1. 目的の顧客の詳細ビューで、`History` をクリックします。
1. 顧客レコードに発生したすべてのイベントとログのリストが表示されます。

**注:** ログ行で、ユーザーが `admin:xyz@gitlab.com` の場合、それは管理パネル経由で顧客レコードへの変更があったことを示します。

#### ワンタイムサインイン URL {#one-time-sign-in-url}

`one-time sign in url` を使用すると、顧客は Customers Portal アカウントに直接サインインできます。これは、GitLab.com アカウントを Customers Portal アカウントにリンクしている、またはしていない顧客に有効です。

1. `Customers` セクションで ℹ️ アイコンをクリックして正しい顧客を選択します。
1. 下にスクロールして、`One time sign in url` の下のリンクをコピーします。
1. 承認された顧客とリンクを共有します。

**注:** 新しいワンタイムサインインリンクは、前のリンクが使用された後に生成されます。`one-time sign in url` は、顧客を GitLab.com アカウントにログインさせるのではなく、Customers Portal アカウントにのみログインさせます。

#### GitLab グループ {#gitlab-groups}

顧客が接続された GitLab.com ユーザーアカウントを持っている場合、現在のプランを含む関連情報を伴う名前空間のリストが表示されます。

**注:** これは、顧客の `access_token` が有効である限りのみ機能します。

名前空間のリスト:

- 個人の名前空間
- ユーザーが `Owner` であるトップレベルグループ名前空間

### 請求アカウント {#billing-accounts}

請求アカウントは、主に組織に接続されている請求エンティティの表現です。請求アカウントには Zuora、SFDC、重要な企業情報、すべての請求アカウントメンバーシップに関連するデータがあります。

#### 請求アカウントの検索 {#search-for-a-billing-account}

1. 管理パネルで `Billing accounts` に移動します。
1. 空のテキストボックスに検索する請求アカウントの詳細を入力します (例: 名前)。
1. `Refresh` をクリックするか、キーボードで `Enter` を押して検索を開始します。
1. `Add filter` をクリックして現在の検索を絞り込むことができます。
1. 適用する追加のフィルターを 1 つ以上選択します。
1. もう一度 `Refresh` をクリックします。

#### 請求アカウント変更の履歴を表示 {#view-history-of-billing-account-changes}

1. 目的の請求アカウントの詳細ビューで、`History` をクリックします。
1. 請求アカウントに発生したすべてのイベントとログのリストが表示されます。

#### 請求アカウントの Bill_To と Sold_To コンタクトを確認 {#see-the-bill_to-and-sold_to-contact-of-a-billing-account}

1. 目的の請求アカウントの詳細ビューに移動します。
1. ℹ️ `Show` の下に、`Bill_To` と `Sold_To` コンタクトが表示されます。
1. 詳細情報を確認したい場合は、目的のコンタクトをクリックします。

**注:** 請求アカウントには 1 つの `Bill_To` と 1 つの `Sold_To` コンタクトしか関連付けられません。同じコンタクトにできます。

#### 請求アカウントのすべての請求書を確認 {#see-all-invoices-of-a-billing-account}

1. 目的の請求アカウントの詳細ビューで、`List Invoices` をクリックします。
1. その請求アカウントのすべての請求書のリストが表示されます。含まれるもの:
   - ID
   - 日付
   - 金額
   - 支払いステータス
   - 残高
   - 期日

**注:** このビューは `read only` 権限を持つ CDot 管理者もアクセスできます。

#### 請求アカウントに登録されているすべての支払い方法を確認 {#see-all-payment-methods-on-file-for-a-billing-account}

1. 目的の請求アカウントの詳細ビューで、`List Payment Methods` をクリックします。
1. その請求アカウントに登録されているすべての支払い方法のリストが表示されます。含まれるもの:
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

#### 請求アカウントのすべての Zuora サブスクリプションを確認 {#see-all-zuora-subscriptions-of-a-billing-account}

1. 目的の請求アカウントの詳細ビューで、`Zuora Subscriptions` をクリックします。
1. その請求アカウントのすべての Zuora サブスクリプションのリストが表示されます。含まれるもの:
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

### 請求アカウントの連絡先 {#billing-account-contacts}

請求アカウントの連絡先は、請求書や通知などを送信するために使用される請求アカウントのコンタクト詳細を表します。位置ベースのデータなどの他の情報は、税務関連の計算に使用されます。コンタクトは `Bill_To` または `Sold_To` コンタクト (または両方同じであれば同様) になることができます。

請求アカウントには 1 つの `Bill_To` と 1 つの `Sold_To` コンタクトしか持てません。同じ連絡先情報 (例: メールアドレス) を複数の請求アカウントで使用することは可能です。

#### 請求アカウントの連絡先の検索 {#search-for-a-billing-account-contact}

1. 管理パネルで `Billing account contacts` に移動します。
1. 空のテキストボックスに検索する請求アカウントの連絡先の詳細を入力します (例: 名前、メール)。
1. `Refresh` をクリックするか、キーボードで `Enter` を押して検索を開始します。
1. `Add filter` をクリックして現在の検索を絞り込むことができます。
1. 適用する追加のフィルターを 1 つ以上選択します。
1. もう一度 `Refresh` をクリックします。

#### 既存の請求アカウントの連絡先の更新 {#update-an-existing-billing-account-contact}

1. `Billing account contacts` セクションに移動します。
1. 必要な請求アカウントの連絡先を検索します (例: `email address` を使用)。
1. 適切な請求アカウントの連絡先を選択して `Edit` をクリックします。
1. 以下を更新するかどうかを選択できます:
   - First name
   - Last name
   - Work email
   - Address 1
   - Address 2
   - Country
   - State
   - City
   - Postal code
1. `Save` をクリックします。
1. 変更は対応する Zuora コンタクトに即座に同期されます。

#### 新しい請求アカウントの連絡先を CustomersDot に追加 {#add-new-billing-account-contact-to-customersdot}

Zuora コンタクトが CustomersDot に利用できない場合でも、Zuora に存在する場合、管理パネルを通じてコンタクトを追加できます。

1. `Billing account contacts` セクションに移動します。
1. `+ Add New` をクリックします。
1. `Zuora contact ID` を提供します。
1. `Save` をクリックします。

これにより、Zuora と同期した CustomersDot のコンタクトレコードが作成されます。これは、作成されたコンタクトに Zuora からすべての請求アカウントの連絡先属性を直接割り当てます。

**注:** コンタクトが CustomersDot に `Billing account` が付属していない可能性があります (例: Customers Portal に存在しない場合)。

#### 請求アカウントの連絡先変更の履歴を表示 {#view-history-of-billing-account-contact-changes}

1. 目的の請求アカウントの連絡先の詳細ビューで、`History` をクリックします。
1. 請求アカウントの連絡先に発生したすべてのイベントとログのリストが表示されます。

### 請求アカウントのメンバーシップ {#billing-acccount-memberships}

請求アカウントのメンバーシップは、顧客と請求アカウント間の関係を定義します。アクティブなサブスクリプションを伴う請求アカウントのメンバーシップがあれば、顧客は Customers Portal アカウントでサブスクリプションを表示できます。

現在、顧客は 1 つの請求アカウントのメンバーシップしか持てません。

#### 新しい請求アカウントのメンバーシップを追加 {#add-a-new-billing-account-membership}

顧客と請求アカウントの間に新しい請求アカウントのメンバーシップを追加すると、顧客は [サブスクリプション管理コンタクト](/handbook/support/license-and-renewals/workflows/customersdot/associating_purchases)になります。

1. `Billing account memberships` セクションに移動します。
1. `+ Add new` アクションを選択します。
1. 新しいサブスクリプション管理リクエストに適切な顧客と CustomersDot 請求アカウントを選択します。
1. `Save` をクリックします。

**注:** 請求アカウントのリストには `Zuora account name` と `Zuora account ID (in brackets)` を表示します。

#### 顧客の請求アカウントのメンバーシップを削除 {#delete-the-billing-account-membership-of-a-customer}

1. `Billing account memberships` セクションに移動します。
1. 目的の請求アカウントのメンバーシップを開き、`x Delete` アクションを選択します。
1. 正しい請求アカウントのメンバーシップが選択されたことを確認します。
1. `Yes, I'm sure` を選択します。
1. `Billing account membership successfully deleted` 成功通知を確認します。

### トライアル {#trials}

#### トライアル有効期限の確認、変更、または延長 {#check-change-or-extend-trial-expiry-date}

1. トライアルを開始した顧客を見つけます。
1. `GitLab Groups` をクリックします。
1. トライアルが期限切れで延長する必要がある場合は、`Renew Trial` ボタンをクリックします。
1. 必要に応じてトライアル日を変更し、`Update` をクリックします。**警告:** 日付を UTC タイムゾーンで今日より前の日付に変更しないでください。

### ライセンス {#licenses}

1. `Licenses` セクションに移動します。
1. このページから、次のことができます:
   - 最も最近生成されたライセンスのリストを表示
   - 名前でライセンスを検索
1. 右にスクロールして ℹ️ アイコンをクリックすると、ライセンスの詳細が表示されます。

ライセンスの詳細には以下の情報が含まれます:

- タイプ: クラウド、オフラインクラウド、または従来型ライセンス。
- トライアル: トライアルライセンスかどうかを表示。
- 名前
- 会社
- メール
- 発行日、開始日、有効期限
- ユーザー数
- Zuora サブスクリプション名とリンク
- GitLab プラン

#### ライセンス検索による顧客の使用状況データの検索 {#find-usage-data-for-a-customer-by-license-lookup}

以下のプロセスにより、特定のライセンスがインストールされたすべてのサーバーの Service Ping 使用状況データを表示できます。

1. `Licenses` セクションに移動します。
1. 検索ボックスを使用して顧客を検索します (Salesforce にあるとおりに名前を検索していることを確認)。
1. その顧客のすべてのライセンスが返されます。発行日と有効期限を使用して、どれがアクティブなライセンスかを判断します。
1. 右にスクロールして ℹ️ アイコンをクリックすると、ライセンスの詳細が表示されます
1. 画面の下部にある `Hostnames with this license` の下の `Lookup hostnames` をクリックします。これにより version.gitlab.com が開きます

   - version.gitlab.com はまだ Okta をサポートしていないため、GitLab アカウントでログインします。

1. 使用状況データを返し、このライセンスがインストールされているサーバーごとに 1 行が表示されます。`Usage Ping Last Checked On` カラムを見て、どのエントリに最近の使用状況 ping データが含まれているかを判断します。
1. 使用状況 ping の詳細をロードするには、サーバー名をクリックします。

この [ビデオチュートリアル](https://gitlab.edcast.com/insights/card-e7589a95-0229-4d20-9c54-ee84750020df)は、特定の顧客のライセンスの詳細を見つける例を説明しています。

### ライセンスとシートの紐付け {#license-seat-links}

CustomersDot の `License seat links` ページでは、[Cloud Licensing](https://about.gitlab.com/pricing/licensing-faq/cloud-licensing/) または [Offline Cloud Licensing](https://about.gitlab.com/pricing/licensing-faq/cloud-licensing/#offline-cloud-licensing) 上の Self Managed 顧客の現在の使用状況とバージョンデータを可視化できます。データ同期ごとに 1 レコードが作成され、使用状況の経時的な変化や顧客が特定のシート数を超えた日付を示すのに役立つポイントインタイムデータを表します。Cloud License 対応顧客の場合、[License Sync](https://docs.gitlab.com/subscriptions/self_managed/#subscription-data-synchronization)の一部として 1 日に 1 回レコードが作成されます。Offline License 対応顧客の場合、顧客が使用状況データを手動で GitLab に送信するたびにレコードが作成され、月に 1 回の頻度で要求されます。

このページでは、`Company`、`Subscription name`、または `Hostname` で検索して、特定の顧客のすべてのライセンス使用状況を確認できます。各同期で次のメトリクスがレポートされます:

1. `License user count` - 顧客のサブスクリプションの一部として購入されたシート数
1. `Billlable user count` - 同期時のアクティブで請求可能なユーザーの現在の数
1. `Max historical user count` - 現在のサブスクリプション期間中に記録された請求可能ユーザーの最高値
1. `GitLab version` - 同期時の顧客が使用している GitLab のバージョン

### 注文 {#orders}

1. `Orders` セクションに移動します。
1. 検索ボックスを使用して注文を検索します。検索には以下のパラメータを使用できます:
   - 注文 ID
   - 請求アカウント
   - サブスクリプション名
   - Gl 名前空間
   - Gl 名前空間名
1. 右の ℹ️ アイコンをクリックすると、注文のすべての詳細が表示されます。
1. 右の 📕 アイコンをクリックすると、注文の履歴が表示されます。

### リコンシリエーション {#reconciliations}

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

### CustomersDot 管理パネルの Sales ユースケース {#sales-use-cases-of-customersdot-admin-panel}

#### 顧客/見込み客に対して発行されたすべてのライセンスを検索 {#lookup-all-issued-licenses-for-a-customerprospect}

これは、誰が、何回、いつ、何人のユーザー向けにトライアルをリクエストしたかを理解できます。[セルフサービスでリクエストされたトライアル](https://about.gitlab.com/free-trial/)は簡単にレポートできません。

#### version.gitlab.com でライセンスをクロスリファレンス {#cross-reference-a-license-with-versiongitlabcom}

サーバー名が不明な場合に、使用状況 ping データを検索する唯一の方法です。たとえば、顧客 acmeinc.com が acmeinc.ninja を使っている場合。これを見つける直接的な方法はありません。

#### ライセンスの配信に使用されたメールアドレスをすばやく見つける {#quickly-find-which-email-address-was-used-to-deliver-a-license}

CustomersDot がライセンス情報の SSOT であるため、さらなるトラブルシューティングのために、誰がライセンスを受け取ったかを知ることが重要です。

##### 参考資料 {#references}

- [トラブルシューティング: ライセンス](/handbook/business-technology/enterprise-applications/entapps-crm/quote-to-cash/troubleshooting/#licenses)
- [ライセンス所有者の変更 (Support に問い合わせ)](/handbook/business-technology/enterprise-applications/entapps-crm/quote-to-cash/troubleshooting/#how-do-i-change-the-license-owner-for-self-managed-instances-with-licensegitlab)

## Fulfillment Support Admin ツール {#fulfillment-support-admin-tooling}

*最終更新: 2025 年 5 月 21 日*

### 概要 {#overview}

このドキュメントでは、[mechanizer](https://gitlab.com/gitlab-com/support/toolbox/mechanizer)から CustomersDot 管理ダッシュボードに移行された Support Admin 機能について説明します。これらのツールは、Support Licensing & Renewals (L&R) チームに不可欠な機能を提供します。

**現在のステータス**: 移行はほぼ完了しており、最後の機能 ([まもなく期限切れの SaaS サブスクリプションを延長](https://gitlab.com/groups/gitlab-org/-/epics/17745))を本番に実装中です。

- フェーズ移行アプローチの詳細については、[Epic #14169](https://gitlab.com/groups/gitlab-org/-/epics/14169)を参照してください

### アクセス要件 {#access-requirements}

Support Admin 機能は現在、L&R Support チームの選ばれたメンバーに限定されており、アクセスを拡大する計画があります。

#### 必要な権限 {#required-permissions}

これらの機能にアクセスするには、次の Google グループの一員である必要があります:

- **本番環境**: `okta-cdot-prod-support-admins`
- **ステージング環境**: `okta-cdot-stg-support-admins`

#### アクセスのリクエスト方法 {#how-to-request-access}

1. [アクセスリクエスト](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?description_template=role_support-CDot-full-access-request-template)を提出します
2. テンプレート `role_support-CDot-full-access-request-template` を選択 (上記のリンクが自動的にテンプレートを適用します)
3. Support チームマネージャーから承認を取得
4. Fulfillment チームマネージャー (`@jameslopez` / `@rhardarson` / `@dzubova`) から承認を取得
5. 本番へのアクセスには、`okta-cdot-stg-support-admins` Google グループに自分を追加してください。ステージングへのアクセスには `okta-cdot-prod-support-admins` を追加してください。

**注**: Support ロールでは、管理者は SaaS トライアルの編集と延長、self-managed の緊急ライセンスの作成、以下のセクションにリストされている SaaS 有料名前空間に対するさまざまなコントロールを実行するアクセスを取得します。
Support 管理機能を使用するために、顧客とライセンスの書き込みアクセスは必要ありません。管理者は他のリソースへの読み取り専用アクセスを既定で取得します。

### 機能ナビゲーション {#feature-navigation}

すべての Support Admin 機能は、CustomersDot 管理インターフェースの **Support** メニューを通じてアクセスできます:

- 本番: https://customers.gitlab.com/admins/sign_in
- ステージング: https://customers.staging.gitlab.com/admins/sign_in

### 利用可能な機能 {#available-features}

#### 1. トライアル管理 (SaaS) {#1-trial-management-saas}

場所: `Support` → `Trial changes (SaaS)`

この機能は、.com トライアルの Mechanizer の UpdateGitlabplan 機能を置き換え、以下をサポートします:

1. アクティブ/期限切れトライアルのプランタイプと有効期限の編集
2. アクティブなトライアルプランのキャンセル

##### SaaS トライアルを編集 {#edit-a-saas-trial}

1. 鉛筆アイコンをクリックしてトライアルの編集ビューを開きます
2. トライアル終了日を変更します (該当する場合)
3. ドロップダウンリストから別のトライアルタイプを選択します (該当する場合)
4. Zendesk チケットリンクを入力します
5. 'Save' をクリックします

##### SaaS トライアルをキャンセル {#cancel-a-saas-trial}

1. 進入禁止アイコンをクリックしてトライアルのキャンセルビューを開きます
2. Zendesk チケットリンクを入力します
3. 'Confirm' をクリックします

#### 2. Self-Managed トライアルライセンス {#2-self-managed-trial-licenses}

場所: `Support` → `Trials for SM`

この機能は SM トライアルの Mechanizer の Emergency license 機能を置き換えます。

##### Self-Managed の従来型トライアルライセンスを生成 {#generate-a-self-managed-legacy-trial-license}

1. `Add new License` タブをクリックします
2. 必要な詳細を入力します:
    - ユーザーメール
    - ユーザー数
    - 開始日
    - 終了日
    - Zendesk チケットリンク
3. 'Save' をクリックします
4. 従来型ライセンスを含むメールが提供されたメールアドレスに送信されます

#### 3. 名前空間コントロール {#3-namespace-controls}

場所: `Support` → `Namespace controls (SaaS)`

このセクションでは、さまざまな名前空間管理機能を提供します:

##### 3.1 追加 CI 分の設定 {#31-set-extra-ci-minutes}

**目的**: GitLab 名前空間に特定の数の追加の共有ランナー CI 分を設定する

**重要**: 入力された値は新しい合計値となり、既存の値に追加されるわけではありません

**手順:**

1. `Set extra CI minutes` タブを選択します
2. 名前空間 ID またはパスを入力します
3. 追加分の新しい合計を入力します
4. Zendesk チケットリンクを入力します
5. 'Submit' をクリックします

##### 3.2 追加ストレージの設定 {#32-set-additional-storage}

**目的**: GitLab 名前空間に追加のストレージ容量を設定する

**手順:**

1. `Set additional storage` タブを選択します
2. 名前空間 ID またはパスを入力します
3. 追加ストレージを MiB 単位で入力します
4. Zendesk チケットリンクを入力します
5. 'Submit' をクリックします

##### 3.3 サブスクリプションのクリア {#33-clear-subscription}

**目的**: サブスクリプションを名前空間からリンク解除し、名前空間を Free ティアにダウングレードする

**手順:**

1. `Clear subscription` タブを選択します
2. Zuora Subscription ID または名前を入力します
3. Zendesk チケットリンクを入力します
4. 'Submit' をクリックします

##### 3.4 強制的に再関連付け {#34-force-re-associate}

**目的**: 別の名前空間とサブスクリプションを再関連付ける (前の名前空間は Free ティアにダウングレードされます)

**手順:**

1. `Force re-associate` タブを選択します
2. 対象の名前空間 ID またはパスを入力します
3. Zuora Subscription ID または名前を入力します
4. Zendesk チケットリンクを入力します
5. 'Submit' をクリックします

##### 3.5 最大シート数のリセット {#35-reset-max-seats}

**目的**: 名前空間の最大シート数をリセットする

**手順:**

1. `Reset max seats` タブを選択します
2. 名前空間 ID またはパスを入力します
3. 新しい最大シート数を入力します
4. Zendesk チケットリンクを入力します
5. 'Submit' をクリックします

##### 3.6 サブスクリプションの延長 {#36-extend-subscription}

**目的**: まもなく期限切れになるサブスクリプションを一時的に延長する

**現在の制限**: 名前空間がトライアルに関連付けられている場合、一時延長をプロビジョニングするためにトライアルを延長するようにリダイレクトされます

**将来の開発**: 以前のトライアルがない名前空間のサブスクリプション延長のサポートは [Issue #12874](https://gitlab.com/gitlab-org/customers-gitlab-com/-/issues/12874)で実装中です

### 将来の改善 / バグ修正 {#future-improvements--bug-fixes}

将来の改善またはバグ修正については、[CustomersDot プロジェクト](https://gitlab.com/gitlab-org/customers-gitlab-com/-/issues/new)で Issue を作成し、適切なチームをタグ付けしてください:

1. トライアル、ライセンス、名前空間ツール > Provision
2. 消耗品と最大シートツール > Utilization
3. 請求アカウント/連絡先と QSR ツール > Subscription management

## Fulfillment に影響するバグの対応計画 {#action-plan-for-fulfillment-impacting-bugs}

プロビジョニング、購入、請求、サブスクリプションデータなどを含む、Fulfillment に影響するバグが発見された場合、以下を実行してください:

**Issue の報告**

1. バグについて知られていることを概説した新しい [Fulfillment Meta バグ受付 Issue](https://gitlab.com/gitlab-org/fulfillment-meta/-/issues/new)を開きます (bug_intake テンプレートを選択)。
   1. `@fulfillment-group/leadership/fulfillment-pm` グループをメンションして [Fulfillment Product Management](/handbook/engineering/development/fulfillment/)をタグ付けします。
   1. レビューとアクションのために `ofernandez2` に Issue を割り当てます。
1. 広い認識とレビューのために、Slack の #s_fulfillment と #business-fulfillment-sync に Issue へのリンクを投稿します。

**適切な DRI への通知**

バグのインパクトに応じて、以下の個人を Issue にループする必要があります:

1. 請求と収益に影響する問題: `Sarah McCauley - Director, Billing & AR`
1. 影響を受けるサブスクリプションの特定および/または Zuora ソリューションの自動化: `Jessica Salcido - Finance Systems Administrator`
1. ブッキングへの影響、および/または Salesforce ソリューションのニーズの評価と調整: `Jesse Rabbits - Sr. Manager, Deal Desk`
1. 顧客への連絡が必要な場合、PM が連携する相手: `Lyle Kozloff - Director of Support, Global Readiness`
1. 製品マネタイゼーションの決定が必要な場合: `Justin Farris - Sr. Dir, Product Monetization`

## Fulfillment デバッグと FAQ {#fulfillment-debugging-and-faq}

### ライセンスアクティベーションの問題 {#license-activation-issues}

**トゥルーアップまたはシートオーバーエージの不一致でライセンスがアクティベートされない**

1. 14.3+ の顧客では、10% のシートオーバーエージがあってもライセンスのアクティベーションを許可しています [Issue #333851](https://gitlab.com/gitlab-org/gitlab/-/issues/333851)。詳細については [こちら](https://gitlab.com/gitlab-org/gitlab/-/blob/master/doc/administration/license.md#users-exceed-license-limit-upon-renewal)を確認し、関連する [MR #67507](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/67507) および [MR #67508](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/67508)を参照してください
1. Cloud Licensing では、シート数の不一致でアクティベーションをブロックしません。顧客が現在のアクティブユーザーよりも少ないシートを持つライセンスを適用する場合、次の QSR またはトゥルーアップイベントでリコンシリエーションします。

**Cloud Licensing をアクティベートするために GitLab インスタンスはどのような接続を必要としますか？**

インスタンスはアクティベートするために customers.gitlab.com への 443 ポート接続が必要です。これは、[こちらのドキュメント](https://docs.gitlab.com/subscriptions/self_managed/#subscription-data-synchronization)で概説されているように、ライセンス同期にも使用されます。

### データ収集 {#data-collection}

**顧客はテレメトリやライセンス同期データの共有をオプトアウトできますか？**

Cloud License で送信されるデータは [このドキュメント](https://docs.gitlab.com/subscriptions/self_managed/#license-sync)で説明されています。要するに、集計されたユーザー数と一部のライセンスメタデータです。このデータは Cloud Licensing に必要です。ライセンスを管理し、将来の更新をサポートし、アドオンをサポートし、シートのリコンシリエーションをサポートする私たちのニーズをサポートするために必要なデータのみを含むように意図されています。

[metrics.gitlab.com](https://metrics.gitlab.com/)で `subscription` イベントを検索することで、カウントを生成するサンプルコードを見ることができます。

**Operational と Optional Data の違いは何ですか？**

私たちの [サービス使用状況データ](/handbook/legal/privacy/customer-product-usage-information/)は、主にインスタンスからの集計カウント (例: Issue や MR の数) であり、週次 (またはそれ以下) の頻度で GitLab に送信されます。

1. Operational Data: これは、サブスクリプションアカウント/ライセンスに結びついたデータです。このデータの目標は、GitLab Customer Success と Sales チームが顧客が GitLab をよりよく採用し、彼らの投資から価値を得るのを支援するための集計カウントを取得することです。これらのカウンターは、"operational" を検索し、operational カテゴリを探すことで metrics.gitlab.com で確認できます。これらの operational イベントは、インスタンスをどのようにアクティベートしたかに依存しません。
2. Optional Data: [Optional Data](https://metrics.gitlab.com/?q=optional)は同様のタイプのメトリクス (集計カウント) ですが、Operational メトリクスよりもはるかに大きなセットです。これは、インスタンスで設定/オプトアウトされ、サブスクリプションとは関係ありません。このデータを共有することを選択した場合、Product チームは、R&D リソースをどこに投資してプラットフォームを成長させ続けるかを理解するためのインサイトを感謝します。それ以外の場合は、更新のために無視し、[こちら](https://docs.gitlab.com/development/internal_analytics/service_ping/#disable-service-ping)で文書化されているオプトアウト手順に従ってください。

**顧客は、GitLab インスタンスをエアギャップ/インターネットに接続しないまま、サブスクリプションデータを臨時で送信できますか？**

詳細については [Offline Cloud Licensing](https://about.gitlab.com/pricing/licensing-faq/cloud-licensing/#offline-cloud-licensing)を参照してください。

## Fulfillment ロードマップ優先順位付け {#fulfillment-roadmap-prioritization}

### 原則 {#principles}

私たちの安定したカウンターパート全体で、正しい結果を提供することに集中するために 4 つの主要な原則に従います。これらの原則は絶対的なものではなく、意思決定をガイドするためのものです。

**GitLab とのビジネスをシームレスにする**

顧客が GitLab を購入することを選択するとき、彼らはすでに取引によって有効になる機能やサービスにアクセスすることで追加の価値を解放することを決定しています。私たちは、取引体験を背景に消すことを目指し、顧客が可能な限り簡単にこの追加の価値を解放できるようにします。これにより、より良い顧客体験が生まれ、GitLab の加速した成長につながります。

これは、すべてのイニシアチブで複雑さの必要性を疑問視することを意味します。私たちは理解し使いやすい機能を構築するように努め、すべてのタイプの顧客にとって完璧に機能することを確認します。可能な限り、顧客がセールス担当者と話すことを必要とせず、オンラインのセルフサービスツール経由で取引するかどうかを選択できるようにします。

**GitLab がスケールできるように強固な基盤を構築する**

Fulfillment システムは、GitLab 内の多くのコマースアクティビティの基盤層です。私たちのシステムは、顧客にライセンスをプロビジョニングし、複数の KPI とデータモデルのデータソースであり、[Zuora](/handbook/business-technology/enterprise-applications/guides/zuora/)と Salesforce と直接相互作用します。これらのシステムは信頼性が高く、需要に応じてスケールでき、他のチームが協力できる必要があります。

私たちは定期的に基盤に投資し、基盤システムが十分に堅牢でないと感じるたびに新機能開発を中断し基盤に集中することを続けます。FY23 にこのエリアの集中した努力のために Fulfillment Platform グループを設立しました。

**データを使用して決定を行いインパクトを測定する**

私たちには多くのセンシングメカニズムがあります: GTM チーム経由のフィードバック、ビジネスカウンターパートとのミーティング、ユーザー研究からの顧客フィードバック、GitLab チームメンバーや広いコミュニティのメンバーが Issue トラッカーで提起した改善提案。

方向と優先順位を設定するためにデータをセンシングメカニズムとして使用する方法も改善しています。ファネルを理解することは、顧客にとってシームレスなコマース体験を構築する上で最重要です。Growth との協力で Fulfillment チームは、取引ファネルの各ポイントをインストルメンテーションし、私たちの戦略と方向性の判断にデータを活用できるようにしています。

**変更のインパクトが大きい場合は特に、イテレートする**

イテレーションは、特に Fulfillment 内で従うのが最も挑戦的な価値の 1 つです。多くの場合、私たちの作業は外部のアナウンスやコミュニケーションと密接に整合してバンドルされる必要があります。それでも、可能な限り作業を分割し、機能のリリースを広範なアナウンスから切り離すように努めます。これにより、私たちの顧客とビジネスへの価値の提供が加速されます。

**GitLab アプリケーションコードからビジネスロジックを最小化して削除する**

過去には、GitLab インスタンスコードに大きなビジネスロジックを直接埋め込んでいました。たとえば、私たちのライセンスシステムには、支払われたライセンスなどに基づいて、顧客ライセンスがインスタンスレベルでアクティベートされるべきかをチェックするロジックがあります。これは、私たちがサポートする過去の GitLab バージョンに反映できないビジネスポリシーが進化するにつれて、重大な問題を引き起こします。

可能な限り、そのようなロジックを最小化し、アプリケーションコードから削除し、代替のソリューションを探します。

### 優先順位付けプロセス {#prioritization-process}

私たちのロードマップは、[プロジェクト管理プロセス](/handbook/engineering/development/fulfillment-monetization/#project-management-process)に従って優先順位付けされ、スケジュールされます。マイルストーンの[計画プロセス](/handbook/engineering/development/fulfillment-monetization/#planning)の一部として、このロードマップを毎月更新することを目指しています。

Fulfillment ロードマップに作業を追加するようリクエストするには、[受付リクエストプロセス](/handbook/engineering/development/fulfillment-monetization/#intake-request)に従ってください。このロードマップの優先順位の変更は、[優先順位付けプロセス](/handbook/engineering/development/fulfillment-monetization/#prioritization)に従います。

特定の四半期の優先順位の SSOT は、Fulfillment OKR です。

[方向性](/handbook/product/groups/fulfillment/direction/fulfillment_section/)の性質上、Fulfillment は主に、以下の片方または両方が当てはまる、高度にクロスファンクショナルなプロジェクトに取り組みます:

1. 多くのクロスチームの依存関係: プロジェクトの実行は他のチームとの協力に依存し、時間とリソースの大幅な調整が必要です。
1. 下流への影響: プロジェクトは他のチーム (例: Field Operations、Enterprise Apps、Billing) の運営方法を変える可能性があり、また、彼らの努力の成功 (例: セールス効率目標の達成、e コマースコンバージョン目標の達成) に影響を与える可能性もあります

最もインパクトのある作業に集中するために、Fulfillment の優先順位付けプロセスは以下を目指しています:

1. GitLab, Inc の価値への長期的なインパクトで測定された、最高 ROI のイニシアチブを優先する。(注: 「構築コスト」は ROI 計算の I の重要な考慮事項です)
1. クロスチームおよびクロスファンクショナルなリソースニーズを十分に計画するために、優先順位への将来の可視性を提供する。
1. 実行途中の再優先順位付けによる無駄と手戻りを最小限に抑える。

#### 優先順位付け基準 {#prioritization-criteria}

プロジェクトは、以下の考慮事項に基づいて Fulfillment ロードマップで優先順位付けされます。

1. 収益への潜在的影響
   1. 新しいセールスチャネルを解放する価値
   1. セールス効率の改善と取引を成立させるためにフィールドチームメンバーが費やす時間の削減。これには、ほとんどの取引での Sales チーム関与の排除が含まれます
   1. コンバージョンの改善
   1. リスクとコンプライアンスの問題 (負の収益の可能性)
1. 運用コストの削減
   1. サポートコストの削減
   1. GitLab とのシームレスな取引、効率性の向上、顧客満足度の改善。
1. 機会を解放するための基盤
   1. 将来の機会の判断材料となる新規または改善されたデータの価値
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

#### 新しい作業のスケジューリング {#scheduling-new-work}

確立された基準に基づく優先順位付けが、作業が完了するためにスケジュールされる順序を駆動します。プロダクトチームは定期的に全体の優先順位をレビューします。優先順位を変更する前に、以下を考慮します:

1. 進行中の取り組みを中断することによる効率性と士気への影響
1. 既存の顧客およびパートナーコミットメントへの変更の影響
1. クロスファンクショナルパートナーからのフィードバック

パートナーチームへの影響を最小限に抑え、より予測可能性を与えるために、進行中の四半期内に行うことについてクロスファンクショナルパートナーとすでに合意したイニシアチブへの変更を最小化します。

[受付リクエスト](/handbook/engineering/development/fulfillment-monetization/#intake-request)を経由して、誰でもロードマップに追加する新しいアイテムをリクエストできます。

#### 四半期クロスファンクショナルレビュー {#quarterly-cross-functional-review}

私たちの優先順位付けの目標の 1 つは、Fulfillment とクロスファンクショナルパートナー全体のチーム全体のアウトプットを最大化することです。私たちは、Fulfillment とそのパートナーチームが提供する予定の作業について、すべての GitLab チームメンバーに透明性を提供したいと考えています。

これを可能にするために、新しい会計四半期の開始前に[安定したカウンターパート](/handbook/engineering/development/fulfillment-monetization/#stable-counterparts)とロードマップレビューを行います。このレビューの一部として、ロードマップの優先順位についてフィードバックを集め、フィードバックに基づいてロードマップを更新し、今後 3-6 か月のスコープと配信マイルストーンについてパートナーと合意します。

これらの四半期レビュー中に、Fulfillment エンジニアリングキャパシティの最大 70% を次の四半期に、その次の四半期にはキャパシティの 30% を超えないようにコミットすることを目指します。これは、クロスファンクショナルパートナーが計画するための今後の活動への十分な可視性を提供しつつ、必要に応じて再優先順位付けと変更のための余地を残すことを目的としています。

#### ロードマップの変更を伝える {#communicating-roadmap-changes}

ロードマップへの提案された変更は、最初に関連する Slack チャンネルで、関連するコンテキストと根拠とともに非同期でクロスファンクショナルパートナーに伝え、フィードバックを求めます。必要に応じて、議論のために同期ミーティングがスケジュールされます。すべてのフィードバックがプロダクトチームによって考慮され、最終的な決定が下され、決定がされたら伝えられます。

### Fulfillment 優先順位付けエスカレーション {#fulfillment-prioritization-escalations}

Fulfillment の通常の優先順位付けプロセスによって、競合する優先順位のために優先順位付けされていない緊急の Fulfillment ニーズがあり、それが重要かつ緊急の両方である場合、エスカレーションのために部門のリーダーシップと連携してください。最初のステップは、Fulfillment リーダーシップ ([ofernandez2](https://gitlab.com/ofernandez2)を含む現在) を伴う非同期の議論にすることができます。リクエストに対応するために競合する会社優先プロジェクトを再優先順位付けする必要がある状況では、GitLab の [e-group](/handbook/company/structure/#executives)へのエスカレーションが必要になる可能性があります。

Sales と Customer Success グループのチームメンバーは、まずクロスチームリーダーシップの可視性と優先順位付けのために [Top ARR Drivers ミーティング](/handbook/product/product-processes/)を経由してエスカレーションする必要があります。議論のためのアスクリストにアイテムを追加するだけです (ミーティングアジェンダのリンク)。

#### Fulfillment OKR プロセス {#fulfillment-okr-processes}

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

四半期の終わりに、ステージリーダーが OKR をスコアリングし、トップレベルの目的にそれを要約するコメントを残します。([FY25 Q1 の例](https://gitlab.com/gitlab-com/gitlab-OKRs/-/work_items/5573#note_1883160327))。この最終ステップは、振り返り、自分自身に責任を持ち、そうでなければしばしば見過ごされる達成したことを祝福するのに役立つため、重要です。私たちはこの最後の更新を、私たちの #s_fulfillment_fyi チャンネルでより多くの可視性のために Slack にクロスポストします。

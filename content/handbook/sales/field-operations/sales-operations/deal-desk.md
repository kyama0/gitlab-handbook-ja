---
title: "Deal Desk ハンドブック"
description: "Deal Desk チームのミッションは、フィールドセールスの信頼できるビジネスパートナーとして機能しながら、商談管理プロセスを合理化することです。"
upstream_path: /handbook/sales/field-operations/sales-operations/deal-desk/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-12T00:00:00Z"
translator: claude
stale: false
---

## **Deal Desk ハンドブックへようこそ**

Deal Desk チームのミッションは、フィールドセールスの信頼できるビジネスパートナーとして機能しながら、商談管理プロセスを合理化することです。私たちはセールスサポートの一次窓口です。

### 便利なリンク

- **Salesforce レポートとダッシュボード**
  - [Current Quarter WW Sales Dashboard](https://gitlab.my.salesforce.com/01Z4M0000007H7W)
  - [Monthly Bookings Report](https://gitlab.my.salesforce.com/00O61000004Ik27)
  - [Deal Desk Pending Opportunity Approvals Report](https://gitlab.my.salesforce.com/00O4M000004e0Dp)

- **よく使うハンドブックページ**
  - [Sales Order Processing](/handbook/sales/field-operations/order-processing/)
  - [Deal Desk Opportunity Approval Process](/handbook/sales/field-operations/order-processing/)
  - [Useful Company Information](https://gitlab.com/gitlab-com/finance/wikis/company-information)
  - [Account Ownership Rules of Engagement](/handbook/sales/field-operations/gtm-resources/rules-of-engagement/#account-ownership-rules-of-engagement)
  - [ARR in Practice](https://docs.google.com/document/d/1UaKPTQePAU1RxtGSVb-BujdKiPVoepevrRh8q5bvbBg/edit#heading=h.yycfjurntovz)
  - [Vendor Setup Form Process](/handbook/sales/field-operations/order-processing/#how-to-process-customer-requested-vendor-setup-forms)
  - [Security Questionnaire Process](/handbook/security/#process)
  - [Troubleshooting: True Ups, Licenses + EULAS](/handbook/business-technology/enterprise-applications/entapps-crm/quote-to-cash/troubleshooting/)
  - [Licensing FAQ](https://about.gitlab.com/pricing/licensing-faq/)
  - [Legal Authorization Matrix](/handbook/finance/authorization-matrix/)
  - [Trade Compliance (Export/Import)](/handbook/sales/field-operations/order-processing/#trade-compliance-export--import-and-visual-compliance-tool-in-salesforce)

- **その他のリソース**
  - [Quote Approval Matrix](https://docs.google.com/document/d/1-CH-uH_zr0qaVaV1QbmVZ1rF669DsaUeq9w-q1QiKPE/edit?ts=5d6ea430#heading=h.ag75fqu12pf0)
  - [Billing FAQs and Useful Tips](https://gitlab.com/gitlab-com/finance/-/wikis/Billing-Team-FAQs-&-Useful-Tips)
  - [Sample Order Form](https://gitlab.my.salesforce.com/0698X00000EvCuE)
  - [Ecosystems Program & Quoting Guide](https://gitlab.highspot.com/items/6887eb734da0b1c4190b6862?lfrm=shp.12#1)

### 私たちの業務

**クォーティング**

- ディール構造がブッキングポリシーとコンプライアンス要件にアラインしていることを確認
- SFDC/Zuora 内で複雑なクォートを構築・検証
- 標準クォートをレビューし、正確性を処理
- クォート承認とワークフロールーティングを監査
- AWS と GCP の Private Offer 作成をサポート

**ブッキング**

- クォートデータとブッキング要件に基づき、Stage 7 の商談をレビュー・承認
- 商談ブッキングメトリクス（ARR、Amount/TCV、Recurring Amount、ProServ Amount）を検証またはオーバーライド
- ブッキング情報が最終ディール条件とシステム更新を正確に反映していることを確認
- 月末クローズ業務

**フィールドセールスサポート**

- クォート、契約、商談、ブッキングに関する、セールス前後のシステムサポートを提供
- クロスファンクショナルチーム（Billing & AR、Legal、Ecosystems、Fulfillment）と協力して、クォートやブッキングの不一致を解決

**対象外**

- 標準クォートの作成: Sales は Deal Desk の支援なしに Zuora CPQ で標準クォートを作成できることが期待されます。Zuora CPQ でのクォーティングに関する詳細については、[Field Quote Studio](https://gitlab.highspot.com/items/63c04679ce74a0ae63ca5e49?lfrm=srp.0) を参照してください。
- 商談作成
- フォーキャスト管理
- RFP/Vendor Form 回答
- 顧客/パートナー向けコミュニケーション

### リージョン対応状況

**リージョン Deal Desk サポート**

Deal Desk チームは世界中に拠点があり、ほとんどのリージョンで標準的なビジネスアワー内に対応可能です。私たちはリージョナルサポートモデルで運営しており、各リージョン（EMEA/APAC/AMER）は、専任のリージョナル Deal Desk Specialists と Analyst によるサポートを受けます。

Alliances と Private Offer の作成については、グローバルで 1 名のチームメンバーがサポートしており、マネージャーがエスカレーションポイントのバックアップとしてトレーニングを受けています。すべての Alliances ディールについて、各リージョンは AMER（Pacific Time）所属の Alliances 専任 Deal Desk Analyst にサポートされます。

休日やチームメンバーが PTO 中の場合、別のリージョンのメンバーが対応をカバーすることがあります。これは月末/四半期末や、チームが人手不足になっているときに限定されます。

サポートは、各リージョンの以下のビジネスアワーに基づいて提供されます。複雑なケースや非標準のディールリクエストが現地時間 16:00 以降に提出された場合、ケースは翌営業日に優先付けされます。

|     リージョン    | 標準サポート時間 |
|:-------------:|------------------------|
| APAC          | 8:00 〜 17:00（IST）   |
| EMEA          | 8:00 〜 17:00（GMT）   |
| AMER / LATAM  | 7:00 〜 17:00（PT）    |

**サポートモデル - 祝日、Friends & Family Days**

リージョナルチームは 24/7 のサポートモデルでは運営していません。リクエストが現地時間 16:30 以降、または標準サポート時間外に提出された場合、翌営業日まで対応されないことがあります。例外は月末/四半期末のみです。サポート時間と稼働状況は、ハイボリューム期間に先立って #field-fyi で共有されます。

リージョナルチームは、すべての現地の祝日（公的/連邦）を遵守します。[祝日（公的/連邦）](https://www.timeanddate.com/holidays/us/2022) にはカバレッジはありません。

チームはまた、Family & Friends Day にも参加します。これらの日には非常に限定的なカバレッジしかありません。

リージョンの休日前にリクエストを計画的に提出することは、Sales チームの責任です。

### リージョン構成

2025-10-31 時点で、Deal Desk チームは以下のように構成されています。

#### グローバルリーダーシップ

- **Sr Director, Deal Desk:** Carli Nodari

---

#### Global Process Owners (GPO)

- **Manager, Deal Desk GPO:** Chris Hannigan
- **Manager, Deal Desk GPO:** Megan Sykes

---

#### AMER & Public Sector

- **Manager, Deal Desk:** Haley Nolan
- **Deal Desk Strategist:** Prathyusha Lakshmipuram
- **Deal Desk Strategist:** Katheline Do
- **Deal Desk Strategist:** Shane Winnyk
- **Deal Desk Analyst:** Casey Jordan
- **Deal Desk Analyst:** Sam Tang
- **Deal Desk Analyst:** A'Jah Watts

---

#### EMEA

- **Manager, Deal Desk:** Alessandra Pianti
- **Deal Desk Strategist:** Tomke Costello
- **Deal Desk Strategist:** Simone Polverini
- **Deal Desk Strategist:** Donatela Cekada
- **Deal Desk Analyst:** Ariele Scheffel
- **Deal Desk Analyst:** Dominik Škofić
- **Deal Desk Analyst:** Holly Yeomans
- **Deal Desk Analyst:** Olga Kwiatek

---

#### APAC & Japan

- **Senior Manager, Deal Desk:** Guru Kannan
- **Deal Desk Strategist:** Kriti D'Souza
- **Deal Desk Analyst:** Shrikant Bentur

### Deal Desk チームとのコミュニケーション

#### Salesforce でのコミュニケーション

Deal Desk が社内サポートをリクエストする際の主なコミュニケーションプロセスは、SFDC ケースです。SFDC の Opportunity オブジェクト上の右上にある「Request Support」ボタンをクリックして、サポートをリクエストできます。詳しい手順については、ハンドブックの「[Requesting Internal Support](/handbook/sales/field-operations/requesting-internal-support/)」セクションを参照してください。

Deal Desk のケースをリクエストする方法のイネーブルメントについては、HighSpot の [New Internal Support Request + Quote Approval Processes - 2024-11-21](https://gitlab.highspot.com/items/673f8c8deaa0ddae6c0b99f8) を参照してください。

- Deal Desk のケースを作成するには、必ず Opportunity オブジェクト上の「Request Support」ワークフローを使用してください。一般的なサポートについては、`#sales-support` Slack チャンネルをご利用ください。
  - Account や Opportunity の Chatter で Deal Desk チームメンバーを直接タグしたり、Slack のダイレクトメッセージでリクエストしたりしないでください。担当者を直接 @mention するのは、ケースのオーナーであるときのみにしてください。これにより、私たちのチームは効率的に作業でき、最初に返信した DD メンバーが不在になった場合にもケースがカバーされます。
  - Account や Opportunity への担当者への直接 Chatter は、Deal Desk のキューにケースを作成しないため、優先されません。応答が大幅に遅れたり、全く返ってこないこともあります。Deal Desk のケースを作成するには、必ず Opportunity オブジェクト上の「Request Support」ワークフローを使用してください。
- 誰かがケースに対応している場合、その人はケースがクローズされるまで対応を継続します。問題が解決済みだが Deal Desk チームによるさらなる対応が必要な場合は、Opportunity オブジェクト上の「Request Support」ワークフローを使って新しい Deal Desk のケースを作成してください。Deal Desk は、解決済みケースを再オープンするか、新しく作成したケースを使うかを判断します。

- 既存の Chatter 投稿/コメントに @ メンションタグを編集で追加した場合、その操作では通知が生成されないことがあります。コメントで誰かを @ メンションし忘れた場合は、コメントを編集するのではなく、スレッドで @ メンションしてください。Deal Desk のケースを作成するには、Opportunity オブジェクト上の「Request Support」ワークフローをご利用ください。

Account Segmentation（ROE、Territory）、アカウントデータ、アカウントマージに関するケースについては、Deal Desk がこれらのケースを Sales Operations チームに再アサインし、レビュー・解決します。

#### Slack でのコミュニケーション

##### 主要 Slack チャンネル**

レコード非依存の一般的なリクエストや緊急の質問には、当チームの Slack チャンネルをご利用ください:
**#sales-support** [リクエストがクォートまたは商談に関連するものであれば、Slack チャンネルではなく Salesforce の商談で Request Support をしてください]

##### Slack のベストプラクティス**

**Slack で DD チームメンバーに直接コンタクトすることは避けてください。** `#sales-support` チャンネルを利用することで、タイムリーなカバレッジを確保し、同様の質問を持つ他の人にも役立ち、当社の **透明性** バリューにアラインします。

特定の商談やクォートに関する質問がある場合は、商談レベルで Request Support をしてください。

##### Slack のアナウンス

Deal Desk のプロセス更新とアナウンスは、#field-fyi、#sales、#sales-support の Slack チャンネルで伝達されます。

### Deal Desk Office Hours

**毎週の Deal Desk Office Hours は以下の通り予定されています:**

- **EMEA Office Hours:** 火曜 14:00 GMT
- **AMER Office Hours:** 水曜 12:00 EST

四半期末には、Office Hours は月、水、金に AMER と EMEA の両方のタイムゾーンで開催されます。カレンダー招待は Sales-All Distribution グループに送信されます。当四半期中にクローズする商談が優先されます。

サポートトピックには以下が含まれます:

- クォートの作成または修正
- クォート承認の加速
- Net ARR の計算
- 商談のクローズ提出
- クローズ商談の検証/セグメンテーション
- 当四半期中の商談クローズを支援するその他のあらゆる事項!

### Deal Desk AMA

Deal Desk AMA は、Deal Desk のメンバーをローカルチームコールに招待する機会です。クォートプロセス、ベストプラクティス、ユニークなディール構造に関する質問への対応をサポートできます。これは、クォーティングや商談管理の一般的なトピックについてチームで一緒に学ぶ機会と捉えてください。進行中の商談に関する具体的な質問については、[Deal Desk Office Hours](/handbook/sales/field-operations/sales-operations/deal-desk/#deal-desk-office-hours) に参加することをおすすめします。

Deal Desk にチームコールに参加してほしい場合は、Request Support（ケースを作成）または Slack #sales-support でリクエストしてください!

### Key Performance Indicators

#### 1. Deal Desk のケース SLA

Deal Desk チームは、SFDC ケースの各リクエストに 6 ビジネス時間以内に応答するよう最善を尽くします。収益を生み出すリクエストや当四半期のリクエストは優先され、特に月末・四半期末はその傾向が強くなります。24 時間以内にタスクが解決されない場合は、（必要に応じて）エスカレーションされます。
以下の SLA は、リクエストに必要な情報がすべて提供されている場合に適用されます（特に Contract Reset や ramp ディールの場合）。

| リクエストタイプ | 初回応答 | 解決 |
|----- | ----- | ------|
| 基本クォート支援 | 6 時間 | 8 時間 |
| Ramp ディール | 6 時間 | 24 時間 |
| Alliances 一般サポート | 8 時間 | 48 時間 |
| Alliances Private Offer 作成 | 24 時間 | 48 時間 |
| フラット更新 | 6 時間 | 24 時間 |
| IACV/ARR レビュー | 6 時間 | 24 時間 |
| Contract Reset / Co-Term | 6 時間 | 24 時間 |
| RFP/Vendor Form | 6 時間 | AM 次第 |

##### ケースレビューのエスカレーションパス

緊急、顧客に影響、またはビジネスに重大なケースは、リクエストに応じて優先される場合があります。ケースが標準サポート時間外に提出された場合は、#sales-support Slack チャンネルで別のリージョンチームによるレビューのためにエスカレーションできます。リージョンの Deal Desk Manager をタグして、レビューやケースのデリゲートを支援してもらうこともできます。

このキューのケースは緊急かつビジネスクリティカルなものでなければなりません。正当な緊急性ではなく個人的な都合からルーチン的にエスカレーションされるケースは、Sales Management と対応します。

##### Deal Desk SLA をトラッキングするためのレポート

[Cases / Average First Response](https://gitlab.my.salesforce.com/00O4M000004edoT)

#### 2. リージョンサポート満足度

すべてのリージョンは、毎四半期の冒頭に四半期 CSAT サーベイを受け取ります。当チームは、サポート対象リージョンに対して 92% の満足度を目指しています。このサーベイは、Quote to Cash ライフサイクルに関連する改善領域についてのフィードバックを提供する貴重なツールです。

サーベイの結果は、チームメンバーのパフォーマンス評価と改善領域の特定に使用されます。

**リージョンサポート満足度の測定:**

- ポジティブな満足度評価は、「Q1 において Deal Desk から受けたサポートのレベルをどう評価しますか?」という質問へのポジティブな回答の比率で測定されます。
- 選択肢は以下のとおりです:
  - Excellent
  - Good
  - Neutral
  - Poor
  - Very Poor
- 満足度評価は、Excellent、Good、Neutral の回答数を、全回答数に対する割合として算出します。パーセンテージで表した結果が、リージョンサポート満足度評価です。

#### プロアクティブサポート（トレーニング、ドキュメント、システム改善）によるケース削減

Deal Desk チームは、四半期 CSAT サーベイで受け取ったフィードバックに対するアクションとして、一般的なクォーティングエラー、商談バグ、プロセスドキュメントのギャップに関連するプロセスを改善する責任を負います。目標は、ケース数を減らし、フィールドが Deal Desk の介入なしにクォーティングに関する標準業務を完了できるようにすることです。Deal Desk は、複雑または非標準のディールでは常に支援します。

### Key Performance Indicators: 結果

四半期 KPI 結果については、[Deal Desk & Order Management KPI - 結果](/handbook/sales/field-operations/sales-operations/deal-desk-order-mgmt-kpis/) を参照してください。

### プロアクティブ商談レビュー

一般的な注文の問題（特に顧客に注文書の再署名を求めることになるもの）を未然に防ぐために、Deal Desk チームは以下の条件に該当するすべての商談を手動でレビューします。

- Close Date = 当四半期内
- Net ARR = $100k 以上
- Opportunity Stage = 4 または 5

チームメンバーは、毎週、自分のリージョンの商談をレビューします。私たちは、商談がスムーズにブッキングされない原因となるあらゆるものを探します。これには次が含まれます:

1. クォートが商談タイプおよび Route to Market（direct、channel、marketplace）に対して正しく構築されていることをチェック
2. クォートの承認要件が満たされているかをレビュー
3. IACV / ARR をレビュー（IACV レビューは FY21Q1 まで）
4. PO 要件をレビュー。アカウントが PO を必要とする場合、担当者にリマインダーを Chatter で送る
5. 商談/クォートで何かが奇妙に構造化されている場合や複雑なディールである場合は、特に質問や追加のニーズがないかを担当者にチェック

**レビュー頻度**

チームは、業務週内に時間が許す限り、月次で商談をレビューします。四半期の最後の月には、レビューは週次で実施されます。

### ARR の計算

ARR の計算については、社内ハンドブックページの [ARR in Practice](https://internal.gitlab.com/handbook/sales/annual-recurring-revenue-arr/) を参照してください。

### **Zuora クォート構成ガイド - 標準クォート**

以下は、商談所有者または ISR が CPQ X: Quote Studio で New Subscription、Amendment、Renewal 商談用の標準クォートを作成する方法を学ぶためのステップバイステップガイドです。

#### 追加の Quote Studio イネーブルメント資料

このパラグラフに続くステップバイステップのクォーティングガイドに加えて、以下の追加のクォーティングリソースもチェックしてください!

1. [Highspot Page](https://gitlab.highspot.com/items/63c04679ce74a0ae63ca5e49)
2. [RISE Course](https://rise.articulate.com/share/HzJgdaWzK1C_SwlMSCwQchgV9PbpRNvi#/)

### クォート作成: 一般的なヒントとコツ

#### 必須フィールド

- クォートを正常に作成するには、以下のフィールドを入力する必要があります:
  - Start Date（ライセンスが使用可能になる初日）
  - Initial Term（サブスクリプション期間、月数）
  - Renewal Term（Initial Term 完了後にサブスクリプションが更新される期間）
  - Quote Template
  - Bill To Contact
  - Sold To Contact

#### Quote Template の選択

| テンプレート                            | 用途                                                                                                  |
|-------------------------------------|----------------------------------------------------------------------------------------------------------|
| Standard Order Form                 | ほとんどのクォート（alliance marketplace トランザクション、EDU/OSS/YC、既存契約（MSA）を持つ顧客を含む） |
| Standard Order Form (Hide Discount) | ダイレクトディールで Discount 列を非表示にする。それ以外は Standard Order Form テンプレートと同一       |
| Authorized Reseller Order Form      | Authorized Reseller トランザクション                                                                         |
| MSP Order Form                      | Managed Service Provider トランザクション                                                                    |
| Distributor Order Form              | Distributor トランザクション                                                                                 |

#### Negotiated Subscription Agreements（または「MSA」）

- 顧客と GitLab の間に **署名済み MSA** がある場合、**「MSA Effective Date」フィールド** に MSA の署名日を設定してください。「MSA Effective Date」がクォートオブジェクトに設定されると、Order Form は既存契約を参照する Acceptance Language とともに自動生成されます。**設定されていない場合**、文言はデフォルトで Standard terms になります。

#### 注文書に言語を自動的に追加

- 事前承認済みの法務言語の選択を注文書に追加します。言語選択の隣のチェックボックスをチェックすると、事前承認済みの法務言語付きの注文書が自動的に生成されます（Deal Desk の介入は不要）。選択肢は以下のとおりです:

| トグルフィールド                   | 出力                                                                                   |
|--------------------------------|------------------------------------------------------------------------------------------|
| Annual Payments                | 注文書 PDF の Payment Details に Annual Payment の文言が反映されます           |
| Customer Reference Language    | 注文書の Notes セクションに Customer Reference Language が反映されます             |
| Add Quarterly True Up Language | 注文書の Notes セクションに標準の Quarterly True Up 文言が反映されます |
| Remove Signature Block         | Signature Block が削除されます。既存契約（MSA）を持つ顧客に使用します        |

#### Non-Standard Deal Elements

2024-11-20 から、**Non-Standard Deal Elements** という新しいクォートセクションを作成しました。このセクションのフィールドは、特定の non-standard ディール要素がリクエストされた場合に設定すべきものです。設定されると、これらのフィールドは承認要件をトリガーします。該当するフィールドを設定し [「Submit for Approval」](/handbook/sales/field-operations/order-processing/#standard-quote-approval) をクリックすることで、ユーザーは自動化されたクォート承認ワークフローを通じて承認を求めることができます。

![Non-Standard Deal Elements](/images/handbook/sales/nonstandarddealelements.png)

以下のガイドは、クォート上で Non-Standard Deal Elements フィールドを設定すべきか、各フィールドに何を設定すべきかをユーザーが判断するのに役立ちます。

##### Deferred Payments

![Payment Schedule](/images/handbook/sales/paymentschedule.png)

- 基準: 顧客の支払いスケジュールが prepaid または年次払いでない場合、承認が必要です。デフォルト値は Prepaid です。
- プロセス: prepaid でないクォートを作成する場合は、[こちら](/handbook/sales/field-operations/sales-operations/deal-desk/#billingpayment-schedule) の手順に従ってクォートを構築します。クォート上では、**Payment Schedule** フィールドを使用して適切な値を選択します。
  - 選択肢は以下のとおりです:
    - Prepaid（デフォルト）
    - Annual Payments
    - Custom Payment Schedule
    - GCP Prepay
    - GCP Postpay
    - AWS Prepay
  - Prepaid または Annual Payments 以外の支払いスケジュールがリクエストされた場合は、**Custom Payment Schedule** を選択し、リクエストの詳細を **Custom Payment Schedule Details** フィールド（必須）に入力します。これには [Deal Approval Matrix](https://docs.google.com/document/d/1-CH-uH_zr0qaVaV1QbmVZ1rF669DsaUeq9w-q1QiKPE/edit?tab=t.0#bookmark=kix.tmxlca7fg47o) に従った承認が必要です。
  - 商談へのマッピング: クォート上の「Payment Schedule」フィールドは商談の「Billing Schedule」フィールドにマッピングされます。つまり、クォートで「Annual Payments」を選択すると、商談は自動的に「Annual Payments」を反映するように更新されます。
  - 注文書の文言: 「Annual Payments」が選択されると、「[Language] Add Annual Payments」が自動的に TRUE に切り替わります。
- 例: 18 ヶ月のディールを作成しており、最初の 6 ヶ月分を前払いし、残りの 12 ヶ月分を 6 ヶ月目の時点で請求したい。クォートを作成する際、「Payment Schedule」フィールドで「Custom Payment Schedule」を選択します。次に「Custom Payment Schedule Details」に次のように入力します: _このディールについて、最初の 6 ヶ月分を前払いし、残りの 12 ヶ月分を 6 ヶ月目の時点で請求する支払いスケジュールを希望します_。この承認と他の該当する承認を求める準備ができたら、クォートで「Submit for Approval」をクリックします。承認を得た後、Legal と協働して注文書用の適切な文言を取得することを忘れないでください。

##### Price Lock / Optional Future Pricing

![Price Lock](/images/handbook/sales/pricelock.png)

- 基準: price lock や optional future pricing の文言を注文書に含める場合、[Deal Approval Matrix](https://docs.google.com/document/d/1-CH-uH_zr0qaVaV1QbmVZ1rF669DsaUeq9w-q1QiKPE/edit?tab=t.0#bookmark=kix.gn5oe9x9lsfk) に従った承認が必要です。
- プロセス: price lock や optional future pricing の文言を必要とするクォートを作成する場合、**Price Lock/Optional Future Pricing** の横のチェックボックスをチェックし、リクエスト詳細を **Price Lock Details** フィールドに入力します。
  - 注: リクエスト詳細はこのフィールドに入力するべきですが、最終的な文言は、price lock リクエストの承認取得後に Legal Request ケースを通じて Legal から取得する必要があります。
- 例: サブスクリプション期間中の追加分の価格を一定のレートで固定したいディールを販売しています。顧客はこれを注文書に明記してほしいと希望しています。クォートを作成する際、「Price Lock/Optional Future Pricing」の横のチェックボックスをチェックします。「Price Lock Details」に次のように入力します: _サブスクリプション期間中に追加されたユーザーは 1 ユーザーあたり年額 $XXX.XX で課金される、という price lock を希望します。_ この承認と他の該当する承認を求める準備ができたら、クォートで「Submit for Approval」をクリックします。承認を得た後、Legal と協働して注文書用の適切な文言を取得することを忘れないでください。

##### Deal Contingent on Future Product/Feature Release

![Deal Contingency](/images/handbook/sales/dealcontingency.png)

- 基準: 将来の製品または機能リリースを条件とするディールを販売するという _まれな_ シナリオでは、エグゼクティブを含む複数のステークホルダーから [Deal Approval Matrix](https://docs.google.com/document/d/1-CH-uH_zr0qaVaV1QbmVZ1rF669DsaUeq9w-q1QiKPE/edit?tab=t.0#bookmark=kix.lp6f9bgfr9bd) に従った承認が必要です。
- プロセス: 将来の製品または機能リリースを条件とするディールのクォートを作成する場合、**Deal Contingent on Product Release** の横のチェックボックスをチェックし、詳細を **Deal Contingency Details** フィールドに入力します。
  - 注: 詳細はこのフィールドに入力するべきですが、ディール条件付きに関する最終的な文言は、deal contingency の承認取得後に Legal Request ケースを通じて Legal から取得する必要があります。
- 例: 新機能リリースを条件とするディールを販売しています。具体的には、特定の機能が利用可能になることを確認できれば、顧客はこの注文書に署名すると言っています。クォートを作成する際、「Deal Contingent on Product Release」の横のチェックボックスをチェックします。「Deal Contingency Details」に次のように入力します: _X 機能が Y 日に利用可能になることを示す文言を希望します。_ この承認と他の該当する承認を求める準備ができたら、クォートで「Submit for Approval」をクリックします。承認を得た後、Legal と協働して注文書用の適切な文言を取得することを忘れないでください。

##### Multiple Production Instances

![Secondary Subscription](/images/handbook/sales/secondarysubscription.png)

- 基準: 顧客が無料の第二のプロダクションインスタンス（つまり $0 サブスクリプション）をリクエストするシナリオでは、[Deal Approval Matrix](https://docs.google.com/document/d/1-CH-uH_zr0qaVaV1QbmVZ1rF669DsaUeq9w-q1QiKPE/edit?tab=t.0#bookmark=kix.ku5uwebuwk1h) に従った承認が必要で、すべてのケースで承認されるとは限りません。このシナリオの最も一般的な例は、移行の場合で、新しいインスタンス（有料）への移行期間中、既存のインスタンスを一定期間維持するために $0 サブスクリプションをリクエストするケースです。
- プロセス: 二次的な $0 サブスクリプションのクォートを作成する場合、**Secondary Production Instance ($0 Sub)** の横のチェックボックスをチェックします。
- 例: 顧客が Self-Managed から SaaS に移行しています。移行をサポートするため、両環境を 3 ヶ月間必要としています。そのため、Self-Managed インスタンスを維持するため 3 ヶ月分の $0 サブスクリプションを作成する必要があります。クォートでは、「Secondary Production Instance ($0 Sub)」の横のチェックボックスをチェックします。この承認と他の該当する承認を求める準備ができたら、クォートで「Submit for Approval」をクリックします。承認を得た後、Legal と協働して注文書用の適切な文言を取得することを忘れないでください。

##### Non-Standard Ramp Deal

![Non-Standard Ramp](/images/handbook/sales/nonstandardramp.png)

- 基準: Non-Standard Ramp は、ramp 区間が年次でない（つまり ramp 期間が 12 ヶ月でない）ramp ディールと定義されます。これには [Deal Approval Matrix](https://docs.google.com/document/d/1-CH-uH_zr0qaVaV1QbmVZ1rF669DsaUeq9w-q1QiKPE/edit?tab=t.0#bookmark=kix.n3wzwlv9dv7v) に従った承認が必要です。
- プロセス: ramp ディールを作成するユーザーは、**Non-Standard Ramp** フィールドの横のチェックボックスをチェックし、リクエストに関する詳細を **Non-Standard Ramp Details** フィールドに入力する必要があります。
  - 注: ramp ディールが複数のユニークなクォートを必要とする場合、この承認は初年度のクォートでのみ必要です。
- 例: 顧客が non-standard ramp 付きの 24 ヶ月サブスクリプションを希望しています。6 ヶ月ごとにユーザーを増やしたいとのことです。クォートを作成する際、「Non-Standard Ramp」の横のチェックボックスをチェックし、「Non-Standard Ramp Details」に次のように入力します: _6 ヶ月ごとにユーザーが X ずつ増える 24 ヶ月のディールを希望します。_ この承認と他の該当する承認を求める準備ができたら、クォートで「Submit for Approval」をクリックします。承認を得た後、Deal Desk と協働して ramp ディールを構築することを忘れないでください。

#### Billing/Payment Schedule

GitLab では、デフォルトの請求/支払いスケジュールは全額前払いです。複数年契約の場合、Annual Payments を選択することもできます。上記のとおり、**Payment Schedule** フィールドで「Annual Payments」を選択する必要があり、クォート上の Annual Payments トグルフィールドが自動的に更新され、当該注文を年次請求/支払いスケジュールにコミットする文言が注文書に反映されます。

クォートに Annual Payments を追加する場合は、以下の点に留意してください:

1. New Business クォートでは、Initial Term は 24、36、48、または 60 でなければなりません。Renewal クォートでは、Renewal Term は 24、36、48、または 60 でなければなりません。
2. Annual Payments のすべてのクォートは「1 Year」Product SKU を使用する必要があります。Annual Payments を選択して 1 Year SKU 以外を選択した場合、エラーメッセージが表示されます。
3. Annual Payments のすべての商談は、「Payment Schedule」フィールドで「Annual Payments」を選択する必要があります。
4. Add-On/Amendment クォートで prepaid のディールを Annual Payments に変換することはできず、その逆も同様です。Add-On は常に元の請求/支払いスケジュールに従います。

#### 連絡先要件

- **「Sold To」と「Bill To」の連絡先を選択します。** Sold To 連絡先は EULA またはライセンスファイルをメールで受け取ります。注: 各連絡先レコードには完全な住所が必要です。住所が完全に設定されていない場合は、クォートを進める前にこれを更新する必要があります。
- **One-Tier Reseller または MSP のディール** では、「Invoice Owner」「Invoice Owner Contact」「Resale Partner」フィールドを設定します。**Distributor のディール** では、「Invoice Owner」「Invoice Owner Contact」「Resale Partner」「Distributor」フィールドを設定します。**ダイレクトディール** では、「Invoice Owner」「Invoice Owner Contact」「Resale Partner」「Distributor」フィールドは空のままにします。
  - 「Invoice Owner」と「Invoice Owner Contact」は、GitLab がクォートを発行している当事者のアカウントと連絡先を反映するべきです。つまり、One-Tier Reseller と MSP のディールでは Resale Partner の Billing Account と Billing Account Contact を、Distributor のディールでは Distributor の Billing Account と Billing Account Contact を活用するべきです。
  - 「Invoice Owner」フィールドでパートナーアカウント名を検索して、パートナーの Billing Account を選択します。パートナーアカウントに一致する結果がない場合、そのパートナーにはまだ Billing Account が存在しないことを意味します。Billing Ops チームに Request Support し、Partner Account レコードにリストされている Partner Account Owner をタグして、Billing Account の作成を依頼してください。
  - 「Invoice Owner Contact」
    - Partner Account 上の Billing Account には、そのアカウントに関連付けられた買掛金担当者の連絡先情報がリストされています（Billing Account の「Contact Information」セクションを参照）。その連絡先を「Invoice Owner Contact」として使用するべきです。その連絡先が Partner Account に Contact Record として存在しない場合は、「[Partner Account Name] - Accounts Payable」という命名規則で連絡先を作成してください。
    - 「Invoice Owner Contact」が Partner Account レコードに接続されており、パートナーの Billing Account（つまり Invoice Owner）の連絡先情報と一致していることを確認してください。
  - 「Resale Partner」フィールドは、トランザクションを行う Reseller または MSP の Partner Account を設定するべきです（パートナーには Customer と Partner の両方の Account Record がある場合があります。Partner Account を選択する必要があります。Account レコードが Customer か Partner かを識別するには、アカウントの「Account Record Type」フィールドを確認してください）。
  - Distribution 経由のディールでは、「Distributor」フィールドにトランザクションを行う Distributor の Distributor Account を設定する必要があります（すべての Distributor ディールでは、Resale Partner も設定する必要があります）。

#### 期間要件

- **「Initial Term」** を月単位で設定します（例: 2 年ディールの場合は「24」を入力）。2025-08-06 以降、すべての複数年ディール（つまり期間が 12 を超えるクォート）は ramp クォートとして構造化され、「1 Year」SKU を使用する必要があります。「Payment Schedule」クォートフィールドを活用して、全額前払いまたはその他の非標準支払いスケジュールをリクエストします。これらの変更の詳細については、[Ecosystems Program & Quoting Guide](https://gitlab.highspot.com/items/6887eb734da0b1c4190b6862?lfrm=shp.12#1) または [Ecosystem, Amendment, and Multi-Year Quoting Demo + Overview Video](https://gitlab.highspot.com/items/68843276d73abc59374fb9ec?lfrm=shp.0) を参照してください。
  - 以前の状態: 以前の状態では、複数年ディールでの annual payments には「1 Year」SKU を使用し、複数年ディールでの prepayment には複数年 SKU（例: SaaS - Premium - 2 Year）を使用していました。
  - 2025-08-06 以降の新状態: 支払いスケジュールに関係なく、複数年ディールは「1 Year」SKU（例: SaaS - Premium - 1 Year）を活用するべきです。Payment Schedule フィールドを使用して常に支払いスケジュール（prepayment vs. annual payments）を指定します。

#### VAT ID

- 顧客またはリセラーが EU 拠点の場合は、「VAT ID」番号を入力します。これは注文をブッキングするために必要です。

#### Payment Capture Link ステップバイステップガイド

Payment Capture Link 機能は、商談所有者が First Order ディールで顧客に **クレジットカード** 取得リンクを送信できるツールです。これにより、新規サブスクリプションの支払いが成功するとともに、将来のトランザクションのためにクレジットカード情報が保存されます。このツールの使用方法のステップバイステップガイドに入る前に、以下にツールの概要を示します。

- **ディールタイプ**: Payment Capture Link ツールは First Order/新規サブスクリプションディールでのみ利用可能です。このツールはパートナーディールでは使用できません。2024 年 4 月 4 日時点で、すべての [SMB $19 Promo](https://about.gitlab.com/pricing/smb-promo/) ディールでは payment capture link フローが **必須** です。
- **クォートタイプ**: このツールは、Quote Studio で **New Subscription** クォートを作成するときに支払い方法として **Credit Card** が選択されている場合にのみ使用できます。
- **承認**: 顧客に支払いリンクが送信される前に、クォートが承認に提出されて承認されている、または承認が必要ないことが確認されている必要があります。
- **配信方法**: 商談所有者は SFDC の **Send Payment Link** ボタンを通じてリンクを送信し、これにより支払い取得リンクのメールが顧客にトリガーされます。
- **リンクの有効期限**: 支払い取得リンクは 72 時間後に失効し、受信者がまだ詳細を入力していない場合は別のリンクを送信する必要があります。これが発生した場合は SFDC で通知されます。
- **商談クローズ要件**: 商談をクローズする前にクレジットカード詳細が取得される必要があります。つまり、ディールがクローズして顧客が GitLab にアクセスできるようになるためには、顧客が支払い取得リンクを正常に開いてクレジットカード情報を入力する必要があります。

**ステップバイステップガイド:**

以下のステップのビジュアルウォークスルー（クォート承認が必要なシナリオ）については、この [動画](https://gitlab.highspot.com/items/67eed1b04e5bc5ca5624e8a1?lfrm=rhp.0) を参照してください。

1. [New Subscription Quote](/handbook/sales/field-operations/sales-operations/deal-desk/#new-subscription-quote) ステップバイステップガイドの **「Sold To」と「Bill To」の連絡先を選択** ステップに到達した後、**Payment Method** ドロップダウンメニューで **Credit Card** を選択します。
1. [New Subscription Quote](/handbook/sales/field-operations/sales-operations/deal-desk/#new-subscription-quote) ステップバイステップガイドの **To Add Products to your quote** ステップを完了し、必要に応じて適切な割引を追加します。
1. クォートを保存する準備ができたら、まず **Save** をクリックし、次に画面上部の **Submit** をクリックします。
1. 支払いリンクを送信できるようにするには、クォートが承認に提出されて承認されている、または `approval not required`（つまり割引がないか、適切な割引マトリクスに従って承認を必要としないほど割引が小さい）状態である必要があります。次のステップに進む前に、適切な承認を取得していることを確認してください。
1. Quotes ページで **Generate Signature PDF** ボタンの横のドロップダウンメニューをクリックします。
1. **Send Payment Link** を選択します。
1. これにより、件名 **Set Up Your Secure Automated Credit Card Payments** の支払いリンクメールが顧客に送信されます。顧客の POV については、上記でリンクされている動画を参照してください。
1. 顧客が capture link で支払い詳細を正常に入力すると、クォートの **Payment Method Captured** と **Payment Method Capture Date** フィールドで取得確認が更新されます。顧客が 72 時間以内に詳細を入力しない場合、リンクは失効し、通知されます。別のリンクを送信する必要があります。
1. 支払い詳細が取得されるまで、商談はクローズできません。

**FAQ:**

1. **支払い取得リンクは支払いリンクですか?** いいえ、これは厳密には支払い情報を取得するためのリンクです。実際の支払いは後の日に行われます（後述の質問で説明します）。
1. **顧客が支払い取得リンクのフォームを正常に完了したときに通知を受け取れますか?** 商談所有者であれば、支払い情報が正常に取得されたことを伝える通知が SFDC で表示されるはずです。
1. **顧客が支払い取得リンクを使いたくない場合は?** 何らかの理由で顧客にクレジットカード支払い詳細を提出してもらえない場合は、ワイヤー支払いに切り替えることができます。
1. **支払い取得リンクの仕組みを顧客にいつ説明すべきですか?** 支払い情報を提供するまでライセンスを受け取れないことを含め、支払い取得リンクがどう機能するかを事前に顧客に伝えることをおすすめします。
1. **ディールのどの時点で支払い取得リンクを送信すべきですか?** 注文書も送る場合は、顧客にとってスムーズなプロセスになるよう、注文書と支払い取得リンクを共有するタイミングを考慮してください。
1. **このツールを使う顧客は請求書を受け取りますか? どのように支払われますか?** このツールを使用するすべての顧客は、商談ステータスが closed won に更新されてから 24 時間以内に請求書を受け取ります。顧客は auto-pay 状態のため、支払いは通常、請求書の期日の真夜中に取得済みクレジットカード経由で行われます。
1. **このツールを使う顧客の支払い条件は Net 30 にできますか?** Due Upon Receipt を強くおすすめしますが、顧客が強く求める場合は Net 30 にすることもできます。

### クォート作成: クォートタイプ別のステップバイステップガイド

#### New Subscription クォート

Quote Studio で **New Subscription** クォートを作成するには、このステップバイステップガイドに従ってください。新しいサブスクリプションを購入する顧客の場合、または Contract Reset を含むディール構造の場合には、New Subscription クォートを使用します。

A. New Business 商談を開いて **「New Quote」** ボタンをクリックします。

B. このボタンは、クォーティングエクスペリエンスの 2 ページのうち最初のページである Billing Accounts and Subscriptions ページを起動します。このページで新規サブスクリプションクォートを作成するための 2 つのオプションがあります:

- 顧客に既存の Billing Account があり、Billing Account にリストされている同じ Sold To Contact を使って新しいサブスクリプションを販売する予定であれば、該当する Billing Account を選択して「New Quote」をクリックします。
- 顧客に既存の Billing Account がない場合、または使う予定の Sold To Contact が既存の Billing Account のいずれにもリストされていない場合は、「New Billing Account」をクリックします。

C. クォーティングエクスペリエンスの 2 ページ目（最終ページ）で、Quote Detail Information を入力します。

- クォートを正常に作成するには、以下のフィールドを入力する必要があります:
  - Start Date（ライセンスが使用可能になる初日）
  - Initial Term（サブスクリプション期間、月数）
  - Renewal Term（Initial Term 完了後にサブスクリプションが更新される期間）
  - Quote Template
  - Bill To Contact
  - Sold To Contact

- Quote Template の選択

| テンプレート                            | 用途                                                                                                  |
|-------------------------------------|----------------------------------------------------------------------------------------------------------|
| Standard Order Form                 | ほとんどのクォート（alliance marketplace トランザクション、EDU/OSS/YC、既存契約（MSA）を持つ顧客を含む） |
| Standard Order Form (Hide Discount) | ダイレクトディールで Discount 列を非表示にする。それ以外は Standard Order Form テンプレートと同一       |
| Authorized Reseller Order Form      | Authorized Reseller トランザクション                                                                         |
| MSP Order Form                      | Managed Service Provider トランザクション                                                                    |
| Distributor Order Form              | Distributor トランザクション                                                                                 |

- 顧客と GitLab の間に **署名済み MSA** がある場合、**「MSA Effective Date」フィールド** に MSA の署名日を設定してください。「MSA Effective Date」がクォートオブジェクトに設定されると、Order Form は既存契約を参照する Acceptance Language とともに自動生成されます。**設定されていない場合**、文言はデフォルトで Standard terms になります。

- 事前承認済みの法務言語の選択を注文書に追加します。言語選択の隣のチェックボックスをチェックすると、事前承認済みの法務言語付きの注文書が自動的に生成されます（Deal Desk の介入は不要）。選択肢は以下のとおりです:

| トグルフィールド                   | 出力                                                                                   |
|--------------------------------|------------------------------------------------------------------------------------------|
| Annual Payments                | 注文書 PDF の Payment Details に Annual Payment の文言が反映されます           |
| Customer Reference Language    | 注文書の Notes セクションに Customer Reference Language が反映されます             |
| Add Quarterly True Up Language | 注文書の Notes セクションに標準の Quarterly True Up 文言が反映されます |
| Remove Signature Block         | Signature Block が削除されます。既存契約（MSA）を持つ顧客に使用します        |

- **「Sold To」と「Bill To」の連絡先を選択します。** Sold To 連絡先はライセンスファイルをメールで受け取ります。注: 各連絡先レコードには完全な住所が必要です。住所が完全に設定されていない場合は、クォートを進める前にこれを更新する必要があります。
- **Payment Method** ドロップダウンメニューで **Credit Card** を選択している場合は、このガイドに戻る前に [Payment Capture Link ステップバイステップガイド](/handbook/sales/field-operations/sales-operations/deal-desk/#payment-capture-link-step-by-step-guide) に従ってください。
- **One-Tier Reseller または MSP のディール** では、「Invoice Owner」「Invoice Owner Contact」「Resale Partner」フィールドを設定します。**Distributor のディール** では、「Invoice Owner」「Invoice Owner Contact」「Resale Partner」「Distributor」フィールドを設定します。**ダイレクトディール** では、「Invoice Owner」「Invoice Owner Contact」「Resale Partner」「Distributor」フィールドは空のままにします。
  - 「Invoice Owner」と「Invoice Owner Contact」は、GitLab がクォートを発行している当事者のアカウントと連絡先を反映するべきです。つまり、One-Tier Reseller と MSP のディールでは Resale Partner の Billing Account と Billing Account Contact を、Distributor のディールでは Distributor の Billing Account と Billing Account Contact を活用するべきです。
  - 「Invoice Owner」フィールドでパートナーアカウント名を検索して、パートナーの Billing Account を選択します。パートナーアカウントに一致する結果がない場合、そのパートナーにはまだ Billing Account が存在しないことを意味します。Billing Ops チームに Request Support し、Partner Account レコードにリストされている Partner Account Owner をタグして、Billing Account の作成を依頼してください。
  - 「Invoice Owner Contact」
    - Partner Account 上の Billing Account には、そのアカウントに関連付けられた買掛金担当者の連絡先情報がリストされています（Billing Account の「Contact Information」セクションを参照）。その連絡先を「Invoice Owner Contact」として使用するべきです。その連絡先が Partner Account に Contact Record として存在しない場合は、「[Partner Account Name] - Accounts Payable」という命名規則で連絡先を作成してください。
    - 「Invoice Owner Contact」が Partner Account レコードに接続されており、パートナーの Billing Account（つまり Invoice Owner）の連絡先情報と一致していることを確認してください。
  - 「Resale Partner」フィールドは、トランザクションを行う Reseller または MSP の Partner Account を設定するべきです（パートナーには Customer と Partner の両方の Account Record がある場合があります。Partner Account を選択する必要があります。Account レコードが Customer か Partner かを識別するには、アカウントの「Account Record Type」フィールドを確認してください）。
  - Distribution 経由のディールでは、「Distributor」フィールドにトランザクションを行う Distributor の Distributor Account を設定する必要があります（すべての Distributor ディールでは、Resale Partner も設定する必要があります）。
- **「Initial Term」** を月単位で設定します（例: 2 年ディールの場合は「24」を入力）。2025-08-06 以降、すべての複数年ディール（つまり期間が 12 を超えるクォート）は ramp クォートとして構造化され、「1 Year」SKU を使用する必要があります。「Payment Schedule」クォートフィールドを活用して、全額前払いまたはその他の非標準支払いスケジュールをリクエストします。
- 顧客またはリセラーが EU 拠点の場合は、「VAT ID」番号を入力します。これは注文をブッキングするために必要です。

- 注: 非標準の支払い条件（Net 30 = 標準）はクォートオブジェクトに反映する必要があり、承認マトリクスに従った承認が必要です。

D. **クォートに製品を追加するには**、ページ下部の「Subscription」と「Browse Products」の間の検索バーを見つけ、販売したい Product SKU を検索します。注: 2025-08-25 時点で、Open または Select のチャネルパートナー経由で販売する場合は、Ecosystem 固有の SKU（SKU 名に「(Ecosystem)」が含まれる）を選択する必要があります。これには AWS CPPO および GCP MCPO クォートが含まれますが、標準的な Hyperscaler Cloud パートナー（AWS/GCP）または OEM パートナー（IBM OEM）のクォートは含まれません。正しい Product SKU を見つけたら、円形の + ボタンをクリックしてその製品をクォートに追加します。追加の Product SKU を加えるには、このプロセスを繰り返します。これらの変更の詳細については、[Ecosystem, Amendment, and Multi-Year Quoting Demo + Overview Video](https://gitlab.highspot.com/items/68843276d73abc59374fb9ec?lfrm=shp.0) を参照してください。

E. クォートに追加した各 Product SKU について、必要に応じて Quantity、Discount、Effective Price を編集します。**Product SKU を正しく構成した後、まだドラフトモードのまま「Preview Metrics」をクリックしてクォートの合計をプレビューできます。クォートを保存する準備ができたら、まず Save をクリックし、次に画面上部の Submit をクリックします。**

- **チャネルディール** の場合は、[GitLab Channel Partner Program Discounts and Incentive Guide](https://gitlab.highspot.com/items/672950b937a5d0282b99cb96?lfrm=srp.0#1) をレビューして、正しいエコシステム割引を確認してください。これらの Ecosystem Open および Select パートナー割引は、適切な「(Ecosystem)」SKU を選択した時点でシステムによって自動的に SKU に適用されます。Ecosystem rate/discount を減らすには Ecosystem team の承認が必要です。顧客割引を追加したい場合は、編集可能な「Discount」フィールドで最上位の製品行で行ってください。これらの変更の詳細については、[Ecosystems Program & Quoting Guide](https://gitlab.highspot.com/items/6887eb734da0b1c4190b6862?lfrm=shp.12#1) または [Ecosystem, Amendment, and Multi-Year Quoting Demo + Overview Video](https://gitlab.highspot.com/items/68843276d73abc59374fb9ec?lfrm=shp.0) を参照してください。

F. **注文書に Annual Payments を追加する** には:

- Quote Detail ページで「Annual Payments」チェックボックスをチェックし、Payment Schedule フィールドで「Annual Payments」を選択します。
- 「Initial Term」を 24、36、48、または 60 に更新します。**Initial Term が正しく更新されていない場合、クォートは正しい合計を生成しません**
- **すべての複数年クォート** は 1 - Year Product SKU を使用する必要があります。12 を超える期間長と 1 - Year SKU 以外を適用するとエラーメッセージが表示されます。

G. SuperSonics: Zuora フィールドをレビューして、サブスクリプションにクラウドライセンス機能が適用されるかを判断します。

H. **注文書の生成**

- 割引や特殊条件がリクエストされていない場合は、「Generate PDF」をクリックします。
- ディールに承認が必要な割引が含まれている場合は、クォート上のボタンを使用してクォートを承認に提出してください。PDF を生成する前にクォートが承認される必要があります。
- 注文書の修正: 注: Sales 担当者は注文書の PDF バージョンのみを生成できます。標準注文書の文言に変更が必要な場合は、Opportunity オブジェクト上の「Request Support」ワークフローを使って Deal Desk のケースを作成してリクエストしてください。

**これらのステップを補完するため、New Subscription クォートの各ステップの実演を見るには、[Highspot Page](https://gitlab.highspot.com/items/63c04679ce74a0ae63ca5e49) または [RISE Course](https://rise.articulate.com/share/HzJgdaWzK1C_SwlMSCwQchgV9PbpRNvi#/) をレビューしてください。**

#### **2025-08-6 から有効なクォート作成の変更（Ecosystem、Amendment、Multi-Year クォート）**

- 2025-08-06 以降、Ecosystem クォート、amendment クォート、複数年クォートに影響を与える一連の変更をクォート作成プロセスにローンチしました。関連する更新は上記の手順に含まれていますが、追加の詳細については Ecosystems Program & Quoting Guide をレビューしてください。これらの変更の詳細については、[Ecosystems Program & Quoting Guide](https://gitlab.highspot.com/items/6887eb734da0b1c4190b6862?lfrm=shp.12#1) または [Ecosystem, Amendment, and Multi-Year Quoting Demo + Overview Video](https://gitlab.highspot.com/items/68843276d73abc59374fb9ec?lfrm=shp.0) を参照してください。

#### Amend Subscription クォート

以下は、商談所有者または ISR が CPQ X: Quote Studio で Amendment 用の標準クォートを作成する方法を学ぶためのステップバイステップガイドです。

このクォートタイプは、**現在のサブスクリプション期間中に既存のサブスクリプションに新しいユーザーを追加する場合**、または **現在のサブスクリプション期間中に製品を変更または追加する場合** にのみ使用してください。注意: Amendment クォートはサブスクリプション期間を延長 **できません**。

更新商談を承認に提出する前に、Add On 商談は Closed-Won である必要があります。

#### 追加の Zuora Quote Studio イネーブルメント資料

このパラグラフに続くステップバイステップのクォーティングガイドに加えて、以下の追加のクォーティングリソースもチェックしてください!

1. [Highspot Page](https://gitlab.highspot.com/items/63c04679ce74a0ae63ca5e49)
2. [RISE Course](https://rise.articulate.com/share/HzJgdaWzK1C_SwlMSCwQchgV9PbpRNvi#/)

#### **A.  Add-On クォートの作成**

- そのサブスクリプションに関連する最新の closed won 年次商談（Renewal または New Business）で Add-on 商談を作成します（「New Add On Opportunity」ボタンを使用）
- 商談レベルで必要なすべてのフィールド（Close date など）を入力し保存します。
- Add-On 商談を開き **「New Quote」** ボタンをクリックします。
- **該当する billing account** を選択します。
- 次に、修正したいサブスクリプションを見つけます。どのサブスクリプションを修正すべきかわからない場合は、青い subscription 名（例: A-S00263985）をクリックすると、そのサブスクリプションの製品、数量、価格などの詳細を示す新しいウィンドウが開きます。
- 鉛筆アイコンをクリックしてそのサブスクリプションを修正します。
- 注: 利用可能なサブスクリプションがある場合は、サブスクリプション名をクリックしてサブスクリプション情報を開き、そのサブスクリプションの日付、製品、価格をレビューしてください。
- それでもどれを選ぶか判断できない場合は、Opportunity オブジェクト上の「Request Support」ワークフローを使用して Deal Desk のケースを作成してください。
- クォーティングエクスペリエンスの 2 ページ目（最終ページ）で、Quote Detail Information を入力します。

- クォートを正常に作成するには、以下のフィールドを入力する必要があります:
  - Start Date（ライセンスが使用可能になる初日）
  - Quote Template **（Amendment は元の注文と同じ Route to Market でトランザクションを行う必要があります）**
  - Bill To Contact
  - Sold To Contact

- **Start Date** はサブスクリプション開始日より前に設定できません。
  - **End Date** は既存サブスクリプションと co-terminate するよう自動的に設定されます。
  - **Initial Term** は、このクォートで修正される元の New Business または Renewal サブスクリプションの initial term を反映するよう自動的に更新されます。
  - **GitLab Entity** は修正対象の初期ディールと同じである必要があります。
  - **One-Tier Reseller または MSP のディール** では、システムが「Invoice Owner」「Invoice Owner Contact」「Resale Partner」フィールドを自動入力します。これらのフィールドの正確性をレビューしてください。**Distributor のディール** では、システムが「Invoice Owner」「Invoice Owner Contact」「Resale Partner」「Distributor」フィールドを自動入力します。これらの正確性をレビューしてください。**ダイレクトディール** では、「Invoice Owner」「Invoice Owner Contact」「Resale Partner」「Distributor」フィールドは空のままにします。
    - 「Invoice Owner」と「Invoice Owner Contact」は、GitLab がクォートを発行している当事者のアカウントと連絡先を反映するべきです。つまり、One-Tier Reseller と MSP のディールでは Resale Partner の Billing Account と Billing Account Contact を、Distributor のディールでは Distributor の Billing Account と Billing Account Contact を活用するべきです。
    - 「Invoice Owner」フィールドでパートナーアカウント名を検索して、パートナーの Billing Account を選択します。パートナーアカウントに一致する結果がない場合、そのパートナーにはまだ Billing Account が存在しないことを意味します。Billing Ops に Request Support し、Partner Account レコードにリストされている Partner Account Owner をタグして、Billing Account の作成を依頼してください。
    - 「Invoice Owner Contact」
      - Partner Account 上の Billing Account には、そのアカウントに関連付けられた買掛金担当者の連絡先情報がリストされています（Billing Account の「Contact Information」セクションを参照）。その連絡先を「Invoice Owner Contact」として使用するべきです。その連絡先が Partner Account に Contact Record として存在しない場合は、「[Partner Account Name] - Accounts Payable」という命名規則で連絡先を作成してください。
      - 「Invoice Owner Contact」が Partner Account レコードに接続されており、パートナーの Billing Account（つまり Invoice Owner）の連絡先情報と一致していることを確認してください。
    - 「Resale Partner」フィールドは、トランザクションを行う Reseller または MSP の Partner Account を設定するべきです（パートナーには Customer と Partner の両方の Account Record がある場合があります。Partner Account を選択する必要があります。Account レコードが Customer か Partner かを識別するには、アカウントの「Account Record Type」フィールドを確認してください）。
    - Distribution 経由のディールでは、「Distributor」フィールドにトランザクションを行う Distributor の Distributor Account を設定する必要があります（すべての Distributor ディールでは、Resale Partner も設定する必要があります）。
    - **Amendment クォートで Route to Market を変更することはできません。** 元の注文がダイレクトで販売された場合、その後のすべての amendment もダイレクトでなければなりません。最初にパートナー経由で販売された場合、すべての amendment はサブスクリプションの期間中、同じパートナーを通じて行う必要があります。
  - 顧客またはリセラーが EU 拠点の場合は、「VAT ID」番号を入力します。これは注文をブッキングするために必要です。
  - 顧客と GitLab の間に **署名済み MSA** がある場合、**「MSA Effective Date」フィールド** に MSA の署名日を設定してください。「MSA Effective Date」がクォートオブジェクトに設定されると、Order Form は既存契約を参照する Acceptance Language とともに自動生成されます。**設定されていない場合**、文言はデフォルトで Standard terms になります。

- **クォートで Product SKU を追加または削除するには**、ページ下部の「Subscription」と「Browse Products」の間の検索バーを見つけ、追加したい Product SKU を検索します。正しい Product SKU を見つけたら、円形の + ボタンをクリックしてその製品をクォートに追加します。追加の Product SKU を加えるには、このプロセスを繰り返します。SKU 名の下のゴミ箱アイコンをクリックして Product SKU を削除することもできます。

注: **2025-08-06 以降、ユーザーを追加するにはクォートに新しい charge を追加する必要があります。数量を増やすために既存（以前の）charge を編集することはできなくなりました。charge の追加または削除のみが可能です。このプロセス変更は価格に関係なく適用されます。** 詳細はこちら: [Ecosystems Program & Quoting Guide](https://gitlab.highspot.com/items/6887eb734da0b1c4190b6862?lfrm=shp.12#1)

- クォートに追加した各 Product SKU について、必要に応じて Quantity、Discount、Effective Price を編集します。**Product SKU を正しく構成した後、まだドラフトモードのまま「Preview Metrics」をクリックしてクォートの合計をプレビューできます。クォートを保存する準備ができたら、まず Save をクリックし、次に画面上部の Submit をクリックします。**

- 注: サブスクリプション期間中に製品が複数回修正された場合、その製品はそれぞれの数量を示す複数行で表示されます。この場合、**新しい数量で 1 行のみを修正** してください。複数行を修正しないでください。追加の [情報はこちらで確認できます](https://gitlab.com/groups/gitlab-com/business-technology/enterprise-apps/financeops/-/wikis/Zuora-CPQ-Legacy-UI:-Limitations)。
- **既存のサブスクリプションにユーザーを追加するには（価格に関係なく）**、新しいユーザーライセンスを別の charge/製品行として追加する必要があります。
- **True-Ups:** 注: true-up SKU はライセンスにユーザーを追加するのではなく、単に遡及的な一回限りの charge です。前の percentage-based fee schedule の顧客に四半期または半年に一度の true-up を行っている場合、true-up が更新と同時に行われ、顧客がより少ないユーザー数で更新する場合を除き、true-up SKU は使用しないでください。代わりに、適切に価格設定されたサブスクリプション製品 SKU を使ってユーザーを追加するべきです。true-up ユーザーをクォーティングする場合は、該当する True-Up SKU を検索してクォートに追加します。数量と effective price を編集します。「Save」をクリックしてから「Submit」をクリックします。
- **注文書の生成**
  - 割引や特殊条件がリクエストされていない場合は、「Generate PDF」をクリックします。
  - ディールに承認が必要な割引が含まれている場合は、クォート上のボタンを使用してクォートを承認に提出してください。PDF を生成する前にクォートが承認される必要があります。
    - リセラーディールの場合は、承認マトリクスに基づいて承認を取得してください。
  - **注文書の手動編集**
    - 注: Sales 担当者は注文書の PDF バージョンのみを生成できます。特殊な文言やその他の手動編集が必要な場合は、Opportunity オブジェクト上の「Request Support」ワークフローを使って Deal Desk のケースを作成してください。

##### Add-on 注文書の比例計算

[例の注文書のスクリーンショット付き説明](https://docs.google.com/presentation/d/1HV4jYVP4yITm0FyhGbDPGmb6f-ebI0Fh480cLfw7u9M/edit#slide=id.ga42daef6d7_0_0)

- Add-on/amendment の注文書では、以下の例のとおり、暦日に基づいて金額が比例配分されます（既存サブスクリプションに 10 ユーザーを追加）
- 10 add-on ユーザーの年額: 10 ユーザー x $228 = $2,280.00
- Add-on 期間の暦日数: 177 日（この例では 2022 年 4 月 7 日〜 2022 年 10 月 1 日）
- 比例配分料金の計算: ($2,280.00 / 365 日) x 177 日 = $1,105.64

#### **B.  サブスクリプション期間中の製品のアップグレードまたは切り替え**

期間途中で製品を変更するには、このプロセスに従ってください。このプロセスの一般的なユースケースは、Self-Managed から SaaS、または SaaS から Self-Managed への移行です。このようなシナリオで、商談が Closed Won になると、標準的なライセンスプロセスが実行されます。

- 上記のセクション 2 (A) のステップに従って「Amend Subscription」クォートを作成します。
  - **Start Date** は製品交換の日付にするべきです。
  - 製品検索バーで **新しい** 製品タイプを検索し、正しい SKU を追加します。
  - 製品名近くの画面左側にあるゴミ箱アイコンをクリックして、以前の既存製品を削除します。
  - 新しい製品行を調整します（数量、割引）。「Save」、「Submit」をクリックします。
  - 注: 注文書では、削除される製品はサブスクリプション期間の残りに対するクレジットを反映した負の金額で表示されます。
  - 期間途中の製品アップグレードは、同じ Route to Market を通じてのみ処理できます。

**これらのステップを補完するため、New Subscription クォートの各ステップの実演を見るには、[Highspot Page](https://gitlab.highspot.com/items/63c04679ce74a0ae63ca5e49) または [RISE Course](https://rise.articulate.com/share/HzJgdaWzK1C_SwlMSCwQchgV9PbpRNvi#/) をレビューしてください。**

##### Seat 数の削減を伴う Mid-Term Upgrade

GitLab は、ARR にプラスの影響がある場合に限り、顧客がアップグレード中に期間途中で seat 数を減らすことを許可します。このシナリオでの以下のライセンスのニュアンスに留意してください:

顧客が期間途中でアップグレードし、有料 seat 数をアップグレード日時点の最大課金可能ユーザー数より下に減らした場合、以前の有料 seat 数に関係なく、GitLab は直ちに max billable users - 新しい有料 seat 数の超過を表示します。この超過は GitLab 製品で表示され、顧客の次回更新時に免除されない限り課金対象となります。

例:

1. 顧客は 50 ユーザーの premium ライセンスを持ち、アップグレード日時点で max billable users は 48 でした。
2. 顧客が Ultimate にアップグレードし、seat 数を 25 に減らします。
3. GitLab は直ちに 48（アップグレード中の max billable users）- 25（新しい有料 seat 数）= 23 の seat 超過を次回更新まで表示します（顧客がその後 48 seat を超えた場合、超過は増加します）。
4. **更新時に 23 の差額の True Up が必要となります。このシナリオでは、ライセンス問題を防ぐために、更新時に true up 免除の承認を求めることを検討してください。**

今日、アップグレード後に Ultimate seat が何個使われたかを別途追跡する方法はなく、max billable users 計算は常に full term を参照します。このケースでは、アップグレード前の期間も含まれます。

注: 顧客が 50 から 25 ユーザーになっても、更新時の max billable users が 25 以下であれば問題ありません。問題となるのは、現在の max billable users 数を下回る場合のみです。

##### Amendment クォートの Payment Schedule

複数年期間（13 ヶ月以上）の amendment クォートは、デフォルトで元になる契約（New Subscription Order Form または Renewal Order Form のいずれか最新のもの）と同じ請求スケジュールになります。これは次のことを意味します:

元の契約の請求スケジュールが以下のものに設定されていた場合:

- Annual billing - amendment クォートも年次で請求されます（冗長な Annual Terms 文言は不要）。Amend Order Form に Annual Billing 文言が含まれていても、元の契約にも Annual Billing 文言が含まれていればブッキングのために受け付けられます。
- Prepaid - 現在のサブスクリプション期間の残り分について比例配分の金額が顧客に請求されます。
- カスタム請求スケジュールの場合は、Deal Desk にエンゲージしてください。注文書にカスタマイズが必要な場合があります。

期間途中で期間の請求スケジュールを変更すべきではない点に注意してください。期間途中で請求頻度の変更が意図されている場合は、更新時に行うべきです。それ以外で期間途中に請求スケジュールを更新する場合は、Deal Desk にエンゲージする必要があります。

##### 2025-08-6 から有効なクォート作成の変更（Ecosystem、Amendment、Multi-Year クォート）

2025-08-06 以降、Ecosystem クォート、amendment クォート、複数年クォートに影響を与える一連の変更をクォート作成プロセスにローンチしました。関連する更新は上記の手順に含まれていますが、追加の詳細については Ecosystems Program & Quoting Guide をレビューしてください。これらの変更の詳細については、[Ecosystems Program & Quoting Guide](https://gitlab.highspot.com/items/6887eb734da0b1c4190b6862?lfrm=shp.12#1) または [Ecosystem, Amendment, and Multi-Year Quoting Demo + Overview Video](https://gitlab.highspot.com/items/68843276d73abc59374fb9ec?lfrm=shp.0) を参照してください。

#### Renew Subscription クォート

このクォートタイプは、顧客がサブスクリプション期間の終わりに達し、別の期間でサブスクリプションを更新したい場合に使用してください。

重要:

1. 「Renew Subscription」クォートは、顧客が前回の期間とは異なる期間長で更新する場合でも使用してください。例: 顧客が 12 ヶ月サブスクリプションを 24 ヶ月で更新する場合、「Renew Subscription」を選択し、Renewal Term フィールドに「24」を入力します。
2. 同じサブスクリプションにリンクされた商談の間にギャップは許可されません。つまり、以下のシナリオに該当しない限り、新規サブスクリプションクォートオブジェクトを更新商談で使用することはできません。
3. 更新商談で新規サブスクリプションクォートが許可されるシナリオ:
     - Contract reset（別名 early renewal）
     - 顧客がアクセスを失った場合、または顧客が 30 日後に更新することを決定した場合（これが更新間のギャップが許可される唯一のシナリオです）

#### 追加の Renew Quote Studio イネーブルメント資料

このパラグラフに続くステップバイステップのクォーティングガイドに加えて、以下の追加のクォーティングリソースもチェックしてください!

1. [Highspot Page](https://gitlab.highspot.com/items/63c04679ce74a0ae63ca5e49)
2. [RISE Course](https://rise.articulate.com/share/HzJgdaWzK1C_SwlMSCwQchgV9PbpRNvi#/)

##### **A. 標準更新**

以下は、商談所有者または ISR が CPQ X: Quote Studio で Renewal 用の標準クォートを作成する方法を学ぶためのステップバイステップガイドです。

- Renewal 商談を開いて **「New Quote」** ボタンをクリックします。
- **該当する billing account** を選択します。
- 次に、更新したいサブスクリプションを見つけます。どのサブスクリプションを更新すべきかわからない場合は、青い subscription 名（例: A-S00263985）をクリックすると、そのサブスクリプションの製品、数量、価格などの詳細を示す新しいウィンドウが開きます。
  - 注: 複数の billing account またはサブスクリプションがあり、どれを選ぶか判断できない場合は、Opportunity オブジェクト上の「Request Support」ワークフローを使用して Deal Desk のケースを作成してください。リクエストタイプとして「Quote Help」を選択し、Sub-Request Type としても「Quote Help」を選択してください。
- 曲線矢印の更新アイコンをクリックしてそのサブスクリプションを更新します。
- 注: 利用可能なサブスクリプションがある場合は、サブスクリプション名をクリックしてサブスクリプション情報を開き、そのサブスクリプションの日付、製品、価格をレビューしてください。

- クォーティングエクスペリエンスの 2 ページ目（最終ページ）で、Quote Detail Information を入力します。
- クォートを正常に作成するには、以下のフィールドを入力する必要があります:
  - Renewal Term（Initial Term 完了後にサブスクリプションが更新される期間）
  - Quote Template **（Amendment は元の注文と同じ Route to Market でトランザクションを行う必要があります）**
  - Bill To Contact
  - Sold To Contact

- **Start Date** は編集できません。これは真の更新日です。
  - **End Date** は Renewal Term によって自動的に決定されます。
  - **「Renewal Term」** を月単位で設定します（例: 2 年更新の場合は「24」を入力）。2025-08-06 以降、すべての複数年ディール（つまり期間が 12 を超えるクォート）は ramp クォートとして構造化され、「1 Year」SKU を使用する必要があります。「Payment Schedule」クォートフィールドを活用して、全額前払いまたはその他の非標準支払いスケジュールをリクエストします。

  - **One-Tier Reseller または MSP のディール** では、「Invoice Owner」「Invoice Owner Contact」「Resale Partner」フィールドを設定します。**Distributor のディール** では、「Invoice Owner」「Invoice Owner Contact」「Resale Partner」「Distributor」フィールドを設定します。**ダイレクトディール** では、「Invoice Owner」「Invoice Owner Contact」「Resale Partner」「Distributor」フィールドは空のままにします。
    - 「Invoice Owner」と「Invoice Owner Contact」は、GitLab がクォートを発行している当事者のアカウントと連絡先を反映するべきです。つまり、One-Tier Reseller と MSP のディールでは Resale Partner の Billing Account と Billing Account Contact を、Distributor のディールでは Distributor の Billing Account と Billing Account Contact を活用するべきです。
    - 「Invoice Owner」フィールドでパートナーアカウント名を検索して、パートナーの Billing Account を選択します。パートナーアカウントに一致する結果がない場合、そのパートナーにはまだ Billing Account が存在しないことを意味します。Billing Ops に Request Support し、Partner Account レコードにリストされている Partner Account Owner をタグして、Billing Account の作成を依頼してください。
    - 「Invoice Owner Contact」
      - Partner Account 上の Billing Account には、そのアカウントに関連付けられた買掛金担当者の連絡先情報がリストされています（Billing Account の「Contact Information」セクションを参照）。その連絡先を「Invoice Owner Contact」として使用するべきです。その連絡先が Partner Account に Contact Record として存在しない場合は、「[Partner Account Name] - Accounts Payable」という命名規則で連絡先を作成してください。
      - 「Invoice Owner Contact」が Partner Account レコードに接続されており、パートナーの Billing Account（つまり Invoice Owner）の連絡先情報と一致していることを確認してください。
    - 「Resale Partner」フィールドは、トランザクションを行う Reseller または MSP の Partner Account を設定するべきです（パートナーには Customer と Partner の両方の Account Record がある場合があります。Partner Account を選択する必要があります。Account レコードが Customer か Partner かを識別するには、アカウントの「Account Record Type」フィールドを確認してください）。
    - Distribution 経由のディールでは、「Distributor」フィールドにトランザクションを行う Distributor の Distributor Account を設定する必要があります（すべての Distributor ディールでは、Resale Partner も設定する必要があります）。
  - 顧客またはリセラーが EU 拠点の場合は、**「VAT ID」** 番号を入力します。これは注文をブッキングするために必要です。
  - 顧客と GitLab の間に **署名済み MSA** がある場合、**「MSA Effective Date」** フィールドに MSA の署名日を設定してください。
  - 注: 非標準の支払い条件（Net 30 = 標準）はクォートオブジェクトに反映する必要があり、承認マトリクスに従った承認が必要です。

- **クォートで Product SKU を追加、削除、編集するには**、ページ下部の「Subscription」と「Browse Products」の間の検索バーを見つけ、追加したい Product SKU を検索します。注: 2025-08-25 時点で、Open または Select のチャネルパートナー経由で販売する場合は、Ecosystem 固有の SKU（SKU 名に「(Ecosystem)」が含まれる）を選択する必要があります。これには AWS CPPO および GCP MCPO クォートが含まれますが、標準的な Hyperscaler Cloud パートナー（AWS/GCP）または OEM パートナー（IBM OEM）のクォートは含まれません。正しい Product SKU を見つけたら、円形の + ボタンをクリックしてその製品をクォートに追加します。追加の Product SKU を加えるには、このプロセスを繰り返します。SKU 名の下のゴミ箱アイコンをクリックして Product SKU を削除することもできます。これらの変更の詳細については、[Ecosystems Program & Quoting Guide](https://gitlab.highspot.com/items/6887eb734da0b1c4190b6862?lfrm=shp.12#1) または [Ecosystem, Amendment, and Multi-Year Quoting Demo + Overview Video](https://gitlab.highspot.com/items/68843276d73abc59374fb9ec?lfrm=shp.0) を参照してください。

- クォートに追加した各 Product SKU について、必要に応じて Quantity、Discount、Effective Price を編集します。**Product SKU を正しく構成した後、まだドラフトモードのまま「Preview Metrics」をクリックしてクォートの合計をプレビューできます。クォートを保存する準備ができたら、まず「Save」をクリックし、次に画面上部の「Submit」をクリックします。**

- **更新シナリオ**
  - フラット更新の場合、Ecosystem クォートの更新でない限り、既存の Product SKU（Original とマークされたもの）はそのままにします。Ecosystem クォートを更新する場合は、適切な「(Ecosystem)」SKU が選択されていることを確認してください。2025-08-06 から有効なプロセス変更により、標準 SKU を削除する必要があります。
  - 既存の Product SKU にユーザーを追加するには、単純に数量を増やします。
  - 異なる Effective Price で追加ユーザーを加えたい場合は、既存の Product SKU をそのままにし、ユニークな価格設定で追加ユーザー用の新しい重複 Product SKU を追加します。
  - Product SKU を追加するには、「Subscription」と「Browse Products」の間の検索バーを見つけ、販売したい製品 SKU を検索するだけです。円形の + ボタンをクリックしてその製品をクォートに追加します。
  - Product SKU を削除するには、Product SKU に関連付けられたゴミ箱アイコンをクリックします。

- 注: サブスクリプション期間中に製品が複数回修正された場合、その製品はそれぞれの数量を示す複数行で表示されます。この場合、**新しい数量で 1 行のみを修正** してください。複数行を修正しないでください。追加の [情報はこちらで確認できます](https://gitlab.com/groups/gitlab-com/business-technology/enterprise-apps/financeops/-/wikis/Zuora-CPQ-Legacy-UI:-Limitations)。
  - **チャネル更新** の場合は、[GitLab Channel Partner Program Discounts and Incentive Guide](https://gitlab.highspot.com/items/672950b937a5d0282b99cb96?lfrm=srp.0#1) をレビューして、正しいエコシステム割引を確認してください。これらの Ecosystem Open および Select パートナー割引は、適切な「(Ecosystem)」SKU を選択した時点でシステムによって自動的に SKU に適用されます。Ecosystem rate/discount を減らすには Ecosystem team の承認が必要です。顧客割引を追加したい場合は、編集可能な「Discount」フィールドで最上位の製品行で行ってください。

- **True-Ups:** 注: true-up SKU はライセンスにユーザーを追加するのではなく、単に前回のサブスクリプション期間の超過を清算するために使用するべき遡及的な一回限りの charge です。true-up ユーザーをクォーティングする場合は、該当する True-Up SKU を検索してクォートに追加します。数量と effective price を編集します。
  - 例: 顧客 A が以前 100 ユーザーの SaaS - Premium サブスクリプションを購入していて、更新時に前回更新前に 10 seat 超過したと伝えられた場合、SaaS - Premium 用 Annual True Up SKU を 10 ユーザー分追加する必要があります。
  - 更新時のアップグレード例: 顧客 A が以前 100 ユーザーの SaaS - Premium サブスクリプションを購入していて、更新時に SaaS - Ultimate にアップグレードするが、前回更新前に 10 seat 超過したとも伝えられた場合、SaaS - Premium 用 Annual True Up SKU を 10 ユーザー分追加することに加え、今後の顧客のライセンス用に SaaS - Ultimate SKU を追加する必要があります。また、顧客が SaaS - Ultimate にアップグレードしているため、SaaS - Premium ライセンス SKU を削除するべきです。

- **注文書に Annual Payments を追加する** には:
  - **Payment Schedule** フィールドで「Annual Payments」を選択します。これにより、クォート上の Annual Payments トグルフィールドが自動的に更新され、当該注文を年次請求/支払いスケジュールにコミットする文言が注文書に反映されます。
  - 「Renewal Term」を 24、36、48、または 60 に更新します。**Renewal Term が正しく更新されていない場合、クォートは正しい合計を生成しません**
  - **すべての複数年クォート** は 1 - Year Product SKU を使用する必要があります。12 を超える期間長と 1 - Year SKU 以外を適用するとエラーメッセージが表示されます。

- **SuperSonics**: Zuora フィールドをレビューして、サブスクリプションにクラウドライセンス機能が適用されるかを判断します。

##### **B. New Subscription クォートを使った更新**

更新時に Quote Start Date を変更する必要がある（通常は請求目的）場合、New Subscription クォートを構築する必要があります。ディールに Contract Reset が含まれる場合も New Subscription クォートを使用します。

- Renewal 商談を開いて **「New Quote」** ボタンをクリックします。

  このボタンは、クォーティングエクスペリエンスの 2 ページのうち最初のページである Billing Accounts and Subscriptions ページを起動します。このページで新規サブスクリプションクォートを作成するための 2 つのオプションがあります:

  - 顧客に既存の Billing Account があり、Billing Account にリストされている同じ Sold To Contact を使って新しいサブスクリプションを販売する予定であれば、該当する Billing Account を選択して「New Quote」をクリックします。
  - 顧客に既存の Billing Account がない場合、または使う予定の Sold To Contact が既存の Billing Account のいずれにもリストされていない場合は、「New Billing Account」をクリックします。

    - 注: 複数の billing account またはサブスクリプションがあり、どれを選ぶか判断できない場合は、#sales-support Slack チャンネルで質問してください。

- 上記の **New Subscription Quote** セクションの手順に従って、クォートに必要な情報を入力します。
  - **注: Start Date は、顧客が有料製品へのアクセスを失った場合に限り、元の更新日より後にすることができます。それ以外の場合、サブスクリプションのギャップは許可されません。**
- Quote Template を選択します
- Next をクリックし、上記のステップ（New Subscription セクション）に従います

##### **C. 遅延更新**

遅延更新のクォート方法については、[こちら](/handbook/sales/field-operations/order-processing/#late-renewals) を参照してください。

**これらのステップを補完するため、New Subscription クォートの各ステップの実演を見るには、[Highspot Page](https://gitlab.highspot.com/items/63c04679ce74a0ae63ca5e49) または [RISE Course](https://rise.articulate.com/share/HzJgdaWzK1C_SwlMSCwQchgV9PbpRNvi#/) をレビューしてください。**

##### **更新前の別個の Add-on 商談のトランザクション**

顧客とパートナーは、更新注文での true-up を回避するため、更新の前に（例えば更新日の 1 ヶ月以内に）add-on 商談をトランザクションしたい場合があります。注意すべき重要な点として、更新クォートを作成する前に、add-on 商談が Salesforce で closed-won になっている必要があります。これにより、更新商談をクォーティングする前に、アクティブサブスクリプションのライセンス数と収益メトリクスが追加 seat を反映するように更新されることが保証されます。

##### 2025-08-6 から有効なクォート作成の変更（Ecosystem、Amendment、Multi-Year クォート）

- 2025-08-06 以降、Ecosystem クォート、amendment クォート、複数年クォートに影響を与える一連の変更をクォート作成プロセスにローンチしました。関連する更新はこれらのクォーティング手順に含まれていますが、追加の詳細については Ecosystems Program & Quoting Guide をレビューしてください。これらの変更の詳細については、[Ecosystems Program & Quoting Guide](https://gitlab.highspot.com/items/6887eb734da0b1c4190b6862?lfrm=shp.12#1) または [Ecosystem, Amendment, and Multi-Year Quoting Demo + Overview Video](https://gitlab.highspot.com/items/68843276d73abc59374fb9ec?lfrm=shp.0) を参照してください。

#### Ecosystem ディールのクォーティング

##### 標準チャネルパートナー/Reseller クォート

reseller-direct（つまり one-tier reseller）クォートを作成する場合、`Sold to Contact` と `Bill to Contact` は引き続きエンド顧客アカウントにリンクされます（**Sold to** はライセンスメールを受け取ります）。reseller-direct クォートに固有のいくつかの追加要件があります:

- **Resale Partner** = Reseller の SFDC アカウント（注: AWS または GCP トランザクションの場合、このフィールドには AWS または GCP を Marketplace hyperscaler として含めます。AWS または GCP 経由の CPPO または MCPO ディールでは、reseller は MCPO、CPPO、または DSOR Partner フィールドに追加されます）
- **Distributor** = 空（設定しない）
- **Quote Template** = Authorized Reseller Quote Template
- **Invoice Owner** = Reseller の billing account
- **Invoice Owner Contact** = Reseller の billing contact（この人物が請求書を受け取ります）
- **SKU 選択** - Open または Select のチャネルパートナー経由でクォートを作成する場合は、Ecosystem 固有の SKU（SKU 名に「(Ecosystem)」が含まれる）を選択する必要があります。これらの Ecosystem SKU には 2 つの別個の行があります: (1) 製品（これまでと同じ）、(2) Ecosystem rate discount charge です。Ecosystem rate discount charge は、選択されたパートナーと SKU に基づいて自動入力されます。適切な割引を考える必要がなくなります!
  - 注: AWS CPPO と GCP MCPO クォートはこのカテゴリーに含まれます。
- **割引と承認** - 新しい「(Ecosystem)」SKU を使用しているとき、最上位の製品行に割引を追加することで顧客割引を提供できます。この合計割引パーセンテージは標準的な割引承認の対象となります。2 行目の Ecosystem rate discount charge は、選択されたパートナーと SKU に基づいて動的に自動入力されます。適切な割引を考える必要がなくなります! この値を減らすには Ecosystem team の承認が必要です。この値を増やすことはできません。
- **Ecosystem 割引のレビュー** - Ecosystem 割引をダブルチェックしたい場合は、[この計算ツール](https://docs.google.com/spreadsheets/d/1b5oH9LyoGZbAKGkocqx1O7OJdsjGDx3s22XcJLxR2l4/edit?gid=1383050192#gid=1383050192) のコピーを作成し、クォートの詳細を入力できます。この計算ツールは社内限定にしてください。パートナーは、Assets Library タブ以下の partner portal にログインするか、[このリンク](https://partners.gitlab.com/px/digital-asset-management/admin/media-library?renderMode=Collection&id=838659) を使うことで、自身の price file と計算ツールにアクセスできます。

詳細は [Ecosystems Program & Quoting Guide](https://gitlab.highspot.com/items/6887eb734da0b1c4190b6862?lfrm=shp.12#1) をレビューしてください。

##### Hyperscaler Cloud Partner (AWS または GCP) と OEM Partner (IBM OEM) のクォート

- AWS、GCP、OEM Partner のクォートは、reseller-direct クォートと似た形で構築されます。すなわち、Resale Partner には Hyperscaler Cloud Partner の SFDC アカウントを設定する必要があり、Invoice Owner/Invoice Owner Contact には Hyperscaler Cloud Partner の billing account/contact を反映します。ただし、これらのディールでは「(Ecosystem)」SKU を使用する必要はなく、使用するクォートテンプレートは標準テンプレートにするべきです。

詳細については、[Reseller and Distributor ステップバイステップクォーティングガイド](https://gitlab.highspot.com/items/67c8781694b3e7f4cf88794a?lfrm=srp.0#1) を参照してください。

##### Distributor クォート

distributor（つまり two-tier distribution）クォートの作成プロセスは reseller-direct クォートの作成プロセスと非常に似ており、`Sold to Contact` と `Bill to Contact` は引き続きエンド顧客アカウントにリンクされます（**Sold to** はライセンスメールを受け取ります）。reseller-direct クォートとの違いは、以下のフィールドのみです:

- **Resale Partner** = Reseller の SFDC アカウント
- **Distributor** = Distributor の SFDC アカウント
- **Quote Template** = Distributor Quote template
- **Invoice Owner** = Distributor の billing account
- **Invoice Owner Contact** = Distributor の billing contact（この人物が請求書を受け取ります）

詳細については、[Reseller and Distributor ステップバイステップクォーティングガイド](https://gitlab.highspot.com/items/6412421bfb9e0fdf947cc90a) を参照してください。

##### MSP クォート

**Managed Service Provider (MSP)** はエンドユーザーの代わりにライセンスを購入します。MSP がライセンスのオーナーかつ管理者となりますが、ライセンスを使用するのは顧客であるエンドユーザーです。

A. MSP 商談の詳細:

- MSP 商談は常に MSP パートナーアカウントにリンクされ、エンドユーザー（つまり顧客）アカウントにはリンクされません
- MSP 商談は、関連するエンドユーザー（つまり顧客）アカウントを所有する Sales 担当者が所有するべきです
- MSP の新規ビジネス商談は、Channel Manager によって [Deal Registration](/handbook/sales/field-operations/channel-operations/#partner-sourced-deal-registration-msp-opportunities) プロセスを通じて作成されます。エンドユーザーがダイレクトまたはパートナー経由で既存サブスクリプションを持っている場合、関連する更新商談は顧客アカウント上の商談所有者によって Closed Lost に設定する必要があります
- MSP 商談は、以下の標準命名規則を持つべきです: 「[MSP End User] - [# of Seats] [Product Tier] [Deployment] [Order Type] (MSP via [Partner Name])」。例: 「CompanyABC - 100 Premium SaaS Renewal (MSP via PartnerXYZ)」

B. MSP クォート作成ステップ:

- 新規 MSP サブスクリプション: MSP 商談を管理する Sales 担当者が新規サブスクリプションクォートを作成する必要があります。
- 既存 MSP サブスクリプションへの add-on: 同じ顧客アカウント名を含む既存のブッキング済み商談の開始日と終了日に基づき、正しいサブスクリプションが MSP パートナーアカウントで見つかります。
- 既存 MSP サブスクリプションへの更新: 上記と同じく、クォートを作成する前に関連するサブスクリプションを MSP パートナーアカウントで識別する必要があります。
- クォートフィールド:
  - **Resale Partner** = MSP の SFDC アカウント
  - **Distributor** = 空（設定しない）
  - **Quote Template** = MSP Quote template
  - **Special Terms & Notes** = MSP のエンドユーザー名を以下の文言で追加します: 「MSP owns the licenses on behalf of their end customer [Insert MSP End User name]」。
  - **Sold to and Bill to Contact** = MSP パートナーの連絡先（MSP の **Sold to** がライセンスメールを受け取ります）
  - **Invoice Owner** = MSP パートナーの Billing Account レコード
  - **Invoice Owner Contact** = MSP パートナーの Billing Account Contact レコード（この人物が請求書を受け取ります）
- **SKU 選択** - MSP クォートを作成する場合は、Ecosystem 固有の SKU（SKU 名に「(Ecosystem)」が含まれる）を選択する必要があります。これらの Ecosystem SKU には 2 つの別個の行があります: (1) 製品（これまでと同じ）、(2) Ecosystem rate discount charge です。Ecosystem rate discount charge は、選択されたパートナーと SKU に基づいて自動入力されます。適切な割引を考える必要がなくなります!
- **割引と承認** - 新しい「(Ecosystem)」SKU を使用しているとき、最上位の製品行に割引を追加することで顧客割引を提供できます。この合計割引パーセンテージは標準的な割引承認の対象となります。2 行目の Ecosystem rate discount charge は、選択されたパートナーと SKU に基づいて動的に自動入力されます。適切な割引を考える必要がなくなります! この値を減らすには Ecosystem team の承認が必要です。この値を増やすことはできません。
- **Ecosystem 割引のレビュー** - Ecosystem 割引をダブルチェックしたい場合は、[この計算ツール](https://docs.google.com/spreadsheets/d/1b5oH9LyoGZbAKGkocqx1O7OJdsjGDx3s22XcJLxR2l4/edit?gid=1383050192#gid=1383050192) のコピーを作成し、クォートの詳細を入力できます。この計算ツールは社内限定にしてください。パートナーは、Assets Library タブ以下の partner portal にログインするか、[このリンク](https://partners.gitlab.com/px/digital-asset-management/admin/media-library?renderMode=Collection&id=838659) を使うことで、自身の price file と計算ツールにアクセスできます。
詳細については、[MSP ステップバイステップクォーティングガイド](https://gitlab.highspot.com/items/67c87823e796e70b0f97a0c6?lfrm=srp.0) を参照してください。

GCP MCPO 経由で MSP 商談を処理する場合は、[MCPO Guide](https://docs.google.com/document/d/1S6bg1d6CobRVqqmJ-d9UT7ohZqGjgFb08v3-wjyiFbI/edit?tab=t.0#heading=h.tmgqqtdaciqf) の手順に従ってください。

MSP Deal Registration の詳細は、[Partner Ops ハンドブック](/handbook/sales/field-operations/channel-operations/#partner-sourced-deal-registration-msp-opportunities) で確認できます。

#### Annual True-Ups のクォーティング

[GitLab Subscription Agreement](/handbook/legal/subscription-agreement/#6-payment-of-fees) のセクション 6 に従い、顧客はソフトウェアを更新するために Subscription Term の満了時に Overage Users の支払いが必要となる場合があります。

##### 2021-11-15 時点の新 Annual True-Up SKU

2021-11-15 から、「True-up」SKU は廃止され、関連するサブスクリプション SKU にそれぞれ紐づく 6 つの新しい annual True-Up SKU に置き換えられました。後ろ向きの一回限りの True-Up charge を含むクォートを作成する場合、以下にリストされた適切な True-Up SKU を選択してください。**疑念の余地がないように、True-Up が発生したときに使用されていたサブスクリプション SKU に関連する True-Up SKU を選択しなければなりません。**

- 例 1: 顧客が 100 ユーザーの SaaS - Premium サブスクリプションを持っています。更新時に、initial subscription term 中に 5 Overage Users が発生したことが判明します。更新クォートでは、True-Up (Annually) - SaaS - Premium SKU を数量 5 で選択します。

- 例 2: 顧客が 500 ユーザーの Self-Managed - Premium サブスクリプションを持っています。更新時に、600 ユーザーの Self-Managed Ultimate にアップグレードします。更新の会話の中で、initial subscription term 中に 50 Overage Users が発生したことが判明します。更新クォートでは、True-Up (Annually) - Self-Managed - Premium SKU を数量 50 で選択します。また、600 ユーザーの Self-Managed Ultimate SKU を追加し、Self-Managed - Premium SKU を削除します。

**Self-Managed True-Up SKU**

- True-Up (Annually) - Self-Managed - Ultimate: $1,188/seat/year
- True-Up (Annually) - Self-Managed - Premium: $228/seat/year
- True-Up (Annually) - Starter: $48/seat/year

**SaaS True-Up SKU**

- True-Up (Annually) - SaaS - Ultimate: $1,188/seat/year
- True-Up (Annually) - SaaS - Premium: $228/seat/year
- True-Up (Annually) - Bronze: $48/seat/year

##### True-up のクォーティングに関する注意

True-up は amendment クォートに追加すべきではありません。機能的に何の効果も生まないためです。Overuse は更新時にのみ認識されるため、true-up は、顧客が前回サブスクリプション期間中にライセンスユーザー数を超えたときにライセンスをアンロックするために、更新時にのみ必要です。
例: 顧客が 100 ライセンスユーザーを持ち、108 ユーザーを使用した場合、更新時に 8 ユーザーの超過が True-up としてカバーおよびクォーティングされます。

**顧客のダッシュボードの読み方:**

- **Billable Users:** 現在のアクティブユーザー数（forward looking license）- 顧客は少なくともこの数のライセンスを更新する必要があります
- **Users over License:** True-ups（前回のライセンス期間に発生した超過分を課金）。**Users over License = Maximum users - Users in license**
- **Users in License:** 以前に購入されたライセンス数（期間の開始時点）
- **Maximum Users:** 前回期間中（更新前）に達した最大ユーザー数

![Customer_s_Dashboard_Example](/uploads/f7b584e202c4902a25082ed38e5a69cb/Customer_s_Dashboard_Example.png)

#### Co-Terming

Co-terming には 2 種類あります:

1. **Automatic / Same Subscription:** 既存のサブスクリプションに co-term された Amendment クォートを作成。Amendment クォートは、デフォルトで関連する既存サブスクリプションと同じ start date および initial/renewal term を持ちます。

2. **Manual / Separate Subscriptions:** 顧客が既存サブスクリプションと同じ end date で別個の新規サブスクリプションを必要とする場合。新しい co-term サブスクリプションを作成するには、月次 SKU を使用し、新規サブスクリプションクォートの start date を既存サブスクリプションに合わせる必要があります（現在、月単位ではなく暦日ベースで比例配分された期間で新規サブスクリプションを作成するオプションはありません）。たとえば、既存サブスクリプションが 2022 年 2 月 15 日から 2023 年 2 月 15 日までで、同じ end date だが 4 月開始で別のサブスクリプションが必要な場合、2022 年 4 月 15 日 start date、initial term を 10 ヶ月、月次製品 SKU（標準の年次 SKU ではなく）を選択して新規サブスクリプションクォートを作成します。既存と co-term する目的で 12 ヶ月未満の新規サブスクリプションを作成する場合、より短いサブスクリプション期間については承認マトリクスに従って承認は必要ありません。さらに、12 ヶ月未満の期間長の New Business または Renewal Subscriptions では、別の既存サブスクリプションと co-term する場合を除き、承認が必要です。

#### SuperSonics Billing and Subscription Management Experience

GitLab の Cloud Licensing experience は、SaaS と Self-Managed のサブスクリプションプランの両方に適用される Quarterly Subscription Reconciliation と Auto-Renewals のアクティベーションとプロビジョニングを可能にします。さらに、Cloud Licensing experience は Operational Data を導入します。

SuperSonics Billing and Subscription Management experience と、それがクォートにどう影響するかについての詳細は、以下を参照してください:

- [SuperSonics and Sales Assisted Transactions](/handbook/sales/field-operations/order-processing/#auto-renewal-quarterly-subscription-reconciliation-and-operational-data-sales-assisted-transactions)
- [SuperSonics 機能を一時的に一時停止する方法](/handbook/sales/field-operations/order-processing/#how-to-temporarily-pause-auto-renewal-quarterly-subscription-reconciliation-and-operational-data)
- [More Resources](/handbook/sales/field-operations/order-processing/#resources)

#### Professional Services のクォーティング

**Professional Services をクォーティングする方法は 2 つあり、サービスが標準であるか scoped/custom であるかによって異なります。**

##### 標準サービスの Professional Services クォートを作成する

- 標準 PS SKU を販売している場合、これは設定されたスコープと納品物に関連付けられた時間数を持つテンプレート化されたパッケージで、既製の価格設定を提供します。これは custom scoping や追加の SOW 条件を必要としません。SKU は Zuora のクォートに追加し、注文書に含める必要があります。
- 標準サービスは、サブスクリプション製品 SKU と並んで、任意の New Business、Add-On、または Renewal クォートに追加できます（例: 12 ヶ月の SaaS Ultimate ディールを販売している場合、同じクォート上で別個の SKU を追加して instructor-led training オファリングを販売できます）。
- 標準サービスの場合、署名済み注文書があればディールをブッキングするのに十分です。注: 一部の顧客は PO の発行も必要とする場合があります。
- 2025 年 8 月 6 日以降、チャネルパートナー経由でサービスを販売する場合は、SKU 名に「(Ecosystem)」が含まれるサービス SKU を使用する必要があります（例: 「GitLab CI/CD Training - Onsite (Ecosystem)」）。
- Professional Services SKU の詳細については、[GitLab Services Catalog](https://about.gitlab.com/services/catalog/) を参照してください

##### 標準サービス商談をクローズに提出する前に

- 標準的な professional services SKU の場合、署名済み注文書のみが必要です。

##### Scoped/Custom Education または Services の Professional Services クォートを作成する

**一般的なクォーティング手順**

- Scoped/Custom Education または Professional Services は、Professional Services チームとのコンサルテーションが必要で、顧客が署名するカスタム SOW のドラフト作成を要するものです。これには、完全に前払いされていないあらゆる Professional Services または Education Services、および標準 SKU オファリングと custom-scoped サービスの組み合わせが単一の商談で販売されているケースが含まれます。
- Scoped/Custom Services は常にサブスクリプション製品 SKU とは別個に、スタンドアロン商談でクォーティングする必要があります（つまり、Scoped/Custom Services と 12 ヶ月の SaaS Ultimate SKU を同じクォート/商談で販売することは **できません**）。
- New Business Opportunity を作成し、「Opportunity Record Type」で「Professional Services Only」を選択します。
- 上記の「new Subscription Quote」のステップに従って、Professional Services 商談の下に新規サブスクリプションクォートを作成します。
  - **SOW に純粋に Professional Services のみが含まれる場合**、該当する GitLab Custom Service SKU を選択します:
    - **Custom Service Package - Fixed Fee ($330 per hour)**: この SKU は、Services Engagement Manager とスコープが定められた、設定された $330/時間の請求レートに基づく Fixed Fee 価格について、前払いで顧客に請求する予定の場合に使用します。ベストプラクティスとして、この SKU に対する交渉済み・承認済みの割引は、SOW の List Price 全体を最大小数点 2 桁まで割り引く方法で構造化されるべきです。
    - **Custom Service Package - Hourly T&M**: この SKU は、Services Engagement Manager とスコープが定められたプロジェクトで消費された時間について、毎月顧客に請求する予定の場合に使用します - Time & Materials。これは、予め定められたスコープと時間に基づいて固定価格で前払いで顧客に請求する Fixed Fee 構造とは異なります。
  - **SOW に純粋に Education Services のみが含まれる場合**、一致するトレーニングや認定の SKU を選択します。SOW の合計価格を反映するように価格を更新します。一致するものが見つからない場合は、`Custom PS Education Services` SKU を使用します。
  - **SOW に Professional Services と Education Services の組み合わせが含まれる場合**、同じ商談の下に 2 つの別個のクォートを作成します。
    - 正しい GitLab Custom Service SKU（Custom Service Package - Fixed Fee ($330 per hour) または Custom Service Package - Hourly T&M）を使用して 1 つのクォートを作成し、SOW のサービスのこの部分の List Price と承認済み割引を反映します。
    - 一致する Training/Certification/Education Services SKU を使用して 2 つ目のクォートを作成します。
    - これら 2 つのクォートの合計値が SOW の合計価格と等しくなるべきです。**注: この 2 つ目のクォートが追加されると、商談に対する「Professional Services Value」フィールドが上書きされる可能性があります。このフィールドが、全体的な SOW に従い、両方のクォートの合計を引き続き反映していることを確認してください。**
  - SOW のどの部分が Professional Services 用で、どの部分が Education Services 用かを判断するには、以下を参照してください: Education と Services は SOW の別個のセクションに分けられています。Education 部分は「CI/CD Training」や「Admin Training」などの標準 SKU 名で表示され、Education 部分全体の合計コストを含みます。Services 部分はカスタムですが、しばしば「Time and Materials」または「PS Hours」と表記され、Services 部分全体の合計コストを含みます。

**注:**

- カスタムサービス SKU は、Statement of Work を署名のために送信する **前** に SFDC のクォートにセットアップしてください。これにより、誤った SKU がセットアップされたり、Zuora CPQ に含めにくい方法で割引が交渉されたりした場合のバックエンドでの潜在的な問題を緩和できます。たとえば、Zuora CPQ の割引はクォートレベルで小数点 2 桁に制限されています。これは、当社のクォーティングシステムの動作にアラインする形で SOW に割引が含められるべきであることを意味します。
- 割引承認は scoping issue を通じて Engagement Manager によって処理され、レートの割引はクォートを通じて別途処理するべきです（[Approval Matrix](https://docs.google.com/document/d/1-CH-uH_zr0qaVaV1QbmVZ1rF669DsaUeq9w-q1QiKPE/edit#heading=h.dccvx02huo2y) に従って）。
- すべての Custom Service SKU は、SKU と SOW 要件のアラインメントを保証するため、クォートで Revenue からの承認が必要です。
- SAE/AE は、必要なすべての承認を取得する責任を引き続き負います。これには SKU や割引の承認に加えて、非標準の支払い条件も含まれます。承認されると、Custom SOW が署名のために顧客に送られます。

- Custom SOW の Professional Services チームからのサポートを得るには、[Services Calculator](https://services-calculator.gitlab.io/) を使って scoping issue を開始し、Professional Services の [Engagement Manager](/handbook/customer-success/professional-services-engineering/engagement-mgmt/) と協働します。

##### Scoped/Custom Education または Professional Services 商談をクローズに提出する前に

- 正しい SKU と SOW 金額に一致する金額を持つサポーティングクォートオブジェクトが作成されていることを確認します（上記のとおり）。
- 商談を Closed Won にできるようになる前に、以下のアイテムが商談に添付されている必要があることに注意してください:
  - **顧客と GitLab の VP, Revenue Accounting の両方** によって署名された SOW
  - Cost Estimate (COGS) スプレッドシート（リンクは PS チームから提供されます）
  - サポートする発注書 (PO)、または請求のために PO が不要であると顧客から述べられたメール

### PS Travel & Expense プロセス（2026 年 2 月 6 日から有効）

- すべての標準 PS SKU には、オンラインサービスの説明内に当社のオンライン [T&E ポリシー](https://about.gitlab.com/professional-services/skus/travel-and-expense/) への参照が直接含まれるようになりました（例: https://about.gitlab.com/professional-services/skus/cicd-workshop/）。
- T&E を請求するために PS クォートで T&E が必要なくなりました - この SKU は本日付で非表示となっています。GitLab は引き続き、PS チームの月次/四半期レポートからの実際の経費に基づいて、後払いで顧客に請求します（これは常に当社の慣行でした）
- すべての custom SOW には T&E 請求文言が含まれているべきです - これは SOW を作成する際に管理する PS engagement manager 次第です。
- 例外: 顧客が標準のパッケージ化された SKU（T&E 金額を含む custom SOW ではない）を販売する際に PO 目的で T&E SKU を注文書に必要とする場合は、Opportunity オブジェクト上の「Request Support」ワークフローを使って Deal Desk のケースを作成してください。Deal Desk が注文書を編集して以下の文言を含めます: 「For purposes of this Order Form, a Travel and Expense (T&E) budget of [$X,XXX.00] is included and should be reflected in the Customer's corresponding Purchase Order. Additional terms governing travel and expenses are available at: https://about.gitlab.com/professional-services/skus/travel-and-expense/」
- 今後この手作業を回避するため、Professional Services は QTC チームと連携して、正しいクォーティングと請求設定を持つ新しい Travel & Expense Budget SKU を作成しています。

### 顧客が間違った製品を買った

ディールが SaaS でブッキングされたが、顧客が Self Managed を希望していた（または逆の）場合、Add On Opp と Amendment クォートを構築してサブスクリプションを変更する必要があります。

1. Closed Won 商談に移動します。「Create New Add On Opportunity」ボタンをクリックします。
1. Add On Opp が作成されたら、上記のガイドに従って **Amendment Quote** を作成します。
1. Amendment クォートの製品セクションで:
      - 間違った製品行を削除します。製品名近くの画面左側にドロップダウン矢印があり、SKU を削除できます。
      - 正しい製品行（Self Managed か SaaS）を追加します。数量と価格は元の注文と全く同じであるべきです。
1. クォートを保存します。クォートの小計は $0.00 であるべきです。Self Managed から SaaS への切り替えにより税金の影響がある可能性があります。
1. 注文書の PDF を生成します。顧客は、サブスクリプションへの変更を認めるため、**注文書に署名する必要があります**。
1. 署名済みの注文書を商談に添付し、商談を承認に提出します。
1. $0 商談には PO は不要です。

ディールがクローズドウォンになると、顧客は正しい製品を発行されます。

### **Non-Standard Quotes**

時折、商談は通常のクォートフォーマットの範囲外の独自の構造を必要とする場合があります。これらのシナリオの例を以下に示します。Deal Desk は Account Owner と協働して商談を構造化し、クォートの作成に関するガイダンスを提供します。これらのシナリオのいずれかで支援が必要な場合は、商談で Deal Desk に Request Support してください!

#### Contract Reset

Contract Resets は「Early Renewal」を行うために使用されます。つまり、更新日前に新しい 12 ヶ月サブスクリプションを開始します。顧客が請求日を変更する必要がある場合、または期間途中で期間長を変更したい場合にも使用できます。Contract reset は元々サブスクリプションを購入した同じ当事者経由でのみリクエストできます。

- 関連する open 状態の Renewal 商談を開き、**「New Quote」** ボタンをクリックします。
- このボタンは、クォーティングエクスペリエンスの 2 ページのうち最初のページである Billing Accounts and Subscriptions ページを起動します。このページで新規サブスクリプションクォートを作成するための 2 つのオプションがあります:

  - 顧客に既存の Billing Account があり、Billing Account にリストされている同じ Sold To Contact を使って新しいサブスクリプションを販売する予定であれば、該当する Billing Account を選択して「New Quote」をクリックします。
  - 顧客に既存の Billing Account がない場合、または使う予定の Sold To Contact が既存の Billing Account のいずれにもリストされていない場合は、「New Billing Account」をクリックします。

- クォーティングエクスペリエンスの 2 ページ目（最終ページ）で、Quote Detail Information を入力します。

  - 注: アカウントレベルで「Subscription section」を開くと、顧客が購入してアクティブな全サブスクリプションのリストが表示され、関連するサブスクリプションを開くことでサブスクリプションと billing account を判断できます
- 上記の New Subscription Quote セクションの手順に従って、クォートに必要な情報を入力します。
  - **注: Start Date は新しいサブスクリプション期間の開始日、または「Early Renewal」日にするべきです。**
- Next をクリックし、上記のステップに従って製品と料金を更新します。
- **重要:** 次に、Renewal Opportunity 上の「Request Support」ワークフローを使用して Deal Desk に依頼し、credit 商談とクォートを作成して既存サブスクリプションをキャンセルしてください。このシナリオでは、既存サブスクリプションは新しいサブスクリプションに置き換えられます。Deal Desk は手動で Contract Reset Opp を生成し、クォートが完全に承認されると注文書に Contract Reset カスタム条件を追加して、新規サブスクリプションクォートに表示します。

GitLab.com サブスクリプションの場合、初期サブスクリプションがキャンセルされたときに顧客が無料にダウングレードされないようにするため、Deal Desk は以下のステップに従います。これらは [このプレゼンテーション](https://docs.google.com/presentation/d/1fv_QMzPJ4Al5AaPBNd-IW5dCwuac56ShrzcpjUO_S60/edit?usp=sharing) で詳しく説明されています。

- アカウントから「Subscription Products and Charges」の下にある既存サブスクリプションの関連 Subscription レコードをクリックします。
- `GitLab Namespace Id` と `GitLab Namespace Name` のデータをコピーして、新規サブスクリプションクォートの同じフィールドに貼り付けます。
- 準備ができたら、新規サブスクリプションクォートが Cancellation クォートの _前_ に Zuora に送信されるようにします。

このプロセスで問題が発生した場合、顧客は [リンクされた namespace を変更する](https://docs.gitlab.com/ee/subscriptions/gitlab_com/#change-the-linked-namespace) か、サポートに連絡できます。デモについては、[GitLab Subscription を Namespace にリンクする](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/4770#note_1194437643) を参照してください。

- Deal Desk は統合クォートの PDF を商談に添付します
- Sales チームは注文書を顧客に送って署名を求めます
- 署名済みの注文書を renewal 商談と credit 商談の両方にアップロードし、両方の商談を承認に提出します
メインの contract reset 商談で、Deal Desk は「Opportunity Category」フィールドに「Contract Reset」を設定します。関連する credit 商談で、Deal Desk は「Opportunity Category」フィールドに「Credit」を設定します。

すべての Contract Reset 商談は「Renewal」として分類され、ARR Basis の対象となり、シナリオに応じて全体的な Net ARR に影響します。

Contract Reset の ARR 計算の詳細については、[ARR in Practice](https://internal.gitlab.com/handbook/sales/annual-recurring-revenue-arr/) を参照してください。

#### Concurrent Subscriptions

Concurrent Subscriptions は、長期にわたる大規模顧客の移行をサポートする目的で発行された Self Managed と SaaS の 2 つのユニークなサブスクリプション（インスタンス）です。**これは顧客が同じインスタンス上で Self Managed と SaaS を使用できることを意味しません。**

Privilege Access Token (P.A.T) を持つ SaaS サブスクリプションは、トライアル経由で延長できません。クライアントの（ほぼ）期限切れの P.A.T 付きサブスクリプションを延長する必要がある場合、1 ヶ月の新規サブスクリプションの $0 注文が必要です。**担当者は新しい商談と新規サブスクリプションクォート（Initial Term & Renewal Term = 1 ヶ月）を構築し、Opportunity オブジェクト上の「Request Support」ワークフローを使ってケースを作成することで Deal Desk と協働します。また、[legal](/handbook/legal/customer-negotiations/#requesting-content) で説明されているプロセスに従って Legal リクエストを提出し、注文書を最終化してください。**

このディール構造の承認は [標準的な承認マトリクス](https://docs.google.com/document/d/1-CH-uH_zr0qaVaV1QbmVZ1rF669DsaUeq9w-q1QiKPE/edit#heading=h.f8920bj8v6l9) に従います。

**ディール構造要件**

- Self Managed と SaaS インスタンスが同時に作成/ブッキングされる場合、Start Date と End Date は両方のサブスクリプションでアラインする必要があります。
- 顧客が期間途中で移行を追加する場合、追加されるサブスクリプションの End Date は既存サブスクリプションとアラインする必要があります。(例: Self Managed 1 年。顧客は移行作業をサポートするため期間中ほどで SaaS インスタンスを追加。Self Managed Subscription の開始日が 2000-01-01 から 2000-12-31 の場合、SaaS インスタンスの期間日付は 2000-06-01 から 2000-12-31 にすべきです。)
- SKU タイプは標準的なブッキング要件の対象となります - ディールに Annual Payments が含まれていない限り、SKU 期間は Initial Term と一致する必要があります。
- 移行の条件と目的を示すカスタム法務文言が、すべての注文書で必要です。
- Self Managed と SaaS の Sold To と Bill To Contact は同じ人物でかまいません。サブスクリプションは同じ billing account にアタッチできます。
- 各サブスクリプション（Self Managed / SaaS）は SFDC 内で別個の商談 / 別個のクォートでブッキングされます。便宜上、統合された注文書が顧客に提供されます。

Deal Desk は Sales、Legal、Revenue と密に協力し、すべてのブッキング要件が満たされるようにします。このディールを正確に構造化するため、Deal Desk と直接協働してください。ディール交渉の早い段階で sales support をタグしてください。

顧客が 1 ヶ月だけ並行アクセスを必要とする場合は、Support Team を通じてトライアルライセンスで対応できます。

#### Multi-Year Deals

複数年ディールの場合、Initial Term はサブスクリプション期間の月数（24、36、48、60 など）を反映するよう更新するべきです。

- 2025-08-06 以降、すべての複数年ディール（つまり期間が 12 を超えるクォート）は ramp クォートとして構造化され、「1 Year」SKU を使用する必要があります。「Payment Schedule」クォートフィールドを活用して、全額前払いまたはその他の非標準支払いスケジュールをリクエストします。
  - 以前の状態: 以前の状態では、複数年ディールでの annual payments には「1 Year」SKU を使用し、複数年ディールでの prepayment には複数年 SKU（例: SaaS - Premium - 2 Year）を使用していました。
  - 2025-08-06 以降の新状態: 支払いスケジュールに関係なく、複数年ディールは「1 Year」SKU（例: SaaS - Premium - 1 Year）を活用するべきです。Payment Schedule フィールドを使用して常に支払いスケジュール（prepayment vs. annual payments）を指定します。
  - なぜこの変更を行ったか:
    - 複数年注文書では、ディールがフラットで実際にはランプしていない場合でも、常に年単位の内訳が表示されます。年次コストを表示するために注文書を編集してもらうために Deal Desk に連絡する必要がなくなります!
    - 複数年クォートがフラットで実際にはランプしていない場合、後の amendment で contract reset なしにランピングクォートに変えることができます。
  - これらの変更の詳細については、[Ecosystem, Amendment, and Multi-Year Quoting Demo + Overview Video](https://gitlab.highspot.com/items/68843276d73abc59374fb9ec?lfrm=shp.0) を参照してください。  

Multi-Year Deals の ARR 計算の詳細については、[ARR in Practice](https://internal.gitlab.com/handbook/sales/annual-recurring-revenue-arr/) を参照してください。

#### Ramp Deals

Ramp Deal は、製品の価格、数量、割引が設定された年次スケジュールにわたって変動するか、サブスクリプション期間全体にわたってフラットでありうる複数年ディールです。
顧客は、ramp スケジュールで計画されたすべてのユーザーに対して、前払いまたは年次で支払います。

- ramp [add-on](/handbook/sales/field-operations/sales-operations/deal-desk/#amend-subscription-quote) では、顧客は設定されたスケジュールなしにサブスクリプション全体でユーザーを追加し、比例配分のレートで支払います。
- Ramp ディールは複数年ディールに限定され、12 ヶ月の ramp 期間です。詳細は [ARR in Practice](https://internal.gitlab.com/handbook/sales/annual-recurring-revenue-arr/) を参照してください。

##### Ramp Deal の作成方法

以下は 2 セットの手順です: (1) 2023-04-03 以前に作成された既存の ramp ディールを修正する方法、(2) CPQ X: Quote Studio 経由でまったく新しい ramp ディールを作成する方法。

###### 追加の Ramp Deal イネーブルメント資料

このパラグラフに続くステップバイステップのクォーティングガイドに加えて、以下の追加のクォーティングリソースもチェックしてください!

1. [Highspot Page](https://gitlab.highspot.com/items/63c04679ce74a0ae63ca5e49)
2. [RISE Course](https://rise.articulate.com/share/HzJgdaWzK1C_SwlMSCwQchgV9PbpRNvi#/)

###### Ramp Deal とは?

Ramp Deals は、製品の価格、数量、または割引が異なる ramp 区間（時間ベースの期間）にわたって段階的に変動しうる複数年ディールです。これにより、顧客は成長するビジネスにアラインしたディールを交渉する柔軟性を得られます。

- 例: 数量が増加する複数年 ramp ディール

1. 1 年目: SaaS - Premium - 1 Year | QTY: 100 | Effective Price: $228 per user per year
2. 2 年目: SaaS - Premium - 1 Year | QTY: 150 | Effective Price: $228 per user per year
3. 3 年目: SaaS - Premium - 1 Year | QTY: 200 | Effective Price: $228 per user per year

- 例: 価格が増加する複数年 ramp ディール

1. 1 年目: SaaS - Premium - 1 Year | QTY: 100 | Effective Price: $200 per user per year
2. 2 年目: SaaS - Premium - 1 Year | QTY: 100 | Effective Price: $214 per user per year
3. 3 年目: SaaS - Premium - 1 Year | QTY: 100 | Effective Price: $228 per user per year

- 例: 価格と数量の両方が増加する複数年 ramp ディール

1. 1 年目: SaaS - Premium - 1 Year | QTY: 100 | Effective Price: $200 per user per year
2. 2 年目: SaaS - Premium - 1 Year | QTY: 150 | Effective Price: $214 per user per year
3. 3 年目: SaaS - Premium - 1 Year | QTY: 200 | Effective Price: $228 per user per year

###### Ramp Deal ポリシー

- コア要件
  - Ramp Deal は、任意の New Business または Renewal Subscription で作成できます - これにはダイレクト購入、またはチャネル/アライアンスパートナー経由の購入が含まれます。
  - ramp ディールへの amendment は ramp ディールとして行う必要がありますが、非ランピングサブスクリプションを amendment で ramp ディールに変えることはできません - それは更新時にのみ可能です。
- 期間長要件
  - ramp ディールは **年次 ramp 区間** でのみ作成できます。たとえば、毎年数量および/または価格でランプする 3 年ディールを販売できます。例: 1 年目 = 100 ユーザー、2 年目 = 150 ユーザー、3 年目 = 200 ユーザー。
  - より短い区間で ramp ディールを作成することはできません。例: **最初の 6 ヶ月で 100 ユーザー、次の 6 ヶ月で 150 ユーザーの 12 ヶ月ディールを作成することはできません。**
- ユーザー数要件
  - **ramp ディールの過程で、ユーザー数を減少させてはいけません** - 例: ramp 区間 1 で 100 ユーザー販売した場合、将来の ramp 区間では少なくとも 100 ユーザー販売する必要があります。
  - **ramp ディールの過程で、ARR を減少させてはいけません** - 例: 区間の小計を減少させてはいけません。年々割引を増やす場合は、2 年目/3 年目の Interval Subtotal が前の Interval Subtotal より低くならないようにしてください。

**これらの要件を満たさずブッキングのために提出された商談は、Order Management チームによって却下されます。**

###### 2023-03-01 以前に作成された既存の ramp ディールを修正する方法

2023-03-01 以前に作成された ramp ディールを修正するには、Opportunity オブジェクト上の「Request Support」ワークフローを使って Deal Desk のケースを作成してください。Deal Desk がクォートと注文書を作成します。**各 ramp 期間について以下の情報を提供してください:**

- 開始日と期間長
- 製品、数量、割引
- Bill To と Sold To Contact
- Invoice Owner と Invoice Owner Contact（Partner Deal の場合）
- 支払い条件（例: Net 30）
- その他のリクエスト（例: Price Lock、true up 文言など）

商談で、Deal Desk は「Opportunity Category」フィールドに「Ramp」を設定します。

###### CPQ X: Quote Studio 経由で Ramp Deal を作成する方法

ramp ディールを作成するには、上記の関連する [New Subscription Quote](/handbook/sales/field-operations/sales-operations/deal-desk/#new-subscription-quote)、[Amend Subscription Quote](/handbook/sales/field-operations/sales-operations/deal-desk/#amend-subscription-quote)、または [Renew Subscription](/handbook/sales/field-operations/sales-operations/deal-desk/#renew-subscription-quote) クォートセクションで共有されている基礎ステップに従います。

**Quote Detail セクション**

- Quote Detail ページで、Initial Term（New Business または Amend の場合）または Renewal Term（Renew の場合）が複数年期間で設定されていることを確認します。例: 24 ヶ月 New Business ramp ディールを販売するには、Initial Term が 24 で設定されていることを確認します。
- **ramp クォートを作成するには、Ramp トグルボタンをクリックします**
- 複数年の Initial Term または Renewal Term の数値を入力して Ramp ボタンをクリックすると、Subscription セクションにサブスクリプションの各年のユニークな ramp 区間が表示されます。
  - たとえば、2023-04-01 開始の 3 年 ramp ディールを販売している場合、3 つの区間が表示されます:
    - 2023-04-01 〜 2024-03-31
    - 2024-04-01 〜 2025-03-31
    - 2025-04-01 〜 2026-03-31
- Product SKU を検索して + アイコンを押すことで、Product SKU を最初の ramp 区間に追加します。Product SKU を最初の ramp 区間に追加すると、その後の ramp 区間にも自動的に追加されます。
  - **ramp ディールでは、常に「1 Year」SKU を選択します**
- 最初の ramp 区間に Product SKU を追加した後、各 ramp 区間をクリックして、各 ramp 区間の数量および/または価格を調整します。
- 各 ramp 区間で製品を正しく構成した後、**各 ramp 区間をクリックして、作成しようとしているディールを正しく反映していることを確認してください。**
- すべての ramp クォートは「1 Year」SKU を使用する必要があるため、「Payment Schedule」クォートフィールドを活用して、全額前払いまたはその他の非標準支払いスケジュールをリクエストします。
  - 上記のポリシー要件を念頭においてください。**これらの要件を満たさずブッキングのために提出された商談は、Order Management チームによって却下されます。**

クォートを最終化するため、「Preview Metrics」をクリックして各 ramp 区間の合計とクォート全体の小計をレビューします。保存されたクォートを保存して読み込むには、まず Save をクリックし、次に「Submit」をクリックします。Submit をクリックすると、Quote Studio は保存されたクォートにリダイレクトします。

注意点:

- Quote Subtotal は複数年ディール全体の価値を反映します。
- Ramp クォートは常に「1 Year」Product SKU を使用するべきです。
- 複数年 Ramp Deals はデフォルトで前払いです。Annual Payments の場合、**Payment Schedule** フィールドで「Annual Payments」を選択する必要があります。これにより、クォート上の Annual Payments トグルフィールドが自動的に更新され、当該注文を年次請求/支払いスケジュールにコミットする文言が注文書に反映されます。

**これらのステップを補完するため、New Subscription クォートの各ステップの実演を見るには、[Highspot Page](https://gitlab.highspot.com/items/63c04679ce74a0ae63ca5e49) または [RISE Course](https://rise.articulate.com/share/HzJgdaWzK1C_SwlMSCwQchgV9PbpRNvi#/) をレビューしてください。**

Ramp Deals の ARR 計算の詳細については、[ARR in Practice](https://internal.gitlab.com/handbook/sales/annual-recurring-revenue-arr/) を参照してください。

### **クォート - その他**

#### Professional Services SOW Amendment (Change Order) の処理方法

時折、商談がブッキングされた後に Custom SOW に変更が加えられることがあります。これらの変更には、納品（請求）スケジュールや納品されるサービスのタイプが含まれる可能性があります。商談の合計価値は **変更すべきではありません**。商談の合計価値がマイナスの影響を受ける場合、これには内部 refund と注文の再ブッキングが必要です。この Change Order の結果として追加の収益が発生する場合、_delta value_ を考慮するために新しい Professional Services Only 商談が必要です。

#### Decommission 商談の作成

Deal Desk は、Sales Assisted と Web Direct の両方の注文に対して Decommission（Refund）Opportunities を作成します。すべての refund リクエストは AR チーム（AR@gitlab.com）に送るべきです。承認されると、AR チームは Sales Support（Deal Desk）にタグして refund 商談の作成を依頼します。次に Deal Desk が Billing Ops チームに連絡し、Billing Ops チームが Zuora で refund を処理します。

#### Salesforce Contact レコードに「GitLab Admin」を追加する

クォート上の「Sold To」連絡先が GitLab Admin でない場合、商談を承認に提出する際にエラーが発生します。連絡先レコードを GitLab Admin に更新して、商談を承認に提出できるようにするには、以下のステップに従います。

1. 顧客アカウントレコードの Contacts に移動します
2. GitLab Admin にしたい連絡先レコードを選択します
3. 連絡先の `Role` を編集して GitLab Admin を選択します
4. 連絡先レコードを保存します

#### 承認からクォートをリコールする

クォートレコードは承認に提出されるとロックされます。すでに承認にクォートを提出したが、さらに変更が必要であることがわかった場合、承認からクォートをリコールし、変更を加えて再提出できます。承認からクォートをリコールしてさらに編集するには:

1. クォートの Approval History セクションまでスクロールして `Recall` をクリックします
2. クォートに変更を加えて保存します
3. Submit for Approval

#### 既存のクォートをクローンする方法

既存のクォートをクローンして時間を節約したい場合は、以下を行うことでできます:

1. クローンしたいクォートの Quote Detail ページで、「Clone Quote」をクリックします。
2. Quote Clone Configuration ページで、以下のオプションを選択します:
    - Clone Products: クォートに関連付けられた製品をクローンするように選択します。このオプションは New Subscription クォートにのみ適用されます。クォートに関連付けられた製品が現在の製品カタログのバージョンで維持されていることを確認します。
    - Maintain Quote: 新しくクローンされたクォートを編集できる、クォートオブジェクトワークフローの最初のステップに案内されるように選択します。フローはクォートタイプ（New Subscription、Amendment、Renewal）に基づいて、クォートオブジェクトワークフローで構成されています。
3. Next をクリックします。
    - Maintain Quote オプションを選択した場合、新しくクローンされたクォートの Quote Wizard の最初のステップにリダイレクトされます。
    - Maintain Quote オプションを選択しなかった場合、新しくクローンされたクォートの Quote Detail ページにリダイレクトされます。
4. amendment（add-on または renewal クォート）の製品はクローンできないことに注意してください。

#### クォートの有効期限を延長する方法

1. 延長したいクォートの Quote Detail ページで、「Edit Quote Details」をクリックします。
2. 「Edit Quote Details」ページで「Valid Until」フィールドを新しい有効期限に変更します
    - クォートは更新日から 30 日を超えて延長すべきではありません。
3. ページの下部で save をクリックすると、新しい有効期限がクォート PDF に反映されます。

#### 同じクォート上で異なる製品ティア、デプロイメントタイプ、期間長をクォーティングする

1 つのクォートで異なる製品ティア（premium と ultimate）を扱えますか?

- 1 つのクォートで異なる製品ティア（premium と ultimate）を扱うことはできません。別々のインスタンスとして 2 つのクォートに分ける必要があります。

1 つのクォートで異なるデプロイメントタイプ（SaaS と Self-Managed）を扱えますか?

- 1 つのクォートで異なるデプロイメントタイプ（SaaS と Self-Managed）を扱うことはできません。別々のインスタンスとして 2 つのクォートに分ける必要があります。

1 つのクォートで異なる期間長を扱えますか?

- 1 つのクォートで異なる期間長を扱うことはできません。別々のインスタンスとして 2 つのクォートに分ける必要があります。

#### Draft Proposal の作成方法

[クォート作成](/handbook/sales/field-operations/sales-operations/deal-desk/#zuora-quote-configuration-guide---standard-quotes) の標準プロセスに従います。Draft proposal を生成する前にクォートオブジェクトを承認する **必要はありません**。

1. Edit Quote Details をクリックします。
2. DRAFT - New Proposal クォートテンプレートを選択します。Save。
3. Generate PDF をクリックします。Draft Proposal PDF が商談の Notes & Attachments セクションに添付されます。

**重要な注意点**

- Draft Proposal PDF は注文書ではありません。注文書を生成する前に、すべてのクォートは該当する承認プロセスを通過する必要があります。Draft Proposals は承認が保証されているわけではありません。
- Draft Proposal PDF は、いかなる状況でも注文書の代わりとして受け付けられません。正当な注文書を生成するには、「Edit Quote Details」をクリックし、承認に提出する前に、Quote Template を Draft 選択から商談に関連する注文書テンプレートに更新する必要があります。

#### Payment Schedule

- 元の Closed-Won 商談をクローンします。商談名に「Amended SOW」を含めるよう更新します。
- 元の Closed-Won 商談を duplicate として更新し、Amended SOW Opportunity にリンクします。
- 元の closed-won 商談と同一のクォートを構築します。クォートを primary に更新します。
- 元の SOW、Amended SOW、Cost Estimate へのリンクを Amendment Opportunity に添付します。
- 商談を Deal Desk/Billing Approval に提出します。
- Amended SOW の Opportunity Close Date は、元の Closed-Won 商談に一致するよう手動で更新するべきです。

FY22 では、年次払いの recurring サブスクリプション製品の複数年ディールは 1 つの商談で記録されます。

**商談構造**

- Invoice Only Opp タイプは New Business であるべきです
- 個々の商談には、請求される金額と等しいクォートオブジェクトが必要です
- すべての製品、日付、連絡先は元の商談/クォートと一致するべきです
- Invoice Only クォートオブジェクトを「New Subscription」クォートとして構築します

**請求金額**

商談に関連付けられたすべての支払いが等しい場合（例: $10,000 の 3 回支払い）、元の商談のクォートは商談期間全体を反映する必要があります。

**例**

3 年サブスクリプション $30,000 を、$10,000 の年次 3 回支払いに分解。

- 1 つの Opp と 1 つの Primary Opp Quote のみ - 3 年 New Subscription Quote（1 Year Product SKU を使用）。Term Length は 36 にすべきです。

支払い金額または年あたりのユーザー数が同一でない場合（例: 1 年目 $15,000、2 年目 $10,000、3 年目 $5,000）- 3 つの商談を作成し、それぞれに primary opp quote を持たせます。元の商談のクォートは、サブスクリプションの 1 年目（請求期間）のみ、商談期間全体と金額（36 ヶ月と 3 年の小計）を反映するべきです。2 つ目と 3 つ目の商談にはクォートオブジェクトを作成（それぞれ 12 ヶ月期間）し、金額は 0 に更新し、正しい NetARR のみが反映されるべきです。

**例**

3 年サブスクリプション $30,000 を 3 回支払いに分解。1 年目 $10,000、2 年目 $7,000、3 年目 $13,000

- 1 年目の Opp Quote - 1 年 New Subscription Quote（1 Year Product SKU を使用）。Term Length は 12 にすべきです。商談は 36 ヶ月期間と 3 年の小計を反映するべきです。
- 2 年目の Opp Quote - 1 年 New Subscription Quote（1 Year Product SKU を使用）。Term Length は 12 にすべきです。商談は 12 ヶ月期間と金額 = 0 を反映するべきです。正しい NetARR のみが設定されるべきです。
- 3 年目の Opp Quote - 1 年 New Subscription Quote（1 Year Product SKU を使用）。Term Length は 12 にすべきです。商談は 12 ヶ月期間と金額 = 0 を反映するべきです。正しい NetARR のみが設定されるべきです。

**例** Professional Services Deal - 商談金額 $300,000。Custom SOW で 4 つの納品物が顧客に明示され、各納品物には異なる納品日が含まれます。顧客は各納品物の完了後に請求されるため、これには 4 つの商談が必要です。

- Opp 1（元の商談） - 1 つ目の納品物 - $50k のサービス
- Opp 2（元からクローン） - 2 つ目の納品物 - $50k のサービス
- Opp 3（元からクローン） - 3 つ目の納品物 - $100k のサービス
- Opp 4（元からクローン） - 4 つ目の納品物 - $100k のサービス

複数の請求を必要とする商談を作成するには:

- 元の予測商談をクローンします
- 商談名に「Deliverable # and the Date of delivery」を含めるよう更新します。close date はすべての商談で同じにすべきです（SOW と Cost Estimate が 2020/1/1 に受信された場合、将来の期間に請求される場合でもすべての商談は close date として 2020/1/1 を示すべきです）。
- 納品物の価値を反映するクォートを作成します。同じ SKU と割引（該当する場合）を使用して各クォートを構築します。start date は SOW に記載された納品日と一致するべきです。
- クォートは標準的なクォート作成プロセス（クォート構築プロセスへのリンク）に従うべきです。クォートを primary に設定します。すべての商談で繰り返します。すべての商談の合計金額が SOW の合計金額と等しくなるべきです。
- 署名済み SOW と Cost Estimate のリンクを **各商談に** 添付します。
- 商談を Deal Desk/Billing 承認に提出します。Billing チームが各納品物商談に将来の請求期間のフラグを立てます。

注: 各商談の「Payment Schedule」フィールドは、該当する値「Annual Payments」または「Custom Payment Schedule」のいずれかで設定するべきです。

A. **異なる価格で既存ライセンスにユーザーを追加するには**、新しい別個の製品行にユーザーを追加してください。

B. 同じ価格で既存ライセンスにユーザーを追加するには、追加の行を加える必要がなく（更新時に複数行を回避するため）、数量を増やすことで既存の製品行を更新するべきです。

C. **複数年ディールの true-up/add-on クォートを作成するには**、true-up を追加し、**同じ** ユーザー数でライセンス数を増やしてください。複数年ディールの期間中はユーザー数を減らせない点に注意してください。例: 3 年ディールの場合、顧客が 100 ライセンス数を 25 ユーザー超過した場合、(1) 25 ユーザーの True-Up SKU、(2) ライセンス数量を 100 から 125 に増やします。

D. **顧客が更新クォートに署名したが、更新日前に true-up が必要な場合**、closed renewal 商談から add-on 商談を作成し、更新と同じ start date を使用し、必要な true-up を追加します。

E. 1 つの商談の下に **複数のクォートオブジェクト** がある場合、使用しているクォートは **Primary とマークされている必要があります。**

F. 顧客が期間途中で追加ユーザーを加えたいだけの場合は、これは add-on と amend subscription クォートオブジェクトで処理できるため、contract reset の処理は避けるべきである点に注意してください。

G. 追加ユーザーの遡及的な amendment は更新前に処理できますが、更新が処理されると、過剰使用は true-up として顧客に請求することでのみ処理できる点に注意してください。

### Alliance Marketplace Private Offers

Deal Desk は AWS と GCP の Private Offer の作成と受領を管理します。

#### プロセス概要

- **すべての Private Offer リクエストは、Opportunity オブジェクト上の「Request Support」ワークフローを使って Deal Desk のケースを作成することで行う必要があります。** すべての Private Offer リクエストには以下の情報を含める必要があります:
  - 顧客の AWS または GCP Billing ID
  - 顧客連絡先の名前とメールアドレス
  - レガシー標準製品カタログ上の MCPO/CPPO Add-On 商談のみについて: これらのクォートは Partner Margin がクォートで別個に識別された新しい Ecosystem 製品カタログにまだ移行していないため、Private Offer ケースリクエストで Partner Margin を確認してください。これを怠ると処理が遅れる可能性があります。
  - GCP ディールの場合、Private Offer リクエストを行う際に支払い方法（Prepay または Postpay）を確認する必要があります
    - 注: この連絡先には、Marketplace で Private Offer を受領するために必要な権限が必要です
- Private Offer リクエストが行われた後、Deal Desk はリクエストをレビューし、クォートが AWS/GCP 向けに適切にタグ付けされていることを確認し、注文書の受領セクションに AWS または GCP marketplace の文言も含まれていることを確認します。
- 次に Deal Desk が private offer を作成し、商談所有者によって識別された連絡先にオファーを送信します。商談所有者には、オファーステータスをトラッキングするための通知メールが送信されます。
- 受領時に、GitLab チームにメールが送信され、Deal Desk はディールをクローズするためのドキュメントを Chatter します。
- AWS と GCP のディールには署名は不要です。
- ディールが Closed Won になると、ライセンスキーファイル/サブスクリプション詳細が GitLab Order Form 上の「Sold To」連絡先に自動的に送信されます。
-Route-to-market の変更には contract reset が必要です。Credit は注文書に含まれず、元の支払い方法に基づいてブッキング時に refund されます。
-すべての Private offer は Tackle 経由で送信されます。
- tackle に関する問い合わせは support@tackle.io に連絡できます
-AWS Portal に関する問い合わせ（private offer の受領トラブル、アカウントのセットアップなど）は mpcustdesk@amazon.com に連絡できます
- GCP Portal に関する問い合わせは private-offers-team@google.com に連絡できます

#### Deal Desk と Partner Territory Managers (PTM) や Partner Account Managers (PAM) との協働

注: Deal Desk は Private Offer の作成、Private Offer の編集、Private Offer の受領のみを扱います。Alliances ディールに関連するその他のあらゆる事項については、**Sales は適切な PTM または PAM と協働する必要があります。** Alliances チームは、成功する marketplace トランザクションに不可欠な支援とベストプラクティスを提供できます。

PTM や PAM に連絡するには、#cloud-aws または #cloud-gcp の Slack チャンネルを使用してください。

#### Alliance Deal/Private Offer リソース

追加情報については [Cloud Co-selling](https://internal.gitlab.com/handbook/alliances/cloud-co-selling/) を参照してください。

### 商談分類

以下のフィールドは、標準 vs 非標準の商談を区別するため、Deal Desk によって維持されます:

#### Opportunity Category

Opportunity Category 定義は [こちら](https://docs.google.com/document/d/1UaKPTQePAU1RxtGSVb-BujdKiPVoepevrRh8q5bvbBg/edit#heading=h.te2fab3byieu) で確認できます。

#### Opportunity to Decommission

- これは lookup フィールドで、元の商談（現在 decommission されているもの）の名前が入力されます。このフィールドは Opportunity Category = Decommission の場合に validation rule で必須となります。保存時に、リンクされた商談は process builder 経由で自動的に「Decommissioned」に分類されます。

#### Payment Schedule

- Prepaid（デフォルト値）
- Annual Payments
- Custom Payment Schedule

#### Quote Entity Information

注文書では、GitLab エンティティ情報は以下のルールで設定されます。この表は、請求書を配送する先のダイレクト顧客またはリセラーの [ISO-2 billing country code](https://www.nationsonline.org/oneworld/country_code_list.htm) に基づきます:

**New Subscription と Renew Subscription クォート**

| 顧客の Billing Country | パートナーの Billing Country | GitLab Quote Entity |
| ------ | ------ | ------ |
| NL | NL | BV (NL) |
| DE  | DE | GmbH (DE)|
| UK | UK | Ltd (UK) |
| NL、DE、UK、AU 以外のすべての国  |NL、DE、UK、AU 以外のすべての国 | Inc. (US) |
| AU  | AU | PTY LTD (AU) |

**注** ダイレクトディールの場合、Billing Country はクォートオブジェクトにリストされた Bill To 連絡先の郵送先住所に基づきます。パートナーディールの場合、Billing Country はクォートオブジェクトにリストされた Invoice Owner Contact の郵送先住所に基づきます。

**Amend Subscription クォート**

| Initial Transaction Method | Amendment Transaction Method | GitLab Quote Entity |
| ------ | ------ | ------ |
| Web Direct | Web Direct | Inc. (US) |
| Web Direct   | Sales-Assisted | Inc. (US) |
| Sales-Assisted | Sales-Assisted | base subscription の billing account 上と同じ quote entity |
| Sales-Assisted  | Web Direct | base subscription の billing account 上と同じ quote entity |

**注**: Web store を通じて発注されたすべての initial web direct subscription は US entity に配置されます。Web store 経由で当初購入されたサブスクリプションへの sales-assisted add-on の場合、amendment クォート/注文書は US entity を反映する必要があります。

**Custom Quote Entity ルール**

| SFDC Account Name | Billing Account の名前 | Invoice Owner フィールドの例外ルール用検索ワード | GitLab Quote Entity |
| ------ | ------ |------ |------ |
| [Amazic EMEA (Parent)](https://gitlab.my.salesforce.com/0016100001ecGXx?srPos=0&srKp=001) | Amazic, Amazic BV, Amazic Germany GmbH, Amazic UK Ltd | "Amazic"| Inc. (US)|
| [Google Cloud (Parter)](https://gitlab.my.salesforce.com/0014M00001nJhks)  | Google Cloud Marketplace | "Google Cloud Marketplace" |Inc. (US) |
| [Amazon Web Services](https://gitlab.my.salesforce.com/0014M00001ldTdt?srPos=1&srKp=001) | Amazon Web Services, Inc. | "Amazon Web Services" |Inc. (US) |
| [Epidata SA](https://gitlab.my.salesforce.com/00161000015Lyf9?srPos=0&srKp=001) | Epidata SA | "Epidata SA" | BV (NL) |
| [Epidata LLC](https://gitlab.my.salesforce.com/a0u8X00004iUosZ) | Epidata LLC | "Epidata LLC" | Inc. (US) |
| [Epidata Columbia SAS](https://gitlab.my.salesforce.com/a0uPL0000001DGC) | Epidata Columbia SAS | "Epidata Columbia SAS" | Inc. (US) |

##### Zuora の Account ID を更新する方法

Zuora のアカウント情報は `Account IDs` 経由で Salesforce のアカウント情報にリンクされます。この情報が更新されていない場合、Zuora は既存の請求またはサブスクリプション情報を新しいクォートに同期できません。

1. Zuora の Customers タブで、アカウント名を検索して、Account Overview ページに移動します
1. CRM Account ID にハイパーリンクされたアカウント名と緑のチェックマークが表示されていることを確認します。
1. 黄色の感嘆符が表示される場合は、マージ後に残ったプライマリアカウントに移動します。アカウントページ URL の最後の 15 文字をコピーして、Zuora の CRM Account ID フィールドに貼り付けます。Save をクリックします。

Zuora が正しいアカウントに正常にマッピングされると、緑のチェックボックスが表示されます。

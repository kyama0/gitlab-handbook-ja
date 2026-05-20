---
title: "Go to Market"
description: "オペレーション、手順、ドキュメント"
upstream_path: /handbook/sales/field-operations/gtm-resources/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-12T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-02-27T11:50:06+01:00"
---

---

## チームへの連絡（社内）

### Issue とプロジェクト

- [Sales](https://gitlab.com/groups/gitlab-com/sales-team/-/issues) - 一般的なセールス関連のニーズと Issue
- [Marketing](https://gitlab.com/groups/gitlab-com/marketing/-/issues) - ウェブサイト、製品、デザイン、イベント、ウェブキャスト、リードルーティング、ソーシャルメディア、Developer Relations に関連するすべての Issue
- [Customer Success SA Triage](https://gitlab.com/gitlab-com/customer-success/sa-triage-boards) - 技術的プリセールスリクエスト
- [Salesforce での社内サポート依頼](/handbook/sales/field-operations/requesting-internal-support/)
- [HelpLab](https://helplab.gitlab.systems/esc)（Okta 経由） - Salesforce のバグ修正と機能リクエスト（IT）

### Slack: 有用な Slack チャンネルのリスト

- `#customer-success`
- `#sales-support`
- `#sdr_global`
- `#smb`
- `#mktgops`
- `#it_help`
- `#marketing_programs`
- `#marketing`
- `#developer-relations-programs`

## 用語集

| 用語 | 定義 |
| ---- | ---------- |
| Accepted Lead | Business Development Rep または Sales Development Rep が、qualified in または qualified out になるまで取り組むことに同意したリード |
| Account | salesforce.com で追跡されている組織。アカウントは見込み顧客、顧客、元顧客、インテグレーター、リセラー、見込みリセラーのいずれかになり得る |
| AM | Account Manager |
| AE | Account Executive |
| APAC | Asia-Pacific |
| BDR | Business Development Representative |
| CAM | Channel Account Manager |
| CS | Customer Success |
| BDR | Business Development Represenative - アウトバウンド中心 |
| EMEA | Europe, Middle East and Africa |
| EULA | End User Licence Agreement |
| High intent | 購入または評価の強いインジケーターとなるイベント、ウェブキャスト、デモ |
| Inquiry | インバウンドリクエストまたはアウトバウンドマーケティング活動への応答 |
| IQM | Initial Qualifying Meeting |
| LATAM | Latin America（中南米全域を含む） |
| MQL | Marketo Qualified Lead - 体系的な方法（デモグラフィック/ファーモグラフィック/行動リードスコアリングなど）で資格認定されたインクワイアリー |
| MVC | [Minimal Valuable Change](/handbook/product/product-principles/#the-minimal-valuable-change-mvc)（Model View Controller ではない） |
| NCSA | North, Central, South America（段階的に廃止予定のレガシーリージョン） |
| NORAM | North America |
| Qualified Lead | Business Development Rep または Sales Development Rep がクオリファイし、オポチュニティに変換し、Sales Representative に割り当てたリード（Stage `0-Pending Acceptance`） |
| RD | Regional Director |
| ROW | Rest of World |
| SAE | Strategic Account Executive |
| Sales Admin | Sales Administrator |
| Sales Serve | クォータを背負うセールスチームのメンバーが商談をクローズするセールス手法 |
| [SAO](/handbook/sales/field-operations/gtm-resources/#opportunities) | Sales Accepted Opportunity - Initial Qualifying Meeting に続き、Sales が追求することに同意したオポチュニティ |
| SDR | Sales Development Representative - インバウンド中心 |
| Self Serve | 顧客がウェブストアを通じてオンラインで購入するセールス手法 |
| SLA | Service Level Agreement |
| SQO | Sales Qualified Opportunity |
| CSM | Customer Success Manager |
| TEDD | Technology, Engineering, Development and Design - 企業における GitLab の最大潜在ユーザーを見積もるために使用 |
| UPA | Ultimate Parent Account |
| Won Opportunity | GitLab を購入するための契約に署名済み |

## カスタマーライフサイクル

カスタマーライフサイクルは、見込み顧客が GitLab について学び、セールスおよびマーケティングチームと交流する過程で進む、さまざまなマイルストーンを追跡するために使われる用語です。
各後続のマイルストーンは前のマイルストーンのサブセットであり、GitLab を知らない状態から GitLab の顧客（およびファン）になるまでの進捗を表します。

最も高い抽象度では、`lead`、`opportunity`、`customer` という用語を使用して、GitLab の顧客になるまでの過程を表します。
これら 3 つの用語は、salesforce.com のレコードタイプにも対応しています。

Lead => Opportunity => Customer

GitLab のカスタマーライフサイクルの概要は以下をご覧ください。このライフサイクルは Salesforce データの視点で作成されており、Sales、Marketing、Finance からのインプットをカバーするクロスファンクショナルなものです。

![Customer Lifecycle Flowchart](/images/handbook/sales/customer-lifecycle.jpeg)

加えて、上記のプロセスをより正確に追跡するために使われる、上記マイルストーン内のより詳細なステップは以下のとおりです。
それらは以下のように追跡されます。

| Funnel ステージ | レコードタイプ | ステータスまたはステージ |
| ------------ | ----------- | --------------- |
| Raw | Lead または Contact | Raw |
| Inquiry | Lead または Contact | Inquiry |
| Marketo Qualified Lead | Lead または Contact | MQL |
| Accepted Lead | Lead または Contact | Accepted |
| Qualifying | Lead または Contact | Qualifying |
| Qualified | Lead または Contact | Qualified (converted) |
| Pending Acceptance | Opportunity | 0 - Pending Acceptance |
| Sales Accepted Opportunity | Opportunity | 1 - Discovery |
| Sales Qualified Opportunity | Opportunity | 2 Scoping - 6 Awaiting Signature |
| Customer | Opportunity | Closed Won |

Qualifying から Qualified Lead に進むと、リードはオポチュニティに複製され、リードは qualified に設定され、以降使用されなくなります。

Lead or Contact: #lead--contact-statuses

Opportunity: #opportunity-stages

Sales Accepted Opportunity: #criteria-for-sales-accepted-opportunity-sao

## AE セールスキャパシティ

以下の計算式は、セールスキャパシティを測定/計画するために使用されます。
これは計算のみであり、目標設定と計画に使用すべきです。
セールスキャパシティは、以下の式には含まれないさまざまな要因（リードソース、セールス担当者の在籍期間、競合状況、地理的位置、担当者の生産性）に基づく個別の指標です。

- クローズまでの日数 - 180 日
- クローズまでの月数 - 6 か月
- 勝率 - 33%
- ロスまでの月数 - 3 か月（クローズまでの月数の半分、一定の脱落を想定）
- 平均月数 - 4（33.3% × 6 + 66.7% × 3）
- キャパシティゴール（[ステージ 1-6](#customer-lifecycle) のアクティブなオポチュニティ） - 40 オポチュニティ
- 月あたりの [SCLAU](/handbook/sales/field-operations/gtm-resources/#glossary) - 10（40 オポチュニティ / 4 か月）

## ハウツーとセットアップ

### イベント

カンファレンス、フィールドイベント、自社主催イベント

イベントの詳細は Field Marketing チームが所有しており、システムトラッキング、ランディングページ、リマインダー、フォローアップの実行は Marketing Program Manager が行います。
詳細については [events ハンドブックページ](/handbook/marketing/events/) をご覧ください。

### MktgOPS に引き渡す前のリードリストの Step 1 クリーンアップ手順

[リストクリーニング手順](/handbook/marketing/marketing-operations/list-import/#import-cleaning-template---info-for-pre-mktgops-hand-off)

## レコード管理

### MQL の定義とスコアリング

MQL とリードスコアリングの詳細は、[marketing operations ハンドブック](/handbook/marketing/marketing-operations/) で確認できます。

### セグメンテーション

Sales セグメンテーションは、`Account Demographics: Max Family Employees` に基づきます。これは、当該階層内のアカウントすべての `Account Demographics: Employee Count` 値の最大値です。

- `Account Demographics: Employee Count` は階層内のアカウント間で異なる場合がありますが、`Account Demographics: Max Family Employees` 値は階層内のすべてのアカウントで同じになります。
- 従業員数が不明または空白で、手動調査でも確認できない場合、Sales Operations はそのアカウントを `SMB` としてマークし、Number of Employees: Manual - Admin フィールドにプレースホルダーの `-1` 従業員を設定し、Territory が入力されてアカウントが担当 AE に割り当てられるようにします。

階層構造を使用して、アカウントの従業員数を判定します。
*Accounts* に対するデータツールの階層は、`Account Demographic Max Family Employees` カウントに関連して以下のように示されます。

1. Number of Employees: Manual - Admin
2. [ZI] Employees (ZoomInfo)

*LinkedIn/Websites は指定データソースではありません。*

 ZoomInfo によるセグメンテーションと異なる従業員規模を見込み顧客が伝えてきた場合、SalesOPS は見込み顧客からの文書化された証拠とともに、そのレコードに対する Chatter で通知される必要があります。Admin は階層を回避して Employees をオーバーライドする能力を持ちますが、これは [sales segment review process](#sales-segment-and-hierarchy-review-process) の間のみです。

Mid-Market のアカウントは、[MM Key Account として、または MM Territory AE に属する](/handbook/sales/commercial/#mid-market-roles) として管理されます。

### Sales Segment と階層レビュープロセス

従業員数、アカウントアドレス、アカウントオーナーシップが誤っていると考えられる場合の問題に対処するには、[Sales Operations プロセス](/handbook/sales/field-operations/sales-operations/#what-if-tsp-is-wrong-how-can-i-request-a-change) に従って `Account Demographics` フィールドの更新を依頼し、アカウントはエンゲージメントルールに従ってレビューされます。

リクエストを検証する URL を提供してください。有効なソースの例としては、財務報告、新聞記事、企業からの直接の報告などがあります（これらに限定されません）。Sales Ops のレビュー期間中、Sales Ops チームの裁量で Total Employee の数を更新するか、そのまま維持するかが決定されます。

セグメンテーションで説明されている階層に基づき、私たちのソースに従って従業員数が変更された場合、Sales Ops チームはアカウントのセグメントを自動的に更新し、[エンゲージメントルール](/handbook/sales/field-operations/gtm-resources/rules-of-engagement/#account-ownership-rules-of-engagement) のアカウントレビュープロセスに従います。

### テリトリー

[テリトリーテーブル](/handbook/sales/territories/) は Sales Handbook 内で管理されています。
マップと表形式のテーブルの両方が、すべてのペアリングとテリトリー割り当てで最新の状態に保たれます。
Traction Complete のルーティングワークフローと SFDC レポートはこれらのテーブルに基づいています。

各アカウントの `Sales Territory` を決定するために使用されるロケーションは、サードパーティのデータシステム（Zoominfo、Zuora Billing Accouunts）と手動オーバーライドの組み合わせによって決まります。このアドレスは Salesforce の Account オブジェクトの「Account Address (fka Billing Address)」に保存されます。このフィールドは、以下の優先順位で他のフィールドからデータを継承します。

1. Admin Manual Override（存在する場合）
1. Zoominfo
1. Zuora Billing Account

### 業種とサブ業種

GitLab は、主要な事業活動に基づいて関連する企業のグルーピングを以下のように認識しています。

1. **Account Hierarchy Industry**
    - この [フィールド](https://gitlab.my.salesforce.com/00N4M00000IWRVd?setupid=AccountFields) は、アカウント階層全体に対して選択された業種値です。階層内で最も多くのアカウントレコードに現れる業種値です。
    - 階層内のすべてのアカウントは、同じ Account Hierarchy Industry 値を共有します。
    - このフィールドはアカウントルーティングと LAM 計算に使用されます。
1. **Industry**
    - これは業種のアカウントレベルの分類です。
    - GitLab の Industry 値のリストは [こちら](https://gitlab.my.salesforce.com/_ui/common/config/field/StandardFieldAttributes/d?id=Industry&type=Account) で確認できます。
1. **Sub-Industry**
    - Sub-Industry は Industry のより詳細な/きめ細かい分類です。
    - GitLab の Sub-Industry 値のリストは [こちら](https://gitlab.my.salesforce.com/00N6100000HIhad) で確認できます。このリストは DemandBase で使用される業種と整合しています。

各アカウントの Industry および Sub-Industry は、サードパーティデータと手動オーバーライドの組み合わせによって決定されます。情報は Salesforce の Account オブジェクトの `Industry` および `Sub-Industry` フィールドに保存され、以下の優先順位でデータを継承します。

1. Admin Manual Override
1. Zoominfo の `Industry` および `Sub-Industry` へのマッピング

**Industry & Sub-Industry のエンリッチメントケイデンス**

アカウントの Industry および Sub-Industry データは、日次のケイデンスで自動的に強化・更新されます。

### Enterprise Sales のアカウントランキング

SFDC のアカウントランキングにより、セールスはターゲット顧客に対するアクティビティの集中と優先順位付けを行い、マーケティングサポートや ABM キャンペーン向けにアカウントを簡単に推薦またはフラグ付けできます。アカウントランキングは QBR でのディスカッションを推進するためにも活用されます。

アカウントをランク付けするために、各 Enterprise Sales 担当者は Account Rank Information セクションにある「Account Rank」フィールドを更新し、Account Rank Notes も追加できます。Account Rank は Ultimate Parent Account レベルで、最大 50 アカウントまでに追加すべきです。

[Account Ranking Guide](https://docs.google.com/document/d/1u2Dg_jorRi_tgcC_2L-FjAmEqnMya76bvZ6WmAt4qGA/edit) は、Strategic Account Executive が各 Account Rank をターゲットとするケイデンスに集中するのに役立ちます。

#### Enterprise Account Ranking の定義

- **Rank 1** 最高優先度のアカウントで、次の四半期にセールスの集中、セールス開発、マーケティングサポートを必要とします。これらは四半期ごとに QBR で Sales によってレビューされるアカウントで、Land と Expand の両方を含みます。
- **Rank 2** 現在の ICP に合致し、Rank 1 ではないものの、当該 FY におけるセールスとマーケティングの焦点となるべきアカウント。Land と Expand の両方を含む必要があります。
- **Rank 3** 現在の ICP には合致しないが、リージョンでの Sales および GitLab にとって戦略的なアカウント。Land と Expand の両方を含む必要があります。

## Commercial Sales のアカウントランキング

Commercial Sales チームでは、Account オブジェクトのフィールドを使用してアカウントを階層化することが必須です。これにより、新規またはエクスパンションのプロスペクティングの際に、追うべきアカウントの優先順位付けが容易になります。SMB と Mid-Market AE 固有の定義については、[Commercial Sales handbook のアカウントランキングセクション](/handbook/sales/commercial/#account-ranking) を参照してください。

### Account Ownership、Opportunity Ownership、Order Type のエンゲージメントルール

[Go to Market エンゲージメントルール](/handbook/sales/field-operations/gtm-resources/rules-of-engagement/)

### アカウントソース、ルーティング、その他の要件

#### Website

アカウントの `Website` は [そのアカウントのセグメント](#segmentation) とそのアカウントのアドレス、ひいてはテリトリーとオーナーシップの決定における重要なデータポイントであるため、Salesforce のアカウントの Website はレイアウト上の必須フィールドです。
アカウントがフリーメールドメインを使用する個人にリンクされている場合（または同様のケース）、アカウントの Website の値として `[Blank]` を使用する必要があります。

#### Initial Source

`Initial Source` の詳細は、[marketing operations handbook](/handbook/marketing/marketing-operations/#initial-source) で確認できます。

#### Lead & Contact ステータス

Lead と Contact ステータスの詳細は、[marketing operations handbook](/handbook/marketing/marketing-operations/#lead-and-contact-statuses) で確認できます。

#### ルーティング

ルーティングは `Sales Segmentation`、`Region`、`Global Account Ownership` によって決定されます。Lean Data によるルーティングは、レコードが 30 ポイント以上ある場合に行われます。これは、レコードが少なくとも 1 つのコンテンツに関与したか、価値の高いページを訪問したことを意味します。

#### ルーティングと Traction Complete

**Traction** は Salesforce エコシステム内で動作し、すべてのルーティングワークフローを管理するために活用される主要なツールです。
Marketing Operations チームが Traction 内での継続的な管理とカスタマイズに責任を持ちます。
詳細については [Traction Complete 専用ページ](/handbook/marketing/marketing-operations/traction-lead-complete) を参照してください。

#### Contact Requests

すべての `Contact Us` リクエストは、**1 営業日**以内のサービスレベルアグリーメント（SLA）でフォローアップする必要があり、フォローアップは Salesforce 内のレコードのアクティビティとして追跡されなければなりません。

U.S. Public Sector: U.S. Public Sector Inside Sales チームにルーティングされます。

- [GitLab Public Sector エンゲージメントルール](/handbook/sales/public-sector/)

#### Professional Service Requests

`Professional Service Requests` は [`Contact Us` リクエスト](#contact-requests) と同様に扱われ、**1 営業日**以内のサービスレベルアグリーメント（SLA）でフォローアップされます。
フォローアップは SFDC 内のレコードのアクティビティとして追跡される必要があります。

Professional Services ページから送信されたリクエストは、`Global Account Ownership` ルールに従ってルーティングされます。
フォーム送信の通知は、Strategic Account Executive（SAE）、Sales Development Representative（SDR）、および Customer Success Manager に送信されます。
フォーム送信に対する初期応答は Account Owner（つまり SAE）の責任です。

#### Trial Requests

トライアルは [ウェブフォーム](https://about.gitlab.com/free-trial/) または製品 UI 内から、self-managed と SaaS の両方でリクエストできます。
デフォルトのトライアル期間は 30 日ですが、SaaS と self-managed の両方の製品について GitLab チームが手動で延長できます。SaaS 製品のトライアル延長には、`dotcom` グループ、`internal-requests` プロジェクトにある [`plan_change_request` Issue](https://gitlab.com/gitlab-com/support/internal-requests/issues/new?issuable_template=plan_change_request) テンプレートを使用します。
Self-managed トライアルの延長には、内部の `Licensing App` へのアクセスが必要です。

#### Universities

米国

- **Public** University = [Public Sector チーム](https://internal.gitlab.com/handbook/sales/public-sector/#us-state--local-government)
- **Private** University = [Public Sector チーム](https://internal.gitlab.com/handbook/sales/public-sector/#us-state--local-government)

Rest of the World

- **Any** University = 該当する地域の Business Development Representative

#### Lead と Contact レコードのオーナーシップ

Contact オーナーシップは以下のルールに従います。Contact オーナーシップは [Salesforce の自動プロセス](/handbook/sales/field-operations/sales-systems/gtm-technical-documentation/#contact-ownership) によって維持されているため、更新できず、夜間実行時にオーナーシップが元に戻ります。

- Large Accounts
  - BDR（存在する場合、それ以外は AE）
  - AE がすべての Contact フォローアップを所有する必要がある場合、BDR Prospecting Status は Restricted である必要があります。
- MM Accounts（Sales Segment = MM）
  - Customer Accounts かつ BDR Prospecting Status が Actively Working でない場合
    - AE、（Actively Working、BDR）
  - Non-Customer Accounts
    - BDR（存在する場合、それ以外は AE）
- SMB Accounts（Sales Segment = SMB）
  - AE

AE は Contact を管理するために以下のビューを使用すべきです。

- [My MQLs](https://gitlab.my.salesforce.com/003?fcf=00B4M000004oZF7&rolodexIndex=-1&page=1)（自分の名前で MQL ステータスにある Contact を表示します。取り組んでいるときは accepted に移動してください。他のステータスは、MQL を確認し適切に処理したことを示すために使用できます。これらは MQL ステータスにとどまるべきではありません）
- [My Contacts w/ new LIM](https://gitlab.my.salesforce.com/003?fcf=00B4M000004taHN&rolodexIndex=-1&page=1)（MQL 以外のステータスで、新しい Last Interesting Moment を持つ Contact を表示します）
- [My Contacts in Qualifying](https://gitlab.my.salesforce.com/003?fcf=00B4M000004oZFC&rolodexIndex=-1&page=1)（シーケンス内で関与した Contact を表示します。フォローアップに役立ちます）

BDR がアカウントに対してアウトリーチをサポート・支援するために割り当てられた場合、BDR は Salesforce のアカウントの `BDR Assigned` ルックアップフィールドに追加されます。
このフィールドは、関連する Contact レコードに伝播します。
`BDR Assigned` フィールドを編集できるのは BDR チームメンバーのみです。彼らは、公開アカウントビュー、イネーブルメント、マネージャーのサポートに基づいて BDR Assigned フィールドを一括更新できます。

`LEAD` および `CONTACT` レコードの両方を Outreach に同期して、メールアクティビティが SFDC の `Activity History` に正しくマッピングされるようにする必要があります。
SFDC のレコードオーナーは、Outreach のオーナーと一致する**必要はありません**。

#### レコードのオーナーシップとレコードの可視性

コンプライアンス基準を満たすため、SFDC インスタンスはプライベートモデルを使用しています。
このプライベートモデルでは、一部のレコードは Salesforce を使用するすべての GitLab チームメンバーに表示されますが、他のレコードは表示されない場合があります。
現在、これは Public Sector チームが所有するレコードに関して適用されています。
Public Sector チームが所有するすべての Salesforce レコード（リード、コンタクト、アカウント、オポチュニティなど）は、Public Sector チームの他のメンバーと、これらのレコードを表示することを認められたサポートスタッフのグループにのみ表示されます。
他のすべてのレコード（Public Sector チーム以外のメンバーが所有）は、標準の可視性レベルを維持します。

これは、インバウンドレコードまたはセールス担当者の名前のアカウントに関連して重要です。
Public Sector チームメンバーに属するべきレコードが誤って割り当てられたと考える場合は、マネージャー、sales-ops チーム、または Public Sector チームのメンバーと協力してレコードをレビューしてください。

## Salesforce でのオーナーシップ変更

### Salesforce でのアカウントオーナーシップの変更

Salesforce でアカウントオーナーを変更できるのは、Sales Systems、Sales Operations、Channel Operations のみです。これは、エンゲージメントルールが遵守されること、また Account Demographic 出力と親子関係に基づいてアカウントが正しい Account Owner に割り当てられることを保証するためです。アカウント割り当てに問題がある場合は、[Account Ownership エンゲージメントルール](/handbook/sales/field-operations/gtm-resources/rules-of-engagement/#account-ownership-rules-of-engagement) で概説されている例外プロセスに従ってください。

アカウントオーナーの更新をリクエストするには、更新を試みているアカウントレコードで Salesforce Chatter で @sales-support にタグを付けてください。

- **注意**: 承認されたプロファイル（上記）のみが、SFDC のレイアウトでオーナーを変更するための適切なボタンを持っています。ボタンはクリックされると正しいデフォルトの動作を自動選択します。

### Salesforce での Opportunity オーナーシップの変更

Salesforce でオポチュニティオーナーを変更できるのは、Sales Systems、Sales Operations、Channel Operations、Deal Desk、Finance のみです。これは、エンゲージメントルールが遵守されること、また対応する Account Owner（例外は [Opportunity Ownership](/handbook/sales/field-operations/gtm-resources/rules-of-engagement/#opportunity-ownership-rules-of-engagement) を参照）、Account Demographic 出力、親子関係、報酬プランに基づいてオポチュニティが正しいオーナーに割り当てられることを保証するためです。オポチュニティ割り当てに問題がある場合は、[Opportunity Ownership エンゲージメントルール](/handbook/sales/field-operations/gtm-resources/rules-of-engagement/#opportunity-ownership-rules-of-engagement) で概説されている例外プロセスに従ってください。

オポチュニティオーナーの更新をリクエストするには、更新を試みているオポチュニティレコードで Salesforce Chatter で @sales-support にタグを付けてください。

- **注意**: 承認されたプロファイル（上記）のみが、SFDC のレイアウトでオーナーを変更するための適切なボタンを持っています。ボタンはクリックされると正しいデフォルトの動作を自動選択します。

### Salesforce での Contact オーナーシップの変更

Contact オーナーシップは以下のルールに従います。この Contact オーナーシップは [Salesforce の自動プロセス](/handbook/sales/field-operations/sales-systems/gtm-technical-documentation/#contact-ownership) によって維持されているため、更新できません。

- Large Accounts
  - BDR（存在する場合、それ以外は AE）
- MM および SMB Accounts
  - Customer Accounts
    - AE
  - Non-Customer Accounts
    - BDR（存在する場合、それ以外は AE）

### Salesforce での Lead オーナーシップの変更

Lead オーナーシップは、リードステータス、セグメント、地域/テリトリーに基づく特定のルールに従って Traction Complete によって設定され、ラウンドロビンが含まれる場合があります。Lead オーナーシップの変更は、ロールの権限に基づきます。現在、リードオーナーは新しいオーナーにリードを変更できます。リードがキューによって所有されている場合、オーナーシップはすべての SDR と BDR によって変更できますが、リードに対してアクティビティがすぐに実行され、特定のアカウント戦略の一部として行われる場合にのみ実行すべきです。SDR/BDR Team Lead や SDR/BDR Leadership は、キュー以外が所有するリード（例: 誤った BDR が所有するリード）のオーナーシップを変更できる拡張された権限を持っています。

リードの大半は、関連するステータスキューまたはセールス開発チームによって所有されています。

### デフォルトオーナーシップ

- Ops が Salesforce でレコードを特定のユーザーに割り当てるための十分な情報がないと判断した場合、デフォルトユーザー [`Sales Admin`](https://gitlab.my.salesforce.com/00561000000mpHT?noredirect=1&isUserEntityOverride=1) に割り当てる必要があります。
**このユーザーは ADMIN のみが使用すべきです。Admin 以外はこのユーザーにレコードを再割り当てすべきではありません。**
このユーザーに割り当てる前に、admin は Salesforce 内の実際のユーザーにレコードを割り当てるよう最善を尽くしてください。
誰に割り当てるかわからない場合は、SalesOps チームと連携してください。
これは、レコードを実際に処理できる個人に再割り当てするよりスケーラブルなソリューションが整備されるまでの暫定的な解決策にすぎません。

### Salesforce でのレコード作成

Salesforce での ACCOUNT レコードは、いくつかの方法で作成されます - [リストインポート](/handbook/sales/field-operations/sales-operations/)、[大量作成画面フロー](#mass-create-contacts-on-opportunities-with-contact-roles)、フィールドイベントブーススキャン、リサーチ、ネットワーキング、ウェブキャスト、コンテンツダウンロードなどです。
理想的にはすべての ACCOUNT が Salesforce に存在し、チームメンバーは CONTACT レコードのみを作成するべきですが、イベントで接点ができ、正式なイベントリストのアップロードが行われる*前*にフォローアップが必要な場合、チームメンバーは以下を行う必要があります。

- Salesforce を検索して ACCOUNT がすでに存在しないことを確認し、**かつ**、その人物のメールアドレスを使用して検索し、重複レコードが作成されないようにしてください。
- レコードが**存在しない**場合:
  - `Standard` ACCOUNT タイプを作成 - 必須フィールドは `Account Name` と `Account Type`
  - `Standard` CONTACT タイプを作成 - 必須フィールドは `Last Name`、`Account Name`（先ほど作成した ACCOUNT を見つけるためにルックアップツールを使用）、`Initial Source`（つまり、この名前がどこから来ているか。`Conference` = Field Event、`SDR Generated` または `AE Generated` = 通常のネットワーキングイベントなど）
  - 名前が収集される場所について正確にしてください。`Unknown` は**受け入れられません**。
  - CONTACT レコードの `Initial Source` は、オポチュニティの `Source` と*等しくありません*。これがなぜ重要かについては [`Initial Source`](#initial-source) のガイダンスを参照してください。
- レコードが**存在する**場合:
  - LEAD または CONTACT が unowned または「Sales Admin、James Harrison、Chad Malchow が所有」の場合、このレコードは誰でも引き取り可能 - `Record Owner` を自分の名前に変更します。
  - LEAD または CONTACT が Sales Development チームメンバーが所有している場合、アウトリーチする**前**にレコードで Chatter を使って BDR/SDR にオーナーシップの移転を依頼します。混乱、相互のコミュニケーション、または複数の人が同じコンタクトに連絡することを避けるため、オーナーシップはアウトリーチの**前**に移転される*必要があります*。

正式なイベントリストのインポートが完了すると、作成された ACCOUNT または CONTACT レコードに、イベントで収集された追加データが追記されます。
質問がある場合や支援が必要な場合は、Slack の `#sfdc-users` チャンネルで Marketing または Sales OPS に連絡してください。

### ベストプラクティス

1. データはできるだけ正確にしてください。
Contact `Phone` を持っていない場合、Account `Phone` で代用しないでください - Contact レコードでは空白のままにしてください。
1. 新しいレコードを作成する前に、データベースで重複を検索してください。
1. レコードをマージする場合、最初に作成されたレコードの `Initial Source` を保持してください。

#### Contact Roles でオポチュニティにコンタクトを一括作成する

このプロセスは、アカウント用に全く新しいコンタクトを作成し、それらをオポチュニティとも関連付ける必要があるという特殊なケースに固有のものです。
このプロセスを使用する例としては、特定のオポチュニティのデモ中にアカウントで複数の新しいコンタクトに会った場合です。
そのアカウント用にこれらのコンタクトを作成し、そのオポチュニティと関連付けるためのプロセスは、以下のステップに従うか、この [ビデオ](https://drive.google.com/file/d/1iEO4dQUAfa4tkbEmip1Xne7-9Tg2nR6h/view?usp=sharing) で示されているように行います。

1. これらのコンタクトを関連付けるべき Salesforce のオポチュニティレコードに移動します。
1. `New Contacts & Opp Contact Roles` ボタンをクリックします。
1. 画面フローと指示に従って、必要かつ既知の情報をすべて提供して、すべてのコンタクトを作成し、オポチュニティに関連付けます。
1. いずれかのコンタクトについて追加情報があるが画面フロー経由で入力できなかった場合は、操作完了後にコンタクトに移動して、そのコンタクトのために持っている追加情報を入力します。

このプロセスに従う場合、すべてのコンタクトは以下の基準を満たす必要があることに注意してください。

1. 作成されるすべてのコンタクトは、当該オポチュニティレコードのアカウントとオポチュニティの両方に関連付けられます。
1. すべてのコンタクトは完全に新規で、Salesforce にコンタクトまたはリードとしてまだ存在していません。
1. すべてのコンタクトには、オポチュニティ上のコンタクトロールが割り当てられます。
1. すでにプライマリコンタクトが存在するか、または新しいコンタクトの 1 つがオポチュニティのプライマリコンタクトになります。

テリトリーは [Sales セグメンテーション](#segmentation) に基づいて割り当てられ、各タイプのインバウンドリクエストのルーティングは [Traction Complete を通じて](/handbook/marketing/marketing-operations/traction-lead-complete) 行われます。

`Initial Source` が `GitLab.com` の LEAD/CONTACT レコードは、`Trial - Enterprise`、`Trial - GitLab.com`、`Contact Us`、`Demo`、'Webcast'、'Content' などのハンドレイジング「アクティブ」アクティビティを取らない限り、また `Web Chat` に関与しない限り、エンゲージ、プロスペクト、ターゲットしては**いけません**。

GitLab のメールポリシーと送信するメールの種類および数については、[Email Communication Policy](/handbook/marketing/marketing-operations/) を参照してください。

#### Active と Passive

`Initial Source` は、リードが「アクティブ」か「パッシブ」かを判定するためには使用できません。Initial Source はファーストタッチアトリビューションで設定されるためです。したがって、`Last Interesting Moment` フィールドを見ることが、レコードがアクティブに取り組まれているかどうかを判定し始める主要なフィールドです。
Salesforce の `Activity History` をレビューすることも、「アクティブ」または「パッシブ」を評価する際に考慮されるもう 1 つの要因です。

LEAD または CONTACT は、`Trial - Enterprise`、`Trial - GitLab.com`、ハイインテントのライブウェブキャストまたはデモへの参加、または `Web Chat` への関与のいずれかを行った場合、「アクティブ」と見なされます。これらはすべて、ハンドレイジングの「アクティブ」アクティビティです。
これらのタイプのレコードは、ハンドレイジングアクティビティの日から最低 60 日間「アクティブ」と見なされます。
例: レコードは EE トライアル全期間中、および `EE Trial End Date` の 30 日後まで「アクティブ」と見なされます。

## キャンペーン

Salesforce キャンペーンは、マーケティングタクティクスの取り組み（フィールドイベント、ウェブキャスト、コンテンツダウンロードなど）を追跡するために使用されます。
キャンペーンタイプは、マーケティングが支出を追跡する方法に整合し、3 つの主要システム（Marketo、Salesforce、Bizible）でレコードが追跡される方法と整合させ、一貫性のあるトラッキングを実現します。
キャンペーンを活用することで、Marketing、Sales、Finance 全体での取り組みが整合します。Integrated Campaigns（Marketing Programs が管理）に関する情報については、[Integrated Campaigns ハンドブックページ](/handbook/marketing/campaigns/) を参照し、計画中・進行中・過去に実行されたキャンペーンタクティクスの詳細については、[Marketing Programs ハンドブックページ](/handbook/marketing/) を参照してください。

## End of Availability 顧客のアウトリーチと追跡

Starter/Bronze End of Availability イニシアチブに参加した顧客とのエンゲージメントを確保するため、Sales はアクティビティを通じて SFDC でアウトリーチ（およびその他のエンゲージメント）を追跡することが求められます。アクティビティを把握する手順は以下のとおりです。

**EoA 顧客アウトリーチを追跡するプロセス:** 既存のアウトリーチケイデンスと SFDC アクティビティを通じた追跡に従ってください。ただし、EoA 顧客へのすべてのアウトリーチに対して、SFDC で 2 つの重要な更新を行います。

1. Activity Comments に「Starter」、「Bronze」、または「EoA」という単語を何らかの形で入力します。
1. Account の `EoA Sentiment` フィールドを更新します（赤、黄、緑 - ヘルプテキストで定義）。

**レポート**:

- すべての EoA 顧客は、`FY22 On Starter/Bronze` フィールド（チェックされている場合は EoA 顧客）を利用して、SFDC で追跡できます。セグメント、地域、オーナー別の完全なリストは [こちら](https://gitlab.my.salesforce.com/00O4M000004ajNm) で確認できます。
- EoA アカウントリスト: https://gitlab.my.salesforce.com/00O4M000004ajNm
- アクティビティのある EoA アカウント: https://gitlab.my.salesforce.com/00O4M000004ajpR

## システムセットアップ

### Marketo プログラム

対応するキャンペーンタイプの Marketo プログラムは、プログラム構築で活用されるべきすべての可能な必要なスマートキャンペーン、メールプログラム、リマインダーメール、トークンを含むように事前構築されています。

すべての Marketo プログラムタイプと進捗ステータスの詳細は、[Marketing Operations ハンドブック](/handbook/marketing/marketing-operations/) で確認できます。

### レポートとダッシュボードの命名規則

レポートとダッシュボードの命名規則は、重要度を識別するためにピリオド（.）のシーケンスを使用します。

- . [レポートまたはダッシュボードの名前]
- **例**:
  - . Sales Dashboards
  - .. APAC ENT Dashboards

## Opportunities

### インバウンド Sales Accepted Opportunity (SAO) の基準

インバウンド SAO には以下の基準が**必須**です。

1. オポチュニティが Strategic Account Executive によってステージ `0-Pending Acceptance` から `1-Discovery` に移動された場合、そのオポチュニティは Sales Accepted Opportunity（SAO）と見なされます。
1. SDR は Net ARR $ 値を入力しません。Sales オポチュニティオーナーが入力します。
1. SAO を識別するために必須のフィールド設定は以下のとおりです。
     - 「SDR Sales Accepted Date」が定義されている
     - 「Is EDU/OSS Opportunity flag」が 'N'
     - ステージ <> `10-Duplicate`

SDR がオポチュニティを sales に提出するために必要な基準:

**Authority**
会われている見込み顧客は、評価者、意思決定者、技術購買者、または*影響者として、この購買グループ内の GitLab の購入の可能性に関連するプロジェクトまたはチームに直接関与しています。
*「影響者」が直接関与していない場合（つまり、別のグループ/部門の「意思決定者」と関連している、または当該オポチュニティに直接結びついていない人物の場合）、SDR はオポチュニティを所有し続け、購買グループの主要なコンタクトとの次のミーティングをセットアップしようとします（日付/リファラルが確認されるまで 0-pending ステータスのままにする）。取得され次第、現在のオポチュニティを購買グループの新しい直接関与するコンタクトポイントで更新します。

**Initiative**
企業が取り組んでいるイニシアチブが特定されており、GitLab がそのイニシアチブを支援できる可能性があります。
ビジネス上の問題（例: ツールが多すぎる）、戦略的な方向性、またはモダナイゼーションへの関心（変化への原動力）のいずれかで特定されます。

**Fit**
以下のフィールドが取得されています。

- 現在の DevOps またはソフトウェア開発ライフサイクルツール（会話または信頼できるデータソースから）
- 想定されるエントリポイントのユースケース（例: SCM または CI）
- 最初のオポチュニティの潜在的なシート数（これが新しいアカウントまたは購買グループの場合）

**Timing**
アカウントリーダー/エグゼクティブとの初期クオリファイミーティング後、見込み顧客と*60 日のタイムフレーム内に発生するように設定された具体的な次のステップがある必要があります。
（*次のステップが 60 日のタイムフレーム内でない場合、オポチュニティはステージ 0 にとどまり、次のステップが実現するまで SDR がナーチャリングするために所有します。）

***Sales Development のベストプラクティス:***
見込み顧客にその環境、何のためにソフトウェアを開発しているかなどを尋ね、企業の全体像と私たちがどのように支援できるかを構築してみてください。
コンタクトに関連するリソースを共有してください。
組織内でより多くの勢いを構築するために、その企業の他の潜在的な影響者/購買者をデータベースおよび Outreach ケイデンスに追加してください。

***アカウントリーダー/エグゼクティブとの IQM の前に、SDR はまた以下を収集することを目指します:***

- SaaS と Self Hosted の比較
- 購買グループ内の潜在的な将来のシート
- 企業全体での総シート利用可能数の推定

***IQM 後:***
`1-Discovery` ステージのオポチュニティは、アカウントリーダー/エグゼクティブによって受け入れられ、所有されます。
アカウントリーダー/エグゼクティブは、進行、アクティビティ、他のリソースの関与、この初期エンゲージメントを相互の勝利に変換することに責任を持ちます。
Sales アカウントリーダー/エグゼクティブは、60 日以内に次のステップを取るか、最終的にオポチュニティがない場合はオポチュニティを SDR オーナーシップに戻すか、SAO をディスクオリファイする責任があります。
マネージャーは、「NEXT STEP DATE」フィールドを使用して、IQM が行われたがオポチュニティが新しいステージに移動していないかどうかを判断できる必要があります。
オポチュニティは IQM から 48 時間以内に新しいステージに移動する必要があります。

### アウトバウンド Sales Accepted Opportunity (SAO) の基準

アウトバウンド SAO には以下の基準が**必須**です。

1. オポチュニティが Strategic Account Executive によってステージ `0-Pending Acceptance` から `1-Discovery` に移動された場合、そのオポチュニティは Sales Accepted Opportunity（SAO）と見なされます。
1. BDR は Net ARR $ 値を入力しません。Sales オポチュニティオーナーが入力します。
1. SAO を識別するために必須のフィールド設定は以下のとおりです。
     - 「SDR Sales Accepted Date」が定義されている
     - 「Is EDU/OSS Opportunity flag」が 'N'
     - ステージ <> `10-Duplicate`

BDR がアウトバウンドオポチュニティを sales に提出するために必要な基準:

**Internal Decision-Making Unit and Procurement Process**
見込み顧客は、意思決定者への明確なパスを示すことができ、意思決定ユニット内の他の評価者、技術購買者、または影響者を特定できる必要があります。

**Identified Need**
企業内で特定されたニーズで、現在積極的に取り組まれているかどうかにかかわらず、ビジネス上の問題（例: ツールが多すぎる）、戦略的な方向性、またはモダナイゼーションへの関心（変化への原動力）のいずれかで特定されます。

**Fit**
以下のフィールドが取得されています。

- 現在の DevOps またはソフトウェア開発ライフサイクルツール（会話または信頼できるデータソースから）
- 想定されるエントリポイントのユースケース（例: SCM または CI）
- 最初のオポチュニティの潜在的なシート数（これが新しいアカウントまたは購買グループの場合）

**Timing**
アカウントリーダー/エグゼクティブとの初期クオリファイミーティング後、見込み顧客と具体的な次のステップが合意されている必要があります。

***アカウントリーダー/エグゼクティブとの IQM の前に、BDR はまた以下を収集することを目指します:***

- SaaS と Self Hosted の比較
- 購買グループ内の潜在的な将来のシート
- 企業全体での総シート利用可能数の推定

これらはリサーチに基づく近似値であり、必ずしも検証されている必要はありません。

[Outbound BDR SAO Notes - Template](https://docs.google.com/document/d/1m5YBOCc--M1Iq5-SEEd2OUWDjYyc6VJ3xTsDEEqisUQ/edit)

***IQM 後:***
`1-Discovery` ステージのオポチュニティは、アカウントリーダー/エグゼクティブによって受け入れられ、所有されます。
アカウントリーダー/エグゼクティブは、進行、アクティビティ、他のリソースの関与、この初期エンゲージメントを相互の勝利に変換することに責任を持ちます。
Sales アカウントリーダー/エグゼクティブは、60 日以内に次のステップを取るか、最終的にオポチュニティがない場合はオポチュニティを BDR オーナーシップに戻すか、SAO をディスクオリファイする責任があります。
マネージャーは、「NEXT STEP DATE」フィールドを使用して、IQM が行われたがオポチュニティが新しいステージに移動していないかどうかを判断できる必要があります。
オポチュニティは IQM から 48 時間以内に新しいステージに移動する必要があります。

### オポチュニティの作成方法

オポチュニティは Salesforce で以下の方法で作成できます: a) LEAD を CONTACT に変換するとき、b) CONTACT から。
**すべてのオポチュニティ**は、オポチュニティの作成方法にかかわらず、ステージ = `0-Pending Acceptance` で作成する必要があります。
初期セットアップが完了すると、以下の基準に基づいて [オポチュニティステージ](#opportunity-stages) を更新できます。

#### CONTACT レコードから New Business オポチュニティを作成する

1. CONTACT レコード上で `New Opportunity` ボタンをクリックします。必須フィールドは以下のとおりです。
    - Opportunity Name - [オポチュニティ命名規則](#opportunity-naming-convention) を使用
    - Account Name = CONTACT オブジェクトからプルされるため、変更する必要はありません
    - Type = `New Business`
    - Initial Source = 変更しないでください
    - Close Date = タイムフレームが定義されていない場合、**BDR** はクローズ日を 9 か月後にローリング設定
    - Stage = `0-Pending Acceptance` - すべてのオポチュニティの開始ステージ
    - 可能な限り詳細をオポチュニティレコードに追加します。
    - `SAVE` をクリック
1. オポチュニティレコードを下にスクロールして `Contact Roles` セクションに移動し、**`New`** をクリックします。ACCOUNT に関連付けられた CONTACT が一覧表示されます（最大 50 レコード）。**Primary** として CONTACT を選択し、`Role` を定義する必要があります。
    - **Primary** CONTACT を定義しないと、マーケティングアトリビューションとオポチュニティへのアクティビティ影響が正確にキャプチャされません。
1. オポチュニティオーナーを `Account Owner`（つまり SAE/AM）に変更します。`Save` をクリック。
1. オポチュニティレコード内で、`Initial Qualifying Meeting` ボタンをクリックします。必須フィールド（Start/End 日付、Type）を入力し、SAE/AM が予定されているミーティングを行う*前*に持つべきメモ、レビューすべきメモで description フィールドを更新します。
    - CONTACT と OPPORTUNITY の両方の `Related to` セクションを記入
    - `Assigned to` フィールドをオポチュニティオーナーに変更
    - `Save` をクリック
1. 「NEXT STEP DATE FIELD」を次のアクションステップの日付（多くの場合 IQM）で更新します。
1. NEXT STEP DATE FIELD に対応する詳細を「NEXT STEPS」に入力します。

#### LEAD レコードから New Business オポチュニティを作成する

1. LEAD レコード上で、必須クオリフィケーション質問に記入し、収集されている場合は任意のセクションに追加のメモを追加し、`Lead Status` = `Qualified` に更新します。<b>`Save`</b> をクリック。
1. `Convert` ボタンをクリックします。
    - `Record Owner` を Account Owner（エンゲージメントルールに基づく）に変更
    - 「Send Email to the Owner」ボックスをチェック
    - 正しい `Account Name` をルックアップ（重複を避けるために会社の接尾辞を削除） - 不明な場合は「Parent」アカウントにオポチュニティを割り当てる
    - Opportunity Name - [オポチュニティ命名規則](#opportunity-naming-convention) を使用
    - `CONVERT` をクリック
        - CONTACT レコードが存在する場合、変換された LEAD を既存の CONTACT に関連付けます。*可能であれば重複を作成しないでください。*
1. オポチュニティは以下で更新する必要があります。
    - `Edit` をクリック
    - Type = `New Business`
    - Initial Source = 変更しないでください
    - Close Date = タイムフレームが定義されていない場合、**SDR** はクローズ日を 9 か月後にローリング設定
    - 可能な限り詳細をオポチュニティレコードに追加します。
    - `SAVE` をクリック
1. オポチュニティレコードを下にスクロールして `Contact Roles` セクションに移動すると、変換された LEAD が自動的に **"Primary"** として設定されています。`Edit` をクリックし、`Role` を定義します。
    - 追加の CONTACT を追加し、オポチュニティと関連付ける必要がある `Role` を定義します。
    - マーケティングアトリビューションとアクティビティ影響が正確にキャプチャされるよう、オポチュニティには **Primary** CONTACT が定義されている必要があります。
    オポチュニティオーナーを `Account Owner`（つまり SAE/AM）に変更します。`Save` をクリック。
1. オポチュニティレコード内で、`Initial Qualifying Meeting` ボタンをクリックします。必須フィールド（Start/End 日付、Type）を入力し、SAE/AM が予定されているミーティングを行う*前*に持つべきメモ、レビューすべきメモで description フィールドを更新します。
    - CONTACT と OPPORTUNITY の両方の `Related to` セクションを記入
    - `Assigned to` フィールドをオポチュニティオーナーに変更
1. 「NEXT STEP DATE FIELD」を次のアクションステップの日付（多くの場合 IQM）で更新します。
1. NEXT STEP DATE FIELD に対応する詳細を「NEXT STEPS」に入力します。

#### Add-on オポチュニティを作成する

`Add-On` オポチュニティは、*元の* `New Business` オポチュニティから情報を継承します。
`Add-on` オポチュニティを作成する手順は、このタイプのオポチュニティが変換された LEAD または CONTACT ではなく、`New Business` オポチュニティから作成されるため、上記の手順とは若干異なります。

これにより、*元の* `New Business` オポチュニティと `Add-on` オポチュニティの間に親子関係が作成されます。

1. *元の* `New Business` オポチュニティ（これが「親」opp になります）に移動します。
    - 例: 既存のサブスクリプションに追加シートを販売している場合、元の `New Business` オポチュニティに移動する必要があります。
1. `New Add-on Opportunity` ボタンをクリックします。
1. オポチュニティ名を**更新** - [オポチュニティ命名規則] ガイドラインを参照
1. 以下を定義します。
   - `Initial Source` = 最も正しいソースを選択するために [定義テーブル](#initial-source) を参照。レポートとマーケティングアトリビューションに影響するため、正確であることが重要です。
   - Close Date = タイムフレームが定義されていない場合、クローズ日を 9 か月後にローリング設定。
   - Stage = すべてのオポチュニティは `0-Pending Acceptance` として開始
1. オポチュニティレコードに追加の詳細を追加します。
1. `Save` をクリック

親子オポチュニティ階層内で、一部の情報は親（`New Business`）から子（`Add-on`）に渡されます。この情報は、Add-on ビジネスのオポチュニティをその `Initial Source` と貢献チームメンバーに追跡するために、レポートと分析で使用されます。

現在有効な追加の検証ルールがあります。

- **Parent** オポチュニティは、`New Business` または `Renewal` オポチュニティのいずれかでなければなりません。
- **Parent** オポチュニティは別の `Add-on` オポチュニティになる*ことはできません*。
- すべての sales-assisted な非ポータル `Add-on` オポチュニティには、親オポチュニティが**必要です**。

#### Upside ARR オポチュニティを作成する

`Upside ARR` オポチュニティは、*元の*オポチュニティから情報を継承します。
`Upside ARR` オポチュニティを作成する手順は、このタイプのオポチュニティが変換された LEAD または CONTACT ではなく、オポチュニティから作成されるため、上記の手順とは若干異なります。
`Upside ARR` オポチュニティは、潜在的なアップサイド額を追跡するためだけのフィールドが最小限のものです。

これにより、*元の*オポチュニティと `Upside ARR` オポチュニティの間に親子関係が作成されます。

1. *元の*オポチュニティ（これが「親」opp になります）に移動します。
1. `Upside ARR` ボタンをクリックします。
1. オポチュニティ名を**更新** - [オポチュニティ命名規則] ガイドラインを参照
1. 以下を定義します。
    - Opportunity Type は常に New Business
    - Upside ARR オポチュニティの Net ARR 値は、常に Most Likely シナリオ（メインオポチュニティ）と最良のケースの差分でなければなりません。
    - ステージと予測カテゴリは、常にメインオポチュニティのそれよりも低くなります。
    - 両方のオポチュニティのクローズ日は同じになります。
    - Upside ARR レコードは Next Steps や Command Plan の完了を必要としません。これらはメインレコードで完了されます。
    - メインオポチュニティが Closed Won または Closed Lost されると、Upside ARR レコードは Duplicate としてクローズする必要があります。
1. `Save` をクリック

すべての最終 ARR（勝った Upside ARR を含む）は PARENT オポチュニティに帰属します。

#### Professional Services オポチュニティを作成する

`Professional Services` オポチュニティは、セールス担当者が見込み顧客/クライアントに販売し、別途請求する必要がある（または希望する）統合、コンサルティング、トレーニング、その他のサービスをカバーするために使用されます。
別途請求するには、新しい見積もりとオポチュニティを作成する必要があります。

プロフェッショナルサービスの完全なリストは [こちら](about.gitlab.com/services/catalog) で確認できます。
ワークフローの詳細については [Working with Professional Services](/handbook/customer-success/professional-services-engineering/working-with/) を参照してください。

##### SFDC で Professional Services オポチュニティを作成する手順

*以下のプロセスを説明する [ビデオ](https://gitlab.highspot.com/items/6729542de1ce8a11962cffb3?lfrm=srp.0) があります。*

1. *元の*オポチュニティ（これが「親」opp になります）に移動します。これは標準のライセンスまたはサブスクリプションオポチュニティでなければならないことに注意してください。
1. 「Create Services Opportunity」ボタン（Lightning では、このボタンはページの右上のドロップダウンリストにあります）をクリックし、以下を入力します。
   <!-- - OPPORTUNITY Name = will already be set correctly; do not change
   - Type = do not change it will populate from parent OPPORTUNITY
   - Initial Source = do not change it will populate from parent OPPORTUNITY
   - Close Date = if no timeframe defined input close date on a rolling 9-months.
   - Stage = All opportunities start as `0-Pending Acceptance`
   - Professional Services Value (ProServe Value) = enter dollar value, which is defined as the total value of all consulting, training, integration, or other professional services as outlined in the Statement of Work.
   - ACV = **do not populate** an automated workflow will fill this information
   - Amount = **do not populate** an automated workflow will fill this information
   - Professional Services Description, Project Scope, Task Schedule and Key Assumption fields = these will push to the Statement of Work when a PDF is generated from Zuora. -->
   - Close Date
   - Stage
   - Customer Folder URL（これは**アカウントオブジェクト上の**フィールドによって自動入力されます。そのフィールドを完了する必要があります）
1. `Next` をクリックすれば完了です！子の Professional Services オポチュニティが送信されると作成されます。また、scoping issue、estimation spreadsheet、proposal template はすべて自動的に作成されクロスリンクされます！
1. 見積もりを作成するには、[Creating Quotes](/handbook/sales/field-operations/sales-operations/deal-desk/#quoting-professional-services) Deal Desk ページを参照してください。

#### オポチュニティを共有する方法

1. 共有したい SFDC のオポチュニティレコードで、`Opportunity Teams` セクションに移動し、`Add` ボタンをクリックします。
1. 共有したいユーザー、Team Role、Opportunity Access を追加します。
1. Save
1. Opportunity Owner（またはそのマネージャー）のみが、Opportunity Team メンバーを追加できます。

#### オポチュニティの Sales Qualified Source を追跡する

Sales Qualified Source は、パイプライン作成、リード変換、セールスサイクル、変換率を分析する際に使用される次元です。
Sales Qualified Source は、オリジナルソース（イベント、キャンペーンなど）をキャプチャするオポチュニティのリードソースとは異なる場合があります。
たとえば、見込み顧客がトライアル（リードソース）から発生した場合、その見込み顧客は SDR、Account Executive、Channel Partner、または Web（sales qualified source）によってクオリファイされる可能性があります。

Sales Qualified Source のロジックは以下のとおりです。

1. Sales Development Representative フィールド（オポチュニティ）が入力されている場合、オポチュニティオーナーに関係なく、Sales Qualified Source は "SDR Generated" になります。
1. Sales Development Representative フィールドが NULL で、オポチュニティオーナーが以下の場合:
   - Regional Director、Account Executive、または Account Manager の場合、Sales Qualified Source は "AE Generated"
   - Regional Director、Account Executive、または Account Manager ではない GitLab チームメンバーの場合、Sales Qualified Source は "Other"
   - 認定リセラーの場合、Sales Qualified Source は "Channel Generated"
   - Sales Admin の場合、Sales Qualified Source は "Web Direct Generated"

#### リセラーオポチュニティ

リセラーを利用するオポチュニティには、若干異なるデータが必要です。

Lead/Contact:
パートナーレコードは、その会社のチャンネルタイプアカウントに変換する必要があります。
エンドユーザーレコードは、エンドユーザー標準アカウントタイプに変換する必要があります。

Opportunity Name:
パートナーが認定リセラーの場合、パートナーのニックネームを前に置き、ダッシュを付けてオポチュニティの名前を変更します。
たとえば、Perforce のディールの場合、オポチュニティ名は P4 - （オポチュニティ名がなんであれ）で始まる必要があります。
これは、リセラーからの更新を促すワークフローにとって重要です。

Account Name:
リセラーを使用するオポチュニティは、リセラーのアカウントではなく、END CUSTOMER のアカウント上に作成されることが重要です。
オポチュニティのアカウント名は決してリセラーではありません。
リセラーはライセンスを購入しません。エンドカスタマーの代わりに購入します。
たとえば、オポチュニティのアカウント名フィールドは決して SHI ではありません。

Opportunity Owner:
リセラーとともにディールに取り組んでいる AE/SAE/Channel Manager

Deal Registrant:
ディールを登録したリセラー。

コンタクトロールの関連付け:
オポチュニティを作成した後、コンタクトセクションで「New」をクリックして、コンタクトをオポチュニティに関連付けます。

- プライマリコンタクトは、リセラーのコンタクトではなく、常にエンドユーザーのアカウントのコンタクトでなければなりません。
これは重要です。リセラーは入れ替わるものであり、エンドユーザーアカウントのコンタクトをキャプチャしなければ、リセラーが私たちまたはエンドアカウントとの関係を終了した場合、このアカウントに販売できなくなります。
- リセラーのコンタクト（例: ReleaseTEAM の sales rep）は、Influencer のロールでオポチュニティに追加できますし、追加すべきです。
注: リセラーで働くコンタクトは、決してエンドユーザーアカウントに追加すべきではありません。
たとえば、SoftwareOne の従業員は SoftwareOne アカウントのコンタクトのみであるべきで、Boeing アカウントのコンタクトであってはなりません。

オポチュニティへのパートナーの関連付け:
オポチュニティを作成した後、Partners セクションで「New」をクリックして、リセラーをオポチュニティに関連付けます。

- 1 つのオポチュニティに複数のリセラーが関与している場合、複数のパートナーを関連付けることができます。
これは政府のオポチュニティや、顧客が複数のフルフィルメントハウス（SHI や SoftwareOne など）に注文の履行を依頼するオポチュニティでは珍しくありません。
- 非公式のリセラーは決してプライマリとしてマークすべきではありません。
- 認定リセラーが関連付けられている場合、少なくとも 1 つはプライマリとしてマークする必要があります。
  - 優先順位は以下のとおりです。
    - The deal registrant（SFDC の `Deal Registrar` フィールド。これは適切な channel manager と確認すべきです）
    - The deal fulfiller（つまり、PO を発行する者）
    - The distributor

Opportunity Team リスト:
リセラーユーザーを Opportunity Team リストに「Reseller」のロールで追加してください。そうしないとオポチュニティを表示できません。

#### オポチュニティ命名規則

サブスクリプションのオポチュニティは、以下のガイドラインを使用します。

- **New Business**: [Quantity]
  - [Name of Company]- [Quantity] [Edition]
  - 例: Acme, Inc- 50 Starter
- **Add-On Business (シートのみ)**:
  - [Name of Company]- Add [Quantity] [Product]
  - 例: Acme, Inc- Add 25 Starter
- **Add-On Business (Starter から Premium へのアップグレード)**:
  - [Name of Company]- Upgrade to Ultimate
  - 例: Acme, Inc- Upgrade to Ultimate
- **Renewal Business (変更なし)**:
  - [Name of Company]- [Quantity] [Product] Renewal [MM/YY]
  - 例: Acme, Inc- 50 Premium Renewal 01/17
- **Renewal Business + Add On Business (シート)**:
  - [Name of Company]- [Quantity] [Product] Renewal [MM/YY]+ Add [Quantity]
  - 例: Acme, Inc- 50 Premium Renewal 01/17 + Add 25
- **Renewal Business + Upgrade**:
  - [Name of Company]- [Quantity] Upgrade to Premium + Renewal [MM/YY]
  - 例: Acme, Inc- 50 Upgrade to Premium + Renewal 01/17
- **Professional Services**:
  - [Name of Company]- Professional Services [MM/YY]
  - 例: Acme, Inc- Professional Services 06/18
- **Refunds**:
  - [Original Opportunity Name] - REFUND
  - 例: Acme, Inc- 50 Upgrade to Premium + Renewal 01/17 - REFUND

#### サブスクリプションキャンセルポリシー

顧客サブスクリプションは、サブスクリプション期間終了日から最大 30 日以内に cancelled に移動され、関連する Renewal Opportunity は Closed Lost に移動されます。

#### 戻り顧客に対するオポチュニティ要件

- **サブスクリプション期間終了日から 180 日以内に戻ってきた顧客**:
  - 顧客が以前のサブスクリプション期間終了日から **180 日以内**に別の GitLab サブスクリプションを購入するために戻ってきた場合、取引は新しいサブスクリプション見積もりを使用して **Renewal Opportunity** で計上されなければなりません。このシナリオでは、以下のアクションを取る必要があります。
    - **Sales**: 新しい renewal オポチュニティを作成し、正しい予約値で Closed Won する必要があります。
    - **Deal Desk**: 2 つ目の新しい renewal オポチュニティを作成し、Closed Lost する必要があります。Amount、Net ARR、ARR Basis は、元の Closed Lost オポチュニティの同じ値の逆を表します。
    - このシナリオでは、Order Type 2.0 は [3. Growth](/handbook/sales/sales-term-glossary/#growth-customers) になります。
    - 例:

      ```markdown
      | **Opportunity** | **Stage** | **Net ARR** | **ARR Basis** | **ACV** |
      | --- | --- | --- | --- | --- |
      | New Business 2020| Closed Won | 100 | 0 | 100 |
      | Renewal 2021| Closed Won | 0 | 100 | 100 |
      | Renewal 2022 | Closed Lost | -100 | 100 | 100 |
      | Renewal 2022 | Closed Won | 0 | 100 | 100 |
      | Renewal 2022 | Closed Lost (Debook) | 100 | -100 | -100 |
      ```

- **サブスクリプション期間終了日から 180 日以上経過した後に戻ってきた顧客**:
  - 顧客が以前のサブスクリプション期間終了日から **180 日以上**経過した後に別の GitLab サブスクリプションを購入するために戻ってきた場合、取引は **New Business Opportunity** で計上されなければなりません。
    - このシナリオでは、元の Closed Lost オポチュニティは反転されず、Order Type は Account Family に基づいて [1. New - First Order](/handbook/sales/sales-term-glossary/#first-order-customers) または [2. New - Connected](/handbook/sales/sales-term-glossary/#connected-new-customers) になります。

## Opportunity Types

新規または既存になり得るものが 3 つあります。

- Account（組織）
- Subscription（GitLab インスタンスにリンク）
- Amount（サブスクリプションに支払われるドル）

これにより、4 つのタイプのオポチュニティが生まれます。

1. **New account**（新規アカウント、新規サブスクリプション、新規金額）: このタイプは、セールスチームまたはウェブポータル経由でサインアップする新しいサブスクリプションのために使用すべきです。
組織がエンタープライズライセンスを持っていない場合、有料トレーニングもこのタイプに該当します。
これは New Business としてマークすべきです。
1. **New subscription**（既存アカウント、新規サブスクリプション、新規金額）: 既存のアカウントが別の GitLab インスタンスのために新しいライセンスを購入している場合、これは New Business になります。
1. **Add On Business**（既存アカウント、既存サブスクリプション、新規金額）: このタイプは、既存のサブスクリプション部門に対して、更新時ではなく期中に売られる増分/アップセルビジネスのために使用すべきです。
これは、サブスクリプションへの追加シートまたはプランのアップグレードの場合があります。
既存のアカウントが新しいサブスクリプションを追加している場合、これは Add-on ではなく New Business になります。
1. **Renewal**（既存サブスクリプション、既存サブスクリプション、既存金額）: このタイプは、既存のアカウントが GitLab とのライセンスを更新する場合に使用すべきです。
更新は値を増減させたり、同じままにしたりできます。
私たちは Salesforce.com のフィールドとして増分の Annual Contract Value の成長/損失をキャプチャしています。
Renewal ビジネスは、サブスクリプションに以前支払われたドル（更新率）よりも少ない金額で更新された場合、負の金額になり得ます。
新旧金額の差分の部分のみが IACV で、残りは renewal オポチュニティの一部です。

- 顧客が契約をリセットしたい場合は、これは更新と見なされます。
たとえば、顧客が 1 月 1 日に 12 か月間で開始しますが、4 月 1 日からさらに 12 か月の期間でリセットしたい場合などです。

**New business** は new account と new subscription の組み合わせです。

### Opportunity Stages

セールスのプロセスを進めるために、各ステージで尋ねるべき質問のリストが [こちら](https://docs.google.com/document/d/1ag7YY9aJ93j0CRZb-DrbfgH3vmHprTEdjG7l3O57xEk/edit) にあります。

**0-Pending Acceptance**: これはオポチュニティが作成された後の最初のステージです。

- このステージで完了すべきこと:
  - BDR/SDR ソースのオポチュニティの場合、オポチュニティは [Sales Accepted Opportunity 基準](/handbook/sales/field-operations/gtm-resources/#opportunities) を満たします。
  - BDR/SDR が Google Calendar 経由でコールをスケジュールし、招待を送り、アカウントオブジェクトでイベントを作成し、イベントに名前を付けます: GitLab Introductory Meeting - {{Account Name}}
  - オポチュニティは、Geo/Segment/ディールタイプ別の平均と中央値に基づいて、このオポチュニティの Net ARR 値の見積もりで Stage 1 XDR Net ARR フィールドを埋めます。
  - オポチュニティが Sales Accepted Opportunity 基準を満たすことが確認されると、SAE または AE はオポチュニティを次のステージに移動し、`Amount` フィールドに見積もりパイプラインを入力する必要があります。これにより、ステージ 1 に入る際のオポチュニティの Net ARR 値を示す Stage 1 Net ARR フィールドが埋まります。オポチュニティがこのステージから次のステージに移動した日付は、オポチュニティレコードの `Sales Accepted Date` フィールドに入力されます。
  - オポチュニティの詳細が Sales Accepted Opportunity 基準を満たさない場合、SAE または AE はオポチュニティを `9-Unqualified` ステージに移動する必要があります（これはオポチュニティが `9-Unqualified` ステージに移動できる唯一の時です）。
  - すべての sales assisted な Opps は、パイプラインでさらに進む前に、まずこのステージに入る必要があります。ある時点でこのステージに入らない場合、検証ルールエラーが発生します。
  - 更新オポチュニティの場合、`0-Pending Acceptance` は、更新が Account Executive/Strategic Account Executive によって積極的に取り組まれていない場合にのみ使用されます。

**1-Discovery**: プロジェクトについてできるだけ多くのインテリジェンスを発見します。これはセールスサイクル全体の後のステージで確認されます。

- このステージで完了すべきこと:
  - [MEDDPPICC](/handbook/sales/meddppicc/) を埋め始める
  - Plan Letter/参加者へのリキャップメールを送信 - [例](https://docs.google.com/document/d/16Gurj_MVREmKoqXTdB1F0OQ3eyq1gzbTNU8LNHHuoEM/edit)
  - スコーピングコールのスケジュール
  - オポチュニティの `Expected Number of Users` と `Expected Product` の見積もりを提供します。この情報は customer success チームが将来のワークロードを予測し、雇用計画に役立てるために使用されます。
  - オポチュニティが `1-Discovery` から次のステージ（8-Closed Lost や 9-Duplicate ではない）に進む場合、これは `Sales Qualified Opportunity` と見なされます。オポチュニティがこのステージから進む際に以下の値が入力されます。
    - `Sales Qualified` が True。
    - `Sales Qualified Date` は、オポチュニティがこのステージから次のオープンまたは勝利ステージに移動した日付です。
    - `Initial IACV` は `Incremental ACV` フィールドの値をキャプチャします。`Initial IACV` はスナップショットフィールドで、`Incremental ACV` フィールドが更新されても変更されず、`Deal Size` 分析に使用されます。

**2-Scoping**: ビジネス課題/目標、競合状況、フィットの実現を発見します。

- このステージで完了すべきこと:
  - デモを実施（任意）
  - 技術評価コールをスケジュール
  - 新しい [MEDDPPICC](/handbook/sales/meddppicc/) 情報を確認・収集します。
  - 予想される opp 額に調整を加える。これは Stage 3 Net ARR フィールドに影響し、ステージ 3 に入る際のこのオポチュニティの Net ARR 値を埋めます。

**3-Technical Evaluation**: 技術要件を確認。Proof-of-Concept（POC）がこのステージで発生する場合があります。これは提案が提供される前に情報を確認するステージでもあります。

- このステージで完了すべきこと:
  - POC Notes と POC Success Criteria（該当する場合）を入力し、オポチュニティに関連する POC Notes と POC Success Criteria フィールドに入力します。
  - *技術要件、POC スコープ*を確認
  - *技術的な勝利/POC 成功*を確認
  - 新しい [MEDDPPICC](/handbook/sales/meddppicc/) 情報を確認・収集します。

**4-Proposal**: ビジネスおよび技術的な課題が発見され解決されています。提案がドラフトされ見込み顧客に提供されます。

- このステージで完了すべきこと:
  - Bill to 情報（請求書を受け取る人）、Sold to 情報（ライセンスキーを受け取る人）を確認します。顧客が PO を発行するかどうか、また顧客から要求されるベンダー登録フォームがあるかどうかも確認する必要があります。
  - 完全な bill to と sold to 情報を含む正式な契約書を見込み顧客に提供します。不完全または不正確な情報を含む見積もりは Deal Desk によって拒否されることに注意してください。
  - MSA は別途提供される場合があります。
  - 購買/契約レビュープロセスの明確な理解と、Purchasing Plan フィールドに文書化されたクローズプラン（取られるアクション、アクションを完了する人物の名前、各アクションの日付）。

**5-Negotiating**: 見込み顧客または顧客が提案を受け取り、契約交渉中です。

- このステージで完了すべきこと:
  - ビジネス条件への合意
  - すべての提案には標準の GitLab [Terms](https://about.gitlab.com/terms/#subscription/) が含まれている必要があります。
  - オポチュニティがクローズしたときに顧客が参照可能かどうかを判断します。答えが:
    - "Yes" の場合、Account オブジェクトの `Referenceable Customer` セクションを適切な参照情報で更新します。
    - "No" の場合、参照になる議論は後日再開できます。
  - $25k 未満のオポチュニティ、または Starter エディションについては、標準条件の変更は受け入れられません。
  - 上記の閾値を満たす場合、標準条件の変更リクエストは、[こちら](/handbook/sales/field-operations/order-processing/#process-for-agreement-terms-negotiations-when-applicable-and-contacting-legal) で見つかるプロセスに従って Salesforce で legal ケースを作成して Legal に送信する必要があります。
  - アカウントが独自のペーパーを使用したい場合、オポチュニティが $100k を超える場合のみリクエストが受け入れられ、リクエストは [こちら](/handbook/sales/field-operations/order-processing/#request-for-gitlab-review-of-customer-edits-to-gitlab-template-or-review-of-customer-agreement-template) で見つかるプロセスに従って Salesforce で Legal ケースを作成して Legal に送信する必要があります。

**6-Awaiting Signature**: 見込み顧客または顧客が提案で概説された条件に口頭で同意し、署名のために提出しました。

- このステージで完了すべきこと:
  - すべての価格と法的条件への同意を示す、署名済みのオーダーフォームを受領しました。
  - 該当する場合、購買発注書を取得します。
  - GitLab AR と協力して、税金を提供し、ベンダー登録プロセスを完了します。
  - すべての関連ドキュメント（MSA、PO、その他のフォーム）が、オポチュニティレコードの Notes and Attachments セクションで SFDC にアップロードされていることを確認します。
  - EULA（End User Licence Agreement）がエンドユーザー組織によって受け入れられました（該当する場合）。
  - 関連する `Competitors` を特定し、オポチュニティに入力します。
  - `Closed Won Reason` と `Closed Won Details`（私たちが選択した Closed Won Reason をサポートする、なぜオポチュニティを勝ち取ったかの簡潔な要約）を入力します。
  - Zuora でサブスクリプションが作成されました。
  - オポチュニティが Finance 承認のために提出されました。

**Closed Won**: おめでとうございます！！両当事者が条件に同意し、見積もりが Finance によって承認されました。

- このステージで完了すべきこと:
  - Customer Success/Account Management を紹介（該当する場合）
  - 30 日のフォローアップのためにカレンダーリマインダーを設定
  - 該当する場合、Customer Onboarding または Premium Support オンボーディングを開始

**8-Closed Lost**: オポチュニティが失われ、見込み顧客/顧客は GitLab の購入を追求しないことを決定しました。

- このステージで完了すべきこと:
  - [こちらで定義された](https://docs.google.com/presentation/d/1jHKfQn0qKEpfaMxohJctFWV_uNmXv51VJ3O8_UTTIuA/edit#slide=id.p) 該当する Closed Lost Reason を選択します。
    - 損失が Competitive Loss による場合、オポチュニティの `Competitor` フィールドから競合相手を選択する必要があります。
    - 損失が Product Maturity による場合、オポチュニティの `Product Maturity: Product Line` フィールドから製品ステージを選択する必要があります。
  - `Closed Lost/Unqualified Details` は、Net ARR 値が $25,000 以上のすべてのオポチュニティ、または Closed Lost Reason = Other のオポチュニティで必須です。なぜ私たちがディールを失ったかについて、できるだけ詳細を入力してください。たとえば:
    - 競合相手を選んだ場合、なぜですか？機能ですか、価格ですか？
    - プロジェクトを前進させないことを決定した場合、その理由は何ですか？価値を理解していませんでしたか？説得力のあるイベントや理由がありませんでしたか？
    - これらの経験から学ぶ際に貴重な情報となるため、できるだけ詳細にしてください。
  - 新規ビジネスディールで、オポチュニティが Large/PubSec アカウントとのもの、または Net ARR が $12,000 以上の場合、[#lost-deals](https://gitlab.slack.com/messages/C8RP2BBA7) Slack チャンネルに通知が送信されます。
  - フォローアップの時期を発見（既存ソリューションの契約満了日）
  - オポチュニティがデッド/停止している場合、ステージを 8-Closed Lost としてマークしてください。見込み顧客/顧客が再エンゲージした場合、新しいオポチュニティを作成する必要があります。
  - `Closed Lost/Unqualified Reason` が "Merged into another opportunity" の場合、`Merged Opportunity` ルックアップフィールドを使用してこのクローズドオポチュニティをマージ先のオポチュニティにリンクしてください。そうしないと、検証ルールエラーが発生します。

**9-Unqualified**: オポチュニティはクオリファイされませんでした。

- このステージで完了すべきこと:
  - なぜオポチュニティがクオリファイされなかったかについての関連メモで `Closed Lost/Unqualified Reason` と対応する `Closed Lost/Unqualified Details` を更新します。
  - Sales Development Team Lead に通知が送信され、AE と Team Lead の間でフィードバックセッションがスケジュールされるべきです。

**10-Duplicate**: システム内に重複オポチュニティが存在します。通常、これは Salesforce に既存のオポチュニティが存在する状態で web direct のオポチュニティが勝った場合に発生します。別の理由として、同じオポチュニティに対して複数の更新が作成された場合があります。このステージは、オポチュニティをディスクオリファイする際、または承諾後にオポチュニティが実際にはより大きなイニシアチブの一部であることが判明した場合には使用すべきではありません。オポチュニティが承諾されている場合は、重複としてマークできません。代わりに、オポチュニティを `8-Closed Lost` としてマークし、適切な理由を選択する必要があります。可能な選択肢には、重複オポチュニティが作成された理由として "Consolidating order - part of another subscription" や "Merged into another opportunity" などがあります。

- このステージで完了すべきこと:
- オポチュニティをこのステージに移動
- このオポチュニティの重複元のオポチュニティで `Duplicate Opportunity` ルックアップフィールドを記入します。このフィールドが入力されていない場合、検証ルールエラーが発生します。

### オポチュニティステージ移動に関する考慮事項

私たちの標準クオリフィケーションプロセスを通じてオポチュニティをクオリファイすると、オポチュニティを `0-Pending Acceptance` または `9-Unqualified` の以下のステージに戻すことはできません。
以前にクオリファイしたオポチュニティをこれらのステージのいずれかに戻す必要がある場合は、Sales Operations に連絡してください。なぜオポチュニティが（クオリファイされたら）もうクオリファイされないのかを判断できます。

### オポチュニティを以前のステージに戻す

オポチュニティステージは GitLab の [Sales Stage Definitions](https://gitlab.highspot.com/items/623e24381f87632cd3327e93?lfrm=ssrp.0) と整合する必要があります。ただし、オポチュニティが時期尚早に進められた場合や、セールスプロセスの状況が大きく変化した場合、オポチュニティステージの戻しを要求できます。オポチュニティオーナーはセールスステージを前方にのみ進めることができることに注意してください。ステージ戻しのリクエストを行うには、オポチュニティオーナーは、ステージの戻しの詳細と正当化、およびマネージャーの承認とともに、sales-support に対して chatter する必要があります。

### Early Stage Deals: 進行要件と自動化

パイプラインをクリーンに保ち、early stage のディールが望ましい速度でパイプを通過することを確保するため、ステージ `1-Discovery` および `2-Scoping` のすべての **New Business** オポチュニティは、以下のプロセスによって管理されます。

**タイムライン:** セグメント別の Inactivity Warning Day と Auto Closure Day

- Large/PubSec: Day 45 / Day 90
- Mid-Market: Day 21 / Day 45
- SMB: Day 7 / Day 15

**定義**: **アクティビティ**を構成する SFDC アクションには以下が含まれます。

- ステージの進行
- Command Plan エントリ
- Next Steps の更新

**Stage 1-Discovery のプロセス:**

1. （セグメント特定の）Warning day に、オポチュニティオーナーとオポチュニティオーナーのマネージャーが非アクティブを警告するメール通知を受け取ります。
   - Auto closure を避けるために、オポチュニティオーナーはステージを進行させるか、オポチュニティにアクティビティを追加する必要があります。
2. Warning day と auto closure day の間にアクティビティがない場合:

   - オポチュニティは自動的に "No Progression-Auto Close" の `Closed Lost/Unqualified Reason` で（`8-Closed Lost` として）クローズされます。
   - オポチュニティオーナー、オポチュニティオーナーのマネージャー、Marketing にこの変更に関するメール通知が送信されます。
   - オポチュニティが依然として実行可能だが、この自動プロセスを通じて Closed Lost に移動されたシナリオでは、オポチュニティオーナーは新しいオポチュニティを作成する必要があります。

3. オポチュニティに対してアクティビティがあるか、Stage `2-Scoping` に進行した場合、Warning と Auto Closure Day プロセスが再開します。

**Stage 2-Scoping のプロセス:**

1. 上記のステップ 1 と 2 と同じプロセス
2. Step 3: オポチュニティが Stage `3-Technical Evaluation` に進行した場合、年齢化によるアクティビティ要件はなくなります。

### "At Risk" 可能性の結果としてのオポチュニティのロック

US 規制に準拠するため、私たちが取引することが許可されていない既知の個人や組織に対してオポチュニティをスクリーニングする必要があります。
これらの規制に準拠するため、オポチュニティが作成されるときに、サードパーティアプリケーション Visual Compliance を通じてスクリーニングされます。
Visual Compliance は、私たちのアカウント情報をさまざまな Denied Party Lists にリストされている制裁対象者と常に比較する動的スクリーニングツールです。
Visual Compliance は新しい情報をスクリーニングし、既存の情報を監視して、私たちが取引する当事者の整合性と合法性を確保します。
アカウントの情報が**正確**であればあるほど良いです。部分的な情報は誤った「ヒット」を引き起こし、遅延の原因となる可能性があります。
完全な会社名、会社住所、国、コンタクト名を提供してください。

アカウントを更新しようとしたときに export に関するエラーを受け取った場合:
(i) アカウントの Visual Compliance セクションに "Pending" と表示されているかどうかを確認 -- システムが初期チェックを実行して更新するまで 15〜30 分待ちます。
(ii) アカウントの Visual Compliance セクションに "Yellow" または "Red" と表示されている場合 -- 法務チームがコンプライアンスを確保するためにアカウントを手動でレビューしています。ヒットの手動レビューは 1 日に 3 回実施されます。
Legal による変更は自動的にアカウントを更新しますが、更新の同期には 15〜30 分かかる場合があります。

- ステータスが "Clear" に更新されると、注文が処理され、アカウント機能が再開します。
- ステータスが "Escalate" に更新された場合、企業自体に関する懸念があるか、禁輸国への販売の試みがあります。エスカレートされた注文は処理されません。
(iii) アカウントが即座の注意を必要とする場合（例: ディールをクローズするため）、アカウントで Chatter メッセージを開き、"@legal" にメッセージを送ってください。リクエストを受け取ると、Legal チームは Visual Compliance でレビューと更新を行えます。
Legal が問題を発見した場合、フラグとアカウントはロックダウンされたままになることを理解してください。

## アカウントの種類

### CE Usage Ping データを利用して Salesforce で作成されたアカウント

[CE Usage ping](https://docs.gitlab.com/ee/administration/settings/usage_statistics.html) は、エンドユーザーがプラットフォームをどのように利用しているかについて、GitLab に限定的な知見を提供します。
生情報はクリーンアップされ、エンリッチされてから、Data Team によって Account として SFDC にプッシュされます。

Salesforce に既存のアカウントマッチがない場合、以下の情報が入力された新しいアカウントレコードが作成されます。

| SFDC フィールド | デフォルト値 |
| ---------- | ------------- |
| Account Name |  |
| Account Source | `CE Download` |
| Number of Employees |  |
| Billing Street |  |
| Billing City |  |
| Billing Zip |  |
| Billing Country |  |
| Account Type | `Prospect - CE User` |
| Account Website |  |
| Industry | Clearbit によって入力（その後廃止） |
| Active CE Users | Usage Ping によって入力 |
| CE Instances | Usage Ping によって入力 |
| Account Owner | デフォルトで Sales Admin |
| Using CE | True にチェック |

**プロセス**

1. Sales Team メンバーは、このデータを使用して、ターゲットセグメントに合致する `Prospect - CE User` アカウントを積極的に特定できます。`Sales Admin` が所有するアカウントは、Salesforce でオーナーシップを変更することで Sales Team メンバーによって引き取られます。
`Sales Admin` 所有のレコードの引き取りは、どのアカウントレコードが請求されたかの透明性と認識のために、Account Research Specialist にメールアラートを送信するトリガーとなります。
2. Account Research Specialist は、Sales Team メンバーまたは Outbound BDR のいずれかによって取り組まれるべき追加のアカウントレコードを判断するために、`Prospect - CE User` アカウントを定期的にレビューする責任があります。
3. アカウントレコードがフォローアップのために特定された場合、Account Research Specialist は適切な Regional Director（RD）と協力して、ワークロードと利用可能なキャパシティに基づき Outbound BDR の割り当てを決定します。
4. 割り当てられた Outbound BDR は、既知の `CE User` アカウントと同じように、利用可能なツール（Zoominfo、LinkedIn Sales Navigator など）を活用して、アカウントレコードにコンタクトを追加し、アカウントのファーモグラフィックプロファイルを入力することで、`Prospect - CE User` アカウントに取り組みます。

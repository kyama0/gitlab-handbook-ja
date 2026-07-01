---
title: ハイパースケーラーキャンペーン
upstream_path: "/handbook/marketing/channel-marketing/hyperscalers/"
upstream_sha: 4253b2ab72b0791916a54411ca71a25276e128bd
lastmod: 2026-06-26T16:42:42+00:00
translated_at: "2026-07-02T06:06:16+09:00"
translator: codex
stale: false
---

## 命名規則の要件

AWS や Google Cloud のようなハイパースケーラーパートナーと協業する際は、特定の命名規則と設定手順に従うことが重要です。本ガイドではこのプロセスの各構成要素を詳しく説明します。

ハイパースケーラーパートナーが関わるすべてのキャンペーンは、日付の後にハイパースケーラーパートナー名を指定する必要があります:
> YYYYMMDD_HyperscalerName_Campaign_CampaignType_Region

例:

- 20251202_AWS_AWSreinvent_Booth
- 20250409_GCP_GoogleCloudNext_Booth
- 20241114_AWS_devops.com_ModernizingFinServe_emea_amer

ハイパースケーラーファンドが関与する場合、ハイパースケーラー名の後にキャンペーンに適用されるファンドの種類を含めるようにしてください。

- MDF: 50% カバーの Market Development Funds
- CR: 100% カバーの Credits

例:

- 20250307_AWS_MDF_Campaign_CampaignType_Region
- 20250307_GCP_CR_Campaign_CampaignType_Region

特定のキャンペーンタイプの命名規則については、[Campaigns and Programs](/handbook/marketing/marketing-operations/campaigns-and-programs/#hybrid-marketo-templates) ページを参照してください。

## Salesforce 設定要件

Salesforce でこれらのキャンペーンをセットアップする際、2 つの重要なアクションを行う必要があります:

1. `Is Hyperscaler Involved?` フィールドを `True` に設定 - これによりキャンペーンがパートナーシップアクティビティとしてフラグ付けされます。
2. `Hyperscaler` フィールドで該当するパートナーを選択 - 以下のいずれかを選択:

   1. Amazon Web Services
   2. Google Cloud（Partner）

3. `Will there be Hyperscaler Funding?` でファンドタイプを選択

   1. MDF
   2. Credits

この設定により、パートナーシップアクティビティの正確なアトリビューションとトラッキングが保証されます。Hyperscaler MDF は AWS MDF のみを指していることに注意してください。これは現在 GitLab で利用可能な MDF だからです。

### このガイドラインの対象となるキャンペーンタイプ

これらの命名規則と設定要件は、ハイパースケーラーが関与するすべての活動に適用されます。これには以下が含まれます:

- ハイパースケーラー主催イベント（Google Cloud Next や AWS Summit など）での展示ブース
- 主要コーポレートイベント（AWS re:Invent など）への出展
- ハイパースケーラーパートナーとの共同ウェビナー
- コンテンツシンジケーションや広告を含むデジタルマーケティングキャンペーン
- AWS MDF（Market Development Funds）または Google Credits を使用するイベント・活動

### コンテンツシンジケーションチーム向けの特別な手順

コンテンツシンジケーションに関わる場合、追加のステップがあります: Content Syndication フォルダの Marketo トークンの Asset Name を、ハイパースケーラー名を含むように更新する必要があります。

これにより、すべてのプラットフォーム間で整合性が保たれ、レポートとアトリビューションがより正確になります。Marketo Program Description フィールドは最近、ハイパースケーラーパートナーが関与するときに常にキャンペーン名にハイパースケーラーパートナー名を追加することを思い出させるよう更新されました。

これらのガイドラインを慎重に守ることで、適切なトラッキング、レポート、パートナーシップ契約への準拠が保証され、システム全体でキャンペーンが探しやすく管理しやすくなります。

## ハイパースケーラー資金提供キャンペーン

ハイパースケーラー資金提供キャンペーンは、Amazon Web Services（AWS）や Google Cloud Platform（GCP）のようなクラウドハイパースケーラーが、共同マーケティングイニシアチブのために GitLab のようなパートナーに財務的支援を提供する戦略的パートナーシップメカニズムです。

現在、ハイパースケーラーファンドは **Regional Marketing チームのみ** が利用可能です。今後イテレーションを重ねながら、追加のマーケティングチームをサポートする予定です。

これらのファンディングプログラムは、各ハイパースケーラーのパートナーシップアプローチを反映する異なるモデルで運用されます:

- **AWS MDF プログラム**: マッチング投資モデルに従います。つまり、AWS が拠出する 1 ドルごとに、GitLab も自己資金で同額をマッチさせる必要があります。
- **Google Credits プログラム**: AWS とは異なり、Google は承認されたマーケティング活動について 100% のリインバースを提供します。このモデルにより、GitLab はキャンペーンを実行し、活動が正常に完了したことの証明を提供することで、全額の払い戻しを受けることができます。

GitLab の視点から見ると、これらのファンドは可能な範囲を超えてより広範なマーケティングキャンペーンを実施できるようにすると同時に、主要なクラウドプロバイダーとの戦略的パートナーシップを強化します。このパートナーシップは「better together」のナラティブを生み出し、これらのクラウドプラットフォーム上で稼働する GitLab の価値提案を顧客が理解する助けとなります。

### ハイパースケーラー資金提供キャンペーンの主要な役割

1. Program Owner（Francine）: ハイパースケーラーパートナーとの主要連絡窓口

   1. MDF プログラム全体を統括
   2. 内部の MDF リクエストエントリーをハイパースケーラーとレビュー
   3. MDF リクエストを提出し、承認されたら PO を受領
   4. AR チームに PO と MDF 承認メールを Issue 経由で提出して請求書を依頼
   5. ハイパースケーラーポータルに proof of performance（領収書）を添えてクレームを提出

2. Fund Requester: 資金リクエストを開始する人

   1. キャンペーン詳細を [該当するスプレッドシート](/handbook/marketing/channel-marketing/hyperscalers/#application-process) に入力
   2. Target MQL と Target Pipeline 目標を提供

3. Campaign Owner／Operations（Fund Requester は Campaign Owner も兼ねることが可能）

   1. Allocadia アクティビティをセットアップ
   2. GitLab Hyperscaler Funds Issue を作成（Plan to WIP プロセス中に自動で割り当てられます）
   3. Hyperscaler Funds Issue リンクを [該当するスプレッドシート](/handbook/marketing/channel-marketing/hyperscalers/#application-process) に追加
   4. Marketo と Salesforce の実行・セットアップを管理
   5. Zip リクエストをオープン
   6. Proof of Performance のために Program Owner に領収書を送付

### 申請プロセス

1. Google Sheet に記入:

    1. AWS: [マーケティングカレンダー - スプレッドシート](https://docs.google.com/spreadsheets/d/1Ej_QJpTI0u_hPwB-jJKcqTviIAnmS1wgctfabgfUlPM/edit?gid=2978057#gid=2978057)
    2. GCP: [マーケティングカレンダー - スプレッドシート](https://docs.google.com/spreadsheets/d/1B2mSraHHhCMbK96Sx0ZQlXTI6J7tIp5LNeWdsnKetrE/edit?usp=sharing)
    3. すべての必須フィールドを記入。これには以下が含まれます:

       1. Strategic Alignment
       2. Region
       3. Activity Type and Description
       4. Proposed Start and End Date
       5. Total Cost
       6. Amount Requested
       7. Target MQL
       8. Target Pipeline

2. レビュー提出:

    1. Google スプレッドシートで Francine をタグ付けして承認を依頼
    1. ケースを補強する裏付け資料（同様の活動の過去実績、顧客の関心データなど）を含める

### 承認プロセス

1. 初期スクリーニング: Francine が申請を確認し、基本要件を満たし戦略的優先事項に沿っているかを確認します。
2. ハイパースケーラーパートナー承認: 予備承認後、Francine がアクティビティをレビューし、ハイパースケーラーパートナーから承認とファンド額を確認します。
3. システム設定: ハイパースケーラーパートナーが承認すると、

    1. Campaign Owner は Allocadia アクティビティと Hyperscaler Funded GitLab Issue をオープンします
    2. Campaign Owner は、Allocadia Subcategory ID（Hyperscaler Funded GitLab Issue 内）を使用して Marketo キャンペーンを作成し Salesforce に同期する責任を負います

### セットアップ

#### Allocadia

Campaign Owner は、[Regional Marketing > AMER > Hyperscaler](https://eu1.allocadia.com/budgets/122286/items?view=default) プラン配下で Allocadia アクティビティをオープンする責任を負います。

1. サブカテゴリーとライン項目を作成

    1. ハイパースケーラーごとに異なる会計アプローチが適用されます。AWS キャンペーンはプラスの貢献額とマッチングするマイナス額の両方を表示し、GCP キャンペーンは全額のリインバース可能額を表示します。

2. Details パネル

    1. Planning:

       1. New FO または Growth
       2. Target MQL（SFDC Planned MQL に同期）
       3. Target Pipeline（SFDC Planned Pipeline に同期）
       4. Sales Dev Onsite Support
       5. Sales Dev Invite Support
       6. Subcategory（FM）
       7. GTM Motion
       8. Start Date
       9. End Date
       10. Triple Play
       11. Embedded Systems
       12. Is Hyperscaler Involved? = True
       13. Hyperscaler
       14. Will there be Hyperscaler funding?
       15. Hyperscaler Funding Amount
       16. SA Support
       17. Segment
       18. Geo
       19. Country
       20. Vendor

    2. Campaign Details

       1. Existing Salesforce Campaign
       2. Campaign Link
       3. Have you selected an existing Campaign above or will you be creating a new one?
       4. Campaign Name to be Created（Mkto／SFDC）
       5. Campaign Owner
       6. Budget Holder = hyper
       7. Campaign Type

    3. GitLab Issue Details

       1. Requester User Handle
       2. Campaign Operations User Handle（FM でない場合に記入）
       3. Operational Program Owner = Francine
       4. Partner User Handle = @fanthony2
       5. In Person Event Type
       6. GitLab Issue Template = Hyperscaler
       7. Official Event／Campaign Name
       8. GitLab Marketing Issue Link（自動入力）
       9. GitLab Issue URL Reference（手動入力）

3. アクション: Regional Marketing GitLab プロジェクト内で GitLab Hyperscaler Funded Issue を作成

#### GitLab Issue

1. Campaign Owner は、地域とアクティビティ四半期ラベルを含む詳細を GitLab Hyperscaler Funds Issue に入力する責任を負います。
2. Program Manager は、PO と支払条件を含む財務 Issue を使用して AR から請求書をリクエストします。MDF - [例](https://gitlab.com/gitlab-com/Finance-Division/finance/-/issues/6464)
3. Operations Checklist が完了したら、Campaign Owner は Issue を [Plan から WIP](/handbook/marketing/field-marketing/#process-for-moving-events-from-plan-to-wip) に移動できます。

##### イベント前

1. Marketo／SFDC キャンペーンを作成し、Campaign Name の日付の後にハイパースケーラー名とハイパースケーラーファンドタイプを追加 - [命名規則](/handbook/marketing/marketing-operations/campaigns-and-programs/#partner-campaign-setup) のハンドブックを参照。 _例: 20250307_AWS_MDF_ActivityType_ActivityName_Region;
20250307_GCP_CR_ActivityType_ActivityName_Region（詳細はプログラムトラッキング Issue テンプレートで提供）

   1. [Hyperscaler Funded Campaign フォルダ](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/MF27058A1) 配下に Marketo プログラムを作成
   2. Hyperscaler Funded Campaign Allocadia Subcategory ID を使用して Marketo プログラムを Salesforce に同期
   3. GitLab エピックの Marketo および Salesforce へのリンクを更新

2. Zip リクエストをオープン（詳細は contract request Issue テンプレートで提供）

   1. マーケティング活動の契約／請求書を取得
   2. 適切な購入タイプを選択: Sponsorships & Regional Marketing
   3. 総契約コスト額を入力
   4. Allocadia ID では、Zip リクエストの Hyperscaler Fund Allocadia アクティビティの Line Item ID（プラスの値）を指定
   5. Francine を Zip リクエストのフォロワーとして追加
##### イベント後

詳細は Hyperscaler Funds Tasks Issue テンプレートで提供されます。

1. Hyperscaler Funds Tasks Issue に Proof of Payment（POP）を添付し、Francine をタグ付け

   1. 現金リインバースには、実コストを示す第三者の領収書が必要です。日付（ファンドリクエスト承認後）と支払金額が明確に表示されている必要があります。

2. イベント終了から 2 週間後に、該当する [ハイパースケーラースプレッドシート](/handbook/marketing/channel-marketing/hyperscalers/#application-process) を Actual MQL と Pipeline で更新します。

### 予算をハイパースケーラーへ移転

マーケティングチームに余剰予算がある場合、パートナーシップ機会を最大化するために戦略的に[資金を移転](https://support.allocadia.com/hc/en-us/articles/360060630433-What-are-Budget-Reallocations#%23) できます。Hyperscaler Activity Plan に [予算移転リクエスト](/handbook/enterprise-data/marketing-analytics/allocadia/#request-transfer) を提出することで、チームは共同マーケティングリソース、潜在的なマッチングファンド、拡張された協業キャンペーンを引き出せます。資金移転に関する質問があれば、FP&A POC に連絡してください。

注意: FP&A はこのプロセスに関与しており、将来の予算策定のためにすべてのファンド移転を追跡しています。

Zip リクエストを提出する際、Allocadia ID がプラスの値を反映していることが、適切な財務トラッキングを支える上で極めて重要です。

### Channel／Hyperscaler MDF のユースケース

このシナリオでは、マーケティング活動に対して複数の MDF ソースがあり、GitLab とハイパースケーラーが協力してマーケティングイベントの資金提供と実行を行います。GitLab がパートナーに MDF を提供し、ハイパースケーラーがイベント実行とイベント後のリードフォローアップを担当する GitLab に対するリインバースとして MDF を提供します。

ハイパースケーラー MDF プログラムの定義と GitLab の最近の監査要件のため、ハイパースケーラー MDF は GitLab に直接のみ支払えます。すべての MDF 取引は明確な監査証跡を維持する必要があり、予算管理は Allocadia のハイパースケーラー階層の下に集約されます。パートナーがハイパースケーラー MDF を直接受け取ることはできませんが、適切な請求書があれば GitLab はサードパーティベンダーに支払うことが可能です。

#### ステップ 1: 予算をハイパースケーラー Allocadia アクティビティに移転

1. Allocadia Channel MDF に移動
2. 紫色の "Request Transfer" ボタンをクリック
3. 移転リクエストフォームに記入

#### ステップ 2: Allocadia セットアップ

1. ハイパースケーラーアクティビティプランで、イベントサブカテゴリーを作成
2. サブカテゴリーの下に 2 つのライン項目を追加:
    1. Line Item 1: "Channel MDF" - プラスの金額（例: +$3,000）
    2. Line Item 2: "Hyperscaler MDF" - マイナスの金額（例: -$3,000）

#### ステップ 3: 支払処理

支払先を慎重に決定してください。監査要件によりパートナーへの直接支払いは許可されていませんが、適切な請求書があるサードパーティベンダーへの支払いは可能です。サードパーティアプローチを使用する場合は、パートナーからベンダー詳細を取得し、システムに未登録の場合はオンボーディングしてください。

2 つの別個のトランザクションを処理:

1. 標準のクレームプロセス（ハンドブックページセクションへのリンク）に従って、Hyperscaler MDF 支払いを GitLab に受領
2. 適切な請求書ドキュメントを伴い、GitLab MDF を通じてベンダーまたはパートナーに支払う

#### ステップ 4: GitLab Issue

1. Regional Marketing がマーケティング活動を管理する場合、[Plan to WIP プロセス](/handbook/marketing/field-marketing/#process-for-moving-events-from-plan-to-wip) に従います。
2. Channel Marketing がマーケティング活動を管理する場合、Channel Marketing MDF GitLab Issue を使用します:

    1. 追加の Allocadia アクティビティを作成:

       1. Channel Marketing MDF サブカテゴリーと 0 ドル値のライン項目を作成（既存の Hyperscaler セットアップに加えて）
       2. これにより、ハイパースケーラー監査証跡を維持しつつ、チャネルマーケティング側面の別個のセットアップが可能になります

    2. Issue とプロジェクトのセットアップ:

       1. Channel Marketing GitLab Issue を作成
       2. 詳細に記載されたプロセスフローに従う

    3. プログラムと支払のコーディネーション:

       1. Channel MDF ライン項目を使用して Marketo プログラムを作成（標準のチャネルプロセスと整合）
       2. Hyperscaler MDF ライン項目を Zip 支払リクエストに使用（監査コンプライアンスのため資金はハイパースケーラー階層を通る必要があります）

#### Triple Play

Triple Play イベントが GitLab Channel MDF とハイパースケーラー MDF の両方を含む場合、コストは参加するすべての当事者間で均等に三等分されます: パートナーが 1/3、GitLab が 1/3、ハイパースケーラーが 1/3 をリインバースします。

Triple Play イベントの詳細については [こちら](https://docs.google.com/presentation/d/15UBEt5n0R6Hhd2jV-SHn9TdasUAXvZCJA0flDpIBU48/edit?slide=id.g37469a251c9_0_0#slide=id.g37469a251c9_0_0) を参照してください。

##### 請求書 Allocadia セットアップ

1. Invoice 1 - Channel MDF

    1. パートナーは総イベントコストの 1/3 として Invoice 1 を受領
    2. パートナーは自分の負担分について標準 MDF プロセスに従う（MDF を使用する場合）

       1. Line Item: Channel MDF - 総イベントコストの ⅓ プラス

    3. 代替オプション: パートナーは MDF を使わず自己資金で負担することも選択可能

2. Invoice 2 - Hyperscaler MDF

    1. GitLab は残りの 2/3 として Invoice 2 を受領
    2. 標準の Coupa ワークフローを通じて外部ベンダーで処理
    3. 全 2/3 額について既存の Hyperscaler MDF プロセスに従う

       1. Line Item 1: GitLab MDF - 総イベントコストの 1/3 プラス
       2. Line Item 2: Hyperscaler MDF - 総イベントコストの 1/3 マイナス（リインバース）

    4. ハイパースケーラーは GitLab に 1/3（GitLab が受領する 2/3 の半分）をリインバース
    5. 最終結果: GitLab は 1/3 を支払い、ハイパースケーラーはリインバースを通じて実質的に 1/3 を支払う

例: 総イベントコスト: $9,000

1. パートナーへの Invoice 1: $3,000（パートナーは MDF または自己資金で対応）

    1. Channel MDF Allocadia エントリー: $3,000（Channel MDF の ½ をパートナーが支払う）

2. ハイパースケーラーへの Invoice 2: $6,000（ハイパースケーラーが GitLab に $3,000 をリインバース）

    1. Hyperscaler MDF Allocadia エントリー: +$3,000（Channel MDF の ½）、-$3,000（Hyperscaler MDF）

3. 最終的なコスト分配: パートナー $3,000、GitLab $3,000、ハイパースケーラー $3,000

### データフローの理解: リードからオポチュニティへ

ハイパースケーラーキャンペーンの最も複雑な側面の 1 つは、初期の関心からクローズドビジネスまでの顧客ジャーニーをトラッキングすることです。このジャーニーには複数のハンドオフが伴います:

- リード特定: ハイパースケーラーキャンペーンからリードが発生したとき、適切な CRM Partner ID とキャンペーン情報がタグ付けされます。
- リードからオポチュニティへの変換: リードがオポチュニティに変換される際、システムはアトリビューションを維持するためにパートナーとキャンペーン情報をマッピングします。
- 通知システム: ハイパースケーラーキャンペーンから新しいオポチュニティが発生したとき、Cloud ESM（Ecosystem Sales Manager）と通常の ESM が関与するよう自動通知でアラートが発信されます。
- Co-Sell 統合: Labra は co-sell オポチュニティのために GitLab とハイパースケーラー間のリファラルを促進し、構造化されたエンゲージメントプロセスを作成します。

このフローを理解することで、すべてのハイパースケーラーキャンペーンリードが co-sell オポチュニティになるわけではないことをチームが認識できます。しかし、プログラム全体のインパクトを示すためにトラッキングは引き続き重要です。

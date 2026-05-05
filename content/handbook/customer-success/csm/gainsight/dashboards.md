---
title: Gainsightダッシュボード
description: >-
  Gainsightダッシュボードにあるレポートのロジックの概要。
upstream_path: /handbook/customer-success/csm/gainsight/dashboards/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T01:01:39Z"
translator: claude
stale: false
---

## 各種Gainsightダッシュボードの詳細

以下は厳選されたダッシュボードで、Gainsightユーザーが情報の内容と必要なアクションを理解できるよう、各ダッシュボードのウィジェットの意味を説明しています。

### CSMバーンダウンダッシュボード

#### オンボーディング

1. **1st Engage >14**
    1. オンボーディングCTAの開始日から14日以上経過してもタイムラインエントリが記録されていない顧客数
1. **1st Value >30 Days**
    1. 元の契約日から30日以上経過しても、`Known License Utilization` が10%以上に達していない、またはCSMが手動でFirst Value Dateをログ記録していない顧客数（使用状況データが利用できない場合）
1. **Total Onboard > 45 Days**
    1. 45日以上開いたままになっているオンボーディングCTAを持つ顧客数

#### エンゲージメント

1. **PR1 Cadence >30 Days**
    1. 過去30日以内にタイムラインのアクティビティがログ記録されていないP1顧客数
1. **PR2 Cadence >60 Days**
    1. 過去60日以内にタイムラインのアクティビティがログ記録されていないP2顧客数
1. **CSM Sentiment >90 Days**
    1. 過去90日以内にCSMセンチメントのヘルススコアが更新されていない顧客数
1. **Non-Green Success Plans (PR1/PR2)**
    1. グリーンのサクセスプランを持っていない顧客数（P1とP2に分類）
1. **PR1 Success Plans: No Activity >60 days**
    1. 過去60日以内にサクセスプランにアクティビティ・更新がないP1顧客数
1. **PR1 - No EBR in 12 Months**
    1. 過去12ヶ月以内にタイムラインにEBRが記録されていないP1顧客数
1. **Green PR1 Success Plans: 0 Objectives**
    1. それ以外はグリーンだが、オープンな目標がないP1サクセスプラン数
1. **PR1 SP Percentage by CSM Team**
    1. アカウントヘルスによるサクセスプランの割合（グリーン・イエロー・レッド）の内訳

#### イネーブルメントと拡大

1. **Stage Adoption: No Activity >60 Days**
    1. 過去60日以内にアクティビティ・更新がないオープンなステージ採用CTAを持つ顧客数
1. **Stage Adoption >175 Days Total Age**
    1. 175日以上が経過したオープンなステージ採用CTAを持つ顧客数
1. **Pr1 No GitLab Admin Assigned**
    1. コンタクトリストに[GitLab管理者](/handbook/sales/field-operations/customer-success-operations/cs-ops-programs/#gitlab-admin-contacts)ペルソナが割り当てられていないP1顧客数
1. **Pr2 No GitLab Admin Assigned**
    1. コンタクトリストに[GitLab管理者](/handbook/sales/field-operations/customer-success-operations/cs-ops-programs/#gitlab-admin-contacts)ペルソナが割り当てられていないP2顧客数

#### リスク

1. **N/A Risk Impact**
    1. リスクありだが、CTAの詳細に `Risk Impact` フィールドが定義されていない顧客
1. **N/A Risk Reason**
    1. リスクありだが、CTAの詳細に `Risk Reason` フィールドが定義されていない顧客
1. **No Risk Update >35 Days**
    1. リスクありだが、過去35日以内にタイムラインにリスク更新がない顧客

#### 製品使用状況データ

1. **Unknown Instances - CSM Owned**
    1. インスタンスが設定されているが[ラベル付け](/handbook/customer-success/product-usage-data/using-product-usage-data-in-gainsight/#updating-self-managed-instance-type)されていないSelf-Managed顧客数

### CSMプロアクティブダッシュボード

#### 今月の予定

1. **Cadence Calls Due:**
    1. 過去30日以内にカデンスコール（ミーティングタイプ）のタイムラインエントリがないP1顧客数、過去60日以内にないP2顧客数
1. **Upcoming CTAs:**
    1. 今後30日以内に期限が来るNew/Work in ProgressのCTA総数
1. **Upcoming Success Plan Tasks:**
    1. 今後30日以内に期限が来るオープンなサクセスプランタスク数。期限切れのCTAは含まない
1. **Upcoming EBRs for Scheduling:**
    1. 今後30日以内に期限が来るアクティブなEBR数。期限切れのCTAは参照しない

#### 今四半期の予定

1. **Upcoming Success Plan Objectives:**
    1. 今会計年度内に期限が来るオープン/WIPの目標（期日を過ぎたものは除く）
1. **Upcoming Stage Expansion:**
    1. 今四半期に期限が来るオープン/WIPの拡大ステージ採用目標数
1. **Upcoming Stage Enablement:**
    1. 今四半期に期限が来るオープン/WIPのイネーブルメントステージ採用目標数
1. **Upcoming Renewals**
    1. 今四半期にクローズ日があり、ARR > 50000で、クローズまたは非適格でない更新オポチュニティ数
1. **Upcoming Upsell Due to Close**
    1. クローズされていないが今四半期にクローズ日がある「アドオンビジネス」オポチュニティ数

#### ヘルスと利用率

1. **High License Utilization**
    1. ライセンス利用率が90%を超える顧客数
1. **License Utilization Health**
    1. 選択したフィルターによって異なる顧客期間に基づいて、ライセンス利用率のヘルスを比較する棒グラフ
    1. ライセンス利用率の計測方法の詳細: [顧客ヘルス評価と管理 - ライセンス使用ヘルステーブル](/handbook/customer-success/csm/health-score-triage/#license-usage-health-table)
1. **CI Adoption Health**
    1. 選択したフィルターによって、CI採用のヘルスを比較する棒グラフ
    1. CI採用の計測方法の詳細: [顧客ユースケース採用](/handbook/customer-success/product-usage-data/use-case-adoption/)
1. **Customers Using Secure**
    1. このレポートは `SAST`、`Container Scanning`、`Secret Detection` などのFree/Premiumスキャン機能の顧客の使用状況を示します。これにより、CSMは顧客のDevSecOpsへの関心を測り、Ultimateへのアップグレードに関する会話を促せます。

### CSMキーメトリクスダッシュボード

このダッシュボードは、CSMが「チーム/個人のメトリクス目標に対してどのくらい達成できているか？」という質問に簡単に答えられるようにするための手段です。このダッシュボードは、FY22プレジデントクラブのメトリクスに対するパフォーマンスの洞察も提供します。FY22のCSMのプレジデントクラブメトリクスは以下のとおりです。

1. グリーンのサクセスプランを持つアカウントの割合
1. EBRを完了したアカウントの割合
1. ステージ採用イニシアチブ（イネーブルメントと拡大）を完了したアカウントの割合
1. ARR成長への貢献（このダッシュボードには表示されない）

---

#### 第1セクションのレポート

1. **Account Breakdown by CSM and Priority**
    1. CSMごとのP1、P2、P3顧客数
2. **Percentage Green SPs by All Accounts**
    1. CSMごとのすべてのアカウントで、グリーンのサクセスプランの割合
3. **Percentage EBRs by all Accounts**
    1. CSMごとのすべてのアカウントで、成功したEBRの割合
4. **Percentage Closed Stage Enablement CTAs**
    1. CSMごとのすべてのアカウントで、クローズされたステージイネーブルメントCTAの割合
5. **Percentage Open Stage Enablement CTAs**
    1. CSMごとのすべてのアカウントで、オープンなステージイネーブルメントCTAの割合
6. **Percentage Closed Expansion CTAs**
    1. CSMごとのすべてのアカウントで、クローズされたステージ拡大CTAの割合
7. **Percentage Open Expansion CTAs**
    1. CSMごとのすべてのアカウントで、オープンなステージ拡大CTAの割合

#### P1アカウント - 第2セクション

1. **Percentage of Accounts with Green SPs PR1**
    1. CSMごとのすべてのP1アカウントで、グリーンのサクセスプランの割合
2. **Percentage EBRs by CSM PR1**
    1. CSMごとのすべてのP1アカウントで、成功したEBRの割合
3. **Percentage Closed Stage Enablement CTAs PR1**
    1. CSMごとのすべてのP1アカウントで、クローズされたステージイネーブルメントCTAの割合
4. **Percentage Open Stage Enablement CTAs PR1**
    1. CSMごとのすべてのP1アカウントで、オープンなステージイネーブルメントCTAの割合
5. **Percentage Closed Expansion CTAs PR1**
    1. CSMごとのすべてのP1アカウントで、クローズされたステージ拡大CTAの割合
6. **Percentage Open Stage Expansion CTAs PR1**
    1. CSMごとのすべてのP1アカウントで、クローズされたステージ拡大CTAの割合

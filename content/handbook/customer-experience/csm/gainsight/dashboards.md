---
title: Gainsight ダッシュボード
description: >-
  Gainsight ダッシュボードにあるレポートのロジックの概要。
upstream_path: /handbook/customer-experience/csm/gainsight/dashboards/
upstream_sha: 7a2e264cb798305fd5c92b586ef9fe633a730244
translated_at: "2026-09-27T06:13:05+00:00"
translator: claude
stale: false
lastmod: "2026-09-24T21:34:11+02:00"
---

## 各種 Gainsight ダッシュボードの詳細

以下は厳選されたダッシュボードで、Gainsight ユーザーが情報の内容と必要なアクションを理解できるよう、各ダッシュボードのウィジェットの意味を説明しています。

### CSM バーンダウンダッシュボード {#csm-burn-down-dashboard}

#### オンボーディング

1. **1st Engage >14**
    1. オンボーディング CTA の開始日から 14 日以上経過してもタイムラインエントリが記録されていない顧客数
1. **1st Value >30 Days**
    1. 元の契約日から 30 日以上経過しても、`Known License Utilization` が 10% 以上に達していない、または CSM が手動で First Value Date をログ記録していない顧客数（使用状況データが利用できない場合）
1. **Total Onboard > 45 Days**
    1. 45 日以上開いたままになっているオンボーディング CTA を持つ顧客数

#### エンゲージメント

1. **PR1 Cadence >30 Days**
    1. 過去 30 日以内にタイムラインのアクティビティがログ記録されていない P1 顧客数
1. **PR2 Cadence >60 Days**
    1. 過去 60 日以内にタイムラインのアクティビティがログ記録されていない P2 顧客数
1. **CSM Sentiment >90 Days**
    1. 過去 90 日以内に CSM センチメントのヘルススコアが更新されていない顧客数
1. **Non-Green Success Plans (PR1/PR2)**
    1. グリーンのサクセスプランを持っていない顧客数（P1 と P2 に分類）
1. **PR1 Success Plans: No Activity >60 days**
    1. 過去 60 日以内にサクセスプランにアクティビティ・更新がない P1 顧客数
1. **PR1 - No EBR in 12 Months**
    1. 過去 12 ヶ月以内にタイムラインに EBR が記録されていない P1 顧客数
1. **Green PR1 Success Plans: 0 Objectives**
    1. それ以外はグリーンだが、オープンな目標がない P1 サクセスプラン数
1. **PR1 SP Percentage by CSM Team**
    1. アカウントヘルスによるサクセスプランの割合（グリーン・イエロー・レッド）の内訳

#### イネーブルメントと拡大

1. **Stage Adoption: No Activity >60 Days**
    1. 過去 60 日以内にアクティビティ・更新がないオープンなステージ採用 CTA を持つ顧客数
1. **Stage Adoption >175 Days Total Age**
    1. 175 日以上が経過したオープンなステージ採用 CTA を持つ顧客数
1. **Pr1 No GitLab Admin Assigned**
    1. コンタクトリストに[GitLab 管理者](/handbook/sales/field-operations/customer-success-operations/cs-ops-programs/#gitlab-admin-contacts)ペルソナが割り当てられていない P1 顧客数
1. **Pr2 No GitLab Admin Assigned**
    1. コンタクトリストに[GitLab 管理者](/handbook/sales/field-operations/customer-success-operations/cs-ops-programs/#gitlab-admin-contacts)ペルソナが割り当てられていない P2 顧客数

#### リスク

1. **N/A Risk Impact**
    1. リスクありだが、CTA の詳細に `Risk Impact` フィールドが定義されていない顧客
1. **N/A Risk Reason**
    1. リスクありだが、CTA の詳細に `Risk Reason` フィールドが定義されていない顧客
1. **No Risk Update >35 Days**
    1. リスクありだが、過去 35 日以内にタイムラインにリスク更新がない顧客

#### 製品使用状況データ

1. **Unknown Instances - CSM Owned**
    1. インスタンスが設定されているが[ラベル付け](/handbook/customer-experience/product-usage-data/using-product-usage-data-in-gainsight/#self-managed)されていない Self-Managed 顧客数

### CSM プロアクティブダッシュボード

#### 今月の予定

1. **Cadence Calls Due:**
    1. 過去 30 日以内にカデンスコール（ミーティングタイプ）のタイムラインエントリがない P1 顧客数、過去 60 日以内にない P2 顧客数
1. **Upcoming CTAs:**
    1. 今後 30 日以内に期限が来る New/Work in Progress の CTA 総数
1. **Upcoming Success Plan Tasks:**
    1. 今後 30 日以内に期限が来るオープンなサクセスプランタスク数。期限切れの CTA は含まない
1. **Upcoming EBRs for Scheduling:**
    1. 今後 30 日以内に期限が来るアクティブな EBR 数。期限切れの CTA は参照しない

#### 今四半期の予定

1. **Upcoming Success Plan Objectives:**
    1. 今会計年度内に期限が来るオープン/WIP の目標（期日を過ぎたものは除く）
1. **Upcoming Stage Expansion:**
    1. 今四半期に期限が来るオープン/WIP の拡大ステージ採用目標数
1. **Upcoming Stage Enablement:**
    1. 今四半期に期限が来るオープン/WIP のイネーブルメントステージ採用目標数
1. **Upcoming Renewals**
    1. 今四半期にクローズ日があり、ARR > 50000 で、クローズまたは非適格でない更新オポチュニティ数
1. **Upcoming Upsell Due to Close**
    1. クローズされていないが今四半期にクローズ日がある「アドオンビジネス」オポチュニティ数

#### ヘルスと利用率

1. **High License Utilization**
    1. ライセンス利用率が 90% を超える顧客数
1. **License Utilization Health**
    1. 選択したフィルターによって異なる顧客期間に基づいて、ライセンス利用率のヘルスを比較する棒グラフ
    1. ライセンス利用率の計測方法の詳細: [顧客ヘルス評価と管理 - ライセンス使用ヘルステーブル](/handbook/customer-experience/csm/health-score-triage/)
1. **CI Adoption Health**
    1. 選択したフィルターによって、CI 採用のヘルスを比較する棒グラフ
    1. CI 採用の計測方法の詳細: [顧客ユースケース採用](/handbook/customer-experience/product-usage-data/use-case-adoption/)
1. **Customers Using Secure**
    1. このレポートは `SAST`、`Container Scanning`、`Secret Detection` などの Free/Premium スキャン機能の顧客の使用状況を示します。これにより、CSM は顧客の DevSecOps への関心を測り、Ultimate へのアップグレードに関する会話を促せます。

### CSM キーメトリクスダッシュボード {#csm-key-metrics-dashboard}

このダッシュボードは、CSM が「チーム/個人のメトリクス目標に対してどのくらい達成できているか？」という質問に簡単に答えられるようにするための手段です。このダッシュボードは、FY22 プレジデントクラブのメトリクスに対するパフォーマンスの洞察も提供します。FY22 の CSM のプレジデントクラブメトリクスは以下のとおりです。

1. グリーンのサクセスプランを持つアカウントの割合
1. EBR を完了したアカウントの割合
1. ステージ採用イニシアチブ（イネーブルメントと拡大）を完了したアカウントの割合
1. ARR 成長への貢献（このダッシュボードには表示されない）

---

#### 第 1 セクションのレポート

1. **Account Breakdown by CSM and Priority**
    1. CSM ごとの P1、P2、P3 顧客数
2. **Percentage Green SPs by All Accounts**
    1. CSM ごとのすべてのアカウントで、グリーンのサクセスプランの割合
3. **Percentage EBRs by all Accounts**
    1. CSM ごとのすべてのアカウントで、成功した EBR の割合
4. **Percentage Closed Stage Enablement CTAs**
    1. CSM ごとのすべてのアカウントで、クローズされたステージイネーブルメント CTA の割合
5. **Percentage Open Stage Enablement CTAs**
    1. CSM ごとのすべてのアカウントで、オープンなステージイネーブルメント CTA の割合
6. **Percentage Closed Expansion CTAs**
    1. CSM ごとのすべてのアカウントで、クローズされたステージ拡大 CTA の割合
7. **Percentage Open Expansion CTAs**
    1. CSM ごとのすべてのアカウントで、オープンなステージ拡大 CTA の割合

#### P1 アカウント - 第 2 セクション

1. **Percentage of Accounts with Green SPs PR1**
    1. CSM ごとのすべての P1 アカウントで、グリーンのサクセスプランの割合
2. **Percentage EBRs by CSM PR1**
    1. CSM ごとのすべての P1 アカウントで、成功した EBR の割合
3. **Percentage Closed Stage Enablement CTAs PR1**
    1. CSM ごとのすべての P1 アカウントで、クローズされたステージイネーブルメント CTA の割合
4. **Percentage Open Stage Enablement CTAs PR1**
    1. CSM ごとのすべての P1 アカウントで、オープンなステージイネーブルメント CTA の割合
5. **Percentage Closed Expansion CTAs PR1**
    1. CSM ごとのすべての P1 アカウントで、クローズされたステージ拡大 CTA の割合
6. **Percentage Open Stage Expansion CTAs PR1**
    1. CSM ごとのすべての P1 アカウントで、クローズされたステージ拡大 CTA の割合

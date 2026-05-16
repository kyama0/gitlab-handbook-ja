---
title: "GTM プロダクト使用状況データ"
description: "Go-to-Market モーションにおけるプロダクト使用状況データの効果的活用"
upstream_path: "/handbook/company/working-groups/product-analytics-gtm/"
upstream_sha: "b4eeb07f0d5f46e2fc5f8572be1a2547261aed89"
translated_at: "2026-04-25T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-04-17T14:57:35+00:00"
---

## 属性

| プロパティ      | 値              |
|-----------------|-----------------|
| 作成日          | 2020年3月10日 |
| 終了日          | 2022-03-10 |
| Slack           | [#wg-gtm-product-analytics](https://gitlab.slack.com/archives/C01BMJKC8UF)（社内からのみアクセス可能） |
| Google Doc      | [ワーキンググループ アジェンダ](https://docs.google.com/document/d/1riUXq1GdavnSWJklrebBeZnzcAl6XATyLod9tR6-AlQ/edit)（社内からのみアクセス可能） |
| 四半期更新      | [FY21-Q4](https://docs.google.com/presentation/d/1ydBmyP610IFfBBFTwyW-EFnsP3vyX86JJ3jiJoNPfwQ/edit#slide=id.p) [FY22-Q1](https://gitlab.com/groups/gitlab-com/-/epics/1294) [FY22-Q2 期末レビュー](https://docs.google.com/presentation/d/16jk3lQEkrHlOLBM_2r-AIWC34PaJQKIKEuATdKPfjDg/edit#slide=id.gdb5c16c7a1_2_0) |
| 関連概要        | [GTM プロダクトアナリティクス：現状・課題・今後の方針](https://docs.google.com/document/d/17dw3qpX5PbvF_WwQXNEQuCPqGUcng1zy85R-2fIL1k8/edit#) |
| 関連 OKR       | [FY21-Q2 - テレメトリのアーキテクト](https://gitlab.com/groups/gitlab-com/-/epics/532)、[FY21-Q3 - プロダクトアナリティクスのデプロイ](https://gitlab.com/groups/gitlab-com/-/epics/736)、[FY21-Q4 - GTM モーションにプロダクトアナリティクスをデプロイ](https://gitlab.com/groups/gitlab-com/-/epics/1013) |

## 解決すべき問題

GitLab のプロダクト使用状況データおよび関連データを CRO 組織のビジネスプロセスに統合し、顧客の採用促進と顧客維持率の向上を加速します。

## ビジネス目標

GTM のビジネスプロセスとシステム（Salesforce、Gainsight、Marketo、SiSense など）全体にプロダクト使用状況データおよび関連データを組み込みます。

### 完了基準

KR: セルフマネージド顧客向けに Salesforce および Gainsight にライセンス使用状況をデプロイし、SaaS の 99% について使用状況 Ping データを受信する  
KR: Create、Verify、Secure の基本メトリクスを Salesforce および Gainsight 内で自動化し、採用と拡張を追跡・推進する  
KR: GTM チームへの基本的な Salesforce および Gainsight のイネーブルメントを提供する

より詳細なリソースについては、[GTM プロダクトアナリティクス：現状・課題・今後の方針](https://docs.google.com/document/d/17dw3qpX5PbvF_WwQXNEQuCPqGUcng1zy85R-2fIL1k8/edit#) を参照してください。

#### ステップ 1: 必要なものの把握とプロダクトアナリティクスのアーキテクト `= 100%`

[エピック](https://gitlab.com/groups/gitlab-com/-/epics/532)

- ✅ [使用状況 Ping に関するセールス固有のフィードバック](https://gitlab.com/gitlab-com/sales-team/field-operations/sales-operations/-/issues/738)) を収集する
- ✅  [マスターサブスクリプションスキーマテーブル](https://gitlab.com/gitlab-com/sales-team/field-operations/systems/-/issues/772)を設計して Salesforce に送信する
- ✅  Salesforce へのデータマッピングの基本的なアーキテクチャ計画を策定する

#### ステップ 2: テレメトリのデプロイ `=> 90%`

[エピック](https://gitlab.com/groups/gitlab-com/-/epics/736)

- ✅  [Salesforce にライセンス使用状況をデプロイ](https://gitlab.com/gitlab-com/sales-team/field-operations/systems/-/issues/911)する
- ✅ アカウントの採用と拡張を推進するための [Create、Verify、Secure のトップメトリクスを特定](https://gitlab.com/gitlab-com/customer-success/tam/-/issues/293)する
- ✏️ [使用状況 Ping のメトリクス辞書を作成](https://gitlab.com/groups/gitlab-org/-/epics/4174) - [メトリクス辞書](https://docs.gitlab.com/ee/development/internal_analytics/metrics/metrics_dictionary.html)
- ✅ [使用状況データをサブスクリプションおよびアカウントデータとリンク](https://gitlab.com/groups/gitlab-org/-/epics/3602)する
- ✅ [Wave 3 プロダクトアナリティクスメトリクスを決定](https://gitlab.com/gitlab-com/sales-team/field-operations/sales-operations/-/issues/1681)する
- ✅ [データ品質の主要な阻害要因を特定](https://gitlab.com/gitlab-com/sales-team/field-operations/sales-operations/-/issues/1721)する - [プロダクトアナリティクス](https://gitlab.com/gitlab-com/Product/-/issues/1992)と [Fulfillment](https://gitlab.com/gitlab-com/Product/-/issues/1999) の Issue が特定済み
- ✏️ 使用状況 Ping データを受信したセルフマネージド顧客向けに Salesforce および Gainsight にライセンス使用状況をデプロイし、SaaS の 99% をカバーする

#### ステップ 3: GTM モーション全体にプロダクトアナリティクスをデプロイ `=> 40%`

[エピック](https://gitlab.com/groups/gitlab-com/-/epics/1013)

- ✅ [Sisense から Salesforce および Gainsight にデプロイ（内部リンク）](https://gitlab.com/gitlab-data/analytics/-/issues/6666)する
- ✏️ Salesforce および Gainsight 内で Create、Verify、Secure の基本メトリクスを自動化し、採用と拡張を追跡・推進する
- ✏️ [GTM チームにベストプラクティスを展開](https://gitlab.com/gitlab-com/sales-team/field-operations/sales-operations/-/issues/1092)する

## 役割と責任

| ワーキンググループの役割                   | 担当者                   | 役職                          |
|--------------------------------------|--------------------------|--------------------------------|
| エグゼクティブステークホルダー                | David Sakamoto           | VP Customer Success         |
| ファシリテーター | Emily McInerney | Manager Customer Success Operations|
| ファンクショナルリード（カスタマーサクセスオペレーション）  | Jeff Beaumont            | Director Customer Success Operations    |
| ファンクショナルリード（データ）               | Ganesh Sarvanan              | Senior Manager, Data |
| ファンクショナルリード（プロダクトアナリティクス） | Amanda Rueda             | Interim PM, Product Intelligence |
| ファンクショナルリード（Fulfillment）         | Justin Farris            | Group Manager, Product - Fulfillment |
| ファンクショナルリード（セールスシステム）       | Jack Brennan             | Director Sales Systems |
| ファンクショナルリード（プロダクトインテリジェンス） | Nicolas Dular            | Engineering Manager, Product Intelligence |
| メンバー                               | Jim Petr                 | Business Systems Engineer |
| メンバー                               | Jake Bielecki            | Senior Director, Sales Strategy & Analytics |
| メンバー                               | Caitlin Ankney           | Customer Success Operations Analyst |
| メンバー                               | Melia Vilain             | Manager, Sales Analytics |
| メンバー                               | Brandon Butterfield         | Customer Success Operations Analytics Analyst  |
| メンバー                               | Justin Stark             | Staff Data Engineer |
| メンバー                               | Michael Arntz            | Customer Success Strategy Manager |

## ミーティング

ミーティングノートは [週次ミーティングノート](https://docs.google.com/document/d/1riUXq1GdavnSWJklrebBeZnzcAl6XATyLod9tR6-AlQ/edit) に記録されています。

## ワーキンググループのクローズ

1. 当初の完了基準を達成しました
1. カスタマーサクセス、プロダクト & エンジニアリング、データチーム間で信頼性の高い作業モデルを構築しました。進捗を維持するために正式なワーキンググループは不要になりました
1. このイニシアチブに関する作業はトップ 12 イニシアチブを通じて継続されます

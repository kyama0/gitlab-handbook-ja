---
title: "購入信頼性ワーキンググループ"
description: "購入信頼性ワーキンググループの属性、目標、役割と責任について詳しくはこちら。"
upstream_path: "/handbook/company/working-groups/purchasing-reliability/"
upstream_sha: "b4eeb07f0d5f46e2fc5f8572be1a2547261aed89"
translated_at: "2026-04-25T00:00:00Z"
translator: claude
stale: false
lastmod: "2024-11-29T10:10:42+01:00"
---

## 属性

| プロパティ      | 値              |
|-----------------|-----------------|
| 作成日          | 2021-12-01 |
| 目標終了日      | 2022-07-29 |
| Slack           | [#wg_purchasing_reliability](https://gitlab.slack.com/app_redirect?channel=C02PQ4U0E7K)（社内からのみアクセス可能） |
| Google Doc      | [購入信頼性ワーキンググループ アジェンダ](https://docs.google.com/document/d/1m6sozlyvEIEKcEIPF2_nujrYTOV3IPpx_jaPXD1hPpU/edit)（社内からのみアクセス可能） |
| Issue ラベル    | ~WorkingGroup::Purchasing  |

## ビジネス目標

すべてのステークホルダーが十分に文書化し、容易に理解できる購入・注文システムを構築します。
このシステムは、最初から回復力があり、信頼性が高く、可観測性を備えたものにします。
現在のユースケースに対応するだけでなく、チャネルパートナー、従量課金、プロジェクト Horse など、
新しい購入ワークフローの追加にも容易に対応できるシステムにします。
最終的に、これらすべてを購入者エクスペリエンスを犠牲にすることなく実現します。
プロダクトとのタッチポイントは今日よりもさらにシームレスになり、
特にプロダクト内で直接アップセル機会を表示し始める際には、よりシームレスであるべきです。

## 定義

### 購入とは何か？

GitLab では、「フルフィルメント」は一般的にエンジニアリングの [Fulfillment サブ部門](/handbook/engineering/development/fulfillment/) を指します。

混乱を避けるため、このワーキンググループでは「購入」を発注、請求、ライセンス、フルフィルメント、
リード生成（セールス向け）、レポーティング（財務向け）などのすべての内部ワークフローを含む
エンドツーエンドの購入エクスペリエンスを表す包括的な用語として使用します。

このワーキンググループのコンテキストで「フルフィルメント」という用語が使われている場合、
それは「購入システム」全体を指している可能性が高く、
特定の [Fulfillment サブ部門](/handbook/engineering/development/fulfillment/) を指しているわけではありません。

## 関連プロジェクトとドキュメント

### Slack チャンネル

- [#s_fulfillment](https://gitlab.slack.com/app_redirect?channel=CMJ8JR0RH)
- [#s_fulfillment_engineering](https://gitlab.slack.com/app_redirect?channel=C029YFPUA6M)
- [#enterprise-apps](https://gitlab.slack.com/app_redirect?channel=CCPG8P3K4)
- [#bt-integrations](https://gitlab.slack.com/app_redirect?channel=C015U7R5XJ8)

### 先行事例

- コマーシャル & ライセンス ワーキンググループ
  - [ハンドブックページ](/handbook/company/working-groups/commercial-licensing/)
  - [アジェンダ ドキュメント](https://docs.google.com/document/d/1ayKH7rSKTCzjZojd15YFRk-T18xt-aznSNR-R4pFXnM/edit#heading=h.7liqin7jry4)
  - **目的:** 将来的なコマーシャルおよびライセンス取引を処理するシステムのビジネス要件と顧客体験要件を定義する
  - **成果:**
    - [Zuora 唯一の情報源 ディスカッション ペーパー](https://docs.google.com/document/d/1ayKH7rSKTCzjZojd15YFRk-T18xt-aznSNR-R4pFXnM/edit)
    - ???

### インフラストラクチャ

インフラチームは、2022-01 末までに CustomersDot をレガシーの Azure VM から GCP に移行する Fulfillment を支援することを約束しています。詳細については [2021-11-30 エンジニアリングアロケーション レビュー](https://docs.google.com/document/d/1j_9P8QlvaFO-XFoZTKZQsLUpm1wA2Vyf_Y83-9lX9tg/edit)) のディスカッションを参照してください。

これにより CustomersDot は運用の観点から残りのアプリケーションスタックと統一されますが、
アプリケーションにはまだインスツルメンテーションとアラート設定が必要であり、
現在のこのアプリに対する可観測性と洞察の欠如に対処する必要があります。

### エンジニアリング（Fulfillment）

- [CustomersDot](https://gitlab.com/gitlab-org/customers-gitlab-com)
- [gitlab-org&3602](https://gitlab.com/groups/gitlab-org/-/epics/3602): GitLab <> Customers、License、Zuora 統合

### エンタープライズアプリ

- [Quote to Cash](/handbook/business-technology/enterprise-applications/entapps-crm/quote-to-cash/)
- [Platypus](https://gitlab.com/gitlab-com/business-technology/enterprise-apps/integrations/platypus)
- [gitlab-com/business-technology/enterprise-apps&293](https://gitlab.com/groups/gitlab-com/business-technology/enterprise-apps/-/epics/293): ディストリビューター eマーケットプレイス

### セールス

- [セールスシステム](/handbook/sales/field-operations/sales-systems/)（例: Salesforce）
- [内部セールス ハンドブック 定義](https://docs.google.com/document/d/1UaKPTQePAU1RxtGSVb-BujdKiPVoepevrRh8q5bvbBg/edit#bookmark=id.4z6lmbtfepzq)
- [ブッキング メトリクス テクニカル ドキュメント](/handbook/sales/field-operations/sales-systems/gtm-technical-documentation/sfdc-booking-metric-fields/)

## 完了基準

このワーキンググループの使命は、ステークホルダー間（例: エンジニアリング（開発）、エンタープライズアプリ、セールス、財務）の合意を取り付けることです。これには、短期的な技術的負債への対応と、今後のチーム/サービス境界の明確なビジョンの定義が含まれます。

1. 各システムのインフラロードマップの定義
1. 各システムの情報源を含むデータモデルの定義
1. Order to Cash システムのシステム統合の定義
1. チーム横断の変更管理メカニズムの定義
1. クロスチーム調整のためにコミット済みロードマップアイテムを約2四半期先まで見通した、FY23 の各チームの組織体制とスタッフィング計画の定義

## 役割と責任

| ワーキンググループの役割    | 担当者                | 役職                                           |
|-----------------------|-----------------------|-------------------------------------------------|
| エグゼクティブスポンサー     | Justin Farris        | Sr Director, Product Monetization                                             |
| ファシリテーター           | Omar Fernandez           | Acting Director of Product, Fulfillment         |
| ファシリテーター           | Jerome Z Ng           | Senior Engineering Manager, Fulfillment |
| メンバー                | Steve Loyd            | VP Infrastructure                               |
| メンバー                | Bryan Wise            | VP of IT                                        |
| メンバー                | Robert Rea            | Senior Director, IT Ops                         |
| メンバー                | Chase Southard        | Engineering Manager, Fulfillment:Utilization    |
| メンバー                | James Lopez           | Engineering Manager, Fulfillment:License        |
| メンバー                | Ragnar Hardarson      | Engineering Manager, Fulfillment:Purchase       |
| メンバー                | Etienne Baqué         | Senior Backend Engineer, Fulfillment:Utilization    |
| メンバー                | Tyler Amos            | Staff Backend Engineer, Fulfillment:License        |
| メンバー                | Qingyu Zhao           | Senior Backend Engineer, Fulfillment:Purchase       |
| メンバー                | Tatyana Golubeva      | Principal Product Manager, Fulfillment:Purchase        |
| メンバー                | Daniel Parker         | Senior Integrations Engineer, Business Technology |
| メンバー                | Mark Quitevis         | Senior Business Systems Analyst, Business Technology |
| メンバー                | Courtney Meddaugh     | Senior Business Systems Analyst, Business Technology |
| メンバー                | Jack Brennan          | Senior Director, Sales Systems                  |
| メンバー                | Vincy Wilson          | Manager, Quality                                |
| メンバー                | Chloe Liu             | Senior Software Engineer in Test, Quality       |
| メンバー                | Christopher Nelson    | Sr Director, Enterprise Applications              |

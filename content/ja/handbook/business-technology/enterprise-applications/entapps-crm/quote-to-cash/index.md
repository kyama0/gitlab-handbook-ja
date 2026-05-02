---
title: "Quote to Cash ドキュメント"
description: "エンタープライズアプリケーション Quote to Cash ドキュメント"
upstream_path: /handbook/business-technology/enterprise-applications/entapps-crm/quote-to-cash/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-25T06:00:00Z"
translator: claude
stale: false
---

## リードから現金化までのフロー

<div class="limit-width">
<div class="grid-container">
<div class="grid-item-large" style="grid-row-start: 1;grid-row-end: 2; grid-column-start: 1;grid-column-end: 2;background-color: #c4c4c4"><b>ビジネスプロセス</b></div>
<div class="grid-item-small" style="grid-column-start: 2;grid-column-end: 4;background-color: #c4c4c4"><b>サポートシステム</b></div>
<div class="grid-item-small" style="grid-column-start: 4;grid-column-end: 5;background-color: #c4c4c4"><b>サポートチーム</b></div>
<div class="grid-item-large" style="grid-row-start: 2;grid-row-end: 4; grid-column-start: 1;grid-column-end: 2;background-color: #fdbc60"><b>マーケット</b></div>
<div class="grid-item-small" style="grid-column-start: 2;grid-column-end: 4;background-color: #fca121">需要創出活動（Marketo）</div>
<div class="grid-item-small" style="grid-column-start: 4;grid-column-end: 5;background-color: #fc9403">Marketing Ops</div>
<div class="grid-item-small" style="grid-column-start: 2;grid-column-end: 4;background-color: #fca121">トライアル（自社開発アプリケーション - Ruby on Rails）</div>
<div class="grid-item-small" style="grid-column-start: 4;grid-column-end: 5;background-color: #fc9403">Fulfillment Engineers</div>
<div class="grid-item-empty" style="grid-column-start: 1;grid-column-end: 5;grid-row-start: 4;grid-row-end: 5;"><i class="fas fa-arrow-down"></i></div>
<div class="grid-item-large" style="grid-row-start: 5;grid-row-end: 8;grid-column-start: 1;grid-column-end: 2;background-color: #f2b4a9"><b>販売</b></div>
<div class="grid-item-small" style="background-color: #e67664; grid-column-start: 2;grid-column-end: 3;">デジタル購買パス</div>
<div class="grid-item-small" style="background-color: #e67664; grid-column-start: 3;grid-column-end: 4;">注文書購買パス</div>
<div class="grid-item-small" style="background-color: #e05842; grid-column-start: 4;grid-column-end: 5;">Sales Ops / Deal Desk</div>
<div class="grid-item-small" style="background-color: #e67664; grid-column-start: 2;grid-column-end: 3;">CustomerDot</div>
<div class="grid-item-small" style="background-color: #e67664; grid-column-start: 3;grid-column-end: 4;">セールスサイクル（SFDC）</div>
<div class="grid-item-small" style="background-color: #e05842; grid-column-start: 4;grid-column-end: 5;">Sales Systems</div>
<div class="grid-item-empty" style="grid-column-start: 2;grid-column-end: 3;"></div>
<div class="grid-item-small" style="background-color: #e67664; grid-column-start: 3;grid-column-end: 4;">契約（Salesforce、Zuora CPQ、DocuSign）</div>
<div class="grid-item-small" style="background-color: #e05842; grid-column-start: 4;grid-column-end: 5;">Fulfillment Engineers</div>
<div class="grid-item-empty" style="grid-column-start: 1;grid-column-end: 5;grid-row-start: 8;grid-row-end: 9"><i class="fas fa-arrow-down"></i></div>
<div class="grid-item-large" style="background-color: #d1d1f0; grid-row-start: 9;grid-row-end: 12; grid-column-start: 1;grid-column-end: 2;"><b>請求</b></div>
<div class="grid-item-small" style="background-color: #a6a6de; grid-column-start: 2;grid-column-end: 4;">Zuora サブスクリプションライフサイクル管理</div>
<div class="grid-item-small" style="background-color: #7c7ccc; grid-column-start: 4;grid-column-end: 5;">Billing</div>
<div class="grid-item-small" style="background-color: #a6a6de; grid-column-start: 2;grid-column-end: 4;">Zuora Billing</div>
<div class="grid-item-small" style="background-color: #7c7ccc; grid-column-start: 4;grid-column-end: 5;">Finance</div>
<div class="grid-item-small" style="background-color: #a6a6de; grid-column-start: 2;grid-column-end: 4;">収益認識（Netsuite）</div>
<div class="grid-item-small" style="background-color: #7c7ccc; grid-column-start: 4;grid-column-end: 5;">Enterprise Apps</div>
<div class="grid-item-empty" style="grid-column-start: 1;grid-column-end: 5;grid-row-start: 12;grid-row-end: 13"><i class="fas fa-arrow-down"></i></div>
<div class="grid-item-large" style="background-color: #73afea; grid-row-start: 13;grid-row-end: 14; grid-column-start: 1;grid-column-end: 2;"><b>フルフィルメント</b></div>
<div class="grid-item-small" style="background-color: #2e87e0; grid-column-start: 2;grid-column-end: 4;">ライセンス（自社開発アプリケーション - Ruby on Rails）</div>
<div class="grid-item-small" style="background-color: #1f78d1; grid-column-start: 4;grid-column-end: 5;">Fulfillment Engineers</div>
<div class="grid-item-empty" style="grid-column-start: 1;grid-column-end: 5;grid-row-start: 14;grid-row-end: 15"><i class="fas fa-arrow-down"></i></div>
<div class="grid-item-large" style="background-color: #75d09b; grid-row-start: 15;grid-row-end: 18; grid-column-start: 1;grid-column-end: 2;"><b>維持管理</b></div>
<div class="grid-item-small" style="background-color: #37b96d; grid-column-start: 2;grid-column-end: 4;">サポート（Zendesk）</div>
<div class="grid-item-small" style="background-color: #168f48; grid-column-start: 4;grid-column-end: 5;">サポートチーム</div>
<div class="grid-item-small" style="background-color: #37b96d; grid-column-start: 2;grid-column-end: 4;">モニタリング（自社開発アプリケーション「Version & SeatLink」 - Ruby On Rails）</div>
<div class="grid-item-small" style="background-color: #168f48; grid-column-start: 4;grid-column-end: 5;">Fulfillment Engineers</div>
<div class="grid-item-small" style="background-color: #37b96d; grid-column-start: 2;grid-column-end: 3;">デジタル更新</div>
<div class="grid-item-small" style="background-color: #37b96d; grid-column-start: 3;grid-column-end: 4;">注文書による更新（SFDC、Z-CPQ、DocuSign）</div>
<div class="grid-item-small" style="background-color: #168f48; grid-column-start: 4;grid-column-end: 5;">販売フローを参照</div>

</div>

</div>

## プロセスフロー図

### セールス支援: 新規サブスクリプション

<div class="center">
<div style="width: 720px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:720px; height:480px" src="https://lucid.app/documents/embeddedchart/0f691079-8ee9-4663-84d7-6d03e7f87ed8" id="PNs5p_JZW4yg"></iframe></div>

</div>

### セールス支援: 更新

<div class="center">
<div style="width: 720px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:720px; height:480px" src="https://lucid.app/documents/embeddedchart/5243568d-6c04-4c52-a14c-ea3c5bf42ac0" id="gx25Mg96427t"></iframe></div>

</div>

### ゼロタッチ: 新規サブスクリプション

<div class="center">
<div style="width: 720px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:720px; height:480px" src="https://lucid.app/documents/embeddedchart/09ac03f9-ae40-4bbd-961c-f64bb44f5b4f" id="KWs5ZPs-THoH"></iframe></div>

</div>

## エンティティ関係図

- [Zuora Billing](entity-relationship-diagrams#zuora-billing)
- [CustomersDot（カスタマーポータル）](entity-relationship-diagrams#customersdot-customer-portal)
- [GitLab](entity-relationship-diagrams#gitlab)

### Quote to Cash システムフィールドマッピング

[このスプレッドシート](https://docs.google.com/spreadsheets/d/1D159Osv6JvQtlHm2Bpekn8ADOWUfgcdszf_pewERBy0/edit#gid=769890791)は、Zuora Billing、CustomersDot、GitLab のデータモデルのフィールドマッピングを提供しています。このドキュメントは、現在のシステム間の重複と依存関係の一部を示しています。

## お問い合わせ

### Slack チャンネル

- `#enterprise-apps`
- `#business-technology`
- `#bt-finance-operations`
- `#financesystems_help`
- `#bt-integrations`

### GitLab Issues

<div class="flex-row" markdown="0" style="height:80px">
  <a href="https://gitlab.com/gitlab-com/business-technology/business-technology/-/issues/new" class="btn btn-purple-inv" style="width:33%;height:100%;margin:1px;display:flex;justify-content:center;align-items:center;">ビジネスシステムアナリスト</a>
  <a href="https://gitlab.com/gitlab-com/business-technology/enterprise-apps/integrations/issue-tracker/-/issues/new" class="btn btn-purple-inv" style="width:33%;height:100%;margin:1px;display:flex;justify-content:center;align-items:center;">インテグレーションエンジニアリング</a>
  <a href="https://gitlab.com/gitlab-com/business-technology/enterprise-apps/financeops/finance-systems" class="btn btn-purple-inv" style="width:33%;height:100%;margin:1px;display:flex;justify-content:center;align-items:center;">Finance Systems</a>

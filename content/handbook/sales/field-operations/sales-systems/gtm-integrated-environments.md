---
title: "Go-To-Market 統合環境"
upstream_path: /handbook/sales/field-operations/sales-systems/gtm-integrated-environments/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-11T10:00:00Z"
translator: claude
stale: false
lastmod: "2025-01-23T11:43:11+00:00"
---

## このドキュメントの使い方

このページでは、私たちの主要な GTM SaaS アプリケーションとそのサンドボックスがどのように接続されているか、また各統合環境レイヤーの目的が何かを示すガイドを提供します。

---

## Production

| Support            | E-Commerce                      | Billing          | Sales                 | Marketing          |
|--------------------|---------------------------------|------------------|-----------------------|--------------------|
| Zendesk Production | customers.gitlab.com Production | Zuora Production | Salesforce Production | Marketo Production |

私たちの本番システムは、標準または社内開発の統合（および下記の画像）によって統合されており、他の環境がエミュレートするテンプレートとして機能します。

ステータス: 統合済み、稼働中。

![Go-To-Market Production SaaS Environments](/images/sales/gtm-production.png)

## Staging

| Support            | E-Commerce                      | Billing          | Sales                 | Marketing          |
|--------------------|---------------------------------|------------------|-----------------------|--------------------|
| Zendesk "Sandbox" | customers.gitlab.com Staging | Zuora "Central" Sandbox | Salesforce "Staging" Sandbox | Marketo "Sandbox" |

私たちの Staging 環境は、本番環境を可能な限り忠実にエミュレートするように設計されています。Development 環境からの変更は、本番環境に昇格される前に、ユーザー受け入れテストのためにここに最初にデプロイされる必要があります。

ステータス: 現在、staging と development の両方で Interim セットアップを使用しています。

## Development

| Support            | E-Commerce                      | Billing          | Sales                 | Marketing          |
|--------------------|---------------------------------|------------------|-----------------------|--------------------|
| N/A | customers.gitlab.com Engineer Dev Environment | Zuora "apiSandbox2" Sandbox | Salesforce "Sandbox" Sandbox | N/A |

私たちの統合 Development 環境は、システム間で大規模な機能変更を提供するプロジェクトに取り組むために設計されています。このセットアップの現在の用途は、Zuora の Orders への変換、およびそれに関連する Zuora 360 と Zuora CPQ のアップグレードになります。

ステータス: 現在、staging と development の両方で Interim セットアップを使用しています。

## Interim

| Support            | E-Commerce                      | Billing          | Sales                 | Marketing          |
|--------------------|---------------------------------|------------------|-----------------------|--------------------|
| N/A | customers.gitlab.com Staging | Zuora "apiSandbox1" Sandbox | Salesforce "Sandbox" Sandbox | N/A |

これは、Web Direct がより多くのデータを Salesforce に送信する作業に使用されている、現在の Development 環境です。その作業が完了次第、廃止され、用途変更されます。

## その他の Development 環境

Sales Systems チームは、開発の容易さと速度のために「エンジニアごとに 1 つのサンドボックス」ルールを使用しており、これにより Staging への直接デプロイメントや、Development 環境での完全な停止が発生する可能性があります。

---
title: Fulfillment セクション
description: "Fulfillment セクションは、顧客が適切な製品アクセスを得て、デプロイメントの種類を問わずシート、使用量、支出を管理できるようにします。"
upstream_path: /handbook/engineering/development/fulfillment/
upstream_sha: 2c77a1f5b8c8a80cb7b5151ff11cfad84f98bfbb
translated_at: "2026-10-11T21:05:33+00:00"
translator: codex
stale: false
lastmod: "2026-10-01T08:11:54+02:00"
---

## ミッション

デプロイメントの種類を問わず、信頼性の高い利用権限、ID、可視化、制御のシステムを通じて、顧客が適切な製品アクセスを得て、シート、使用量、支出を効果的に管理できるようにします。

Monetization セクションと Fulfillment セクションは、2026 年 8 月に単一の Fulfillment セクションから分割されました。[Monetization セクション](/handbook/engineering/development/monetization/)は、購入、サブスクリプション、請求、CustomersDot の運用を担当します。両セクションとも、[共通の仕事の進め方](/handbook/engineering/development/fulfillment-monetization/)に従います。

## チーム {#teams}

| チーム | 責務 | EM | PM | ラベル |
|------|---------|----|----|-------|
| セクション | 上記のミッションを参照 | Ekwa Duala-Ekoko | Courtney Meddaugh | `devops::fulfillment` |
| Entitlements | 利用権限の確認とクラウドライセンスの基盤を標準化することで、デプロイメントの種類を問わず、すべての顧客に適切な製品アクセス、ライセンスの状態、プロビジョニングの結果を提供します。 | Prathyusha Kanala | Priyanka Palanikumar | `group::entitlements` |
| Seat Management | 収益化の目標、管理のわかりやすさ、公平な製品アクセスのバランスを取りながら、顧客がユーザーとアドオンに対してシートベースのアクセスモデルを割り当て、管理し、適用できるようにします。 | Prathyusha Kanala | Priyanka Palanikumar | `group::seat management` |
| Usage Visibility | 使用状況と消費量を明確かつ信頼できる形で可視化し、顧客が価値を理解し、導入状況を監視し、支出、利用拡大、ガバナンスについて情報に基づいた意思決定を行えるようにします。 | Aishwarya Subramanian | Bryan Rothwell | `group::usage visibility` |
| Cost Management | 従量課金製品の柔軟な導入を支えながら、予算、上限、制御、コストレポートによって予期しない超過を防ぎ、顧客が安心して消費量を管理できるようにします。 | Aishwarya Subramanian | Bryan Rothwell | `group::cost management` |

Product Design と UX Research は両セクションをサポートします。

## Slack

| チャンネル | 目的 |
|---------|---------|
| [#s_fulfillment](https://gitlab.slack.com/app_redirect?channel=s_fulfillment) | セクションの拠点 |
| [#g_entitlements](https://gitlab.slack.com/app_redirect?channel=g_entitlements), [#g_utilization](https://gitlab.slack.com/app_redirect?channel=g_utilization) | グループのチャンネル |

共通チャンネルは、[仕事の進め方のページ](/handbook/engineering/development/fulfillment-monetization/#shared-slack-channels)に記載されています。

## 仕事の進め方

Fulfillment は、[Fulfillment と Monetization の仕事の進め方](/handbook/engineering/development/fulfillment-monetization/)に従います。

## リンク

- [Fulfillment の方針](/handbook/product/groups/fulfillment/direction/fulfillment_section/)
- [Fulfillment ガイド](/handbook/product/groups/fulfillment/)

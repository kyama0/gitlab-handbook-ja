---
title: Iterable
description: Iterable の概要
twitter_image: /images/tweets/handbook-marketing.png
twitter_site: "@gitlab"
twitter_creator: "@gitlab"
upstream_path: /handbook/marketing/marketing-operations/iterable/
upstream_sha: eb9c7122b4259a2111ed65628e5384768922a597
translated_at: "2026-05-01T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-08-20T15:31:05-04:00"
---


## DRI

| DRI            | 役割            |
| -------------- | --------------- |
| Amy Waller     | ビジネスオーナー  |
| TBD | 技術オーナー |
| Allie Klatzkin | キャンペーンオーナー |

## 概要

[Iterable](https://iterable.com/) は、パーソナライズされたメールキャンペーンを作成・送信・追跡できる強力なメール マーケティング オートメーション プラットフォームです。使いやすいインターフェースと豊富な機能を備えており、お客様やユーザーと効果的にエンゲージメントを取るための支援をしてくれます。

## Iterable Journeys

Journeys は、複雑な多段階の顧客エンゲージメントキャンペーンを作成できる強力な機能です。Journeys を使えば、メールや SMS をはじめ複数チャネルにまたがる、パーソナライズされた顧客体験を設計できます。カスタマージャーニーをマッピングし、トリガーや条件を設定し、カスタマーライフサイクルの各段階でターゲットを絞ったメッセージを配信できます。

**実装済みのジャーニー一覧:**

| ジャーニー名 (フォルダー)       | リンク                                                                                    |
| --------------------- | --------------------------------------------------------------------------------------- |
| SaaS Trial Onboarding + Post  | [Iterable: SaaS Trial Onboarding workflow](https://app.iterable.com/workflows/361081/edit?mode=beta&workflowType=Published) |
| Free User + Invited Onboarding| [Iterable: Free User & Invited Onboarding workflows](https://app.iterable.com/workflows?folderId=68331&page=1)|

## API カスタムイベント

Iterable の API は大量のデータと高いリクエストレートを処理できるよう設計されています。スケーラビリティと信頼性を確保しており、製品内ユーザーセグメントに対してパーソナライズされたメッセージを配信できます。

```mermaid
graph LR
  GitLab.com --> CustomersDot
  CustomersDot --> Workato API
  Workato API --> Iterable
```

API カスタムイベントの詳細については、内部ハンドブックページをご覧ください。

## 購読設定

Iterable の購読はメッセージタイプとチャネルで構成されており、それぞれのタイプが個別の購読ポリシーを持ちます。各テンプレートやメールは作成時にメッセージタイプが割り当てられ、その購読ポリシーが適用されます。

**_ 注意: Marketing Message タイプはオプトアウトポリシーを使用しているため、購読解除済みのレコードへメールが送られてしまう可能性があります。使用しないでください _**

GitLab インスタンスにおける購読スキーマは以下のとおりです:

| メッセージタイプ      | チャネル               | 購読ポリシー | 備考                                                     |
| ----------------- | --------------------- | ------------------- | --------------------------------------------------------- |
| GitLab Marketing  | Marketing Channel     | オプトイン              | テンプレートやメールで主に使用するメッセージタイプです |
| Marketing Message | Marketing Channel     | オプトアウト             | デフォルトのメッセージタイプ。削除予定                     |
| Transactional     | Transactional Channel | オプトアウト             |                                                           |

**購読解除イベント**
Marketo で `unsubscribe` イベントが発生するたびに、Workato 経由で Iterable にイベントが送られ、対象が存在する場合は `opt-out` されます。

## データ同期

[Hightouch](/handbook/marketing/marketing-operations/hightouch/) は、リアルタイムデータ同期を専門とするデータ統合プラットフォームであり、Snowflake のデータの力を活かして Iterable に転送し、パーソナライズされターゲット化されたマーケティングキャンペーンを実現します。Snowflake と Iterable の間のデータ同期プロセスを自動化し、手作業を削減します。Hightouch は大規模なデータセットを扱え、すべてのデータを正確に Iterable に同期できるため、マーケティングオペレーションを効果的にスケールできます。

Hightouch のモデルおよび Iterable に関する詳細は、内部ハンドブックページをご覧ください。

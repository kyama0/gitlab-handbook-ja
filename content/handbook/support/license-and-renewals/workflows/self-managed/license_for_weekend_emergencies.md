---
title: 週末の緊急事態 - セルフマネージドライセンスリクエスト
description: "セルフマネージドの週末ライセンス緊急事態に対するサポートプロセス"
category: GitLab Self-Managed licenses
upstream_path: /handbook/support/license-and-renewals/workflows/self-managed/license_for_weekend_emergencies/
upstream_sha: 460f0fe6722bfe52b151b6a8641368ea38885df5
translated_at: "2026-05-08T12:00:00Z"
translator: claude
stale: false
lastmod: "2026-02-23T12:49:58+00:00"
---

## 概要

顧客が、期限切れのライセンスを直ちに置き換えるための新しいライセンスについて、緊急サポートリクエストを送信する場合があります。しかし、オンコールの Support Engineer は通常 CustomersDot へのアクセス権を持たず、手動でライセンスを生成できません。

このワークフローは、CustomersDot のアクセス有無にかかわらず Support の誰でも従えるステップを記述しており、**週末の**緊急事態をデエスカレーションするための短期間の Ultimate トライアルライセンスを生成できます。

**注意:** このワークフローは、顧客が以前に [Sales が生成した一時的な延長](/handbook/support/license-and-renewals/workflows/self-managed/trials/#how-to-extend-an-expired-or-soon-to-expire-license)を受け取っている場合でも適用できます。

このワークフローは SaaS サブスクリプションの緊急事態を対象としません。詳細は [Customer Emergencies Workflow - SaaS License Emergencies](/handbook/support/workflows/customer_emergencies_workflows#saas-subscription-emergencies) を参照してください。

## 対象範囲

**有償**プランのセルフマネージド顧客で、ライセンス期間が現在の緊急事態の発生日から過去 3 日以内に終了したケースに対するライセンスリクエスト。

## 対象外

1. **有償**プランを持たない組織。
1. プロスペクト（見込み顧客）。

---

## ワークフロー

### Step 1: 顧客のサブスクリプションを確認する

1. 顧客に以下のスクリーンショットを依頼します。

    - Admin Area -> Overview -> Dashboard
    - Admin Area -> License のライセンスページ（新しいバージョンでは subscription と表示される場合があります）
1. スクリーンショットをチケットに追加します。

### Step 2: トライアルライセンスを生成する

セルフマネージドの一時ライセンスを発行する旧 Mechanizer ベースのワークフローは**廃止**されました。代わりに、新しい CustomersDot Admin Support Tool ワークフロー [Trials For SM](../customersdot/support_tools.md#trials-for-sm) を使用してください。

レガシー `License Trials` ツールを使用して以下を行います。

- 緊急事態に応じた適切な**ユーザー数**、**プランコード**、**有効期限**でレガシートライアルライセンスを作成します。
- ライセンスのメール文面では 10 日間の Trial GitLab License と記載されるため、混乱を避けるために有効期限は現在から 10 日後に設定することをお勧めします。
- ライセンスをリクエスト元のメールアドレス（またはチケットで別途指定されたアドレス）に送信します。
- アクションを監査可能にするため、フォームに **Zendesk チケットリンク**を追加します。

これは旧 Mechanizer ZenDesk アプリのプロセスを置き換えるものであり、すべての緊急セルフマネージドトライアルライセンスは現在 CustomersDot の "Trials for SM" ワークフローに従う必要があります。

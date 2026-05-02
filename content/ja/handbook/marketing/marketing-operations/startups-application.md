---
title: "GitLab for Startups プログラムワークフロー"
description: "このページでは、**GitLab for Startups** アプリケーションが **Marketo、Salesforce、Traction** をどのように移動するか、また申請者がどのようにコミュニティチームと Sales Dev にルーティングされるかについて、高レベルで説明します。"
upstream_path: /handbook/marketing/marketing-operations/startups-application/
upstream_sha: eb9c7122b4259a2111ed65628e5384768922a597
translated_at: "2026-04-30T12:00:00Z"
translator: claude
stale: false
---

## システムと役割

- **Marketo**: Startup アプリケーションをキャプチャし、プログラムメンバーシップ、Interesting Moments、スコアリングを管理します。
- **Salesforce (SFDC)**: リード/コンタクト、Startup プログラムフィールド、Total Funding、キャンペーンメンバーシップを保存します。
- **Traction**: MQL と高優先度のリードを Sales Dev と AE にルーティングします。

**主要な DRI**

- **Community / Startups Program** – アプリケーションをレビューし、プログラム決定を設定します。
- **Marketing Operations** – Marketo プログラム、フォーム、SFDC への同期、Traction ルーティングルールを所有します。
- **Sales Dev** – 認定されているが **拒否された** Startup 申請者と連携します。

---

## キーフィールドと値

### 共有 Marketo/SFDC フィールド

- **Source**: `Startup Application`  
  - すべての Startup アプリケーションフォーム入力に設定されます。  
  - Traction で Startup 固有のルーティングパスに分岐するために使用されます。

- **Startup Program Status**（リード/コンタクト上）– 主なステータス:
  - **Under Review** – アプリケーションが提出され、コミュニティによってレビューされています。
  - **Qualified for Seed Y1** – Seed レベルの Startup 価格で承認されました。
  - **Qualified for Early Y1** – Early ステージの Startup 価格で承認されました。
  - **Denied from Startups Program** – フィットせず、Sales Dev のフォローアップなし。
  - **Rejected Startup Lead Re‑engage** – プログラムには承認されませんでしたが、Sales Dev にルーティングされる必要があります。

- **Total Startups Funding** (SFDC) / **Total Funding** (Marketo)  
  - アプリケーションの会社の資金調達バンドをキャプチャします。  
  - レポートと将来の潜在的なセグメンテーションを促進します。

---

## エンドツーエンドワークフロー

### 1. アプリケーション提出

1. プロスペクトが **Startup アプリケーションフォーム**（Marketo）に入力します。
2. Marketo:
   - 人物を作成/更新します。
   - **Startup Application** プログラムに追加します。
   - フォーム入力の **Interesting Moment** をログに記録します。
3. Marketo はレコードを SFDC に同期します:
   - **Source = Startup Application**
   - **Startup Program Status = Under Review**
   - **Total Startups Funding** が入力されます。

---

### 2. プログラム決定

Community / Startups Program チームがアプリケーションをレビューし、**Startup Program Status** を更新します:

- **Approved**  
  - **Qualified for Seed Y1** または **Qualified for Early Y1**  
  - Startup 価格が付与されます。商談とオーナー/AE ワークフローは、Startups Program の標準プロセスに従います（広範な Startups Program ページに記載）。

- **Denied**  
  - **Denied from Startups Program**  
  - リードはレポート用に表示されたままですが、このワークフローを介して Sales Dev のフォローアップに意図的に **送られません**。

---

### 3. 拒否されたが Sales Dev に良い適合

申請者が Startup 価格に承認されないが、それでも GitLab に良い適合である場合:

- ステータスは **Rejected Startup Lead Re‑engage** に設定されます（レガシーの「Denied – Sales Dev to re‑engage」を置き換え）。
- Marketo スマートキャンペーン:
  - このステータスを監視します。
  - リードが **スコアリングを介して MQL** することを確認します（直接ステータスジャンプなし）。
  - Sales Dev にコンテキストを提供するために **Interesting Moment** をログに記録します。

リードが **MQL** に達すると:

- Marketo は、グローバルライフサイクルに従ってリードステータスを更新します。
- リードは **標準の Traction MQL ルーティング**（他の MQL と同じ FY27 ルール）に入ります。
- オーナーシップは、テリトリーとアカウントカバレッジ（BDR/SDR/AEs）に基づいて割り当てられ、**Startup Program Status = Rejected Startup Lead Re‑engage** がコンテキストを保持します。

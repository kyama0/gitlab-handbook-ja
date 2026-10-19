---
title: Support Innovation Group (SIG) のワークフローと承認プロセス
description: このページでは、アイデアの提出、レビュー、承認に関する Support Innovation Group（SIG）のワークフローと承認プロセスについて説明します。
upstream_path: /handbook/support/sig/support-innovation-group/
upstream_sha: 83366dfb077be6f6e05ce2b9af0b0e40f01b3458
lastmod: "2026-10-19T09:14:59-04:00"
translated_at: "2026-10-19T22:06:32+00:00"
translator: codex
stale: false
---

## 概要

アイデアは、RFC テンプレートを使用して STM（Support Team Meta）の作業アイテムで RFC（Request for Comments）として提出します。まったく新しいツールやプロセス、または既存のものの改善を提案できます。プロセスの更新を含む MR も対象です。

すべてのアイデアは、実装計画に進む前に、SIG による初期レビュー、投資評価、スコープに応じた承認経路を通ります。承認経路はスコープによって異なります。グローバルなアイデア、または大幅な変更を伴うアイデアにはグローバルのシニアリーダーによる承認が必要であり、リージョンのアイデアにはリージョンリーダーの承認とグローバルリーダーへの通知が必要です。

## SIG ワークアイテムの受付とライフサイクルプロセス

Support のすべての変更リクエスト、プロジェクト、AI ツール関連の作業は、**SIG（Support Innovation Group）から始まります**。

## 受付

- リクエストは、**Support 受付リクエスト**を通じて提出します。
- 各ワークアイテムには、次の情報を含める必要があります。
  - **要件**
  - **Support への影響**
  - **RFC**（必要な場合）
- **SIG リード**が各リクエストを割り当て、種類に応じて `SIG`、`Change`、`Project`、または `AI Tooling` のタグを付けます。

## ライフサイクルとタグ

| 段階 | タグ | 実施内容 |
|---|---|---|
| 新規リクエスト | `SIG_New`、`SIG_Decision_Needed` | リーダー陣のレビューと優先順位付けに向けて、リクエストの準備が完全に整っていることを確認します。 |
| 承認済み | `Triage` | リーダー陣が進行を承認し、リクエストはトリアージに移ります。その後、リーダー陣に**優先順位付け**を依頼します。 |
| 優先順位付け済み | `SIG_In_Process` | リーダー陣による優先順位付けが完了すると、リクエストは進行中に移ります。 |
| 却下 | `Blocked` | リクエストはブロック中に移り、SIG チームが依頼者に通知します。 |
| テスト準備完了 | `Validated_Move_Forward` | FR を作成し、テストの準備ができたことを CSS に通知します。 |
| テスト完了 | `Validated_Ready_For_Release` | CSS とともに、項目をリリースに紐付けます。 |

## 各段階の詳細

### 1. レビューと決定

1. リクエストに `SIG_New` と `SIG_Decision_Needed` のタグを付けます。
2. リーダー陣がレビューし、提案された変更やプロジェクトの**承認または却下**を求められます。
   - **承認：**リクエストは**トリアージ**に移ります（タグ：`Triage`）。その後、作業を進められるよう、リーダー陣に**優先順位付け**を依頼します。
   - **却下：**リクエストは**ブロック中**に移り（タグ：`Blocked`）、SIG チームが依頼者に通知します。

### 2. 進行中

リーダー陣がリクエストの優先順位を付けると、**進行中**に移ります（タグ：`SIG_In_Process`）。

- SIG チームメンバーを割り当て、リクエストの **DRI** である**依頼者**と協働します。
- タイムラインを評価し、**CSS** とともに解決策を検討します（機能リクエスト）。
- SIG チームリードは CSS と協力し、ワークアイテムを **CSS ロードマップ**に組み込む計画を立てます（キャパシティ計画）。
- リーダー陣が今後の進め方を把握できるよう、日程とタイムラインをワークアイテムに合わせて調整します。

### 3. 作業の進行と CSS への引き継ぎ

1. SIG チームメンバーと DRI がワークアイテムを進めます。
2. リクエストの準備ができたら、SIG チームメンバーが **FR** を作成します（DRI にも共有します）。
3. ワークアイテムの**テスト**準備ができたことを CSS に通知します。
4. ワークアイテムに `Validated_Move_Forward` のタグを付けます。

### 4. テストとリリース

1. CSS は、ワークアイテムのテスト準備ができたことを SIG チームに通知します。
2. テストが完了したら、項目に `Validated_Ready_For_Release` のタグを付けます。
3. CSS とともに、ワークアイテムを**リリース**に紐付けます。

### 5. コミュニケーション

SIG チームは、**Slack** と **SWIR** を通じて Support 全体にリリースを周知します。

## フローの概要

```text
Support Intake Request
        ↓
SIG Lead assigns & tags (SIG / Change / Project / Tooling)
        ↓
SIG_New + SIG_Decision_Needed
        ↓
Leadership: Approve or Reject
   ├── Rejected → Blocked → SIG notifies requestor
   └── Approved → Triage → Leadership Prioritizes
                      ↓
               SIG_In_Process
   (SIG member + DRI; timeline, CSS roadmap & capacity planning)
                      ↓
        FR created (copy DRI), CSS notified
                      ↓
            Validated_Move_Forward
                      ↓
               CSS Testing
                      ↓
        Validated_Ready_For_Release
                      ↓
           Mapped to Release with CSS
                      ↓
     Communicated to Support (Slack, SWIR)
```

### SIG ライフサイクル {#sig-lifecycle}

![SIG ライフサイクル：アイデアの提出から承認、実装計画までの SIG プロセス全体の流れ](/images/support/assets/sig_lifecycle.png)

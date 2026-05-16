---
title: "Agent プラン（MVC）"
description: "SDD フローの中核となる Markdown アーティファクトを格納する Agent プランワークアイテムウィジェットの設計。"
status: ongoing
maturity: mature
creation-date: "2026-04-16"
authors: [ "@fredericcaplette", "@vanessaotto" ]
owning-stage: "~devops::plan"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/spec_driven_development/work_plan/
upstream_sha: d5f4aa38819ae2b572eb32e0d967394d0361a975
translated_at: "2026-04-27T10:00:00Z"
translator: claude
stale: false
lastmod: "2026-04-22T10:27:46-04:00"
---

SDD の詳細については [Spec-Driven Development](index.md) をご覧ください。

**成熟度: 成熟**

## 概要

Agent プランは、Markdown ドキュメントを格納する新しいワークアイテムウィジェットです。SDD フローの中核アーティファクトであり、人間とエージェントによって形成され、その後 Duo Developer、Duo Review、またはその他の AI エージェントに下流で利用されます。

Epic: [ワークストリーム 0 — Agent プラン](https://gitlab.com/groups/gitlab-org/-/work_items/21511)

## データモデル

Agent プランは、`work_item_id` によってワークアイテムと結合された**専用テーブル**（`work_item_work_plans`）に格納されます。issues テーブルは大きすぎて直接拡張できないため、プランデータは専用テーブルに保存され、ウィジェットがリクエストされた際に `JOIN` を通じて取得されます。MVC では、テーブルに単一の Markdown テキスト列が格納されます。ウィジェットはすべてのワークアイテムタイプに追加されますが、フィーチャーフラグによってゲートされます。

Agent プランは、既存のウィジェットパターンと新しい `features` フィールドの両方を通じてクエリ可能です：

```graphql
fragment BaseWorkItemWidgets on WorkItemWidget {
  ... on WorkItemWidgetAgentPlan {
    content
  }
}
```

```graphql
fragment BaseWorkItemFeatures on WorkItemFeatures {
  agentPlan {
    content
  }
}
```

ドラフト MR: [BE](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/230936)、[AI Assist](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist/-/merge_requests/5215)

## ウィジェットのレンダリング

ウィジェットには 3 つの状態があります：

1. **空** — プランを生成または記述するプロンプトが含まれたプレースホルダー。
2. **読み取り** — レンダリングされた Markdown プレビュー。
3. **編集** — プレーンテキストエディター（Markdown プレビュー切り替え付き）。

AI がツール呼び出しを通じてプランを生成または更新すると、ウィジェットは新しいコンテンツを表示する読み取り状態に遷移します。

## AI による生成

プランは、AI Gateway のワークアイテムツールを使用して同期 Duo Chat を通じて生成・改善されます。

- 新規または拡張されたツールが、ワークアイテムの説明ではなく Agent プランウィジェットに専用で書き込みます。
- 生成のために組み立てられるコンテキスト: ワークアイテムの説明、コメント、ラベル、Decision Log のエントリ。
- エージェントはプランコンテンツの部分的な更新またはフル書き換えを実行できます。
- 出力は、プロジェクトで設定されている場合、ワークアイテムテンプレートに準拠します。

## API サーフェス

Agent プランは標準のワークアイテムウィジェット GraphQL API パターンを通じて公開されます。外部ツール（`curl`、`glab`、IDE 拡張機能）がプランを読み書きできるよう、REST でも利用可能です。

## ライフサイクル

ドラフト -> エージェント準備完了。卒業基準は [プラン準備スコアリング](scoring.md) で定義されています。

## 意思決定

| 日付 | 決定事項 | 決定者 |
| ------ | ---------- | ----- |
| 2026-03-30 | Agent プランはスタンドアロンエンティティ**ではない** — すべてのワークアイテムタイプをサポートするワークアイテム上のウィジェットです。 | ワークショップ |
| 2026-03-31 | 出力フォーマットはワークアイテムテンプレートによって形成された **Markdown** です。 | @fredericcaplette |
| 2026-04-09 | ワークアイテム上の AI インタラクションには**同期 Duo Chat**（非同期/ストリーミングではない）を使用します。 | @vanessaotto、@fredericcaplette |
| 2026-04-09 | シンプルさと人間の可読性のために **Markdown を YAML より優先**します。 | @fredericcaplette、@vanessaotto、@timzallmann |
| 2026-04-09 | 最初のイテレーションでは**「Agent プラン」**と命名します。 | @izzychu、@fredericcaplette |
| 2026-04-16 | Agent プランはワークアイテムに結合された**専用テーブル**に格納されます（issues テーブルは大きすぎて拡張できない）。 | @fredericcaplette |
| 2026-04-16 | AI Gateway は**既存のワークアイテムツールを拡張**して（新しいツールを作成するのではなく）Agent プランウィジェットの読み書きを行います。 | @fredericcaplette |
| 2026-04-16 | Agent プランのコンテンツは**生の Markdown** として格納・提供されます。構造化スキーマや YAML フロントマターはありません。 | @fredericcaplette |

## 権限とフィーチャーゲーティング

ディスカッション: [MR !231689 スレッド](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/231689#note_3260440309)

Agent プランウィジェットの可視性は複数のレイヤーで制御されています：

1. **フィーチャーフラグ（WIP）** — WIP フィーチャーフラグ `agent_plan` は、機能が開発中の間、バックエンドとフロントエンドの両方でウィジェットをゲートします。フロントエンドフラグにより、チームは露出リスクなしに複数の MR にまたがってリリースできます。開発完了後、チームは `beta` としてリリースするか、フロントエンドフラグを削除してバックエンドフラグのみに依存するかを再検討します。
2. **ライセンス機能** — ウィジェットは EE 機能です（少なくとも Premium 以上）。SDD 専用のライセンス機能が後で設けられない限り、既存のライセンス機能（`ai_workflows` または `ai_features`）を再利用します。
3. **Duo 利用可能性（AI クイックアクションのみ）** — ウィジェット自体はフィーチャーフラグ + ライセンスを通じてアクセス可能なすべてのユーザーに表示されます。プランを*生成*する Duo Chat クイックアクションには、さらに Duo Chat の利用可能性（`duoChatAvailable` GraphQL クエリ）とエージェンティックモード（Ruby の `tanuki_bot.agentic_mode_available?`）が必要です。Classic Chat が廃止されると、`duoChatAvailable` チェックだけで十分になります。
4. **カスケードネームスペース設定（将来）** — 管理者/グループオーナーがネームスペースレベルで機能をオフにするためのトグル。MVC1 には含まれませんが、外部ロールアウト前に必要です。

ウィジェットデータに対するバックエンド権限（`userPermissions` フィールド）と設定可能なワークアイテムタイプを通じたより厳格なゲーティングは延期され、GA 前に再検討されます。

## アクティブな Issue

- [フィーチャーフラグ + プレースホルダー UI](https://gitlab.com/gitlab-org/gitlab/-/work_items/596915)
- [ワークアイテムツールを Agent プランで更新](https://gitlab.com/gitlab-org/gitlab/-/work_items/596371)
- [Agent プランウィジェット UI](https://gitlab.com/gitlab-org/gitlab/-/work_items/596370)
- [Agent プランウィジェット API](https://gitlab.com/gitlab-org/gitlab/-/work_items/596369)

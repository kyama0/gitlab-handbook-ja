---
title: "Workplan"
description: "作業をどのように行うかを記載し、下流のエージェントが使用する、ワークアイテム上の Markdown アーティファクトである Workplan の設計。"
status: ongoing
maturity: mature
creation-date: "2026-04-16"
authors: [ "@fredericcaplette", "@vanessaotto" ]
owning-stage: "~devops::plan"
toc_hide: true
upstream_path: "/handbook/engineering/architecture/design-documents/spec_driven_development/workplan/"
upstream_sha: "2de6fd8dc3b16760e36ce5d9b9fbfcd697d431d8"
lastmod: "2026-10-20T13:32:50-04:00"
translated_at: "2026-10-20T21:12:55Z"
translator: "codex"
stale: false
---

SDD の詳細は、[Spec-Driven Development](_index.md)を参照してください。

**成熟度：成熟**

## 概要 {#summary}

Workplan は、ワークアイテムに添付する Markdown ドキュメントです。SDD フローの中心的なアーティファクトであり、人とエージェントが形作り、その後、下流で Duo Developer や他のエージェントが使用します。

ワークアイテムの説明（仕様）には、なぜ、何を行うかを記載します。Workplan に記載するのは、どのように行うかのみです。なぜ、何を行うかの変更は説明に記載し、Workplan はそれに従います。Workplan がどのように行うかに重点を置くよう、生成プロンプトを更新する作業は、[Issue 630891](https://gitlab.com/gitlab-org/gitlab/-/work_items/630891)で追跡しています。

エピック：[WS-2：仕様からコードまでのユーザージャーニーの構築](https://gitlab.com/groups/gitlab-org/-/work_items/22703)

ユーザードキュメント：[Workplan](https://docs.gitlab.com/user/work_items/workplan/)

## 名称 {#naming}

計画の名称は **Workplan** で、1 語で表記します。親ウィジェットの名称は **Implementation** です。`AgentPlan` は旧コード名で、今もバックエンドと GraphQL に残っています。API の互換性、データベースのテーブル、オブジェクトストレージのパスを含むバックエンドの名称統一は、[Issue 630474](https://gitlab.com/gitlab-org/gitlab/-/work_items/630474)で追跡しています。

## データモデル {#data-model}

Workplan は、別のテーブル `work_item_agent_plans` に保存し、`work_item_id` でワークアイテムに結合します。Issue のテーブルは大きすぎるため、直接拡張できません。Workplan の内容と準備状況スコアのフィードバックはオブジェクトストレージに保存できるため、読み取りにネットワークの往復が必要になることがあります。内容の存在のみを確認したい場合にその往復を避ける作業は、[Issue 616229](https://gitlab.com/gitlab-org/gitlab/-/work_items/616229)で追跡しています。

このテーブルには、ワークアイテムで AI 計画が有効かどうか（`ai_planning_enabled`）と、準備状況スコアも保存します。

## API サーフェス {#api-surface}

Workplan は、GraphQL ウィジェット型 `WorkItemWidgetAgentPlan` を通じて公開します。主なフィールドは、次のとおりです。

| フィールド | 説明 |
| ----- | ----------- |
| `aiPlanningEnabled` | ワークアイテムで AI 計画が有効かどうか。 |
| `content`, `contentHtml` | Workplan の Markdown と、そのレンダリング済み HTML。1 リクエストにつき、1 つのワークアイテムに対してのみ解決できます。 |
| `generationStatus` | 最新の `workplan/v1` フローのステータス。`NOT_STARTED`、`GENERATING`、`NEEDS_INPUT`、`COMPLETED`、`CANCELED`、`FAILED` のいずれかです。 |
| `questions`, `openQuestionsCount` | すべての Workplan 実行のフローノートのスレッドを古い順に並べたもので、回答済みの状態と未解決の件数はスレッドの解決状況に基づきます。1 リクエストにつき、1 つのワークアイテムに対してのみ解決できます。[質問間の移動と現在の制約](human-in-the-loop.md#question-navigation)を参照してください。 |
| `readinessScore`, `readinessScoreFeedback`, `readinessScoreFeedbackHtml` | 準備状況スコア、その Markdown の説明、レンダリング済み HTML。フィードバックは、1 リクエストにつき、1 つのワークアイテムに対してのみ解決でき、準備状況ドロワーを開いたときに取得します。 |

非同期フローは、`WorkItemGenerateWorkplan` と `WorkItemResumeWorkplan` の各ミューテーションで開始および再開します。[非同期 Workplan フロー](workplan-flow.md)を参照してください。

Workplan は、MCP ワークアイテムツールを通じても読み書きできるため、外部のエージェントやツールが利用できます。

## ウィジェット {#widget}

Implementation ウィジェットは、デフォルトでは非表示です。ユーザーが **Plan** を選択すると、ワークアイテムの AI 計画が有効になります。その後、ウィジェットには次のものを表示します。

- Workplan のステータス。未作成、ワークアイテムのレビュー中、生成中、入力待ち、レビュー準備完了、キャンセル、失敗のいずれかです。
- スコアが存在する場合の[準備状況のレベル](readiness.md)。
- フローが入力を待っている間の、未解決の質問の件数と質問間の移動機能。
- Workplan の表示、編集、再生成、削除、および **Implement** のアクション。

フローを開始または再開すると、そのセッションを Duo ドロワーで開きます。これには、**Plan**、**Generate**、**Regenerate**、**Try again**、**Continue** が含まれます。生成した Workplan は要求されたときにのみ開くため、バックグラウンドの実行が完了してもユーザーの作業を中断しません。ステータスインジケーター上の、セッションへの直接のショートカットは、[Issue 631233](https://gitlab.com/gitlab-org/gitlab/-/work_items/631233)で引き続きフォローアップとなっています。

Workplan はサイドパネルで開きます。ユーザーは、必要に応じてテンプレートを使用し、Workplan を手動で作成することもできます。Workplan のテンプレートは、ファイル名が `.plan` で終わる説明テンプレートです。

ユーザーが AI によるフローを開始した場合にのみ Implementation ウィジェットを表示することは、[Issue 605174](https://gitlab.com/gitlab-org/gitlab/-/work_items/605174)で決定しました。計画を有効にした後は、無効にできません。

## 生成 {#generation}

**Plan** は、非同期の `workplan/v1` フローを開始します。このフローは、ワークアイテムを詳細化し、必要に応じて明確化のための質問をして、Workplan を書き込みます。[非同期 Workplan フロー](workplan-flow.md)と[人の関与](human-in-the-loop.md)を参照してください。

## 権限と機能の利用制御 {#permissions-and-feature-gating}

1. **ライセンス対象機能**：Workplan は Premium と Ultimate ティアで利用でき、`ai_workflows` のライセンス対象機能を再利用します。
1. **ワークアイテムタイプ**：Issue とタスクです。子タスクを持つ Issue も含みます。
1. **ユーザーの権限**：Workplan の作成と編集には、ワークアイテムを更新する権限が必要です。生成時には CI フローの権限 `create_duo_workflow_for_ci` も確認し、現在は Developer 以上が必要です。フロントエンドとワークアイテムのミューテーションは、引き続き `update_work_item` を確認するため、アクションが表示されても、そのユーザーが実行できるとは限りません。生成、再開、実装の権限の整合は、[Issue 634208](https://gitlab.com/gitlab-org/gitlab/-/work_items/634208)で追跡しています。
1. **Duo の利用可否**：Workplan の生成には、Duo Agent Platform と `workplan/v1` の基盤フローが利用可能である必要があります。基盤フローが利用できないときに **Plan** ボタンを無効にすることは、[Issue 629825](https://gitlab.com/gitlab-org/gitlab/-/work_items/629825)で予定しています。ボタンは、まだフローの利用可否を確認しません。

未完了のフォローアップは、次のとおりです。

- [Workplan の内容をオンデマンドで読み込み、ウィジェットの状態には内容の存在を示すフィールドを使う](https://gitlab.com/gitlab-org/gitlab/-/work_items/633453)
- [Workplan の作成と更新のタイムスタンプを表示する](https://gitlab.com/gitlab-org/gitlab/-/work_items/634222)
- [Plan ボタンから実装に直接進めるようにする](https://gitlab.com/gitlab-org/gitlab/-/work_items/632233)
- [クローズされたワークアイテムでの計画コントロールの動作](https://gitlab.com/gitlab-org/gitlab/-/work_items/631847)。**Implement** ボタンは、クローズされたアイテムではすでに非表示です。残る計画コントロールは、別のフォローアップです。
- [`hasAgentPlan` の型ポリシーを、`widgets` フィールドの廃止後に追加する](https://gitlab.com/gitlab-org/gitlab/-/work_items/623135)

## 決定 {#decisions}

| 日付 | 決定 | 決定者 |
| ---- | -------- | --- |
| 2026-03-30 | 計画は**独立したエンティティではありません**。ワークアイテム上のウィジェットです。 | ワークショップ |
| 2026-03-31 | 出力形式は **Markdown** で、ワークアイテムのテンプレートに沿って作成します。 | @fredericcaplette |
| 2026-04-09 | ワークアイテム上の AI とのやり取りには、**同期 Duo Chat** を使用します。[非同期 Workplan フロー](workplan-flow.md)によって置き換えられました。 | @vanessaotto, @fredericcaplette |
| 2026-04-09 | 簡潔さと人の読みやすさのために、**YAML より Markdown** を使用します。 | @fredericcaplette, @vanessaotto, @timzallmann |
| 2026-04-09 | 最初のイテレーションでは **"Agent plan"** という名称です。**Workplan** に置き換えられました。 | @izzychu, @fredericcaplette |
| 2026-04-16 | ワークアイテムと結合する**別のテーブル**に保存します（Issue のテーブルは大きすぎるため拡張できません）。 | @fredericcaplette |
| 2026-04-16 | AI Gateway は、計画の読み書きのために、**既存のワークアイテムツールを拡張**します（新しいツールは作成しません）。 | @fredericcaplette |
| 2026-04-16 | 内容は、**生の Markdown** として保存および提供します。構造化スキーマや YAML フロントマターはありません。 | @fredericcaplette |
| 2026-09-09 | ウィジェットは、ユーザーがワークアイテムの AI 計画を有効にした後にのみ表示されます。 | WS-2 |
| 2026-09-22 | 計画の名称は **Workplan** で、1 語で表記します。親ウィジェットの名称は **Implementation** です。 | @nickbrandt, @brendan777 |

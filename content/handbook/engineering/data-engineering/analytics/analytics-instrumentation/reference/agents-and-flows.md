---
title: Analytics Instrumentation のエージェントとフロー
description: "内部イベントの計測を計画、実装、レビューする GitLab Duo Agent Platform のエージェントとフロー"
upstream_path: /handbook/engineering/data-engineering/analytics/analytics-instrumentation/reference/agents-and-flows/
upstream_sha: 52419353ea755a1ac823553385f8636ff2fcde17
lastmod: "2026-10-21T17:41:42Z"
translated_at: "2026-11-01T18:15:14+00:00"
translator: codex
stale: false
---

Analytics Instrumentation グループは、内部イベントの計測用に、これらの GitLab Duo Agent Platform のエージェントとフローを管理しています。
エージェントはチャットで実行します。
フローは、対応するエージェントと同じ指示を実行します。Issue やマージリクエストから起動し、そこに結果を投稿します。

すべてのエージェントとフローの定義は、[analytics-instrumentation のエージェントとフローのプロジェクト](https://gitlab.com/components/agents-and-flows/analytics-instrumentation)にあります。

## エージェント {#agents}

### Instrumentation Planner Agent {#instrumentation-planner-agent}

- **カタログ**: [Planner Agent](https://gitlab.com/groups/gitlab-org/-/automate/agents/1012274)
- **定義**: [instrumentation_planner_agent.yml](https://gitlab.com/components/agents-and-flows/analytics-instrumentation/-/blob/main/agents/instrumentation_planner_agent.yml)
- **目的**: トラッキングのアイデアから、実装に着手できるトラッキング要件の Issue を作成するか、既存の Issue に調査結果を追加します。
- **呼び出し方法**: チャット。
- **モード**:
  - **新しいアイデア**: トラッキングする内容を自由形式で説明します。
  - **既存の Issue の情報拡充**: Issue の参照（`#1234` または URL）を指定します。
  - **URL と操作のリスト**: GitLab ページの URL と、トラッキングする UI 操作のリストを指定します。
- **出力**:
  - 新しいアイデアモードと URL モード: [Analytics Instrumentation Agent Issue テンプレート](https://gitlab.com/gitlab-org/gitlab/-/blob/master/.gitlab/issue_templates/Analytics%20Instrumentation%20Agent%20Issue.md)に従う Issue。タイトルは `Tracking Requirements: <action> <target> <where>` で、`analytics instrumentation`、`Category:<category>`、`group::<group>` をラベルとして提案します。
  - 情報拡充モード: `## 🔍 Tracking Requirements Research (auto-generated)` を見出しとするコメント。Issue の説明は編集しません。

### Instrumentation Implementation Agent {#instrumentation-implementation-agent}

- **カタログ**: [Implementation agent](https://gitlab.com/groups/gitlab-org/-/automate/agents/1012273)
- **定義**: [instrumentation_implementation_agent.yml](https://gitlab.com/components/agents-and-flows/analytics-instrumentation/-/blob/main/agents/instrumentation_implementation_agent.yml)
- **目的**: イベントとメトリクスの定義、計測コード、仕様テストを作成し、マージリクエストを作成または更新します。
- **呼び出し方法**: チャット、または分析計測の Issue 上。
- **モード**:
  - **Issue 主導**: Issue に Instrumentation Plan を投稿し、確認を待ってから実装します。
  - **プロンプト主導**: 確認のための質問を行い、その後、マージリクエストを直接作成するか、Issue を作成して Issue 主導モードで続行します。
- **出力**:
  - 新規作成または更新されたマージリクエスト。
  - Issue 主導モードのみ: `⏳ Starting implementation`、`Instrumentation Plan — Amendment`、`✅ MR opened`、`🔗 introduced_by_url updated`、`❌ Implementation failed` など、Issue 上のステータスノート。

### Instrumentation Reviewer Agent {#instrumentation-reviewer-agent}

- **カタログ**: [Reviewer agent](https://gitlab.com/groups/gitlab-org/-/automate/agents/1012275)
- **定義**: [instrumentation_reviewer_agent.yml](https://gitlab.com/components/agents-and-flows/analytics-instrumentation/-/blob/main/agents/instrumentation_reviewer_agent.yml)
- **目的**: マージリクエスト内の分析計測ファイルについて、イベントとメトリクスの定義、トラッキング呼び出し、テスト、データプライバシーをレビューします。
- **呼び出し方法**: マージリクエストの参照を指定したチャット。
- **対象範囲**: パス、またはファイル内容に含まれるトラッキング呼び出しによって該当すると判断した、分析計測ファイルのみ。全リストは定義ファイルにあります。
- **出力**:
  - `❌ Changes Required`、`⚠️ Needs Improvement`、`✅ Approved` のいずれかのステータスを含む要約ノート。
  - 指摘ごとに 1 件のインライン差分ノート。先頭に `[issue]`、`[suggestion]`、`[nitpick]` のいずれかを付けます。
  - 対象範囲のファイルがない場合: `✅ No analytics instrumentation changes detected — nothing to review`。

## フロー {#flows}

### Instrumentation Implementation Flow {#instrumentation-implementation-flow}

- **カタログ**: [Implementation flow](https://gitlab.com/groups/gitlab-org/-/automate/flows/1009306)
- **定義**: [instrumentation_implementation_flow.yml](https://gitlab.com/components/agents-and-flows/analytics-instrumentation/-/blob/main/flows/instrumentation_implementation_flow.yml)
- **実行するエージェント**: [Instrumentation Implementation Agent](#instrumentation-implementation-agent)を Issue 主導モードで実行します。
- **起動方法**: `@ai-instrumentation-agent-gitlab-org` をメンションするか、そのユーザーを担当者またはレビュアーに追加します。
- **出力**: Issue に投稿する Instrumentation Plan、ステータスノート、マージリクエストへのリンク。

### Instrumentation Reviewer Flow {#instrumentation-reviewer-flow}

- **カタログ**: [Reviewer flow](https://gitlab.com/groups/gitlab-org/-/automate/flows/1009102)
- **定義**: [instrumentation_reviewer_flow.yml](https://gitlab.com/components/agents-and-flows/analytics-instrumentation/-/blob/main/flows/instrumentation_reviewer_flow.yml)
- **実行するエージェント**: [Instrumentation Reviewer Agent](#instrumentation-reviewer-agent)。
- **起動方法**:
  - レビュー準備が整ったマージリクエスト: マージリクエストがレビュー可能になると、自動的に開始します。
  - 下書きのマージリクエスト: `@ai-instrumentation-review-gitlab-org` をメンションするか、`/request_review @ai-instrumentation-review-gitlab-org` を実行します。
- **出力**: エージェントと同じ要約ノートとインライン差分ノートを、マージリクエストに投稿します。

## 外部データソース {#external-data-sources}

すべてのエージェントとフローは、作業を始める前に、各ソースプロジェクトのデフォルトブランチから次のソースを取得します。

| ソース | 用途 |
|--------|----------|
| [GitLab `VERSION`](https://gitlab.com/gitlab-org/gitlab/-/blob/master/VERSION#L1) | `milestone` |
| [`stages.yml`](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/data/stages.yml) | 有効な `product_group` の値 |
| [`feature_categories.yml`](https://gitlab.com/gitlab-org/gitlab/-/blob/master/config/feature_categories.yml) | 有効な `product_categories` の値 |

## 関連情報 {#related}

- 機能、各エージェントの仕組み、プロンプトの例: [analytics-instrumentation プロジェクトの README](https://gitlab.com/components/agents-and-flows/analytics-instrumentation)
- [Internal Events クイックスタートガイド](https://docs.gitlab.com/development/internal_analytics/internal_event_instrumentation/quick_start/)
- 質問とフィードバック: [analytics-instrumentation のエージェントとフローのプロジェクト](https://gitlab.com/components/agents-and-flows/analytics-instrumentation)で Issue を作成するか、[#g_analyze_analytics_instrumentation](https://gitlab.slack.com/archives/CL3A7GFPF)で質問してください

---
title: "AI Coding グループ"
description: AI Coding グループは AI Engineering 組織の一部であり、ユーザー向けの AI 駆動コーディング機能に注力しています。
upstream_path: /handbook/engineering/ai/ai-coding/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:00:00Z"
translator: claude
stale: false
---

## チームの概要

AI Coding グループは、開発者がコードを書き、理解し、改善するのを支援する AI 駆動の機能を開発しています。私たちは GitLab 全体で開発者体験を向上させるインテリジェントなツールの作成に焦点を当てています。

## 私たちのプロジェクト

AI Coding チームは、以下のプロジェクトを所有し、活発に作業しています。

- [Code Suggestions](/handbook/engineering/ai/ai-coding/code_suggestions/) - IDE 内での AI 生成コード補完および生成。
- [Duo Code Review](/handbook/engineering/ai/ai-coding/duo_code_review/) - AI 駆動のコードレビュー支援とインサイト。
- [Duo Context Exclusion](/handbook/engineering/ai/ai-coding/duo_context_exclusion/) - 機密性のあるまたは無関係なコードコンテキストのフィルタリング。
- [Codebase Semantic Indexing](/handbook/engineering/ai/ai-coding/codebase_semantic_indexing/) - 埋め込みを使用した高度なコード検索および発見機能。
- [GitLab Events Platform](/handbook/engineering/ai/ai-coding/event_platform/) - GitLab Duo Flows を自動的に実行できるようにします。
- [Code-related Slash Commands](/handbook/engineering/ai/ai-coding/slash_commands/) - `/explain`、`/refactor`、`/tests`、`/fix` などのインタラクティブな Duo Chat コマンド。
- [Repository X-Ray](/handbook/engineering/ai/ai-coding/repository_xray/) - コードサジェスチョンのコンテキスト強化のためのリポジトリ分析とメタデータ抽出。
- [AI Assisted Service](/handbook/engineering/ai/ai-coding/ai_assisted_service/) - 私たちの機能をサポートするコア AI インフラストラクチャとサービス。

### 評価とテスト

AI Coding は、すべての機能にわたる評価を担当しており、以下が含まれます。

- LangSmith でのデータセットの作成と、[Datasets リポジトリ](https://gitlab.com/gitlab-org/modelops/ai-model-validation-and-research/ai-evaluation/datasets/-/blob/main/doc/guidelines/register_dataset.md#registration-process) への登録。[Code Creation Datasets](https://gitlab.com/gitlab-org/code-creation) もあります。
- [Centralized Evaluation Framework](https://gitlab.com/gitlab-org/modelops/ai-model-validation-and-research/ai-evaluation/prompt-library) での評価器の作成
- 評価の実行

## お問い合わせ

AI Coding グループとつながるには以下の情報を使用してください。

| カテゴリ           | 名前                                           |
|--------------------|------------------------------------------------|
| GitLab チームハンドル | @gitlab-org/ai-engineering/ai-coding/engineers |
| Slack チャンネル      | #g_ai_coding                                   |

## チームメンバー

以下のメンバーが AI Coding チームの常任メンバーです。


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/ai/ai-coding/#team-members" rel="external noopener">原文 (英語)</a> を参照してください。</p>


GitLab の Issue/MR で `@gitlab-org/ai-engineering/ai-coding/engineers` ハンドルを使用することで、チーム全体に連絡できます。

## ステーブルカウンターパート

他の機能チームの以下のメンバーが私たちのステーブルカウンターパートです。

| カテゴリ          | カウンターパート                                                                       |
|-------------------|--------------------------------------------------------------------------------------|
| Product Manager   | <p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/ai/ai-coding/#team-members" rel="external noopener">原文 (英語)</a> を参照してください。</p> |
| Technical Writing | <p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/ai/ai-coding/#team-members" rel="external noopener">原文 (英語)</a> を参照してください。</p> |
| UX                | TBD                                                                                  |
| Support           | [TBD](/handbook/support/support-stable-counterparts/)                                |

## 私たちの働き方

オンボーディング、休暇、Issue ボード、ミーティングなど、チームの働き方の詳細については、[How We Work](/handbook/engineering/ai/ai-coding/how-we-work/) ページを参照してください。

## ダッシュボードとモニタリング

1. [Metrics Dashboard](https://dashboards.gitlab.net/d/stage-groups-code_creation/stage-groups3a-code-creation3a-group-dashboard?orgId=1) (Grafana)
1. [Error Budget](https://dashboards.gitlab.net/d/stage-groups-detail-code_creation/stage-groups-code-creation-group-error-budget-detail?orgId=1) (Grafana)

## 関連リソース

- [AI Coding プロダクトカテゴリ](/handbook/product/categories/#ai-coding-group)

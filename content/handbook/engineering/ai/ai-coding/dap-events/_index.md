---
title: "AI Coding：DAP Events"
description: "AI Coding 内の DAP Events ファンクショナルチーム。GitLab Duo Flows のイベントプラットフォームとトリガー機能を構築しています。"
upstream_path: /handbook/engineering/ai/ai-coding/dap-events/
upstream_sha: e2aabe3bf4147150a0bc54fee61fc5f695a17d9f
lastmod: "2026-06-22T12:16:47-05:00"
translated_at: "2026-06-23T07:32:46+09:00"
translator: codex
stale: false
---

## 概要

DAP Events チームは、開発ライフサイクル全体のイベントに応じて GitLab Duo Flows が自動的に実行されるようにするイベントプラットフォームとトリガーシステムを構築しています。[Flow Triggers](https://docs.gitlab.com/user/duo_agent_platform/triggers/) は、プロジェクトをフローおよび専用サービスアカウントに関連付けるデータベースオブジェクトで、一致するイベントが発生したときに起動します。このプラットフォームは、GitLab 内部のイベントタイプ（コードプッシュ、Issue と MR の変更、CI/CD パイプラインの結果、デプロイなど）に加え、Jira、Jenkins、Slack などのサードパーティツールからのカスタム外部イベントもサポートします。これらのイベントは gRPC CloudEvents 経由で GitLab Relay に公開されます。イベントはプラグイン可能なメッセージブローカー（例: Redis、NATS）を通じてストリーミングされ、Sidekiq ワーカーによって非同期に実行されます。

## 主な情報

| | |
|---|---|
| **Slack チャンネル** | `#g_dap-events` |
| **Stage ラベル** | `devops::ai coding` |
| **Group ラベル** | `group::dap events` |
| **Category ラベル** | `Category:DAP Event Platform`, `Category:DAP Triggers` |

## ドキュメント

1. [Duo Flow Triggers ドキュメント](https://docs.gitlab.com/user/duo_agent_platform/triggers/)
1. [設計ドキュメント](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18106) (進行中)
1. [Event Platform エピック](https://gitlab.com/groups/gitlab-org/-/work_items/21338)
   1. [Phase 1](https://gitlab.com/groups/gitlab-org/-/work_items/21345): 既存の EventStore を使用
   1. [Phase 2](https://gitlab.com/groups/gitlab-org/-/work_items/21346): 新しいメッセージブローカーを構築
1. [DAP Triggers エピック](https://gitlab.com/groups/gitlab-org/-/work_items/21997)

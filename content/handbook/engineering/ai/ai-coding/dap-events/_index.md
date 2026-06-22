---
title: "AI Coding:DAP Events"
description: "AI Coding 内の DAP Events 機能チーム。GitLab Duo Flows 向けのイベントプラットフォームとトリガー機能を構築しています。"
upstream_path: /handbook/engineering/ai/ai-coding/dap-events/
upstream_sha: e2aabe3bf4147150a0bc54fee61fc5f695a17d9f
lastmod: "2026-06-22T16:36:51-04:00"
translated_at: "2026-06-22T21:07:39Z"
translator: claude
stale: false
---

## Overview

DAP Events チームは、GitLab Duo Flows が開発ライフサイクル全体のイベントに応じて自動的に実行されることを可能にするイベントプラットフォームとトリガーシステムを構築しています。[Flow Triggers](https://docs.gitlab.com/user/duo_agent_platform/triggers/) は、プロジェクトをフローおよび専用のサービスアカウントに関連付けるデータベースオブジェクトであり、一致するイベントが発生したときに発火します。このプラットフォームは、GitLab 内部のイベントタイプ（コードのプッシュ、Issue や MR の変更、CI/CD パイプラインの結果、デプロイなど）に加え、Jira、Jenkins、Slack などのサードパーティツールからの gRPC CloudEvents 経由で GitLab Relay に公開されるカスタムの外部イベントもサポートします。イベントはプラガブルなメッセージブローカー（例: Redis、NATS）を通じてストリーミングされ、Sidekiq ワーカーによって非同期に実行されます。

## Key Information

| | |
|---|---|
| **Slack Channel** | `#g_dap-events` |
| **Stage Label** | `devops::ai coding` |
| **Group Label** | `group::dap events` |
| **Category Labels** | `Category:DAP Event Platform`, `Category:DAP Triggers` |

## Documentation

1. [Duo Flow Triggers documentation](https://docs.gitlab.com/user/duo_agent_platform/triggers/)
1. [Design document](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18106) (in progress)
1. [Event Platform Epic](https://gitlab.com/groups/gitlab-org/-/work_items/21338)
   1. [Phase 1](https://gitlab.com/groups/gitlab-org/-/work_items/21345): 既存の EventStore を使用
   1. [Phase 2](https://gitlab.com/groups/gitlab-org/-/work_items/21346): 新しいメッセージブローカーの構築
1. [DAP Triggers Epic](https://gitlab.com/groups/gitlab-org/-/work_items/21997)

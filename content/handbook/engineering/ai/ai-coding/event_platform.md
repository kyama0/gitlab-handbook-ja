---
title: "GitLab Events Platform"
description: "GitLab Duo Flows のためのイベント駆動型自動化"
upstream_path: /handbook/engineering/ai/ai-coding/event_platform/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:00:00Z"
translator: claude
stale: false
---

## 概要

GitLab Events Platform は、開発ライフサイクル全体のイベントに応じて GitLab Duo Flows が自動的に実行されることを可能にします。[Flow Triggers](https://docs.gitlab.com/user/duo_agent_platform/triggers/) は、プロジェクトをフローおよび専用のサービスアカウントと関連付けるデータベースオブジェクトであり、一致するイベントが発生したときに発火します。このプラットフォームは、GitLab 内部のイベントタイプ（コードプッシュ、Issue や MR の変更、CI/CD パイプラインの結果、デプロイなど）と、Jira、Jenkins、Slack のようなサードパーティツールからのカスタム外部イベント（gRPC CloudEvents 経由で GitLab Relay に発行される）の両方をサポートします。イベントは、プラガブルなメッセージブローカー（Redis、NATS など）を通じてストリーミングされ、Sidekiq ワーカーを介して非同期に実行されます。

## ドキュメント

- 設計ドキュメントは進行中です。最新のステータスについては [MR !18106](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18106) を参照してください。
- [メイン Epic](https://gitlab.com/groups/gitlab-org/-/work_items/21338)
  - [フェーズ 1](https://gitlab.com/groups/gitlab-org/-/work_items/21345)：既存の EventStore を使用する
  - [フェーズ 2](https://gitlab.com/groups/gitlab-org/-/work_items/21346)：新しいメッセージブローカーを構築する

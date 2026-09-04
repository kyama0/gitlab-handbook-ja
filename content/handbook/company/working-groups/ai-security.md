---
title: "AI セキュリティワーキンググループ"
description: "このワーキンググループの憲章は、GitLab コンポーネント全体で AI セキュリティを推進することです。"
status: disbanded
upstream_path: /handbook/company/working-groups/ai-security/
upstream_sha: 68426776f854464b95a942162d83ddb29afbcf7d
translated_at: "2026-09-04T11:09:38+09:00"
translator: claude
stale: false
lastmod: "2026-09-01T16:15:24+01:00"
---

## 属性

| プロパティ      | 値         |
|---------------|---------------|
| 作成日  | 2025 年 6 月 12 日 |
| 終了日      | 2026 年 2 月 25 日頃  |
| Slack         | [#wg_ai_security](https://gitlab.enterprise.slack.com/archives/C0912QSD38D)（社内） |
| Google ドキュメント    | [ワーキンググループアジェンダ](https://docs.google.com/document/d/1sShQ7VH0fsUzA29qsRClbiIel7u-Q1R0-ZOziX1_eAg/edit?usp=sharing)（社内） |
| エピック          | [メインプロジェクトエピック](https://gitlab.com/groups/gitlab-org/-/epics/18135)（社内） |
| ハンドブックページ | [AI セキュリティワーキンググループ](/handbook/company/working-groups/ai-security/) |

## コンテキスト

Duo エージェントプラットフォームの導入により、個別の GitLab Duo プロダクト機能から GitLab の AI 専用プラットフォームへの移行が進んでいます。

Duo エージェントプラットフォームのローンチに伴い、GitLab Duo 機能のセキュアな開発はビジネスにとってより重要になっています。このプラットフォームの急速なイテレーションが期待されるため、業界のベストプラクティスを活用してデフォルトでセキュアな機能を実現する必要があります。

このワーキンググループには、エンジニアリングとセキュリティのチームメンバーのコミュニティが含まれ、ユーザーとコントリビュータの両方にとってセキュリティをシンプルにすることを目指します。

## スコープ

このグループのスコープには以下の GitLab コンポーネントが含まれます：

1. [AI ゲートウェイ](https://docs.gitlab.com/administration/gitlab_duo/gateway/)
1. [CLI エージェント](https://docs.gitlab.com/user/duo_agent_platform/agent_assistant/)
1. [Duo エージェントプラットフォーム](https://docs.gitlab.com/user/duo_agent_platform/)
1. [エディタエクステンション](https://docs.gitlab.com/editor_extensions/)
1. [GitLab ランゲージサーバー](https://docs.gitlab.com/editor_extensions/language_server/)

### 終了基準 {#exit-criteria}

1. AI プロンプト実装のベストプラクティスがコントリビュータードキュメントに文書化されている。
1. AI セキュリティツールが SaaS、Dedicated、セルフマネージドのお客様に提供できるものを理解するための概念実証が実行・記録されている。
1. CI/CD パイプラインがマージリクエストのコードレビューをトリガーし、コントリビュータに実行可能なアドバイスを提供する。
1. CI/CD パイプラインが AI 製品向けに確立したセキュア開発標準を満たさないマージリクエストをブロックする。
1. ローカル作業環境のセットアップと、さまざまな AI プロジェクトでの AI 機能のテストを支援する自動化スクリプトが確立されている。

## ロールと責任

このプロジェクトに以前関与していたチームメンバーについては、このページの Git 履歴を参照してください。

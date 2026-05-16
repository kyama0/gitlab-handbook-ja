---
title: "AI セキュリティワーキンググループ"
description: "このワーキンググループの憲章は、GitLab コンポーネント全体で AI セキュリティを推進することです。"
status: active
upstream_path: /handbook/company/working-groups/ai-security/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-25T09:00:00Z"
translator: claude
stale: false
lastmod: "2025-09-24T11:45:16+01:00"
---

## 属性

| プロパティ      | 値         |
|---------------|---------------|
| 作成日  | 2025年6月12日 |
| 終了日      | 未定           |
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

| ワーキンググループのロール | チームメンバー名        | 役職                                            |
|--------------------|-------------------------|-------------------------------------------------|
| エグゼクティブスポンサー  | Jamie Dicken            | ディレクター、セキュリティプラットフォーム & アーキテクチャ   |
| エグゼクティブスポンサー  | Julie Davila            | VP、プロダクトセキュリティ                            |
| エグゼクティブスポンサー  | Tim Zallmann            | VP、AI エンジニアリング                              |
| ファンクショナルリード    | Erran Carey             | スタッフフルスタックエンジニア                        |
| ファンクショナルリード    | Jessie Young            | プリンシパルエンジニア                              |
| ファンクショナルリード    | Joern Schneeweisz       | プリンシパルセキュリティエンジニア                     |
| メンバー             | Ameya Darshan           | シニアアプリケーションセキュリティエンジニア、プロダクトセキュリティ |
| メンバー             | Daniel Hauenstein       | アプリケーションセキュリティエンジニア、プロダクトセキュリティ |
| メンバー             | Dillon Wheeler          | バックエンドエンジニア、AI-powered:Duo Chat           |
| メンバー             | Vitor Meireles De Sousa | シニアマネージャー、AppSec、プロダクトセキュリティ        |
| メンバー             | Katherine Wu            | アプリケーションセキュリティエンジニア、PSIRT、プロダクトセキュリティ |

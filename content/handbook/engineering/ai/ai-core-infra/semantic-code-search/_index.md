---
title: AI Core Infra:Semantic Code Search
description: "AI Core Infra 内の Semantic Code Search ファンクショナルチーム。コードリポジトリの意味的理解を提供する GitLab の RAG 実装に重点を置いています。"
upstream_path: /handbook/engineering/ai/ai-core-infra/semantic-code-search/
upstream_sha: 6eef8dbb6a0d15167aa5378f476b04cd38b78675
lastmod: "2026-07-09T09:31:33+02:00"
translated_at: "2026-07-10T20:48:59+09:00"
translator: codex
stale: false
---

## 概要

Semantic Code Search チームは AI Core Infra 組織の一部です。このチームは、コードリポジトリの意味的理解を提供する GitLab の RAG 実装に重点を置いています。

## 重要情報

| | |
|---|---|
| **Slack チャンネル** | `#f_semantic-code-search` |
| **ステージラベル** | `devops::ai platform` |
| **グループラベル** | `group::ai core infra` |
| **カテゴリラベル** | `category:semantic code search` |

## チームリソース

| リソース | リンク |
|---|---|
| **チームプロジェクト** | [gitlab-org/ai-powered/semantic-code-search/team](https://gitlab.com/gitlab-org/ai-powered/semantic-code-search/team) |
| **計画 Issue** | [計画 Issue](https://gitlab.com/gitlab-org/ai-powered/semantic-code-search/team/-/work_items?sort=created_date&state=opened&label_name%5B%5D=Planning%20Issue&first_page_size=100) |
| **Issue ボード** | [Issue ボード](https://gitlab.com/groups/gitlab-org/-/boards/11125588) |

## ランブック

[Active Context](https://runbooks.gitlab.com/ai-active-context/) ランブックでは、埋め込みパイプライン、ベクトルストア管理、コードベースのインデックス作成など、セマンティックコード検索を支える基盤フレームワークの運用ガイダンスを提供します。

## ドキュメント

1. [Semantic Code Search](https://docs.gitlab.com/user/gitlab_duo/semantic_code_search/) — ユーザードキュメント
1. [Semantic Search の開発](https://docs.gitlab.com/development/ai_features/semantic_search/) — Active Context フレームワークの内部構造を扱う開発ドキュメント

## 設計ドキュメント

1. [チャットコンテキストとしてのコードベース](/handbook/engineering/architecture/design-documents/codebase_as_chat_context/) — 機能設計（セマンティック検索、埋め込み、チャンク化、アドホックインデックス作成）
1. [AI Context Abstraction Layer](/handbook/engineering/architecture/design-documents/ai_context_abstraction_layer/) — ActiveContext フレームワーク設計（タスク、埋め込みモデル）

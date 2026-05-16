---
title: "コードベースのセマンティックインデックス化"
description: "高度なコード検索および発見機能"
upstream_path: /handbook/engineering/ai/ai-coding/codebase_semantic_indexing/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:00:00Z"
translator: claude
stale: false
lastmod: "2026-02-02T13:48:16-06:00"
---

## 概要

コードベースのセマンティックインデックス化は、キーワードのマッチングだけに頼るのではなく、コードの意味と文脈を理解することで、コード検索と発見を強化します。これにより、開発者は関連するコードをより効果的に見つけ、大規模なコードベース全体で関連する機能を発見できます。これは、プロジェクトをインデックス化し、検索可能なコードの埋め込み（embeddings）を作成することによって行われます。

このプロジェクトは以下の名前でも知られています。

- Chat with your Codebase
- Codebase as Chat Context
- Codebase Embeddings
- Codebase Semantic Search

## お問い合わせ

| カテゴリ                | 名前                               |
|-------------------------|------------------------------------|
| グループ Slack チャンネル | #g_context_systems                 |
| Knowledge Graph チャンネル | #subteam-codebase-as-chat-context |

## 目的

- コードの内容と目的についてのセマンティックな理解を構築する
- コード検索のための自然言語クエリを実現する
- コードの発見と再利用性を向上させる
- インテリジェントなコード推奨をサポートする
- Duo Agent Platform を通じて検索機能を利用可能にする

## 埋め込みとは何ですか？

埋め込み（Embeddings）は、テキストやコードのセマンティックな意味を捉える数値表現です。コードリポジトリを処理するとき、それを小さく管理しやすいチャンク（関数、クラス、コードブロックなど）に分割し、各チャンクを埋め込み — 本質的にはその意味と文脈を表す数値のベクトル — に変換します。これらの埋め込みにより、完全に一致するキーワードだけでなく、コードセグメント間のセマンティックな類似性を理解できるようになります。例えば、「user authentication」を検索すると、実際のコードで「login validation」や「credential verification」のような用語が使われていても、関連する結果を表示できます。これらの埋め込みを検索可能な形式で保存することで、開発者は完全な文字列マッチングだけに頼るのではなく、意図と機能に基づいて関連するコードを見つけられるようになり、コードの発見をより直感的かつ包括的にします。

## ドキュメント

- [Epic](https://gitlab.com/groups/gitlab-org/-/epics/16910)
- [Blueprint: Codebase as Chat Context](../../architecture/design-documents/codebase_as_chat_context/_index.md)
- [Blueprint: Code Embeddings](../../architecture/design-documents/codebase_as_chat_context/code_embeddings.md)

## Runbook と監視

- [Runbook](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/ai-active-context/README.md#monitoring)
- [ダッシュボード](https://log.gprd.gitlab.net/app/r/s/tyyS8)

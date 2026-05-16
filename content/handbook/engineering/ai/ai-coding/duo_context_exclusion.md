---
title: "Duo コンテキスト除外"
description: "機微または無関係なコードコンテキストのインテリジェントなフィルタリング"
upstream_path: /handbook/engineering/ai/ai-coding/duo_context_exclusion/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:00:00Z"
translator: claude
stale: false
lastmod: "2026-02-02T13:48:16-06:00"
---

## 概要

Duo コンテキスト除外（Duo Context Exclusion）は、機微な情報が AI 処理コンテキストに含まれることを防ぐためのインテリジェントなフィルタリング機能を提供します。これにより、AI を活用した開発ツールの有効性を維持しながら、セキュリティとプライバシーを確保します。

## 目的

- ユーザーが機微なコードコンテンツ（シークレット、認証情報、PII）を識別して除外できるようにする
- 設定可能な除外ルールとパターンを提供する
- すべての AI 機能にわたるセキュリティコンプライアンスを維持する

## ドキュメント

- [Epic](https://gitlab.com/groups/gitlab-org/-/epics/17124)

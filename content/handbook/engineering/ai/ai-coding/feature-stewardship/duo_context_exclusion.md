---
title: "Duo コンテキスト除外"
description: "機微または無関係なコードコンテキストのインテリジェントなフィルタリング"
upstream_path: /handbook/engineering/ai/ai-coding/feature-stewardship/duo_context_exclusion/
upstream_sha: e2aabe3bf4147150a0bc54fee61fc5f695a17d9f
lastmod: "2026-06-22T12:16:47-05:00"
translated_at: "2026-06-23T07:24:31.0151723+09:00"
translator: codex
stale: false
---

## 概要

Duo コンテキスト除外（Duo Context Exclusion）は、機微な情報が AI 処理コンテキストに含まれることを防ぐためのインテリジェントなフィルタリング機能を提供します。これにより、AI を活用した開発ツールの有効性を維持しながら、セキュリティとプライバシーを確保します。

## 目的

- ユーザーが機微なコードコンテンツ（シークレット、認証情報、PII）を識別して除外できるようにする
- 設定可能な除外ルールとパターンを提供する
- すべての AI 機能にわたるセキュリティコンプライアンスを維持する

## ドキュメント

- [Epic](https://gitlab.com/groups/gitlab-org/-/epics/17124)

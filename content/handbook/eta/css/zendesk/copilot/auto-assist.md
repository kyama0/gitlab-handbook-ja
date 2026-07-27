---
title: 'Auto assist'
description: 'Zendesk Copilot auto assist に関するドキュメント'
upstream_path: /handbook/eta/css/zendesk/copilot/auto-assist/
upstream_sha: aa050cd4c77778c3f3ebc5d01bf39c92d7da06be
lastmod: "2026-07-27T13:51:40-05:00"
translated_at: "2026-07-28T06:31:03+09:00"
translator: codex
stale: false
---

## Auto assist とは

[Zendesk](https://support.zendesk.com/hc/en-us/articles/8013454025114-Turning-on-and-configuring-auto-assist) によると:

> Auto assist は、エージェント向けの AI 搭載アシスタントです。大規模言語モデル（LLM）技術を使用し、auto assist は送信されたチケットの内容を理解して、解決方法に関する提案をエージェントに提供します。

## 現在の設定

- Zendesk Global
  - サンドボックス: 現在無効
  - 本番環境: 現在無効
- Zendesk US Government
  - サンドボックス
    - アクセスできるユーザー: すべてのグループ
    - [x] エージェントコンポーザーに auto assist の返信とアクションを表示
  - 本番環境
    - アクセスできるユーザー: すべてのグループ
    - [x] エージェントコンポーザーに auto assist の返信とアクションを表示

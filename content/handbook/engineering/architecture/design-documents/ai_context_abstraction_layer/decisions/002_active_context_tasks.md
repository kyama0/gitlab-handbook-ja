---
title: "AI Context Abstraction Layer ADR-002: ActiveContext Task フレームワーク"
description: "複雑で長時間実行される処理のためのフレームワーク導入に関する意思決定記録。"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/ai_context_abstraction_layer/decisions/002_active_context_tasks/
upstream_sha: 4253b2ab72b0791916a54411ca71a25276e128bd
lastmod: 2026-06-25T09:42:09+02:00
translated_at: "2026-07-02T06:06:16+09:00"
translator: codex
stale: false
---

## ステータス

承認済み

## コンテキスト

ActiveContext フレームワークは、複数のステップにまたがり、慎重なオーケストレーションを必要とする可能性がある、長時間実行される非同期処理をサポートする必要があります。

たとえば、ある埋め込みモデルから別の埋め込みモデルへ切り替えるには、次が必要です。

1. 新しいベクターフィールドを作成する
1. すべてのドキュメントの埋め込みをバックフィルする
1. コレクションメタデータを更新する
1. 機能設定を同期する
1. 古いフィールドをクリーンアップする

### 既存アプローチの課題

**シンプルな Sidekiq Worker:**

- タスク依存関係の組み込みサポートがない
- 連鎖的な失敗を扱うのが難しい
- 複数ステップのワークフローを可視化できない
- チェーン内の個別ステップをリトライしにくい

**オーケストレーションサービス:**

- 状態管理が複雑
- クラッシュから復旧するのが難しい
- ワークフロー状態が永続化されない
- 長時間実行される処理をデバッグしにくい

## 決定

私たちは、長時間実行される非同期処理を管理するために [**ActiveContext Task Framework**](../active_context_tasks.md) を導入することを決定しました。これは、複数の順次ステップや依存ステップを伴う可能性がある複雑なワークフローを定義、実行、追跡するための構造化された方法を提供します。

---
title: "AI Context Abstraction Layer ADR-002: ActiveContext タスクフレームワーク"
description: "複雑で長時間実行されるオペレーションのためのフレームワーク導入に関する decision record"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/ai_context_abstraction_layer/decisions/002_active_context_tasks/
upstream_sha: c9aef34f52e9f619472aeed4981f6aaec80de2b3
lastmod: "2026-06-25T09:42:09+02:00"
translated_at: "2026-06-26T21:24:33+09:00"
translator: codex
stale: false
---

## ステータス

Accepted

## コンテキスト

ActiveContext フレームワークは、複数のステップにまたがり、慎重なオーケストレーションを必要とする可能性がある、長時間実行される非同期オペレーションをサポートする必要があります。

たとえば、ある埋め込みモデルから別の埋め込みモデルに切り替えるには、次が必要です。

1. 新しいベクトルフィールドを作成する
1. すべてのドキュメントの埋め込みをバックフィルする
1. Collection メタデータを更新する
1. 機能設定を同期する
1. 古いフィールドをクリーンアップする

### 既存アプローチの課題

**単純な Sidekiq Worker:**

- タスク依存関係の組み込みサポートがない
- カスケードする失敗を扱いにくい
- 複数ステップのワークフローを可視化できない
- チェーン内の個々のステップをリトライしにくい

**オーケストレーションサービス:**

- 状態管理が複雑
- クラッシュからの復旧が難しい
- ワークフロー状態の永続化がない
- 長時間実行されるオペレーションのデバッグが難しい

## 決定

私たちは、長時間実行される非同期オペレーションを管理するために、[**ActiveContext Task Framework**](../active_context_tasks.md)を導入することにしました。このフレームワークは、複数の連続したステップや依存関係のあるステップを伴う複雑なワークフローを定義、実行、追跡するための構造化された方法を提供します。

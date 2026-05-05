---
title: "Duo Workflow ADR 005: checkpoint フィールドを duo_messages に置き換えて非推奨にする"
owning-stage: "~devops::ai_powered"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/duo_workflow/decisions/005_deprecate_checkpoint_field/
upstream_sha: ec55f130cc95389b6faf798cebffd864abdbb4c5
translated_at: "2026-04-27T07:37:29Z"
translator: claude
stale: false
---

## コンテキスト

Duo Workflow が最初に開発されたとき、GraphQL API は LangGraph の生のチェックポイントデータを `checkpoint` フィールドを通じてクライアントに直接公開していました。このアプローチは、迅速なイテレーションを可能にし、機能を素早く動作させるためのショートカットとして採用されました。チェックポイントデータは、ネストされた JSON 構造として保存されたワークフロー状態の LangGraph 内部表現です。

クライアント（Web UI、IDE 拡張機能、CLI）はこの生のチェックポイントデータを以下の目的で消費していました:

- ユーザーへのチャット履歴の表示
- ワークフローの状態と進捗の表示
- ツール呼び出しとその結果のレンダリング
- エラー状態の表示

checkpoint フィールドは以下の両方で利用可能でした:

- `duoWorkflowWorkflows` クエリ（完全なワークフロー履歴の取得用）
- `duoWorkflowEvents` サブスクリプション（リアルタイム更新のストリーミング用）

## 問題点

生のチェックポイントデータは LangGraph の内部状態をクライアントに直接公開しており、3つの主な問題が生じていました:

1. **開発者体験**: 明確なスキーマのない深くネストされた JSON は、開発者が API を使用することを非常に困難にしました（[元の Issue](https://gitlab.com/gitlab-org/gitlab/-/work_items/535898#note_2447486353)）。ほとんどのチェックポイントデータは UI に無関係な内部状態であり、解析が必要な上、プロパティが存在することを保証するスキーマなしにアクセスする必要がありました。これにより、メンテナンスが困難で脆弱なクライアントサイドコードが生まれました。

2. **パフォーマンス**: 単純なワークフローで **3 MiB** のデータが転送され、個々のチェックポイントの更新が **150 KiB** に達していました。これにより、`p_duo_workflows_checkpoints` テーブルで大幅なイグレスコストとデータベースの増大が生じました。

3. **アーキテクチャの結合**: クライアントは抽象化層なしに LangGraph の内部に依存しており、フロントエンドコードを壊さずにバックエンドを進化させることを困難にしていました。

## 決定

ワークフローのチャット履歴のためのクリーンで構造化された API を提供する新しい `duo_messages` GraphQL フィールドを導入します。既存の `checkpoint` フィールドは後方互換性とデバッグのために非推奨としてマークされますが引き続き利用可能です。

`duo_messages` フィールドは Duo Workflow Service が LangGraph 状態とは別に維持している `ui_chat_log` からデータを取得し、明確に定義されたスキーマで UI に関連するデータのみを公開します。このフィールドは `duoWorkflowWorkflows`（完全な履歴用）と `duoWorkflowEvents`（ストリーミング更新用）の両方で利用可能です。

実装の詳細については、以下に参照されている MR を参照してください。

## メリット

- **削減されたペイロードサイズ**: UI に関連するデータのみが送信され、帯域幅とイグレスコストが大幅に削減されます
- **明確なスキーマ**: 明示的なフィールドを持つ明確に定義された型により、フロントエンド開発が簡単になり型の安全性が提供されます
- **クリーンな分離**: 永続化層（チェックポイント）とプレゼンテーション層（duo_messages）の間の明確な境界により、クライアントに影響を与えることなくバックエンドの最適化が可能になります
- **単一実装**: チェックポイントの解析ロジックは、クライアント全体（Web、IDE、CLI）に重複する代わりに1か所（バックエンド）に存在します
- **スムーズな移行**: 現在のアプローチにより、duo_messages がすべてのニーズを満たすことを検証しながら、クライアントが自分のペースで移行できます

## 検討された代替案

### クライアントサイドのチェックポイント解析ライブラリ

以下の理由で**却下されました**:

- ペイロードサイズやパフォーマンスの問題を解決しません
- 安定した API コントラクトを提供しません
- 複数の環境（Web、IDE、CLI など）にわたって解析ロジックが重複します

### インクリメンタル更新のための別個のストリーミング API

以下の理由で今後のイテレーションに**延期されました**:

- 破壊的な変更なしに duo_messages の上に構築できます
- より複雑なクライアントサイドの状態管理が必要です
- 現在のアプローチは、このオプションを開放したまま即時のメリットを提供します
- 決定に記載されているように、「スキーマを反復してサブスクリプションのためのより良い消費 API を作成できる」ためです

## 実装リファレンス

- [元の Issue: ui_chat_log をリクエストできるように DAP API を簡略化する](https://gitlab.com/gitlab-org/gitlab/-/work_items/535898)
- [バックエンド実装: duo_messages フィールドの公開](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/214015)
- [GraphQL スキーマの非推奨化](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/213959)
- [Web UI の duo_messages への移行](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/214016)
- [IDE 拡張機能の移行](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/214017)
- [関連: Duo Workflow Service チェックポイントのペイロードサイズの削減](https://gitlab.com/gitlab-org/gitlab/-/work_items/571913)

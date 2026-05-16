---
title: "Duo Workflow ADR 004: Workhorse を Duo Workflow Service のプロキシとして使用する"
owning-stage: "~devops::ai_powered"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/duo_workflow/decisions/004_workhorse_as_a_duo_workflow_service_proxy/
upstream_sha: ec55f130cc95389b6faf798cebffd864abdbb4c5
translated_at: "2026-04-27T07:37:29Z"
translator: claude
stale: false
lastmod: "2025-06-02T09:40:52+02:00"
---

## コンテキスト

Duo Workflow Service は Python で動作する gRPC サーバーであり、LangGraph を通じて多段階の LLM インタラクションをオーケストレートします。Duo Workflow エグゼキューターは、ローカル環境で実行し、Duo Workflow Service に環境に関する追加情報を動的に送信し、レスポンスを処理するクライアントです。現在:

- GitLab Rails は Duo Workflow エグゼキューターが Duo Workflow Service と通信するための短期間トークンを生成します
- Duo Workflow エグゼキューターは Duo Workflow Service と直接通信して追加情報を送信しレスポンスを取得します
- Duo Workflow エグゼキューターは GitLab API リクエストが実行される必要がある場合（GitLab 関連情報（プロジェクト、マージリクエスト）の取得だけでなく、ワークフローの現在の状態を保存する内部目的にも）プロキシとして機能します

![現在のアーキテクチャ](/images/engineering/architecture/design-documents/duo_workflow/diagrams/duo-workflow-workhorse-current-architecture.png)

## 問題点

- リクエストは Duo Workflow エグゼキューターによってプロキシされており、追加の遅延が発生し、GitLab Rails から Duo Workflow Service への機密情報の送信が制限されます（例: セルフホストモデルの API キー）
- Duo Workflow エグゼキューターを実行している環境は、追加の場所（Duo Workflow Service）へのアクセスが必要です。これは接続が Workhorse を経由する場合と異なり、管理者ではなく個々のユーザーがシステムを正しく設定するための負担が生じます
- 現在のソリューションはエグゼキューターが GRPC で通信することを必要とします。WebSocket をフォールバックとして追加できますが、デプロイされたサービス間の通信には GRPC が依然として好まれる可能性があります。gRPC と WebSocket の比較については[この ADR](002_add_websocket_support) を参照してください。

## 決定

[Workhorse](https://docs.gitlab.com/development/workhorse/) を Duo Workflow Service のプロキシとして使用します。GitLab Workhorse はリソース集約的で長時間実行されるリクエストを処理するために設計された GitLab 向けのスマートリバースプロキシです。Duo Workflow エグゼキューター、Duo Workflow Service、GitLab Rails 間の通信を処理するための WebSocket エンドポイントを提供できます:

- Duo Workflow エグゼキューターはワークフローが開始されると Workhorse との WebSocket 接続を開き、認証と認可のために GitLab プライベートトークンを送信します
- Workhorse は Rails に HTTP リクエストを送信して接続を認可します
- Workhorse は GitLab Rails が提供した認証情報を使用して Duo Workflow Service との gRPC 接続を開始し、双方向通信を開始します
- gRPC アクションが受信された場合:
  - run-http リクエストアクションの場合、Workhorse は WebSocket 初期化時に提供された認証情報を使用して Rails に直接リクエストを実行します
  - それ以外の場合、Workhorse はアクションを JSON にシリアライズして Duo Workflow エグゼキューターに転送します。レスポンスを受け取ると、Workhorse は JSON を gRPC バイナリデータにシリアライズして Duo Workflow Service に送信します

![提案されたアーキテクチャ](/images/engineering/architecture/design-documents/duo_workflow/diagrams/duo-workflow-workhorse-proposed-architecture.png)

## PoC

以下の MR は、Duo Workflow Service トークンを発行せずに、Rails、Workhorse、Duo Workflow Service、IDE 間の通信を示しています:

- [Rails + Workhorse](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/191755):
  - Workhorse の ws ルート `api/v4/ai/duo_workflows/workflows/<id>/connect` のハンドラーを追加します
  - Rails の `api/v4/ai/duo_workflows/workflows/<id>/connect` の認可ハンドラーを追加し、Duo Workflow Service に関連する情報を Workhorse に渡します
  - Workhorse に、Duo Workflow Service との gRPC 通信とエグゼキューターとの WebSocket ハンドリングを実装します
- [GitLab LSP](https://gitlab.com/gitlab-org/editor-extensions/gitlab-lsp/-/merge_requests/1720)
  - GitLab API プライベートトークンを使用して Workhorse との WebSocket 接続を初期化します
  - Node エグゼキューターでワークフローアクションを処理します

## 長所

- 短期間の Duo Workflow トークンが不要になり、一般的な GitLab Personal Access Token を使用できます
- gRPC を使用して追加サービスに接続する必要がなくなり、Duo Workflow エグゼキューターは WebSocket を使用して GitLab インスタンスに接続します
- Duo Workflow エグゼキューターが GitLab API リクエストをプロキシしなくなります:
  - API リクエストが大幅に高速に実行されます
  - 状態管理などの内部情報がクライアントから隠蔽されます
  - Rails と Duo Workflow Service の間で機密情報を交換できます
- Duo Workflow Service は WebSocket 接続ハンドリングのような追加の複雑さを提供することなく、gRPC サーバーのみとして動作し続けます
- Workhorse は読み取り専用操作のためにデプロイされた Duo Workflow エグゼキューターとして機能できます:
  - ワークフローが読み取り専用の GitLab API リクエストのみで操作する場合（例えば Web UI のエージェントチャット）
  - この場合、クライアントはエグゼキューターロジックを持つ必要がなく、Workhorse が WebSocket 経由で送信する結果に反応するだけでよいです

## 短所

- パフォーマンス関連のリスク。エグゼキューターロジックの一部がデプロイされた環境で実行されることで、パフォーマンスの問題がより可視化され、より大きな影響を持つことになります
- エグゼキューターロジックが第3のコンポーネントに漏れます（Golang Duo Workflow エグゼキューター、GitLab LSP の Node Duo Workflow エグゼキューター、そして今度は Workhorse の一部）。ただし、Duo Workflow Service と直接通信する必要がなくなるため実装が簡略化されます
- Workhorse が実行する API リクエストは渡されたプライベートトークンを認証に使用します。これらの呼び出しに複合 ID を持たせたい場合は、OAuth トークンを生成して Workhorse に渡す必要があります。可能ですが、追加の責任と不必要な複雑さが加わります
- エグゼキューターから Duo Workflow Service までステートフルな接続が必要なため、WebSocket 接続が切断されるたびに gRPC 接続を削除する必要があります（逆も同様）。これがないと、WebSocket の再接続が永続的な gRPC 接続を持たない誤った Workhorse プロセスに到達する可能性があります。WebSocket（再接続なし）の信頼性によっては、ワークフローが途中で切れることが多くなる可能性があります。また、接続が切れる確率が2倍になります。当初は WebSocket が切断された場合は常に gRPC 接続を適切に削除し、クライアントは再接続時にワークフローを再開する必要があります。切断が頻繁すぎる場合は、https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/13685#note_2515723211 に従って、Workhorse サーバー間の信頼性の高いトランスポートとして Redis を使用することを検討します

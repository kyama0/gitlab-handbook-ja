---
title: "Duo Workflow ADR 003: Duo Workflow エグゼキューターに TypeScript を使用する"
owning-stage: "~devops::ai_powered"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/duo_workflow/decisions/003_rewrite_workflow_executor_in_typescript/
upstream_sha: ec55f130cc95389b6faf798cebffd864abdbb4c5
translated_at: "2026-04-27T07:37:29Z"
translator: claude
stale: false
---

## コンテキスト

Duo Workflow Service は Python で動作し、LangGraph を介した多段階の LLM インタラクションをオーケストレートします。エグゼキューターは現在、Language Server がワークフローの実行を開始するためにスポーンする別の Go バイナリとして存在しています。これにより複雑さが増しています: LSP は TypeScript ベースですが、実行のために Go プロセスをスポーンします。LSP へのリアルタイムフィードバック、ストリーミング、エラーハンドリングのための通信がより制限されています。また、Go エグゼキューター内でのローカル接続とネットワークセットアップの処理が重複しており、これらはすでに LSP で処理されています。現在、リモート実行シナリオ（CI またはコンテナでの実行）も同じ Go エグゼキューターを使用しています。

## 提案

**TypeScript ライブラリのビルド**: Duo Workflow Service コードベース内に TypeScript ライブラリを導入し、npm モジュールとして公開します。このライブラリは LSP ベースのエグゼキューターに必要な型とインターフェースを定義します。
**エグゼキューターロジックを LSP に組み込む**: 別のバイナリをスポーンする代わりに、エグゼキューターロジックを直接 Language Server 自体にバンドルします。これにより以下が可能になります:

1. Language Server と Duo Workflow Service 間のリアルタイム双方向通信。
2. 合理化されたエラーハンドリング: 有効期限切れのトークン、リントエラー、その他の関連メッセージを効率的に双方向で送信できます。
3. より良い開発者エルゴノミクス: 別のコンパイル済みバイナリに依存するのではなく、すべてが一か所（LSP）にあります。

エグゼキューターを LSP に組み込むことで、間接層を取り除き、システムオーバーヘッドを削減し、リアルタイムフィードバックメカニズムを改善します。この変更はまた、部分的な結果のライブストリーミング、即時のトークン更新、より良いエラーレポートなど、より高度な機能の基盤を築きます。

## 決定

IDE 環境でのローカル実行のために **TypeScript エグゼキューターライブラリを採用することを決定しました**。

- 既存の Go エグゼキューターは短期間、CI/リモート実行または軽量なコンパイル済みバイナリを必要とする環境向けに残ります。
- 長期的には、[Node executable](https://nodejs.org/docs/latest-v20.x/api/single-executable-applications.html)、[bun](https://bun.sh/docs/bundler/executables)、または [deno](https://docs.deno.com/runtime/reference/cli/compile/) を使用したコンパイル済み TypeScript バイナリが必要かどうか、または両方のエグゼキューターを維持することが好ましいかどうかを決定します。

## 影響

- **長所**
  - LSP とエグゼキューター間のダイレクトなインプロセス通信（別のバイナリスポーンなし）。  
  - 共有型定義とツーリングにより、LSP に取り組む開発者の摩擦が削減されます。  
  - ストリーミング、インクリメンタルフィードバック、リンティング、トークン更新フローの組み込みが容易になります。
  - 配布が容易: LSP はエグゼキューターバイナリをダウンロードする必要がなくなり、LSP 自体と一緒に更新されます。

- **短所**  
  - エグゼキューターロジックの npm パッケージをビルドして公開するか、直接 LSP リポジトリにマージする必要があります。  
  - コンパイル済み TS バイナリと Go バイナリの間のパフォーマンスとサイズの差異。  
  - リモート実行フローが進化する間の短期間における2つのエグゼキューター（TS と Go）のメンテナンス。  

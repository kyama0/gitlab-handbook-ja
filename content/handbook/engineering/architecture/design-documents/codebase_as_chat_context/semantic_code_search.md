---
title: "Semantic Code Search"
description: "Semantic Code Search の設計文書"
status: implemented
creation-date: "2026-06-29"
authors: [ "@partiaga" ]
coaches: []
dris: [ "@wortschi" ]
owning-stage: "~devops::ai platform"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/codebase_as_chat_context/semantic_code_search/
upstream_sha: e829b207a53856c23a25197426cca945626ade8a
lastmod: "2026-07-01T09:36:08+02:00"
translated_at: "2026-07-05T01:37:53+09:00"
translator: codex
stale: false
---

<!--

The canonical place for the latest set of instructions (and the likely source
of this file) is
[content/handbook/engineering/architecture/design-documents/_template.md](https://gitlab.com/gitlab-com/content-sites/handbook/-/blob/main/content/handbook/engineering/architecture/design-documents/_template.md).

Document statuses you can use:

- "proposed"
- "accepted"
- "ongoing"
- "implemented"
- "postponed"
- "rejected"

-->

<!-- Design Documents often contain forward-looking statements -->
<!-- vale gitlab.FutureTense = NO -->

<!-- This renders the design document header on the detail page, so don't remove it-->
{{< engineering/design-document-header >}}

## 概要

当初 Classic Duo Chat 向けに実装された [Codebase as Chat Context](_index.md) 機能は、**Semantic Code Search** 機能として、他のシステム（Agentic Duo Chat など）でも利用できるようになります。

## ActiveContext クエリの使用

Semantic Code Search は `Ai::ActiveContext::Queries::Code` クラスによって支えられており、[Active Context フレームワーク](https://gitlab.com/gitlab-org/gitlab/-/tree/master/gems/gitlab-active-context)を使用して次を行います：

1. 設定された[検索エンベディングモデル](../ai_context_abstraction_layer/embedding_models.md#embedding-model-metadata)を使用して、自然言語クエリからベクトルエンベディングを生成する
1. 生成されたエンベディングを使用して、設定されたベクトルストレージ上で距離ベースの検索（k-nearest neighbors）を実行する

プロジェクトは、そのプロジェクトで初めて Semantic Code Search が実行されたときにインデックス化されます。
詳細については、[Ad-hoc Indexing document](ad_hoc_indexing.md)を参照してください。

## REST API での Semantic Code Search {#semantic-code-search-on-the-rest-api}

Semantic Code Search は REST API エンドポイントで公開され、このエンドポイントは `Ai::ActiveContext::Queries::Code` クラスを呼び出します。

### エンドポイント詳細

- **リクエスト URL:** `/api/v4/projects/:id/(-/)search/semantic`
- **パラメーター**:
  - `id` (required): プロジェクト ID または URL エンコードされたパス
  - `q` (required): 自然言語検索クエリ
  - `directory_path` (optional): 検索を特定のディレクトリに制限
  - `knn` (optional): 取得する最近傍の数（デフォルト：64）
  - `limit` (optional): 返す結果の最大数（デフォルト：20）

### 後処理

クエリ実行後、結果には 3 つの変換が行われます：

1. **Duo コンテキスト除外フィルタリング：** プロジェクトのコンテキスト除外ルール（機密ファイル、パスワード、設定）に一致する結果を削除します
2. **ファイルグループ化：** 結果をファイルパスでグループ化し、重複する行範囲をマージします：
   - 各ファイルに含まれるもの：path、blob_id、file_url、score、snippet_ranges
   - スニペット範囲に含まれるもの：start_line、end_line、content、個別の score
3. **信頼度計算：** 結果全体のスコア分布に基づいて、全体的な信頼度レベル（high/medium/low/unknown）を計算します

### イベントトラッキング

`search_code_with_semantic_search` 内部イベントは、次の内容で分析用にトラッキングされます：

```ruby
::Gitlab::InternalEvents.track_event(
  'search_code_with_semantic_search',
  user: current_user,
  project: user_project,
  namespace: user_project.root_namespace
)
```

### レスポンス構造

```json
{
  "confidence": "high|medium|low|unknown",
  "results": [
    {
      "path": "app/models/user.rb",
      "blob_id": "abc123def456",
      "file_url": "https://gitlab.com/group/project/-/blob/main/user.rb",
      "score": 0.92,
      "snippet_ranges": [
        {
          "start_line": 42,
          "end_line": 44,
          "content": "def authenticate\n  ...\nend",
          "score": 0.85
        }
      ]
    }
  ]
}
```

## GitLab MCP Server での Semantic Code Search

Agentic Duo Chat で Semantic Code Search を利用できるようにするため、GitLab MCP Server 上の `semantic_code_search` ツールとして提供されます。このツールは [REST API エンドポイント](#semantic-code-search-on-the-rest-api)によって支えられているため、コードの重複を避けられます。

### MCP ツール登録

Semantic Code Search API エンドポイントは、Grape のルート設定を通じて読み取り専用の MCP ツールとして登録されます：

```ruby
class EE::API::Search::SemanticCodeSearch
  resource :projects do
    route_setting :mcp,
      tool_name: :semantic_code_search,
      params: [:id, :q, :directory_path, :knn, :limit],
      annotations: { readOnlyHint: true },
      resource_name: "project"
    get ':id/(-/)search/semantic' do
      # endpoint implementation
    end
  end
end
```

### MCP ツール検出

1. MCP クライアントは MCP Server の `list_tools` を呼び出します
1. MCP `list_tools` ハンドラーは MCP Tool Manager を呼び出して、利用可能なすべての MCP ツールを取得します
1. `semantic_code_search` を含む API に支えられたツールについて、MCP Tool Manager は `route_setting :mcp` を持つすべてのルートを検出します
1. `Mcp::Tools::ApiTool` クラスは `semantic_code_search` 用に次のスキーマを動的に生成します：

    ```json
    {
      "type": "object",
      "properties": {
        "id": { "type": "string", "description": "The ID or URL-encoded path of the project" },
        "q": { "type": "string", "description": "Natural language search query" },
        "directory_path": { "type": "string", "description": "Restrict search to files under this directory path" },
        "knn": { "type": "integer", "description": "Number of nearest neighbours to retrieve" },
        "limit": { "type": "integer", "description": "Maximum number of results to return" }
      },
      "required": ["id", "q"],
      "additionalProperties": false
    }
    ```

1. MCP Tool Manager は、説明とスキーマを含むツール一覧を `list_tools` ハンドラーに返します
1. `list_tools` ハンドラーは、説明とスキーマを含むツール一覧を MCP クライアントに返します

### MCP ツール実行

1. MCP クライアントは `call_tool` ツールを呼び出し、`tool: "semantic_code_search"` を指定して、`list_tools` が返したスキーマに基づく引数を提供します：

    ```json
    {
      "tool": "semantic_code_search",
      "arguments": {
        "id": "gitlab-org/gitlab",
        "q": "authentication middleware",
        "directory_path": "app/services/",
        "limit": 10
      }
    }
    ```

1. MCP `call_tool` ハンドラーは MCP Tool Manager を通じて `semantic_code_search` ツールを取得します
1. MCP Tool Manager は、Semantic Code Search REST API エンドポイントにルーティングする `Mcp::Tools::ApiTool` オブジェクトを返します
1. `call_tool` ハンドラーは `Mcp::Tools::ApiTool` オブジェクトを呼び出し、そのオブジェクトが Semantic Code Search REST API にリクエストを送信します
1. `call_tool` ハンドラーは REST API の結果を MCP クライアントに返します

### Agents との統合

GitLab MCP Server に接続された AI エージェントは、推論ループの一部として Semantic Code Search を使用できます：

1. **コンテキスト収集**：エージェントがコード構造を理解したり関連する実装を見つけたりする必要がある場合、探しているものを説明する自然言語クエリを組み立てます
2. **セマンティック取得**：MCP ツールはファイルパスと行番号を含むランク付けされた結果を返し、エージェントがリポジトリ全体を解析することなく正確な場所を得られるようにします
3. **フォーカスした分析**：エージェントは返された場所を使用して特定のファイルやセクションを取得でき、トークン使用量を削減し、レスポンス品質を向上させます
4. **反復的な絞り込み**：エージェントは初期結果に基づいてクエリを絞り込み、必要なコードそのものへ段階的に近づけます

## `glab` CLI での Semantic Code Search

Semantic Code Search はネイティブの `glab` コマンドとして公開され、CLI ファーストのエージェント、CI/CD パイプライン、スクリプトが MCP クライアントやサーバーを必要とせず Semantic Search にアクセスできるようにします。

内部では、`glab search semantic` コマンドが [REST API エンドポイント](#semantic-code-search-on-the-rest-api)を呼び出します。

### コマンドインターフェース

```shell
glab search semantic [flags]
```

`flags` は REST API エンドポイントが受け付けるパラメーターに対応します。詳細は [`glab` CLI ドキュメント](https://docs.gitlab.com/cli/search/semantic/)に記載されています。

### アーキテクチャ

`glab` CLI 実装は、Command レイヤーと API Client レイヤーで構成されます：

1. **Command レイヤー** (`internal/commands/search/semantic/semantic.go`):
   - コマンドライン引数とフラグを解析します
   - git remote からプロジェクトを解決します
   - semantic code search 用のリクエスト URL セグメント `/projects/:id/search/semantic` を構築します
   - リクエストを API client レイヤーに委譲します
   - `--output` フラグに基づいて出力をフォーマットします
2. **API Client レイヤー** (`internal/api/client.go`):
   - 完全な API エンドポイント（`/api/v4/<api_endpoint_url>`）への実際のリクエスト呼び出しを処理します
   - glab の設定済み認証情報（personal access token、OAuth、gPAT）を使用して認証を処理します
   - REST API からの JSON レスポンスを解析します

### ユースケース

- **CLI ファーストのエージェント**：Claude Code や DAP agents などのエージェントは、より低いオーバーヘッドで Semantic Search を呼び出せます
- **CI/CD パイプラインとスクリプト**：MCP クライアントを利用できないあらゆるワークフロー
- **アドホックな開発者クエリ**：IDE/MCP のセットアップなしで Semantic Search を実行するアナリスト

### Agents との統合

`glab` を semantic code search に使用するエージェントは、次のパターンに従います：

1. **クエリ作成**：エージェントは見つける必要があるものを説明する自然言語クエリを構築します
2. **CLI 呼び出し**：エージェントは `glab search semantic <query> --project <id> --output json` を実行します
3. **結果解析**：エージェントは JSON レスポンスを解析してファイルパスと行番号を抽出します
4. **コード取得**：エージェントは `glab repo view` または `glab api` を使用して特定のファイル内容を取得します
5. **分析**：エージェントは取得したコードを分析し、推論とレスポンスに反映します

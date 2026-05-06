---
title: "Vertex AI Search"
status: proposed
creation-date: "2024-01-25"
authors: [ "@shinya.maeda", "@mikolaj_wawrzyniak" ]
coach: [ "@stanhu" ]
approvers: [ "@pwietchner", "@oregand", "@tlinz" ]
owning-stage: "~devops::ai-powered"
participating-stages: ["~devops::data stores", "~devops::create"]
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/gitlab_duo_rag/vertex_ai_search/
upstream_sha: 9e852ac812142230dfe1e1db31be2862cd857cfd
translated_at: "2026-04-27T10:36:33Z"
translator: claude
stale: false
---

## GitLab ドキュメントの取得

- 統計情報（2024 年 1 月時点）:
  - データ種別: 自然言語で記述された Markdown（非構造化）
  - データアクセスレベル: グリーン（認証不要）
  - データソース: `https://gitlab.com/gitlab-org/gitlab/-/blob/master/doc`
  - データサイズ: 約 56,000,000 バイト。2194 ページ。
  - サービス: `https://docs.gitlab.com/`（[ソースリポジトリ](https://gitlab.com/gitlab-org/gitlab-docs)）
  - ユーザー入力の例: "Issue を作成するにはどうすればよいですか？"
  - AI 生成レスポンスの例: "Issue を作成するには:\n\n左サイドバーで「Search or go to」を選択し、プロジェクトを見つけます。\n\n左サイドバーで「Plan > Issues」を選択し、右上隅の「New issue」を選択します。"

[GitLab ドキュメント](https://gitlab.com/gitlab-org/gitlab-docs/-/blob/main/doc/architecture.md) は、SaaS（GitLab.com および Dedicated）およびセルフマネージド向けに GitLab ドキュメントを提供する SSoT サービスです。
ユーザーが GitLab インスタンス内のドキュメントリンクにアクセスすると、16.0 以降は（エアギャップ環境を除き）[そのサービスにリダイレクト](https://gitlab.com/groups/gitlab-org/-/epics/11600#note_1690083049) されます。
また、`docs.gitlab.com` の現在の検索バックエンドは [Vertex AI Search](https://cloud.google.com/enterprise-search?hl=en) に移行する必要があります。詳細は[この Issue](https://gitlab.com/gitlab-com/legal-and-compliance/-/issues/1876)（GitLab メンバー限定）を参照してください。

GitLab Duo Chat のドキュメントツール向けに、Vertex AI Search を使用した新しいセマンティック検索 API を導入します。

### Vertex AI Search でのセットアップ

GitLab の各バージョン向けに[検索アプリを作成](https://cloud.google.com/generative-ai-app-builder/docs/create-engine-es) します。
これらのプロセスは、CI/CD パイプラインを通じて [GitLab Documentation プロジェクト](https://gitlab.com/gitlab-org/gitlab-docs/-/blob/main/doc/architecture.md) で自動化される見込みです。

1. 新しい Bigquery テーブルを作成する（例: `gitlab-docs-latest` または `gitlab-docs-v16.4`）。
1. リポジトリからドキュメントをダウンロードする（例: `gitlab-org/gitlab/doc`、`gitlab-org/gitlab-runner/docs`、`gitlab-org/omnibus-gitlab/doc`）。
1. Markdown のヘッダーで分割し、メタデータ（URL やタイトルなど）を生成する。
1. Bigquery テーブルに行を挿入する。
1. [検索アプリを作成する](https://cloud.google.com/generative-ai-app-builder/docs/create-engine-es)。

実装の詳細については、[このノートブック](https://colab.research.google.com/drive/1XxYPWkNBnwZ0UG1aJ0Pjb2gfYmLnrHft?usp=sharing) を参照してください。
最新バージョンのデータは、[Data Store API](https://cloud.google.com/generative-ai-app-builder/docs/reference/rpc) を使用したナイトリービルドで毎日更新されます。

### AI Gateway API

API 設計は [AI Gateway](https://docs.gitlab.com/ee/architecture/blueprints/ai_gateway/) の既存パターンに従います。

```plaintext
POST /v1/search/docs
```

```json
{
  "type": "search",
  "metadata": {
    "source": "GitLab EE",
    "version": "16.3"         // 古い GitLab インスタンス向けに検索アプリを切り替えるために使用
  },
  "payload": {
    "query": "How can I create an issue?",
    "params": {               // Vertex AI Search のパラメータ
      "page_size": 10,
      "filter": "",
    },
    "provider": "vertex-ai"
  }
}
```

レスポンスには検索結果が含まれます。例:

```json
{
  "response": {
    "results": [
      {
        "id": "d0454e6098773a4a4ebb613946aadd89",
        "content": "\nTo create an issue from a group:  \n1. On the left sidebar, ...",
        "metadata": {
          "Header1": "Create an issue",
          "Header2": "From a group",
          "url": "https://docs.gitlab.com/ee/user/project/issues/create_issues.html"
        }
      }
    ]
  },
  "metadata": {
    "provider": "vertex-ai"
  }
}
```

Vertex AI API の仕様については、[SearchRequest](https://cloud.google.com/python/docs/reference/discoveryengine/latest/google.cloud.discoveryengine_v1.types.SearchRequest) および [SearchResponse](https://cloud.google.com/python/docs/reference/discoveryengine/latest/google.cloud.discoveryengine_v1.types.SearchResponse) を参照してください。

### 概念実証（PoC）

- [GitLab-Rails MR](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/144719)
- [AI Gateway MR](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist/-/merge_requests/642)
- [Vertex AI Search サービス](https://console.cloud.google.com/gen-app-builder/engines?referrer=search&project=ai-enablement-dev-69497ba7)
- [Google Colab ノートブック](https://colab.research.google.com/drive/1XxYPWkNBnwZ0UG1aJ0Pjb2gfYmLnrHft?usp=sharing)
- [デモ動画](https://youtu.be/ipEpMt-U6rQ?feature=shared)（注: この動画ではウェブサイト URL がデータソースとして使用されています）

#### 評価スコア

以下は [Prompt Library](https://gitlab.com/gitlab-org/modelops/ai-model-validation-and-research/ai-evaluation/prompt-library) によって生成された評価スコアです。

|セットアップ|正確性|網羅性|可読性|評価モデル|
|---|---|---|---|---|
|新方式（Vertex AI Search 使用）|3.7209302325581382|3.6976744186046511|3.9069767441860455|claude-2|
|現行方式（GitLab-Rails と PGVector による手動埋め込み）|3.7441860465116279|3.6976744186046511|3.9767441860465116|claude-2|

{{% details summary="データセット" %}}
- 入力 Bigquery テーブル: `dev-ai-research-0e2f8974.duo_chat_external.documentation__input_v1`
- 出力 Bigquery テーブル:
  - `dev-ai-research-0e2f8974.duo_chat_external_results.sm_doc_tool_vertex_ai_search`
  - `dev-ai-research-0e2f8974.duo_chat_external_results.sm_doc_tool_legacy`
- コマンド: `promptlib duo-chat eval --config-file /eval/data/config/duochat_eval_config.json`
{{% /details %}}

### 完了予定時期

- マイルストーン N:
  - CI/CD 自動化を含む Vertex AI Search のセットアップ。
  - AI Gateway への `/v1/search/docs` エンドポイントの導入。
  - GitLab-Rails の検索ロジックの更新。
  - フィーチャーフラグのクリーンアップ。

合計マイルストーン数: 1

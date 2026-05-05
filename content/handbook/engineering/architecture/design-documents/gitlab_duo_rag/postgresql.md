---
title: "PostgreSQL"
status: proposed
creation-date: "2024-01-25"
authors: [ "@shinya.maeda", "@mikolaj_wawrzyniak" ]
coach: [ "@stanhu" ]
approvers: [ "@pwietchner", "@oregand", "@tlinz" ]
owning-stage: "~devops::ai-powered"
participating-stages: ["~devops::data stores", "~devops::create"]
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/gitlab_duo_rag/postgresql/
upstream_sha: 9e852ac812142230dfe1e1db31be2862cd857cfd
translated_at: "2026-04-27T10:36:33Z"
translator: claude
stale: false
---

## GitLab ドキュメントの取得

GitLab Duo チャットの RAG において、関連ドキュメントを検索するために現在 PGVector が使用されています。

`geo` および `main` と並んで独立した `embedding` データベースが稼働しており、`pg-vector` 拡張がインストールされ、GitLab ドキュメントの埋め込みが格納されています。

- 統計情報（2024 年 1 月時点）:
  - データ種別: 自然言語で記述された Markdown（非構造化）
  - データアクセスレベル: グリーン（認証不要）
  - データソース: `https://gitlab.com/gitlab-org/gitlab/-/blob/master/doc`
  - データサイズ: `vertex_gitlab_docs` に 147 MB。2194 ページ。
  - サービス: `https://docs.gitlab.com/`（[ソースリポジトリ](https://gitlab.com/gitlab-org/gitlab-docs)）
  - ユーザー入力の例: "Issue を作成するにはどうすればよいですか？"
  - AI 生成レスポンスの例: "Issue を作成するには:\n\n左サイドバーで「Search or go to」を選択し、プロジェクトを見つけます。\n\n左サイドバーで「Plan > Issues」を選択し、右上隅の「New issue」を選択します。"

### データソースとの埋め込み同期

GitLab.com で現在稼働している同期プロセスの概要は以下の通りです:

1. GitLab インスタンスのドキュメントファイルを読み込む（例: `doc/**/*.md`）。
1. 各ファイルのチェックサムを比較して、新規・更新・削除されたドキュメントを検出する。
1. ドキュメントが追加または更新された場合:
   1. 以下の方針でドキュメントを分割する:
      - テキストスプリッター: 改行（`\n`）で分割した後、100〜1500 文字ずつ分割する。
   1. `textembedding-gecko` モデル（768 次元）からチャンクの埋め込みを一括取得する。
   1. 埋め込みを `vertex_gitlab_docs` テーブルに一括挿入する。
   1. 古い埋め込みをクリーンアップする。
1. ドキュメントが削除された場合:
   1. そのページの埋め込みを削除する。

現時点で、GitLab.com の `vertex_gitlab_docs` テーブルには 17,345 行（チャンク）あります。

セルフマネージドインスタンスについては、AI Gateway と GCP の Cloud Storage から埋め込みを提供しているため、上記のプロセスをより簡潔にできます:

1. AI Gateway API を通じて Cloud Storage から埋め込みパッケージをダウンロードする。
1. 埋め込みを `vertex_gitlab_docs` テーブルに一括挿入する。
1. 古い埋め込みを削除する。

この埋め込みパッケージは GitLab の毎月のリリース前に生成されます。
Sidekiq のクーロンワーカーが埋め込みのバージョンと GitLab のバージョンを比較して自動的に埋め込みを更新します。
古くなっている場合は新しい埋め込みパッケージをダウンロードします。

さらに、毎日（または毎 grpd デプロイのたびに）パッケージを生成することで、SaaS とセルフマネージドのビジネスロジックを統合できます。
これにより、ビジネスロジックの障害点を減らし、セルフマネージドユーザーから報告された Issue を再現しやすくなります。

現在のテーブルスキーマは以下の通りです:

```sql
CREATE TABLE vertex_gitlab_docs (
    id bigint NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    version integer DEFAULT 0 NOT NULL,                                 -- 古い埋め込みを新しいものに置き換えるため（例: ドキュメントが更新された場合）
    embedding vector(768),                                              -- チャンクのベクトル表現
    url text NOT NULL,
    content text NOT NULL,                                              -- チャンク化されたデータ
    metadata jsonb NOT NULL,                                            -- 追加メタデータ（ページ URL、ファイル名など）
    CONSTRAINT check_2e35a254ce CHECK ((char_length(url) <= 2048)),
    CONSTRAINT check_93ca52e019 CHECK ((char_length(content) <= 32768))
);

CREATE INDEX index_vertex_gitlab_docs_on_version_and_metadata_source_and_id ON vertex_gitlab_docs USING btree (version, ((metadata ->> 'source'::text)), id);
CREATE INDEX index_vertex_gitlab_docs_on_version_where_embedding_is_null ON vertex_gitlab_docs USING btree (version) WHERE (embedding IS NULL);
```

### 検索（Retrieval）

埋め込みの準備ができたら、GitLab-Rails は以下の手順でチャンクを取得できます:

1. `textembedding-gecko` モデル（768 次元）からユーザー入力の埋め込みを取得する。
1. 最近傍を見つけるために `vertex_gitlab_docs` テーブルにクエリを実行する。例:

   ```sql
   SELECT *
   FROM vertex_gitlab_docs
   ORDER BY vertex_gitlab_docs.embedding <=> '[vectors of user input]'               -- コサイン距離による最近傍
   LIMIT 10
   ```

### セルフマネージドへの要件

GitLab のすべてのインスタンスで PostgreSQL が稼働していますが、インスタンスが埋め込み用の独立したデータベースを管理できるようにすること、またはメインデータベースに埋め込みを統合することは、1 マイルストーン以上の作業を要します。

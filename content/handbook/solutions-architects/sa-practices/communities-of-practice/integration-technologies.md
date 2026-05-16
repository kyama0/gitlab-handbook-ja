---
title: "Integration Technologies"
upstream_path: /handbook/solutions-architects/sa-practices/communities-of-practice/integration-technologies/
upstream_sha: fb150f3a4f831172cf23c7f0d75b0d6310a68972
translated_at: "2026-05-09T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-03-19T15:48:52+08:00"
---

これは、SDLC の各ステージにおいて、顧客との作業を通じて収集されたベストプラクティスのコレクションです。このリストは網羅的なものではありませんが、特定のステージや機能に関するミーティングに臨む際に SA にとって有用なポインタを提供します。

## トピックリスト

| トピック | 説明 |
| ----- | --------- |
| [1. Elasticsearch - 高度な検索](#advanced-search-with-elasticsearch) | Elasticsearch を有効化することで、GitLab のアーティファクトをより速く正確に検索する |

## Elasticsearch による高度な検索 {#advanced-search-with-elasticsearch}

検索は私たちの日常生活において非常に重要な側面です。近隣のレストランへの案内をするナビゲーションアプリの利用から、母国語にない単語を翻訳することまで、検索機能は高速で正確、かつ柔軟であり、可能な限り関連性の高い結果を得られることが極めて重要です。

Elasticsearch との統合により、[Lucene](https://lucene.apache.org/) ライブラリを活用して GitLab ユーザー向けの高度な検索機能を提供できます。

### アーキテクチャ

Elasticsearch はクラスタリングを活用してノード全体で検索、タスクの分散、インデックス作成を行い、高性能な検索を実現します。テスト環境にデプロイされている場合を除き、通常 Elasticsearch クラスタは [クォーラム](https://www.elastic.co/guide/en/elasticsearch/reference/master/modules-discovery-quorums.html) を確立するために少なくとも 3 ノードを持つべきです。

クラスタが拡大するにつれ、ユーザーの並行性を向上させたり、[レジリエンシー](https://www.elastic.co/guide/en/elasticsearch/reference/current/scalability.html) を向上させるために、より多くのノードをクラスタに追加できます。

### インストールと統合

[グローバルサーチチーム](https://gitlab.slack.com/archives/C3TMLK465) は、Elasticsearch のセットアップと GitLab との統合に関する基本的な「ノウハウ」について [ページ](https://docs.gitlab.com/ee/integration/advanced_search/elasticsearch.html) を維持しています。

#### インストールオプション

Elasticsearch は、ほとんどの [プラットフォーム](https://www.elastic.co/guide/en/elasticsearch/reference/current/install-elasticsearch.html) にインストールできます。お客様に Kubernetes の採用を推奨することと一貫して、Elasticsearch にも公式の [Kubernetes operator](https://www.elastic.co/blog/introducing-elastic-cloud-on-kubernetes-the-elasticsearch-operator-and-beyond) と [docker image](https://www.docker.elastic.co/) があり、デプロイプロセスを簡素化し、検索トラフィックに応じてクラスタを迅速にスケールアウトすることを支援します。

### デモリソースとサンプル

デモサンプル:

- [最近表示された候補](https://www.youtube.com/watch?v=a1Y9927eC4I) [VIDEO]
- [高度な検索構文](https://docs.gitlab.com/ee/user/search/advanced_search.html)

### FAQ

**質問: Elasticsearch を GitLab と同じホストで実行することを推奨しますか？**

**回答:** いいえ。Elasticsearch は JVM [ヒープ](https://www.elastic.co/guide/en/elasticsearch/reference/current/important-settings.html#heap-size-settings) に割り当てられていないメモリとファイルディスクリプタを消費します（例: 結果のキャッシング、集計など）。その結果、さまざまなシステムリソースの競合が発生し、セットアップ全体が不安定になる可能性があります。

**質問: Elasticsearch の操作はトランザクショナルですか？**

**回答:** いいえ、デフォルトではそうではありません。Elasticsearch は [ACID](https://en.wikipedia.org/wiki/ACID) 準拠であるよう設計されていません。

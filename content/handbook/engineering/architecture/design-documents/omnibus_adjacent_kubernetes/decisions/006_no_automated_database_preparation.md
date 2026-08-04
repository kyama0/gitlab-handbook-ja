---
title: "GitLab Omnibus-Adjacent Kubernetes ADR 006：OAK コンポーネントのデータベース準備を自動化しない"
description: "OAK の高度なコンポーネント向けデータベースプロビジョニングに関する決定：Omnibus は高度なコンポーネントのデータベースを自動的に作成または設定しません。"
owning-stage: "~devops::gitlab delivery"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/omnibus_adjacent_kubernetes/decisions/006_no_automated_database_preparation/
upstream_sha: "a2af0b1d81734a87d89ce13f0302597755181359"
lastmod: "2026-08-04T10:45:08-04:00"
translated_at: "2026-08-05T06:33:12+09:00"
translator: codex
stale: false
---

## コンテキスト

OAK の高度なコンポーネント（OpenBao など）は、動作に PostgreSQL データベースを必要とする場合があります。Omnibus GitLab は、[MR!9440](https://gitlab.com/gitlab-org/omnibus-gitlab/-/merge_requests/9440)で導入された `postgresql['component_databases']` フレームワークを通じて、Rails 以外のコンポーネント向け論理データベースをすでにサポートしています。このフレームワークにより、運用者は `gitlab.rb` でコンポーネントデータベースを宣言し、`gitlab-ctl reconfigure` の実行時に Omnibus で必要な PostgreSQL のロール、データベース、スキーマ、拡張機能を作成できます。

運用者が OAK 設定を通じて高度なコンポーネントを有効にしたとき、Omnibus がそのデータベースを自動的にプロビジョニングすべきでしょうか。それとも、運用者がデータベースを明示的に設定すべきでしょうか。次の 2 つの選択肢があります。

1. **選択肢 A — 自動プロビジョニング**：運用者がデータベースを必要とする OAK コンポーネントを有効にすると、Omnibus は、運用者が `gitlab.rb` にデータベース固有の設定を追加しなくても、`postgresql['component_databases']` フレームワークを使用してデータベースオブジェクト（ロール、データベース、拡張機能）を自動的に作成します。

1. **選択肢 B — 明示的な設定**：運用者が `gitlab.rb` の `postgresql['component_databases']` に関連するエントリを直接追加して、データベースを設定します。Omnibus は、このエントリが存在し有効になっている場合にのみ、データベースオブジェクトを作成します。

## 決定

Omnibus は OAK の高度なコンポーネント向けデータベースを自動的にプロビジョニング**しません**。運用者は、データベースを必要とする各コンポーネントについて、`gitlab.rb` の `postgresql['component_databases']` にエントリを追加し、データベースを明示的に設定する必要があります。

## 根拠

1. **パスワード管理の複雑さ**：自動プロビジョニングには、データベースパスワードを自動生成する（新しいシークレット保存の仕組み、ローテーション上の懸念、移行パスが発生します）か、`oak['components']['<name>']['database']['password']` などの OAK 固有設定を通じて運用者にパスワードの指定を求める必要があります。後者は `postgresql['component_databases']` を直接使用する場合と比べて UX 上の利点がほとんどない一方、間接参照が増えることでメンテナンスコストが高くなります。
1. **意図の明示により予期しないリソース使用を減らせる**：運用者が OAK コンポーネントを有効にしても、そのデータベースを既存の GitLab 管理下の PostgreSQL と同じ場所に配置する意図があるとは限りません。`postgresql['component_databases']` エントリを明示的に要求することで、データベースの配置、接続上限、リソースへの影響について意識的な判断を促します。これらは、リソースが限られた単一ノードデプロイでは特に重要です。
1. **すべてのコンポーネントが同一場所への配置に適しているわけではない**：高度なコンポーネントによっては、リソースや互換性の制約により、メインの PostgreSQL クラスターとの同一場所への配置が望ましくない場合があります。単一の自動化ルールですべてのケースに対応することはできません。自動化をデフォルトではなく推奨事項にすることで、当てはまらない可能性のある前提を組み込まずに済みます。
1. **限界的な利点が小さい**：`postgresql['component_databases']` フレームワークは、データベースオブジェクト作成の負荷が大きい処理をすでに担っています。`gitlab.rb` に数行追加する認知的負荷は小さく、明確なドキュメントによってさらに手間を減らせます。
1. **Geo レプリケーションの複雑さ**：Geo デプロイにはプライマリ／セカンダリサイトのロールとレプリケーション上の懸念があります。コンポーネントデータベースを自動的にレプリケーションすべきであることや、コンポーネントが読み取り専用レプリカをサポートしていることを前提にするのは安全ではありません。明示的な設定により、これらのトポロジー判断を運用者が制御できます。

## 結果

1. データベースを必要とする OAK の高度なコンポーネントを有効にする運用者は、`gitlab.rb` の `postgresql['component_databases']` に対応するエントリを追加する必要があります。OAK のドキュメントでは、この要件を明確に説明し、各コンポーネントについてコピー＆ペースト可能な例を提供する必要があります。
1. データベースを必要とする新しい OAK 互換コンポーネントを導入するコンポーネントチームは、そのコンポーネントのセットアップガイドに必要な `postgresql['component_databases']` 設定を記載する必要があります。

## 参考資料

1. [Issue#9997 - Omnibus-Adjacent Kubernetes のデータベース準備に関する設計戦略の定義](https://gitlab.com/gitlab-org/omnibus-gitlab/-/work_items/9997)
1. [MR!9440 - コンポーネントデータベースフレームワークの導入](https://gitlab.com/gitlab-org/omnibus-gitlab/-/merge_requests/9440)
1. [ADR-004：OAK におけるマルチノード Omnibus のサポート - データストレージに関する考慮事項](004_multi_node_omnibus_support.md)

---
title: "LabKit ADR 001: Go サービスの HTTP ルーティングアプローチ"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/labkit_north_star_strategy/decisions/001_http_routing_approach/
upstream_sha: 33ef35e4327874fd4153c5606125f5de47ff7924
translated_at: "2026-04-27T05:00:00Z"
translator: claude
stale: false
---

## コンテキスト

LabKit v2 の開発の一環として、[go-chi/chi](https://github.com/go-chi/chi) を GitLab のすべての Go サービスの
標準 HTTP ルーターとして採用するかどうか、および LabKit が基盤となるフレームワークを抽象化する `Router` インターフェースを
公開すべきかどうかを評価しました。

議論（[team-tasks#4311](https://gitlab.com/gitlab-org/quality/quality-engineering/team-tasks/-/issues/4311)）は、
シニアテクニカルリーダーと Go サービスのメンテナーが懸念を提起し、代替案を提案し、方向性を承認できる
オープンな議論でした。

ベンチマークを含む調査が [team-tasks#4294](https://gitlab.com/gitlab-org/quality/quality-engineering/team-tasks/-/issues/4294) で実施されました。

## 決定

1. LabKit はルーティングレイヤーを所有しません。LabKit v2 は任意の `net/http` 互換ハンドラーで動作する
   観測性ミドルウェア（トレーシング、アクセスロギング、相関 ID、ヘルスプローブ）を提供します。
   サービスは独自のルーターを持ちます。

1. LabKit に Router インターフェースはありません。元の `v2/httpserver.Router` インターフェースは削除されます。
   LabKit API の背後にルーターを抽象化することは、明確な利益なしにメンテナンスコストを追加します。
   [Hyrum's Law](https://www.hyrumslaw.com/) に従って、コンシューマーは必然的に具体的な実装に依存し、
   実際には抽象化を維持することが困難になります。

1. Go 1.22 以上の標準ライブラリ `ServeMux` はほとんどのサービスに十分です。最新の `ServeMux` は
   メソッドベースのルーティング（`GET /path`）とパスパラメーター（`/items/{id}`）をサポートしており、
   シンプルなルーティング要件を持つサービスのニーズに応えます。

1. 高度なルーティングが必要な場合は Chi を推奨します。ルートグルーピング、スコープ付きミドルウェア、
   またはサブルーターのマウントを必要とするサービスの場合、`go-chi/chi` が推奨の選択肢です。
   標準ライブラリのみに依存し、全体を通じて `http.Handler` を使用し、GitLab ですでに使用されています
   （Container Registry の移行、Zoekt インデクサー）。

1. LabKit のミドルウェアは任意の標準ライブラリ互換ルーターと構成できる必要があります。
   ミドルウェアのシグネチャは `func(http.Handler) http.Handler` を使用します。これは標準ライブラリの
   `ServeMux`、chi、または他の `http.Handler` 互換ルーターで動作します。

1. Lab Bench は高レベルの HTTP 抽象化を所有します。構造化されたサービスシャーシがルーティング抽象化を
   必要とする場合（機能分析、規約の強制、または 3 層サービスモデルのため）、その抽象化は LabKit ではなく
   Lab Bench に属します。

## 結果

- LabKit v2 を採用するサービスは特定のルーターにロックされません。複雑さのレベルに合ったルーターを選択します。
- LabKit の API サーフェスは小さく安定しています。ミドルウェアが拡張ポイントであり、ルーティングではありません。
- クロスカッティング関係（レートリミット、サーキットブレーカー、認証）は、特定のルーティングフレームワークに
  結びつくのではなく、任意のルーターと構成できるミドルウェアとして提供されます。
- すでに chi（Container Registry、Zoekt）または標準ライブラリ（Workhorse、Runner）を使用しているサービスは、
  LabKit v2 ミドルウェアを採用するためにルーティングを変更する必要はありません。
- ルーティング抽象化の将来の必要性が生じた場合、サービスシャーシの要件を完全に把握した状態で
  Lab Bench に導入でき、LabKit で早まって導入するよりも適切です。

## 代替案

1. LabKit でデフォルトのルーターとして chi を採用し、`Router` インターフェースを公開する。これは
   [team-tasks#4283](https://gitlab.com/gitlab-org/quality/quality-engineering/team-tasks/-/issues/4283) の
   元のプロポーザルでした。抽象化が明確な利益なしにメンテナンスコストを追加し、Hyrum's Law が
   実装の交換を実際には不可能にするため、却下されました。

1. すべてのサービスに chi を義務付ける。多くのサービスが標準ライブラリで完全に対応できるシンプルな
   ルーティングニーズを持っており、それを必要としないサービスに依存関係を義務付けることは「最小限の
   API サーフェス」原則に反するため、却下されました。

1. 何もしない。共有ミドルウェアの欠如により、[LabKit ノーススター戦略](../index.md)で参照されている
   DX サーベイの結果に文書化されているように、サービス全体で断片化した観測性セットアップにつながるため、
   却下されました。

## 参考資料

- [議論 Issue: team-tasks#4311](https://gitlab.com/gitlab-org/quality/quality-engineering/team-tasks/-/issues/4311)
- [ルーター調査: team-tasks#4294](https://gitlab.com/gitlab-org/quality/quality-engineering/team-tasks/-/issues/4294)
- [Lab Bench プロポーザル](https://docs.google.com/document/d/11Zj918LuZeY3fPcU50ZPhzJtcqzvyXaO0SDamW7cDc8/)
- [LabKit ノーススター戦略](../index.md)

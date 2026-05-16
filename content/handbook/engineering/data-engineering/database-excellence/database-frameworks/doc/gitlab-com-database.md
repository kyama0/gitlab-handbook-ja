---
title: 開発者向け GitLab.com データベースの操作方法
upstream_path: /handbook/engineering/data-engineering/database-excellence/database-frameworks/doc/gitlab-com-database/
upstream_sha: 3480299851f7e2243d4f08b75dac452f89929636
translated_at: "2026-04-27T10:00:00Z"
translator: claude
stale: false
lastmod: "2025-11-19T13:56:02-06:00"
---

## 開発者向け GitLab.com データベース操作ガイド

GitLab.com は大規模な PostgreSQL データベース（このドキュメントでは「データベース」と呼ぶ）によって動かされており、スケールの観点からの参照点としてよく使われます。私たちがアクセスできる最大の GitLab インストールがここにあるためです。

開発の観点から、このデータベースから統計や他のインサイトを収集することが必要になることがよくあります — 例えば、データベースレビュー中のクエリ最適化のためのインサイトを提供したり、製品や開発の意思決定を行うためにデータ分布についてより深く理解する必要がある場合などです。

この概要は、データベースへのアクセスを望む開発者を対象としており、まずこのタイプのアクセスを取得する方法についても説明します。

### アクセスの種類

開発者がデータベースに直接アクセスする方法はいくつかあります:

#### 本番環境への直接アクセス

##### 本番レプリカへのデータベース直接アクセス

これは最も直接的なアクセスタイプです。実際のデータベースのレプリカ（通常はライブトラフィックを処理している）への psql コンソールにアクセスできます。コンソールは読み取り専用で、15秒のステートメントタイムアウトを遵守する必要があります。

アクセス方法: [アクセスリクエスト](/handbook/security/corporate/end-user-services/access-requests/#individual-or-bulk-access-request)を申請し、*本番データベースコンソールアクセス*（ロール: `db-console`）を要求して永続的な SSH アクセスを受け取るか、または[Teleport を使用して一時アクセスをリクエスト](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/teleport/Connect_to_Database_Console_via_Teleport.md)してください（推奨）。SSH アクセスの設定については以下を参照してください。

##### 「アーカイブ」レプリカへのアクセス

この場合、「アーカイブ」レプリカへの psql コンソールにアクセスできます。これはライブトラフィックを処理しないデータベースのレプリカで、むしろ「探索的な」方法での使用に適しています（分析的なクエリにも適しています）。コンソールアクセスは読み取り専用で、15分のステートメントタイムアウトが適用されます。`show statement_timeout` コマンドをデータベースコンソールで実行して確認できます。

アクセス方法: [アクセスリクエスト](/handbook/security/corporate/end-user-services/access-requests/#individual-or-bulk-access-request)を申請し、*本番環境のアーカイブデータベースへのコンソールアクセス*（ロール: `db-console-archive`）を要求してください。SSH アクセスの設定については以下を参照してください。

##### Rails コンソールアクセス

Rails コンソールもデータベースへのアクセスに使用できます。これは通常、読み書き可能なコンソールであるため、細心の注意を払って使用してください。

アクセス方法: [アクセスリクエスト](/handbook/security/corporate/end-user-services/access-requests/#individual-or-bulk-access-request)を申請し、*本番環境の Rails コンソールアクセス*（ロール: `rails-console`）を要求して永続的な SSH アクセスを受け取るか、または[Teleport を使用して一時アクセスをリクエスト](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/teleport/Connect_to_Rails_Console_via_Teleport.md)してください（推奨）。SSH アクセスの設定については以下を参照してください。

##### 直接アクセスのための SSH 設定

直接アクセスを設定するには、*bastion* インスタンスをプロキシとして使用するように SSH を設定する必要があります:

1. [本番環境（gprd）へのアクセスのための bastion のセットアップ](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/bastions/gprd-bastions.md#console-access)
2. [ステージング環境（gstg）へのアクセスのための bastion のセットアップ](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/bastions/gstg-bastions.md#console-access)

これは `gprd` の psql と Rails コンソールへのアクセスのために `joe` という名前のユーザーの設定例です（この部分をご自身の GitLab メールユーザーに置き換えてください）:

```text
# GCP 本番 bastion ホスト
Host lb-bastion.gprd.gitlab.com
        User                    joe

Host gprd-rails
        User                    joe-rails
        StrictHostKeyChecking   no
        HostName                console-01-sv-gprd.c.gitlab-production.internal
        ProxyCommand            ssh lb-bastion.gprd.gitlab.com -W %h:%p

Host gprd-psql
        User                    joe-db
        StrictHostKeyChecking   no
        HostName                console-01-sv-gprd.c.gitlab-production.internal
        ProxyCommand            ssh lb-bastion.gprd.gitlab.com -W %h:%p

Host gprd-psql-archive
        User                    joe-db-archive
        StrictHostKeyChecking   no
        HostName                console-01-sv-gprd.c.gitlab-production.internal
        ProxyCommand            ssh lb-bastion.gprd.gitlab.com -W %h:%p
```

このセットアップで、ユーザー `joe` は次のコマンドを使用できます:

```sh
ssh gprd-rails        # rails コンソールを開く
ssh gprd-psql         # psql コンソールを開く
ssh gprd-psql-archive # レプリカの psql コンソールを開く
```

#### DatabaseLabs

##### postgres.ai を使用して psql でデータベースのシンクローンを操作する

postgres.ai へのアクセスがあり、データベースのシンクローンを操作する機能が提供されています。これには単一ユーザーのための完全に分離された読み書き可能なデータベースを提供するという利点があります。シンクローンは安価に作成でき、必要に応じて使用・削除できます。拡張設定では、シンクローン上の psql コンソールも使用できます。これはデータベースを使った最も柔軟な作業方法で、例えば必要に応じて新しいテーブルを作成することもできます（中間結果のためなど）。

#### クエリプランと最適化

クエリパフォーマンスを評価するために、以下のツールが利用可能です:

1. [Slack の ChatOps でクエリプランを取得する](https://docs.gitlab.com/ee/development/database/understanding_explain_plans.html#chatops)
1. [`#database-lab` Slack チャンネルを使ってデータベースのシンクローンを操作する](https://docs.gitlab.com/ee/development/database/understanding_explain_plans.html#database-lab)
1. [postgres.ai](https://postgres.ai/)（現在[評価中](https://gitlab.com/gitlab-org/database-team/team-tasks/-/issues/47)）を使ってクエリ最適化のためにシンクローンの操作に完全に没入する

### アクセスの設定やその他の質問はどこで助けを求められますか？

Slack の `#database` に連絡し、その後このページへの追記も検討してください。

### リソースとヒント

#### プロセス

機能開発ロードマップに収まらないデータベースの改善を推進するために、さまざまなプロダクトとエンジニアリングのプロセスが利用可能です。

1. [チームとしてのプランニング](https://gitlab.com/gitlab-com/Product/-/issues/2185)の活用
[この調査結果](https://gitlab.com/gitlab-org/gitlab/-/issues/326555#note_563868873)によると、既知のクエリパフォーマンス問題の50%以上がずっと前から特定されています。`チームとしてのプランニング` を活用して、プロダクトとこれらの Issue の優先順位付けを行ってください。このプロセスは[ステージグループへのエラーバジェットの導入](https://internal.gitlab.com/handbook/company/performance-indicators/product/#other-pi-pages)によって実装されています。
1. リリースプランニングでプロダクトと協力する際は、[技術的決定の優先順位付け](/handbook/engineering/development/principles/#prioritizing-technical-decisions)の指示に従ってください。これは[プロダクトハンドブックページ](/handbook/product/product-processes/#prioritization)にも反映されています。
1. 技術的負債の Issue については、[エンジニアリングアロケーション](/handbook/product/product-processes/#prioritization-framework)を検討してください。これは[プロダクトハンドブック](/handbook/product/product-processes/#prioritization-framework)にも反映されています。
1. 大規模な基本設計の課題に直面したときは、[アーキテクチャ](/handbook/engineering/architecture/)プロセスを念頭に置いてください。

#### ベストプラクティス

アプリケーションコードベースでよく見られる問題は、N+1 クエリ、CTE の不適切な使用、読み取り専用クエリが読み取りレプリカを活用していないことです。

1. N+1 クエリに関するガイダンス
   1. [クエリレコーダー](https://docs.gitlab.com/ee/development/database/query_recorder.html)
   1. [パフォーマンスガイドライン](https://docs.gitlab.com/ee/development/performance.html)
   1. [マージリクエストパフォーマンスガイドライン — クエリ数](https://docs.gitlab.com/ee/development/merge_request_concepts/performance.html#query-counts)
   1. [マージリクエストパフォーマンスガイドライン — キャッシュされたクエリ](https://docs.gitlab.com/ee/development/merge_request_concepts/performance.html#cached-queries)
1. [CTE を賢く使う](https://docs.gitlab.com/ee/development/merge_request_concepts/performance.html#use-ctes-wisely)
1. [可能な限り読み取りレプリカを使う](https://docs.gitlab.com/ee/development/merge_request_concepts/performance.html#use-read-replicas-when-possible)

#### 知識共有

1. 動画録画 — [非効率な DB クエリの調査テクニック](https://www.youtube.com/watch?v=cKQr9o2ttqA)。強くお勧めします！
1. トラブルシューティングのための [PostgreSQL スロークエリログでの Elasticsearch の使用](https://gitlab.com/gitlab-com/runbooks/-/merge_requests/3361)。
1. 潜在的なサブ最適クエリを特定するための[スロークエリチャート](https://dashboards.gitlab.net/d/RZmbBr7mk/gitlab-triage?viewPanel=1352&orgId=1&refresh=1h&from=now-90d&to=now)。

#### ツール

1. 本番相当のデータでテストするための [Postgres.ai](https://docs.gitlab.com/ee/development/database/database_lab.html)。
1. [クエリプランと最適化](/handbook/engineering/data-engineering/database-excellence/database-frameworks/doc/gitlab-com-database/#query-plans-and-optimization)。

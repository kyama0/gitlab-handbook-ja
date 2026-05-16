---
title: データベースヘルプワークフロー
description: "データベース関連のインシデントや緊急事態でヘルプを要請するための基本的なワークフロー"
upstream_path: "/handbook/engineering/infrastructure-platforms/data-access/help/"
upstream_sha: "6a459a3ca969603754a3b5133342edb804d3012c"
translated_at: "2026-04-28T16:26:29Z"
translator: claude
stale: false
lastmod: "2025-11-19T13:56:02-06:00"
---

このガイドは、Reliability エンジニアと Support エンジニアがデータベース関連の緊急事態で必要なヘルプを迅速かつ簡単に見つけるためのものです。


{{% alert title="注意" %}}
このページは緊急事態中にリソースを見つける際の支援を目的としています。緊急事態でない場合（つまり S1/S2 以外の Issue の場合）は、チームがトリアージできるように適切なラベルが付いた Issue を作成してください。
{{% /alert %}}


### 緊急でない場合

1. 適切なチームにトリアージされるよう Issue にラベルを付けてください:

   - 運用または設定の問題には `~"team::Database Reliability"` ラベルを付けてください
   - Omnibus/Charts のパッケージ化された Postgres に関連する問題には `~"group::distribution"` ラベルを付けてください
   - アプリケーションの問題には、その機能を担当するチームのラベルを付けてください
   - 確信がない場合は、以下のガイドを参照して適切なチームを特定してください

1. Issue がブロッキングであるかエスカレーションが必要な場合:

   - アプリケーションの問題については、関連機能を担当するチームのチャンネルに詳細なメッセージを投稿してください
   - 運用または設定の問題については [#g_infra_database_reliability](https://gitlab.enterprise.slack.com/archives/C02K0JTKAHJ) に投稿してください（内部）
   - Omnibus/Charts のパッケージ化された Postgres に関連する問題については [#g_distribution](https://gitlab.enterprise.slack.com/archives/C1FCTU4BE) に投稿してください（内部）

### 1. 開始

緊急事態が以下のような設定または操作に関連する場合:

- Postgres の運用に関連する緊急事態
- 接続エラー
- レプリケーションエラー
- SSL エラー

ステップ [2. 設定エラー](#2-configuration-or-operational-errors) に進んでください。

そうでない場合は、ステップ [3. アプリケーションエラー](#3-application-errors) に進んでください。

### 2. 設定または運用エラー {#2-configuration-or-operational-errors}

緊急事態が gitlab.com または Dedicated 顧客の継続的なインシデントに関連する場合は、[DBRE エスカレーションプロセス](/handbook/engineering/data-engineering/database-excellence/database-operations/dbre-escalation-process/) に従ってください。

緊急事態がセルフマネージドの顧客に関連する場合は、[#g_distribution](https://gitlab.enterprise.slack.com/archives/C1FCTU4BE) の [Distribution チーム](/handbook/engineering/infrastructure-platforms/gitlab-delivery/distribution/)（内部）に連絡し、セルフマネージドの設定を管理してもらいます。

### 3. アプリケーションエラー {#3-application-errors}

緊急事態が単一のクエリ、ページ、またはエンドポイントに関連する場合、例えば:

- ページ（またはページのクラス）が 500 エラーになり、Sentry が PG タイムアウトエラーとして識別する
- 長時間実行されているトランザクションが Sidekiq ワーカーからのものとして識別される
- 単一のクエリが本番環境で 10 秒かかり、サイトを遅くしていることが識別される
- マイグレーションが失敗しているまたは緊急事態が発生している

ステップ [4. 単一ソース Issue](#4-single-source-issues) に進んでください。

そうでない場合は [5. 広範な Issue](#5-widespread-issues) に進んでください。

### 4. 単一ソース Issue {#4-single-source-issues}

緊急事態が機能カテゴリを含むエラーから発生している場合は [8. 機能カテゴリに基づいてチームに連絡する](#8-reach-out-to-a-team-based-on-feature-category) に進んでください。特定の機能の SME として、バックエンドエンジニアは通常、関連するデータベースパターンに精通しており、Issue がデータベースアクションに関連している場合でも、自分たちの機能に関連する問題を解決するのに最も適しています。

緊急事態がマイグレーションに関連する場合は [6. マイグレーションソースの特定](#6-determine-migration-source) を参照してください。

緊急事態が Rails コントローラ、Sidekiq ワーカー、API エンドポイント、またはバックグラウンドマイグレーションに関連する場合は、[機能カテゴリ化ガイド](https://docs.gitlab.com/ee/development/feature_categorization/)の詳細を使用して機能カテゴリを特定し、[8. 機能カテゴリに基づいてチームに連絡する](#8-reach-out-to-a-team-based-on-feature-category) に進んでください。

ソースの特定に支援が必要な場合は [9. 支援のエスカレーション](#9-escalating-assistance) に進んでください。

### 5. 広範な Issue {#5-widespread-issues}

データベース関連のインシデントと考えられる原因により、アプリケーション（または主要なコンポーネント、例：Sidekiq）がダウンまたは応答不能になっている場合は、「全員出動」です。

1. 専門的なヘルプを求めるために [#database](https://gitlab.enterprise.slack.com/archives/C3NBYFJ6N)、[#g_database](https://gitlab.enterprise.slack.com/archives/CNZ8E900G)、[#g_infra_database_reliability](https://gitlab.enterprise.slack.com/archives/C02K0JTKAHJ) チャンネル（内部）で `@db-team`（データベース機能）または `@dbre`（データベース信頼性）グループハンドルを使用して連絡してください。

### 6. マイグレーションソースの特定 {#6-determine-migration-source}

最も簡単な方法は、gitlab リポジトリから `git` を使用することです:

```sh
git log --first-parent {path/to/migration.rb}
```

これにより、マイグレーションが追加されたマージリクエストへのリンクを含む出力が得られるはずです。

明確な答えが得られない場合は、マイグレーションに関係するテーブルを確認して、チームを推測できます。[7. テーブル名に基づいてソースを特定する](#7-determine-a-source-based-on-a-table-name) を参照してください。

どのチームに連絡すればよいかまだ不明な場合は [9. 支援のエスカレーション](#9-escalating-assistance) に進んでください。

### 7. テーブル名に基づいてソースを特定する {#7-determine-a-source-based-on-a-table-name}

各データベーステーブルには、対応するグループを特定するために使用できるドキュメントファイルがあります。

1. https://gitlab.com/gitlab-org/gitlab/-/tree/master/db/docs に `{table_name}.yml` という名前のファイルを探してください
1. ファイル内で関連する `feature_categories` のリストを見つけてください
1. 機能カテゴリを使用して [8. 機能カテゴリに基づいてチームに連絡する](#8-reach-out-to-a-team-based-on-feature-category) に進んでください
1. カテゴリが複数ある場合は、リストから一つ選んでそのチームから始めてください
1. どのチームに連絡すればよいかまだ不明な場合は [9. 支援のエスカレーション](#9-escalating-assistance) に進んでください。Issue を引き起こしているテーブルと、それが関係していると考える理由の詳細を必ず含めてください。

### 8. 機能カテゴリに基づいてチームに連絡する {#8-reach-out-to-a-team-based-on-feature-category}

緊急事態がデータベースに関連していたり、データベース関連の言葉を含んでいても、最初のステップはアプリケーションのその領域を担当するチームに連絡することです。その領域を担当するチームを把握するための最も簡単な方法は、機能カテゴリによるものです。

1. 機能カテゴリを使用して [カテゴリとチームのマッピング](/handbook/product/categories/#categories-a-z) で対応するグループを確認します
1. そのチームの Slack チャンネルに連絡し、支援のためにチームのマネージャーを `@mention` します
1. チームが応答しない場合は [9. 支援のエスカレーション](#9-escalating-assistance) に進んでください。

### 9. 支援のエスカレーション {#9-escalating-assistance}

緊急事態をエスカレーションする際は、できるだけ具体的で詳細な情報を提供してください。[コミュニケーションガイドライン](/handbook/communication/#writing-style-guidelines)に従い、可能な限り頭字語を避けてください。

必ず含める情報:

- Issue、Sentry エラー、インシデント、または Zendesk チケットへのリンク
- エラーメッセージのテキスト
- 該当するグラフへのリンク
- クエリ、マイグレーション、または Issue に関する詳細

#### GitLab.com または Dedicated の継続的なインシデントの場合

1. 開発オンコールが追加のデータベースの専門知識を必要とする場合は [#database](https://gitlab.enterprise.slack.com/archives/C3NBYFJ6N) で連絡してください
1. 15 分以内に応答がない場合、またはリクエストが緊急の場合は、元のメッセージのスレッドで `@db-team`（アプリケーション）または `@dbre`（インフラストラクチャ/オペレーション）にタグを付けてください
1. 15 分以内に ping への応答がなく、リクエストが緊急の場合は、Slack を使用してデータベースまたは DBRE マネージャーの電話番号を見つけ、テキストまたは電話で連絡してください。

#### サポートエスカレーションの場合

1. [ヘルプリクエスト Issue](https://gitlab.com/gitlab-com/enablement-sub-department/section-enable-request-for-help/) を申請してください
1. [#database](https://gitlab.enterprise.slack.com/archives/C3NBYFJ6N) で連絡し、ヘルプリクエストへのリンクを含めてください

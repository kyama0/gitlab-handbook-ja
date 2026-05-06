---
title: データベース Issue の特定
description: "データベース Issue の DRI を特定するための基本ガイド"
upstream_path: /handbook/engineering/data-engineering/database-excellence/database-frameworks/identifying-database-issues/
upstream_sha: 3480299851f7e2243d4f08b75dac452f89929636
translated_at: "2026-04-27T00:00:00Z"
translator: claude
stale: false
---

このガイドは、データベース Issue を調査する際に DRI チームを特定する必要がある方を対象としています。

## マイグレーション

最も簡単な方法は、[GitLab リポジトリ](https://gitlab.com/gitlab-org/gitlab)から `git` を使用する方法です。

```sh
git log --first-parent {path/to/migration.rb}
```

`path/to/migration.rb` のコードは、マイグレーションが失敗したときのバックトレースに記載されています。マイグレーションコードファイルは日時スタンプで始まり、[db/migrate/](https://gitlab.com/gitlab-org/gitlab/-/tree/master/db/post_migrate) または [db/post-migrate/](https://gitlab.com/gitlab-org/gitlab/-/tree/master/db/post_migrate) にあります。または、顧客からのログ出力に日時スタンプ（例: `20240113071052`）が見つかれば、それはこれらの場所のいずれかのマイグレーションファイル名に一意に対応します。

これにより、マイグレーションが追加されたマージリクエストへのリンクを含む出力が得られます。

明確な回答が得られない場合は、マイグレーションに関係するテーブルを確認して、チームを推測することができます。[テーブル名によるチームの特定](#テーブル名によるチームの特定)を参照してください。

## クエリ

クエリソースを特定するのは少し複雑です。クエリは多くの場所から来るためです。

Issue が Rails コントローラー、Sidekiq ワーカー、API エンドポイント、またはバックグラウンドマイグレーションに関連している場合は、[機能カテゴリ化ガイド](https://docs.gitlab.com/ee/development/feature_categorization/)の詳細を使用して機能カテゴリを特定し、[ルックアップでリストされているチームに連絡する](#機能カテゴリからチームを取得する)でチームに連絡してください。

機能カテゴリを含むソースがない場合は、クエリ内のテーブル名に基づいて推測する必要があります。[テーブル名によるチームの特定](#テーブル名によるチームの特定)に従ってください。

## テーブル名によるチームの特定

各データベーステーブルには、対応するグループを特定するために使用できるドキュメントファイルがあります。

1. [データベースディクショナリ](https://gitlab.com/gitlab-org/gitlab/-/tree/master/db/docs)の `{table_name}.yml` という名前の対応するファイルを探す
1. ファイル内で、関連する `feature_categories` のリストを見つける
1. 機能カテゴリを使用して、[ルックアップでリストされているチームに連絡する](#機能カテゴリからチームを取得する)
1. カテゴリが複数ある場合は、リストから1つを選んでそのチームから始める

## 機能カテゴリからチームを取得する

機能カテゴリがある場合、連絡するチームを特定する最善の方法は、[機能カテゴリルックアップ](/handbook/product/categories/lookup/)を使用することです。

---
title: "SaaS ユーザーの探し方"
description: "特定の条件を満たす SaaS リサーチ参加者をどのように対象とするか"
upstream_path: /handbook/product/ux/experience-research/finding-saas-users/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-13T12:00:00Z"
translator: claude
stale: false
lastmod: "2026-02-12T13:14:13+00:00"
---

## SaaS (GitLab.com) ユーザーの探し方

### データウェアハウスでユーザーを探すタイミング

[リサーチスタディへの参加者リクルート](/handbook/product/ux/experience-research/recruiting-participants) のために、Respondent.io やソーシャルメディア経由でのリクルートなど、さまざまな方法を持っています。しかし、これらの方法が適切でなく、自己報告や推測されたデータではなく、客観的な使用データに裏付けられた非常に特定の条件に基づいてユーザーを見つける必要がある状況もあります。これを行う最善の方法は、データウェアハウスにある使用状況や属性データを活用することです。

**データウェアハウス経由でユーザーを探すのが適切な例（網羅的ではありません）:**

- 単純にステージのユーザーであるだけでなく、機能やステージの一定の使用量を持つユーザーを探している
- GitLab 上の特定のタイプのオブジェクトまたはコンテンツとやりとりしたユーザーを探している（例: epic、スニペット、Wiki など）
- ユーザーが活動しているグループやプロジェクトのより広い文脈を理解する必要がある（例: 30 ユーザー未満のグループのユーザー、Gold プランのグループのユーザー、リポジトリ使用のないプロジェクトのユーザー）

### 前提条件

1. データウェアハウスへのクエリには SQL（Structured Query Language）を使います。Web 上では SQL を学べる無料のガイドが数えきれないほどあります。SQL にはさまざまなフレーバーがありますが、私たちが使うのは [Snowflake](https://docs.snowflake.com/en/index) です。とはいえ、ほとんどの基本機能は主要な SQL のバリアントの間で一貫しているため、Snowflake 固有のリソースを探す必要は感じなくてよいでしょう。
1. データウェアハウスにクエリを実行するには、Sisense（旧 Periscope）への Editor アクセスが必要です。これには [アクセスリクエスト](/handbook/security/corporate/end-user-services/access-requests/access-requests/) を完了する必要があります。
1. [プロダクトマネージャー向けデータ](/handbook/enterprise-data/organization/programs/data-for-product-managers/) では、クエリの記述と実行に使う Sisense の SQL Explorer へのアクセス方法、およびウェアハウスの構造の高レベルな概要を説明しています。
1. データチームは [個々のデータウェアハウステーブル](https://dbt.gitlabdata.com/#!/overview) を dbt というツールを使って文書化しています。一部のテーブルはより良く文書化されており目的の説明や異なるカラムの説明が含まれていますが、残念ながらそうでないものもあります。とはいえ、ドキュメントは時間とともに改善していきます。

### SaaS 固有のテーブル

データウェアハウスには、さまざまな領域のデータが含まれています。私たちの目的では、ユーザー情報や GitLab.com (SaaS) の使用状況の詳細を示すデータに関心があります。

SaaS 関連のデータを格納するほとんどのテーブルは `gitlab_dotcom_*` のプレフィックスを使いますが、すべてではありません。良い出発点は、このプレフィックスを持つ異なるテーブルを探索し、どのデータを含むかを見ることです。

### ユーザーテーブル

SaaS の全体的なユーザーテーブルは `gitlab_dotcom_users_xf` です。これには、アカウント作成日、アクティブ日数、役割、最も高い有料プラン（あれば）など、個々のユーザーの最も完全な情報が含まれます。これが出発点であり、信頼できる情報源です。このテーブルの `user_id` 変数は [GitLab.com](https://gitlab.com) ユーザーの主要な識別子であり、他のテーブルでもレコードが関連付けられているユーザーを識別するために使われます。たとえば、`gitlab_dotcom_merge_requests_xf` テーブルは GitLab.com で作成された MR のレコードを格納し、特定の MR の作成者を識別するための `author_id` というカラムを含みます。この `author_id` は GitLab.com のユーザー ID であり、`user_id` 変数を使ってそのマージリクエストの作成者をユーザーテーブル（または他のテーブル）のレコードに結びつけることができます。

このテーブルを使うことで、過去 7 日間にアカウントを作成した 100 人のユーザーの GitLab.com ユーザー ID を取得できます:

```sql
SELECT user_id FROM analytics.gitlab_dotcom_users_xf
WHERE account_age >= 7
LIMIT 100
```

### オブジェクトテーブル（プロジェクト、Issue、マージリクエストなど）

GitLab の「トップレベル」のオブジェクトすべての記録を含むテーブルがあります（以下はその一部です）:

- projects
- groups
- issues
- merge requests
- epics

GitLab.com で作成できるものには、おそらくテーブルがあります。これらのテーブルは他の SaaS テーブルと同じ構造に従います。例:

- `gitlab_dotcom_issues_xf`
- `gitlab_dotcom_epics_xf`
- `gitlab_dotcom_merge_requests_xf`

これらのテーブルのレコードは完全な忠実度ではありません。インターフェースでオブジェクトが表示されるときに表示されるすべてのデータが含まれているとは限りません。GitLab.com の UI で Issue を読み込むと、コメントやさまざまなメタデータが表示されます。これらのデータの多くはウェアハウスの Issue テーブルには見つからず、アクセス不可能であるか、テーブルを適切なサイズに保つために別のテーブルに保存されています。さらに、本来プライベートとなるデータはウェアハウスに公開していません。たとえば、GitLab.com で公開されている Issue のタイトルや説明は閲覧できますが（Web で見るのと同じです）、非公開の Issue についてはその情報を見ることはできません。

これらのテーブルは、ユーザーまたはグループがいくつ作成したか、または操作したかを理解したい場合や、特定のタイプのエンティティ（たとえば epic に昇格された Issue）から始めて、そのエンティティとやりとりしたユーザーを確認したい場合に便利です。これらのテーブルはイベントレベルのデータを提供しないため、ユーザーがいつ、どのように何かを作成または操作したかを正確に判断できるとは限らず、行った（または行わなかった）ことだけがわかります。

例: Issue のウェイトについて調査していて、過去 30 日間にウェイトを割り当てた Issue を作成した 100 人のユーザーのユーザー ID を見つけたいとします。また、その期間に作成した Issue 数も知りたいとします。次のクエリを使います:

```sql
SELECT
  author_id,
  COUNT(1) as num_issues
FROM analytics.gitlab_dotcom_issues_xf
WHERE
  weight IS NOT NULL
  AND issue_created_at >= DATEADD(day, -30, current_timestamp)
GROUP BY 1
LIMIT 100
```

### ステージ月間アクティブユーザー

特定のイベントレコードにユーザー ID を記録していないため、特定のユーザーが特定のアクションをいつ完了したかを正確に確認することはできません。しかし、`gitlab_dotcom_monthly_stage_active_users` テーブルには、ユーザーがさまざまな高レベルの機能やステージとどれだけ頻繁に（月あたりの回数や日数で）やりとりするかを記録しています。これは、特定の機能やステージの「ライト」または「ヘビー」なユーザーを探している場合、または最低限の最近の使用量があるユーザーを確保したい場合に有用です。

例: 特定の月（より正確には、その月の直近 28 日間）に CI パイプラインと少なくとも 17 回、または 9 日以上やりとりした 50 人のユーザーのユーザー ID を見つける必要があるとします:

```sql
SELECT user_id
FROM analytics.gitlab_dotcom_monthly_stage_active_users
WHERE
 event_name='ci_pipelines'
 AND (event_count >= 17 OR event_day_count >= 9)
 AND smau_month='2020-04-01'
LIMIT 50
```

### ヘルプの得方

- 特定のデータがウェアハウスのどこにあるかについての質問は、Slack の #data チャンネルで対応してくれます。
- 非常に詳細な SQL クエリが必要な場合は、[Product Data Insights チーム](/handbook/product/groups/product-analysis/#working-with-us) に連絡して、支援できる余裕があるか確認できます。
